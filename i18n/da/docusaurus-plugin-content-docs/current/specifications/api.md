---
id: platform-api
title: OMI-SPEC-310 — PlatformAPI
sidebar_label: API til platformen
sidebar_position: 19
---

# OMI-SPEC-310 — PlatformAPI

## Status

**Udkast**

Version: 0.1.0

**Gammel identifikator:** `OMI-SPEC-010`

---

# Formål

PlatformAPIen beskriver, hvordan eksterne applikationer, plugins, automatiseringsværktøjer og publiceringsplatforme interagerer med Open Manuscript Initiative (OMI).

APIen er opbygget omkring semantiske videnskabelige objekter frem for filer.

---

# Designprincipper

Platformen API følger disse principper:

- API Først
- Objektorienteret
- Begivenhedsstyret
- Platformsuafhængig
- Versionsstyret
- Sikker
- Udvidelig

---

# API Lag

```
Applications

↓

REST API

↓

Event API

↓

Plugin API

↓

OMI Core
```

---

# Vigtigste ressourcer

APIet offentliggør videnskabelige objekter.

Eksempler:

- Dokumenter
- Afsnit
- Afsnit
- Ankre
- Annotationer
- Kilder
- Metadata
- Anmeldelser
- Datasæt
- Forfattere
- Tilknytninger
- Publikationsprofiler

---

# REST-API

Typiske endepunkter omfatter:

```
GET    /documents

POST   /documents

GET    /documents/{id}

PATCH  /documents/{id}

DELETE /documents/{id}
```

Objekter udveksles som strukturerede JSON.

---

# Objekt-API

Alle videnskabelige objekter følger en fælles grænseflade.

Eksempel:

```
GET /objects/{id}
```

Svar:

```json
{
  "id": "omi:citation:8f5a21",
  "type": "Citation",
  "version": 4,
  "metadata": {},
  "relationships": {}
}
```

---

# Begivenheds-API

OMI offentliggør begivenheder, der beskriver ændringer i manuskriptet.

Eksempler:

- Dokument oprettet
- Dokument åbnet
- Objekt oprettet
- Objekt opdateret
- Anker Oprettet
- Annotation tilføjet
- Kildehenvisning valideret
- Anmeldelse indsendt
- Publikationen er påbegyndt
- Publikationen er afsluttet

Plugins abonnerer på begivenheder i stedet for at ændre kernen direkte.

---

# Plugin-API

Plugins kommunikerer med OMI via stabile grænseflader.

Eksempler:

```
register()

activate()

deactivate()

dispose()
```

Plugins har aldrig adgang til interne implementeringsdetaljer.

---

# Rendering API

Visningsmoduler implementerer en fælles grænseflade.

Eksempel:

```
render(document, profile)
```

Mulige resultater:

- HTML
- PDF
- EPUB
- DOCX
- JATS XML
- Markdown

---

# ValideringsAPI

Valideringstjenester kan gennemgå videnskabelige objekter.

Eksempler:

- Validering af metadata
- Validering af kildehenvisninger
- Validering af tilgængelighed
- Fagområdespecifik validering

Valideringen genererer strukturerede rapporter.

---

# Godkendelse

Mulige godkendelsesmetoder omfatter:

- OAuth 2.1
- OpenID Connect
- API Token
- Servicekonti

Godkendelsesmetoder afhænger af den konkrete implementering.

---

# Godkendelse

Der kan tildeles tilladelser på forskellige niveauer.

Eksempler:

- Læs dokumentet
- Rediger metadata
- Opret en kommentar
- Indsend anmeldelse
- Udgiv
- Administrer plugins

Autoriseringen bør understøtte rollebaseret adgangskontrol og adgangskontrol på objektniveau.

---

# Versionsstyring

»API« er en versioneret udgave.

Eksempel:

```
/api/v1/
/api/v2/
```

Ændringer, der medfører inkompatibilitet, kræver en ny version af API.

---

# Webhooks

Eksterne systemer kan abonnere på begivenheder.

Eksempler:

```
POST

DocumentPublished

↓

https://journal.example/webhook
```

Blandt de støttede arrangementer kan nævnes:

- udgivelsen er afsluttet
- anmeldelse indsendt
- manuskriptet er godkendt
- Metadata opdateret

---

# Batch-operationer

APIen bør understøtte batchbehandling.

Eksempler:

- kontroller alle kildehenvisninger
- genoprette metadata
- Eksporter alle publikationsformater
- import af objektsamlinger

---

# Søg på API

Søgningen er semantisk snarere end tekstbaseret.

Eksempler:

```
author = "Smith"

↓

all manuscripts
```

```
citation DOI = ...

↓

all references
```

```
object type = Figure

↓

all figures
```

---

# Interoperabilitet

Fremtidige integrationer omfatter:

- OJS
- OMP
- OPS
- Crossref
- DataCite
- ORCID
- Zenodo
- GitHub
- n8n
- Zotero

---

# Fremtidige opgaver

Fremtidige specifikationer vil fastlægge:

- GrafAPI
- Forespørgselssprog
- Objekt-API
- Synkronisering API
- AI-udvidelse API

---

# Ændringshistorik

- **0.1.0** — Flyttet fra den midlertidige adresse `OMI-SPEC-010` til den officielle adresse `OMI-SPEC-310`.

---

# Resumé

OMI-platformen API tilbyder en stabil, versionsstyret og objektorienteret grænseflade til videnskabelig kommunikation.

I stedet for at eksponere filer eksponerer »API« semantiske videnskabelige objekter, hvilket muliggør interoperabilitet på tværs af udgivelsessystemer, arkiver, automatiseringsplatforme og fremtidige videnskabelige infrastrukturer.
