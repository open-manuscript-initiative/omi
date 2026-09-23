---
title: Open Manuscript Studio 1.0 — Vezetői összefoglaló
sidebar_label: Vezetői összefoglaló
description: Az Open Manuscript Studio 1.0 célarchitektúrájának, fő kockázatainak és stabilizációs útjának vezetői összefoglalója.
---

# Open Manuscript Studio 1.0 — Executive Summary

**Audit baseline:** 2026-09-19; Studio `main` @ `eca2cf45762116e1c00a89b3397840ed89109511`, OMI @ `e2f421707f1154c0ed30cb7750e0689a837e9b0a`, OJS plugin @ `6c0842fc1ce6c4a1ea75f7b27660af8011be303b`, OMP plugin @ `4f7a2c0a2f29f68e3ad05ac73ca7652bc6410ac7`.

## Rövid állásfoglalás

Az Open Manuscript Studio jelenlegi kódbázisa alkalmas az 1.0 alapjának. Nem indokolt teljes újraírás. A rendszerben már létezik egy jelentős, működő termék: gazdag Tiptap editor, tanulmányalapú progressive mounting, immutable revision modell, több formátumú import/export, publikációs build és artifact provenance, OJS/OMP review/writeback, account és intézményi identity, cloud storage, Tauri/Android réteg, valamint széles teszt- és CI-infrastruktúra.

Az 1.0 fő problémája nem a funkcióhiány, hanem az, hogy néhány kritikus contract még nincs összhangban a működő implementációval. A legnagyobb példa az OMI formátum: az OMI repositoryban már 0.2.0-s SPEC-320 schema és fixture-ek vannak, miközben a Studio 0.1-es envelope-ot ír, a vendorizált 0.2 schema fájlja pedig üres. Ezt schema freeze előtt kötelező kijavítani, mert csendes adatvesztéshez vagy hamis kompatibilitási ígérethez vezethet.

Az ajánlott stratégia controlled refactoring: contractot és adaptert építeni a működő kód elé, characterization/conformance tesztekkel lezárni a jelenlegi viselkedést, majd hívóhelyenként migrálni. Csak ezután távolítható el a régi út.

## 1. A jelenlegi kód mekkora része tartható meg?

Az auditált fájlok, adatfolyamok és tesztek alapján:

- a jelenlegi implementáció és működő viselkedés **kb. 75–85%-a megtartható**;
- **kb. 45–55%** lényegi átalakítás nélkül KEEP/HARDEN kategória;
- **kb. 25–35%** wrapperrel, ownership-szétválasztással vagy moduláthelyezéssel marad meg;
- valódi lecserélés/eltávolítás várhatóan **kb. 5–10%**.

Ez architekturális, nem formális LOC-becslés. A refaktor munka nagyobb lehet a lecserélendő kód arányánál, mert sok consumer közvetlenül parse-olja az `OmiBlock.content` mezőbe stringelt Tiptap JSON-t, illetve közvetlenül a Zustand store-on keresztül végez use-case mutációt.

Kifejezetten megtartandó:

- a Tiptap editor, a semantic extensionök és a tanulmányonkénti progressive mounting;
- a lineáris, immutable revision/revert szemantika;
- az OMI container import erős ZIP-biztonsági ellenőrzései;
- a DOCX import, valamint a JATS/HTML/DOCX/PDF és DTP exporter implementációk mint renderer-adapterek;
- a publication build manifest, hashing és provenance alapja;
- a committed-build webes renderer, az explicit lektorált/nem lektorált pecsét,
  a szerver-issued delivery grant és durable delivery receipt/outbox alapja;
- a cloud-storage provider réteg és SSRF-védelmek;
- a Tauri shell, Android updater/distribution és a platform build workflow-k;
- az OJS/OMP pluginok signed launch, scope és PKP-object authorization logikája;
- a review szerveroldali allowlist projection és visibility serializer alapja.

Szűken cserélendő vagy eltávolítandó:

- az üres Studio schema artifact;
- a schema/version validation nélküli native JSON open/save út;
- a native bearer token `localStorage`-os tárolása;
- a localStorage-ból manuscript rootba injektált publication signature;
- a kliens által állítható review-confidential integration authority;
- üres domain placeholder fájlok és a bizonyítottan árva alpha workspace store;
- a MIDI import routing konkrét hibája.

## 2. Hol vannak a legnagyobb 1.0-s architekturális kockázatok?

### 1. Formátum- és adatvesztési kockázat

