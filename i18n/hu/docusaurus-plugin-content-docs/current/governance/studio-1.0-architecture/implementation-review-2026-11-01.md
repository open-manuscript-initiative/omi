---
title: Studio 1.0 – a megvalósítás felülvizsgálata (2026. november 1.)
sidebar_label: Megvalósítási felülvizsgálat
description: Az OMI Studio 1.0 architekturális tervének, a szabványosítási ütemtervnek és a tényleges kiadási akadályoknak a bizonyítékokra épülő áttekintése.
---

# OMI Studio 1.0 – megvalósítási felülvizsgálat

**2026. november 1. · Tájékoztató jellegű vizsgálat; nem kiadási vagy szabványjóváhagyás.**

Az áttekintés alapja a [refaktorálási és PR-terv](./refactoring-pr-plan.md), a [hiányelemzés](./gap-analysis.md), az [OMI 1.0 szabványosítási ütemterve](../roadmap-to-omi-1.0.md), valamint a [Studio legfrissebb Route A kiadási ellenőrzése](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/main/docs/release/2026-11-01-route-a-audit.md). Külön kezeljük a **működő funkciót**, a **rögzített architekturális szerződést**, a **szabványtervezet érettségét** és a **valós telepítési/elfogadási bizonyítékot**.

**Két különálló 1.0 cél létezik:** a Studio 1.0 az előre rögzített platformokra vonatkozó *Route A* termékkiadás; az OMI 1.0 a független szoftverek által is értelmezhető, felülvizsgált normatív szabványcsalád. A működő Studio önmagában nem teszi Stable állapotúvá az OMI-SPEC Draft dokumentumokat.

## A terv egységeinek száma

Az **A01–F03** tervben **54 egység** szerepel, nem 53: A=10, B=13, C=15, D=8, E=5, F=3. Ezek **tervezési azonosítók**, nem GitHub PR-számok. A hozzáadott CI-ellenőrzés követi az egységszámokat, az azonosítók egyediségét, a függőségeket, a szükséges bizonyítékokat és a kockázatbesorolást. A sikeres ütemterv-ellenőrzés **nem** jelenti az 54 fejlesztési egység teljesítését.

Az alábbi táblázatban a „részleges” megjelölés azt jelenti, hogy bizonyos működő megoldások már léteznek, de a teljes szerződés vagy ellenőrzési bizonyíték hiányzik. A „nem igazolt” nem azt jelenti, hogy biztosan nincs megvalósítás.

## Az A–F szakaszok felülvizsgálata

