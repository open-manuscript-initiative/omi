#!/usr/bin/env bash
# Deploy a verified Docusaurus build artifact to the Plesk document root.
# Called by the Website build workflow over authenticated SSH; no git/npm on VPS.
set -euo pipefail
umask 077

sha="${1:-}"
run_id="${2:-}"
expected_checksum="${3:-}"
[[ "$sha" =~ ^[0-9a-f]{40}$ && "$run_id" =~ ^[0-9]+$ &&
   "$expected_checksum" =~ ^[0-9a-f]{64}$ ]] || {
  echo 'Invalid deployment commit, run ID or SHA-256 checksum.' >&2; exit 2;
}
[[ "$EUID" -ne 0 ]] || { echo 'Refusing to deploy the public site as root.' >&2; exit 1; }

target='/var/www/vhosts/openmanuscript.org/httpdocs'
if [[ "${OMI_SITE_DEPLOY_TEST_MODE:-}" == 1 ]]; then
  [[ -n "${OMI_SITE_DEPLOY_TEST_TARGET:-}" ]] || exit 2
  target="$OMI_SITE_DEPLOY_TEST_TARGET"
fi
[[ -d "$target" && -w "$target" && ! -L "$target" ]] || {
  echo 'Plesk document root is missing, unwritable, or a symlink.' >&2; exit 1;
}

state="$HOME/.omi-website-deploy"
incoming="$state/incoming"
backups="$state/backups"
work="$state/work"
mkdir -p "$incoming" "$backups" "$work"
chmod 700 "$state" "$incoming" "$backups" "$work"
exec 9>"$state/deploy.lock"
flock -x 9

artifact="$incoming/$run_id-$sha.tar.gz"
[[ -s "$artifact" ]] || { echo 'Website artifact is missing or empty.' >&2; exit 1; }
actual_checksum="$(sha256sum "$artifact" | cut -d' ' -f1)"
[[ "$actual_checksum" == "$expected_checksum" ]] || {
  echo 'Website artifact SHA-256 mismatch; refusing deployment.' >&2; exit 1;
}

release="$work/$run_id-$sha"
backup="$backups/release-$run_id-${sha:0:12}"
[[ ! -e "$release" && ! -e "$backup" ]] || {
  echo 'A staging or backup directory already exists for this release.' >&2; exit 1;
}
mkdir -p "$release" "$backup"
chmod 700 "$release" "$backup"

published=0
snapshot_complete=0
manifest="$state/managed-files.txt"
rollback() {
  result=$?
  trap - EXIT
  if [[ "$result" -ne 0 && "$published" -eq 1 && "$snapshot_complete" -eq 1 ]]; then
    echo 'Website deployment failed: restoring the previous Plesk document root.' >&2
    # Use checksums on rollback as well: equal-sized HTML with matching
    # timestamps must not survive a restore after a failed publish.
    if ! rsync -a --checksum --delete "$backup/web/" "$target/"; then
      echo "CRITICAL: restore failed; retained snapshot at $backup" >&2
    fi
    if [[ -f "$backup/previous-manifest.txt" ]]; then
      cp "$backup/previous-manifest.txt" "$manifest"
    else
      rm -f "$manifest"
    fi
  fi
  rm -rf -- "$release"
  [[ ! -f "$release.manifest" ]] || rm -f -- "$release.manifest"
  if [[ "$result" -eq 0 ]]; then
    rm -f -- "$artifact"
  fi
  exit "$result"
}
trap rollback EXIT

# Inspect names before extracting. The build comes from the trusted CI artifact,
# but reject absolute and traversal paths as an additional fail-closed measure.
while IFS= read -r name; do
  case "$name" in
    /*|..|../*|*/../*|*/..) echo 'Unsafe archive path.' >&2; exit 1 ;;
  esac
done < <(tar -tzf "$artifact")
tar -xzf "$artifact" --no-same-owner --no-same-permissions -C "$release"
[[ -s "$release/index.html" && -s "$release/hu/index.html" &&
   -s "$release/de/index.html" ]] || {
  echo 'Docusaurus artifact is missing expected EN/HU/DE entry points.' >&2; exit 1;
}
[[ -s "$release/omi-releases/$sha.txt" &&
   "$(cat "$release/omi-releases/$sha.txt")" == "$sha" ]] || {
  echo 'The build artifact is missing its exact commit identity marker.' >&2; exit 1;
}
if find "$release" -type l -print -quit | grep -q .; then
  echo 'Symlinks are not allowed in the published site artifact.' >&2; exit 1;
