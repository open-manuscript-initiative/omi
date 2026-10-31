---
id: import-export-model
title: OMI-SPEC-340 — Import and Export Model
sidebar_label: Import and Export Model
description: Normative draft for source-to-OMI and OMI-to-target transformations, mapping profiles, preservation, loss reporting, and round-trip evidence.
keywords:
  - Open Manuscript Initiative
  - OMI-SPEC-340
  - import
  - export
  - interoperability
---

# OMI-SPEC-340 — Import and Export Model

## Document metadata

| Field | Value |
|---|---|
| Identifier | `OMI-SPEC-340` |
| Title | Import and Export Model |
| Version | `0.1.0` |
| Status | Draft |
| Document type | Normative draft with informative examples |
| Normative language | English |
| Editors | OMI maintainers |
| Last updated | 2026-10-31 |
| Replaces | None |
| Replaced by | None |
| Depends on | `OMI-SPEC-100`, `OMI-SPEC-140`, `OMI-SPEC-180`, `OMI-SPEC-220`, `OMI-SPEC-320` |
| Related specifications | `OMI-SPEC-110`, `OMI-SPEC-130`, `OMI-SPEC-160`, `OMI-SPEC-170`, `OMI-SPEC-210`, `OMI-SPEC-225`, `OMI-SPEC-230`, `OMI-SPEC-240`, `OMI-SPEC-330`, `OMI-SPEC-350` |
| Used by | `OMI-SPEC-350` |
| Schemas | No canonical OMI-SPEC-340 mapping or report schema published |
| Profiles | Import Mapping; Export Mapping; Loss-Aware Exchange; Round-Trip Assessment (Draft conceptual profiles) |
| Implementation status | [OMI Implementation Status Matrix](../governance/implementation-status-matrix.md) |
| Issue tracker | [OMI specification issues](https://github.com/open-manuscript-initiative/omi/issues) |

## 1. Abstract

This specification defines interoperable import and export operations between an identified source representation, a canonical OMI manuscript, and an identified target representation. It describes transformation jobs, versioned mappings, semantic preservation, object identity, citations and references, assets, extensions, provenance, failure and loss reports, and qualified round-trip comparisons.

A successful file conversion is not necessarily lossless, editable, reversible, or suitable for publication. An implementation MUST disclose which of those properties it can substantiate. The specification does not prescribe a particular parser, editor, converter library, source-file format, or rendering engine.

## 2. Status of this document

This is **OMI-SPEC-340 Draft 0.1.0**. Its data vocabulary, report serialization, profile registry and test corpus may change incompatibly before a stable edition. The canonical OMI specification registry determines the effective lifecycle state after this draft is merged. No conformant converter, certified format adapter, or approved conformance suite is implied by publishing this document.

Implementations describing support MUST identify the exact specification revision and mapping-profile revision they implement.

## 3. Conformance

### 3.1 Roles and classes

- **Import processor:** converts a declared external representation into an OMI manuscript or explicitly reports failure.
- **Export processor:** converts a declared OMI manuscript to an external representation or explicitly reports failure.
- **Mapping-profile producer:** publishes transformation mappings and their declared preconditions.
- **Transformation-report consumer:** interprets, retains, or audits import/export results.
- **Round-trip evaluator:** compares independently preserved input and returned data against a declared equivalence policy.

Claims MAY combine roles. Import and export are separately claimed; one does not imply the other. A profile that claims lossless behavior must additionally meet the relevant `OMI-SPEC-320` preservation rules.

### 3.2 Normative language

**MUST**, **MUST NOT**, **SHOULD**, **SHOULD NOT**, and **MAY** are interpreted under BCP 14 only when capitalized. Requirement IDs `REQ-IO-001` onward are stable references for future fixtures and claim manifests.

**REQ-IO-001:** A processor MUST declare the direction, source format and version (or detection uncertainty), target format and version, and the exact mapping profile before transformation.

**REQ-IO-002:** An implementation MUST NOT label an operation successful if required output is unavailable, malformed, or failed its declared minimum validation.

**REQ-IO-003:** A processor MUST preserve the original input or an immutable recoverable reference to it until a requested destructive replacement is independently authorized and completed.

**REQ-IO-004:** A processor MUST report unsupported, unknown, transformed, omitted and unverifiable content separately; it MUST NOT silently label omitted material as preserved.

**REQ-IO-005:** Any lossless or round-trip claim MUST identify its equivalence scope, exclusions, tested input class, mapping versions and supporting evidence.

## 4. Scope

Covered: semantic import/export, source identification, parsing boundaries, mapping, target projections, preservation, loss diagnostics, provenance, recovery, version negotiation and round-trip evaluation. Formats MAY include DOCX, ODT, HTML, JATS XML, EPUB, IDML, LaTeX, bibliography records, `.omi.json` and `.omi` containers when an adapter exists.

Excluded: native source-format standards; page rendering algorithms (`OMI-SPEC-240`); publication workflow (`OMI-SPEC-230`); physical container layout (`OMI-SPEC-330`); transport authentication or repository APIs; copyright clearance; scholarly correctness; and claims that every source feature has an OMI equivalent.

## 5. Terminology

- **Source artifact:** original unmodified data and its declared format/identity.
- **Canonical state:** a manuscript represented in accordance with applicable OMI semantic and file-format specifications.
- **Mapping profile:** versioned source/target semantic rule set, with requirements, fallbacks and feature support.
- **Transform operation:** one import, export or round-trip evaluation job.
- **Preserved:** a property retains its declared meaning and referential identity within the comparison scope.
- **Normalized:** representation changed under an identified rule without changing its declared meaning.
- **Degraded:** meaning or capability survives only partially (for example, editable notes become plain text).
- **Omitted:** data is absent from target representation.
- **Opaque preservation:** unsupported data retained without interpretation for later restoration.
- **Round trip:** source → canonical → source, or canonical → target → canonical, evaluated against a declared invariant set; not byte identity by default.

## 6. Design principles

Canonical semantics take precedence over the styling conventions of source applications. The importing author remains able to revise imported content, including headings and attributed text: diagnostics, source attribution and protection of evidence MUST NOT introduce an unexplained editor lock. Transformation is non-destructive, explicit, reproducible within its declared environment, traceable, independently verifiable and privacy-aware. Unknown extensions and external assets are neither trusted nor fetched merely because they are referenced.

## 7. Model overview

A transformation consists of (1) immutable source receipt; (2) format/sniffing and policy check; (3) safe parse; (4) profile selection and capability negotiation; (5) mapping to or from semantic OMI objects; (6) validation; (7) candidate output and asset inventory; (8) loss and provenance report; (9) explicit commit/acceptance. A failed step leaves source intact.

An export may be a **semantic interchange** projection (such as JATS or DOCX) or a **publication artifact** (such as PDF). A publication projection is not presumed to be re-importable as a fully editable manuscript.

## 8. Data model

### 8.1 Transformation request

**REQ-IO-006:** A request MUST identify the operation, input identity or digest, source and target formats, mapping-profile identifier/version, options affecting semantics, and execution policy. If a format/version is autodetected, the request/result MUST record that detection and its confidence or uncertainty.

**REQ-IO-007:** A request SHOULD identify the applicable OMI-SPEC-320 file-format version, required feature set, permitted external-resource policy, and size/depth/time resource limits.

### 8.2 Mapping profile

A mapping profile describes source constructs, target constructs, cardinality, ordering, identifiers, metadata semantics, notes, citations, bibliographic records, cross-references, media, tables, languages, revisions, rights, source attribution, unknown features, fallbacks and anticipated loss.

**REQ-IO-008:** A mapping profile MUST have a stable identifier, immutable version or digest, supported source/target version ranges, direction, mandatory preconditions and a documented unsupported-feature policy.

**REQ-IO-009:** Mapping of addressable semantic objects MUST preserve stable identities where meaningful; generated identities MUST be unique and a source-to-target identity map MUST be available in the report or protected evidence record.

**REQ-IO-010:** Reference targets, anchors, citations, note calls and asset references MUST be checked after mapping. Broken or unresolved references MUST be reported with location and severity, not silently retargeted.

**REQ-IO-011:** When a source concept has no target equivalent, a processor MUST either preserve it as identified opaque data, apply a disclosed fallback, or report its omission; it MUST NOT invent semantic equivalence.

**REQ-IO-012:** Mapping MUST preserve document language and language-of-span information when supported; if the target cannot encode them, the report MUST identify the affected objects.

### 8.3 Result, diagnostics and loss report

Each job records the source and output identifiers/digests where available, direction, mapping and engine versions, execution status, validation profile/outcome, counters, event-level diagnostics, asset treatment and retained evidence. Suggested loss-event fields: `code`, `severity`, `disposition`, `sourceLocator`, `targetLocator`, `feature`, `reason`, `fallback`, `reversibility` and `evidence`.

**REQ-IO-013:** A result MUST distinguish `completed`, `completed-with-loss`, `failed` and `cancelled`; it MUST NOT use `completed` when declared mandatory invariants failed.

**REQ-IO-014:** For each known potentially material loss, a report MUST identify source location or object, affected feature, action taken, and user-visible consequence. Severity and exact-loss counts MUST NOT be inferred from an incomplete scan.

**REQ-IO-015:** If diagnostics or asset inspection are incomplete, the report MUST explicitly identify incomplete coverage and MUST NOT assert zero loss.

**REQ-IO-016:** A result MUST link to validation evidence produced under `OMI-SPEC-180` when validation is claimed; successful parsing alone MUST NOT be presented as manuscript validity.

## 9. Processing model

### 9.1 Import

**REQ-IO-017:** An import processor MUST treat the source as untrusted, validate declared source-format constraints where possible, and produce a separately reviewable OMI candidate rather than mutating an existing manuscript in place without authorization.

**REQ-IO-018:** An import MUST NOT turn source attribution, section origins, or import-history records into immutable manuscript content. Authors MUST retain normal editing rights subject only to independently declared access-control policy.

### 9.2 Export

**REQ-IO-019:** An exporter MUST distinguish canonical manuscript data from output-specific formatting and MUST NOT persist pagination, layout-only transforms, or target formatting into the canonical manuscript as semantic edits.

**REQ-IO-020:** Exports MUST record whether tracked changes, annotations, review confidentiality, revision histories, linked media and non-public metadata were included, excluded or redacted by policy. Absence of private data MUST NOT be mistaken for accidental loss.

### 9.3 Commit and rollback

**REQ-IO-021:** No failed import/export MUST overwrite its input. Cancellation or a transaction failure MUST leave an identifiable recoverable pre-operation state.

**REQ-IO-022:** Repeated processing with the same immutable input, profile, dependencies and declared deterministic environment SHOULD produce semantically equivalent output; known nondeterminism MUST be documented.

## 10. Validation and error handling

**REQ-IO-023:** Preflight MUST distinguish invalid source, unsupported version, unavailable mapping, prohibited resource, resource-limit exceedance and authorization failure. The diagnostic code MUST be stable for a given published profile.

**REQ-IO-024:** A conversion that cannot safely complete its declared mandatory semantic invariants MUST fail or return a non-committable candidate; it MUST NOT silently downgrade those invariants.

**REQ-IO-025:** Consumers MUST keep converter execution errors distinct from errors in the source content and from missing evidence.

Validation reports use `OMI-SPEC-180` semantics; `OMI-SPEC-350` governs what evidence can support a claim that an importer/exporter conforms.

## 11. Extensibility

**REQ-IO-026:** Unknown namespaced OMI data MUST be preserved when the chosen profile claims opaque round-trip support; otherwise the processor MUST identify where it would be discarded and require an explicit non-lossless disposition.

Mapping extensions SHOULD use stable URIs, independent versions, feature flags and deterministic precedence. Vendor-specific extensions MUST NOT redefine an OMI core property.

## 12. Versioning and compatibility

A profile version changes when a mapping or fallback could produce observably different semantics. Engine version, profile version, file-format version and external source-format versions are distinct.

**REQ-IO-027:** Results and round-trip evidence MUST pin all material versions and indicate when a migration has occurred. Implementations MUST NOT treat an unknown major source-format or OMI-format version as known-compatible by default.

**REQ-IO-028:** A migration MUST report identity remapping, default insertion, omitted structures and irreversible actions; any substantive mapping revision SHOULD trigger fixture and compatibility review.

## 13. Interoperability and round-trip criteria

The minimum candidate invariants are document identity (where preservable), text content, semantic hierarchy, author/contributor attribution, language, citation and note linkage, asset references, metadata meaning and extension survival. Layout equivalence, binary equivalence and historical revision fidelity are separate optional claims.

**REQ-IO-029:** A round-trip evaluator MUST declare comparison direction, invariant set, normalization allowances, excluded features, fixture hashes and a pass/fail/indeterminate result per invariant.

**REQ-IO-030:** A comparison whose required evidence is absent MUST be `indeterminate` for that invariant, never `pass`. Different pagination alone MUST NOT be reported as semantic loss unless pagination is in the declared scope.

Proposed profile tests: clean semantic DOCX import; unresolved footnote anchor; missing linked asset; nested JATS sections and xrefs; tracked-change exclusion; private review metadata redaction; unsupported IDML styles; cross-document bibliography identifiers; unknown extension retention; round-trip with multilingual runs; malicious archive entry; corrupted/oversized input.

## 14. Security, privacy and integrity considerations

**REQ-IO-031:** Processors MUST bound resource consumption, reject unsafe archive paths and active payload execution, and MUST NOT fetch remote resources or dereference external entities without an explicit allowlist and authorization.

**REQ-IO-032:** Import/export processing MUST apply the invoking principal's authorization and confidentiality policy before emitting review, identity, credentials, private annotations or unlicensed external assets.

Content digests and provenance are evidence of bytes and transformations, not proof of copyright, authenticity or scholarly correctness. Temporary files, logs and retained originals require defined access and retention policies.

## 15. Accessibility considerations

**REQ-IO-033:** A mapping profile MUST document accessibility-relevant transformations (heading roles, alternative text, table headers, language marks, logical reading order and note navigation); material regressions MUST be reportable.

## 16. Internationalisation considerations

**REQ-IO-034:** Processors MUST preserve Unicode text and represent language/script metadata according to the applicable semantic model; unsupported RTL, vertical-script, bidi or hyphenation semantics MUST be declared rather than silently lost. Diagnostics SHOULD be localizable while preserving machine-readable codes.

## 17. Examples (informative)

A *conceptual* loss-aware export result, not a published JSON schema or a conformance fixture:

~~~json
{
  "model": "OMI-SPEC-340",
  "specVersion": "0.1.0",
  "operation": "export",
  "source": {"format": "omi-manuscript", "version": "0.3.0", "digest": "sha256:example"},
  "target": {"format": "docx"},
  "mapping": {"id": "example:docx-semantic", "version": "0.1.0"},
  "status": "completed-with-loss",
  "coverage": "complete",
  "lossEvents": [{
    "code": "TARGET_NO_EDITABLE_REVISION_HISTORY",
    "severity": "warning",
    "disposition": "omitted",
    "sourceLocator": "revisionHistory",
    "feature": "portable-revision-history",
    "reason": "selected profile excludes historical graph"
  }]
}
~~~

The example values are illustrative; `sha256:example` is not an actual digest. The project has not approved a canonical wire schema or fixtures for OMI-SPEC-340.

## 18. Normative references

- [OMI-SPEC-100 — Document Model](./document-model.md)
- [OMI-SPEC-140 — Metadata Model](./metadata-model.md)
- [OMI-SPEC-180 — Validation Model](./validation-model.md)
- [OMI-SPEC-220 — Bibliographic Record Model](./bibliographic-record-model.md)
- [OMI-SPEC-320 — File Format](./file-format.md)
- [OMI Specification Registry](../governance/specification-registry.md)
- BCP 14 (RFC 2119 and RFC 8174), normative-keyword interpretation

## 19. Informative references

- [OMI-SPEC-240 — Rendering and Publication Profile Model](./rendering-publication-profile-model.md)
- [OMI-SPEC-330 — Container Architecture](./container-architecture.md)
- [OMI-SPEC-350 — Capability and Conformance Model](./capability-conformance-model.md)
- [Roadmap to OMI 1.0](../governance/roadmap-to-omi-1.0.md)

## 20. Implementation status

Studio has DOCX import and several export paths; these do not by themselves demonstrate compliance with this draft. No canonical OMI-SPEC-340 report schema, approved mappings, requirement-mapped fixture corpus, validated round-trip suite or independent implementation evidence is yet published. Refer to the [implementation matrix](../governance/implementation-status-matrix.md) for the evidence boundary.

## 21. Unresolved issues

1. Canonical mapping-profile and transformation-report JSON Schema, diagnostic code registry and schema-version negotiation.
2. Minimum invariant sets for Core Semantic Exchange, Preservation Round Trip and Publication Projection.
3. Format-specific mappings and corpus ownership (DOCX, ODT, JATS, HTML, EPUB, IDML, bibliography/metadata exchanges).
4. Public privacy-safe fixture licenses, conformance runner and independent verifier.
5. Normative minimum retention rules for original files, protected media and source provenance.

## 22. Change history

| Version | Date | Change |
|---|---|---|
| 0.1.0 | 2026-10-31 | First canonical Draft: transformation semantics, mapping profiles, loss/provenance reporting and round-trip rules. |

## 23. Acknowledgements

Prepared for review by the Open Manuscript Initiative community; no independent conformance certification is implied.
