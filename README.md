# Open Manuscript Initiative (OMI)

> **Write naturally. Structure once. Publish everywhere.**

The **Open Manuscript Initiative (OMI)** is an open-source, platform-independent ecosystem for structured scholarly writing, peer review, publishing, interchange and preservation.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

OMI treats the scholarly manuscript — structure, metadata, contributors, citations, annotations, revisions, review context and publication semantics — as the central portable object. The goal is to keep that object usable across applications, operating systems, institutions and publishing systems instead of rebuilding it at every hand-off.

## Open Manuscript Studio

**Open Manuscript Studio** is the OMI reference implementation.

Current public release line: **`0.1.0-beta.1`**.  
Project state: **public beta / active stabilization and interoperability development**.

The shared codebase targets Web, Windows, Linux, macOS, Android and iOS/iPadOS. Android is an operational public-beta target; iOS/iPadOS simulator/native builds are validated while public Apple distribution remains dependent on signing, provisioning and device/TestFlight validation.

### Latest development line

The September 2026 development line makes editing substantially more word-processor-like without flattening OMI structure:

- manuscript-wide editing order across section boundaries;
- paragraph split with Enter and compatible paragraph merge with Backspace/Delete;
- shared physical-keyboard and Android/iOS `beforeinput` handling;
- manuscript-level mouse/touch selection represented by OMI block IDs and offsets;
- **Ctrl+A / Cmd+A selects the complete textual manuscript**, not only one Tiptap block;
- Studio-native mobile selection actions while copy/cut still use the system clipboard;
- structural PDF import with raw bbox visual-row reconstruction for difficult footnote layouts;
- native Android PDF import routed to the Studio API;
- safer Android startup when IndexedDB session restoration is blocked.

The user should experience one continuous manuscript while headings, figures, tables, notes, citations, cross-references, versions and other semantic OMI objects remain explicit.

## Current capabilities

Studio includes structured rich-text authoring, large DOCX import, semantic indexes and generated document structures, multi-document desktop editing, publication styles and publisher profiles, double-blind peer review, OJS/OMP integration, ORCID and federated sign-in, institutional profiles and administration, native file workflows, profile-scoped cloud integrations, proofreading/translation integrations and publication-oriented export.

Portable output includes `.omi.zip`, OMI JSON, JATS XML, semantic HTML, DOCX, EPUB, LaTeX and multiple print/DTP-oriented formats.

## OMI Cloud and federated infrastructure roadmap

The long-term infrastructure direction is an **optional scalable and federatable OMI Cloud service layer**. Managed hosting must not replace local-first ownership or force manuscripts into one provider.

Three storage modes are intended to remain first-class:

1. portable local `.omi` documents;
2. account-linked managed OMI Cloud storage and synchronization;
3. institution-controlled compatible storage/private deployment.

A production-scale deployment would separate API delivery, PostgreSQL-backed transactional workspace/manuscript state, S3-compatible object storage for large assets and exports, and queue-driven background workers for expensive PDF/DOCX/import/export/validation jobs.

The architecture is intended to support cross-device workspaces and institutional collaboration while preserving data sovereignty, explicit EU/EEA residency options and straightforward export. The cloud direction is **planned and funding-dependent**, not an already deployed service.

Read the architecture: [OMI Cloud and Federated Infrastructure](https://openmanuscript.org/docs/foundations/omi-cloud-federated-infrastructure/).

## Platform status

| Platform | Current state |
|---|---|
| Web | Operational hosted Studio |
| Windows x64 | Operational native packages |
| Linux x64 | Automated AppImage/DEB builds |
| macOS Apple Silicon | Automated DMG build target |
| macOS Intel | Automated DMG build target |
| Android | Operational public beta APK |
| iOS / iPadOS | Validated native/simulator target; public distribution pending |

Hosted Studio: **https://studio.openmanuscript.org**  
Downloads: **https://openmanuscript.org/studio/**

## Architecture

```text
OMI specifications / scholarly object model
                 │
        Open Manuscript Studio
                 │
       Web · Desktop · Mobile
                 │
             Studio API
                 │
 identity · review · institution · integrations
                 │
OJS · OMP · ORCID · OIDC · storage · services · workers
```

The manuscript model remains separate from service identity, institution authority, external-service credentials and infrastructure location. Changing platform, institution or storage provider must not redefine the manuscript itself.

## Documentation

Public documentation: **https://openmanuscript.org/**

- [Vision](https://openmanuscript.org/docs/vision/)
- [Architecture Overview](https://openmanuscript.org/docs/foundations/architecture-map/)
- [Cross-platform Studio](https://openmanuscript.org/docs/foundations/cross-platform-studio/)
- [Word-like Manuscript Editing](https://openmanuscript.org/docs/foundations/word-like-manuscript-editing/)
- [Long-form Authoring](https://openmanuscript.org/docs/foundations/studio-long-form-authoring/)
- [OMI Cloud and Federated Infrastructure](https://openmanuscript.org/docs/foundations/omi-cloud-federated-infrastructure/)
- [Studio Implementation Status](https://openmanuscript.org/docs/governance/studio-implementation-status/)
- [Integration Status](https://openmanuscript.org/docs/integrations/implementation-status/)
- [Roadmap to OMI 1.0](https://openmanuscript.org/docs/governance/roadmap-to-omi-1.0/)

## Repositories

- `open-manuscript-initiative/omi` — specifications, architecture, governance and public website;
- `open-manuscript-initiative/open-manuscript-studio` — Studio reference implementation;
- `open-manuscript-initiative/omi-ojs-plugin` — OJS integration;
- `open-manuscript-initiative/omi-omp-plugin` — OMP integration.

## Contributing and license

Contributions, interoperability testing and specification review are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md).

MIT License. See [LICENSE](LICENSE).
