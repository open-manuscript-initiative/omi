---
id: publishing-model
title: OMI-SPEC-230 — Udgivelsesmodel
sidebar_label: Udgivelsesmodel
sidebar_position: 16
---

# OMI-SPEC-230 — Udgivelsesmodel

## Status

**Udkast**

Version: 0.1.0

**Gammel identifikator:** `OMI-SPEC-007`

---

# Formål

Udgivelsesmodellen beskriver, hvordan et semantisk manuskript omdannes til et eller flere udgivelsesformater.

I modsætning til traditionelle forlagsarbejdsgange adskiller »OMI« det videnskabelige indhold fra præsentationen.

Et manuskript skrives én gang og gengives mange gange.

---

# Designprincipper

Udgivelsesmodellen følger disse principper:

- En enkelt kilde til sandheden
- Semantisk gengivelse
- Formatuafhængighed
- Reproducerbarhed
- Interoperabilitet
- Udvidelsesmuligheder
- Automatisering

---

# Udgivelsesfilosofi

Udgivelse er ikke det samme som dokumentkonvertering.

Publicering er den proces, hvor semantisk viden omdannes til publikationsspecifikke repræsentationer.

Manuskriptet ændres aldrig.

Det er kun præsentationen, der ændrer sig.

---

# Udgivelsesforløb

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

Hver publikation stammer fra den samme semantiske kilde.

---

# Publikationsprofiler

En publikationsprofil fastlægger, hvordan et manuskript skal se ud i forhold til et bestemt formål.

Profiler kan definere:

- typografi
- citeringsform
- notestil
- layout
- metadatakortlægning
- tilgængelighedskrav
- branding

Selve manuskriptet forbliver uændret.

---

# Understøttede outputformater

OMI er udviklet til at understøtte flere forskellige publikationsformater.

Eksempler herpå er:

- HTML
- PDF
- EPUB
- DOCX
- JATS XML
- Crossref XML
- DataCite XML
- Markdown
- Almindelig tekst

Der kan senere tilføjes nye formater uden at ændre manuskriptet.

---

# Udgivelse til flere målgrupper

Et manuskript kan generere flere resultater på samme tid.

Eksempel:

```
Semantic Manuscript

        │

 ┌──────┼──────────────┐

 ▼      ▼              ▼

HTML    PDF       JATS XML

 ▼      ▼              ▼

Website Print     Repository
```

Hvert resultat udledes uafhængigt.

---

# Renderingsmotor

Rendering-motoren fortolker semantiske objekter og anvender publikationsregler.

Eksempler:

Overskrift

↓

HTML

```
<h2>
```

↓

PDF

Stor overskrift

↓

JATS

```
<title>
```

Det semantiske objekt forbliver uændret.

---

# Noter

Annotationer kan blive vist på forskellige måder.

Eksempler:

PDF

↓

Fodnoter

HTML

↓

Værktøjstip

EPUB

↓

Efterord

JATS

↓

Semantiske elementer

---

# Kilder

Gengivelsen af henvisninger afhænger helt af publikationsprofilen.

Eksempler:

APA

↓

(Forfatter, År)

Chicago

↓

Fodnote

IEEE

↓

[15]

Selve Citation-modellen ændrer sig aldrig.

---

# Tal

Publikationsprofiler fastlægger:

- placering
- billedtekster
- nummerering
- krydshenvisninger
- tilgængelighed

---

# Tabeller

Profiler kan definere:

- responsive HTML-tabeller
- tabeller, der kan udskrives
- metadata om tilgængelighed
- håndtering af lange borde

---

# Ligninger

Understøttet gengivelse kan omfatte:

- MathML
- LaTeX
- SVG
- PDF vektorudgang

---

# Metadata

Metadata eksporteres separat for hvert mål.

Eksempler:

Crossref XML

↓

Crossref-skema

DataCite XML

↓

DataCite-skema

JATS XML

↓

JATS Metadata

Der dupliseres ikke manuelt nogen metadata.

---

# Tilgængelighed

Udgivelsesprofiler bør sikre tilgængeligheden.

Eksempler:

- semantiske overskrifter
- billedbeskrivelser
- tabeloverskrifter
- tastaturnavigation
- mærket med »PDF«
- EPUB metadata om tilgængelighed

Krav til tilgængelighed bør kunne konfigureres.

---

# Bevarelse

Publikationsformater, der er beregnet til langtidsbevaring, bør opretholde den semantiske integritet.

De foretrukne formater til arkivering omfatter:

- JATS XML
- PDF/A
- EPUB
- Markdown

Fremtidige kortlægninger vil muligvis understøtte standarder for institutionelle arkiver.

---

# Automatisering

Udgivelsesprocesserne kan være fuldt automatiserede.

Eksempel:

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

Der er ikke behov for manuel genoprettelse af dokumenter.

---

# Plugin-arkitektur

Nye publikationsformater tilføjes via plugins.

Eksempler:

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

Den grundlæggende udgivelsesmodel forbliver uændret.

---

# Interoperabilitet

Fremtidige integrationer omfatter:

- Open Journal Systems (OJS)
- Open Monograph Press (OMP)
- Open Preprint Systems (OPS)
- Crossref
- DataCite
- Zenodo
- Institutionelle arkiver

---

# Versionsstyring

Alle publikationer kan gengives.

En offentliggjort publikation skal altid kunne spores tilbage til:

- manuskriptudgave
- publikationsprofil
- version af rendering-motoren

Dette sikrer reproducerbarhed og gennemsigtighed.

---

# Fremtidige opgaver

Fremtidige specifikationer vil fastlægge:

- Rendering API
- Skabelonsprog
- Publikationsprofiler
- Automatisering af arbejdsgange
- Kontinuerlig udgivelse
- Dynamiske publikationer

---

# Ændringshistorik

- **0.1.0** — Flyttet fra den midlertidige adresse `OMI-SPEC-007` til den officielle adresse `OMI-SPEC-230`.

---

# Resumé

OMI-udgivelsesmodellen omdanner et enkelt semantisk manuskript til flere udgivelsesformater uden at ændre det oprindelige videnskabelige indhold.

Ved at adskille den semantiske betydning fra præsentationen muliggør »OMI« automatiserede, reproducerbare og interoperable publiceringsarbejdsgange på tværs af tidsskrifter, arkiver og fremtidige platforme for videnskabelig kommunikation.
