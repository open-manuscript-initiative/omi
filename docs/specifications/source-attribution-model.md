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

Version: 0.2.0

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

Importing a manuscript MUST NOT, by itself, create a source attribution or a
visible citation. An application MAY offer the author a source-attribution
prompt. It MUST allow an author who identifies the imported work as their own
to continue without adding a source attribution or citation. The absence of a
source attribution means that no source relationship was asserted; it does
not assert authorship, ownership, permission, or public-domain status.

An attribution is metadata about a manuscript object and MUST NOT make that
object immutable or prevent ordinary editing, restructuring, or deletion. If
the attributed object is deleted, the attribution MUST be removed or resolved
in the same transaction so that it cannot become a dangling relationship.

Local filesystem paths, temporary URLs, access tokens, and private reviewer or account data MUST NOT be copied into portable public attribution fields.

A declaration that imported work was previously authored outside OMI MUST NOT be presented as independently verified authorship. It does not require a public citation to a local file.

Applications MAY retain an explicit own-work declaration as document-level
technical import metadata. Studio uses the existing namespaced extension
`https://openmanuscript.org/extensions/manuscript-import-origin/1` with
`version: 1`, `sourceFormat` (`docx`, `odt`, or `pdf`), `importedAt` (UTC
timestamp), and `assertion: "author-declared:self-authored-outside-omi"`.
This extension has no content target and MUST NOT constrain editing, moving,
replacing or deleting any document part. It describes the declaration made at
import time, not the authorship of subsequent edits. It contains no filename,
path, URL or account identity. Working files and core snapshots preserve it;
public publication and anonymous review projections omit it. This optional
extension does not require a new OMI file-format version.

## 7. Validation

A conforming consumer or validator MUST check that attribution IDs are unique, sourceObjectId resolves to an addressable object, targetBibliographicRecordId resolves to a bibliographic record, predicate and assertionStatus are valid, and an optional locator is structurally valid.

A missing target MUST be reported as an unresolved reference. Implementations MUST NOT silently discard the attribution.

## 8. Interoperability

The prov:wasDerivedFrom predicate maps to PROV-O. Where richer derivation detail exists, implementations MAY preserve associated activity, agent, role, and usage in qualified provenance structures.

When an output format cannot represent the attribution, an exporter SHOULD preserve it in a documented extension or issue a loss diagnostic. It MUST NOT fabricate a visible citation or rights statement as a substitute.

## 9. Change history

- **0.1.0** — Initial source-attribution and derivation model.
- **0.2.0** — Clarified that import alone does not assert a bibliographic source, own-work imports may omit attribution, and source metadata must not restrict editing or deletion.
