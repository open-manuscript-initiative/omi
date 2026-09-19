---
title: Open Manuscript Studio — Jelenlegi állapot → 1.0 eltéréselemzés
sidebar_label: Jelenlegi állapot → 1.0 eltéréselemzés
description: A jelenlegi Open Manuscript Studio implementáció és az 1.0 célarchitektúra közötti eltérések tételes elemzése.
---

# Current → 1.0 Gap Analysis

**Baseline:** Studio `eca2cf45762116e1c00a89b3397840ed89109511`; OMI `e2f421707f1154c0ed30cb7750e0689a837e9b0a`; OJS plugin `6c0842fc1ce6c4a1ea75f7b27660af8011be303b`; OMP plugin `4f7a2c0a2f29f68e3ad05ac73ca7652bc6410ac7`  
**Dátum:** 2026-09-19

## 1. Értékelési kulcs

| Státusz | Jelentés ebben a dokumentumban |
|---|---|
| KEEP | A felelősség és a megoldás alapvetően helyes; legfeljebb normál karbantartás kell. |
| HARDEN | Jó 1.0 alap, de conformance, hibakezelés, security, performance vagy fixture-bővítés szükséges. |
| REFACTOR | A működés megtartandó, de a modulhatár vagy dependency direction módosítandó. |
| SPLIT | Egy jelenlegi egység több tulajdonost/élettartamot/felelősséget kever. |
| MERGE | Ugyanaz a fogalom vagy contract indokolatlanul több párhuzamos implementációban él. |
| REPLACE | A jelenlegi megoldás ezen a szűk ponton nem alkalmas 1.0 contractnak; nem az egész alrendszer újraírását jelenti. |
| REMOVE | Üres, használaton kívüli vagy félrevezető kód, amelynek nincs 1.0 szerepe. |
| DEFER | A kód megtartható kísérletként, de nem része az 1.0 stable ígéretnek. |

## 2. Összesített megállapítás

Az értékelés nem formális LOC-mérés, hanem fájl-, call-path-, teszt- és contract-alapú becslés:

- a jelenlegi működő viselkedés és implementáció **kb. 75–85%-a megtartható**;
- **kb. 45–55%** lényegi szerkezeti módosítás nélkül KEEP/HARDEN kategória;
- **kb. 25–35%** wrapperrel, áthelyezéssel vagy ownership-szétválasztással megtartható;
- valódi REPLACE/REMOVE igény **kb. 5–10%**, és ez főként az üres sémafájlra, a validálatlan open pathra, a natív token tárolására, üres/árva modulokra és néhány kísérleti állapotra korlátozódik.

A számsávok nem sprintbecslések. A refaktorálási költség magasabb lehet a lecserélendő kód arányánál, mert sok hívóhely közvetlenül ismeri a Tiptap-contentet vagy a Zustand store-t.

## 3. OMI format és domain

