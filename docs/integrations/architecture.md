---
title: Integration Architecture
description: Architectural principles and integration patterns for connecting Open Manuscript Studio to publishing and scholarly systems.
---

# Integration Architecture

Open Manuscript Initiative (OMI) is designed to remain independent of any single publishing platform. Open Manuscript Studio SHOULD therefore run as a separate application with its own data store, while publishing and scholarly systems connect to it through small integration adapters.

> The manuscript is a portable scholarly object, not an internal record of a particular publishing system.

## Recommended architecture

```text
Publishing platform
Own application and database
        |
        | Integration adapter / plugin
        | HTTPS + versioned API + signed requests
        v
Open Manuscript Studio
Own application and PostgreSQL database
```

The integration layer MUST use application services and APIs rather than direct cross-database access. Studio MUST NOT read or write the database tables of the publishing platform, and the publishing platform MUST NOT depend on Studio's internal persistence schema.

This separation permits independent upgrades, isolates failures and security boundaries, allows the OMI scholarly object model to evolve independently, and makes the same Studio implementation usable with multiple publishing platforms.

## System-of-record boundaries

Each connected system remains authoritative for the data it owns.

| Responsibility | Authoritative system |
| --- | --- |
| Submission and editorial workflow | Publishing platform |
| Editorial stage and decisions | Publishing platform |
| Reviewer invitation and assignment | Publishing platform |
| Review deadlines and workflow state | Publishing platform |
| Publication, issue, or catalog management | Publishing platform |
| Manuscript structure and content model | OMI / Studio |
| Stable anchors | OMI / Studio |
| Structured annotations | OMI / Studio |
| Collaborative editing | OMI / Studio |
| Manuscript revisions and structural history | OMI / Studio |
| Structured review annotations | OMI / Studio |

Cross-system identifiers connect these records without merging their persistence models. An OMI object MAY retain an external installation identifier, context identifier, journal or press identifier, submission identifier, review-round identifier, publication identifier, and other stable external references.

## Integration levels

OMI defines integration as a progressive capability model. An implementation MAY support only the levels it requires and add further capabilities later.

### Level 1 — Launch integration

The external platform provides an **Open in Studio** action. A short-lived signed launch request identifies the installation, context, object and user. Studio verifies the request and opens or creates the corresponding workspace.

### Level 2 — Metadata integration

The adapter exposes manuscript or submission metadata, including localized titles, abstracts or descriptions, keywords, contributors, identifiers and publication context. Synchronization MUST define which system is authoritative for each synchronized field.

### Level 3 — File integration

Studio retrieves permitted manuscript files through authenticated application endpoints. Studio MUST NOT access a publishing platform's private files directory directly. Revisions returned from Studio SHOULD normally create traceable new versions instead of silently replacing historical files.

### Level 4 — Manuscript synchronization

A richer connector maps an OMI manuscript package to the external platform. Exchange formats MAY include the native OMI package, JATS XML, HTML, DOCX-derived content and associated assets. Synchronization SHOULD be revision-oriented.

### Level 5 — Peer review integration

The publishing platform remains the system of record for reviewer assignments, review rounds, deadlines, recommendations and editorial decisions. Studio provides the scholarly review workspace.

A Studio review workspace MAY support single-blind, double-blind and open review; inline comments attached to stable OMI anchors; author-visible and editor-only comments; structured review forms; suggested changes; reviewer recommendations; author responses; resolution state; and multiple review rounds.

Reviewer and author anonymity MUST be enforced server-side according to the policy received from the authoritative workflow system.

```text
Manuscript v1
    |
    v
Review round 1 in Studio
    |
    v
Author revision v2
    |
    v
Resolved / unresolved anchored comments
    |
    v
Review round 2
    |
    v
Editorial decision in publishing platform
```

### Level 6 — Publication integration

After acceptance, Studio MAY generate publication-ready derivatives such as OMI packages, JATS, HTML or other supported formats. The publishing platform normally remains authoritative for publication state, scheduling, issue or catalog assignment and public delivery.

