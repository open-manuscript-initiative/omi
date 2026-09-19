---
title: Open Manuscript Studio 1.0 — ADR-nyilvántartás
sidebar_label: ADR-nyilvántartás
description: A Studio 1.0 architektúra döntési nyilvántartása és a Phase A architecture freeze során elfogadandó döntések.
---

# OMI Studio 1.0 ADR Register

**Dátum:** 2026-09-19  
**Értelmezés:** ezek javasolt döntések. A `Proposed → Accepted` átmenet a Phase A architecture freeze része; csapatdöntés nélkül egyik sem tekintendő utólagosan jóváhagyottnak.

## Státuszösszesítő

| ADR | Cím | Javasolt státusz a freeze-nél |
|---|---|---|
| ADR-001 | OMI file-format source of truth | Accepted |
| ADR-002 | Schema és verziómezők | Accepted |
| ADR-003 | Kompatibilitási és migrációs politika | Accepted |
| ADR-004 | Tiptap ↔ OMI content boundary | Accepted, AST profile freeze feltétellel |
| ADR-005 | Application-state ownership | Accepted |
| ADR-006 | Persistence authority és document session | Accepted |
| ADR-007 | Revision/history modell | Accepted |
| ADR-008 | Importer/exporter contract | Accepted |
| ADR-009 | Publication pipeline | Accepted |
| ADR-010 | Publishing System Connector API | Accepted |
| ADR-011 | Peer-review domain és anonimitás | Accepted |
| ADR-012 | Identity boundary-k | Accepted |
| ADR-013 | Storage abstraction | Accepted |
| ADR-014 | Integration capability/permission | Accepted |
| ADR-015 | Backend API versioning | Accepted |
| ADR-016 | Cross-platform adapter boundary | Accepted |
| ADR-017 | Security trust boundaries | Accepted |
| ADR-018 | OMI container, provenance és signature | Accepted, SPEC-330 fixture feltétellel |
| ADR-019 | Stable/preview capability policy | Accepted |
| ADR-020 | Általános executable plugin runtime | Deferred |

---

## ADR-001 — OMI file-format source of truth

**Kérdés.** A TypeScript interface-ek, a JSON Schema és a specifikáció közül melyik a wire format normatív forrása?

**Döntés.** A released OMI JSON Schema az interoperabilitási wire contract normatív, géppel végrehajtható forrása az `omi` repositoryban. A prose specifikáció a szemantikát és a Schema által nem kifejezhető invariantokat definiálja. A Studio immutable release-ből, checksum szerint vendorolja a sémát, abból wire típusokat/codecet generál, és külön domain típusokat tarthat fenn.

**Alternatívák.** (1) TypeScript-first schema generation; (2) kézzel párhuzamos TS + schema; (3) Studio repository legyen authority.

**Döntés oka.** Az interoperabilitás több nyelvet és a PKP pluginokat érinti; a TS nem nyelvfüggetlen. A jelenlegi kézi párhuzam már driftet okozott: OMI 0.2.0 schema létezik, a Studio 0.1-et ír, a vendorizált 0.2 fájl üres.

**Következmények.** Schema release és checksum szükséges; a generált fájlokat nem kézzel szerkesztjük; a domain invariant validator külön marad. Egy schema változás explicit compatibility reviewt indít.

**Felülvizsgálati feltétel.** Ha a JSON Schema nem képes a wire-alak stabil leírására vagy a támogatott nyelvek mind ugyanabból a másik IDL-ből generálnak bizonyíthatóan azonos sémát.

---

## ADR-002 — Schema és verziómezők

**Kérdés.** Kell-e új `schemaVersion` mező a meglévő top-level `schema` és `omi.version` mellé?

**Döntés.** Nem. `omi.version` az OMI file-format verzió; `schema` a konkrét schema URI. A reader ellenőrzi a kettő konzisztenciáját. A container, alkalmazás/generator és manuscript revision külön verziómezőt használ saját rétegében.

**Alternatívák.** (1) Új `schemaVersion`; (2) csak schema URI; (3) csak `omi.version`.

**Döntés oka.** A harmadik mező redundáns és driftforrás. Az URI exact schema identityt, az `omi.version` könnyen tárgyalható szemantikus formátumverziót ad.

**Következmények.** Mismatch fatal diagnostic. A kódban erősen típusos `FileFormatVersion`, `ContainerFormatVersion`, `AppVersion` és `RevisionId` használatos; stringek nem cserélhetők fel.