| Jelenlegi komponens | Státusz | Probléma / bizonyíték | 1.0 célállapot | Átállási lépés | Kockázat |
|---|---|---|---|---|---|
| OMI `static/schemas/omi-manuscript-0.2.schema.json` | HARDEN | 632 soros végrehajtható schema és 8 fixture létezik, de a website CI/build nem futtatja automatikusan a file-format suite-ot. | Normatív, release-elt, immutable schema artifact checksum-mal. | Schema release job + CI conformance gate + changelog. | medium |
| Studio `src/schemas/omi-manuscript-0.2.json` | REPLACE | A fájl 1 byte/üres; hamis benyomást kelt arról, hogy a Studio validál 0.2 ellen. | Az OMI release-ből vendorizált exact schema, rögzített SHA-256-tal. | Automatikus sync/check script; eltéréskor CI fail. | high |
| `src/types/omi.ts` envelope (`schema`, `omi.version`) | REFACTOR | A Studio 0.1 URI/versiont hoz létre és exportál, miközben a normatív draft 0.2.0. | Generált wire type + explicit envelope/version codec. | Új codec shadow validationnel, majd create/open/save átállítása. | high |
| `src/types/omi.ts` teljes aggregate | SPLIT | Egy fájlban structure, identity, notes, citations, assets, history és app-state típusok; részben model↔types ciklus. | Kis `core/omi/*` modulok, aciklikus publikus barrel. | Típusonként move/re-export; import-boundary lint. | medium |
| `src/model/content.ts` | REMOVE | Üres placeholder; közben a tényleges content contract az `OmiBlock.content` string. | Valódi content AST/codec entry point vagy nincs fájl. | SPEC-100 döntés után új modul; addig az üres fájl törlése. | low |
| `src/model/manuscript.ts`, `annotations.ts`, `contributors.ts` | REMOVE | Üres, félrevezető domain entry pointok. | Canonical modul vagy explicit re-export; üres fájl nincs. | Usage check, re-export shim, majd törlés. | low |
| `OmiBlock.content: string` | REFACTOR | Tiptap JSON string vagy legacy text portable domain mezőként; exporterek közvetlenül parse-olják. | Verziózott OMI content AST; Tiptap adapter mögött. | Előbb `ContentCodec` facade, callsite-migráció, utána wire változás. | high |
| `src/model/inlineSemantics.ts` | HARDEN | Jó szemantikai mapping alap; Tiptap node/mark fogalmakhoz részben kötött. | OMI szemantika core-ban, PM mapping adapterben. | Pure types/functionök kivonása, codec round-trip teszt. | medium |
| `src/model/sectionStructure.ts`, `studyMetadata.ts`, `frontMatter.ts` | KEEP | Pure, jól tesztelt struktúra/metadata helpers. | OMI manuscript subdomain. | Áthelyezés re-exporttal; viselkedés változatlan. | low |
| `src/model/identity.ts`, `contributorName.ts` | HARDEN | Scholarly-agent szemantika használható; accounttal való link és evidence boundary nem mindenütt explicit. | Accountfüggetlen agent/contribution domain, külön evidence link. | Invariant/fixture bővítés; transport mapping. | medium |
| `src/model/metadata.ts`, `scholarlyMetadata.ts`, `localizedText.ts`, `keywords.ts` | KEEP | Pure és tesztelt domain logika. | Core metadata modul. | Mechanikus move késői PR-ban. | low |
| `src/model/citations.ts`, `citationClusters.ts` | HARDEN | Működő citation model és tesztek; content parsing több helyen Tiptaphoz kötött. | Core reference/citation identity és editor-neutral anchors. | Citation domain megtartása; content lookup adapterre állítása. | medium |
| `src/model/cslRendering.ts` | REFACTOR | Rendering policy ugyanabban a model rétegben, mint a citation domain. | Renderer/application service. | Pure CSL normalization marad; output formatting adapterbe. | low |
| `src/model/notes.ts`, `noteCitations.ts`, `noteRichText.ts` | HARDEN | Jó funkcionális lefedettség; note body/rich text ugyanazt a codec-problémát örökli. | Core notes + portable rich-text content. | ContentCodec mögé terelés, referential-integrity tests. | medium |
| `src/model/namedAnchors.ts`, `crossReferences.ts` | HARDEN | Stabil ID-k és hierarchikus xref tesztek léteznek; PM position nem lehet authority. | OMI stable anchor ID + semantic target; editor projection külön. | Anchor invariant + deletion/tombstone behavior fixture. | medium |
| `src/model/assets.ts` | HARDEN | Asset metadata elkülöníthető, de data URL/path/storage concern felbukkan importokban. | Asset identity/role/digest a core-ban; byte store külön port. | AssetRef contract, importer externalization, MIME/hash gate. | medium |
| `src/model/tombstone.ts` | KEEP | Domain deletion/history segéd jó alap. | History/anchor integrity része. | Property-based references-after-delete teszt. | low |
| `src/model/proofing.ts` | REFACTOR | Teljes before/after string és UTF-16 offset sérülékeny strukturális editnél. | Stable anchor + semantic operation alapú tracked change/proofing. | Adapterrel olvasni a régit; új operation model, round-trip fixture. | high |
| Publication correction reprezentáció | REFACTOR | Proofing/history/publication build között implicit, nincs egyértelmű published-artifact kapcsolat. | Külön correction event source artifact/revision hivatkozással. | Domain type + build manifest link; UI később migrál. | medium |
| Unknown extension handling | REPLACE | Nincs igazolt lossless policy; object spread nem jelent future-version kompatibilitást. | Namespaced raw extension bag + explicit forward policy/quarantine. | Extension codec és golden round-trip; future fixtures. | high |

## 4. Editor engine és application core

