---
title: Integration API v1
description: Platform-neutral protocol for connecting OMI implementations to publishing, review, repository, and scholarly workflow systems.
---

# OMI Integration API v1

**Status:** Draft  
**Protocol identifier:** `omi-integration/1`

## 1. Purpose

The OMI Integration API defines a platform-neutral contract between an Open Manuscript Initiative implementation, such as Open Manuscript Studio, and an external scholarly system.

The protocol is deliberately independent of journal-, press-, repository-, or vendor-specific database models. OJS, OMP, other publishing platforms, repositories, and future connectors map their native concepts to the common integration resources defined here.

The API does not make Studio the owner of an external editorial workflow. It provides a controlled boundary through which portable scholarly objects and workflow context can be exchanged.

## 2. Conformance language

The key words **MUST**, **MUST NOT**, **REQUIRED**, **SHOULD**, **SHOULD NOT**, and **MAY** are to be interpreted as normative requirements.

An implementation claiming `omi-integration/1` conformance MUST implement capability discovery and MUST identify every supported optional capability.

## 3. Architectural roles

The protocol distinguishes four logical roles.

### 3.1 OMI service

An OMI service hosts or processes portable scholarly objects. Open Manuscript Studio is one possible OMI service.

### 3.2 External platform

An external platform manages a scholarly workflow or related service. Examples include journal systems, monograph presses, repositories, preprint platforms, CRIS systems, and preservation services.

### 3.3 Connector

A connector maps the external platform's native data, permissions, and lifecycle to the OMI Integration API. A connector MAY be implemented as a plugin, module, service, or gateway.

### 3.4 User agent

A browser or other client MAY participate in a signed launch flow, but MUST NOT be trusted to enforce authorization or anonymity rules.

## 4. Common resource vocabulary

The API uses deliberately generic resource names.

### 4.1 Installation

An `installation` identifies one external platform deployment.

Examples:

- one OJS installation;
- one OMP installation;
- one institutional repository;
- one hosted publishing service tenant.

### 4.2 Context

A `context` is the organizational or publishing scope within an installation.

Examples:

- an OJS journal;
- an OMP press;
- a repository collection;
- a conference;
- an institutional unit.

Connectors MUST NOT assume that `context` means `journal`.

### 4.3 Submission

A `submission` is an externally managed scholarly work or workflow object connected to an OMI manuscript.

It MAY represent a journal submission, monograph submission, edited volume, proceedings contribution, preprint deposit, or another scholarly work.

### 4.4 Component

A `component` is a scoped part of a submission or publication.

Examples include a chapter, appendix, front matter, back matter, figure set, supplementary dataset, or another host-defined component.

Components MAY be nested when the external platform supports hierarchy.

### 4.5 Contributor

A `contributor` represents a person or organization associated with a submission or component. Role and scope MUST be preserved when available.

### 4.6 File

A `file` represents a protected or public binary resource managed by one of the connected systems.

### 4.7 Review assignment

A `reviewAssignment` represents the authoritative external assignment of review work to a reviewer or reviewer identity.

### 4.8 Review round

A `reviewRound` identifies a distinct review cycle for a submission or component.

### 4.9 Revision

A `revision` identifies a traceable manuscript state. A revision MUST NOT silently overwrite an immutable historical state.

### 4.10 Publication

A `publication` represents publication-facing state or metadata managed by the external publishing platform.

## 5. Resource identifiers

Every externally sourced resource MUST include an identifier that is stable within its installation.

An OMI implementation SHOULD store the tuple:

```text
installationId + resourceType + externalId
```

as the canonical external reference.

A connector SHOULD also provide an opaque globally unique `uri` when the host platform can produce one.

External identifiers MUST be treated as opaque strings even when a particular platform currently uses integers.

Example:

```json
{
  "installationId": "pkp-example",
  "resourceType": "submission",
  "externalId": "1542",
  "uri": "urn:example:ojs:submission:1542"
}
```

## 6. API base path

HTTP implementations SHOULD expose version 1 resources below:

```text
/api/integrations/v1/
```

A deployment MAY mount the API below another application path, but resource semantics MUST remain unchanged.

All production endpoints MUST use HTTPS.

## 7. Capability discovery

### 7.1 Endpoint

```http
GET /api/integrations/v1/capabilities
```