**Felülvizsgálati feltétel.** Ha a schema URI-k nem immutable-ek vagy egyetlen format version több, incompatibilis normatív sémát engedne.

---

## ADR-003 — Kompatibilitási és migrációs politika

**Kérdés.** Milyen backward/forward compatibilityt ígérjen a Studio, és kell-e általános migration framework a korai beta formátumokra?

**Döntés.** A kompatibilitási kötelezettség az első fagyasztott stabil OMI generációval kezdődik. Pre-stable fájlokra csak explicit best-effort importer vagy elutasítás készül. Minden későbbi breaking séma-változás pontos `from → to` migrációt, fixture-t, loss reportot és új célfájlba mentést kap. Újabb major karantén/read-only; újabb minor csak explicit forward-policy mellett szerkeszthető.

**Alternatívák.** (1) minden kísérleti formátum örök migrációja; (2) silent best-effort open/save; (3) mindig csak legfrissebb verzió támogatása.

**Döntés oka.** Nem volt production dokumentum a pre-stable generációkon, ezért egy nagy framework költsége nem indokolt. A silent downgrade viszont adatvesztési kockázat.

**Következmények.** A UI megkülönbözteti az importot, migrációt, read-only recoveryt és normál open-t. Migration nem fut mentéskor implicit módon. Stabil verziót a support policy szerint tartani kell.

**Felülvizsgálati feltétel.** Ha bizonyíték jelenik meg jelentős, éles pre-stable dokumentumállományról, vagy a stabil verziók száma dedikált migrációs gráfot igényel.

---

## ADR-004 — Tiptap ↔ OMI content boundary

**Kérdés.** Lehet-e a Tiptap/ProseMirror JSON az OMI portable content modellje?

**Döntés.** Nem. Az OMI portable content AST-t a SPEC-100 és a file schema definiálja. Tiptap marad editor runtime; verziózott, loss-reporting `ContentCodec` alakít OMI AST és ProseMirror document között. Átmenetileg a codec olvassa a jelenlegi stringelt Tiptap JSON-t.

**Alternatívák.** (1) PM JSON standardizálása OMI-ként; (2) editorcsere saját AST-editorra; (3) minden exporter továbbra is közvetlenül parse-ol.

**Döntés oka.** A PM schema editor-plugin konfigurációfüggő, és jelenleg sok consumerhez szivárog. Ugyanakkor a Tiptap implementáció működik és jól tesztelhető, ezért cseréje indokolatlan.

**Következmények.** Minden rich-text consumer codec API-t használ; unknown node/mark diagnosztikát és round-trip fixture-t kap. Editor undo/selection nem portable.

**Felülvizsgálati feltétel.** Ha a ProseMirror ökoszisztéma hosszú távú kompatibilis, nyelvfüggetlen wire standardot publikál, amely az OMI minden szemantikáját losslessly hordozza.

---

## ADR-005 — Application-state ownership

**Kérdés.** Ki birtokolja a manuscript state-et és valósítja meg a use-case-eket: Zustand action, React komponens vagy application service?

**Döntés.** A platformfüggetlen application core hajtja végre a commandokat/use-case-eket és birtokolja a document sessiont. Zustand UI/session projection és compatibility facade; React csak intentet küld és view-modelt olvas. Editor runtime külön session owner.

**Alternatívák.** (1) jelenlegi nagy Zustand store megtartása authorityként; (2) másik state libraryre teljes átírás; (3) komponens-local state.

**Döntés oka.** A probléma nem a Zustand technológia, hanem a kevert élettartam és felelősség. State library csere önmagában nem oldaná meg.

**Következmények.** Parancsok optimistic revision preconditiont kapnak; UI mutációk fokozatosan delegálnak. Pure model functionök megmaradnak.

**Felülvizsgálati feltétel.** Ha a UI projection költsége vagy concurrency modellje bizonyítottan más state runtime-ot igényel.

---

## ADR-006 — Persistence authority és document session

**Kérdés.** Mi authoritative a native file, recovery cache, server snapshot, cloud copy és nyitott UI state közül?

**Döntés.** Egy `DocumentSession` explicit source/location és last-saved revision/digest alapján kezeli az authorityt. A portable OMI file/container a felhasználó által mentett dokumentum artifact; IndexedDB recovery cache, a cloud byte-store, a server workflow snapshot pedig külön megnevezett replica/snapshot. Native location opaque handle, nem domain path.

