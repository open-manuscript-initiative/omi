# Open Manuscript Initiative (OMI)

> **Write naturally. Structure once. Publish everywhere.**

The **Open Manuscript Initiative (OMI)** is an open-source, platform-independent ecosystem for structured scholarly writing, peer review, publishing, interchange and preservation.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## What OMI is

OMI treats the scholarly manuscript — its structure, metadata, contributors, citations, annotations, revisions and review context — as the central portable object.

The goal is not to replace journal or publishing-management systems. OMI is designed to work independently or connect to platforms such as **Open Journal Systems (OJS)** and **Open Monograph Press (OMP)** through explicit integration boundaries.

## Open Manuscript Studio

**Open Manuscript Studio** is the working reference implementation of the OMI architecture.

Current `0.1.0-alpha.4` capabilities include:

- structured scholarly editing and search/replace;
- 24-language interface and localized help;
- server-backed accounts and profile management;
- ORCID authentication/linking infrastructure;
- double-blind peer review and editor/reviewer workflows;
- OJS manuscript and review integration;
- DOCX structural import with notes, inline semantics, lists and tables;
- portable `.omi.zip` and OMI JSON interchange;
- publishing exports including JATS XML, semantic HTML, DOCX, EPUB, PDF, IDML, XPress Tags, FrameMaker MIF, Scribus SLA and LaTeX;
- publisher profiles and publication-oriented rendering;
- WebDAV/Nextcloud direct backup, restore and connection management;
- provider-aware local synchronized-folder workflows for OneDrive, SharePoint, Google Drive, Dropbox, Nextcloud, iCloud Drive and other desktop sync clients;
- browser, Windows, Linux, macOS and Android delivery from a shared React/TypeScript + Tauri 2 code line;
- native save dialogs and file delivery in installed clients;
- desktop updater support and reproducible CI/release builds.

The hosted Studio is available at **studio.openmanuscript.org**. Native installers and the Android universal APK are published through the `open-manuscript-initiative/open-manuscript-studio` repository.

## Current maturity

**Project status:** active alpha / beta-readiness stabilization.

The project has moved beyond the early design/prototype stage. Core editing, accounts, review, OJS integration, structured import/export, native packaging and storage workflows are implemented and actively exercised. Current work focuses on regression testing, interoperability, recovery/error handling, OMP completion, platform signing/notarization and formal conformance evidence.

See:

- `docs/governance/studio-implementation-status.md` for the current Studio product snapshot;
- `docs/integrations/implementation-status.md` for integration maturity;
- `docs/governance/implementation-status-matrix.md` for specification-level implementation status;
- `docs/governance/roadmap-to-omi-1.0.md` for the standards roadmap.

## Core principles

- open standards and open-source reference implementations;
- semantic structure before presentation;
- manuscript portability and local-first ownership;
- interoperable publishing-system boundaries;
- identity and contributor separation;
- platform independence;
- human-centered scholarly editing;
- transparent versioning and review;
- long-term preservation and reproducibility.

## Architecture

```text
OMI specifications and scholarly object model
                  │
          Open Manuscript Studio
                  │
     ┌────────────┼────────────┐
     │            │            │
    Web        Desktop       Mobile
                  │            │
                Tauri 2      Tauri 2
     │            │            │
 Studio API ─ PostgreSQL ─ Integration adapters
                              │
                  OJS · OMP · ORCID · storage · future services
```

The manuscript model remains independent of the operating system and of external service credentials. Native capabilities and provider-specific integrations are layered around the shared scholarly core.

## Security and release engineering

The current Studio line includes API rate limiting, hardened server-side remote requests for publishing-system integrations, runtime request validation, safer import/export escaping and reduced browser persistence of sensitive integration credentials. Automated CI and security scanning are part of ongoing development.

JavaScript and Rust/Tauri dependency graphs are lockfile-controlled. GitHub Actions builds the shared web/native product line for Windows, Linux, macOS and Android. Windows code-signing preparation is documented separately and remains pending external signing-service acceptance/integration.

## Contributing

Contributions, implementation feedback, interoperability testing and specification review are welcome. Please see [CONTRIBUTING.md](CONTRIBUTING.md).

## License

The repository is licensed under the MIT License. See [LICENSE](LICENSE).
