---
id: import-export-model
title: OMI-SPEC-340 — Import- és exportmodell
sidebar_label: Import- és exportmodell
description: Az OMI-SPEC-340 Draft 0.1.0 magyar nyelvű, tájékoztató áttekintése.
---

# OMI-SPEC-340 — Import- és exportmodell

**Állapot:** Draft 0.1.0 — 2026. október 31.

**Ez a magyar oldal tájékoztató összefoglaló, nem a teljes normatív fordítás.** A kötelező követelményeket az [angol nyelvű OMI-SPEC-340](https://openmanuscript.org/docs/specifications/import-export-model/) rögzíti, `REQ-IO-001`–`REQ-IO-034` azonosítókkal. A tervezet még nem minősül stabil szabványnak, és nem igazolja automatikusan a Studio megfelelőségét.

## A modell célja

Az import és az export nem egyszerű fájlátalakítás. A modell szabályozza, hogyan alakulnak át a dokumentumok külső formátumokból a kanonikus OMI-kézirattá, illetve az OMI-kéziratból más formátumokká úgy, hogy az elveszett vagy megváltozott adatok nyomon követhetők legyenek.

A fájlformátum (`OMI-SPEC-320`), a konténer (`OMI-SPEC-330`), a megjelenítés (`OMI-SPEC-240`) és a publikálási folyamat (`OMI-SPEC-230`) külön szabványrétegek. Az import- és exportmodell ezekhez kapcsolódik, de nem helyettesíti őket.

## Fő követelménycsoportok

1. **Azonosítható átalakítás:** a forrás- és célformátum, azok verziója, a leképezési profil, a feldolgozóprogram verziója és a művelet paraméterei rögzítendők.
2. **Szemantikai megfeleltetés:** a címsorok, szakaszok, jegyzetek, idézetek, bibliográfiai rekordok, nyelvi jelölések, kereszt- és eszközhivatkozások kapcsolatainak megőrzését külön kell értékelni.
3. **Veszteségjelentés:** a kihagyott, részlegesen átalakított, ismeretlen vagy nem ellenőrizhető tartalom nem tüntethető fel veszteségmentesként. A felhasználó megkapja a tartalmi érintettséget és a visszaállítás lehetőségét.
4. **Biztonság és forrásmegőrzés:** az eredeti állomány nem írható felül észrevétlenül. A beolvasott állomány nem futtathat kódot, és nem tölthet le önkényesen külső erőforrásokat.
5. **Szerkeszthetőség:** az importált kézirat szövege és címsorai tovább szerkeszthetők. A forrásmegjelölés nem állíthat elő rejtett, törölhetetlen szövegrészeket.
6. **Körbejárhatóság (round trip):** a DOCX → OMI → DOCX, illetve OMI → JATS → OMI folyamatok csak előre meghatározott, ellenőrzött tulajdonságok körében nevezhetők egyenértékűnek. A látványbeli azonosság nem azonos a szemantikai azonossággal.
7. **Titkosság és jogosultság:** a szerkesztői/bírálati adatok, korábbi verziók és nem nyilvános metaadatok kiadását a felhasználó jogosultsága és az exportprofil szabályozza.

## Műveleti modell

A folyamat: eredeti fájl megőrzése → típusfelismerés és biztonságos értelmezés → verziózott leképezés → jelöltek előállítása → ellenőrzés → veszteség- és eredetjelentés → elfogadás vagy visszavonás.

A jelentés megkülönbözteti a **sikeres**, **veszteséggel befejezett**, **hibás** és **megszakított** műveletet. Hiányzó ellenőrzési bizonyíték esetén nem állítható veszteségmentesség.

## Megvalósítandó feladatok

A 0.1.0 tervezet még nem rendelkezik elfogadott leképezésiprofil-sémával, gépi jelentéssémával, teljes DOCX/JATS/ODT/HTML/EPUB/IDML megfeleltetési táblákkal vagy végleges körbejárási tesztkészlettel. Ezek kidolgozása és független ellenőrzése a következő szabványosítási szakasz feladata.

A tényleges alkalmazási lefedettséget a [megvalósítási mátrix](https://openmanuscript.org/docs/governance/implementation-status-matrix/) külön követi.