**Alternatívák.** (1) last-write-wins minden store között; (2) mindig server authority; (3) Zustand state implicit authority.

**Döntés oka.** A Studio offline/native és external workflow használatot is támogat; nincs egyetlen univerzális store. Az implicit authority adatvesztést és konfliktust rejt el.

**Következmények.** Save precondition, conflict receipt, atomic replace/recovery journal kell. Cloud provider nem módosít manuscript semanticsot.

**Felülvizsgálati feltétel.** Ha egy jövőbeli collaboration service explicit multi-writer authorityt és CRDT/transaction modellt vezet be.

---

## ADR-007 — Revision/history modell

**Kérdés.** Mi a kapcsolat az editor undo, working changes és tartós revision history között, és hogyan tároljuk a történetet?

**Döntés.** Editor undo session-local. Working changes application-level semantic commandok. Revision immutable, lineáris commit; revert új commit. A jelenlegi szemantika megmarad, de `RevisionRepository` port mögé kerül. Az első adapter maradhat full snapshot; content-addressed snapshot/delta csak benchmark alapján.

**Alternatívák.** (1) PM undo log mint history; (2) azonnali CRDT/event sourcing; (3) revision teljes eltávolítása és file backup.

**Döntés oka.** A jelenlegi revision model erős és tesztelt. A gond a tárolási skálázás és ownership, nem a szemantika.

**Következmények.** History storage algoritmusa belső; export profile külön dönti el, mennyi history portable. Branching/collaboration nincs az 1.0 stable contractban.

**Felülvizsgálati feltétel.** Ha multi-user concurrent editing vagy benchmark alapján a full snapshot elfogadhatatlan és delta szükséges.

---

## ADR-008 — Importer/exporter contract

**Kérdés.** Hogyan kapjon közös architektúrát az eltérő formátumok importja és exportja?

**Döntés.** Registry-alapú `Importer` és `Renderer` contract, közös descriptor/capability, diagnostics, fidelity/loss, provenance, progress/abort és streaming source/artifact modellel. A platform-specific delivery külön `ArtifactDeliveryPort`.

**Alternatívák.** (1) formátumonként önálló UI/service; (2) egy óriás switch; (3) minden renderer CLI process.

**Döntés oka.** A meglévő importerek/exporterek megtarthatók adapterként, de a közös diagnosztika és delivery hiánya miatt a UI és store túl szorosan kapcsolódik hozzájuk.

**Következmények.** Formátum capability stable/preview státusza runtime lekérdezhető. A renderer nem hív file pickert. Large-file igény deklarált.

**Felülvizsgálati feltétel.** Ha a streaming/process isolation igény két külön contract-családot tesz szükségessé; ekkor a közös result/evidence továbbra is megmarad.

---

## ADR-009 — Publication pipeline

**Kérdés.** Mi legyen a reprodukálható publikációs build végleges sorrendje és contractja?

**Döntés.** Validált committed OMI revision → immutable rendering context → versioned publication profile/resources → pinned renderer → target validators → artifact set → build manifest/hash/signature → delivery/transfer. Pre- és post-validation kötelező.

**Alternatívák.** (1) exporter közvetlenül a live store-ból; (2) profile/CSS beágyazása a manuscript domainbe; (3) validáció csak upload után.

**Döntés oka.** A jelenlegi build manifest és artifact hashing jó alap; a live state/raw Tiptap/profile augmentation viszont reprodukálhatósági rést okoz.

**Következmények.** Semantic és byte reproducibility külön claim. Renderer/font/validator verzió a manifestben. Hibás artifact nem továbbítható stable connectoron.

**Felülvizsgálati feltétel.** Ha interactive/live publication artifact nem írható le deterministic buildként; annak külön artifact class/ADR kell.

---

## ADR-010 — Publishing System Connector API

**Kérdés.** OJS és OMP külön integráció maradjon-e, vagy legyen közös connector contract?

**Döntés.** Közös Publishing System Connector API kezeli a capability discoveryt, signed launchot, submission/metadata/contributor/file olvasást, review assignment/form/recommendationt, revision/attachment/artifact uploadot és workflow returnt. OJS/OMP profile adapter és vendor extension marad. A külső rendszer authoritative a saját workflow-state-jében.

