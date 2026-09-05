---
title: Integration Architecture
description: Architectural principles, current implementation boundaries, and integration patterns for connecting Open Manuscript Studio to publishing and scholarly systems.
---

# Integration Architecture

Open Manuscript Initiative (OMI) is designed to remain independent of any single publishing platform or service. Open Manuscript Studio therefore runs as a separate application with its own persistence and connects to publishing, identity, storage, translation and scholarly services through explicit adapters.

> The manuscript is a portable scholarly object, not an internal record of a particular publishing system.

For the current product-level status of individual connectors, see [Integration Implementation Status](./implementation-status.md).

## Current implementation snapshot

As of 2026-09-05:

- **OJS** is operational in the current Studio workflow, subject to deployment configuration, and its complete anonymous review round-trip is verified in a native OJS 3.5 environment;
- **OMP** is operational subject to deployment configuration, with assigned-study isolation and complete anonymous review round-trip verification in a native OMP 3.5 environment;
- **ORCID OAuth** and connected storage are configuration-dependent integrations;
- the **integration provider catalog** and provider authentication-mode model are implemented foundations;
- **DeepL** currently has provider/configuration scaffolding, not a complete production translation workflow;
- repository deposit and additional scholarly infrastructure connectors remain future work.

These are implementation statements, not OMI conformance claims.

## Recommended architecture

```text
External scholarly / publishing system
Own application, identity and persistence
        |
        | Integration adapter / plugin / provider client
        | HTTPS + versioned API + explicit authentication
        v
Open Manuscript Studio
OMI manuscript services + Studio persistence
```

The integration layer MUST use application services and APIs rather than direct cross-database access. Studio MUST NOT read or write the internal database tables of a publishing platform, and an external platform MUST NOT depend on Studio's internal persistence schema.

This separation permits independent upgrades, isolates security boundaries and failures, and allows the OMI scholarly object model to evolve independently.

## System-of-record boundaries

Each connected system remains authoritative for the data it owns.

| Responsibility | Typical authoritative system |
|---|---|
| Submission and editorial workflow | Publishing platform |
| Editorial stage and decisions | Publishing platform |
| Reviewer invitation and assignment | Publishing platform |
| Review deadlines and external workflow state | Publishing platform |
| Publication/issue/catalog management | Publishing platform |
| Manuscript semantic structure | OMI / Studio |
| Stable manuscript anchors | OMI / Studio |
| Studio-native annotations | OMI / Studio |
| Collaborative manuscript editing | OMI / Studio |
| Structural manuscript revision history | OMI / Studio |
| Identity assertion | Identity provider / linked registry, with provenance retained by Studio |
| Remote-file authority | Connected storage provider |

Cross-system identifiers connect these records without merging their persistence models.

## Integration capability levels

OMI treats publishing-system integration as progressive capability rather than an all-or-nothing feature.

### Level 1 — Launch integration

The external platform provides an **Open in Studio** action. A short-lived authenticated assertion identifies the installation, context, object, actor and permitted scopes.

The current OJS implementation exercises this pattern with signed launch context.

### Level 2 — Metadata integration

The adapter exposes permitted submission/manuscript metadata such as localized titles, abstracts, keywords, contributors and identifiers. Synchronization MUST define field authority and provenance.

### Level 3 — File integration

Studio retrieves permitted manuscript files through authenticated application endpoints. It MUST NOT access private server file paths directly.

The current OJS path uses this architecture for source manuscript retrieval.

### Level 4 — Manuscript synchronization

A richer connector maps the structured OMI manuscript and derivatives to an external platform. Synchronization SHOULD be revision-oriented and MUST avoid silent replacement of historical source files.

### Level 5 — Peer review integration

The publishing platform remains authoritative for assignment, round, deadline and editorial decision. Studio provides the structured scholarly review workspace.

The current OJS/Studio implementation includes externally assigned review handling, role-aware reviewer/editor views and double-blind review foundations.

### Level 6 — Publication integration

After acceptance, Studio MAY generate publication derivatives or structured packages for downstream production. External publication systems normally remain authoritative for scheduling, issue/catalog assignment and public delivery.

## Authentication and trust

The integration layer does not assume a universal authentication method. Providers may require:

- signed short-lived launch assertions;
- OAuth/OIDC-style authorization;
- API keys or service tokens;
- deployment-managed service credentials;
- provider-specific application credentials.

The Studio provider registry can expose these authentication modes to the UI without treating them as interchangeable.

Production integrations MUST use HTTPS and least-privilege authorization. Credentials MUST NOT be committed to source code, included in manuscript packages, or exposed to the browser when they belong to server-side integration services.

Email/password login MUST NOT be invented for a provider merely because that provider has a consumer website login page. The provider's documented API authentication model is authoritative.

## OJS integration

OJS is currently the reference publishing-platform integration.

```text
OJS
  |
  | OMI integration plugin
  | - signed launch
  | - metadata and contributors
  | - manuscript files
  | - review assignment context
  | - revision/review exchange paths
  v
OMI Integration API / Studio service
  |
  v
Open Manuscript Studio
```

