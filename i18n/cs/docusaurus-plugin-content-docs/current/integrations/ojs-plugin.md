---
title: OJS Integrační plugin
sidebar_label: OJS Plugin
slug: /integrations/ojs-plugin
---

# OMI OJS Integrační plugin

**Plugin pro integraciOMI a OJS** propojuje Open Journal Systems (OJS) verze 3.5.x s platformou Open Manuscript Studio prostřednictvím integrace OMI API. OJS zůstává hlavním systémem pro řízení pracovního toku časopisu, identifikaci autorů, přidělování recenzí a chráněné soubory; Studio přímo nečte databázi OJS ani úložiště soukromých souborů.

## Aktuální verze

**Stabilní verze:** `v1.2.1`  
**Cílová platforma:** OJS 3.5.x  
**Licence:** GNU GPL v3.0

### Stáhnout

- **[Download OJS plugin v1.2.1 — ZIP](https://github.com/open-manuscript-initiative/omi-ojs-plugin/releases/download/v1.2.1/studioIntegration-ojs-3.5-v1.2.1.zip)**
- **[Download OJS plugin v1.2.1 — TAR.GZ](https://github.com/open-manuscript-initiative/omi-ojs-plugin/releases/download/v1.2.1/studioIntegration-ojs-3.5-v1.2.1.tar.gz)**
- [SHA-256 checksums](https://github.com/open-manuscript-initiative/omi-ojs-plugin/releases/download/v1.2.1/SHA256SUMS.txt)
- [Latest GitHub release](https://github.com/open-manuscript-initiative/omi-ojs-plugin/releases/latest)

Archiv vydání obsahuje plugin v kořenovém adresáři balíčku `studioIntegration/`, jak to vyžadují postupy instalace pluginů PKP.

## Hlavní funkce

Tento konektor umožňuje spouštění aplikace Studio s ohledem na role a poskytuje podepsaný přístup k integraci pro pracovní postupy autorů, editorů a recenzentů v rámci platformyOJS. Mezi implementované oblasti integrace patří:

- podepsaná, krátkodobá tvrzení o spuštění;
- výslovné režimy pro autory, redaktory a recenzenty;
- rozsahy rolí s minimálními oprávněními;
- OJS metadata k odeslaným příspěvkům a převod přispěvatelů;
- vyhledávání kandidátů na recenzenty pro redaktory;
- chráněný výpis odeslaných souborů a přenos binárních dat;
- oprávnění k souboru recenzenta vázané na konkrétní úkol v rámci recenzního řízení OJS;
- nativní OJS čtení z formuláře a zápis odpovědi;
- komentáře k recenzi viditelné pro autora a pouze pro redaktora;
- omezení přístupu recenzentů v rámci dvojitě slepého hodnocení;
- zápis s HMAC podpisem mezi servery;
- konzistentní metadata o žánru souboru pro výběr zdrojového souboru;
- nativní OJS 3.5 komplexní ověření přístupu anonymních recenzentů, povinné recenzní formuláře, opravy rukopisu, oddělená zpětná vazba a podepsané recenzní posudky.

Prohlášení při spuštění recenzenta záměrně nemají rozsah platnosti pro přispěvatele ani recenzenta. Soubory recenzenta podléhají omezením daným přiřazením recenze v systému PKP, nikoli obecným oprávněním k souborům na úrovni příspěvku.

## Instalace

Archiv nainstalujte pomocí rozhraní pro nahrávání pluginů na stránce OJS (je-li to podporováno), nebo jej rozbalte následujícím způsobem:

```text
plugins/generic/studioIntegration/
```

Po aktivaci pluginu nakonfigurujte URL Studia, identifikátor instalace, sdílený integrační klíč a dobu platnosti spouštěcího tokenu. V produkčním prostředí by se mělo používat HTTPS.

Databáze služby „OJS“ a aplikace Studio zůstávají oddělené. Neposkytujte aplikaci Studio přímý přístup k databázi služby „OJS“ ani soukromý přístup k souborovému systému.

## Architektura a API

Konektor využívá integrační profil „OMI“:

```text
omi-integration/1/ojs
```

Podrobnější dokumentace k sadě nástrojů „API“ a k profilům je k dispozici zde:

- [Integration Architecture](./architecture.md)
- [OMI Integration API v1](./integration-api-v1.md)
- [OJS Integration Profile v1](./ojs-profile-v1.md)
- [OJS Manuscript File Import](./ojs-file-import.md)
- [Integration Implementation Status](./implementation-status.md)

## Bezpečnostní model

Operace citlivé z hlediska bezpečnosti se provádějí prostřednictvím OJS/PKP na úrovni aplikací APIa služeb úložišť. Konektor využívá krátkodobá podepsaná tvrzení pro interaktivní spouštěcí toky a požadavky na služby podepsané algoritmem HMAC-SHA256 pro chráněné zpětné zápisy.

Návrh se řídí těmito hranicemi:

- OJS nadále představuje autoritativní zdroj pro pracovní postupy a přidělování úkolů k posouzení;
- Studio přijímá pouze data s výslovně vymezeným rozsahem;
- přístup recenzenta je vázán na konkrétní úkol;
- soukromé soubory se přenášejí až po autorizaci ze strany OJS;
- tajemství zůstávají na straně serveru;
- Zápis revize se ověřuje podle aktuálního přiřazení typu „OJS“ a definice formuláře.

## Zveřejnění informací o vývoji podporovaném umělou inteligencí

Při vývoji tohoto pluginu byla v oblasti architektury, implementace, analýzy PKP API, bezpečnostního posouzení, CI/CD, testování a dokumentace využita významná podpora generativní umělé inteligence. Projekt zachovává výslovnou lidskou odpovědnost za odevzdaný kód a ověřuje chování závislé na PKP na základě aktuálního zdrojového kódu PKP/OJS a výsledků testů.

Repozitář obsahuje výslovné prohlášení o podílu umělé inteligence pro účely recenze prováděné PKP:

- [AI contribution declaration](https://github.com/open-manuscript-initiative/omi-ojs-plugin/blob/main/AI-DECLARATION.md)

## Zdrojová a projektová dokumentace

- [Source repository](https://github.com/open-manuscript-initiative/omi-ojs-plugin)
- [README](https://github.com/open-manuscript-initiative/omi-ojs-plugin/blob/main/README.md)
- [Changelog](https://github.com/open-manuscript-initiative/omi-ojs-plugin/blob/main/CHANGELOG.md)
- [License](https://github.com/open-manuscript-initiative/omi-ojs-plugin/blob/main/LICENSE)
- [All releases](https://github.com/open-manuscript-initiative/omi-ojs-plugin/releases)

## Stav PKP

Tento plugin je navržen v souladu se specifikacemi PKP/OJSu 3.5 APIa v současné době se připravuje k posouzení ze strany PKP. Zveřejnění na webu OMI a dostupnost jako instalovatelná verze **neznamenají**, že byl plugin již přijat do oficiální galerie pluginů PKP. Oficiální zařazení do galerie podléhá posouzení správcem PKP a ověření kompatibility.
