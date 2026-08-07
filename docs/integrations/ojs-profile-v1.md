---
title: OJS Integration Profile v1
description: OMI Integration API v1 profile for Open Journal Systems, including submissions, files, review, revisions, and publication workflows.
---

# OJS Integration Profile v1

**Status:** Draft  
**Base protocol:** `omi-integration/1`  
**Profile identifier:** `omi-integration/1/ojs`

## 1. Scope

The OJS Integration Profile defines how an Open Journal Systems (OJS) installation maps its journal publishing workflow to the platform-neutral OMI Integration API v1.

The profile is intended for an architecture in which OJS and the OMI service remain separate applications with separate persistence layers. The OJS integration plugin acts as a thin adapter. Open Manuscript Studio MUST NOT access the OJS database or private files directory directly.

OJS remains authoritative for journal workflow. OMI remains authoritative for the portable structured manuscript and Studio-native scholarly interactions.

## 2. Architectural boundary

```text
OJS
Own application and database
        |
        | OJS OMI Integration Plugin
        | supported OJS services / repositories / hooks
        |
        | HTTPS + OMI Integration API v1
        v
Open Manuscript Studio
Own application and PostgreSQL database
```

The adapter MUST NOT require patches to OJS core files. It SHOULD use supported PKP/OJS extension mechanisms and application-level APIs.

## 3. Authority model

OJS is authoritative for:

- journal identity and journal configuration;
- submission existence and workflow stage;
- editorial assignments;
- reviewer invitation and review assignment;
- review rounds and deadlines;
- reviewer recommendation values accepted by OJS;
- editorial decisions;
- submission-file workflow state;
- publication state;
- issue assignment;
- public article publication.

OMI / Studio is authoritative for:

- the OMI document structure;
- stable anchors;
- Studio-native annotations;
- collaborative manuscript editing;
- structural manuscript history inside OMI;
- structured review annotations created in Studio;
- resolution state of Studio annotations;
- OMI package generation.

Synchronized metadata MUST record provenance and MUST NOT silently create competing authorities.

## 4. Required profile mapping

| OMI Integration API resource | OJS concept |
| --- | --- |
| `installation` | OJS installation |
| `context` | journal |
| `submission` | OJS submission |
| `component` | optional article/submission component |
| `contributor` | author/contributor associated with the current publication |
| `file` | OJS submission file |
| `reviewAssignment` | OJS review assignment |
| `reviewRound` | OJS review round |
| `revision` | traceable manuscript/submission revision state |
| `publication` | OJS publication record and publication-facing state |

OJS numeric identifiers MUST be serialized as strings at the protocol boundary.

## 5. Installation identity

Each OJS deployment connected to an OMI service MUST have a stable `installationId` configured for the integration.

The identifier MUST NOT change when a journal is renamed or when its public URL changes.

Example:

```json
{
  "installationId": "ojs-example-university",
  "platform": "ojs",
  "profile": "omi-integration/1/ojs",
  "baseUrl": "https://journals.example.edu/"
}
```

The OMI service SHOULD store the installation identity independently of the current base URL.

## 6. Journal context

An OJS journal maps to an OMI `context`.

Example:

```json
{
  "externalId": "1",
  "type": "journal",
  "path": "example-journal",
  "name": {
    "en": "Example Journal"
  },
  "url": "https://journals.example.edu/index.php/example-journal"
}
```

The journal ID is the stable external identifier. The journal path SHOULD also be supplied for navigation but MUST NOT be treated as the sole persistent identity.

## 7. Submission mapping

An OJS submission maps to an OMI `submission` resource.

A connector SHOULD expose at least:

- submission ID;
- current workflow stage;
- current publication metadata;
- primary locale;
- localized title;
- localized abstract where available;
- localized keywords where available;
- dates required for synchronization;
- persistent identifiers already assigned to the submission/publication where permitted.

Example:

```json
{
  "externalId": "1542",
  "type": "article",
  "status": "review",
  "title": {
    "en": "Example manuscript"
  },
  "abstract": {
    "en": "Example abstract"
  },
  "keywords": {
    "en": ["history", "publishing"]
  },
  "primaryLocale": "en",
  "updatedAt": "2026-08-07T17:30:00Z"
}
```

