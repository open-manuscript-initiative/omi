---
id: versioning-change-model
title: OMI-SPEC-160 — Versioning and Change Model
sidebar_label: Versioning and Change Model
description: Normative model for immutable revisions, change sets, change events, branches, merges, conflicts, reverts, provenance, and history-preserving scholarly-object exchange.
keywords:
  - Open Manuscript Initiative
  - OMI
  - versioning
  - revision history
  - change events
  - provenance
  - branching
  - merging
---

# OMI-SPEC-160 — Versioning and Change Model

## Document metadata

| Field | Value |
|---|---|
| Identifier | `OMI-SPEC-160` |
| Title | Versioning and Change Model |
| Version | `0.1.0` |
| Status | Draft |
| Document type | Normative |
| Normative language | English |
| Editors | OMI maintainers |
| Last updated | 2026-08-06 |
| Replaces | None |
| Replaced by | None |
| Depends on | `OMI-SPEC-100`, `OMI-SPEC-120`, `OMI-SPEC-140`, `OMI-SPEC-150` |
| Used by | `OMI-SPEC-170`, `OMI-SPEC-190`, `OMI-SPEC-200`, `OMI-SPEC-230`, `OMI-SPEC-310`, `OMI-SPEC-320`, `OMI-SPEC-340` |
| Schemas | None published |
| Profiles | Core Revision History; Branching and Merge; Snapshot Exchange |
| Implementation status | [OMI Implementation Status Matrix](../governance/implementation-status-matrix.md) |
| Issue tracker | Open Manuscript Initiative repository issues |

## 1. Abstract

This specification defines how the Open Manuscript Initiative represents the history of scholarly objects. It provides a common model for immutable revisions, atomic change sets, semantic change events, parent relationships, snapshots, branches, merges, conflicts, reverts, checkpoints, release labels, authorship, provenance, integrity evidence, and history-aware exchange.

The model distinguishes a mutable working state from an immutable revision, a scholarly-object revision from a software or schema version, and a revert from destructive history rewriting. It permits implementations to use event sourcing, snapshot storage, database transactions, content-addressed storage, operational transformation, conflict-free replicated data types, or other internal techniques, provided that exported OMI history preserves the semantics required by this specification.

The specification supports linear and branching histories, offline work, multiple contributors, partial history exchange, deletion tombstones, redaction of restricted change data, and deterministic identification of merge outcomes. It does not prescribe a real-time collaboration algorithm, a database engine, a user-interface design, a permission model, or a universal textual diff format.

## 2. Status of this document

This document is a **Draft** specification of the Open Manuscript Initiative.

The data model, property names, conformance profiles, operation vocabulary, and processing requirements may change incompatibly before version 1.0. Implementations claiming support MUST identify the exact specification version or immutable commit used.

This Draft activates the identifier reserved for the Versioning and Change Model in the OMI Specification Registry. Discussion and change proposals are tracked in the Open Manuscript Initiative repository.

## 3. Conformance

### 3.1 Conformance classes

This specification defines five implementation classes:

- **Conforming history producer:** creates or exports revisions, change sets, change events, snapshots, branches, or merge records.
- **Conforming history consumer:** imports, stores, displays, transforms, or preserves versioning data.
- **Conforming history-preserving editor:** modifies OMI entities while recording the applicable revision and change semantics.
- **Conforming history merger:** combines divergent revision lineages and records merge bases, conflicts, resolutions, and result revisions.
- **Conforming history validator:** evaluates versioning data against the structural and semantic requirements of this specification.

An implementation MAY claim more than one class.

### 3.2 Conformance profiles

A conformance claim MUST declare at least one profile.

#### Core Revision History profile

Supports immutable revision identity, parent relationships, change sets, change events, actor attribution, timestamps, and head selection for a linear history.

#### Branching and Merge profile

Supports multiple heads, named or unnamed branches, common-ancestor selection, merge records, conflict representation, resolution records, and multi-parent result revisions.

#### Snapshot Exchange profile

Supports exchange of a current scholarly-object state without complete event history, while explicitly declaring the omitted history scope and the revision represented by the snapshot.

A Snapshot Exchange implementation MUST NOT imply that a snapshot-only package contains complete provenance.

### 3.3 General conformance

A conforming implementation MUST satisfy every applicable **MUST** and **MUST NOT** requirement for its declared class and profile.

An optional feature MAY be omitted. When implemented, it MUST satisfy every requirement defined for that feature.

A conformance claim SHOULD identify:

- implementation name and version;
- `OMI-SPEC-160` version;
- declared implementation class or classes;
- declared profile or profiles;
- supported change-operation types;
- supported history-storage modes;
- integrity and redaction capabilities;
- known limitations;
- conformance-test version, when available.

### 3.4 Core requirements

**REQ-VCH-001:** A revision MUST have a globally unique or contextually collision-resistant identifier and MUST identify the versioned entity to which it belongs.

**REQ-VCH-002:** A committed revision MUST be immutable. A correction to committed history MUST be represented by a later revision, supersession record, redaction record, or other explicit event; it MUST NOT silently replace the committed revision.

**REQ-VCH-003:** Every non-root revision MUST identify at least one parent revision. A merge result MUST identify every direct parent incorporated into the result.

**REQ-VCH-004:** A change set MUST identify its target entity, base revision or revisions, actor or responsible agent when known, creation time, and contained change events.

**REQ-VCH-005:** A change event MUST identify an operation and a target. The target MUST be stable enough to distinguish the affected scholarly object or property without relying solely on rendered position.

**REQ-VCH-006:** A producer MUST distinguish scholarly-object revisions from specification versions, schema versions, application versions, publication editions, and human-readable release labels.

**REQ-VCH-007:** A revert MUST create a new revision that records the revision or change set being counteracted. It MUST NOT erase the reverted revision from history.

