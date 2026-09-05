---
title: Integration Implementation Status
sidebar_label: Integration Status
description: Current implementation status of Open Manuscript Studio integrations and external scholarly services.
---

# Integration Implementation Status

**Status date:** 2026-09-05  
**Scope:** Open Manuscript Studio reference implementation  
**Authority:** Informative implementation report; the integration specifications remain normative where applicable.

This page separates **implemented product behaviour** from **protocol design** and **planned connectors**. A documented integration profile does not by itself mean that the corresponding production connector is complete.

## Status vocabulary

| Status | Meaning |
|---|---|
| **Operational** | Implemented and exercised in the current Studio workflow. Deployment-specific configuration may still be required. |
| **Configuration-dependent** | Implemented in Studio, but requires administrator credentials, endpoints, OAuth/OIDC registration, mail delivery, database migration, or an external service. |
| **Foundation** | Data model, UI, provider registry, client or configuration scaffolding exists, but the end-to-end production integration is not yet complete. |
| **Specification only** | The protocol/profile is documented, but the reference implementation does not yet provide the complete connector. |
| **Planned** | Intended integration area without a complete implementation baseline. |

## Current integration matrix

| Integration | Current status | Implemented evidence / current scope | Remaining work |
|---|---|---|---|
| **OJS** | **Operational / configuration-dependent; native E2E verified** | Signed author/editor/reviewer launch; metadata and assignment-scoped file exchange; DOCX import; double-anonymous reviewer projection; required native review forms; manuscript corrections; author-visible and editor-only feedback; HMAC-signed review writeback. Verified against a disposable native OJS 3.5 environment. | Continue publication-return hardening, compatibility testing across supported OJS versions and operator documentation. |
| **OMP** | **Operational / configuration-dependent; native E2E verified** | Signed author/editor/reviewer launch; monograph and study mapping; reviewer projection restricted to the assigned study; assignment-scoped files; required native review forms; corrections; separated feedback; HMAC-signed writeback. Verified against a disposable native OMP 3.5 environment. | Continue broader OMP-version compatibility testing, production deployment guidance and publication-return hardening. |
| **ORCID OAuth/OIDC** | **Configuration-dependent** | Account authentication/linking, personal/institutional credential routing, Sandbox/Production selection, native browser/App-Link handoff and direct ORCID verification from the author-signature flow are implemented. | Production credential registration, callback configuration, operational monitoring and broader cross-platform regression testing. |
| **Google / Microsoft / institutional OIDC** | **Configuration-dependent** | Authorization Code + PKCE, state and nonce validation, discovery/JWKS verification, issuer/audience checks, explicit account linking and shared native handoff are implemented. | Production provider registration, tenant/provider-specific deployment testing and operational monitoring. |
| **Connected identity management** | **Operational / provider-dependent** | Account settings list password, ORCID and OIDC identities, show connection/last-use metadata, support explicit linking/unlinking and prevent removal of the final usable sign-in method. | Broader provider UX and future SAML management surface. |
| **Institutional administration** | **Configuration-dependent** | Institution memberships, `MEMBER`/`ADMIN`/`OWNER` roles, dedicated administrator sign-in, server-side role enforcement, central OMI administration and last-owner protection are implemented. | Production migration/configuration guidance, authorization regression coverage and institution integration-management expansion. |
| **Institution Admin API** | **Configuration-dependent** | Institution-bound machine credentials use one-time token display, SHA-256 hashed storage, expiry/revocation, explicit scopes and append-only administration audit events. v1 member/context endpoints are implemented. | Add institution-scoped integration-management endpoints behind the reserved `integrations:read` / `integrations:write` scopes and broaden automation documentation. |
| **Device-aware native storage** | **Operational on installed clients** | Installed clients distinguish own devices from shared/foreign devices. Own devices can retain native working paths; shared devices do not retain local paths and prefer profile-scoped cloud connections. One-off portable/removable storage remains available. | Continue recovery testing and platform-specific edge-case validation. |
| **Android Documents / SAF storage** | **Operational public beta** | Android uses the system Documents / Storage Access Framework picker for opening, Save, Save As, portable OMI backup and supported exports instead of broad shared-storage permissions. | Device/vendor regression testing and store-distribution hardening. |
| **Locally synchronized storage** | **Operational on desktop** | OneDrive, SharePoint, Google Drive, Dropbox, Nextcloud and iCloud Drive are represented as provider-specific locally synchronized folder methods. Studio writes portable OMI files locally while the provider client performs authentication/synchronization. Paths remain device-local. | Continue recovery testing for interrupted local/provider synchronization and broaden native-platform validation. |
| **Profile-scoped WebDAV / Nextcloud** | **Configuration-dependent** | Direct connections support encrypted server-side credentials, connection testing, portable backup upload, integrity verification, restore and deletion. Connections are scoped to the authenticated Studio profile and can follow the user across devices. | Provider-specific UX polish, operational monitoring and broader interoperability testing. |
| **Cloud provider catalogue** | **Operational foundation** | Provider → personal/business account type → connection-method selection is implemented for Nextcloud, WebDAV, OneDrive, SharePoint, Google Drive, Dropbox and iCloud Drive. Local synchronized folders are methods of the real provider rather than a pseudo-provider. | Add direct OAuth 2.0 connectors progressively where native/local synchronization is not the desired mode. |
| **DeepL structured translation** | **Configuration-dependent** | Server-side DeepL execution is implemented for selection, block, section and whole-manuscript scopes. Structured segmentation preserves inline marks and excludes citations, cross-references, code, equations and bibliography records; larger translations can be stored as separate language variants. | Production credential/quota monitoring, provider error UX and broader language-pair testing. |
| **Grammar/style services** | **Configuration-dependent** | Optional LanguageTool-compatible checking and configured AI language-editor execution return structured spelling/grammar/punctuation/style issues without direct server-side manuscript mutation. | Production provider tuning, latency/error handling and broader language coverage. |
| **OMI AI agents** | **Configuration-dependent** | Provider-neutral language editor, metadata assistant, summarizer and citation checker execute through a configurable HTTPS chat-completions endpoint. Suggestions require explicit user application. Review-confidential content is blocked unless explicitly allowed. | Provider interoperability testing, evaluation fixtures, quota/latency handling and further agent-specific safety constraints. |
| **Integration audit trail** | **Operational** | External execution records operation/provider/scope metadata, sizes and SHA-256 digests rather than manuscript text, prompts, outputs or secrets. | Reporting/retention controls and operational dashboards. |
| **Integration Extension API v1** | **Operational foundation** | Extension manifest registry, compatibility/version checks, scoped permissions, capabilities, HTTPS-only endpoints and SDK documentation are implemented. | Third-party extension examples, signing/trust policy and conformance fixtures. |
| **Integration provider catalogue** | **Operational** | Studio exposes an Integrations area, provider registry, authentication-mode metadata, configuration state, storage configuration, translation/agent tools, audit information and extension surfaces. | Add production connectors progressively without coupling the OMI manuscript model to individual vendors. |
| **Bibliographic structured services** | **Operational foundation** | Crossref, DataCite, OpenAlex and MTMT structured lookups map into a shared bibliographic model with DOI normalization and deduplication. ROR and ORCID identity lookups are also integrated. | Caching, reconciliation/provenance policy, more identifier registries and provider-specific reliability handling. |
| **Signed-in bibliographic web providers** | **Operational foundation / provider-dependent** | Academia.edu preset and configurable HTTPS signed-in web providers can be opened without Studio collecting passwords. Tauri retains provider WebView sessions and supports explicit local sign-out cleanup. | Provider-specific compatibility testing and clearer trust/session UX. |
| **Repository / preservation deposit** | **Planned** | Architecture supports external deposit and preservation adapters. | Define concrete connector profiles and implement reference adapters. |

