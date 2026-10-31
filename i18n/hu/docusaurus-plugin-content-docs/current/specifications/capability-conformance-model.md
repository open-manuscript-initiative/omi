---
id: capability-conformance-model
title: OMI-SPEC-350 — Képesség- és megfelelőségi modell
sidebar_label: Képesség és megfelelőség
description: Az OMI-SPEC-350 Draft 0.1.0 magyar nyelvű, tájékoztató áttekintése.
---

# OMI-SPEC-350 — Képesség- és megfelelőségi modell

**Állapot:** Draft 0.1.0 — 2026. október 31.

**Ez magyar nyelvű, tájékoztató összefoglaló, nem teljes normatív fordítás.** A hiteles [angol OMI-SPEC-350](https://openmanuscript.org/docs/specifications/capability-conformance-model/) `REQ-CON-001`–`REQ-CON-038` követelményeket tartalmaz. A tervezet közzététele nem jelent tanúsítást.

## Mit old meg?

Elválasztja egymástól az alkalmazásban **elérhető funkciót**, a **dokumentált képességet**, a **teszttel igazolt viselkedést**, illetve a **függetlenül ellenőrzött szabványmegfelelést**. Így egy Studio-, OJS-/OMP-integrációs, API-, konverter- vagy szerverbővítmény pontosan leírhatja, mely szabvány melyik verziójának mely részét támogatja.

## A modell fő elemei

1. **Képességnyilatkozat:** megnevezi a terméket, verziót/buildet, érintett komponenst, támogatott szabványokat, profilokat, formátumokat, korlátozásokat és a szükséges függőségeket.
2. **Megfelelőségi osztály és profil:** külön kezelhetők például az importáló, exportáló, validáló, API-szolgáltató és jelentésfogyasztó szerepek. Egy képesség megléte nem igazolja a teljes szabvány támogatását.
3. **Követelmény–teszt megfeleltetés:** minden kötelező követelményhez meg kell határozni az alkalmazható teszteket és bizonyítékokat.
4. **Tesztjelentés:** `pass`, `fail`, `skip`, `error` és `not-run` eredmények szerepelnek. A kihagyott és nem futtatott tesztek nem számolhatók sikeresként.
5. **Lefedettség és minősítés:** az eredmény lehet megfelelő, nem megfelelő vagy nem eldönthető. Ismert, kötelező követelmény megsértése nem megfelelő eredményt jelent; bizonyítékhiány esetén az eredmény nem eldönthető.
6. **Önértékelés és független vizsgálat:** a fejlesztő saját tesztje és az elkülönült ellenőrző vizsgálat külön szint. Egy saját CI-futás önmagában nem független tanúsítás.
7. **Érvényesség:** az állítás a konkrét buildhez, szabványverzióhoz, tesztkészlethez, függőségekhez és környezethez kötődik; változásuk után új bizonyíték válhat szükségessé.

## Kapcsolat a többi szabvánnyal

Az `OMI-SPEC-180` egy kézirat hibáit és ellenőrzöttségét írja le; az `OMI-SPEC-340` egy import/export művelet átalakítási és veszteségadatait; az `OMI-SPEC-350` pedig azt, hogy **maga az implementáció** megfelel-e egy adott szabvány egy meghatározott osztályának és profiljának.

## Nyitott megvalósítási feladatok

Még szükséges a képesség- és bizonyítéksémák jóváhagyása, tesztjegyzékek és futtatók kialakítása, a követelmények teljes lefedése, a független ellenőrzés szabályai és a kompatibilitási tesztkészlet. Az OMI 1.0 megfelelőségét nem lehet kizárólag a tervezet vagy a korábbi részleges tesztek alapján megállapítani.

A bizonyítékok aktuális állapotát a [megvalósítási mátrix](https://openmanuscript.org/docs/governance/implementation-status-matrix/) tartalmazza.
