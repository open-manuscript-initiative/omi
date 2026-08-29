---
title: OJS Integration Plugin
sidebar_label: OJS Plugin
slug: /integrations/ojs-plugin
---

# OMI OJS Integration Plugin

The **OMI OJS Integration Plugin** connects Open Journal Systems (OJS) 3.5.x with Open Manuscript Studio through the OMI Integration API. OJS remains the authority for journal workflow, submission identity, review assignments and protected files; Studio does not read the OJS database or private file storage directly.

## Current release

**Stable release:** `v1.2.0`  
**Target platform:** OJS 3.5.x  
**License:** GNU GPL v3.0

### Download

- **[Download OJS plugin v1.2.0 — ZIP](https://github.com/open-manuscript-initiative/omi-ojs-plugin/releases/download/v1.2.0/studioIntegration-ojs-3.5-v1.2.0.zip)**
- **[Download OJS plugin v1.2.0 — TAR.GZ](https://github.com/open-manuscript-initiative/omi-ojs-plugin/releases/download/v1.2.0/studioIntegration-ojs-3.5-v1.2.0.tar.gz)**
- [SHA-256 checksums](https://github.com/open-manuscript-initiative/omi-ojs-plugin/releases/download/v1.2.0/SHA256SUMS.txt)
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
- stable file-genre metadata for source-file selection.

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