Capability discovery MUST be available before optional operations are attempted.

Example response:

```json
{
  "protocol": "omi-integration/1",
  "implementation": {
    "name": "Open Manuscript Studio",
    "version": "0.1.0"
  },
  "capabilities": [
    "launch",
    "metadata.read",
    "files.read",
    "manuscript.read",
    "manuscript.write",
    "review.read",
    "review.write",
    "revision.write",
    "publication.export"
  ]
}
```

Clients MUST NOT infer support for a capability that is not advertised.

## 8. Initial capability registry

Version 1 defines the following capability names:

| Capability | Meaning |
| --- | --- |
| `launch` | Signed user launch into an OMI workspace |
| `metadata.read` | Read external submission metadata |
| `metadata.write` | Write permitted metadata to the external system |
| `contributors.read` | Read contributors and scoped roles |
| `contributors.write` | Write permitted contributor changes |
| `files.read` | Enumerate and retrieve authorized files |
| `files.write` | Upload files to the external workflow |
| `manuscript.read` | Retrieve an OMI manuscript representation |
| `manuscript.write` | Submit an OMI manuscript representation |
| `review.read` | Retrieve authorized review context |
| `review.write` | Return structured review results |
| `revision.read` | Retrieve revision history or revision metadata |
| `revision.write` | Create a new external revision |
| `publication.read` | Read publication-facing metadata/state |
| `publication.export` | Export publication derivatives |

Future specifications MAY register additional capability names. Unknown capability names MUST be ignored safely.

## 9. Signed launch

A launch operation permits an authorized user in an external platform to enter the corresponding OMI workspace without exposing the external platform's database or private session.

A launch payload SHOULD contain:

```json
{
  "protocol": "omi-integration/1",
  "installationId": "pkp-example",
  "context": {
    "externalId": "1",
    "type": "journal"
  },
  "submission": {
    "externalId": "1542"
  },
  "actor": {
    "externalId": "27"
  },
  "scope": ["manuscript.read", "manuscript.write"],
  "issuedAt": "2026-08-07T18:00:00Z",
  "expiresAt": "2026-08-07T18:05:00Z",
  "nonce": "b4b65f2b-0c63-4c21-8b82-876728f0bd31"
}
```

The payload MUST be authenticated. Implementations MAY use HMAC for mutually configured installations and SHOULD support asymmetric signatures for integrations across independent trust domains.

The receiving service MUST validate signature, expiration, installation identity, nonce or equivalent replay protection, and requested scope before creating an integration session.

## 10. Context representation

Example journal context:

```json
{
  "externalId": "1",
  "type": "journal",
  "name": {"en": "Example Journal"},
  "url": "https://journal.example.org/"
}
```

Example press context:

```json
{
  "externalId": "3",
  "type": "press",
  "name": {"en": "Example University Press"},
  "url": "https://press.example.org/"
}
```

The `type` field is descriptive and extensible. Clients MUST NOT reject an otherwise valid context solely because its type is unknown.

## 11. Submission metadata

A normalized submission representation SHOULD support localized values.

```json
{
  "externalId": "1542",
  "type": "article",
  "status": "review",
  "title": {
    "en": "Example manuscript",
    "hu": "Példa kézirat"
  },
  "abstract": {
    "en": "Example abstract"
  },
  "keywords": {
    "en": ["history", "publishing"]
  },
  "primaryLocale": "en",
  "identifiers": [],
  "updatedAt": "2026-08-07T17:30:00Z"
}
```

Host-specific status values MAY be supplied, but a connector SHOULD also map them to a documented normalized workflow state when possible.

## 12. Contributors

Contributor representations SHOULD preserve identity, role, order, scope and identifiers.

```json
{
  "externalId": "author-12",
  "name": {
    "given": "Ada",
    "family": "Example"
  },
  "roles": ["author"],
  "scope": {
    "type": "submission",
    "externalId": "1542"
  },
  "identifiers": [
    {"scheme": "orcid", "value": "0000-0000-0000-0000"}
  ]
}
```

For edited volumes, a contributor MAY be scoped to one or more components rather than the complete submission.

## 13. Components

Components enable monograph, edited-volume and other compound-work integrations.

```json
{
  "externalId": "chapter-7",
  "type": "chapter",
  "parentExternalId": null,
  "title": {"en": "Chapter Seven"},
  "sequence": 7
}
```

