---
id: plugin-architecture
title: OMI-SPEC-300 — Plugin-arkitektur
sidebar_label: Plugin-arkitektur
sidebar_position: 17
---

# OMI-SPEC-300 — Plugin-arkitektur

## Status

**Udkast**

Version: 0.1.0

**Gammel identifikator:** `OMI-SPEC-008`

---

# Formål

Plugin-arkitekturen definerer, hvordan Open Manuscript Initiative (OMI) kan udvides uden at ændre Core-platformen.

Alle funktioner, der ikke indgår i den universelle akademiske arbejdsgang, bør implementeres som et plugin.

Dette sikrer modularitet, interoperabilitet, vedligeholdelsesvenlighed og bæredygtighed på lang sigt.

---

# Designprincipper

Plugin-arkitekturen følger disse principper:

- Først det væsentlige
- Modulært design
- Stabile grænseflader
- Løs kobling
- Udvidelig
- Platformuafhængig
- Bagudkompatibel

---

# Oversigt over arkitekturen

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

Kernen definerer grænseflader.

Plugins implementerer funktionalitet.

---

# OMI Kerne

Kernen tilbyder udelukkende universelle funktioner.

Eksempler herpå er:

- Dokumentmodel
- Anker-model
- Annotationsmodel
- Metadatamodel
- Citeringsmodel
- Gennemgangsmodel
- Plugin-API
- Begivenhedssystem

Alt andet hører hjemme i plugins.

---

# Plugin-kategorier

## Plugins til disciplin

Tilvejebringe fagspecifikke videnskabelige objekter.

Eksempler:

- Historie
- Teologi
- Matematik
- Fysik
- Kemi
- Biologi
- Medicin
- Lovgivning

---

## Renderer-plugins

Generer publikationsformater.

Eksempler:

- HTML
- PDF
- EPUB
- DOCX
- JATS XML
- Markdown

---

## Integrationsplugins

Forbind OMI med eksterne tjenester.

Eksempler:

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

## Workflow-plugins

Udvid redaktionelle arbejdsgange.

Eksempler:

- Dobbeltblind bedømmelse
- Åben gennemgang
- Redaktionel godkendelse
- AI-assistent
- Udgivelsesforløb

---

## UI-plugins

Udvid brugergrænsefladen.

Eksempler:

- Paneler
- Redaktører
- Dashboards
- Værktøjslinjer
- Inspektører

---

## Importer plugins

Importer eksterne dokumentformater.

Eksempler:

- DOCX
- Markdown
- LaTeX
- JATS XML
- HTML

---

## Eksport-plugins

Eksporter semantiske manuskripter.

Eksempler:

- PDF
- EPUB
- DOCX
- XML
- JSON

---

# Plugin-manifest

Hvert plugin indeholder et manifest.

Eksempel:

```yaml
id: omi-history
name: History Profile
version: 1.0.0
author: Open Manuscript Initiative
apiVersion: 1
license: MIT
```

---

# Pluginets livscyklus

Plugins følger en fastlagt livscyklus.

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

# Plugin-funktioner

Plugins angiver deres funktioner eksplicit.

Eksempler:

- tilføjer semantiske objekter
- leverer en renderer
- importerer dokumenter
- eksportpublikationer
- validerer metadata
- udvider brugergrænsefladen
- overvåger begivenheder

---

# Begivenhedssystem

Plugins kommunikerer via begivenheder.

Eksempler:

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

Plugins bør så vidt muligt undgå direkte afhængigheder.

---

# Udvidelsespunkter

Kernen stiller stabile udvidelsespunkter til rådighed.

Eksempler:

- Dokumentobjekter
- Metadata
- Ankre
- Kilder
- Anmeldelse
- Rendering
- Import
- Eksport
- Brugergrænseflade

---

# Afhængigheder

Plugins kan være afhængige af andre plugins.

Eksempel:

```
History Plugin

↓

Citation Plugin

↓

Metadata Plugin
```

Cirkulære afhængigheder er ikke tilladt.

---

# Versionskompatibilitet

Hvert plugin angiver:

- Minimumskrav til Core-version
- Højeste understøttede Core-version
- API version

Dette muliggør sikre opgraderinger.

---

# Sikkerhed

Plugins kører inden for de fastlagte tilladelser.

Mulige tilladelser omfatter:

- læs manuskriptet
- redigere manuskriptet
- eksport af data
- adgangsnetværk
- skrive filer
- få adgang til eksterne webAPIer

Brugerne bør kunne gennemgå de tildelte tilladelser inden installationen.

---

# Plugin-arkiv

OMI kan stille et offentligt plugin-arkiv til rådighed.

Mulige kategorier:

- Officielt
- Fællesskab
- Eksperimentel
- Certificeret

---

# Testning

Plugins bør om nødvendigt indeholde automatiserede tests.

Anbefalede undersøgelser omfatter:

- enhedstests
- integrationstests
- kompatibilitetstests

---

# Dokumentation

Hvert plugin bør indeholde:

- LÆS MIG
- Licens
- Ændringslog
- Installationsvejledning
- Brugsvejledning

---

# Fremtidige opgaver

Fremtidige specifikationer vil fastlægge:

- Plugin-API
- BegivenhedAPI
- UI-udvidelse API
- Renderer API
- Repository-protokol

---

# Ændringshistorik

- **0.1.0** — Flyttet fra den midlertidige adresse `OMI-SPEC-008` til den officielle adresse `OMI-SPEC-300`.

---

# Resumé

OMI-pluginarkitekturen sikrer, at platformen forbliver let, stabil og udvidelig.

Ved at definere klare grænseflader og udvidelsespunkter giver OMI brugerfællesskaberne mulighed for at udvikle fagspecifikke funktioner, udgivelsesformater, integrationer og arbejdsgange uden at ændre Core-platformen.
