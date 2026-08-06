---
id: identity-contributor-model
title: OMI-SPEC-150 — Identity and Contributor Model
sidebar_label: Identity and Contributor Model
description: Normative model for agents, names, external identity assertions, affiliations, contributions, attribution, and the separation of scholarly identity from application accounts.
keywords:
  - Open Manuscript Initiative
  - OMI
  - identity
  - contributors
  - attribution
  - ORCID
  - affiliations
---

# OMI-SPEC-150 — Identity and Contributor Model

## Document metadata

| Field | Value |
|---|---|
| Identifier | `OMI-SPEC-150` |
| Title | Identity and Contributor Model |
| Version | `0.1.0` |
| Status | Draft |
| Document type | Normative |
| Normative language | English |
| Editors | OMI maintainers |
| Last updated | 2026-08-06 |
| Replaces | None |
| Replaced by | None |
| Depends on | `OMI-SPEC-120`, `OMI-SPEC-140` |
| Used by | `OMI-SPEC-160`, `OMI-SPEC-170`, `OMI-SPEC-190`, `OMI-SPEC-200`, `OMI-SPEC-220`, `OMI-SPEC-310` |
| Schemas | None published |
| Profiles | None published |
| Implementation status | [OMI Implementation Status Matrix](../governance/implementation-status-matrix.md) |
| Issue tracker | Open Manuscript Initiative repository issues |

## 1. Abstract

This specification defines how the Open Manuscript Initiative represents agents and their contextual participation in scholarly objects and workflows. It provides a common model for persons, organisations, consortia, projects, services, unidentified agents, names, external identifiers, affiliations, contribution roles, contributor order, corresponding-contributor status, and attribution.

The model separates an agent from an application account, a contributor from the agent that fulfils the contribution, and a role from a permanent property of that agent. It also separates a local OMI identity from assertions made by external identity systems such as ORCID or ROR.

The specification supports multilingual and historical names, time-bounded affiliations, pseudonymous and restricted identities, provenance-bearing identity assertions, and explicit contribution relationships to manuscripts or other scholarly objects. It does not define authentication protocols, workspace permissions, peer-review disclosure policy, or the complete revision history of identity records.

## 2. Status of this document

This document is a **Draft** specification of the Open Manuscript Initiative.

The model, property names, conformance classes, and processing requirements may change incompatibly before version 1.0. Implementations claiming support MUST identify the exact specification version or immutable commit used.

This Draft activates the identifier reserved for the Identity and Contributor Model in the OMI Specification Registry. Discussion and change proposals are tracked in the Open Manuscript Initiative repository.

## 3. Conformance

### 3.1 Conformance classes

This specification defines four conformance classes:

- **Conforming identity producer:** creates or exports agent, identity, affiliation, or contribution data.
- **Conforming identity consumer:** imports, stores, displays, transforms, or preserves such data.
- **Conforming identity validator:** evaluates data against the structural and semantic requirements of this specification.
- **Conforming identity resolver:** compares, reconciles, or enriches agent identities or external identifier assertions.

An implementation MAY claim more than one class.

### 3.2 General conformance

A conforming implementation MUST satisfy every applicable **MUST** and **MUST NOT** requirement for its declared class.

An optional feature MAY be omitted. When implemented, the feature MUST satisfy every requirement defined for that feature.

A conformance claim SHOULD identify:

- implementation name and version;
- `OMI-SPEC-150` version;
- declared conformance class;
- supported agent types and identifier schemes;
- supported privacy and visibility controls;
- known limitations;
- conformance-test version, when available.

### 3.3 Core requirements

**REQ-IDN-001:** An agent MUST be represented independently from every application account associated with it.

**REQ-IDN-002:** A contribution MUST reference an agent and a contributed-to OMI entity; it MUST NOT duplicate the complete agent as an embedded contributor record.

**REQ-IDN-003:** A contribution role MUST be contextual to one contribution and MUST NOT be interpreted as a permanent characteristic of the agent.

**REQ-IDN-004:** An external identifier MUST be represented as an assertion with an identifier scheme, value, subject, provenance, and verification state.

**REQ-IDN-005:** A consumer MUST NOT merge two agents solely because their names, e-mail addresses, affiliations, or unverified external identifiers are equal.

**REQ-IDN-006:** A producer MUST preserve the distinction between unknown, withheld, pseudonymous, and explicitly anonymous identities.

**REQ-IDN-007:** Restricted identity and contact information MUST NOT be exposed through a public serialization or rendering unless an applicable access policy authorises disclosure.

**REQ-IDN-008:** Contributor order MUST be represented independently from role, identity, and contribution magnitude.

## 4. Scope

This specification defines:

- agent identity and supported agent categories;
- local and external identifiers for agents;
- multilingual, structured, unstructured, historical, and pseudonymous names;
- identity assertions and their provenance and verification state;
- contextual affiliations;
- contributions to manuscripts and other scholarly objects;
- contribution roles and optional controlled-vocabulary mappings;
- contributor order and corresponding-contributor designation;
- contextual attribution names;
- restricted identity and contact data;
- identity comparison, reconciliation, merge, and split requirements;
- validation and preservation behaviour.

