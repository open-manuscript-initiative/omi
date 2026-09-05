---
id: citation-model
title: OMI-SPEC-210 — Citeringsmodel
sidebar_label: Citeringsmodel
sidebar_position: 14
---

# OMI-SPEC-210 — Citeringsmodel

## Status

**Udkast**

Version: 0.2.0

**Gammel identifikator:** `OMI-SPEC-005`

---

## Formål

Citation-modellen beskriver, hvordan et manuskript i OMI registrerer en enkelt henvisning til et videnskabeligt eller kulturelt objekt.

En henvisning gemmes ikke som formateret tekst. Det er et semantisk objekt, der knytter et sted i manuskriptet til en struktureret bibliografisk post.

Denne opdeling muliggør ensartet gengivelse, præcise lokalisatorer, maskinel behandling, validering, versionsstyring og interoperabilitet.

---

## Placering i referencearkitekturen

```text
External bibliographic sources
            ↓
Bibliographic Record
            ↓
Manuscript Reference Library
            ↓
Citation Occurrence
            ↓
Rendered citation and bibliography
```

»[Bibliographic Record Model](./bibliographic-record-model.md)« beskriver det citerede værk. »[Reference Library and Registry Architecture](./reference-library-registry.md)« beskriver identifikation, afstemning, lagring, genbrug og eksport. Denne specifikation beskriver de enkelte forekomster af citater i manuskriptet.

---

## Væsentlig forskel

En bibliografisk post og en forekomst af en henvisning er to forskellige objekter.

```text
Bibliographic Record
  Example Book

Citation A
  page 12

Citation B
  pages 45–47
```

Værket beskrives én gang. Hver forekomst tilføjer manuskriptspecifik kontekst, såsom lokator, præfiks, suffiks, hensigt og anker.

---

## Designprincipper

Citationsmodellen er:

- semantik først;
- præsentationsuafhængig;
- knyttet til et bestemt sted i manuskriptet;
- genanvendelig;
- maskinlæsbar;
- stiluafhængig;
- kan versioneres;
- udvidelig.

---

## Kildehenvisning

En henvisning kan indeholde:

- lokal identifikator;
- bibliografisk målidentifikator;
- manuskriptanker;
- lokalisator eller lokalisatorområde;
- præfiks;
- endelse;
- citeringsform;
- henvisningens formål eller sammenhæng;
- Bemærk;
- versionsmetadata.

Eksempel:

```json
{
  "id": "cit_01JXYZ",
  "target": "bib_01JABC",
  "anchor": "anchor_01JDEF",
  "locator": {
    "type": "page-range",
    "value": "45–47"
  },
  "prefix": "see also",
  "suffix": null
}
```

---

## Forankring

Hver forekomst af en henvisning skal være knyttet til et »OMI«-anker.

Et anker kan angive:

- et indsættelsespunkt;
- et tekstområde;
- en blok;
- en bemærkning;
- en tabelcelle;
- en billedtekst;
- et andet identificerbart videnskabeligt objekt.

Ved hjælp af forankring kan citater bedre modstå redigering, gennemgang, sammenligning og omformning end rene tegnforskydninger.

---

## Bibliografisk mål

Målet er normalt en post i manuskriptets referencelibrary.

En henvisning må ikke gentage de fuldstændige bibliografiske metadata, medmindre dette er nødvendigt af hensyn til udveksling eller bevaring. Den autoritative relation angives ved hjælp af postens identifikator.

Et mål kan være:

- tidsskriftartikel;
- bog;
- kapitel;
- konferenceartikel;
- speciale eller afhandling;
- datasæt;
- software;
- forudtryk;
- standard;
- webressource;
- arkivkilde;
- manuskript;
- vedtægter;
- billede;
- kort;
- lyd eller video;
- lovgivning eller retspraksis;
- endnu en udvidelig ressourcetype.

---

## Lokalisatorer

En lokator identificerer den citerede del af målet.

Understøttede lokatortyper kan omfatte:

- side;
- sideinterval;
- kapitel;
- afsnit;
- afsnit;
- figur;
- tabel;
- bilag;
- linje;
- folio;
- tidsstempel;
- vers;
- artikel eller bestemmelse;
- arkivenhed.

Lokatorer bør gemmes i struktureret form frem for som en færdigformateret sætning.

```json
{
  "type": "folio",
  "from": "12r",
  "to": "13v"
}
```

Publikationsprofilerne afgør, om dette bliver `fols. 12r–13v`, en anden lokaliseret version eller den strukturerede XML.

---

## Citeringsformater

En forekomst af et citat kan udtrykke en form, f.eks.:

- i parentes;
- fortælling;
- henvisning;
- kun litteraturliste;
- kildehenvisning;
- krydshenvisning;
- skjult, maskinlæsbar kildehenvisning.

De understøttede formater afhænger af fagområdet og publikationsprofilen.

---

## Præfikser og suffikser

Præfikser og suffikser indeholder citatspecifik tekst, der ikke indgår i den bibliografiske post.

Eksempler:

- `see`;
- `compare`;
- `quoted in`;
- `emphasis added`;
- `translation by the author`.

Applikationer bør holde disse værdier adskilt fra lokatoren og den viste kildehenvisning.

---

## Formålet med citater og akademiske relationer

En henvisning kan eventuelt angive, hvorfor kilden henvises til.

