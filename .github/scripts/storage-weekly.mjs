#!/usr/bin/env node
/**
 * Logos storage weekly update — deterministic worker.
 *
 * Runs inside GitHub Actions on emizzle/roadmap (see .github/workflows/storage-weekly.yml).
 * Everything judgement-free lives here; the claude.ai routine that dispatches this
 * workflow writes the Highlights bullets afterwards (see .github/storage-weekly-routine.md).
 *
 * Steps (mirroring the original routine):
 *   1. Establish the reported week (the ISO week before the current one, UTC).
 *   2. Find last week's HackMD note BY TITLE (exact, then tolerant fallback).
 *      Guard: stop if the note is an unfilled skeleton.
 *   3. Branch off upstream logos-co/roadmap v4, generate the update file, push to fork.
 *      Guards: stop if the branch or an open upstream PR already exists.
 *   4. Emit the one-click PR compare URL + facts to $GITHUB_OUTPUT / $GITHUB_STEP_SUMMARY.
 *   5. Create the upcoming week's skeleton HackMD note (no-op if it already exists).
 *
 * Env:
 *   HACKMD_TOKEN  (required)  HackMD user token — never printed.
 *   GITHUB_TOKEN  (optional)  used for the upstream open-PR check.
 *   DRY_RUN       'true' to skip the git push and the HackMD note creation.
 *
 * Exit codes: 0 = success; 1 = guard stop or error (status in $GITHUB_OUTPUT).
 */

import { execFileSync } from 'node:child_process';
import { appendFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

const HACKMD_BASE = 'https://api.hackmd.io/v1';
const TEAM_PATH = 'codex-storage';
const WEEKLY_FOLDER_ID = 'd6af4a7d-f414-4301-9859-5554b64e181c'; // "Weekly updates"
const UPSTREAM = 'logos-co/roadmap';
const FORK = 'emizzle/roadmap';
const BASE_BRANCH = 'v4';
const UPDATES_DIR = 'content/storage/updates';
const NOTE_SUFFIX = 'Logos storage weekly';
const HIGHLIGHTS_MARKER = 'HIGHLIGHTS-PENDING';

// ---------------------------------------------------------------------------
// Date helpers (all UTC)
// ---------------------------------------------------------------------------

export const DAY_MS = 24 * 60 * 60 * 1000;

/** Monday 00:00 UTC of the ISO week containing `date`. */
export function mondayOfISOWeek(date) {
  const d = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
  const dow = (d.getUTCDay() + 6) % 7; // Mon=0 .. Sun=6
  return new Date(d.getTime() - dow * DAY_MS);
}

/** ISO week number and ISO week-year for `date`. */
export function isoWeek(date) {
  const monday = mondayOfISOWeek(date);
  const thursday = new Date(monday.getTime() + 3 * DAY_MS);
  const isoYear = thursday.getUTCFullYear();
  const jan4 = new Date(Date.UTC(isoYear, 0, 4));
  const week1Monday = mondayOfISOWeek(jan4);
  const week = Math.round((monday.getTime() - week1Monday.getTime()) / (7 * DAY_MS)) + 1;
  return { week, isoYear };
}

export function addDays(date, days) {
  return new Date(date.getTime() + days * DAY_MS);
}

/** YYYY-MM-DD */
export function isoDate(date) {
  return date.toISOString().slice(0, 10);
}

/** "Jun 22" — short month, no zero-padded day (matches existing update files). */
export function humanDate(date) {
  const month = date.toLocaleString('en-US', { month: 'short', timeZone: 'UTC' });
  return `${month} ${date.getUTCDate()}`;
}

/**
 * All facts derived from "today":
 * reported week = the ISO week that ended most recently (the week before today's).
 */
export function weekFacts(today) {
  const currentMonday = mondayOfISOWeek(today);
  const reportedMonday = addDays(currentMonday, -7);
  const reportedFriday = addDays(reportedMonday, 4);
  const { week, isoYear } = isoWeek(reportedMonday);
  const publishMonday = addDays(reportedMonday, 7); // filename/title date
  const upcoming = isoWeek(currentMonday);
  return {
    reported: {
      week,
      isoYear,
      monday: reportedMonday,
      friday: reportedFriday,
      publishDate: isoDate(publishMonday),
      heading: weekHeading(week, isoYear, reportedMonday, reportedFriday),
      noteTitle: `${isoDate(publishMonday)} ${NOTE_SUFFIX}`,
      branch: `weeklies/storage-weekly-week-${String(week).padStart(2, '0')}`,
      fileName: `${isoDate(publishMonday)}.md`,
    },
    upcoming: {
      week: upcoming.week,
      isoYear: upcoming.isoYear,
      monday: currentMonday,
      friday: addDays(currentMonday, 4),
      publishDate: isoDate(addDays(currentMonday, 7)),
      heading: weekHeading(upcoming.week, upcoming.isoYear, currentMonday, addDays(currentMonday, 4)),
      noteTitle: `${isoDate(addDays(currentMonday, 7))} ${NOTE_SUFFIX}`,
    },
  };
}

export function weekHeading(week, year, monday, friday) {
  return `## Week ${week} ${year} (Mon ${humanDate(monday)} - Fri ${humanDate(friday)}, ${year})`;
}

// ---------------------------------------------------------------------------
// HackMD API
// ---------------------------------------------------------------------------

async function hackmd(path, options = {}) {
  const res = await fetch(`${HACKMD_BASE}${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${process.env.HACKMD_TOKEN}`,
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });
  if (!res.ok) {
    throw new Error(`HackMD ${options.method ?? 'GET'} ${path} failed: HTTP ${res.status}`);
  }
  return res.json();
}