## OJS implementation note

OJS is currently the most mature external publishing-platform integration in the reference implementation. The production architecture keeps OJS and Studio as separate applications with separate persistence layers. OJS remains authoritative for submission workflow, reviewer assignments, review rounds and editorial decisions; Studio provides the structured manuscript and review workspace.

The verified path has progressed beyond a conceptual launch profile. Studio can receive signed OJS context, retrieve manuscript files through integration endpoints, reconstruct manuscript structure from DOCX material, preserve supported inline semantics and notes, and expose role-aware author, editor and reviewer workflows. Externally assigned peer reviews can be accepted and handled in Studio while double-blind identity boundaries remain part of the review projection.

Server-side requests derived from OJS launch context are constrained to the administrator-registered installation origin and hardened against unsafe redirects, private/reserved targets, path traversal and request-controlled authority changes. This is part of the current integration security baseline rather than a change to the OJS protocol itself.

The integration deliberately uses application/API boundaries rather than direct access to the OJS database. This preserves deployment independence and makes protocol behaviour testable.

This does **not** mean that every operation described by the complete OJS Integration Profile v1 has reached final interoperability or conformance status. Round-trip synchronization, publication-return paths and wider version compatibility remain active hardening areas.

## OMP implementation note

OMP is a first-class operational integration target with a dedicated plugin and native OMP 3.5 end-to-end coverage. Reviewer launches are bound to one assigned study; parent-monograph, sibling-study and contributor identity data are excluded from the anonymous review projection. OMP remains authoritative for press workflow, assignments, rounds and completion behavior, while Studio provides the structured review workspace.

