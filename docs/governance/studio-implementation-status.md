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
| Snapshot date | 2026-08-21 |
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
| Structured search and replace | **Operational** | Search/replace overlay, scopes and result navigation; responsive access is shared with the mobile UI. |
| Multilingual user interface | **Operational** | 24 supported European UI languages with reviewed translation overlays and a shared locale selector. |
| Multilingual help | **Operational** | Integrated localized help coverage across the supported Studio UI locales. |
| Accounts and authentication | **Operational** | Server-backed registration/login, logout and authenticated API access work in the web, Windows and Android clients. Native clients use bearer-session transport compatible with Tauri application origins. |
| Account/profile interface | **Operational** | Shared server-backed profile editing is available in desktop and mobile layouts, with identity/account information separated from manuscript contributor metadata. |
| Contributor identity model | **Operational** | Contributors, roles, affiliations, identity assertions and author-profile workflows are represented separately from account identity. |
| ORCID authentication | **Configuration-dependent** | ORCID OAuth/OIDC sign-in and linking infrastructure is implemented and requires installation-specific ORCID configuration. |
| Double-blind peer review | **Operational** | Anonymous reviewer projection, review assignments, reviewer workspace, comments and review persistence. |
| Editorial review dashboard | **Operational** | Editor-facing overview and role-aware review portal for assigned peer-review work. |
| External/OJS review assignments | **Configuration-dependent** | OJS-connected author, editor and reviewer workflows and external assignment context are implemented when the OJS integration is configured. |
| OJS manuscript launch/import | **Configuration-dependent** | Signed launch assertions, manuscript/file retrieval and structured import of metadata and manuscript content from OJS. |
| DOCX structural import | **Operational** | Headings, inline semantics, list inheritance, footnotes/endnotes, references and structured tables are handled by the current import pipeline. DOCX import is exposed as a document-opening/import action rather than as an export operation. |
| OMI manuscript export | **Operational** | Portable OMI manuscript export remains the authoritative interchange target for the reference implementation. |
| Scholarly/publishing exports | **Operational** | JATS XML, HTML5, DOCX, EPUB, PDF, IDML, XPress Tags, FrameMaker MIF, Scribus SLA and LaTeX targets are represented in the current export layer; import actions are kept separate from the export menu. |
| Publisher profiles | **Operational** | Publisher profile, export stylesheet and print stylesheet handling are separated from manuscript semantics. |
| Cloud storage provider layer | **Operational** | Provider abstraction and server routes exist for connected storage. |
| WebDAV / Nextcloud storage | **Configuration-dependent** | WebDAV-based storage, including Nextcloud-oriented connection support, requires user/server credentials and endpoint configuration. |
| Integrations catalogue | **Operational** | Provider registry, catalogue UI, status client and declared authentication modes are present. |
| DeepL integration | **Foundation** | Provider/configuration scaffolding exists; this status does not claim a complete production translation workflow. |
| Windows desktop application | **Operational** | Tauri 2 Windows application, EXE/MSI packaging, native authentication and local-file integration are implemented. |
| Linux and macOS packaging | **Operational build targets** | Release automation defines Linux AppImage/DEB and macOS Intel/Apple Silicon DMG targets. Platform signing/notarization remains separate release-hardening work. |
| Android application | **Operational public alpha** | A universal Android APK is produced by the shared Tauri 2 release workflow. Server-backed login/logout, responsive bottom navigation, document/detail/account views, insertion UI and OMI launcher branding have been exercised in the native application. |
| iOS / iPadOS | **Foundation / planned distribution** | The shared architecture is designed for iOS/iPadOS, but this snapshot does not claim a tested public iOS build. |
| Desktop update flow | **Operational** | Update notification and installer flow is implemented in the desktop application and updater artifacts are produced by the release configuration. |
| Cross-platform release automation | **Operational** | GitHub Actions produces Windows, Linux, macOS and Android artifacts from the shared source tree; current actions use the maintained Node 24-compatible action generations. |
| Release dependency reproducibility | **Operational** | The Tauri Rust dependency graph is pinned through `src-tauri/Cargo.lock` so local and CI builds resolve the same dependency versions. |
| Application branding | **Operational** | OMI Studio branding and generated native icon assets are used across the application shell and release packaging, including the Android launcher. |
| Windows code signing | **Application submitted / pending** | Public code-signing and privacy policies are published and the SignPath Foundation open-source application has been prepared/submitted. Windows installers remain unsigned until the application is accepted and production signing is integrated. |

