---
title: "Kiadványszerkesztő: kötetek, folyóiratszámok és sablonok"
sidebar_label: "Kiadványszerkesztő: kötetek, folyóiratszámok és sablonok"
description: "Kiadványszerkesztő: kötetek, folyóiratszámok és sablonok — 2026-11-20"
---

# Kiadványszerkesztő: kötetek, folyóiratszámok és sablonok

A tördelés helye: **Publikálás → Kiadványszerkesztő**. A szerzői munkatérben a címadatok, közreműködők és a kézirat szerkezete maradnak. A publikálási eszközök öt feladatcsoportban érhetők el: profilok és kiadó, stílusok és sablonok, ellenőrzések, fájlok és export, beküldés és publikálás. A csoportváltás megőrzi a megkezdett űrlapokat.

## Kiadvány létrehozása és azonosítói

Az **Új kötet / folyóiratszám** űrlapon válassz típust és igény szerint hozzá illő sablont. ISBN, eISBN, nyomtatott ISSN, eISSN, DOI és egyéb azonosítók mindkét típusnál együtt is megadhatók. A folyóiratszámnál az ISSN-ek kerülnek előre. Ugyanezek a mezők később a címadatoknál módosíthatók; az impresszumsablon a kitöltött azonosítókat használja.

## Kiadványformátum újrafelhasználása

A **Kiadványszerkesztő → Kiadványsablonok** részen meglévő kiadványra alkalmazhatsz sablont, vagy új sablonként mentheted az aktuális formátumot. Beépített kezdősablon a könyvsorozat A5-ös (148 × 210 mm) és a folyóirat 150 × 240 mm-es formátuma. Saját sablon frissíthető, törölhető, illetve ellenőrzött borítóképeivel együtt `.omi-template.json` fájlként átvihető más eszközre.

A sablon lapméretet, margókat, tipográfiát, bekezdésstílusokat, kiadói szabályokat, borítót és címnegyedet tárol. Alkalmazása lecseréli a célkiadvány formátumát és borítótervét, de megőrzi a kézirat szövegét és saját metaadatait. A visszatérő kiadói és periodikaadatok csak üres mezőket töltenek ki; az ISBN, DOI és év nem válik a következő kiadvány alapértékévé. A `{{title}}`, `{{publicationYear}}`, `{{isbn}}` és hasonló helyőrzők alkalmazáskor a célkiadvány adatait kapják.

A saját sablon az adott eszközön tárolódik; az export/import viszi át másik eszközre. Az alkalmazott formátum külön pillanatképként bekerül a kiadvány `.omi` fájljába. Az eredeti sablon későbbi módosítása nem változtatja meg a korábbi kiadványokat. A HTML/PDF és IDML kiadványexport a mentett formátumot használja. A sablon nem másolja át a kézirat szövegét és egyedi tartalmi kerettörténeteit.

## A teljes borítóív szerkesztése

A **Borítók és címnegyed** részben a borító külső és belső oldala, valamint külön a szennycím, sorozati oldal, címoldal és impresszum szerkeszthető. A borító egyetlen fizikai ív: kívül hátlap/gerinc/előlap, belül belső előlap/kötési terület/belső hátlap. Szélessége két vágott lapszélesség és a gerinc összege. A keretek közös koordinátákat és rétegsorrendet használnak, átnyúlhatnak a hajtásvonalakon. A segédvonalak nem kerülnek az exportba.

Szöveg- és képkeret helyezhető el, mozgatható, méretezhető és forgatható; alakja, kitöltése, körvonala és rétege külön állítható. A keretben lévő kép kivágása, eltolása, mérete és forgatása független a kerettől. Feltöltés, beillesztés és fájlrátétel is használható. A mértékegység mm, pica vagy DTP-pont lehet; váltása megőrzi a fizikai méretet, a betűméret továbbra is pontban szerepel.

A **Gerinc és papír** számítása: `felfelé kerekített(belívoldalak / 2) × papírvastagság + kötési ráhagyás`. Az oldalszám származhat az élő tördelésből és a bekapcsolt címnegyedből, vagy megadható kézzel. A borítóoldalak nem számítanak bele. Gyártói papírbeállítások, egyedi papíradatok és kézi gerincszélesség is választható. A becsült értéket a nyomdával egyeztetni kell; kifutó, fülek és ívkilövés nem része ennek a munkafolyamatnak.

A bekapcsolt borítóoldalak teljes ívként kerülnek a HTML/PDF-be, a címnegyed a vágott lapméretet használja. Nyomtatás előtt ellenőrizd a létrejött PDF-et és a betűkészleteket.

## Tördelt fájlok átadása az OJS-nek

Meglévő, még nem publikált, **OJS Production** szakaszban lévő beküldéshez személyes szerkesztői hozzáférés és megfelelő OJS-bővítmény szükséges; a legutóbbi dokumentált kiadás **1.8.7**. Ellenőrizd a célt, válassz HTML-t és/vagy egy PDF-változatot, készítsd elő a kiválasztott kimeneteket és nézd át őket. Ezután erősítsd meg a pontos fájlokat és célt.

A szöveg, stílus vagy kiválasztott szerver módosítása érvényteleníti az előkészítést. Az OJS saját jogosultságait és munkafolyamat-állapotát ellenőrzi. Minden fájl külön visszaigazolást kap: részleges siker esetén ellenőrizd az OJS-t, és csak a hiányzó fájlt készítsd elő újra. Az átadás nem publikálja a cikket. A munkafolyamat irányítása az OJS-nél marad; ez a funkció nem jelent azonos OMP-támogatást.

A Stúdió saját, hitelesített kiadványainál a szöveggondozás, tördelés, korrektúra és végső jóváhagyás külön szakasz. A jóváhagyás a pontos változathoz és fájlhoz kötött; csere esetén érvényét veszti. Ez a munkafolyamat Preview, telepítési és elfogadási feltételekkel.

Részletek: [borítószerkesztés](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/main/docs/publication-covers-title-pages.md), [sablonok](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/main/docs/publication-templates.md), [OJS-átadás](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/main/docs/ojs-live-publication.md).

Kapcsolódó útmutatók: [jegyzetek és formázás](/docs/studio/notes-and-formatting), [kutatási projektek](/docs/studio/research-projects).

## November 25-i interoperabilitási fejlesztés

A támogatott Word-képgeometria és képkivágás, a natív OMML-képletek, szemantikus REF mezők és lektorálási annotációk regressziós ellenőrzése bővült. Import és export után ellenőrizze a tördelést és a lektorálási adatokat; teljes Word-azonosságot nem állítunk. A kiadványszerkesztő a szerzői munkatérrel közös adaptív szövegprojekciós gyorsítótárat használ.

[Adaptív memóriakezelés](/docs/studio/performance-and-memory).
