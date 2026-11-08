---
title: Automatikus szerverjegyzék
description: A nyilvános Open Manuscript Studio-szerverek automatikus megjelenése és napi frissítése.
---

A [Studio-szerverek oldala](/servers) az elmúlt 48 órában ellenőrzött jelzést adó nyilvános példányokat sorolja fel. A kártyákon látható a szerver címe, verziója és utolsó jelzése; az oldal a lista adatainak frissítési időpontját is megmutatja.

A nyilvános, éles Studio-szerverek a már meglévő saját HTTPS-címükkel automatikusan regisztrálnak. Nem kell külön regisztráció, DNS TXT-bejegyzés, token vagy időzített feladat. A központ friss kihívással ellenőrzi a távoli szerver saját Studio-azonosító végpontját, és a nyilvános adatokat is onnan olvassa be. A központi szerver a saját bejegyzését közvetlenül kezeli, önmagának küldött hálózati kérés nélkül.

A szerverek indulás után, majd körülbelül 24 óránként jeleznek. A honlap megnyitáskor lekéri a központi listát, és a nyitva hagyott oldalon is 24 óránként automatikusan újratölti az adatokat. Ehhez nem kell honlapszerkesztés, új build, deploy vagy kézi böngészőfrissítés. A 48 órás türelmi idő lehetővé tesz egy megkésett napi jelzést. A régi jelzésű szerver a következő listafrissítéskor kimarad; sikeres jelzés után ismét megjelenik.

A helyi, fejlesztői és HTTP-példányok nem kerülnek automatikusan a listába. A zárt éles telepítések kikapcsolhatják a részvételt. Kéziratok, fiókadatok és hitelesítő adatok nem jelennek meg. A friss jelzés az azonosító végpont elérhetőségét mutatja; nem valós idejű garancia minden funkció működésére.

A megvalósítást először a központi API-n, a részt vevő Studio API-kon és a honlapon élesíteni kell. Ezután a regisztráció és a napi frissítés külön üzemeltetői beállítás nélkül működik. A korábbi kézi regisztrációk továbbra is használhatók. Az élesítés és a zárt telepítések kikapcsolásának részleteit az [üzemeltetői dokumentáció](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/main/server/SERVER_DIRECTORY.md) tartalmazza.

A Studio szerverválasztójának minden megnyitása közvetlenül lekéri az aktuális központi listát, kikapcsolt böngésző-gyorsítótárral. Bezárás és újranyitás után új lekérés indul. A választó nem várja meg a honlap napi frissítését. Ha a központi lista nem érhető el, a beépített tartalék címet ellenőrizetlen állapotjelzés kíséri.
