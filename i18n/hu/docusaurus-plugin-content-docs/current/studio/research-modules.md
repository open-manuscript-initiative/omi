---
title: Kutatási modulok az Open Manuscript Stúdióban
sidebar_label: Kutatási modulok
description: Az Open Manuscript Stúdió szakterületi kutatási moduljainak jelenlegi funkciói és korlátai.
slug: /studio/research-modules
---

# Kutatási modulok az Open Manuscript Stúdióban

A Stúdió opcionális kutatási moduljai olyan feladatokhoz kínálnak munkafelületet, amelyekhez a kéziratszerkesztésen túlmutató eszközök szükségesek. A **Kutatás → Modulok** menüben láthatók a telepítésen engedélyezett modulok; ezek közül kapcsolhatja be az adott munkatérhez szükségeseket. Az elérhető modulok listáját a telepítés rendszergazdája kezeli.

## Elérhető modulok

| Modul | Jelenlegi funkciók |
| --- | --- |
| **Történet és levéltárak** | Keresés az Europeana kulturálisörökség-katalógusában és az amerikai National Archives Catalogban; a magyar levéltári leírásokhoz az eLevéltár portál megnyitása. |
| **Vallási szövegek** | Keresés a Sefaria zsidó szöveg- és kommentárgyűjteményében, rövid, hivatkozással ellátott részletek megjelenítése. A Biblia, a Korán és a buddhista szövegek más portáljai külső hivatkozások. |
| **Kritikai szövegkiadás** | Kézirati tanúk, átírások és szöveghelyhez kötött variánsok rögzítése; olvasatok összevetése; kritikai apparátus készítése; JSON- vagy TEI XML-export. |
| **Korpusz- és nyelvi annotáció** | DOCX-, TXT- és Markdown-szöveg importja; konkordanciakeresés szövegkörnyezettel; nyelvi annotáció; párhuzamos szövegek illesztése; JSON- és CSV-export. |
| **Zeneismeret** | Tömörítetlen MusicXML importja; zenei események katalogizálása és hangfelvétel-hivatkozásokhoz, illetve időpontokhoz kapcsolása. Kottát nem jelenít meg. |
| **Kulturális örökség** | Tárgyak és helyszínek leírása, proveniencia és jogállás rögzítése, forrásképek hivatkozása és képrészletek annotálása normalizált koordinátákkal. |
| **Társadalomkutatási módszerek** | Kutatási terv és etikai jegyzetek rögzítése, kódkönyv kezelése, átiratrészletek kódolása. Érzékeny adatokat anonimizáljon. |
| **Jogforrások** | Joghatóság, hivatkozás, dátum, forráslink és mentett szövegváltozatok nyilvántartása; két változat összevetése. Közvetlen EUR-Lex-keresés és célzott keresések az InfoCuria, az ENSZ Szerződéstára, a római jogi és a vatikáni kánonjogi források felé. |
| **Kutatási reprodukálhatóság** | Publikációk összekapcsolása verziózott kutatási eredményekkel, repókkal, azonosítókkal, licencekkel és megjegyzésekkel; fájl SHA-256 ellenőrzőösszegének számítása a fájltartalom tárolása nélkül. |

## Tárolási és forráskorlátok

A legtöbb modul a rekordokat az aktuális böngészőben tárolja, és JSON-exportot kínál; a korpusz konkordanciája CSV-be is exportálható. A böngésző helyi tárhelye nem szinkronizál automatikusan az eszközök között, és nem hoz létre megosztott munkateret. A modulaktiválási beállítások felhasználóhoz és munkatérhez kötve, külön tárolódnak.

Néhány modul élő külső keresést használ. Az Europeana, az amerikai National Archives és a Sefaria keresője közvetlen kapcsolatot használ. A Jogforrások modul az EUR-Lex nyilvános kereső-URL-jét használja; a többi jogi portálra korlátozott webes keresés, illetve közvetlen portállink nyílik új lapon. Ezek találatai nem kerülnek be automatikusan a Stúdióba. A hivatkozást, a jogi státuszt és a szövegváltozatot mindig ellenőrizze az elsődleges forrásban.

A modulok kutatási segédeszközök. Nem hitelesítik a forrásokat, nem állapítják meg a jogi hatályt, nem hagynak jóvá kutatásetikai tervet, és nem igazolják a tudományos következtetéseket.