A SPEC-320 0.2 és a Studio 0.1 közötti eltérés jelenleg a legfontosabb blocker. A Studio open/save útjai nem használnak egységes exact schema + semantic invariant validációt; egy újabb, nem támogatott dokumentum csendes megnyitása és felülírása veszélyes. Az unknown extension adatok lossless megőrzése sincs conformance suite-tal igazolva.

### 2. Tiptap JSON mint portable domain

Az `OmiBlock.content` egyszerre lehet stringelt Tiptap JSON vagy legacy text. A citations, notes, cross-references, search, proofing, clipboard és exporterek több helyen közvetlenül ismerik ezt. Ez az editor runtime-ot file-format függőséggé teszi. A megoldás nem editorcsere, hanem SPEC-100 portable content AST és egyetlen Tiptap↔OMI codec.

### 3. State és use-case ownership

A `useStudioStore.ts` egyszerre tart portable manuscript state-et, historyt, selection/focust, UI panelállapotot, persistenciát és timereket. Emiatt a core use-case-ek React/Zustand nélkül nehezen tesztelhetők, és ugyanaz a dokumentumlogika platformonként könnyen eltérhet. Application facade és fokozatos store-delegálás szükséges.

### 4. Identity, credential és review security

Két Prisma schema részben duplikál User/Session/Identity fogalmakat. A tényleges identity DB-t authorityként, a main DB rekordját StudioPrincipal projectionként kell formalizálni. A natív tokent secure storage-ba kell költöztetni. A double-blind projection szerveroldali security boundary maradjon, de ki kell terjednie asset metadata/EXIF/SVG/provenance szivárgásra is. Confidential AI/integration hozzáférést kizárólag szerver-issued grant engedhet.

### 5. Külső writeback és release evidence

OJS/OMP authoritative a saját workflow-jában; a lokális DB és a külső rendszer nem frissíthető egyetlen ACID tranzakcióban. Durable outbox, idempotency key és writeback receipt kell. Ezzel párhuzamosan a jelenlegi zöld CI nem teljes 1.0 bizonyíték: több workflow path-filteres, és az OMI website build nem futtatja automatikusan a file-format conformance teszteket.

Független folyóirat és kiadó OJS/OMP nélkül is használhassa a Studio review
workflow-ját. Ez akkor nem visszalépés, ha az authority explicit: a lezárt
Studio-natív lektori forduló evidence, külön editor decision fogad el egy exact
revíziót, és csak ezután jelenhet meg a látható és géppel olvasható lektorált
pecsét. Enélkül kötelező a `not-peer-reviewed` jelölés. A fogadó webhely csak
delivery target. Ez a capability addig Preview, amíg az anonimitási, tamper,
outbox recovery, accessibility és receiver-contract gate-ek nem teljesülnek.

## 3. Mit kell mindenképpen elvégezni schema/API freeze előtt?

1. **Fagyasztani a portable content contractot.** A SPEC-100-nak pontosan meg kell mondania a block/inline AST-t, stable ID/anchor szemantikát és extension pointokat. A Tiptap mappinget golden round-trip fixture-rel kell igazolni.
2. **Összhangba hozni SPEC-320-at és a Studiot.** Released canonical schema, checksum pin, generált wire types/codec, open/save/export validation, future-version quarantine és unknown-extension round-trip szükséges. Új `schemaVersion` mező nem javasolt: a `schema` URI és az `omi.version` együtt legyen authority.
3. **Fagyasztani a SPEC-330 container contractot.** A jelenlegi biztonságos ZIP implementációból kell normatív manifest/path/checksum/security profile-t és cross-repo golden fixture-t készíteni. A container verziója külön marad az OMI JSON verziójától.
4. **Rögzíteni a history és identity wire boundaryt.** A revision storage algoritmus belső lehet, de a portable/exportált rész, valamint az agent/contribution/evidence mezők jelentése nem maradhat implicit.
5. **Létrehozni az additív `/api/v1` alapot.** Közös Zod/OpenAPI DTO, error envelope, idempotency és optimistic concurrency; a régi route-ok compatibility facade-ként maradnak. Nem szabad egyszerre átnevezni mindent.
6. **Rögzíteni a közös Publishing System Connector contractot.** OJS/OMP közös capability, launch, submission, file, review, writeback és receipt schema; a journal/monograph különbségek profile extensionök.
7. **Elfogadni a review és integration security döntéseket.** Server-side anonymous projection, assignment-scoped ID-k és szerver-issued ExecutionGrant nélkül nincs biztonságos freeze.
8. **Fagyasztani a webes assurance szemantikát.** A publication intent független a lektorálási státusztól; a Studio-natív editor acceptance revision/digesthez kötött, a külső workflow megtartja authority-jét, a webadapter csak exact approved artifactot kézbesít.
9. **Enforce-olni a dependency directiont.** A core nem importálhat Reactet, Tiptapot, Zustandot, Tauri API-t, Prisma klienst vagy provider DTO-t.

