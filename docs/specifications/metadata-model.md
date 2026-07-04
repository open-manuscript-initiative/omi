---
title: Metadata Model
sidebar_position: 13
---

# OMI-SPEC-004: Metadata Model

## Status

**Draft**

Version: 0.1

---

# Purpose

The Metadata Model defines how scholarly metadata is represented within the Open Manuscript Initiative (OMI).

Metadata describes the scholarly object rather than its visual representation.

The model is designed to ensure interoperability between authoring tools, publishing platforms, repositories, indexing services, and long-term preservation systems.

---

# Design Principles

The Metadata Model follows these principles:

- Semantic first
- Machine readable
- Human understandable
- Interoperable
- Extensible
- Persistent
- FAIR-compatible
- Platform independent

---

# Metadata Layers

OMI distinguishes several metadata layers.

```
Document
│
├── Descriptive Metadata
├── Administrative Metadata
├── Technical Metadata
├── Preservation Metadata
└── Discipline-specific Metadata
```

---

# Descriptive Metadata

Describes the scholarly work itself.

Examples:

- Title
- Subtitle
- Abstract
- Keywords
- Language
- Subject
- Discipline
- Publication Type

---

# Author Metadata

Each author is represented as a semantic object.

Examples:

- Full Name
- Preferred Name
- ORCID
- Affiliation
- ROR Identifier
- Email (optional)
- Country
- Biography (optional)

An author may have multiple affiliations.

---

# Affiliation Metadata

Institutional information should remain independent from authors.

Examples:

- Institution Name
- Department
- Faculty
- Country
- City
- ROR Identifier
- Website

---

# Identifier Metadata

OMI supports multiple persistent identifiers.

Examples:

- DOI
- ARK
- Handle
- ORCID
- ROR
- ISBN
- ISSN
- ISNI

The model allows multiple identifiers for the same object.

---

# Publication Metadata

Examples include:

- Publication Status
- Version
- Publisher
- Journal
- Volume
- Issue
- Article Number
- Pages
- Publication Date

---

# Rights Metadata

Rights information includes:

- License
- Copyright Holder
- Copyright Year
- Embargo
- Access Rights

Examples:

- MIT
- CC BY 4.0
- CC BY-SA
- CC BY-NC
- CC0

---

# Funding Metadata

Research funding should be explicitly represented.

Examples:

- Funding Organisation
- Grant Number
- Grant Title
- Funder Identifier

Future versions may support Crossref Funder Registry integration.

---

# Research Output Metadata

A manuscript may reference additional research outputs.

Examples:

- Dataset
- Software
- Protocol
- Image Collection
- Supplementary Material
- Multimedia

Each output should have its own persistent identifier whenever possible.

---

# Preservation Metadata

Long-term preservation requires additional metadata.

Examples:

- Creation Date
- Modification Date
- Version History
- Checksum
- File Format
- Preservation Status

Future versions may align with PREMIS.

---

# Discipline-specific Metadata

Discipline Profiles may extend the metadata model.

Examples:

History

- Archive
- Collection
- Shelfmark

Medicine

- Ethics Approval
- Clinical Trial Identifier

Chemistry

- CAS Number
- Molecular Formula

Biology

- Taxonomic Identifier
- Gene Identifier

Mathematics

- MSC Classification

---

# Metadata Relationships

Metadata objects are interconnected.

Example:

```
Author
    │
    ├── ORCID
    ├── Affiliation
    └── Funding

Affiliation
    │
    └── ROR
```

Relationships are explicit and machine-readable.

---

# Interoperability

The Metadata Model is designed for interoperability with existing standards.

Planned mappings include:

- JATS
- Crossref
- DataCite
- Dublin Core
- schema.org
- MARC21
- MODS
- BibTeX
- CSL JSON
- RIS

---

# Validation

Metadata should support validation.

Examples include:

- required fields
- identifier validation
- controlled vocabularies
- language codes
- date formats

Validation rules may vary by publication profile.

---

# Extensibility

The Metadata Model is extensible through plugins.

Plugins may introduce:

- new metadata fields
- discipline-specific vocabularies
- validation rules
- export mappings

without modifying the core specification.

---

# Future Work

Future specifications will define:

- Citation Model
- Review Metadata
- Preservation Model
- Linked Open Data
- Knowledge Graph Integration

---

# Summary

The OMI Metadata Model provides a flexible, extensible, and standards-based framework for describing scholarly objects.

By separating metadata from presentation while supporting persistent identifiers and international standards, OMI enables seamless interoperability across scholarly publishing ecosystems.