**Alternatívák.** (1) két teljesen külön kliens; (2) legkisebb közös nevező, extension nélkül; (3) OJS modell ráerőltetése OMP-re.

**Döntés oka.** A két plugin már közös `omi-integration/1` fogalmakat valósít meg. A közös contract csökkenti a driftet, miközben a journal/monograph különbségek valódiak.

**Következmények.** Shared schema/fixture suite kell. Writeback idempotens outbox saga. Új journal/press/repository rendszer ugyanazt a portot implementálhatja.

**Felülvizsgálati feltétel.** Ha legalább két új rendszer bizonyítja, hogy a contract túl PKP-specifikus vagy hibás common abstraction.

---

## ADR-011 — Peer-review domain és anonimitás

**Kérdés.** A peer review a publishing connector része vagy önálló domain, és hol érvényesül a double-blind szabály?

**Döntés.** Önálló, publishing-system-neutral review domain: assignment, round, projection, workspace, attachment, form, recommendation, visibility és writeback. Az anonymous projection szerveroldali security boundary, committed source revisionből; soha nem UI-szűrés.

**Alternatívák.** (1) OJS/OMP DTO közvetlen használata; (2) teljes manuscript letöltése és mezők elrejtése a kliensen; (3) kézi anonymized copy.

**Döntés oka.** A jelenlegi server-side allowlist jó alap, és a reviewer scope PKP oldalon is enforce-olt. Az anonimitás sérülése magas következményű, ezért explicit domain és leak corpus kell.

**Következmények.** Asset metadata, filename, EXIF/SVG/provenance is projection tárgya. Assignment-scoped ID-k és no-store cache. AI/integration confidential access csak server grantből.

**Felülvizsgálati feltétel.** Ha új review model (open review/post-publication review) más visibility policyt igényel; a projection boundary akkor is megmarad.

---

## ADR-012 — Identity boundary-k

**Kérdés.** Hogyan viszonyul account, auth provider, scholarly agent, institution, contribution és publication evidence?

**Döntés.** Hat külön entitás/kapcsolat. Az identity DB authoritative account/auth/membership/admin adatra. A main DB `StudioPrincipal` projection workflow FK-khoz. A scholarly agent és contribution az OMI manuscript része. Account–agent link explicit verified evidence; email/ORCID egyezés nem automatikus merge. Authorization külön policy.

**Alternatívák.** (1) egyetlen User modell mindenre; (2) ORCID mint primary user ID; (3) két független authoritative user DB.

**Döntés oka.** A publikációs attribution hordozható és történeti, az account pedig revokálható operatív identitás. A jelenlegi két Prisma schema duplikációja authority-driftet okozhat.

**Következmények.** Principal projection reconcile/outbox kell. Signatures/evidence külön store. Provider link/revoke nem írja át automatikusan a manuscript author listáját.

**Felülvizsgálati feltétel.** Ha közös transactional database-re konszolidálás bizonyíthatóan egyszerűbb és nem mossa össze a domain fogalmakat.

---

## ADR-013 — Storage abstraction

**Kérdés.** Hogyan legyen egységes a native file, browser file, Android SAF, Apple Files, sync folder és cloud storage?

**Döntés.** Két portcsalád: `DocumentStorage`/`DocumentLocation` a felhasználó által kezelt dokumentumhoz, `RemoteObjectStore` backup/sync byte objectekhez. Platformadapter kezeli a pickert/permission/bookmarkot; a provider nem értelmez manuscript semanticsot.

**Alternatívák.** (1) minden provider saját save use-case; (2) mindenből server upload; (3) path string univerzális identifierként.

**Döntés oka.** A platform permission modellek eltérnek, de az open/read/writeAtomic/conflict fogalom közös. A path nem reprezentál browser/SAF/security-scoped handle-t.

**Következmények.** Opaque handle csak session/persistence rétegben. ETag/digest conflict kötelező. Letöltött cloud copy ugyanazon validatoron megy át.

**Felülvizsgálati feltétel.** Ha valódi multi-device synchronization merge semanticsot igényel; az új Sync Service külön domain, nem storage provider bővítés.

---

## ADR-014 — Integration capability és permission modell

**Kérdés.** Milyen manuscript adatot kaphat Zotero, Mendeley, DeepL, AI, storage, OJS/OMP, ORCID vagy OIDC connector?