## 4. Mit nem szabad most fölöslegesen átírni?

Nem szabad Tiptapot más editorra cserélni. A problémát a portable boundary hiánya okozza, nem az editor minősége. Nem kell új history terméket vagy CRDT-t bevezetni: a jelenlegi immutable revision szemantika megfelelő, repository porttal skálázható. Nem kell új ZIP parsert írni; a jelenlegi container import security kontrolljai erősek. Nem kell a DOCX/JATS/HTML/PDF/DTP feldolgozókat újraimplementálni; egységes renderer/importer contract és fidelity teszt kell köréjük. Nem kell az OJS/OMP pluginokat egy általános plugin runtime kedvéért újraírni; adapterként kell őket közös contract alá helyezni. Nem kell a teljes backend route-fát egyszerre `/api/v1` alá mozgatni.

Az arbitrary executable plugin platform, CRDT/branching collaboration, SharePoint külön provider, iOS stable promotion és minden DTP formátum stable fidelity ígérete elhalasztható. A meglévő kód megmaradhat previewként, de ne növelje az alap 1.0 release gate-et.

## 5. Ajánlott út a beta állapottól az `1.0.0-rc.1`-ig

### Phase A — Architecture freeze

Fogadjuk el az ADR-ket, a stable/preview mátrixot és a compatibility policyt. Tegyük kötelezővé az OMI conformance CI-t, vendoroljuk a sémát a Studioba, vezessük be shadow validationnel az envelope classificatort, majd a future-schema quarantine-t. Fagyasszuk a content AST, container és `/api/v1`/connector candidate contractokat. Ez a fázis nem írja át a működő UI-t.

### Phase B — Core refactoring

Vezessük be az application facade-ot, és migráljuk rá először a create/open/save use-case-eket. A Zustand marad compatibility facade, miközben UI/session projectionre szűkül. Minden content consumer előbb a codec mögé kerül; csak utána vált a stable writer portable AST-re. A revision semantics repository portot kap, a save atomic/recoverable lesz. Formalizáljuk az identity authorityt és költöztessük a native tokent secure storage-ba.

### Phase C — Interoperability hardening

Egységes importer/renderer contractba csomagoljuk a meglévő modulokat, bevezetjük a diagnostics/fidelity/provenance reportot, és leválasztjuk a deliveryt. A publication profile külön build input lesz, a renderer/font/validator verzió rögzül. OJS és OMP közös connector suite-ot teljesít, a writeback outboxon fut. Ugyanezen committed-artifact pipeline-on hardeneljük a Studio-natív editor decisiont és a reviewed/unreviewed webes pecsétet; a WordPress/generic webhely nem kap workflow-authority-t. A review projection és integration grant security corpus release gate lesz.

### Phase D — Platform hardening

Minden platform a file/secure-storage/auth/updater/font/share portokat implementálja. A stable mátrix jelenlegi Route A alapja lehet: web, Windows 11, Ubuntu 22/24, Android 10+ és kijelölt OJS verziók; macOS/OMP/iOS státuszát az aktuális acceptance evidence dönti el. 10k/120k/500k szavas synthetic performance, bundle budget és WCAG journey-k kerülnek a gate-be.

### Phase E — Release Candidate

Egyetlen path-filter nélküli RC aggregator ugyanazon exact commiton futtatja a schema, data integrity, import, publication, review, connector, identity/API, platform, security, accessibility, performance és recovery gate-eket. `1.0.0-rc.1` csak ezek után készül. A private real-document acceptance lokálisan történik; Git/CI-be kizárólag content-free pass/fail és mérőszám kerül.

### Phase F — 1.0

A bizonyított RC commit funkcionális változtatás nélkül promotálható `1.0.0`-ra. Bármilyen kódmódosítás új RC-t igényel. Az 1.0 után a file-format/API/connector compatibility csak a publikált policy szerint törhető; 1.0.x kizárólag kompatibilis hardening.

## Végső ajánlás

Az 1.0 sikere azon múlik, hogy a csapat kevesebb új feature-t, de több explicit contractot és bizonyítékot vállal-e. A kódbázis értékes részei már megvannak. A helyes beruházás a format/content boundary, application ownership, security authority és exact-RC release evidence lezárása. Ha ezek a schema/API freeze előtt megtörténnek, a beta → RC út kontrollált, visszagörgethető és reálisan végrehajtható teljes újraírás nélkül.