**REQ-VCH-008:** Deletion of an addressable scholarly object MUST preserve a tombstone or equivalent provenance record when the history profile claims deletion traceability.

**REQ-VCH-009:** Contributor order changes, object moves, and collection reordering MUST be represented as ordering or move semantics rather than as unrelated deletion and recreation when object identity is preserved.

**REQ-VCH-010:** A merge record MUST identify the source lineage, target lineage, merge base or bases, result revision, and every unresolved or resolved conflict known to the merger.

**REQ-VCH-011:** A consumer MUST NOT silently accept a revision whose declared parents are absent unless the history is explicitly marked partial or shallow.

**REQ-VCH-012:** A partial-history export MUST declare its boundary, omitted ancestry, and represented head revision.

**REQ-VCH-013:** Restricted change content MUST NOT be exposed through a public history serialization unless an applicable access policy authorises disclosure.

**REQ-VCH-014:** A history-preserving editor MUST associate each committed change set with an agent identity, service identity, or explicit unknown-agent marker in accordance with `OMI-SPEC-150`.

**REQ-VCH-015:** Implementations MUST preserve extension events and unknown operation data according to the applicable OMI extension and compatibility rules, or explicitly report their loss.

**REQ-VCH-016:** Revision timestamps MUST be represented as machine-readable instants with an explicit time-zone offset or UTC designator. Implementations MUST NOT use timestamps alone as revision identifiers or causal-order evidence.

**REQ-VCH-017:** A state digest, when supplied, MUST declare the digest algorithm and canonicalization scope. Consumers MUST NOT compare digest values produced under different undeclared canonicalization rules as equivalent.

**REQ-VCH-018:** A change set declared atomic MUST either apply completely or fail without exposing a partially committed result.

## 4. Scope

This specification defines:

- identity and immutability of revisions;
- parent-child relationships and revision graphs;
- mutable working states and committed states;
- atomic change sets;
- semantic change events and operation categories;
- target identification for changed scholarly objects and properties;
- actor attribution and change provenance;
- branches, heads, forks, and checkpoints;
- merges, merge bases, conflicts, and resolutions;
- reverts, restorations, tombstones, and supersession;
- snapshots and snapshot-to-history relationships;
- partial and shallow history exchange;
- state digests and integrity evidence;
- privacy-aware redaction and restricted history;
- validation and preservation behaviour.

### 4.1 Out of scope

This specification does not define:

- the semantic versioning policy for OMI specifications;
- the application release version of Open Manuscript Studio or another implementation;
- a required database, transaction log, or storage engine;
- a required source-control system;
- a universal line-oriented text-diff syntax;
- real-time cursor, presence, or awareness protocols;
- a particular operational-transformation or CRDT algorithm;
- workspace permissions or authorisation decisions;
- peer-review state transitions;
- translation equivalence or synchronisation rules;
- legal electronic signatures;
- archival retention periods;
- publication edition policy.

Specification versioning is governed by the OMI Versioning Policy. Permissions belong to `OMI-SPEC-190`. Review history belongs to `OMI-SPEC-200`. Translation relationships belong to `OMI-SPEC-170`. Publication editions and outputs belong to `OMI-SPEC-230` and `OMI-SPEC-240`.

## 5. Terminology

The [OMI Terminology and Definitions](../governance/terminology.md) document applies.

### 5.1 Versioned entity

An OMI entity whose successive committed states are represented by revisions.

A versioned entity may be a manuscript, section, block, annotation, bibliographic record, contribution, metadata record, publication job, or other identifiable scholarly object.

### 5.2 Working state

A mutable implementation state that has not yet been committed as a revision.

A working state MAY contain uncommitted local operations, temporary validation failures, cursor state, or interface-specific information. It is not automatically part of portable OMI history.

### 5.3 Revision

An immutable record identifying one committed state in the history of a versioned entity.

A revision links to zero or more parent revisions and may reference change sets, a snapshot, state digest, checkpoint labels, and provenance.

### 5.4 Root revision

A revision with no parent revision in the represented history.

A root revision may represent actual creation or the earliest included revision of a shallow history. The distinction MUST be declared.

### 5.5 Head revision

The revision currently selected as the latest state of a branch, lineage, or exported history view.

A revision graph may have more than one head.

### 5.6 Change set

A collection of one or more change events committed as one logical and optionally atomic unit.

A change set may correspond to a user action, grouped editing session, import operation, automated transformation, merge resolution, or system maintenance event.

### 5.7 Change event

A provenance-bearing statement that a defined operation affected a defined target within a versioned entity.

A change event records semantic intent. It need not expose every keystroke or implementation-internal mutation.

### 5.8 Operation

The action represented by a change event, such as create, update, replace, delete, restore, move, reorder, attach, detach, or annotate.

### 5.9 Snapshot

A serialization of a versioned entity state associated with a specific revision.

A snapshot may accelerate loading or enable snapshot-only exchange. It does not replace revision relationships or change provenance when complete history is claimed.

### 5.10 Revision graph

The directed acyclic graph formed by revisions and parent relationships.

A conforming revision graph MUST NOT contain a revision as its own ancestor.

### 5.11 Branch

A named or unnamed movable reference to a head revision representing one line of development.

Branch identity is operational metadata and MUST NOT be confused with revision identity.

### 5.12 Fork

A state in which two or more revisions descend from the same earlier revision without one being an ancestor of the other.

### 5.13 Merge

The process and recorded result of combining two or more divergent revision lineages.

### 5.14 Merge base

A common ancestor used to compare and combine divergent histories.

### 5.15 Conflict

A condition in which changes cannot be combined automatically without a choice, transformation, or explicit acknowledgement.

### 5.16 Conflict resolution

A provenance-bearing decision or transformation that resolves a conflict for a merge result.

### 5.17 Revert

A new change that counteracts all or part of an earlier revision or change set while preserving the original history.