| Jelenlegi komponens | Státusz | Probléma / bizonyíték | 1.0 célállapot | Átállási lépés | Kockázat |
|---|---|---|---|---|---|
| `src/components/BlockEditor.tsx` | SPLIT | Több száz sorban editor config, JSON serialization, change dispatch és React UI. | Tiptap session/codec külön; vékony React host. | Extract `EditorSessionFactory` és `ContentCodec`; snapshot UI tesztek. | high |
| `src/editor/extensions/Omi*` | HARDEN | Gazdag semantic extension készlet; portable és PM elnevezések nincsenek formalizálva. | Editor-adapter extensionök, dokumentált mapping table-lel. | Node/mark contract fixtures és unknown-node diagnostics. | medium |
| `src/editor/continuousManuscriptDocument.ts` | HARDEN | Jó study projection és stabil ID használat; közvetlen current block content alakhoz kötött. | OMI↔PM study projection a ContentCodecen át. | Codec injection, round-trip és corrupted content tests. | medium |
| `src/editor/progressiveStudyMounting.ts` | KEEP | Explicit küszöbök és tesztelt progressive mounting; helyes nagy-dokumentum stratégia. | Editor runtime service. | Teljesítménybudget és telemetry hozzáadása. | low |
| `src/editor/blockFocusRegistry.ts` | KEEP | Runtime-only focus ownership világos. | Editor session szolgáltatás. | Move/re-export; lifecycle cleanup test. | low |
| `src/editor/manuscriptDomSelection.ts`, selection extensionök | HARDEN | Használható cross-section kiválasztás; DOM/PM állapot kezelése érzékeny remountra. | Runtime selection service stable OMI anchor projectionnel. | Remount/mobile/IME/browser matrix teszt. | medium |
| `src/editor/clipboardPaste.ts`, `manuscriptClipboard.ts` | HARDEN | Hasznos sanitizer/structured copy útvonal; content contracthoz kötött. | Importer-like clipboard adapter diagnostics/loss reporttal. | Közös import diagnostics; hostile HTML fixture. | medium |
| `src/app/useStudioStore.ts` | SPLIT | Portable domain, revision, selection, UI panelek, timer és use-case mutáció egy 1244 soros store-ban. | Zustand csak UI/session projection; application core birtokolja a use-case-eket. | Facade bevezetés, actionönként delegálás, selector compatibility. | high |
| `src/app/*Actions.ts` | REFACTOR | Sok action közvetlen Zustand `set/get`-tel dolgozik; néhol operation uniont `as never` kerüli meg. | Platformfüggetlen command handler + UI adapter. | Use-case slice-onként kivonás; characterization tests. | high |
| Több 2,5 s checkpoint timer | MERGE | Több útvonal saját timeoutot ütemezhet; lifecycle/race nehezen bizonyítható. | Egy `CheckpointScheduler` document sessionönként. | Timer injection és fake-clock teszt; régi timer eltávolítás. | medium |
| `src/store/workspaceStore.ts`, `src/model/workspace.ts` | REMOVE | Nagy localStorage alpha workspace/collaboration állapot, aktív hívóhely nem igazolt. | 1.0 core-ban nincs; külön experiment, ha szükséges. | Import/reference audit, feature flag/export, majd törlés. | medium |
| `src/document/createBlankManuscript.ts` | REFACTOR | Hasznos factory, de 0.1 envelope-ot gyárt. | Application create use-case a canonical codec/factoryval. | Paraméterezett current stable version, fixture update. | high |
| `src/document/migrateIdentityModel.ts`, `migrateVersioningModel.ts` | DEFER | Pre-stable kompatibilitási maradványok; nincs production kötelezettség. | Egyszeri explicit legacy importer, nem általános migration framework. | Fixture-rel dokumentálni vagy eltávolítani freeze előtt. | low |

## 5. History és persistence

| Jelenlegi komponens | Státusz | Probléma / bizonyíték | 1.0 célállapot | Átállási lépés | Kockázat |
|---|---|---|---|---|---|
| `src/model/versioning.ts` | HARDEN | Erős immutable lineáris revision/change/revert szemantika és tesztek; tárolási feltételezések beleszövődnek. | Core history semantics + repository port. | Előbb adapter a jelenlegi snapshotokra, utána optimalizáció. | medium |
| `src/model/workingState.ts` | KEEP | Jó különbségtétel working change és revision között. | Application history session. | Public contract tisztítása, behavior változatlan. | low |
| `src/model/revisionIntegrity.ts`, `stateDigest.ts` | HARDEN | Digest/integrity jó alap; canonical serialization és schema version pinning szükséges. | Canonical digest input és algorithm/version metadata. | Cross-runtime golden hash fixture. | medium |
| Full snapshot per revision | REFACTOR | Nagy dokumentumnál O(revision × size), és a history több tárolóban duplikálódik. | `RevisionRepository`, content-addressed checkpoint/delta lehetőséggel. | Benchmark + repository wrapper; formatváltás csak utána. | high |
| `src/app/lastSessionPersistence.ts` | REFACTOR | IndexedDB-ben manuscript/history/UI/session keveredik; restore validáció nem ugyanaz a canonical gate. | Recovery cache külön authorityvel és validationnel. | Cache schema/version, recovery receipt, corruption tests. | high |
| `src/services/nativeManuscriptFile.ts` | REPLACE | Modulglobális current path; `JSON.parse` cast schema/version validation nélkül; közvetlen felülírás kockázata. | Session-owned opaque location + validated open + atomic save. | Új port/adapter párhuzamosan, feature flag, fault-injection tests. | high |
| `src/services/exportOmi.ts` | REFACTOR | Object spread + JSON stringify; validáció nélkül; localStorage signature beemelése a rootba. | Canonical serializer, validation gate, külön evidence bundle. | Serializer shadow output diff; signature externalization. | high |
| `src/services/assetRepository.ts` | HARDEN | IndexedDB/memory adapter jó seed. | `AssetByteStore` implementáció quota/integrity/lifecycle policyval. | Port bevezetés; hash/MIME/eviction tests. | medium |
| `src/services/omiContainerImport.ts` | KEEP | Erős ZIP biztonság: méret/entry/CRC/SHA/path/symlink/encryption/ambiguity védelem. | Biztonságos container transport parser. | Kód megtartása; semantic codec leválasztása és fuzz. | low |
| `src/services/omiContainer.ts` | REFACTOR | Valós manifest/assets/history/profile/output csomag; 0.1/pre-stable contract és domain/presentation keverés. | SPEC-330 szerinti versioned container writer. | A jelenlegi manifestből normatív schema; dual-read, új-write. | high |
| Publication signature localStorage | REPLACE | Nem credential/evidence store, nem hordozható és könnyen összekeveredik a manuscript semantics-szal. | Secure evidence repository; manifest/artifact digesthez kötve. | Read-only migration/export, majd localStorage út eltávolítás. | high |

