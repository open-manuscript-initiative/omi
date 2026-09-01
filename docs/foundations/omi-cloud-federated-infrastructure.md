---
id: omi-cloud-federated-infrastructure
title: OMI Cloud and Federated Infrastructure
sidebar_label: OMI Cloud and Federated Infrastructure
sidebar_position: 6
description: Long-term architecture for scalable OMI services, optional account-linked document storage, institutional data sovereignty, and portable local-first scholarly manuscripts.
keywords:
  - OMI Cloud
  - federated infrastructure
  - scholarly cloud
  - object storage
  - S3
  - data sovereignty
  - EU cloud
  - Open Manuscript Studio
---

# OMI Cloud and Federated Infrastructure

OMI is currently deployable on conventional server infrastructure, including the hosted Open Manuscript Studio service. The long-term infrastructure roadmap is to make the service layer horizontally scalable while preserving a principle that is central to OMI: **a manuscript must never become captive to one hosted service**.

OMI Cloud is therefore conceived as an **optional managed and federatable service layer**, not as a replacement for local `.omi` documents or institution-controlled storage.

## Goals

The proposed cloud architecture should make it possible to:

- associate documents and workspaces with user accounts across browser, desktop, Android, and iOS/iPadOS clients;
- synchronize manuscripts, versions, assets, permissions, and collaboration state across devices;
- support individual, research-group, publisher, and institutional workspaces;
- scale compute-intensive import, conversion, validation, and export work independently from the interactive API;
- keep data residency, retention, and storage-provider choices explicit;
- let institutions operate their own compatible storage or deployment where required;
- preserve portable local files and straightforward export at all times.

## Proposed service topology

A production-scale deployment can separate interactive delivery from durable storage and background processing:

```text
Clients: Web · Windows · Linux · macOS · Android · iOS/iPadOS
                              │
                         CDN / ingress
                              │
                         Studio API
          ┌───────────────────┼───────────────────┐
          │                   │                   │
     identity/session    manuscript/workspace   integrations
          │                   │                   │
          └──────────── PostgreSQL ──────────────┘
                              │
                    S3-compatible object store
                              │
                    queue / background workers
                              │
          PDF · DOCX · export · validation · indexing
```

The exact cloud vendor is deliberately not part of the OMI specification. The architecture should rely on portable interfaces and deployment patterns rather than proprietary storage semantics.

## Account-linked document storage

In the managed OMI Cloud mode, a user account may own or participate in one or more workspaces. A workspace can contain manuscripts, assets, version history, export products, and access-control metadata.

A useful logical hierarchy is:

```text
OMI Account
  └─ Workspace
      └─ Manuscript
          ├─ Versions
          ├─ Assets
          ├─ Review/collaboration state
          └─ Exports
```

Structured metadata, permissions, collaboration state, and transactional version references belong in a database such as PostgreSQL. Larger immutable or binary objects — source DOCX/PDF files, images, packaged exports, and other assets — are better suited to S3-compatible object storage.

## Background processing and elasticity

Long-running document processing should not keep an interactive HTTP request open. Large PDF reconstruction, DOCX conversion, publication rendering, validation, indexing, and future compute-heavy integrations can be represented as jobs.

For example:

```text
Upload → Queued → Processing → Structural reconstruction → Validation → Ready
```

Workers can scale horizontally according to queue depth. This isolates expensive imports from normal editing traffic and makes the service suitable for larger institutional usage without redesigning the manuscript model.

## Data sovereignty and federation

OMI Cloud should be designed so managed hosting is convenient but never mandatory. Three storage modes should remain first-class:

1. **local-first** — portable `.omi` documents remain on the user's own device or chosen filesystem;
2. **managed OMI Cloud** — account-linked storage and synchronization are provided by an OMI service operator;
3. **institutional/federated storage** — an institution can use its own compatible object store, private cloud, or deployment while continuing to use OMI clients and interchange formats.

External providers such as Nextcloud/WebDAV, OneDrive, Google Drive, or other user-selected services can remain additional integration targets. Provider choice must not redefine the scholarly object model.

For European institutional deployments, the roadmap favors EU/EEA data residency options, explicit retention rules, encryption in transit and at rest, auditability, exportability, account deletion, and institution-specific governance. These are deployment requirements rather than changes to OMI manuscript semantics.

## Avoiding vendor lock-in

A cloud service should not weaken the portability guarantees that motivated OMI. The architecture therefore favors:

- S3-compatible rather than vendor-exclusive object interfaces where practical;
- standard PostgreSQL-compatible transactional storage;
- documented export and backup formats;
- portable `.omi` packages as a durable escape hatch;
- explicit storage-provider abstractions in the Studio backend;
- separation between manuscript identity and infrastructure location.

The objective is to make OMI easier to operate at scale without creating a new proprietary manuscript silo.

## Institutional workspaces

Institutional deployments can build on the existing separation between human accounts, scholarly contributor identity, institution membership, and central administration. Cloud workspaces should follow the same boundary: administrative authority over an institution or service must not automatically grant access to confidential manuscripts, peer-review material, or editorial content.

Institutional workspaces can later support quotas, retention policies, delegated storage, group permissions, publisher workflows, and research-project spaces without changing the underlying document format.

## Migration path from the current deployment

The migration should be incremental rather than a disruptive rewrite. New backend capabilities should be written behind replaceable storage and job abstractions so the current deployment can continue to run while cloud-ready components are introduced.

A practical sequence is:

1. define a storage-provider abstraction around current server-side persistence;
2. add S3-compatible object storage for large assets and exports;
3. move expensive import/export work to a durable queue and worker process;
4. introduce workspace-linked cloud document persistence and version references;
5. add institutional storage-provider configuration and federation;
6. deploy redundant/stateless API instances behind managed ingress when operational load requires it.

## Funding and sustainability relevance

A scalable federated infrastructure is also a strategic research-infrastructure direction. It can support multi-institutional pilots, university presses, scholarly societies, and open-science programmes while keeping OMI's core specifications and reference implementation open.

Sustained European or institutional funding would make it possible to move from today's compact hosted deployment toward a resilient multi-tenant service with EU/EEA hosting, operational security, monitoring, backup, disaster recovery, and institutional federation. The roadmap does **not** assume that such funding has already been secured.

## Status

This page describes a **planned architecture and funding-dependent infrastructure direction**, not a claim that the full OMI Cloud service is already deployed. Existing local storage, native file workflows, profile-scoped cloud connections, account infrastructure, and Studio API provide implementation foundations for this future step.