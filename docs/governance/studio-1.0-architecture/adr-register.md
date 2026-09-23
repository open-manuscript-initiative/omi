---
title: Open Manuscript Studio 1.0 — ADR Register
sidebar_label: ADR Register
description: Proposed architecture decision record register for the Studio 1.0 stabilization programme.
---

# OMI Studio 1.0 ADR Register

**Date:** 2026-09-19

**Interpretation:** these are **proposed decisions**. Moving an ADR from Proposed to Accepted is part of the Phase A architecture freeze. Inclusion in this register does not retrospectively approve a decision without project review.

## Status summary

| ADR | Decision | Proposed freeze status |
|---|---|---|
| ADR-001 | OMI file-format source of truth | Accepted |
| ADR-002 | Schema and version fields | Accepted |
| ADR-003 | Compatibility and migration policy | Accepted |
| ADR-004 | Tiptap ↔ OMI content boundary | Accepted, conditional on AST-profile freeze |
| ADR-005 | Application-state ownership | Accepted |
| ADR-006 | Persistence authority and document session | Accepted |
| ADR-007 | Revision/history model | Accepted |
| ADR-008 | Importer/exporter contract | Accepted |
| ADR-009 | Publication pipeline | Accepted |
| ADR-010 | Publishing System Connector API | Accepted |
| ADR-011 | Peer-review domain and anonymity | Accepted |
| ADR-012 | Identity boundaries | Accepted |
| ADR-013 | Storage abstraction | Accepted |
| ADR-014 | Integration capability and permission model | Accepted |
| ADR-015 | Backend API versioning | Accepted |
| ADR-016 | Cross-platform adapter boundary | Accepted |
| ADR-017 | Security trust boundaries | Accepted |
| ADR-018 | OMI container, provenance, and signatures | Accepted, conditional on OMI-SPEC-330 fixtures |
| ADR-019 | Stable/preview capability policy | Accepted |
| ADR-020 | General executable plugin runtime | Deferred |
| ADR-021 | Website publication assurance and editorial authority | Proposed; delivery remains Preview |

---

## ADR-001 — OMI file-format source of truth

**Question.** Which artifact is the normative wire-format authority: TypeScript interfaces, JSON Schema, or prose specification?

**Decision.** The released OMI JSON Schema in the `omi` repository is the normative machine-executable wire contract. The prose specification defines semantics and invariants that JSON Schema cannot express. Studio vendors the schema from an immutable release, pins it by checksum, derives wire types/codecs from it, and may maintain richer domain types separately.

**Alternatives considered.** TypeScript-first schema generation; manually synchronized TypeScript and schema; making Studio the format authority.

**Rationale.** Interoperability spans languages and the PKP plugins. TypeScript is not language-neutral. The audited hand-maintained parallel state already drifted: OMI contains a 0.2.0 schema while Studio writes 0.1 and its vendored 0.2 artifact is empty.

**Consequences.** Schema releases and checksums become required. Generated artifacts are not hand-edited. Domain-invariant validation remains a separate layer. Any schema change triggers compatibility review.

**Revisit when.** JSON Schema cannot stably describe the wire shape, or all supported languages can demonstrably generate the same schema from another shared IDL.

---

## ADR-002 — Schema and version fields

**Question.** Should a new `schemaVersion` field be added beside top-level `schema` and `omi.version`?

**Decision.** No. `omi.version` is the OMI file-format version; `schema` is the exact schema URI. Readers verify that they are consistent. Container version, generator/application version, and manuscript revision remain independent version axes in their own layers.

**Alternatives considered.** Add `schemaVersion`; use only the schema URI; use only `omi.version`.

**Rationale.** A third equivalent field is redundant and creates another drift source. The URI gives exact schema identity while `omi.version` gives a negotiable semantic format generation.

**Consequences.** A mismatch is a fatal diagnostic. Code should use distinct typed concepts for file-format version, container version, application version, and revision ID.

**Revisit when.** Schema URIs cease to be immutable or a single format version is intentionally allowed to refer to incompatible normative schemas.

---

## ADR-003 — Compatibility and migration policy

**Question.** What backward/forward compatibility should Studio promise, and should early beta formats receive a permanent migration framework?

