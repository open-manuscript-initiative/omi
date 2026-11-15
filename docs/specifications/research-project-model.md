---
id: research-project-model
title: OMI-SPEC-360 — Research Project Model
sidebar_label: OMI-SPEC-360 — Research Project Model
description: Draft model for portable, provider-neutral research projects and their versioned module resources.
keywords:
  - Open Manuscript Initiative
  - OMI-SPEC-360
  - research project
  - project resource
  - research module
---

# OMI-SPEC-360 — Research Project Model

## Document metadata

| Field | Value |
|---|---|
| Identifier | `OMI-SPEC-360` |
| Title | Research Project Model |
| Version | `0.1.0` |
| Status | Draft |
| Document type | Normative draft; examples and implementation notes informative |
| Normative language | English |
| Editors | OMI maintainers |
| Last updated | 2026-11-14 |
| Replaces | None |
| Replaced by | None |
| Depends on | OMI-SPEC-120, OMI-SPEC-140, OMI-SPEC-160, OMI-SPEC-180, OMI-SPEC-320, OMI-SPEC-330 |
| Used by | None; proposed for future Studio and module implementations |
| Schemas | [Draft envelope schema](/schemas/research-project-0.1.schema.json) |
| Profiles | Research Project Core (proposed) |
| Implementation status | Proposed canonical inline-JSON adapter and project-scoped local cache; direct cloud transfer remains unimplemented |
| Issue tracker | OMI specification issues |

## 1. Abstract

OMI-SPEC-360 defines an implementation-independent model for research projects
that own versioned research-module data and may reference one or more manuscripts,
datasets, sources, and publication outputs. A project is a portable scholarly
object whose lifetime is independent of any one editor, account, server, or
cloud-storage provider.

The specification separates project semantics from storage transport. A project
package describes its identity, resources, schema versions, provenance, and
integrity metadata. A user or institution chooses where its bytes are stored.
Provider credentials, device-specific paths, and service-specific object IDs are
not project content.

This Draft does not define a database service, a mandatory central server, a
provider OAuth protocol, a collaboration protocol, a publication website, or a
particular research-module schema. Those are separate implementations or
specifications.

## 2. Status of this document

This is a proposed **Draft 0.1.0**. Its data model and requirements may change
incompatibly. Implementations claiming support MUST identify the exact version
or immutable repository revision. Draft publication does not establish Stable
status, complete conformance, or production readiness.

## 3. Conformance

This Draft identifies the following implementation roles:

- **Project producer** creates or updates a project package.
- **Project consumer** opens, displays, searches, or edits a project.
- **Resource producer/consumer** writes or interprets a module-specific resource.
- **Storage adapter** reads and writes package bytes at a user-selected location.
- **Publication projector** produces a deliberate audience-specific output from
  selected project resources.

Roles MAY be combined. A conformance claim MUST identify the exact specification
version, supported resource types, import/export and migration behavior, package
limits, integrity checks, and known loss conditions. Studio feature parity alone
does not establish conformance.

## 4. Scope

This specification defines project identity, portable project metadata,
versioned project resources, resource ownership, provenance, package integrity,
processing behavior, migration boundaries, and publication projection
principles.

It does not define manuscript semantics (OMI-SPEC-100/320), identity or access
grants (OMI-SPEC-150/190), a cloud provider's API, a database schema, or module
domain semantics such as genealogy, laboratory experiments, or corpus
annotations. A project can reference manuscripts without absorbing or rewriting
their document state.

## 5. Terminology

| Term | Meaning |
|---|---|
| **Research project** | Portable root object that groups project metadata and versioned resources for a scholarly activity. |
| **Project resource** | Versioned byte or structured-data member owned by a project, such as a module dataset or source asset. |
| **Resource type** | Stable namespaced identifier declaring the semantic model used by a resource. |
| **Resource version** | Version of the resource's own schema, independent from the project package version. |
| **Storage location** | External location selected to hold project-package bytes. It is not a project identity or semantic authority. |
| **Location binding** | Local or account-scoped mapping from a project ID to a provider/object location; it may be absent from portable exchange. |
| **Publication projection** | Explicit subset and transformation of project data prepared for a target audience or publication. |

