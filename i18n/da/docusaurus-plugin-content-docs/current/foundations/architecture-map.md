---
id: architecture-map
title: OMI Arkitekturkort
sidebar_position: 2
description: Et overordnet arkitekturdiagram over »Open Manuscript Initiative« samt sammenhængene mellem dets centrale specifikationer, arbejdsgange, platformskomponenter og publikationsresultater.
keywords:
  - Open Manuscript Initiative
  - OMI architecture
  - scholarly publishing
  - manuscript model
  - annotation model
  - peer review
  - open standards
---

# OMI Arkitekturkort

**Status:** Udkast

**Version:** 0.2

**Senest opdateret:** 5. september 2026
**Stabilitet:** Eksperimentel  

---

## Resumé

Open Manuscript Initiativeen tilbyder en åben semantisk arkitektur, der dækker hele livscyklussen for videnskabelige manuskripter.

OMI adskiller videnskabeligt indhold fra software, præsentation, arbejdsgange og institutionel infrastruktur. Dens specifikationer definerer interoperable modeller for manuskripter, videnskabelige objekter, ankerpunkter, annoteringer, metadata, fagfællebedømmelse, udgivelse og maskinstøttet videnskabeligt arbejde.

Dette dokument præsenterer den overordnede arkitektur for OMI og beskriver, hvordan de vigtigste specifikationer og implementeringslag hænger sammen.

---

## 1. Arkitektonisk oversigt

OMI-arkitekturen er opdelt i fem hovedlag:

```text
┌─────────────────────────────────────────────────────────┐
│                 Application Layer                       │
│                                                         │
│       OMI Studio · Publisher Systems · OJS · Tools       │
├─────────────────────────────────────────────────────────┤
│                  Workflow Layer                         │
│                                                         │
│   Review · Collaboration · Versioning · Publishing      │
├─────────────────────────────────────────────────────────┤
│              Semantic Relationship Layer                │
│                                                         │
│       Anchors · Annotations · Citations · Provenance     │
├─────────────────────────────────────────────────────────┤
│                Scholarly Object Layer                   │
│                                                         │
│  Manuscript · Section · Paragraph · Figure · Table      │
│  Equation · Reference · Dataset · Supplementary Object  │
├─────────────────────────────────────────────────────────┤
│                  Foundation Layer                       │
│                                                         │
│        Core Principles · Identity · Portability         │
│        Extensibility · Preservation · Interoperability  │
└─────────────────────────────────────────────────────────┘
```

Hvert lag er afhængigt af de lag, der ligger under det.

Implementeringerne i applikationerne kan variere, men de semantiske modeller forbliver stabile.

---

## 2. Grundlæggende arkitektonisk princip

OMI betragter et manuskript ikke blot som et formateret dokument, men som en struktureret graf bestående af videnskabelige objekter og semantiske relationer.

```text
Scholarly Object
      │
      ├── has identity
      ├── has type
      ├── may contain other objects
      ├── may be targeted by anchors
      └── may participate in semantic relationships
```

Manuskriptet fremstilles derfor som følger:

```text
Objects + Relationships + Metadata + Provenance
```

Præsentationen genereres ud fra denne kanoniske repræsentation.

---

## 3. Det kanoniske manuskript

Det kanoniske manuskript indeholder det autoritative videnskabelige indhold og den autoritative struktur.

```text
Canonical Manuscript
│
├── Metadata
├── Contributors
├── Sections
│   ├── Headings
│   ├── Paragraphs
│   ├── Figures
│   ├── Tables
│   ├── Equations
│   └── Other scholarly objects
├── References
├── Notes
├── Annotations
├── Provenance
└── Workflow references
```

Det kanoniske manuskript er uafhængigt af:

- sidestørrelse;
- typografi;
- udgiver-skabeloner;
- tekstbehandlingsprogram;
- uddataformat;
- rendering-motor;
- redaktionel administrationsplatform.

