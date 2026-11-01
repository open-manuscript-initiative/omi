---
title: Studio 1.0 implementation review — 1 November 2026
sidebar_label: Implementation review (Nov 2026)
description: Evidence-bounded gap audit of the Studio 1.0 PR plan, the separate OMI standard roadmap, and executable work versus host/external approval.
---

# Open Manuscript Studio 1.0 — implementation plan review

**Reviewed 2026-11-01 · Status: informative audit, not release or normative approval.**

This page reconciles the [Studio refactoring/PR plan](./refactoring-pr-plan.md), [Current-to-1.0 Gap Analysis](./gap-analysis.md), [OMI 1.0 normative roadmap](https://openmanuscript.org/docs/governance/roadmap-to-omi-1.0/), and the latest [Studio release-gate audit](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/main/docs/release/2026-11-01-route-a-audit.md). It distinguishes **working product behavior**, **architectural contracts**, **specification maturity** and **deployment/acceptance evidence**. It is intentionally conservative where evidence is incomplete.

**Two different 1.0 milestones exist.** Studio 1.0 is a Route A product release with a declared Stable platform subset. OMI 1.0 is a reviewed, interoperable normative specification suite; Studio being feature-complete does **not** promote OMI-SPEC Drafts to Stable.

## Counting and interpreting the plan

The original **A01–F03** tables enumerate **54 units**, not 53: A=10, B=13, C=15, D=8, E=5, F=3. These are planning IDs, **not** GitHub PR numbers, and some features have since been implemented through differently numbered PRs. The automated documentation gate verifies counts, unique IDs, prerequisites, evidence and risk fields. A passing planning audit does not mean 54 implementations are finished.

Status vocabulary below:

- **Implemented / verified in CI:** a concrete, bounded implementation and test/merge evidence exist; real deployment may still be unverified.
- **Partial / under review:** related functions exist, but a required shared contract, migration, negative test or exact-release proof remains.
- **External / operator:** work cannot be completed by repository editing alone.
- **Planned:** no reviewed implementation evidence is established in this audit; do not claim that a behavior is absent merely because a named facade is missing.

## A–F progress and remaining work

| Phase | Demonstrated foundation | Remaining architecture/release gap | Who can progress it |
|---|---|---|---|
| **A: architecture freeze (10)** | Route A Stable/Preview matrix; OMI-SPEC-320@0.3.0 Draft schema, fixtures and validator; additive API v1 routes | Frozen stable schema/AST, future-version and unknown-field compatibility, independent fixture verification; A10 dependency-direction enforcement | **Developer + standard reviewers.** [Studio #811](https://github.com/open-manuscript-initiative/open-manuscript-studio/pull/811) proposes the first bounded, CI-tested `src/model` import guard; it does not close A10/A06. |
| **B: core boundaries (13)** | Existing author-editable rich-text editor, progressive large-document loading, checkpoint/history, crash recovery and identity flows | Unified `StudioApplication` command/repository facade, portable editor-independent `ContentCodec`/AST, atomic save journal, session-independent `RevisionRepository`, native OS-backed `SecureStorage`, stable-anchor semantic corrections | **Developer, in separate reversible PRs.** Schema change and token migration require review, fixtures, upgrade/rollback proof and real native acceptance. |
| **C: interoperability (15)** | Many DOCX/ODT/OMI import and export paths, cross-format validation, OJS/OMP native workflows, PDF/HTML/JATS, versioned exchange reports and preview publication authority | Uniform `Importer`/`Renderer` registries and delivery ports, stable common connector receipts and durable outbox, explicit `ExecutionGrant`, cloud ETag/offline conflict rules, independent fidelity and output evidence | **Developer + PKP/integration validators.** Implement bounded port/adapter and test suites without rewriting working import/export; full interoperability claims require outside systems. |
| **D: platform (8)** | Web/desktop/Android builds, mobile tabs, Tauri CSP isolation (#770), rollback safeguard, synthetic accessibility/recovery and benchmark tests | Physical Windows/Linux/Android acceptance, end-to-end OS secure storage, accessibility with assistive technology, installer/signed update, performance budgets; actual production API egress and PDF sandbox | **Mixed.** Code/tests and deployment scripts are feasible; the real [#765](https://github.com/open-manuscript-initiative/open-manuscript-studio/issues/765)/[#774](https://github.com/open-manuscript-initiative/open-manuscript-studio/issues/774) host tests require an authorized operator. |
| **E: release candidate (5)** | Existing 1.0 Readiness and release-hardening workflows, SBOMs, checksums, [#810](https://github.com/open-manuscript-initiative/open-manuscript-studio/pull/810) merged strict RC blocker and explicit owner-SHA publication guard | Unified same-SHA evidence for all required jobs, hostile corpus/fuzz completion, compatibility freeze, RC1 signed artifacts, observed 2–4-week soak, reference-device sign-off | **Developer prepares aggregation, fixtures and report templates; owner approves, signs/distributes and tests.** |
| **F: 1.0 publication (3)** | Release tooling for immutable artifacts and public change notes | Promote unchanged final RC, supported-platform declarations, security/maintenance channels, post-1.0 patch-only policy | **Owner/governance action after E.** Do not create stable tags while mandatory evidence is missing. |

The [Studio audit of 1 November](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/main/docs/release/2026-11-01-route-a-audit.md) remains the product-specific decision baseline. **#765 and #774 are open release blockers** because the repository does not contain evidence that the staged OS/network controls have been activated and tested on the live VPS. This is not proof they are absent: attach redacted host results before closing them. **#271** remains open for the inherited Linux GTK3 `glib 0.18.5` advisory; [#809](https://github.com/open-manuscript-initiative/open-manuscript-studio/pull/809) monitors it but did not remove it.

## Separate OMI standards-programme gaps

The [24-model implementation inventory](https://openmanuscript.org/docs/governance/implementation-status-matrix/) is still informative. The recorded 2026-10-31 core profile has 66 requirement IDs and 22 fixtures; **20 partial and 46 untested** requirement coverage items, not 66 passed tests. The file-format profile records 72 requirements (**10 tested, 33 partial, 29 untested**). They are evidence snapshots, not current percent-complete figures. No model should be declared independently conformant from a Studio build.

Outstanding normative programme work, beyond the Studio application:

1. **Requirements and formal schemas:** complete versioned model contracts and controlled vocabularies for 100/110/120/130/140/150/160/170/180/190, citation/library 210/220/221/225, publishing 230/240, platform 300/310, exchange 320/330/340 and conformance 350. The canonical registry owns identifiers and versions.
2. **Adversarial authorization and privacy:** approval of OMI-SPEC-190 grants, invitations, decision and audit schemas; stable deny-by-default, revocation, reviewer-anonymity and multi-authority negative fixtures. Full cross-server semantics cannot be inferred from the Studio's Yjs demonstration.
3. **Canonical validation and interoperability:** approved OMI-SPEC-180 report vocabulary, full requirement-to-code/fixture mapping, 340 loss-report and round-trip cases, portable 320/330 malformed and future-version fixtures, and independent validator agreement.
4. **External review:** one or more **genuinely independent** implementation or validator teams, public Review Candidate circulation and recorded governance approvals. A vendored validator or another Studio client is not independent evidence.
5. **Official translations:** official normative translations **after** the English 1.0 suite is stabilized; 47 Studio UI languages do not mean 47 official normative translations.

## Executable next steps, in dependency order

| Work package | Deliverable I can prepare | What remains outside a repository-only PR |
|---|---|---|
| **R1 — status and dependency evidence (now)** | This dated English/Hungarian audit, a checked 54-unit PR plan, a CI documentation-count gate, and Studio A10 incremental import-boundary regression tests (#811) | CI review and merge, adoption of the proposed scope |
| **R2 — E02 release evidence** | Exact-commit manifest tying together required PKP, Tauri/Android, Readiness, CodeQL, spec-conformance, SBOM and SHA-256 evidence; fail-closed skipped/cancelled/stale detection; mock fixtures | Physical device/signed-install approval and full release owner decision |
| **R3 — A06/B01/B05 codec and app ports** | Non-mutating `ContentCodec` contract, legacy characterization corpus, explicit future-version outcomes and a thin `StudioApplication` facade | Normative content-grammar approval, safe writer migration, confirmed upgrade/rollback and performance on real manuscripts |
| **R4 — C01/C03/C06 import/render/connector contracts** | Interface/registry prototypes, fake adapters, loss/receipt fixtures and API idempotency tests | PKP deployment acceptance, independent connector agreement, delivery retry/recovery exercises |
| **R5 — E01 and OMI model corpus** | Synthetic hostile ZIP/SVG/XML/PDF/permission tests, repeatable schema/fixture runner, traceability updates | Independent cross-product validator, public normative review and governance sign-off |
| **R6 — native and server acceptance** | Systemd/egress audit scripts, safe canary and rollback checklists, redacted Go/No-Go template | Actual Plesk root/operator execution, signed Windows/Android builds, real hardware tests, external GTK4 release |

**Recommended immediate sequence:** merge R1 only after its CI is green; then finish the **actual** #774 PDF-worker and #765 outbound-network controls before attempting RC1. In parallel, prepare R2 exact-SHA evidence aggregation and the low-risk non-mutating interfaces for R3. Defer writer/schema migration, aggressive store rewrites and Stable claims until their separate fixtures and approvals exist.

## Evidence discipline

This is a dated gap assessment. New PRs, completed tests and deployment changes should update the linked **Studio implementation status**, not retroactively rewrite historical audit results. Keep private manuscript content, user names, local paths, authentication tokens and host secrets out of public CI artifacts. The authors must remain free to edit and delete their manuscript text; provenance, permission and validation machinery must not silently impose an editor lock.

**No release, schema promotion, benchmark certification or 1.0 tag is authorized by this review.**