### 4.1 Out of scope

This specification does not define:

- passwords, passkeys, OAuth, OpenID Connect, session management, or other authentication mechanisms;
- application account lifecycle and account recovery;
- workspace membership, authorisation, or permission calculation;
- peer-review anonymity or disclosure policy;
- legal identity verification;
- institutional employment verification;
- authorship ethics or eligibility criteria;
- a universal contribution-role vocabulary;
- version graphs, change sets, or complete audit-event semantics;
- public profile page design.

Authentication belongs to platform security. Workspace permissions belong to `OMI-SPEC-190`. Review identity disclosure belongs to `OMI-SPEC-200`. Revision and change semantics belong to `OMI-SPEC-160`.

## 5. Terminology

The [OMI Terminology and Definitions](../governance/terminology.md) document applies.

### 5.1 Agent identity

The OMI object that represents one agent as a distinguishable entity within a defined identity scope.

An agent identity may describe a person, organisation, consortium, project, service, or unidentified agent. It is not an authentication credential and does not imply legal verification.

### 5.2 Account

An implementation-managed record used to authenticate, authorise, or personalise access to software.

An account MAY be associated with an agent identity, but it is not part of the scholarly attribution model and MUST NOT be treated as the agent itself.

### 5.3 Identity assertion

A provenance-bearing statement that a named identifier, name, affiliation, contact point, or other identity property applies to an agent.

### 5.4 External identifier assertion

An identity assertion connecting an agent to an identifier assigned by an external scheme or authority.

### 5.5 Name form

One representation of an agent's name for a specified language, script, period, purpose, or source.

### 5.6 Contribution

A contextual relationship stating that an agent contributed in one or more roles to a defined OMI entity.

### 5.7 Attribution

The representation of a contribution for acknowledgement, responsibility, citation, display, or provenance.

### 5.8 Contribution role

A value describing the function performed by an agent in one contribution context.

### 5.9 Affiliation assertion

A time-bounded and provenance-bearing statement connecting an agent to an organisation, organisational unit, project, or comparable institutional context.

### 5.10 Identity resolution

The process of determining whether identity records or assertions refer to the same agent, different agents, or an unresolved relationship.

### 5.11 Withheld identity

An identity known in an authorised context but deliberately unavailable to the current consumer or audience.

### 5.12 Unidentified agent

An agent whose distinguishing identity is not known, not recorded, or not recoverable.

An unidentified agent is not equivalent to a withheld identity.

## 6. Design principles

This section is informative.

- **Context before global assumptions:** roles, affiliations, ordering, and corresponding status are contextual.
- **Identity before display:** an agent is not defined by one display-name string.
- **Assertions with provenance:** imported or externally supplied identity data remains attributable to its source.
- **No unsafe automatic merging:** ambiguity is preserved until adequate evidence supports reconciliation.
- **Privacy by design:** public attribution and restricted operational data are separate.
- **Multilingual representation:** names and labels support language, script, ordering, and historical variation.
- **Account independence:** scholarly records remain portable between installations and applications.
- **Loss-aware interoperability:** imports and exports disclose omitted, transformed, or unverifiable identity information.

## 7. Model overview

```text
Application account
    └── may be privately associated with ── Agent identity
                                               ├── Name forms
                                               ├── External identifier assertions
                                               ├── Affiliation assertions
                                               ├── Contact points
                                               └── Contributions
                                                        ├── Target scholarly object
                                                        ├── Contribution roles
                                                        ├── Contributor order
                                                        ├── Corresponding status
                                                        └── Contextual attribution name
```

The account association is implementation-local unless an explicit protected exchange profile defines otherwise.

An agent identity may participate in multiple contributions. A contribution may contain multiple roles but has one primary agent and one contributed-to entity. Group contributions use an organisation, consortium, project, or explicitly modelled collective agent rather than an array disguised as one person.

## 8. Data model

### 8.1 Agent identity

**Purpose:** Represent an agent independently from accounts, roles, and mutable display labels.  
**Identifier:** A stable local identifier in the containing OMI identity scope.  
**Lifecycle:** Persistent; correction, merge, split, deprecation, and replacement require explicit provenance.

| Property | Type | Required | Cardinality | Description |
|---|---|---:|---:|---|
| `id` | string | Yes | `1` | Stable local identifier. |
| `type` | string | Yes | `1` | Agent category. |
| `names` | `NameForm[]` | Yes | `1..*` | Known name representations. |
| `identifiers` | `ExternalIdentifierAssertion[]` | No | `0..*` | External identifier assertions. |
| `affiliations` | `AffiliationAssertion[]` | No | `0..*` | Contextual affiliations. |
| `contacts` | `ContactPoint[]` | No | `0..*` | Contact data with visibility rules. |
| `status` | string | No | `0..1` | Active, historical, merged, deprecated, unidentified, or implementation-defined extension. |
| `replacedBy` | string | No | `0..1` | Agent identity that replaces a merged or deprecated record. |
| `provenance` | `ProvenanceAssertion[]` | No | `0..*` | Origin and custody information. |
| `extensions` | object | No | `0..1` | Namespaced extension content. |

