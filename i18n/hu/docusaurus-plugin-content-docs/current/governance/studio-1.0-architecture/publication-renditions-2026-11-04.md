---
title: Publikációs változat és forráskövetés — 2026. november 4.
sidebar_label: Publikációs változat határa
description: Szerkeszthető publikációs állapot, forráskézirat, szerzőjelölés és a keretexport fennmaradó feladatai.
---

# Publikációs változat és forráskövetés — 2026. november 4.

Állapot: javasolt baseline-pontosítás a projektgazda által megerősített irány alapján. A korábbi drift minősítését javítja, nem az implementáció bizonyítottságát emeli. Vizsgált forrás: Studio [a3ac0e98](https://github.com/open-manuscript-initiative/open-manuscript-studio/commit/a3ac0e98194c7d39a0013e280453c7f428d86dd0). Részletes döntés: [Studio ADR-032](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/main/docs/architecture/adr-032-publication-rendition-boundary.md).

## A hiteles állapot az adott munkaváltozathoz tartozik

A tördelés a publikáció előkészítése, nem forrásfeldolgozás. Az önállóan szerkeszthető publikációs változat saját szövegfolyamokat, összekapcsolt kereteket, grafikus transzformációkat és oldalstílusokat tarthat fenn. A forrással közös OMI-konténerben is tárolható. Ez önmagában nem sérti a kanonikus kézirat vagy az alkalmazásállapot határát.

| Objektum | Mihez hiteles? | A szerző szabadsága |
| --- | --- | --- |
| Forráskézirat | Strukturált forrástartalom és annak revíziótörténete | Minden rész szerkeszthető a meglévő jogosultságokkal; a korábbi változatok változatlan történetként maradnak meg. |
| Publikációs változat | A közlésre előkészített változat szövege, grafikája és tördelése | Önálló szerkesztés, hozzáadás, törlés, átrendezés, képkivágás és tördelés; a tudatos eltérés követhető. |
| Exportált artifact | Egy azonosított publikációs pillanatképből készült pontos fájlbyte-ok | Módosítás után új kimenet készül, a bemenetekhez való kapcsolat megőrzésével. |

A közös dokumentumkonténer tárolási döntés: nem teszi kötelezővé a két szövegváltozat azonosságát. Az egységes felület sem bizonyít szemantikai szinkronizációt. A meglévő jogosultságok maradnak; a forráskövetés miatt nem kerülhet zárolás vagy új szerkesztési tiltás a folyamatba.

## Látható szerzőjelölés és belső forráskövetés

A szerző neve és ORCID-azonosítója megfelelő látható szerzőjelölés. Nem azonosítja azonban a felhasznált kéziratot és revíziót; önmagában nem bizonyítja az ORCID feletti rendelkezést, a dokumentum aláírását, szerkesztői jóváhagyását vagy lektoráltságát. A meglévő hitelesített identitásbizonyíték külön fogalom marad.

A forráskézirat azonosítója, változatlan kiinduló revíziója és annak meglévő tartalmi lenyomata, valamint a publikációs változat/pillanatkép azonosítója belső eredetadat. Ezeket nem kell a publikációra nyomtatni. Az ilyen kapcsolat nélküli régi tördelés eredete **ismeretlen**; nem rendelhető hozzá utólag automatikusan a jelenlegi kéziratfej. A közvetlenül publikációs munkában létrehozott tartalomnál kifejezetten jelezhető, hogy nincs importált forrás.

A forrásban tárolt módosítható tördelés miatt nem keletkezhet rekurzív lenyomatképzés. A meglévő történeti digest algoritmusa és a régi pillanatképek nem írhatók át. Az új leképezést/profilt implementáció előtt verziózni és felülvizsgálni kell. A meglévő history- és publication-build mechanizmusok újrahasználandók; ez a checkpoint nem vezet be wire mezőket vagy normatív OMI-profilt.

## Forrásmódosítás, lektorálás és nyilvános közlés

A forrás frissülése nem írhatja felül automatikusan a publikációs szerkesztést. Az import/frissítés/összefésülés kifejezett művelet, megőrzi a korábbi változatot, és jelzi az érintett objektumokat és konfliktusokat. A szerző tudatosan módosíthat vagy elhagyhat tartalmat. Az ismételt import nem fűzhet hozzá észrevétlenül újabb szövegmásolatot.

A tartalmi módosítás, a pusztán megjelenítési változás és a még nem értékelt eltérés külön kezelendő. A forrásrevízióra hivatkozás nem teszi lektorálttá a módosított publikációs szöveget. A meglévő, szerver által ellenőrzött bizonyítéknak a tényleges publikációs tartalmat kell lefednie; helyi ORCID- vagy keretadat nem adhat lektoráltsági pecsétet. Egy tipográfiai változás nem szükségképpen tudományos tartalmi módosítás, de az új artifact bizonyítékhoz kötése továbbra is szükséges. Az ismeretlen lefedettség nem igazolt. Az ADR-021 téves lektoráltságot tiltó kapui megmaradnak.

A publikációs munkafázis nem tesz minden forráspiszkozatot, rejtett revíziót, lektori identitást és helyi útvonalat nyilvánossá. Csak a jóváhagyott publikációs változat, erőforrásai és megengedett eredetadatai exportálhatók. A forráskonténer nem ágyazható be automatikusan eredetigazolásként.

## Ellenőrzött implementáció és tényleges hiányok

| Jelenlegi Studio-forrás | Értékelés |
| --- | --- |
| `publicationFrames.ts` / `publicationAutoFlow.ts`: szerkeszthető `stories[].text`, keretek, stílusok és folytatóoldalak a `urn:omi:studio:publication-frames:1` kiterjesztésben | Megengedett publikációs állapot. A kiinduló revízióhoz/publikációs változathoz kötés és a szemantikai eltérésvizsgálat még nincs implementálva. |
| `publicationFrameActions.ts`: `publication.frames.set` és idle checkpoint | A változás bekerül a meglévő történetbe. A history-esemény nem bizonyítja, mely forrásrevízióból importálták a szöveget. |
| `PublicationFrameEditor.tsx`: önálló textarea, forrásblokkok `storedContentText` szövegének hozzáfűzése | Az önálló szerkesztés szándékos. A szövegesítéshez és ismételt hozzáfűzéshez nem tartozik gazdag szemantikai leképezés és egyeztetési bizonylat. |
| `publicationFrameRendering.ts`: plain-text sorok, grafikus erőforrások újrahasznosítása, túlcsordulás és hiányzó forrás tiltása | Ezek nem bizonyítják a jegyzetek, hivatkozások, táblázatok, formázások és annotációk teljességét, a forráskövetést vagy az adott tartalom lektoráltságát. |
| Szintetikus keret-/oldaltesztek | Szövegfolyamot, geometriát, szövegmegőrzést és kiterjesztés-round-tripet vizsgálnak; nem teljes tudományos szemantikai konverziót vagy független rendererkonformanciát. |

Az implementáció a jelzett részhalmazon használható. Teljes kéziratkonverzió állítása előtt az elvesző vagy nem támogatott tartalomról egyértelmű diagnosztika szükséges. A tudatos szerzői módosítás/törlés nem automatikusan véletlen adatvesztés. A régi tördelések és a gazdag tartalmú exportút megőrzendő.

## Következmények a meglévő tervben

| Meglévő döntés/feladat | Pontosítás és szükséges bizonyíték |
| --- | --- |
| ADR-004/005; B01/B03/B05/B06 | A forrás ContentCodec és az alkalmazásállapot határa megmarad. A szerkeszthető publikációs változat nem versengő forrás-authority; nem kell minden szöveget közös fába kényszeríteni. |
| ADR-007/018; B07/C04 | Verziózott leképezés, ismert/ismeretlen/nem importált eredet, önálló módosítás, mentés–újranyitás, forrásfrissítés történetátírás nélkül. |
| ADR-008/009; C03–C05 | Változatlan bemeneti kontextus, erőforrás/font/renderer azonosítása és veszteségjelentés. Szintetikus jegyzet/hivatkozás/táblázat/ábra/képaláírás/formázás/annotáció importon, szerkesztésen és tényleges exporton át. |
| ADR-019/021; C15/E03 | Téves tartalomra vagy módosított tartalomra használt lektoráltság elutasítása, változatlan tartalom kezelése, adatvédelem, szándékos elhagyás, ismételt import, konfliktus, undo/recovery és hosszúkézirat-teljesítmény. |

Az öt architektúra-baseline ezt a pontosítást követi. Az eredeti 54 feladat és E02–E05 változatlan. Ez a dokumentáció nem RC-jóváhagyás, stabil keretprofil, adatbázis-migráció vagy a hiányzó forráskövetés/tartalomhűség implementációja. A külön RC-publikációs megállapítást ez a pontosítás nem zárja le.