## 6. Import/export és publication

| Jelenlegi komponens | Státusz | Probléma / bizonyíték | 1.0 célállapot | Átállási lépés | Kockázat |
|---|---|---|---|---|---|
| Import actionök összessége | MERGE | DOCX, PDF, OMI, office, music és reference import eltérő return/error/progress modellt használ, részben közvetlenül store-ba ír. | Közös `Importer` + registry + diagnostics/fidelity/provenance. | Contract elsőként; adapterenként wrap, behavior fixture. | high |
| `docxImportStrategy.ts`, `docxManuscriptImport.ts`, monograph modulok | HARDEN | Érdemi struktúra/fidelity/preflight/limit logika és sok teszt. | DOCX importer adapter. | Wrapper; synthetic corpus, cancel/memory/loss golden. | medium |
| `docxImportActions.ts` | REFACTOR | 0.1 OMI-t épít és közvetlen store state-et ír. | Import application use-case draft/commit lépéssel. | Adapter output → draft, UI review, command commit. | high |
| Server PDF import | HARDEN | Strukturális/typográfiai elemzés létezik, de természeténél fogva lossy és API-specifikus. | Best-effort importer explicit fidelity reporttal. | Diagnostics normalization, job timeout/abort, public fixtures. | medium |
| `officeImport.ts` HTML/table/image | HARDEN | Detached parsing és sanitizer jó alap; data URL és közös quota policy további kontrollt igényel. | Import adapters asset externalizationnel. | Közös source/diagnostics, hostile corpus. | medium |
| `musicImport.ts` + file routing | REFACTOR | MusicXML működik; `.mid/.midi` parserre a külső `musicxml?|xml` feltétel miatt nem jut el a vezérlés. | Capability-alapú music importer probe. | Kis routing fix külön PR-ban + MIDI fixture, majd common wrapper. | low |
| `referenceInterchange.ts` | HARDEN | RIS/BibTeX/CSL-JSON támogatás és teszt jó alap. | Reference importer/exporter normalized provenance-nal. | Duplicate/conflict/encoding corpus. | low |
| Zotero/Mendeley reference manager | HARDEN | Működő provider service, de credential/sync/audit contract egységesítendő. | `ReferenceManagerConnector`, scoped credential és sync receipt. | Existing client wrap, incremental token migration. | medium |
| Export service-ek összessége | MERGE | Sok önálló `export*.ts`, eltérő delivery és diagnostics; egyesek közvetlenül Tiptap contentet parse-olnak. | Renderer registry + egységes result; delivery külön. | Interface + wrappers, callsite migráció formátumonként. | high |
| `exportFileDelivery.ts` | KEEP | Jól elkülöníthető browser/native delivery seed. | `ArtifactDeliveryPort` adapter. | Interface implementálása, renderer importok tiltása. | low |
| `exportJats.ts`, JATS validators | HARDEN | Erős schema/JATS4R/release tests; content és profile mapping formalizálandó. | Stable JATS renderer + pinned validator receipts. | RenderingContext adapter, golden/canonical XML tests. | medium |
| `exportHtml.ts`, HTML artifact/package | HARDEN | Jó output és tesztek; aktív tartalom/remote resource policy legyen explicit. | Stable standalone/package renderer CSP/security profile-lal. | Security corpus + a11y gate + deterministic manifest. | medium |
| `exportDocx.ts` | HARDEN | Jelentős export logika és index tests; közös renderer contract hiányzik. | DOCX renderer fidelity reporttal. | Wrap, golden unzip/XML structural tests. | medium |
| `exportPdf.ts`, `vivliostylePdfRenderer.ts` | HARDEN | Pinned renderer teszt/build létezik; font/environment és byte determinism nem teljesen rögzített. | Print PDF renderer versioned resource manifesttel. | Font bundle/fallback receipt, visual regression, timeout sandbox. | high |
| `exportEpub.ts`, `exportLatex.ts` | DEFER | Működő export code, de stable fidelity evidence korlátozott. | Preview renderer ugyanazon contracton. | Wrap és fixture corpus; stable csak külön gate után. | low |
| `exportIdml.ts`, `exportXtg.ts`, `exportMif.ts`, `exportSla.ts` | DEFER | Implementáció és smoke/shape tesztek vannak, de célalkalmazásos acceptance kevés. | Preview DTP rendererek; nem blokkolják az alap 1.0-t. | Common wrapper; synthetic acceptance corpus, későbbi promotion. | low |
| `src/model/publicationProfile.ts` module augmentation | REFACTOR | Presentation policy az OMI manuscript típusát bővíti. | Külön versioned publication profile/build input. | Mapping adapter és referenciamező; régi embedded profile dual-read. | high |
| Paragraph/publisher styles | HARDEN | Gazdag működő rendszer. | Renderer-neutral style intent + target mapping. | Existing functions wrap; unsupported mapping loss report. | medium |
| `src/model/publicationBuild.ts`, build manifest/artifact/hash | KEEP | Committed-head, manifest, provenance és hashing jó 1.0 seed. | Publication pipeline orchestrator/evidence. | Contract név/mező freeze, deterministic tests. | low |
| `publicationSignatureVerification.ts`, server crypto | HARDEN | Verifikáció létezik; evidence placement/key lifecycle tisztázandó. | Exact artifact+manifest signature és rotálható evidence. | Key ID/version, revocation és cross-runtime fixtures. | medium |

