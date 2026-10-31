---
id: manuscript-validation
title: Kéziratok ellenőrzése az Open Manuscript Stúdióban
sidebar_label: Kéziratellenőrzés
description: Szerkesztési, hordozható OMI-adatcsere- és kiadás-előkészítési ellenőrzések a kézirat módosítása nélkül.
---

# Kéziratok ellenőrzése az Open Manuscript Stúdióban

Az **Ellenőrzés** munkafelület a kézirat egy rögzített pillanatnyi állapotát vizsgálja. Az ellenőrzés nem módosítja és nem zárolja a kéziratot: a szerző továbbra is szabadon szerkeszthet.

## Az ellenőrzés menete

1. Nyissa meg a dokumentumot, majd válassza a **Kézirat → Ellenőrzés** (Manuscript → Validation) menüpontot.
2. Válasszon profilt: **Szerkesztési ellenőrzés**, **OMI-adatcsere** vagy **Kiadás előtti ellenőrzés**.
3. Futtassa az ellenőrzést. Az **eredményt** és a **vizsgálat teljességét** külön értékelje.
4. Szűrje a diagnosztikai bejegyzéseket súlyosság szerint; nézze meg a hibakódokat és a helyeket. Ahol elérhető, a **Szakasz megnyitása** művelet a megfelelő kéziratrészre navigál.
5. Szükség esetén maga módosítsa a kéziratot, majd ellenőrizze újra. A régi jelentés a forrás vagy a profil megváltozásakor **elavult** lesz.
6. A naprakész jelentést **JSON letöltése** művelettel exportálhatja.

Az ellenőrzés nem hoz létre új revíziós ellenőrzőpontot, nem javítja automatikusan a szöveget, nem küld adatot külső szolgáltatónak, és nem módosítja a szerkesztési előzményeket.

## Ellenőrzési profilok

| Profil | Mire használható? |
|---|---|
| **Szerkesztés** | Azonosítók, szerkezet, hivatkozások, horgonyok, elérhető revíziós bizonyítékok, ismert fordítási adatok |
| **OMI-adatcsere** | Az előzők mellett a szigorú OMI-serializáció, valamint a hozzáférhető helyi mellékletek és ellenőrzőösszegek |
| **Kiadás előtti ellenőrzés** | Az adatcsere-feltételek mellett az aktív kiadói profil metaadat- és akadálymentességi követelményei |

Egy cím nélküli tervezet megfelelhet a szerkesztési vizsgálaton, de a szigorú OMI-adatcserén nem. A még nem ellenőrzött fordítás tájékoztatásként, az elavult fordítás figyelmeztetésként jelenhet meg; ezek nem akadályozzák az eredeti szöveg szerkesztését.

## Az eredmény értelmezése

| Állapot | Jelentés |
|---|---|
| **Érvényes (valid)** | Nem találtak dokumentumhibát, és minden kötelező ellenőrzés teljes volt |
| **Érvénytelen (invalid)** | Legalább egy biztos dokumentumhibát találtak; közben más ellenőrzések hiányosak is lehetnek |
| **Nem eldönthető (indeterminate)** | Biztos dokumentumhibát nem találtak, de a szükséges vizsgálatok vagy bizonyítékok nem teljesek |

**A teljesség külön tulajdonság.** Egy jelentés egyszerre lehet „érvénytelen” és „hiányos”. A figyelmeztetés és a tájékoztatás önmagában nem jelent érvénytelenséget. Ha egy ellenőrzőmodul nem tudott lefutni, az nem azonos a dokumentum hibájával.

A JSON-jelentés az ellenőrzött állapotot és a mentett revíziós alapot azonosítja, felsorolja az ellenőrzéseket, a diagnosztikai kódokat, a hivatkozási helyeket, a teljességet és a korlátokat. Nem másolja bele a kézirat teljes szövegét, a jelszavakat vagy a nyers kivételüzeneteket. Nem digitálisan aláírt tanúsítvány.

## Fontos korlátok

Ez a funkció már betöltött kéziratot vizsgál. Nem helyettesíti a nyers állományok importálás előtti ellenőrzését, a tudományos tartalom szakmai lektorálását, a külső hivatkozások elérhetőségének igazolását, a JATS DTD/JATS4R vizsgálatát, a PDF/nyomdai megjelenítés ellenőrzését vagy a kiadói aláírási és jogosultsági kapukat.

Külső mellékleteket nem tölt le automatikusan. Ha egy melléklet tárhelye nem érhető el, a jelentés a vizsgálat hiányosságát jelzi.

## A szabvány állapota

Az [OMI-SPEC-180 — Validation Model](https://openmanuscript.org/docs/specifications/validation-model/) **0.1.0 Draft szabványtervezet**. A [Stúdió #783-as PR-jében](https://github.com/open-manuscript-initiative/open-manuscript-studio/pull/783) szereplő `studio-validation-0.1` **kísérleti megvalósítási profil**, nem hivatalos szabványmegfelelőségi tanúsítás. A telepített alkalmazásban való elérhetősége a PR egyesítésétől és a telepítéstől függ.
