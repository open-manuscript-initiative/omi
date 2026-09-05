---
id: publishing-model
title: OMI-SPEC-230 — Model publikování
sidebar_label: Vydavatelský model
sidebar_position: 16
---

# OMI-SPEC-230 — Model publikování

## Stav

**Návrh**

Verze: 0.1.0

**Starší identifikátor:** `OMI-SPEC-007`

---

# Účel

Publikovací model definuje, jak se sémantický rukopis převádí do jednoho nebo více publikačních formátů.

Na rozdíl od tradičních vydavatelských postupů odděluje systém „OMI“ vědecký obsah od jeho prezentace.

Rukopis se napíše jednou a přepisuje se mnohokrát.

---

# Zásady návrhu

Vydavatelský model se řídí těmito zásadami:

- Jediný zdroj pravdivých informací
- Sémantické vykreslování
- Nezávislost na formátu
- Reprodukovatelnost
- Interoperabilita
- Rozšiřitelnost
- Automatizace

---

# Filozofie vydavatelství

Vydávání není totéž jako konverze dokumentů.

Publikování je proces převádění sémantických znalostí do reprezentací specifických pro danou publikaci.

Rukopis se nikdy nemění.

Mění se pouze jeho podoba.

---

# Vydavatelský proces

```
Semantic Manuscript

        │

        ▼

Publication Profile

        │

        ▼

Rendering Engine

        │

        ▼

Publication Format
```

Každá publikace vychází ze stejného sémantického zdroje.

---

# Profil publikací

Profil publikace určuje, jak by měl rukopis vypadat pro konkrétní cílovou skupinu.

Profily mohou definovat:

- typografie
- styl citování
- styl poznámky
- rozvržení
- mapování metadat
- požadavky na přístupnost
- budování značky

Samotný rukopis zůstává beze změn.

---

# Podporované výstupy

OMI je navržen tak, aby podporoval různé formáty publikací.

Mezi příklady patří:

- HTML
- PDF
- EPUB
- DOCX
- JATS XML
- Crossref XML
- DataCite XML
- Markdown
- Obyčejný text

V budoucnu mohou být přidány další formáty, aniž by došlo ke změnám v rukopisu.

---

# Publikování pro více cílů

Jeden rukopis může být zdrojem několika výstupů současně.

Příklad:

```
Semantic Manuscript

        │

 ┌──────┼──────────────┐

 ▼      ▼              ▼

HTML    PDF       JATS XML

 ▼      ▼              ▼

Website Print     Repository
```

Každý výstup se odvozuje samostatně.

---

# Renderovací engine

Renderovací engine interpretuje sémantické objekty a uplatňuje pravidla publikace.

Příklady:

Nadpis

↓

HTML

```
<h2>
```

↓

PDF

Velký nadpis

↓

JATS

```
<title>
```

Sémantický objekt zůstává nezměněn.

---

# Poznámky

Anotace se mohou zobrazovat odlišně.

Příklady:

PDF

↓

Poznámky pod čarou

HTML

↓

Popisky

EPUB

↓

Poznámky na konci textu

JATS

↓

Sémantické prvky

---

# Odkazy

Zobrazení citací závisí výhradně na profilu publikace.

Příklady:

APA

↓

(Autor, rok)

Chicago

↓

Poznámka pod čarou

IEEE

↓

[15]

Samotný model citací se nikdy nemění.

---

# Čísla

Profily publikací určují:

- umístění
- titulky
- číslování
- odkazy
- přístupnost

---

# Tabulky

Profily mohou definovat:

- responzivní tabulky typu „HTML“
- tabulky k tisku
- metadata o přístupnosti
- manipulace s dlouhým stolem

---

# Rovnice

Podporované způsoby zobrazení mohou zahrnovat:

- MathML
- LaTeX
- SVG
- PDF vektorový výstup

---

# Metadata

Metadata se exportují samostatně pro každý cíl.

Příklady:

Crossref XML

↓

Schéma Crossref

DataCite XML

↓

Schéma DataCite

JATS XML

↓

JATS Metadata

Žádná metadata se ručně nekopírují.

---

# Přístupnost

Profilové záznamy by měly zachovávat přístupnost.

Příklady:

- sémantické nadpisy
- popisy obrázků
- záhlaví tabulek
- navigace pomocí klávesnice
- označenoPDF
- EPUB metadata o přístupnosti

Požadavky na přístupnost by měly být konfigurovatelné.

---

# Ochrana

Formáty publikací určené k dlouhodobému uchovávání by měly zachovávat sémantickou integritu.

Mezi preferované formáty pro uchovávání patří:

- JATS XML
- PDF/A
- EPUB
- Markdown

Budoucí mapování může podporovat standardy institucionálních repozitářů.

---

# Automatizace

Pracovní postupy v oblasti publikování lze plně automatizovat.

Příklad:

```
Review Completed

↓

Accept

↓

Generate HTML

↓

Generate PDF

↓

Generate JATS XML

↓

Deposit Metadata

↓

Publish
```

Není nutné dokumenty ručně vytvářet znovu.

---

# Architektura pluginů

Nové formáty publikací se přidávají pomocí pluginů.

Příklady:

```
OMI Core

        │

        ├── HTML Renderer

        ├── PDF Renderer

        ├── EPUB Renderer

        ├── JATS Renderer

        ├── DOCX Renderer

        └── Custom Renderer
```

Základní model vydávání zůstává beze změny.

---

# Interoperabilita

Mezi budoucí integrace patří:

- Open Journal Systems (OJS)
- Open Monograph Press (OMP)
- Systémy otevřených preprintů (OPS)
- Crossref
- DataCite
- Zenodo
- Instituční repozitáře

---

# Verzování

Každá publikace je reprodukovatelná.

Publikovaný výstup by měl být vždy vysledovatelný až k:

- verze rukopisu
- profil publikací
- verze vykreslovacího jádra

Tím je zajištěna reprodukovatelnost a transparentnost.

---

# Budoucí práce

Budoucí specifikace budou definovat:

- Vykreslování API
- Šablonový jazyk
- Profil publikací
- Automatizace pracovních postupů
- Kontinuální vydávání
- Dynamické publikace

---

# Historie změn

- **0.1.0** — Přeneseno z dočasné adresy `OMI-SPEC-007` na oficiální adresu `OMI-SPEC-230`.

---

# Shrnutí

Vydavatelský model „OMI“ převádí jeden sémantický rukopis do několika publikačních formátů, aniž by došlo ke změně původního vědeckého obsahu.

Díky oddělení sémantického významu od vizuální prezentace umožňuje systém „OMI“ automatizované, reprodukovatelné a interoperabilní publikační pracovní postupy napříč časopisy, repozitáři a budoucími platformami pro vědeckou komunikaci.
