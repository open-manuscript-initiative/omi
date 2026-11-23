---
title: "Studio and EuroOffice: separate services"
sidebar_label: "Studio and EuroOffice"
description: "Why Office editing is no longer embedded in Open Manuscript Studio."
---

# Studio and EuroOffice: separate services

**Architecture decision: 23 November 2026.** [Studio PR #971](https://github.com/open-manuscript-initiative/open-manuscript-studio/pull/971) merged the separation into the Studio source repository. **This source change is not itself a new published app release.** Existing installed clients can retain the old interface until they are updated.

## Different purposes

- **Open Manuscript Studio** is for scholarly writing, semantic manuscript structure, citations and notes, research projects, peer review, typesetting, publishing, and OJS/OMP workflows.
- **EuroOffice** is a separate general-purpose office-document service. Its deployment, login, document storage, access control, backups and upgrades are managed independently of Studio.

The former embedded EuroOffice DOCX editor, launch UI, remote editor frame and API router mounts were removed from Studio. Office server credentials are no longer needed to install Studio. This change does **not** remove or replace Studio's built-in DOCX/ODT import/export, semantic editor or publication tools.

## Moving a document between the two

Use an **explicit file exchange**: export/download the DOCX from the independent Office service, then import it into Studio as a new scholarly document. Review headings, notes, references, drawings and metadata before treating the imported material as semantically structured manuscript content. Converting from a formatted Office document to the OMI model is not equivalent to preserving every Word rendering detail.

There is **no bundled Office editor or automatic two-way document synchronization**. Any future connector will need a separately reviewed design, explicit user authorization, versioned transfer and provenance rules.

## Release versions are independent

| Channel | Confirmed identity on 23 November 2026 |
| --- | --- |
| Studio application source candidate | `1.0.0-rc.2` |
| Last public direct GitHub release/installers | `0.3.0-beta.13` |
| Windows Store, last operator-confirmed | `1.0.0.0` |
| OJS integration plugin | `v1.8.7` |
| OMP integration plugin | `v1.5.1` |
| Portable OMI manuscript format | `OMI-SPEC-320@0.3.0` |

See [RC2 channel evidence](/docs/studio/releases/1.0.0-rc.2) and [23 November changes](/docs/studio/updates/2026-11-23). A version change in Studio source does not automatically publish an Android APK, Windows Store update or standalone desktop installer.

## For institutional operators

The separate Office service is outside the Studio deployment lifecycle. Remove obsolete `EUROOFFICE_URL` and `EUROOFFICE_JWT_SECRET` from the **Studio API** environment when upgrading, not from the separate Office server. The former Office API routes are no longer registered. The integration was used only for tests and its historical database schema is deliberately retained, not deleted by the separation.

See the [Studio operational runbook](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/main/docs/server/eurooffice-separation-runbook.md) and [ADR-032](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/main/docs/architecture/adr-032-office-service-separation.md).