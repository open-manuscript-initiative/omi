---
id: collaboration-permission-model
title: OMI-SPEC-190 — Együttműködési és jogosultsági modell
sidebar_label: Együttműködés és jogosultságok
description: Az OMI-SPEC-190 Draft 0.1.0 magyar nyelvű, nem normatív összefoglalója.
---

# OMI-SPEC-190 — Együttműködési és jogosultsági modell

**Állapot:** 0.1.0 Draft — 2026. október 31.

**A magyar szöveg tájékoztató jellegű.** A teljes, normatív szabványtervezet hiteles szövege angol nyelvű: [OMI-SPEC-190 — Collaboration and Permission Model](https://openmanuscript.org/docs/specifications/collaboration-permission-model/). A tervezet nem jelent hivatalos megfelelőségi tanúsítást.

## Cél

A modell azt határozza meg, hogy **ki, milyen jogosultsággal, melyik kéziraton vagy tudományos objektumon, milyen feltételekkel és meddig** dolgozhat. Elválasztja egymástól a fiókazonosságot, a tudományos szerzőséget, a szerkesztői megbízást, az együttműködési tagságot és a szerveradminisztrációt.

A szerző saját, jogosultan szerkeszthető kéziratát továbbra is szabadon módosíthatja. A forrásmegjelölés és az annotáció nem hozhat létre törölhetetlen, rejtett szerkesztési akadályt. Az együttműködés nem követel meg központi OMI-szervert, és nem változtatja meg önmagában a hordozható kézirat formátumát.

## A szabványtervezet fő elemei

1. **Hatókörhöz kötött hozzáférés.** A jogosultság meghatározott kéziratra, szakaszra, fordításváltozatra, annotációra vagy bírálati feladatra vonatkozik. Másik kéziratra vagy intézményre nem öröklődik automatikusan.
2. **Szerepek és műveletek szétválasztása.** Megtekintés, szövegszerkesztés, metaadat-módosítás, annotálás, fordítás, exportálás, tagkezelés és publikálás külön engedélyezhető. A „szerző” vagy „lektor” megjelölés önmagában nem jogosultság.
3. **Meghívás és elfogadás.** A függőben lévő meghívás nem biztosít hozzáférést. Az elfogadás hitelesített fiókhoz kötött; a meghívás lejárhat, elutasítható vagy visszavonható.
4. **Szerveroldali jogosultság-ellenőrzés.** Nem elegendő elrejteni a kezelőfelület gombjait. A REST-, WebSocket-, export- és szinkronizációs műveleteknél is érvényesíteni kell a hozzáférési szabályokat.
5. **Valós idejű közös szerkesztés.** A munkamenet és az élő szinkronizációs másolat különbözik a kézirat ellenőrzött, tartós OMI-verziójától. A visszavont jogosultságot az aktív kapcsolatokban is érvényesíteni kell.
6. **Kettős vak bírálat és bizalmas adatok.** A lektori kilét, rejtett metaadat, fájlnév, megjegyzés és eseménynapló nem szivároghat ki másik API-útvonalon vagy exportformátumban.
7. **Audit és elszámoltathatóság.** Elkülönül a jogosultsági döntés, a közös szerkesztési esemény, a tudományos revízió és a kiadói jóváhagyás.
8. **Intézmények és független szerverek.** Egy intézményi vagy központi adminisztrátori szerep nem ad automatikusan hozzáférést a kutatók kézirataihoz. Másik szerverre importált anyag külföldi jogosultságai nem válnak maguktól helyben érvényessé.

## Kapcsolódás a többi specifikációhoz

A [személyazonossági és közreműködői modell](./identity-contributor-model.md) (150) kezeli a tudományos hozzárendeléseket; a [verzió- és változásmodell](./versioning-change-model.md) (160) az ellenőrizhető kéziratverziókat; a [fordítási modell](./translation-model.md) (170) a nyelvi változatokat; a [validációs modell](./validation-model.md) (180) az ellenőrzések bizonyítékait; a [bírálati modell](./review-model.md) (200) a szerkesztői és lektori folyamatokat.

## Mi működik már a Stúdióban?

A [Stúdió élő együttműködési funkciója](../foundations/studio-live-collaboration.md) támogatja a meghívások elfogadását, a hitelesített közös szerkesztést és a résztvevők jelölését. A megvalósítás Yjs-alapú, egy kiszolgálón üzemeltethető és PostgreSQL-t használ a tartós állapothoz. Ez **termékfunkció**, nem a 190-es szabvány hivatalosan igazolt megfelelősége.

## Következő lépések az OMI 1.0-ig

Szükséges a jogosultságok, meghívások, döntések és auditálási események kanonikus adatsémája; a jogosultság-visszavonást, szerepkör-megkerülést és kettős vak bírálatot ellenőrző negatív tesztek; valamint független megvalósításon alapuló interoperabilitási bizonyíték.

A részletes mérföldkövek az [OMI 1.0 roadmapjában](../governance/roadmap-to-omi-1.0.md), az implementációs bizonyítékok a [státuszmátrixban](../governance/implementation-status-matrix.md) olvashatók.