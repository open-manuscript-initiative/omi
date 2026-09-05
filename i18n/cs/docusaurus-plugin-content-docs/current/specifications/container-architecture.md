---
id: container-architecture
title: OMI-SPEC-330 — Architektura kontejnerů
sidebar_label: Architektura kontejnerů
sidebar_position: 21
description: Definuje přenositelné uspořádání balíčku pro rukopisy z časopisu „OMI“ a související zdroje.
---

# OMI-SPEC-330 — Architektura kontejnerů

## Stav

**Návrh**

Verze: 0.1.0

**Starší identifikátor:** `OMI-SPEC-012`

**Závisí na:** OMI-SPEC-320 (formát souboru)

---

## Účel

Architektura Container definuje přenositelnou strukturu balíčku, která slouží k výměně a uchovávání rukopisu ve formátu „OMI“ spolu s jeho metadaty, historií, poznámkami, citacemi, přílohami, profily a rozšířeními.

Tento kontejner doplňuje specifikaci „[File Format](./file-format.md)“: OMI– specifikace SPEC-320 definuje logické znázornění rukopisu, zatímco tato specifikace popisuje, jak se související soubory sestavují do jednoho balíčku.

---

## Doporučené uspořádání kontejnerů

Následující struktura adresářů představuje aktuálně doporučené uspořádání. Dokud má tato specifikace status „návrh“, zůstává tato struktura prozatímní.

```text
paper.omi
├── META-INF/
│   ├── manifest.json
│   ├── mimetype
│   ├── checksums.json
│   └── signatures.json
├── manuscript/
│   ├── document.json
│   ├── metadata.json
│   ├── history.json
│   └── review.json
├── annotations.json
├── citations.json
├── anchors.json
├── provenance.json
├── media/
│   ├── images/
│   ├── figures/
│   ├── assets/
│   └── datasets/
├── profiles/
└── plugins/
```

---

## Zásady balení

Kontejner typu „OMI“ by měl:

- samo-popisující;
- nezávislé na platformě;
- lze prohlížet pomocí standardních nástrojů pro práci s archivy;
- vhodné pro validaci;
- vhodné pro dlouhodobé uchování;
- schopný zachovat neznámé přípony;
- nezávislé na konkrétním editoru či publikačním systému.

---

## `META-INF`

Adresář „`META-INF`“ obsahuje informace o správě na úrovni balíčků.

### `manifest.json`

Manifest uvádí součásti balíčku, jejich typy médií, logické role, verze a volitelné závislosti.

### `mimetype`

Soubor „`mimetype`“ určuje typ média balíčku. Jeho přesná hodnota a požadavky na umístění budou stanoveny ještě před dosažením stavu „Review Candidate“.

### `checksums.json`

Kontrolní součty umožňují implementacím odhalit náhodné změny nebo poškození dat.

### `signatures.json`

Digitální podpisy jsou v návrhu architektury volitelné. Budoucí profil integrity bude definovat požadavky na podpisové algoritmy, kanonizaci, důvěryhodnost a ověřování.

---

## Součásti rukopisu

Adresář „`manuscript`“ obsahuje hlavní strukturované reprezentace:

- `document.json` — struktura a obsah rukopisu;
- `metadata.json` — popisná, administrativní a konzervační metadata;
- `history.json` — verze a historie změn;
- `review.json` — zkontrolujte položky obsažené v balíčku.

Profil publikace nebo uchovávání může omezovat, které komponenty jsou povoleny nebo vyžadovány.

---

## Soubory týkající se vztahů

Balíček může ukládat kolekce vztahů odděleně:

- `annotations.json`;
- `citations.json`;
- `anchors.json`;
- `provenance.json`.

Oddělení těchto sbírek umožňuje jejich nezávislé zpracování a zároveň zachovává stabilní identifikátory mezi nimi.

---

## Média a zdroje

Binární soubory a zdroje vytvořené externími autory patří do adresáře `media`.

Implementace musí zabránit vzniku nebezpečných cest, záměně se spustitelným obsahem, procházení archivů a nekontrolovanému vyhodnocování vzdálených zdrojů.

Každý zabalený prvek by měl být identifikován položkou v manifestu a kontrolním součtem.

---

## Profily a doplňky

Adresář „`profiles`“ může obsahovat deklarované profily publikací, oborů, validace nebo uchovávání.

Adresář „`plugins`“ může obsahovat data rozšíření potřebná k interpretaci objektů definovaných pluginem. Zahrnutí dat rozšíření do balíčku neznamená, že každý uživatel musí spustit kód pluginu.

Procesor pro zachování souladu by měl zachovat zdroje s neznámou příponou, pokud je to možné bez rizika.

---

## Komprese a serializace

Formát fyzického archivu, způsob komprese, pořadí záznamů, kódování názvů souborů a kanonické bajtové znázornění budou definovány ještě předtím, než tato specifikace dosáhne stavu „Implementation Candidate“.

Kontejner nesmí být závislý na syntaxi cest specifické pro daný operační systém.

---

## Ověření

Ověření kontejneru by mělo zahrnovat:

- požadované řídicí soubory;
- zjevná úplnost;
- jedinečné a bezpečné trasy;
- integrita kontrolního součtu;
- deklarované typy médií;
- existence odkazovaného souboru;
- konzistence identifikátorů;
- nepodporované nebo neznámé přípony;
- maximální limity zdrojů a rozšíření.

---

## Bezpečnostní aspekty

Implementace musí s kontejnery zacházet jako s nedůvěryhodným vstupem.

Procesory by se měly bránit proti:

- procházení cesty;
- archivní bomby;
- duplicitní nebo nejednoznačné cesty;
- škodlivý aktivní obsah;
- nebezpečné symbolické odkazy;
- zavádějící mediální subjekty;
- falšování podpisu;
- neomezená dekomprese nebo analýza.

Otevření kontejneru nesmí automaticky spustit kód v něm obsažený.

---

## Historie změn

- **0.1.0** — Přeneseno z dočasné adresy `OMI-SPEC-012` na oficiální adresu `OMI-SPEC-330`; opravena nesprávná struktura souboru Markdown a rozšířeny počáteční požadavky na balíčky.

---

## Shrnutí

Architektura kontejnerů „OMI“ sdružuje sémantický rukopis a související zdroje do přenositelné, kontrolovatelné a uchovatelné jednotky.

Definuje strukturu a integritu na úrovni balíčku, přičemž sémantiku rukopisu ponechává na formátu souboru „OMI“ a souvisejících specifikacích modelů.
