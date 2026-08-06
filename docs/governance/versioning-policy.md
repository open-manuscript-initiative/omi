---
title: Versioning Policy
sidebar_position: 5
---

# Open Manuscript Initiative Versioning Policy

## Document status

- **Document type:** Governance policy
- **Status:** Draft
- **Version:** 0.1.0
- **Normative language:** English
- **Applies to:** OMI specifications, schemas, file formats, APIs, examples, implementations, translations, and published documentation

## 1. Purpose

This policy defines how the Open Manuscript Initiative (OMI) assigns, interprets, publishes, and retires versions.

Version identifiers communicate compatibility expectations. They are not merely release labels. An OMI version must allow authors, implementers, validators, publishers, repositories, and preservation systems to determine:

- which specification rules apply;
- whether two documents or implementations are expected to interoperate;
- whether an upgrade is backward compatible;
- whether migration is required;
- which schema validates a document;
- which corrections or extensions are included;
- whether a version remains supported.

This policy complements the [Specification Lifecycle](./specification-lifecycle.md). Lifecycle status describes maturity; version numbers describe change and compatibility. A specification may remain in Draft status while advancing through several pre-1.0 versions.

## 2. Scope

This policy governs the versioning of:

1. the OMI specification suite;
2. individual OMI-SPEC documents;
3. the canonical OMI data model and JSON Schema;
4. OMI manuscript and container formats;
5. OMI APIs and protocol contracts;
6. normative vocabularies and registries;
7. conformance profiles;
8. reference examples and test fixtures;
9. reference implementations, including Open Manuscript Studio;
10. official translations;
11. the OMI website and documentation publication set.

It does not require third-party implementations to use the same product release numbers as the OMI specification. Third-party software must, however, declare which OMI versions and profiles it supports.

## 3. Normative terms

The key words **MUST**, **MUST NOT**, **REQUIRED**, **SHALL**, **SHALL NOT**, **SHOULD**, **SHOULD NOT**, **RECOMMENDED**, **MAY**, and **OPTIONAL** are to be interpreted as normative requirement levels.

## 4. Version dimensions

OMI distinguishes several related but independent version dimensions.

### 4.1 Specification-suite version

The suite version identifies a coordinated publication of the OMI standard, for example:

```text
OMI 0.2
OMI 1.0
OMI 1.1
OMI 2.0
```

A suite release defines a tested combination of specification versions, schemas, vocabularies, profiles, and examples.

### 4.2 Individual specification version

Each permanent specification identifier has its own version:

```text
OMI-SPEC-005 Citation Model, version 0.3.0
```

An individual specification may be revised without immediately producing a new suite release. A suite release registry records the exact version of every included specification.

### 4.3 Schema version

A machine-readable schema has an explicit version independent of its filename, repository commit, and publication date.

Example:

```json
{
  "$id": "https://openmanuscript.org/schemas/omi-manuscript-1.0.schema.json",
  "title": "Open Manuscript Manuscript Schema",
  "version": "1.0.0"
}
```

### 4.4 Format version

Every serialized OMI manuscript or package MUST declare the format version required to interpret it.

Example:

```json
{
  "omi": {
    "format": "manuscript",
    "version": "1.0.0"
  }
}
```

The exact field structure will be defined by the File Format specification. The declaration MUST remain machine-readable and MUST NOT depend solely on a filename extension.

### 4.5 Implementation version

Software products use their own product versions, for example:

```text
Open Manuscript Studio 0.4.0
```

An implementation version MUST NOT be interpreted as an OMI conformance version. Implementations MUST separately declare supported OMI versions.

Example:

```text
Product version: 0.4.0
Supported OMI suite: 0.2
Supported manuscript format: 0.2.0–0.2.x
```

### 4.6 Translation version

An official translation MUST identify:

- the normative English document;
- the exact source version;
- the translation revision;
- the synchronization status.

Example:

```text
Source: OMI-SPEC-005 version 1.1.0
Translation revision: hu-1
Status: synchronized
```

## 5. Version number format

OMI uses semantic version numbers in the form:

```text
MAJOR.MINOR.PATCH
```

Examples:

