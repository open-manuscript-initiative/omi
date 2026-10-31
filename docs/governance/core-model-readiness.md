---
id: core-model-readiness
title: Core Model Readiness and Stabilization Order
sidebar_label: Core Model Readiness
---

# Core Model Readiness and Stabilization Order

Reviewed **2026-10-31**. This is an implementation/evidence work programme, not a lifecycle-promotion decision. [All-model inventory](https://openmanuscript.org/docs/governance/implementation-status-matrix/) and [machine-readable snapshot](/evidence/readiness-2026-10-31.json).

## Completed in this review

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