## Deployment patterns

### Same host, separate paths

```text
https://example.org/ojs/
https://example.org/omp/
https://example.org/omi/
```

This pattern is convenient for smaller self-hosted installations. The applications still use separate databases and communicate through the integration API.

### Separate subdomains

```text
https://journal.example.org/
https://press.example.org/
https://studio.example.org/
```

Separate virtual hosts provide cleaner routing, security boundaries and runtime isolation. This is the recommended pattern for many production installations.

### Separate infrastructure

The publishing system and Studio MAY run on different servers or be operated by different organizations. The same versioned protocol applies over HTTPS. This also permits a hosted Studio service to integrate with self-hosted publishing platforms.

## PKP integration family

OJS and OMP share important PKP platform concepts, but they represent different scholarly publishing workflows. OMI therefore treats them as separate integration profiles built on a common PKP-oriented connector foundation where practical.

A shared implementation MAY reuse authentication, signed launch, metadata mapping, file-transfer and capability-negotiation components. Journal-specific and monograph-specific workflow semantics MUST remain explicit rather than being hidden behind an inaccurate common model.

## OJS integration profile

For Open Journal Systems (OJS), the recommended implementation is a small OJS generic plugin paired with the Studio OJS Connector.

```text
OJS
  |
  | OMI / Studio Integration Plugin
  | - launch
  | - article metadata
  | - contributors
  | - submission files
  | - review assignments
  | - revisions
  v
Versioned OMI Integration API
  |
  v
Open Manuscript Studio
```

The OJS plugin SHOULD use supported OJS hooks, repositories and services. It MUST NOT patch OJS core files or provide Studio with direct database access.

OJS remains authoritative for journal submission workflow, reviewer assignments, review rounds, editorial decisions, issues and publication state. Studio remains authoritative for its manuscript object model, anchors, annotations, collaborative editing and structured review workspace.

## OMP integration profile

Open Monograph Press (OMP) is a first-class OMI integration target for scholarly books, edited volumes, critical editions, chapters and other monograph-oriented publications.

The recommended architecture mirrors the OJS integration pattern while preserving OMP's press and monograph semantics:

```text
OMP
  |
  | OMI / Studio Integration Plugin
  | - launch
  | - press and submission metadata
  | - contributors
  | - chapters / publication components
  | - submission files
  | - review assignments
  | - revisions
  | - publication / catalog metadata
  v
Versioned OMI Integration API
  |
  v
Open Manuscript Studio
```

OMP SHOULD remain authoritative for press workflow, submission state, reviewer assignments, editorial decisions, publication state, series and catalog-facing information. Studio SHOULD remain authoritative for the structured scholarly manuscript, anchors, annotations, collaborative editing and structured review work performed inside Studio.

### Monograph structure

An OMP integration SHOULD preserve structures that are more complex than a journal article. Depending on the publication, an OMI workspace MAY represent:

- a complete monograph;
- an edited volume;
- independently authored chapters;
- front matter and back matter;
- bibliographies and appendices;
- figures, tables and supplementary assets;
- critical-edition components;
- multilingual versions or translations.

The connector SHOULD preserve OMP identifiers for the submission and relevant publication components so that Studio objects can be synchronized without losing their relationship to the press workflow.

### Edited volumes and chapter authorship

OMP integration MUST NOT assume that every contributor is an author of the complete book. Contributor roles and scope SHOULD be preserved. A contributor MAY be associated with the entire work, one or more chapters, translation, editing, introduction, commentary or another scholarly contribution.

This maps naturally to the OMI Identity and Contributor Model and permits chapter-level collaboration without flattening an edited volume into a single author list.

### Monograph peer review

OMP peer review can use the same OMI review infrastructure as journal review while targeting a complete book, selected chapters, or other stable scholarly objects. Review assignments and editorial decisions remain controlled by OMP, while Studio MAY provide anchored annotations, structured reports, author responses and revision tracking.