The connector SHOULD distinguish OJS workflow state from OMI manuscript state. A submission being in OJS review does not imply that the OMI document is immutable.

## 8. Publication metadata

OJS may contain publication-facing metadata separately from workflow-level submission data. The connector SHOULD read author-facing bibliographic metadata from the publication representation appropriate to the OJS version rather than reconstructing it from database tables.

An OMI synchronization MUST NOT assume that a submission has only one historical publication state.

The connector SHOULD preserve identifiers for the OJS submission and relevant publication record when available.

## 9. Contributors

OJS authors/contributors map to OMI contributor resources.

The connector SHOULD preserve:

- external contributor identifier;
- given and family names;
- preferred public name where available;
- email only when the current integration scope and workflow permit disclosure;
- affiliation;
- country where available and permitted;
- ORCID and other identifiers;
- contributor sequence;
- contributor role where OJS exposes it;
- correspondence designation where applicable.

Contributor identity MUST be filtered when required by anonymous review policy.

The connector MUST NOT expose author identity to a reviewer when the OJS workflow requires author anonymity.

## 10. Components

Most journal articles can be represented as a single submission without child components. The OJS profile therefore does not require component support.

A connector MAY expose host-defined components when useful, for example supplementary material classes or structured article components. Such extensions MUST NOT change the semantics of the core submission resource.

## 11. Submission files

OJS submission files map to OMI `file` resources.

File-list responses SHOULD include:

- stable external file identifier;
- display/file name;
- media type when known;
- size when available;
- workflow stage or genre where appropriate;
- revision information where available;
- checksum when practical;
- creation/update metadata needed for synchronization.

Example:

```json
{
  "externalId": "889",
  "name": "manuscript.docx",
  "mediaType": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "stage": "submission",
  "revision": 2
}
```

Studio MUST retrieve binary content through an authorized OJS integration endpoint. Knowledge of an OJS file ID alone MUST NOT authorize download.

The plugin MUST NOT expose OJS server filesystem paths.

## 12. File import into Studio

When an OJS submission is first opened in Studio, the user SHOULD be able to select an eligible manuscript file or use an automatically selected primary manuscript file according to connector policy.

Import MAY convert DOCX, JATS, HTML, or another supported representation into the OMI document model.

The original OJS file reference and checksum SHOULD be retained as provenance.

Import MUST NOT modify the source OJS file.

## 13. Returning a revision to OJS

A Studio-to-OJS manuscript return MUST create a traceable new OJS-side file or revision according to OJS workflow semantics.

The connector MUST NOT silently overwrite a historical source file.

A revision request SHOULD include:

```json
{
  "baseExternalRevision": "3",
  "source": "omi",
  "omiRevision": "01J...",
  "message": "Author revision from Open Manuscript Studio"
}
```

The OJS connector SHOULD reject the operation with a synchronization conflict if the expected base state has changed and automatic reconciliation would risk data loss.

## 14. Signed launch flow

The OJS plugin SHOULD expose an **Open in Studio** action only to users authorized for the corresponding submission and operation.

The launch assertion SHOULD identify:

- `installationId`;
- journal context ID;
- submission ID;
- OJS user ID;
- requested scopes;
- issued time;
- expiration time;
- nonce.

Example scope for an author editing a revision:

```json
[
  "metadata.read",
  "contributors.read",
  "files.read",
  "manuscript.read",
  "manuscript.write",
  "revision.write"
]
```

A reviewer MUST receive a narrower review-specific scope.

## 15. User identity and account linking

An OJS user identifier is an external identity assertion and MUST NOT automatically become a Studio account identifier.

Studio MAY link an authenticated Studio account to one or more external OJS identities after successful signed launch and local authorization.

A recommended key is:

```text
installationId + externalUserId
```

Email address MUST NOT be used as the sole immutable cross-system identity key.

## 16. Peer review authority

OJS remains authoritative for:

- whether a review assignment exists;
- which reviewer owns it;
- the active review round;
- due dates;
- review method/policy;
- whether author identity may be disclosed;
- whether reviewer identity may be disclosed;
- allowed recommendation values;
- completion state;
- editorial decision after review.

Studio MUST NOT independently assign an OJS reviewer or advance an OJS editorial decision.

## 17. Review launch

A review launch MUST identify a specific authorized review assignment, not merely a submission and user.

