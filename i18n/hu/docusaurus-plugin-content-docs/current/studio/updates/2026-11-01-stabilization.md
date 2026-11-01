---
title: Studio-fejlesztési helyzetkép – 2026. november 1.
sidebar_label: Studio-fejlesztések (november 1.)
description: Mobil többdokumentumos munkatér, ellenőrzött felhőmentés, képek helyreállítása, PDF-export és biztonsági ellenőrzések.
---

# Open Manuscript Studio – fejlesztési helyzetkép (2026. november 1.)

**Állapot: a fejlesztések a Studio `main` ágába kerültek; ez nem új nyilvános kiadás bejelentése.** A Studio előkészített forrásváltozata `0.3.0-beta.13`, a honlapon dokumentált nyilvános letöltési kiadás továbbra is `0.3.0-beta.12`, a külön kiadási jóváhagyásig. A kéziratok hordozható formátuma változatlan: `OMI-SPEC-320@0.3.0`.

A következő javítások 2026. október 31. és november 1. között kerültek be a forráskódba. Ez **nem jelenti**, hogy a frissítések már minden telepített Android-, Windows- vagy más alkalmazásban megjelentek.

## A befejezett fejlesztések

| Terület | Megvalósult fejlesztés | Hivatkozás |
|---|---|---|
| PDF-export ellenőrzése | A renderelés előtt ellenőrzi a hivatkozott képek meglétét, méretét és SHA-256-ellenőrzőösszegét. A hiányzó vagy fel nem oldott médiaállományokat jelzi, nem továbbítja őket a korlátozott PDF-renderelőnek. | [Studio PR #802](https://github.com/open-manuscript-initiative/open-manuscript-studio/pull/802) |
| Képállományok helyreállítása | A hiányzó vagy sérült képek listázhatók, és azonos kézirathoz tartozó, ellenőrzött `.omi` csomagból, egyező azonosító és ellenőrzőösszeg esetén visszaállíthatók. A kézirat szövege és revíziótörténete nem módosul. | [Studio PR #804](https://github.com/open-manuscript-initiative/open-manuscript-studio/pull/804) |
| Biztonságosabb felhőmentés | A mentés elküldi a csomag SHA-256-értékét, majd a szerver visszaigazolásában ellenőrzi az ellenőrzőösszeget, a fájlméretet és a kézirat azonosítóját. Felhőből megnyitás után a csomag és a helyreállított képek épségét is vizsgálja. Hiányzó képek esetén a mentés nem jelent teljes sikert. | [Studio PR #805](https://github.com/open-manuscript-initiative/open-manuscript-studio/pull/805) |
| Többdokumentumos mobilmunkatér | Az Android/iOS-felület már az asztali dokumentumfülek munkamenet-kezelését használja. Több kézirat tartható nyitva, kompakt, vízszintesen görgethető és érintésbarát fülekkel, a szerkesztő fölött külön sávban. | [Studio PR #806](https://github.com/open-manuscript-initiative/open-manuscript-studio/pull/806) |

Mind a négy PR beolvadt. A #805 és #806 végleges fejlesztési commitján a CI/CD, az 1.0 Readiness, az iOS-szimulátoros build, a CodeQL, az OMI-SPEC-320 és a fordítási ellenőrzések sikeresek voltak. **Ez forráskód- és buildellenőrzés, nem új alkalmazás-áruházi kiadás.**

## Gyakorlati teszt: megnyitás másik eszközön

Egy felhasználói próba során a kézirat **a beállított felhőtárhelyből** egy másik eszközön is hibátlanul megnyílt. Ez az OMI-csomagok felhőalapú, kézi többeszközös átvitelének pozitív eredménye. Nem bizonyít automatikus háttérszinkronizációt, offline ütközésfeloldást vagy a kizárólag helyi IndexedDB-ben tárolt összes kép automatikus átvitelét.

A mobilos dokumentumfülek az alkalmazás aktuális munkamenetében működnek. **Az alkalmazás újraindítása utáni összes nyitott fül automatikus visszaállítása egyelőre nem igazolt képesség.**

## Nyitott feladatok és biztonság

- A [#803-as issue](https://github.com/open-manuscript-initiative/open-manuscript-studio/issues/803) továbbra is nyitott: hátravan a jogosultságkezelt, tartós szerveroldali bináris tárolás, az automatikus eszközök közötti képletöltés, a korábbi IndexedDB-adatok migrációja, az újrapróbálkozási és tárhelykorlátok kezelése, valamint az offline ütközések feloldása.
- A PDF-renderelő korlátozott működését megőriztük. Egy másik kézirat sikeres PDF-exportja nem jelenti a hiányzó eredeti képfájlok automatikus helyreállítását. A feldolgozó izolációjához és a kimenő hálózati forgalom korlátozásához kapcsolódó [#774](https://github.com/open-manuscript-initiative/open-manuscript-studio/issues/774) és [#765](https://github.com/open-manuscript-initiative/open-manuscript-studio/issues/765) feladat továbbra is külön ellenőrzendő.
- A GitHub biztonsági felületén a november 1-jei ellenőrzés során **hat nyitott Dependabot-riasztás** volt látható. A jelenlegi függőségi fájlok egyes esetekben már frissebb csomagokat tartalmaztak, de az eltérés ellenőrzése szükséges. A riasztásokat addig nem tekintjük megszüntetettnek, amíg a GitHub új ellenőrzése és a függőségi útvonalak ezt nem igazolják.
- Valós Android-készülékes átvételi tesztek, az újraindítás utáni többdokumentumos munkamenet, Windows PDF-körtesztek és a `beta.13` kiadási döntés még külön ellenőrzést igényelnek.

## Kiadási és szabványállapot

Ez **fejlesztési jelentés**: nem önálló OMI-SPEC-megfelelőségi tanúsítás, nem emeli Stable állapotba a Draft modelleket, és nem módosítja a nyilvános letöltések verzióját.

Kapcsolódó dokumentumok: [beta.12 kiadási megjegyzések](/docs/studio/releases/0.3.0-beta.12), [beta.13 kiadás előkészítése](/docs/studio/releases/0.3.0-beta.13) és [Studio megvalósítási állapota](/docs/governance/studio-implementation-status).
