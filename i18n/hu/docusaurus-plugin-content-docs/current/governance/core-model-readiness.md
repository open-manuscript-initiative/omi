---
id: core-model-readiness
title: Alapmodellek készültsége
sidebar_label: Alapmodellek készültsége
---

# Alapmodellek készültsége és stabilizálási sorrendje

2026. október 31-i állapot. Tájékoztató összefoglaló; minden modell Draft marad. A felülvizsgálat 24 modell forrását, verzióját és rögzített Stúdió-kódbizonyítékait egyezteti. A Stúdió már a 0.3.0-s fájlformátumot használja; a korábbi 0.2.0-s állítás elavult volt.

| Lépés | Modellek | Feladat |
|---|---|---|
| 1 | 000, 120, 100, 140 | Alapelvek, objektumok, dokumentum és metaadatok |
| 2 | 150, 110, 130 | Közreműködők, horgonyok, annotációk |
| 3 | 160, 180 | Változások és ellenőrzés |
| 4 | 220, 210, 221, 225 | Bibliográfia, idézések, könyvtár és forrásszármazás |
| 5 | 320, 330 | Hordozható fájl és konténer |
| 6 | 190, 170, 200 | Jogosultságok, fordítás és lektorálás |
| 7 | 240, 230 | Megjelenítés és publikálás |
| 8 | 340 | Import/export és adatvesztés |
| 9 | 350, majd 300/310 | Megfelelőség, bővítmények és API |

A mérési eszközöket és a biztonsági hibák javítását az első lépéstől használjuk. A 210/221 függőségi kört közös felülvizsgálattal kell rendezni.

Elkészült a négy alapmodell új tervezete, 66 számozott követelmény, egy részleges szerkezeti séma, egy korlátozott ellenőrző és 22 tesztpélda. Húsz követelmény részlegesen bizonyított, 46 még vizsgálatlan. A Stúdióhoz előkészített külön panel a tartalom módosítása nélkül ellenőriz, és JSON-jelentést ad; a régi dokumentumok verziómegjelölését nem írja át.

Hátravan a teljes követelménylefedettség, a nyilvános szakmai felülvizsgálat, a független együttműködési bizonyíték, a migrációs döntések és a dokumentált jóváhagyás. A közösen használt ellenőrzőkód nem számít független megvalósításnak.


[English source](https://openmanuscript.org/docs/governance/core-model-readiness/)
