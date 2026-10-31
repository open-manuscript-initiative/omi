---
id: core-principles
title: OMI-SPEC-000 — Core Principles
sidebar_label: Core Principles
description: Reviewed-structure Draft for core principles, explicit requirements and bounded core snapshot evidence.
---

# OMI-SPEC-000 — Core Principles

## Document metadata

| Field | Value |
|---|---|
| Identifier | `OMI-SPEC-000` |
| Title | Core Principles |
| Version | `0.2.0` |
| Status | Draft |
| Document type | Normative Draft with informative examples |
| Normative language | English |
| Editors | OMI maintainers |
| Last updated | 2026-10-31 |
| Replaces | Earlier pre-stable text in the same specification lineage |
| Replaced by | None |
| Depends on | None |
| Used by | See the Specification Registry; exact released dependency versions govern |
| Schemas | [Core snapshot review projection](/schemas/omi-core-snapshot-0.1.schema.json), not a complete manuscript schema |
| Profiles | `urn:omi:profile:core-snapshot-review:0.1.0` (unapproved Draft review profile) |
| Implementation status | [Fresh core evidence review](https://openmanuscript.org/docs/governance/core-model-readiness/) |
| Issue tracker | [Specification issues](https://github.com/open-manuscript-initiative/omi/issues) |

## 1. Abstract

This specification defines implementer-facing architectural principles: semantic independence, portability, preservation, human editorial authority, privacy and honest claims. It does not define a file format or certify implementations.

## 2. Status of this document

This remains **Draft 0.2.0**. This rewrite introduces stable requirement IDs and an explicitly bounded executable review profile. It is not a promotion to Review Candidate, Implementation Candidate or Stable. Existing producers declaring an older revision do not automatically implement this revision. Earlier text remains available in version control; no prior release is relabelled.

## 3. Conformance

Implementations identify their exact version, role and profile. Producer, consumer, editor, transformer and validator behavior are separate roles. A passing core snapshot test is partial evidence for the inspected invariants, not a suite-wide conformance claim. BCP 14 capitalized requirement terms apply; `REQ-PRI-NNN` IDs are permanent references for this lineage.

## 4. Scope

This specification defines implementer-facing architectural principles: semantic independence, portability, preservation, human editorial authority, privacy and honest claims. It does not define a file format or certify implementations. Cross-specification authorization, full file-format processing, rendering equivalence and scholarly correctness are not established by this document's local schema or fixtures.

## 5. Terminology

A **subject/object** is an addressable semantic entity. **Containment** is structural membership, **relationship** is a declared semantic connection, **projection** is an audience/format-specific derived representation, and **profile** is a versioned scope with explicit preconditions and exclusions. An **assertion** is not independent verification. **Canonical** identifies the controlling representation or publication; it does not mean approved or Stable.

## 6. Design principles

Portability, non-destructive authoring, precise identity, explicit meaning, accessibility, privacy and conservative evidence govern all roles. Implementations may preserve incomplete authoring state; publication policies impose their own declared gates.

## 7. Model overview

An author edits canonical scholarly content; identified models describe its objects and relationships; explicit projections create publications. Account authorization, exchange serialization and review decisions retain their own authorities. Open implementation and long-term preservation do not require a particular vendor.

## 8. Data model

**REQ-PRI-001:** Implementations MUST distinguish canonical scholarly semantics from presentation, transport and local account state.

**REQ-PRI-002:** No vendor, hosted service, editor, database or renderer MUST be required as the sole implementation of an OMI semantic model.

**REQ-PRI-003:** Generating a presentation MUST NOT silently alter canonical intellectual content or object identity.

**REQ-PRI-004:** Object identity MUST NOT change solely because text formatting, page layout or output format changes.

**REQ-PRI-005:** Scholarly relationships MUST be machine-interpretable under an identified model; visual proximity or superscript appearance alone is insufficient.

**REQ-PRI-006:** Scholarly contributor metadata MUST NOT automatically grant account access or editorial authority.

**REQ-PRI-007:** Provenance, import history and annotations MUST NOT by themselves prevent an authorized author from editing or deleting ordinary manuscript content.

**REQ-PRI-008:** Unsupported semantics, incomplete inspection and material information loss MUST be disclosed rather than reported as fully preserved.

**REQ-PRI-009:** Portable exchange MUST exclude operational passwords, access tokens and session credentials.

**REQ-PRI-010:** Automatically generated scholarly changes MUST have attributable provenance and require the acceptance policy of the responsible human/editorial authority; an AI suggestion is not an editorial approval.

**REQ-PRI-011:** Processors MUST preserve supported Unicode, language and accessibility-relevant semantic information or explicitly disclose degradation.

**REQ-PRI-012:** Support and conformance claims MUST identify exact specification revisions, implemented roles/profiles and known limitations.

**REQ-PRI-013:** Missing rights or provenance information MUST NOT be interpreted as permission, verified authorship or public-domain status.

**REQ-PRI-014:** Breaking semantic changes MUST be versioned and accompanied by compatibility and migration guidance.

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
| 0.2.0 | 2026-10-31 | Canonical-template rewrite, 14 stable requirement IDs, bounded core snapshot schema/fixtures/validator, explicit scope and evidence gaps. Remains Draft. |

## 23. Acknowledgements

Prepared for OMI maintainer and community review. Existing model concepts and historical versions remain attributed to their repository history.