**Decision.** Compatibility obligations begin with the first frozen stable OMI generation. Pre-stable files receive an explicit best-effort importer or rejection path, not an indefinite compatibility promise. Later breaking stable changes require exact `from → to` migrations, fixtures, loss reports, and writes to a new target artifact. Newer major versions are quarantined/read-only; newer minor versions are editable only under an explicit forward-compatibility policy.

**Alternatives considered.** Permanent migration for every experimental format; silent best-effort open/save; supporting only the latest version.

**Rationale.** There is no evidence of production document stock that justifies a large pre-stable migration framework. Silent downgrade, however, creates unacceptable data-loss risk.

**Consequences.** UI distinguishes import, migration, read-only recovery, and normal open. Migration never runs implicitly at save time. Stable formats receive a published support policy.

**Revisit when.** Significant production pre-stable documents are discovered, or the number of stable generations justifies an explicit migration graph.

---

## ADR-004 — Tiptap ↔ OMI content boundary

**Question.** Can Tiptap/ProseMirror JSON be the portable OMI content model?

**Decision.** No. OMI-SPEC-100 and the file schema define the portable content AST. Tiptap remains the editor runtime. A versioned, loss-reporting `ContentCodec` converts between OMI AST and ProseMirror documents. During migration, the codec may read the existing serialized Tiptap JSON.

**Alternatives considered.** Standardize ProseMirror JSON as OMI; replace Tiptap with an editor built directly on a custom AST; let every exporter continue parsing editor JSON directly.

**Rationale.** The ProseMirror schema depends on editor/plugin configuration and already leaks into many independent consumers. Tiptap itself is working and well tested, so replacing it would not address the actual architectural problem.

**Consequences.** Every rich-text consumer uses the codec API. Unknown node/mark diagnostics and golden round-trip fixtures are mandatory. Selection and editor undo are runtime state, not portable state.

**Revisit when.** The ProseMirror ecosystem provides a durable language-neutral wire standard that losslessly expresses all required OMI semantics.

---

## ADR-005 — Application-state ownership

**Question.** Should manuscript state/use cases be owned by Zustand actions, React components, or an application service?

**Decision.** A platform-independent application core executes commands/use cases and owns the document session. Zustand becomes UI/session projection plus compatibility facade. React sends intent and reads view models. Editor runtime has its own session ownership.

**Alternatives considered.** Keep the large Zustand store as authority; rewrite into another state library; use component-local state.

**Rationale.** The issue is mixed responsibility and lifetime, not Zustand as a technology. Replacing one state library with another would preserve the underlying coupling.

**Consequences.** Commands carry optimistic revision preconditions where needed. UI mutations migrate incrementally. Existing pure model functions remain reusable.

**Revisit when.** UI-projection cost or future concurrency requirements provide evidence for a different runtime model.

---

## ADR-006 — Persistence authority and document session

**Question.** Which copy is authoritative among native file, recovery cache, server snapshot, cloud copy, and open UI state?

**Decision.** A `DocumentSession` explicitly tracks source/location plus last-saved revision/digest. The user-saved OMI file/container is the portable document artifact. IndexedDB recovery, cloud byte storage, and server workflow snapshots are explicitly named replicas/snapshots. Native locations are opaque handles, not domain path strings.

**Alternatives considered.** Last-write-wins across every store; server is always authoritative; Zustand state is implicit authority.

**Rationale.** Studio supports offline/native and external workflow use cases. There is no universal single store. Hidden authority creates data loss and conflict ambiguity.

**Consequences.** Save preconditions, conflict receipts, atomic replace, and recovery journal are required. Cloud providers do not edit manuscript semantics.

**Revisit when.** A future collaboration service introduces explicit multi-writer authority and a CRDT/transaction model.

---

## ADR-007 — Revision/history model

**Question.** How do editor undo, working changes, and durable revision history relate, and how should history be stored?

**Decision.** Editor undo is session-local. Working changes are application semantic commands. A revision is an immutable linear commit; revert creates a new commit. Current revision semantics remain but move behind `RevisionRepository`. The first adapter may continue full snapshots; content-addressed or delta storage is introduced only after measurement.

**Alternatives considered.** Treat PM undo as history; immediately move to CRDT/event sourcing; remove revisions and rely on file backups.

**Rationale.** The current revision model is strong and tested. The problem is ownership and storage scaling, not semantic correctness.

**Consequences.** Storage algorithm remains internal. An export profile determines which history is portable. Branching/collaborative history is not part of the base stable 1.0 contract.

