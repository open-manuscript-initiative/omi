---
title: Kódaláírási szabályzat
sidebar_label: Kódaláírási szabályzat
---

# Kódaláírási szabályzat

**Frissítve: 2026. november 10.**

A választott Windows-csatorna a **Microsoft Store MSIX**. A Microsoft
2026. november 10-én visszaigazolta a beküldés feldolgozását és a Store-beli
elérhetőséget; a vásárlóknál való megjelenés akár két órát is igénybe vehet.
Az IARC korhatár-besorolás november 9-én beküldött kérdőívének eredménye
szintén érvénybe lépett. A pontos korhatárkategória az értesítésen nem látható.
A kiadott Store-csomag aláírásának ellenőrzése, a valós eszközön végzett
telepítés és az adatmegőrző frissítés tesztje még hátravan. A Store-folyamat
nem igényel Azure-előfizetést. A termék saját Store-URL-jét még nem
ellenőriztük, ezért közvetlen áruházi linket nem közlünk.

A SignPath Foundation korábbi jelentkezését az üzemeltető közlése szerint
elutasították. A SignPath nem aktív aláíró szolgáltató; támogatást vagy
tanúsítványt nem állítunk. A közvetlen EXE/MSI telepítők aláírását a Store
nem végzi el.

A kiadáshoz pontos forrás-, csomag- és hashazonosság, ellenőrzött aláírás,
adatmegőrző telepítés/frissítés, minimális hozzáférés, MFA és kifejezett kiadói
jóváhagyás szükséges. Titkos kulcs, kézirat vagy adatbázistartalom nem kerülhet
Gitbe, naplóba vagy aláírási csomagba. Gyanús hozzáférés esetén a kiadást fel kell
függeszteni. Az MSIX nem váltja ki automatikusan a meglévő kiadási kapukat.

[RC-állapot és build](../studio/releases/1.0.0-rc.1.md).
[A teljes, aktuális angol szabályzat](https://openmanuscript.org/docs/governance/code-signing-policy/).