```text
0.3.0
1.0.0
1.2.4
2.0.0
```

For public-facing suite names, the patch component may be omitted when it is zero:

```text
OMI 1.0
```

The canonical machine-readable value remains `1.0.0`.

## 6. Meaning of version components

### 6.1 MAJOR

The MAJOR number changes when a release introduces incompatible normative changes.

A major change includes, but is not limited to:

- removing a required or previously supported data structure;
- changing the meaning of an existing field or object;
- making optional data mandatory without a compatible default;
- changing identifier semantics;
- changing processing rules so that a conforming older implementation would produce materially different results;
- replacing a serialization model in a way that cannot be read safely by older implementations;
- introducing incompatible API behaviour;
- invalidating previously valid conforming documents without a defined compatibility mechanism.

A MAJOR release MUST include migration guidance.

### 6.2 MINOR

The MINOR number changes when compatible functionality is added.

A minor change may include:

- adding optional fields;
- adding new object types through a defined extension point;
- adding new optional conformance profiles;
- adding new enumerated values where consumers are already required to tolerate unknown values;
- adding compatible API endpoints;
- expanding validation with warnings that do not invalidate previously valid content;
- adding mappings to external standards;
- adding informative guidance or examples that clarify supported behaviour.

A MINOR release MUST preserve the ability of conforming older consumers to process the previously supported core data, even if they ignore newly introduced optional information.

### 6.3 PATCH

The PATCH number changes for compatible corrections and clarifications.

A patch change may include:

- correcting editorial errors;
- repairing broken links;
- clarifying ambiguous text without changing intended behaviour;
- correcting examples to match existing normative rules;
- fixing an overly broad or overly narrow schema constraint where the intended rule was already unambiguous;
- publishing errata;
- correcting translations;
- fixing non-normative tooling or documentation.

A patch release MUST NOT introduce a new mandatory feature or knowingly break conforming implementations.

## 7. Pre-1.0 versions

Versions below `1.0.0` indicate that the relevant specification, schema, or format has not reached its first stable compatibility commitment.

Examples:

```text
0.1.0
0.2.0
0.2.3
```

During the `0.x` phase:

- incompatible changes MAY occur in a MINOR release;
- PATCH releases SHOULD remain backward compatible within the same MINOR line;
- each breaking change MUST be documented;
- migrations SHOULD be supplied when practical;
- implementations MUST NOT claim long-term compatibility based solely on a pre-1.0 version;
- published documents SHOULD preserve their original version declaration even after a newer schema exists.

The `0.x` phase is not permission for uncontrolled change. Every release remains subject to review, changelog, and archival requirements.

## 8. Stability commitment at 1.0

Version `1.0.0` establishes the first stable OMI compatibility baseline.

Before a component reaches `1.0.0`, it MUST satisfy the applicable requirements of the Specification Lifecycle policy, including:

- a clearly bounded scope;
- resolved terminology;
- complete normative requirements;
- stable identifiers;
- machine-readable schemas where relevant;
- conformance criteria;
- implementation evidence;
- interoperability testing;
- security and preservation considerations;
- migration rules from the latest pre-1.0 release;
- public review.

After `1.0.0`, backward-incompatible changes require a new MAJOR version unless an explicit compatibility mechanism was already part of the stable specification.

## 9. Compatibility definitions

### 9.1 Backward compatibility

A newer implementation is backward compatible when it can correctly process content valid under the supported older version without requiring modification, except where the older content depends on a withdrawn unsafe feature documented by policy.

### 9.2 Forward compatibility

An older implementation is forward compatible when it can process newer content safely, usually by ignoring optional unknown extensions while preserving them where required.

OMI aims for bounded forward compatibility. Implementations are not required to understand unknown semantics, but they MUST fail safely and MUST NOT silently reinterpret unknown data.

### 9.3 Round-trip compatibility

Round-trip compatibility means that content can be loaded and saved without loss of information that the implementation is required to preserve.

A consumer that does not understand an extension MAY still be conforming if it preserves that extension unchanged according to the extension rules.

### 9.4 Behavioural compatibility