The core `type` values are:

- `person`;
- `organization`;
- `consortium`;
- `project`;
- `service`;
- `unidentified`.

A profile MAY define narrower agent types.

**REQ-IDN-010:** Every agent identity MUST have at least one name form, except an `unidentified` agent, which MAY use a controlled placeholder label.

**REQ-IDN-011:** The `id` MUST remain stable when a preferred name, affiliation, contact point, or external identifier changes.

**REQ-IDN-012:** A merged or deprecated identity MUST retain its former identifier and SHOULD identify its replacement through `replacedBy`.

**REQ-IDN-013:** A person identity MUST NOT require a legal name, binary gender marker, honorific, e-mail address, ORCID, or affiliation.

### 8.2 Name form

| Property | Type | Required | Cardinality | Description |
|---|---|---:|---:|---|
| `id` | string | Yes | `1` | Stable identifier for this name assertion. |
| `display` | string | Yes | `1` | Complete display form. |
| `given` | string | No | `0..1` | Given-name component when applicable. |
| `family` | string | No | `0..1` | Family-name component when applicable. |
| `prefix` | string | No | `0..1` | Prefix when semantically part of the name. |
| `suffix` | string | No | `0..1` | Suffix when semantically part of the name. |
| `literal` | string | No | `0..1` | Unparsed or organisation-style literal name. |
| `language` | BCP 47 tag | No | `0..1` | Language of the name form. |
| `script` | ISO 15924 code | No | `0..1` | Script when not adequately expressed by the language tag. |
| `usage` | string | No | `0..1` | Preferred, published, legal, former, pseudonym, transliteration, translation, or extension. |
| `preferred` | boolean | No | `0..1` | Preferred within the declared context. |
| `validFrom` | date or date-time | No | `0..1` | Start of known validity. |
| `validUntil` | date or date-time | No | `0..1` | End of known validity. |
| `source` | `ProvenanceAssertion` | No | `0..1` | Source of the name form. |

**REQ-IDN-020:** A name form MUST include `display` and MUST NOT require that it can be losslessly decomposed into given and family components.

**REQ-IDN-021:** A consumer MUST preserve name forms that use scripts, ordering conventions, or components unsupported by its interface.

**REQ-IDN-022:** At most one name form MAY be marked preferred for the same agent, language, script, usage, and processing context.

**REQ-IDN-023:** A transliterated or translated name MUST NOT silently replace the source-script name.

### 8.3 External identifier assertion

| Property | Type | Required | Cardinality | Description |
|---|---|---:|---:|---|
| `id` | string | Yes | `1` | Local assertion identifier. |
| `scheme` | string or URI | Yes | `1` | Identifier scheme, such as ORCID or ROR. |
| `value` | string | Yes | `1` | Scheme-specific identifier value. |
| `uri` | URI | No | `0..1` | Canonical or resolvable URI when known. |
| `subject` | string | Yes | `1` | Referenced agent identity. |
| `verification` | string | Yes | `1` | Unverified, self-asserted, source-verified, registry-verified, rejected, or extension. |
| `verifiedAt` | date-time | No | `0..1` | Verification time. |
| `verifiedBy` | agent or service reference | No | `0..1` | Verifying agent or processor. |
| `source` | `ProvenanceAssertion` | Yes | `1` | Origin of the assertion. |
| `visibility` | string | No | `0..1` | Public, restricted, private, or inherited. |

**REQ-IDN-030:** Identifier comparison MUST follow the declared scheme's normalization and comparison rules.

**REQ-IDN-031:** A producer MUST NOT label an external identifier as registry-verified unless a recorded verification operation supports that state.

**REQ-IDN-032:** Resolution failure MUST NOT by itself invalidate a syntactically valid persistent identifier.

**REQ-IDN-033:** Conflicting external identifiers MUST be preserved as separate assertions until explicitly resolved, rejected, or superseded.

**REQ-IDN-034:** An ORCID assertion MUST identify a person agent; a ROR assertion MUST identify an organisation agent.

### 8.4 Affiliation assertion

| Property | Type | Required | Cardinality | Description |
|---|---|---:|---:|---|
| `id` | string | Yes | `1` | Stable assertion identifier. |
| `agent` | agent reference | Yes | `1` | Affiliated agent. |
| `organization` | agent reference | Yes | `1` | Organisation or comparable institutional agent. |
| `unit` | string or agent reference | No | `0..1` | Department, faculty, laboratory, or unit. |
| `position` | multilingual string | No | `0..1` | Position or contextual title. |
| `role` | term | No | `0..1` | Nature of the affiliation. |
| `validFrom` | date or date-time | No | `0..1` | Beginning of known validity. |
| `validUntil` | date or date-time | No | `0..1` | End of known validity. |
| `source` | `ProvenanceAssertion` | Yes | `1` | Source and assertion responsibility. |
| `verification` | string | No | `0..1` | Verification state. |

