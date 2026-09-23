---
title: Open Manuscript Studio 1.0 — Executive Summary
sidebar_label: Executive Summary
description: Executive summary of the Open Manuscript Studio 1.0 target architecture, principal risks, and controlled stabilization path.
---

# Open Manuscript Studio 1.0 — Executive Summary

**Audit baseline:** 2026-09-19; Studio `main` @ `eca2cf45762116e1c00a89b3397840ed89109511`, OMI @ `e2f421707f1154c0ed30cb7750e0689a837e9b0a`, OJS plugin @ `6c0842fc1ce6c4a1ea75f7b27660af8011be303b`, OMP plugin @ `4f7a2c0a2f29f68e3ad05ac73ca7652bc6410ac7`.

> This document is an implementation-architecture baseline for Open Manuscript Studio. It does not redefine normative OMI specifications and does not make a formal conformance claim.

## Position

The current Open Manuscript Studio codebase is a viable foundation for 1.0. A full rewrite is neither necessary nor desirable. The product already contains substantial working implementation: a rich Tiptap editor, study-level progressive mounting, immutable revision semantics, multi-format import and export, publication-build and artifact provenance, OJS/OMP review and writeback flows, account and institutional identity, cloud storage, Tauri and Android layers, and broad CI/test infrastructure.

The 1.0 problem is therefore not primarily missing functionality. The central problem is that several critical contracts are not yet aligned with the implementation that already works.

The most urgent example is the portable OMI format. The OMI repository already carries OMI-SPEC-320 0.2.0 material and schema fixtures while the audited Studio implementation still writes the 0.1 envelope and contains an empty vendored 0.2 schema artifact. That mismatch must be resolved before schema freeze because it creates the possibility of silent data loss or an incorrect compatibility claim.

The recommended strategy is **controlled refactoring**:

1. establish the contract or adapter in front of the current working implementation;
2. lock existing behaviour with characterization, golden-fixture, and conformance tests;
3. migrate call sites incrementally;
4. remove the legacy path only after consumers have moved and rollback evidence exists.

## How much of the implementation should remain?

The architecture audit indicates that roughly **75–85% of the current implementation and behaviour can be retained**.

The estimate is architectural rather than a formal line-of-code measurement:

- about **45–55%** belongs in KEEP/HARDEN;
- about **25–35%** can remain behind wrappers, ownership separation, or module relocation;
- only about **5–10%** appears to require genuine replacement or removal.

Refactoring effort may still be substantial because some consumers directly parse Tiptap JSON serialized into OMI block content and some application use cases currently mutate state directly through the Zustand store.

### Explicitly preserve

The 1.0 work should preserve and harden:

- the Tiptap editor, semantic extensions, and study-based progressive mounting;
- the current linear immutable revision and revert semantics;
- the strong ZIP/container security controls already present in OMI container import;
- the DOCX importer and the JATS, HTML, DOCX, PDF, and DTP exporters as implementation assets behind common contracts;
- publication-build manifests, hashing, and provenance foundations;
- the cloud-storage provider layer and SSRF protections;
- the Tauri shell, Android distribution/update work, and platform build workflows;
- the signed-launch, scope, and PKP object-authorization logic in the OJS/OMP integrations;
- the server-side review allowlist projection and visibility serialization as the basis of anonymous review.

### Replace or isolate narrowly

The following areas should not be preserved in their audited form:

- the empty Studio schema artifact;
- native JSON open/save paths that rely on parsing and casting without exact schema/version validation;
- native bearer-token storage in `localStorage`;
- publication signatures injected into manuscript roots from local storage;
- client-controlled authority for review-confidential integration access;
- empty domain placeholder modules and demonstrably orphaned alpha workspace state;
- the concrete MIDI import routing defect in which the parser exists but `.mid` and `.midi` fail the outer extension route.

## Principal 1.0 architecture risks

### 1. Portable format and data integrity

The OMI-SPEC-320 0.2 versus Studio 0.1 mismatch is the highest-priority blocker. Open/save/export must share one exact schema plus semantic-invariant validation path. A newer unsupported document must never be silently opened, edited, and overwritten. Unknown extension data also needs demonstrated lossless preservation.

### 2. Tiptap JSON as portable domain data

The audited `OmiBlock.content` can hold serialized Tiptap JSON or legacy text. Citations, notes, cross-references, search, proofing, clipboard, and exporters know this representation in multiple places. That turns editor-runtime representation into a file-format dependency.

The solution is **not** replacing Tiptap. The solution is freezing the required OMI-SPEC-100 portable content grammar and introducing one versioned, loss-reporting Tiptap ↔ OMI codec.

### 3. State and use-case ownership

The audited `useStudioStore.ts` mixes portable manuscript state, history, selection/focus, UI panels, persistence operations, and timers. Core use cases should be callable and testable without React or Zustand. Zustand should remain as a UI/session projection while mutations flow through an application facade.

### 4. Identity, credentials, and review security

The two Prisma schemas partially duplicate account/session/identity concepts. The identity database should be formalized as the authority for account/authentication/membership, while the main database keeps a `StudioPrincipal` projection for workflow references.

Native credentials must move to platform secure storage. Double-anonymous review must remain a server-side security boundary and must cover asset metadata, filenames, EXIF/SVG content, and provenance as well as visible text. Confidential integration and AI access must be authorized by server-issued grants, never a client boolean.

### 5. External writeback and release evidence

OJS/OMP remain authoritative for their own workflow state. A local Studio database and an external publishing system cannot be updated in one ACID transaction. Writeback therefore requires durable outbox semantics, idempotency keys, and receipts.