Behavioural compatibility concerns processing outcomes, not only schema validity. Two versions are behaviourally compatible when normative interpretation, validation, anchoring, citation resolution, and rendering obligations remain equivalent for existing content.

## 10. Compatibility rules for data models

### 10.1 Optional additions

New optional properties are normally MINOR changes when:

- their absence has a defined meaning;
- older consumers are permitted to ignore or preserve them;
- they do not change the interpretation of existing fields.

### 10.2 Required additions

Adding a required property is normally a MAJOR change unless:

- a deterministic default is defined;
- existing valid documents remain valid or can be upgraded without semantic loss;
- the compatibility mechanism was already normative.

### 10.3 Property removal

Removing a property is a MAJOR change. Deprecation SHOULD precede removal.

### 10.4 Renaming

Renaming a property is a MAJOR change unless the old name remains accepted through a documented alias or migration period.

### 10.5 Type changes

Changing a property's type or cardinality is normally a MAJOR change.

### 10.6 Enumerations

Adding enumeration values is MINOR only when consumers are required to tolerate unknown values. Otherwise it is MAJOR.

Removing or redefining an enumeration value is MAJOR.

### 10.7 Defaults

Changing a default that affects interpretation or output is MAJOR. Correcting a documented default to match already normative behaviour may be PATCH, provided interoperability evidence confirms the intended behaviour.

## 11. Unknown data and extension handling

To support compatible evolution:

- specifications SHOULD define explicit extension points;
- implementations MUST distinguish unknown data from invalid data;
- unknown extensions MUST NOT be interpreted as known core semantics;
- processors SHOULD preserve unknown extension data during round trips when the format requires preservation;
- validators SHOULD identify the namespace or profile responsible for an extension;
- an extension MUST NOT override core semantics without a new compatible profile or major-version change.

## 12. Schema versioning

### 12.1 Immutable published schemas

A published schema identified by a versioned canonical URL MUST be immutable.

For example, the content served at:

```text
https://openmanuscript.org/schemas/omi-manuscript-1.0.schema.json
```

MUST NOT be silently replaced with behaviourally different rules.

Corrections require either:

- a new patch-level schema URL; or
- an explicitly versioned erratum mechanism that preserves the original artifact.

### 12.2 Canonical and convenience URLs

OMI MAY publish an unversioned convenience URL such as:

```text
https://openmanuscript.org/schemas/omi-manuscript.schema.json
```

This URL may point to the latest recommended stable schema and MUST NOT be used as the sole identifier in archival documents.

Normative and preserved documents SHOULD reference an immutable versioned schema.

### 12.3 Schema identifiers

Every schema MUST include:

- a canonical `$id`;
- an explicit version;
- the relevant OMI-SPEC and suite references;
- publication status;
- compatibility notes where applicable.

### 12.4 Schema dialect

Changing the JSON Schema dialect is a compatibility-sensitive decision. A dialect change MAY be MINOR if the accepted instance set and validation semantics remain equivalent. Otherwise it is MAJOR.

## 13. File-format versioning

### 13.1 Self-identification

Every OMI file or container MUST identify its format and version internally.

Filename extensions and MIME types are useful routing metadata but are insufficient as the only version signal.

### 13.2 Reader behaviour

A reader MUST:

- accept versions it explicitly supports;
- reject or quarantine unsupported major versions safely;
- report the unsupported version clearly;
- avoid destructive conversion without user consent or policy authorization;
- preserve the original artifact where migration is attempted.

A reader MAY accept a later MINOR version when the compatibility rules permit unknown optional fields and extensions.

### 13.3 Writer behaviour

A writer MUST declare the exact version it emits.

A writer SHOULD emit the oldest compatible version that faithfully represents the content when interoperability with older systems is requested.

A writer MUST NOT label content with an older version when it uses features not valid under that version.

### 13.4 Migration

Migration between format versions MUST be explicit and reproducible.

A migration tool SHOULD produce:

- source version;
- target version;
- migration tool and version;
- timestamp;
- warnings;
- losses or approximations;
- unresolved extensions;
- validation result;
- provenance link to the original artifact.

## 14. API versioning

OMI APIs MUST version contracts independently from server product releases.