PDF, HTML, DOCX, EPUB, JATS, XML og andre publikationsformater er afledte repræsentationer.

---

## 4. Kort over afhængigheder i specifikationen

De vigtigste specifikationer i OMI udgør følgende afhængighedsstruktur:

```text
OMI-SPEC-000
Core Principles
      │
      ▼
OMI-SPEC-120
Scholarly Object Model
      │
      ├──────────────────────────────┐
      ▼                              ▼
OMI-SPEC-100                   OMI-SPEC-140
Document Model                 Metadata Model
      │
      ▼
OMI-SPEC-110
Anchor Model
      │
      ▼
OMI-SPEC-130
Annotation Model
      │
      ├───────────────┬────────────────┬────────────────┐
      ▼               ▼                ▼                ▼
Review Model     Citation Model   AI Assistance    Publishing Model
```

De grundlæggende principper fastlægger de arkitektoniske rammer.

Den videnskabelige objektmodel definerer, hvad der kan indgå i økosystemet »OMI«.

Dokumentmodellen inddeler videnskabelige objekter i manuskripter.

Anker-modellen identificerer stabile mål.

Annotationsmodellen definerer de semantiske relationer, der er knyttet til disse mål.

Specifikationerne for arbejdsgange og interoperabilitet bygger videre på disse grundlag.

---

# 5. Fundamentlag

## 5.1 Grundlæggende principper

**OMI-SPEC-000 — Grundlæggende principper** beskriver den arkitektoniske opbygning af OMI.

De vigtigste regler omfatter:

- indholdet er kanonisk;
- Semantik kommer før formatering;
- videnskabelige objekter har en stabil identitet;
- relationer er førsteklasses data;
- Præsentationen afhænger af rendereren;
- identitet og indhold er to forskellige ting;
- implementeringerne forbliver leverandørneutrale;
- Bevarelse er et af de vigtigste mål for designet.

Alle »OMI«-specifikationer BØR være i overensstemmelse med disse principper.

---

## 5.2 Den videnskabelige objektmodel

**OMI-SPEC-120 — Scholarly Object Model** definerer den fælles abstraktion, som alle meningsfulde enheder har til fælles.

Eksempler herpå er:

- manuskripter;
- afsnit;
- afsnit;
- overskrifter;
- tal;
- tabeller;
- ligninger;
- henvisninger;
- bibliografiske poster;
- kommentarer;
- anmeldelser;
- datasæt;
- supplerende materiale;
- forfattere og bidragydere.

Et videnskabeligt objekt skal som minimum indeholde:

```json
{
  "id": "object-123",
  "type": "paragraph"
}
```

Yderligere egenskaber afhænger af objekttypen.

---

# 6. Kernemodel-laget

## 6.1 Dokumentmodel

**OMI-SPEC-100 — Dokumentmodel** definerer den strukturelle opbygning af et manuskript.

Her beskrives:

- egenskaber på manuskriptniveau;
- afsnit og hierarkisk struktur;
- indholdsblokke;
- indhold i teksten;
- henvisninger til eksterne videnskabelige objekter;
- sammenhængene mellem dokumentets komponenter.

Dokumentmodellen definerer ikke det visuelle udseende.

---

## 6.2 Anker-modellen

**OMI-SPEC-110 — Anchor Model** definerer stabile referencer til videnskabelige objekter eller udvalgte områder inden for disse.

Et anker kan henvise til:

- et helt manuskript;
- et afsnit;
- et afsnit;
- et tekstområde i teksten;
- et tal;
- et figurområde;
- en tabel;
- en tabelcelle;
- en ligning;
- en henvisning;
- en bibliografisk post;
- metadata;
- en ekstern ressource.

```text
Anchor
  │
  ▼
Stable target within a scholarly object
```

Ankre sikrer, at annoteringer og relationer bevares ved redigering, omstrukturering og genrendering.

---

## 6.3 Annotationsmodel

**OMI-SPEC-130 — Annotation Model** definerer annotationer som videnskabelige objekter af første rang.

