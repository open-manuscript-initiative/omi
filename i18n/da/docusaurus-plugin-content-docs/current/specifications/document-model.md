---
id: document-model
title: OMI-SPEC-100 — Dokumentmodel
sidebar_label: Dokumentmodel
sidebar_position: 10
---

# OMI-SPEC-100 — Dokumentmodel

## Status

**Udkast**

Version: 0.1.0

**Gammel identifikator:** `OMI-SPEC-001`

---

# Formål

Open Manuscript Initiative (OMI) definerer en semantisk dokumentmodel, der er udviklet specifikt til videnskabelig kommunikation.

I modsætning til traditionelle tekstbehandlingsprogrammer adskiller OMI den faglige betydning fra den visuelle præsentation. Forfatterne beskriver *hvad* informationen repræsenterer, snarere end *hvordan* den skal se ud.

Dokumentmodellen fungerer som det fælles grundlag for udarbejdelse, fagfællebedømmelse, udgivelse, bevaring og maskinel behandling.

---

# Designprincipper

Dokumentmodellen bygger på følgende principper:

- Semantik først
- Platformuafhængig
- Letlæseligt
- Kan bearbejdes maskinelt
- Udvidelig
- Kompatibel
- Tilgængelig
- Kan opbevares i lang tid

---

# Lagopbygget arkitektur

OMI-dokumentmodellen består af flere lag.

```text
┌──────────────────────────────────────────────┐
│               Discipline Profiles            │
├──────────────────────────────────────────────┤
│               Scholarly Objects              │
├──────────────────────────────────────────────┤
│              Core Document Model             │
└──────────────────────────────────────────────┘
```

Kernedokumentmodellen er ens på tværs af alle fagområder.

De øverste lag udvider, men erstatter aldrig, kernespecifikationen.

---

# Kernedokumentmodel

Hvert manuskript i »OMI« indeholder et fælles sæt semantiske objekter.

## Metadata

- Titel
- Undertekst
- Forfattere
- Tilknytninger
- ORCID
- Resumé
- Nøgleord
- Sprog
- Licens
- Finansiering
- Permanente identifikatorer

---

## Dokumentets opbygning

- Afsnit
- Underafsnit
- Afsnit
- Citat
- Liste
- Figur
- Tabel
- Billedtekst
- Ligning
- Bilag

---

## Videnskabelige objekter

- Kildehenvisning
- Litteraturliste
- Fodnote
- Slutnote
- Krydshenvisning
- Datasæt
- Software
- Supplerende materiale
- Kommentar til anmeldelsen
- Kommentar

---

# Fagprofiler

Forskellige videnskabelige discipliner kræver specialiserede semantiske objekter.

OMI udvider kerne-dokumentmodellen gennem **fagprofiler**.

En profil tilføjer nye objekttyper, valideringsregler, metadata og eksportadfærd uden at ændre den underliggende dokumentmodel.

Eksempler herpå er:

- Historie
- Teologi
- Sprogvidenskab
- Matematik
- Fysik
- Kemi
- Biologi
- Medicin
- Datalogi
- Ingeniørvidenskab
- Økonomi
- Lovgivning

---

# Eksempel: Historikprofil

Profilen »Historie« introducerer fagspecifikke semantiske objekter såsom:

- Arkivkilde
- Historisk person
- Historisk sted
- Historisk begivenhed
- Kilde til manuskriptet
- Regest
- Kritisk apparatur
- Diplomatisk transskription

---

# Eksempel: Matematikprofil

Matematikprofilen udvider modellen med:

- Definition
- Aksiom
- Sætning
- Lemma
- Følge
- Bevis
- Formel
- Symbolregister

---

# Eksempel: Fysikprofil

Andre semantiske objekter omfatter:

- Ligning
- Fysisk konstant
- Måling
- Enhed
- Instrument
- Eksperiment
- Simulering

---

# Eksempel: Kemi-profil

Andre semantiske objekter omfatter:

- Molekyle
- Sammensætning
- Reaction
- Krystalstruktur
- Spektrum
- Kemisk formel

---

# Eksempel: Biologi-profil

Andre semantiske objekter omfatter:

- Arter
- Taksonomisk klassificering
- Gen
- Protein
- DNA-sekvens
- Prøve

---

# Eksempel: Lægemiddelprofil

Andre semantiske objekter omfatter:

- Klinisk forsøg
- Patientkohorte
- Indgriben
- Resultat
- Etisk godkendelse
- CONSORT-tjekliste

---

# Flere profiler

Videnskabelig forskning bliver i stigende grad tværfaglig.

Et manuskript i »OMI« kan derfor anvende flere fagprofiler samtidigt.

Eksempel:

```text
History
+ Computer Science
+ Linguistics
```

eller

```text
Biology
+ Computer Science
+ Statistics
```

Hver profil tilføjer yderligere semantiske objekter, samtidig med at den forbliver fuldt kompatibel med Core Document Model.

---

# Plugin-arkitektur

Disciplinprofiler er implementeret som plugins.

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

Hvert plugin kan definere:

- yderligere semantiske objekter
- metadata
- valideringsregler
- eksporttilknytninger
- udvidelser til brugergrænsefladen

uden at ændre OMI Core.

---

# Objektorienteret model

Et »OMI«-manuskript består af semantiske objekter.

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

Hvert objekt har:

- unik identifikator
- semantisk type
- metadata
- relationer
- versionshistorik

---

# Semantiske relationer

Objekter kan henvise til hinanden.

Eksempler herpå er:

- henvisning → bibliografisk oplysning
- figur → billedtekst
- sætning → bevis
- arkivkilde → arkiv
- person → ORCID
- datasæt → DOI

Forholdene er eksplicitte og maskinlæsbare.

---

# Udvidelsesmuligheder

Dokumentmodellen er udformet med henblik på langsigtet udvikling.

I fremtidige versioner vil der muligvis blive indført yderligere objekttyper, uden at det påvirker eksisterende manuskripter.

Bagudkompatibilitet er et grundlæggende designkrav.

---

# Fremtidige opgaver

Fremtidige specifikationer vil fastlægge:

- Annotationsmodel
- Gennemgangsmodel
- Citeringsmodel
- Metadatamodel
- Udgivelsesmodel
- Plugin-API
- Specifikation af filformat

---

# Ændringshistorik

- **0.1.0** — Flyttet fra den midlertidige adresse `OMI-SPEC-001` til den officielle adresse `OMI-SPEC-100`.

---

# Resumé

OMI-dokumentmodellen er udformet med henblik på at gengive videnskabelig viden frem for formaterede dokumenter.

En stabil kerne-dokumentmodel kombineret med udvidelige fagprofiler gør det muligt for OMI at understøtte alle videnskabelige discipliner og samtidig sikre interoperabilitet, portabilitet og bæredygtighed på lang sigt.