/**
 * Find a weekly note by title: exact match first, then tolerant fallback
 * (title contains both the date and the weekly suffix — stray prefixes happen).
 * Returns { note, fuzzy } or { error } when zero/ambiguous.
 */
export function findNoteByTitle(notes, title, dateStr) {
  const exact = notes.filter((n) => n.title === title);
  if (exact.length === 1) return { note: exact[0], fuzzy: false };
  if (exact.length > 1) return { error: `multiple notes titled exactly "${title}"`, ambiguous: true };
  const fuzzy = notes.filter((n) => n.title?.includes(dateStr) && n.title?.includes(NOTE_SUFFIX));
  if (fuzzy.length === 1) return { note: fuzzy[0], fuzzy: true };
  if (fuzzy.length === 0) return { error: `no note matching "${title}"`, none: true };
  return { error: `ambiguous: ${fuzzy.length} notes match date ${dateStr} + "${NOTE_SUFFIX}"`, ambiguous: true };
}

export function noteUrl(note) {
  return note.publishLink || `https://hackmd.io/${note.id}`;
}

/**
 * Guard: a note counts as filled when at least one achieved/next label has an
 * indented sub-bullet beneath it.
 */
export function noteIsFilled(markdown) {
  let underLabel = false;
  for (const line of markdown.split('\n')) {
    if (/^[-*]\s*\*\*\s*(achieved|next)\s*:?\s*\*\*/i.test(line)) {
      underLabel = true;
      continue;
    }
    if (underLabel && /^\s+[-*+]\s+\S/.test(line)) return true;
    if (/^\S/.test(line)) underLabel = false;
  }
  return false;
}

// ---------------------------------------------------------------------------
// Markdown transforms
// ---------------------------------------------------------------------------

