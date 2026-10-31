---
id: core-snapshot-review-profile
title: Alapmodellek vizsgálata
sidebar_label: Alapmodellek vizsgálata
---

# Az alapmodellek vizsgálati profilja

A 0.1.0-s profil kísérleti Draft, még nincs jóváhagyva. A meglévő kézirat aktuális állapotából vizsgál egy szűkített adatnézetet; nem új OMI-fájlformátum.

Vizsgálja az élő objektumok egyedi azonosítóit, a szakaszhierarchiát, a szülőhivatkozásokat, a blokktípusokat, a cím, a nyelv, az Unicode-szöveg, az időpontok és a kulcsszavak egyes szabályait. A szerkesztési profil elfogadja az üres címet, az adatcsereprofil nem. A teljes hivatkozási, verziózási, jogosultsági, megjelenítési és akadálymentességi vizsgálat külön feladat.

Az ellenőrző nem módosítja a kéziratot, nem tölt le külső forrást és nem futtat bővítménykódot. Alapkorlátai: 100 000 JSON-csomópont, 64 mélységi szint, 200 megállapítás. Az ismeretlen szemantika és a korlát elérése hiányos eredményt ad. A megállapítás kódot és adatbeli helyet tartalmaz, kéziratrészletet nem.

A közös 22 tesztpélda csak részleges követelménylefedettség. A sikeres futás nem tanúsítja mind a 66 alapkövetelmény teljesítését. A jelentés a forrásállapothoz kötött, és szerkesztés után elavul.


[English source](https://openmanuscript.org/docs/specifications/core-snapshot-review-profile/)