Example:

```json
{
  "installationId": "ojs-example-university",
  "context": {"externalId": "1", "type": "journal"},
  "submission": {"externalId": "1542"},
  "reviewAssignment": {"externalId": "991"},
  "reviewRound": {"externalId": "2"},
  "actor": {"externalId": "77"},
  "scope": ["manuscript.read", "review.read", "review.write"]
}
```

The OJS plugin MUST verify that the current OJS user is entitled to act on that assignment before issuing the launch assertion.

## 18. Review anonymity

The OJS connector MUST determine the effective review anonymity policy from the authoritative OJS workflow configuration and assignment context.

Before transmitting a reviewer-visible payload, the connector MUST remove data that the reviewer is not authorized to see.

Filtering MAY include:

- contributor names;
- contributor emails;
- affiliations;
- ORCID identifiers;
- acknowledgements;
- identifying file metadata;
- uploader identity;
- other metadata that would defeat the configured review policy.

Studio MUST also enforce the received policy server-side. Hiding an identity only in React/UI code is non-conformant.

## 19. Structured review in Studio

Studio MAY represent an OJS review as an OMI structured review containing:

- overall review text;
- editor-only comments;
- author-visible comments;
- recommendation;
- anchored annotations;
- attachment references;
- completion state;
- responses and annotation resolution state.

An anchored annotation SHOULD reference a stable OMI anchor rather than a rendered PDF page coordinate whenever possible.

## 20. Returning a review

A review return operation MUST identify the OJS review assignment and review round.

Example:

```json
{
  "assignmentExternalId": "991",
  "roundExternalId": "2",
  "recommendation": "revisions-required",
  "summary": "The manuscript requires clarification in several places.",
  "editorOnly": "The central argument is publishable after revision.",
  "annotations": [
    {
      "anchor": "omi:anchor:01J...",
      "visibility": "author-and-editor",
      "body": "Please provide a source for this statement.",
      "status": "open"
    }
  ]
}
```

The connector MUST validate the recommendation against values permitted for the OJS review context.

Submitting a Studio review SHOULD NOT automatically create an editorial decision unless OJS explicitly provides and authorizes such an operation.

## 21. Multiple review rounds

Studio MUST treat OJS review rounds as distinct external workflow objects.

Annotations from an earlier round SHOULD remain historically attributable to that round even when carried forward for resolution tracking.

A later round MAY reference earlier annotations, but MUST NOT rewrite the historical review record.

## 22. Author revision and response

Where OJS workflow permits an author revision, Studio MAY provide an author workspace containing review comments the author is permitted to see.

The author MAY:

- revise anchored manuscript content;
- respond to review annotations;
- mark a response as addressed from the author's perspective;
- create a new OMI revision;
- return a revision package/file to OJS.

An author's local resolution state MUST NOT be represented as reviewer approval unless the reviewer or editor explicitly confirms it.

## 23. Editorial use

Editors MAY receive broader scopes than authors or reviewers, subject to OJS authorization.

An editor-facing Studio workspace MAY display:

- all permitted review reports;
- editor-only comments;
- manuscript revisions;
- annotation resolution state;
- synchronization status.

The authoritative editorial decision MUST still be recorded in OJS.

## 24. Publication integration

After acceptance, Studio MAY export publication derivatives for OJS production, including formats supported by OMI specifications and installed converters.

Potential outputs include:

- OMI package;
- JATS XML;
- HTML;
- DOCX-derived production output;
- associated assets.

OJS remains authoritative for publication scheduling, issue assignment, DOI/publication metadata workflow, galley/publication state, and public delivery unless explicitly delegated by a future profile extension.

## 25. Capability requirements

An OJS connector claiming the base `omi-integration/1/ojs` profile MUST support:

```text
launch
metadata.read
contributors.read
files.read
```

A connector claiming **OJS manuscript synchronization** SHOULD additionally support:

```text
manuscript.read
manuscript.write
revision.read
revision.write
```

A connector claiming **OJS peer review integration** MUST additionally support:

```text
review.read
review.write
```

A connector claiming **OJS publication integration** SHOULD advertise:

```text
publication.read
publication.export
```

## 26. Recommended endpoint surface

An implementation MAY adapt routing to its host framework, but SHOULD provide equivalent operations for:

