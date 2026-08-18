---
id: studio-implementation-status
title: Open Manuscript Studio — Current Implementation Status
sidebar_label: Studio Implementation Status
description: Current implementation snapshot for the Open Manuscript Studio reference implementation.
keywords:
  - Open Manuscript Studio
  - implementation status
  - peer review
  - OJS
  - desktop
  - multilingual
  - export
---

# Open Manuscript Studio — Current Implementation Status

## Snapshot

| Field | Value |
|---|---|
| Status | Alpha / active development |
| Snapshot date | 2026-08-18 |
| Reference implementation | Open Manuscript Studio |
| Source repository | `open-manuscript-initiative/open-manuscript-studio` |
| Desktop targets | Windows x64, Linux x64, macOS Intel, macOS Apple Silicon |
| Web deployment | `studio.openmanuscript.org` |

This page describes **implemented product capabilities**, not OMI specification conformance. Formal specification maturity and conformance evidence are tracked separately in the [OMI Implementation Status Matrix](./implementation-status-matrix.md).

## Status vocabulary

- **Operational** — implemented in the current Studio development line and available when its normal runtime prerequisites are present.
- **Configuration-dependent** — implemented, but requires installation-specific server credentials, OAuth registration, an external service, or a publishing-system connection.
- **Foundation** — architecture, registry, UI or configuration support exists, but the complete end-user service is not yet claimed as operational.

## Current capabilities

| Area | Status | Current implementation |
|---|---|---|
| Structured manuscript editing | **Operational** | Semantic sections, rich text, headings, inline formatting, lists, notes, references, tables and structured content handling. |
| Structured search and replace | **Operational** | Search/replace overlay, scopes, result navigation and mobile-accessible search entry point. |
| Multilingual user interface | **Operational** | 24 supported European UI languages with reviewed translation overlays and locale-aware sign-in selection. |
| Multilingual help | **Operational** | Integrated localized help coverage across the supported Studio UI locales. |
| Local accounts and authentication | **Operational** | Server-backed account registration/login and authenticated API access. |
| Contributor identity model | **Operational** | Contributors, roles, affiliations, identity assertions and author-profile workflows are represented separately from account identity. |
| ORCID authentication | **Configuration-dependent** | ORCID OAuth sign-in/linking support is implemented and requires installation-specific ORCID OAuth configuration. |
| Double-blind peer review | **Operational** | Anonymous reviewer projection, review assignments, reviewer workspace, comments and review persistence. |
| Editorial review dashboard | **Operational** | Editor-facing overview and role-aware review portal for assigned peer-review work. |
| External/OJS review assignments | **Configuration-dependent** | External assignment context and OJS-connected reviewer/editor workflows are implemented when the OJS integration is configured. |
| OJS manuscript launch/import | **Configuration-dependent** | Launch assertions, manuscript/file retrieval and import of metadata and manuscript content from OJS. |
| DOCX structural import | **Operational** | Headings, inline semantics, list inheritance, notes, references and structured tables are handled by the current import pipeline. |
| OMI manuscript export | **Operational** | Portable OMI manuscript export remains the authoritative interchange target for the reference implementation. |
| Scholarly/publishing exports | **Operational** | JATS XML, HTML5, DOCX, EPUB, PDF, IDML, XPress Tags, FrameMaker MIF, Scribus SLA and LaTeX targets are represented in the current export layer. |
| Publisher profiles | **Operational** | Publisher profile, export stylesheet and print stylesheet handling are separated from manuscript semantics. |
| Cloud storage provider layer | **Operational** | Provider abstraction and server routes exist for connected storage. |
| WebDAV / Nextcloud storage | **Configuration-dependent** | WebDAV-based storage, including Nextcloud-oriented connection support, requires user/server credentials and endpoint configuration. |
| Integrations catalogue | **Operational** | Provider registry, catalogue UI, status client and declared authentication modes are present. |
| DeepL integration | **Foundation** | Provider/configuration scaffolding exists; this status does not claim a complete production translation workflow. |
| Desktop installers | **Operational** | Automated Tauri builds produce Windows EXE/MSI, Linux AppImage/DEB and macOS DMG packages for Intel and Apple Silicon. |
| Desktop update flow | **Operational** | Update notification and installer flow is implemented in the desktop application and updater artifacts are produced by the release configuration. |
| Windows code signing | **Foundation** | Signing policy and SignPath preparation exist; current Windows installers may still trigger unknown-publisher or reputation warnings until production signing is activated. |

## Architecture boundaries

### Local-first manuscript ownership

The desktop application can keep manuscripts in local storage chosen by the author. A manuscript does not need to become proprietary server state merely because server-backed collaboration or integrations are enabled.

### Server-backed services

Accounts, collaboration, peer review, cloud connectors and publishing-system integrations can use the Studio API and PostgreSQL-backed services. These features depend on the deployment being correctly configured and migrated.

### External integrations

OMI separates manuscript semantics from provider-specific authentication and transport. OJS, cloud storage, ORCID and future translation providers therefore connect through integration layers rather than becoming part of the core document model.

## What remains alpha

The Studio is usable, but the project deliberately retains an alpha designation while several release-hardening areas continue:

- production code signing and platform trust/reputation;
- broader deployment hardening and database migration automation;
- conformance suites that map implementation behaviour directly to normative OMI requirements;
- further integration-provider completion and interoperability testing;
- release-level compatibility guarantees for all import/export targets.

The presence of a feature in this implementation snapshot must not be interpreted as formal conformance with an OMI specification unless a corresponding conformance class and evidence are published separately.