```text
Annotation
    │
    ├── type
    ├── body
    ├── creator or actor reference
    ├── visibility
    ├── provenance
    └── target
            │
            ▼
          Anchor
```

Annotationer kan angive:

- noter;
- kommentarer;
- bemærkninger fra fagfællebedømmelsen;
- redaktionelle retningslinjer;
- henvisningsforhold;
- AI-forslag;
- vejledning i udgivelse;
- semantiske klassifikationer.

En kommentar gemmes uafhængigt af den tekst, den vedrører.

---

## 6.4 Metadatamodel

**OMI-SPEC-140 — Metadatamodel** definerer beskrivende, administrative, tekniske og bevaringsrelaterede metadata.

Metadata kan beskrive:

- titel;
- sprog;
- forfatterskab;
- tilknytninger;
- identifikatorer;
- fag;
- nøgleord;
- finansiering;
- rettigheder;
- publikationsstatus;
- herkomst;
- fagspecifikke oplysninger.

Metadatamodellen er udformet med henblik på at kunne fungere sammen med etablerede standarder og identifikationssystemer.

---

# 7. Workflow-laget

## 7.1 Gennemgangsmodel

**OMI-SPEC-200 — Review Model** definerer strukturerede arbejdsgange for fagfællebedømmelse.

Den bygger på annotationsmodellen.

```text
Review Annotation
      │
      ├── reviewer pseudonym
      ├── review round
      ├── recommendation
      ├── visibility policy
      ├── confidential or author-facing body
      └── target anchor
```

Gennemgangsmodellen understøtter:

- åben gennemgang;
- anonym enkeltvurdering;
- dobbeltblind bedømmelse;
- tredobbelt anonym bedømmelse;
- fortrolige redaktørkommentarer;
- kommentarer rettet mod forfatteren;
- flere gennemgangsrunder;
- strukturerede anbefalinger;
- gennemgå revisionsspor.

Anmelderens identitet er adskilt fra det overførbare anmeldelsesindhold.

---

## 7.2 Samarbejdsmodel

**OMI-SPEC-210 — Samarbejdsmodel** beskriver interaktion mellem flere brugere i forbindelse med manuskripter.

Det kan understøtte:

- forfattere;
- medforfattere;
- redaktører;
- oversættere;
- anmeldere;
- korrekturlæsere;
- korrekturlæsere;
- tekniske bidragydere;
- AI-assistenter.

Samarbejdsrettighederne er rollebaserede og objektorienterede.

---

## 7.3 Versionsmodel

**OMI-SPEC-220 — Versionsmodel** beskriver manuskriptets udvikling.

```text
Version 1
    │
    ▼
Change Set
    │
    ▼
Version 2
```

Modellen skal understøtte:

- uforanderlige versionsidentifikatorer;
- ændringer på objektniveau;
- ændringshistorik;
- forgrening;
- sammenlægning;
- herkomst;
- sammenligning mellem versioner;
- øjebliksbilleder fra gennemgangsrunden.

---

## 7.4 Udgivelsesmodel

**OMI-SPEC-230 — Udgivelsesmodel** beskriver omdannelsen af det kanoniske manuskript til udgivelsesprodukter.

```text
Canonical OMI Manuscript
          │
          ▼
 Publisher Profile
          │
          ▼
 Rendering Pipeline
          │
          ├── HTML
          ├── PDF
          ├── DOCX
          ├── EPUB
          ├── JATS XML
          ├── LaTeX
          └── Future formats
```

Udgiverprofiler kan indeholde følgende:

- typografi;
- citeringsform;
- bemærk placeringen;
- overskriftshierarki;
- sidens geometri;
- figurbehandling;
- krav til metadata;
- output-specifikke transformationer.

Det kanoniske manuskript forbliver uændret.

---

# 8. Interoperabilitetslag

## 8.1 Plugin-arkitektur

**OMI-SPEC-300 — Plugin-arkitektur** beskriver mekanismer til udvidelse.

