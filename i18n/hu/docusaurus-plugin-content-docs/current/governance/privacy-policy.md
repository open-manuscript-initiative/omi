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
címe `/?privacy=1`, az API-végpont `/api/privacy`, a fejlesztés telepítése után.

A hivatalos Stúdió [adatvédelmi oldalát itt nyithatja meg](https://studio.openmanuscript.org/?privacy=1).
Ha a szerver jelzi, hogy az üzemeltető még nem adta meg az adatokat, a regisztráció
előtt kérje a tájékoztatót. A forráskód vagy ez az oldal önmagában nem igazolja az
adott üzemeltetés jogi megfelelését.

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
