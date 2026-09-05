---
title: OMI Dokumentationsarkitektur
sidebar_label: Dokumentationsarkitektur
sidebar_position: 4
description: Her defineres informationsarkitekturen, navigationsreglerne, den kanoniske placering og vedligeholdelseskravene for dokumentationsserien »Open Manuscript Initiative«.
---

# Open Manuscript Initiative Dokumentationsarkitektur

## Dokumentmetadata

| Felt | Værdi |
|---|---|
| Dokumenttype | Styringspolitik |
| Status | Udkast |
| Version | 0.1.0 |
| Normativt sprog | Engelsk |
| Gælder for | Dokumentation, specifikationer, styringsdokumenter, genererede kategorisider og oversættelser på webstedet OMI |

## 1. Formål

Dette dokument beskriver informationsarkitekturen for dokumentationsserien »Open Manuscript Initiative«.

Her fastsættes følgende:

- dokumentationskategorierne på øverste niveau;
- den standardmæssige placering af hvert aktivt dokument;
- sammenhængen mellem det konceptuelle, det normative, det gennemførelsesmæssige og det styringsmæssige materiale;
- de regler, der anvendes i sidebjælken »Docusaurus«;
- adfærd på kategorisiden;
- håndtering af ældre, forældede og sider, der udelukkende er beregnet til migrering;
- Krav til URL-stabilitet og lokalisering;
- Kriterier for vedligeholdelse og gennemgang af fremtidige ændringer i dokumentationen.

Dokumentationsarkitekturen har til formål at gøre standarden »OMI« forståelig for forskellige målgrupper uden at gentage det normative indhold.

Disse målgrupper omfatter:

- forfattere og redaktører, der vurderer visionen »OMI«;
- bidragydere til standarder, der udarbejder specifikationer;
- udviklere, der udvikler kompatibel software;
- udgivere og arkiver, der integrerer »OMI«-arbejdsgange;
- oversættere, der vedligeholder lokaliseret dokumentation;
- vurderere, der vurderer specifikationernes modenhed og overensstemmelse.

## 2. Arkitektoniske principper

Dokumentationsserien »OMI« følger disse principper.

### 2.1 Et standardsted

Hvert aktivt dokument SKAL have én kanonisk kildefil og én kanonisk placering i sidepanelet.

Et dokument KAN være linket fra andre sider, men det BØR IKKE registreres som et duplikat i samme sidepanel.

Denne regel forhindrer:

- uklart ejerskab;
- dobbelt vedligeholdelse;
- inkonsekvente navigationsbetegnelser;
- modstridende oversættelser;
- Docusaurus fejl i forbindelse med dublerede dokumenter;
- usikkerhed om, hvilken side der er den gældende.

### 2.2 Arkitektur før kronologi

Dokumenterne er inddelt efter arkitektonisk rolle, ikke efter den dato, de blev udarbejdet.

En nyoprettet grundlæggende specifikation hører hjemme i kategorien »Grundlæggende« eller »Kerne-semantiske specifikationer«, selvom den er oprettet efter en platformspecifikation.

### 2.3 Faste offentlige ruter

Ved omstrukturering af dokumentationen BØR man så vidt muligt bevare de eksisterende offentlige URL’er.

Det er ikke nødvendigt at flytte en kildefil blot for at ændre dens kategori i sidepanelet.

Når en rute skal ændres, BØR den gamle rute fortsat være tilgængelig via:

- en omdirigering;
- en meddelelse om flytning;
- eller en bevaret ældre side, der henviser til det kanoniske dokument.

### 2.4 Adskillelse af normativt og forklarende materiale

Sidepanelet SKAL skelne mellem:

- syn og orientering;
- grundlæggende begreber;
- normative semantiske specifikationer;
- arbejdsgange og publikationsspecifikationer;
- specifikationer for platform og børs;
- dokumenter vedrørende styring og standardiseringsprocesser.

Begrebsmæssige introduktioner MÅ IKKE i al stilhed erstatte normative specifikationer.

Normative specifikationer BØR udtrykkeligt angive deres afhængigheder og status i livscyklussen.

### 2.5 Fuldstændig sporbarhed

Alle aktive OMI-specifikationer og styringsdokumenter, der er beregnet til offentlig gennemgang, SKAL kunne tilgås fra den primære sidebjælke.

Sider vedrørende migrering af ældre systemer, interne noter, genererede artefakter og forældede udkast KAN forblive uden for sidepanelet.

### 2.6 Gradvis offentliggørelse

Navigationen BØR give læserne mulighed for at bevæge sig fra generelle begreber til detaljerede krav.