## 7. OJS/OMP és review

| Jelenlegi komponens | Státusz | Probléma / bizonyíték | 1.0 célállapot | Átállási lépés | Kockázat |
|---|---|---|---|---|---|
| Studio OJS és OMP client/route párok | MERGE | Nagyrészt közös launch/submission/review/file/writeback capability, párhuzamos DTO és branching. | Common Publishing System Connector API + profile adapterek. | Capability/schema package, registry; OJS/OMP wrapper külön PR. | high |
| `server/src/integrations/ojs/*` | HARDEN | Signed launch, scope, context, review form/recommendation/writeback jelentős implementáció. | OJS connector adapter. | Közös contract mapping + idempotency receipts. | medium |
| `server/src/integrations/omp/*` | HARDEN | Native context/writeback és fejezet confinement jó; közös contract nincs. | OMP connector adapter, monograph extensions. | Közös suite + OMP profile extensions. | medium |
| OJS plugin `omi-integration/1` implementation | HARDEN | Széles capability és szerveroldali PKP object auth; verzió/profile contract fixture hiányzik közösen. | Támogatott OJS verziókra contract-tested adapter. | Shared fixture package + Docker E2E exact matrix. | medium |
| OMP plugin `omi-integration/1` implementation | HARDEN | Reviewer csak assigned chaptert lát; native reviewer/author workflow erős. | OMP profile adapter ugyanazon common contracton. | Shared fixture package + round/stage mapping tests. | medium |
| Direct submission local + external update | REFACTOR | A két rendszer nem atomikus; branchelt handler és retry/receipt authority nem egységes. | Transactional outbox + idempotent connector saga. | Outbox table/worker; dual-write shadow; failure UI. | high |
| `server/src/services/peerReviewService.ts` | SPLIT | Domain transition, persistence és serializer/visibility részben együtt. | Review domain policy + repository + projection serializers. | Characterization/role-matrix tests, majd kivonás. | medium |
| `reviewManuscriptService.ts` | HARDEN | Jó szerveroldali allowlist/size/sanitization projection, de ad hoc article snapshot és SVG/data URI kérdés. | Versioned anonymous OMI projection service. | Projection report, metadata/asset stripping, leak corpus. | high |
| Reviewer workspace/revision | HARDEN | Assignment scoped snapshot és visibility működik. | Review domain workspace, immutable source revision link. | Source digest/version és lifecycle invariant. | medium |
| Recommendation mapping | HARDEN | OJS és OMP értékek részben külön modellek. | Core controlled recommendation + connector mapping. | Mapping exhaustiveness/unknown tests. | low |
| Review-confidential integration flag | REPLACE | Kliens által küldött allow/confidential jel nem lehet security authority. | Server-derived `ExecutionGrant` assignmentből és policyból. | Route schema szűkítése; deny tests; audit. | high |

