---
id: studio-implementation-status
title: Open Manuscript Studio — Current Implementation Status
sidebar_label: Studio Implementation Status
description: Current implementation snapshot for the Open Manuscript Studio reference implementation.
keywords:
  - Open Manuscript Studio
  - implementation status
  - beta
  - Android
  - iOS
  - iPadOS
  - peer review
  - OJS
  - OMP
  - desktop
  - multilingual
  - export
  - institutional administration
  - OIDC
  - storage
---

# Open Manuscript Studio — Current Implementation Status

## Snapshot

| Field | Value |
|---|---|
| Status | **Public beta** |
| Snapshot date | 2026-08-28 |
| Current release line | `0.1.0-beta.1` |
| Reference implementation | Open Manuscript Studio |
| Source repository | `open-manuscript-initiative/open-manuscript-studio` |
| Web target | Modern browsers |
| Desktop targets | Windows x64, Linux x64, macOS Intel, macOS Apple Silicon |
| Mobile targets | Android public universal APK; iOS/iPadOS validated native simulator target, with TestFlight/App Store distribution pending Apple Developer signing |
| Web deployment | `studio.openmanuscript.org` |

This page describes **implemented product capabilities**, not OMI specification conformance. Formal specification maturity and conformance evidence are tracked separately in the [OMI Implementation Status Matrix](./implementation-status-matrix.md).

## Status vocabulary

- **Operational** — implemented in the current Studio beta line and available when its normal runtime prerequisites are present.
- **Configuration-dependent** — implemented, but requires installation-specific server credentials, OAuth/OIDC registration, mail delivery, an external service, database migration, or a publishing-system connection.
- **Foundation** — architecture, registry, UI or configuration support exists, but the complete end-user service is not yet claimed as operational.

## Current beta capabilities

The public beta includes the shared browser/desktop/mobile manuscript core, multi-document desktop editing, structured rich-text authoring, block-type transformation, highlighted search and replace, multilingual help, optimized large-DOCX import with stable deferred rendering, dynamic Word/XE name indexes, portable OMI storage, broad scholarly export, double-blind peer review and OJS-connected author/editor/reviewer workflows.

### Identity, authentication and signatures

- **Accounts and authentication — Operational.** Server-backed registration/login, logout, session restoration and authenticated API access work in web and native clients.
- **Google and Microsoft sign-in — Configuration-dependent.** Google, Microsoft and configurable institutional OpenID Connect providers use Authorization Code + PKCE, state/nonce checks, discovery/JWKS validation and explicit identity linking. Existing accounts are not automatically linked by e-mail alone.
- **ORCID authentication — Configuration-dependent.** ORCID OAuth/OIDC sign-in and account linking are implemented, with separate Sandbox/Production credential sets.
- **Portable ORCID-bound author signatures — Configuration-dependent.** Immutable server-committed revision snapshots can be bound to verified ORCID author identity using WebAuthn signing, encrypted installation issuer keys and portable verification evidence.
- **Password recovery — Configuration-dependent.** Single-use expiring reset tokens, generic account-existence responses and session revocation after successful password changes are implemented; working server mail delivery is required.

### Manuscripts and authoring

- **Structured manuscript editing — Operational.** Semantic sections, headings, inline formatting, lists, notes, references, tables and structured content handling.
- **Desktop multi-document workspace — Operational.** Browser-style tabs and a toggleable Word-like document outline support long-form navigation.
- **Search and replace — Operational.** Find/replace mode, result navigation and visible match highlighting are available in the editor.
- **Block transformations — Operational.** The active paragraph/block can be converted between paragraph, heading levels, block quote, bullet list, numbered list and code block.
- **DOCX structural import — Operational.** Headings, inline semantics, lists, footnotes/endnotes, references and structured tables are imported. Large imports use deferred editor mounting with matching preview typography to avoid visible line-spacing jumps.
- **Dynamic Word indexes — Operational.** Word XE markers are preserved as semantic manuscript locations. Studio presents navigable index occurrences, and DOCX export writes XE/INDEX fields so Word can generate final page-number indexes.

### Review, publishing and integrations

