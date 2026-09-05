---
id: bibliographic-record-model
title: OMI-SPEC-220 — Model for bibliografiske poster
sidebar_label: Model for bibliografiske poster
sidebar_position: 13
---

# OMI-SPEC-220 — Model for bibliografiske poster

## Status

**Udkast**

Version: 0.1.0

**Gammel identifikator:** `OMI-SPEC-006`

---

## Formål

Den bibliografiske postmodel definerer, hvordan OMI gengiver et citeret værk uafhængigt af en bestemt forekomst af citatet eller et bestemt manuskript.

En bibliografisk post er en standardiseret beskrivelse af et videnskabeligt eller kulturelt objekt, såsom en artikel, en bog, et kapitel, et datasæt, en arkivkilde, en softwarepakke, et billede, et kort, et juridisk dokument eller en webressource.

Modellen gør det muligt at henvise til et værk flere gange uden at gentage dets metadata.

---

## Placering i arkitekturen »OMI«

```text
External bibliographic sources
            ↓
Bibliographic Record
            ↓
Manuscript Reference Library
            ↓
Citation Occurrences
```

Den bibliografiske postmodel beskriver det andet lag. Modellen for bibliografiske postreferencer ([Citation Model](./citation-model.md)) beskriver de enkelte forekomster af henvisninger. Modellen for bibliografiske postprocesser ([Reference Library and Registry Architecture](./reference-library-registry.md)) beskriver, hvordan poster findes, identificeres, lagres, genbruges, synkroniseres og eksporteres.

---

## Grundlæggende princip

Et citeret værk og en forekomst af en henvisning er to forskellige objekter.

- Den **bibliografiske post** beskriver værket.
- **Citeringsoplysningerne** angiver, hvor og hvordan værket er citeret.
- Den **renderede henvisning** er en præsentation, der er genereret ud fra begge dele.

```text
Bibliographic Record
  title: Example Article
  DOI: 10.1234/example

Citation Occurrence A
  locator: p. 12

Citation Occurrence B
  locator: pp. 45–47
```

---

## Registrer identitet

Hver bibliografisk post har en lokal identifikator (OMI).

```json
{
  "id": "bib_01JXYZ...",
  "type": "journal-article"
}
```

Den lokale identifikator forbliver uændret, selv når eksterne metadata opdateres, eller der opdages yderligere identifikatorer.

En post kan indeholde flere eksterne identifikatorer:

- DOI
- ISBN
- ISSN
- PMID
- PMCID
- arXiv-identifikator
- Håndtag
- ARK
- URN
- URL
- identifikator for arkivet
- katalogidentifikator
- arkivreferencenummer

Eksterne identifikatorer er bevis på identitet, ikke erstatninger for den lokale identifikator OMI.

---

## Arbejde, udtryk og manifestation

Modellen skelner mellem niveauer, når det er nødvendigt:

- **Arbejde**: det abstrakte intellektuelle eller kreative arbejde.
- **Udtryk**: et sprog, en version, en revision, en oversættelse eller en udgave.
- **Manifestation**: en bestemt udgivet eller distribueret udgave.
- **Enhed**: en bestemt fysisk eller digital kopi, når der kræves en beskrivelse på enhedsniveau.

Enkle poster kan kun bestå af ét niveau. Komplekse poster kan udtrykke relationer mellem niveauer.

Eksempler:

- en originalartikel og dens oversatte version;
- et preprint og den endelige udgave;
- flere udgaver af en bog;
- et manuskript og en digital kopi;
- et datasæt og en bestemt udgave.

---

## Understøttede ressourcetyper

De centrale ord omfatter:

- tidsskriftartikel
- bog
- bogkapitel
- konferencebidrag
- afhandling
- afhandling
- rapport
- forhåndsudskrift
- datasæt
- software
- standard
- retssag
- lovgivning
- traktat
- arkivkilde
- manuskript
- charter
- kort
- billede
- lyd
- video
- webside
- arkivpost
- katalogpost

Profiler og plugins kan indføre domænespecifikke typer uden at ændre kernemodellen.

---

## Grundlæggende metadata

En bibliografisk post kan indeholde:

- titel
- undertekst
- oversat titel
- kort titel
- ressourcetype
- skabere og bidragydere
- container-titel
- udgave
- volumen
- spørgsmål
- serie
- forlag
- udgivelsessted
- udgivelsesdato
- adgangsdato
- sidesummering eller omfang
- sprog
- resumé
- nøgleord
- identifikatorer
- URL'er
- oplysninger om rettigheder
- versionsoplysninger
- herkomst
- kildespecifikke metadata

Felterne kan være strukturerede, flersprogede og gentagelige, hvor det er relevant.

---

## Medvirkende

Bidragydere vises som strukturerede agenter i stedet for som visningsstrenge.

```json
{
  "role": "author",
  "agent": {
    "type": "person",
    "familyName": "Example",
    "givenName": "Ada",
    "orcid": "0000-0000-0000-0000"
  }
}
```

De understøttede agenttyper omfatter:

- person
- organisation
- projekt
- konsortium
- ukendt eller historisk aktør

De understøttede roller omfatter:

- forfatter
- redaktør
- oversætter
- kompilator
- illustrator
- fotograf
- direktør
- bidragyder
- udstedende myndighed

Rolleordforrådet kan udvides.

---

## Flersprogede metadata

Titler, undertekster, resuméer, noter og udvalgte bidragyderes navne kan være flersprogede.

```json
{
  "title": {
    "und": "Original title",
    "en": "English title",
    "hu": "Magyar cím"
  }
}
```

