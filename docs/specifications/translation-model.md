---
id: translation-model
title: OMI-SPEC-170 — Translation Model
sidebar_label: Translation Model
description: Draft semantic model for scholarly manuscript translations, source/target alignment, revision freshness, equivalence, review, provenance and portable exchange.
keywords:
  - Open Manuscript Initiative
  - OMI-SPEC-170
  - translation
  - multilingual publishing
  - provenance
---

# OMI-SPEC-170 — Translation Model

## Document metadata

| Field | Value |
|---|---|
| Identifier | \`OMI-SPEC-170\` |
| Title | Translation Model |
| Version | \`0.1.0\` |
| Status | Draft |
| Document type | Normative (draft requirements); examples and implementation notes are informative |
| Normative language | English |
| Editors | OMI maintainers |
| Last updated | 2026-10-31 |
| Replaces | None |
| Replaced by | None |
| Depends on | \`OMI-SPEC-100\`, \`OMI-SPEC-110\`, \`OMI-SPEC-120\`, \`OMI-SPEC-140\`, \`OMI-SPEC-150\`, \`OMI-SPEC-160\` |
| Used by | Publishing, review, validation, import/export and future conformance profiles |
| Schemas | No canonical OMI-SPEC-170 schema published |
| Profiles | [Studio experimental translation profile](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/main/docs/omi-spec-170-translation-model.md) (non-normative, \`studio-translation-0.1\`) |
| Implementation status | [OMI Implementation Status Matrix](../governance/implementation-status-matrix.md) |
| Issue tracker | [OMI specification issues](https://github.com/open-manuscript-initiative/omi/issues) |

## 1. Abstract

OMI-SPEC-170 defines a provider-independent semantic relationship between a source scholarly manuscript (or identifiable part of it) and one or more translations or intentional adaptations. It distinguishes source language from target language, target content from a source snapshot, alignment from identity, review from mere completion, and a translator's decision from a machine-generated suggestion.

The model supports multiple translations, individual alignment records, version-aware detection of changed or missing sources, non-destructive resynchronization, translation provenance and portable preservation of review evidence. The source manuscript remains freely editable even when translations become outdated. It does not require any particular editor, translation service or user-interface language.

This Draft sets the interoperable semantic direction; a canonical wire schema, complete fixture suite and independent conformance tests have **not** yet been published. The existing Studio implementation is a useful experimental profile, **not** a certification of OMI-SPEC-170@0.1.0 conformance.

## 2. Status of this document

This document is an OMI **Draft** specification, published for technical and scholarly review. Requirements and the eventual serialization may change incompatibly before Stable. An implementation that advertises support MUST identify the exact version or immutable document commit and MUST distinguish the canonical draft from a local implementation profile.

The [Specification Registry](../governance/specification-registry.md) is authoritative for identifier allocation and lifecycle status. Publication as Draft does not establish Review Candidate, a stable format, formal conformance or an accepted schema.

## 3. Conformance

### 3.1 Classes

- **Translation producer:** creates translation variants, alignments, decisions and evidence.
- **Translation consumer:** imports, preserves, presents or updates those records.
- **Translation validator:** checks structural, referential and semantic invariants.
- **Translation exporter:** emits a target or parallel representation with explicit completeness and fidelity statements.

A processor MAY implement more than one class. A claim MUST specify its supported scopes, text representations, exact version, extensions and known gaps. A formal conformance claim requires a published canonical serialization and relevant conformance evidence, neither of which is available yet.

### 3.2 Core requirements

**REQ-TRN-001:** A producer MUST identify the source manuscript and the source and target languages of each translation relationship separately.

**REQ-TRN-002:** A producer MUST assign a distinct stable identity to each translation variant, including multiple variants with the same target language.

**REQ-TRN-003:** A translation MUST preserve a traceable relationship to its source scope or object; a text match alone MUST NOT substitute for source identity.

**REQ-TRN-004:** A producer MUST distinguish original or translated content from an explicit adaptation; unassessed equivalence MUST NOT be presented as established equivalence.

**REQ-TRN-005:** A consumer MUST NOT lock, reject or silently overwrite source editing merely because a translation exists or needs review.

**REQ-TRN-006:** When a referenced source changes, an implementation MUST NOT silently represent the existing target as reviewed against the changed source without new evidence.

**REQ-TRN-007:** Resynchronization MUST preserve existing target work unless the user explicitly requests a destructive replacement; review of affected alignments MUST be reconsidered.

**REQ-TRN-008:** A producer MUST distinguish human-authored from machine-generated target content and MUST NOT mark generated content as human-reviewed by default.

**REQ-TRN-009:** A producer MUST separate a translation's draft state, equivalence/adaptation decision and review decision; none alone implies the others.

**REQ-TRN-010:** A consumer MUST preserve supported identities, relationships, provenance and review state during a declared lossless round trip.

**REQ-TRN-011:** A consumer MUST expose missing or unresolved source references instead of silently treating them as current.

**REQ-TRN-012:** A processor MUST NOT infer a verified scholarly agent solely from an account display name or unverified external identity.

**REQ-TRN-013:** A translator's notes, account identifiers, private source text and external-provider credentials MUST NOT be emitted in a public proof unless expressly selected and authorized.

**REQ-TRN-014:** An exporter MUST declare the covered scope, unsupported constructs and fidelity limits; it MUST NOT label a partial plain-text proof a complete published target edition.

**REQ-TRN-015:** A processor MUST reject or isolate malformed known translation data without discarding unrelated manuscript content or unrelated extension namespaces.

## 4. Scope

In scope: source/target language relationships; variants; manuscript/section/block scopes; object or text-range alignment; freshness and explicit rebasing; translation status, equivalence and review; contributor/machine provenance; portable preservation; completeness accounting; export assertions.

Out of scope: provider API or billing; automatic translation quality judgement; a universal translator credential; real-time collaborative permissions; copyright licensing decisions; definitive scholarly accuracy; general identity authentication; canonical published edition identities; DTP, PDF, DOCX and JATS rendering rules; interface localization.

Identity belongs to OMI-SPEC-150; revision semantics to OMI-SPEC-160; target scholarly structure to OMI-SPEC-100/120; anchoring to OMI-SPEC-110; publishing to OMI-SPEC-230/240; exchange serialization to OMI-SPEC-320/340; permissions to OMI-SPEC-190.

## 5. Terminology

- **Source manuscript:** the scholarly manuscript from which translated content is derived.
- **Translation relationship:** a provenance-bearing link between a source scope and a particular target-language variant.
- **Translation variant:** one distinguishable candidate translation or adaptation, not necessarily a separately published manuscript.
- **Alignment:** a durable correspondence between an identified source unit (or range) and target content; it may become stale or unresolved.
- **Source baseline:** the revision/checkpoint and/or content fingerprint against which an alignment was prepared or accepted.
- **Freshness:** a calculated condition, such as current, stale or missing; not proof of semantic accuracy.
- **Equivalence decision:** an explicit scholarly judgement that the translation is equivalent, intentionally adapted, or unassessed.
- **Review:** an affirmative recorded acceptance of target content against a recognized source baseline.
- **Synchronization:** explicit acceptance of a changed source baseline, distinct from automatic retranslating.
- **Text proof:** an inspectable translated or parallel text output that is not necessarily a complete semantic manuscript or edition.

The [OMI terminology](../governance/terminology.md) also applies.

## 6. Design principles

This section is informative.

1. **Author freedom:** edit the source without translation-imposed locks.
2. **Non-destructive history:** target text and old alignment evidence survive routine source changes.
3. **Explicit scholarly judgement:** review and intentional adaptation are human-visible decisions.
4. **Provider neutrality:** human and service-generated work share one semantic model, with honest provenance.
5. **Portable, reviewable evidence:** source identity and change context travel with the target.
6. **Conservative publication:** incomplete or unsupported material is disclosed, never passed off as fully reviewed.

## 7. Model overview

~~~text
Source manuscript + source revision / working state
       | identified source scope / anchors
       v
Translation relationship --- target language ---> Translation variant
       |                                           |
       +--- Alignment records <---- target content -+
                |                 |            |
           source baseline   equivalence   review/provenance
                |
          calculated freshness
~~~

This diagram is informative; a future canonical schema will define the concrete wire shape. A single source may have many target languages and many versions for one language.

## 8. Data model

### 8.1 Translation relationship

| Conceptual property | Cardinality | Meaning |
|---|---:|---|
| \`id\` | 1 | Stable identifier for this variant relationship |
| \`sourceManuscriptId\` | 1 | Identifier of originating manuscript |
| \`sourceLanguage\` | 1 | BCP 47 language tag for source |
| \`targetLanguage\` | 1 | BCP 47 language tag for target |
| \`scope\` | 1 | Manuscript, section, block or declared extension scope |
| \`sourceRevisionId\` | 0..1 | Explicit baseline/checkpoint identifier |
| \`alignments\` | 0..* | Active source/target correspondences |
| \`archivedAlignments\` | 0..* | Retained but inactive correspondences |
| \`provenance\` | 0..* | Creation, editing, generation and review events |

**REQ-TRN-020:** Source and target language tags MUST be nonempty, well-formed BCP 47 tags; a processor MUST NOT substitute the interface locale for the manuscript's declared language.

**REQ-TRN-021:** The same target-language tag MAY occur on multiple independently identified variants; target and source languages MUST be distinct for a relationship designated as translation.

**REQ-TRN-022:** Every active alignment identifier MUST be unique within its enclosing translation relationship; an archived record MUST retain its former identity and provenance.

### 8.2 Alignment

Conceptual fields include alignment \`id\`, source object or range reference, source snapshot or fingerprint, target content, explicit notes, baseline, modification history and review decision. The translation object MUST NOT change the canonical identity of the referenced section, block or anchor.

**REQ-TRN-023:** A producer MUST preserve enough source reference and baseline evidence for a consumer to determine whether a translation applies to the current recognized source or to an earlier/unknown baseline.

**REQ-TRN-024:** If a source object is removed or no longer resolves, its target MUST NOT be silently deleted; the relationship MUST be reported missing, explicitly archived, or handled through an evidenced migration.

**REQ-TRN-025:** An unknown baseline or unsupported anchor resolution MUST NOT be reported as current.

A text fingerprint helps detect changes, but is not a proof of equivalence, authenticity or authorship. Fingerprint canonicalization and range anchors remain open for a normative wire profile.

### 8.3 Decisions and provenance

A decision separates the status \`draft\`/\`reviewed\`, equivalence \`unassessed\`/\`equivalent\`/\`adapted\`, review time and optional attributed scholarly agent. Provenance identifies \`human\` or \`machine\` origin and the known provider for machine output. Account identities and scholarly agents are distinct.

**REQ-TRN-026:** Editing target text or its equivalence decision MUST invalidate any prior review that is no longer applicable to that content.

**REQ-TRN-027:** An importer MUST NOT fabricate missing translator identities, reviewer approvals, revision baselines or source alignments for legacy content.

## 9. Processing model

### 9.1 Creation

A producer selects an identified source scope, reads source units, chooses a concrete target language and establishes a new variant with draft target alignments. Unknown or unsupported source constructs are reported rather than silently translated as plain prose.

### 9.2 Source changes and synchronization

Freshness is computed against current source identity, language, address and observable content baseline; it is not merely "newer manuscript revision implies stale". On source edit, the processor preserves translated text and identifies affected alignments. On explicit synchronization it accepts a new baseline and clears inapplicable review decisions. Newly encountered supported units become drafts. Missing units remain recoverable or archivable. Source-language replacement can require a new relationship.

**REQ-TRN-030:** Freshness evaluation MUST distinguish unchanged, changed and unresolved source evidence; an implementation MAY offer more detailed substates.

**REQ-TRN-031:** Synchronization MUST be an explicit attributable transition, not an invisible side-effect of editing the source.

### 9.3 Review and export

Review requires a reviewer decision about the actual target content and known source baseline. An exporter checks all covered supported source units, current alignment, nonempty target where required, assessed equivalence and valid review before asserting a complete reviewed proof. If those conditions fail, a draft or incomplete export MAY still be possible if clearly labelled.

**REQ-TRN-032:** A processor MUST NOT claim "complete, current and reviewed" when any in-scope required unit is missing, stale, empty, unassessed or unreviewed.

**REQ-TRN-033:** A target/parallel proof MUST identify source and variant and MUST escape untrusted content rather than executing source markup.

## 10. Validation and error handling

Processors distinguish syntax, semantic, referential, integrity and release-readiness diagnostics. The validator examines supported properties, unique IDs, source identity, BCP 47 languages, reference resolution, baseline integrity, timestamps, provenance and review consistency.

| Condition | Diagnostic | Expected treatment |
|---|---|---|
| Malformed recognized record or duplicate active ID | Error | Reject the operation or isolate the record; preserve unrelated data |
| Missing source object or unresolvable anchor | Missing/incomplete | Keep target, identify unresolved relationship; do not assert current |
| Source fingerprint differs | Stale | Preserve target; require explicit reassessment/review |
| Machine output marked automatically reviewed | Error | Reject unsupported review assertion |
| Unsupported target content, shape or extension | Unsupported | Preserve if safe and expose coverage limits |
| Unknown provider or incomplete historical baseline | Unknown/incomplete | Do not invent evidence or claim equivalence |

**REQ-TRN-040:** Errors, warnings, unsupported data and unavailable evidence MUST remain distinguishable in a validation report.

No OMI-SPEC-170 canonical JSON Schema or independent conformance corpus is currently accepted. Studio's local validator and test suite are implementation evidence only.

## 11. Extensibility

Implementations MAY store translation relationships in namespaced OMI extensions until a canonical serialization is adopted. Namespaces MUST avoid collisions with existing fields; processors MUST NOT reinterpret unknown extension members as normative OMI-SPEC-170 semantics.

**REQ-TRN-050:** A round-trip consumer that claims extension preservation MUST retain unknown safe translation extension members and other unrelated namespaces without reinterpreting them.

The experimental Studio namespace \`urn:omi:studio:translation:1\` and profile \`studio-translation-0.1\` are explicitly **not** the eventual canonical OMI-SPEC-170 wire namespace or version.

## 12. Versioning and compatibility

This specification follows the [OMI Versioning Policy](../governance/versioning-policy.md). Support declarations identify version and profile. A future normative schema may require explicit conversion from Studio's experimental extension.

- Compatible clarifications preserve existing semantic decisions and identifiers.
- Breaking property semantics, anchor interpretation, review transitions or serialization require a versioned migration contract.
- Migration MUST be non-destructive or explicitly disclose the information it cannot preserve.
- Implementations MUST NOT silently treat an unrecognized future profile as editable known data.
- Deprecation requires documented successors and a migration pathway; Draft status does not promise wire compatibility.

## 13. Interoperability

| Surface | Present draft relationship | Fidelity |
|---|---|---|
| Portable OMI JSON/extensions | Studio local ledger can round-trip | Profile-specific; no canonical 170 wire guarantee |
| Source ↔ target language editions | Conceptually separate variant identity | Separate published manuscript IDs not standardized |
| HTML text proof | Studio parallel or target text output | Lossy for scholarly structure and styles |
| JATS / DOCX / PDF publication | Future translation-aware profile | Not defined by this Draft |
| Human translation / DeepL provider | Common semantic provenance | External service configured separately |

**REQ-TRN-060:** An export or converter MUST report whether target output is a proof, a structured target manuscript, or a formally published edition.

Interoperability tests must distinguish direct round trips from conversions that lose notes, ranges, rich structures, references, scholarly inline elements or provenance.

## 14. Security, privacy, and integrity considerations

Source manuscripts and translator notes may be confidential or contain personal data. External machine translation can disclose unreleased research, identity data or licensed text. Display of source HTML can introduce XSS; translation-provider responses are untrusted. Fingerprints are change evidence, not signatures. Review state must not be confused with authorization.

**REQ-TRN-070:** A translation service integration MUST require authorization for external content disclosure consistent with the applicable workspace and confidentiality policy.

**REQ-TRN-071:** A renderer MUST escape or safely process untrusted source, target and notes before generating executable markup.

**REQ-TRN-072:** An importer MUST preserve explicit provenance and MUST NOT fabricate reviewer or provider assertions; access controls are delegated to the applicable permission model.

Implementations SHOULD minimize retention of provider requests and secrets and SHOULD prevent a delayed translation response from being accepted into a different active manuscript.

## 15. Accessibility considerations

Panels SHOULD expose source/target language metadata, logical reading order, keyboard-operated alignment navigation and text alternatives for supported images. Review, stale and missing states SHOULD be conveyed in text, not color alone. Parallel exports SHOULD set accurate \`lang\` attributes and provide an understandable reading sequence. Accessibility semantics of a fully structured translated publication are separately specified by the applicable publishing profile.

## 16. Internationalisation considerations

Manuscript languages MUST remain distinct from the interface locale and from each contributor's preferred languages. Implementations SHOULD preserve regional/script variants such as \`pt-BR\`, \`zh-Hant\` and historical or mixed-language content without coercing them to UI language choices. They SHOULD preserve bidirectional text and provide appropriate directionality on export. A scope's source language is not necessarily the language of every included quotation.

## 17. Examples

### 17.1 Informative, profile-neutral scenario

A Hungarian source manuscript has a German target variant, aligned to two section titles and three paragraphs. The author edits one source paragraph. The old target paragraph remains, but its alignment is stale. The translator selects "Update source alignment", revises the German paragraph, explicitly records the equivalent/adapted decision and marks the alignment reviewed. Only current, reviewed, covered units can be described as a complete reviewed text proof. The author was never prevented from editing the Hungarian source.

### 17.2 Existing Studio extension (not normative)

Studio serializes variant records in \`extensions["urn:omi:studio:translation:1"]\`. Its recorded source fingerprints use SHA-256 over deterministic source-context JSON, excluding ephemeral image preview URLs. The profile supports manuscript and section translation in the panel, 20 alignment editors per page, explicit review, archiving, DeepL-preview adoption, state-history persistence and HTML text proofs. The full [implementation profile](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/main/docs/omi-spec-170-translation-model.md) describes its actual field names and supported source types.

A canonical JSON Schema, positive/negative normative fixtures and an independent reference validator are pending. No sample in this Draft should be interpreted as a committed wire schema.

## 18. Normative references

- [OMI-SPEC-100 — Document Model](./document-model.md)
- [OMI-SPEC-110 — Anchor Model](./anchor-model.md)
- [OMI-SPEC-120 — Scholarly Object Model](./core/scholarly-object-model.md)
- [OMI-SPEC-140 — Metadata Model](./metadata-model.md)
- [OMI-SPEC-150 — Identity and Contributor Model](./identity-contributor-model.md)
- [OMI-SPEC-160 — Versioning and Change Model](./versioning-change-model.md)
- [OMI Versioning Policy](../governance/versioning-policy.md)
- [IETF BCP 47 — Language Tags](https://www.rfc-editor.org/info/bcp47)

## 19. Informative references

- [Studio OMI-SPEC-170 experimental implementation profile](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/main/docs/omi-spec-170-translation-model.md)
- [Studio translation-model source](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/main/src/model/translation.ts)
- [Studio translation documentation](../studio/manuscript-translation.md)
- [OMI Implementation Status Matrix](../governance/implementation-status-matrix.md)

## 20. Implementation status

The Studio reference implementation merged in [PR #782](https://github.com/open-manuscript-initiative/open-manuscript-studio/pull/782). The experimental \`studio-translation-0.1\` profile implements named language variants; source text/anchor fingerprints and change detection; draft, equivalence and review states; optional agent provenance; explicit synchronization and archival; preservation in portable OMI state; DeepL preview acceptance; and constrained parallel/target text proofs. It has focused unit, build and Playwright evidence.

These tests validate the local implementation profile, **not** the canonical OMI-SPEC-170 draft. The canonical record is new and has no independent conformance evidence.

## 21. Unresolved issues

1. Adopt a canonical JSON Schema and durable, editor-independent text-range anchoring.
2. Specify independent target manuscript identities, full structured target editing and revision graphs.
3. Model many-to-many, split/merge and cross-manuscript alignments without data loss.
4. Define equivalence, human-review roles and mixed-language source semantics for conformance classes.
5. Standardize whole-manuscript coverage and publication profiles for JATS, DOCX, HTML and PDF.
6. Publish positive/negative fixtures, semantic validator, migration guide and independent interoperability results.
7. Integrate assignment and authorization decisions with OMI-SPEC-190 without locking authors.

## 22. Change history

| Version | Date | Change |
|---|---|---|
| 0.1.0 | 2026-10-31 | Initial canonical Draft derived from and critically separated from Studio's experimental translation profile. |

## 23. Acknowledgements

Open Manuscript Initiative contributors and the Open Manuscript Studio reference implementation maintainers.
