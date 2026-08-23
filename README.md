# Open Manuscript Initiative (OMI)

> **Write naturally. Structure once. Publish everywhere.**

The **Open Manuscript Initiative (OMI)** is an open-source, platform-independent ecosystem for structured scholarly writing, peer review, publishing, interchange and preservation.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

OMI treats the scholarly manuscript — its structure, metadata, contributors, citations, annotations, revisions, review context and portable publication semantics — as the central object. The goal is to keep that object usable across applications, operating systems, institutions and publishing systems instead of rebuilding it at every hand-off.

## What OMI is

OMI is both:

1. an open specification family for portable scholarly manuscripts and workflows; and
2. an open-source reference implementation, **Open Manuscript Studio**, that exercises those specifications in real authoring, peer-review, editorial, institutional and publishing scenarios.

OMI is not intended to replace journal or monograph management systems. It is designed to work independently or connect to systems such as **Open Journal Systems (OJS)** and **Open Monograph Press (OMP)** through explicit integration boundaries.

The manuscript model remains separate from account identity, institution authority, external-service credentials and operating-system storage details.

## Open Manuscript Studio

**Open Manuscript Studio** is the working OMI reference implementation.

Current public release line: **`0.1.0-alpha.4`**.

Project state: **active alpha / beta-readiness stabilization**.

The implementation has moved well beyond the original editor prototype. Current capabilities include:

### Authoring and manuscript structure

- semantic scholarly manuscript editing;
- rich text, headings, lists, tables, notes, references and inline semantics;
- structured search and replace;
- browser-style multi-document desktop editing;
- Word-like document outline on desktop;
- large DOCX import optimization with deferred editor mounting;
- structural DOCX import preserving headings, inline formatting, notes, lists, references and tables;
- 24-language interface and localized help;
- portable `.omi.zip` and OMI JSON interchange.

### Identity, accounts and profiles

- server-backed accounts and sessions;
- secure password recovery with single-use expiring reset tokens;
- ORCID sign-in and explicit identity linking;
- Google and Microsoft OpenID Connect sign-in;
- configurable institutional/generic OIDC providers using Authorization Code + PKCE and issuer/state/nonce validation;
- connected sign-in identity management with lockout protection;
- personal profile data separated from scholarly contributor identity;
- multiple institution memberships and default affiliation selection;
- institution/ROR identity separated from membership-specific department, position, institutional e-mail and role.

### Institutional and central administration

- institution `MEMBER`, `ADMIN` and `OWNER` roles;
- institution administrator sign-in and role-protected management;
- separate OMI central `ADMIN` / `OWNER` privilege plane;
- institution-scoped machine API credentials;
- hashed, revocable, expiring Admin API tokens with explicit scopes;
- administrative audit events;
- no automatic manuscript/review/editorial-content access from institution or central-admin roles.

### Review and publishing workflows

- double-blind peer review;
- author, reviewer and editor views;
- review assignments, manuscript snapshots and comments;
- OJS launch/import/review workflows when configured;
- OMP connector architecture under end-to-end hardening;
- publisher profiles and publication-oriented rendering;
- publishing exports including JATS XML, semantic HTML, DOCX, EPUB, PDF, IDML, XPress Tags, FrameMaker MIF, Scribus SLA and LaTeX.

### Storage and portability

Installed Studio clients distinguish **own-device** and **shared/foreign-device** use.

On a trusted own device, native system storage can be used as the normal working location. Desktop users can work in local folders, external drives, network mounts or folders synchronized by OneDrive, SharePoint, Google Drive, Dropbox, Nextcloud, iCloud Drive and similar provider clients.

On a shared/foreign device, Studio does not retain a local working-file path as the normal persistent location. Profile-scoped cloud connections are preferred where available, while one-off removable storage such as a USB drive remains usable without being remembered as the long-term working path.

Direct WebDAV/Nextcloud connections are stored separately as profile-scoped server integrations with encrypted credentials.

### Android

Android is an **operational public alpha** target built from the same Tauri 2 code line.

The Android client uses the system **Documents / Storage Access Framework** for opening, Save, Save As, portable OMI backup and supported export destinations rather than requesting broad shared-storage permissions.

### iOS and iPadOS

The iOS/iPadOS target has moved from planning to a **validated native build target**.

Current state:

- Tauri/Xcode project generation succeeds;
- Apple Silicon iPhone/iPad simulator compilation succeeds in CI;
- native Files / UIDocumentPicker document handling is implemented;
- iPhone/iPad orientation metadata and iPad multitasking support are configured;
- mobile authentication uses the shared native one-time handoff flow;
- public TestFlight/App Store distribution remains pending Apple Developer signing/provisioning, production Universal Link association and physical-device validation.

No separate Apple-specific manuscript format or application fork is introduced.

### Proofreading, translation and AI-assisted services

The Studio integration layer now also includes:

- local spellcheck following manuscript language;
- optional grammar/style checking through configured services;
- structured DeepL translation;
- provider-neutral AI agents for language editing, metadata assistance, summarization and citation checking;
- scoped external-service execution and integration audit metadata;
- explicit protection boundaries for review-confidential content.