### 14.1 Breaking API changes

Breaking changes include:

- removing endpoints;
- changing required request fields;
- changing response meaning;
- changing authentication semantics;
- changing status-code contracts;
- changing pagination, ordering, or concurrency behaviour in an incompatible way.

Breaking changes require a new API MAJOR version.

### 14.2 API version selection

An API specification SHOULD define a clear version-negotiation mechanism, such as:

- a versioned media type;
- a versioned path;
- an explicit protocol header;
- a negotiated capability profile.

The mechanism MUST be documented consistently and MUST NOT depend on undocumented server heuristics.

### 14.3 Deprecation period

Stable API features SHOULD be deprecated before removal. The deprecation notice SHOULD include:

- the affected feature;
- the replacement;
- the earliest removal version;
- migration guidance;
- expected support period.

## 15. Vocabulary and registry versioning

Controlled vocabularies, role lists, object types, identifier schemes, and profile registries require explicit evolution rules.

A registry entry MUST have a stable identifier. Display labels may change without changing identity.

Adding a registry entry is normally MINOR. Removing or redefining an existing identifier is MAJOR unless the entry was explicitly experimental or locally scoped.

Deprecated entries SHOULD remain resolvable and MUST identify their replacement when one exists.

## 16. Conformance-profile versioning

A conformance profile defines a constrained or extended use of OMI for a workflow, discipline, publisher, repository, or exchange target.

Each profile MUST declare:

- profile identifier;
- profile version;
- required OMI suite and specification versions;
- additional constraints;
- extension vocabularies;
- compatibility policy;
- validation resources.

A profile MUST NOT claim compatibility with an OMI version whose core requirements it contradicts.

## 17. Specification-suite releases

An OMI suite release MUST publish a release manifest.

The manifest records:

- suite version;
- release date;
- lifecycle status;
- included OMI-SPEC versions;
- schema versions and hashes;
- vocabulary and registry versions;
- conformance profiles;
- examples and test-suite versions;
- known limitations;
- supported migration paths;
- superseded suite versions.

A suite version MUST NOT imply that every individual specification has the same version number.

## 18. Version alignment

Components MAY use independent semantic versions. Artificially forcing every OMI component to share one number is discouraged because it obscures the actual scope of change.

The suite manifest provides alignment.

Example:

```yaml
suite: 1.1.0
specifications:
  OMI-SPEC-001: 1.0.1
  OMI-SPEC-002: 1.1.0
  OMI-SPEC-005: 1.0.0
schemas:
  manuscript: 1.1.0
  annotation: 1.0.2
```

## 19. Implementation support declarations

An implementation claiming OMI support MUST publish a machine-readable or clearly structured support declaration.

The declaration SHOULD include:

- implementation name and version;
- supported suite versions;
- supported format versions;
- supported profiles;
- read capability;
- write capability;
- validation capability;
- preservation of unknown extensions;
- known deviations;
- test-suite results.

The following claims are distinct:

- **reads OMI 1.0**;
- **writes OMI 1.0**;
- **validates OMI 1.0**;
- **conforms to OMI 1.0 Core profile**;
- **preserves unsupported OMI 1.x extensions**.

A generic statement such as “OMI compatible” is insufficient for a formal conformance claim.

## 20. Reference implementation versions

Open Manuscript Studio and other OMI-maintained software follow their own semantic versions.

A software release MAY support multiple OMI versions. Its release notes MUST state compatibility explicitly.

A change to Studio's user interface does not require an OMI specification version change unless it changes the standardized data, interchange, or normative behaviour.

Conversely, a new OMI specification version does not require every implementation to adopt it immediately.

## 21. Translation versioning

### 21.1 Normative source

Unless explicitly designated otherwise, English is the normative language of OMI specifications.

### 21.2 Synchronization status

Each official translation MUST display one of these states:

- **Synchronized:** reflects the complete identified source version;
- **Update pending:** the source has changed and the translation is being revised;
- **Archived:** translation applies to an older supported source version;
- **Withdrawn:** translation is unreliable or no longer maintained.

### 21.3 Translation-only corrections

A correction that changes only the translation revision does not change the normative specification version.