## Storage integration model

Studio now uses three explicit storage contexts.

**Own device / native system storage.** On a trusted installed device, Studio can use normal platform-native storage chosen by the author. Desktop targets can use local folders, mounted/network storage and provider-synchronized folders. Android uses the system Documents / Storage Access Framework surface.

**Shared or foreign device.** Newly seen installed devices default to restricted local persistence. Studio does not retain the local working-file path and prefers cloud connections belonging to the signed-in profile. One-off removable/portable storage remains possible without persisting the chosen path.

**Direct profile connection.** Studio itself connects to a storage service. The currently implemented direct path is WebDAV/Nextcloud with encrypted server-side credentials scoped to the authenticated user. Future OAuth provider connections should follow the same profile-scoped model.

This design preserves local-first ownership without assuming that every cloud provider must be controlled by Studio or that a shared device should retain the author's local path.

## Native-client integration boundary

The web, desktop and Android applications share the Studio API and integration contracts. Native Tauri clients use authentication transport compatible with native application origins rather than assuming browser-only cookie behaviour. ORCID and OIDC can return through the shared native handoff path.

Native file handling is platform-appropriate: desktop applications use native file/folder dialogs, while Android uses Documents/SAF. Hosted Studio uses browser downloads for export delivery.

## Authentication modes

The Studio integration layer distinguishes provider authentication models instead of assuming that every service can use the same credential type. Depending on the provider, an integration may use OAuth/OIDC, API keys or tokens, service credentials, signed launch assertions, deployment-managed credentials, institution-scoped API credentials, or no OMI-held provider credential at all when a local synchronization client performs authentication.

User-facing username/password login is only appropriate when the external provider explicitly supports such a flow. Credentials must not be inferred from a provider's consumer website login form.

## Identity and administration separation

Studio account identity, scholarly contributor identity, institution membership and central administration are intentionally distinct.

Authentication establishes who may access Studio services. Contributor records express scholarly authorship, affiliation, ORCID and contribution roles. Institution membership expresses organization-specific affiliation and `MEMBER`/`ADMIN`/`OWNER` authority. Central administration is a separate cross-institution privilege plane.

Neither institution administration nor central administration grants manuscript/review/editorial-content access by itself.

See [Institutional and Central Administration](./institutional-administration.md) for the administration model.

## Product status versus OMI conformance

The statuses on this page describe the **Open Manuscript Studio product implementation**. They do not assign OMI conformance to a connector. Formal conformance requires versioned requirements, test fixtures and the capability/conformance framework.

For specification-level status, see the [OMI Implementation Status Matrix](../governance/implementation-status-matrix.md). For the broader Studio product baseline, see [Studio Implementation Status](../governance/studio-implementation-status.md).