An OJS article connector MAY expose no components. An OMP connector MAY expose chapters, front matter, back matter, appendices, or other publication components.

## 14. File exchange

File enumeration SHOULD return metadata without requiring immediate binary transfer.

```json
{
  "externalId": "file-889",
  "name": "manuscript.docx",
  "mediaType": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "size": 482931,
  "stage": "submission",
  "checksum": {
    "algorithm": "sha256",
    "value": "..."
  }
}
```

Binary download MUST require authorization independent of knowledge of the file identifier. Private filesystem paths MUST NOT be exposed.

Uploaded files SHOULD create a new traceable file or revision according to host-platform semantics.

## 15. Manuscript exchange

When `manuscript.read` or `manuscript.write` is supported, the preferred canonical exchange object is an OMI package conforming to the applicable OMI File Format and Container Architecture specifications.

Connectors MAY additionally advertise derivative formats such as JATS, HTML or DOCX.

A derivative MUST NOT silently replace the canonical OMI scholarly object unless the receiving implementation explicitly defines that behavior.

## 16. Revision model

Revision operations MUST preserve provenance.

A revision record SHOULD include:

```json
{
  "externalId": "revision-4",
  "sequence": 4,
  "createdAt": "2026-08-07T18:20:00Z",
  "createdBy": {"externalId": "27"},
  "source": "omi",
  "parentExternalId": "revision-3"
}
```

Where the external platform has no first-class revision resource, the connector MUST document how OMI revisions map to its file or workflow model.

## 17. Peer review

### 17.1 Authority

The external workflow system remains authoritative for reviewer assignment, deadline, round state, recommendation vocabulary and editorial decision unless a profile explicitly states otherwise.

### 17.2 Review assignment representation

```json
{
  "externalId": "review-991",
  "roundExternalId": "round-2",
  "target": {
    "type": "submission",
    "externalId": "1542"
  },
  "reviewMode": "double-anonymous",
  "dueAt": "2026-09-01T23:59:59Z",
  "permissions": ["manuscript.read", "review.write"]
}
```

The target MAY instead reference a component, enabling chapter-level review in monograph workflows.

### 17.3 Anonymity

Identity filtering MUST occur on the server before a review payload is returned. A client-side user interface MUST NOT be relied upon to hide identities that were already transmitted.

### 17.4 Structured review result