### 5.18 Tombstone

A persistent minimal record that an addressable object existed and was deleted, detached, or withdrawn.

### 5.19 Checkpoint

A stable reference or label attached to a revision for review, submission, acceptance, publication, preservation, or another workflow milestone.

### 5.20 Release label

A human-readable label, such as `submission-2` or `accepted-manuscript`, associated with a revision.

A release label is not a revision identifier and does not imply semantic versioning.

### 5.21 Partial history

A history representation that omits one or more ancestors, events, snapshots, branches, or restricted records.

### 5.22 State digest

A cryptographic or non-cryptographic digest calculated over a declared canonical representation of a revision state.

## 6. Design principles

This section is informative.

- **Immutable committed history:** committed facts are corrected by later facts, not silent rewriting.
- **Stable object identity:** edits change state without unnecessarily changing the identity of the scholarly object.
- **Semantic events over keystroke logs:** portable history records scholarly operations rather than implementation noise.
- **Explicit causality:** parent relationships and merge bases carry causal meaning; timestamps do not substitute for them.
- **Account-independent attribution:** change authorship references portable agents, not authentication secrets.
- **Loss-aware exchange:** omitted history and unsupported operations are declared.
- **Algorithm neutrality:** internal Git-like, event-sourced, database, OT, or CRDT techniques may differ while producing interoperable OMI evidence.
- **Privacy by design:** public history and restricted operational audit data are separable.
- **Reproducible states:** snapshots, events, and digests should permit equivalent reconstruction where the chosen profile requires it.
- **Preservation of ambiguity:** unresolved conflicts and unknown ancestry are represented rather than guessed away.

## 7. Model overview

```text
Versioned entity
    ├── Working state (mutable, implementation-local)
    └── Revision graph
          ├── Revision
          │     ├── parentRevisionIds[]
          │     ├── changeSetIds[]
          │     ├── snapshotRef?
          │     ├── stateDigest?
          │     └── provenance
          ├── Change set
          │     ├── baseRevisionIds[]
          │     ├── events[]
          │     ├── actorId
          │     └── atomicity
          ├── Branch
          │     └── headRevisionId
          └── Merge record
                ├── sourceRevisionIds[]
                ├── baseRevisionIds[]
                ├── conflicts[]
                ├── resolutions[]
                └── resultRevisionId
```

The model does not require every revision to contain a complete snapshot. A history may use:

- event-only storage;
- snapshot-only storage with declared history limits;
- periodic snapshots plus intervening events;
- externally referenced snapshots or event streams;
- a preservation package containing both.

The chosen representation MUST satisfy the declared conformance profile.

## 8. Distinct version concepts

A conforming implementation MUST keep the following concepts distinct.

| Concept | Example | Purpose |
|---|---|---|
| OMI specification version | `OMI-SPEC-160@0.1.0` | Identifies the normative model version |
| Schema or format version | `omi-manuscript-0.2` | Identifies serialization rules |
| Application version | `Open Manuscript Studio 0.1.0-alpha.2` | Identifies software release |
| Scholarly-object revision ID | `urn:uuid:...` | Identifies one immutable committed state |
| Branch name | `main`, `translation-hu` | Identifies a movable line of work |
| Checkpoint or release label | `submitted-2026-08-06` | Human-readable workflow marker |
| Publication edition or version | `Version of Record` | Publishing-domain designation |

An implementation MUST NOT derive one of these values from another unless a governing specification explicitly defines that derivation.

## 9. Core data model

### 9.1 Version history container

A version history container associates a versioned entity with its represented revisions and history metadata.

Recommended fields:

| Field | Cardinality | Meaning |
|---|---:|---|
| `modelVersion` | 1 | Exact `OMI-SPEC-160` version |
| `entityId` | 1 | Identifier of the versioned entity |
| `historyId` | 1 | Identifier of this history representation |
| `headRevisionIds` | 1..n | Current represented heads |
| `revisions` | 1..n | Included revision records |
| `changeSets` | 0..n | Included change-set records |
| `branches` | 0..n | Branch references |
| `merges` | 0..n | Merge evidence |
| `historyScope` | 1 | `complete`, `partial`, `shallow`, or `snapshot-only` |
| `boundaryRevisionIds` | 0..n | Earliest included revisions when ancestry is omitted |
| `omissionNotice` | 0..1 | Human- and machine-readable explanation of omitted history |

A complete history producer MUST set `historyScope` to `complete` only when all known ancestry required by the declared profile is included or resolvable.

### 9.2 Revision

A revision record SHOULD contain:

| Field | Cardinality | Meaning |
|---|---:|---|
| `id` | 1 | Immutable revision identifier |
| `entityId` | 1 | Versioned entity identifier |
| `parentRevisionIds` | 0..n | Direct parents |
| `changeSetIds` | 0..n | Changes producing this revision |
| `createdAt` | 1 | Commit time |
| `createdBy` | 1 | Agent or explicit unknown-agent marker |
| `committedBy` | 0..1 | Service or agent that committed the revision |
| `message` | 0..1 | Human-readable summary |
| `snapshotRef` | 0..1 | Snapshot associated with the revision |
| `stateDigest` | 0..1 | Digest and canonicalization metadata |
| `checkpointLabels` | 0..n | Workflow or release labels |
| `supersedesRevisionIds` | 0..n | Explicit correction or supersession relationships |
| `extensions` | 0..n | Namespaced extension data |

A root revision SHOULD state whether it represents actual entity creation or only a shallow-history boundary.

### 9.3 Revision identifier

A revision identifier MUST remain stable for the lifetime of the history record.

A producer MAY use:

- a UUID or UUID-based URN;
- a content-addressed identifier;
- another collision-resistant URI;
- an implementation-local identifier within a package whose scope is unambiguous.

A timestamp, sequence number, array index, branch name, or display label MUST NOT be the sole revision identifier.

