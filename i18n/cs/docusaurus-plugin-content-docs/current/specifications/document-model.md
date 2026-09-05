---
id: document-model
title: OMI-SPEC-100 — Model dokumentu
sidebar_label: Model dokumentu
sidebar_position: 10
---

# OMI-SPEC-100 — Model dokumentu

## Stav

**Návrh**

Verze: 0.1.0

**Starší identifikátor:** `OMI-SPEC-001`

---

# Účel

Projekt „Open Manuscript Initiative“ (OMI) definuje sémantický model dokumentu navržený speciálně pro vědeckou komunikaci.

Na rozdíl od tradičních textových editorů odděluje jazyk OMI vědecký význam od vizuální prezentace. Autoři popisují *co* daná informace vyjadřuje, nikoli *jak* by měla vypadat.

Model dokumentu slouží jako společný základ pro tvorbu, recenzní řízení, publikování, uchovávání a automatizované zpracování.

---

# Zásady návrhu

Model dokumentu je založen na následujících principech:

- Nejprve sémantika
- Nezávislé na platformě
- Čitelné pro člověka
- Lze zpracovat strojově
- Rozšiřitelné
- Kompatibilní
- Přístupné
- S dlouhou trvanlivostí

---

# Vrstvená architektura

Dokumentový model „OMI“ se skládá z několika vrstev.

```text
┌──────────────────────────────────────────────┐
│               Discipline Profiles            │
├──────────────────────────────────────────────┤
│               Scholarly Objects              │
├──────────────────────────────────────────────┤
│              Core Document Model             │
└──────────────────────────────────────────────┘
```

Základní model dokumentu zůstává ve všech oborech neměnný.

Vyšší vrstvy rozšiřují základní specifikaci, nikdy ji však nenahrazují.

---

# Základní model dokumentu

Každý rukopis v systému „OMI“ obsahuje společnou sadu sémantických objektů.

## Metadata

- Název
- Podtitul
- Autoři
- Členství
- ORCID
- Abstrakt
- Klíčová slova
- Jazyk
- Licence
- Financování
- Trvalé identifikátory

---

## Struktura dokumentu

- Oddíl
- Pododdíl
- Odstavec
- Citát
- Seznam
- Obrázek
- Tabulka
- Popisek
- Rovnice
- Příloha

---

## Vědecké objekty

- Citace
- Seznam literatury
- Poznámka pod čarou
- Závěrečná poznámka
- Odkaz
- Datový soubor
- Software
- Doplňkový materiál
- Komentář k recenzi
- Anotace

---

# Profily oborů

Různé vědecké obory vyžadují specializované sémantické objekty.

OMI rozšiřuje základní dokumentový model o **profily oborů**.

Profil přidává nové typy objektů, pravidla ověřování, metadata a chování při exportu, aniž by docházelo ke změnám v základním modelu dokumentu.

Mezi příklady patří:

- Historie
- Teologie
- Lingvistika
- Matematika
- Fyzika
- Chemie
- Biologie
- Medicína
- Informatika
- Inženýrství
- Ekonomika
- Právo

---

# Příklad: Profil historie

Profil „Historie“ představuje oborově specifické sémantické objekty, jako například:

- Archivní zdroj
- Historická osobnost
- Historické místo
- Historická událost
- Zdroj rukopisu
- Souhrn
- Kritický aparát
- Diplomatický přepis

---

# Příklad: Profil matematiky

Profil „Matematika“ rozšiřuje tento model o:

- Definice
- Axiom
- Věta
- Lema
- Důsledek
- Důkaz
- Vzorec
- Registr symbolů

---

# Příklad: Profil s fyzikou

Mezi další sémantické objekty patří:

- Rovnice
- Fyzikální konstanta
- Měření
- Jednotka
- Nástroj
- Experiment
- Simulace

---

# Příklad: Profil chemie

Mezi další sémantické objekty patří:

- Molekula
- Sloučenina
- Reaction
- Krystalová struktura
- Spektrum
- Chemický vzorec

---

# Příklad: Profil biologie

Mezi další sémantické objekty patří:

- Druh
- Taxonomické zařazení
- Gen
- Bílkovina
- Sekvence DNA
- Vzorek

---

# Příklad: Profil léku

Mezi další sémantické objekty patří:

- Klinická studie
- Skupina pacientů
- Zásah
- Výsledek
- Schválení etickou komisí
- Kontrolní seznam CONSORT

---

# Více profilů

Vědecký výzkum má stále více mezioborový charakter.

Rukopis v rámci programu „OMI“ proto může současně využívat více oborových profilů.

Příklad:

```text
History
+ Computer Science
+ Linguistics
```

nebo

```text
Biology
+ Computer Science
+ Statistics
```

Každý profil přidává další sémantické objekty, přičemž zůstává plně kompatibilní s jádrovým dokumentovým modelem.

---

# Architektura pluginů

Profily disciplín jsou implementovány jako pluginy.

```text
OMI Core

    │

    ├── History Profile

    ├── Mathematics Profile

    ├── Physics Profile

    ├── Medicine Profile

    ├── Law Profile

    └── Custom Profile
```

Každý plugin může definovat:

- další sémantické objekty
- metadata
- validační pravidla
- exportní mapování
- rozšíření uživatelského rozhraní

aniž by došlo ke změnám v jádru OMI.

---

# Objektově orientovaný model

Rukopis v jazyce „OMI“ se skládá ze sémantických objektů.

```text
Document
│
├── Metadata
├── Sections
├── Paragraphs
├── Figures
├── Tables
├── Citations
├── Bibliography
├── Annotations
├── Review Layer
└── Discipline Objects
```

Každý objekt má:

- jedinečný identifikátor
- sémantický typ
- metadata
- vztahy
- historie verzí

---

# Sémantické vztahy

Objekty mohou navzájem odkazovat.

Mezi příklady patří:

- odkaz → záznam v bibliografii
- obrázek → popisek
- věta → důkaz
- archivní zdroj → úložiště
- osoba → ORCID
- dataset → DOI

Vztahy jsou explicitní a strojově čitelné.

---

# Rozšiřitelnost

Model dokumentu je navržen s ohledem na dlouhodobý vývoj.

V budoucích verzích mohou být zavedeny další typy objektů, aniž by došlo k narušení stávajících rukopisů.

Zpětná kompatibilita je základním požadavkem na návrh.

---

# Budoucí práce

Budoucí specifikace budou definovat:

- Model anotace
- Model pro kontrolu
- Šablona citace
- Model metadat
- Vydavatelský model
- Plugin API
- Specifikace formátu souboru

---

# Historie změn

- **0.1.0** — Přeneseno z dočasné adresy `OMI-SPEC-001` na oficiální adresu `OMI-SPEC-100`.

---

# Shrnutí

Dokumentový model „OMI“ je navržen tak, aby zachycoval vědecké poznatky, nikoli formátované dokumenty.

Díky stabilnímu základnímu dokumentovému modelu v kombinaci s rozšiřitelnými oborovými profily dokáže platforma „OMI“ podporovat všechny vědecké obory a zároveň zachovávat interoperabilitu, přenositelnost a dlouhodobou udržitelnost.