Den forventede udvikling er:

```text
Vision
  ↓
Architecture overview
  ↓
Foundational concepts
  ↓
Core semantic models
  ↓
Workflow and publishing models
  ↓
Platform and exchange specifications
  ↓
Governance and standards process
```

Læserne er ikke forpligtet til at følge denne rækkefølge, men rækkefølgen BØR afspejle afhængighedsstrukturen.

## 3. Navigationsstruktur på øverste niveau

Sidepanelet med dokumentation på OMI indeholder seks topkategorier.

```text
Introduction
Foundations
Core Semantic Specifications
Scholarly Workflow and Publishing
Platform and Exchange
Governance
```

Hver kategori har en genereret landingsside, der opsummerer kategoriens formål og viser en liste over de tilhørende dokumenter.

## 4. Indledning

I kategorien »Introduktion« forklares det, hvorfor OMI findes, og hvordan den overordnede arkitektur er opbygget.

Den indeholder:

1. **Vision**
2. **Oversigt over arkitekturen**

Arkitekturoversigten fremgår af det eksisterende dokument »Arkitekturkort«. Teksten i sidepanelet KAN forenkles, uden at dokumentets titel eller kildevej ændres.

Kategorien »Indledning« har en forklarende karakter. Den indeholder ikke detaljerede krav til overensstemmelse, medmindre et vedlagt dokument udtrykkeligt angiver, at dets indhold er normativt.

## 5. Grundlag

Kategorien »Grundlæggende begreber« indeholder tværgående begreber, der er nødvendige for at forstå specifikationssættet.

Den indeholder:

1. **OMI-SPEC-000 — Grundlæggende principper**
2. **OMI-SPEC-120 — Videnskabelig objektmodel**
3. **Terminologi og definitioner**

Scholarly Object-modellen er placeret her, fordi den definerer den fælles abstraktion, som de specialiserede modeller anvender.

»Terminologi og definitioner« har én standardplacering i sidepanelet i denne kategori. Styringsdokumenter og specifikationer BØR henvise til denne side i stedet for at angive den igen i sidepanelet.

## 6. Centrale semantiske specifikationer

Denne kategori indeholder de vigtigste modeller, der definerer den semantiske struktur i et manuskript fra OMI.

Den indeholder:

1. **OMI-SPEC-100 — Dokumentmodel**
2. **OMI-SPEC-110 — Anker-modellen**
3. **OMI-SPEC-130 — Annotationsmodel**
4. **OMI-SPEC-140 — Metadatamodel**

Rækkefølgen afspejler den primære afhængighedsretning:

```text
Scholarly Object Model
        ↓
Document Model
        ↓
Anchor Model
        ↓
Annotation Model

Metadata Model applies across these layers.
```

Reserverede specifikationer såsom identitets- og bidragsmodellen, versions- og ændringsmodellen, oversættelsesmodellen, valideringsmodellen samt samarbejds- og tilladelsesmodellen MÅ IKKE fremstå som aktive dokumenter, før der findes kanoniske filer for dem.

## 7. Videnskabelig arbejdsgang og publicering

Denne kategori indeholder specifikationer, der beskriver det videnskabelige arbejde, der er udført i forbindelse med eller omkring manuskriptet.

Den indeholder:

1. **OMI-SPEC-200 — Testmodel**
2. **OMI-SPEC-210 — Citeringsmodel**
3. **OMI-SPEC-220 — Model for bibliografiske poster**
4. **OMI-SPEC-221 — Referencelibrary og registerarkitektur**
5. **OMI-SPEC-230 — Udgivelsesmodel**

Denne kategori omfatter både arbejdsgange og publikationsmæssige aspekter, da disse specifikationer vedrører de semantiske modeller og ikke selve den grundlæggende objektstruktur.

Inden for citatsubsystemet:

- Citation-modellen definerer de enkelte forekomster af henvisninger;
- Den bibliografiske postmodel definerer de citerede kilder;
- Referencelibrary- og registerarkitekturen definerer identifikation, lagring, afstemning, genbrug og udveksling.

## 8. Platform og børs

Denne kategori indeholder specifikationer vedrørende udvidelsesmuligheder, programmatisk interaktion, pakning og udveksling.

Den indeholder:

1. **OMI-SPEC-300 — Plugin-arkitektur**
2. **OMI-SPEC-310 — Platform API**
3. **OMI-SPEC-320 — Filformat**
4. **OMI-SPEC-330 — Containerarkitektur**

Disse dokumenter SKAL holdes adskilt fra de semantiske modeller.

