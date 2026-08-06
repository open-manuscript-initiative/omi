---
id: reference-library-registry
title: OMI-SPEC-221 — Reference Library and Registry Architecture
sidebar_label: Reference Library and Registry
sidebar_position: 15
---

# OMI-SPEC-221 — Reference Library and Registry Architecture

## Status

**Draft**

Version: 0.1.0

**Legacy identifier:** `OMI-SPEC-007`

---

## Purpose

This specification defines how OMI applications discover, resolve, collect, reuse, synchronize, and export bibliographic records for a manuscript.

The architecture is designed around a simple author workflow:

1. add a cited work once;
2. reuse it throughout the manuscript;
3. cite it with precise locators;
4. update its metadata without rewriting every citation;
5. export the manuscript and bibliography to multiple publishing systems.

---

## Architectural Layers

```text
External bibliographic services and catalogues
                    ↓
          Resolution and reconciliation
                    ↓
       Manuscript Reference Library
                    ↓
           Citation Occurrences
                    ↓
       Rendering and publication exports
```

The layers are intentionally separated.

- External services help discover and enrich records.
- The reference library stores the manuscript's selected records.
- Citation occurrences point to library records.
- Renderers produce footnotes, author-date citations, bibliographies, links, and structured exports.

---

## Manuscript Reference Library

Each manuscript may contain or reference a dedicated library of works used by that manuscript.

The library is not merely a formatted bibliography. It is a collection of structured [Bibliographic Records](./bibliographic-record-model.md).

```json
{
  "referenceLibrary": {
    "records": [
      "bib_01JXYZ",
      "bib_01JXYA"
    ]
  }
}
```

A record may exist in the library before it is cited. This supports preliminary reading lists, source collection, editorial verification, and later insertion.

---

## Add Once, Cite Many Times

When an author adds a work, OMI creates or reuses one bibliographic record.

Every citation occurrence points to that record:

```text
Reference Library
└── bib_01: Example Book
    ├── Citation 1: p. 12
    ├── Citation 2: pp. 55–57
    └── Citation 3: chapter 4
```

This avoids repeated metadata entry and ensures consistent rendering.

---

## Discovery and Import

Applications may support several entry methods:

- DOI lookup;
- ISBN lookup;
- URL import;
- title or contributor search;
- repository identifier lookup;
- library catalogue search;
- paste formatted reference;
- import CSL JSON, BibTeX, BibLaTeX, RIS, EndNote XML, or other supported formats;
- manual entry;
- selection from another OMI manuscript or user library.

Imported data must be normalized into the Bibliographic Record Model while preserving source provenance.

---

## External Sources

An OMI implementation may query public or authorized services such as:

- Crossref
- DataCite
- OpenAlex
- PubMed
- Europe PMC
- ORCID
- ROR
- library catalogues
- institutional repositories
- disciplinary repositories
- national bibliographies
- archival catalogues

The architecture does not require one central provider.

OMI defines interfaces and data expectations so that implementations can combine several providers and remain operational when one provider is unavailable.

---

## No Central Bibliographic Monopoly

OMI should not create a mandatory central database that every manuscript must contact.

A valid OMI manuscript must remain usable when:

- the original lookup service is offline;
- the author moves to another OMI implementation;
- a publisher processes the manuscript in a disconnected environment;
- an external record changes or disappears.

Therefore, the manuscript or its package must retain the bibliographic data required to interpret and render its citations.

External services are discovery and enrichment sources, not single points of authority or availability.

---

## Resolution Workflow

A typical resolution sequence is:

```text
User input
   ↓
Identifier normalization
   ↓
Provider lookup
   ↓
Candidate records
   ↓
Reconciliation and deduplication
   ↓
User or automated selection
   ↓
Local bibliographic record
```

A resolver should return:

- candidate records;
- matched identifiers;
- source and retrieval time;
- confidence;
- conflicts;
- access locations;
- warnings about retractions, corrections, or uncertain identity where available.

---

## Reconciliation

Different providers may return different metadata for the same work.

Reconciliation must consider:

- persistent identifiers;
- normalized title;
- contributor names and identifiers;
- publication year;
- container title;
- volume, issue, and pages;
- edition and version;
- language;
- source authority and freshness.

The system should not silently choose a conflicting value when the conflict may affect scholarly meaning.

Possible outcomes include:

- exact match;
- probable match;
- separate version;
- translation or edition relationship;
- unresolved conflict;
- distinct record.

---

## Local and Shared Libraries

Implementations may support several scopes:

- manuscript library;
- workspace or project library;
- personal library;
- institutional library;
- public shared collection.

A manuscript must identify which records are part of its authoritative package, even when those records originated in a shared library.

Updates to a shared record should not automatically alter a submitted or published manuscript without an explicit versioning decision.

---

## Citation Insertion