Plugins kan tilbyde:

- nye typer af videnskabelige objekter;
- fagspecifikke metadata;
- renderere;
- eksportører og importører;
- validatorer;
- redaktionelle arbejdsgange;
- integrationer med datalagre;
- AI-tjenester.

Plugins må IKKE forringe det kanoniske manuskripts overførbarhed.

---

## 8.2 PlatformAPI

**OMI-SPEC-310 — Platform API** definerer programmatisk interaktion med OMI manuskripter og videnskabelige objekter.

APIen kan eksponere:

- hentning af manuskripter;
- oprettelse og ændring af objekter;
- annotationsoperationer;
- ankeroverenskomst;
- validering;
- rendering;
- integration af arbejdsgange;
- import og eksport;
- plugin-grænseflader.

---

## 8.3 Filformat

**[OMI-SPEC-320 — File Format](../specifications/file-format.md)** definerer den bærbare logiske JSON-repræsentation af et OMI-manuskript.

Det samme logiske dokument kan overføres som en selvstændig fil af typen »`.omi.json`« eller som en del af et manuskript, der er rekonstrueret fra en »OMI«-container. Filformatet definerer identifikation, versionsforhandling, parsning, serialisering, validering, referencer, udvidelser, valgfri udveksling af historik og migrering uden at foreskrive arkivstier eller komprimering.

Formatet bør prioritere:

- gennemsigtighed;
- validering;
- genvindbarhed;
- langvarig opbevaring;
- uafhængighed i implementeringen.

---

## 8.4 Containerarkitektur

**[OMI-SPEC-330 — Container Architecture](../specifications/container-architecture.md)** beskriver, hvordan relaterede filer samles i én pakke, der kan inspiceres `.omi`.

En container kan indeholde:

```text
manuscript.omi
│
├── META-INF/
├── manuscript/
├── media/
├── profiles/
├── plugins/
└── publication/
```

Containeren definerer identifikation af dele, stisikkerhed, håndtering af medier, integritet, signaturer og konserveringsemballage, mens manuskriptets semantik overlades til OMI-SPEC-320 og kernemodellerne.

---

# 9. Laget med kunstig intelligens

## 9.1 AI-assistance

**OMI-SPEC-400 — AI-assistance** beskriver, hvordan maskingenererede forslag interagerer med videnskabelige manuskripter.

AI-output præsenteres som indhold med annoteringer eller herkomstoplysninger.

```text
AI Service
    │
    ▼
AI Annotation
    │
    ├── model or service identifier
    ├── creation time
    ├── operation type
    ├── confidence or rationale
    ├── target anchor
    └── human review status
```

AI-forslag erstatter ikke automatisk det kanoniske indhold.

---

## 9.2 Gennemgang af AI

**OMI-SPEC-410 — AI Review** beskriver maskinstøttet kvalitetsvurdering.

Mulige handlinger omfatter:

- strukturel validering;
- kontrol af kildehenvisninger;
- terminologisk ensartethed;
- sproganalyse;
- kontrol af tilgængelighed;
- validering af metadata;
- statistiske advarsler;
- Overholdelse af publikationsprofilen.

AI-vurderinger adskiller sig stadig fra menneskelige fagfællebedømmelser.

---

## 9.3 Herkomst

**OMI-SPEC-420 — Proveniens** beskriver, hvordan videnskabelige objekter er blevet skabt eller ændret.

Oprindelsen kan angive:

- menneskelige bidragydere;
- softwareværktøjer;
- importoperationer;
- AI-systemer;
- transformationsprocesser;
- publikationssystemer;
- valideringstjenester.

Proveniens sikrer gennemsigtighed uden at kræve, at alle identitetsoplysninger offentliggøres.

---

# 10. Applikationslaget

## 10.1 OMI Studio

OMI Studio er et referencemiljø til udarbejdelse af dokumenter, der bygger på »OMI«-specifikationerne.