```text
GET  /capabilities
POST /launch
GET  /contexts/{contextId}
GET  /contexts/{contextId}/submissions/{submissionId}
GET  /contexts/{contextId}/submissions/{submissionId}/contributors
GET  /contexts/{contextId}/submissions/{submissionId}/files
GET  /contexts/{contextId}/submissions/{submissionId}/files/{fileId}/content
GET  /contexts/{contextId}/submissions/{submissionId}/revisions
POST /contexts/{contextId}/submissions/{submissionId}/revisions
GET  /contexts/{contextId}/submissions/{submissionId}/reviews/{assignmentId}
POST /contexts/{contextId}/submissions/{submissionId}/reviews/{assignmentId}/result
GET  /contexts/{contextId}/submissions/{submissionId}/publication
```

These paths describe protocol resources; they do not require OJS to replace its native REST API structure. The integration plugin MAY expose a dedicated adapter namespace.

## 27. Authorization

Every operation MUST be authorized at the OJS application layer.

The connector MUST NOT rely solely on possession of a submission ID, file ID, review assignment ID, or signed-in Studio session.

Service-to-service credentials identify the connector relationship; user/workflow authorization determines whether a particular resource may be accessed.

## 28. Synchronization state

Studio SHOULD retain synchronization metadata including:

```text
installationId
contextExternalId
submissionExternalId
externalPublicationId (when applicable)
lastExternalRevision
lastSynchronizedAt
source checksum(s)
```

Synchronization state is integration metadata and MUST remain separable from the canonical OMI manuscript content.

## 29. Conflict handling

The connector SHOULD return `409 Conflict` when Studio attempts to write from a stale external base revision or when the OJS state has changed in a way that prevents a safe operation.

The connector MUST NOT resolve manuscript conflicts by silently overwriting OJS content.

## 30. Idempotency

Revision uploads, review submission, and other retryable write operations SHOULD accept an idempotency key.

A network retry MUST NOT accidentally create duplicate review reports or duplicate manuscript revisions.

## 31. Audit and provenance

Integration events SHOULD be auditable. Relevant records include:

- launch issuance and acceptance;
- manuscript import;
- file retrieval;
- revision return;
- review launch;
- review submission;
- publication export.

Audit logs MUST NOT unnecessarily record manuscript contents, passwords, shared secrets, or confidential review text.

## 32. Failure isolation

An unavailable Studio MUST NOT prevent ordinary OJS administration or publication workflow outside features explicitly dependent on Studio.

An unavailable OJS installation MUST NOT corrupt or invalidate an already imported OMI manuscript.

The OJS plugin SHOULD fail closed for protected integration operations and SHOULD provide actionable error information to authorized users.

## 33. Upgrade compatibility

The integration plugin SHOULD isolate OJS-version-specific mapping code from the OMI protocol layer.

Conceptually:

```text
OMI Integration API
        |
OJS profile mapper
        |
OJS-version adapter
        |
Supported OJS services / repositories / hooks
```

This separation allows an OJS 3.5 adapter to evolve or be replaced without changing the platform-neutral `omi-integration/1` contract.

## 34. Extensions

OJS-specific values MAY be supplied under a namespaced extension object:

```json
{
  "extensions": {
    "org.pkp.ojs": {
      "stageId": 3
    }
  }
}
```

Studio MUST be able to ignore unknown OJS extensions safely. An extension MUST NOT redefine a core OMI Integration API field.

## 35. Conformance

An implementation claiming `omi-integration/1/ojs` conformance MUST:

1. conform to OMI Integration API v1;
2. expose a stable OJS installation identity;
3. map journals to contexts and OJS submissions to submissions;
4. use application-level authorization;
5. avoid direct Studio access to OJS database tables and private file paths;
6. advertise supported capabilities;
7. preserve external identifiers and provenance;
8. enforce review anonymity server-side when review integration is enabled;
9. preserve traceable revision history for write operations;
10. remain safely disconnectable from Studio.

## 36. Design invariant

The OJS connector integrates a journal workflow with OMI; it does not turn OMI into an OJS subsystem.

OJS manages the journal process around the scholarly work. Studio provides a structured environment for authoring, annotation, review, revision, and transformation. The manuscript remains portable across both systems.