## 6. Design principles

1. **Project-owned data:** modules contribute data to a research project, not to
   a Studio user account or an application-global workspace.
2. **Portability:** the project and its resources remain interpretable when
   opened by another conforming application or stored with another provider.
3. **Provider neutrality:** storage providers store and return project bytes;
   they do not define project identifiers, module schemas, or semantic updates.
4. **Explicit authority:** a resource's owning project and schema version are
   identifiable; an application cache is never the sole durable authority when
   a durable location has been configured.
5. **Integrity and conflict visibility:** consumers verify package checksums and
   do not silently replace a newer remote revision with a stale write.
6. **No implicit publication:** private project resources are not public merely
   because a provider can create a public link or a web projection exists.
7. **No implicit manuscript mutation:** project resources are not copied into a
   manuscript unless a separate reviewed, typed contribution operation is
   explicitly confirmed.

## 7. Model overview

A research project has a stable project ID, descriptive metadata, timestamps, a
project-format version, and an ordered manifest of resources. Each resource has
a stable resource ID, a namespaced resource type, an independent schema
identifier/version, a media type, a relative package path or inline JSON value,
and integrity metadata. Resources MAY include module data, source files,
derived indexes, or publication snapshots.

The package is the portable semantic unit. A selected cloud service, removable
drive, local folder, or institutional repository is a storage location for that
package. A Studio-specific location binding MAY remember how to find the
package, but MUST NOT be required to interpret it.

## 8. Data model

### 8.1 Project envelope

A project envelope MUST identify:

- `format`: the fixed value `omi-research-project`;
- `version`: the project envelope version;
- `projectId`: a stable, globally unique identifier;
- `title`: a human-readable project title;
- `createdAt` and `updatedAt`: valid timestamps;
- `resources`: a nonempty collection of project-resource descriptors.

The envelope MAY include description, language, keywords, contributors,
references to OMI manuscripts, project-level provenance, declared profiles,
version history, and namespaced extensions.

### 8.2 Resource descriptor

Each resource descriptor MUST identify a unique `resourceId`, a namespaced
`resourceType`, a resource `schemaVersion`, a media type, and exactly one of an
`inline` JSON value or a safe relative `path`. A path MUST NOT be absolute,
contain a parent-directory segment, or resolve outside the package root.

Resource IDs MUST be unique within the project. The Draft envelope schema bounds a single package to 1,000 resource descriptors; consumers MUST publish any narrower supported subset.

Each external package member MUST declare its byte size and SHA-256 digest.
Importers MUST verify the digest and size before exposing the resource as
validated project data. Unknown resource types MUST be preserved as opaque data
or reported as unsupported; they MUST NOT be deleted or reinterpreted during an
unrelated edit.

### 8.3 Module resources

A module resource is identified by a stable namespaced module ID and its own
schema version. The module name shown in a user interface is descriptive and
MUST NOT be used as the stable identifier. One project MAY contain resources
from multiple modules and multiple instances of one resource type.

Module resource versions are independent of the project envelope, OMI manuscript
format version, container version, and application release version. A consumer
that cannot interpret a resource MUST preserve it losslessly unless the user
explicitly removes it.

## 9. Processing model

### 9.1 Opening and saving

A consumer MUST validate the project envelope before presenting its resources as
editable. A successful save to a configured durable location MUST be confirmed
by the storage adapter, including the written byte size and digest or equivalent
provider revision evidence. Local cache writes MUST NOT be reported as remote
provider saves.

An application MAY cache resources for responsiveness or offline recovery. The
cache MUST be scoped to the project ID and MUST be rebuildable from the portable
project package. A cache MUST NOT silently become a competing project authority.

### 9.2 Storage adapters and data transfer