### 9.4 Parent relationships

Parent relationships define revision causality.

- a creation revision normally has zero parents;
- a normal linear revision normally has one parent;
- a merge revision has two or more parents;
- an imported shallow boundary may have zero included parents while declaring omitted ancestry.

A validator MUST reject a represented parent cycle.

### 9.5 Change set

A change set SHOULD contain:

| Field | Cardinality | Meaning |
|---|---:|---|
| `id` | 1 | Change-set identifier |
| `entityId` | 1 | Target versioned entity |
| `baseRevisionIds` | 1..n | State or states against which the changes were authored |
| `events` | 1..n | Ordered semantic change events |
| `actorId` | 1 | Responsible agent or unknown marker |
| `performedBy` | 0..1 | Service or software agent |
| `createdAt` | 1 | Creation time |
| `committedAt` | 0..1 | Commit time |
| `intent` | 0..1 | Human- or vocabulary-defined purpose |
| `message` | 0..1 | Human-readable summary |
| `atomic` | 1 | Whether the set must apply atomically |
| `correlationId` | 0..1 | Groups related changes across entities or services |
| `causedBy` | 0..n | Earlier events, jobs, imports, or requests |
| `visibility` | 0..1 | Public or restricted handling classification |

The order of events within a change set MUST be preserved when order affects the result.

### 9.6 Change event

A change event SHOULD contain:

| Field | Cardinality | Meaning |
|---|---:|---|
| `id` | 1 | Event identifier |
| `operation` | 1 | Operation type |
| `target` | 1 | Stable target descriptor |
| `before` | 0..1 | Previous value or digest when retained |
| `after` | 0..1 | New value or digest when retained |
| `payload` | 0..1 | Operation-specific data |
| `sequence` | 0..1 | Order within the change set |
| `actorId` | 0..1 | Event-specific actor override |
| `occurredAt` | 0..1 | Event time when distinct from change-set time |
| `reason` | 0..1 | Human- or vocabulary-defined reason |
| `visibility` | 0..1 | Disclosure classification |
| `extensions` | 0..n | Namespaced extension data |

A producer MAY omit `before` or `after` values for privacy, storage, or algorithmic reasons, but it MUST retain enough information to satisfy its declared profile and MUST declare irreversible omission where reconstruction is affected.

### 9.7 Target descriptor

A target descriptor MUST identify the affected object or property using one or more stable components:

- target entity ID;
- target scholarly-object ID;
- property or field path;
- collection identifier;
- anchor or selector conforming to `OMI-SPEC-110`;
- extension namespace and property name.

Rendered coordinates, screen positions, line numbers, or transient editor indexes MAY be included as hints but MUST NOT be the sole portable target.

### 9.8 Operation vocabulary

The core operation vocabulary is:

| Operation | Meaning |
|---|---|
| `create` | Create a new identifiable object |
| `update` | Modify one or more properties without replacing object identity |
| `replace` | Replace a value or object representation while declaring identity treatment |
| `delete` | Remove an object or property and create required tombstone evidence |
| `restore` | Restore a previously deleted or detached object |
| `move` | Move an existing object between containers or locations |
| `reorder` | Change ordering within an ordered collection |
| `attach` | Add an existing object relationship or membership |
| `detach` | Remove a relationship or membership without deleting the object |
| `annotate` | Add a change explanation, editorial note, or machine-readable rationale |
| `transform` | Apply a declared automated or manual transformation |
| `redact` | Restrict or remove sensitive content while preserving redaction evidence |
| `resolve-conflict` | Record a merge-conflict resolution |
| `revert` | Counteract an earlier revision, change set, or event |

Extensions MAY define additional operations using namespaced identifiers.

An unknown operation MUST be preserved by lossless consumers. A consumer unable to apply it MUST report the unsupported operation and MUST NOT silently claim an equivalent reconstructed state.

## 10. Change capture and commit processing

### 10.1 Working-state edits

An implementation MAY collect fine-grained interface operations in a mutable working state.

Before commitment, it MAY:

- coalesce repeated keystrokes into one semantic text replacement;
- group related field edits into one atomic change set;
- remove transient no-op changes;
- convert implementation-specific operations into portable operations;
- validate target identities and base revisions.

The committed representation MUST preserve the resulting scholarly meaning and declared provenance.

### 10.2 Commit procedure

A history-preserving editor SHOULD perform the following steps:

1. identify the versioned entity and current base revision;
2. collect or derive semantic change events;
3. validate event targets and operation data;
4. associate the change set with an agent or explicit unknown marker;
5. apply atomicity rules;
6. produce the new entity state;
7. assign an immutable revision identifier;
8. record parent relationships;
9. calculate a state digest when supported;
10. update the selected branch head;
11. persist the revision, change set, and required snapshot or event data as one recoverable transaction.

A failed atomic commit MUST NOT expose a new head revision.

### 10.3 No-op changes

A producer SHOULD avoid committing a revision that has no semantic effect unless the revision records a meaningful workflow checkpoint, validation result, external synchronisation, signature, or preservation event.

A no-op revision MUST state its purpose.

### 10.4 Multi-entity changes

One user action may affect several versioned entities.

Implementations MAY:

- use separate change sets linked by a common correlation ID;
- use a transaction record covering several entity histories;
- model the aggregate manuscript as the versioned entity.

The chosen approach MUST make partial failure and atomicity boundaries explicit.

## 11. Snapshots and reconstruction

### 11.1 Snapshot association

A snapshot MUST identify the revision it represents.

A snapshot SHOULD include or reference:

- entity ID;
- revision ID;
- schema or format version;
- serialization media type;
- digest and canonicalization information when available;
- creation time;
- creator or generating service;
- history completeness declaration.

### 11.2 Reconstruction

A Core Revision History producer claiming reconstructable history MUST provide enough snapshots and events to derive each claimed reconstructable revision state.