**Revisit when.** Concurrent multi-user editing becomes a stable requirement or benchmarks prove full snapshots unacceptable.

---

## ADR-008 — Importer/exporter contract

**Question.** How should heterogeneous import and export formats share one architecture?

**Decision.** Use registry-based `Importer` and `Renderer` contracts with shared descriptors/capabilities, diagnostics, fidelity/loss, provenance, progress/abort, and streaming source/artifact models. Platform-specific delivery is a separate `ArtifactDeliveryPort`.

**Alternatives considered.** Independent UI/service per format; one giant switch; require every renderer to be a CLI process.

**Rationale.** Existing importers/exporters can remain as adapters, but inconsistent diagnostics and delivery currently couple them too closely to UI/store state.

**Consequences.** Stable/preview format capabilities are runtime-queryable. Renderers cannot open file pickers. Large-file/random-access requirements are declared.

**Revisit when.** Streaming or process-isolation requirements prove that separate contract families are needed; shared result/evidence concepts should still remain.

---

## ADR-009 — Publication pipeline

**Question.** What is the final reproducible publication-build sequence?

**Decision.** Validated committed OMI revision → immutable rendering context → versioned publication profile/resources → pinned renderer → target validators → artifact set → build manifest/hash/signature → delivery/transfer. Pre- and post-validation are mandatory.

**Alternatives considered.** Export directly from live store; embed profile/CSS in manuscript domain; validate only after upload.

**Rationale.** Existing build manifests and artifact hashing are strong foundations, but rendering live/raw editor state and presentation-model augmentation leave reproducibility gaps.

**Consequences.** Semantic reproducibility and byte reproducibility are separate claims. Renderer, font/resource, and validator versions are recorded. Invalid stable artifacts cannot be transferred by stable connectors.

**Revisit when.** A live/interactive publication class cannot meaningfully be expressed as a deterministic build; it should then receive a separate artifact class/ADR.

---

## ADR-010 — Publishing System Connector API

**Question.** Should OJS and OMP remain separate integration architectures?

**Decision.** A shared Publishing System Connector API handles capability discovery, signed launch, submission/metadata/contributors/files, review assignment/form/recommendation, revision/attachment/artifact upload, and workflow return. OJS/OMP remain profile adapters with extensions. The external publishing system remains authoritative for its own workflow state.

**Alternatives considered.** Two completely independent clients; lowest common denominator with no extensions; force the OJS object model onto OMP.

**Rationale.** Both plugins already implement common `omi-integration/1` concepts. A common contract reduces drift without denying genuine journal/monograph differences.

**Consequences.** Shared schemas and fixture suites are required. Writeback uses idempotent outbox semantics. Future journal/press/repository integrations implement the same port.

**Revisit when.** At least two additional systems demonstrate that the abstraction is still overly PKP-specific.

---

## ADR-011 — Peer-review domain and anonymity

**Question.** Is peer review merely part of the publishing connector, and where is double-anonymous protection enforced?

**Decision.** Review is an independent publishing-system-neutral domain: assignment, round, projection, workspace, attachment, form, recommendation, visibility, and writeback. Anonymous projection is a server-side security boundary derived from a committed source revision; never a client-side hide operation.

**Alternatives considered.** Use OJS/OMP DTOs directly; send the full manuscript and hide fields in the client; maintain a manual anonymized copy.

**Rationale.** The existing server allowlist and PKP reviewer scopes are strong starting points. An anonymity failure is high consequence and requires an explicit domain plus adversarial leak corpus.

**Consequences.** Asset metadata, filenames, EXIF/SVG, and provenance are included in projection policy. Use assignment-scoped identifiers and no-store caching. Confidential AI/integration access is possible only through a server-issued grant.

**Revisit when.** Open review or post-publication review requires a different visibility policy; the projection boundary itself remains.

---

## ADR-012 — Identity boundaries

**Question.** How do account, auth provider identity, scholarly agent, institution, contribution, and publication evidence relate?

**Decision.** Treat them as six distinct concepts/relationships. The identity database is authoritative for account/authentication/membership/admin. The main database holds a `StudioPrincipal` projection for workflow foreign keys. Scholarly agent and contribution belong to the portable OMI manuscript. Account↔agent linking requires explicit verified evidence; email or ORCID equality is not an automatic merge. Authorization is a separate policy.