**REQ-IDN-040:** An affiliation MUST be represented as a relationship, not as an immutable text property of a person.

**REQ-IDN-041:** An affiliation used for a contribution SHOULD identify whether it reflects the contribution time, submission time, publication time, or another declared context.

**REQ-IDN-042:** Absence of start or end dates MUST mean unknown or open-ended according to the surrounding profile; it MUST NOT automatically mean current.

### 8.5 Contact point

| Property | Type | Required | Cardinality | Description |
|---|---|---:|---:|---|
| `id` | string | Yes | `1` | Local contact assertion identifier. |
| `type` | string | Yes | `1` | E-mail, telephone, postal, URI, messaging, or extension. |
| `value` | string | Yes | `1` | Contact value. |
| `purpose` | string | No | `0..1` | Correspondence, editorial, administrative, public, or extension. |
| `visibility` | string | Yes | `1` | Public, restricted, private, or inherited. |
| `validFrom` | date or date-time | No | `0..1` | Validity start. |
| `validUntil` | date or date-time | No | `0..1` | Validity end. |
| `source` | `ProvenanceAssertion` | Yes | `1` | Source and custody information. |

**REQ-IDN-050:** Contact points MUST be optional in portable scholarly data.

**REQ-IDN-051:** A private or restricted contact point MUST be omitted, encrypted, access-controlled, or replaced by a non-sensitive forwarding mechanism in outputs not authorised to receive it.

**REQ-IDN-052:** E-mail equality MUST NOT be treated as conclusive proof that two identity records represent the same agent.

### 8.6 Contribution

| Property | Type | Required | Cardinality | Description |
|---|---|---:|---:|---|
| `id` | string | Yes | `1` | Stable contribution identifier. |
| `agent` | agent reference | Yes | `1` | Contributing agent. |
| `target` | OMI object reference | Yes | `1` | Manuscript, document, section, resource, event, publication, or other contributed-to entity. |
| `roles` | `ContributionRole[]` | Yes | `1..*` | Contextual contribution roles. |
| `order` | integer or string | No | `0..1` | Explicit order in a defined contributor list. |
| `orderContext` | string | No | `0..1` | Author list, editor list, display list, or profile-defined context. |
| `corresponding` | boolean | No | `0..1` | Corresponding-contributor designation. |
| `attributionName` | string | No | `0..1` | Context-specific rendered attribution name. |
| `affiliations` | affiliation references | No | `0..*` | Affiliations applicable to this contribution. |
| `statement` | multilingual string | No | `0..1` | Human-readable contribution statement. |
| `validFrom` | date or date-time | No | `0..1` | Context validity start. |
| `validUntil` | date or date-time | No | `0..1` | Context validity end. |
| `visibility` | string | No | `0..1` | Public, restricted, private, or inherited. |
| `provenance` | `ProvenanceAssertion[]` | No | `0..*` | Assertion origin and modification history. |

**REQ-IDN-060:** A contribution MUST reference exactly one agent and exactly one target.

**REQ-IDN-061:** A contribution MUST contain at least one role.

**REQ-IDN-062:** Multiple roles performed by the same agent for the same target MAY be represented in one contribution when their order, visibility, affiliations, and validity context are the same; otherwise they MUST be separate contributions.

**REQ-IDN-063:** `order` MUST be interpreted only within `orderContext` and the applicable target or profile.

**REQ-IDN-064:** Corresponding status MUST NOT imply first authorship, seniority, ownership, or a unique communication contact.

**REQ-IDN-065:** `attributionName` MAY override display for the contribution context but MUST NOT overwrite the agent's name forms.

**REQ-IDN-066:** A contribution to only part of a manuscript SHOULD target the applicable section, object, or resource rather than the entire manuscript.

### 8.7 Contribution role

| Property | Type | Required | Cardinality | Description |
|---|---|---:|---:|---|
| `id` | string | Yes | `1` | Stable role assertion identifier. |
| `term` | string or URI | Yes | `1` | Role value. |
| `scheme` | string or URI | No | `0..1` | Vocabulary or registry defining the term. |
| `label` | multilingual string | No | `0..1` | Human-readable label. |
| `detail` | multilingual string | No | `0..1` | Context-specific explanation. |

Core role terms include:

- `author`;
- `editor`;
- `translator`;
- `reviewer`;
- `publisher`;
- `data-curator`;
- `software-contributor`;
- `illustrator`;
- `project-administrator`;
- `funding-acquisition`;
- `other`.

Profiles MAY use CRediT or another controlled vocabulary.

**REQ-IDN-070:** A role term imported from a controlled vocabulary MUST preserve its vocabulary identifier or URI when available.

**REQ-IDN-071:** A local role extension MUST NOT be falsely labelled as a controlled-vocabulary term.

