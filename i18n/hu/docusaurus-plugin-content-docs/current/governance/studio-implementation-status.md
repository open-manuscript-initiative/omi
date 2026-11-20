---
id: studio-implementation-status
title: "Open Manuscript Studio — aktuális megvalósítási állapot"
sidebar_label: "A Stúdió aktuális állapota"
---

# Open Manuscript Studio — aktuális megvalósítási állapot

**Frissítve: 2026. november 20.** A webes Stúdió és az aláírt Android APK-jelölt verziója **1.0.0-rc.2**. A mai forráshoz tartozó CI/CD, CodeQL, Readiness, PKP-integráció és natív build sikeres; a webes éles telepítés befejeződött. [Pontos forrás, futások és letöltések](/docs/studio/releases/1.0.0-rc.2).

| Terület | Aktuális állapot |
| --- | --- |
| Állandó közvetlen asztali letöltések | 0.3.0-beta.13; az RC2-jelöltek külön Actions-csomagok |
| Windows csomagazonosság | MSI/Store MSIX: 1.0.1.0; az utoljára külön igazolt Store-verzió 1.0.0.0 (november 10.) |
| Linux és macOS | Natív Preview; a Linux örökölt GLib-ügye külön követett |
| iOS/iPadOS | Kísérleti, 1.0.0 / build 27; nyilvános áruházi terjesztés ebből nem következik |
| OJS / OMP bővítmény | OJS 1.8.7; OMP 1.5.1, külön funkciók és kiadási csatornák |
| Kéziratformátum | OMI-SPEC-320@0.3.0, változatlan |

## Novemberi fejlesztések

- **Kiadványszerkesztő:** elkülönül a szerzői munkatértől; kötetekhez és folyóiratszámokhoz újrafelhasználható sablonok, együtt megadható ISBN/ISSN/DOI, teljes külső és belső borítóív, szerkeszthető szöveg-/képkeretek, mm/pica/pont és papíradatokból számított gerinc. [Útmutató](/docs/studio/publication-editor).
- **Jegyzetek:** közvetlen formázott szerkesztés a dokumentum alatt, közös és rögzíthető Aa-panel, Word/ODT/OJS-forrásformázás megőrzése, nyomtatott és HTML-előnézet, számozatlan szövegközi/lapszéli vagy számozott kezelés, csillagos finanszírozási jegyzet. [Útmutató](/docs/studio/notes-and-formatting).
- **Kutatási projektek:** közös családfa és kapcsolati háló, GEDCOM/GEXF/GraphML-import, hordozható projektfájl, megnyitott modulban felhőfájl-szinkron és ütközéskezelés, forrásjóváhagyással beszúrt ábrák. [Útmutató](/docs/studio/research-projects).
- **OJS és szerkesztőség:** nyelvenként kiválasztott metaadategyeztetés, kiadói HTML/PDF előkészítése és átadása meglévő OJS Production-beküldéshez. Az OJS irányítja a munkafolyamatot; az átadás nem publikál. A Stúdió saját hitelesített kiadványainál külön szöveggondozási és korrektúra-jóváhagyási szakaszok működnek Preview állapotban.
- **Felület és adatkezelés:** egységes feladatcsempék asztalon és mobilon, Android–mobilweb igazítás, a privát és közös tudományos adatokat megkülönböztető fióktörlési tájékoztatás.

## Közös szerkesztés és korlátok

A Yjs-alapú élő közös szerkesztés elfogadott meghívás után, szerveroldali jogosultságkezeléssel működik. A funkció megléte nem teljes OMI-SPEC-190 megfelelőségi tanúsítás. A kutatási projektfájl szinkronja ettől külön mechanizmus, nem közös szerveradatbázis és nem egyidejű gráfszerkesztés.

A sikeres CI és a build nem helyettesíti a készülékes elfogadást, nyomdai próbát vagy áruházi terjesztés ellenőrzését. A stabil 1.0 jóváhagyása és a specifikációk érettsége külön kérdés; az új funkciók nem emelik automatikusan magasabb szintre a Draft modelleket.

Lásd a [november 20-i összefoglalót](/docs/studio/updates/2026-11-20) és a [megfelelőségi állapotmátrixot](/docs/governance/implementation-status-matrix).