Storage adapters operate on package bytes and opaque location bindings. They
MUST NOT place project payloads in a mandatory central OMI service. An
implementation that claims direct-transfer behavior MUST send project payload
bytes between the client and selected storage provider without relaying them
through the application server. A control service MAY authorize access or
negotiate a short-lived transfer operation without receiving the payload.

When a storage provider or platform cannot support the declared direct transfer
path, the application MUST disclose the limitation and preserve the existing
project. It MUST NOT silently substitute a server-side payload relay.

### 9.3 Conflicting updates

A writer SHOULD bind an update to the last observed provider revision, ETag,
version token, or content digest. If the provider reports that the stored object
changed since it was read, the writer MUST surface a conflict and preserve both
the local and remote candidates. Last-write-wins replacement MUST NOT be the
implicit conflict policy.

## 10. Validation and error handling

Validators SHOULD distinguish malformed envelopes, unsupported project
versions, unknown resource types, unsafe paths, invalid resource schemas,
checksum mismatches, oversized resources, and stale writes. Validation failure
MUST NOT cause an importer to silently discard the original project or an
unknown resource.

Implementations SHOULD publish finite configurable limits for total package
size, member size, resource count, nesting depth, and compression ratio. Archive
extractors MUST reject traversal, duplicate or ambiguous paths, symbolic links,
and resource declarations that escape the package manifest.

## 11. Extensibility

Project and resource extensions MUST use stable namespace identifiers. A
consumer MUST preserve unknown extensions during an unrelated edit, consistent
with the applicable file-format and container specifications. Extensions MUST
NOT redefine core project identity, resource ownership, integrity, or version
fields.

## 12. Versioning and compatibility

Project-envelope versioning, resource-schema versioning, container versioning,
manuscript format versioning, and application releases are independent. A
producer MUST emit the project and each resource version it actually writes.
An importer MUST reject an unsupported major version for editing while retaining
the original bytes for recovery or read-only inspection.

Migration MUST be explicit, versioned, and preserve the source package until the
converted project has been written and integrity-checked. A migration MUST
report resource-level conversions, omissions, and warnings.

## 13. Interoperability

Implementations SHOULD provide an editable project package independent of
provider APIs. A project MAY reference standalone OMI manuscripts and other
portable formats without changing their contents. A user MAY copy the package
to another supported provider or local device without changing its project ID or
resource IDs.

## 14. Security, privacy, and integrity considerations

Provider OAuth tokens, passwords, API keys, device paths, and temporary transfer
URLs MUST NOT be stored in portable project resources. Access to a project
resource MUST follow the authority of its selected storage location. Public
publication MUST require an explicit projection and review of included fields.

Raw imports, private notes, participant data, credentials, and unpublished
manuscript text SHOULD be excluded from public projections by default. A public
projection MUST be an independently materialized output; it MUST NOT expose the
private project package or a credential-bearing provider URL.

## 15. Accessibility considerations

User interfaces SHOULD communicate project identity, current storage location,
save status, offline state, conflict state, and publication visibility through
accessible text and non-color cues. Searchable project views SHOULD provide
keyboard operation and semantic labels.

## 16. Internationalisation considerations

Stable project and resource identifiers MUST be language-neutral. Human-readable
metadata MAY carry language tags. Implementations SHOULD preserve original
language and text rather than replacing it with a translated label.

## 17. Examples

### 17.1 Project with a family graph resource

```json
{
  "format": "omi-research-project",
  "version": "0.1.0",
  "projectId": "urn:uuid:4d4e9c3b-2fd9-4f38-9f1d-23fe8f1268c1",
  "title": "Patronage in Sárospatak",
  "createdAt": "2026-11-14T00:00:00Z",
  "updatedAt": "2026-11-14T00:00:00Z",
  "resources": [
    {
      "resourceId": "urn:uuid:db7e0cc1-dbd4-48e2-97c4-2193877fcb85",
      "resourceType": "org.omi.genealogy",
      "schemaVersion": "omi-research-graph/1",
      "mediaType": "application/json",
      "path": "resources/org.omi.genealogy/graph.json",
      "sizeBytes": 18342,
      "sha256": "<64 lowercase hexadecimal characters>"
    }
  ]
}
```

