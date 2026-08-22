---
id: studio-implementation-status
title: Open Manuscript Studio — Current Implementation Status
sidebar_label: Studio Implementation Status
description: Current implementation snapshot for the Open Manuscript Studio reference implementation.
keywords:
  - Open Manuscript Studio
  - implementation status
  - Android
  - peer review
  - OJS
  - OMP
  - desktop
  - multilingual
  - export
---

# Open Manuscript Studio — Current Implementation Status

## Snapshot

| Field | Value |
|---|---|
| Status | Alpha / beta-readiness stabilization |
| Snapshot date | 2026-08-22 |
| Current release line | `0.1.0-alpha.4` |
| Reference implementation | Open Manuscript Studio |
| Source repository | `open-manuscript-initiative/open-manuscript-studio` |
| Web target | Modern browsers |
| Desktop targets | Windows x64, Linux x64, macOS Intel, macOS Apple Silicon |
| Mobile targets | Android public universal APK; iOS/iPadOS planned on the shared Tauri 2 architecture |
| Web deployment | `studio.openmanuscript.org` |

This page describes **implemented product capabilities**, not OMI specification conformance. Formal specification maturity and conformance evidence are tracked separately in the [OMI Implementation Status Matrix](./implementation-status-matrix.md).

## Status vocabulary

- **Operational** — implemented in the current Studio development line and available when its normal runtime prerequisites are present.
- **Configuration-dependent** — implemented, but requires installation-specific server credentials, OAuth registration, an external service, or a publishing-system connection.
- **Foundation** — architecture, registry, UI or configuration support exists, but the complete end-user service is not yet claimed as operational.

## Current capabilities

| Area | Status | Current implementation |
|---|---|---|
| Structured manuscript editing | **Operational** | Semantic sections, rich text, headings, inline formatting, lists, notes, references, tables and structured content handling. |
| Structured search and replace | **Operational** | Search/replace overlay, scopes and result navigation with responsive access shared by desktop and mobile layouts. |
| Multilingual user interface | **Operational** | 24 supported European UI languages with shared language selection. Interface, manuscript and metadata language preferences are managed in one compact responsive settings surface. |
| Time-zone preferences | **Operational** | Standard IANA time-zone selection with current UTC offsets and automatic system-zone defaulting. |
| Multilingual help | **Operational** | Integrated localized help coverage across the supported Studio UI locales. |
| Accounts and authentication | **Operational** | Server-backed registration/login, logout and authenticated API access work in web and native clients. Native clients use bearer-session transport compatible with Tauri application origins. |
| Account/profile interface | **Operational** | Shared server-backed profile editing is available in desktop and mobile layouts, with account identity separated from manuscript contributor metadata. |
| Contributor identity model | **Operational** | Contributors, roles, affiliations, identity assertions and author-profile workflows are represented separately from account identity. |
| ORCID authentication | **Configuration-dependent** | ORCID OAuth/OIDC sign-in and linking infrastructure is implemented. Personal and institutional deployment credential sets are separated, and the active Sandbox/Production environment is visible in the Studio UI. |
| Double-blind peer review | **Operational** | Anonymous reviewer projection, review assignments, reviewer workspace, comments and review persistence. |
| Editorial review dashboard | **Operational** | Editor-facing overview and role-aware review portal for assigned peer-review work. |
| External/OJS review assignments | **Configuration-dependent** | OJS-connected author, editor and reviewer workflows and external assignment context are implemented when the OJS integration is configured. |
| OJS manuscript launch/import | **Configuration-dependent** | Signed launch assertions, manuscript/file retrieval and structured import of metadata and manuscript content from OJS. |
| DOCX structural import | **Operational** | Headings, inline semantics, list inheritance, footnotes/endnotes, references and structured tables are handled by the current import pipeline. |
| Portable OMI export | **Operational** | Portable `.omi.zip` and OMI JSON outputs are available as first-class interchange forms. |
| Scholarly/publishing exports | **Operational** | JATS XML, semantic offline HTML package, DOCX, EPUB, PDF, IDML, XPress Tags, FrameMaker MIF, Scribus SLA and LaTeX are represented in the current export layer. |
| Cross-platform export delivery | **Operational** | Hosted Studio uses browser downloads; installed Tauri clients use native save dialogs and binary writes for supported export targets. |
| Publisher profiles | **Operational** | Publisher profile, export stylesheet and print stylesheet handling are separated from manuscript semantics. |
| Cloud storage provider layer | **Operational** | Provider-aware flow selects storage provider, personal/business account type and connection method according to platform capability. |
| Locally synchronized folders | **Operational on desktop** | OneDrive, SharePoint, Google Drive, Dropbox, Nextcloud, iCloud Drive and other desktop-synchronized folders can be used without giving OMI the provider password. Studio writes portable OMI backups to the author-selected local folder and the provider client performs synchronization. |
| Persistent synchronized-folder access | **Operational on desktop** | The chosen folder is remembered per signed-in user, provider and account type. Tauri persists the user-granted filesystem scope across restarts without granting broad home-directory access. |
| WebDAV / Nextcloud direct storage | **Configuration-dependent** | Direct WebDAV/Nextcloud connections support encrypted server-side credentials, connection testing, portable backup upload, restore and deletion. |
| Integrations catalogue | **Operational** | Provider registry, catalogue UI, status client and declared authentication modes are present. |
| DeepL integration | **Foundation** | Provider/configuration scaffolding exists; this status does not claim a complete production translation workflow. |
| Windows desktop application | **Operational** | Tauri 2 Windows application, EXE/MSI packaging, native authentication, local-file access and native save flows are implemented. |
| Linux and macOS packaging | **Operational build targets** | Release automation defines Linux AppImage/DEB and macOS Intel/Apple Silicon DMG targets. Platform signing/notarization remains separate release-hardening work. |
| Android application | **Operational public alpha** | A universal Android APK is produced by the shared Tauri 2 release workflow. Server-backed login/logout, responsive navigation, account/document/detail views, insertion UI, native export delivery and OMI launcher branding are part of the shared client line. |
| iOS / iPadOS | **Foundation / planned distribution** | The shared architecture is designed for iOS/iPadOS, but this snapshot does not claim a tested public iOS build. |
| Desktop update flow | **Operational** | Update notification and installer flow is implemented in the desktop application and updater artifacts are produced by the release configuration. |
| Cross-platform release automation | **Operational** | GitHub Actions produces Windows, Linux, macOS and Android artifacts from the shared source tree. |
| Release dependency reproducibility | **Operational** | JavaScript and Rust dependency graphs are lockfile-controlled; CI uses reproducible install paths including `npm ci` for the server. |
| Application branding | **Operational** | OMI Studio branding and generated native icon assets are used across the application shell and release packaging, including Android. |
| Security hardening | **Operational baseline** | Server-side rate limiting, SSRF restrictions for publishing-system integrations, runtime type validation, safer import/export escaping, restricted secret persistence and automated security scanning are incorporated into the current development line. |
| Windows code signing | **Application submitted / pending** | Public code-signing and privacy policies are published and the SignPath Foundation open-source application has been prepared/submitted. Windows installers remain unsigned until acceptance and production signing integration. |

