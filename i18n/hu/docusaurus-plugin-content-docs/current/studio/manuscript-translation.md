---
id: manuscript-translation
title: Kéziratok fordítása és ellenőrzése
sidebar_label: Kéziratfordítás
description: Nyelvi változatok, forrásszöveg-illesztés, fordítói ellenőrzés és biztonságos export az Open Manuscript Stúdióban.
---

# Kéziratok fordítása az Open Manuscript Stúdióban

A **Fordítások** munkafelület a kéziratok nyelvi változatainak kezelésére szolgál úgy, hogy **az eredeti szöveg szerkesztését soha nem zárolja**. A fordítás és a forrás között nyomon követhető kapcsolat, ellenőrzési állapot és hordozható előzmény marad fenn.

## A munkafolyamat

1. Nyissa meg a kéziratot, majd válassza a **Kézirat → Fordítások** menüpontot.
2. Válassza ki a célnyelvet (például `de`, `en-GB`, `hu`). A szerkesztő felületi nyelve nem korlátozza a választható kéziratnyelveket.
3. Válassza az egész kéziratot vagy egy szakaszt. Ugyanarra a nyelvre több külön fordításváltozat is létrehozható.
4. Szerkessze a célszöveget és a fordítói megjegyzéseket, majd jelölje meg, hogy **egyenértékű fordításról** vagy **tudatos átdolgozásról** van-e szó.
5. A fordítást csak saját ellenőrzése után jelölje **ellenőrzöttnek**. A gépi fordítás kezdetben mindig tervezet.
6. Ha megváltoztatja az eredeti szöveget, a megfelelő fordítások **elavultként** vagy **hiányzó forrásúként** jelenhetnek meg. A **Forrásillesztés frissítése** megtartja a korábbi fordítást, frissíti a forráshivatkozást, és az érintett szakaszokat újraellenőrzendővé teszi. A megszűnt forráskapcsolatok külön archiválhatók.
7. A **Párhuzamos szöveg HTML** és a **Célnyelvi szöveg HTML** export a támogatott szövegegységeknél teljes, naprakész, besorolt és ellenőrzött fordítást követel meg.

Beállított DeepL-integráció esetén a fordítási előnézet megvizsgálása után a **Mentés nyelvi változatként** művelet ugyanebbe a kéziratmodellbe menti az eredményt. Az előnézet a kérés indításakor rögzített forráshoz kapcsolódik, így nem írhatja felül véletlenül egy másik megnyitott dokumentum fordítását. Külső szolgáltatás használata megfelelő konfigurációt és jogosultságot igényel.

## Mi marad meg a dokumentumban?

A Stúdió kísérleti `studio-translation-0.1` profilja az adatokat a `urn:omi:studio:translation:1` névterű kiterjesztésben tárolja. A hordozható OMI-fájlokban, a kézirat előzményeiben és a visszaállítás során megmaradnak a célnyelvek, forráskapcsolatok, fordítások, minősítések, ellenőrzések és a rendelkezésre álló eredetadatok.

A Stúdió felismeri, hogy a fordítás **aktuális**, **elavult** vagy **hiányzó forráshoz kapcsolódik-e**. Egy más témájú kéziratmódosítás önmagában nem teszi elavulttá valamennyi fordítást.

## A jelenlegi változat korlátai

A kéziratcím, alcím, kivonat, kulcsszavak, szakaszcímek, közönséges szövegek és egyes annotációk, képaláírások, illetve helyettesítő szövegek fordíthatók. A bibliográfiát, hivatkozásjelölőket, kódot, képleteket, táblázatcellákat és diagramadatokat a Stúdió nem alakítja automatikusan fordítandó prózaszöveggé.

A HTML-export **szöveges ellenőrző példány**, nem teljes értékű szerkesztett, publikált célnyelvi kiadás. A fordítást figyelembe vevő DOCX/PDF/JATS kiadványkészítés, az önálló célnyelvi kéziratverziók és a bonyolult több-többhöz szövegillesztés további fejlesztést igényelnek. A korábbi szerveroldali változatokból hiányzó forrás- vagy ellenőrzési bizonyítékot a rendszer nem találja ki.

## Szabványosítás

Az [OMI-SPEC-170 — Translation Model](https://openmanuscript.org/docs/specifications/translation-model/) jelenleg **0.1.0 Draft szabványtervezet**. Ettől különbözik a Stúdióban már működő, **kísérleti megvalósítási profil**. Sem a kezelőfelület, sem ez az útmutató nem jelent hivatalos szabványmegfelelőségi tanúsítást.

A [Stúdió technikai profiljában](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/main/docs/omi-spec-170-translation-model.md) olvashatók az adatmezők és a tesztelési részletek. A szabvány hiteles nyelve az angol.