The editor should allow authors to search the manuscript library and insert a citation without re-entering bibliographic metadata.

Citation insertion may collect:

- locator type and value;
- prefix;
- suffix;
- citation mode;
- suppression of author or date where supported;
- citation intent or relationship;
- note or annotation.

The inserted object follows the [Citation Model](./citation-model.md).

---

## Online Access and Preview

When a bibliographic record contains an online location, an application may offer:

- open landing page;
- open full text;
- show abstract or metadata preview;
- display repository availability;
- show license and access conditions;
- embed content when technically and legally permitted.

OMI must distinguish between:

- metadata availability;
- public access to the resource;
- permission to embed;
- permission to redistribute.

A URL alone does not imply redistribution rights.

---

## Reference Lists and Reading Lists

A library record may have a manuscript-specific state:

- cited;
- uncited;
- background reading;
- excluded from final bibliography;
- editorially verified;
- requires verification.

Publication profiles determine which states appear in the rendered bibliography.

This supports disciplines where source lists, archival inventories, primary-source lists, or further-reading sections differ from conventional references.

---

## Duplicate Prevention

Before adding a new record, an implementation should check the manuscript library and relevant shared libraries.

A likely duplicate should present the existing record and explain the match basis.

The user may:

- reuse the existing record;
- merge records;
- keep separate versions;
- reject the suggested match.

Merging must preserve identifiers, provenance, local corrections, and previous citation links.

---

## Offline Operation

Core reference management must work without continuous network access.

Offline-capable implementations should allow:

- manual record creation;
- citation insertion from cached records;
- bibliography rendering;
- queued resolution and validation;
- later synchronization with external sources.

Network-dependent enhancements must not make the manuscript unreadable or uncitable.

---

## Synchronization and Change Control

External metadata may change after import. OMI implementations may offer refresh operations, but updates must be reviewable.

A refresh comparison should distinguish:

- newly available fields;
- formatting-only differences;
- corrected metadata;
- conflicting metadata;
- version or status changes;
- removed or redirected access locations.

Accepted updates create a new record revision. Published manuscript versions retain the bibliographic state used for that publication.

---

## Validation

Reference-library validation may report:

- unresolved records;
- duplicate records;
- missing required metadata;
- malformed identifiers;
- broken or redirected links;
- cited records absent from the library;
- unused records;
- retracted or corrected targets;
- inconsistent dates, volumes, issues, or pagination;
- unsupported resource types;
- metadata conflicts between sources.

Validation rules are configurable by publication and discipline profiles.

---

## Import and Export

The library should support interoperable exchange through formats such as:

- CSL JSON
- BibTeX
- BibLaTeX
- RIS
- JATS XML
- Crossref XML
- DataCite XML or JSON
- MODS
- Dublin Core
- Zotero-compatible formats

Exports should preserve stable OMI identifiers when the target format permits extensions.

The complete OMI package should include enough bibliographic metadata to render and validate citations without querying external services.

---

## API Responsibilities

A reference service API may expose operations such as:

```text
search(query, providers)
resolve(identifier)
import(record, source)
reconcile(candidates)
addToLibrary(recordId, manuscriptId)
mergeRecords(sourceIds, targetId)
refresh(recordId)
validateLibrary(manuscriptId)
exportLibrary(manuscriptId, format)
```

The specification defines behavior and data contracts, not one required network protocol or implementation language.

---

## Privacy and Security

Implementations must consider that reference collections can reveal research interests, unpublished projects, collaborators, and sensitive sources.

Requirements include:

- explicit control over sharing;
- least-privilege access to workspace libraries;
- no mandatory public disclosure of uncited records;
- clear provider requests and privacy notices;
- protection against malicious imported metadata;
- safe handling of remote URLs and embedded previews.

---

## Example Workflow

1. The author enters a DOI.
2. The resolver queries configured providers.
3. Candidate metadata is reconciled.
4. The selected work is stored as `bib_01JXYZ` in the manuscript library.
5. The author inserts citations to pages 12 and 45–47.
6. The editor verifies the record.
7. A publication profile renders footnotes and a bibliography.
8. The approved manuscript exports structured references to JATS XML and Crossref metadata.

---

## Future Work

Future specifications may define:

- federated public bibliographic registries;
- signed or verifiable metadata assertions;
- citation graph exchange;
- citation intent vocabularies;
- authority control services;
- collaborative record curation;
- provenance scoring;
- links between cited claims and exact source passages.

---

## Change history

- **0.1.0** — Migrated from provisional `OMI-SPEC-007` to canonical `OMI-SPEC-221`.

---

## Summary

The Reference Library and Registry Architecture allows authors to add a work once and cite it consistently throughout a manuscript.

It combines external discovery with a portable manuscript-level library, avoids dependence on one provider, supports online and offline workflows, preserves provenance, and enables reliable export to scholarly publishing systems.