## Cross-platform architecture

Studio now has a concrete shared-client architecture rather than separate web and native product lines. React/TypeScript, the OMI manuscript model, editor behavior, authentication flows, peer review, integrations and import/export logic are shared. Tauri 2 supplies native packaging and platform capabilities for desktop and mobile clients.

The responsive UI intentionally differs by form factor: desktop can expose multi-panel editing, while mobile uses compact navigation, drawers and touch-oriented controls. This is a presentation difference, not a separate manuscript model.

## Architecture boundaries

### Local-first manuscript ownership

The native application can keep manuscripts in storage chosen by the author. A manuscript does not need to become proprietary server state merely because server-backed collaboration or integrations are enabled. Desktop users can also place portable OMI backups into folders already synchronized by their preferred cloud client, with the selected path and filesystem permission kept locally on the device.

### Server-backed identity and services

Accounts, collaboration, peer review, direct cloud connectors and publishing-system integrations use the Studio API and PostgreSQL-backed services. Authentication identity is kept distinct from scholarly contributor identity. These features depend on the deployment being correctly configured and migrated.

### External integrations

OMI separates manuscript semantics from provider-specific authentication and transport. OJS, OMP, cloud storage, ORCID and future translation providers therefore connect through integration layers rather than becoming part of the core document model.

### Publishing-system authority

For connected OJS workflows, OJS remains authoritative for submission workflow state, assignments, rounds and editorial decisions. Studio acts as the structured authoring and review workspace and exchanges information through defined application endpoints rather than direct database coupling.

## Release and distribution

GitHub Actions produces release artifacts from the shared source tree for Windows, Linux, macOS and Android. The public Studio download page exposes browser access and native packages, including the Android universal APK for the current `0.1.0-alpha.4` release line.

The project remains alpha while beta-readiness work concentrates on regression coverage, interoperability, error recovery, release trust and elimination of blocker/critical defects rather than on basic product scaffolding.

## Beta-readiness gate

A beta release is appropriate when the primary workflows can be exercised without data loss or blocker/critical defects, particularly:

1. registration/login/logout and session restoration;
2. manuscript creation, opening, editing, saving and reopening;
3. DOCX import and representative structured export paths on web and native clients;
4. OJS manuscript round-trip and role-aware author/editor/reviewer workflows;
5. double-blind peer review without identity leakage;
6. native file handling, persistent synchronized-folder access, responsive navigation and Android lifecycle behavior;
7. understandable user-facing error handling for network, authentication and integration failures.

Experimental or configuration-dependent integrations do not need to be feature-complete to enter beta, provided their maturity is clearly identified and they do not compromise the stable core workflows.

## What remains before beta

- complete focused Windows and Android regression passes across the beta-readiness gate;
- continue OJS round-trip and cross-version interoperability testing;
- complete implementation and end-to-end testing of the OMP connector;
- strengthen recovery behavior for interrupted network and synchronization operations;
- replace remaining technical/raw error surfaces with actionable user-facing messages;
- integrate Windows production code signing if/when the SignPath Foundation application is accepted;
- continue macOS signing/notarization and store-oriented mobile distribution work;
- develop conformance suites mapping implementation behaviour directly to normative OMI requirements;
- establish release-level compatibility guarantees for supported import/export targets.

The presence of a feature in this implementation snapshot must not be interpreted as formal conformance with an OMI specification unless a corresponding conformance class and evidence are published separately.
