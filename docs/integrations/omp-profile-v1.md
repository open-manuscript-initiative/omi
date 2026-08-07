---
title: OMP Integration Profile v1
description: OMI Integration API v1 profile for Open Monograph Press, including monographs, edited volumes, chapters, review, revisions, production, and catalog workflows.
---

# OMP Integration Profile v1

**Status:** Draft  
**Base protocol:** `omi-integration/1`  
**Profile identifier:** `omi-integration/1/omp`

## 1. Scope

The OMP Integration Profile defines how an Open Monograph Press (OMP) installation maps scholarly book publishing workflows to the platform-neutral OMI Integration API v1.

The profile supports monographs, edited volumes, chapters and other compound scholarly works without reducing them to journal-article semantics.

OMP and the OMI service remain separate applications with separate persistence layers. The OMP integration plugin acts as an adapter. Open Manuscript Studio MUST NOT access the OMP database or private files directory directly.

## 2. Architectural boundary

```text
OMP
Own application and database
        |
        | OMP OMI Integration Plugin
        | supported PKP/OMP services / repositories / hooks
        |
        | HTTPS + OMI Integration API v1
        v
Open Manuscript Studio
Own application and PostgreSQL database
```

The adapter MUST NOT require patches to OMP core files. It SHOULD isolate OMP-version-specific implementation details from the OMI protocol layer.

## 3. Authority model

OMP is authoritative for:

- press identity and configuration;
- submission existence and workflow stage;
- editorial assignments;
- reviewer invitations and assignments;
- review rounds and deadlines;
- editorial decisions;
- submission and production file workflow state;
- publication state;
- series and catalog-facing organization;
- publication formats and public delivery.

OMI / Studio is authoritative for:

- the structured OMI scholarly object;
- stable anchors;
- manuscript hierarchy represented in OMI;
- Studio-native annotations;
- collaborative editing;
- OMI structural revision history;
- structured review annotations created in Studio;
- annotation response and resolution state;
- portable OMI package generation.

## 4. Required profile mapping

| OMI Integration API resource | OMP concept |
| --- | --- |
| `installation` | OMP installation |
| `context` | press |
| `submission` | OMP submission / monograph workflow object |
| `component` | chapter, front matter, back matter, appendix, or other publication component |
| `contributor` | author, editor, translator, chapter author, or other contributor |
| `file` | submission or production file |
| `reviewAssignment` | OMP review assignment |
| `reviewRound` | OMP review round |
| `revision` | traceable manuscript/submission revision state |
| `publication` | monograph publication and catalog-facing state |

OMP numeric identifiers MUST be serialized as strings at the protocol boundary.

## 5. Installation identity

Each connected OMP deployment MUST have a stable `installationId`.

Example:

```json
{
  "installationId": "omp-example-university",
  "platform": "omp",
  "profile": "omi-integration/1/omp",
  "baseUrl": "https://books.example.edu/"
}
```

The installation identifier MUST remain stable when press names, paths, or public URLs change.

## 6. Press context

An OMP press maps to an OMI `context`.

```json
{
  "externalId": "3",
  "type": "press",
  "path": "example-press",
  "name": {
    "en": "Example University Press"
  },
  "url": "https://books.example.edu/index.php/example-press"
}
```

The OMP press ID is the stable external context identifier. The public path is navigational metadata and MUST NOT be the sole persistent identity.

## 7. Submission mapping

An OMP scholarly work maps to an OMI `submission`.

A connector SHOULD expose:

- submission ID;
- current workflow stage;
- current publication metadata;
- primary locale;
- localized title and subtitle where available;
- localized description or abstract;
- keywords or subjects where available;
- contributor relationships;
- publication type where available;
- dates needed for synchronization;
- persistent identifiers where permitted.

Example:

```json
{
  "externalId": "431",
  "type": "edited-volume",
  "status": "review",
  "title": {
    "en": "Studies in Scholarly Communication"
  },
  "primaryLocale": "en",
  "updatedAt": "2026-08-07T18:30:00Z"
}
```

The connector MUST NOT assume that every OMP submission is a single-author monograph.

## 8. Compound scholarly works

The OMP profile treats compound structure as a first-class integration concern.

An OMI representation MAY contain:

```text
Book
├── Front matter
│   ├── Title page
│   ├── Preface
│   └── Introduction
├── Chapter 1
├── Chapter 2
├── Chapter 3
├── Appendix
├── Bibliography
└── Back matter
```

The exact structure is determined by the scholarly work and OMI document model, not by a fixed book template.

## 9. Components

OMP publication components map to OMI `component` resources when the distinction is meaningful to synchronization, authorship, review, production, or publication.

Example:

```json
{
  "externalId": "chapter-7",
  "type": "chapter",
  "title": {
    "en": "The Evolution of Scholarly Editing"
  },
  "sequence": 7,
  "parentExternalId": null
}
```

A component SHOULD preserve:

- stable external identifier;
- type;
- localized title where applicable;
- sequence/order;
- parent relationship where applicable;
- contributor scope;
- file/revision relationships where available.

Components MAY be nested.

## 10. Edited volumes

An edited volume MUST NOT be flattened into a single author list.

The connector SHOULD preserve distinctions among:

- volume editors;
- book-level authors;
- chapter authors;
- translators;
- introduction authors;
- commentators;
- other scholarly contributor roles.

A contributor's role and scope SHOULD be represented explicitly.

## 11. Contributor scope

Example book-level editor:

```json
{
  "externalId": "contributor-18",
  "name": {
    "given": "Anna",
    "family": "Editor"
  },
  "roles": ["editor"],
  "scope": {
    "type": "submission",
    "externalId": "431"
  }
}
```

Example chapter author:

```json
{
  "externalId": "contributor-29",
  "name": {
    "given": "Bela",
    "family": "Author"
  },
  "roles": ["author"],
  "scope": {
    "type": "component",
    "externalId": "chapter-7"
  }
}
```

The connector MUST NOT promote component-scoped authorship to whole-publication authorship unless OMP explicitly represents that relationship.

## 12. Contributor identifiers

Where available and permitted, contributor representations SHOULD preserve ORCID and other scholarly identity identifiers.

Email addresses and other private identity data MUST be transmitted only when required by the operation and permitted by the effective workflow policy.

## 13. Submission and production files

OMP files map to OMI `file` resources.

The connector SHOULD distinguish workflow purpose where OMP provides it, for example:

- submission manuscript;
- chapter manuscript;
- review file;
- revised manuscript;
- copyedited file;
- production file;
- publication-format source;
- supplementary asset.

Example:

```json
{
  "externalId": "file-221",
  "name": "chapter-07.docx",
  "mediaType": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "stage": "submission",
  "componentExternalId": "chapter-7",
  "revision": 2
}
```

Studio MUST retrieve binary content through an authorized integration endpoint. The connector MUST NOT expose private filesystem paths.

## 14. Import into Studio

Studio MAY import a complete monograph, selected files, or a component-scoped manuscript depending on OMP structure and user authorization.

An import SHOULD preserve:

- OMP installation identity;
- press identity;
- submission identity;
- component identity;
- source file identity;
- checksum where practical;
- source revision;
- synchronization time.

Import MUST NOT modify the source OMP files.

## 15. OMI workspace strategies

An implementation MAY use either a single-workspace or coordinated-workspace strategy.

### 15.1 Single-workspace strategy

The complete book is represented by one OMI workspace containing the full structured scholarly object.

This strategy is appropriate when contributors collaborate across the work and global structure matters strongly.

### 15.2 Coordinated-workspace strategy

A parent work coordinates separately permissioned component workspaces, for example chapter-level authoring in an edited volume.

```text
Edited volume workspace
├── Chapter 1 workspace
├── Chapter 2 workspace
├── Chapter 3 workspace
└── Shared book metadata / structure
```

The implementation MUST preserve stable relationships between parent and component objects. Export MUST be capable of reconstructing the intended compound work.

## 16. Access control for edited volumes

A chapter author SHOULD be grantable access to their chapter without automatically receiving write access to other chapters.

An editor MAY receive broader access to the complete volume.

Authorization MUST be enforced server-side and SHOULD derive from both OMP workflow authority and Studio workspace permissions.

## 17. Returning revisions to OMP

A Studio-to-OMP return MUST create a traceable new file or revision according to OMP workflow semantics.

The request SHOULD identify whether the revision applies to:

- the complete submission;
- a specific component;
- multiple components;
- production output.

Example:

```json
{
  "target": {
    "type": "component",
    "externalId": "chapter-7"
  },
  "baseExternalRevision": "2",
  "source": "omi",
  "omiRevision": "01J...",
  "message": "Revised chapter from Open Manuscript Studio"
}
```

Historical files MUST NOT be silently overwritten.

## 18. Signed launch flow

The OMP plugin SHOULD provide an **Open in Studio** action for authorized workflow participants.

A launch assertion SHOULD identify:

- installation;
- press context;
- submission;
- optional component target;
- external actor;
- requested scopes;
- issued time;
- expiration;
- nonce.

A chapter-scoped launch MAY identify the component explicitly.

## 19. User identity and linking

An OMP user ID is an external identity assertion. Studio MAY associate it with a local account after successful signed launch and authorization.

The recommended external identity key is:

```text
installationId + externalUserId
```

Email MUST NOT be the sole immutable cross-system identity key.

## 20. Peer review authority