The digest placeholder is explanatory; a conforming package MUST contain the
actual digest.

## 18. Normative references

- OMI-SPEC-120 Scholarly Object Model.
- OMI-SPEC-140 Metadata Model.
- OMI-SPEC-160 Versioning and Change Model.
- OMI-SPEC-180 Validation Model.
- OMI-SPEC-320 File Format.
- OMI-SPEC-330 Container Architecture.

## 19. Informative references

- Studio architecture decision ADR-036, project-owned research data and direct
  cloud storage.
- Studio research-module implementation status and provider compatibility notes.

## 20. Implementation status

The coordinated Studio repair writes the canonical `omi-research-project` /
`0.1.0` envelope and supports one inline `org.omi.genealogy` resource with
`schemaVersion: "omi-research-graph/1"`, plus opaque inline resources retained
without interpretation. It preserves unknown envelope and descriptor members,
resource IDs, project identity and `createdAt` across supported graph edits.
The independent [golden example](/examples/research-project/0.1.json) is shared
with Studio and checked against the canonical schema. Validators are generated
at build time and the exact canonical schema/fixture bytes are commit/checksum-pinned.

The supported single-JSON consumer rejects unresolved `path` members, ambiguous
or unsupported graph resources and unsupported envelope versions before changing
the active project. The original selected file remains available for recovery.
Limits are 64 MiB UTF-8 per file/output, 1,000 descriptors, JSON depth 64 and
1,000,000 values, in addition to graph node/edge/import quotas. This subset is
not full container, storage-adapter or publication conformance.

**Open as project** preserves the imported identity and all supported/opaque
inline resources. **Add to this project** copies only graph records into the
destination identity and leaves other source resources in the source file.
The distinction is previewed and confirmed. Existing project caches remain
separately keyed and opening/editing can be undone. The original legacy
user/workspace record is never overwritten during reading or first cache migration.
A local binding selects a project-ID-scoped cache; a serialized successful package
write precedes changing that binding. Cache status is local only.

Bare graph JSON and the released prototype `org.omi.research-project`, numeric
version `1`, are migration inputs, never canonical output. The prototype's
`id/schema/data` graph and `projectId/title` are converted at explicit acceptance;
exact prototype input is retained in the namespaced
`https://openmanuscript.org/extensions/research-project-migration/1` extension.
The original file is not overwritten. Oversized/unsupported conversions fail
without replacing the active project. Do not interpret the prototype as a second
version of this Draft's envelope.

Files are transferred manually using browser downloads/uploads or native
OS-provider locations. Direct cloud OAuth/transfer, ETag conflict handling,
provider-confirmed integrity receipts and searchable public publication remain
unimplemented. A successful local cache write or download is not evidence of a
provider save. The accepted ADR-036 cloud authority applies only after a durable
location and the required adapter evidence have been configured.

## 21. Unresolved issues

- Archive/container-member profile and independent cross-implementation acceptance beyond the inline golden.
- Whether project history is inline, append-only, or represented by provider
  revisions.
- Portable representation and identity for project contributors and linked
  manuscripts.
- Direct transfer capability matrix for OneDrive, Dropbox, Nextcloud/WebDAV,
  and native synchronized folders.
- Merge operations for concurrent graph edits.
- Static publication manifest, search index, access controls, and update
  workflow.
- Size and security limits based on representative research projects.

## 22. Change history

| Version | Date | Change |
|---|---|---|
| 0.1.0 | 2026-11-14 | Initial Draft covering portable project identity, versioned module resources, provider-neutral storage, direct payload transfer, conflict visibility, and explicit publication projection. |

## 23. Acknowledgements

This Draft was initiated from the Open Manuscript Initiative's research-module
and portable-project architecture work.
