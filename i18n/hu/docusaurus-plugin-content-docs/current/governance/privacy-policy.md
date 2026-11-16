---
title: Adatvédelmi tájékoztatás
sidebar_label: Adatvédelmi tájékoztatás
---

# Adatvédelem és a kiválasztott szerver tájékoztatója

Ez az oldal az OMI szoftver működését ismerteti. Minden önállóan üzemeltetett
Stúdió-szervernek a saját adatkezelőjét és tényleges adatkezelését kell bemutatnia.
A projekt neve és a nyílt forráskódú licenc nem azonosítja valamennyi szerver
adatkezelőjét. A regisztráció előtt és a Fiók felületén az **Adatvédelem és
személyes adatok** részben érhető el a szerver tájékoztatása. A nyilvános oldal
címe `/?privacy=1`, az API-végpont `/api/v1/privacy`, a fejlesztés telepítése után.

**Az OMI hivatalos projektkapcsolati e-mail-címe:** [contact@openmanuscript.org](mailto:contact@openmanuscript.org). A projektkommunikációhoz és az elsődleges adatvédelmi megkeresésekhez ez a cím használandó a személyes Gmail-címek helyett. A GDPR szerinti kérelmekért a kiválasztott szerver tájékoztatójában megnevezett adatkezelő felel; a független intézményi szervereknek saját kapcsolattartójuk lehet.