A consumer SHOULD verify that:

- event bases match the expected parent state;
- operation targets exist or have declared creation semantics;
- atomic change sets apply completely;
- resulting digests match declared state digests when supported.

### 11.3 Snapshot-only exchange

A Snapshot Exchange package MAY omit complete history.

It MUST include:

- represented entity ID;
- represented revision ID;
- schema or format version;
- `historyScope: snapshot-only`;
- an omission notice;
- known parent or source revision references when available.

A snapshot-only consumer MUST NOT invent missing revisions or imply complete authorship provenance.

### 11.4 Compaction

An implementation MAY compact internal history for storage or performance.

Compaction MUST NOT silently change a complete-history claim into an incomplete one.

When events or snapshots are discarded, the resulting representation MUST:

- declare the new history boundary;
- preserve retained revision identity;
- preserve required merge and checkpoint references;
- retain redaction or compaction evidence;
- report which reconstruction capabilities were lost.

## 12. Branches and heads

### 12.1 Branch record

A branch record SHOULD contain:

| Field | Cardinality | Meaning |
|---|---:|---|
| `id` | 1 | Stable branch identifier |
| `name` | 0..1 | Human-readable name |
| `entityId` | 1 | Versioned entity |
| `headRevisionId` | 1 | Current branch head |
| `baseRevisionId` | 0..1 | Revision from which the branch was established |
| `createdAt` | 1 | Creation time |
| `createdBy` | 1 | Agent or service |
| `status` | 1 | `active`, `merged`, `archived`, or `deleted` |
| `purpose` | 0..1 | Translation, review, experiment, correction, or other intent |

Changing a branch head MUST NOT change the identity or content of the referenced revision.

### 12.2 Detached heads

A history MAY identify a head revision without a branch.

A detached head MUST remain a revision reference and MUST NOT be serialized as an invented branch.

### 12.3 Branch deletion

Deleting or archiving a branch MUST NOT delete revisions that remain reachable through retained history or preservation requirements.

## 13. Merge model

### 13.1 Merge record

A merge record SHOULD contain:

| Field | Cardinality | Meaning |
|---|---:|---|
| `id` | 1 | Merge-record identifier |
| `entityId` | 1 | Versioned entity |
| `sourceRevisionIds` | 2..n | Divergent heads being combined |
| `baseRevisionIds` | 1..n | Selected common ancestor or ancestors |
| `resultRevisionId` | 1 | Merge result |
| `performedBy` | 1 | Agent or service |
| `performedAt` | 1 | Merge time |
| `strategy` | 0..1 | Declared merge method |
| `conflicts` | 0..n | Detected conflicts |
| `resolutions` | 0..n | Applied resolutions |
| `message` | 0..1 | Human-readable summary |

The result revision MUST list the merged source revisions as direct parents unless the declared strategy and profile explicitly define another equivalent representation.

### 13.2 Merge base selection

A merger MUST record the merge base or bases actually used.

When several valid common ancestors exist, the merger MAY use one or more according to its algorithm, but it MUST NOT claim a different base after the merge without a corrective record.

### 13.3 Automatic merge

An automatic merge MAY combine changes when their targets and semantics do not conflict.

Examples include:

- edits to unrelated objects;
- independent metadata fields;
- ordered insertions with deterministic placement rules;
- identical changes;
- changes for which a registered domain-specific merge rule exists.

Automatic merging MUST preserve actor attribution and change provenance from every incorporated lineage.

### 13.4 Conflict categories

The core conflict categories are:

- `concurrent-update`;
- `update-delete`;
- `delete-restore`;
- `move-move`;
- `reorder-reorder`;
- `identity-collision`;
- `schema-incompatibility`;
- `extension-unknown`;
- `permission-or-policy`;
- `integrity-failure`;
- `other`.

A conflict record SHOULD contain:

- conflict ID;
- category;
- affected targets;
- source revision IDs;
- base value or digest when available;
- competing values or operations;
- resolution status;
- resolution event ID when resolved;
- explanatory message.

### 13.5 Conflict resolution

A conflict resolution MUST be recorded as provenance-bearing data.

A resolution MAY:

- choose one candidate;
- combine candidates;
- create a new value;
- retain both values in a domain-specific structure;
- postpone resolution;
- reject the merge.

An unresolved conflict MUST NOT be silently represented as a fully resolved merge result.

## 14. Revert, restoration, and correction

### 14.1 Revert semantics

A revert creates new history.

A revert event SHOULD identify:

- the revision, change set, or event being counteracted;
- whether the revert is complete or partial;
- the generated inverse or replacement operations;
- the actor and reason;
- any conflicts encountered because later history changed the same targets.

### 14.2 Restoration

Restoration of a deleted object SHOULD preserve the original object identifier when the same conceptual object is restored.

When restoration instead creates a new conceptual object, a new identifier MUST be assigned and the relationship to the deleted object SHOULD be recorded.

### 14.3 Correction of erroneous provenance

An erroneous actor, timestamp, message, or identifier assertion in committed history MUST be corrected through an explicit correction or supersession record.

Implementations MAY restrict display of the erroneous value for privacy or legal reasons, but MUST preserve authorised audit evidence of the correction unless retention policy requires verified destruction.

## 15. Deletion and tombstones

A tombstone SHOULD contain:

- deleted object ID;
- object type;
- deletion revision ID;
- deleting change-event ID;
- actor or service;
- deletion time;
- reason when available;
- former parent or container relationship when needed for interpretation;
- visibility and retention classification;
- restoration or supersession relationship when applicable.

A public tombstone MAY omit restricted former content.

A consumer MUST distinguish:

- object deletion;
- relationship detachment;
- branch deletion;
- history redaction;
- object withdrawal from publication;
- physical storage erasure.

These actions are not interchangeable.

## 16. Ordering and movement