fi

new_manifest="$release.manifest"
: > "$new_manifest"
while IFS= read -r relative; do
  case "$relative" in
    ''|/*|..|../*|*/../*|*/..)
      echo 'Unsafe managed site path.' >&2; exit 1 ;;
    .well-known/*|.htaccess|.user.ini|cgi-bin/*|plesk-stat/*)
      continue ;;
  esac
  printf '%s\n' "$relative" >> "$new_manifest"
done < <(cd "$release" && find . -type f -printf '%P\n' | LC_ALL=C sort)
[[ -s "$new_manifest" ]] || { echo 'Empty website manifest.' >&2; exit 1; }

# An exact snapshot is taken before publishing any file. This includes the
# existing Plesk-managed files for recovery; untracked files are not deleted
# during a successful release.
required="$(du -sb "$target" | awk '{print $1}')"
available="$(df -B1 "$target" | awk 'NR==2 {print $4}')"
[[ "$required" =~ ^[0-9]+$ && "$available" =~ ^[0-9]+$ ]] || exit 1
(( available > required + 104857600 )) || {
  echo 'Insufficient free space to snapshot the existing website.' >&2; exit 1;
}
mkdir -p "$backup/web"
rsync -a "$target/" "$backup/web/"
if [[ -f "$manifest" ]]; then cp "$manifest" "$backup/previous-manifest.txt"; fi
if [[ -f "$state/current-commit" ]]; then cp "$state/current-commit" "$backup/previous-commit"; fi
touch "$backup/snapshot-complete"
snapshot_complete=1

# No --delete here: never erase untracked Plesk files, custom pages or
# .well-known ACME material. Remove *only* former CI-managed files below.
published=1
# Check content rather than only matching file size and second-resolution mtime.
# Newly generated Docusaurus HTML can have equal lengths and timestamps.
rsync -a --checksum --no-owner --no-group --chmod=D755,F644 \
  --exclude='/.well-known/***' --exclude='/.htaccess' \
  --exclude='/.user.ini' --exclude='/cgi-bin/***' \
  --exclude='/plesk-stat/***' \
  "$release/" "$target/"
if [[ -s "$manifest" ]]; then
  while IFS= read -r stale; do
    case "$stale" in
      ''|/*|..|../*|*/../*|*/..|.well-known/*|.htaccess|.user.ini|cgi-bin/*|plesk-stat/*)
        echo 'Unexpected previous manifest path; deployment aborted.' >&2; exit 1 ;;
    esac
    if ! grep -Fxq -- "$stale" "$new_manifest"; then
      # A defensive check prevents deleting through a symlinked parent.
      parent="$stale"
      while [[ "$parent" == */* ]]; do
        parent="${parent%/*}"
        [[ ! -L "$target/$parent" ]] || {
          echo 'Symlinked ancestor in former managed path.' >&2; exit 1;
        }
      done
      [[ -f "$target/$stale" || -L "$target/$stale" ]] && rm -f -- "$target/$stale"
    fi
  done < "$manifest"
fi
[[ -s "$target/index.html" && -s "$target/hu/index.html" ]] || {
  echo 'Published site verification failed.' >&2; exit 1;
}
if [[ "${OMI_SITE_DEPLOY_TEST_MODE:-}" == 1 ]]; then
  [[ "${OMI_SITE_DEPLOY_TEST_FAIL:-0}" != 1 ]] || {
    echo 'Injected test failure after publishing.' >&2; exit 1;
  }
else
  curl -fsSL --max-time 30 --retry 2 'https://openmanuscript.org/hu/' -o /dev/null
  # A unique per-commit URL avoids mistaking a cached older page for the
  # just-published release. Fail and restore the snapshot if it is not live.
  verified="$(curl -fsSL --max-time 30 --retry 3 --retry-delay 2     "https://openmanuscript.org/omi-releases/$sha.txt?run=$run_id")"
  [[ "$verified" == "$sha" ]] || {
    echo 'Public OMI site did not serve the deployed commit marker.' >&2; exit 1;
  }
fi

mv "$new_manifest" "$manifest"
printf '%s\n' "$sha" > "$state/current-commit"
printf '%s\n' "$run_id" > "$state/current-run-id"
echo "OMI website published successfully: $sha (GitHub run $run_id)."
