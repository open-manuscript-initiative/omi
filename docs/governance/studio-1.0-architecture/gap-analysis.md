---
title: Open Manuscript Studio — Current to 1.0 Gap Analysis
sidebar_label: Current to 1.0 Gap Analysis
description: Evidence-based gap analysis between the audited Open Manuscript Studio implementation and the proposed 1.0 target architecture.
---

# Current → 1.0 Gap Analysis

> Current implementation reconciliation: see the **2026-10-12 current implementation checkpoint** below. Earlier audit snapshots are historical; open repair PRs are not merged guarantees.


**Baseline:** Studio `eca2cf45762116e1c00a89b3397840ed89109511`; OMI `e2f421707f1154c0ed30cb7750e0689a837e9b0a`; OJS plugin `6c0842fc1ce6c4a1ea75f7b27660af8011be303b`; OMP plugin `4f7a2c0a2f29f68e3ad05ac73ca7652bc6410ac7`  
**Date:** 2026-09-19

> This is an implementation gap analysis. KEEP/HARDEN/REFACTOR classifications describe the migration strategy for the audited codebase; they do not change the lifecycle or conformance status of an OMI specification.

## 2026-10-10 implementation delta (conditional on PR review)

The original audited baseline above remains dated 2026-09-19. The following
newer paths were checked against Studio main `bb6cca95ed54615879cc6e6cc58a706425cd4e16`;
linked fixes are open PRs, not merged evidence.