**REQ-IDN-072:** A role label is informative and MUST NOT replace the machine-comparable role term.

### 8.8 Provenance assertion

This specification uses the following minimum provenance structure until `OMI-SPEC-160` defines the complete change and provenance model.

| Property | Type | Required | Cardinality | Description |
|---|---|---:|---:|---|
| `sourceType` | string | Yes | `1` | User, registry, imported record, institution, service, migration, or extension. |
| `source` | agent, system, or URI reference | No | `0..1` | Source identity. |
| `assertedBy` | agent or account reference | No | `0..1` | Responsible asserting party. |
| `assertedAt` | date-time | No | `0..1` | Assertion time. |
| `evidence` | URI or object reference | No | `0..*` | Supporting evidence. |
| `confidence` | string or number | No | `0..1` | Source-specific confidence. |

**REQ-IDN-080:** Provenance MUST distinguish the source of an assertion from the agent described by that assertion.

**REQ-IDN-081:** A confidence value MUST identify its scale or vocabulary.

### 8.9 Account association

An implementation MAY maintain a protected association between an account identifier and an agent identity.

| Property | Type | Required | Cardinality | Description |
|---|---|---:|---:|---|
| `account` | opaque account reference | Yes | `1` | Implementation-managed account. |
| `agent` | agent reference | Yes | `1` | Associated agent identity. |
| `status` | string | Yes | `1` | Pending, verified, revoked, or extension. |
| `verifiedAt` | date-time | No | `0..1` | Verification time. |
| `source` | `ProvenanceAssertion` | Yes | `1` | Association provenance. |

**REQ-IDN-090:** Account associations MUST NOT contain authentication secrets, tokens, password hashes, or recovery credentials.

**REQ-IDN-091:** Account associations MUST NOT be included in a public manuscript export by default.

**REQ-IDN-092:** Deleting or disabling an account MUST NOT automatically delete historical scholarly attribution.

### 8.10 Unknown, anonymous, pseudonymous, and withheld agents

A producer MUST use explicit semantics:

| State | Meaning |
|---|---|
| `unidentified` | The agent is not known or not recoverable. |
| `anonymous` | The contribution is intentionally attributed to no identified public agent. |
| `pseudonymous` | A stable pseudonym is the attribution identity in the relevant context. |
| `withheld` | A more specific identity is known but access-controlled. |

**REQ-IDN-100:** A withheld identity MUST retain a stable protected reference so authorised systems can preserve continuity without exposing the identity.

**REQ-IDN-101:** A consumer lacking access to a withheld identity MUST preserve the withheld state and MUST NOT convert it to unidentified.

**REQ-IDN-102:** A pseudonymous agent SHOULD be represented as an agent identity with its own stable identifier and pseudonymous name form.

## 9. Processing model

### 9.1 Creating an agent identity

A conforming producer MUST:

1. allocate a stable local agent identifier;
2. select the most specific supported agent type;
3. record at least one usable name form or an explicit unidentified state;
4. preserve the source of imported assertions;
5. attach external identifiers as assertions rather than replacing local identity;
6. apply visibility rules before export.

### 9.2 Creating a contribution

A conforming producer MUST:

1. identify or create the contributing agent;
2. identify the exact contribution target;
3. assign one or more contextual roles;
4. record order only when an order context exists;
5. bind contribution-specific affiliations rather than relying on a current profile affiliation;
6. classify visibility and restricted data;
7. preserve provenance where the contribution is imported or asserted by another party.

### 9.3 Identity comparison

A resolver SHOULD compare evidence in this order:

1. verified scheme identifiers;
2. authoritative source relationships;
3. explicit prior merge or same-agent assertions;
4. compatible names, affiliations, dates, and contextual evidence;
5. implementation-specific similarity signals.

Similarity signals alone MUST NOT produce an irreversible automatic merge.

### 9.4 Merge

A merge operation MUST:

1. select or create a surviving agent identity;
2. preserve every former local identifier as an alias or replacement reference;
3. retain non-duplicate assertions and their provenance;
4. preserve conflicting assertions;
5. redirect contribution references without changing contribution meaning;
6. record the merge event for future `OMI-SPEC-160` compatibility;
7. remain reversible until the applicable preservation policy permits finalisation.

### 9.5 Split

A split operation MUST:

1. create distinct agent identities;
2. reassign assertions and contributions using explicit evidence;
3. preserve the original record as historical, ambiguous, or superseded;
4. record unresolved assignments rather than guessing;
5. preserve provenance and former references.

### 9.6 Rendering attribution

A renderer SHOULD select a name in this order:

1. contribution-specific `attributionName`;
2. preferred name matching the output language and script;
3. preferred name in another supported language or script;
4. an applicable published or pseudonymous name;
5. another preserved display name;
6. an authorised withheld or anonymous label.

A renderer MUST NOT reveal a restricted name or identifier merely because it is present in the source data.

## 10. Validation and error handling

### 10.1 Validation levels

Validation includes:

- syntax validation;
- structural validation;
- semantic validation;
- reference-integrity validation;
- identifier-scheme validation;
- privacy and visibility validation;
- profile validation.

### 10.2 Error conditions

| Condition | Classification | Required behaviour |
|---|---|---|
| Missing agent `id` | Error | Reject or quarantine the agent identity. |
| Unsupported agent type | Unsupported feature | Preserve as an extension or report inability to process. |
| Contribution without agent or target | Error | Reject the contribution. |
| Contribution without role | Error | Reject or quarantine the contribution. |
| Broken agent, target, affiliation, or replacement reference | Error | Report and preserve unresolved data where possible. |
| Invalid scheme syntax | Error | Report; do not mark verified. |
| Resolver unavailable | Warning | Preserve the assertion and report unresolved status. |
| Conflicting verified identifiers | Error | Preserve conflict; prohibit automatic merge. |
| Multiple preferred names in the same context | Error | Report and require deterministic conflict handling. |
| Restricted contact in public output | Security error | Block, redact, or substitute before output. |
| Affiliation with impossible date interval | Error | Report; do not silently reorder dates. |
| Unknown extension property | Warning or supported extension | Preserve according to extension policy. |

### 10.3 Missing, null, and empty values

- An absent property means no assertion is supplied.
- `null` MUST NOT be used as a substitute for withheld, unknown, or not applicable unless a serialization profile defines that mapping.
- An empty string is not a valid name, identifier value, contact value, or role.
- An empty array means the producer asserts that no values are present in that array for the serialized context.
- Unknown, withheld, anonymous, and not applicable MUST use explicit semantics where the distinction matters.

### 10.4 Failure preservation

**REQ-IDN-110:** A consumer unable to interpret an assertion SHOULD preserve the assertion, its identifier, visibility, and provenance for round-trip export.

**REQ-IDN-111:** A validator MUST report the location and classification of each identity-model error without exposing restricted values in logs intended for broader audiences.

## 11. Extensibility

### 11.1 Extension points

Extensions may define:

- additional agent types;
- name usages;
- identifier schemes;
- verification states;
- affiliation roles;
- contact types;
- contribution roles;
- visibility states;
- provenance evidence;
- profile-specific constraints.

### 11.2 Unknown extensions

A conforming consumer SHOULD preserve unknown extension content when safe. It MAY ignore extension semantics it does not implement, but MUST NOT reinterpret the extension as a core property.

Extensions MUST NOT:

- weaken privacy rules;
- redefine a core agent type;
- turn an account into an agent;
- treat a role as a permanent agent property;
- bypass identifier verification state;
- remove provenance from an external assertion.

### 11.3 Namespace rules

Extension terms SHOULD use a URI, registered prefix, or collision-resistant namespace. Unqualified local strings MAY be used only within a profile or system that defines their scope.

## 12. Versioning and compatibility

This specification follows the OMI Versioning Policy.

### 12.1 Compatibility dimensions

Applicable dimensions are:

- read compatibility;
- write compatibility;
- round-trip compatibility;
- schema compatibility;
- identity-reference compatibility;
- privacy-policy compatibility;
- profile compatibility.

### 12.2 Compatible changes

A minor or patch release may:

- add an optional property;
- add a non-conflicting agent or role term;
- clarify comparison or display behaviour;
- add an identifier mapping;
- add an example or validation warning;
- refine provenance guidance without changing existing meaning.

### 12.3 Breaking changes

A breaking change includes:

- changing identity equality semantics;
- changing required identifier persistence;
- making an optional identity disclosure mandatory;
- changing the meaning of unknown, withheld, anonymous, or pseudonymous;
- replacing contribution references with embedded agent copies;
- changing order interpretation;
- removing required provenance or verification state;
- changing visibility defaults in a way that may disclose data.

### 12.4 Migration

A migration MUST preserve:

- agent identifiers or explicit replacement aliases;
- all contribution references;
- name forms and scripts;
- external identifier assertions and verification states;
- affiliation context;
- visibility restrictions;
- provenance;
- unresolved conflicts.

Migration MUST report any information loss.

### 12.5 Deprecation

A deprecated property or term MUST identify:

- replacement;
- affected versions;
- compatibility behaviour;
- earliest removal version;
- migration requirements.

## 13. Interoperability

### 13.1 External standards and systems

| External standard or system | Direction | Mapping quality | Notes |
|---|---|---|---|
| ORCID | Bidirectional | Conditionally lossless | Identifier and verification provenance require separate handling. |
| ROR | Bidirectional | Conditionally lossless | Applies to organisation identities and affiliations. |
| CRediT | Bidirectional | Conditionally lossless | Maps contribution-role terms, not agent identity. |
| JATS XML contributor metadata | Bidirectional | Potentially lossy | Name, role, affiliation, and anonymity models vary by profile. |
| Crossref contributor metadata | Export and import | Potentially lossy | Workflow and private identity data are outside common deposit records. |
| DataCite contributor metadata | Export and import | Potentially lossy | Role vocabulary and name identifiers require mapping. |
| CSL JSON names | Bidirectional | Potentially lossy | CSL name objects do not represent the complete OMI identity model. |
| Schema.org agents | Bidirectional | Potentially lossy | Context and provenance may require extensions. |

