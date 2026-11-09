---
title: Automatic OMI website deployment
description: Production publication of the openmanuscript.org Docusaurus website with GitHub Actions and rollback.
---

# Automatic publication of openmanuscript.org

The **OMI website** and the **Open Manuscript Studio API** have separate deployment workflows. The website is static Docusaurus output; it must not perform Studio Prisma database migrations or restart Studio services.

Once this deployment is enabled, merging a change into `open-manuscript-initiative/omi`'s `main` branch starts the [Website build](https://github.com/open-manuscript-initiative/omi/actions/workflows/website-build.yml) workflow. The sequence is:

1. Install locked dependencies with Node 24, run the Docusaurus build (all locales), and validate the server directory and safe deployment/rollback tests.
2. Upload the **already tested** `build/` output as an immutable per-run GitHub artifact.
3. Deploy only a `main`-branch push (or a manually dispatched `main` workflow), using an SSH key and verified SSH host key. Pull requests **never deploy**.
4. Transfer the SHA-256-checked build artifact to the Plesk website user, using SSH/SCP.
5. Verify English, Hungarian and German entry points, snapshot the existing document root, and synchronize published files to the website's Plesk `httpdocs`.
6. Keep `.well-known/`, `.htaccess`, `.user.ini`, `cgi-bin/`, `plesk-stat/`, and other **non-CI-managed** files. Only files listed in the prior CI manifest can be removed as obsolete.
7. Test the Hungarian public URL. If anything fails during publication, restore the pre-deploy snapshot and report a failed GitHub workflow.

**No server-side npm build, Git reset, or manual `deploy.sh` is required.**

## One-time setup (administrator)

These GitHub Actions repository secrets must be created under **open-manuscript-initiative/omi → Settings → Secrets and variables → Actions → Repository secrets**:

| Secret | Meaning |
| --- | --- |
| `OMI_SITE_SSH_HOST` | SSH address of the OMI Plesk VPS (not a proxied Cloudflare hostname) |
| `OMI_SITE_SSH_USER` | Unprivileged Plesk subscription user that owns `/var/www/vhosts/openmanuscript.org/httpdocs` |
| `OMI_SITE_SSH_PRIVATE_KEY` | Private half of a dedicated, preferably passwordless, **website-deployment-only** SSH key |
| `OMI_SITE_SSH_KNOWN_HOSTS` | Verified SSH `known_hosts` line for the exact host in `OMI_SITE_SSH_HOST` |

Generate and keep the private key securely **outside Git and this chat**. Install its public half in the chosen Plesk account's `~/.ssh/authorized_keys` (permissions `0700` for the directory and `0600` for the file). Do not give the key root privileges. The website user must be able to write its own home directory, the website `httpdocs`, and run `bash`, `tar`, `sha256sum`, `flock`, `rsync`, and `curl`.

Before trusting a host key returned by `ssh-keyscan`, independently compare its fingerprint with the public host key fingerprint shown on the VPS itself (e.g., `ssh-keygen -lf /etc/ssh/ssh_host_ed25519_key.pub`). **Do not** use `StrictHostKeyChecking=no` or accept an unverified host key. The deployment will reject missing secrets rather than silently skipping publication.

GitHub secrets belong to the **OMI website repository**; secrets created in the Studio repository do not automatically appear here.

## Storage and safety

The deploy account uses `$HOME/.omi-website-deploy/`:

- `incoming/` — checksum-validated transfer archive, deleted on success.
- `work/` — temporary extracted build, deleted after deployment.
- `backups/release-<run>-<commit>/web/` — a complete pre-deployment document-root snapshot with `snapshot-complete` marker.
- `managed-files.txt` — only files created by a previous CI deployment may be removed on a future release.
- `current-commit`, `current-run-id` — last successful publication evidence.

Keep the local website snapshots access restricted. Monitor free disk space and set a backup retention policy after a successful recovery test. A backup is not a verified full restore until a restore test has succeeded.

The first automated deployment **does not remove unknown legacy files**, because no prior CI-owned manifest exists. This prevents accidentally deleting Plesk-managed content. Subsequent automated deployments remove obsolete files that the preceding automated release itself installed.

If the public smoke test fails, the publisher restores the previous `httpdocs` snapshot. **A red Deploy job means the current web content must be inspected; it does not prove the attempted release was published.**

## Routine operation

- Change documentation in Git; use PR review and green checks.
- Merge to `main`.
- Look for **Website build → Publish OMI website to Plesk** success.
- Confirm the desired page at `https://openmanuscript.org/hu/` (CDN caches can delay content display).
- For an emergency restore, use the saved `backups/release-...` snapshot after confirming the correct release and preserving any subsequent manual changes.

The older repository-root `deploy.sh` is a legacy/manual procedure and is **not** called by this workflow. Do not run it after merging changes; it resets the checkout and uses broad `rsync --delete` behavior.

## Deployment acceptance checklist

- [ ] All four SSH repository secrets are configured and the host key is independently verified.
- [ ] SSH access is restricted to the unprivileged website account, not root.
- [ ] The Plesk document root and deployment-account HOME are writable.
- [ ] The PR website build and rollback tests are green.
- [ ] The first `main` deploy job succeeds, creates a pre-deploy snapshot, and completes the public smoke test.
- [ ] English, Hungarian and German pages render correctly.
- [ ] One simulated failed publish has been tested in CI and restores the previous web files.
