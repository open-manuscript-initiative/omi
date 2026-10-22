---
title: Open Manuscript Studio 1.0 — Vezetői összefoglaló
sidebar_label: Vezetői összefoglaló
description: Az Open Manuscript Studio 1.0 célarchitektúrájának, fő kockázatainak és stabilizációs útjának vezetői összefoglalója.
---

# Open Manuscript Studio 1.0 — Executive Summary

> Aktuális implementáció: a lap végén szereplő **2026-10-12** egyeztetés az irányadó. A régebbi audit történeti adat; a nyitott javítási PR nem main-garancia.


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


## 2026-10-12 — Az aktuális implementáció egyeztetése

Ez a szakasz felülírja a korábbi keltezett részek aktuális implementációra vonatkozó állításait; a korábbi audit történeti bizonyíték marad. Ellenőrzött Studio main: `6242dbae4e6e7be3f9bff9470f64647554f363d8`; OMI: `bc932272d0cbe18b8e45f758fbdb0d6076344bbf`.

A Studio az OMI-SPEC-320@0.3.0 **Draft** sémát írja és validálja. A schema URI és az omi.version elegendő; az alkalmazás, a konténer és a revision külön verziózott. A korábbi kísérleti 0.2 formátumhoz nem keletkezik új migrációs kötelezettség. Ez nem stabil sémafreeze vagy 1.0 kiadási engedély (ADR-001–003).

Az OMI-SPEC-225 strukturált sourceAttributions kapcsolatokat vezetett be, prov:wasDerivedFrom predikátummal és explicit assertion státusszal. Ezek nem azonosak az idézéssel, technikai importeredettel, licenccel vagy igazolt szerzőséggel. A szemantikus kapcsolat már létezik; a teljes import/export lefedettség még nem (ADR-023).