Ordered scholarly collections include contributor lists, sections, blocks, references, figures, tables, and review items.

A reorder event SHOULD identify:

- collection ID;
- moved object ID;
- previous neighbour or position reference when known;
- new neighbour or position reference;
- ordering scheme;
- base revision.

Portable ordering SHOULD prefer stable neighbour or rank semantics over transient zero-based array indexes.

A move between containers MUST preserve object identity unless the governing model explicitly treats the move as copy-and-delete.

## 17. Authorship and provenance

### 17.1 Agent attribution

Change authorship MUST reference an agent defined according to `OMI-SPEC-150`, or an explicit unknown, unidentified, withheld, or service-agent representation.

An application account identifier MAY be retained in restricted operational audit data, but MUST NOT replace portable agent attribution in scholarly history.

### 17.2 Human and software responsibility

A change MAY distinguish:

- `actorId`: the human or organisation responsible for the scholarly decision;
- `performedBy`: the software agent or service executing the operation;
- `committedBy`: the agent or service authorising or persisting the revision;
- `onBehalfOf`: a declared delegation relationship.

A transformation performed automatically SHOULD identify both the software agent and the triggering human or process when known.

### 17.3 Imported history

Imported history MUST identify its source and import event.

An importer MUST NOT relabel imported revisions as locally authored merely because it created local storage records.

When source identities cannot be resolved, the importer SHOULD preserve source labels and provenance as unresolved assertions.

## 18. Time and causal order

Revision parent relationships and event sequencing provide causal evidence.

Timestamps provide temporal evidence but may be affected by clock skew, offline editing, import, or privacy transformations.

A consumer MUST NOT infer that revision A is an ancestor of revision B solely because A has an earlier timestamp.

When local sequence numbers are used, their scope MUST be declared.

## 19. Integrity evidence

### 19.1 State digest

A state digest record SHOULD contain:

- algorithm URI or registered name;
- digest value;
- canonicalization method or profile;
- included and excluded data scope;
- media type or schema version;
- creation time;
- generating service.

### 19.2 Event and graph integrity

Implementations MAY provide:

- per-event digests;
- change-set digests;
- revision digests;
- chained digests;
- Merkle structures;
- digital signatures;
- trusted timestamp evidence.

Use of these techniques does not itself prove authorship, legal validity, or semantic correctness.

### 19.3 Integrity failure

A consumer detecting a digest mismatch, missing required parent, invalid signature, or graph cycle MUST report an integrity failure and MUST NOT silently mark the affected history as verified.

## 20. Privacy, confidentiality, and redaction

Version history may expose deleted text, personal information, reviewer identities, unpublished findings, access tokens, confidential correspondence, or legally restricted data.

A conforming implementation MUST support separation of:

- public scholarly history;
- workspace-visible editing history;
- restricted administrative audit data;
- secret authentication or infrastructure data.

Authentication secrets, password hashes, session tokens, private keys, and refresh tokens MUST NOT appear in OMI scholarly history.

### 20.1 Redaction record

A redaction SHOULD preserve:

- affected revision, event, field, or payload reference;
- redaction reason category;
- responsible authority or agent when disclosure is permitted;
- redaction time;
- whether content was masked, encrypted, access-restricted, or destroyed;
- impact on reconstruction and integrity verification.

A public serialization MAY replace restricted payloads with redaction markers while retaining safe structural evidence.

### 20.2 Rightful erasure and preservation duties

Implementations applying erasure or retention obligations MUST document the resulting history limitations.

This specification does not determine which legal or ethical rule governs a particular record.

## 21. Serialization

### 21.1 Illustrative history record

The following example is informative and does not define the canonical schema.

```json
{
  "modelVersion": "OMI-SPEC-160@0.1.0",
  "historyId": "urn:uuid:1798d883-e226-4a39-a601-cadef82aa223",
  "entityId": "urn:uuid:manuscript-001",
  "historyScope": "complete",
  "headRevisionIds": [
    "urn:uuid:revision-002"
  ],
  "revisions": [
    {
      "id": "urn:uuid:revision-001",
      "entityId": "urn:uuid:manuscript-001",
      "parentRevisionIds": [],
      "changeSetIds": ["urn:uuid:changeset-001"],
      "createdAt": "2026-08-06T19:00:00Z",
      "createdBy": "urn:uuid:agent-001",
      "message": "Create manuscript"
    },
    {
      "id": "urn:uuid:revision-002",
      "entityId": "urn:uuid:manuscript-001",
      "parentRevisionIds": ["urn:uuid:revision-001"],
      "changeSetIds": ["urn:uuid:changeset-002"],
      "createdAt": "2026-08-06T19:15:00Z",
      "createdBy": "urn:uuid:agent-001",
      "message": "Revise title"
    }
  ],
  "changeSets": [
    {
      "id": "urn:uuid:changeset-002",
      "entityId": "urn:uuid:manuscript-001",
      "baseRevisionIds": ["urn:uuid:revision-001"],
      "actorId": "urn:uuid:agent-001",
      "createdAt": "2026-08-06T19:14:58Z",
      "atomic": true,
      "events": [
        {
          "id": "urn:uuid:event-002",
          "operation": "update",
          "target": {
            "entityId": "urn:uuid:manuscript-001",
            "property": "title"
          },
          "before": "Untitled manuscript",
          "after": "Version-aware scholarly editing",
          "sequence": 1
        }
      ]
    }
  ]
}
```

### 21.2 Illustrative merge record

