---
title: OMP Integration Plugin
sidebar_label: OMP Plugin
slug: /integrations/omp-plugin
---

# OMI OMP Integration Plugin

The **OMI OMP Integration Plugin** connects Open Monograph Press (OMP) 3.5.x with Open Manuscript Studio through the OMI Integration API. OMP remains authoritative for press workflow, monograph submissions, review rounds, review assignments and private file storage; Studio communicates only through signed, application-level integration endpoints.

## Current release

**Stable release:** `v1.2.2`  
**Target platform:** OMP 3.5.x  
**License:** GNU GPL v3.0

A PKP-compliance hardening update is being prepared as `v1.2.3`; until it is released, the downloads below point to the current stable `v1.2.2` package.

### Download

- **[Download OMP plugin v1.2.2 — ZIP](https://github.com/open-manuscript-initiative/omi-omp-plugin/releases/download/v1.2.2/studioIntegration-omp-3.5-v1.2.2.zip)**
- **[Download OMP plugin v1.2.2 — TAR.GZ](https://github.com/open-manuscript-initiative/omi-omp-plugin/releases/download/v1.2.2/studioIntegration-omp-3.5-v1.2.2.tar.gz)**
- [SHA-256 checksums](https://github.com/open-manuscript-initiative/omi-omp-plugin/releases/download/v1.2.2/SHA256SUMS.txt)
- [Latest GitHub release](https://github.com/open-manuscript-initiative/omi-omp-plugin/releases/latest)

The release archive uses `studioIntegration/` as its package root for PKP-compatible installation.

## Main capabilities

The OMP connector is monograph-aware and preserves OMP-specific workflow semantics rather than treating OMP as OJS with different labels. Current integration areas include:

- signed launch into Open Manuscript Studio;
- explicit editor, author and reviewer modes;
- least-privilege role scopes;
- press and monograph identity mapping;
- native OMP 3.5 repository-backed metadata and contributor reads;
- protected submission-file listing and binary transfer;
- component-aware architecture for chapters and other book parts;
- reviewer file access bound to the concrete PKP review assignment;
- native PKP review-form reading and response persistence;
- assignment-scoped reviewer attachment upload;
- review-round-scoped author revision upload;
- internal-review and external-review revision stages;
- native capability discovery for OMP-specific review behavior;
- signed review comment/form writeback.

OMP 3.5 currently reports that customizable reviewer recommendations are not supported by the host application. The connector therefore does not fabricate OJS-style recommendation identifiers and does not encode synthetic recommendation values into comments.

## Installation

Install the archive through the OMP plugin management interface where supported, or unpack it as:

```text
plugins/generic/studioIntegration/
```

After enabling the plugin, configure:

- **Studio URL** — the Open Manuscript Studio base URL;
- **Installation ID** — a stable identifier for the OMP installation;
- **Shared secret** — the server-side integration secret shared with Studio;
- **Token lifetime** — a short launch-assertion lifetime.

Production deployments should use HTTPS. Studio must not receive direct database credentials or private OMP filesystem access.

## OMP-specific workflow model

The connector preserves OMP concepts including:

- presses;
- monographs and edited volumes;
- chapters and publication components;
- book-level and component-level contributors;
- author, editor, translator and chapter-author roles;
- internal and external review stages;
- concrete review rounds and review assignments;
- traceable author revisions and reviewer attachments.

Reviewer completion remains authoritative in the native OMP workflow because completion triggers additional PKP behavior such as notifications, logging and invitation-state finalization.

## Architecture and API

The connector uses the OMI integration profile:

```text
omi-integration/1/omp
```

Related documentation:

- [Integration Architecture](./architecture.md)
- [OMI Integration API v1](./integration-api-v1.md)
- [OMP Integration Profile v1](./omp-profile-v1.md)
- [Integration Implementation Status](./implementation-status.md)
- [Studio Deployment Modes](./studio-deployment-modes.md)

## Security model

The implementation follows PKP repository and workflow boundaries instead of bypassing OMP internals. Important controls include:

- short-lived HMAC-SHA256 launch assertions;
- submission and press binding;
- role-scoped permissions;
- reviewer assignment validation;
- current review-stage and review-round validation for revision uploads;
- PKP `ReviewFilesDAO` authorization for reviewer-visible source files;
- native `Repo::submissionFile()` storage and validation semantics;
- file-genre validation against the current press;
- completed review assignments treated as read-only;
- no direct cross-database access.

## PKP compatibility and compliance documentation

The plugin repository documents the API provenance and the remaining boundary between technical compatibility and official PKP acceptance:

- [PKP compatibility notes](https://github.com/open-manuscript-initiative/omi-omp-plugin/blob/main/PKP_COMPATIBILITY.md)
- [Security policy](https://github.com/open-manuscript-initiative/omi-omp-plugin/blob/main/SECURITY.md)
- [Installation guide](https://github.com/open-manuscript-initiative/omi-omp-plugin/blob/main/INSTALL.md)

Official Plugin Gallery inclusion still requires PKP maintainer review and installation-level testing on a supported, unmodified OMP release.

## AI-assisted development disclosure

Development of the plugin has received substantial generative-AI assistance in architecture, implementation, PKP API analysis, security review, CI/CD, testing and documentation. Human maintainers remain responsible for code submitted or released to users, and PKP-dependent behavior is checked against the actual OMP/PKP source and test results.

- [AI contribution declaration](https://github.com/open-manuscript-initiative/omi-omp-plugin/blob/main/AI-DECLARATION.md)

## Source and project documentation

- [Source repository](https://github.com/open-manuscript-initiative/omi-omp-plugin)
- [README](https://github.com/open-manuscript-initiative/omi-omp-plugin/blob/main/README.md)
- [Installation guide](https://github.com/open-manuscript-initiative/omi-omp-plugin/blob/main/INSTALL.md)
- [PKP compatibility](https://github.com/open-manuscript-initiative/omi-omp-plugin/blob/main/PKP_COMPATIBILITY.md)
- [Security](https://github.com/open-manuscript-initiative/omi-omp-plugin/blob/main/SECURITY.md)
- [Changelog](https://github.com/open-manuscript-initiative/omi-omp-plugin/blob/main/CHANGELOG.md)
- [License](https://github.com/open-manuscript-initiative/omi-omp-plugin/blob/main/LICENSE)
- [All releases](https://github.com/open-manuscript-initiative/omi-omp-plugin/releases)

## PKP status

The plugin has been engineered against current OMP/PKP 3.5 workflow and repository APIs, but availability from this website does **not** itself constitute official PKP Plugin Gallery approval. The project distinguishes explicitly between implementation compatibility, tested interoperability and formal PKP acceptance.
