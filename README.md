# Open Manuscript Initiative (OMI)

> **Write naturally. Structure once. Publish everywhere.**

The **Open Manuscript Initiative (OMI)** is an open-source, platform-independent ecosystem for structured scholarly writing, peer review, publishing, interchange and preservation.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

OMI treats the scholarly manuscript — structure, metadata, contributors, citations, annotations, revisions, review context and publication semantics — as the central portable object. The goal is to keep that object usable across applications, operating systems, institutions and publishing systems instead of rebuilding it at every hand-off.

## Open Manuscript Studio

**Open Manuscript Studio** is the OMI reference implementation.

Current **Web and Android APK release: `1.0.0-rc.2`**. Desktop public downloads: **`0.3.0-beta.13`**.

Web Studio and the signed direct-install Android APK are RC2. [RC2 availability, download and changes](docs/studio/releases/1.0.0-rc.2.md). Linux native and macOS remain Preview; iOS/iPadOS Experimental. Google Play is a separate distribution channel.
Project state: **Web/Android RC; desktop stabilization and interoperability development**.

The shared codebase targets Web, Windows, Linux, macOS, Android and iOS/iPadOS. Studio 0.3.0-beta.13 packages native TLS and Tokio security updates, native plugin fixes and more reliable macOS DMG creation. The portable manuscript format remains `OMI-SPEC-320@0.3.0`. Published releases remain immutable and bound to their exact build commit; Google Play requires a separate signed release run. See the [release notes](docs/studio/releases/0.3.0-beta.13.md) for packaging identities and deployment steps. iOS public distribution still depends on signing, provisioning and device/TestFlight validation.

### 25 November development update

Merged Studio changes include expanded native Word exchange, persistent note insertion and formatted previews, and adaptive editor caching. [RC4 preparation](docs/studio/releases/1.0.0-rc.4.md) is separate from the verified release channels above. See [the update](docs/studio/updates/2026-11-25.md) and [memory guide](docs/studio/performance-and-memory.md).

### November 2026 capabilities

- Publication editor with reusable volume/journal templates, complete cover sheets, title matter, rich text/graphic frames and automatic paper-based spine calculation.
- Combined ISBN/eISBN, print ISSN/eISSN, DOI and other publication identifiers.
- Directly editable formatted notes, shared header formatting, inline/marginal/numbered note output and an optional starred funding note.
- Family-tree and relationship-network modules, GEDCOM/GEXF/GraphML import, portable research projects and file-provider cloud synchronization with conflict decisions.
- Revision-bound native copyediting/proofs; selected multilingual OJS metadata reconciliation and publisher-styled HTML/PDF transfer to OJS Production.

See the [20 November update](docs/studio/updates/2026-11-20.md), [publication guide](docs/studio/publication-editor.md), [notes guide](docs/studio/notes-and-formatting.md) and [research-project guide](docs/studio/research-projects.md). These are implemented source capabilities with the documented deployment and workflow prerequisites.

### Latest development line

The November 2026 development line makes editing and publication substantially more direct without flattening OMI structure:

- manuscript-wide editing order across section boundaries;
- paragraph split with Enter and compatible paragraph merge with Backspace/Delete;
- shared physical-keyboard and Android/iOS `beforeinput` handling;
- manuscript-level mouse/touch selection represented by OMI block IDs and offsets;
- **Ctrl+A / Cmd+A selects the complete textual manuscript**, not only one Tiptap block;
- Studio-native mobile selection actions while copy/cut still use the system clipboard;
- structural PDF import with raw bbox visual-row reconstruction for difficult footnote layouts;
- native Android PDF import routed to the Studio API;
- one-step responsive Studio navigation on desktop and mobile;
- cross-platform update notifications with current-release fallback;
- separate printed/archive and interactive PDF export modes;
- safer Android startup when IndexedDB session restoration is blocked;
- provenance-safe immutable release publishing;
- section-level rulers, tabs, columns and text-to-table conversion;
- InDesign-compatible paragraph styles with live publication rendering;
- Studio-native submission, peer review, editorial acceptance and verified publication for non-OJS/OMP venues;
- reusable personal reference libraries and per-document bibliography selection.

The user should experience one continuous manuscript while headings, figures, tables, notes, citations, cross-references, versions and other semantic OMI objects remain explicit.

## Current capabilities

Studio includes structured rich-text authoring, large DOCX import, semantic indexes and generated document structures, multi-document desktop editing, publication styles and publisher profiles, double-blind peer review, OJS/OMP integration, ORCID and federated sign-in, institutional profiles and administration, native file workflows, profile-scoped cloud integrations, proofreading/translation integrations and publication-oriented export.

Portable output includes `.omi.zip`, OMI JSON, JATS XML, semantic HTML, DOCX, EPUB, LaTeX and multiple print/DTP-oriented formats. PDF output can be generated either for print/archive use without active links or as an interactive document preserving usable internal and external links.

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