External-service features are configuration-dependent and do not become part of the OMI document model.

## Platform delivery

The shared Studio source line currently targets:

| Platform | Status |
|---|---|
| Web | Operational hosted Studio |
| Windows x64 | Operational native packages |
| Linux x64 | Automated AppImage/DEB build target |
| macOS Apple Silicon | Automated DMG build target |
| macOS Intel | Automated DMG build target |
| Android | Operational public universal APK |
| iOS / iPadOS | Validated simulator/native target; public Apple distribution pending |

The hosted Studio is available at **https://studio.openmanuscript.org**. Native downloads are published through the `open-manuscript-initiative/open-manuscript-studio` repository and linked from **https://openmanuscript.org/studio/**.

## Current maturity

The project is in **beta-readiness stabilization** rather than early prototype development.

The remaining beta gate is dominated by quality and trust work:

- focused regression testing across web, desktop, Android and iOS/iPadOS paths;
- large-document performance and recovery testing;
- migration and authorization regression coverage;
- OJS cross-version/interoperability testing;
- completion and hardening of the OMP connector;
- production-like password-reset and OIDC validation;
- Windows signing and macOS notarization;
- Apple TestFlight/device validation and App Store distribution preparation;
- formal conformance evidence against normative OMI requirements.

Implemented product capabilities and formal OMI specification conformance are intentionally tracked separately.

## Core principles

- open standards and open-source reference implementations;
- semantic structure before presentation;
- manuscript portability and local-first ownership;
- interoperable publishing-system boundaries;
- identity, contributor and institution-authority separation;
- platform independence;
- human-centered scholarly editing;
- explicit permissions for connected services;
- transparent versioning, review and administration;
- long-term preservation and reproducibility.

## Architecture

```text
                   OMI specification family
                             │
                     scholarly object model
                             │
                  Open Manuscript Studio
                             │
          ┌──────────────────┼──────────────────┐
          │                  │                  │
         Web              Desktop             Mobile
          │                  │                  │
       Browser             Tauri 2            Tauri 2
                      Windows/macOS/Linux   Android/iOS
                             │
                         Studio API
                             │
          identity · review · institution · integrations
                             │
          OJS · OMP · ORCID · OIDC · storage · services
```

The architecture separates four concerns:

1. **scholarly state** — manuscript, metadata, contributors, citations, annotations and review content;
2. **service identity/state** — accounts, sessions and collaboration services;
3. **organization authority** — institution membership and central administration;
4. **platform capability** — native file access, packaging, mobile/desktop shell behavior and trusted distribution.

Changing platform, institution or storage provider must not redefine the manuscript itself.

## Security and release engineering

The current Studio line includes:

- API rate limiting;
- OIDC PKCE/state/nonce and issuer/audience validation;
- explicit account-linking rules;
- hashed password-reset and Institution Admin API tokens;
- SSRF restrictions for server-side remote requests;
- encrypted storage for supported direct integration credentials;
- safer import/export validation and escaping;
- institution/central-admin authorization boundaries;
- integration and administration auditing;
- automated CI and security scanning.

JavaScript and Rust/Tauri dependency graphs are lockfile-controlled. GitHub Actions build and regression-check the shared product line across web, Windows, Linux, macOS, Android and iOS simulator targets.

Trusted public distribution remains a separate release-hardening layer: Windows SignPath integration, macOS signing/notarization and Apple Developer/TestFlight/App Store signing are tracked independently of application functionality.

## Documentation

The public OMI documentation is maintained at **https://openmanuscript.org/**.

Recommended starting points:

- [Vision](https://openmanuscript.org/docs/vision/)
- [Cross-platform Studio Architecture](https://openmanuscript.org/docs/foundations/cross-platform-studio/)
- [iOS and iPadOS Studio](https://openmanuscript.org/docs/foundations/ios-ipados-studio/)
- [Studio Implementation Status](https://openmanuscript.org/docs/governance/studio-implementation-status/)
- [Integration Implementation Status](https://openmanuscript.org/docs/integrations/implementation-status/)
- [Institutional and Central Administration](https://openmanuscript.org/docs/integrations/institutional-administration/)
- [Specification Implementation Matrix](https://openmanuscript.org/docs/governance/implementation-status-matrix/)
- [Roadmap to OMI 1.0](https://openmanuscript.org/docs/governance/roadmap-to-omi-1.0/)

## Repositories

Key repositories in the Open Manuscript Initiative organization include:

- `open-manuscript-initiative/omi` — specifications, architecture, governance and public website;
- `open-manuscript-initiative/open-manuscript-studio` — Studio reference implementation;
- OJS/OMP integration repositories — publishing-system adapters and plugins.

## Contributing

Contributions, implementation feedback, interoperability testing and specification review are welcome. Please see [CONTRIBUTING.md](CONTRIBUTING.md).

## License

This repository is licensed under the MIT License. See [LICENSE](LICENSE).