Eksempler herpå er:

- understøtter;
- modbeviser;
- strækker sig;
- omhandler;
- sammenligner;
- gengiver;
- oversætter;
- kritik;
- leverer data;
- indeholder en metode;
- anmeldelser;
- retter.

Intent-ordlister skal forblive udvidelige og bør ikke være obligatoriske, når forfatteren eller fagområdet ikke anvender dem.

---

## Grupperede henvisninger

Flere forekomster af en henvisning kan udgøre én henvisningsgruppe.

```text
(Smith 2022; Jones 2024, 18–20; Example 2026)
```

Gruppen styrer rækkefølgen, afgrænsningstegnene og de fælles affikser, mens hvert medlem bevarer sit eget mål og sin egen lokator.

---

## Gentagne henvisninger

Gentagne henvisninger skal henvise til den samme bibliografiske post i stedet for at duplikere den.

Publikationsprofiler kan gengive gentagne henvisninger ved hjælp af:

- fuldstændig kildeangivelse;
- forkortet titel;
- forfatter-dato-format;
- `ibid.` eller tilsvarende konventioner;
- numerisk reference;
- hyperlink.

Dette er gengivelsesbeslutninger, ikke ændringer af det citerede objekt.

---

## Referencestilarter

Citeringsformater er præsentationsprofiler.

Eksempler herpå er:

- APA;
- Chicago;
- MLA;
- Harvard;
- IEEE;
- Vancouver;
- OSCOLA;
- Turabian;
- tidsskriftsspecifikke formater.

Ændringen af stilen må ikke medføre ændringer i den underliggende bibliografiske post eller i selve henvisningen.

---

## Fagprofiler

Profiler kan indeholde specialiserede lokatorer, ressourcetyper og gengivelsesregler.

Historien kan omfatte arkivsignaturer, folioer, charter og registre.

Jura kan omfatte retssager, love, traktater, artikler, afsnit og bestemmelser.

Inden for medicin kan det dreje sig om registreringer af kliniske forsøg, kliniske retningslinjer og versioner af datasæt.

Datavidenskab kan omfatte arkiver, softwareudgivelser, pakker, commits og dokumentation på API.

---

## Rendering

En enkelt forekomst af en henvisning kan vises forskelligt afhængigt af outputformatet.

```text
OMI citation object
├── HTML inline citation
├── PDF footnote
├── EPUB hyperlink
├── JATS <xref> and <ref>
├── CSL processor input
└── Crossref or DataCite metadata
```

Visningen afhænger af publikationsprofilen, sproget, citatstilen og outputformatet.

---

## Validering

Valideringen kan kontrollere:

- målposten findes;
- ankret findes;
- lokationstypen er gyldig for målet eller profilen;
- lokalisationsområdet er korrekt defineret;
- de obligatoriske felter i henvisningen er udfyldt;
- Rækkefølgen i citatgruppen er korrekt;
- Dobbeltforekomster er bevidste;
- målposten er uafklaret, i konflikt, korrigeret eller tilbagekaldt;
- Citeringsformatet kan gengive de tilgængelige metadata.

Valideringsniveauet kan være »informativt«, »advarsel« eller »fejl«.

---

## Interoperabilitet

Henvisninger og de emner, de henviser til, skal knyttes til eller fra:

- CSL JSON;
- BibTeX og BibLaTeX;
- RIS;
- JATS XML;
- Crossref-metadata;
- DataCite-metadata;
- Zotero-kompatible formater;
- EndNote-formater;
- formater til arkiver og biblioteksudveksling.

OMI bør bevare citatspecifikke oplysninger, som ikke kan gengives i et målformat.

---

## Versionsstyring

Forekomster af henvisninger indgår i versionsstyringen af manuskriptet.

Følgende ændringer kan være markeret:

- indsat eller slettet henvisning;
- ændret mål;
- ændret lokator;
- ændret præfiks eller suffiks;
- ændret hensigt;
- ændret anker;
- ændringer i medlemskabet i en citatgruppe.

Ændringer i bibliografiske poster registreres uafhængigt af ændringer i forekomster af henvisninger.

---

## Plugin-udvidelser

Plugins og profiler kan medføre:

- citeringsformater;
- lokaliseringstyper;
- formålsordforråd;
- valideringsregler;
- renderingsregler;
- domænespecifikke relationer.

Udvidelser må ikke kræve ændringer af OMI Core.

---

## Fremtidige opgaver

Fremtidige specifikationer kan omfatte:

- udveksling af citatdiagrammer;
- forbundne åbne citatordbøger;
- præcise sammenhænge mellem påstande og kildepassager;
- analyse af citat-kontekst;
- verificerbar kildeangivelse;
- fælles verifikation af kildehenvisninger.

---

## Ændringshistorik

- **0.2.0** — Flyttet fra den midlertidige adresse `OMI-SPEC-005` til den officielle adresse `OMI-SPEC-210`.

---

## Resumé

Citationsmodellen fremstiller hver enkelt henvisning som et struktureret, forankret og præsentationsuafhængigt objekt.

Ved at adskille citater fra bibliografiske poster og præsentationen giver OMI forfattere mulighed for at tilføje et værk én gang, citere det mange gange med præcise henvisninger og udgive det samme manuskript i forskellige videnskabelige stilarter og formater.