| Szakasz | Már igazolt alap | Fennmaradó hiány | Mit lehet elkészíteni? |
|---|---|---|---|
| **A – Architektúra rögzítése (10)** | Route A platformbesorolás, OMI-SPEC-320@0.3.0 Draft séma és tesztkészlet, API v1 alapok | Stabil szemantikai tartalom-AST, jövőbeli verziók kezelése, független sémateszt; A10 függőségi határok | **Fejlesztés + szabványfelülvizsgálat.** A [#811-es PR](https://github.com/open-manuscript-initiative/open-manuscript-studio/pull/811) a szemantikai modell függőségi ellenőrzésének első részét valósítja meg; nem zárja le A06/A10 egészét. |
| **B – Belső alkalmazásrétegek (13)** | Működő szerkesztő, nagy dokumentumok fokozatos betöltése, előzmények, helyreállítás, identitáskezelés | Közös `StudioApplication` műveleti réteg, `ContentCodec`, atomi mentés, `RevisionRepository`, natív biztonságos tokentárolás, stabil szemantikai korrekciók | **Különálló, visszafordítható PR-ek.** Az adatmodell- és tokentárolási migráció külön kompatibilitási és eszköztesztet igényel. |
| **C – Interoperabilitás (15)** | DOCX/ODT/OMI folyamatok, több exportformátum, OJS/OMP-integráció, PDF/JATS/HTML, export-riportok | Egységes importőr/renderer-regiszter, kézbesítési port, közös PKP-nyugták és tartós outbox, végrehajtási jogosultságok, felhőütközések | **Fejleszthető** portokkal, adapterekkel és negatív tesztekkel; a független PKP-kompatibilitás külső elfogadást is igényel. |
| **D – Platformbiztonság (8)** | Webes és natív buildek, mobil dokumentumfülek, Tauri CSP (#770), CI-helyreállítási tesztek | Natív OS-alapú titoktárolás, valódi eszközös teljes körű tesztek, aláírás, hozzáférhetőség; éles PDF-worker és hálózati védelem | **Vegyes feladat:** kód/tesztek elkészíthetők; a [#765](https://github.com/open-manuscript-initiative/open-manuscript-studio/issues/765) és [#774](https://github.com/open-manuscript-initiative/open-manuscript-studio/issues/774) tényleges VPS-tesztje rendszergazdai művelet. |
| **E – Kiadásjelölt (5)** | 1.0 Readiness, biztonsági és kiadási tesztek, SBOM, ellenőrzőösszegek, a [#810-es PR](https://github.com/open-manuscript-initiative/open-manuscript-studio/pull/810) szigorú kiadási kapuja | Egyetlen commitra vonatkozó teljes bizonyítékcsomag, rosszindulatú bemenetek tesztkészlete, RC1, 2–4 hetes megfigyelés és eszközös jóváhagyás | **Automatizálható** bizonyíték-összesítő és tesztek; fizikai eszközös elfogadás és Go/No-Go külön szükséges. |
| **F – 1.0 kiadás (3)** | Meglévő változatlan kiadási eszközök | Az utolsó változatlan RC kiadása, támogatási és karbantartási szabályok, 1.0.x mérföldkő | **Csak E lezárása után**, kiadói/tulajdonosi jóváhagyással. |

A **#765 és #774** azért nyitott kiadásblokkoló, mert a dokumentált éles VPS-elfogadási bizonyíték hiányzik; ebből nem következik, hogy a kiszolgálón biztosan nincs megfelelő védelem. A **#271** továbbra is a Tauri Linux GTK3 ágon öröklött `glib 0.18.5` kockázat, amit a #809 PR figyel, de nem javít.

## Az OMI 1.0 szabványosítás külön hiányai

A [24 modell áttekintése](../implementation-status-matrix.md) nem minősítés. A 2026. október 31-i bizonyítékok alapján az alapmodellek 66 követelményéből **20 csak részlegesen vizsgált és 46 nem vizsgált**; az OMI-SPEC-320 formátummodell 72 követelményéből **10 tesztelt, 33 részleges, 29 teszteletlen**. Ezek az adott dátumhoz kötött bizonyítékok, nem a mai készültségi arányok.

A normatív szabványhoz még szükséges:

1. **Teljes, verziózott sémák és követelmények** – az alapmodellek, a hivatkozások, a publikálás, a platform, az import/export és a megfelelőség modelljeinek jóváhagyott szerződései.
2. **OMI-SPEC-190 jogosultságok** – grant/invitation/decision/audit séma, visszavonás, kettős vak lektorálás, több hatóság közötti jogosultság és negatív tesztek.
3. **OMI-SPEC-180/340/350 bizonyítékok** – közös validációs jelentés, adatvesztési/konverziós nyugták, teljes követelmény-lefedettség és verziózott tesztkészlet.
4. **Független implementáció** – nem elegendő ugyanannak a Studio-kódnak vagy vendorizált validátornak a másodszori futtatása; külön fejlesztő és nyilvános szabványfelülvizsgálat szükséges.
5. **Hivatalos fordítások** – az angol normatív szöveg megszilárdítása után. A Studio sok felületi nyelve nem jelenti a szabványok hivatalos fordítását.

## Amit önállóan elkészíthetek – javasolt sorrend

| Csomag | Elkészíthető eredmény | Külső feltétel |
|---|---|---|
| **R1 – Azonnali ütemterv- és függőségi ellenőrzés** | Jelen EN/HU jelentés, a 54 egység automatikus dokumentáció-ellenőrzése, Studio A10 függőségi regresszió (#811) | PR-ek zöld CI-je és merge |
| **R2 – E02 kiadási bizonyíték-összesítő** | Egyező SHA-jú PKP, Tauri/Android, CodeQL, Readiness, séma, SBOM és ellenőrzőösszeg-nyugták; hibás/kimaradt ellenőrzések kizárása | Valódi eszközös és aláírási jóváhagyás |
| **R3 – A06/B01/B05 tartalommodell és alkalmazási portok** | Nem módosító `ContentCodec` prototípus, régi dokumentumok karakterizációs tesztje, `StudioApplication` alapréteg | Normatív szemantika, kompatibilitás és migráció elfogadása |
| **R4 – C01/C03/C06 import/render/integrációs szerződések** | Regiszter, portok, tesztadapterek, export- és kézbesítési nyugták | PKP- és szolgáltatói valódi kompatibilitás |
| **R5 – E01 és megfelelőségi tesztek** | Szintetikus ZIP/SVG/XML/PDF/engedélyezési negatív tesztek, nyilvános követelmény- és fixture-lefedettség | Független ellenőrző és normatív jóváhagyás |
| **R6 – Natív és szerverelfogadás** | Systemd és hálózati ellenőrző parancsok, biztonságos visszaállítási terv és Go/No-Go sablon | Tényleges VPS-futtatás, aláírás, Windows/Android eszközös próba |

**Közvetlen javaslat:** először az R1 PR-eket ellenőrizzük és merge-eljük, majd a #774 és #765 valós éles ellenőrzését végezzük el. Ezzel párhuzamosan előkészíthető az **R2** kiadási bizonyíték-összesítő és az **R3** nem módosító port/codec-prototípusa. A hordozható séma tényleges átírását és az agresszív állapotkezelési refaktorálást külön kompatibilitási engedélyhez kell kötni.

A szerzők minden kéziratszöveget szabadon szerkeszthetnek és törölhetnek; az észrevétlen, láthatatlan forrás- vagy jogosultsági zárolás nem elfogadható. Valódi kéziratok tartalma, személyes adatok, szerverútvonalak és titkok nem kerülnek a nyilvános CI-be.

**Ez a felülvizsgálat nem engedélyez RC1/1.0 verzióemelést vagy OMI-SPEC Draft→Stable átállítást.**