/** Body of the note after its `## Week ...` heading (frontmatter + heading dropped). */
export function noteBody(markdown) {
  const lines = markdown.split('\n');
  const headingIdx = lines.findIndex((l) => /^##\s/.test(l) && !/^###/.test(l));
  if (headingIdx === -1) throw new Error('note has no "## Week ..." heading');
  return lines.slice(headingIdx + 1).join('\n').replace(/^\n+/, '');
}

/**
 * Normalise labels to exactly `- **achieved:**` / `- **next:**` (colon inside
 * the bold, none outside). Only rewrites labels that exist — never invents them.
 */
export function normalizeLabels(markdown) {
  return markdown.replace(
    /^([ \t]*)[-*][ \t]*\*\*[ \t]*(achieved|next)[ \t]*:?[ \t]*\*\*[ \t]*:?/gim,
    (_, indent, label) => `${indent}- **${label.toLowerCase()}:**`
  );
}

/** Drop an existing `### Highlights` section (up to the next heading), if any. */
export function stripHighlights(markdown) {
  return markdown.replace(/^### Highlights\s*\n[\s\S]*?(?=^#{2,3}\s)/m, '');
}

/** The complete update file for the repo. */
export function buildUpdateFile(facts, body, sourceUrl) {
  const r = facts.reported;
  return `---
title: "${r.publishDate} ${NOTE_SUFFIX}"
tags:
  - "storage-updates"
date: ${isoDate(r.monday)}
draft: false
---

${r.heading}

### Highlights

<!-- ${HIGHLIGHTS_MARKER} source: ${sourceUrl} -->

${normalizeLabels(stripHighlights(body)).trim()}
`;
}

/** Blank skeleton note for the upcoming week, from the reported note's sections. */
export function buildSkeleton(facts, reportedNoteContent) {
  const u = facts.upcoming;
  const sections = reportedNoteContent
    .split('\n')
    .filter((l) => /^###\s+\[/.test(l));
  if (sections.length === 0) throw new Error('no "### [Section](url)" headings found in source note');
  const body = sections
    .map((h) => `${h}\n\n- **achieved:**\n- **next:**`)
    .join('\n\n');
  return `---
title: "${u.publishDate} ${NOTE_SUFFIX}"
tags:
  - "storage-updates"
date: ${isoDate(u.monday)}
draft: false
---

${u.heading}

${body}
`;
}

// ---------------------------------------------------------------------------
// PR body / compare URL
// ---------------------------------------------------------------------------

export function prTitle(facts) {
  const r = facts.reported;
  return `Storage weekly: week ${r.week} ${r.isoYear}`;
}

export function prBody(facts, sourceUrl) {
  const r = facts.reported;
  return [
    `Weekly storage update for week ${r.week} ${r.isoYear} (Mon ${humanDate(r.monday)} - Fri ${humanDate(r.friday)}, ${r.isoYear}).`,
    '',
    `Source note: ${sourceUrl}`,
    '',
    '⚠️ The Highlights section was generated and needs review before merge.',
    '',
    '/cc @gmega — please review.',
  ].join('\n');
}

export function compareUrl(facts, sourceUrl) {
  const r = facts.reported;
  return (
    `https://github.com/${UPSTREAM}/compare/${BASE_BRANCH}...emizzle:roadmap:${encodeURIComponent(r.branch)}` +
    `?expand=1&title=${encodeURIComponent(prTitle(facts))}&body=${encodeURIComponent(prBody(facts, sourceUrl))}`
  );
}

// ---------------------------------------------------------------------------
// Git / GitHub helpers
// ---------------------------------------------------------------------------

function git(...args) {
  return execFileSync('git', args, { encoding: 'utf8' }).trim();
}

function forkBranchExists(branch) {
  return git('ls-remote', 'origin', `refs/heads/${branch}`) !== '';
}

async function upstreamOpenPr(branch) {
  const headers = { Accept: 'application/vnd.github+json' };
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  const res = await fetch(
    `https://api.github.com/repos/${UPSTREAM}/pulls?state=open&head=emizzle:${encodeURIComponent(branch)}`,
    { headers }
  );
  if (!res.ok) throw new Error(`GitHub PR check failed: HTTP ${res.status}`);
  const prs = await res.json();
  return prs.length > 0 ? prs[0].html_url : null;
}

// ---------------------------------------------------------------------------
// Reporting
// ---------------------------------------------------------------------------

function setOutput(key, value) {
  if (!process.env.GITHUB_OUTPUT) return;
  const delim = `EOF_${key}_${value.length}`;
  appendFileSync(process.env.GITHUB_OUTPUT, `${key}<<${delim}\n${value}\n${delim}\n`);
}

function summary(markdown) {
  console.log(markdown);
  if (process.env.GITHUB_STEP_SUMMARY) {
    appendFileSync(process.env.GITHUB_STEP_SUMMARY, `${markdown}\n`);
  }
}

/** Guard stop: record a machine-readable status, summarise, exit non-zero. */
function stop(status, message) {
  setOutput('status', status);
  summary(`## ⛔ Stopped: \`${status}\`\n\n${message}`);
  process.exit(1);
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  if (!process.env.HACKMD_TOKEN) throw new Error('HACKMD_TOKEN is not set');
  const dryRun = process.env.DRY_RUN === 'true';
  const warnings = [];

  // Step 1 — establish the reported week
  // FAKE_TODAY (YYYY-MM-DD) is for local dry-run testing only — never set in CI.
  const facts = weekFacts(process.env.FAKE_TODAY ? new Date(`${process.env.FAKE_TODAY}T12:00:00Z`) : new Date());
  const r = facts.reported;
  summary(`# Storage weekly — week ${r.week} ${r.isoYear}${dryRun ? ' (DRY RUN)' : ''}`);
  summary(`Reported week: Mon ${isoDate(r.monday)} - Fri ${isoDate(r.friday)} · file \`${r.fileName}\` · branch \`${r.branch}\``);

  // Step 2 — find last week's HackMD note by title
  const notes = await hackmd(`/teams/${TEAM_PATH}/notes`);
  const found = findNoteByTitle(notes, r.noteTitle, r.publishDate);
  if (found.error) stop('stopped:note-not-found', `Looking for "${r.noteTitle}": ${found.error}`);
  if (found.fuzzy) {
    warnings.push(`⚠️ Title fallback match used: note is titled "${found.note.title}", expected "${r.noteTitle}".`);
  }
  const sourceUrl = noteUrl(found.note);
  const note = await hackmd(`/teams/${TEAM_PATH}/notes/${found.note.id}`);
  if (!noteIsFilled(note.content)) {
    stop('stopped:empty-note', `The note "${found.note.title}" (${sourceUrl}) has no sub-bullets under any achieved/next label — the team has not filled it in yet.`);
  }

  // Step 3 — guards, then generate the update file on a branch off upstream v4
  if (forkBranchExists(r.branch)) {
    stop('stopped:duplicate-branch', `Branch \`${r.branch}\` already exists on ${FORK}.`);
  }
  const openPr = await upstreamOpenPr(r.branch);
  if (openPr) {
    stop('stopped:duplicate-pr', `An open upstream PR already exists for \`${r.branch}\`: ${openPr}`);
  }

  const fileContent = buildUpdateFile(facts, noteBody(note.content), sourceUrl);
  git('fetch', `https://github.com/${UPSTREAM}.git`, BASE_BRANCH);
  git('checkout', '-B', r.branch, 'FETCH_HEAD');
  mkdirSync(UPDATES_DIR, { recursive: true });
  const filePath = `${UPDATES_DIR}/${r.fileName}`;
  writeFileSync(filePath, fileContent);
  git('add', filePath);
  git('-c', 'user.name=github-actions[bot]',
      '-c', 'user.email=41898282+github-actions[bot]@users.noreply.github.com',
      '-c', 'commit.gpgsign=false', // local dry-runs may have a signing agent configured
      'commit', '-m', `docs(storage): ${r.publishDate} weekly update\n\nSource-Note: ${sourceUrl}`);
  if (dryRun) {
    summary('🧪 DRY RUN — skipping `git push`.');
  } else {
    git('push', 'origin', r.branch);
    summary(`✅ Pushed \`${r.branch}\` to ${FORK} with \`${filePath}\`.`);
  }

  // Step 4 — surface the one-click PR URL and record success outputs.
  // Outputs are written BEFORE the best-effort skeleton step so a HackMD
  // failure there cannot blank the facts the routine reports from.
  const url = compareUrl(facts, sourceUrl);
  summary(`## One-click PR URL\n\n${url}`);
  setOutput('status', 'success');
  setOutput('branch', r.branch);
  setOutput('file', filePath);
  setOutput('week', `${r.week}`);
  setOutput('compare_url', url);
  setOutput('source_note_url', sourceUrl);

  // Step 5 — create the upcoming week's skeleton note (often a no-op; best-effort)
  const u = facts.upcoming;
  const existing = findNoteByTitle(notes, u.noteTitle, u.publishDate);
  let newNoteUrl = '';
  try {
    if (existing.note) {
      summary(`Upcoming week's note already exists ("${existing.note.title}") — skipping creation.`);
      newNoteUrl = noteUrl(existing.note);
    } else if (existing.ambiguous) {
      warnings.push(`⚠️ Skipping skeleton creation — ${existing.error}. Creating another would add a duplicate.`);
    } else if (dryRun) {
      summary(`🧪 DRY RUN — would create skeleton note "${u.noteTitle}".`);
    } else {
      const created = await hackmd(`/teams/${TEAM_PATH}/notes`, {
        method: 'POST',
        body: JSON.stringify({
          title: u.noteTitle,
          content: buildSkeleton(facts, note.content),
          parentFolderId: WEEKLY_FOLDER_ID,
          readPermission: 'signed_in',
          writePermission: 'owner',
        }),
      });
      newNoteUrl = noteUrl(created);
      summary(`📝 Created upcoming week's skeleton note: ${newNoteUrl}\n(folder placement cannot be confirmed via the read API — assumed "Weekly updates")`);
    }
  } catch (err) {
    warnings.push(`⚠️ Skeleton note creation failed (branch push was unaffected): ${err.message}`);
  }
  setOutput('new_note_url', newNoteUrl);

  if (warnings.length) summary(`## Warnings\n\n${warnings.join('\n')}`);
  setOutput('warnings', warnings.join('\n'));
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((err) => {
    setOutput('status', 'error');
    summary(`## ❌ Error\n\n\`\`\`\n${err.message}\n\`\`\``);
    process.exit(1);
  });
}