## Cross-platform architecture

Studio now has a concrete shared-client architecture rather than separate web and native product lines. React/TypeScript, the OMI manuscript model, editor behavior, authentication flows, peer review, integrations and import/export logic are shared. Tauri 2 supplies native packaging and platform capabilities for desktop and mobile clients.

The responsive UI is intentionally allowed to differ by form factor: desktop can expose multi-panel editing, while mobile uses compact navigation, drawers and touch-oriented controls. The mobile bottom navigation now exposes document management, editing, manuscript details and account/profile workflows. This is a presentation difference, not a separate manuscript model.

## Architecture boundaries

### Local-first manuscript ownership

The native application can keep manuscripts in storage chosen by the author. A manuscript does not need to become proprietary server state merely because server-backed collaboration or integrations are enabled.

### Server-backed identity and services

Accounts, collaboration, peer review, cloud connectors and publishing-system integrations use the Studio API and PostgreSQL-backed services. Authentication identity is kept distinct from scholarly contributor identity. These features depend on the deployment being correctly configured and migrated.

### External integrations

OMI separates manuscript semantics from provider-specific authentication and transport. OJS, OMP, cloud storage, ORCID and future translation providers therefore connect through integration layers rather than becoming part of the core document model.

### Publishing-system authority

For connected OJS workflows, OJS remains authoritative for submission workflow state, assignments, rounds and editorial decisions. Studio acts as the structured authoring and review workspace and exchanges information through defined application endpoints rather than direct database coupling.

## Release and distribution

GitHub Actions produces release artifacts from the shared source tree for Windows, Linux, macOS and Android. The public Studio download page exposes browser access and native packages, including the Android universal APK. Native release quality is hardened independently from feature development through dependency locking, updater support, platform icons, code-signing policy, release automation and responsive UI testing.

The current development line is **0.1.0-alpha.4**. Feature work is increasingly being replaced by beta-readiness stabilization: regression testing of the primary workflows, platform hardening, interoperability verification and elimination of blocker/critical defects.

## Beta-readiness gate

The project is approaching its first beta. A beta release is appropriate when the primary Windows and Android workflows can be exercised without data loss or blocker/critical defects, particularly:

1. registration/login/logout and session restoration;
2. manuscript creation, opening, editing, saving and reopening;
3. DOCX import and representative structured export paths;
4. OJS manuscript round-trip and role-aware author/editor/reviewer workflows;
5. double-blind peer review without identity leakage;
6. native file handling, responsive navigation and Android lifecycle behavior;
7. understandable user-facing error handling for network, authentication and integration failures.

Experimental or configuration-dependent integrations do not need to be feature-complete to enter beta, provided their maturity is clearly identified and they do not compromise the stable core workflows.

## What remains before beta

The Studio is usable and distributed publicly, but the project deliberately retains an alpha designation while beta-readiness testing and release hardening continue:

- complete a focused Windows and Android regression pass across the beta-readiness gate;
- verify Android lifecycle behavior, native file selection/import/export and the signature/passkey workflow on supported devices;
- continue OJS round-trip and cross-version interoperability testing;
- complete implementation and end-to-end testing of the OMP connector;
- strengthen data-loss protection and recovery behavior for interrupted network/synchronization operations;
- replace remaining technical/raw error surfaces with actionable user-facing messages;
- integrate Windows production code signing if/when the SignPath Foundation application is accepted;
- continue macOS signing/notarization and store-oriented mobile distribution work;
- develop conformance suites mapping implementation behaviour directly to normative OMI requirements;
- establish release-level compatibility guarantees for supported import/export targets.

The presence of a feature in this implementation snapshot must not be interpreted as formal conformance with an OMI specification unless a corresponding conformance class and evidence are published separately.