```json
{
  "assignmentExternalId": "review-991",
  "recommendation": "revisions-required",
  "summary": "The argument is promising but requires clarification.",
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

The exact recommendation vocabulary MAY be host-defined. Connectors SHOULD publish the allowed values as part of review context.

## 18. Publication exchange

Publication resources MAY expose publication-facing metadata and derivative requirements. OJS profiles may map publication state to articles and issues; OMP profiles may map it to monographs, series, chapters, publication formats and catalog records.

OMI MUST NOT assume that publication means issue assignment.

## 19. OJS profile mapping

An OJS connector SHOULD map:

| OMI resource | OJS concept |
| --- | --- |
| installation | OJS installation |
| context | journal |
| submission | submission/article workflow object |
| component | optional article component |
| contributor | author/contributor |
| file | submission file |
| reviewAssignment | review assignment |
| reviewRound | review round |
| revision | traceable submission/revision state |
| publication | OJS publication/article publication state |

The OJS connector MUST use supported OJS application services, repositories and hooks rather than direct cross-database access from Studio.

## 20. OMP profile mapping

An OMP connector SHOULD map:

| OMI resource | OMP concept |
| --- | --- |
| installation | OMP installation |
| context | press |
| submission | monograph/submission workflow object |
| component | chapter, front matter, back matter, appendix, or other component |
| contributor | author, editor, translator, chapter author, or other contributor |
| file | submission/production file |
| reviewAssignment | review assignment |
| reviewRound | review round |
| revision | traceable manuscript/revision state |
| publication | monograph publication/catalog-facing state |

The OMP connector MUST preserve contributor scope where available and MUST NOT flatten chapter-level authorship into whole-book authorship.

## 21. Authorization scopes

Scopes SHOULD be narrowly granted. Version 1 reserves capability-aligned scopes including:

```text
metadata.read
metadata.write
contributors.read
contributors.write
files.read
files.write
manuscript.read
manuscript.write
review.read
review.write
revision.read
revision.write
publication.read
publication.export
```

Possession of a valid integration credential MUST NOT imply all scopes.

## 22. HTTP semantics

JSON endpoints MUST use UTF-8 JSON and SHOULD use the media type:

```text
application/json
```

Future OMI-specific media types MAY be registered for canonical packages or structured resources.

Implementations SHOULD use conventional HTTP status semantics:

- `200` successful read or update;
- `201` new resource created;
- `204` successful operation with no response body;
- `400` malformed request;
- `401` missing or invalid authentication;
- `403` authenticated but not authorized;
- `404` resource not found or intentionally undisclosed;
- `409` synchronization or revision conflict;
- `410` external resource intentionally removed;
- `422` semantically invalid payload;
- `429` rate limit exceeded.

## 23. Error representation

Errors SHOULD use a stable machine-readable code.

```json
{
  "error": {
    "code": "revision_conflict",
    "message": "The external manuscript has changed since the requested base revision.",
    "details": {
      "expectedRevision": "revision-3",
      "currentRevision": "revision-4"
    }
  }
}
```

Clients MUST NOT depend on human-readable error text for control flow.

## 24. Concurrency and synchronization

Write operations SHOULD use revision identifiers, entity tags, timestamps, or another explicit precondition mechanism to prevent silent lost updates.

When both systems have changed the same authoritative field or manuscript state, the connector SHOULD return a conflict rather than selecting a winner silently.

## 25. Idempotency

Creation operations that may be retried SHOULD support an idempotency key. A repeated request with the same key and equivalent payload SHOULD NOT create duplicate revisions, files, reviews, or submissions.

## 26. Security requirements

Production integrations MUST use HTTPS.

Secrets MUST NOT be placed in browser-visible URLs when a safer exchange is available. Shared secrets MUST be rotatable. Signature comparison MUST use timing-safe operations where applicable.

Implementations SHOULD log security-relevant integration events without logging credentials, raw secrets, private review content unnecessarily, or manuscript contents beyond operational need.

## 27. Privacy and review confidentiality

Connectors MUST apply data minimization. Only data necessary for the requested operation and authorized scope SHOULD be transmitted.

Double-anonymous and other confidential review modes MUST filter identities, file metadata, document metadata, and other identifying information at the server boundary where required by policy.

## 28. Provenance

Imported data SHOULD retain provenance identifying the external installation, resource identifier, synchronization time, and source revision when available.

Generated derivatives SHOULD record the OMI source revision from which they were produced.

## 29. Graceful disconnection

An OMI manuscript MUST remain interpretable and exportable when an external integration is unavailable or removed.

External workflow links MUST therefore be represented as explicit references and provenance, not as undocumented dependencies on remote database tables or proprietary runtime state.

Removing an integration MUST NOT invalidate the canonical OMI document.

## 30. Extensibility

Platform-specific extensions MAY be included under namespaced extension objects. Core clients MUST be able to ignore unknown extensions safely.

Example:

```json
{
  "extensions": {
    "org.pkp.ojs": {
      "stageId": 3
    }
  }
}
```

An extension MUST NOT redefine the semantics of a core field.

## 31. Version negotiation

The protocol identifier for this specification is:

```text
omi-integration/1
```

Backward-incompatible changes require a new major protocol identifier. Additive capabilities and optional fields MAY be introduced without changing the major identifier when existing clients can ignore them safely.

Connectors SHOULD reject a protocol major version they do not understand rather than attempting an unsafe partial interpretation.

## 32. Conformance profiles

A future OMI registry MAY publish named profiles such as:

```text
omi-integration/1/core
omi-integration/1/ojs
omi-integration/1/omp
omi-integration/1/repository
omi-integration/1/review
```

A profile defines required capabilities and mappings for a class of external system while retaining the common resource vocabulary of this specification.

## 33. Design invariant

The Integration API MUST preserve the architectural separation between scholarly object and workflow platform.

The external system may orchestrate submission, review, production, publication, deposit, or preservation. OMI may provide authoring, structured review, annotation, transformation and portable scholarly objects. Neither side is required to adopt the other's internal persistence model.

The resulting integration should remain replaceable, inspectable and reversible.

> Workflow systems manage processes around the manuscript. The manuscript itself remains portable.