En implementering kan anvende forskellige interne teknologier, så længe den overholder de semantiske krav og udvekslingskrav, der er defineret i specifikationerne fra OMI.

## 9. Ledelse

Kategorien »Governance« indeholder dokumenter, der regulerer udviklingen, vedligeholdelsen, modningen, identiteten og offentliggørelsen af standarden »OMI«.

Den indeholder:

1. **Charter**
2. **Køreplan for »OMI« 1.0**
3. **Arkitekturrevision**
4. **Dokumentationsarkitektur**
5. **Specifikationens livscyklus**
6. **Retningslinjer for versionsstyring**
7. **Vejledning i udformning af specifikationer**
8. **Specifikationsregister**

Specifikationsregistret er den autoritative kilde for specifikationsidentifikatorer og kanoniske stier.

Arkitekturrevisionen forbliver tilgængelig som dokumentation for konsolideringsprogrammet, selv efter at de umiddelbare anbefalinger er blevet gennemført.

## 10. Kategorisider

Hver kategori på øverste niveau BØR indeholde en genereret indeksside.

Genererede indekssider BØR indeholde:

- en kortfattet titel;
- en kategoribeskrivelse;
- automatisk genererede dokumentkort;
- en fast kategori-slug.

Genererede sider foretrækkes frem for manuelt vedligeholdte kategoriindeksdokumenter, når siden blot skal vise en oversigt over kategoriens indhold.

Dette mindsker dobbeltarbejde og sikrer, at landingssiden automatisk tilpasses ændringer i sidepanelet.

De nuværende kategorislugs er:

| Kategori | Slug |
|---|---|
| Indledning | `/introduction` |
| Grundlag | `/foundations` |
| Centrale semantiske specifikationer | `/core-semantic-specifications` |
| Videnskabelig arbejdsgang og publicering | `/scholarly-workflow-publishing` |
| Platform og børs | `/platform-exchange` |
| Ledelse | `/governance` |

Disse slugs BØR forblive uændrede efter offentliggørelsen.

## 11. Regler for elementer i sidepanelet

### 11.1 Eksplicit registrering

Den primære sidebjælke anvender eksplicit dokumentregistrering i stedet for ubegrænset automatisk generering via filsystemet.

Der kræves en eksplicit registrering, da arkivet indeholder:

- sider om migrering af ældre systemer;
- dokumenter, der er gemt uden for deres begrebsmæssige kategori;
- styringsdokumenter med forskellige filsystemer og navigationsrækkefølger;
- specifikationer, hvor den arkitektoniske rækkefølge adskiller sig fra den alfabetiske rækkefølge.

### 11.2 Mærkater

En sidebjælkeoverskrift KAN være kortere end sidetitlen.

For eksempel:

```text
Page title: OMI Architecture Map
Sidebar label: Architecture Overview
```

En mærkning MÅ IKKE ændre et dokuments identitet eller normative anvendelsesområde.

### 11.3 Bestilling

Rækkefølgen i specifikationen BØR følge den kanoniske identifikator- og afhængighedsarkitektur frem for filnavnenes rækkefølge.

Rækkefølgen i styringsdokumenterne BØR følge læserens arbejdsgang i standardiseringsprocessen:

```text
constitutional authority
→ roadmap and audit
→ documentation architecture
→ lifecycle
→ versioning
→ authoring rules
→ registry
```

### 11.4 Kategoritilstand

Kategorier på øverste niveau BØR kunne skjules og være udfoldet som udgangspunkt, så længe dokumentationspakken stadig er relativt lille.

Standardindstillingen med sammenklappede faner KAN genovervejes, når antallet af dokumenter stiger markant.

## 12. Ældre og forældede sider

En forældet side MÅ IKKE vises i den primære sidebjælke, når der findes en kanonisk efterfølger.

Arvsiden på:

```text
docs/specifications/scholarly-object-model.md
```

beholdes udelukkende for at bevare den tidligere offentlige rute og henvise læserne til:

```text
docs/specifications/core/scholarly-object-model.md
```

Det officielle dokument er **OMI-SPEC-120 — Scholarly Object Model**.

Ældre sider BØR:

- at udpege den kanoniske efterfølger;
- forklar migreringen af identifikatorer;
- undgå at præsentere forældet indhold som gældende normativ tekst;
- forbliver udelukket fra de genererede kategoriindekser og den primære sidebjælke.

## 13. Filstier og begrebsmæssige kategorier

Kategorien i sidepanelet behøver ikke at stemme nøjagtigt overens med kildemappen.

For eksempel:

- `docs/foundations/architecture-map.md` findes under »Introduktion«;
- `docs/specifications/core/scholarly-object-model.md` findes under »Grundlag«;
- `docs/governance/terminology.md` findes under »Grundlag«.

Det er med vilje.

Omstrukturering af filsystemet BØR kun finde sted, når det medfører en klar fordel for vedligeholdelsen og kan bevare de offentlige ruter på en sikker måde.

## 14. Dokumentidentifikatorer

Docusaurus Dokumentidentifikatorer SKAL forblive unikke.

En dokumentidentifikator BØR være stabil, efter at dokumentet er blevet offentligt refereret til.

Når indledningen angiver et eksplicit `id`, SKAL sidepanelet bruge den opløste dokumentidentifikator Docusaurus i stedet for blot at gå ud fra filnavnet.

Omstruktureringen af sidepanelet MÅ IKKE ændre identifikatorer i OMI-specifikationen, såsom `OMI-SPEC-120`. Dokument-ID’er fra Docusaurus og specifikations-ID’er fra OMI udgør separate navnerum.

## 15. Interne links

Dokumenter BØR anvende relative Markdown-links, når der linkes til dokumenter i det samme arkiv.

Inddelingen i sidepanelet MÅ IKKE betragtes som en erstatning for eksplicitte normative henvisninger.

En specifikationsafhængighed BØR angives i specifikationen, selv når begge dokumenter vises ved siden af hinanden i sidepanelet.

Ved gennemgangen af interne links BØR man kontrollere:

- målfilen findes;
- målet er kanonisk;
- den viste identifikator stemmer overens med specifikationsregistret;
- linket fører ikke til en side, der udelukkende omhandler migration, medmindre migration er emnet;
- Lokaliserede sider må ikke ved en fejltagelse indeholde links til et andet sprog uden en klar begrundelse.

## 16. Lokalisering

Engelsk er fortsat det normative kildesprog, medmindre andet fremgår af et dokument.

De ungarske og tyske dokumentationsstrukturer BØR afspejle det engelske begrebshierarki.

Kategoribetegnelser i sidepanelet og tekst fra den genererede indeks SKAL indgå i den normale oversættelsesproces på Docusaurus.

En oversættelse BØR bevare:

- dokumentidentitet;
- OMI specifikationsidentifikator;
- version;
- livscyklusstatus;
- afhængighedsdeklarationer;
- kanonisk engelsk kildehenvisning.

En oversat side MÅ IKKE tildeles en separat OMI-specifikationsidentifikator.

Når et engelsk dokument ændres, BØR det holdes styr på, hvor opdateret oversættelsen er, i overensstemmelse med politikken for versionsstyring og dokumentet om terminologi og definitioner.

## 17. Tilføjelse af et nyt dokument

Inden et nyt dokument føjes til sidepanelet, SKAL forfatteren fastlægge:

1. om dokumentet er normativt, informativt, implementeringsspecifikt eller vedrører styring;
2. om emnet allerede er behandlet i et eksisterende dokument;
3. om der kræves en specifikationsidentifikator;
4. om identifikatoren er reserveret eller registreret;
5. hvilken kategori på øverste niveau der er den kanoniske;
6. hvilke direkte afhængigheder der skal angives;
7. om dokumentet bør være offentligt i sin nuværende fase i livscyklussen;
8. om der kræves oversættelser eller oversættelsespladsholdere;
9. om tilføjelsen af dokumentet ændrer en genereret kategoriside;
10. om offentlige ruter eller gamle aliaser skal bevares.

En ny normativ specifikation SKAL registreres i Specifikationsregistret, før den præsenteres med en permanent OMI-SPEC-identifikator.

## 18. Fjernelse eller udskiftning af et dokument

Et aktivt dokument MÅ IKKE blot forsvinde fra sidepanelet og arkivet uden en beslutning om arkivering.

Udskiftning kræver:

- en udpeget kanonisk efterfølger;
- en beslutning vedrørende livscyklus, såsom »Udgået«, »Erstattet« eller »Tilbagetrukket«;
- en registeropdatering, når dokumentet er en specifikation;
- en meddelelse om flytning eller en omdirigering, hvor det er praktisk muligt;
- opdaterede interne henvisninger;
- opdaterede oversættelser;
- udgivelsesnoter eller ændringshistorik.

## 19. Tjekliste til validering

En ændring af dokumentationsarkitekturen er klar til gennemgang, når:

- hvert dokument-ID i sidebjælken løses;
- hver aktiv specifikation forekommer nøjagtigt én gang;
- Hvert dokument vedrørende offentlig forvaltning forekommer nøjagtigt én gang, medmindre det bevidst er udeladt;
- Genererede indeks-slugs er unikke;
- Den gamle side om Scholarly Object Model er ikke med på listen;
- den kanoniske model for videnskabelige objekter er anført under »Grundlag«;
- specifikationsmærkaterne stemmer overens med specifikationsregistret;
- kategoribeskrivelserne giver et præcist billede af indholdet;
- ingen eksisterende kildefiler flyttes uden en plan for bevarelse af stier;
- virkningerne af lokaliseringen er dokumenteret;
- Docusaurus konfigurationssyntaksen er gyldig;
- Dokumentationskompileringen afsluttes uden fejl i form af brudte links eller dublerede ID’er.

## 20. Aktuelt migrationsresultat

Den indledende overførsel af sidepanelet resulterer i følgende offentlige hierarki:

```text
Introduction
├── Vision
└── Architecture Overview

Foundations
├── OMI-SPEC-000 — Core Principles
├── OMI-SPEC-120 — Scholarly Object Model
└── Terminology and Definitions

Core Semantic Specifications
├── OMI-SPEC-100 — Document Model
├── OMI-SPEC-110 — Anchor Model
├── OMI-SPEC-130 — Annotation Model
└── OMI-SPEC-140 — Metadata Model

Scholarly Workflow and Publishing
├── OMI-SPEC-200 — Review Model
├── OMI-SPEC-210 — Citation Model
├── OMI-SPEC-220 — Bibliographic Record Model
├── OMI-SPEC-221 — Reference Library and Registry Architecture
└── OMI-SPEC-230 — Publishing Model

Platform and Exchange
├── OMI-SPEC-300 — Plugin Architecture
├── OMI-SPEC-310 — Platform API
├── OMI-SPEC-320 — File Format
└── OMI-SPEC-330 — Container Architecture

Governance
├── Charter
├── Roadmap to OMI 1.0
├── Architecture Audit
├── Documentation Architecture
├── Specification Lifecycle
├── Versioning Policy
├── Specification Style Guide
└── Specification Registry
```

## 21. Fremtidig udvidelse

Arkitekturen er udformet således, at der kan tilføjes yderligere kategorier, når der foreligger et betydeligt materiale, der berettiger dette.

Mulige fremtidige kategorier omfatter:

- Implementeringsvejledninger;
- Profiler og udvidelser;
- Skemaer og eksempler;
- Overensstemmelse og afprøvning;
- Fællesskab og bidrag.

Der BØR IKKE oprettes en ny kategori på øverste niveau for et enkelt dokument, medmindre kategorien repræsenterer en varig arkitektonisk sondring.

Implementeringsspecifik dokumentation BØR holdes klart adskilt fra de normative specifikationer OMI.

## 22. Vedligeholdelse

Dokumentationsstrukturen BØR gennemgås, når:

- der registreres en ny specifikationsfamilie;
- en specifikation opdeles eller sammenlægges;
- et dokument opnår statusen »Stabil«;
- oversættelserne er blevet omstruktureret;
- skemaer og overensstemmelsestests offentliggøres;
- sidepanelet bliver svært at overskue;
- de offentlige ruter ændres;
- Der indføres et nyt lag med implementeringsvejledninger.

Ændringer i dette dokument og i `sidebars.js` BØR normalt gennemgås samlet, når det konceptuelle hierarki ændres.

## 23. Adoption

Dette udkast bliver arkitekturen for arbejdsdokumentationen, når det optages i hovedarkivet.

Eksisterende aktive dokumenter er organiseret efter denne struktur uden at ændre deres normative gyldighedsperiode.

Vedtagelsen af denne arkitektur medfører ikke, at noget udkast til specifikation opgraderes til »Review Candidate«, »Implementation Candidate« eller »Stable«.

## 24. Resumé

Dokumentationssamlingen »OMI« er opbygget som et reguleret standardsystem snarere end en kronologisk samling af sider.

Arkitekturen omfatter:

- ét standardplacering for hvert dokument;
- en tydelig udvikling fra vision til standarder, der er rettet mod implementering;
- fuldstændig kortlægning af gældende specifikationer og styringsdokumenter;
- kategorisider, der genereres automatisk;
- eksplicit håndtering af ældre ruter;
- navigation, der understøtter lokalisering;
- plads til fremtidige skemaer, profiler, overensstemmelsestests og implementeringsvejledninger.

Denne struktur gør standarden »OMI« nemmere at læse, gennemgå, implementere, oversætte og vedligeholde.