**Döntés.** Default-deny, server-issued `ExecutionGrant`: actor, provider/connection, document+revision, purpose, data-access scope, capability, confidential scope, expiry, single-use/idempotency. A payloadot a szerver minimalizálja. AI/translation output default suggestion, nem közvetlen mutáció.

**Alternatívák.** (1) user consent után teljes manuscript; (2) provider manifest által kért scope automatikus elfogadása; (3) kliensoldali allow flag.

**Döntés oka.** A manuscript és peer-review adat érzékeny; a jelenlegi kliens-supplied confidential mező nem authority. A különböző providernek eltérő minimális adatra van szüksége.

**Következmények.** Scope taxonomy és audit retention kell. Credential külön encrypted repository. Review-confidential grant assignmentből származik.

**Felülvizsgálati feltétel.** Ha on-device, adatot el nem hagyó providerhez egyszerűbb local grant profile indokolt; audit és scope akkor is marad.

---

## ADR-015 — Backend API versioning

**Kérdés.** Át kell-e nevezni minden jelenlegi route-ot `/api/v1` alá, és mi legyen a stabil contract?

**Döntés.** Additív `/api/v1` first-party API közös Zod/OpenAPI schema, error envelope, idempotency, optimistic concurrency és correlation policyval. A régi route compatibility facade ugyanazt az application handlert hívja, deprecation telemetryvel. Nincs egyszeri tömeges rename.

**Alternatívák.** (1) in-place route rename; (2) URL-verzió nélkül header-only; (3) a jelenlegi route-ok örök befagyasztása.

**Döntés oka.** A jelenlegi kliensek működnek; azonnali rename kockázatos. A v1 namespace egyértelmű support és contract diff lehetőséget ad.

**Következmények.** Két route felület ideiglenesen együtt él. Business logika route-ból application service-be kerül. External PKP protocol saját profile/versiont tarthat.

**Felülvizsgálati feltétel.** Ha a Studio kizárólag egy atomikusan frissülő kliens-szerver deployment lesz; az external connectorok miatt verziózott DTO akkor is kell.

---

## ADR-016 — Cross-platform adapter boundary

**Kérdés.** Hogyan használhat ugyanaz a core webet, Windows/Linux/macOS desktopot, Androidot és iOS/iPadOS-t?

**Döntés.** Application portok: file picker/storage, secure storage, auth handoff, updater/installer, system fonts/resources, capability detection, share/open-with és notifications. Konkrét web/Tauri/Android/Apple adapter csak composition rootban választódik.

**Alternatívák.** (1) platform checkek minden service-ben; (2) külön fork/platform; (3) minden funkció a legkisebb web közös nevezőn.

**Döntés oka.** A jelenlegi Tauri/mobile kód használható, de közvetlen importok és user-agent detection szivárognak. Porttal a core egységes, a platform capability őszinte marad.

**Következmények.** Contract test suite minden adapterre. A stable/preview besorolás artifactonként deklarált. iOS lehet preview anélkül, hogy core fork keletkezne.

**Felülvizsgálati feltétel.** Ha egy platform életciklusa olyan use-case szemantikát igényel, amely porttal nem fejezhető ki; előbb application policy bővítés, nem domain fork.

---

## ADR-017 — Security trust boundaries

**Kérdés.** Hol kell untrusted adatot kezelni és mely kontrollok blokkolják a domainbe jutást?

**Döntés.** Explicit boundary minden imported JSON/container/DOCX/PDF/HTML/XML/asset, OAuth/OIDC credential, connector, review confidential adat, AI provider, plugin és publication artifact előtt. Minden boundary quota + safe parse + validation + authorization + content-free audit kombinációt kap a saját kockázata szerint.

**Alternatívák.** (1) validáció csak UI-ban; (2) „trusted file” feltételezés lokális opennél; (3) általános sanitizer minden formátumra.

**Döntés oka.** A tényleges kód már sok jó, de széttartó kontrollt tartalmaz (ZIP limits, LIBXML_NONET, SSRF helper, signed launch). Ezeket threat-boundaryként kell egységesíteni, nem lecserélni.

**Következmények.** Hostile synthetic corpus, fuzz és negative auth matrix release gate. Diagnosztika/log nem tartalmaz manuscript contentet/pathot. Security fix kompatibilitási ígéretet felülírhat dokumentált módon.

**Felülvizsgálati feltétel.** Új input/protocol/provider vagy trust assumption változásakor kötelező threat-model review.

---

## ADR-018 — OMI container, provenance és signature

