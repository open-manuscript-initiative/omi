---
title: OJS Integration Plugin
sidebar_label: OJS Plugin
slug: /integrations/ojs-plugin
---

# OMI OJS Integration Plugin

**Updated 20 November 2026:** [RC2 versions and build evidence](/docs/studio/releases/1.0.0-rc.2). See the new guides for [publication templates, cover sheets and OJS Production](/docs/studio/publication-editor), [editable notes](/docs/studio/notes-and-formatting) and [family trees/research projects](/docs/studio/research-projects).

The **OMI OJS Integration Plugin** connects Open Journal Systems (OJS) 3.5.x with Open Manuscript Studio through the OMI Integration API. OJS remains the authority for journal workflow, submission identity, review assignments and protected files; Studio does not read the OJS database or private file storage directly.

## New in the 1.8 integration line

- Read the native workflow stage and compare selected title, subtitle, abstract and keyword fields by language. Import license/copyright explicitly; contributor identity, DOI and publication assignment remain controlled by OJS.
- Prepare publisher-styled HTML and/or one PDF mode in Studio, preview the exact files and transfer them to an existing unpublished OJS Production publication with native permissions and verified receipts. This does not publish the article.
- Version 1.8.7 repairs portable OJS class loading and verifies native HTTP behavior before release. The package is not tied to one installation domain; each installation still needs its own valid configuration and credentials.

See [the publication-editor workflow](/docs/studio/publication-editor). Update the Studio frontend/API and the OJS plugin together as required by each capability; OMP's separately versioned plugin does not inherit OJS features.

## PKP 3.5.0-6 compatibility

The compatibility matrix includes OJS **3.5.0-4, 3.5.0-5 and 3.5.0-6**. Each version has its own installation job; the selected PKP source version is checked before plugin loading. The Studio workflow suite also includes both new -6 targets, covering launch, protected files, anonymous review and writeback.

OJS retains its Stable acceptance requirements. The -6 update includes API anonymity and access-control fixes, ORCID/ROR improvements and publication-version corrections. Read the [source review and test details](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/main/docs/pkp-3.5.0-6-review.md). A matrix extension requires passing CI evidence and does not imply PKP certification or publish a new plugin archive.

## Last verified release reference

**Previously verified release:** `v1.8.7`
**Target platform:** OJS 3.5.x  
**License:** GNU GPL v3.0

### Download

