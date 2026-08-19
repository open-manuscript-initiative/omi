---
title: Cross-platform Studio Architecture
sidebar_label: Cross-platform Studio
---

# Cross-platform Studio Architecture

Open Manuscript Studio is designed as a single scholarly authoring environment that can run across the major desktop, mobile, and web platforms without fragmenting the manuscript model or workflow implementation.

The goal is not to maintain separate applications for each operating system. Instead, Studio shares one application core and one OMI manuscript model, while thin platform-specific layers provide native capabilities where they are required.

## Target platforms

The cross-platform architecture targets:

- **Web** — modern browsers
- **Windows** — desktop application
- **macOS** — desktop application
- **Linux** — desktop application
- **Android** — mobile application
- **iOS and iPadOS** — mobile application

The browser and desktop versions are already part of the Studio delivery model. Android and iOS support is being developed on the same Tauri 2 application foundation rather than as independent native rewrites.

## One Studio core

The central principle is that scholarly behavior remains platform-independent.

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
- metadata, contributor, citation, annotation, and versioning logic;
- multilingual interface and authoring support;
- authentication and account workflows;
- double-blind peer review behavior;
- OJS and OMP integration workflows;
- import, export, and publication-profile logic;
- validation and synchronization rules.

A feature implemented in the shared core should therefore become available to every supported platform unless the operating system itself requires a different implementation.

## Platform adapter layer

Native operating-system services are isolated behind a platform adapter instead of being embedded throughout the editor or scholarly model.

Typical adapter responsibilities include:

- opening and saving local files;
- secure credential and token storage;
- operating-system share sheets and "Open with" workflows;
- biometric unlock where available;
- application updates;
- push notifications;
- deep links;
- background synchronization;
- platform-specific permission handling.

Conceptually, shared application code can call a stable interface such as:

```text
platform.openFile()
platform.shareDocument()
platform.secureStore()
platform.openExternalLink()
```

The adapter then selects the appropriate browser, Windows, macOS, Linux, Android, or iOS implementation.

## Desktop and mobile interfaces

Cross-platform does not mean forcing the same screen layout onto every device.

Desktop Studio can use multi-panel workspaces with the document tree, editor, and properties visible together. Mobile Studio uses the same manuscript and editing logic but presents it through touch-oriented navigation, compact toolbars, drawers, and separate detail screens.

On tablets, responsive layouts can progressively restore multi-panel editing where screen size allows it.

This separation keeps the underlying scholarly document identical while allowing each device class to provide an appropriate user experience.

## Local-first portability

The cross-platform model reinforces a core OMI principle: the manuscript should not become dependent on a particular application installation or operating system.

A manuscript created on Windows should be usable on Linux, macOS, Android, iOS, or in the browser without converting it into a platform-specific document model. Local storage and synchronized storage remain possible, while server services are used where collaboration, accounts, publishing workflows, or integrations require them.

The OMI document model — not the operating system — remains the authoritative representation of the scholarly work.

## Mobile workflow direction

The planned mobile clients are intended to support more than passive reading. The target includes:

- account login and manuscript access;
- structured manuscript editing;
- document navigation and metadata editing;
- autosave and synchronization;
- author, editor, and reviewer roles;
- double-blind peer-review tasks;
- OJS and OMP workflow access;
- document import and sharing through native mobile interfaces;
- secure credential storage;
- later offline editing, deep links, biometrics, and push notifications.

Android and iOS will use the same Studio API and the same OMI workflow contracts as the web and desktop applications.

## Distribution model

The intended delivery model is:

| Platform | Delivery |
| --- | --- |
| Web | Hosted Open Manuscript Studio |
| Windows | Signed desktop installer |
| macOS | Signed and notarized desktop application |
| Linux | Desktop packages such as AppImage and DEB |
| Android | APK for testing and AAB for Google Play |
| iOS / iPadOS | Signed App Store build |

Release automation can build the platform artifacts from the same source repository while preserving platform-specific signing requirements.

## Why this matters for scholarly publishing

Cross-platform support is not only a deployment convenience. It supports the larger OMI objective of manuscript portability.

Authors, reviewers, editors, publishers, and institutions should be able to participate in the same scholarly workflow from different devices without creating incompatible copies of the work. Structure, annotations, citations, review state, metadata, and publication semantics should remain stable when the user changes operating system or form factor.

In this architecture, **the scholarly manuscript is portable by design, and the application follows the manuscript rather than locking the manuscript to the application.**

## Implementation status

The cross-platform architecture is being introduced incrementally. Web and desktop delivery are established parts of Studio. Mobile targets are being developed on the existing Tauri 2 foundation, with Android expected to be the first mobile target used for implementation testing and iOS/iPadOS following the same shared architecture.

For current implementation details, see [Studio Implementation Status](../governance/studio-implementation-status.md).