| Component | Status | Verified drift | Target and next gate |
|---|---|---|---|
| `src/services/exportIdml.ts` annotation projection | HARDEN, privacy blocker | The appendix included hidden semantic origin and editor-only annotations; anchored private markers could be rendered. | [Studio #654](https://github.com/open-manuscript-initiative/open-manuscript-studio/pull/654) limits public notes and adds a synthetic negative fixture. Audit other public/anonymous renderers before RC. |
| DOCX `omiSourceFont` mark → `extractOmiInlineRuns` → IDML | REFACTOR | Import fidelity currently rides in Tiptap JSON; IDML does consume the shared inline adapter, so a claim that the renderer independently parses the mark would be inaccurate. | [Studio #657](https://github.com/open-manuscript-initiative/open-manuscript-studio/pull/657) pins the transitional behavior. A06/B06 still require a portable AST mapping, explicit loss diagnostics and save/reopen fixtures. |
| `src/services/studioServer.ts` native selection | REFACTOR | Shared service imports Tauri and owns localStorage plus token invalidation. | [Studio #656](https://github.com/open-manuscript-initiative/open-manuscript-studio/pull/656) isolates platform access. B10 secure storage and origin-scoped cache/auth tests remain. |
| main image publish and `1.0-readiness.yml` | HARDEN | `latest` is published after build/collaboration while readiness only runs for selected paths. | [Studio #655](https://github.com/open-manuscript-initiative/open-manuscript-studio/pull/655) uses explicit beta/commit tags and full-commit readiness trigger. E02 exact-commit RC aggregation, PKP and installer gates remain open. |

## 1. Classification key

| Status | Meaning |
|---|---|
| KEEP | Responsibility and implementation are fundamentally correct; normal maintenance is sufficient. |
| HARDEN | Good 1.0 foundation, but conformance, error handling, security, performance, or fixture coverage must improve. |
| REFACTOR | Behaviour should remain, but module ownership or dependency direction must change. |
| SPLIT | One current unit mixes multiple owners, lifecycles, or responsibilities. |
| MERGE | One concept/contract is implemented in unnecessarily parallel forms. |
| REPLACE | A narrow implementation choice cannot become the 1.0 contract. This does not imply rewriting the whole subsystem. |
| REMOVE | Empty, unused, or misleading code has no 1.0 role. |
| DEFER | Code may remain experimental/preview but is outside the base stable 1.0 guarantee. |

## 2. Aggregate assessment

The estimate is based on files, call paths, tests, and contracts rather than a formal LOC measurement.

- approximately **75–85%** of working implementation and behaviour can remain;
- approximately **45–55%** is KEEP/HARDEN without major structural change;
- approximately **25–35%** remains after wrapping, relocation, or ownership separation;
- genuine REPLACE/REMOVE work is approximately **5–10%**.

Refactoring effort will be larger than the replacement percentage because many consumers currently know the serialized Tiptap content representation or mutate application state through the Zustand store.

## 3. OMI format and domain

| Current component | Status | Main gap | 1.0 target |
|---|---|---|---|
| OMI `omi-manuscript-0.3.schema.json` and fixtures | HARDEN | Draft schema and mandatory conformance checks now exist; stable immutable release/provenance remains pending | immutable released schema with checksum and independent evidence |
| Studio vendored 0.3 schema | HARDEN | executable Draft validator exists; no stable release pin claim | exact frozen schema with checksum and generated-contract review |
| Studio OMI envelope | HARDEN | schema and omi.version now declare 0.3; portable ContentCodec/future policy remains incomplete | generated wire codec with explicit classification and stable compatibility policy |
| `src/types/omi.ts` aggregate | SPLIT | structure, identity, notes, references, assets, history, and app concerns share one unit | acyclic `core/omi/*` modules |
| empty domain placeholders | REMOVE | files imply ownership without implementation | real canonical modules or no files |
| `OmiBlock.content: string` | REFACTOR | serialized Tiptap JSON/legacy text acts as portable domain data | versioned OMI content AST behind a Tiptap codec |
| inline semantics | HARDEN | good semantics but partly tied to PM node/mark vocabulary | core semantic vocabulary plus adapter mapping |
| section/study/front-matter helpers | KEEP | pure and tested | move only when useful, preserve behaviour |
| identity/contributor models | HARDEN | scholarly semantics usable; account/evidence link not consistently explicit | account-independent agent/contribution domain |
| metadata/localized text/keywords | KEEP | pure domain logic | core metadata module |
| citations/clusters | HARDEN | good model, but content lookup depends on editor representation | editor-neutral references and anchors |
| CSL rendering | REFACTOR | output policy mixed with citation domain | renderer/application service |
| notes/note citations/rich text | HARDEN | inherits portable-content codec problem | portable note content through common codec |
| named anchors/xrefs | HARDEN | stable IDs exist; editor positions must not become authority | stable semantic targets and deletion/tombstone rules |
| assets | HARDEN/SPLIT | asset metadata can be domain data; byte/path/storage concerns appear in import code | asset identity/role/digest in core; byte store port |
| tombstones | KEEP | suitable deletion/history primitive | history and anchor integrity |
| proofing | REFACTOR | full before/after strings and UTF-16 offsets are fragile under structural edits | semantic operations plus stable anchors |
| publication correction | REFACTOR | implicit across proofing/history/build | explicit correction event linked to revision/artifact |
| unknown extensions | REPLACE | no demonstrated lossless forward policy | namespaced raw extension bag plus quarantine rules |

### Required migration pattern

The format/content migration must happen in this order:

1. establish the codec and validation facade around current data;
2. migrate readers/consumers behind the facade;
3. add shadow validation and future-version classification;
4. only then change the stable writer to the frozen OMI representation;
5. preserve or explicitly report unknown/unsupported data.

## 4. Editor engine and application core

| Current component | Status | Main gap | 1.0 target |
|---|---|---|---|
| `BlockEditor.tsx` | SPLIT | editor config, serialization, dispatch, and React UI are mixed | Tiptap session/codec plus thin React host |
| OMI Tiptap extensions | HARDEN | rich semantic implementation; mapping is not a frozen contract | adapter extensions with documented mapping fixtures |
| continuous manuscript projection | HARDEN | good study projection but knows current content encoding | codec-injected OMI↔PM projection |
| progressive study mounting | KEEP | correct large-document direction with tests | runtime service with performance budget |
| focus registry | KEEP | clear runtime ownership | editor-session service |
| selection helpers | HARDEN | useful cross-section behaviour; sensitive to remount/browser/IME | runtime selection with stable OMI projection |
| clipboard/paste | HARDEN | sanitizer/structured copy useful; content contract coupled | importer-like adapter with diagnostics |
| `useStudioStore.ts` | SPLIT | portable domain, revision, selection, UI, timers, persistence, and use cases coexist | UI/session projection only |
| app action modules | REFACTOR | direct Zustand state mutations and type escapes | platform-independent command handlers |
| multiple checkpoint timers | MERGE | possible parallel scheduling/lifecycle races | one `CheckpointScheduler` per document session |
| alpha workspace state | REMOVE/DEFER | active production use not demonstrated | isolate post-1.0 experiment or remove after usage proof |

Create/open/save should migrate first because they define the format and persistence safety boundary.

## 5. History and persistence

| Current component | Status | Main gap | 1.0 target |
|---|---|---|---|
| versioning model | HARDEN | strong immutable linear revision semantics; storage assumptions leak in | core history semantics behind repository port |
| working state | KEEP | useful distinction from durable revision | application history session |
| revision integrity/digest | HARDEN | needs canonical serialization and algorithm/version metadata | cross-runtime reproducible digests |
| full snapshot per revision | REFACTOR | O(revisions × document size), duplicated history stores | `RevisionRepository`, with future content-addressed/delta optimization |
| last-session IndexedDB persistence | REFACTOR | manuscript/history/UI/session authority mixed | versioned recovery cache validated by canonical gate |
| native manuscript file service | REPLACE | module-global path and parse/cast without schema/version gate | session-owned opaque location, validated open, atomic save |
| OMI export serializer | REFACTOR | spread/stringify without canonical validation; localStorage signature injection | canonical serializer and separate evidence bundle |
| asset repository | HARDEN | useful IndexedDB/memory seed | quota/integrity-aware byte-store port |
| secure OMI container reader | KEEP | strong ZIP size/path/CRC/SHA/symlink/encryption/ambiguity controls | preserve parser; separate semantic decoding and add fuzz |
| container writer | REFACTOR | useful package exists but contract is pre-stable and mixes concerns | OMI-SPEC-330 versioned writer |
| publication signature in localStorage | REPLACE | not a safe evidence authority | secure evidence repository bound to manifest/artifact digests |

## 6. Import, export, and publication

| Area | Status | Direction |
|---|---|---|
| importer actions overall | MERGE | common Importer registry, diagnostics, fidelity, provenance |
| DOCX import | HARDEN | wrap the existing substantial implementation; add synthetic corpus, cancellation, memory/loss fixtures |
| DOCX app actions | REFACTOR | importer returns draft; application command commits it |
| PDF import | HARDEN | keep as explicit best-effort/loss-reporting importer |
| Office/HTML/table/image import | HARDEN | retain parser/sanitizer; unify quotas, externalize assets, add hostile corpus |
| MusicXML/MIDI | REFACTOR | fix outer routing defect for MIDI, then place both behind capability probe |
| RIS/BibTeX/CSL-JSON | HARDEN | preserve reference interchange, add conflict/encoding/provenance coverage |
| Zotero/Mendeley | HARDEN | provider clients become scoped `ReferenceManagerConnector` adapters |
| export services overall | MERGE | common renderer result; delivery separated |
| file delivery | KEEP | becomes `ArtifactDeliveryPort` |
| JATS renderer/validators | HARDEN | strong candidate; pin validator/profile receipts and canonical XML fixtures |
| HTML renderer | HARDEN | explicit active-content/remote-resource policy, CSP/a11y, deterministic package |
| DOCX renderer | HARDEN | wrap existing logic and test structural XML |
| print PDF/Vivliostyle | HARDEN | pin renderer/font/resource environment; visual regression and timeout/sandbox |
| EPUB/LaTeX | DEFER | preview until fidelity evidence is sufficient |
| IDML/XPress/MIF/Scribus | DEFER | preview; do not block base 1.0 |
| publication profile module augmentation | REFACTOR | move presentation policy out of manuscript domain |
| paragraph/publisher styles | HARDEN | preserve rich system behind renderer-neutral intent/mapping |
| publication build/manifests/hashes | KEEP | strong 1.0 evidence pipeline seed |
| signature verification | HARDEN | clarify evidence placement, key versioning/rotation, cross-runtime fixtures |

The key principle is **wrap, do not rewrite**. Stable support is earned by fixture, fidelity, security, and acceptance evidence.

## 7. OJS, OMP, and peer review

| Current component | Status | Direction |
|---|---|---|
| parallel OJS/OMP clients/routes | MERGE | one Publishing System Connector contract plus profiles |
| Studio OJS integration | HARDEN | preserve signed launch/scope/review/writeback implementation |
| Studio OMP integration | HARDEN | preserve chapter confinement/native context; map to common contract |
| OJS PKP plugin | HARDEN | shared fixtures plus supported-version Docker E2E |
| OMP PKP plugin | HARDEN | same common contract plus monograph-specific extensions |
| direct submission/writeback | REFACTOR | transactional outbox, idempotency, durable receipts, explicit failure UI |
| peer-review service | SPLIT | domain transitions, persistence, projection/visibility separated |
| anonymous manuscript projection | HARDEN | retain server allowlist; extend to asset metadata/SVG/provenance leak corpus |
| reviewer/author visibility | HARDEN | one common policy and negative-access matrix |
| review forms/attachments/recommendations | HARDEN | assignment-scoped identifiers and auditable transitions |
| PKP workflow authority | KEEP | OJS/OMP remain authoritative for their own external workflow state |

Anonymous/restricted views are server-generated projections. The client must never receive confidential data and then hide it.

## 8. Identity, backend, and API

| Current component | Status | Direction |
|---|---|---|
| identity Prisma schema | HARDEN | formalize as account/auth/institution authority |
| duplicate main-DB user/session/identity concepts | SPLIT | reduce to `StudioPrincipal` projection/workflow references |
| principal bridge | HARDEN | add idempotent reconcile/outbox/repair evidence |
| local password auth | HARDEN | versioned password-hash policy and rehash-on-login; document actual implementation |
| ORCID/Google/Microsoft/OIDC | HARDEN | common provider state/nonce/PKCE/redirect/linking policy |
| institution/admin | HARDEN | policy service backed by identity authority and versioned API |
| author/publication signature | REFACTOR | separate evidence from portable manuscript/account state |
| duplicated provider credential locations | MERGE | one encrypted `CredentialRepository` with provider metadata |
| native bearer token in localStorage | REPLACE | OS-backed `SecureStorage`; browser uses HttpOnly session |
| mixed `/api` and `/integrations` routes | REFACTOR | additive versioned `/api/v1`, legacy facades during migration |
| direct route→Prisma business mutations | SPLIT | route → auth/policy → application use case → repository |
| Zod request validation | HARDEN | make Zod/OpenAPI schemas one transport contract source |
| shutdown lifecycle | HARDEN | close both DB clients, workers, and renderers deterministically |

## 9. Integrations, storage, and platforms

| Current component | Status | Direction |
|---|---|---|
| client integration contracts/registry | HARDEN | one shared capability schema; eliminate naming drift |
| server integration execution | REFACTOR | server-issued scoped `ExecutionGrant`, minimized payload |
| DeepL/AI | HARDEN | explicit purpose, retention, consent/audit; suggestion by default |
| arbitrary extension runtime | DEFER | stable 1.0 supports reviewed built-in connectors, not a general executable sandbox |
| cloud-storage provider abstraction | KEEP | remote object-storage port |
| WebDAV/Nextcloud | HARDEN | redirect-aware SSRF, ETag conflict, recovery corpus |
| Google Drive/OneDrive/Dropbox | HARDEN | common receipts, scope inventory, refresh/revoke/retry |
| SharePoint-specific provider | DEFER | not a base 1.0 blocker |
| synchronized local cloud folder | KEEP | `SyncFolderAdapter` with atomic/conflict semantics |
| device/platform detection | HARDEN | capability-driven composition instead of scattered detection |
| Tauri capabilities/config | KEEP | desktop adapter; add secure-storage/share/open-with ports |
| Android SAF/update/distribution | HARDEN | persisted URI permission, process death, save/reopen/update evidence |
| iOS/iPadOS | DEFER | shared core with Apple adapters; stable only after evidence |
| system font discovery | REFACTOR | platform resolver produces versioned resource manifest for renderer |

## 10. CI, testing, and documentation

| Current evidence | Status | 1.0 action |
|---|---|---|
| Studio unit/pretest suite | KEEP | preserve as fast characterization gate; add boundary tests |
| frontend lint/build | HARDEN | add bundle/performance budget and real lazy loading |
| server typecheck/build | KEEP | add both-schema migration checks |
| publication release suites | KEEP | make exact tool/artifact versions part of evidence |
| Playwright E2E | HARDEN | expand runtime critical journeys, recovery, accessibility |
| PKP Docker workflow | HARDEN | reusable exact OJS/OMP matrix; no RC path filtering |
| desktop/Android workflows | HARDEN | signed artifact install/open/save/update smoke |
| iOS workflow | DEFER | preview evidence; security/privacy/data-loss remain blocking defect classes |
| 1.0 readiness workflow | HARDEN | one exact-commit aggregate release-candidate workflow |
| OMI website CI | REFACTOR | make file-format conformance mandatory where schema/spec changes |
| parser security tests | HARDEN | shared hostile-input corpus and fuzz budget |
| accessibility | REFACTOR | release-blocking critical WCAG 2.2 AA journeys |
| recovery | REFACTOR | kill-during-save, corrupt file, recovery, outbox retry, updater rollback |
| governance/status pages | HARDEN | evidence-linked status to prevent prose drifting behind implementation |
| private manuscript policy | KEEP | only synthetic/public/test data in Git/CI; content-free logs |

## 11. Important documented mismatches

1. **OMI-SPEC-320 0.2 vs Studio 0.1.** The specification expresses the intended interoperable direction and Studio expresses current behaviour. Missing 0.2 integration is a blocker; neither side should be silently treated as already converged.
2. **Container status.** Some governance/status prose trails the working Studio container implementation. Derive and test the stable contract from proven behaviour rather than inventing another container.
3. **Identity documentation.** Some prose describes future or different identity/password assumptions while the audited code already has a two-database identity system. The actual authority and hash policy must be formalized.
4. **Review status.** Server-side anonymous projection, visibility serialization, and PKP writeback are ahead of some status documents. The remaining gap is common contracts and adversarial/leak evidence, not a missing subsystem.
5. **Meaning of green CI.** Normal green CI is useful health evidence but not full 1.0 release evidence because of path filters and incomplete conformance aggregation.

## 12. Explicit non-rewrite list

Do not rewrite:

- Tiptap and the current semantic editor extensions;
- linear immutable revision semantics;
- the secure OMI container ZIP parser;
- DOCX/JATS/HTML processors;
- publication-build manifest/hash foundations;
- cloud provider and SSRF helpers;
- Tauri/Android shells and release workflows;
- OJS/OMP authorization and object-scope controls.

Place these behind stable boundaries and strengthen their evidence.

## 13. P0/P1 gaps before architecture freeze

| Priority | Gap | Freeze condition |
|---|---|---|
| P0 | empty Studio schema plus 0.1/0.2 mismatch | canonical schema pinned; open/save validation and quarantine operate |
| P0 | Tiptap JSON is the portable content contract | OMI-SPEC-100 content grammar plus codec migration plan/fixtures accepted |
| P0 | container contract not aligned with OMI-SPEC-330 | manifest/path/security/version profile frozen |
| P0 | review/AI confidential scope partly client-controlled | server-issued grants plus leak/negative tests |
| P0 | native token in localStorage | secure-storage migration complete on stable native platforms |
| P1 | Zustand/application ownership mixed | application facade and create/open/save use cases active |
| P1 | apparent dual identity authority | identity DB authority plus `StudioPrincipal` projection/reconciliation established |
| P1 | parallel OJS/OMP contracts/writeback | common connector DTO plus outbox/idempotency implemented |
| P1 | path-filtered release evidence | exact-RC aggregate workflow available |

These gaps define the minimum architecture work that should precede a stable schema/API freeze.

## 14. Website assurance supplement — 2026-09-23

The following rows describe the proposed implementation supplement, not the original 2026-09-19 audit snapshot.

| Current component | Status | Problem | 1.0 target | Transition | Risk |
|---|---|---|---|---|---|
| `webPublicationArtifact.ts`, `NewsletterPublishingPanel.tsx` | REFACTOR | Committed artifact/hash and visible assurance exist; checkpoint/evidence/build orchestration still starts in React/Zustand. | `PrepareWebPublication` application use case. | Preserve renderer/UI, add facade and characterization tests before moving callers. | medium |
| `editorialDecisionService.ts`, `peerReviewRoutes.ts`, Prisma editorial decisions | HARDEN | Native review acceptance adds an independent security authority requiring lifecycle/transaction proof. | Immutable editor acceptance bound to exact revision/state digest; exclude OJS/OMP assignments. | Role matrix, changed-revision, race/revocation and confidential-data tests. | high |
| `publishing/webPublication.ts`, web routes, outbox migration | HARDEN | Grant, idempotency and transport receipts need real database/receiver recovery evidence. | `ArtifactDeliveryPort` with target-version binding and exact payload receipts. | PostgreSQL migration, WordPress/generic receiver, timeout/crash/reconcile and tamper corpus; retain Preview. | high |

The required visual seal is fixed across languages (`OMI · PEER REVIEW · VERIFIED / NOT VERIFIED`); explanation remains localized. Existing renderer logic is retained. No new general publishing platform or rewrite is required.

## 2026-10-09 evidence delta

| Current component | Status | Problem / evidence | 1.0 target | Next step | Risk |
|---|---|---|---|---|---|
| Studio `omiPortableFormat.ts`, vendored 0.2 schema and fixtures | HARDEN | Draft schema validation and an edit/save extension fixture now exist; the original empty-schema gap is closed. The specification is still Draft and the observed round trip covers a finite corpus. | Freeze only after normative requirement mapping, compatibility decision and independent evidence. | Pin immutable schema provenance/checksum in CI; broaden lossless/future-version gates. | high |
| `ResearchModuleInsertPanel.tsx` | REFACTOR | Main previously read local module JSON and recursively flattened arbitrary fields into a Tiptap block without preview or consent. | Section scaffold only until typed, authorized contribution exists. | Review [Studio PR #630](https://github.com/open-manuscript-initiative/open-manuscript-studio/pull/630); add a separate allow-listed, source-attributed projection with exact-content/source preview, consent, privacy fixtures and missing-source rejection. | high |
| Module `disciplineWorkspace.ts` / statistical IndexedDB workspaces | SPLIT | Module state is stored in browser storage; availability/retention and JSON export semantics differ from a portable OMI manuscript. | Versioned module project records behind a workspace repository with explicit save/recovery outcomes and retention policy. | Characterize existing imports/exports first, then introduce a port and migrate one module at a time. | medium-high |

These deltas update the 2026-09-19 snapshot; they do not retrospectively
change the original classifications for that baseline.

### External source attribution delta

| Component | Status | Problem | 1.0 target | Step | Risk |
|---|---|---|---|---|---|
| `VisualInsertPanel` / `officeImport` provenance | HARDEN | Machine filename/part metadata existed, but a file/clipboard object could be inserted without a reviewed visible source. | Per-object source prefill, edit, confirm and portable rendering. | Review [Studio PR #632](https://github.com/open-manuscript-initiative/open-manuscript-studio/pull/632); verify export fidelity. | medium |
| DOCX/PDF, OJS/OMP, HTML/JATS, reference-manager and asset ingress | SPLIT | Different owners and source granularity; no proven universal object-source gate. | Explicit source per document/record/object as appropriate, without rewriting valid OMI imports. | Characterize each path, add missing-source and privacy fixtures, migrate incrementally. | high |

### Source rule coverage (2026-10-09)

| Ingress | Current PR | Remaining 1.0 risk |
|---|---|---|
| File/clipboard visual, including HTML visual elements | [#632](https://github.com/open-manuscript-initiative/open-manuscript-studio/pull/632) | Adjacency alone does not create a semantic bibliographic link; test every renderer. |
| DOCX/PDF conversion | [#634](https://github.com/open-manuscript-initiative/open-manuscript-studio/pull/634) | One document-level source is not a substitute for distinct citations inside the manuscript; avoid private file paths. |
| OJS/OMP editable intake | [#636](https://github.com/open-manuscript-initiative/open-manuscript-studio/pull/636) after #634 | PKP E2E and anonymity evidence; no reviewer/file identity leak. |
| RIS/BibTeX/CSL JSON | [#635](https://github.com/open-manuscript-initiative/open-manuscript-studio/pull/635) | Bibliographic record is itself the source; file lineage is not a work identifier. |
| Research workspaces | [#637](https://github.com/open-manuscript-initiative/open-manuscript-studio/pull/637) after #631 | Statistical IndexedDB, confidentiality, source validation and structured link remain. |
| JATS manuscript import | no implementation | Do not claim support; adopt gate if implemented later. |

The coverage tracker is [Studio #633](https://github.com/open-manuscript-initiative/open-manuscript-studio/issues/633).

## 2026-10-11 merged-state reconciliation and remaining gates

| Component | Status | Observed gap | Target and transition | Risk |
|---|---|---|---|---|
| IDML annotation appendix | HARDEN | #654 merged; format-specific guard is present | Keep implementation and privacy regression; do not infer other formats from it | medium |
| HTML/JATS/DOCX and LaTeX/MIF/SLA/XTG annotations | REFACTOR | Public output can disclose hidden or workflow notes | #662 adds one non-mutating publication view and eight-format synthetic fixture; merge only after CI | high |
| EPUB | HARDEN | Inline private markers can leak; note-body fidelity remains limited | #662 filters anchors; explicit fidelity limitation remains | medium |
| Readiness and main image channels | HARDEN | #655 merged; per-commit readiness is no RC promotion aggregate | Retain continuous beta builds; E02 must bind evidence and artifacts to one commit/digest | high |
| Native origin-selection adapter | HARDEN | #656 merged; token invalidation alone is not secure storage/cache isolation | B10/D01 secure storage and origin-scoped account/cache acceptance remain open | high |
| DOCX source-font adapter | KEEP / HARDEN | #657 characterizes interim compatibility behavior | Keep tested code; ADR-004 codec/AST freeze still pending | medium |

## 2026-10-12 current implementation checkpoint

This checkpoint supersedes earlier dated **implementation-state** descriptions; it does not retrospectively change their audit evidence or declare architecture freeze. Studio main was verified at `6242dbae4e6e7be3f9bff9470f64647554f363d8`; OMI at `bc932272d0cbe18b8e45f758fbdb0d6076344bbf`.

- Studio now writes/validates OMI-SPEC-320@0.3.0 **Draft** with `schema` and `omi.version`, and retains the separately versioned container/history layers. Do not add a redundant schemaVersion field or promise pre-stable 0.2 migration. Stable compatibility obligations still begin with the first frozen stable generation.
- OMI-SPEC-225@0.1.0 defines `sourceAttributions`: independently identified `prov:wasDerivedFrom` links to bibliographic records with explicit machine-inferred / author-declared / author-confirmed status. These are distinct from citation occurrences, technical import provenance, rights and authorship evidence. The model exists; universal ingress/export coverage does not.
- [Studio PR #674](https://github.com/open-manuscript-initiative/open-manuscript-studio/pull/674) proposes atomic source-relationship cleanup on block-subtree deletion, retaining unrelated relationships, bibliography records and prior revision snapshots. It also proposes explicit HTML/JATS `source-attribution-not-preserved` warnings. Until merged and verified, these are repairs under review, not main guarantees. The warnings disclose loss; they do not establish a lossless mapping or generate a citation/licence claim.
- Mandatory regression evidence for this repair is actual insertion → checkpoint → subtree deletion → checkpoint → OMI save/reopen → historical revert, plus HTML/JATS per-relationship loss diagnostics and non-mutation. Fixtures must be synthetic/public. Broader deletion/merge paths, additional exporters, anonymous projection and OMI-container source-graph round trips remain separately assessed gates.
- Preserve the working editor, snapshot history and renderers. Portable AST/ContentCodec, immutable schema provenance, unknown-field/future-version handling, secure native storage and exact-commit RC evidence remain prerequisites; 0.3 adoption is not 1.0 readiness.

| Current component | Status | Problem | Target / action | Risk |
|---|---|---|---|---|
| sourceAttributions + visual insertion | HARDEN | structured relationship exists; not every ingress is covered | preserve OMI-SPEC-225 status and explicit source identity; extend coverage only with fixtures | medium |
| stageRemoveBlock | HARDEN | current main leaves a dangling relationship after deletion | #674 atomic cleanup, retain prior history; gate delete/save/revert lifecycle | high |
| HTML/JATS source graph | HARDEN | main silently omits unsupported relationships | #674 per-relation warning; future documented mapping and reimport tests | medium–high |
| Original 0.1/0.2 mismatch observations | KEEP as history | obsolete if read as current state | use this checkpoint and revised format rows for current planning | medium |


## 2026-10-13 — ODT Preview trust and fidelity checkpoint

The earlier #674 source-lifecycle repair is merged at `5825c15a1bc3860a3371eaa1c20111bfe4b74ea5`; its prior proposal checkpoint is historical.

ODT import/export entered Studio main in #675 (commit `5417e19cb26550508b66c780107eea87382b5f2f`). It adds an interoperability format, not a new OMI schema, account authority or durable working-state format. ODT is **Preview**, pending independent ODF/office fidelity and real-document acceptance; it must not be promoted merely because the ZIP can be opened.

[Studio #678](https://github.com/open-manuscript-initiative/open-manuscript-studio/pull/678) proposes targeted containment of two reproduced gaps. The import reader had trusted declared ZIP sizes and fully materialized DEFLATE output before checking it. The exporter omitted sourceAttributions without loss reporting. Treat #678 as a proposal until merge and verification, not a main guarantee.

The proposed boundary retains the 200 MiB input-package limit and enforces 25 MiB per expanded part, 100 MiB aggregate expanded data, and 4096 entries. Actual streamed bytes trigger cancellation before complete output materialization. Local/central headers, bounds, CRC32 and duplicate/unsafe/overlapping entries are checked; encryption, symlinks, ZIP64 and multidisk are explicitly unsupported. Successful repeated reads share the cached budget. CRC is integrity checking, not authenticity.

ODT uses the shared source-attribution-not-preserved diagnostic per unsupported relationship, alongside existing visible delivery warnings. A source label is not a semantic derivation link; no citation, licence or authorship claim is fabricated. Portable OMI retains the authoritative graph/history.

| Area | Decision / release gate |
|---|---|
| ADR-008 / ADR-017 — import | HARDEN the existing ODT adapter with real output-byte limits and ZIP integrity. Forged STORE/DEFLATE lengths, aggregate/entry quotas, CRC/header corruption, duplicate paths, truncation and ordinary data-descriptor compatibility are mandatory synthetic regression cases. Preview does not waive security gates. |
| ADR-008 / ADR-009 / ADR-023 — export | Report loss of every unsupported source relationship, with stable code and object target; preserve original portable state and keep diagnostic messages content-free. A later target mapping needs independent export/reimport proof. |
| ADR-019 — capability | ODT remains Preview with documented supported subset and losses. ODF schema/independent office acceptance and real-document fidelity gate Stable promotion. |
| PR plan | Merge/review #678 as the bounded incremental repair after #675; retain the working import projection and delivery paths. Then prove independent ODF validity and cross-office fidelity before any Stable claim. No beta-format migration or renderer rewrite is justified. |

This checkpoint supplements the earlier format matrix and source-graph gates. The original schema/API/ContentCodec/native security/exact-commit RC prerequisites remain in force.


## Architecture repair checkpoint — 2026-10-15: workspace mode and passkeys

ADR-001/002/005: simple writing is a Studio workspace preference keyed by manuscript ID, persisted locally outside portable manuscript state and revision snapshots. New documents do not write `editorMode`; the Studio vendored 0.3 schema must match the OMI source artifact. Existing unknown fields remain preserved under the general round-trip policy; this repair does not silently delete an imported extension or reinterpret it as authorization. Moving a file to another installation does not transfer local writing-mode preferences. The simple visual editor remains available.

ADR-012/015/016/017: passkeys authenticate the existing local account; they do not establish scholarly identity or publication evidence. `/api/v1/auth/passkeys` is the client contract. `/api/auth/passkeys` remains a compatibility facade over the same handlers and rate limits. HTTP routes own transport/status/cookies, the passkey service owns WebAuthn use cases, and the repository adapter owns identity-database access. Challenges remain expiring and single-use; verification still binds RP, web origin, user handle and user verification. Credential material never enters OMI.

Support is web-origin only: platform-authenticator availability is checked behind a capability adapter. Tauri origins do not advertise this flow. Native promotion requires a verified browser/native handoff and contract tests; do not widen accepted origins to make native UI appear supported. PostgreSQL migration, real authenticator registration/login/revocation, negative origin/RP/signature cases and native handoff evidence remain release requirements, not claims established by mocked route tests.

Validation for the repair includes per-document workspace isolation, unchanged portable bytes/history, schema parity, native-origin capability rejection and v1/legacy route equivalence with replay rejection. This checkpoint records a proposed repair pending merge and CI, not a completed 1.0 freeze.


## External integration repair checkpoint — 2026-10-18

| Component | Classification | Gap and target | Change/evidence | Remaining risk |
|---|---|---|---|---|
| EuroOffice callback | HARDEN / SPLIT | Unconditional updates and route-owned use cases → revision CAS, receipt and service/repository ownership | Immutable force/conflict recovery, prior-head backup, row lock; duplicate/stale/concurrent tests | Real provider force-save/final lifecycle and PostgreSQL gate must pass |
| DOCX download | HARDEN | Full arrayBuffer plus magic-only check → actual streamed quota and bounded ZIP/OPC/XML integrity | Missing/forged-length, malformed/CRC/expanded-quota fixtures | Not full OOXML schema or rendering conformance |
| Integration API/platform | REFACTOR | New unversioned surfaces and duplicated native token reads → additive v1 plus shared transport | Legacy facades retained; origin-switch token test | Existing general native secure-storage work remains open |
| Paid recognition | HARDEN | Module toggle/consent alone → expiring grant and durable digest-bound intent | Unique request key, ACCEPTED/UNKNOWN status, no automatic paid retry | Provider cannot guarantee exactly-once billing; unknown outcomes require external reconciliation |

The separate ordinary-DOCX storage is intentional and does not change OMI schema/container semantics. Historical simple-writing-mode checkpoint text is superseded by its subsequent removal; no portable editorMode field is reintroduced. Repairs are proposed until merged and migration/CI evidence is available.
