---
id: collaboration-permission-model
title: OMI-SPEC-190 — Collaboration and Permission Model
sidebar_label: Collaboration and Permission Model
description: Draft standard for manuscript-scoped collaboration, grants, effective permissions, invitations, session authorization, anonymity, audit evidence and federated authority boundaries.
keywords:
  - Open Manuscript Initiative
  - OMI-SPEC-190
  - collaboration
  - authorization
  - permission
  - invitation
  - anonymity
---

# OMI-SPEC-190 — Collaboration and Permission Model

## Document metadata

| Field | Value |
|---|---|
| Identifier | OMI-SPEC-190 |
| Title | Collaboration and Permission Model |
| Version | 0.1.0 |
| Status | Draft |
| Document type | Normative draft (requirements); examples and Studio mappings informative |
| Normative language | English |
| Editors | OMI maintainers |
| Last updated | 2026-10-31 |
| Replaces / replaced by | None / None |
| Depends on | OMI-SPEC-100, OMI-SPEC-120, OMI-SPEC-150, OMI-SPEC-160 |
| Related | OMI-SPEC-110, OMI-SPEC-130, OMI-SPEC-170, OMI-SPEC-180, OMI-SPEC-200, OMI-SPEC-240, OMI-SPEC-310, OMI-SPEC-320, OMI-SPEC-350 |
| Schemas / fixtures | Canonical permission/grant/event schema and normative fixtures **not yet published** |
| Reference implementation | [Studio collaboration architecture (ADR-023)](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/main/docs/architecture/adr-023-manuscript-collaboration.md) |
| Evidence tracking | [OMI Implementation Status Matrix](../governance/implementation-status-matrix.md) |
| Issues | [OMI specification issues](https://github.com/open-manuscript-initiative/omi/issues) |

## 1. Abstract

OMI-SPEC-190 defines an implementation-independent model for **who may perform which action upon which scholarly resource, under whose authority, in which context and for how long**. It covers scoped collaborative workspaces, explicit membership and delegation, invitations and lifecycle, effective authorization, authorization of simultaneous editing sessions, confidentiality and reviewer anonymity, revocation, accountable events, and the distinction between collaboration replicas and canonical scholarly revisions.

Collaboration MUST preserve the portability of manuscript semantics. Neither a live editor protocol nor a central server is mandatory. A local manuscript can remain editable by its owner when collaborative service is unavailable. The model does **not** grant unrestricted access to a manuscript merely because an account administers an institution or hosts its server.

## 2. Status and language

This is a proposed **Draft 0.1.0**, not Stable, a deployment claim or a certification. The [Specification Registry](../governance/specification-registry.md) determines the authoritative lifecycle state after review and merge. **MUST**, **MUST NOT**, **SHOULD**, **SHOULD NOT** and **MAY** are normative requirement terms. Statements under “Implementation evidence”, examples and roadmap are informative.

This draft establishes a semantic requirement set, not a canonical interoperable JSON authorization token, permission manifest or transport API. Formal OMI-SPEC-190 conformance must await accepted schemas, versioned fixtures, normative authorization profiles and independent validation.

## 3. Scope and exclusions

Within scope: scholarly resource identity and tenancy; principal identity and acting context; permissions and grants; manuscript/document/section/translation/review scopes; membership and invitation state; session access and live editing; policy evaluation; review confidentiality and audit evidence; lifecycle and failure behaviour; portability and federation boundaries.

Outside scope: a prescribed user interface, login provider, password method, Yjs/CRDT/operational-transformation protocol, database, mandatory cloud account, legal determination of copyright, academic authorship credit, or publisher policy. Editorial workflow and its decision states belong to [OMI-SPEC-200](./review-model.md); contributor assertions to [OMI-SPEC-150](./identity-contributor-model.md); semantic history to [OMI-SPEC-160](./versioning-change-model.md). A collaboration grant does not create contributor authorship or a published license.

## 4. Conformance classes

- **Policy authority:** maintains scoped grants, invitation state, policy versions and revocation.
- **Authorization decision point:** decides an identified action against authoritative membership, policy and context.
- **Authorization enforcement point:** enforces decisions for reads, writes, exports, synchronization and events.
- **Collaboration service:** manages shared sessions and reconciles mutable projections with portable manuscript states.
- **Audit producer / audit consumer:** emits / interprets attributable, confidential policy and action evidence.
- **Interoperability consumer:** imports an exchanged declaration without assuming local accounts or foreign grants confer local access.

Implementations MAY support only selected classes. Every claimed class MUST identify the exact specification version, supported scopes, action vocabulary, enforcement surfaces, trust boundaries, unimplemented requirements and independently verified tests. Studio feature parity is not conformance.

## 5. Terms and entities

| Term | Meaning |
|---|---|
| **Principal** | Authenticated account, service or delegated actor making a request. Not automatically an OMI scholarly contributor. |
| **Scholarly resource** | An identified manuscript, section, block, annotation, translation variant, review assignment or controlled artifact. |
| **Workspace** | Collaboration context bound to an identified resource and an authoritative controlling service. |
| **Authority** | Entity entitled to issue, validate, revoke or federate grants for a defined scope. |
| **Grant** | Explicit policy statement allowing actions for a principal (possibly through a scoped role), subject to constraints. |
| **Effective permission** | Authorization decision after all applicable grants, constraints, denials and current states are evaluated. |
| **Invitation** | Time-limited offer of membership; never itself evidence of accepted permission. |
| **Membership** | Explicit accepted relationship between a principal and workspace, with status and scope. |
| **Session ticket** | Short-lived credential for a single authenticated service/session capability. |
| **Replica** | Mutable transport/coordination state for concurrent editing; not inherently a committed OMI revision. |
| **Projection** | Audience-specific view of content, identity and review evidence allowed by policy. |
| **Policy epoch** | Monotonically changing policy revision or equivalent invalidation evidence used to defeat stale decisions. |
| **Audit event** | Attributable, time-bound record of an authority, membership, permission or sensitive workflow transition. |

## 6. Core requirements

**REQ-COL-001:** Every authorization decision MUST identify the principal, action, resource scope and responsible authority; unknown identities or scopes MUST NOT default to access.

**REQ-COL-002:** An implementation MUST separate account identity and authorization from OMI-SPEC-150 contributors, scholarly roles, attribution and bibliographic metadata. Being named as author, translator, editor or reviewer in a manuscript MUST NOT by itself grant access.

**REQ-COL-003:** Permissions MUST be restricted to explicitly identified resources and actions. A grant to one manuscript MUST NOT silently authorize another manuscript or a connected institution's other resources.

**REQ-COL-004:** A permission evaluation MUST consider current membership/grant status, expiry, applicable scope, action, contextual restrictions and any explicit denial. Unresolvable or unavailable authoritative evidence MUST result in denial of new privileged actions, not a manufactured grant.

**REQ-COL-005:** Resource hierarchy inheritance, if supported, MUST be explicit, deterministic and bounded; a narrower restriction MUST NOT be overridden by a broader positive grant. Implementations MUST document their conflict-resolution policy.

**REQ-COL-006:** A system MUST check effective permission at the trusted service boundary for each protected read, mutation, export, history or review operation. Hiding a button or trusting client-provided role, e-mail, resource identifier or workspace store is insufficient.

**REQ-COL-007:** Policy and authorization MUST remain independent of the editing transport and portable manuscript serialization. CRDT updates MUST NOT silently become canonical OMI-SPEC-160 revisions.

**REQ-COL-008:** Collaboration permissions MUST NOT make an authorized author's own semantic content irreversibly uneditable. Policy may restrict an unauthorized actor, but provenance or annotation requirements alone MUST NOT insert undeletable hidden manuscript content.

## 7. Scopes, actions and roles

A permission record has the following **conceptual** attributes; the field names are illustrative, not a canonical wire schema:

| Property | Cardinality | Definition |
|---|---:|---|
| grantId | 1 | Stable grant identifier within authority |
| authorityId | 1 | Issuer/evaluator of the grant |
| subjectId | 1 | Principal or scoped group/role binding |
| resourceId + resourceKind | 1 | Explicitly identified target |
| actions | 1..n | Versioned, declared operations |
| effect | 1 | Allow or deny |
| constraints | 0..n | Time, policy, workflow, review, environment or delegation constraints |
| issuedAt / expiresAt | 1 / 0..1 | Validity envelope |
| issuer + policyVersion | 1 / 1 | Accountability and decision context |
| status | 1 | Active, suspended or revoked (or an explicitly mapped equivalent) |

Core action categories: **read**, **edit-content**, **edit-metadata**, **annotate**, **edit-translation**, **view-history**, **export**, **invite**, **manage-members**, **manage-policy**, **approve-or-publish**. They are **separate** actions; read permission does not imply export, and content editing does not imply editorial acceptance. An implementation MAY define additional actions but MUST declare their meaning.

**REQ-COL-010:** Roles MUST expand into declared action grants, rather than being accepted as self-evident universal privileges. The same principal MAY have different roles across resources.

**REQ-COL-011:** Grant inheritance MUST NOT cross manuscript, tenant or editorial authority boundaries without explicit agreement by the target authority.

**REQ-COL-012:** Delegation MUST be no broader and no longer-lived than the delegator's effective delegable permission, and MUST be revocable. Transitive delegation MUST be explicitly supported or rejected.

**REQ-COL-013:** Elevated installation/institution administration MUST NOT imply access to unpublished scholarly manuscripts, reviewer identities or confidential editorial files. Emergency/break-glass access, if supported, requires separately declared authorization, purpose, limited duration and audit evidence.

**REQ-COL-014:** Missing support for a finer scope (for example a translation segment or selected section) MUST NOT widen permission to the whole manuscript. The operation MUST be rejected or handled under a separately consented, explicit broader grant.

**REQ-COL-015:** Services MUST prevent confused-deputy authorization: a valid token for one API, workspace, server or connected journal MUST NOT authorize an unrelated resource or acting context.

## 8. Invitation and membership lifecycle

Conceptual states: invitation **pending → accepted / declined / expired / revoked**; membership **active → suspended / removed**. Creation of membership outside invitation acceptance (such as initial resource ownership) MUST be separately authorized and attributable.

**REQ-COL-020:** Invitation creation MUST record issuer, intended recipient or bound account, target resource, proposed role/actions, expiry, single-use acceptance mechanism and status.

**REQ-COL-021:** Pending, declined, expired and revoked invitations MUST confer no read or write privileges. E-mail notification delivery alone MUST NOT confer membership.

**REQ-COL-022:** Acceptance MUST require an authenticated eligible principal and a verifiable match to the intended recipient/account under the issuing authority's identity policy. Acceptance MUST be explicit; invitation tokens MUST be single-use, unguessable, time-limited and protected against replay.

**REQ-COL-023:** Invitation recipients MUST be able to decline an invitation; authorized administrators MUST be able to revoke an unaccepted invitation and remove or suspend an accepted membership.

**REQ-COL-024:** Revocation/suspension MUST prevent new privileged requests and new collaboration sessions, and active sessions MUST be reauthorized or terminated within a defined bounded interval. A stale session or cached grant MUST NOT survive policy revocation indefinitely.

**REQ-COL-025:** Role changes, ownership transfer and deletion MUST be authorized, checked against orphaned-resource policy and recorded as auditable transitions. A system MUST NOT quietly transfer ownership merely because the current owner leaves.

**REQ-COL-026:** Invitation enumeration, acceptance failures and membership lists MUST minimize disclosure of otherwise private accounts, manuscript titles and e-mail addresses.

## 9. Session and simultaneous editing

**REQ-COL-030:** A shared editing session MUST be bound to the target resource, principal, granted capabilities, expiry and issuing authority. Synchronization services MUST recheck authority independently of client-supplied room names or presence labels.

**REQ-COL-031:** Read-only principals MUST NOT be able to submit content-changing operations through WebSocket, background sync, conflict replay or any alternate API path.

**REQ-COL-032:** Concurrent editing implementations MUST describe consistency, synchronization, recoverability and offline/reconnect boundaries. They MUST distinguish acknowledged, locally pending and durably checkpointed changes.

**REQ-COL-033:** Durable checkpoints exported from a session MUST be validated against the target OMI manuscript model and MUST preserve object identities and supported semantics, or emit explicit loss/conflict diagnostics without silently discarding scholarly data.

**REQ-COL-034:** Creating an OMI-SPEC-160 semantic revision or change-set from a session MUST be an explicit, attributable, authorized transition. A sequence of cursor movements or CRDT transport updates is not an OMI revision ledger.

**REQ-COL-035:** Offline pending changes after a principal's access is revoked MUST NOT be silently replayed into the shared authoritative resource. A system MAY offer an authorized local export/copy without granting renewed server access, subject to local confidentiality policy.

**REQ-COL-036:** Awareness, online presence and cursor/color labels MUST be treated as ephemeral data, not durable authorship, review approval or a substitute for an audit log.

**REQ-COL-037:** Shared-state recovery MUST distinguish network reconnect, process restart, persistent-state restoration and multi-node coordination. A single-node profile MUST NOT advertise distributed consistency or failover without supporting evidence.

## 10. Review, translations and confidentiality

**REQ-COL-040:** Reviewer, language-reviewer, translator and editorial assignments MUST have separately scoped permissions; scholarly role labels MUST NOT automatically become generic workspace editor privileges.

**REQ-COL-041:** Author-visible and participant-visible projections MUST enforce the declared anonymity and visibility policy. Reviewer identity, e-mail, ORCID, hidden metadata, revision attribution, comments, asset paths, filenames, WebSocket presence and audit details MUST NOT leak through alternate export, preview or API paths.

**REQ-COL-042:** Permission to view an editorial review MUST NOT automatically grant permission to view editor-only feedback, review assignments or unrelated rounds.

**REQ-COL-043:** Authority for editorial decisions and reviewer assignments MUST remain with the controlling editorial system (including an external OJS/OMP installation) unless an explicitly trusted, scoped integration transfers an action.

**REQ-COL-044:** Translation access MUST identify the source/target resource and applicable language or variant scope. Translators MUST NOT gain unrelated source-edit or publisher authority through their translation assignment.

**REQ-COL-045:** Confidential data MUST remain segregated in logs, notifications, exports, snapshots and event feeds; a compliant consumer MUST fail closed when redaction or audience policy cannot be enforced.

## 11. Auditability, history and provenance

An auditable event conceptually includes event ID, authority, actor, acting context, action, resource scope, decision/transition, policy version, timestamp and applicable evidence reference. Sensitive participant identities MAY be pseudonymized in audience-limited exports, but the authoritative audit trail MUST preserve accountable evidence under appropriate access controls.

**REQ-COL-050:** Issuance, acceptance, delegation, role/policy changes, revocation, denied sensitive operations and ownership transfers MUST be attributable through a tamper-evident or otherwise integrity-verifiable audit strategy appropriate to the deployment profile.

**REQ-COL-051:** Audit evidence MUST distinguish **an authorization decision**, **a synchronized editor event**, **a semantic revision** and **an editorial approval**; none may be inferred solely from another.

**REQ-COL-052:** Audit records MUST disclose their retention, integrity, redaction and access policy; confidential review or identity details MUST NOT be published merely because an audit trail exists.

**REQ-COL-053:** Decisions based on stale or incomplete policy evidence MUST NOT be represented as successful authoritative grants. An audit trail MUST NOT be recreated from display-name cursor events.

## 12. Portability, federation and data protection

**REQ-COL-060:** The exchangeable scholarly manuscript MUST remain independent of local account secrets, session tickets, invitation bearer tokens and deployment-specific access control databases. Implementations MAY serialize non-secret rights/provenance references in a declared extension.

**REQ-COL-061:** On importing a manuscript into a different authority or server, foreign grants MUST NOT silently become active local permissions. A target authority MUST explicitly map or reissue access decisions.

**REQ-COL-062:** Cross-server collaboration MUST identify each authority and trust relationship, validate audience/resource bindings, define revocation propagation and avoid assuming that server discovery or DNS registration confers manuscript rights.

**REQ-COL-063:** A deployment MUST document purpose limitation, retention/deletion, secure transport and secret handling for private invitations, membership, audit events and session data. Provider-specific residency/encryption options are deployment profiles, not new manuscript semantics.

**REQ-COL-064:** Authorization systems SHOULD offer portable, non-secret evidence of membership and permission decisions when permitted by the disclosure policy, without exporting operational access credentials.

## 13. Authorization algorithm (informative)

1. Authenticate the principal and obtain the trusted acting context.
2. Resolve the authoritative resource identity and its parent/tenant boundaries.
3. Load current grants, membership status, denials, expiry, authority and policy epoch.
4. Evaluate the requested action, scope and workflow/confidentiality constraints.
5. Deny missing, unknown, stale, ambiguous or explicitly prohibited access.
6. Enforce the decision at the API/transport/data-projection boundary.
7. Recheck on session admission, mutation, expiry and policy change; record sensitive transitions.

A UI may cache a **display** of permissions but must not substitute it for server enforcement.

## 14. Minimum test scenarios (proposed, not normative fixtures)

| ID | Scenario | Required outcome |
|---|---|---|
| COL-T01 | Invited but pending user opens shared document | Denied |
| COL-T02 | Wrong account / replayed / expired invitation | Denied |
| COL-T03 | Accepted scoped co-author modifies own manuscript | Allowed within granted scope |
| COL-T04 | Viewer submits mutation over WebSocket | Denied |
| COL-T05 | Member revoked during live editing | No further privileged actions after bounded invalidation |
| COL-T06 | Permission for manuscript A reused for manuscript B | Denied |
| COL-T07 | Institution administrator without manuscript grant | Denied |
| COL-T08 | Translator attempts unrelated source or editorial edits | Denied |
| COL-T09 | Anonymous review export, audit or presence | No identity disclosure |
| COL-T10 | Offline edits replayed after revocation | Rejected from shared authority |
| COL-T11 | CRDT checkpoint to portable OMI model | Schema/identity checked, loss disclosed |
| COL-T12 | Import foreign manuscript with external ACL | No automatic local authorization |
| COL-T13 | Policy service unavailable when new access sought | Denied, not silently allowed |
| COL-T14 | Local author edits without collaboration service | Permitted under local ownership; no fabricated shared revision |

These are candidate cases for future canonical fixtures, not claims that a compliant suite has been published.

## 15. Cross-specification relationship

| Specification | Boundary |
|---|---|
| OMI-SPEC-100 / 120 | Stable manuscript and scholarly resource identity; grant scope anchors |
| OMI-SPEC-110 / 130 | Anchors, annotations, comments and audience-specific visibility |
| OMI-SPEC-150 | Account/agent/contributor separation and contextual scholarly roles |
| OMI-SPEC-160 | Committed semantic revisions and attributable change events, separate from transport |
| OMI-SPEC-170 | Source/target language variant and translation assignment scope |
| OMI-SPEC-180 | Authorization checks and evidence coverage may be reported, not assumed complete |
| OMI-SPEC-200 | Review assignments, rounds, recommendations and editorial authority |
| OMI-SPEC-240 | Publication permissions and release authority are separate gates |
| OMI-SPEC-310 / 350 | Authentication/authorization transport and integration trust profiles |
| OMI-SPEC-320 | Portable manuscript exchange excludes service-local secrets and live credentials |

## 16. Studio implementation evidence (informative)

Open Manuscript Studio has a server-authorized, accepted-invitation collaboration flow using Yjs, document-scoped tickets and PostgreSQL-backed state in its supported single-node deployment profile. Its [ADR-023](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/main/docs/architecture/adr-023-manuscript-collaboration.md) distinguishes live replicas, authoritative access and semantic revision checkpoints. The [Studio live collaboration guide](../foundations/studio-live-collaboration.md) describes current author workflows.

The separately maintained [Studio implementation status](../governance/studio-implementation-status.md) records product capabilities, not compliance. Local workspace models and editorial permission surfaces do not prove all requirements here. In particular, published canonical grant/event schemas, independently executable OMI-SPEC-190 fixtures, complete cross-surface anonymity tests and cross-server authorization conformance remain outstanding. Do not construe this Draft as evidence of deployed support for every action, role, denial or delegation feature.

## 17. Open issues before review candidate

1. Agree a canonical grant, membership, decision and audit-event schema and action vocabulary.
2. Specify scope and hierarchy selectors without allowing broader accidental grants.
3. Establish policy epochs, revocation latency bounds and offline merge rules per deployment profile.
4. Standardize protocol-independent rights evidence without exposing live credentials.
5. Approve double-blind/redaction adversarial fixtures across exports, collaboration transports and APIs.
6. Define inter-server trust/revocation profiles for distributed independent installations.
7. Separate administrative incident access from normal institution administration.
8. Publish multi-implementation fixture outcomes and requirement-to-test matrices.
9. Document migration and compatibility of grant vocabularies across specification versions.

## 18. References

**Normative model dependencies:** [Document Model](./document-model.md), [Scholarly Object Model](./core/scholarly-object-model.md), [Identity and Contributor Model](./identity-contributor-model.md), [Versioning and Change Model](./versioning-change-model.md).

**Related and informative:** [Specification Registry](../governance/specification-registry.md), [Roadmap to OMI 1.0](../governance/roadmap-to-omi-1.0.md), [Studio collaboration architecture](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/main/docs/architecture/adr-023-manuscript-collaboration.md), [Studio implementation status](../governance/studio-implementation-status.md).

## 19. Change history

| Version | Date | Change |
|---|---|---|
| 0.1.0 | 2026-10-31 | Initial implementation-independent Draft: authority and scope, grants, invitations, sessions, review confidentiality, audit, federation and evidence gaps. |
