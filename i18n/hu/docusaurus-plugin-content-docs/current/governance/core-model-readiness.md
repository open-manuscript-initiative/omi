---
id: core-model-readiness
title: Alapmodellek készültsége
sidebar_label: Alapmodellek készültsége
---

# Alapmodellek készültsége és stabilizálási sorrendje

2026. november 11-i bizonyítékfrissítés. A 24 modell forrásleltárának alapja továbbra is 2026. október 31. Tájékoztató összefoglaló; minden modell Draft marad. A Stúdió a 0.3.0-s fájlformátumot használja.

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

Elkészült a négy alapmodell új tervezete, 66 számozott követelmény, egy részleges szerkezeti séma, egy korlátozott ellenőrző és 22 tesztpélda. Az új Stúdió-csomag 22 végrehajtott esettel vizsgálja a korábban még teszteletlen 11 követelményt. A közös leltárban így 66 követelmény részlegesen alátámasztott, 0 teszteletlen és 0 teljesen bizonyított. Ez a négy alapmodell vizsgált követelményhalmazára vonatkozik, nem a teljes termék vagy a 24 specifikáció készültségi százaléka.

A bekezdések szétválasztásánál és összevonásánál feltárt hiányt javítja az explicit forrás–eredmény blokkazonosító-megfeleltetés, amely megmarad a hordozható előzményekben. A teljes Stúdió-tesztfutás 1035 ellenőrzése sikeres, hiba és kihagyás nélkül. A fordítási szolgáltatás válasza szintetikus, a Yjs-próba memóriában fut, az akadálymentességi megfigyelések kiválasztott kimenetekre korlátozódnak. A valódi szolgáltatási és képernyőolvasós elfogadás továbbra is külön feladat.

[Rögzített Stúdió-jelentés](/evidence/studio-remaining-2026-11-11.json) · [Aktuális közös bizonyítékleltár](/evidence/core-remaining-2026-11-11.json) · [Stúdió PR #900](https://github.com/open-manuscript-initiative/open-manuscript-studio/pull/900)

Hátravan a teljes követelménylefedettség, a nyilvános szakmai felülvizsgálat, a független együttműködési bizonyíték, a migrációs döntések és a dokumentált jóváhagyás. A közösen használt ellenőrzőkód nem számít független megvalósításnak.


[English source](https://openmanuscript.org/docs/governance/core-model-readiness/)