OJS remains authoritative for journal submission workflow, reviewer assignments, rounds, editorial decisions, issues and publication state. Studio remains authoritative for the OMI manuscript model and Studio-native manuscript/review state.

The implementation has moved beyond a conceptual connector: signed launch, source-file retrieval/import, external review assignment handling, required native review forms, manuscript corrections, separated reviewer feedback and signed writeback are present. Native OJS 3.5 end-to-end tests verify anonymous reviewer projections and assignment-scoped access. The complete [OJS Integration Profile v1](./ojs-profile-v1.md) remains broader than the currently verified production path, so not every profile operation should be described as conformant or complete.

## OMP integration

OMP remains a first-class target for monographs, edited volumes, chapters and press workflows.

The [OMP Integration Profile v1](./omp-profile-v1.md) defines the architectural mapping, including component-level authorship and review. The deployable OMP plugin now implements signed role-aware launch, monograph and study mapping, assignment-scoped file access, native review forms, corrections, separated feedback and signed writeback.

Native OMP 3.5 end-to-end tests verify that a reviewer receives only the assigned study projected as an anonymous article. Parent-monograph metadata, sibling studies, unassigned files and contributor identity remain outside that review projection. Formal OMI conformance and wider OMP-version compatibility remain separate future work.

## Integration provider catalog

Studio now includes an integration-provider registry and an Integrations UI. This layer is intended to make external services discoverable and configurable without hard-coding every provider into unrelated manuscript features.

A provider definition may describe:

- provider identity and category;
- supported authentication mode;
- configuration/status state;
- client/service capability;
- deployment requirements.

This is an extensibility foundation, not proof that every listed provider has a complete production connector.

## Identity services

### ORCID

ORCID OAuth support is configuration-dependent. Studio can expose identity-linking infrastructure, but production operation requires valid ORCID application registration, client credentials and callback configuration.

### ROR and scholarly identity metadata

ROR/affiliation and related identifier foundations can enrich OMI contributor data. External identifiers MUST retain provenance and MUST NOT replace the OMI contributor/agent model with vendor-specific records.

## Translation services

DeepL currently exists at the provider/configuration foundation level. The architecture supports a translation provider without granting it ownership of manuscript structure or translation provenance.

A production translation connector must additionally define secure authentication, source/target language mapping, quota/error handling, result provenance and how machine translation participates in version-aware manuscript translation workflows.

## Connected storage

The desktop Studio follows a local-first model and may save manuscripts to ordinary local or synchronized folders. Connected remote storage is a separate integration concern.

WebDAV/Nextcloud-style storage foundations can be configured where supported. Future provider-specific connectors should preserve the same rule: remote storage owns files/objects in that service; the OMI manuscript remains portable and exportable independently.

## Repository and preservation integration

A repository adapter may receive a finalized manuscript or preservation package. The repository remains authoritative for deposit identity, access policy and preservation state.

This area remains planned in the reference implementation and should use a dedicated integration profile rather than direct database coupling.

## Versioned Integration API

Integration endpoints SHOULD be versioned from the beginning, for example:

```text
/api/integrations/v1/...
```

Backward-incompatible changes require a new protocol version. Connectors SHOULD negotiate capabilities instead of assuming that every OMI implementation supports every operation.

The platform-neutral [Integration API v1](./integration-api-v1.md) and host profiles define protocol intent. Product implementation status is tracked separately on the [Integration Implementation Status](./implementation-status.md) page.

## Deployment patterns

### Same host, separate applications

```text
https://example.org/ojs/
https://example.org/omi/
```

Applications may share infrastructure while retaining separate persistence and service boundaries.

### Separate subdomains

```text
https://journal.example.org/
https://studio.example.org/
```

Separate virtual hosts provide clean routing and security boundaries and are suitable for many production installations.

### Separate infrastructure

The publishing system and Studio may run on different servers or be operated by different organizations. The same versioned protocol applies over HTTPS.

## Portability and graceful disconnection

An integration MUST NOT make the manuscript unusable when an external provider is unavailable. External integration state SHOULD be represented as identifiers, links, capabilities and provenance rather than undocumented dependencies on remote database structures.

This is a core OMI architectural property: external systems can orchestrate workflows around the manuscript, while the manuscript itself remains a portable scholarly object.

## Status discipline

Documentation MUST distinguish:

1. **normative protocol/specification status**;
2. **Open Manuscript Studio implementation status**;
3. **deployment/configuration readiness**;
4. **formal conformance evidence**.

A provider appearing in the integration catalog is not automatically production-ready. A Draft integration profile is not automatically implemented. Conversely, operational product behaviour may exist before a complete OMI conformance framework is available.

Use [Integration Implementation Status](./implementation-status.md) for the current reference-implementation baseline and the [OMI Implementation Status Matrix](../governance/implementation-status-matrix.md) for specification-level evidence.