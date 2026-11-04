---
id: core-snapshot-review-profile
title: Core Snapshot Review Profile
sidebar_label: Core Snapshot Review
---

# Core Snapshot Review Profile

Version **0.1.0**, status **Draft, unapproved review profile**. This is a bounded projection of the existing OMI-SPEC-320@0.3.0 current manuscript state. It is not a new `.omi` format and is not a complete manuscript schema.

## Normative basis and role

The profile supplies partial executable evidence for OMI-SPEC-000@0.2.0, OMI-SPEC-120@0.3.0, OMI-SPEC-100@0.2.0 and OMI-SPEC-140@0.2.0. These source revisions remain Draft. The runtime check is an observational validator, not an editor, renderer, authorization service or certification authority.

The initial corpus had **22 fixtures** mapped to **20 partially evidenced requirements**. The 2026-11-04 validation evidence supplement adds **12 executable behavioral cases** for five previously untested requirements. All **66** core requirements are inventoried: within the validator-only scope, **25 have partial evidence and 41 remain untested**. Separate Studio identity/reference, export/privacy, metadata and localized conversion observations bring [combined role-scoped coverage](../governance/core-model-readiness.md#fifth-bundle-localized-metadata-and-conversion-loss--2026-11-04) to **43 partial / 23 untested**. No row is marked fully tested. A passing suite therefore yields **indeterminate normative conformance**. A valid snapshot result means valid within this narrow review scope only. The suite is now `0.1.0-draft.2`; the profile, schema and validator remain version 0.1.0.

## Artifacts

- [Structural projection schema](/schemas/omi-core-snapshot-0.1.schema.json), JSON Schema Draft 2020-12, additional properties preserved.
- [Pure validator module](/tools/core-snapshot-validator-0.1.mjs), exported `validateCoreSnapshot(value, options)`.
- [Versioned fixture and requirement manifest](/examples/omi-core/0.1.0/manifest.json), containing fixture SHA-256 digests, expected outcomes, exact diagnostic sets, a digest-bound behavioral module and partial requirement mappings.
- [Readiness inventory](/evidence/readiness-2026-10-31.json), preserving the original source/code baselines and outstanding gates.
- [2026-11-04 validation evidence supplement](/evidence/core-validation-2026-11-04.json), with current coverage, exact manifest/validator digests and remaining exclusions.
- [Combined evidence index](/evidence/core-identity-reference-2026-11-04.json) and [archived Studio identity/reference run](/evidence/studio-identity-reference-2026-11-04.json), keeping editor/serializer observations separate from this validator's runtime scope.
- [Third-bundle combined index](/evidence/core-export-privacy-2026-11-04.json) and [archived Studio export/privacy run](/evidence/studio-export-privacy-2026-11-04.json), adding partial source-preservation, credential and public audience-filtering observations.
- [Fourth-bundle combined index](/evidence/core-metadata-2026-11-04.json) and [archived Studio metadata run](/evidence/studio-metadata-2026-11-04.json), adding partial assertion-state, provenance, visibility and metadata-audit observations.

- [Current combined index](/evidence/core-localized-conversion-2026-11-04.json) and [archived localized conversion run](/evidence/studio-localized-conversion-2026-11-04.json), adding partial locale-preservation and declared DOCX/ODT metadata conversion-loss observations.

## Validation behavior evidence — 2026-11-04

The CLI and Node test runner both execute the mapped cases in `scripts/core-validation-behaviors.mjs`. A failed assertion or missing/altered mapping fails the command before a passing report is written. The report records fixture results and behavioral results separately.

| Requirement | Executed evidence | Remaining scope |
|---|---|---|
| `REQ-DOC-012` | Stable error codes and exact JSON-pointer locations, including escaped extension keys; frozen invalid input remains unchanged. | Editor navigation and complete source-format diagnostics. |
| `REQ-DOC-013` | Exact node/depth/diagnostic boundaries; truncated diagnostics; invalid outcome takes precedence over incomplete inspection; cycles and invalid limit options. | Raw byte limits and the separate file-format parser. |
| `REQ-OBJ-015` | Asset URL strings remain inert; guarded Fetch/HTTP/HTTPS calls and JavaScript execution sentinel are untouched. | Complete asset-processing isolation and other processors. |
| `REQ-OBJ-018` | Deeply frozen valid, invalid, incomplete and cyclic graphs; repeated validation; detached report mutation. | Editor locking and editing behavior. |
| `REQ-MET-018` | Titles, language, localized opaque values and provenance remain unchanged, including on failure and incomplete inspection. | Full metadata conversion and import/export paths. |

All five mappings are **partial** and apply to the observational validator role. No production editor, authorization, independent implementation or Stable claim is inferred. The validator and existing JSON fixtures are unchanged, so the Studio's vendored 0.1.0 validator remains the same implementation; these additional Node behavioral cases are not claimed to run in its browser panel.

## Inspected projection

Required root fields are `id`, `title`, `locale`, `createdAt`, `updatedAt` and ordered `sections`. A section has `id`, textual `title` and ordered `blocks`; a block has `id`, `type` and textual `content`. Optional nested section/block children are traversed. Explicit `parentSectionId` links must resolve and agree with enclosing sections; cyclic containment is rejected.

Live identifier uniqueness covers the root, sections, blocks and the declared root collections: agents, contributions, annotations, bibliographic records, citations, citation clusters, cross-references, named anchors, assets, source attributions and publication corrections. History snapshots and tombstones are separate scopes and are not live-object duplicates. Specialized embedded metadata IDs, editor-native content JSON and all relationship targets are outside this profile; their owning models still apply.

IDs are opaque, case-sensitive Unicode strings. They are not normalized, trimmed into another identity or restricted to UUID syntax. A blank ID is invalid. Known core block types are heading, paragraph, quote, figure, image, table, chart, equation and music-score. Unknown nonblank types are retained but produce incomplete semantic inspection, not an invented paragraph conversion.

## Authoring and exchange

`authoring` permits an unfinished empty title. `exchange` requires a nonblank title. Neither mode changes content or prevents continued editing. Publication readiness, rights clearance and audience-safe release are separate policies.

Language metadata accepts modern tags supported by ECMAScript Intl plus syntactically valid private-use tags. It rejects underscore spellings and leading/trailing whitespace rather than silently normalizing them. Full grandfathered-tag support and cross-runtime Intl differences remain open interoperability questions. Strings must contain Unicode scalar values. Calendar timestamps require timezone, valid dates and monotonically ordered creation/modification instants; leap seconds are outside this profile. Keyword entries, when present, are nonblank text.

## Outcomes, diagnostics and resource limits

The validator returns profile/spec versions, mode, `valid`, `invalid` or `indeterminate`, completeness, diagnostics and exclusions. Any observed error produces invalid even if other inspection is incomplete. Unknown types or resource limits prevent complete validity. A finite number such as 42 is JSON, but it remains invalid when used where textual block content is required.

Defaults: **100,000 JSON nodes**, **64 levels**, **200 diagnostic records**. Options must be positive safe integers. Exhaustion/truncation remains explicit. The caller must bound raw bytes and safe JSON parsing before passing a value; the profile does not replace the OMI-SPEC-320 unique-member/UTF-8 parser. Non-JSON values and cycles are diagnosed. A shared in-memory value is not a cycle unless it references an ancestor; duplicated live identities are independently checked.

Diagnostics carry stable codes, severity and JSON-pointer locations, without source excerpts. They distinguish invalid root/object/array, blank/duplicate ID, title/language/keyword/Unicode/date errors, missing or conflicting parents, containment cycles, unknown types and exhausted resources. No referenced URL, external entity, media asset or extension code is fetched or executed.

## Execution and evidence

Run `npm run test:core-models` in the specification repository. `node scripts/validate-core-review.mjs --report test-results/core-review.json` records the pinned suite and behavioral-module digests, fixture and behavioral results, coverage, runner environment and timestamp. Fixture/behavior failure or corrupted/missing coverage is a failing command; indeterminate normative coverage is an expected disclosed result.

`node scripts/validate-core-implementation-evidence.mjs --report test-results/core-implementation-evidence.json` verifies all four archived Studio reports' digests, commit bindings, exact target specification revisions and case/requirement mappings, then derives combined partial coverage without changing the validator-only manifest. The version 0.4.0 combined report lists four `implementations` as archived reference-implementation runs and the validator cases as locally executed. It does not execute Studio or assert deployment status. Failed, duplicated, misversioned or overstated archived cases fail the evidence gate. Four suites from Studio remain one reference implementation; the reports pin separate source commits and do not establish an integrated release.

The Studio companion vendors the exact same module and corpus with a source digest. Its separate Core model review panel can export a source-digest-bound result; a later edit makes the report stale. Existing validation-report formats and manuscript version declarations remain unchanged. Shared source is **not independent implementation evidence**.

## Exclusions and promotion gates

Full file-format validation, specialized relationship semantics, revision correctness, authorization, confidential review projections, rights/identity verification, rendering and complete accessibility are excluded. Complete per-role requirement coverage, public review, independently developed interoperability evidence, compatibility/migration decisions and maintainer approval remain necessary before stronger claims.
