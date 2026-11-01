---
title: Studio development update — 1 November 2026
sidebar_label: Studio update (1 Nov 2026)
description: Mobile multi-document workspaces, verified cloud packages, media recovery, PDF export checks and security follow-up.
---

# Open Manuscript Studio — development update (1 November 2026)

**Status: merged into the Studio development branch; not a new public release announcement.** The Studio source candidate is `0.3.0-beta.13`, while the site's currently documented public download line remains `0.3.0-beta.12` pending separate release approval and signed/distributed builds. The portable manuscript format remains `OMI-SPEC-320@0.3.0`.

This update records work merged on 31 October–1 November 2026. It does not imply that every change has already reached Android installations, desktop update channels or the public download packages.

## Recently completed Studio changes

| Area | Verified development change | Evidence |
|---|---|---|
| PDF export preflight | Before rendering, referenced image bytes are checked for presence, length and SHA-256 consistency. Missing or unresolved package-local media references are reported rather than being passed to the restricted renderer. | [Studio PR #802](https://github.com/open-manuscript-initiative/open-manuscript-studio/pull/802) |
| Missing-media recovery | The author can inspect referenced assets and restore matching, checksum-verified bytes from a validated `.omi` archive belonging to the same manuscript, without replacing its text or revision history. | [Studio PR #804](https://github.com/open-manuscript-initiative/open-manuscript-studio/pull/804) |
| Cloud save/open integrity | Cloud backup upload sends a SHA-256 checksum and verifies the returned checksum, size and manuscript identity before acknowledging success. Opening a cloud package checks its digest, container validity and restored referenced media. Incomplete media blocks the cloud save acknowledgement. | [Studio PR #805](https://github.com/open-manuscript-initiative/open-manuscript-studio/pull/805) |
| Mobile multi-document workspace | Android/iOS Studio now shares the desktop manuscript-tab lifecycle. Several manuscripts can remain open, with compact, horizontally scrollable, touch-sized tabs in a dedicated row above the editor. Batched open/rename operations and tab switching have regression coverage. | [Studio PR #806](https://github.com/open-manuscript-initiative/open-manuscript-studio/pull/806) |

All four PRs have been merged. The final #805 and #806 PR commits passed the required Studio CI/CD, 1.0 Readiness, iOS simulator build, CodeQL, OMI-SPEC-320 and translation glossary checks. These are automated checks of the development implementation, **not a claim that new store binaries have been released**.

## Cross-device manuscript test

An author successfully opened a manuscript on a second device **from their configured cloud storage**. This is a positive practical check of portable, cloud-saved OMI packages and manual cross-device opening. It does **not** establish transparent background asset synchronization, automatic offline conflict resolution or preservation of every local-only IndexedDB asset.

The mobile tab layout also supports switching between multiple open manuscripts within the current app session. **Automatic restoration of all mobile tabs after restarting the application is not yet claimed.**

## Known limitations and security follow-up

- [Studio issue #803](https://github.com/open-manuscript-initiative/open-manuscript-studio/issues/803) remains open: independently authenticated server-side binary asset persistence, automatic cross-device hydration, migration from IndexedDB-only data, retry/quota policies and offline conflict handling are not finished.
- The PDF renderer remains restricted; the successful render of one manuscript does not prove recovery of a different manuscript whose source images are missing. Additional worker isolation and outbound-egress controls remain tracked by [#774](https://github.com/open-manuscript-initiative/open-manuscript-studio/issues/774) and [#765](https://github.com/open-manuscript-initiative/open-manuscript-studio/issues/765).
- Six open Dependabot alerts were visible in the repository's security interface during the 1 November review. The then-current main and server dependency lockfiles already listed newer versions of some flagged packages; the alert-to-dependency-graph discrepancy requires fresh verification. **Do not describe those alerts as dismissed, remediated or non-exploitable until GitHub's updated assessment and dependency paths confirm it.**
- Native Android device acceptance, multi-document restart behavior, Windows PDF round-trip checks and the formal `beta.13` release Go/No-Go remain separate validation steps.

## Publication and specification status

This is a **development progress report**, not a new OMI-SPEC conformance certificate, a promotion of Draft specifications to Stable or a change to the downloadable public-release label. For the prior public release see [Studio beta.12 release notes](/docs/studio/releases/0.3.0-beta.12); for the staged source candidate and release gates see [beta.13 preparation](/docs/studio/releases/0.3.0-beta.13); for the broader capability matrix see [Studio implementation status](/docs/governance/studio-implementation-status).