### 13.2 Information preservation

Mappings SHOULD preserve:

- local stable identity;
- source name strings;
- name language and script;
- identifier scheme and value;
- contribution role;
- contributor order;
- affiliation text and identifiers;
- corresponding status;
- anonymity or withheld state;
- provenance and verification state where the target permits.

A mapping report MUST identify omitted or flattened semantics.

### 13.3 Round-trip behaviour

A round trip is lossless only when the target format can preserve all applicable identity, role, order, affiliation, visibility, and provenance semantics. Otherwise, the processor MUST classify the round trip as conditionally lossless or lossy.

## 14. Security, privacy, and integrity considerations

Identity data may contain personal information, confidential review identities, contact details, institutional relationships, persistent identifiers, and historical attribution. Incorrect disclosure or merging can harm individuals and corrupt scholarly provenance.

### 14.1 Data minimisation

**REQ-IDN-200:** A producer MUST include only identity and contact properties necessary for the declared purpose and audience.

### 14.2 Access control

**REQ-IDN-201:** Restricted and private assertions MUST be protected by access controls appropriate to their classification.

**REQ-IDN-202:** Public export MUST apply visibility rules recursively to names, identifiers, contacts, affiliations, contributions, and provenance evidence.

### 14.3 Identifier integrity

**REQ-IDN-203:** A consumer MUST preserve verification state and MUST NOT upgrade trust merely because an identifier is syntactically valid.

**REQ-IDN-204:** Resolver responses MUST be treated as external input and validated before use.

### 14.4 Merge safety

**REQ-IDN-205:** A merge based on probabilistic matching MUST require review or a reversible workflow when it may alter public attribution.

### 14.5 Logging

**REQ-IDN-206:** Logs and validation reports SHOULD use record identifiers or redacted values instead of private contact data and restricted names.

### 14.6 Account separation

Authentication secrets and provider tokens MUST remain outside OMI scholarly documents and packages. An imported manuscript MUST NOT be able to create an authenticated account association without an explicit trusted operation.

## 15. Accessibility considerations

User interfaces presenting identity data SHOULD:

- expose the complete accessible name independently from visual name styling;
- avoid relying on colour alone for verification or visibility status;
- provide text labels for identifier schemes and verification states;
- make contributor order and corresponding status available to assistive technologies;
- preserve keyboard access to alternative names, affiliations, and provenance;
- avoid truncating names in a way that removes distinguishing information without an accessible expansion;
- support user correction of incorrectly parsed name components.

The underlying model MUST preserve semantic distinctions needed for accessible rendering.

## 16. Internationalisation considerations

### 16.1 Names

Implementations MUST support Unicode name values. They MUST NOT assume:

- every person has a given name and family name;
- family name follows given name;
- whitespace separates all components;
- capitalization can be normalised safely;
- one script is canonical;
- transliteration is reversible;
- a name is language-neutral.

### 16.2 Language and script

BCP 47 language tags SHOULD be used for language. ISO 15924 script codes MAY supplement language tags where needed.

### 16.3 Sorting

Sort keys are processing metadata, not identity. A locale-specific generated sort key MUST NOT overwrite the source name.

### 16.4 Dates and time

Date-only values MUST NOT be converted to date-times without preserving their original precision. Date-times SHOULD use ISO 8601 and include an offset or declared time-zone context when the distinction matters.

### 16.5 Bidirectional text

Renderers MUST apply safe bidirectional-text handling and MUST NOT alter stored name order based solely on surrounding interface direction.

## 17. Examples

The examples are informative until canonical schemas and fixtures are published.

### 17.1 Minimal person and contribution

```json
{
  "agents": [
    {
      "id": "agent-001",
      "type": "person",
      "names": [
        {
          "id": "name-001",
          "display": "Judit Balogh",
          "given": "Judit",
          "family": "Balogh",
          "language": "hu",
          "preferred": true
        }
      ]
    }
  ],
  "contributions": [
    {
      "id": "contribution-001",
      "agent": "agent-001",
      "target": "manuscript-001",
      "roles": [
        {
          "id": "role-001",
          "term": "author"
        }
      ],
      "order": 1,
      "orderContext": "author-list"
    }
  ]
}
```

This example separates the agent from the contribution and makes order contextual.

### 17.2 External identifier and affiliation

```json
{
  "id": "agent-002",
  "type": "person",
  "names": [
    {
      "id": "name-002",
      "display": "Katalin Kovács",
      "language": "hu"
    }
  ],
  "identifiers": [
    {
      "id": "identifier-001",
      "scheme": "orcid",
      "value": "0000-0002-1825-0097",
      "uri": "https://orcid.org/0000-0002-1825-0097",
      "subject": "agent-002",
      "verification": "self-asserted",
      "source": {
        "sourceType": "user",
        "assertedBy": "agent-002"
      }
    }
  ],
  "affiliations": [
    {
      "id": "affiliation-001",
      "agent": "agent-002",
      "organization": "agent-org-001",
      "unit": "Department of History",
      "validFrom": "2024-09-01",
      "source": {
        "sourceType": "user",
        "assertedBy": "agent-002"
      }
    }
  ]
}
```

