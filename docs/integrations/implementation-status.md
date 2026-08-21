---
title: Integration Implementation Status
sidebar_label: Integration Status
description: Current implementation status of Open Manuscript Studio integrations and external scholarly services.
---

# Integration Implementation Status

**Status date:** 2026-08-22  
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
| **OJS** | **Operational / configuration-dependent** | Signed launch assertions; role-aware author/editor/reviewer context; metadata and file exchange; DOCX manuscript import including structural and note handling; external review assignment hand-off; double-blind reviewer workspace; authenticated Studio workflows; hardened trusted-origin request handling. | Continue round-trip synchronization and publication-return hardening, compatibility testing across supported OJS versions and operator documentation. |
| **OMP** | **Specification + implementation target** | OMP Integration Profile v1 and a dedicated OMP plugin/integration code line exist as the basis for monograph, chapter, contributor, review and production mapping. | Complete and validate the deployable adapter/plugin and exercise the full Studio ↔ OMP workflow end to end. |
| **ORCID OAuth/OIDC** | **Configuration-dependent** | Account authentication/linking infrastructure, deployment-specific personal/institutional credential routing, Sandbox/Production selection and user-visible environment indication are implemented. | Production credential registration, callback configuration, operational monitoring and broader identity-linking UX. |
| **Locally synchronized storage** | **Operational on desktop** | Studio can write portable `.omi.zip` backups into folders already synchronized by OneDrive, SharePoint, Google Drive, Dropbox, Nextcloud, iCloud Drive or another desktop sync client. No provider password or OAuth token is given to OMI for this mode. The selected folder is remembered per signed-in user/provider/account type and its user-granted filesystem scope persists across app restarts. | Continue recovery testing for interrupted local/provider synchronization and broaden native-platform validation. |
| **WebDAV / Nextcloud direct storage** | **Configuration-dependent** | Direct connections support encrypted server-side credentials, connection testing, portable backup upload, integrity verification, restore and deletion. | Provider-specific UX polish, operational monitoring and broader interoperability testing. |
| **Cloud provider catalogue** | **Operational foundation** | Provider → personal/business account type → connection-method selection is implemented for local folder, Nextcloud, WebDAV, OneDrive, SharePoint, Google Drive, Dropbox and iCloud Drive. Platform capability determines which connection method is offered. | Add direct OAuth 2.0 connectors progressively for providers where native/local synchronization is not the desired mode. |
| **DeepL** | **Foundation** | Integration provider registry, authentication-mode metadata, catalogue UI and DeepL configuration/status scaffolding exist. | Authenticated translation requests, secure credential handling, language mapping, quotas/errors and manuscript-level translation workflow integration. |
| **Integration provider catalogue** | **Operational** | Studio exposes an Integrations area, provider registry, authentication-mode metadata, availability/configuration state and storage configuration UI. | Add production connectors progressively without coupling the OMI manuscript model to individual vendors. |
| **Bibliographic / identifier services** | **Partial / configuration-dependent** | ORCID and ROR-related identity support and bibliographic lookup foundations exist. Browser persistence of sensitive provider API keys has been reduced as part of security hardening. | Consolidated provider policies, provenance/reconciliation rules, caching and broader registry coverage. |
| **Repository / preservation deposit** | **Planned** | Architecture supports external deposit and preservation adapters. | Define concrete connector profiles and implement reference adapters. |

## OJS implementation note

OJS is currently the most mature external publishing-platform integration in the reference implementation. The production architecture keeps OJS and Studio as separate applications with separate persistence layers. OJS remains authoritative for submission workflow, reviewer assignments, review rounds and editorial decisions; Studio provides the structured manuscript and review workspace.

The verified path has progressed beyond a conceptual launch profile. Studio can receive signed OJS context, retrieve manuscript files through integration endpoints, reconstruct manuscript structure from DOCX material, preserve supported inline semantics and notes, and expose role-aware author, editor and reviewer workflows. Externally assigned peer reviews can be accepted and handled in Studio while double-blind identity boundaries remain part of the review projection.

Server-side requests derived from OJS launch context are constrained to the administrator-registered installation origin and hardened against unsafe redirects, private/reserved targets, path traversal and request-controlled authority changes. This is part of the current integration security baseline rather than a change to the OJS protocol itself.

The integration deliberately uses application/API boundaries rather than direct access to the OJS database. This preserves deployment independence and makes protocol behaviour testable.

This does **not** mean that every operation described by the complete OJS Integration Profile v1 has reached final interoperability or conformance status. Round-trip synchronization, publication-return paths and wider version compatibility remain active hardening areas.

## OMP implementation note

OMP remains a first-class integration target and has a dedicated implementation code line in addition to the protocol/profile work. Its maturity must not be presented as equivalent to the exercised OJS path: complete monograph/chapter/review round trips require end-to-end validation before the connector can be described as operational.

## Storage integration model

Studio now distinguishes two storage patterns rather than treating every cloud provider as a remote API connector.

**Locally synchronized folder.** The author's existing provider client performs authentication and synchronization. Studio only receives a local folder selected through the native file dialog, writes the portable OMI package there, and persists the narrowly granted filesystem scope on the device. The folder path is not sent to the Studio API.

**Direct connection.** Studio itself connects to a storage service. The currently implemented direct path is WebDAV/Nextcloud with encrypted server-side credentials. OAuth 2.0 is the intended direct-authentication path for providers such as OneDrive, SharePoint, Google Drive and Dropbox, but those OAuth connectors are not represented as operational until implemented and tested.

This distinction keeps local-first storage useful immediately while avoiding misleading claims about direct provider integrations that do not yet exist.

## Native-client integration boundary

The web, desktop and Android applications share the Studio API and integration contracts. Native Tauri clients use authentication transport compatible with native application origins rather than assuming browser-only cookie behaviour. Native clients also use platform save dialogs for supported export and local-backup operations, while the hosted Studio uses browser downloads.

## Authentication modes

The Studio integration layer distinguishes provider authentication models instead of assuming that every service can use the same credential type. Depending on the provider, an integration may use OAuth/OIDC, API keys or tokens, service credentials, signed launch assertions, deployment-managed credentials, or no OMI-held provider credential at all when a local synchronization client performs authentication.

User-facing username/password login is only appropriate when the external provider explicitly supports such a flow. Credentials must not be inferred from a provider's consumer website login form.

## Identity separation

Studio account identity and scholarly contributor identity are intentionally distinct. Authentication establishes who may access Studio services; contributor records express scholarly authorship, affiliation, ORCID and contribution roles. External identity providers can link these layers without collapsing them into one data model.

## Product status versus OMI conformance

The statuses on this page describe the **Open Manuscript Studio product implementation**. They do not assign OMI conformance to a connector. Formal conformance requires versioned requirements, test fixtures and the capability/conformance framework.

For specification-level status, see the [OMI Implementation Status Matrix](../governance/implementation-status-matrix.md). For the broader Studio product baseline, see [Studio Implementation Status](../governance/studio-implementation-status.md).
