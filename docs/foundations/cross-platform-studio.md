---
title: Cross-platform Studio Architecture
sidebar_label: Cross-platform Studio
---

# Cross-platform Studio Architecture

Open Manuscript Studio is designed as a single scholarly authoring environment that runs across web, desktop and mobile targets without fragmenting the manuscript model or workflow implementation.

The project does not maintain unrelated applications for each operating system. Studio shares one React/TypeScript application core and one OMI manuscript model, while thin platform-specific layers provide native capabilities where required.

## Platform status

| Platform | Current status | Delivery direction |
|---|---|---|
| Web | **Operational** | Hosted Studio |
| Windows | **Operational** | Tauri 2 EXE/MSI |
| macOS | **Automated build target** | Intel and Apple Silicon DMG; signing/notarization hardening remains |
| Linux | **Automated build target** | AppImage and DEB |
| Android | **Operational public alpha** | Universal APK from the shared release workflow; store-oriented packaging later |
| iOS / iPadOS | **Planned on shared architecture** | Signed distribution after platform validation |

Android is no longer only an architectural or development target. A public universal APK is generated from the shared Tauri 2 code line and uses the same account, document, review, integration and export logic as the other clients, with mobile-specific responsive presentation.

## One Studio core

```text
                         OMI Studio Core
                                │
               ┌────────────────┼────────────────┐
               │                │                │
             Web UI         Desktop UI       Mobile UI
               │                │                │
            Browser           Tauri 2          Tauri 2
                                │                │
                      ┌─────────┼─────────┐   ┌──┴───┐
                    Windows    macOS    Linux Android iOS
```

The shared core includes, wherever technically possible:

- the OMI scholarly manuscript model;
- structured editing and Tiptap-based document behavior;
- metadata, contributor, citation, annotation and versioning logic;
- multilingual interface and authoring support;
- authentication and account workflows;
- double-blind peer review behavior;
- OJS and OMP integration workflows;
- import, export and publication-profile logic;
- validation and synchronization rules.

A feature implemented in the shared core should therefore become available to every supported platform unless the operating system or form factor requires a different presentation or native implementation.

## Platform adapter layer

Native operating-system services are isolated behind platform adapters instead of being embedded throughout the editor or scholarly model. Current examples include native folder/file selection, native save dialogs, filesystem writes, persistent user-granted filesystem scope and desktop updater behaviour. Future adapters can cover deeper share/open-with workflows, notifications, background synchronization and platform credential stores.

Native authentication also requires transport behaviour appropriate to application origins. The current Tauri client path supports authenticated Studio API access without assuming that the client is running as an ordinary hosted browser page.

## Desktop and mobile interfaces

Cross-platform does not mean forcing the same screen layout onto every device.

Desktop Studio can use multi-panel workspaces with document navigation, editor and properties visible together. Mobile Studio uses the same manuscript and editing logic but presents it through touch-oriented navigation, compact controls, drawers and responsive panels. Tablets can progressively restore multi-panel editing where screen size permits it.

Current Android work includes responsive bottom navigation, document and details views, account/profile access, insertion controls, search access, language switching, sign-out behaviour, native export delivery and consistent OMI Studio branding. These are presentation/platform concerns; they do not require a separate Android manuscript model.

## Local-first portability

The cross-platform model reinforces a core OMI principle: the manuscript should not become dependent on a particular application installation, cloud provider or operating system.

A manuscript created on Windows should be usable on Linux, macOS, Android, iOS or in the browser without conversion into a platform-specific document model. Portable `.omi.zip` and OMI JSON forms provide explicit interchange targets, while server services are used only where collaboration, accounts, publishing workflows or direct integrations require them.

### Locally synchronized folders

Desktop Studio can save portable OMI backups into a folder already synchronized by OneDrive, SharePoint, Google Drive, Dropbox, Nextcloud, iCloud Drive or another desktop synchronization client. In this mode:

- Studio does not receive the provider password or OAuth token;
- the user selects the folder through the native Tauri folder dialog;
- the selected path is stored only on the local device;
- the setting is isolated by signed-in user, provider and personal/business account type;
- the user-granted filesystem scope is persisted across restarts;
- access remains limited to explicitly granted paths instead of broad home-directory permissions.

The cloud provider's own desktop client performs the network synchronization. This gives authors a useful provider-independent local-first workflow without requiring every provider API to be implemented first.

## Cross-platform export delivery

The export layer now separates **format generation** from **file delivery**.

The hosted Studio uses ordinary browser downloads. Installed Tauri clients use native save dialogs and binary filesystem writes for supported export formats. This shared delivery layer is used for portable OMI output and publishing-oriented formats including OMI JSON, JATS, DOCX, EPUB, IDML, XPress Tags, FrameMaker MIF, Scribus SLA and LaTeX. Semantic HTML is delivered as the offline HTML package so referenced assets travel with the document; PDF remains tied to the publication-profile print flow.

This avoids browser-only download assumptions in native applications while keeping one exporter implementation for all platforms.

## Shared account and workflow services

Web and native clients use the same Studio service boundary for account identity, peer review and external integrations. The architecture therefore separates three concerns:

1. **scholarly state** — manuscript, metadata, contributors, annotations and review content;
2. **service identity/state** — accounts, sessions and server-backed collaboration data;
3. **platform capability** — native file access, packaging, updater behaviour and mobile/desktop shell integration.

This separation is important for portability: changing from browser to Windows or Android does not redefine the manuscript or peer-review protocol.

## Multilingual and regional settings

The shared client currently exposes 24 European UI languages. Interface-language, manuscript-language and metadata-language preferences are managed together in a compact responsive settings surface. Time zones use standard IANA identifiers with UTC offsets and system-zone detection rather than free-text values, so account preferences remain portable across operating systems.

## Mobile workflow direction

The mobile clients are intended to support active scholarly work rather than passive reading. The shared target includes account login and manuscript access, structured editing, document navigation and metadata editing, author/editor/reviewer roles, double-blind peer review, publishing-system workflow access, native document import/export and secure platform capabilities.

Later native capabilities can include deeper offline operation, deep links, biometrics and push notifications without moving those concerns into the OMI document model.

## Release engineering

Release automation builds Windows, Linux, macOS and Android artifacts from the shared repository. Reproducibility is strengthened by lockfile-controlled JavaScript and Rust/Tauri dependency graphs and CI installation paths that reject lockfile drift.

The distribution model separates artifact creation from trust infrastructure. Windows code signing, macOS signing/notarization and mobile-store signing are release-hardening concerns layered on top of the shared application build.

## Why this matters for scholarly publishing

Cross-platform support is not only a deployment convenience. Authors, reviewers, editors, publishers and institutions should be able to participate in the same scholarly workflow from different devices without creating incompatible copies of the work. Structure, annotations, citations, review state, metadata and publication semantics should remain stable when the user changes operating system, storage provider or form factor.

In this architecture, **the scholarly manuscript is portable by design, and the application follows the manuscript rather than locking the manuscript to the application.**

## Implementation status

Web and Windows delivery are operational parts of Studio, Android is a public alpha target, and Linux/macOS are automated native build targets. The shared client now includes native file delivery and persistent user-approved synchronized-folder access in addition to the browser workflow. iOS/iPadOS remains a later validated distribution target on the same Tauri 2 architecture.

For current implementation details, see [Studio Implementation Status](../governance/studio-implementation-status.md) and [Integration Implementation Status](../integrations/implementation-status.md).
