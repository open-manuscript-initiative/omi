---
id: core-model-readiness
title: Core Model Readiness and Stabilization Order
sidebar_label: Core Model Readiness
---

# Core Model Readiness and Stabilization Order

Core validation, identity/reference, export/privacy, metadata, localized conversion, extension and local authoring evidence updated **2026-11-05**; all-model source/Studio baselines remain dated **2026-10-31**. This is an implementation/evidence work programme, not a lifecycle-promotion decision. [All-model inventory](https://openmanuscript.org/docs/governance/implementation-status-matrix/), [original machine-readable snapshot](/evidence/readiness-2026-10-31.json), [validation supplement](/evidence/core-validation-2026-11-04.json) and [current combined evidence index](/evidence/core-local-authoring-2026-11-05.json).

## Seventh bundle: local authoring and editable source attribution — 2026-11-05

Twelve Studio scenarios add partial observations for **REQ-DOC-010**, **REQ-DOC-011** and **REQ-PRI-007**. Combined coverage is **48 partial / 18 untested / 0 fully evidenced** requirements out of 66. Validator-only scope remains 25 partial / 41 untested.

The [archived local authoring report](/evidence/studio-local-authoring-2026-11-05.json) pins Studio [8fffc2d](https://github.com/open-manuscript-initiative/open-manuscript-studio/commit/8fffc2dd0930c99e9b453495f303639041240722), proposed in [PR #861](https://github.com/open-manuscript-initiative/open-manuscript-studio/pull/861). The [current index](/evidence/core-local-authoring-2026-11-05.json) combines six separately pinned Studio runs and local validator cases. They remain observations of one reference implementation, not independent interoperability or deployed-release certification.

Under the informative `studio-local-model-authoring-0.1` observation profile, cases clear the account session and deny Fetch, WebSocket, XMLHttpRequest and Node HTTP/HTTPS request/get entry points. Local creation, title/abstract/body edits, validation, document switching, checkpoint and portable save/reopen complete with no guarded network attempt. This covers the initialized model/store with local dependencies; offline app installation/bootstrap and every possible transport API are not established.

Visible source notices and scholarly source metadata can be corrected or removed. Confirmed source links, origin annotations and document import self-attestation do not pin the first heading or ordinary body. Deleting attributed content cleans active links while retaining historical source evidence for explicit revision restoration. A real ProseMirror empty-heading transaction preserves following text.

Two cases exposed silent edit/delete failures under embedded section/block trees. The candidate now traverses both accepted representations for text changes and targeted subtree removal, retaining structure, identities and the existing relationship cleanup. All twelve cases, the full 954-test run, production build, TypeScript and focused lint checks pass.

Browser/native UI acceptance, actual device persistence/crash recovery, hosted authorization, rights clearance, all specialized relationship editors and independent conformance remain open. A visible notice edit does not authenticate or rewrite a separate source relationship. Every mapping stays partial. **Next bundle: identity and rights authorization boundaries.** No lifecycle promotion is requested.

## Sixth bundle: extension and vocabulary preservation — 2026-11-05

Twelve Studio scenarios add partial observations for **REQ-DOC-014** and **REQ-MET-015**, with further evidence for already-partial REQ-MET-014, REQ-OBJ-013, REQ-MET-018 and REQ-PRI-008. Combined coverage is **45 partial / 21 untested / 0 fully evidenced** requirements out of 66. Validator-only scope remains 25 partial / 41 untested.

The [archived extension report](/evidence/studio-extensions-2026-11-05.json) pins Studio [70c559d](https://github.com/open-manuscript-initiative/open-manuscript-studio/commit/70c559d8d7213673f131505c655d56ace40b393d), proposed in [PR #860](https://github.com/open-manuscript-initiative/open-manuscript-studio/pull/860). The [current index](/evidence/core-extensions-2026-11-05.json) combines five separately pinned Studio runs with local validator cases. All five runs belong to one reference implementation; no independent or deployed-release conformance is inferred.

Five import/disclosure regressions fail before the fixes. OJS import discarded foreign metadata fields, treated unknown Open Science members as localized text and shared retained objects with the launch source. The candidate normalizes only owned fields, retains foreign namespace/profile/version/vocabulary data opaquely, and detaches imported graphs. Known metadata edits, checkpoint history and portable save/reopen preserve the tested future terms, nested arrays, falsy values and embedded identities.

Extension properties do not replace core manuscript identity, title or sections. A future translation profile survives portable exchange with explicitly incomplete inspection; an unsupported frame profile is refused without rewriting source. The recognized frame profile enforces its declared alignment vocabulary. DOCX/ODT now disclose omission of the extension graph through warnings and typed downloadable receipt observations without copying its values.

The selected core metadata review profile explicitly identifies authoring/exchange requirements: authoring permits empty titles, exchange rejects them, missing language is diagnosed and an invented mode is refused. This supplies bounded required-field evidence for REQ-MET-015, not full cardinality or controlled-vocabulary coverage. The twelve cases, full 942-test Studio run, production build and focused lint checks pass.

Generic namespace/version validation, every profile/vocabulary, foreign semantic interpretation, external profile resolution, complete metadata constraints and independent interoperability remain open. Every mapping stays partial. The local authoring/source editability follow-up is recorded in the seventh bundle above. No lifecycle promotion is requested.

## Fifth bundle: localized metadata and conversion loss — 2026-11-04

Twelve Studio scenarios add partial observations for **REQ-MET-011**, **REQ-MET-017** and **REQ-PRI-008**, with further preservation evidence for already-partial REQ-MET-018. Combined coverage is **43 partial / 23 untested / 0 fully evidenced** requirements out of 66. Validator-only scope remains 25 partial / 41 untested.

The [archived localized conversion report](/evidence/studio-localized-conversion-2026-11-04.json) pins Studio [f191c97](https://github.com/open-manuscript-initiative/open-manuscript-studio/commit/f191c9787a47680c4d5e290c03d3861a96a6ba9d), proposed in [PR #859](https://github.com/open-manuscript-initiative/open-manuscript-studio/pull/859). The [current index](/evidence/core-localized-conversion-2026-11-04.json) combines four separately pinned Studio runs with locally executed validator cases. These are observations of one reference implementation, not independent interoperability or deployed-release certification.

The cases exposed regional locale collapse during OJS normalization and a missing primary-language map entry during localized edits. Recognized language tags retain region/script distinctions, legacy underscore spellings are canonicalized, and conflicting aliases reject the import before returning a candidate. The source launch stays unchanged. Localized editing retains the scalar primary abstract/keywords while seeding their missing localized entry.

Actual DOCX/ODT package XML confirms that secondary localized abstracts/keywords are absent. The candidate now discloses those omissions and missing scholarly metadata through the export warning/report path. Typed observations distinguish preservation, normalization, omission and unverified mapping, without copying metadata values. Empty variants absent from output are disclosed as omitted. Portable save/reopen retains all tested localized variants; conversion never invents missing rights or publication facts.

Seven import/edit cases fail on the preceding implementation and pass after the fixes. The twelve new cases, full Studio test run and production build pass; focused office/export/privacy checks also pass after the final report adjustment. Complete localized titles, all metadata profiles, every adapter, HTML-to-text correctness, full language-tag support and independent round trips remain open. Every mapping stays partial.

The extension/vocabulary follow-up is recorded in the sixth bundle above. No lifecycle promotion is requested.

## Fourth bundle: metadata assertion states and provenance — 2026-11-04

Twelve Studio scenarios add partial observations for **REQ-MET-001**, **REQ-MET-005**, **REQ-MET-010**, **REQ-MET-012** and **REQ-OBJ-014**, with further preservation evidence for already-partial REQ-MET-018. Combined coverage is **40 partial / 26 untested / 0 fully evidenced** requirements out of 66; the validator-only scope remains 25 partial / 41 untested.

The [archived metadata report](/evidence/studio-metadata-2026-11-04.json) binds its exact Studio source commit and file digests to [PR #858](https://github.com/open-manuscript-initiative/open-manuscript-studio/pull/858). The [current index](/evidence/core-metadata-2026-11-04.json) combines three separately pinned Studio runs with local validator checks. It records observations at those commits rather than certifying an integrated or deployed release. All three suites belong to one reference implementation.

The cases exposed loss of existing ORCID assertion evidence and private visibility during contributor edits, fabricated registry provenance for typed ROR values, and replacement ROR values treated as verified from their syntax. The candidate preserves unchanged assertion IDs, status, timestamps, sources and visibility; replacement identifiers remain self-asserted without inherited verification, while explicit ROR lookup selection records registry provenance without claiming identity or membership verification. Metadata audit events now name the structural change, its subject, property and value instead of labeling it as an abstract edit.

Assertions, visibility states and inferred source attribution survive checkpoint and portable save/reopen. Inspection does not verify claims or mutate evidence. Verified/rejected fixtures are synthetic preservation inputs, not independent real-world proof. Complete metadata profiles, external identity/membership verification, all import/conversion paths, server authorization and independent interoperability remain open. Every mapping remains partial.

The localized metadata/conversion follow-up is recorded in the fifth bundle above. No lifecycle promotion is requested.

## Third bundle: export credentials and confidential metadata — 2026-11-04

Twelve Studio scenarios add partial observations for **REQ-PRI-009**, **REQ-MET-013** and **REQ-PRI-003**, with further preservation evidence for already-partial REQ-MET-018. Combined coverage is now **35 partial / 31 untested / 0 fully evidenced** requirements out of 66. The original validator-only scope remains 25 partial / 41 untested; requirements are counted once across roles.

The [archived export/privacy report](/evidence/studio-export-privacy-2026-11-04.json) pins Studio [da5b530](https://github.com/open-manuscript-initiative/open-manuscript-studio/commit/da5b53085edfa2fee6b5a036ca9abc40a9642d16), from [PR #857](https://github.com/open-manuscript-initiative/open-manuscript-studio/pull/857), which was open at capture. The [current index](/evidence/core-export-privacy-2026-11-04.json) combines this with the prior identity/reference report and the locally executed validator; it does not certify deployment or independent interoperability.

The cases exposed private-note disclosure in custom HTML/PDF-source/DOCX exports, credential fields in separately written `.omi` history, and common underscore/hyphen credential aliases bypassing checks. The candidate uses the existing public annotation projection for custom exports and refuses portable credentials across the complete source graph before container construction. The OMI reference validator now recognizes the same named field forms. Errors omit credential values, while scholarly prose and unrelated extension fields remain unchanged.

Thirteen standard public output paths and the three custom paths are inspected. Full authoring backups retain private notes and history; public publication artifacts filter supported private identity and note assertions. Arbitrary secrets in prose/encoded/binary data, all extension audience policies, every export path and server-rendered PDF bytes remain outside this evidence. Every mapping remains partial.

The metadata follow-up is recorded in the fourth bundle above. No lifecycle promotion is requested.

## Second bundle: identity continuity and deletion — 2026-11-04

Twelve Studio scenarios exercise actual edits, formatting, renaming, subtree moves, reparenting/cycle rejection, section layout, deletion, checkpoints, `.omi` save/reopen and explicit revision restoration. They add **seven partial requirement observations**: `REQ-PRI-004`, `REQ-OBJ-004/008/009/016` and `REQ-DOC-002/003`. Combined with the validator evidence, the 66-requirement inventory now has **32 partial / 34 untested / 0 fully evidenced** entries. The validator-only manifest retains its separate 25-partial/41-untested scope.

The [archived Studio report](/evidence/studio-identity-reference-2026-11-04.json) pins [commit b9c80c1](https://github.com/open-manuscript-initiative/open-manuscript-studio/commit/b9c80c198b920d26d15bf5275b4f1219eed9e1c3), file digests and case mappings. [Studio PR #856](https://github.com/open-manuscript-initiative/open-manuscript-studio/pull/856) was open at this evidence capture; these observations do not establish a merged or deployed release. OMI CI verifies the archived report and re-executes its own validator cases; Studio CI independently runs the same Studio case code, which remains reference-implementation evidence rather than a second implementation.

The tests exposed a save/reopen failure after deleting a referenced figure and missing descendant deletion events. The candidate fixes remove affected active relationships atomically, leave visible unresolved-reference text in surviving prose, retain the original relation in history, record descendant deletion and reject reserved IDs before a store update, including before checkpoint. Strict portable-reference validation remains in force. Explicit revision restoration recovers the semantic objects and relationships.

Full editing-path coverage, all specialized relationships, split/merge equivalence, native/browser acceptance and independent interoperability remain open. The export/privacy follow-up is recorded in the third bundle above. No lifecycle promotion is requested.

## First validation test bundle — 2026-11-04

Twelve new executable behavioral cases cover `REQ-DOC-012`, `REQ-DOC-013`, `REQ-OBJ-015`, `REQ-OBJ-018` and `REQ-MET-018` in the core snapshot validator role. They exercise frozen input graphs, deterministic located diagnostics, exact resource boundaries, truncated results, cycles, detached reports and inert asset references. The existing 22 JSON fixtures remain unchanged. Validator-only coverage is **25 partial / 41 untested / 0 fully evidenced** requirements out of 66. See the [scope and exclusions for each requirement](../specifications/core-snapshot-review-profile.md#validation-behavior-evidence--2026-11-04).

The validator passed these checks without a runtime change. Editor locks, raw-byte parser limits, full metadata conversion and independent conformance remain outside this bundle. Next bundles are identity continuity, dependent references after deletion, and credentials/confidential metadata in exports. No lifecycle promotion is requested.

## Completed in the original 2026-10-31 review

- Reconciled all 24 registry entries against source and pinned Studio evidence. Corrected obsolete 0.2.0 runtime claims: Studio already uses the 0.3.0 manuscript/schema boundary.
- Rewrote OMI-SPEC-000/120/100/140 using the canonical 23-section structure, with 66 stable requirement IDs and explicit scope, compatibility, privacy, accessibility and review gaps.
- Published a bounded core snapshot projection schema, pure validator, 22 digest-bound fixtures and complete requirement accounting. Twenty requirements have partial fixture evidence; 46 are untested.
- Prepared a separate Studio review panel that keeps authoring editable, distinguishes authoring/exchange requirements, binds report freshness to source state and preserves existing report and producer contracts.
- Added local/CI checks for fixture integrity, expected outcomes, deterministic non-mutating results, requirement inventories, registry/source versions and evidence links.

All specification revisions remain Draft. No external review, independent implementation approval or stable release is represented as completed.

## Stabilization sequence

| Phase | Models | Required next evidence |
|---:|---|---|
| 1 | 000, 120, 100, 140 | Review the new requirements; complete role-specific schema/behavior coverage and compatibility decisions. |
| 2 | 150, 110, 130 | Identity/assertion schemas, anchor persistence across edits, annotation lifecycle and deletion/retargeting fixtures. |
| 3 | 160, 180 | Requirement-mapped revisions/checkpoints/tombstones/digests and canonical validation report/profile contracts. |
| 4 | 220, 210, 221, 225 | Coordinated bibliography, citation, library and derivation review; resolve the 210/221 normative dependency cycle. |
| 5 | 320, 330 | Full parser/serializer/migration/asset-preservation coverage against a selected pinned file/container profile. |
| 6 | 190, 170, 200 | Scoped permissions, translation/review semantics, revocation and adversarial anonymity tests across transports and exports. |
| 7 | 240, 230 | Reproducible source-preserving publication and explicit release/acceptance authority. |
| 8 | 340 | Per-format mappings, loss reports, negative fixtures and declared round-trip invariants. |
| 9 | 350, then 300/310 | Approved conformance/capability profiles, plugin/API negotiation and independent interoperability evidence. |

The 350 measurement infrastructure is used from the beginning; final normative stabilization follows mature targets. Security, privacy, data-loss prevention and regression fixes remain continuous priorities regardless of phase. The table is a work order, not an instruction to postpone production defects.

## Candidate decisions

Each model needs a public record identifying current/proposed state, exact versions, applicable role/profile, reviewed evidence, unresolved issues and compatibility effects. Progress through Draft, Review Candidate, Implementation Candidate and Stable is separate from deploying working Studio features. The core rewrites have not completed public review and are not automatically Review Candidates.

## Concrete remaining work

For the current core group, next steps are normative review, requirement-by-requirement applicability, additional behavioral fixtures for identity continuity and deletion, semantic/projection preservation, privacy/audience handling, accessible language-aware output, unknown extension round trips and meaningful independent validation. The same validator copied into Studio cannot supply the independence requirement.

The main Studio producer continues to declare its existing exact semantic specification revisions. The separate review profile targets the newly proposed Drafts without retroactively changing saved documents. Any future producer adoption needs compatibility and migration evidence.

## Current source limits

The snapshot pins the specification baseline and Studio main commit, and records PR #785 as open at review time. It does not claim that a successful PR was merged or deployed. Earlier matrix counts mixed dated baselines and newer changes; they should not be used as completion percentages. Re-run consistency checks and refresh evidence after merges or substantive model changes.