### Production and publication

After acceptance, Studio MAY return structured OMI content or generated derivatives for OMP production. Potential outputs include JATS-compatible XML where appropriate, HTML, DOCX-derived production files and other press-specific formats.

OMP remains authoritative for publication scheduling, series assignment, catalog metadata, publication formats and public distribution unless a deployment explicitly delegates a responsibility.

### Shared OJS/OMP plugin strategy

Because OJS and OMP are both PKP applications, implementations SHOULD reuse a common integration protocol and shared library code where their APIs and lifecycle hooks permit it. However, the deployable adapters MAY remain separate plugins so that each plugin can express the correct host-platform terminology, permissions and workflow behavior.

Conceptually:

```text
                 OMI Integration API v1
                          |
              +-----------+-----------+
              |                       |
        OJS Connector             OMP Connector
              |                       |
        OJS integration           OMP integration
            plugin                   plugin
```

This approach avoids making the OMI protocol dependent on either journals or monographs while still taking advantage of the common PKP technology stack.

## Other integration profiles

The same architecture can support additional adapters without changing the OMI core model. Potential targets include other journal management systems, conference and proceedings platforms, preprint servers, institutional and subject repositories, research information and CRIS systems, repository deposit workflows, preservation services, identifier and metadata registries, and standalone authoring installations with no publishing platform.

An adapter needs to map the external platform's concepts and permissions to the versioned OMI integration contract; it does not need to reproduce either the OJS or OMP connector internally.

## Integration patterns beyond publishing systems

### Repository deposit

Studio MAY package an accepted or finalized manuscript and deposit it into an institutional or subject repository. The repository remains authoritative for its deposit record, access policy and preservation state.

### Metadata and identifier services

Connectors MAY resolve or synchronize DOI, ORCID, ROR, bibliographic and other scholarly identifiers. Such services enrich OMI objects but do not become owners of the manuscript itself.

### External reference registries

A manuscript MAY connect to shared bibliographic registries or citation services. The OMI citation and bibliographic models SHOULD preserve identifiers and provenance so that records can be refreshed without losing manuscript-specific citation intent.

### Conversion and publishing services

External services MAY consume an OMI package and return JATS, HTML, PDF, EPUB or other derivatives. Generated representations SHOULD remain distinguishable from the canonical scholarly object.

### Standalone Studio

No external workflow platform is required. Studio MAY operate as an independent authoring, collaboration and review environment and export portable OMI packages for later ingestion elsewhere.

## Authentication and trust

Integration endpoints MUST use HTTPS in production and authenticated requests. A tightly coupled self-hosted installation MAY use HMAC-signed short-lived launch tokens. Integrations between independent organizations SHOULD support stronger service credentials or asymmetric signing where appropriate.

The protocol SHOULD provide expiration, replay protection, installation identity, explicit authorization scopes, auditable external object identifiers, key rotation and least-privilege access. An external user identifier MUST NOT automatically grant broader Studio permissions.

## Versioned Integration API

Integration endpoints SHOULD be versioned from the beginning, for example:

```text
/api/integrations/v1/...
```

Backward-incompatible changes require a new protocol version. A future capability-discovery endpoint SHOULD allow an adapter to determine whether a Studio installation supports features such as launch, metadata synchronization, file transfer, manuscript synchronization, review, revision import and publication export.

Connectors SHOULD negotiate capabilities instead of assuming that every OMI implementation supports every integration level.

## Portability and graceful disconnection

Integration MUST NOT make the manuscript unusable when the external platform is unavailable. The OMI object SHOULD remain exportable and interpretable independently of the connected system.

External integration state SHOULD therefore be represented as links and provenance, not as undocumented dependencies on remote database structures.

This property is essential to the OMI architecture: publishing systems orchestrate workflows around the manuscript, while the manuscript itself remains a portable scholarly object.