```text
OMI Studio
│
├── Manuscript editor
├── Scholarly object inspector
├── Annotation panel
├── Notes editor
├── Review interface
├── Metadata editor
├── Publisher preview
├── Validation
├── Import
└── Export
```

OMI Studio er en implementering af specifikationerne, ikke selve specifikationen.

Andre programmer kan implementere »OMI« på en anden måde.

---

## 10.2 Udgiveres systemer

Forlag og tidsskriftsadministrationsplatforme kan anvende OMI til:

- modtagelse af indsendelser;
- teknisk validering;
- fagfællebedømmelse;
- korrekturlæsning;
- produktion;
- publikation;
- indskud i depotet;
- langvarig opbevaring.

En udgiver kan implementere OMI direkte eller integrere det via en API eller et plugin.

---

## 10.3 Eksterne systemer

OMI er udviklet til at fungere sammen med ekstern forskningsinfrastruktur.

Eksempler herpå er:

```text
OMI
 │
 ├── OJS and journal management platforms
 ├── Institutional repositories
 ├── DOI registration services
 ├── ORCID
 ├── ROR
 ├── Crossref
 ├── DataCite
 ├── CSL
 ├── JATS
 ├── IIIF
 ├── Preservation systems
 └── Research data repositories
```

OMI har ikke til formål at erstatte disse infrastrukturer.

Det skaber et bærbart semantisk manuskriptlag mellem dem.

---

# 11. Arkitektur for identitet og privatliv

Identitet behandles separat fra det kanoniske videnskabelige indhold.

```text
Portable OMI Content
│
├── actor role
├── pseudonym
├── contribution type
└── public provenance
        │
        │ protected mapping
        ▼
Institutional Identity System
├── account
├── verified identity
├── permissions
└── confidential audit data
```

Denne opdeling understøtter:

- anonym fagfællebedømmelse;
- samarbejde med beskyttelse af privatlivets fred;
- kontrolleret offentliggørelse af identitet;
- institutionel ansvarlighed;
- bærbare revisionsoptegnelser.

Private identitetsbindinger BØR IKKE medtages i overførbare anonyme gennemgangspakker.

---

# 12. Arkitektur i rendering

Rendering omdanner semantisk indhold til præsentation.

```text
Canonical Manuscript
        │
        ▼
Semantic Validation
        │
        ▼
Target Profile
        │
        ▼
Renderer
        │
        ├── HTML
        ├── PDF
        ├── DOCX
        ├── EPUB
        ├── JATS XML
        ├── LaTeX
        └── Accessible formats
```

Rendereren bestemmer:

- typografi;
- sidesummering;
- bemærk placeringen;
- formatering af kildehenvisninger;
- figurplacering;
- visning af tabel;
- overskriftens udseende;
- fremstilling af tilgængelighed.

Oversættelsen MÅ IKKE ændre manuskriptets semantiske betydning.

---

# 13. Eksempel: Livscyklus for peer-review-anmærkninger

Følgende eksempel viser, hvordan flere lag i »OMI« samvirker.

```text
1. A paragraph exists as a scholarly object.
                    │
                    ▼
2. An anchor identifies a sentence in the paragraph.
                    │
                    ▼
3. A reviewer creates a review annotation.
                    │
                    ▼
4. The Review Model applies anonymity and visibility rules.
                    │
                    ▼
5. The author receives an anonymized review projection.
                    │
                    ▼
6. The author revises the canonical manuscript.
                    │
                    ▼
7. The Versioning Model records the change.
                    │
                    ▼
8. The annotation is resolved or retained as provenance.
```

Kommentaren er ikke indlejret permanent i afsnittet.

Det forbliver et uafhængigt, sporbart videnskabeligt objekt.

---

# 14. Eksempel: en publikations livscyklus

```text
Authoring
    │
    ▼
Canonical OMI Manuscript
    │
    ▼
Validation
    │
    ▼
Peer Review
    │
    ▼
Revision and Versioning
    │
    ▼
Editorial Acceptance
    │
    ▼
Publisher Profile
    │
    ▼
Rendering
    │
    ├── Journal HTML
    ├── Archival PDF
    ├── JATS XML
    ├── EPUB
    └── Repository package
```