## 8. Identity, backend és API

| Jelenlegi komponens | Státusz | Probléma / bizonyíték | 1.0 célállapot | Átállási lépés | Kockázat |
|---|---|---|---|---|---|
| `server/prisma/identity/schema.prisma` | HARDEN | Teljes account/auth/provider/institution/admin modell, működő migrációkkal. | Egyetlen identity authority. | Policy/documentation alignment, backup/migration/recovery tests. | medium |
| `server/prisma/schema.prisma` duplikált User/Session/Identity | SPLIT | Ugyanazok a fogalmak két DB-ben; bridge azonos UUID-t tükröz FK-k miatt. | Main DB csak `StudioPrincipal` projection és workflow FK. | Logikai rename/API előbb; dual-read reconcile; későbbi DB migration. | high |
| `studioPrincipalBridge.ts` | HARDEN | Hasznos compatibility bridge, de az authority/reconciliation nincs teljesen formalizálva. | Idempotens principal projection service outbox/reconcile jobbal. | Metrics, drift repair, failure tests. | medium |
| Local account password auth | HARDEN | Kód scryptet használ, dokumentáció részben Argon2id/future állapotot állít. | Verziózott password-hash policy és rehash-on-login. | Dokumentáció igazítása; paraméter/version mező; security test. | medium |
| ORCID/Google/Microsoft/institutional OIDC | HARDEN | Provider flows rendelkezésre állnak; identity linking és redirect policy egységesítendő. | Provider identity adapterek közös auth policyval. | Shared state/nonce/PKCE/redirect contract, negative tests. | medium |
| Institution/central admin | HARDEN | Külön route/service és audit modellek léteznek. | Policy service identity DB authorityval és `/api/v1` contracttal. | Route adapter + authorization matrix. | medium |
| Author signature | REFACTOR | Portable manuscript és account/evidence/storage fogalmak összecsúsznak. | Publication identity evidence külön store/manifestben. | Evidence DTO + artifact binding; old read compatibility. | high |
| Personal OJS/OMP credential mezők + `UserIntegration` | MERGE | Provider secret két helyen/modelben is élhet. | Egy `CredentialRepository`, provider-specific profile metadata. | Inventory/migrate/dual-read, checksum, majd régi mezők eltávolítása. | high |
| Native bearer token localStorage | REPLACE | XSS és desktop webview kompromittálódás esetén kinyerhető. | Platform secure storage; browser HttpOnly session. | SecureStorage port/plugin, token migration/logout fallback. | high |
| `server/src/routes/*` vegyes `/api` és `/integrations` | REFACTOR | Nincs egységes stabil verzió/error/idempotency contract; csak institution admin részben v1. | Additív `/api/v1`, közös schema és handler. | V1 facade route-onként; deprecation telemetry. | high |
| Route → Prisma közvetlen felelősségek | SPLIT | Több route/service határ eltérő; transaction/audit nem konzisztens. | Route→application→repository. | Kritikus review/credential/submission use-case-ekkel kezdeni. | medium |
| Zod request schemas | HARDEN | Sok route-on van validation, de nincs egyetlen OpenAPI/DTO source. | Shared Zod/OpenAPI transport contract. | Error envelope + schema registry; contract tests. | medium |
| `server.ts` shutdown | HARDEN | Main Prisma disconnect látható, identity kliens lifecycle nem egyértelmű. | Mindkét DB, worker és renderer rendezett shutdown. | Lifecycle manager/integration test. | low |

## 9. Integration, storage és platform