OMP remains authoritative for review assignment, review round, deadline, effective review method, permitted recommendation values, completion state, and editorial decision.

Studio MAY provide the structured scholarly review environment.

## 21. Review targets

Unlike a simple article workflow, an OMP review MAY target:

- the complete monograph;
- an edited volume;
- one chapter;
- a set of chapters;
- another stable component.

Example chapter review assignment:

```json
{
  "externalId": "review-612",
  "roundExternalId": "round-1",
  "target": {
    "type": "component",
    "externalId": "chapter-7"
  },
  "reviewMode": "double-anonymous",
  "permissions": ["manuscript.read", "review.write"]
}
```

The target MUST be explicit when the review is not for the complete submission.

## 22. Review anonymity

The OMP connector MUST enforce the effective review policy before transmitting data.

For component review, identity filtering MUST consider both book-level and component-level contributors. Removing only the chapter author's name may be insufficient if editor, affiliation, acknowledgement, file metadata, or other information reveals identity contrary to policy.

Studio MUST enforce received confidentiality policy server-side.

## 23. Structured review

Studio MAY support:

- overall monograph reports;
- chapter-level reports;
- stable anchored annotations;
- editor-only comments;
- author-visible comments;
- recommendation;
- reviewer attachments;
- author/editor responses;
- annotation resolution tracking;
- multiple rounds.

Annotations SHOULD target stable OMI scholarly objects rather than rendered page coordinates whenever possible.

## 24. Cross-component review

A review of a complete edited volume MAY contain annotations targeting multiple components.

Example:

```json
{
  "assignmentExternalId": "review-700",
  "target": {
    "type": "submission",
    "externalId": "431"
  },
  "annotations": [
    {
      "anchor": "omi:anchor:chapter-2:01J...",
      "body": "This chapter should define the term earlier."
    },
    {
      "anchor": "omi:anchor:chapter-8:01J...",
      "body": "This section conflicts with the terminology used in Chapter 2."
    }
  ]
}
```

The OMI anchor model SHOULD allow such comments to remain stable across layout and pagination changes.

## 25. Author response and revision

Where OMP permits revision, Studio MAY expose authorized review comments to book editors, book authors, or component authors according to scope.

A component author MAY respond to and revise only the components they are authorized to modify.

Resolution by an author MUST NOT be interpreted as reviewer or editor approval.

## 26. Multiple review rounds

Review rounds MUST remain historically distinct. Earlier reports and annotations SHOULD retain their round provenance.

A new round MAY reference unresolved annotations from earlier rounds without mutating the historical review record.

## 27. Editorial workspace

An authorized press editor MAY receive a broader Studio view of the complete scholarly object, including component status, review reports, revisions, and annotation resolution.

Editorial decisions remain authoritative in OMP.

## 28. Production integration

After acceptance, Studio MAY produce structured outputs for OMP production.

Potential derivatives include:

- canonical OMI package;
- structured XML;
- JATS-compatible XML where appropriate;
- HTML;
- EPUB-oriented content;
- DOCX-derived production files;
- figures and associated assets;
- other converter-supported formats.

Generated derivatives SHOULD record the OMI revision from which they were produced.

## 29. Publication and catalog integration

OMP remains authoritative for catalog-facing publication state unless explicitly delegated.

The connector MAY expose publication metadata such as:

- title and subtitle;
- contributors;
- series;
- identifiers;
- publication date;
- publication formats;
- catalog description;
- cover and publication assets;
- public URL.

OMI MUST NOT assume that a monograph publication has an issue assignment or article-style publication lifecycle.

## 30. Series

Series are OMP publication/catalog organization and SHOULD remain OMP-authoritative.

An OMI manuscript MAY retain the external series reference as integration metadata but SHOULD NOT require that series to interpret the scholarly object itself.

## 31. Publication formats

OMP may publish multiple formats of a monograph. These publication formats are derivatives or delivery representations and MUST remain distinguishable from the canonical OMI scholarly object.

A PDF, EPUB, HTML edition, or other publication format MUST NOT automatically become the canonical OMI manuscript merely because it is publicly distributed.

## 32. Capability requirements

An OMP connector claiming the base `omi-integration/1/omp` profile MUST support:

```text
launch
metadata.read
contributors.read
files.read
```

A connector supporting compound works SHOULD additionally expose component capabilities defined by the implementation and MUST preserve component identifiers in relevant resources.

An OMP connector claiming manuscript synchronization SHOULD additionally support:

```text
manuscript.read
manuscript.write
revision.read
revision.write
```

An OMP connector claiming peer review integration MUST support:

```text
review.read
review.write
```

A connector claiming production/publication integration SHOULD support:

```text
publication.read
publication.export
```

## 33. Recommended endpoint surface

