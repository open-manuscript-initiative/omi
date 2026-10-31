---
id: document-model
title: OMI-SPEC-100 — Document Model
sidebar_label: Document Model
description: Reviewed-structure Draft for document model, explicit requirements and bounded core snapshot evidence.
---

# OMI-SPEC-100 — Document Model

## Document metadata

| Field | Value |
|---|---|
| Identifier | `OMI-SPEC-100` |
| Title | Document Model |
| Version | `0.2.0` |
| Status | Draft |
| Document type | Normative Draft with informative examples |
| Normative language | English |
| Editors | OMI maintainers |
| Last updated | 2026-10-31 |
| Replaces | Earlier pre-stable text in the same specification lineage |
| Replaced by | None |
| Depends on | `OMI-SPEC-000@0.2.0`, `OMI-SPEC-120@0.3.0` |
| Used by | See the Specification Registry; exact released dependency versions govern |
| Schemas | [Core snapshot review projection](/schemas/omi-core-snapshot-0.1.schema.json), not a complete manuscript schema |
| Profiles | `urn:omi:profile:core-snapshot-review:0.1.0` (unapproved Draft review profile) |
| Implementation status | [Fresh core evidence review](https://openmanuscript.org/docs/governance/core-model-readiness/) |
| Issue tracker | [Specification issues](https://github.com/open-manuscript-initiative/omi/issues) |

## 1. Abstract

This specification defines semantic manuscript roots, ordered sections and blocks, containment, reading order and extension boundaries. Typography, page geometry, storage, editor-native text representation and discipline-specific semantics are separate concerns.

## 2. Status of this document

This remains **Draft 0.2.0**. This rewrite introduces stable requirement IDs and an explicitly bounded executable review profile. It is not a promotion to Review Candidate, Implementation Candidate or Stable. Existing producers declaring an older revision do not automatically implement this revision. Earlier text remains available in version control; no prior release is relabelled.

## 3. Conformance

Implementations identify their exact version, role and profile. Producer, consumer, editor, transformer and validator behavior are separate roles. A passing core snapshot test is partial evidence for the inspected invariants, not a suite-wide conformance claim. BCP 14 capitalized requirement terms apply; `REQ-DOC-NNN` IDs are permanent references for this lineage.

## 4. Scope

This specification defines semantic manuscript roots, ordered sections and blocks, containment, reading order and extension boundaries. Typography, page geometry, storage, editor-native text representation and discipline-specific semantics are separate concerns. Cross-specification authorization, full file-format processing, rendering equivalence and scholarly correctness are not established by this document's local schema or fixtures.

## 5. Terminology

A **subject/object** is an addressable semantic entity. **Containment** is structural membership, **relationship** is a declared semantic connection, **projection** is an audience/format-specific derived representation, and **profile** is a versioned scope with explicit preconditions and exclusions. An **assertion** is not independent verification. **Canonical** identifies the controlling representation or publication; it does not mean approved or Stable.

## 6. Design principles

Portability, non-destructive authoring, precise identity, explicit meaning, accessibility, privacy and conservative evidence govern all roles. Implementations may preserve incomplete authoring state; publication policies impose their own declared gates.

## 7. Model overview

The root contains metadata and ordered sections; each section contains ordered semantic blocks and may contain subsections. Figures, tables, equations, notes, citations, reviews and research objects remain distinguishable in their owning models. History, theology, mathematics, physics, chemistry, biology, medicine, computing, economics and law profiles may add named semantics without replacing core meaning.

## 8. Data model

**REQ-DOC-001:** A manuscript MUST identify a document root and the serialization/profile defining its semantic structure.

**REQ-DOC-002:** Sections and addressable blocks MUST belong to the declared document scope and retain their semantic identities.

**REQ-DOC-003:** Meaningful section/block reading order MUST be explicit and preserved during lossless structural exchange.

**REQ-DOC-004:** Structural containment MUST be acyclic and every declared section parent MUST resolve within the same manuscript.

**REQ-DOC-005:** Where nested containment and explicit parent references coexist, both MUST agree; contradictory parents MUST be diagnosed.

**REQ-DOC-006:** A declared core section MUST expose a title value and ordered block collection under the selected serialization.

**REQ-DOC-007:** A declared core textual block MUST have a semantic type and content value under the selected serialization; unsupported block types MUST NOT be silently relabelled as paragraphs.

**REQ-DOC-008:** Authoring profiles MUST allow unfinished content such as an empty title; stricter exchange/publication requirements MUST be explicitly identified.

**REQ-DOC-009:** Rendering, pagination and publication style changes MUST NOT be persisted as unannounced semantic content edits.

**REQ-DOC-010:** Ordinary authoring MUST remain possible without a central collaboration or publication server under a declared local-authoring profile.

**REQ-DOC-011:** Import/source attribution MUST remain editable metadata and MUST NOT make the first heading or ordinary content undeletable.

**REQ-DOC-012:** Validation MUST report source location and stable diagnostic code without silently repairing or dropping structural content.

**REQ-DOC-013:** Parsers and validators MUST enforce declared resource limits and distinguish incomplete inspection from a valid result.

**REQ-DOC-014:** Discipline/profile extensions MUST identify their versions and MUST NOT silently override required core semantics.

**REQ-DOC-015:** Notes, citations, annotations, figures and tables MUST retain their declared semantic role or have a disclosed non-equivalent fallback.

**REQ-DOC-016:** Transport events and editing presence MUST NOT automatically become committed scholarly revisions or editorial approvals.

## 9. Processing model

Identify the input/version/profile; preserve source; inspect structure under bounded policy; report diagnostics and coverage; allow explicit author correction; produce a separately identified output if requested. Validation is observational and never implicit repair. The published review projection checks one current snapshot; revision ledgers and historical identities are outside its live-object uniqueness scope.

## 10. Validation and error handling

The [core review profile](https://openmanuscript.org/docs/specifications/core-snapshot-review-profile/) pins the structural schema, pure semantic validator, resource limits, fixtures and requirement coverage. Results distinguish valid-within-scope, invalid and indeterminate. Invalid evidence takes precedence over incomplete inspection; truncation and resource limits cannot imply zero errors. Schema success is not equivalent to semantic success or full conformance. Codes are language-neutral; JSON-pointer locations avoid embedding manuscript excerpts in diagnostics.

## 11. Extensibility

Declared extension namespaces and type vocabularies may add semantics. Unknown data is not silently reinterpreted. The projection permits opaque additional properties; this is retention policy, not proof that extensions are understood or safe to execute. The serialization owning a property defines its compatibility behavior.

## 12. Versioning and compatibility

Specification, serialization, schema, profile, validator and implementation versions are distinct. This pre-stable rewrite may change requirements incompatibly; old declared versions remain historical contracts. No producer envelope is silently rewritten. New profile adoption needs explicit version negotiation, migration tests and recorded loss/identity effects. Normative dependencies are pinned above; a later release must re-evaluate them.

## 13. Interoperability

Shared examples cover valid and invalid structure, Unicode, language, identity and timestamp behavior. A Studio-vendored copy of the same validator is shared code, not an independent implementation. Additional implementers must demonstrate equivalent declared behavior before stronger interoperability evidence is recorded. Cross-model dependency contradictions remain review blockers.

## 14. Security, privacy and integrity considerations

Treat inputs, metadata, extensions and assets as untrusted. Bound bytes, depth, node count and diagnostics in each processing layer. Validation performs no network dereference, code execution, authentication or privilege grant. Local file digests show byte integrity, not authorship or permission. Confidential information requires separately enforced audience policy; no public fixture contains a private user manuscript.

## 15. Accessibility considerations

Preserve logical reading order, heading meaning, accessible labels/alternative text, language distinctions and note navigation where supported. The core snapshot validator does not assess complete accessibility, assistive technology behavior or page layout. Missing evidence remains an explicit exclusion.

## 16. Internationalisation considerations

Unicode scalar values and language identifiers retain their meaning across UI languages. The review profile uses modern BCP 47 tags accepted by ECMAScript Intl plus private-use tags; unsupported grandfathered syntax needs a future declared language profile. No casing or Unicode normalization is applied to object IDs. Canonical English requirements prevail over informative summaries.

## 17. Examples

A minimal review projection, **not a complete OMI-SPEC-320 manuscript**:

~~~json
{"id":"m-1","title":"Sample","locale":"hu","createdAt":"2026-10-31T00:00:00Z","updatedAt":"2026-10-31T00:00:00Z","sections":[{"id":"s-1","title":"Section","blocks":[{"id":"b-1","type":"paragraph","content":"Unicode: árvíztűrő 中文"}]}]}
~~~

[Fixture manifest](/examples/omi-core/0.1.0/manifest.json) lists exact expected diagnostic codes and partial requirement mappings.

## 18. Normative references

- [Core Principles](https://openmanuscript.org/docs/foundations/core-principles/)
- [Scholarly Object Model](https://openmanuscript.org/docs/specifications/core/scholarly-object-model/)
- [Specification Registry](https://openmanuscript.org/docs/governance/specification-registry/)
- [Specification Lifecycle](https://openmanuscript.org/docs/governance/specification-lifecycle/)
- BCP 14 (RFC 2119 and RFC 8174); Unicode scalar values; BCP 47 language tags under the declared profile.

## 19. Informative references

[Document Model](https://openmanuscript.org/docs/specifications/document-model/), [Metadata Model](https://openmanuscript.org/docs/specifications/metadata-model/), [OMI-SPEC-320 File Format](https://openmanuscript.org/docs/specifications/file-format/), [OMI-SPEC-180 Validation](https://openmanuscript.org/docs/specifications/validation-model/), [OMI-SPEC-350 Capability and Conformance](https://openmanuscript.org/docs/specifications/capability-conformance-model/).

## 20. Implementation status

The profile schema, pure validator and versioned fixtures provide partial executable evidence. The readiness inventory maps all requirements to partial or untested evidence and names exclusions. Existing Studio behavior is assessed against a pinned commit; no complete implementation or conformance claim is implied. No independent evaluator has approved the profile or this Draft promotion.

## 21. Unresolved issues

Full requirement coverage; independently developed interoperability evidence; public review and disposition of comments; approved role/profile classes; all specialized object semantics; complete privacy/accessibility tests; vocabulary governance; and migration from previous Draft contracts. These are explicit gates rather than completed work.

## 22. Change history

| Version | Date | Change |
|---|---|---|
| 0.2.0 | 2026-10-31 | Canonical-template rewrite, 16 stable requirement IDs, bounded core snapshot schema/fixtures/validator, explicit scope and evidence gaps. Remains Draft. |

## 23. Acknowledgements

Prepared for OMI maintainer and community review. Existing model concepts and historical versions remain attributed to their repository history.