| Jelenlegi komponens | Státusz | Probléma / bizonyíték | 1.0 célállapot | Átállási lépés | Kockázat |
|---|---|---|---|---|---|
| `src/integrations/contracts.ts`, `registry.ts` | HARDEN | Jó provider/capability vocabulary seed; kliens–szerver capability nevek közt eltérés (`document.suggest`/`suggest`). | Egy megosztott capability schema. | Generate/import common constants; exhaustive negotiation test. | medium |
| `server/src/integrations/integrationExecution.ts` | REFACTOR | Timeout/limits/audit/hashed payload jó, de data scope és confidential authority részben requestből jön. | Server-issued scoped ExecutionGrant, minimal payload builder. | Új grant endpoint/policy; régi request mezők figyelmen kívül/deny. | high |
| DeepL/AI integration | HARDEN | Provider execution létezik; retention/purpose/suggestion boundary egységesítendő. | Scoped connector, explicit consent és audit. | Built-in adapter wrapper; no-direct-write default. | medium |
| Extension registry | DEFER | Manifest/endpoint registry van, executable sandbox nincs. | 1.0-ban built-in connector registry; arbitrary plugin runtime később. | Stable claim szűkítése; remote endpoint allowlist. | low |
| `server/src/cloud/CloudStorageProvider.ts` | KEEP | Jó provider abstraction. | Remote object storage port. | Név/capability alignment; semantic logic tiltása. | low |
| WebDAV/Nextcloud provider | HARDEN | Encryption/ownership/checksum és trusted URL védelem jó alap. | Hardened remote byte store. | Redirect SSRF tests, ETag conflicts, recovery corpus. | medium |
| Google Drive/OneDrive/Dropbox OAuth providers | HARDEN | Közös OAuth provider működik; scope/token lifecycle/retry bővítendő. | Provider adapterek common storage receipt contracttal. | Scope inventory, refresh/revoke tests, resumable upload ahol kell. | medium |
| SharePoint | DEFER | Nincs explicit külön adapter; Graph/OneDrive profilból később levezethető. | Külön capability profile csak tesztelt implementáció után. | Nem blocker az alap 1.0-ra. | low |
| `localCloudFolder.ts` | KEEP | Helyesen lokális szinkronizált mappaként kezeli a storage-ot. | `SyncFolderAdapter`. | Atomic/conflict behavior teszt. | low |
| `src/services/deviceStorageMode.ts`, platform detection | HARDEN | User-agent/Tauri alapú döntés; capability és platform fogalom összekeveredhet. | Capability detection + injected platform adapter. | Composition root és contract tests. | medium |
| Tauri capabilities/config | KEEP | Szűk allowlist, updater és desktop build workflow használható. | Desktop platform adapter. | Secure storage/share/open-with portok hozzáadása. | low |
| Android SAF/updater/distribution | HARDEN | Tesztek és release workflow vannak; dokumentum-location lifecycle/recovery szükséges. | Android adapter stable matrixszal. | Persisted URI permission + process death/update tests. | medium |
| iOS/iPadOS | DEFER | Workflow/simulator nyomok vannak, release scope experimental/preview. | Ugyanaz a core, Apple Files/Keychain/auth adapter; stable csak evidence után. | Build/simulator gate nonblocking, privacy/data-loss blocking. | medium |
| System fonts | REFACTOR | Platform font discovery közvetlen publishing függésbe kerülhet. | Platform font resolver → versioned resource manifest. | Font receipt/fallback; renderer nem kérdez platformot közvetlenül. | medium |

## 10. CI, teszt és dokumentáció

| Jelenlegi komponens | Státusz | Probléma / bizonyíték | 1.0 célállapot | Átállási lépés | Kockázat |
|---|---|---|---|---|---|
| Studio unit/pretest suite | KEEP | 441/441 sikeres; széles model/import/export/UI-source coverage. | Gyors PR gate, characterization védőháló. | Megtartani; új boundary tests hozzáadása. | low |
| Frontend lint/build | HARDEN | Sikeres; kb. 3,76 MB main JS chunk és ineffective dynamic import warning. | Bundle/perf budget és valódi code splitting. | Baseline budget; route/renderer lazy load. | medium |
| Server typecheck/build | KEEP | Prisma generationnel sikeres. | Kötelező PR gate. | Mindkét schema migration check hozzáadása. | low |
| Publication release suites | KEEP | JATS/JATS4R/Vivliostyle/build/submission/artifact jelentős tesztek. | Publication gate része. | Exact versions/artifact evidence manifest. | low |
| Playwright E2E | HARDEN | Kevés kritikus flow; néhány teszt source-regex jellegű, nem runtime bizonyíték. | Core user journey + recovery/a11y E2E. | Regex testeket runtime behaviorrel kiegészíteni. | medium |
| PKP integration workflow | HARDEN | Valós Docker flow értékes, de path-filter miatt nem fut minden RC commiton. | OJS/OMP exact matrix + RC aggregator. | Reusable workflow; RC-n filter nélkül. | medium |
| Desktop/Android workflows | HARDEN | Exact audited commiton zöld build; install/save/update runtime matrix külön bizonyítandó. | Artifact install/smoke/evidence gate. | Signed artifact smoke VM/device farmon. | medium |
| iOS workflows | DEFER | Nem futott az audited exact commiton; scope experimental. | Preview evidence; stable későbbi promotion. | RC aggregate nonblocking, security blocker marad. | low |
| `.github/workflows/1.0-readiness.yml` | HARDEN | Jó SBOM/benchmark/readiness kezdet, de path-filteres. | Egyetlen exact-RC aggregate, minden kötelező gate-tel. | `workflow_call` + release-candidate dispatch/tag policy. | high |
| OMI website CI | REFACTOR | `npm run build` nem tartalmazza a `test:file-format` suite-ot. | Schema conformance minden schema/spec változásnál és release-nél. | Külön job vagy build dependency. | high |
| Parser/security testing | HARDEN | Sok konkrét ellenőrzés van, de közös fuzz/hostile corpus nincs minden inputhoz. | Biztonsági fixture corpus és fuzz budget. | Synthetic malicious ZIP/XML/HTML/JSON/assets. | medium |
| Accessibility | REFACTOR | Nincs látható teljes release-blocking a11y suite. | WCAG 2.2 AA automated + manual smoke kritikus flowkra. | Axe Playwright, keyboard/focus, screen-reader checklist. | medium |
| Recovery testing | REFACTOR | Session restore tesztek vannak, de kill-during-save/atomic rollback kevés. | Fault-injected save/recovery/update/outbox gate. | Adapter fault harness és corrupt fixtures. | high |
| OMI governance/status dokumentumok | REPLACE | Több státusz lemaradt a működő container/review/citation implementációtól. | Generated/evidence-linked status matrix. | Code owner review + release evidence linkek. | low |
| Real manuscript fixture policy | KEEP | A release/privacy irány helyes: privát kézirat nem kerül Git/CI-be. | Csak synthetic/public/tesztcélú corpus, content-free log. | CI secret/content/path scanner és contributor guide. | low |

