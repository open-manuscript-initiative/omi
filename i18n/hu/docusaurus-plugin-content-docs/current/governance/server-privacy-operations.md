---
title: Adatvédelem és jogi üzemeltetés
sidebar_label: Adatvédelmi üzemeltetés
---

# Adatvédelem: üzemeltetői beállítások és eljárások

Előkészítve: 2026. november 7. Ez az útmutató az önálló OMI-szerverekre vonatkozik.
A forráskód beolvasztása nem tölti ki az adatkezelő adatait, nem állítja be a VPS
mentéseit, és nem jelent jogi megfelelőségi tanúsítást.

## A szerver tájékoztatójának beállítása

1. Másolja a Studio repó `deployment/privacy/privacy-notice.example.json` fájlját
   a forráskódon kívüli, üzemeltető által kezelt helyre, például
   `/etc/omi/privacy-notice.json`. A fájl minden tartalma nyilvános lesz.
2. Töltse ki a tényleges adatkezelő jogi nevét, postai címét és figyelt adatvédelmi
   e-mail-címét. Adatvédelmi tisztviselőt csak tényleges kijelölés esetén nevezzen meg.
3. Adja meg a teljes, közzétett HTTPS-tájékoztató címét és az illetékes felügyeleti
   hatóság nevét, honlapját. Az OMI projekt neve nem helyettesíti az adatkezelőt.
4. A `processing` listába célonként kerüljön be az adatkör, konkrét jogalap,
   megőrzési idő vagy kritérium, címzett és a nemzetközi adattovábbítás garanciája,
   illetve annak ténye, ha ilyen továbbítás nem történik.
5. Töltse ki a joggyakorlást, adatforrásokat, kötelező adatok hiányának következményét,
   automatizált döntéshozatalt, sütiket/eszköztárolást, mentéseket és törlést leíró
   részeket. Jogos érdeknél az érdeket, hozzájárulásnál a visszavonást is ismertesse.
6. A tényszerű ellenőrzés után állítsa az `operatorReviewed` mezőt `true` értékre.
   A példafájl szándékosan hiányos, ezért az ellenőrző parancs elutasítja.
7. Az API környezetében állítsa be:
   `OMI_PRIVACY_CONFIG_PATH=/etc/omi/privacy-notice.json`.
   A `server` könyvtárból futtassa: `npm run privacy:check`.
8. A szokásos telepítési eljárással történő aktiválás után ellenőrizze a
   `/?privacy=1` oldalt, az `/api/v1/privacy` választ, a regisztrációs és Fiók felületet,
   valamint a kiválasztott szervert az Android/asztali kliensben.

Az ellenőrzés a fájl szerkezetét vizsgálja, nem a jogalap helyességét. Hiányzó
konfigurációnál a felület jelzi, hogy az üzemeltető nem adott meg tájékoztatást.
A teljes tájékoztató elkészüléséig ne nyisson nyilvános regisztrációt. A jogi szöveg
nyelvét a fájl `language` mezője adja meg; a felület nem fordítja át automatikusan.

## Érintetti kérelmek

A felület a megadott adatvédelmi címre nyit levelet. A felhasználó küldi el;
a rendszer nem hoz létre automatikus ügyet. A cím figyelését és a bejelentkezés
nélküli ügyintézést az üzemeltetőnek ténylegesen biztosítania kell.

Zárt ügyregiszter: ügyazonosító, beérkezés, kérelemtípus, arányos azonosítás,
felelős, egy naptári hónapos határidő, érintett rendszerek, döntés, válasz és lezárás.
Bonyolult vagy nagyszámú kérelemnél indokolt, legfeljebb két további hónapos
hosszabbításról az eredeti határidőn belül értesíteni kell az érintettet.
Elutasításnál indoklást, panasz- és jogorvoslati tájékoztatást kell adni.
Személyi igazolványt ne kérjen automatikusan.

