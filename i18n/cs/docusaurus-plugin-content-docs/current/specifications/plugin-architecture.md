---
id: plugin-architecture
title: OMI-SPEC-300 — Architektura pluginů
sidebar_label: Architektura pluginů
sidebar_position: 17
---

# OMI-SPEC-300 — Architektura pluginů

## Stav

**Návrh**

Verze: 0.1.0

**Starší identifikátor:** `OMI-SPEC-008`

---

# Účel

Architektura pluginů definuje, jak lze rozšířit platformu „Open Manuscript Initiative“ (OMI) bez nutnosti úprav základní platformy.

Každá funkce, která není součástí univerzálního akademického pracovního postupu, by měla být implementována jako plugin.

Tím je zajištěna modularita, interoperabilita, snadná údržba a dlouhodobá udržitelnost.

---

# Zásady návrhu

Architektura pluginů se řídí těmito zásadami:

- Nejprve jádro
- Modulární konstrukce
- Stabilní rozhraní
- Volné propojení
- Rozšiřitelné
- Nezávislé na platformě
- Zpětně kompatibilní

---

# Přehled architektury

```
                OMI Core
                    │
    ┌───────────────┼────────────────┐
    │               │                │
    ▼               ▼                ▼
 Discipline     Renderer         Integration
  Plugins        Plugins           Plugins
    │               │                │
    ▼               ▼                ▼
 Annotation      HTML            OJS
 Metadata        PDF             Crossref
 Citation        EPUB            ORCID
 Review          JATS            Zenodo
```

Jádro definuje rozhraní.

Pluginy zajišťují funkčnost.

---

# OMI Jádro

Jádro poskytuje pouze základní funkce.

Mezi příklady patří:

- Model dokumentu
- Model kotvy
- Model anotací
- Model metadat
- Šablona citace
- Model pro přezkoumání
- Plugin API
- Systém událostí

Všechno ostatní patří do pluginů.

---

# Kategorie pluginů

## Pluginy pro disciplínu

Poskytovat odborné materiály z konkrétních oborů.

Příklady:

- Historie
- Teologie
- Matematika
- Fyzika
- Chemie
- Biologie
- Medicína
- Právo

---

## Pluginy pro vykreslování

Vytvořit formáty publikací.

Příklady:

- HTML
- PDF
- EPUB
- DOCX
- JATS XML
- Markdown

---

## Integrační pluginy

Propojte službu „OMI“ s externími službami.

Příklady:

- OJS
- OMP
- OPS
- Crossref
- DataCite
- ORCID
- ROR
- Zenodo
- GitHub

---

## Pluginy pro pracovní postupy

Rozšiřte redakční pracovní postupy.

Příklady:

- Dvojitě zaslepené hodnocení
- Otevřít recenzi
- Schválení redakcí
- AI asistent
- Vydavatelský proces

---

## Pluginy uživatelského rozhraní

Rozšířit uživatelské rozhraní.

Příklady:

- Panely
- Redaktoři
- Přehledové panely
- Panely nástrojů
- Inspektoři

---

## Importovat pluginy

Importovat externí formáty dokumentů.

Příklady:

- DOCX
- Markdown
- LaTeX
- JATS XML
- HTML

---

## Pluginy pro export

Exportovat sémantické rukopisy.

Příklady:

- PDF
- EPUB
- DOCX
- XML
- JSON

---

# Manifest pluginu

Každý plugin obsahuje manifest.

Příklad:

```yaml
id: omi-history
name: History Profile
version: 1.0.0
author: Open Manuscript Initiative
apiVersion: 1
license: MIT
```

---

# Životní cyklus pluginu

Pluginy procházejí definovaným životním cyklem.

```
Install

↓

Register

↓

Initialize

↓

Activate

↓

Execute

↓

Deactivate

↓

Remove
```

---

# Možnosti pluginu

Pluginy explicitně deklarují své funkce.

Příklady:

- přidává sémantické objekty
- poskytuje renderer
- načte dokumenty
- exporty publikací
- ověřuje metadata
- rozšiřuje uživatelské rozhraní
- sleduje události

---

# Systém událostí

Pluginy mezi sebou komunikují prostřednictvím událostí.

Příklady:

```
DocumentOpened

↓

AnnotationCreated

↓

CitationAdded

↓

ReviewSubmitted

↓

ExportStarted

↓

PublicationCompleted
```

Pluginy by se měly pokud možno vyhýbat přímým závislostem.

---

# Rozšiřovací body

Jádro poskytuje stabilní rozhraní pro rozšíření.

Příklady:

- Objekty dokumentu
- Metadata
- Kotvy
- Odkazy
- Recenze
- Renderování
- Importovat
- Exportovat
- Uživatelské rozhraní

---

# Závislosti

Pluginy mohou být závislé na jiných pluginech.

Příklad:

```
History Plugin

↓

Citation Plugin

↓

Metadata Plugin
```

Cyklické závislosti nejsou povoleny.

---

# Kompatibilita verzí

Každý plugin deklaruje:

- minimální verze jádra
- maximální podporovaná verze jádra
- API verze

To umožňuje provádět aktualizace bezpečně.

---

# Bezpečnost

Pluginy se spouštějí v rámci definovaných oprávnění.

Mezi možná oprávnění patří:

- přečíst rukopis
- upravit rukopis
- exportovat data
- přístupová síť
- zapsat soubory
- přístup k externím webovým stránkám API

Uživatelé by měli mít možnost zkontrolovat udělená oprávnění ještě před instalací.

---

# Repozitář pluginů

OMI může poskytovat veřejné úložiště pluginů.

Možné kategorie:

- Oficiální
- Komunita
- Experimentální
- Certifikováno

---

# Testování

Pluginy by měly v příslušných případech poskytovat automatizované testy.

Mezi doporučené testy patří:

- jednotkové testy
- integrační testy
- testy kompatibility

---

# Dokumentace

Každý plugin by měl obsahovat:

- README
- Licence
- Seznam změn
- Průvodce instalací
- Návod k použití

---

# Budoucí práce

Budoucí specifikace budou definovat:

- Plugin API
- Akce „API“
- Rozšíření uživatelského rozhraní API
- RendererAPI
- Protokol úložiště

---

# Historie změn

- **0.1.0** — Přesunuto z dočasné adresy `OMI-SPEC-008` na oficiální adresu `OMI-SPEC-300`.

---

# Shrnutí

Architektura pluginů „OMI“ zajišťuje, že platforma zůstává nenáročná, stabilní a rozšiřitelná.

Díky definování jasných rozhraní a bodů pro rozšíření umožňuje platforma OMI komunitám vyvíjet funkce specifické pro jednotlivé obory, publikační formáty, integrace a pracovní postupy, aniž by bylo nutné upravovat samotnou platformu Core.
