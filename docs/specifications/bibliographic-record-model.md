---
id: bibliographic-record-model
title: OMI-SPEC-220 — Bibliographic Record Model
sidebar_label: Bibliographic Record Model
sidebar_position: 13
---

# OMI-SPEC-220 — Bibliographic Record Model

## Status

**Draft**

Version: 0.1.0

**Legacy identifier:** `OMI-SPEC-006`

---

## Purpose

The Bibliographic Record Model defines how OMI represents a cited work independently from any one citation occurrence or manuscript.

A bibliographic record is the normalized description of a scholarly or cultural object such as an article, book, chapter, dataset, archival source, software package, image, map, legal document, or web resource.

The model allows one work to be cited many times without duplicating its metadata.

---

## Position in the OMI Architecture

```text
External bibliographic sources
            ↓
Bibliographic Record
            ↓
Manuscript Reference Library
            ↓
Citation Occurrences
```

The Bibliographic Record Model describes the second layer. The [Citation Model](./citation-model.md) describes individual citation occurrences. The [Reference Library and Registry Architecture](./reference-library-registry.md) describes how records are discovered, resolved, stored, reused, synchronized, and exported.

---

## Core Principle

A cited work and a citation occurrence are different objects.

- The **bibliographic record** describes the work.
- The **citation occurrence** records where and how the work is cited.
- The **rendered citation** is a presentation generated from both.

```text
Bibliographic Record
  title: Example Article
  DOI: 10.1234/example

Citation Occurrence A
  locator: p. 12

Citation Occurrence B
  locator: pp. 45–47
```

---

## Record Identity

Each bibliographic record has an OMI-local identifier.

```json
{
  "id": "bib_01JXYZ...",
  "type": "journal-article"
}
```

The local identifier remains stable even when external metadata is refreshed or additional identifiers are discovered.

A record may contain multiple external identifiers:

- DOI
- ISBN
- ISSN
- PMID
- PMCID
- arXiv identifier
- Handle
- ARK
- URN
- URL
- repository identifier
- catalogue identifier
- archival reference code

External identifiers are evidence for identity, not replacements for the OMI-local identifier.

---

## Work, Expression, and Manifestation

The model distinguishes between levels when necessary:

- **Work**: the abstract intellectual or creative work.
- **Expression**: a language, version, revision, translation, or edition.
- **Manifestation**: a specific published or distributed form.
- **Item**: a particular physical or digital copy when item-level description is required.

Simple records may use only one level. Complex records may express relationships between levels.

Examples:

- an original article and its translated version;
- a preprint and the version of record;
- multiple editions of a book;
- a manuscript and a digitized surrogate;
- a dataset and a specific release.

---

## Supported Resource Types

The core vocabulary includes:

- journal article
- book
- book chapter
- conference paper
- thesis
- dissertation
- report
- preprint
- dataset
- software
- standard
- legal case
- legislation
- treaty
- archival source
- manuscript
- charter
- map
- image
- audio
- video
- web page
- repository record
- catalogue record

Profiles and plugins may introduce domain-specific types without modifying the core model.

---

## Core Metadata

A bibliographic record may contain:

- title
- subtitle
- translated title
- short title
- resource type
- creators and contributors
- container title
- edition
- volume
- issue
- series
- publisher
- place of publication
- publication date
- access date
- pagination or extent
- language
- abstract
- keywords
- identifiers
- URLs
- rights information
- version information
- provenance
- source-specific metadata

Fields may be structured, multilingual, and repeatable where appropriate.

---

## Contributors

Contributors are represented as structured agents rather than display strings.

```json
{
  "role": "author",
  "agent": {
    "type": "person",
    "familyName": "Example",
    "givenName": "Ada",
    "orcid": "0000-0000-0000-0000"
  }
}
```

Supported agent types include:

- person
- organization
- project
- consortium
- unidentified or historical agent

Supported roles include:

- author
- editor
- translator
- compiler
- illustrator
- photographer
- director
- contributor
- issuing body

The role vocabulary is extensible.

---

## Multilingual Metadata

Titles, subtitles, abstracts, notes, and selected contributor names may be multilingual.