A hivatalos Stúdió [adatvédelmi oldalát itt nyithatja meg](https://studio.openmanuscript.org/?privacy=1).
Ha a szerver jelzi, hogy az üzemeltető még nem adta meg az adatokat, a regisztráció
előtt kérje a tájékoztatót. A forráskód vagy ez az oldal önmagában nem igazolja az
adott üzemeltetés jogi megfelelését.

## Technikai és integrációs auditnaplók megőrzése

A Stúdió az alkalmazásszintű auditnaplókat **az adatbázisban** tárolja, ezért
ezeket sem a systemd, sem a Plesk webes naplóinak rotációja nem törli.
A szoftver alapértelmezett törlési küszöbe **90 nap** az integrációs
műveletekre (például DeepL/AI bemeneti és kimeneti SHA-256-lenyomatok), valamint
a kutatási modulok műveleteire; a központi és intézményi jogosultsági,
adminisztrátori és együttműködési szerepkörváltozások naplóira **180 nap**.
Az adatok tartalmazhatnak felhasználói azonosítót, IP-címet, műveleti metaadatot
és lenyomatot, így nem tekinthetők automatikusan anonimnak. A cél a technikai
hibák és visszaélések vizsgálata, a hozzáférések és jogosultságok ellenőrzése.
Az időtartam projektjavaslat, nem jogszabályban előírt általános határidő.

A törlés csak akkor **automatikus**, ha a szerver üzemeltetője az időzített
takarítást ténylegesen aktiválta és ellenőrzi. A kiválasztott szerver
adatkezelője köteles közzétenni az alkalmazott időtartamot, a jogalapot,
a mentések kezelését és az indokolt kivételeket. A tudományos
publikálás, lektorálás és szerkesztői döntések eredetkövetési adatai
nem tartoznak e rutinszerű törlésbe; rájuk külön megőrzési rend szükséges.

## Külső azonosítószolgáltatók (ORCID, Google, Microsoft)

A külső belépés választható, és csak az adott szerveren engedélyezett
szolgáltatóknál jelenik meg. Az ORCID a `openid` jogosultsággal az
ORCID iD hitelességét igazolja, és esetleg nevet is visszaadhat.
A Google és a Microsoft belépése `openid profile email` körrel
működik; a szolgáltató azonosítóját és kibocsátóját, továbbá nevet,
e-mail-címet és az e-mail-hitelesítés jelzését adhatja át.
Az e-mail nem minden esetben hitelesített, ezért önmagában
nem jogosít intézményi vagy szerkesztői hozzáférésre.
Intézményi OpenID-szolgáltatók is bekapcsolhatók.

A Stúdió az összekapcsolt azonosítót (szolgáltató, kibocsátó, azonosító),
az elérhető megjelenítési nevet és a szükséges e-mail-/ellenőrzési
metaadatokat tárolja. A belépési kódok cseréje szerveroldalon történik,
a külső szolgáltató jelszava nem kerül a Stúdióhoz.
A külső szolgáltatók saját adatvédelmi szabályzatuk szerint kezelik
az ottani adatokat, **de ez nem mentesíti a Stúdió adatkezelőjét** a hozzá
érkező és általa felhasznált személyes adatok jogszerű kezeléséért.
Tájékoztatók: [ORCID](https://info.orcid.org/privacy-policy/),
[Google](https://policies.google.com/privacy),
[Microsoft](https://www.microsoft.com/en-us/privacy/privacystatement).
Az adatkezelőnek a ténylegesen bekapcsolt szolgáltatókat és szükséges
adattovábbítási garanciákat külön meg kell neveznie.

## Adatok és külső szolgáltatások

A helyi szerkesztés és mentés a kéziratot a felhasználó eszközén tarthatja.
A fiók, közös szerkesztés, bírálat, OJS/OMP, Office, külső bejelentkezés,
felhőtárolás, fordítás és kutatási kapcsolatok személyes adatokat kezelhetnek.
A szerver adatkezelőjének közölnie kell a célokat, jogalapokat, adatköröket,
címzetteket, megőrzési időket, esetleges nemzetközi adattovábbítási garanciákat,
a joggyakorlás módját és a felügyeleti hatósági panasz lehetőségét.

A felhasználó által indított kapcsolat sem szünteti meg az adatvédelmi
kötelezettségeket. Az üzemeltetőnek tisztáznia kell a szolgáltatói szerepeket,
szerződéseket és adattovábbításokat. Az alkalmazás puszta telepítése vagy megnyitása
nem adhat okot a kéziratok idegen szolgáltatóknak továbbítására. A kiadási és
aláírási munkafolyamatok nem tartalmazhatnak kéziratokat vagy éles hitelesítő adatokat.

## Joggyakorlás

A szerver tájékoztatójában megadott adatkezelőhöz bejelentkezés nélkül is fordulhat.
A feltételek fennállásakor hozzáférést, helyesbítést, törlést, korlátozást,
tiltakozást és adathordozhatóságot kérhet. A válasz főszabály szerint egy naptári
hónapon belül esedékes; indokolt hosszabbításról és annak okáról az eredeti
határidőn belül kell tájékoztatni. A levélhivatkozás csak a levelezőprogramot nyitja
meg: az üzenetet Önnek kell elküldenie.

A Fiók adatvédelmi részén elérhető JSON-másolat a profil és kiválasztott fiók-,
tagsági és bejelentkezési metaadatok letöltését segíti, hitelesítési titkok nélkül.
Ez nem teljes körű érintetti adatigénylés és nem kéziratmentés. A további
adatkörökért és az alkalmazandó adathordozhatóságért forduljon az adatkezelőhöz.
Általános hozzájárulási jelölőnégyzet nem helyettesíti a célonként megfelelő jogalapot.

## Törlés és megmaradó adatok

A Stúdió a végleges fióktörlés előtt részletesen bemutatja a törlendő fiók- és magánadatokat, a lehetségesen megmaradó közös kéziratokat és bírálatokat, a külső példányokat és a mentések szabályait. A tájékoztató tudomásulvételét a felhasználónak külön meg kell erősítenie az e-mail-címes jóváhagyás mellett. Ez **nem** lemondás a törléshez vagy tiltakozáshoz való jogról.

Az adatkezelési célok és jogalapok elkülönítését, valamint a GDPR 6. cikk (1) f) és 17. cikk (3) d) egyedi alkalmazását a [Fióktörlés és tudományos közreműködések](/docs/governance/account-erasure-and-scholarly-records) című javasolt ÁSZF-rész ismerteti.

A [fióktörlési útmutató](https://openmanuscript.org/account-deletion) ismerteti az
önkiszolgáló folyamatot. A közös tudományos történetben álnevesített résztvevői
hivatkozás és azonosításra alkalmas tartalom maradhat. Az álnevesítés nem jelent
visszafordíthatatlan anonimizálást. A megmaradó személyes adatokat, megőrzésük
jogalapját és idejét, valamint a törlési kivételeket egyedileg kell megvizsgálni.
A tudományos eredetkövetés önmagában nem jogosít minden adat korlátlan megőrzésére.

Az utolsó tulajdonos önkiszolgáló törlését biztonsági szabály akadályozhatja.
Ilyenkor az adatkezelőtől ellenőrzött szerepátadást vagy más törlési eljárást kell
kérni; a kérelem nem maradhat határozatlan ideig elintézetlen.

## Biztonsági mentések és külső példányok

A tényleges mentésmegőrzést az üzemeltetőnek közölnie és betartatnia kell.
A korábban vállalt, például 30 napos korlátot jogszerű módosításáig teljesíteni kell.
Ez az általános szoftverismertető nem változtatja meg a szerver mentési rotációját.
Visszaállítás után a törléseket és korlátozásokat újra érvényesíteni, az elavult
hitelesítő adatokat érvényteleníteni kell az éles használat megnyitása előtt.
Az OJS/OMP-hez vagy külső felhőszolgáltatóhoz került példányok külön eljárást igényelnek.

## Sütik és üzemeltetési feladatok

A szükséges sütikről és eszköztárolásról tájékoztatni kell. A feltétlenül szükséges
működéshez nem kell pusztán a süti miatt hozzájárulást kérni; az opcionális követés
előzetes választást, elutasítást és visszavonást igényel. Ez a fejlesztés nem vezet
be opcionális analitikát.

Az adatkezelőnek tényleges biztonsági, megőrzési, helyreállítási, joggyakorlási és
incidenskezelési eljárásokat kell működtetnie. Az üzemeltetői kitöltéshez és a
feltételes NIS2-, CRA- és akadálymentességi követelmények vizsgálatához az
[üzemeltetési eljárás](/docs/governance/server-privacy-operations) ad részletes útmutatót.
Jogszabályi alap: [GDPR](https://eur-lex.europa.eu/eli/reg/2016/679/oj).
