---
title: Citation Model
sidebar_position: 14
---

# OMI-SPEC-005: Citation Model

## Status

**Draft**

Version: 0.2

---

## Purpose

The Citation Model defines how an OMI manuscript records an individual act of citing a scholarly or cultural object.

A citation is not stored as formatted text. It is a semantic object that connects a location in the manuscript to a structured bibliographic record.

This separation enables consistent rendering, precise locators, machine processing, validation, versioning, and interoperability.

---

## Position in the Reference Architecture

```text
External bibliographic sources
            ↓
Bibliographic Record
            ↓
Manuscript Reference Library
            ↓
Citation Occurrence
            ↓
Rendered citation and bibliography
```

The [Bibliographic Record Model](./bibliographic-record-model.md) describes the cited work. The [Reference Library and Registry Architecture](./reference-library-registry.md) describes discovery, reconciliation, storage, reuse, and export. This specification describes the individual citation occurrence inside the manuscript.

---

## Core Distinction

A bibliographic record and a citation occurrence are different objects.

```text
Bibliographic Record
  Example Book

Citation A
  page 12

Citation B
  pages 45–47
```

The work is described once. Each occurrence adds manuscript-specific context such as locator, prefix, suffix, intent, and anchor.

---

## Design Principles

The Citation Model is:

- semantic first;
- presentation independent;
- anchored to a precise manuscript location;
- reusable;
- machine readable;
- style independent;
- versionable;
- extensible.

---

## Citation Object

A citation occurrence may contain:

- local identifier;
- bibliographic target identifier;
- manuscript anchor;
- locator or locator range;
- prefix;
- suffix;
- citation mode;
- citation intent or relationship;
- note;
- version metadata.

Example:

```json
{
  "id": "cit_01JXYZ",
  "target": "bib_01JABC",
  "anchor": "anchor_01JDEF",
  "locator": {
    "type": "page-range",
    "value": "45–47"
  },
  "prefix": "see also",
  "suffix": null
}
```

---

## Anchoring

Every citation occurrence should be associated with an OMI anchor.

An anchor may identify:

- an insertion point;
- a text range;
- a block;
- a note;
- a table cell;
- a figure caption;
- another identifiable scholarly object.

Anchoring allows citations to survive editing, review, comparison, and transformation more reliably than raw character offsets.

---

## Bibliographic Target

The target is normally a record in the manuscript reference library.

A citation must not duplicate the complete bibliographic metadata unless required for interchange or preservation. The authoritative relationship is expressed by the record identifier.

A target may represent:

- journal article;
- book;
- chapter;
- conference paper;
- thesis or dissertation;
- dataset;
- software;
- preprint;
- standard;
- web resource;
- archival source;
- manuscript;
- charter;
- image;
- map;
- audio or video;
- legislation or case law;
- another extensible resource type.

---

## Locators

A locator identifies the cited part of the target.

Supported locator types may include:

- page;
- page range;
- chapter;
- section;
- paragraph;
- figure;
- table;
- appendix;
- line;
- folio;
- timestamp;
- verse;
- article or clause;
- archival unit.

Locators should be stored structurally rather than as a complete formatted phrase.

```json
{
  "type": "folio",
  "from": "12r",
  "to": "13v"
}
```

Publication profiles decide whether this becomes `fols. 12r–13v`, another localized form, or structured XML.

---

## Citation Modes

A citation occurrence may express a mode such as:

- parenthetical;
- narrative;
- note citation;
- bibliography-only;
- source note;
- cross-reference;
- hidden machine-readable citation.

The supported modes depend on discipline and publication profile.

---

## Prefixes and Suffixes

Prefixes and suffixes contain citation-specific text that is not part of the bibliographic record.

Examples:

- `see`;
- `compare`;
- `quoted in`;
- `emphasis added`;
- `translation by the author`.

Applications should keep these values separate from the locator and rendered citation.

---

## Citation Intent and Scholarly Relationships

A citation may optionally express why the target is cited.

Examples include:

- supports;
- refutes;
- extends;
- discusses;
- compares;
- reproduces;
- translates;
- critiques;
- provides data;
- provides method;
- reviews;
- corrects.

Intent vocabularies must remain extensible and should not be required when the author or discipline does not use them.

---

## Grouped Citations

Several citation occurrences may form one citation group.

```text
(Smith 2022; Jones 2024, 18–20; Example 2026)
```

The group controls ordering, delimiters, and shared affixes while each member retains its own target and locator.

---

## Repeated Citations

Repeated citations must point to the same bibliographic record rather than duplicate it.

Publication profiles may render repeated citations using:

- full citation;
- shortened title;
- author-date form;
- `ibid.` or equivalent conventions;
- numeric reference;
- hyperlink.

These are rendering decisions, not changes to the citation object.

---

## Citation Styles

Citation styles are presentation profiles.

Examples include:

- APA;
- Chicago;
- MLA;
- Harvard;
- IEEE;
- Vancouver;
- OSCOLA;
- Turabian;
- journal-specific styles.

Changing the style must not change the underlying bibliographic record or citation occurrence.

---

## Discipline Profiles

Profiles may introduce specialised locators, resource types, and rendering rules.

History may include archival shelfmarks, folios, charters, and regests.

Law may include cases, statutes, treaties, articles, sections, and clauses.

Medicine may include trial registrations, clinical guidelines, and dataset versions.

Computer science may include repositories, software releases, packages, commits, and API documentation.

---

## Rendering

A single citation occurrence may be rendered differently by output format.

```text
OMI citation object
├── HTML inline citation
├── PDF footnote
├── EPUB hyperlink
├── JATS <xref> and <ref>
├── CSL processor input
└── Crossref or DataCite metadata
```

Rendering is determined by the publication profile, language, citation style, and output format.

---

## Validation

Validation may check:

- target record exists;
- anchor exists;
- locator type is valid for the target or profile;
- locator range is well formed;
- required citation fields are present;
- citation group ordering is valid;
- duplicate occurrences are intentional;
- target record is unresolved, conflicted, corrected, or retracted;
- citation style can render the available metadata.

Validation severity may be informational, warning, or error.

---

## Interoperability

Citation occurrences and their targets should map to or from:

- CSL JSON;
- BibTeX and BibLaTeX;
- RIS;
- JATS XML;
- Crossref metadata;
- DataCite metadata;
- Zotero-compatible formats;
- EndNote formats;
- repository and library exchange formats.

OMI should preserve citation-specific information that cannot be represented by a target format.

---

## Versioning

Citation occurrences participate in manuscript version control.

Tracked changes may include:

- inserted or deleted citation;
- changed target;
- changed locator;
- changed prefix or suffix;
- changed intent;
- changed anchor;
- membership changes in a citation group.

Bibliographic record revisions are tracked independently from citation-occurrence revisions.

---

## Plugin Extensions

Plugins and profiles may introduce:

- citation modes;
- locator types;
- intent vocabularies;
- validation rules;
- rendering rules;
- domain-specific relationships.

Extensions must not require modifying the OMI Core.

---

## Future Work

Future specifications may define:

- citation graph exchange;
- linked open citation vocabularies;
- exact links between claims and source passages;
- citation-context analysis;
- verifiable citation provenance;
- collaborative citation verification.

---

## Summary

The Citation Model represents each act of citation as a structured, anchored, presentation-independent object.

By separating citation occurrences from bibliographic records and rendering, OMI allows authors to add a work once, cite it many times with precise locators, and publish the same manuscript through different scholarly styles and formats.