```json
{
  "title": {
    "und": "Original title",
    "en": "English title",
    "hu": "Magyar cím"
  }
}
```

The record should preserve original-language metadata and distinguish it from translated or normalized values.

---

## Containers and Hierarchies

Bibliographic resources may belong to containers.

Examples:

- article → journal issue → journal
- chapter → edited volume → series
- archival item → file → collection → archive
- dataset release → dataset → research project

Container relationships are modeled explicitly rather than flattened into one formatted string.

---

## Provenance

Each imported or asserted metadata value may record provenance.

```json
{
  "value": "Example title",
  "source": "crossref",
  "retrievedAt": "2026-08-06T12:00:00Z",
  "confidence": "authoritative"
}
```

Provenance may include:

- source system
- source record identifier
- retrieval date
- importing user or service
- assertion method
- confidence level
- transformation history

OMI must not silently overwrite user-corrected metadata with lower-quality external data.

---

## Record Status

A record may have one of the following states:

- unresolved
- provisional
- resolved
- verified
- conflicted
- deprecated

A provisional record may be created from incomplete user input and enriched later.

---

## Deduplication and Equivalence

Two records may represent the same work even when their metadata differs.

Deduplication may use:

- exact persistent identifiers;
- normalized title and contributor matching;
- container, date, volume, issue, and page comparison;
- repository or catalogue identifiers;
- user confirmation.

The system must distinguish between:

- exact equivalence;
- probable equivalence;
- version relationship;
- translation relationship;
- retraction or correction relationship;
- unrelated records with similar metadata.

Merging records must preserve provenance and an audit trail.

---

## Availability and Access

A record may describe one or more access locations:

```json
{
  "access": [
    {
      "url": "https://example.org/article",
      "format": "html",
      "accessType": "open"
    },
    {
      "url": "https://example.org/article.pdf",
      "format": "pdf",
      "accessType": "open"
    }
  ]
}
```

Access metadata may identify:

- landing page
- full text
- abstract page
- repository copy
- publisher copy
- digitized surrogate
- machine-readable representation

OMI records availability but does not assume that a link grants permission to redistribute or embed the resource.

---

## Corrections, Retractions, and Versions

Bibliographic records may express relationships such as:

- isVersionOf
- hasVersion
- isTranslationOf
- hasTranslation
- corrects
- isCorrectedBy
- retracts
- isRetractedBy
- supplements
- isSupplementedBy

These relationships allow a manuscript to cite the intended scholarly object rather than an ambiguous text string.

---

## Serialization and Interoperability

The model should map to or from:

- CSL JSON
- BibTeX and BibLaTeX
- RIS
- Crossref metadata
- DataCite metadata
- JATS XML
- MODS
- Dublin Core
- schema.org
- Zotero translators
- library catalogue formats

Mappings may be lossy. OMI must retain unmapped source data when possible.

---

## Validation

Validation may check:

- required fields by resource type;
- identifier syntax and checksums;
- date consistency;
- contributor structure;
- container relationships;
- duplicate identifiers;
- impossible page, volume, or issue combinations;
- unresolved conflicts;
- broken or redirected URLs.

Validation severity may be informational, warning, or error.

---

## Minimal Example

```json
{
  "id": "bib_01JXYZ",
  "type": "journal-article",
  "title": {
    "en": "A Structured Scholarly Article"
  },
  "contributors": [
    {
      "role": "author",
      "agent": {
        "type": "person",
        "familyName": "Example",
        "givenName": "Ada"
      }
    }
  ],
  "container": {
    "title": "Journal of Open Manuscripts"
  },
  "issued": "2026",
  "identifiers": [
    {
      "scheme": "doi",
      "value": "10.1234/example"
    }
  ],
  "status": "resolved"
}
```

---

## Change history

- **0.1.0** — Migrated from provisional `OMI-SPEC-006` to canonical `OMI-SPEC-220`.

---

## Summary

The Bibliographic Record Model gives OMI a stable, normalized, provenance-aware representation of cited works.

It prevents metadata duplication, supports multilingual and discipline-specific description, preserves links to external authority sources, and provides the shared target used by manuscript reference libraries and citation occurrences.