- **[Download OJS plugin v1.8.7 — ZIP](https://github.com/open-manuscript-initiative/omi-ojs-plugin/releases/download/v1.8.7/studioIntegration-ojs-3.5-v1.8.7.zip)**
- **[Download OJS plugin v1.8.7 — TAR.GZ](https://github.com/open-manuscript-initiative/omi-ojs-plugin/releases/download/v1.8.7/studioIntegration-ojs-3.5-v1.8.7.tar.gz)**
- [SHA-256 checksums](https://github.com/open-manuscript-initiative/omi-ojs-plugin/releases/download/v1.8.7/SHA256SUMS.txt)
- [Latest GitHub release](https://github.com/open-manuscript-initiative/omi-ojs-plugin/releases/latest)

The release archive contains the plugin under the `studioIntegration/` package root expected by PKP plugin installation workflows.

## Main capabilities

The current connector provides role-aware Studio launch and signed integration access for OJS author, editor and reviewer workflows. Implemented integration areas include:

- signed, short-lived launch assertions;
- explicit author, editor and reviewer modes;
- least-privilege role scopes;
- OJS submission metadata and contributor transfer;
- reviewer candidate discovery for editors;
- protected submission-file listing and binary transfer;
- reviewer file authorization bound to the concrete OJS review assignment;
- native OJS review-form reading and response writeback;
- author-visible and editor-only review comments;
- double-blind reviewer access boundaries;
- server-to-server HMAC-signed writeback;
- stable file-genre metadata for source-file selection;
- native OJS 3.5 end-to-end verification of anonymous reviewer access, required review forms, manuscript corrections, separated feedback and signed review writeback.

Reviewer launch assertions intentionally do not receive contributor or reviewer-identity scopes. Reviewer files are constrained by the PKP review assignment rather than by a broad submission-level file permission.

## Installation

Install the archive using the OJS plugin upload interface where supported, or unpack it as:

```text
plugins/generic/studioIntegration/
```

After enabling the plugin, configure the Studio URL, installation identifier, shared integration secret and launch-token lifetime. Production installations should use HTTPS.

The OJS and Studio databases remain separate. Do not provide Studio with direct OJS database credentials or private filesystem access.

## Architecture and API

The connector uses the OMI integration profile:

```text
omi-integration/1/ojs
```

The broader API and profile documentation is available here:

- [Integration Architecture](./architecture.md)
- [OMI Integration API v1](./integration-api-v1.md)
- [OJS Integration Profile v1](./ojs-profile-v1.md)
- [OJS Manuscript File Import](./ojs-file-import.md)
- [Integration Implementation Status](./implementation-status.md)

## Security model

Security-sensitive operations are performed through OJS/PKP application-level APIs and repository services. The connector uses short-lived signed assertions for interactive launch flows and HMAC-SHA256 signed service requests for protected writeback.

The design follows these boundaries:

- OJS remains authoritative for workflow and review assignments;
- Studio receives only explicitly scoped data;
- reviewer access is assignment-bound;
- private files are transferred only after OJS-side authorization;
- secrets stay server-side;
- review writeback is validated against the active OJS assignment and form definition.

## AI-assisted development disclosure

Development of the plugin has received substantial generative-AI assistance in architecture, implementation, PKP API analysis, security review, CI/CD, testing and documentation. The project maintains explicit human responsibility for submitted code and verifies PKP-dependent behavior against the actual PKP/OJS source and test results.

The repository contains an explicit AI contribution disclosure for PKP-facing review:

- [AI contribution declaration](https://github.com/open-manuscript-initiative/omi-ojs-plugin/blob/main/AI-DECLARATION.md)

## Source and project documentation

- [Source repository](https://github.com/open-manuscript-initiative/omi-ojs-plugin)
- [README](https://github.com/open-manuscript-initiative/omi-ojs-plugin/blob/main/README.md)
- [Changelog](https://github.com/open-manuscript-initiative/omi-ojs-plugin/blob/main/CHANGELOG.md)
- [License](https://github.com/open-manuscript-initiative/omi-ojs-plugin/blob/main/LICENSE)
- [All releases](https://github.com/open-manuscript-initiative/omi-ojs-plugin/releases)

## PKP status

The plugin is designed against PKP/OJS 3.5 APIs and is being prepared for PKP-facing review. Publication on the OMI website and availability as an installable release do **not** mean that the plugin has already been accepted into the official PKP Plugin Gallery. Official Gallery inclusion remains subject to PKP maintainer review and compatibility validation.


## Release evidence policy — 2026-11-07

OJS 3.5.0-4, 3.5.0-5 and 3.5.0-6 each require a version-specific automated E02 result and manual acceptance. The current receipt has 14 gates including `ojs-3.5.0-6`. Historical 13-gate receipts do not approve the expanded scope. Capability discovery and permissions still determine available actions. [Support and acceptance policy](https://openmanuscript.org/docs/governance/studio-1.0-architecture/pkp-support-2026-11-07/).

## Planned issues — 1.9.1 preparation

Merged source supports manager-scoped complete planned issue import, exact-target publication artifact transfer, article DOI metadata and reviewed printed page writeback. [Plugin 1.9.1 preparation](https://github.com/open-manuscript-initiative/omi-ojs-plugin/pull/50) is not a verified downloadable release. See [RC5 rollout](/docs/studio/releases/1.0.0-rc.5). Live editorial acceptance is pending; no automatic publication.

## Current source status — 27 November 2026

RC5 is merged, including complete planned OJS issue import, study-specific author editing, multilingual title-matter shortcodes and study-aware running headers. Studio #1090 and #1091, OJS #52 and #53 are merged. OJS main declares 1.9.2.0; an earlier package at the same version may predate #53. Check archive provenance and live editorial acceptance.

Last verified references: web/Android 1.0.0-rc.2, desktop 0.3.0-beta.13, Store 1.0.0.0; historical OJS v1.8.7 and OMP v1.5.1. Not newly verified live versions.

[Studio #1091](https://github.com/open-manuscript-initiative/open-manuscript-studio/pull/1091) · [OJS #53](https://github.com/open-manuscript-initiative/omi-ojs-plugin/pull/53) · [RC5 #1089](https://github.com/open-manuscript-initiative/open-manuscript-studio/pull/1089) · [Update](/docs/studio/updates/2026-11-27)
