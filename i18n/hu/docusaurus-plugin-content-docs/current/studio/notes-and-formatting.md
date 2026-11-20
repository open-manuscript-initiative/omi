---
title: "Szerkeszthető jegyzetek és közös formázópanel"
sidebar_label: "Szerkeszthető jegyzetek és közös formázópanel"
description: "Szerkeszthető jegyzetek és közös formázópanel — 2026-11-20"
---

# Szerkeszthető jegyzetek és közös formázópanel

A jegyzetek közvetlenül a kézirat alatti panelben szerkeszthetők, a szokásos automatikus mentéssel és változatkezeléssel. A panel követi a látható kéziratrészt, görgetéskor is elérhetően tartja a szerkesztett jegyzetet. Asztalon és mobilon a dokumentum szélességéhez igazodik.

A fejléc **Aa** panelje a legutóbb aktív főszöveg- vagy jegyzetszerkesztőt formázza. Félkövér, dőlt, aláhúzott, áthúzott, kiskapitális, felső/alsó index és hivatkozásbeszúrás használható. Asztalon a rajzszöggel rögzíthető, és a rögzítés újratöltés után is megmarad. A Jegyzetek párbeszédablakban ugyanez a panel érhető el.

A Word/ODT-import megőrzi a támogatott láb- és végjegyzet-formázásokat, karakterstílusokat, linkeket és bekezdéstöréseket. Az OJS/OMP-ből megnyitott DOCX is megőrzi ezeket, ha a Stúdió felülete és API-ja egyaránt frissült. A korábbi egyszerű szöveges adatok továbbra is olvashatók. Korábban elveszett formázáshoz az eredeti forrást újra meg kell nyitni/importálni; a helyi módosítások nem íródnak felül automatikusan.

A kiadványszerkesztő a tárolt formázott jegyzeteket használja a nyomtatott és HTML-előnézetben, valamint a HTML/PDF bemenetében. Az oldalváltásnál folytatódó jegyzeteket is ugyanazzal a formázással méri. Pusztán formázási módosítás után is frissül az előnézet. Ha a formázás már az adatokban van, nem kell újraimportálni.

## Megjelenítés a kiadványban

A kiadványstílus szabályozhatja a számozott láb- és végjegyzetet, illetve a szövegközi és lapszéli elhelyezést. Választható számozatlan zárójeles szövegközi megjelenítés, számozatlan lapszéli jegyzet, illetve beillesztés a számozott láb-/végjegyzetek közé. A DOCX a nem támogatott lapszéli elhelyezést szövegközi formában őrzi meg, figyelmeztetéssel; ellenőrizd a végső kimenetet. A magyar felület elnevezései: **Szövegközi jegyzet**, illetve **Végjegyzet**.

A szemantikus finanszírozási mezőből a kiadványstílus választható **csillagos finanszírozási jegyzetet** állíthat elő. Akkor kapcsold be, ha az adatnak a kiadvány elején is meg kell jelennie. A csillag elkülönül a rendes jegyzetszámozástól, amely 1-gyel kezdődik. Ellenőrizd a választott export támogatását és a végső PDF-et.

Lásd a [kiadványszerkesztő útmutatóját](/docs/studio/publication-editor) és a [friss fejlesztési összefoglalót](/docs/studio/updates/2026-11-20).
