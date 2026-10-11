---
id: source-attribution-model
title: OMI-SPEC-225 — Source and Derivation Model
sidebar_label: Source and Derivation Model
sidebar_position: 15
description: Semantic links between OMI objects and the bibliographic records of sources from which they derive.
---

# OMI-SPEC-225 — Source and Derivation Model

## Status

**Draft**

Version: 0.1.0

**Depends on:** OMI-SPEC-120 (Scholarly Object Model), OMI-SPEC-220 (Bibliographic Record Model)  
**Related:** OMI-SPEC-110 (Anchor Model), OMI-SPEC-210 (Citation Model), OMI-SPEC-320 (File Format)

## 1. Purpose

This specification defines a portable semantic relationship between an OMI object and the bibliographic work or resource from which that object was derived, transcribed, adapted, or otherwise obtained.

## 2. Distinctions

- A bibliographic record describes a work under OMI-SPEC-220.
- A source attribution states that a particular OMI object derives from or uses that source.
- A citation occurrence under OMI-SPEC-210 records an intentional act of citing the source at a manuscript anchor.
- Import provenance records technical facts such as file format, import time, source part, agent, or transformation.

A source attribution MUST NOT automatically create a visible citation. A citation MUST NOT be inferred solely from import provenance. Source attribution is not a rights statement and does not establish permission, ownership, authorship, or licence.

## 3. Source-attribution object

A source attribution is an independently identified relationship object from the derived manuscript object to the bibliographic record identifying its source.

~~~json
{
  "id": "srcattr_01JXYZ",
  "sourceObjectId": "block_01JABC",
  "targetBibliographicRecordId": "bib_01JDEF",
  "predicate": "prov:wasDerivedFrom",
  "role": "import-source",
  "locator": { "type": "page-range", "value": "12–13" },
  "assertionStatus": "author-confirmed",
  "createdAt": "2026-10-11T18:00:00Z"
}
~~~

The required properties are id, sourceObjectId, targetBibliographicRecordId, predicate, and assertionStatus. For source derivation, predicate MUST be prov:wasDerivedFrom, corresponding to PROV-O.

The optional role describes the source function, such as transcription-source, illustration-source, data-source, or translation-source. The optional locator identifies a relevant page, folio, section, timestamp, or other location. Locators are separate from citation locators if no citation occurrence exists.

## 4. Assertion status

assertionStatus MUST be one of:

- machine-inferred: proposed by software and not yet confirmed by a person;
- author-declared: declared by an author;
- author-confirmed: reviewed and confirmed by an author or responsible contributor.

An implementation MUST NOT upgrade an inferred assertion to confirmed without an explicit human action. It MUST preserve the distinction between these states.

## 5. Cardinality and identity

One manuscript object MAY have multiple source attributions, and one bibliographic record MAY be the source of multiple manuscript objects. Each attribution has its own stable identifier.

If a bibliographic record is merged or replaced, every attribution targeting it MUST be updated or explicitly resolved. Implementations MUST NOT leave dangling references or silently retarget the relation to another work.

## 6. Import provenance and privacy

Technical import provenance MAY record portable facts such as source format, import time, source part, importing agent, and software. It MUST remain separate from the bibliographic source claim.

Local filesystem paths, temporary URLs, access tokens, and private reviewer or account data MUST NOT be copied into portable public attribution fields.

A declaration that imported work was previously authored outside OMI MUST NOT be presented as independently verified authorship. It does not require a public citation to a local file.

## 7. Validation

A conforming consumer or validator MUST check that attribution IDs are unique, sourceObjectId resolves to an addressable object, targetBibliographicRecordId resolves to a bibliographic record, predicate and assertionStatus are valid, and an optional locator is structurally valid.

A missing target MUST be reported as an unresolved reference. Implementations MUST NOT silently discard the attribution.

## 8. Interoperability

The prov:wasDerivedFrom predicate maps to PROV-O. Where richer derivation detail exists, implementations MAY preserve associated activity, agent, role, and usage in qualified provenance structures.

When an output format cannot represent the attribution, an exporter SHOULD preserve it in a documented extension or issue a loss diagnostic. It MUST NOT fabricate a visible citation or rights statement as a substitute.

## 9. Change history

- **0.1.0** — Initial source-attribution and derivation model.
