---
id: validation-model
title: OMI-SPEC-180 — Validation Model
sidebar_label: Validation Model
description: Draft specification for profile-based validation, structured diagnostics, evidence binding, coverage, report integrity and non-destructive scholarly workflows.
keywords:
  - Open Manuscript Initiative
  - OMI-SPEC-180
  - validation
  - diagnostic report
  - profile
  - conformance
---

# OMI-SPEC-180 — Validation Model

## Document metadata

| Field | Value |
|---|---|
| Identifier | `OMI-SPEC-180` |
| Title | Validation Model |
| Version | `0.1.0` |
| Status | Draft |
| Document type | Normative draft (requirements); examples and Studio-specific material informative |
| Normative language | English |
| Editors | OMI maintainers |
| Last updated | 2026-10-31 |
| Replaces | None |
| Replaced by | None |
| Depends on | `OMI-SPEC-000`, `OMI-SPEC-100`, `OMI-SPEC-110`, `OMI-SPEC-120`, `OMI-SPEC-130`, `OMI-SPEC-140` |
| Related specifications | `OMI-SPEC-160`, `OMI-SPEC-170`, `OMI-SPEC-230`, `OMI-SPEC-240`, `OMI-SPEC-320`, `OMI-SPEC-330`, `OMI-SPEC-350` |
| Schemas | No canonical OMI-SPEC-180 report schema published |
| Profiles | Authoring, exchange, and publication-preflight (conceptual examples; profile manifests require explicit versions) |
| Reference implementation | [Studio experimental profile and implementation PR #783](https://github.com/open-manuscript-initiative/open-manuscript-studio/pull/783) |
| Implementation status | [OMI Implementation Status Matrix](https://openmanuscript.org/docs/governance/implementation-status-matrix/) |
| Issue tracker | [OMI specification issues](https://github.com/open-manuscript-initiative/omi/issues) |

## 1. Abstract

OMI-SPEC-180 specifies the meaning of profile-based validation of scholarly manuscript states, relationships, history and publication prerequisites. It distinguishes a known document defect from an unperformed check, inaccessible evidence, unrecognized extension, diagnostic truncation or execution failure. Validation results are reproducible evidence-bound observations, not an endorsement of scholarly correctness or a publication certificate.

The model defines validation subjects and profiles; checks and coverage; structured, addressable diagnostics; independent outcome and completeness; and separate machine-readable reports. A report may describe a mutable working state relative to an identifiable committed base, but MUST NOT misrepresent uncommitted edits as a committed revision. A source change can make a previously recorded report stale without making the manuscript uneditable.

This initial Draft is independent of any one editor, service or serialization. Open Manuscript Studio offers an [experimental local implementation](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/feat/omi-spec-180-validation-model/docs/omi-spec-180-validation-model.md), including its own JSON Schema, report fixtures and checks. These are evidence for design review, **not** accepted OMI-SPEC-180 canonical wire artefacts or normative conformance results.

## 2. Status of this document

This is an OMI **Draft 0.1.0** submitted for review. It is not Stable, not a certification standard and not a guarantee of backwards-compatible report exchange. The [Specification Registry](https://openmanuscript.org/docs/governance/specification-registry/) is authoritative for lifecycle status; the proposed Reserved-to-Draft transition becomes effective after acceptance and merge of the corresponding documentation PR.

This document makes requirements testable where practical but does not claim that all normative requirements have a published canonical schema or conformance suite. A reported implementation version or check identifier MUST NOT be construed as formal adoption of an absent upstream validation schema.

## 3. Conformance

### 3.1 Conformance classes

- **Validation profile producer:** defines a named, versioned selection of checks and evidence requirements.
- **Validation executor:** examines an identified source snapshot and emits structured results.
- **Validation report producer:** serializes those results with source binding and coverage information.
- **Validation report consumer:** imports, interprets and preserves results without inventing evidence or changing source content.
- **Validation report validator:** tests report syntax and semantic consistency.

An implementation MAY support multiple classes. Claims MUST name exact specification/profile versions, relevant checks, supported data surfaces, exception policies and unexamined domains. No implementation can claim formal OMI-SPEC-180 conformance until the canonical artefacts and applicable conformance tests are reviewed and published.

### 3.2 General requirements

**REQ-VAL-001:** A validator MUST identify the validation subject and the profile/version under which its checks ran.

**REQ-VAL-002:** A profile MUST enumerate the expected checks and their versions. A missing, unavailable or unrecognized required check MUST NOT be interpreted as passed.

**REQ-VAL-003:** A report MUST separately represent document findings, skipped checks and execution failures; absence of findings alone MUST NOT prove validation completion.

**REQ-VAL-004:** Each diagnostic MUST identify its originating check, stable machine-readable code and severity. Addressable findings MUST include a location in the declared source representation.

**REQ-VAL-005:** A report MUST distinguish **valid**, **invalid** and **indeterminate** outcomes from whether coverage was **complete** or **incomplete**.

**REQ-VAL-006:** A known document error MUST remain observable even if other required checks were unavailable, skipped or truncated.

**REQ-VAL-007:** When no known document error is found but required coverage is incomplete, the outcome MUST be **indeterminate**, not valid.

**REQ-VAL-008:** Validation MUST NOT silently repair, erase, lock or otherwise mutate the scholarly source as a side effect of checking it.

**REQ-VAL-009:** A report producer MUST bind results to the inspected source state and MUST NOT represent a working-state snapshot as an immutable committed revision.

**REQ-VAL-010:** A report consumer MUST NOT treat a report as current after relevant source/profile evidence has changed unless freshness has been re-established.

**REQ-VAL-011:** A validator MUST preserve the distinction between checking a loaded semantic manuscript and checking the syntax, bytes or authenticity of a raw imported file.

**REQ-VAL-012:** An authoring or publication-preflight report MUST NOT be presented as a substitute for the actual rendering, JATS/XML validation, signature, permission or independent release gates.

## 4. Scope

Covered concepts: validation subjects; application profiles and check manifests; check execution and evidence availability; structured diagnostics and scholarly object references; outcome, completeness and truncation; report portability, freshness and non-mutation; boundary declarations and privacy.

Not defined here: a mandatory validation UI; one preferred editor or parser; provider-specific code-scanning tools; a universal ontology of all rule codes; academic truth; file signature verification; actual publication rendering, DTD/JATS4R and PDF analysis; copyright and editorial authorization decisions; automatic source modification or publication blocking policy.

Validation of specific domains is defined by the specification governing that domain. OMI-SPEC-180 describes how such results are collected and reported. A local profile can cover source identifiers and hierarchy, anchored notes/citations/xrefs, history, translations, portable serialization, assets and publisher requirements without making all such domain-specific rules normative under OMI-SPEC-180.

## 5. Terminology

- **Subject:** an identified manuscript or scholarly object state being assessed, including its relevant evidence context.
- **Working-state validation:** a validation over a detached mutable state captured at a defined instant; not a claim of commit immutability.
- **Profile:** named and versioned intended purpose with a fixed manifest of required checks.
- **Check:** independently identified, versioned validation procedure applied to a declared scope.
- **Diagnostic:** a structured finding with a machine-readable rule code, severity and optional source/object location.
- **Check execution failure:** failure of the checking procedure itself, rather than a finding that the manuscript is defective.
- **Incomplete coverage:** one or more required checks or aspects of evidence were not fully examined.
- **Truncation:** omission of findings beyond a declared processing/reporting limit.
- **Outcome:** `valid`, `invalid` or `indeterminate`; it concerns only the declared profile and inspected evidence.
- **Freshness:** whether a report still corresponds to a source state/profile/evidence set.
- **Release gate:** an external workflow decision about publication or distribution; a validation result alone need not implement such a gate.

The [OMI terminology](https://openmanuscript.org/docs/governance/terminology/) also applies.

## 6. Design principles

This section is informative. Validation should support research rather than impede it: source content stays freely editable, unresolved scholarly work is distinguishable from structural defects, and authors receive actionable diagnostics. Unknown coverage must be disclosed instead of manufactured. Stable codes and locations enable navigation and cross-platform exchange; sensitive manuscript text and exceptions need not be copied into reports. Release-specific checks belong to their separate publication stages.

## 7. Model overview

~~~text
Identified OMI state + revision/history/asset evidence
                           |
                   detached snapshot
                           |
            named/versioned validation profile
                           |
        +------------------+-------------------+
        |                  |                   |
  domain check A     domain check B       domain check C
        |                  |                   |
     findings          skipped             failure
        +------------------+-------------------+
                           |
                report: subject binding
                  check status + coverage
                  structured diagnostics
                  outcome + completeness
                  exclusions / limitations
                           |
           current? compare against source/profile
~~~

The diagram is informative. A validation report is an independent observation artifact, not an additional element inserted into the state whose digest it reports.

## 8. Data model

### 8.1 Validation subject and binding

| Conceptual property | Cardinality | Meaning |
|---|---:|---|
| `manuscriptId` | 0..1 | Source scholarly manuscript identifier |
| `headRevisionId` | 0..1 | Actual committed revision baseline, if available |
| `stateDigest` | 0..1 | Digest of precisely the inspected mutable or committed state |
| `evidenceDigest` | 0..1 | Digest of revision envelope/history or relevant integrity evidence |
| `snapshotCapturedAt` | 0..1 | Captured time when required for the profile |
| `bindingMethod` | 1 | Declared method to identify what was inspected |

Empty/invalid identifiers MAY be represented as missing so that the report can diagnose them. Missing identifiers MUST NOT be replaced by invented IDs. The digest method MUST declare its canonicalization and excluded fields; a digest does not establish authorship or signature validity.

**REQ-VAL-020:** A report producer MUST distinguish absent evidence from valid evidence and MUST NOT fabricate revision identifiers, snapshot digests or asset checksums.

**REQ-VAL-021:** When working-state contents are inspected, the report MUST bind to those contents even if they have not been committed.

**REQ-VAL-022:** A producer MUST capture a stable view before executing asynchronous checks or explicitly document and detect any changing-state execution mode.

### 8.2 Profile and check manifest

Profiles are identified by name, version, required check list, their versions and declared applicability. Examples of purposes:

| Profile purpose | Typical checks | Limit |
|---|---|---|
| Authoring | Object identities, references, inline anchors, current available history, recognized translation evidence | Incomplete scholarly scholarship and optional extensions remain distinct |
| OMI exchange | Authoring plus canonical interchange constraints and referenced local asset evidence | Does not guarantee fidelity of future non-OMI outputs |
| Publication preflight | Exchange plus selected publisher metadata/accessibility constraints | Does not replace actual renderer, DTD, signature or authorization gates |

These are illustrative purposes, not required universal check bundles or endorsement of Studio's local profile names.

**REQ-VAL-023:** A profile manifest MUST provide a deterministic set of required checks for its declared version.

**REQ-VAL-024:** A check result MUST identify its check, version, status, completeness and associated diagnostic references.

### 8.3 Diagnostic model

A diagnostic has a unique report-local identifier, originating check ID, stable machine code, severity (`error`, `warning` or `info`), and where applicable a location such as an RFC 6901 JSON Pointer plus an optional scholarly object identifier. Location paths are relative to the declared inspected representation, not necessarily direct editor cursor positions.

**REQ-VAL-025:** A report validator MUST reject duplicate diagnostic IDs, references to nonexistent checks and reported summary counts inconsistent with retained diagnostics.

**REQ-VAL-026:** Diagnostic locations MUST identify the inspected representation; implementations MUST NOT silently reinterpret them as canonical scholarly anchors unless an explicit mapping exists.

**REQ-VAL-027:** A report MAY omit sensitive prose or exception messages while retaining machine-readable codes and paths.

### 8.4 Outcome and coverage

Check statuses SHOULD include `pass`, `fail`, `skipped`, `error`, or an explicitly mapped equivalent. Coverage is an independent `complete` flag or a richer evidence coverage record. An error finding indicates a known document issue. An execution `error` means the check itself failed.

| Known error-level document finding? | Required coverage complete? | Overall outcome |
|---|---|---|
| Yes | Yes | `invalid` |
| Yes | No | `invalid`, and `complete=false` |
| No | Yes | `valid` |
| No | No | `indeterminate` |

**REQ-VAL-028:** The aggregate outcome MUST follow these conditions for its declared profile, independently of diagnostic warnings and information messages.

**REQ-VAL-029:** A producer MUST report any diagnostic truncation; a truncated required check MUST NOT be marked complete.

**REQ-VAL-030:** Counts MUST identify whether they describe retained findings or include omitted findings; unknown omitted counts MUST NOT be invented.

### 8.5 Report envelope

An interchangeable report SHOULD include: report identity, creation time, format and report version, related OMI specification, declared profile and ruleset, subject binding, check results, structured diagnostics, summary, and explicit exclusions. Authentication and signing evidence MAY be supplied by another spec; its absence MUST NOT be disguised as a verified signature.

**REQ-VAL-031:** A report consumer MUST NOT treat import of a report as import of its source manuscript or as authority to change manuscript content.

**REQ-VAL-032:** A report validator MUST verify the declared profile/check manifest and semantic consistency, not only JSON shape.

## 9. Processing model

1. Resolve the requested profile and expected check manifest.
2. Identify the subject, committed base and any available integrity evidence.
3. Capture a stable inspected state before async processing.
4. Execute each applicable check, isolating execution failures so remaining checks can proceed.
5. Retain explicit check status, coverage, failures, skipped areas and diagnostic locations.
6. Apply bounded output limits with disclosed truncation rather than silently dropping evidence.
7. Derive aggregate outcome and completeness independently.
8. Serialize a standalone, source-bound report with exclusion declarations.
9. On source/profile changes, report staleness or rerun validation; do not silently recertify a changed manuscript.

**REQ-VAL-040:** A failed check execution MUST NOT suppress successful independent checks or be recorded as document failure without evidence.

**REQ-VAL-041:** A processor MUST NOT automatically retrieve external resources or transmit manuscript content to an external service merely to complete validation, unless separately authorized and declared.

**REQ-VAL-042:** A local payload failure MUST be distinguished from an inaccessible asset store; the former may establish a document error, the latter leaves coverage incomplete.

**REQ-VAL-043:** Given the same inspected state, declared profile, supported check set, available evidence and policy, a processor MUST produce semantically equivalent check outcomes and diagnostic codes/locations; report IDs and execution timestamps MAY differ.

The producing system MAY provide navigation, filtering and pagination. Such UI choices do not form part of normative report semantics.

## 10. Validation and error handling

Validation occurs at multiple independent boundaries:

- **Raw input:** byte decoding, archive, JSON/XML syntax, parser limits and resource safety, prior to semantic manuscript validation.
- **Manuscript semantics:** object IDs, graph structure, references, fields and domain policies.
- **Evidence:** revisions, digests, stored assets and profile availability.
- **Report integrity:** shape, manifest, diagnostic linkage, counts, outcome and completeness.
- **Release outputs:** subsequent actual rendering, JATS/PDF, signature and publisher authorization checks.

| Condition | Classification | Required behavior |
|---|---|---|
| Recognized invalid manuscript field | Document error | Emit an addressable error finding |
| Unsupported extension or unknown translation profile | Incomplete / unsupported | Preserve safely, disclose uninspected coverage |
| Missing historical integrity digest | Incomplete evidence | Never claim the omitted history was verified |
| Missing local asset bytes | Document error when expected and positively absent | Identify asset and failing check |
| No access to an asset loader | Skipped/incomplete | Do not claim checked assets |
| Adapter exception | Execution error/incomplete | Sanitize details and continue independent checks |
| Output truncated to protect resources | Incomplete | Declare truncation and retain observed failure state |
| Previously current report after source edit | Stale | Prompt for revalidation rather than presenting it as current |

**REQ-VAL-050:** A validator MUST NOT silently drop a recognized failing check, invent missing source evidence or replace incomplete results with success.

**REQ-VAL-051:** A report consumer MUST reject a report that contradicts the declared manifest or internally inconsistent outcome/counts, or clearly identify it as unverified/unsupported without treating it as a valid report.

## 11. Extensibility

Profiles MAY add external domain-specific check packages, namespaced codes and additional evidence, provided they identify their versions and do not override core outcome/coverage semantics. Unknown future extensions MAY be preserved as opaque data by an application, but MUST NOT be silently evaluated as known checks.

**REQ-VAL-060:** An implementation MUST disclose unsupported required check families and MUST NOT claim that a local experimental report format is the canonical OMI-SPEC-180 report schema.

The Studio report identifier `urn:omi:studio:validation-report:0.1`, report format `omi-studio-validation-report` and ruleset `studio-validation-0.1` are local identifiers, not normative names for future OMI-SPEC-180 serialization.

## 12. Versioning and compatibility

Versioned report formats, check manifests, rule IDs and processing semantics must be considered independently. A change in the manifest that affects covered checks changes what a result means and therefore requires an explicit profile version transition. A digest without a declared canonicalization is not portable integrity proof.

**REQ-VAL-070:** Importers MUST identify supported profile/report versions and MUST NOT silently reinterpret unknown ruleset versions as current known results.

**REQ-VAL-071:** A producer claiming portable round-trip preservation MUST retain supported check references, diagnostic identities and evidence/exclusion metadata or report an explicit fidelity loss.

Future schemas SHOULD define a migration path for experimental profiles, including loss reporting and a versioned deprecation procedure. OMI-SPEC-180@0.1.0 is not wire-stable.

## 13. Interoperability

| Format / system | Supported conceptual relationship | State of interoperability |
|---|---|---|
| OMI-SPEC-320 manuscript | Validate a parsed semantic manuscript and portable export constraints | Semantic and raw parser boundaries distinct |
| OMI-SPEC-160 history | Bind report to revision and integrity evidence | Partial histories and absent digests explicitly reported |
| OMI-SPEC-170 translations | Report recognized translation state/freshness | Unsupported versions marked incomplete |
| OMI-SPEC-240 publication profiles | Evaluate active metadata/accessibility preflight rules | No renderer or publication certificate |
| Studio experimental JSON report | Versioned local schema, semantic validator, fixtures | Not a canonical 180 interchange contract |
| Future independent validators | Compare profile manifest, rule codes, locations, outcome and completeness | No independent conformance suite yet |

A cross-implementation test should include valid, invalid and indeterminate inputs; unavailable checks; incorrect manifests, summary counts and diagnostic references; changed subject digests; and deliberately truncated findings.

## 14. Security, privacy and integrity

The report can expose manuscript IDs, revision identifiers, internal pointers, relationships and metadata; that can be sensitive even without prose. User-authored text, URLs, provider credentials and exception messages can contain secrets. Reports must not be assumed public; their access policies derive from the source manuscript. External validators are a possible data-exfiltration boundary.

**REQ-VAL-080:** Report producers MUST avoid embedding manuscript text, raw exception messages or credentials unless an explicit, authorized report profile requires those fields.

**REQ-VAL-081:** Report consumers and renderers MUST treat diagnostics and paths as untrusted input and avoid code execution or unsafe markup.

**REQ-VAL-082:** Validation MUST NOT itself confer authorization, verified scholarly identity, a digital signature, an authenticity guarantee or an editorial publication decision.

**REQ-VAL-083:** Processors SHOULD apply resource bounds to large inputs, recursion, diagnostics and report serialization, disclosing incomplete coverage where needed.

## 15. Accessibility considerations

An author-facing implementation SHOULD expose severity and status in text rather than relying solely on color, support keyboard navigation and screen-reader labels, present contextual paths and target identifiers clearly and offer actionable next steps. A report with incomplete coverage must be distinguishable from both success and failure. The accessibility of released PDF/JATS/HTML artifacts remains an independent release concern.

## 16. Internationalisation considerations

Machine-readable codes, severity tokens, report statuses and JSON-pointer locations MUST NOT depend on user-interface language. A UI MAY localize explanations for rules using a locale catalog while preserving canonical report identifiers. Language-tag checks belong to their respective manuscript data definitions; locale-specific rendering MUST NOT change validation outcomes for the same data and profile.

## 17. Examples

### 17.1 Authoring state (informative)

An author validates a working draft with no title. The authoring profile may report `valid`, while exchange validation reports `invalid` because the stricter portable serializer requires a title. Neither outcome prevents editing the draft. Changing the draft after validation makes its earlier report stale.

### 17.2 Incomplete external evidence (informative)

The manuscript references one stored figure. An exchange profile checks the asset metadata, but the loader is unavailable. The asset check is marked incomplete; without other known document errors, the aggregate outcome is `indeterminate`. If a separate identifier check finds a duplicate ID, the aggregate is `invalid` and still incomplete. No unobserved asset count is invented.

### 17.3 Studio experimental report (informative)

The [Studio local report schema](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/feat/omi-spec-180-validation-model/src/schemas/studio-validation-report-0.1.schema.json) describes fields such as `profile`, `subject.stateDigest`, `subject.evidenceDigest`, `checks[]`, `diagnostics[]`, `summary` and `exclusions[]`. A local schema/parser enforces fixed manifests, consistent summaries and bounded findings. Its profile check versions identify local adapters, **not** normative versions of related OMI specifications.

This is deliberately **not** a canonical OMI-SPEC-180 JSON example or an approved independent conformance fixture.

## 18. Normative references

- [OMI Core Principles](https://openmanuscript.org/docs/foundations/core-principles/)
- [OMI-SPEC-100 — Document Model](https://openmanuscript.org/docs/specifications/document-model/)
- [OMI-SPEC-110 — Anchor Model](https://openmanuscript.org/docs/specifications/anchor-model/)
- [OMI-SPEC-120 — Scholarly Object Model](https://openmanuscript.org/docs/specifications/core/scholarly-object-model/)
- [OMI-SPEC-130 — Annotation Model](https://openmanuscript.org/docs/specifications/annotation-model/)
- [OMI-SPEC-140 — Metadata Model](https://openmanuscript.org/docs/specifications/metadata-model/)
- [OMI Versioning Policy](https://openmanuscript.org/docs/governance/versioning-policy/)
- [RFC 6901 — JSON Pointer](https://www.rfc-editor.org/rfc/rfc6901)

## 19. Informative references

- [Studio OMI-SPEC-180 experimental implementation profile](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/feat/omi-spec-180-validation-model/docs/omi-spec-180-validation-model.md)
- [Studio validation report schema and fixtures](https://github.com/open-manuscript-initiative/open-manuscript-studio/pull/783/files)
- [Studio author guide](https://openmanuscript.org/docs/studio/manuscript-validation/)
- [OMI Implementation Status Matrix](https://openmanuscript.org/docs/governance/implementation-status-matrix/)

## 20. Implementation status

The [Studio PR #783](https://github.com/open-manuscript-initiative/open-manuscript-studio/pull/783) supplies the experimental `studio-validation-0.1` authoring, exchange and publication-preflight profiles and a Manuscript → Validation panel. It evaluates IDs/hierarchy, references and anchors, history, recognized translation freshness, portable serialization, local assets and publisher metadata. Its snapshots bind report state and history digests without changing manuscript content. Reports support stable codes, JSON-pointer paths, status and completeness, filtering, navigation, pagination and JSON download.

The Studio PR describes 691 existing successful tests, 18 focused validation tests, successful production build/lint/locale audit and three Playwright scenarios. These are local experimental profile tests, not independent OMI-SPEC-180 conformance. **The code and its availability depend on the status of the Studio PR and deployment; the documentation does not assert a deployment that has not been verified.**

The implementation does not check raw file syntax before import, prove scholarly accuracy, guarantee network availability, verify external signatures or replace existing JATS/PDF publication release gates.

## 21. Unresolved issues

1. Approve a canonical versioned report JSON Schema and cross-implementation report fixtures.
2. Specify portable canonicalization and source/evidence binding across different OMI processors.
3. Define standardized profile manifests and check registry versioning with scope selectors and capability discovery.
4. Standardize nuanced coverage/progress, partial reports, missing data and omitted finding counts.
5. Resolve object-reference locations vs editor paths, stable anchor semantics and cross-version migration.
6. Define report signing, trust, confidentiality and redaction profiles without confusing validation with certification.
7. Define how reviewers, publishers and repositories invoke separate release gates and record decisions.
8. Build independent reference fixtures and independent validators for OMI 1.0 conformance evidence.

## 22. Change history

| Version | Date | Change |
|---|---|---|
| 0.1.0 | 2026-10-31 | First canonical Draft proposed from Studio's explicitly experimental validation report/profile contract; normative core separated from local serialization. |

## 23. Acknowledgements

The Open Manuscript Initiative contributors and Open Manuscript Studio validation implementers.
