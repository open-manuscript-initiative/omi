---
title: Open Manuscript Studio on iOS and iPadOS
sidebar_label: iOS and iPadOS Studio
description: Architecture, file handling, authentication, build validation and distribution status for Open Manuscript Studio on iPhone and iPad.
keywords:
  - Open Manuscript Studio
  - iOS
  - iPadOS
  - iPhone
  - iPad
  - Tauri
  - Files
  - UIDocumentPicker
  - Universal Links
  - TestFlight
  - App Store
---

# Open Manuscript Studio on iOS and iPadOS

Open Manuscript Studio uses the same React/TypeScript application core, OMI manuscript model and Tauri 2 native shell architecture on iPhone and iPad as on the other supported platforms. The iOS/iPadOS target is therefore not a separate product fork and does not introduce an Apple-specific manuscript format.

## Current status

The iOS/iPadOS target has moved from architecture-only planning to a **validated native build target**.

Current development status:

- Tauri iOS project generation succeeds in CI;
- the application compiles successfully for the Apple Silicon iPhone/iPad simulator;
- a simulator application artifact is produced by GitHub Actions;
- iPhone and iPad orientations and iPad multitasking metadata are configured;
- native Files/document-picker opening and saving are implemented;
- mobile-native authentication handoff is shared with Android;
- public TestFlight/App Store distribution is **not yet claimed**, because Apple Developer signing credentials and the final Universal Link association still have to be configured.

The current public Studio release line remains `0.1.0-alpha.4`. The iOS App Store bundle metadata uses an Apple-compatible short version/build pair while preserving the Studio release identity in the application UI and project documentation.

## Application identity

| Field | Current value |
|---|---|
| Bundle identifier | `org.openmanuscript.studio` |
| Minimum platform | iOS/iPadOS 14.0 |
| App Store short version | `0.1.0` |
| App Store build number | `4` |
| Studio development line | `0.1.0-alpha.4` |

The Apple short version/build numbering is packaging metadata. It does not change the OMI schema version or create a separate iOS document compatibility line.

## iPhone and iPad interface

The shared responsive Studio interface is used on both devices, with platform and form-factor adaptations rather than a separate editor implementation.

The iOS/iPadOS target supports:

- portrait and landscape operation on iPhone;
- the full supported orientation set on iPad;
- iPad multitasking-compatible layout metadata;
- indirect input such as hardware keyboard and trackpad/pointer use where supported by iPadOS;
- the same compact mobile navigation model used by the shared Studio client;
- progressive use of larger tablet space without changing manuscript semantics.

The long-term goal is that iPad can expose more of the desktop multi-panel workflow when screen size permits, while retaining touch-appropriate controls.

## Files and document-provider integration

Studio uses the Apple **Files / UIDocumentPicker** model rather than requesting broad filesystem access.

Depending on device configuration, the system picker can expose destinations such as:

- On My iPhone / On My iPad;
- iCloud Drive;
- connected external storage supported by iOS/iPadOS;
- third-party Files providers installed by the user, such as supported cloud-storage applications.

The current implementation opens user-selected documents with security-scoped access and reads/writes the selected `file://` document URL through the Tauri filesystem layer. The operating system remains responsible for presenting available document providers and enforcing their access boundaries.

Studio does not treat provider-internal document URLs as ordinary filesystem paths in the user interface.

### Own-device mode

When the user marks the installed client as their own device, the selected native document location can act as the current working document for the session/workflow.

### Shared or foreign device mode

The same device-trust policy used elsewhere in Studio applies: shared/foreign devices should prefer profile-scoped cloud storage for normal persistent work. One-off document open/save remains possible without retaining the selected path as the normal working location.

## Mobile export surface

The iOS/iPadOS client uses the same mobile-oriented export surface as Android. Formats currently intended to be shown on mobile are:

- portable OMI package (`.omi.zip`);
- OMI JSON (`.omi.json`);
- JATS XML (`.xml`);
- semantic HTML package (`.html.zip`);
- DOCX (`.docx`);
- LaTeX (`.tex`);
- EPUB (`.epub`).