**Alternatives considered.** One universal User model; ORCID as the primary user ID; two independent authoritative user databases.

**Rationale.** Publication attribution is portable and historical while an account is revocable operational identity. Duplicate authority across the current Prisma schemas creates drift risk.

**Consequences.** Principal projection needs reconciliation/outbox behaviour. Signatures/evidence use a separate store. Linking/revoking an auth provider does not silently rewrite manuscript authorship.

**Revisit when.** Consolidating to one transactional database is demonstrably simpler without collapsing domain concepts.

---

## ADR-013 — Storage abstraction

**Question.** How should native files, browser files, Android SAF, Apple Files, synchronized folders, and cloud storage share one model?

**Decision.** Use two port families: `DocumentStorage`/`DocumentLocation` for user-managed documents, and `RemoteObjectStore` for backup/sync byte objects. Platform adapters own pickers, permissions, and bookmarks. Providers never interpret manuscript semantics.

**Alternatives considered.** A unique save use case per provider; force every file through server upload; use a path string as the universal identifier.

**Rationale.** Platform permission models differ, but open/read/writeAtomic/conflict semantics are shared. A string path cannot represent browser, SAF, or security-scoped handles.

**Consequences.** Opaque handles stay in session/persistence layers. ETag/digest conflicts are explicit. Downloaded cloud copies pass through the same validators.

**Revisit when.** True multi-device synchronization requires merge semantics; that would be a separate Sync Service domain rather than a larger storage provider.

---

## ADR-014 — Integration capability and permission model

**Question.** What manuscript data may Zotero, Mendeley, DeepL, AI, storage, OJS/OMP, ORCID, or OIDC connectors receive?

**Decision.** Default deny, using server-issued `ExecutionGrant`: actor, provider/connection, document/revision, purpose, data-access scope, capability, confidential scope, expiry, single-use/idempotency. The server minimizes the payload. AI/translation output is a suggestion by default, not a direct mutation.

**Alternatives considered.** Full-manuscript access after user consent; automatically accept scopes requested by provider manifests; client-side allow flags.

**Rationale.** Manuscript and peer-review data can be sensitive. A client-supplied confidential flag is not authority, and providers need different minimum scopes.

**Consequences.** A scope taxonomy and audit-retention policy are required. Credentials live in a separate encrypted repository. Review-confidential grants derive from server-side assignments.

**Revisit when.** A fully on-device provider justifies a simpler local grant profile; scope and audit still apply.

---

## ADR-015 — Backend API versioning

**Question.** Should all current routes be renamed into `/api/v1` at once?

**Decision.** Introduce additive `/api/v1` with shared Zod/OpenAPI schemas, error envelopes, idempotency, optimistic concurrency, and correlation policy. Legacy routes remain compatibility facades calling the same application handlers, with deprecation telemetry. No one-shot mass rename.

**Alternatives considered.** In-place route rename; header-only versioning; freeze all current routes forever.

**Rationale.** Existing clients work today; mass rename adds unnecessary migration risk. A v1 namespace gives clear support and contract-diff semantics.

**Consequences.** Two route surfaces coexist temporarily. Business logic moves from routes into application services. External PKP protocols may maintain their own explicit profile/version.

**Revisit when.** Studio becomes an entirely atomically deployed client/server product; even then, external connector DTOs remain versioned.

---

## ADR-016 — Cross-platform adapter boundary

**Question.** How should one core support web, Windows/Linux/macOS, Android, and iOS/iPadOS?

**Decision.** Application ports cover file picker/storage, secure storage, auth handoff, updater/installer, system fonts/resources, capability detection, share/open-with, and notifications. Concrete web/Tauri/Android/Apple adapters are selected only at composition roots.

**Alternatives considered.** Platform checks throughout services; separate forks per platform; constrain all capability to the web lowest common denominator.

**Rationale.** Current Tauri/mobile code is useful but direct imports and user-agent detection leak into shared areas. Ports preserve one core while allowing honest platform capability differences.

**Consequences.** Every adapter receives a contract suite. Stable/preview classification is declared per artifact. iOS can remain preview without a core fork.

**Revisit when.** A platform lifecycle genuinely requires different use-case semantics; extend application policy before considering domain forks.

---

## ADR-017 — Security trust boundaries

