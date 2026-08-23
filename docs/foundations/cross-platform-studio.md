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
| iOS / iPadOS | **Validated native build target** | iPhone/iPad simulator build succeeds; TestFlight/App Store distribution requires Apple Developer signing and final Universal Link association |

Android is no longer only an architectural or development target. A public universal APK is generated from the shared Tauri 2 code line and uses the same account, document, review, integration and export logic as the other clients, with mobile-specific responsive presentation and Android-native Documents/Storage Access Framework file handling.

iOS/iPadOS has also moved beyond architecture-only planning. CI now generates the Tauri/Xcode project, compiles the Apple Silicon iPhone/iPad simulator application and uploads the resulting simulator artifact. The remaining Apple-specific boundary is physical-device/public distribution: real Apple Developer signing, provisioning, Universal Link association and TestFlight/App Store validation are still required before a public iOS release is claimed.

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
                      ┌─────────┼─────────┐   ┌──┴────┐
                    Windows    macOS    Linux Android iOS/iPadOS
```

The shared core includes, wherever technically possible:

- the OMI scholarly manuscript model;
- structured editing and Tiptap-based document behavior;
- metadata, contributor, citation, annotation and versioning logic;
- multilingual interface and authoring support;
- authentication, password recovery and connected-identity workflows;
- double-blind peer review behavior;
- OJS and OMP integration workflows;
- institution membership and administration clients;
- import, export and publication-profile logic;
- validation, integration and storage rules.

A feature implemented in the shared core should therefore become available to every supported platform unless the operating system or form factor requires a different presentation or native implementation.

## Platform adapter layer

Native operating-system services are isolated behind platform adapters instead of being embedded throughout the editor or scholarly model. Current examples include native folder/file selection, native save dialogs, Android Documents/SAF access, Apple Files/UIDocumentPicker access, filesystem writes, persistent or security-scoped user-granted filesystem access, desktop updater behaviour and native external-authentication handoff.

Native authentication uses transport appropriate to application origins. Tauri clients can use bearer-session transport and share one-time external authentication handoff flows for ORCID and configured OIDC providers rather than assuming browser-only cookies.

## Desktop and mobile interfaces

Cross-platform does not mean forcing the same screen layout onto every device.

Desktop Studio now supports browser-style multi-document tabs, full-window Studio/Account surfaces and a toggleable Word-like document outline beside the editor. Mobile Studio uses the same manuscript and editing logic but presents it through touch-oriented navigation, compact controls, drawers and responsive panels. Tablets can progressively restore multi-panel editing where screen size permits it.

Current mobile work includes responsive navigation, document and details views, account/profile access, insertion controls, search, language switching, sign-out, ORCID/OIDC in-app-browser return handling, native file-provider opening/saving, native export delivery and consistent OMI Studio branding. Android uses Documents/SAF; iPhone/iPad uses Files/UIDocumentPicker. These are presentation/platform concerns; they do not require separate Android or Apple manuscript models.

## Local-first portability and device trust

The cross-platform model reinforces a core OMI principle: the manuscript should not become dependent on a particular application installation, cloud provider or operating system.

A manuscript created on Windows should be usable on Linux, macOS, Android, iOS/iPadOS or in the browser without conversion into a platform-specific document model. Portable `.omi.zip` and OMI JSON forms provide explicit interchange targets, while server services are used only where identity, collaboration, publishing workflows or direct integrations require them.

Installed clients now add a device-local trust distinction.

### Own device

When the signed-in user marks an installed device as their own, Studio can retain normal native working-file locations. Desktop targets can use local folders, mounted/network storage and folders synchronized by provider desktop clients. Android can use system-selected Documents/SAF destinations, while iPhone/iPad can use system-selected Files/UIDocumentPicker locations including iCloud Drive and available third-party document providers.

### Shared or foreign device

Newly seen devices default to shared/foreign-device mode. In this mode Studio does not retain the selected local working-file path. The normal persistent workflow prefers cloud connections belonging to the signed-in profile.

The user can still explicitly open or save a file to removable/portable storage or another system-provided document location, but the location is treated as a one-off destination and is not remembered as the current working file.

This avoids pretending that portable removable-drive detection is identical across every operating system while preserving the important security property: shared-device local paths are not retained.

## Provider-specific synchronized folders

Desktop Studio treats a locally synchronized folder as a connection method of the actual provider rather than as a generic pseudo-provider.

For OneDrive, SharePoint, Google Drive, Dropbox, Nextcloud, iCloud Drive and similar desktop-sync providers:

- the provider's own client performs authentication and synchronization;
- Studio never receives the provider password or OAuth token for this mode;
- the user selects a provider-synchronized folder through the native dialog;
- the path remains device-local and is isolated by signed-in user/provider/account type;
- user-granted filesystem scope can persist on an own device;
- Studio writes portable OMI files while the provider client handles network synchronization.

Direct WebDAV/Nextcloud connections remain a separate profile-scoped server integration with encrypted credentials.

## Android-native file workflow

Android uses the system Documents / Storage Access Framework surface rather than broad shared-storage permissions.

The current Android workflow supports:

- opening an existing OMI document through the system picker;
- Save to the current selected document target;
- Save to another location;
- portable `.omi.zip` backup;
- Android-relevant export formats including OMI JSON/package, JATS XML, HTML package, DOCX, LaTeX and EPUB.

Raw `content://` identifiers are implementation details and are not presented to the user as ordinary filesystem paths.

## iOS/iPadOS-native file workflow