Det samme kanoniske manuskript kan give alle mulige resultater.

Intet outputformat udgør den autoritative kilde.

---

# 15. Arkitekturinvariabler

Alle implementeringer af »OMI«, der overholder standarden, BØR opretholde følgende invarianter.

## 15.1 Invariant for kanonisk indhold

Præsentationsspecifikke ændringer MÅ IKKE ændre den kanoniske videnskabelige betydning.

## 15.2 Stabil identitetsinvariant

Et videnskabeligt objekt BØR bevare sin identitet ved almindelige redigeringshandlinger.

## 15.3 Relationsinvariant

Semantiske relationer BØR forblive eksplicitte og maskinlæsbare.

## 15.4 Portabilitetsinvariant

Et manuskript SKAL kunne fortolkes uden for den software, der har skabt det.

## 15.5 Privatlivsinvariant

Fortrolige identitetsoplysninger SKAL holdes adskilt fra det overførbare videnskabelige indhold.

## 15.6 Uafhængig af herkomst

Væsentlige automatiserede og manuelle ændringer BØR kunne spores.

## 15.7 Invariant for udvidelsesmuligheder

Udvidelser BØR bevare det underliggende manuskripts gyldighed og læsbarhed.

---

# 16. Arkitektoniske afgrænsninger

OMI definerer:

- semantiske manuskriptstrukturer;
- identiteter af videnskabelige objekter;
- ankre;
- kommentarer;
- fremstillinger af arbejdsgange;
- interoperable metadata;
- bærbare pakkestrukturer;
- indlæsning af input;
- udvidelsesmekanismer.

OMI foreskriver ikke:

- én enkelt redaktør;
- én samlet udgivelsesplatform;
- én enkelt database;
- et enkelt programmeringssprog;
- én enkelt peer-review-metode;
- én enkelt citatstil;
- et samlet visuelt design;
- én samlet institutionel arbejdsgang.

Implementeringerne kan fortsat frit vælge deres interne teknologier.

---

# 17. Oversigtskort

```text
                         OMI-SPEC-000
                        Core Principles
                               │
                               ▼
                    Scholarly Object Model
                               │
                  ┌────────────┴────────────┐
                  ▼                         ▼
          Document Model              Metadata Model
                  │
                  ▼
             Anchor Model
                  │
                  ▼
           Annotation Model
                  │
      ┌───────────┼───────────┬───────────────┐
      ▼           ▼           ▼               ▼
 Review Model  Citation    AI Assistance   Publishing
      │           │           │               │
      └───────────┴───────────┴───────────────┘
                              │
                              ▼
                    Portable OMI Manuscript
                              │
                              ▼
                       OMI Implementations
                              │
          ┌───────────────────┼───────────────────┐
          ▼                   ▼                   ▼
       Studio          Publisher Systems     Repositories
                              │
                              ▼
                     Publication Renderers
                              │
            ┌─────────────────┼─────────────────┐
            ▼                 ▼                 ▼
           HTML              PDF              JATS
```

---

# 18. Konklusion

Open Manuscript Initiativeen tilbyder en lagdelt semantisk arkitektur i stedet for et monolitisk filformat.

Dens centrale abstraktion er den videnskabelige objektgraf:

```text
Stable scholarly objects
        +
Explicit semantic relationships
        +
Portable metadata
        +
Traceable provenance
```

Applikationer, arbejdsgange og publikationsformater bygger på denne graf.

Ved at adskille den videnskabelige betydning fra præsentationen og infrastrukturen gør »OMI« det muligt for manuskripter at skifte mellem forfattere, fagområder, forlag, arkiver og fremtidige teknologier uden at miste deres intellektuelle struktur.

> **Skriv naturligt. Strukturér én gang. Udgiv overalt.**
