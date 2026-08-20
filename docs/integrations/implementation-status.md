---
title: Integration Implementation Status
sidebar_label: Integration Status
description: Current implementation status of Open Manuscript Studio integrations and external scholarly services.
---

# Integration Implementation Status

**Status date:** 2026-08-20  
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
| **OJS** | **Operational / configuration-dependent** | Signed launch assertions; role-aware author/editor/reviewer context; metadata and file exchange; DOCX manuscript import including structural and note handling; external review assignment hand-off; double-blind reviewer workspace; and authenticated Studio workflows are implemented. | Harden round-trip synchronization and publication return paths, expand compatibility testing across supported OJS versions and complete deployment/operator documentation. |
| **OMP** | **Specification + implementation target** | OMP Integration Profile v1 and a dedicated OMP plugin/integration code line exist as the basis for monograph, chapter, contributor, review and production mapping. | Complete and validate the deployable adapter/plugin and exercise the full Studio ↔ OMP workflow end to end. |
| **ORCID OAuth/OIDC** | **Configuration-dependent** | Account authentication/linking infrastructure, provider state handling and deployment configuration support are present. | Production credentials, callback registration, operational monitoring and broader identity-linking UX. |
| **Cloud / remote storage** | **Configuration-dependent** | Local-first native storage and connected-storage foundations including WebDAV/Nextcloud-style workflows are available. | Provider-specific authentication polish, broader provider coverage and production hardening. |
| **DeepL** | **Foundation** | Integration provider registry, authentication-mode metadata, catalogue UI and DeepL configuration/status scaffolding exist. | Authenticated translation requests, secure credential handling, language mapping, quotas/errors and manuscript-level translation workflow integration. |
| **Integration provider catalogue** | **Operational foundation** | Studio exposes an Integrations area, provider registry, authentication-mode metadata and status/configuration infrastructure. | Add production connectors progressively without coupling the OMI manuscript model to individual vendors. |
| **Bibliographic / identifier services** | **Partial / configuration-dependent** | ORCID and ROR-related identity support and bibliographic lookup foundations exist in the Studio codebase. | Consolidated provider policies, provenance/reconciliation rules, caching and broader registry coverage. |
| **Repository / preservation deposit** | **Planned** | Architecture supports external deposit and preservation adapters. | Define concrete connector profiles and implement reference adapters. |

## OJS implementation note

OJS is currently the most mature external publishing-platform integration in the reference implementation. The production architecture keeps OJS and Studio as separate applications with separate persistence layers. OJS remains authoritative for submission workflow, reviewer assignments, review rounds and editorial decisions; Studio provides the structured manuscript and review workspace.

The verified path has progressed beyond a conceptual launch profile. Studio can receive signed OJS context, retrieve manuscript files through integration endpoints, reconstruct manuscript structure from DOCX material, preserve supported inline semantics and notes, and expose role-aware author, editor and reviewer workflows. Externally assigned peer reviews can be accepted and handled in Studio while double-blind identity boundaries remain part of the review projection.

The integration deliberately uses application/API boundaries rather than direct access to the OJS database. This preserves deployment independence and makes protocol behaviour testable.

This does **not** mean that every operation described by the complete OJS Integration Profile v1 has reached final interoperability or conformance status. Round-trip synchronization, publication-return paths and wider version compatibility remain active hardening areas.

## OMP implementation note

OMP remains a first-class integration target and now has a dedicated implementation code line in addition to the protocol/profile work. Its maturity must still not be presented as equivalent to the exercised OJS path: complete monograph/chapter/review round trips require end-to-end validation before the connector can be described as operational.

## Native-client integration boundary

The web, desktop and Android applications share the Studio API and integration contracts. Native Tauri clients use authentication transport compatible with native application origins rather than assuming browser-only cookie behaviour. This allows the same account and integration services to be reached without forking the scholarly workflow implementation per platform.

## Authentication modes

The Studio integration layer distinguishes provider authentication models instead of assuming that every service can use the same credential type. Depending on the provider, an integration may use OAuth/OIDC, API keys or tokens, service credentials, signed launch assertions or deployment-managed credentials.

User-facing username/password login is only appropriate when the external provider explicitly supports such a flow. Credentials must not be inferred from a provider's consumer website login form.

## Identity separation

Studio account identity and scholarly contributor identity are intentionally distinct. Authentication establishes who may access Studio services; contributor records express scholarly authorship, affiliation, ORCID and contribution roles. External identity providers can link these layers without collapsing them into one data model.

## Product status versus OMI conformance

The statuses on this page describe the **Open Manuscript Studio product implementation**. They do not assign OMI conformance to a connector. Formal conformance requires versioned requirements, test fixtures and the capability/conformance framework.

For specification-level status, see the [OMI Implementation Status Matrix](../governance/implementation-status-matrix.md). For the broader Studio product baseline, see [Studio Implementation Status](../governance/studio-implementation-status.md).
