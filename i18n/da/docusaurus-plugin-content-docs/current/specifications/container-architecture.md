---
id: container-architecture
title: OMI-SPEC-330 — Containerarkitektur
sidebar_label: Containerarkitektur
sidebar_position: 21
description: Definerer det bærbare pakkelayout for manuskripter fra »OMI« og de tilhørende ressourcer.
---

# OMI-SPEC-330 — Containerarkitektur

## Status

**Udkast**

Version: 0.1.0

**Gammel identifikator:** `OMI-SPEC-012`

**Afhænger af:** OMI-SPEC-320 (filformat)

---

## Formål

Containerarkitekturen definerer den flytbare pakkestruktur, der anvendes til udveksling og bevaring af et manuskript fra OMI sammen med dets metadata, historik, kommentarer, henvisninger, ressourcer, profiler og udvidelser.

Containeren supplerer »[File Format](./file-format.md)«: OMI-SPEC-320 beskriver den logiske repræsentation af manuskriptet, mens denne specifikation beskriver, hvordan de tilhørende filer samles i én pakke.

---

## Anbefalet opstilling af containere

Følgende mappestruktur er den nuværende anbefalede opbygning. Den er fortsat foreløbig, så længe denne specifikation befinder sig i udkaststadiet.

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

## Principper for pakker

En »OMI«-container bør være:

- selvbeskrivende;
- platformuafhængig;
- kan gennemgås med almindelige arkivværktøjer;
- egnet til validering;
- egnet til langvarig opbevaring;
- i stand til at bevare ukendte filtyper;
- uafhængigt af en bestemt redaktør eller et bestemt udgivelsessystem.

---

## `META-INF`

Mappen »`META-INF`« indeholder kontroloplysninger på pakkeniveau.

### `manifest.json`

Manifestet angiver pakkens komponenter, deres medietyper, logiske roller, versioner og eventuelle afhængigheder.

### `mimetype`

Filen »`mimetype`« angiver medietypen for pakken. Den nøjagtige værdi og kravene til placeringen fastlægges, inden pakken opnår status som »Review Candidate«.

### `checksums.json`

Med hjælp af kontrolsummer kan systemer opdage utilsigtede ændringer eller beskadigelse.

### `signatures.json`

Digitale signaturer er valgfri i udkastet til arkitekturen. En fremtidig integritetsprofil vil fastlægge krav til signaturalgoritmer, kanonisering, tillid og verifikation.

---

## Manuskriptets bestanddele

Mappen »`manuscript`« indeholder de vigtigste strukturerede repræsentationer:

- `document.json` — manuskriptets opbygning og indhold;
- `metadata.json` — beskrivende, administrative og bevaringsrelaterede metadata;
- `history.json` — version og ændringshistorik;
- `review.json` — gennemgå de genstande, der er inkluderet i pakken.

En publikations- eller bevaringsprofil kan indeholde begrænsninger for, hvilke komponenter der er tilladt eller påkrævet.

---

## Filer om parforhold

Pakken kan gemme relationssamlinger separat:

- `annotations.json`;
- `citations.json`;
- `anchors.json`;
- `provenance.json`.

Ved at adskille disse samlinger muliggøres en uafhængig behandling, samtidig med at der opretholdes stabile identifikatorer på tværs af dem.

---

## Medier og ressourcer

Binære filer og ressourcer fra eksterne forfattere hører hjemme under `media`.

Implementeringer skal forhindre usikre stier, forveksling med eksekverbart indhold, gennemsøgning af arkiver og ukontrolleret opløsning af fjernressourcer.

Hvert pakket aktiv skal henvises til via en post i manifestet og en kontrolsum.

---

## Profiler og plugins

Mappen »`profiles`« kan indeholde deklarerede profiler for publikation, fagområde, validering eller bevaring.

`plugins`-mappen kan indeholde udvidelsesdata, der er nødvendige for at fortolke plugin-definerede objekter. At medtage udvidelsesdata i pakken betyder ikke, at alle brugere er nødt til at køre plugin-koden.

En kompatibel bevaringsprocessor bør bevare ressourcer med ukendt filtypenavn, når det kan gøres på en sikker måde.

---

## Komprimering og serialisering

Det fysiske arkivformat, komprimeringsmetoden, rækkefølgen af poster, kodningen af filnavne og den kanoniske byte-repræsentation vil blive fastlagt, inden denne specifikation når stadiet »Implementation Candidate«.

En container må ikke være afhængig af operativsystemspecifik sti-syntaks.

---

## Validering

Validering af containere bør omfatte:

- nødvendige kontrolfiler;
- åbenbar fuldstændighed;
- unikke og sikre ruter;
- kontrolsumens integritet;
- deklarerede medietyper;
- om den refererede fil findes;
- konsistens i identifikatorer;
- filtyper, der ikke understøttes, eller ukendte filtyper;
- maksimale ressource- og udvidelsesgrænser.

---

## Sikkerhedsmæssige overvejelser

Implementeringer skal behandle containere som ikke-tillidvækkende inddata.

Processorer bør beskytte sig mod:

- gennemgang af stien;
- arkivbomber;
- dobbelt eller tvetydige stier;
- ondsindet aktivt indhold;
- usikre symbolske links;
- vildledende medietyper;
- forfalskning af signaturer;
- ubegrænset dekomprimering eller parsning.

Åbning af en container må ikke automatisk udføre den kode, der er indeholdt i den.

---

## Ændringshistorik

- **0.1.0** — Flyttet fra den midlertidige `OMI-SPEC-012` til den officielle `OMI-SPEC-330`; rettet den fejlbehæftede struktur på Markdown og udvidet de oprindelige pakkekrav.

---

## Resumé

OMI-containerarkitekturen samler et semantisk manuskript og dets tilhørende ressourcer i en enhed, der er overførbar, kan gennemgås og bevares.

Den fastlægger struktur og integritet på pakkeniveau, mens manuskriptets semantik overlades til filformatet »OMI« og de tilhørende modelspecifikationer.
