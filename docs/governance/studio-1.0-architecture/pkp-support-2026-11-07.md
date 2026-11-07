---
title: OJS/OMP 3.5 support — 2026-11-07
sidebar_label: OJS/OMP support and acceptance
---

# OJS/OMP support and release evidence — 2026-11-07

## Support decision

| Publishing system | Versions | Studio tier | Required acceptance |
| --- | --- | --- | --- |
| OJS | 3.5.0-4, 3.5.0-5, 3.5.0-6 | Stable acceptance scope | Three version-specific E02 jobs/archives and three manual gates. |
| OMP | 3.5.0-4, 3.5.0-5, 3.5.0-6 | Preview | All three E02 regression jobs/archives are mandatory; this does not promise Stable OMP feature coverage. |

This explicitly refines ADR-010 and ADR-019. A Preview feature is not generally release-blocking, but the declared six-target PKP regression matrix is a required release contract. Missing, failed, skipped, cancelled, stale or foreign-SHA evidence for any declared target blocks E02. Privacy, security and data-loss defects remain blocking for every tier. Existing checks are retained without `continue-on-error`.

The connector discovers capabilities and uses existing signed application protocols. Installed plugin version, server-advertised capability and user/assignment permissions determine executable functions; a supported version alone grants no access. OJS/OMP remain authoritative for their workflow, decisions, review completion and private files. No OMI schema/container, API-v1, credential or database contract changes.

## Manual acceptance

The current v1 receipt requires exactly **14** manual gates, including `ojs-3.5.0-4`, `ojs-3.5.0-5` and the new `ojs-3.5.0-6`. All start pending. Each OJS acceptance requires the selected source SHA, an actual observation timestamp and a redacted HTTPS evidence reference; record the external plugin SHA and exercised scopes in that evidence. Automated green jobs do not provide owner attestations.

Historical 13-gate receipts keep their original bytes, subject, timestamps and hashes. They remain historical evidence for the earlier scope and cannot approve the expanded matrix. Generate a fresh draft for the real candidate/artifacts; do not copy approvals or invent a PASS. This support reconciliation is neither an RC approval nor a production PKP upgrade.

## Source and CI evidence

Studio #877, OJS-plugin #34, OMP-plugin #26 and OMI #190 introduced the -6 compatibility extension. On 2026-11-07, the [Studio six-target workflow](https://github.com/open-manuscript-initiative/open-manuscript-studio/actions/runs/42344206487), [OJS plugin installation matrix](https://github.com/open-manuscript-initiative/omi-ojs-plugin/actions/runs/42344311652) and [OMP plugin installation matrix](https://github.com/open-manuscript-initiative/omi-omp-plugin/actions/runs/42344357858) succeeded for their own commits. These are historical inputs, not evidence for a later repair commit, a deployed server or a published plugin archive.

OJS -6 uses its official image. The OMP -6 application uses exact official source `9e2a7fd0054ca73e5f5a04c40fdcf9da2545dc6c`, recursive submodules and locked Composer dependencies on the official -5 PHP/Apache runtime while the -6 Docker tag is unavailable. CI checks the actual application version; the runtime image is not advertised as an official OMP -6 image. Existing plugin download versions are unchanged; compatibility CI does not create a new release archive.

## Architecture reconciliation

[Studio ADR-033](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/main/docs/architecture/adr-033-pkp-support-and-release-evidence.md) records alternatives, consequences and review conditions. The Target Architecture, Gap Analysis, Refactoring and PR Plan, ADR Register and Executive Summary use this support/evidence policy. C06–C09 and D08 retain connector/capability work; E02–E05 require the full automated matrix plus the fresh 14-gate receipt before promotion. The original 54 planned units are not renumbered or marked complete by this update. Revisit on a version/tier change or a new acceptance/distribution requirement.

[Studio implementation PR #878](https://github.com/open-manuscript-initiative/open-manuscript-studio/pull/878).
