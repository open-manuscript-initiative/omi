---
title: Integration Implementation Status
sidebar_label: Integration Status
description: Current implementation status of Open Manuscript Studio integrations and external scholarly services.
---

# Integration Implementation Status

**Status date:** 2026-08-18  
**Scope:** Open Manuscript Studio reference implementation  
**Authority:** Informative implementation report; the integration specifications remain normative where applicable.

This page separates **implemented product behaviour** from **protocol design** and **planned connectors**. A documented integration profile does not by itself mean that the corresponding production connector is complete.

## Status vocabulary

| Status | Meaning |
|---|---|
| **Operational** | Implemented and exercised in the current Studio workflow. Deployment-specific configuration may still be required. |
| **Configuration-dependent** | Implemented in Studio, but requires administrator credentials, endpoints, OAuth registration, or an external service. |
| **Foundation** | Data model, UI, provider registry, client or configuration scaffolding exists, but the end-to-end production integration is not yet complete. |
| **Specification only** | The protocol/profile is documented, but the reference implementation does not yet provide the complete connector. |
| **Planned** | Intended integration area without a complete implementation baseline. |

## Current integration matrix

| Integration | Current status | Implemented evidence / current scope | Remaining work |
|---|---|---|---|
| **OJS** | **Operational / configuration-dependent** | Signed launch flow, OJS assignment context, metadata and file exchange, DOCX manuscript import, review assignment hand-off, externally assigned peer review handling, and Studio review workflow are implemented. | Continue hardening round-trip synchronization, publication return paths, compatibility testing across supported OJS versions, and deployment documentation. |
| **OMP** | **Specification only** | OMP Integration Profile v1 defines the monograph, chapter, contributor, review and production mapping. | Implement and test the deployable OMP adapter/plugin and end-to-end Studio connector. |
| **ORCID OAuth** | **Configuration-dependent** | OAuth deployment setup and account/identity connection infrastructure are present. | Production credentials, deployment-specific callback registration, operational monitoring and broader identity workflows. |
| **Cloud / remote storage** | **Configuration-dependent** | Local-first desktop storage and connected-storage foundations including WebDAV/Nextcloud-style workflows are available. | Provider-specific authentication polish, broader provider coverage and production hardening. |
| **DeepL** | **Foundation** | Integration provider registry, authentication-mode metadata, integration catalog UI and DeepL configuration/status scaffolding exist. | Implement authenticated translation requests, secure credential handling, language mapping, quotas/errors and manuscript-level translation workflow integration. |
| **Integration provider catalog** | **Operational foundation** | Studio exposes an Integrations area, provider registry, authentication-mode metadata and status/configuration UI infrastructure. | Add production connectors progressively without coupling the OMI manuscript model to individual vendors. |
| **Bibliographic / identifier services** | **Partial / configuration-dependent** | ORCID and ROR-related identity support and bibliographic lookup foundations exist in the Studio codebase. | Consolidated provider policies, provenance/reconciliation rules, caching and broader registry coverage. |
| **Repository / preservation deposit** | **Planned** | Architecture supports external deposit and preservation adapters. | Define concrete connector profiles and implement reference adapters. |

## OJS implementation note

OJS is currently the most mature external publishing-platform integration in the reference implementation. The production architecture keeps OJS and Studio as separate applications with separate persistence layers. OJS remains authoritative for submission workflow, reviewer assignments, review rounds and editorial decisions; Studio provides the structured manuscript and review workspace.

The implementation has progressed beyond the conceptual profile: externally assigned peer reviews can be handled in Studio, role-aware editor/reviewer views exist, and the integration can transfer manuscript material through application endpoints rather than direct database access.

This does **not** mean that every operation described by the complete OJS Integration Profile v1 has reached final interoperability or conformance status. The profile remains broader than the currently verified production path.

## OMP implementation note

OMP remains a first-class integration target, but its status must not be presented as equivalent to OJS. The OMP profile is currently an architectural and protocol specification for monographs, edited volumes, chapters and press workflows. A complete deployable OMP connector still needs implementation and end-to-end testing.

## Authentication modes

The Studio integration layer now distinguishes provider authentication models instead of assuming that every service can use the same credential type. Depending on the provider, an integration may use OAuth, API keys/tokens, service credentials, signed launch assertions or deployment-managed credentials.

User-facing username/password login is only appropriate when the external provider explicitly supports such a flow. Credentials must not be inferred from a provider's consumer website login form.

## Product status versus OMI conformance

The statuses on this page describe the **Open Manuscript Studio product implementation**. They do not assign OMI conformance to a connector. Formal conformance requires versioned requirements, test fixtures and the future capability/conformance framework.

For specification-level status, see the [OMI Implementation Status Matrix](../governance/implementation-status-matrix.md). For the broader Studio product baseline, see [Studio Implementation Status](../governance/studio-implementation-status.md).