A Fiókban letölthető JSON csak kiválasztott profil-, belépési és tagsági adatokat
ad ki, jelszó és token nélkül. Nem teljes körű GDPR-hozzáférési válasz és nem
kéziratmentés. Teljes kérelemnél a kéziratokat, bírálatokat, közös előzményeket,
naplókat és érintett adatfeldolgozókat is fel kell mérni, mások jogainak és a
bírálói titkosságnak a védelmével. A hordozhatóság feltételeit külön vizsgálni kell.

## Törlés, megőrzés és mentés-visszaállítás

A meglévő fióktörlés eltávolítja az élő Identity-fiókot és a hitelesítő adatokat,
a Studio résztvevőjét pedig álnevesíti. A megmaradó belső azonosító és közös tartalom
személyes adat lehet. Az álnevesítés nem anonimizálás; a tudományos eredetkövetés
nem általános felhatalmazás minden adat örökös tárolására. A kivételeket egyedileg
kell vizsgálni. Az utolsó tulajdonos törlési akadályánál üzemeltetői szerepátadást
vagy más ellenőrzött megoldást kell biztosítani, határidőben.

Adatkörönként legyen megőrzési rend: cél, jogalap, felelős, kezdő esemény,
megőrzési idő/kritérium, törlés/anonimizálás, jogszerű zárolás és ellenőrzés.
A mentések minden példányát és szolgáltatóját vegye számba. A korábban vállalt,
például 30 napos korlátot jogszerű módosításáig teljesíteni kell.

Az alkalmazásszintű auditnaplók az adatbázisban vannak, így a systemd/Plesk
naplórotációja ezeket nem törli. A technikai auditok szoftveres törlési
alapértéke **90 nap** az integrációs és kutatásimodul-műveleteknél,
**180 nap** a központi/intézményi adminisztráció és az együttműködési
hozzáférés, szerepkörváltozások esetében. Ez nem jogszabályi általános
időtartam: az adatkezelőnek meg kell indokolnia a célt, jogalapot,
megőrzést és a jogilag szükséges külön bizonyítékok kezelését.
A kéziratok, bírálatok, szerkesztői döntések és önálló fordítási
változatok nem esnek e technikai takarítás alá.

A `server` könyvtárban a `npm run privacy:cleanup` csak előnézetet
készít a lejárt hitelesítési és auditrekordokról, személyes azonosítókat
nem ír ki. Az ellenőrzött
`npm run privacy:cleanup -- --apply` kötegekben törli a
lejárt hitelesítési adatokat és a megadott auditrekordokat.
Az új migráció és a napi systemd timer üzemeltetői elfogadása,
kézi telepítése és ellenőrzése szükséges; a forráskódmódosítás
**önmagában nem indít automatikus éles törlést**.
A minták a Stúdió `deployment/systemd/` könyvtárában találhatók.

Mentés visszaállításakor az éles forgalom megnyitása előtt újra kell érvényesíteni
az időközbeni törléseket és korlátozásokat, és érvényteleníteni az elavult belépéseket.
Ehhez minimális, hozzáférés-védett és határidővel törlendő nyilvántartás kell.
A próbát szintetikus fiókkal végezze. Külső OJS/OMP- és felhőpéldányokat a megfelelő
adatkezelő eljárásában kell rendezni.

### A központi OMI Stúdió üzemeltetésének igazolt állapota (2026. november 16.)

**Csak a központi Stúdióra vonatkozik:** az üzemeltető által bemutatott
terminálnapló szerint az `omi-privacy-cleanup.service` **2026. november
16-án 12:20:49 UTC-kor (13:20:49 CET-kor) sikeresen lefutott
`--apply` módban**. Mind a négy technikai auditkategóriában
0 volt a lejárt és törölt rekordok száma, az eredmény
`backlog: false` volt; a lejárt hitelesítési rekordok takarítása is
megtörtént.

