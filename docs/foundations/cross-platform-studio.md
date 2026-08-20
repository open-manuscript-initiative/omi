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
| macOS | **Build target** | Intel and Apple Silicon DMG; signing/notarization hardening remains |
| Linux | **Build target** | AppImage and DEB |
| Android | **Operational development build** | Universal APK for testing; store-oriented packaging later |
| iOS / iPadOS | **Planned on shared architecture** | Signed App Store build after platform validation |

Android is no longer only an architectural target: the Tauri application has been built and exercised on a physical Android client, including server-backed account login. Mobile UI hardening remains active work.

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

Native operating-system services are isolated behind platform adapters instead of being embedded throughout the editor or scholarly model. Typical responsibilities include opening and saving local files, secure credential/token storage, share/open-with workflows, application updates, deep links, notifications, background synchronization and permission handling.

Native authentication also requires transport behaviour appropriate to application origins. The current Tauri client path supports authenticated Studio API access without assuming that the client is running as an ordinary hosted browser page.

## Desktop and mobile interfaces

Cross-platform does not mean forcing the same screen layout onto every device.

Desktop Studio can use multi-panel workspaces with document navigation, editor and properties visible together. Mobile Studio uses the same manuscript and editing logic but presents it through touch-oriented navigation, compact controls, drawers and responsive panels. Tablets can progressively restore multi-panel editing where screen size permits it.

Current Android testing is also being used to harden practical responsive behaviour: long-document scrolling, insertion controls, search access, language switching, footer/navigation visibility, sign-out behaviour and consistent Studio branding. These are presentation-layer issues; they do not require a separate Android manuscript model.

## Local-first portability

The cross-platform model reinforces a core OMI principle: the manuscript should not become dependent on a particular application installation or operating system.

A manuscript created on Windows should be usable on Linux, macOS, Android, iOS or in the browser without conversion into a platform-specific document model. Local storage and synchronized storage remain possible, while server services are used where collaboration, accounts, publishing workflows or integrations require them.

The OMI document model — not the operating system — remains the authoritative representation of the scholarly work.

## Shared account and workflow services

Web and native clients use the same Studio service boundary for account identity, peer review and external integrations. The architecture therefore separates three concerns:

1. **scholarly state** — manuscript, metadata, contributors, annotations and review content;
2. **service identity/state** — accounts, sessions and server-backed collaboration data;
3. **platform capability** — native file access, packaging, updater behaviour and mobile/desktop shell integration.

This separation is important for portability: changing from browser to Windows or Android does not redefine the manuscript or peer-review protocol.

## Mobile workflow direction

The mobile clients are intended to support active scholarly work rather than passive reading. The shared target includes account login and manuscript access, structured editing, document navigation and metadata editing, autosave/synchronization, author/editor/reviewer roles, double-blind peer review, OJS/OMP workflow access, native document import/sharing and secure credential storage.

Later native capabilities can include deeper offline operation, deep links, biometrics and push notifications without moving those concerns into the OMI document model.

## Release engineering

Release automation builds platform artifacts from the shared repository. Reproducibility is strengthened by locking the Rust/Tauri dependency graph with `src-tauri/Cargo.lock`, reducing differences between a successful local native build and later CI resolution.

The distribution model separates artifact creation from trust infrastructure. Windows code signing, macOS signing/notarization and mobile-store signing are release-hardening concerns layered on top of the shared application build.

## Why this matters for scholarly publishing

Cross-platform support is not only a deployment convenience. Authors, reviewers, editors, publishers and institutions should be able to participate in the same scholarly workflow from different devices without creating incompatible copies of the work. Structure, annotations, citations, review state, metadata and publication semantics should remain stable when the user changes operating system or form factor.

In this architecture, **the scholarly manuscript is portable by design, and the application follows the manuscript rather than locking the manuscript to the application.**

## Implementation status

Web and Windows delivery are operational parts of Studio, and Android has reached an operational development-build stage with authenticated API access exercised on-device. Linux/macOS remain automated native build targets, while iOS/iPadOS follows the same Tauri 2 architecture as a later validated distribution target.

For current implementation details, see [Studio Implementation Status](../governance/studio-implementation-status.md) and [Integration Implementation Status](../integrations/implementation-status.md).