```json
{
  "id": "urn:uuid:merge-001",
  "entityId": "urn:uuid:manuscript-001",
  "sourceRevisionIds": [
    "urn:uuid:revision-author",
    "urn:uuid:revision-editor"
  ],
  "baseRevisionIds": ["urn:uuid:revision-common"],
  "resultRevisionId": "urn:uuid:revision-merged",
  "performedBy": "urn:uuid:agent-editor",
  "performedAt": "2026-08-06T20:00:00Z",
  "strategy": "three-way-semantic",
  "conflicts": [
    {
      "id": "urn:uuid:conflict-001",
      "category": "concurrent-update",
      "targets": [
        {
          "entityId": "urn:uuid:manuscript-001",
          "property": "title"
        }
      ],
      "status": "resolved",
      "resolutionEventId": "urn:uuid:event-resolution-001"
    }
  ]
}
```

## 22. Validation rules

A validator MUST report an error when:

- a revision ID is duplicated within the same history scope;
- a non-root revision has no parent without a shallow-boundary declaration;
- a parent revision belongs to a different entity without an explicit cross-entity relation;
- the revision graph contains a cycle;
- a declared head revision is absent;
- a change set has no base revision;
- an event has no operation or target;
- an atomic change set is represented as partially applied;
- a merge result omits required direct parents;
- a resolved conflict lacks resolution evidence;
- a revert erases or replaces the referenced committed revision;
- a public serialization exposes data marked restricted or secret;
- a digest record omits its algorithm;
- a `complete` history contains unresolved missing-parent references.

A validator SHOULD report a warning when:

- a revision has no message or intent summary;
- an actor is unknown without an explanatory marker;
- a timestamp lacks useful precision;
- an operation uses only a transient positional target;
- a snapshot lacks a digest;
- a partial history lacks a human-readable omission notice;
- an imported revision lacks source provenance;
- a branch name is used as a revision identifier;
- a large update event obscures independently meaningful semantic changes.

## 23. Processing unknown and extension data

A lossless consumer MUST preserve:

- unknown namespaced operation types;
- extension fields on revisions, events, change sets, branches, and merge records;
- unknown visibility classifications;
- unresolvable external references.

A consumer that cannot preserve or apply an extension MUST:

1. report the unsupported extension;
2. state whether the current state remains reconstructable;
3. avoid claiming lossless round-trip support;
4. preserve opaque payloads where safe and technically possible.

## 24. Compatibility and migration

### 24.1 Migration from timestamp-only manuscripts

A manuscript containing only `version`, `createdAt`, and `updatedAt` values does not contain a conforming OMI revision history.

A migration MAY create a synthetic root revision representing the imported current state.

The synthetic revision MUST:

- identify the migration or import event;
- declare that earlier history is unavailable;
- use `historyScope: snapshot-only` or `shallow`;
- avoid inventing authors, events, or causal relationships;
- retain original timestamps as source assertions rather than verified commit history when their meaning is uncertain.

### 24.2 Migration from embedded audit logs

An importer SHOULD map source audit records to change events only when operation, target, actor, and temporal semantics can be preserved.

Unmappable source records SHOULD be retained as opaque provenance attachments or reported as omitted.

### 24.3 Compatible evolution

A compatible future revision of this specification may:

- add optional event properties;
- add namespaced operation types;
- add optional integrity evidence;
- refine warnings;
- add conformance profiles that preserve core semantics.

An incompatible change includes:

- making committed revisions mutable;
- changing parent semantics;
- reusing revision identifiers;
- treating branch names as immutable revision identity;
- removing the requirement to disclose partial history;
- redefining revert as destructive erasure.

## 25. Interoperability considerations

### 25.1 Git and distributed version control

Git commits, trees, branches, and merges may provide implementation infrastructure, but Git line diffs and repository identities do not automatically represent OMI semantic events or agent identities.

A Git-backed implementation SHOULD map:

- commit identity to revision identity;
- parent commits to parent revisions;
- tree state to snapshots;
- author and committer fields to appropriately scoped OMI agent assertions;
- merge commits to merge records;
- tags to checkpoints or release labels.

### 25.2 JSON Patch and similar operation formats

JSON Patch or comparable formats MAY encode low-level operations. A producer MUST supplement them when necessary to preserve stable object targeting, semantic intent, actor provenance, move semantics, and OMI extension behaviour.

### 25.3 Event-sourced systems

An event-sourced system MAY map native events directly when their semantics satisfy this specification. Internal events that expose secrets, storage details, or unstable implementation paths SHOULD be transformed into portable OMI events.

### 25.4 CRDT and operational-transformation systems

A CRDT or OT implementation MAY retain native operations internally. For OMI exchange it MUST provide revision, actor, target, merge, and history-completeness semantics required by its declared profile.

Automatic convergence does not eliminate the need to record scholarly conflicts, policy conflicts, or provenance.

### 25.5 W3C PROV and provenance systems

Implementations MAY map agents, activities, entities, derivations, and generation events to W3C PROV or another provenance model. Such mappings SHOULD preserve the distinction between the scholarly object, its revision, the change activity, the responsible agent, and the executing software service.

## 26. Security considerations

History ingestion and reconstruction can expose implementations to:

- maliciously deep or cyclic graphs;
- oversized event payloads;
- path traversal in snapshot references;
- replay of unauthorised changes;
- forged actor assertions;
- digest confusion;
- algorithm downgrade;
- extension payload attacks;
- denial of service through conflict explosion;
- injection through human-readable messages.

Implementations SHOULD:

- limit graph depth and payload size according to declared policies;
- validate identifiers and references;
- reject cycles;
- sandbox transformation operations;
- treat messages and labels as untrusted text;
- authenticate operational requests separately from scholarly provenance;
- verify digest algorithms and canonicalization profiles;
- avoid executing extension payloads as code;
- preserve evidence of rejected or quarantined imports.

## 27. Accessibility considerations

Version-history interfaces SHOULD:

- expose changes in machine-readable and text alternatives, not colour alone;
- provide keyboard-accessible revision navigation;
- announce conflict and validation state to assistive technology;
- identify actor, time, target, operation, and outcome in readable language;
- permit comparison without requiring precise pointer interaction;
- avoid relying solely on side-by-side visual diff layouts;
- provide summaries for large change sets;
- preserve logical reading order in merged or reverted content views.