### 17.3 Pseudonymous contribution

```json
{
  "agents": [
    {
      "id": "agent-pseudonym-001",
      "type": "person",
      "names": [
        {
          "id": "name-pseudonym-001",
          "display": "Researcher North",
          "usage": "pseudonym",
          "preferred": true
        }
      ]
    }
  ],
  "contributions": [
    {
      "id": "contribution-pseudonym-001",
      "agent": "agent-pseudonym-001",
      "target": "review-001",
      "roles": [
        {
          "id": "role-reviewer-001",
          "term": "reviewer"
        }
      ],
      "visibility": "restricted"
    }
  ]
}
```

### 17.4 Invalid embedded contributor

```json
{
  "contributions": [
    {
      "id": "contribution-invalid-001",
      "agent": {
        "fullName": "Example Author",
        "email": "author@example.org"
      },
      "target": "manuscript-001",
      "roles": []
    }
  ]
}
```

This is invalid because the contribution embeds an account-like person record rather than referencing an agent, contains no contribution role, and exposes contact data without a visibility classification.

### 17.5 Invalid automatic merge

```json
{
  "merge": {
    "agents": ["agent-101", "agent-202"],
    "reason": "same-display-name"
  }
}
```

This is invalid because name equality alone is insufficient evidence for an identity merge.

## 18. Normative references

- Open Manuscript Initiative, *Core Principles*, `OMI-SPEC-000`, version `0.1.0`.
- Open Manuscript Initiative, *Scholarly Object Model*, `OMI-SPEC-120`, version `0.1.0`.
- Open Manuscript Initiative, *Metadata Model*, `OMI-SPEC-140`, version `0.1.0`.
- Open Manuscript Initiative, *Terminology and Definitions*.
- Open Manuscript Initiative, *Specification Lifecycle*.
- Open Manuscript Initiative, *Versioning Policy*.

## 19. Informative references

- ORCID identifier and record ecosystem.
- Research Organization Registry.
- CRediT contributor-role taxonomy.
- JATS contributor metadata.
- Crossref contributor metadata.
- DataCite contributor metadata.
- Citation Style Language name model.

## 20. Implementation status

Open Manuscript Studio currently contains exploratory identity-related structures:

- `OmiPerson` with structured names, affiliation text, and identifiers;
- `User` with an account identifier, e-mail address, profile, ORCID, external login identities, and preferences;
- `WorkspaceMember` with contextual workspace roles.

These structures demonstrate relevant design work but do not yet implement this specification. In particular, the current Studio model still needs:

- explicit separation of account and agent identity;
- contribution objects independent from persons;
- contextual affiliations;
- provenance-bearing external identifier assertions;
- multiple multilingual name forms;
- protected visibility handling;
- identity reconciliation and reversible merge behaviour;
- requirement-to-code mapping and conformance tests.

The authoritative evidence classification is maintained in the [Implementation Status Matrix](../governance/implementation-status-matrix.md).

## 21. Unresolved issues

| Issue | Impact | Required decision | Tracking |
|---|---|---|---|
| Canonical machine-readable property vocabulary | Schema publication | Decide exact serialization names and namespaces. | Future schema issue |
| Agent identity scope across packages and repositories | Identifier persistence | Define when local IDs remain stable during transfer. | `OMI-SPEC-160` coordination |
| Controlled contribution-role registry | Interoperability | Decide whether OMI adopts, profiles, or maps CRediT and local roles. | Future registry issue |
| Verification state vocabulary | Resolver interoperability | Define minimum common states and evidence requirements. | Future validation issue |
| Withheld reviewer identity packaging | Privacy and preservation | Coordinate protected identity with review and container models. | `OMI-SPEC-200` and `OMI-SPEC-330` |
| Account-association exchange | Security | Determine whether any protected profile may serialize account bindings. | `OMI-SPEC-190` and `OMI-SPEC-310` |
| Group authorship and consortium membership snapshots | Attribution | Define membership evidence and time context. | Future Draft revision |
| Identity merge and split event model | Provenance | Bind operations to the Versioning and Change Model. | `OMI-SPEC-160` |

## 22. Change history

| Version | Date | Status | Change classification | Summary |
|---|---|---|---|---|
| `0.1.0` | 2026-08-06 | Draft | Initial draft | Activated `OMI-SPEC-150` and defined agents, names, external identity assertions, affiliations, contributions, account separation, privacy, validation, and interoperability requirements. |

## 23. Acknowledgements

This Draft was informed by the existing OMI terminology, the Open Manuscript Studio user and workspace domain models, and established scholarly identifier and contributor-metadata practices. Human maintainers remain responsible for all normative content.