At the same time, a generally green CI run is not sufficient 1.0 evidence when some workflows are path-filtered. Release-candidate evidence must be aggregated on one exact commit without path filtering.

## Required work before schema/API freeze

The following items are architecture-freeze prerequisites:

1. **Freeze the portable content contract.** OMI-SPEC-100 must identify the block/inline AST, stable object and anchor semantics, and extension points required by Studio 1.0. Golden round-trip fixtures must prove the Tiptap mapping.
2. **Align OMI-SPEC-320 and Studio.** Use a released canonical schema, pinned by checksum, with generated wire types or codecs, validation on open/save/export, future-version quarantine, and unknown-extension round trip.
3. **Freeze the OMI-SPEC-330 container contract.** Derive a normative manifest/path/checksum/security profile and cross-repository golden fixtures from the already working secure container implementation.
4. **Define history and identity wire boundaries.** Internal revision-storage algorithms may evolve, but the portable/exported history boundary and the meaning of agent, contribution, and evidence data must not remain implicit.
5. **Introduce additive `/api/v1`.** Shared Zod/OpenAPI DTOs, standard errors, idempotency, and optimistic concurrency should sit in front of shared handlers. Existing routes remain compatibility facades during migration.
6. **Freeze a common Publishing System Connector contract.** OJS and OMP should share capability, launch, submission, file, review, writeback, and receipt vocabulary. Journal/monograph differences become profile extensions.
7. **Accept review and integration security boundaries.** Anonymous projection is server-side; integration execution uses server-issued scoped grants.
8. **Enforce dependency direction.** Core modules must not import React, Tiptap, Zustand, Tauri APIs, Prisma clients, or provider-specific DTOs.

## What should not be rewritten now?

The 1.0 programme should not replace Tiptap merely to obtain a cleaner conceptual model. It should not introduce a new history product or a CRDT requirement when the present immutable revision model already satisfies the current product semantics. It should not rewrite the ZIP parser, nor reimplement the DOCX/JATS/HTML/PDF/DTP processors, nor replace the OJS/OMP plugins with a generic plugin runtime.

Likewise, the entire backend route tree should not be renamed in one migration.

The following can be deferred from the stable 1.0 guarantee while preserving existing code as preview or experimental capability:

- arbitrary executable third-party plugin runtime;
- CRDT/branching collaboration;
- a dedicated SharePoint provider beyond the existing storage direction;
- stable iOS promotion until platform acceptance evidence is complete;
- stable fidelity claims for every DTP format.

## Recommended path from beta to 1.0

### Phase A — Architecture freeze

Accept or explicitly defer the ADRs, freeze stable/preview scope and compatibility policy, make OMI conformance CI mandatory, vendor the released schema, introduce shadow envelope validation and future-version quarantine, freeze content/container/API/connector candidate contracts, and enforce dependency boundaries.

This phase should not rewrite the working UI.

### Phase B — Core refactoring

Introduce the application facade and migrate create/open/save first. Narrow Zustand to UI/session projection. Put every portable-content consumer behind the codec before changing the stable writer. Place revision semantics behind a repository port. Make save atomic and recoverable. Formalize identity authority and move native tokens to secure storage.

### Phase C — Interoperability hardening

Wrap existing importers and exporters in shared contracts with diagnostics, fidelity, validation, and provenance. Separate artifact generation from delivery. Make publication profiles explicit versioned inputs. Require OJS and OMP to satisfy the same connector contract suite. Route writeback through an outbox. Make review projection and integration grants release-gated security behaviour.

### Phase D — Platform hardening

Implement common file, secure-storage, authentication, updater, font, and share ports across declared platforms. Use evidence to determine which platforms are stable versus preview. Add 10k, 120k, and 500k-word synthetic performance tests, bundle budgets, and accessibility journeys.

### Phase E — Release Candidate

One exact-commit RC aggregator runs format, data-integrity, import, publication, review, connector, identity/API, platform, security, accessibility, performance, and recovery gates without path filters. Private real-document acceptance remains local; only content-free results and synthetic minimal reproducers enter Git or CI.

### Phase F — 1.0

Promote the proven RC commit to `1.0.0` without functional change. Any code change after the RC evidence set requires a new RC. From 1.0 onward, file-format, API, and connector compatibility can change only under the published compatibility policy.

## Final recommendation

The highest-value work before 1.0 is not another wave of features. It is closing the format/content boundary, application-state ownership, security authority, and exact-RC evidence model.

The valuable implementation already exists. By adding explicit contracts around it, proving current behaviour, migrating incrementally, and deleting only obsolete paths after evidence exists, Studio can move from beta to a maintainable 1.0 without a disruptive rewrite.

## Website publication supplement — 2026-09-23

Supporting journals and presses without OJS/OMP is part of the 1.0 direction, not a weakening of scholarly editing. Studio-native review can supply a completed scientific round plus a separate editor acceptance bound to the exact revision/state digest. Website connectors only deliver artifacts; external publishing systems retain their own workflow authority.

Public-interest and popular-science publishing may proceed without review, with explicit disclosure. The language-independent seal is `OMI · PEER REVIEW · VERIFIED` or `NOT VERIFIED`, accompanied by localized explanation. It reports recorded workflow evidence, not scientific quality or truth; confidential reviewer data stays private.

Keep the current HTML renderer, publication build and connector foundations. Before freeze, settle the assurance contract and native-vs-external authority (ADR-021). Harden implementation under C15, with website delivery **Preview** until real database/receiver, recovery, privacy and accessibility tests pass. False assurance, reviewer leakage and missing required disclosure remain mandatory release blockers. Public verification portals, expanded review taxonomies and new workflow dashboards are not prerequisites for base 1.0.
