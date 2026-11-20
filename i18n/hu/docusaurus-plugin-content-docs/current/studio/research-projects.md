---
title: "Családfák, kapcsolati hálók és hordozható kutatási projektek"
sidebar_label: "Családfák, kapcsolati hálók és hordozható kutatási projektek"
description: "Családfák, kapcsolati hálók és hordozható kutatási projektek — 2026-11-20"
---

# Családfák, kapcsolati hálók és hordozható kutatási projektek

A kutatási modulok beállításainál kapcsold be a **Családfa** és/vagy **Kapcsolati hálók** modult. Közös kiválasztott projektet használnak: személyek, intézmények, helyek, események, kapcsolatok, források és jegyzetek szerkeszthetők. A generációs és hálózati ábrákon mozgatás, nagyítás, fókuszálás, SVG- és kapcsolati CSV-export érhető el.

## Import és forrásmegőrzés

A GEDCOM 5.5, 5.5.1 és 7 alaprekordjai importálhatók, előnézettel és külön hozzáadás/csere lehetőséggel. Megmarad a történeti dátummegfogalmazás, az örökbefogadó/nevelő kapcsolat és a vitatott állítás megkülönböztetése. A nem támogatott média és egyedi szerkezet az eredeti forrásban marad meg; GEDCOM-export nincs. A forrásprogramból Unicode-kódolású export ajánlott.

A hálózatokhoz GEXF 1.2/1.3 és GraphML is importálható. Nézd át az előnézetet és a nem támogatott mezők jelzéseit; egy másik hálózatelemző minden tulajdonságának megőrzése nem feltételezhető.

## Hordozható projekt és szinkronizálás

A hordozható kutatási projektfájl mentésével és megnyitásával az egész szerkeszthető adathalmaz átvihető. A fájl a kísérleti **OMI-SPEC-360 Draft 0.1.0** keretet használja. A projektazonosság és a projekthez tartozó helyi adatok elkülönülnek a kézirattól. A régi gráf-JSON előnézet után importálható.

A **Projekt felhőfájlja** szinkronizált mappában vagy az operációs rendszer fájlszolgáltatójánál lévő projektfájlt kapcsol össze. Mindegyik eszközön ugyanazt a fájlt nyisd meg. A megnyitott modul rövid késleltetéssel ment, és rendszeresen ellenőrzi a külső változásokat; a szolgáltató továbbítása késhet. Ha mindkét példány módosult, az automatikus írás megáll, és választani kell a megtartandó változatról. Az egyidejű szerkesztést kerüld, mert ez a fájlkapcsolat nem végez atomi szolgáltatói verzióellenőrzést. Ez külön működik az OAuth-alapú kéziratmentéstől és a közös szerveradatbázistól.

Az **Ábra beszúrása a kéziratba** megmutatja a pontos SVG-képet és a szerkeszthető forrásjavaslatot. Beszúrás előtt erősítsd meg a forrást, vagy jelöld saját kutatási adatnak. A kézirat képpillanatképet és a jóváhagyott forrás/proveniencia adatait kapja; `.omi` fájlja nem tartalmazza a teljes szerkeszthető gráfot és a nyers privát kutatási jegyzeteket. A kutatási gráf változása nem cseréli le automatikusan a beszúrt ábrát.

További részletek: [kutatási modulok](/docs/studio/research-modules), [forrásútmutató](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/main/docs/genealogy-networks.md), [kutatásiprojekt-modell](/docs/specifications/research-project-model).