## 11. Kiemelt dokumentált eltérések

1. **SPEC-320 0.2 vs Studio 0.1:** jelenleg a specifikáció tükrözi a kívánt interoperabilitási irányt; a Studio a tényleges működést. A kettő egyikét sem szabad önmagában „helyesnek” tekinteni: a 0.2 schema hiányzó Studio-integrációja 1.0 blocker.
2. **Container státusz:** a specifikáció/governance egyes részei kezdetlegesnek írják, miközben a Studio fejlett ZIP/manifest/checksum implementációval rendelkezik. Itt a működő implementációból kell a normatív contractot visszaírni, nem új konténert tervezni.
3. **Identity dokumentáció:** egyes security leírások az intézményi/central identityt jövőként és Argon2idként írják; a kód már két-DB-s identity rendszert és scryptet használ. A jelenlegi működés a technikai valóság, de az authority és hash policy formalizálása kötelező.
4. **Review státusz:** a kód szerveroldali anonim projectiont, visibility serializer-t és OJS/OMP writebackot tartalmaz, ami több dokumentált státusznál előrébb van. A hiány itt nem a teljes alrendszer, hanem a közös domain contract és security corpus.
5. **Zöld CI jelentése:** a jelenlegi commit CI-je jó egészségi jel, de path filterek és az OMI conformance job hiánya miatt nem azonos a teljes 1.0 release bizonyítékkal.

## 12. Amit kifejezetten nem szabad újraírni

- Tiptap editor és a jelenlegi OMI extensionök: adapterhatár kell, nem editorcsere.
- A lineáris immutable revision szemantika: repository kell, nem új history termék.
- `omiContainerImport.ts` biztonsági parser: normatív contract és fuzz kell, nem új ZIP parser.
- A DOCX/JATS/HTML feldolgozók: közös interface és fixture kell, nem nulláról új implementáció.
- Publication build manifest/hash alap: evidence contractként kell stabilizálni.
- Cloud storage provider és SSRF segédek: porthoz kell igazítani.
- Tauri/Android shell és release workflow: hiányzó platform portokat kell hozzáadni.
- OJS/OMP plugin authorization és object-scope ellenőrzés: közös contract suite alá kell helyezni.

## 13. Freeze előtti P0/P1 gap-ek

| Prioritás | Gap | Freeze feltétel |
|---|---|---|
| P0 | Üres Studio schema + 0.1/0.2 eltérés | Canonical schema pinned, open/save validation és quarantine működik |
| P0 | Tiptap JSON a portable content contractban | SPEC-100 content grammar és adapter migration terv/fixture elfogadva |
| P0 | Container contract nincs összhangban SPEC-330-cal | Manifest/path/security/version profile fagyasztva |
| P0 | Double-blind/AI scope authority részben kliensvezérelt | Server-issued grant és leak/negative tesztek |
| P0 | Native token localStorage | Secure storage migráció kész a stable native platformokon |
| P1 | Zustand/app ownership keveredés | Application facade és első create/open/save use-case-ek aktívak |
| P1 | Két identity authority látszata | Identity DB authority + StudioPrincipal projection döntés és reconcile kész |
| P1 | OJS/OMP párhuzamos contract/writeback | Common connector DTO + outbox/idempotency terv implementálva |
| P1 | Path-filteres release bizonyíték | Exact-RC aggregate workflow elérhető |