A translation correction MUST NOT silently alter the source-version reference.

### 21.4 Conflicts

Where an informative translation conflicts with the normative English text, the English text governs. The translation SHOULD be corrected promptly and the correction recorded.

## 22. Documentation-site versioning

The website may publish current, development, and archived documentation sets.

Stable documentation MUST remain available at durable versioned URLs.

Example:

```text
/docs/1.0/
/docs/1.1/
/docs/latest/
/docs/development/
```

`latest` is a convenience alias and MUST NOT be used as the only archival citation.

Documentation for a stable release MUST NOT be retroactively changed in a way that alters normative meaning. Corrections are issued through errata or a patch release.

## 23. Examples and test fixtures

Examples and conformance fixtures MUST declare the OMI version they target.

A test fixture that changes expected normative behaviour requires an appropriate specification or test-suite version change.

Examples MUST NOT be treated as normative when they conflict with normative text or schema. Such conflicts are defects requiring correction.

## 24. Release candidates and prereleases

Prerelease identifiers MAY be used:

```text
1.0.0-alpha.1
1.0.0-beta.2
1.0.0-rc.1
```

Their meaning is:

- **alpha:** incomplete, exploratory implementation or specification integration;
- **beta:** feature-complete target with unresolved review or interoperability issues;
- **rc:** release candidate expected to become the final version unless blocking defects are found.

Prerelease versions MUST NOT be represented as stable releases.

A prerelease MAY introduce changes before final publication. Changes between release candidates SHOULD be limited to defect resolution and release-blocking interoperability corrections.

## 25. Build metadata

Build metadata MAY identify an implementation build without changing compatibility:

```text
1.0.0+build.42
1.0.0+20260806.sha.abc1234
```

Build metadata MUST NOT alter normative interpretation.

## 26. Deprecation

Deprecation signals that a feature or version remains recognized but should not be used for new work.

A deprecation notice MUST identify:

- the deprecated item;
- the version in which it was deprecated;
- the reason;
- the recommended replacement;
- known migration considerations;
- the earliest version in which removal may occur.

Deprecation alone does not permit a compatible processor to stop reading existing content.

## 27. Removal

A stable feature is removed only in a MAJOR version, except where immediate removal is necessary to address a severe security, legal, or integrity risk.

Emergency removal requires:

- a public advisory;
- a documented rationale;
- impact analysis;
- preservation guidance;
- an alternative where feasible;
- an explicit exception record.

## 28. Supersession

A superseded version remains part of the historical record.

Its publication page MUST identify:

- the superseding version;
- whether migration is required;
- whether the old version remains supported;
- the date support ends, if defined.

Versioned artifacts MUST NOT be deleted merely because they are superseded.

## 29. Support policy

Before OMI 1.0, support is best-effort and documented per release.

After OMI 1.0, the project SHOULD maintain:

- the current stable MAJOR line;
- at least one documented migration path from the immediately preceding stable MAJOR line;
- security and integrity advisories for materially affected supported versions;
- archived schemas and documentation for all stable releases.

A separate support schedule MAY define exact maintenance periods.

## 30. Changelogs

Every published release MUST have a changelog.

The changelog MUST distinguish:

- breaking changes;
- compatible additions;
- corrections;
- deprecations;
- removals;
- security changes;
- migration requirements;
- schema changes;
- editorial-only changes.

A changelog entry SHOULD reference the relevant issue, proposal, pull request, or decision record.

## 31. Migration documentation

A release containing breaking changes MUST provide migration documentation.

Migration guidance SHOULD include:

- affected structures and behaviour;
- before-and-after examples;
- automated transformation rules;
- limitations;
- expected information loss;
- validation steps;
- rollback strategy;
- treatment of extensions;
- provenance requirements.

## 32. Version negotiation

Where systems exchange OMI content dynamically, they SHOULD negotiate capabilities rather than assume support from product names.

Negotiation may include:

- supported suite versions;
- supported format ranges;
- profiles;
- extensions;
- media types;
- validation levels;
- read/write asymmetry.

A system MUST fail safely when no compatible version can be agreed.

## 33. Version ranges