Posten skal bevare metadataene på originalsproget og skelne dem fra oversatte eller normaliserede værdier.

---

## Containere og hierarkier

Bibliografiske ressourcer kan være knyttet til beholdere.

Eksempler:

- artikel → tidsskriftnummer → tidsskrift
- kapitel → antologi → serien
- arkivgenstand → fil → samling → arkiv
- offentliggørelse af datasæt → datasæt → forskningsprojekt

Forhold mellem containere modelleres eksplicit i stedet for at blive sammenfattet til én formateret streng.

---

## Herkomst

Hver importeret eller angivet metadataværdi kan indeholde oplysninger om herkomst.

```json
{
  "value": "Example title",
  "source": "crossref",
  "retrievedAt": "2026-08-06T12:00:00Z",
  "confidence": "authoritative"
}
```

Oprindelsen kan omfatte:

- kildesystem
- kildepostidentifikator
- hentningsdato
- import af bruger eller tjeneste
- assertionsmetode
- konfidensniveau
- ændringshistorik

OMI må ikke uden varsel overskrive metadata, som brugeren har rettet, med eksterne data af lavere kvalitet.

---

## Status for posten

En post kan have en af følgende tilstande:

- uafklaret
- foreløbig
- vedtaget
- bekræftet
- i tvivl
- forældet

Der kan oprettes en foreløbig post på baggrund af ufuldstændige brugeroplysninger, som senere kan udbygges.

---

## Deduplikering og ækvivalens

To poster kan repræsentere det samme værk, selvom deres metadata er forskellige.

Ved deduplikering kan der anvendes:

- præcise, permanente identifikatorer;
- normaliseret sammenkobling af titler og bidragydere;
- sammenligning af beholder, dato, volumen, udgave og side;
- identifikatorer for arkiver eller kataloger;
- brugerbekræftelse.

Systemet skal skelne mellem:

- nøjagtig ækvivalens;
- sandsynlig ækvivalens;
- versionsforhold;
- oversættelsesforhold;
- forholdet mellem tilbagetrækning og korrektion;
- uafhængige poster med lignende metadata.

Ved sammenlægning af poster skal herkomstoplysningerne og revisionssporet bevares.

---

## Tilgængelighed og adgang

En post kan beskrive et eller flere adgangssteder:

```json
{
  "access": [
    {
      "url": "https://example.org/article",
      "format": "html",
      "accessType": "open"
    },
    {
      "url": "https://example.org/article.pdf",
      "format": "pdf",
      "accessType": "open"
    }
  ]
}
```

Adgangsmetadata kan indeholde følgende oplysninger:

- landingsside
- fuld tekst
- abstract-side
- kopi fra arkivet
- forlagseksemplar
- digitaliseret erstatningskopi
- maskinlæsbar repræsentation

OMI angiver, om ressourcen er tilgængelig, men antager ikke, at et link giver tilladelse til at videreformidle eller indlejre ressourcen.

---

## Rettelser, tilbagekaldelser og versioner

Bibliografiske poster kan angive forhold som f.eks.:

- isVersionOf
- hasVersion
- isTranslationOf
- hasTranslation
- retter
- isCorrectedBy
- trækker tilbage
- isRetractedBy
- kosttilskud
- isSupplementedBy

Disse sammenhænge gør det muligt for et manuskript at henvise til det påtænkte videnskabelige objekt i stedet for en tvetydig tekststreng.

---

## Serialisering og interoperabilitet

Modellen skal kunne kortlægges til eller fra:

- CSL JSON
- BibTeX og BibLaTeX
- RIS
- Crossref-metadata
- DataCite-metadata
- JATS XML
- MODS
- Dublin Core
- schema.org
- Zotero-oversættere
- formater for bibliotekskataloger

Kortlægninger kan medføre datatab. OMI skal, når det er muligt, bevare de ikke-kortlagte kildedata.

---

## Validering

Valideringen kan kontrollere:

- obligatoriske felter efter ressourcetype;
- identifikatorsyntaks og kontrolsummer;
- datakonsistens;
- bidragerstruktur;
- forhold mellem containere;
- dobbeltidentifikatorer;
- umulige kombinationer af side, bind eller nummer;
- uløste konflikter;
- defekte eller omdirigerede URL’er.

Valideringsgraden kan være »informativ«, »advarsel« eller »fejl«.

---

## Et minimalt eksempel

```json
{
  "id": "bib_01JXYZ",
  "type": "journal-article",
  "title": {
    "en": "A Structured Scholarly Article"
  },
  "contributors": [
    {
      "role": "author",
      "agent": {
        "type": "person",
        "familyName": "Example",
        "givenName": "Ada"
      }
    }
  ],
  "container": {
    "title": "Journal of Open Manuscripts"
  },
  "issued": "2026",
  "identifiers": [
    {
      "scheme": "doi",
      "value": "10.1234/example"
    }
  ],
  "status": "resolved"
}
```

---

## Ændringshistorik

- **0.1.0** — Flyttet fra den midlertidige adresse `OMI-SPEC-006` til den officielle adresse `OMI-SPEC-220`.

---

## Resumé

Den bibliografiske postmodel giver OMI en stabil, normaliseret og herkomstbaseret repræsentation af de citerede værker.

Det forhindrer dobbeltregistrering af metadata, understøtter flersproget og fagspecifik beskrivelse, bevarer links til eksterne autoritetskilder og udgør det fælles mål, der anvendes af manuskriptreferencelibraryer og citatforekomster.