**Question.** Where is data treated as untrusted, and which controls block unsafe data from the domain?

**Decision.** Establish explicit boundaries before imported JSON/container/DOCX/PDF/HTML/XML/assets, OAuth/OIDC credentials, connectors, confidential review data, AI providers, plugins, and publication artifacts. Each boundary combines quotas, safe parsing, validation, authorization, and content-free auditing according to its risk.

**Alternatives considered.** UI-only validation; trust local files; one generic sanitizer for every format.

**Rationale.** The current implementation already contains strong but scattered controls such as ZIP limits, LIBXML_NONET, SSRF helpers, and signed launches. They should be organized as threat boundaries rather than replaced.

**Consequences.** Hostile synthetic corpus, fuzzing, and negative-auth matrices become release gates. Diagnostics/logs do not contain manuscript content or local paths. A security fix may override compatibility promises under a documented emergency policy.

**Revisit when.** A new input, protocol, provider, or trust assumption is introduced.

---

## ADR-018 — OMI container, provenance, and signatures

**Question.** Is the container merely ZIP transport, or the authority for manuscript/history/assets/profile/output/signatures?

**Decision.** The container is a separately versioned packaging layer with manifest, canonical paths, checksums, and optional profile/history/output/evidence entries. Manuscript JSON remains the portable semantic core. Signatures cover manifest and exact artifact digests; they are not ad hoc top-level manuscript fields or localStorage state.

**Alternatives considered.** One large JSON with base64 assets; couple container and schema version; inject signatures into the manuscript object.

**Rationale.** The current container parser is secure and implementation already supports much of the needed package behaviour. A separate packaging layer preserves JSON interoperability while allowing large assets/history/evidence to be externalized.

**Consequences.** OMI-SPEC-330 needs a manifest schema and cross-repository golden fixtures. Container validation is two-stage: package integrity then manuscript semantics. Key lifecycle is separate from document semantics.

**Revisit when.** Streaming/content-addressed remote packaging exceeds ZIP limits; a new container major can then evolve without changing OMI JSON.

---

## ADR-019 — Stable/preview capability policy

**Question.** Must every implemented or visible feature be guaranteed as stable in 1.0?

**Decision.** No. A stable/preview/experimental/deferred capability manifest defines support per platform and format. Existing code or a smoke test is not a stable support promise. Preview failure is not generally release-blocking, except for privacy, data-loss, and security defects.

**Alternatives considered.** Every visible feature is stable; remove all preview features; one global platform status.

**Rationale.** Evidence maturity differs substantially between JATS/HTML/DOCX and some DTP/EPUB/iOS areas. Working code should not be deleted merely because it has not yet earned a stable guarantee.

**Consequences.** Runtime UI, documentation, and release metadata are generated from or checked against the same capability manifest. Promotion requires a defined evidence gate. Demotion of stable capability within 1.x requires exceptional cause.

**Revisit when.** Every release is planned and whenever a capability completes its promotion corpus.

---

## ADR-020 — General executable plugin runtime

**Question.** Should 1.0 include a general plugin system that executes third-party code?

**Decision.** Deferred. 1.0 supports built-in reviewed connector adapters and a declarative manifest/capability registry. Arbitrary plugin code execution, sandboxing, signing marketplace, and plugin permission UX are a separate post-1.0 programme.

**Alternatives considered.** In-process JavaScript plugins; remote HTTP plugins with full-manuscript access; permanently hard-code every integration.

**Rationale.** The current registry is not an execution sandbox. A safe plugin runtime is a new trust boundary and product area, not a small stabilization task.

**Consequences.** 1.0 documentation must not claim arbitrary plugin execution. New integrations are added as reviewed adapters with scoped grants. Registry payloads cannot activate executable code.

**Revisit when.** There are at least three concrete third-party plugin use cases, a threat model, a viable sandbox, signing/distribution policy, and a dedicated maintenance owner.

## ADR-021 — Website publication assurance and editorial authority

**Question.** How may a website artifact say that it is peer reviewed when a journal or press does not use OJS or OMP, without making a website connector or a client-side switch the authority?