A [Studio #674 PR](https://github.com/open-manuscript-initiative/open-manuscript-studio/pull/674) a blokk és leszármazottai törlésekor egyetlen revision-műveletben rendezi a forráskapcsolatokat. A korábbi history, a bibliográfia és a független kapcsolatok megmaradnak. A történeti revision visszaállítása helyreállítja a forrásgráfot is (ADR-007).

Ugyanez a PR a HTML/JATS exportban source-attribution-not-preserved figyelmeztetést ad minden nem reprezentált kapcsolatnál. A validForExport nem veszteségmentességi igazolás; az OMI megőrzi a teljes gráfot. Nem keletkezik automatikus idézet vagy licencállítás (ADR-008/009/023).

A #674 nyitott javítási javaslat, nem main-garancia. Kötelező teszt: beszúrás → checkpoint → teljes blokkág törlése → checkpoint → mentés/újranyitás → korábbi revision visszaállítása; továbbá export-veszteségjelzés és a forrásdokumentum változatlansága. Csak szintetikus vagy nyilvános fixture használható.

A PR-terv sorrendje: célzott életciklusjavítás (Phase B), exportdiagnosztika (Phase C), baseline-egyeztetés (Phase A), majd a többi törlési/összevonási útvonal, konténeres round-trip, anonimizált projekció és exporter-leképezések bizonyítása RC előtt. Az eredeti A02–A08/B05–B07/C03–C05/E02 kapuk továbbra is érvényesek. A működő szerkesztőt, snapshot historyt és renderereket meg kell tartani; teljes újraírás nem indokolt.


## 2026-10-13 — ODT: előzetes biztonsági és hűségi besorolás

A korábbi #674 forráséletciklus-javítás már main-ban van (`5825c15a1bc3860a3371eaa1c20111bfe4b74ea5`); a korábbi javaslati státusz történeti adat.

Az ODT import/export a Studio #675-ben került main-ba (`5417e19cb26550508b66c780107eea87382b5f2f`). Ez interoperabilitási formátum, nem új OMI-séma vagy tartós munkafájl. Besorolása **Preview / előzetes**; Stable előtt független ODF-validáció, irodai programok közötti kompatibilitás és valós dokumentumos elfogadás szükséges.

A [Studio #678 PR](https://github.com/open-manuscript-initiative/open-manuscript-studio/pull/678) két reprodukált hiány javítását javasolja: a ZIP deklarált méretével megkerülhető kvótát és az exportból jelzés nélkül elvesző sourceAttributions kapcsolatokat. A PR nyitott javaslat, nem main-garancia.

A javasolt importhatár: 200 MiB bemeneti csomag, 25 MiB kibontott részenként, 100 MiB összes kibontott adat és 4096 bejegyzés. A tényleges bájtszámlálás megszakítja a kibontást a korlátnál. Fejléc-, határ-, CRC32-, duplikált/veszélyes útvonal- és átfedésellenőrzés védi a parser előtti határt; titkosított, symlinkes, ZIP64 és többkötetes csomag nem támogatott. Az ismételt olvasás gyorsítótárat használ; a CRC integritásvizsgálat, nem hitelességi aláírás (ADR-008/017).

Az exporter kapcsolatanként source-attribution-not-preserved diagnosztikát és látható figyelmeztetést ad. Az OMI megőrzi a forrásgráfot/historyt; nem keletkezik kitalált idézet, licenc vagy szerzőségi bizonyíték (ADR-008/009/023).

Kötelező regresszió: hamis STORE/DEFLATE méret, tényleges kibontási megszakítás, összesített/bejegyzéskvóta, CRC- és fejlécsérülés, duplikált útvonal, csonkolás, szabályos data-descriptor csomag és változatlan OMI melletti forrásveszteség-jelzés. Csak szintetikus vagy nyilvános fixture használható. Az előzetes besorolás nem mentesít a biztonsági kapuk alól (ADR-019).

PR-sorrend: #675 után a célzott #678 javítás, majd független ODF- és irodai kompatibilitási bizonyíték Stable előtt. A schema/API/ContentCodec/natív biztonság/exact-commit RC kapuk megmaradnak; teljes újraírás nem szükséges.


## Architektúrajavítási ellenőrzőpont — 2026-10-15: munkatérmód és passkey

ADR-001/002/005: az egyszerű szerkesztési mód kéziratazonosítóhoz kötött, helyben tárolt Studio-munkatérbeállítás. Új dokumentumban és revision snapshotban nem szerepel `editorMode`; a Studio 0.3 sémájának egyeznie kell az OMI forrásával. A már importált ismeretlen mezők megőrzése továbbra is érvényes: a javítás nem töröl kiterjesztést és nem értelmezi jogosultságként. Másik telepítésre átvitt fájl nem viszi magával a helyi módbeállítást. Az egyszerű vizuális szerkesztő megmarad.

ADR-012/015/016/017: a passkey meglévő helyi accountot hitelesít; nem tudományos identitás és nem publikációs bizonyíték. A klienscontract `/api/v1/auth/passkeys`; a korábbi `/api/auth/passkeys` azonos handlereket és rate limitet használó kompatibilitási adapter. A route kezeli a HTTP-választ és cookie-t, a szolgáltatás a WebAuthn use-case-eket, a repository adapter az identity-adatbázist. Megmarad a lejáró, egyszer használható challenge, az RP/origin/user handle és user verification ellenőrzése. Credential nem kerül OMI-ba.

A támogatás webes originre korlátozott, külön capability adapterrel. Tauri-origin nem hirdeti ezt a folyamatot támogatottnak. A natív támogatás ellenőrzött böngésző–alkalmazás hitelesítési átadást és contractteszteket igényel. A PostgreSQL-migráció, valódi authenticator-regisztráció/belépés/visszavonás, negatív origin/RP/aláírásteszt és natív átadás továbbra is kiadási követelmény; mockolt routeteszt ezt nem igazolja.

A javítás ellenőrzése: dokumentumonkénti módizoláció, változatlan hordozható bájtok és history, sémaegyezés, natív-origin elutasítása és v1/legacy route-egyezés replay-elutasítással. Ez merge és CI előtti javítási terv, nem kész 1.0 freeze.


## Külső integrációk stabilizálása — 2026-10-18

Megmarad a működő EuroOffice-beágyazás, Transkribus-kliens, modellválasztó, forrásmodell és OMI-szerkesztő. A javítás határa: biztonságos callback-perzisztencia, streamelt és validált DOCX-fogadás, v1-adapterek/közös transport, tartós fizetős végrehajtási intent. A hagyományos DOCX külön adatmodell marad; OMI-újraírás nem szükséges.

A részmentés nem érvénytelenítheti az első mentés után a sessiont. Helyreállítási pillanatkép lesz, a végleges headet csak lezáráskori revision-ellenőrzött mentés frissíti, korábbi head-backuppal. A tulajdonos a mentéseket letöltheti az aktuális dokumentum automatikus felülírása nélkül.

A felismerési intent a képdigestet, modellt, kapcsolatot és grantet beküldés előtt rögzíti. Az elfogadott ismétlés a meglévő jobot adja vissza; bizonytalan kimenetelt nem küld újra automatikusan. Ez csökkenti a dupla kreditfogyasztást, de a provider exactly-once számlázását nem garantálja. Bizalmas lektori exportot az uploaded-image scope nem engedélyez.

Telepítés előtt aktív EuroOffice-sessionök lezárása, adatbázismentés és additív migráció szükséges; a régi sessionök újranyitandók. Merge-feltétel a szintetikus regresszió és a PostgreSQL-migráció/párhuzamosság bizonyítéka. Stable-promócióhoz valódi szolgáltatói és natív eszközös elfogadás kell. ADR-024/025 rögzíti a határokat. Ez még nem kész release freeze.


## 2026-10-21 — Federált szerverjegyzék javítása (ADR-026)

A szerverjegyzék külön discovery-authority: nem account-, kézirat-, lektorálási vagy publikációs jogosultságforrás. A DNS a domain feletti rendelkezést igazolja. Az „online” kizárólag friss hitelesített heartbeatet jelent; nem szolgáltatás-egészség, kompatibilitás, kapacitás vagy megbízhatóság igazolása. A böngésző a kiválasztott originre lép; a natív kliens megtartja az origin/token határt. Nincs kézirat- vagy fióktovábbítás és automatikus terheléselosztás.

Új contract: `/api/v1/server-registry`; a régi útvonal azonos handlerre és rate limitre mutató facád. A route → application service → repository, illetve GitHub audit adapter felelősségek különválnak. A nyilvános DNS-érték mellett külön titkos kérelmezői capability szükséges, 24 órás lejárattal. Atomikus PENDING → VERIFYING → ACTIVE állapotátmenet véd; bizonytalan audit esetén nincs automatikus újraküldés. Az aktív regisztrációk megmaradnak, a korábbi függőket újra kell indítani. A tokenrotáció, visszavonás és heartbeat az aktuális állapotot és tokenhash-t is összehasonlítja.

Ez javítási javaslat, nem lezárt 1.0 garancia. Kötelező a negatív és két útvonalas teszt, a tényleges PostgreSQL-migráció és konkurens lifecycle-teszt, valamint kontrollált DNS/GitHub elfogadási és helyreállítási próba. Telepítési sorrend: migráció → API → kliensek/CLI/honlap. Addig Preview. A natív SecureStorage és originhez kötött account/cache ownership külön nyitott feladat.


## 2026-10-22 — Dokumentumszintű importeredet pontosítása (ADR-023)

Ez a pontosítás felülírja a teljes kézirat sajátmű-nyilatkozatának tartalomhoz horgonyzását. Az OMI-SPEC-225@0.2.0 megengedi saját mű importját bibliográfiai forrásmegjelölés nélkül. A szerző kifejezett sajátmű-választása DOCX/ODT/PDF importnál a `https://openmanuscript.org/extensions/manuscript-import-origin/1` dokumentumkiterjesztésben marad meg: `version: 1`, `sourceFormat`, `importedAt`, `assertion: author-declared:self-authored-outside-omi`. Ez önnyilatkozat, nem hivatkozás vagy igazolt szerzőség. Fájlnév, elérési út, URL, accountazonosító, szakasz-, blokk- és horgonyazonosító nem kerül bele. Más importutak objektumonkénti szabályai megmaradnak.

A dokumentum minden része szabadon szerkeszthető, cserélhető, mozgatható és törölhető. A rekord dokumentummetaadat, nem tartalomkapcsolat; az összes importált tartalom cseréje sem hoz létre hibás horgonyt. Történeti importnyilatkozatot rögzít, nem a későbbi módosítások szerzőségét. A munkafájl, a revision snapshot és a history nélküli core-snapshot megőrzi a meglévő névteres kiterjesztésben, sémaverzió-emelés nélkül. A nyilvános publikációs projekció kihagyja a rekordot az eredeti módosítása nélkül; az anonim szerveroldali review-projekció továbbra is allow-list alapján készül, és nem tartalmazza.

Ellenőrzés: saját DOCX/ODT/PDF import, tartalom és címsor törlése/cseréje, mentés–újranyitás, history nélküli core-snapshot round-trip, revision snapshot, nyilvános export és anonim review-szűrés. A meglévő szerkesztő, importparser és history engine megtartandó. Adatbázis-migráció és régi jelölések konverziója nem szükséges. A javítás a Studio PR merge-je és CI-ellenőrzése előtt tervezett állapotú.
