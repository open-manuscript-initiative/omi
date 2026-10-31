---
id: core-snapshot-review-profile
title: Core Snapshot Review Profile
sidebar_label: Core Snapshot Review
---

# Core Snapshot Review Profile

Version **0.1.0**, status **Draft, unapproved review profile**. This is a bounded projection of the existing OMI-SPEC-320@0.3.0 current manuscript state. It is not a new `.omi` format and is not a complete manuscript schema.

## Normative basis and role

The profile supplies partial executable evidence for OMI-SPEC-000@0.2.0, OMI-SPEC-120@0.3.0, OMI-SPEC-100@0.2.0 and OMI-SPEC-140@0.2.0. These source revisions remain Draft. The runtime check is an observational validator, not an editor, renderer, authorization service or certification authority.

The initial corpus has **22 fixtures** mapped to **20 partially evidenced requirements**. All **66** core requirements are inventoried; **46 are untested**. No row is marked fully tested. A passing fixture suite therefore yields **indeterminate normative conformance**. A valid snapshot result means valid within this narrow review scope only.

## Artifacts

- [Structural projection schema](/schemas/omi-core-snapshot-0.1.schema.json), JSON Schema Draft 2020-12, additional properties preserved.
- [Pure validator module](/tools/core-snapshot-validator-0.1.mjs), exported `validateCoreSnapshot(value, options)`.
- [Versioned fixture and requirement manifest](/examples/omi-core/0.1.0/manifest.json), containing fixture SHA-256 digests, expected outcomes, exact diagnostic sets and partial requirement mappings.
- [Readiness inventory](/evidence/readiness-2026-10-31.json), with source/code baselines and outstanding gates.

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

Run `npm run test:core-models` in the specification repository. `node scripts/validate-core-review.mjs --report test-results/core-review.json` records the pinned suite digest, fixtures, coverage, runner environment and timestamp. Fixture failure or corrupted/missing coverage is a failing command; indeterminate normative coverage is an expected disclosed result.

The Studio companion vendors the exact same module and corpus with a source digest. Its separate Core model review panel can export a source-digest-bound result; a later edit makes the report stale. Existing validation-report formats and manuscript version declarations remain unchanged. Shared source is **not independent implementation evidence**.

## Exclusions and promotion gates

Full file-format validation, specialized relationship semantics, revision correctness, authorization, confidential review projections, rights/identity verification, rendering and complete accessibility are excluded. Complete per-role requirement coverage, public review, independently developed interoperability evidence, compatibility/migration decisions and maintainer approval remain necessary before stronger claims.