iPhone and iPad use the Apple Files / UIDocumentPicker surface rather than broad filesystem access. Open operations request security-scoped document access and the Tauri filesystem layer reads/writes the user-selected `file://` URL.

Depending on installed providers and device configuration, the picker can expose:

- On My iPhone / On My iPad;
- iCloud Drive;
- connected external storage supported by iOS/iPadOS;
- third-party Files providers supplied by installed cloud-storage applications.

The iOS/iPadOS client uses the same mobile export set as Android: OMI package/JSON, JATS XML, HTML package, DOCX, LaTeX and EPUB. Desktop-oriented IDML, XTG, MIF, SLA and browser print/PDF choices are hidden instead of being shown as non-functional mobile actions.

For Apple-specific build, signing and Universal Link details, see [Open Manuscript Studio on iOS and iPadOS](./ios-ipados-studio.md).

## Cross-platform account identity

The same Studio account is designed to work across browser, desktop and mobile clients. Current shared identity features include:

- password registration/login/logout;
- single-use, expiring password-reset flow;
- ORCID sign-in/linking;
- Google, Microsoft and configurable institutional OpenID Connect;
- connected sign-in method management with lockout protection;
- personal profile data separated from institution-specific memberships;
- institution and central administration privileges kept separate from manuscript permissions.

External provider identities are linked by stable issuer/subject identity rather than by display name, and existing accounts are not silently merged on e-mail match alone.

Mobile clients use a one-time native authentication handoff. The preferred HTTPS application return is hosted under `app.openmanuscript.org`, with the `openmanuscript://` custom scheme retained as fallback. On iOS/iPadOS the production HTTPS return additionally requires Apple Universal Link association with the real Apple Development Team ID.

## Cross-platform export delivery

The export layer separates **format generation** from **file delivery**.

Hosted Studio uses ordinary browser downloads. Installed desktop clients use native save dialogs and binary filesystem writes. Android uses Documents/SAF destinations; iOS/iPadOS uses Files/UIDocumentPicker destinations. Both mobile targets intentionally limit the visible export list to formats meaningful on the platform.

This keeps one exporter implementation for the scholarly formats while allowing each platform to use an appropriate file-delivery mechanism.

## Shared account and workflow services

Web and native clients use the same Studio service boundary for account identity, institution membership, peer review and external integrations. The architecture separates four concerns:

1. **scholarly state** — manuscript, metadata, contributors, annotations and review content;
2. **service identity/state** — accounts, sessions and server-backed collaboration data;
3. **organization authority** — institution membership and central administration;
4. **platform capability** — native file access, packaging, updater behaviour and mobile/desktop shell integration.

This separation is important for portability: changing from browser to Windows, Android or iPad does not redefine the manuscript or peer-review protocol, and becoming an institution administrator does not automatically grant access to scholarly content.

## Multilingual and regional settings

The shared client currently exposes 24 European UI languages. Interface-language, manuscript-language and metadata-language preferences are managed together in a compact responsive settings surface. Time zones use standard IANA identifiers with UTC offsets and system-zone detection rather than free-text values, so account preferences remain portable across operating systems.

## Mobile workflow direction

The mobile clients are intended to support active scholarly work rather than passive reading. The shared target includes account login and manuscript access, structured editing, document navigation and metadata editing, author/editor/reviewer roles, double-blind peer review, publishing-system workflow access, native document import/export and secure platform capabilities.

Later native capabilities can include deeper offline operation, richer share/open-with workflows, biometrics and push notifications without moving those concerns into the OMI document model.

## Release engineering

Release automation builds Windows, Linux, macOS and Android artifacts from the shared repository. iOS/iPadOS now has a PR-triggered simulator smoke build that generates the Xcode project, compiles the Apple Silicon simulator application and stores the app artifact. A separate manual Apple release workflow is prepared for signed device/App Store Connect packaging once Apple Developer credentials are supplied.

Reproducibility is strengthened by lockfile-controlled JavaScript and Rust/Tauri dependency graphs and CI installation paths that reject lockfile drift.

The distribution model separates artifact creation from trust infrastructure. Windows code signing, macOS signing/notarization and Apple/Google mobile-store signing are release-hardening concerns layered on top of the shared application build.

## Why this matters for scholarly publishing

Cross-platform support is not only a deployment convenience. Authors, reviewers, editors, publishers and institutions should be able to participate in the same scholarly workflow from different devices without creating incompatible copies of the work. Structure, annotations, citations, review state, metadata and publication semantics should remain stable when the user changes operating system, storage provider or form factor.

In this architecture, **the scholarly manuscript is portable by design, and the application follows the manuscript rather than locking the manuscript to the application.**

## Implementation status

Web and Windows delivery are operational parts of Studio, Android is a public alpha target, Linux/macOS are automated native build targets, and iOS/iPadOS is now a validated native simulator build target on the same Tauri 2 architecture. The shared client includes multi-document desktop work, device-aware native storage, Android Documents/SAF handling, Apple Files/UIDocumentPicker handling, cross-device account identity and federated authentication in addition to the browser workflow. Public iOS/iPadOS distribution remains gated by Apple Developer signing, provisioning, Universal Link association and TestFlight/App Store validation.

For current implementation details, see [Studio Implementation Status](../governance/studio-implementation-status.md), [Open Manuscript Studio on iOS and iPadOS](./ios-ipados-studio.md), [Integration Implementation Status](../integrations/implementation-status.md) and [Institutional and Central Administration](../integrations/institutional-administration.md).