## 28. Internationalisation considerations

Human-readable revision messages, labels, reasons, and conflict explanations SHOULD support language tags.

Text changes MUST preserve the language and script metadata of the affected content where such metadata exists.

Implementations SHOULD distinguish:

- interface-language labels;
- language of changed scholarly content;
- language of the change message;
- translation lineage governed by `OMI-SPEC-170`.

String comparison, tokenization, normalization, and text merging SHOULD NOT assume English, Latin script, or space-delimited words.

## 29. Preservation considerations

A preservation package claiming version-history preservation SHOULD include:

- the versioned entity identifier;
- exact OMI specification and schema versions;
- revision graph;
- head and checkpoint references;
- snapshots or reconstructable events;
- digest and canonicalization metadata;
- agent and provenance references;
- partial-history and redaction notices;
- extension namespaces;
- software or transformation metadata needed for interpretation;
- a manifest relating history records to packaged assets.

Branch names may change, but revision identity and parent relationships MUST remain stable.

## 30. Implementation status

Open Manuscript Studio currently stores a mutable manuscript state with a human-readable `version` string, `createdAt`, and `updatedAt` timestamps. Store actions directly replace the current state and update the modification timestamp.

The Studio does not yet provide:

- immutable revision records;
- change sets or semantic change events;
- actor-attributed editing history;
- snapshots linked to revisions;
- revision graph validation;
- branches or multiple heads;
- merge-base selection;
- conflict and resolution records;
- reverts represented as new history;
- tombstones;
- partial-history declarations;
- state digests or integrity verification.

Its current status remains **Exploratory** for `OMI-SPEC-160`. The first implementation milestone should introduce a linear revision ledger around existing Zustand mutations before branch and merge behaviour is added.

## 31. Recommended implementation sequence

1. add `versioningModelVersion`, `historyId`, and `headRevisionId` to the manuscript aggregate or associated workspace history;
2. define `Revision`, `ChangeSet`, `ChangeEvent`, and stable target types;
3. wrap current title, abstract, block, section, and contributor mutations in semantic change sets;
4. record the authenticated user's linked agent ID as actor when available;
5. create immutable linear revisions and snapshots;
6. add undo as revert-producing history rather than state deletion;
7. add tombstones for deleted sections, blocks, agents, and contributions;
8. implement export and import of shallow or snapshot-only history;
9. add revision-history UI and accessible change summaries;
10. add branches, merge bases, conflicts, and resolutions;
11. publish canonical schemas and valid and invalid fixtures;
12. map tests to `REQ-VCH-*` requirements.

## 32. Test and fixture requirements

A future conformance fixture set SHOULD include:

- one root revision;
- a valid linear three-revision history;
- an atomic multi-event change set;
- text update, metadata update, move, reorder, delete, restore, and revert events;
- a shallow history with declared omitted ancestry;
- a snapshot-only exchange package;
- two branches with a clean merge;
- a merge with one resolved conflict;
- an unresolved conflict;
- a deletion tombstone;
- a redacted restricted event;
- valid and invalid state digests;
- duplicate revision IDs;
- missing parents;
- a revision cycle;
- an unsupported extension operation;
- an imported synthetic root revision.

## 33. Unresolved issues

The Draft leaves the following questions open:

1. whether the canonical schema should embed history inside the manuscript or permit only a linked history resource;
2. which canonicalization profiles should be registered for state digests;
3. whether revision identifiers should be required to be URIs in the Stable profile;
4. how semantic text operations should reference ranges after concurrent edits;
5. which operation vocabulary values should become controlled registry terms;
6. how cross-entity atomic transactions should be represented in the core schema;
7. how much restricted audit evidence may be retained in portable packages;
8. whether checkpoint categories require a dedicated controlled vocabulary;
9. which merge strategies should be standardized beyond evidence requirements;
10. how preservation packages should represent pruned encrypted history.

These issues do not prevent implementation of the Core Revision History profile.

## 34. Normative requirement index

| Requirement | Subject |
|---|---|
| `REQ-VCH-001` | Revision identity |
| `REQ-VCH-002` | Revision immutability |
| `REQ-VCH-003` | Parent relationships |
| `REQ-VCH-004` | Change-set provenance |
| `REQ-VCH-005` | Event operation and target |
| `REQ-VCH-006` | Separation of version concepts |
| `REQ-VCH-007` | Non-destructive revert |
| `REQ-VCH-008` | Deletion traceability |
| `REQ-VCH-009` | Move and reorder semantics |
| `REQ-VCH-010` | Merge evidence |
| `REQ-VCH-011` | Missing-parent handling |
| `REQ-VCH-012` | Partial-history disclosure |
| `REQ-VCH-013` | Restricted history protection |
| `REQ-VCH-014` | Agent attribution |
| `REQ-VCH-015` | Extension preservation |
| `REQ-VCH-016` | Timestamp and causality separation |
| `REQ-VCH-017` | Digest algorithm and scope |
| `REQ-VCH-018` | Atomicity |

## 35. Change history

| Version | Date | Summary |
|---|---|---|
| 0.1.0 | 2026-08-06 | Initial Draft defining immutable revisions, semantic change sets and events, revision graphs, snapshots, branches, merges, conflicts, reverts, tombstones, provenance, integrity, partial-history exchange, and implementation guidance. |

## 36. Summary

`OMI-SPEC-160` defines a portable history model for scholarly objects.

It ensures that a manuscript revision is not confused with a schema or application version, committed history is not silently rewritten, changes remain attributable to agents, deletion and reversion remain auditable, branching and merging are represented explicitly, partial history is disclosed, and implementations with different internal algorithms can exchange version evidence without reconstructing meaning from timestamps alone.
