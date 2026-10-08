# OMI-SPEC-320 Requirement Coverage

**Specification:** `OMI-SPEC-320@0.2.0`  
**Scope:** the website repository's reference parser, schema validator, fixtures, and tests  
**Coverage status:** complete traceability; partial conformance evidence

This register maps every normative `REQ-FMT-NNN` in the File Format
specification to evidence or an explicit gap. **Tested** means the named
reference behavior is exercised directly. **Partial** means there is relevant
evidence, but at least one normative aspect remains untested. **Untested** means
this repository has no executable evidence for the requirement. These labels do
not claim that the Open Manuscript Studio producer, importer, exporter, or
migrator conforms; their implementation and integration tests are not present in
this repository.

The conformance runner checks that this register contains each requirement in
the specification exactly once. It deliberately does not turn partial or
untested requirements into a passing conformance result.

| Requirement | Status | Current evidence | Remaining evidence needed |
|---|---|---|---|
| `REQ-FMT-001` | partial | `valid-minimal.omi.json` passes the structural validator | Test Studio producer output and all declared serialization rules |
| `REQ-FMT-002` | untested | — | Consumer must identify format/version before reading manuscript fields |
| `REQ-FMT-003` | partial | fixture runner checks syntax, schema, selected semantic diagnostics | Test every declared profile and all semantic constraints |
| `REQ-FMT-004` | untested | — | Migrator preservation, migration record, and equivalent-exposure tests |
| `REQ-FMT-005` | partial | `valid-history-extension.omi.json`; parser preserves unknown JSON values | Edit/save round trips and machine-readable loss-report behavior |
| `REQ-FMT-006` | partial | malformed UTF-8 and JSON parser tests | BOM recovery warning and producer no-BOM behavior |
| `REQ-FMT-007` | tested | duplicate and escape-equivalent member fixtures and parser tests | — |
| `REQ-FMT-008` | tested | `invalid-root-array.omi.json` | — |
| `REQ-FMT-009` | tested | parser rejects unpaired surrogates and accepts a valid surrogate pair | Producer-side Unicode guarantees |
| `REQ-FMT-010` | partial | parser test rejects `NaN`; JSON parser rejects non-JSON numeric tokens | Producer serialization behavior and positive/negative infinity cases |
| `REQ-FMT-011` | tested | parser tests safe-integer boundary and rejection above it | — |
| `REQ-FMT-012` | partial | tests reject empty and null required titles | Exercise all nullable fields and producer omission/null behavior |
| `REQ-FMT-013` | partial | schema test rejects a timestamp without an offset; fixture tests timestamp order | RFC 3339 boundary cases and producer output |
| `REQ-FMT-014` | partial | schema test rejects a malformed language tag | Full BCP 47 validity, recommended casing, and producer behavior |
| `REQ-FMT-015` | partial | test rejects a relative asset URI | Other URI fields, explicit relative-base policy, and consumer resolution |
| `REQ-FMT-016` | partial | non-empty ID schema and duplicate-ID fixture | Cross-version identity stability and manuscript-scope completeness |
| `REQ-FMT-017` | untested | — | Deletion, tombstone, and ID non-reuse lifecycle tests |
| `REQ-FMT-018` | tested | valid Core Snapshot and schema-required root members | Producer output across all Core Snapshot fields |
| `REQ-FMT-019` | tested | `invalid-timestamp-order.omi.json` | Equal instants and timestamp-offset equivalence cases |
| `REQ-FMT-020` | partial | `invalid-forbidden-secret.omi.json` and recursive credential-key scan | Session identifiers, private keys, local paths, and disclosure-policy cases |
| `REQ-FMT-021` | untested | — | Assert Studio exports omit transient editor and account state |
| `REQ-FMT-022` | tested | pinned schema URI and `invalid-schema-uri-mismatch.omi.json` | Producer generation against every supported format version |
| `REQ-FMT-023` | partial | missing and unsupported version fixtures | Producer version declaration and exact serialization-rule correspondence |
| `REQ-FMT-024` | partial | schema requires `core-snapshot` and unique profile tokens | Validate required data for every additional claimed profile |
| `REQ-FMT-025` | partial | schema enforces exact semantic-version syntax | Ensure every governing specification is declared and matches serialized content |
| `REQ-FMT-026` | untested | — | Multi-version consumer selects the declared version's schema and rules |
| `REQ-FMT-027` | untested | — | Unsupported-major quarantine, original retention, and editable-state denial |
| `REQ-FMT-028` | untested | — | Compatibility-policy decisions, unknown-data preservation, and version diagnostics |
| `REQ-FMT-029` | partial | parser test preserves JSON array order | Studio serialize/import ordering and prohibition on derived sorting |
| `REQ-FMT-030` | untested | — | Portable scholarly representation and framework-independent recovery |
| `REQ-FMT-031` | untested | — | Unknown block type lossless import/edit/export behavior |
| `REQ-FMT-032` | partial | unresolved annotation target fixture; typed target indexes in validator | Type-incompatible cases for every reference kind |
| `REQ-FMT-033` | untested | — | Durable-reference model and rejection of positional-only targets |
| `REQ-FMT-034` | untested | — | Producer binary-size limits and asset externalization tests |
| `REQ-FMT-035` | partial | asset structure is schema-validated; fixture validation uses local resources | Asset metadata resolution and proof that validation never fetches external assets |
| `REQ-FMT-036` | partial | `invalid-history-head-mismatch.omi.json` | Snapshot revision agreement and all three-way head cases |
| `REQ-FMT-037` | partial | duplicate addressable IDs are detected across history | Complete, partial, and shallow history boundary tests |
| `REQ-FMT-038` | partial | schema condition links `history-exchange` to history fields | Negative fixture for omitted history/profile and provenance claim behavior |
| `REQ-FMT-039` | partial | parser preserves `__proto__` as inert data without prototype mutation | Security tests for markup, URLs, formulas, templates, and extension payloads |
| `REQ-FMT-040` | tested | tests cover byte, depth, member, array, string, and diagnostic limits | Deployment-specific limit selection and Studio integration |
| `REQ-FMT-041` | partial | validator uses one pinned local schema; test checks local-only schema references | Trusted schema mapping and safe selection across supported versions |
| `REQ-FMT-042` | untested | — | Producer emits consistent UTF-8, schema, format, profile, and dependency versions |
| `REQ-FMT-043` | partial | parser preserves array order and absent/empty/null values | Producer serialization and round-trip reference stability |
| `REQ-FMT-044` | partial | credential fields are rejected by the reference validator | Producer omits transient state and all secret categories |
| `REQ-FMT-045` | untested | — | Digest/signature metadata and cross-canonicalization comparison behavior |
| `REQ-FMT-046` | partial | parser preserves Unicode scalar values | Import/edit/export round trip without normalization or text rewriting |
| `REQ-FMT-047` | tested | fixture runner rejects expected-invalid documents with errors | Every validation layer and declared profile |
| `REQ-FMT-048` | tested | repeated validation returns stable diagnostics and ordering | Determinism across policy and extension-capability configurations |
| `REQ-FMT-049` | partial | tests assert JSON Pointer and requirement on unresolved-reference errors | Restricted-content redaction and diagnostic behavior for all error classes |
| `REQ-FMT-050` | untested | — | Repair provenance, ordered change list, validation, and source retention |
| `REQ-FMT-051` | partial | extension schema constrains namespace keys | Producer placement of non-core data and collision prevention |
| `REQ-FMT-052` | partial | parser preserves unknown values without interpreting them | Consumer extension processing and presentation behavior |
| `REQ-FMT-053` | untested | — | Warning on unknown unnamespaced members and non-destructive validation |
| `REQ-FMT-054` | partial | parser preserves member values, names, containing objects, and array positions | Lossless preservation through actual edits and serialization |
| `REQ-FMT-055` | untested | — | Stop-before-overwrite and authorization from a machine-readable loss report |
| `REQ-FMT-056` | untested | — | Producer tests distinguish all format, schema, model, revision, container, and app versions |
| `REQ-FMT-057` | untested | — | Repeated migration yields equivalent output and ordered steps under pinned options |
| `REQ-FMT-058` | untested | — | Migrator refuses a lossless claim with losses or discarded unknown data |
| `REQ-FMT-059` | untested | — | Migration tests reject version/schema relabeling as successful conversion |
| `REQ-FMT-060` | untested | — | Container integration identifies exact logical format without inferred package rules |
| `REQ-FMT-061` | untested | — | Container extraction preserves identities, order, references, history, and extensions |
| `REQ-FMT-062` | untested | — | Import reports loss/approximation and preserves source provenance and meaning |
| `REQ-FMT-063` | untested | — | Lossy export preserves the OMI source or immutable reference and reports unsupported features |
| `REQ-FMT-064` | partial | parser tests treat values as data and prevent prototype mutation | Render/activation sanitization and authorization boundaries |
| `REQ-FMT-065` | partial | schema and fixture runner perform local-only validation | Instrumented consumer test proving no network dereference under default policy |
| `REQ-FMT-066` | untested | — | Export disclosure-profile tests covering manuscript and revision history |
| `REQ-FMT-067` | partial | diagnostics use generic parse/secret messages without quoting source values | Access-policy-aware validation and migration log tests |
| `REQ-FMT-068` | untested | — | UI and API tests prevent validity/checksum/generator from implying trusted authorship |
| `REQ-FMT-069` | untested | — | Accessibility metadata preservation across producer and transformation workflows |
| `REQ-FMT-070` | untested | — | Producer semantic checks prevent meaning from depending only on visual styling |
| `REQ-FMT-071` | partial | parser accepts multilingual Unicode and schema carries locale metadata | Studio language metadata and bidirectional-script round trips |
| `REQ-FMT-072` | untested | — | Locale-sensitive display/sorting never overwrites stored authorial values |

## Release interpretation

This register provides complete **traceability**, not complete **behavioral
coverage**: many requirements govern Studio producers, consumers, migration,
container processing, and publication transformations absent from this website
repository. Those remain release gates until their owning implementations and
independent integration tests provide evidence. A change in a requirement's
state requires updating this register and adding or revising the linked
executable evidence in the same reviewed change.
