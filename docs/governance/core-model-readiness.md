---
id: core-model-readiness
title: Core Model Readiness and Stabilization Order
sidebar_label: Core Model Readiness
---

# Core Model Readiness and Stabilization Order

Core validation and identity/reference evidence updated **2026-11-04**; all-model source/Studio baselines remain dated **2026-10-31**. This is an implementation/evidence work programme, not a lifecycle-promotion decision. [All-model inventory](https://openmanuscript.org/docs/governance/implementation-status-matrix/), [original machine-readable snapshot](/evidence/readiness-2026-10-31.json), [validation supplement](/evidence/core-validation-2026-11-04.json) and [combined evidence index](/evidence/core-identity-reference-2026-11-04.json).

## Second bundle: identity continuity and deletion — 2026-11-04

Twelve Studio scenarios exercise actual edits, formatting, renaming, subtree moves, reparenting/cycle rejection, section layout, deletion, checkpoints, `.omi` save/reopen and explicit revision restoration. They add **seven partial requirement observations**: `REQ-PRI-004`, `REQ-OBJ-004/008/009/016` and `REQ-DOC-002/003`. Combined with the validator evidence, the 66-requirement inventory now has **32 partial / 34 untested / 0 fully evidenced** entries. The validator-only manifest retains its separate 25-partial/41-untested scope.

The [archived Studio report](/evidence/studio-identity-reference-2026-11-04.json) pins [commit b9c80c1](https://github.com/open-manuscript-initiative/open-manuscript-studio/commit/b9c80c198b920d26d15bf5275b4f1219eed9e1c3), file digests and case mappings. [Studio PR #856](https://github.com/open-manuscript-initiative/open-manuscript-studio/pull/856) was open at this evidence capture; these observations do not establish a merged or deployed release. OMI CI verifies the archived report and re-executes its own validator cases; Studio CI independently runs the same Studio case code, which remains reference-implementation evidence rather than a second implementation.

The tests exposed a save/reopen failure after deleting a referenced figure and missing descendant deletion events. The candidate fixes remove affected active relationships atomically, leave visible unresolved-reference text in surviving prose, retain the original relation in history, record descendant deletion and reject reserved IDs before a store update, including before checkpoint. Strict portable-reference validation remains in force. Explicit revision restoration recovers the semantic objects and relationships.

Full editing-path coverage, all specialized relationships, split/merge equivalence, native/browser acceptance and independent interoperability remain open. **Next bundle: exported credentials and confidential metadata.** No lifecycle promotion is requested.

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