**Decision.** Publication intent and review assurance are separate. Every Studio website artifact carries a visible, accessible and machine-readable assurance of either `not-peer-reviewed` or `peer-reviewed`. The circular mark is language-independent and uses the fixed wording `OMI · PEER REVIEW · VERIFIED` or `OMI · PEER REVIEW · NOT VERIFIED`; the adjacent explanation remains localized. `VERIFIED` refers to Studio-recorded workflow evidence, not an OMI endorsement of content or scholarly quality. The reviewed value requires a completed Studio-native scientific review round and a separate server-side editor acceptance decision bound to the exact committed revision and manuscript-state digest. Review completion alone is not acceptance. When OJS/OMP owns the workflow it remains authoritative; externally bound assignments cannot create a Studio-native decision. The website/WordPress adapter is only an `ArtifactDeliveryPort`. The assurance notice is part of the rendered bytes before the publication-build hash is calculated, and a server-issued execution grant binds the selected target-configuration version and revalidates the evidence before delivery. A declared WordPress transport projection may extract the article and relocate embedded media, but its exact outgoing digest is receipted separately from the approved standalone-artifact digest. Public evidence contains decision ID, evidence digest, round and time, never reviewer identity, confidential feedback or recommendations. The seal attests workflow evidence, not the truth of the article.

For a journal or press without OJS/OMP, publication-venue authority may additionally be verified by a one-time DNS TXT challenge under the venue's domain. DNS TXT data is public by design: the value is **not a secret credential and does not identify an editor**. The proof comes from an authenticated Studio account being able to publish a fresh, server-issued challenge at the required DNS name before expiry. The challenge is bound server-side to that account and may be consumed only once; reading the public TXT value cannot grant another account authority. DNS control is therefore an **organizational authority proof, not peer-review evidence**. Successful DNS verification grants the claimant a `DOMAIN_ADMIN` role. An active domain administrator may delegate additional `DOMAIN_ADMIN`, `EDITOR` or `EDITOR_IN_CHIEF` memberships to existing Studio accounts without creating another DNS TXT record. Delegated administrators receive the same venue-administration authority; the server forbids revocation of the last active domain administrator. Only editor roles, combined with manuscript-workspace editor access and a completed native scientific review round, may create a publisher-verified acceptance. The decision is also bound to the assurance-neutral publication-content digest and stores an immutable snapshot of venue, domain, DNS verification identity/time and editor role. Later DNS checks establish continued public domain assertion, not possession of a secret. Later DNS or membership changes do not rewrite historical decision provenance.

**Alternatives.** A user-selected “reviewed” boolean; infer review from a completed assignment; require OJS/OMP for every reviewed publication; let WordPress or the receiving website set the status; embed reviewer names or reports in the artifact.

**Reason.** Independent journals and presses need the Studio review workflow and web delivery without adopting PKP software. A default-deny assurance boundary preserves that capability without weakening anonymity, external workflow authority, provenance or the distinction between editorial acceptance and reviewer recommendation.

**Consequences.** Editing creates a new revision and invalidates use of the prior decision for a new reviewed artifact. Unreviewed scholarly and public-interest publishing remains valid but is never ambiguous. The idempotency identity includes assurance evidence and target configuration version. Website delivery stays Preview until outbox recovery, tamper, accessibility, receiver-contract and privacy tests pass. A false reviewed seal, missing unreviewed notice, undeclared or unreceipted transport transformation, or reviewer leak is release-blocking even while the feature is Preview.

**Review when.** A standard review-taxonomy or external evidence format is selected, a non-PKP publishing-system adapter supplies authoritative editorial decisions, or post-publication/open review requires additional public assurance states.

## Parameters to quantify before freeze

These are not new ADRs; they are concrete values required by the decisions above.

| Parameter | Decision input | Deadline |
|---|---|---|
| first stable OMI file-format version | OMI-SPEC-100/150/160/320 readiness | end of Phase A |
| forward-minor policy | unknown-field round-trip evidence | A05 |
| container size/entry/depth limits | current parser plus platform-memory benchmarks | A07/E01 |
| history snapshot/delta threshold | 120k/500k-word benchmarks | B07/D06 |
| stable exporter list | fixture/fidelity/validator evidence | C14 |
| website assurance and receiver contract | tamper, transport-digest, recovery, privacy and accessibility evidence | C15 |
| exact supported OJS/OMP versions | Docker E2E matrix | C07/C08 |
| token/session TTL and credential rotation | security review | B10/C12 |
| performance and bundle budgets | current baseline plus representative devices | D06 |
| RC soak length and blocker SLA | release ownership | before E05 |
