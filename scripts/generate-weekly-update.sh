#!/usr/bin/env bash
# Generate the weekly Logoscore update markdown file.
# Run from the root of logos-co/roadmap (any branch — writes a file, doesn't touch git).
#
# Requires: gh (authenticated), jq
#
# Usage:
#   ./generate-weekly-update.sh              # defaults to today (assumes Monday)
#   ./generate-weekly-update.sh 2026-07-27   # explicit Monday date (UTC)

set -euo pipefail

# Entries are either a bare repo name (assumed to live in logos-co) or an
# explicit "org/repo" for the other Logos orgs. Headings/anchors always use the
# bare repo name, which is unique across all orgs today.
REPOS="
logos-accounts-module
logos-accounts-ui
logos-basecamp
logos-capability-module
logos-chat-module
logos-chat-ui
logos-container
logos-container-subprocess
logos-cpp-sdk
logos-delivery-module
logos-design-system
logos-doctest
logos-doctest-hub
logos-evm-eth-rpc-module
logos-evm-keystore-module
logos-evm-net-proxy
logos-evm-railgun-module
logos-evm-token-list-module
logos-evm-uniswap-module
logos-evm-wallet-backend-module
logos-evm-wallet-ui
logos-js-sdk
logos-liblogos
logos-libp2p-module
logos-lidl
logos-logoscore-cli
logos-logoscore-py
logos-logoscore-tui
logos-module
logos-module-builder
logos-module-client
logos-module-loader
logos-module-loader-qt
logos-module-viewer
logos-package
logos-package-downloader
logos-package-downloader-module
logos-package-manager
logos-package-manager-module
logos-package-manager-ui
logos-plugin-qt
logos-protocol
logos-qt-sdk
logos-rust-sdk
logos-standalone-app
logos-storage-module
logos-storage-ui
logos-tutorial
logos-view-module-runtime
logos-wallet-module
logos-wallet-ui
logos-witness-test
logos-workspace
nix-bundle-appimage
nix-bundle-dir
nix-bundle-lgx
nix-bundle-macos-app
logos-modules-release
logos-test-modules
logos-blockchain/lez-explorer-ui
logos-blockchain/logos-blockchain-ui
logos-blockchain/logos-execution-zone-wallet-ui
"

MONDAY="${1:-$(date -u +%Y-%m-%d)}"

# The window is always the 7 days ending the day before $MONDAY, so a non-Monday
# argument silently produces an off-by-N week. Warn rather than fail.
if date -u -d "$MONDAY" +%u >/dev/null 2>&1; then
  DOW=$(date -u -d "$MONDAY" +%u)
else
  DOW=$(date -u -j -f %Y-%m-%d "$MONDAY" +%u)
fi
[ "$DOW" = "1" ] || echo "!! WARNING: $MONDAY is not a Monday (day $DOW) — window will be offset" >&2

# Compute window: START = Monday-7d, END = Monday-1d (Sunday)
if date -u -d "$MONDAY -7 days" +%Y-%m-%d >/dev/null 2>&1; then
  # GNU date (Linux)
  START=$(date -u -d "$MONDAY -7 days" +%Y-%m-%d)
  END=$(date -u -d "$MONDAY -1 day"  +%Y-%m-%d)
else
  # BSD date (macOS)
  START=$(date -u -j -v-7d -f %Y-%m-%d "$MONDAY" +%Y-%m-%d)
  END=$(date -u -j -v-1d  -f %Y-%m-%d "$MONDAY" +%Y-%m-%d)
fi

OUT="content/logoscore/updates/${MONDAY}.md"
TMPDIR=$(mktemp -d -t logoscore.XXXXXX)
trap 'rm -rf "$TMPDIR"' EXIT

echo ">> Window : $START .. $END (UTC)" >&2
echo ">> Output : $OUT" >&2

# Fetch merged PRs per repo, in parallel (10 at a time)
printf "%s\n" $REPOS | xargs -P 10 -I {} sh -c '
  entry="$1"
  case "$entry" in */*) full="$entry" ;; *) full="logos-co/$entry" ;; esac
  name="${entry##*/}"
  gh pr list --repo "$full" \
    --search "merged:'"$START"'..'"$END"' is:pr" \
    --state merged \
    --json number,title,url,mergedAt \
    --limit 200 > "'"$TMPDIR"'/$name.json" 2>"'"$TMPDIR"'/$name.err" \
    || { echo "!! WARNING: gh failed for $full: $(head -1 "'"$TMPDIR"'/$name.err")" >&2
         echo "[]" > "'"$TMPDIR"'/$name.json"; }
' _ {}

# Section order is alphabetical by bare repo name, regardless of org.
NAMES=$(printf "%s\n" $REPOS | sed 's|.*/||' | sort)

# Pick newest existing update to mirror front-matter
NEWEST=$(ls -1t content/logoscore/updates/*.md 2>/dev/null | grep -v "/${MONDAY}\.md$" | head -1 || true)

mkdir -p "$(dirname "$OUT")"

{
  if [ -n "$NEWEST" ]; then
    # Copy front-matter (first --- ... --- block), rewriting title/date
    awk -v d="$MONDAY" '
      /^---$/                 { m++; print; if (m==2) exit; next }
      m==1 && /^title:/       { print "title: \"" d " Logoscore Weekly\""; next }
      m==1 && /^date:/        { print "date: " d; next }
      m==1                    { print }
    ' "$NEWEST"
  else
    printf -- '---\ntitle: "%s Logoscore Weekly"\ndate: %s\ntags: [logoscore-updates]\n---\n' "$MONDAY" "$MONDAY"
  fi

  echo ""
  echo "# Table of Contents"
  echo ""
  first=1
  for repo in $NAMES; do
    n=$(jq 'length' < "$TMPDIR/$repo.json")
    if [ "$n" -gt 0 ]; then
      [ $first -eq 1 ] && first=0 || printf ", "
      printf '[%s](#%s)' "$repo" "$repo"
    fi
  done
  echo ""

  for repo in $NAMES; do
    n=$(jq 'length' < "$TMPDIR/$repo.json")
    if [ "$n" -gt 0 ]; then
      echo ""
      echo "## $repo"
      echo ""
      jq -r '.[] | "- [\(.title) (#\(.number))](\(.url))"' < "$TMPDIR/$repo.json"
    fi
  done
} > "$OUT"

echo ">> Wrote $OUT" >&2
echo ">> Repos with activity: $(grep -c '^## ' "$OUT")" >&2