Desktop-oriented publishing/export workflows are hidden on iPhone/iPad rather than being presented as non-functional choices:

- IDML;
- XPress Tags (XTG);
- FrameMaker MIF;
- Scribus SLA;
- browser print/PDF workflow.

The exporter implementations remain shared; only the native delivery surface and platform-appropriate visible format set differ.

## Authentication and native return handling

The iOS/iPadOS application uses the same server-backed Studio account as the browser, desktop and Android clients.

Supported shared authentication architecture includes:

- e-mail/password account login;
- password recovery through the Studio API;
- ORCID sign-in and linking;
- Google sign-in;
- Microsoft sign-in;
- configurable institutional OpenID Connect providers.

External authentication on mobile uses the native one-time handoff flow. The preferred application return target is:

```text
https://app.openmanuscript.org/auth/orcid/
```

with the custom-scheme fallback:

```text
openmanuscript://auth/
```

The handoff contains a one-time native authentication code rather than a reusable account password or provider token.

## Universal Links and Apple association

Production Universal Link activation requires an Apple App Site Association file at:

```text
https://app.openmanuscript.org/.well-known/apple-app-site-association
```

The association must contain the **real Apple Development Team ID** together with the bundle identifier `org.openmanuscript.studio` and the permitted authentication path.

The project intentionally does not guess or commit a placeholder production Team ID. The final AASA file should only be published once the real Apple Developer identity is available.

This is a distribution/configuration boundary, not a change to Studio authentication semantics.

## Build validation

The repository contains an iOS simulator smoke workflow running on macOS. Its purpose is to verify that iOS support remains a real compilable target rather than an untested configuration claim.

The smoke build performs the following sequence:

1. installs the locked frontend dependencies;
2. installs/configures the Rust iOS simulator target;
3. ensures the required Apple/CocoaPods toolchain is available;
4. generates the Tauri iOS/Xcode project and native icons;
5. compiles the Apple Silicon simulator application;
6. uploads the generated simulator application as a CI artifact.

The first iPhone/iPad simulator smoke build completed successfully in the iOS implementation work.

## Device and App Store builds

A simulator build does not require App Store distribution credentials. A real device/TestFlight/App Store build does.

The release workflow is prepared to consume these GitHub secrets:

```text
APPLE_DEVELOPMENT_TEAM
IOS_CERTIFICATE
IOS_CERTIFICATE_PASSWORD
IOS_MOBILE_PROVISION
```

No signing certificate, certificate password or provisioning profile should be committed to the repository.

After Apple Developer configuration is complete, the intended release sequence is:

1. configure the real Team ID and application capability/association data;
2. install the distribution certificate and provisioning profile securely in CI;
3. build/archive the signed iOS application on macOS;
4. export an IPA suitable for App Store Connect;
5. upload first to TestFlight for device and workflow regression testing;
6. only then publish through the App Store when the beta/release criteria are met.

## What remains before public iOS distribution

The core application target is now validated, but public Apple distribution still requires:

- active Apple Developer Program credentials;
- final Team ID and provisioning configuration;
- production `apple-app-site-association` publication for `app.openmanuscript.org`;
- signed physical-device build testing on representative iPhone and iPad hardware;
- TestFlight regression testing of login, Universal Link return, Files access, save/reopen, export and external-provider behavior;
- App Store metadata, privacy declarations and release review preparation.

These requirements should not be described as missing Studio architecture. They are the remaining Apple trust/distribution layer around an already compilable shared client.

## Relationship to the OMI model

iOS/iPadOS support does not modify the OMI document contract. A manuscript created on iPhone or iPad is intended to remain portable to web, Windows, Linux, macOS and Android clients using the same OMI model and supported interchange containers.

For the wider architecture, see [Cross-platform Studio Architecture](./cross-platform-studio.md). For the current product snapshot, see [Studio Implementation Status](../governance/studio-implementation-status.md).