- **Double-blind peer review — Operational.** Anonymous reviewer projection, assignments, reviewer workspace, comments and review persistence.
- **OJS workflows — Configuration-dependent.** Signed launch assertions, manuscript/file retrieval, structured import and connected author/editor/reviewer workflows are implemented when OJS integration is configured.
- **OMP connector — In stabilization.** Connector architecture exists; end-to-end hardening continues.
- **Proofreading and translation — Configuration-dependent.** Local spellcheck is operational; LanguageTool-compatible grammar/style checking, DeepL translation and provider-neutral AI agents are available through configured services.
- **Institutional administration — Configuration-dependent.** MEMBER/ADMIN/OWNER roles, central OMI administration, scoped institution Admin API credentials and append-only administration audit events are implemented without granting manuscript-content access.

### Storage, export and native applications

- **Portable OMI export — Operational.** `.omi.zip` and OMI JSON are first-class interchange forms.
- **Publishing exports — Operational.** JATS XML, semantic offline HTML, DOCX, EPUB, PDF, IDML, XPress Tags, FrameMaker MIF, Scribus SLA and LaTeX are represented in the export layer.
- **Device-aware storage — Operational on installed clients.** Trusted personal devices and shared/foreign devices use different persistence policies; explicit portable/removable storage remains available.
- **Android application — Operational public beta.** The universal Tauri 2 APK includes server-backed authentication, OIDC/ORCID native return handling, responsive navigation, Documents/Storage Access Framework file handling and native export delivery.
- **iOS/iPadOS application — Validated native build target.** Simulator builds succeed in CI with Files/UIDocumentPicker integration. Public TestFlight/App Store distribution still requires Apple Developer signing, provisioning, Universal Link association and physical-device validation.
- **Windows application — Operational beta build target.** EXE/MSI packaging and native file/authentication flows are implemented. The SignPath Foundation open-source code-signing application is submitted/pending, so production Windows signing is not yet claimed.
- **macOS application — Operational build target.** Intel/Apple Silicon DMG targets exist; production signing/notarization remains release-hardening work.

## Cross-platform architecture

Studio uses a shared React/TypeScript + OMI manuscript core across web, desktop and mobile. Tauri 2 provides native packaging and platform capabilities. Desktop can expose document tabs, outline and multi-panel editing, while mobile uses compact navigation, drawers, touch-oriented controls and platform-native file pickers. These are presentation differences over the same manuscript model.

Local-first manuscript ownership remains an architectural boundary: native clients can keep manuscripts in storage chosen by the author, while server-backed identity, collaboration, review and integrations are used only where those services require them.

## Release and distribution

The current public release line is **`0.1.0-beta.1`**. GitHub Actions produces Windows, Linux, macOS and Android artifacts from the shared source tree and runs an iOS/iPadOS simulator smoke build.

The Android universal APK is a **public beta** build. iOS/iPadOS currently has a validated simulator build rather than a public IPA; TestFlight/App Store publication requires Apple signing/provisioning and final Universal Link configuration.

Windows production code signing remains pending the SignPath Foundation application. macOS signing/notarization is also not yet claimed. These distribution-trust items do not change the Studio product maturity designation: the application line is now **public beta**, while unsigned/notarization-pending packages are explicitly identified as such.

## Beta stabilization priorities

The beta phase now concentrates on regression coverage and release hardening rather than basic product scaffolding. Priorities are:

1. Windows and Android regression testing, plus iOS/iPadOS physical-device validation when Apple signing is available;
2. production-like testing of password recovery, Google/Microsoft/OIDC linking and cross-device sessions;
3. OJS round-trip and cross-version interoperability regression testing, plus OMP end-to-end stabilization;
4. interrupted network/cloud recovery and actionable user-facing error handling;
5. Windows production signing after SignPath acceptance, macOS signing/notarization and Apple TestFlight/App Store preparation;
6. conformance suites mapping implementation behaviour to normative OMI requirements and release-level compatibility guarantees.

Experimental or configuration-dependent integrations remain explicitly labelled and do not imply that every external provider is enabled on every deployment.