Implementations MAY declare version ranges.

Examples:

```text
>=1.0.0 <2.0.0
1.1.x
1.0.0–1.2.3
```

A range claim means the implementation has been designed and tested for that range. It MUST NOT be inferred only from schema acceptance.

For archival metadata, exact versions are preferred over ranges.

## 34. Reproducibility and integrity

Published release artifacts SHOULD include cryptographic hashes.

A stable release SHOULD be reproducible from tagged source and documented build instructions.

Tags used for stable releases MUST be immutable.

If an artifact must be replaced because of a publication or packaging failure, the replacement MUST receive a distinct artifact revision or release version and the original incident MUST be documented.

## 35. Git tags and branches

Recommended tags include:

```text
omi-suite-v1.0.0
omi-spec-005-v1.1.0
schema-manuscript-v1.0.2
```

Development branches and pull requests are not version releases.

The default branch represents ongoing development and MAY differ from the latest stable publication.

## 36. Dates and versions

Publication dates provide historical context but do not replace semantic versions.

Date-based identifiers MAY be included in metadata and snapshots, but normative compatibility MUST be communicated through the semantic version.

## 37. Decision procedure

When the required version increment is uncertain, editors must evaluate:

1. Does the change invalidate previously valid content?
2. Does it change existing normative meaning?
3. Can older conforming implementations process the new content safely?
4. Does it require migration?
5. Does it introduce a new required capability?
6. Does it change conformance results?
7. Does it alter externally observable API behaviour?
8. Is the change only editorial or corrective?

If a reasonable conforming implementation could break or silently misinterpret content, the change is breaking and requires a MAJOR increment, or a MINOR increment during the pre-1.0 phase with explicit breaking-change documentation.

## 38. Examples

### 38.1 Adding an optional abstract language tag

Change: optional `language` metadata is added to an abstract object.

Result after 1.0: MINOR, provided older consumers may ignore or preserve it.

### 38.2 Making ORCID mandatory for every author

Change: previously optional ORCID becomes required.

Result: MAJOR, because existing documents and workflows become invalid.

### 38.3 Correcting a misspelled property in an example

Change: example used `contributer` while the specification already required `contributor`.

Result: PATCH.

### 38.4 Renaming `references` to `bibliography`

Change: serialized property is renamed and the old property is rejected.

Result: MAJOR.

If both properties remain accepted during a documented transition, the introduction may be MINOR, while final removal remains MAJOR.

### 38.5 Adding a new citation relationship

Change: `qualifies` is added to an open registry whose consumers must tolerate unknown values.

Result: MINOR.

If the enumeration was closed and unknown values were invalid, the change may require MAJOR.

### 38.6 Clarifying anchor resolution order

Change: prose is clarified to match the only behaviour permitted by the existing algorithm and tests.

Result: PATCH.

If implementations had two reasonable conflicting interpretations, selecting one may be breaking and require MAJOR.

## 39. Minimum release record

Every OMI release record MUST contain:

- component or suite name;
- version;
- lifecycle status;
- release date;
- canonical URL;
- source tag or commit;
- changelog;
- compatibility statement;
- migration statement;
- artifact hashes where applicable;
- supersession information;
- known issues.

## 40. Policy changes

This Versioning Policy is itself versioned.

A change that alters the meaning of existing public version commitments requires careful review and MUST NOT retroactively weaken guarantees already made for stable releases.

Policy clarifications may be patch-level changes. New compatible governance procedures may be minor changes. Fundamental changes to compatibility commitments require a major policy version.

## 41. Summary

OMI uses semantic versions to communicate compatibility across specifications, schemas, formats, APIs, implementations, profiles, and translations.

The governing principles are:

- versions are explicit and machine-readable;
- published versioned artifacts are immutable;
- breaking changes are visible and accompanied by migration guidance;
- schemas and documents identify the exact rules they use;
- product versions are distinct from specification conformance;
- stable releases remain archived and citable;
- compatibility claims must be precise and testable;
- translations identify their normative source version;
- the suite manifest aligns independently versioned components.

These rules allow OMI to evolve while preserving scholarly documents, implementation trust, and long-term interoperability.