A napi `omi-privacy-cleanup.timer` **`enabled`** és
**`active`** állapotát az üzemeltető ellenőrizte. A következő
tervezett futás **2026. november 17., 03:24:13 UTC
(04:24:13 CET)**. A `LAST=-` mező alapján az **első
felügyelet nélküli időzített futás még nem történt meg**
az ellenőrzés időpontjában.

Részletes [üzemeltetési jegyzőkönyv](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/main/docs/server/privacy-retention-production-activation-2026-11-16.md).
A megállapítások a felhasználó terminálképein alapulnak;
az adatbázismentések önálló visszaállítási próbája és a
szerver adatkezelői tájékoztatójának végső egyeztetése nem
igazolt. Más intézményi telepítésekre a központi
szerver beállítása **nem terjed ki automatikusan**.

## Adatvédelmi incidens

Legyen kijelölt felelős és helyettes. Minden személyesadat-incidenst dokumentálni
kell, a bejelentést nem igénylő eset indokával együtt. Rögzítse a tudomásszerzés
idejét, érintett rendszereket, adatköröket, hozzávetőleges személy-/rekordszámot,
következményt, intézkedéseket, kockázatot, értesítési döntést és időpontokat.

Az adatfeldolgozó indokolatlan késedelem nélkül értesíti az adatkezelőt.
Az adatkezelő bejelentésköteles esetben indokolatlan késedelem nélkül, lehetőség
szerint a tudomásszerzéstől számított 72 órán belül értesíti az illetékes hatóságot.
Valószínűsíthetően magas kockázatnál az érintetteket is késedelem nélkül tájékoztatja,
a jogszabályi kivételek figyelembevételével. Privát napló vagy kézirat nem kerülhet
nyilvános GitHub-ügybe. Gyakorlattal ellenőrizze az eljárást.

## Külső szolgáltatók és feltételes előírások

Rögzítse az adatkezelői/adatfeldolgozói szerepeket és szükséges szerződéseket.
Vegye számba a tárhelyet, levelezést, Office-t, felhőt, bejelentkezést, fordítást,
kutatási és egyéb szolgáltatókat, adattovábbításokat és garanciákat. Az adatkezelési
nyilvántartást, hatásvizsgálatot, különleges adatok feltételeit és tisztviselői
kötelezettséget az adott működés alapján kell vizsgálni.

| Terület | Vizsgálandó feltétel |
| --- | --- |
| Sütik/eszköztárolás | A tényleges működéshez szükséges tárolás tájékoztatása; opcionális követés előtt megfelelő választás, elutasítás és visszavonás. A fejlesztés nem ad hozzá követést. |
| NIS2/magyar kiberbiztonsági törvény | Az üzemeltető ágazata, mérete és esetleges kijelölése; ebből következhet nyilvántartás, audit és további incidenskezelés. |
| CRA | Kereskedelmi szoftvergyártó, nem kereskedelmi FOSS vagy közreműködő szervezet eltérő szerepe. Az érintett gyártók bejelentési előírásai 2026. szeptember 11-től, a fő követelmények 2027. december 11-től alkalmazandók; a steward bejelentési előírása utóbbi dátumtól. |
| Akadálymentesség | A közszférabeli üzemeltetőre vonatkozó, illetve külön az EAA szerinti hatály; szükség esetén valós teszt, nyilatkozat és visszajelzési eljárás. |

A részletes forrásokat és teendőket az angol üzemeltetési útmutató tartalmazza.
Jogszabály: [GDPR](https://eur-lex.europa.eu/eli/reg/2016/679/oj).

## Privacy API kompatibilitás — 2026-11-08

Az új kliens a v1 címeket használja; az `/api/privacy` és `/api/account/data`
közös handlert és kvótát használó legacy cím marad, deprecation jelzéssel. Előbb
a javított API-t, utána a klienseket telepítse. Az `omi-account-overview/1`
részleges másolat, nem teljes hozzáférési/hordozhatósági válasz. Az ADR-034
és az architektúra-baseline rögzíti a sémát, hibákat és repository-határt.
Merge/CI előtt ez javaslat; az üzemeltetői elfogadás külön követelmény.
