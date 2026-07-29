/**
 * Unit tests for the deterministic parts of storage-weekly.mjs.
 * Run with:  node --test .github/scripts/
 * Golden cases come verbatim from the original routine's examples.
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  weekFacts,
  isoDate,
  noteIsFilled,
  normalizeLabels,
  noteBody,
  stripHighlights,
  buildUpdateFile,
  buildSkeleton,
  findNoteByTitle,
  compareUrl,
} from './storage-weekly.mjs';

// --- Date math -------------------------------------------------------------

test('golden: today 2026-07-07 → reported week 27', () => {
  const f = weekFacts(new Date('2026-07-07T10:00:00Z'));
  assert.equal(f.reported.week, 27);
  assert.equal(f.reported.fileName, '2026-07-06.md');
  assert.equal(isoDate(f.reported.monday), '2026-06-29');
  assert.equal(f.reported.heading, '## Week 27 2026 (Mon Jun 29 - Fri Jul 3, 2026)');
  assert.equal(f.reported.noteTitle, '2026-07-06 Logos storage weekly');
  assert.equal(f.reported.branch, 'weeklies/storage-weekly-week-27');
});

test('golden: today 2026-07-21 (last real fire) → reported week 29', () => {
  const f = weekFacts(new Date('2026-07-21T22:01:00Z'));
  assert.equal(f.reported.week, 29);
  assert.equal(f.reported.noteTitle, '2026-07-20 Logos storage weekly');
  assert.equal(f.reported.heading, '## Week 29 2026 (Mon Jul 13 - Fri Jul 17, 2026)');
  // upcoming = current week 30 → note titled with Monday+7
  assert.equal(f.upcoming.noteTitle, '2026-07-27 Logos storage weekly');
  assert.equal(isoDate(f.upcoming.monday), '2026-07-20');
});

test('golden: week 26 file (2026-06-29.md, the real repo file)', () => {
  const f = weekFacts(new Date('2026-06-30T22:00:00Z'));
  assert.equal(f.reported.week, 26);
  assert.equal(f.reported.fileName, '2026-06-29.md');
  assert.equal(isoDate(f.reported.monday), '2026-06-22');
  assert.equal(f.reported.heading, '## Week 26 2026 (Mon Jun 22 - Fri Jun 26, 2026)');
});

test('reported week is day-of-week independent within a week', () => {
  const tue = weekFacts(new Date('2026-07-21T00:00:00Z'));
  const sun = weekFacts(new Date('2026-07-26T23:59:59Z'));
  assert.equal(tue.reported.week, sun.reported.week);
  assert.equal(tue.reported.fileName, sun.reported.fileName);
});

test('ISO week-year boundary: early January belongs to the right week-year', () => {
  // 2027-01-05 is in ISO week 1 of 2027; reported week is 53 of 2026.
  const f = weekFacts(new Date('2027-01-05T12:00:00Z'));
  assert.equal(f.reported.week, 53);
  assert.equal(f.reported.isoYear, 2026);
});

// --- Note matching ---------------------------------------------------------

const NOTES = [
  { id: 'a', title: '2026-07-20 Logos storage weekly' },
  { id: 'b', title: '2026-07-27 Logos storage weekly' },
  { id: 'c', title: 'REAL 2026-07-13 Logos storage weekly' },
  { id: 'd', title: 'unrelated note' },
];

test('findNoteByTitle: exact match wins, never picks the newest', () => {
  const r = findNoteByTitle(NOTES, '2026-07-20 Logos storage weekly', '2026-07-20');
  assert.equal(r.note.id, 'a');
  assert.equal(r.fuzzy, false);
});

test('findNoteByTitle: tolerant fallback matches stray prefixes and flags it', () => {
  const r = findNoteByTitle(NOTES, '2026-07-13 Logos storage weekly', '2026-07-13');
  assert.equal(r.note.id, 'c');
  assert.equal(r.fuzzy, true);
});

test('findNoteByTitle: zero matches → error flagged none (safe to create)', () => {
  const r = findNoteByTitle(NOTES, '2026-08-03 Logos storage weekly', '2026-08-03');
  assert.ok(r.error);
  assert.equal(r.none, true);
  assert.ok(!r.ambiguous);
});

test('findNoteByTitle: multiple fuzzy matches → flagged ambiguous (must not create)', () => {
  const notes = [...NOTES, { id: 'e', title: 'DRAFT 2026-07-13 Logos storage weekly' }];
  const r = findNoteByTitle(notes, '2026-07-13 Logos storage weekly', '2026-07-13');
  assert.ok(r.error);
  assert.equal(r.ambiguous, true);
});

// --- Empty-note guard ------------------------------------------------------

const SKELETON = `---
title: "2026-07-27 Logos storage weekly"
---

## Week 30 2026 (Mon Jul 20 - Fri Jul 24, 2026)

### [Status Integration](https://example.com)

- **achieved:**
- **next**
`;

test('noteIsFilled: blank skeleton (even with colonless label) is not filled', () => {
  assert.equal(noteIsFilled(SKELETON), false);
});

test('noteIsFilled: one sub-bullet under any label counts as filled', () => {
  assert.equal(noteIsFilled(SKELETON + '    - did a thing\n'), true);
});

// --- Transforms ------------------------------------------------------------

test('normalizeLabels: fixes colonless and outside-colon variants, keeps content', () => {
  const input = '- **next**\n- **achieved:**\n- **Achieved**: stuff\n    - sub';
  assert.equal(
    normalizeLabels(input),
    '- **next:**\n- **achieved:**\n- **achieved:** stuff\n    - sub'
  );
});

test('noteBody drops frontmatter and the week heading, stripHighlights removes the section', () => {
  const note = `---\ntitle: "x"\n---\n\n## REAL Week 29 2026 (stray edit)\n\n### Highlights\n\n* old bullet\n\n### [Section](url)\n\n- **achieved:**\n    - work\n`;
  const body = stripHighlights(noteBody(note));
  assert.ok(!body.includes('Week 29'));
  assert.ok(!body.includes('old bullet'));
  assert.ok(body.startsWith('### [Section](url)'));
});

test('buildUpdateFile: frontmatter, regenerated heading, pending-highlights marker', () => {
  const facts = weekFacts(new Date('2026-07-21T22:00:00Z'));
  const out = buildUpdateFile(facts, '### [S](u)\n\n- **next**\n    - item\n', 'https://hackmd.io/xyz');
  assert.ok(out.startsWith('---\ntitle: "2026-07-20 Logos storage weekly"\n'));
  assert.ok(out.includes('date: 2026-07-13\n'));
  assert.ok(out.includes('## Week 29 2026 (Mon Jul 13 - Fri Jul 17, 2026)\n'));
  assert.ok(out.includes('### Highlights\n\n<!-- HIGHLIGHTS-PENDING source: https://hackmd.io/xyz -->'));
  assert.ok(out.includes('- **next:**\n    - item')); // label normalised
});

test('buildSkeleton: sections preserved in order, labels bare with colons, dates advanced', () => {
  const facts = weekFacts(new Date('2026-07-21T22:00:00Z'));
  const src = `## Week 29\n\n### [B section](u1)\n\n- **achieved:**\n    - old work\n- **next**\n    - old plan\n\n### [A section](u2)\n\n- **achieved:**\n    - more\n`;
  const skel = buildSkeleton(facts, src);
  assert.ok(skel.includes('title: "2026-07-27 Logos storage weekly"'));
  assert.ok(skel.includes('date: 2026-07-20'));
  assert.ok(skel.includes('## Week 30 2026 (Mon Jul 20 - Fri Jul 24, 2026)'));
  assert.ok(skel.indexOf('### [B section](u1)') < skel.indexOf('### [A section](u2)'));
  assert.ok(skel.includes('### [B section](u1)\n\n- **achieved:**\n- **next:**'));
  assert.ok(!skel.includes('old work'), 'must not carry work items forward');
  assert.ok(!skel.includes('### Highlights'));
});

// --- Compare URL -----------------------------------------------------------

test('compareUrl: encodes title/body, includes /cc @gmega and source note', () => {
  const facts = weekFacts(new Date('2026-07-21T22:00:00Z'));
  const url = compareUrl(facts, 'https://hackmd.io/xyz');
  assert.ok(url.startsWith('https://github.com/logos-co/roadmap/compare/v4...emizzle:roadmap:weeklies%2Fstorage-weekly-week-29?expand=1'));
  assert.ok(url.includes(`title=${encodeURIComponent('Storage weekly: week 29 2026')}`));
  assert.ok(decodeURIComponent(url).includes('/cc @gmega'));
  assert.ok(decodeURIComponent(url).includes('https://hackmd.io/xyz'));
  assert.ok(decodeURIComponent(url).includes('Highlights section was generated'));
});
