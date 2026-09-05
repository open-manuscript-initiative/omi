---
id: metadata-model
title: OMI-SPEC-140 — Metadatamodel
sidebar_label: Metadatamodel
sidebar_position: 13
---

# OMI-SPEC-140 — Metadatamodel

## Status

**Udkast**

Version: 0.1.0

**Gammel identifikator:** `OMI-SPEC-004`

---

# Formål

Metadatamodellen fastlægger, hvordan videnskabelige metadata præsenteres i »Open Manuscript Initiative« (OMI).

Metadata beskriver det videnskabelige objekt snarere end dets visuelle fremstilling.

Modellen er udformet med henblik på at sikre interoperabilitet mellem redigeringsværktøjer, udgivelsesplatforme, arkiver, indekseringstjenester og systemer til langtidsbevaring.

---

# Designprincipper

Metadatamodellen følger disse principper:

- Semantik først
- Maskinlæsbar
- Forståeligt for mennesker
- Kompatibel
- Udvidelig
- Vedvarende
- FAIR-kompatibel
- Platformuafhængig

---

# Metadatalag

OMI skelner mellem flere metadatalag.

```
Document
│
├── Descriptive Metadata
├── Administrative Metadata
├── Technical Metadata
├── Preservation Metadata
└── Discipline-specific Metadata
```

---

# Beskrivende metadata

Beskriver selve det videnskabelige arbejde.

Eksempler:

- Titel
- Undertekst
- Resumé
- Nøgleord
- Sprog
- Emne
- Disciplin
- Publikationstype

---

# Forfattermetadata

Hver forfatter repræsenteres som et semantisk objekt.

Eksempler:

- Fulde navn
- Foretrukket navn
- ORCID
- Tilknytning
- ROR Identifikator
- E-mail (valgfrit)
- Land
- Biografi (valgfrit)

En forfatter kan have flere tilknytninger.

---

# Metadata om tilhørsforhold

Institutionelle oplysninger bør forblive uafhængige af forfatterne.

Eksempler:

- Institutionens navn
- Afdeling
- Fakultetet
- Land
- By
- ROR Identifikator
- Hjemmeside

---

# Metadata for identifikatorer

OMI understøtter flere permanente identifikatorer.

Eksempler:

- DOI
- ARK
- Håndtag
- ORCID
- ROR
- ISBN
- ISSN
- ISNI

Modellen tillader flere identifikatorer for det samme objekt.

---

# Metadata for publikationen

Eksempler herpå er:

- Publikationsstatus
- Version
- Udgiver
- Tidsskrift
- Mængde
- Problem
- Varenummer
- Sider
- Udgivelsesdato

---

# Metadata om rettigheder

Oplysningerne om rettigheder omfatter:

- Licens
- Ophavsretsindehaver
- År for ophavsret
- Embargo
- Adgangsrettigheder

Eksempler:

- MIT
- CC BY 4.0
- CC BY-SA
- CC BY-NC
- CC0

---

# Metadata om finansiering

Forskningsmidlerne bør fremgå tydeligt.

Eksempler:

- Finansieringsorganisation
- Bevillingsnummer
- Bevillingens titel
- Finansieringskildens identifikator

Fremtidige versioner vil muligvis understøtte integration med Crossref Funder Registry.

---

# Metadata om forskningsresultater

Et manuskript kan henvise til yderligere forskningsresultater.

Eksempler:

- Datasæt
- Software
- Protokol
- Billedarkiv
- Supplerende materiale
- Multimedier

Hvert output bør så vidt muligt have sin egen permanente identifikator.

---

# Metadata vedrørende bevaring

Langtidsbevaring kræver yderligere metadata.

Eksempler:

- Oprettelsesdato
- Ændringsdato
- Versionshistorik
- Kontrolsum
- Filformat
- Bevaringsstatus

Fremtidige versioner vil muligvis være i overensstemmelse med PREMIS.

---

# Fagspecifikke metadata

Disciplinprofiler kan udvide metadatamodellen.

Eksempler:

Historie

- Arkiv
- Samling
- Signatur

Medicin

- Etisk godkendelse
- Identifikationsnummer for klinisk forsøg

Kemi

- CAS-nummer
- Molekylformel

Biologi

- Taksonomisk identifikator
- Genidentifikator

Matematik

- MSC-klassificering

---

# Metadata-relationer

Metadataobjekter er indbyrdes forbundne.

Eksempel:

```
Author
    │
    ├── ORCID
    ├── Affiliation
    └── Funding

Affiliation
    │
    └── ROR
```

Forholdene er eksplicitte og maskinlæsbare.

---

# Interoperabilitet

Metadatamodellen er udformet med henblik på kompatibilitet med eksisterende standarder.

De planlagte kortlægninger omfatter:

- JATS
- Crossref
- DataCite
- Dublin Core
- schema.org
- MARC21
- MODS
- BibTeX
- CSL JSON
- RIS

---

# Validering

Metadata bør understøtte validering.

Eksempler herpå er:

- obligatoriske felter
- validering af identifikatorer
- kontrollerede ordlister
- sprogkoder
- datoformater

Valideringsreglerne kan variere alt efter publikationsprofilen.

---

# Udvidelsesmuligheder

Metadatamodellen kan udvides ved hjælp af plugins.

Plugins kan medføre:

- nye metadatafelter
- fagspecifikke ordforråd
- valideringsregler
- eksporttilknytninger

uden at ændre kernespecifikationen.

---

# Fremtidige opgaver

Fremtidige specifikationer vil fastlægge:

- Citeringsmodel
- Gennemgå metadata
- Bevaringsmodel
- Linkede åbne data
- Integration af Knowledge Graph

---

# Ændringshistorik

- **0.1.0** — Flyttet fra den midlertidige adresse `OMI-SPEC-004` til den officielle adresse `OMI-SPEC-140`.

---

# Resumé

Metadatamodellen »OMI« udgør en fleksibel, udvidelig og standardbaseret ramme til beskrivelse af videnskabelige objekter.

Ved at adskille metadata fra præsentationen og samtidig understøtte permanente identifikatorer og internationale standarder muliggør OMI problemfri interoperabilitet på tværs af økosystemer inden for videnskabelig publicering.
