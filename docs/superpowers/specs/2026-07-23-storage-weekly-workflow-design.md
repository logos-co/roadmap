# Storage weekly automation: GitHub Actions workflow + thin routine

Date: 2026-07-23 · Status: approved (option B)

## Problem

The "Logos storage weekly update" claude.ai routine (cron `0 22 * * 2`) carried its whole
logic — and a hardcoded HackMD token — in its prompt. Move the logic into `emizzle/roadmap`
with the token as the `HACKMD_TOKEN` repo secret, while keeping the routine's claude.ai
notifications/reporting.

## Decision

**Split by determinism.** Everything judgement-free runs as a plain Node script inside a
GitHub Actions workflow (no Anthropic credential needed). The one generative task — the
three Highlights bullets — stays in the routine, which is already a Claude session.

| Piece | Where | Role |
|---|---|---|
| `.github/workflows/storage-weekly.yml` | fork `v4` | `workflow_dispatch` (+ `dry_run` input) and `repository_dispatch` (`storage-weekly`); runs tests then the script with `HACKMD_TOKEN` + `GITHUB_TOKEN` |
| `.github/scripts/storage-weekly.mjs` | fork `v4` | week math → HackMD note lookup (exact title, tolerant fallback, empty-note guard) → duplicate guards → branch off **upstream** `v4` → generate update file → push to fork → compare URL → upcoming week's skeleton note |
| `.github/scripts/storage-weekly.test.mjs` | fork `v4` | `node --test`; golden cases from the original routine text |
| `.github/storage-weekly-routine.md` | fork `v4` | new routine prompt: dispatch → poll → write Highlights → commit to branch → report |

## Key mechanisms

- **Highlights handoff:** the script leaves `<!-- HIGHLIGHTS-PENDING source: <note-url> -->`
  under `### Highlights`; the routine replaces it and reuses the note URL for the PR body.
  The routine never needs the HackMD token.
- **Dispatch fallback chain:** `gh workflow run` (needs `actions:write`) →
  `repository_dispatch` (needs only `contents:write`, which the routine's GitHub App
  provably has). Polling falls back from the Actions API to watching for the
  deterministically-named branch.
- **Guard stops** exit non-zero with a machine-readable status
  (`stopped:note-not-found|empty-note|duplicate-branch|duplicate-pr`) in `$GITHUB_OUTPUT`
  and the step summary; the routine relays them verbatim.
- **Upstream purity:** weekly branches are cut from `logos-co/roadmap` `v4` (fetched
  anonymously), so upstream PRs never carry the fork-only workflow commits.

## Constraints & consequences

- Secrets: `HACKMD_TOKEN` only (already set on the fork). No Anthropic key anywhere.
- The conventions (filename = reported Monday + 7, frontmatter date = reported Monday,
  heading format) are frozen in code and covered by tests; verified against
  `content/storage/updates/2026-06-29.md`. A convention change upstream now requires a
  script edit.
- Dispatch only works once the workflow is on the fork's default branch (`v4`). First live
  validation: manual `Run workflow` with `dry_run=true` after merge, then update the routine
  via the triggers API.
- The routine remains essential: if it dies, branches are pushed with a pending-Highlights
  marker and no report is surfaced.