**Kérdés.** A container csak ZIP transport, vagy a manuscript, history, assets, profile, output és signature authorityja is?

**Döntés.** A container külön verziózott packaging layer, manifesttel, canonical paths-szal, checksummal és opcionális profile/history/output/evidence entrykkel. A manuscript JSON marad portable semantic core. Signature a manifest és exact artifact digestet fedi; nem ad hoc top-level manuscript mező és nem localStorage state.

**Alternatívák.** (1) egyetlen nagy JSON base64 assetekkel; (2) container és schema egy verzió; (3) aláírás a manuscript objektumba injektálva.

**Döntés oka.** A jelenlegi container parser biztonságos és az implementáció már a szükséges részek nagy részét tudja. A külön réteg lehetővé teszi a JSON interoperabilitást és a nagy asset/history externalizálását.

**Következmények.** SPEC-330 manifest schema és cross-repo golden fixture kell. Container validáció kétlépcsős. Signature/evidence kulcs lifecycle külön.

**Felülvizsgálati feltétel.** Ha streaming/remote content-addressed csomagolás a ZIP korlátait meghaladja; új container major lehet, OMI JSON változása nélkül.

---

## ADR-019 — Stable/preview capability policy

**Kérdés.** Minden meglévő funkciót 1.0 stable-ként kell-e garantálni?

**Döntés.** Nem. Stable/preview/experimental/deferred capability manifest határozza meg platformonként és formátumonként a supportot. A kód megléte vagy smoke teszt nem egyenlő stable ígérettel. Preview funkció hibája nem blokkol általánosan, de privacy/data-loss/security hiba igen.

**Alternatívák.** (1) minden UI-ban látható funkció stable; (2) preview funkciók törlése; (3) egyetlen globális platform státusz.

**Döntés oka.** JATS/HTML/DOCX és egyes platformok evidence szintje eltér az EPUB/DTP/iOS állapotától. A működő kódot nem kell kidobni, de a kompatibilitási ígéret legyen bizonyíték-alapú.

**Következmények.** Runtime UI, dokumentáció és release metadata ugyanabból a manifestből készül. Promotion külön gate-et igényel; demotion stable 1.x-ben csak súlyos okkal.

**Felülvizsgálati feltétel.** Minden release planningkor és amikor egy capability promotion corpusát teljesíti.

---

## ADR-020 — Általános executable plugin runtime

**Kérdés.** Része legyen-e az 1.0-nak egy harmadik fél kódját futtató általános plugin rendszer?

**Döntés.** Deferred. Az 1.0 built-in, review-olt connector adaptereket és deklaratív manifest/capability registryt támogat. Tetszőleges plugin code execution, sandbox, signing marketplace és permission UX külön post-1.0 program.

**Alternatívák.** (1) in-process JavaScript plugin; (2) remote HTTP plugin teljes manuscript hozzáféréssel; (3) minden integráció hardcoded marad örökre.

**Döntés oka.** A jelenlegi registry nem execution sandbox. Egy biztonságos plugin runtime új threat boundary és termék, nem stabilizálási részfeladat.

**Következmények.** Az 1.0 kommunikáció nem ígér arbitrary plugin futtatást. Új integráció adapterként és scoped granttel vehető fel. A registryben nem aktiválható executable payload.

**Felülvizsgálati feltétel.** Ha van legalább három külső plugin use-case, threat model, sandbox technológia, signing/distribution policy és dedikált maintenance owner.

## Nyitott, freeze előtt számszerűsítendő paraméterek

Ezek nem új ADR-k, hanem az elfogadott döntések konkrét értékei:

| Paraméter | Döntési input | Határidő |
|---|---|---|
| Első stabil OMI file-format verziószám | SPEC-100/150/160/320 readiness | A fázis vége |
| Forward-minor policy | unknown core field round-trip bizonyíték | A05 |
| Container size/entry/depth limitek | jelenlegi parser + platform memory benchmark | A07/E01 |
| History snapshot/delta küszöb | 120k/500k word benchmark | B07/D06 |
| Stable exporter lista | fixture/fidelity/validator evidence | C14 |
| Supported OJS/OMP exact verziók | Docker E2E matrix | C07/C08 |
| Token/session TTL és credential rotation | security review | B10/C12 |
| Performance és bundle budget | current baseline + representative devices | D06 |
| RC soak hossza és blocker SLA | release ownership | E05 előtt |
