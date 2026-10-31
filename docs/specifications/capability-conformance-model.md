---
id: capability-conformance-model
title: OMI-SPEC-350 — Capability and Conformance Model
sidebar_label: Capability and Conformance Model
description: Normative draft for machine-readable implementation capabilities, scoped claims, test evidence, conformance manifests, and independent verification.
keywords:
  - Open Manuscript Initiative
  - OMI-SPEC-350
  - conformance
  - capabilities
  - interoperability
---

# OMI-SPEC-350 — Capability and Conformance Model

## Document metadata

| Field | Value |
|---|---|
| Identifier | `OMI-SPEC-350` |
| Title | Capability and Conformance Model |
| Version | `0.1.0` |
| Status | Draft |
| Document type | Normative draft with informative examples |
| Normative language | English |
| Editors | OMI maintainers |
| Last updated | 2026-10-31 |
| Replaces | None |
| Replaced by | None |
| Depends on | `OMI-SPEC-000`, `OMI-SPEC-300`, `OMI-SPEC-310`, `OMI-SPEC-320`, `OMI-SPEC-340` |
| Related specifications | `OMI-SPEC-180`, `OMI-SPEC-240`, `OMI-SPEC-330` |
| Used by | The OMI 1.0 suite and future registered implementation profiles |
| Schemas | No canonical OMI-SPEC-350 claim, manifest or results schema published |
| Profiles | Capability Disclosure; Self-Assessment; Verified Conformance (future registered profiles) |
| Implementation status | [OMI Implementation Status Matrix](https://openmanuscript.org/docs/governance/implementation-status-matrix/) |
| Issue tracker | [OMI specification issues](https://github.com/open-manuscript-initiative/omi/issues) |

## 1. Abstract

This specification distinguishes features an implementation advertises from properties it has demonstrated under a precise OMI version, implementation role and test profile. It defines capability statements, support levels, version compatibility, conformance classes, requirement coverage, test manifests, execution and result records, waiver/deviation disclosure, evidence provenance, verification, expiry and public claims.

It provides a common language for comparing editors, converters, servers, APIs, plug-ins and validation tools without conflating 'feature exists', 'tests pass', 'all requirements satisfied', and 'independently verified'. It does not make Open Manuscript Studio or any other implementation automatically conformant and does not establish an accreditation authority or certification mark.

## 2. Status of this document

This is **OMI-SPEC-350 Draft 0.1.0** for community review. Its claim schema, capability taxonomy, assertion levels, suite manifests and conformance-runner protocol are not yet canonical. No formal OMI 1.0 certificate or independently verified conformance claim can be issued solely by following the prose in this Draft.

The [Specification Registry](https://openmanuscript.org/docs/governance/specification-registry/) governs the effective lifecycle and version. Any claim MUST identify its exact versioned basis; a 'latest' or unqualified 'OMI-compatible' label is not a substitute.

## 3. Conformance

### 3.1 Conformance roles

- **Capability declarer:** publishes supported operations, versions, optional features, limitations and negotiation information.
- **Test-suite publisher:** publishes versioned, reproducible requirement-to-test mappings and fixtures.
- **Test runner:** executes a declared suite against an identified implementation/environment and records results.
- **Claim issuer:** assembles evidence and makes a scope-limited conformance assertion.
- **Claim verifier:** checks evidence integrity, completeness, coverage, provenance and policy against the declared assertion level.
- **Claim consumer:** displays or uses assertions without extending their stated scope.

These roles are independently claimable. A plugin, server, converter or editor may implement several roles. This specification cannot itself certify implementations of other specifications.

### 3.2 Requirement conventions

Capitalized **MUST**, **MUST NOT**, **SHOULD**, **SHOULD NOT** and **MAY** follow BCP 14. Stable IDs have the form `REQ-CON-001` and refer to requirements of this specification, not the tested target specification.

**REQ-CON-001:** A capability declaration MUST identify the implementation/product, concrete build or version, applicable component and target specification identifiers and exact versions or bounded compatibility ranges.

**REQ-CON-002:** A conformance claim MUST identify an implementation role/class, profile, environment, normative requirements in scope, suite revision and assertion level.

**REQ-CON-003:** A claim MUST distinguish asserted capability from observed test evidence and from independently verified evidence.

**REQ-CON-004:** A claim MUST NOT imply full conformance where mandatory requirements are failed, untested, waived without an accepted profile rule, or assessed with incomplete evidence.

**REQ-CON-005:** A claim consumer MUST present declared scope, exceptions and verification status without silently converting a Draft self-assessment into a Stable certification.

## 4. Scope

Covered: capability catalogs; required/optional feature status; profile and version claims; requirement inventories and test manifests; execution environments; result states and coverage; independent verification; evidence binding; deviations, revocation and expiry; safe discovery and privacy.

Excluded: actual semantic validation rules (`OMI-SPEC-180`), source/target conversion behavior (`OMI-SPEC-340`), physical file layouts (`OMI-SPEC-320/330`), test-runner implementation language, product marketing marks, accreditation governance, scholarly correctness or security certification.

## 5. Terminology

- **Capability:** a stated operation or behavior, with conditions and limits, not proof that it works.
- **Conformance class:** an implementation role with a defined normative requirement set from a versioned specification.
- **Profile:** a named, versioned subset or extension of permitted requirements and behaviors under a documented suite policy.
- **Claim:** scope-bounded assertion by an identifiable issuer about a particular implementation build and evidence set.
- **Suite manifest:** immutable list of normative requirement IDs, fixtures, assertions, expected outcomes and coverage obligations.
- **Test case:** a reproducible input/action/expected-observation specification.
- **Evidence record:** result with provenance and integrity binding, not necessarily an independent verification.
- **Deviation:** observed departure from applicable normative behavior.
- **Waiver:** explicitly permitted, reviewed exclusion under a specific profile policy; not an unnoticed skipped test.
- **Assertion level:** disclosure, self-assessment or independently verified evaluation, each with distinct evidence requirements.
- **Freshness:** whether a claim still applies to the tested build, dependency set and current suite revision.

## 6. Design principles

Claims are machine-readable, version-pinned, conservative by default, non-monolithic, auditable, reproducible and revocable. Unknown and untested are not equivalent to passed. Tests must cover behavior, not only schema syntax. A product may support some classes of a specification without claiming all of them, and an implementation may honestly disclose partial features without being labeled conformant.

## 7. Model overview

An implementation publishes a capability statement; a registered suite maps applicable requirements to test evidence; a runner executes cases in a recorded environment; the issuer builds a scoped claim; optionally an independent verifier checks it. Consumers negotiate features from declarations but make conformance decisions from verified evidence and policy.

The evidence chain is:

~~~text
implementation build + target SPEC/profile versions
   → declared capabilities
   → versioned requirement/fixture suite
   → environment-bound test run
   → outcomes + coverage + deviations
   → scoped claim → independent verification (optional)
~~~

A validation report about one manuscript is **OMI-SPEC-180** evidence. A conformance report about an **implementation** is **OMI-SPEC-350** evidence. A transformer-loss report is **OMI-SPEC-340** output. They may link to each other but MUST NOT be treated as interchangeable.

## 8. Data model

### 8.1 Implementation identity and capability statement

**REQ-CON-006:** A statement MUST include an identifier for the tested or described component, build/revision, vendor/project, publication timestamp, relevant runtime/platform, class, supported formats/versions and explicit known limits.

**REQ-CON-007:** Each declared capability MUST specify a stable feature identifier, support status (`supported`, `partial`, `unsupported`, `unknown` or `conditional`), applicable version/profile, and any constraints. A conditional capability MUST identify its prerequisites.

**REQ-CON-008:** A consumer MUST treat absent or unknown capability information as unknown, not supported; it MAY use safe fallback negotiation but MUST NOT infer conformance.

**REQ-CON-009:** A component whose support depends on an external plugin, service or optional configuration MUST identify the dependency and whether it was present during assessment.

### 8.2 Target specification and profile

**REQ-CON-010:** A suite MUST identify the exact target specification(s), normative revision(s), claimed class(es), profile(s), requirement applicability rules, and normative versus optional case sets.

**REQ-CON-011:** A profile MUST NOT silently remove a mandatory requirement from its parent specification. Any permitted specialization MUST state its source of authority and effects on the claim label.

**REQ-CON-012:** Requirement IDs MUST be uniquely traceable to the controlling normative text. When a requirement is replaced, retired or split, the suite MUST record a migration mapping instead of silently reusing its identity.

### 8.3 Test manifest and execution record

A suite manifest SHOULD enumerate `suiteId`, `suiteVersion` or immutable digest, `specifications`, `profiles`, `cases`, `requirements`, expected outcomes, valid fixtures, negative fixtures, environment constraints and runner version ranges.

**REQ-CON-013:** A test case MUST identify the requirements it exercises, input/fixture digest, test steps or deterministic runner action, expected behavior and the criteria for pass/fail.

**REQ-CON-014:** A run MUST bind the observed results to the tested build, suite digest, runner version, configuration, operating environment and execution timestamp.

**REQ-CON-015:** A runner MUST record each required case as `pass`, `fail`, `skip`, `error` or `not-run`. No omitted result may be implicitly counted as a pass.

**REQ-CON-016:** A runner MUST preserve execution diagnostics separately from behavioral failures. A test harness crash or inaccessible fixture is `error`, not a statement about target compliance.

**REQ-CON-017:** A runner MUST record test result truncation, unavailable evidence and interrupted execution. Unknown coverage MUST NOT be silently treated as complete.

### 8.4 Claim and verification record

A claim SHOULD identify issuer, subject, level, normative basis, evidence digest/URI, limitations, deviations, verification actor and method (if any), validity period and supersession/revocation state.

**REQ-CON-018:** The issuer MUST include an explicit claim scope, outcome, evidence/coverage summary, any failed mandatory requirements, untested requirements, allowed waivers and known deviations.

**REQ-CON-019:** A verification record MUST identify verifier, independence relationship, methods, date, examined claim/build/suite digests, checked evidence and resulting accepted/rejected/indeterminate decision.

**REQ-CON-020:** A public claim MUST NOT describe itself as independent when the verifier is the implementation vendor or a party without the independence prescribed by the claim profile.

## 9. Processing model

### 9.1 Publication and negotiation

**REQ-CON-021:** A capability publisher MUST make version-scoped declarations retrievable as stable snapshots or identify when a dynamically negotiated response was generated. Negotiation MUST NOT grant permissions or bypass authorization.

### 9.2 Assessment

**REQ-CON-022:** A conforming issuer MUST ensure every mandatory applicable requirement is accounted for as tested, partially evidenced, failed, not-run, inapplicable-with-rationale, or explicitly waived under a published policy. Mere absence from the suite is insufficient.

**REQ-CON-023:** A `conformant` outcome MUST require all mandatory applicable checks to pass, full required coverage, an approved profile/suite, no unresolved prohibited deviations, and current build-bound evidence. Otherwise the result MUST be `nonconformant` or `indeterminate` as warranted.

**REQ-CON-024:** The presence of an observed mandatory failure MUST produce `nonconformant` for that tested claim scope even if other checks could not run. If there is no proven failure but required coverage is incomplete, the result MUST be `indeterminate`.

**REQ-CON-025:** A self-assessment MUST be labeled as such; issuing it MUST NOT automatically change a specification lifecycle to Stable or confer third-party certification.

### 9.3 Invalidation

**REQ-CON-026:** Any claim- or evidence-consumer MUST consider a claim stale when its bound build, relevant dependencies, normative profile/suite, or authorization-relevant environment changes materially, unless equivalence is established with evidence.

**REQ-CON-027:** Superseded, revoked or expired claims MUST NOT continue to be displayed as current. Old evidence MAY be retained for audit with its historical status.

## 10. Validation and error handling

**REQ-CON-028:** A claim validator MUST distinguish malformed record, missing requirement mapping, unsupported spec/profile version, broken evidence reference, invalid digest/signature, missing coverage, stale claim and independently detected nonconformance.

**REQ-CON-029:** Verifier failures or offline evidence MUST yield `indeterminate` when no contrary evidence proves nonconformance; an unverifiable claim MUST NOT be promoted to verified.

**REQ-CON-030:** Aggregate scores or percentages MAY aid reporting but MUST NOT replace per-requirement outcomes, severity and mandatory-gate evaluation.

## 11. Extensibility

**REQ-CON-031:** Extensions MUST be namespace-qualified, versioned and excluded from core claim equivalence unless an identified profile explicitly incorporates them. Unknown vendor claims MUST NOT be silently interpreted as core OMI features.

The capability vocabulary SHOULD be maintained as an append-only, separately versioned registry; additional profile namespaces MAY describe format adapters or optional research modules.

## 12. Versioning and compatibility

**REQ-CON-032:** An issuer MUST pin normative specification, profile, suite, runner and implementation versions. A version range MUST declare selection and interpretation rules; 'latest' alone is insufficient.

**REQ-CON-033:** When a suite changes materially, the issuer MUST re-evaluate claim applicability; migrated old evidence MUST record the change and any requirements lacking new coverage.

Draft-level test passes MUST NOT be silently promoted to Stable conformance when the specification transitions lifecycle state.

## 13. Interoperability

A standard reader should be able to answer: *what does this build claim to support? for which version and role? what was tested? by whom? with which fixtures? what was skipped? what failed? is the evidence still current?*

**REQ-CON-034:** A claim consumer MUST expose evidence scope and completeness before using a claim to approve data exchange, ingest or publication automatically. Local acceptance policies MAY be stricter than the OMI baseline.

Suggested interoperable initial suite subjects include OMI-SPEC-320 Core Snapshot and Lossless Round Trip; OMI-SPEC-340 import/export and preservation; OMI-SPEC-180 report accuracy; and plugin/API capability negotiation. Every suite requires its own versioned requirement matrix.

## 14. Security, privacy and integrity considerations

**REQ-CON-035:** Published conformance evidence MUST be checked for integrity before verification and MUST NOT expose private manuscripts, credentials, review identities or protected fixtures without consent and authorization.

**REQ-CON-036:** A test runner MUST isolate untrusted fixtures, enforce resource limits and prohibit unauthorized network/secret access. Claims based on inaccessible private evidence MUST describe the verification limitations publicly.

A cryptographic signature proves control of a key, not independent correctness. Authentication of the signer and claims of independence need a separate governance rule.

## 15. Accessibility considerations

**REQ-CON-037:** Claim information, coverage summaries and deviations MUST be available in a machine-readable and accessible text form; an icon, badge, color or aggregate percentage alone is insufficient. Accessibility assertions MUST identify the exact test profile and evidence.

## 16. Internationalisation considerations

**REQ-CON-038:** Canonical feature codes, requirement IDs and outcome tokens MUST remain language-neutral and stable. Human descriptions MAY be localized; language, writing-system and right-to-left support claims MUST specify scope and test context.

## 17. Examples (informative)

Conceptual claim summary, **not** a published canonical schema or independently verified certificate:

~~~json
{
  "model": "OMI-SPEC-350",
  "modelVersion": "0.1.0",
  "implementation": {"name": "Example converter", "build": "example-commit"},
  "scope": {"specification": "OMI-SPEC-340", "version": "0.1.0", "class": "export-processor", "profile": "example:semantic"},
  "assertionLevel": "self-assessment",
  "suite": {"id": "example:io-suite", "version": "0.1.0", "digest": "sha256:example"},
  "results": {"pass": 9, "fail": 0, "skip": 1, "error": 0, "notRun": 1},
  "coverage": "incomplete",
  "outcome": "indeterminate",
  "verification": "not-independent"
}
~~~

The `sha256:example` value is deliberately not a digest. No suite with this identity has been approved.

## 18. Normative references

- [OMI-SPEC-000 — Core Principles](https://openmanuscript.org/docs/foundations/core-principles/)
- [OMI-SPEC-300 — Plugin Architecture](https://openmanuscript.org/docs/specifications/plugin-architecture/)
- [OMI-SPEC-310 — Platform API](https://openmanuscript.org/docs/specifications/api/)
- [OMI-SPEC-320 — File Format](https://openmanuscript.org/docs/specifications/file-format/)
- [OMI-SPEC-340 — Import and Export Model](https://openmanuscript.org/docs/specifications/import-export-model/)
- [OMI Specification Registry](https://openmanuscript.org/docs/governance/specification-registry/)
- BCP 14 (RFC 2119 and RFC 8174)

## 19. Informative references

- [OMI-SPEC-180 — Validation Model](https://openmanuscript.org/docs/specifications/validation-model/)
- [OMI-SPEC-240 — Rendering and Publication Profile Model](https://openmanuscript.org/docs/specifications/rendering-publication-profile-model/)
- [OMI Implementation Status Matrix](https://openmanuscript.org/docs/governance/implementation-status-matrix/)
- [Roadmap to OMI 1.0](https://openmanuscript.org/docs/governance/roadmap-to-omi-1.0/)

## 20. Implementation status

The reference repository has an OMI-SPEC-320 schema, fixtures and a validator with partial requirement coverage. This is not an approved suite-wide OMI-SPEC-350 claim system. No canonical capability statement schema, suite-manifest schema, independent verifier or certification authority has been published. [Matrix of observed evidence](https://openmanuscript.org/docs/governance/implementation-status-matrix/).

## 21. Unresolved issues

1. Canonical JSON Schemas for capability statements, suite manifests, run evidence and verification records.
2. Approved feature taxonomy, global role identifiers and profile registries.
3. Minimum independent-verification criteria and governance for the use of any conformance mark.
4. Test-case format, negative-fixture requirements, implementation diversity, digest/signature policy and reporting redaction.
5. Evidence freshness/expiration policy, test environments, dynamic remote capability discovery and interoperability runner.
6. Requirement inventory and executable conformance corpus for this Draft itself.

## 22. Change history

| Version | Date | Change |
|---|---|---|
| 0.1.0 | 2026-10-31 | First canonical Draft: capability statements, requirements/suites, evidence, claim levels, verification and lifecycle rules. |

## 23. Acknowledgements

Prepared for public review by the Open Manuscript Initiative community. No certification mark or independent conformance status is granted by this Draft.