An implementation SHOULD provide equivalent operations for:

```text
GET  /capabilities
POST /launch
GET  /contexts/{contextId}
GET  /contexts/{contextId}/submissions/{submissionId}
GET  /contexts/{contextId}/submissions/{submissionId}/components
GET  /contexts/{contextId}/submissions/{submissionId}/components/{componentId}
GET  /contexts/{contextId}/submissions/{submissionId}/contributors
GET  /contexts/{contextId}/submissions/{submissionId}/files
GET  /contexts/{contextId}/submissions/{submissionId}/files/{fileId}/content
GET  /contexts/{contextId}/submissions/{submissionId}/revisions
POST /contexts/{contextId}/submissions/{submissionId}/revisions
GET  /contexts/{contextId}/submissions/{submissionId}/reviews/{assignmentId}
POST /contexts/{contextId}/submissions/{submissionId}/reviews/{assignmentId}/result
GET  /contexts/{contextId}/submissions/{submissionId}/publication
```

Component-scoped variants MAY be provided where necessary.

## 34. Authorization

Every operation MUST be authorized at the OMP application layer.

Service credentials establish the integration relationship but do not grant unrestricted access to every press, submission, chapter, file, or review.

Knowledge of an external identifier MUST NOT constitute authorization.

## 35. Synchronization state

Studio SHOULD retain integration metadata including:

```text
installationId
contextExternalId
submissionExternalId
componentExternalId(s)
externalPublicationId (when applicable)
lastExternalRevision
lastSynchronizedAt
source checksum(s)
```

This state MUST remain separable from the canonical OMI document.

## 36. Conflict handling

A connector SHOULD return `409 Conflict` when the external work has changed from the base revision used by Studio and an automatic write would risk data loss.

For compound works, conflict detection SHOULD be component-aware when the host workflow can provide sufficiently granular revision state.

## 37. Idempotency

Retryable write operations SHOULD support idempotency keys. Retries MUST NOT create duplicate chapter revisions, duplicate review reports, or duplicate production files.

## 38. Audit and provenance

Relevant integration events SHOULD be auditable, including launch, manuscript/component import, file retrieval, revision return, review launch, review submission, and production export.

Audit logs MUST avoid unnecessary storage of manuscript content, secrets, and confidential review text.

## 39. Failure isolation

Studio unavailability MUST NOT prevent unrelated OMP administration, catalog management, or publishing operations.

OMP unavailability MUST NOT invalidate an already imported OMI scholarly object.

Protected integration operations SHOULD fail closed.

## 40. Upgrade compatibility

The connector SHOULD separate OMP-specific application adaptation from the OMI protocol:

```text
OMI Integration API
        |
OMP profile mapper
        |
OMP-version adapter
        |
Supported OMP services / repositories / hooks
```

This allows OMP-version-specific implementation changes without redefining `omi-integration/1`.

## 41. Shared PKP implementation

OJS and OMP connectors MAY reuse common PKP integration libraries for:

- installation configuration;
- signing and signature verification;
- nonce/replay protection;
- HTTP response models;
- capability discovery;
- external identity representation;
- file streaming;
- error serialization;
- audit helpers.

Journal-specific and monograph-specific workflow mapping SHOULD remain in separate adapters.

```text
                 OMI Integration API v1
                          |
                  PKP shared library
                    /           \
          OJS profile adapter   OMP profile adapter
                 |                    |
                OJS                  OMP
```

The shared layer MUST NOT force article-specific semantics onto OMP or monograph-specific semantics onto OJS.

## 42. Extensions

OMP-specific data MAY be supplied under a namespaced extension object:

```json
{
  "extensions": {
    "org.pkp.omp": {
      "stageId": 3
    }
  }
}
```

Core clients MUST safely ignore unknown extensions. Extensions MUST NOT redefine core Integration API fields.

## 43. Conformance

An implementation claiming `omi-integration/1/omp` conformance MUST:

1. conform to OMI Integration API v1;
2. expose a stable OMP installation identity;
3. map presses to contexts and OMP scholarly works to submissions;
4. preserve component structure when exposed by the integration;
5. preserve contributor role and scope when available;
6. use application-level authorization;
7. avoid direct Studio access to OMP database tables and private file paths;
8. advertise supported capabilities;
9. preserve external identifiers and provenance;
10. enforce review anonymity server-side when review integration is enabled;
11. preserve traceable revision history for write operations;
12. remain safely disconnectable from Studio.

## 44. Design invariant

The OMP connector integrates scholarly book workflows with OMI without making the manuscript dependent on OMP's internal data model.

OMP manages press workflow, review, production, cataloging, and publication around the scholarly work. Studio provides structured authoring, collaboration, annotation, review, revision, and transformation. The monograph or edited volume remains a portable scholarly object.