---
title: OMP Integrační plugin
sidebar_label: OMP Plugin
slug: /integrations/omp-plugin
---

# OMI OMP Integrační plugin

**Plugin pro integraciOMI s OMP** propojuje Open Monograph Press (OMP) verze 3.5.x s Open Manuscript Studio prostřednictvím integrace OMI API. OMP zůstává hlavním systémem pro pracovní postupy nakladatelství, zasílání monografií, kola recenzí, přidělování recenzí a ukládání soukromých souborů; Studio komunikuje výhradně prostřednictvím podepsaných integračních koncových bodů na úrovni aplikace.

## Aktuální verze

**Stabilní verze:** `v1.2.6`  
**Cílová platforma:** OMP 3.5.x  
**Licence:** GNU GPL v3.0

### Stáhnout

- **[Download OMP plugin v1.2.6 — ZIP](https://github.com/open-manuscript-initiative/omi-omp-plugin/releases/download/v1.2.6/studioIntegration-omp-3.5-v1.2.6.zip)**
- **[Download OMP plugin v1.2.6 — TAR.GZ](https://github.com/open-manuscript-initiative/omi-omp-plugin/releases/download/v1.2.6/studioIntegration-omp-3.5-v1.2.6.tar.gz)**
- [SHA-256 checksums](https://github.com/open-manuscript-initiative/omi-omp-plugin/releases/download/v1.2.6/SHA256SUMS.txt)
- [Latest GitHub release](https://github.com/open-manuscript-initiative/omi-omp-plugin/releases/latest)

Archiv vydání používá adresář `studioIntegration/` jako kořenový adresář balíčků pro instalaci kompatibilní s PKP.

## Hlavní funkce

Konektor OMP podporuje monografie a zachovává sémantiku pracovního postupu specifickou pro OMP, místo aby považoval OMP za OJS s odlišnými štítky. Mezi současné oblasti integrace patří:

- podepsané uvedení na Open Manuscript Studio;
- výslovné režimy pro editora, autora a recenzenta;
- rozsahy rolí s minimálními oprávněními;
- mapování identit v tisku a monografiích;
- nativní OMP 3.5 metadata založená na repozitáři a počet zobrazení přispěvatelů;
- chráněný výpis odeslaných souborů a přenos binárních dat;
- architektura zohledňující jednotlivé komponenty pro kapitoly a další části knihy;
- přístup recenzenta k souboru je vázán na konkrétní recenzní úkol PKP;
- vlastní vyhodnocování formulářů PKP a vytrvalost v reakcích;
- nahrávání příloh recenzentů v rámci konkrétního úkolu;
- nahrání revize autora s rozsahem na celou revizi;
- fáze revize „internal-review“ a „external-review“;
- detekce nativních funkcí pro chování kontroly specifické pro OMP;
- podepsaná připomínka k přezkumu / zpětná vazba k formuláři;
- projekce hodnotitele omezená na jedinou přidělenou studii, s vyloučením údajů o rodičovské monografii, sourozenecké studii a totožnosti přispěvatele;
- Nativní OMP 3.5 – komplexní ověření spouštění, souborů, kontrolních formulářů, oprav, oddělené zpětné vazby a podepsaného zápisu.

OMP Verze 3.5 v současné době uvádí, že hostitelská aplikace nepodporuje přizpůsobitelná doporučení recenzentů. Konektor proto nevytváří identifikátory doporučení ve stylu OJSa do komentářů nezapisuje syntetické hodnoty doporučení.

## Instalace

Archiv nainstalujte prostřednictvím rozhraní pro správu pluginů na adrese OMP (pokud je to podporováno), nebo jej rozbalte následujícím způsobem:

```text
plugins/generic/studioIntegration/
```

Po aktivaci pluginu proveďte následující nastavení:

- **URL studia** — základní adresa URL Open Manuscript Studio;
- **ID instalace** — stabilní identifikátor instalace systému OMP;
- **Sdílený tajný klíč** — integrační tajný klíč na straně serveru sdílený se Studiem;
- **Životnost tokenu** — krátká životnost při ověření spuštění.

V produkčním prostředí by se měl používat protokol HTTPS. Aplikace Studio nesmí dostávat přímé přihlašovací údaje k databázi ani mít soukromý přístup k souborovému systému OMP.

## OMP-specifický model pracovního postupu

Tento konektor zachovává koncepty jazykaOMP, včetně:

- lisy;
- monografie a sborníky;
- kapitoly a součásti publikace;
- přispěvatelé na úrovni knih a na úrovni komponent;
- role autora, redaktora, překladatele a autora kapitol;
- fáze interního a externího přezkumu;
- konkrétní kola hodnocení a úkoly v rámci hodnocení;
- sledovatelné úpravy autora a přílohy recenzentů.

Dokončení recenzenta má i nadále rozhodující význam v nativním pracovním postupu OMP, protože toto dokončení spouští další funkce PKP, jako jsou oznámení, protokolování a finalizace stavu pozvánky.

## Architektura a API

Konektor využívá integrační profil „OMI“:

```text
omi-integration/1/omp
```

Související dokumentace:

- [Integration Architecture](./architecture.md)
- [OMI Integration API v1](./integration-api-v1.md)
- [OMP Integration Profile v1](./omp-profile-v1.md)
- [Integration Implementation Status](./implementation-status.md)
- [Studio Deployment Modes](./studio-deployment-modes.md)

## Bezpečnostní model

Implementace respektuje hranice repozitáře a pracovních postupů PKP, místo aby obcházela vnitřní strukturu OMP. Mezi důležité kontrolní mechanismy patří:

- krátkodobá tvrzení o spuštění HMAC-SHA256;
- vázání a knihařské vázání;
- oprávnění vázaná na roli;
- ověření přiřazení recenzenta;
- ověřování aktuální fáze a kola posuzování u nahraných revizí;
- Oprávnění PKP `ReviewFilesDAO` pro zdrojové soubory viditelné pro recenzenty;
- nativní sémantika ukládání a ověřování v jazyce`Repo::submissionFile()`;
- ověření žánru souboru na základě aktuálních tiskových zpráv;
- dokončené revizní úkoly se považují za pouze pro čtení;
- žádný přímý přístup mezi databázemi.

## Dokumentace o kompatibilitě a shodě s normami PKP

Repozitář pluginů dokumentuje původ API a přetrvávající hranici mezi technickou kompatibilitou a oficiálním přijetím ze strany PKP:

- [PKP compatibility notes](https://github.com/open-manuscript-initiative/omi-omp-plugin/blob/main/PKP_COMPATIBILITY.md)
- [Security policy](https://github.com/open-manuscript-initiative/omi-omp-plugin/blob/main/SECURITY.md)
- [Installation guide](https://github.com/open-manuscript-initiative/omi-omp-plugin/blob/main/INSTALL.md)

Zařazení do oficiální galerie pluginů stále vyžaduje posouzení správcem PKP a testování na úrovni instalace na podporované, neupravené verzi OMP.

## Zveřejnění informací o vývoji s využitím umělé inteligence

Při vývoji tohoto pluginu byla ve značné míře využita generativní umělá inteligence v oblastech architektury, implementace, analýzy PKP API, bezpečnostního posouzení, CI/CD, testování a dokumentace. Za kód odeslaný nebo vydaný uživatelům nadále nesou odpovědnost lidští správci a chování závislé na PKP se ověřuje na základě aktuálního zdrojového kódu OMP/PKP a výsledků testů.

- [AI contribution declaration](https://github.com/open-manuscript-initiative/omi-omp-plugin/blob/main/AI-DECLARATION.md)

## Zdrojová a projektová dokumentace

- [Source repository](https://github.com/open-manuscript-initiative/omi-omp-plugin)
- [README](https://github.com/open-manuscript-initiative/omi-omp-plugin/blob/main/README.md)
- [Installation guide](https://github.com/open-manuscript-initiative/omi-omp-plugin/blob/main/INSTALL.md)
- [PKP compatibility](https://github.com/open-manuscript-initiative/omi-omp-plugin/blob/main/PKP_COMPATIBILITY.md)
- [Security](https://github.com/open-manuscript-initiative/omi-omp-plugin/blob/main/SECURITY.md)
- [Changelog](https://github.com/open-manuscript-initiative/omi-omp-plugin/blob/main/CHANGELOG.md)
- [License](https://github.com/open-manuscript-initiative/omi-omp-plugin/blob/main/LICENSE)
- [All releases](https://github.com/open-manuscript-initiative/omi-omp-plugin/releases)

## Stav PKP

Tento plugin byl vyvinut v souladu se současnými postupy OMPa standardy PKP 3.5 pro repozitáře API, avšak jeho dostupnost na této webové stránce sama o sobě **neznamená** oficiální schválení v rámci PKP Plugin Gallery. Projekt výslovně rozlišuje mezi kompatibilitou implementace, otestovanou interoperabilitou a formálním schválením ze strany PKP.
