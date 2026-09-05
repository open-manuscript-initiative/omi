---
id: review-model
title: OMI-SPEC-200 — Testmodel
sidebar_label: Gennemgangsmodel
sidebar_position: 15
---

# OMI-SPEC-200 — Testmodel

## Status

**Udkast**

Version: 0.1.0

**Gammel identifikator:** `OMI-SPEC-006`

---

# Formål

»Review Model« definerer, hvordan videnskabelige bedømmelsesprocesser er afbildet i »Open Manuscript Initiative« (OMI).

I stedet for at betragte fagfællebedømmelse som en ekstern arbejdsgang behandler OMI bedømmelserne som semantiske objekter, der er direkte knyttet til manuskriptet.

Denne fremgangsmåde muliggør fælles redigering, gennemsigtige revisionshistorikker og kompatibilitet på tværs af udgivelsesplatforme.

---

# Designprincipper

Gennemgangsmodellen følger disse principper:

- Semantik først
- Uafhængig af arbejdsgangen
- Uafhængig anmelder
- Platformuafhængig
- Gennemsigtig
- Udvidelig
- Vedvarende
- Maskinlæsbar

---

# Gennemgang som et semantisk lag

En anmeldelse indgår ikke i manuskriptets indhold.

I stedet udgør anmeldelserne et selvstændigt semantisk lag, der er knyttet via Anchors.

```
Document
    │
    ├── Content Layer
    ├── Annotation Layer
    └── Review Layer
```

Manuskriptet forbliver uændret, mens oplysningerne om bedømmelsen udvikler sig uafhængigt heraf.

---

# Gennemgang af objekter

En anmeldelse består af semantiske objekter.

Eksempler herpå er:

- Anmeldelse
- Anmelder
- Anbefaling
- Kommentar til anmeldelsen
- Redaktionel beslutning
- Forfatterens svar
- Anmodning om revision

Hvert objekt har sin egen identifikator og sine egne metadata.

---

# Gennemgang af roller

OMI skelner mellem forskellige deltagerroller.

Eksempler:

- Forfatter
- Anmelder
- Redaktør
- Gæsteredaktør
- Chefredaktør
- Udgiver
- AI-assistent

Der kan tilføjes yderligere roller via plugins.

---

# Gennemgang af modeller

OMI understøtter flere forskellige gennemgangsworkflows.

Eksempler herpå er:

- Enkeltblind
- Dobbeltblind
- Tredobbeltblind
- Åben gennemgang
- Gennemsigtig gennemgang
- Fælles gennemgang
- Gennemgang efter udgivelse

Arbejdsgangen fastlægges af publikationsprofilen og ikke af selve manuskriptet.

---

# Kommentarer til anmeldelsen

Anmeldelseskommentarer er semantiske annoteringer, der er knyttet via Anchors.

En kommentar kan henvise til:

- et ord
- en sætning
- et afsnit
- et tal
- en tabel
- en formel
- metadata
- hele manuskriptet

Kommentarer forbliver gyldige, selv når manuskriptet omformateres.

---

# Gennemgå metadata

Hver anmeldelse indeholder:

- Identifikator
- Anmelder
- Anmeldelsestype
- Anbefaling
- Tidspunkt
- Version
- Synlighed
- Status

---

# Anbefalinger til gennemgang

Typiske anbefalinger omfatter:

- Accepter
- Mindre ændring
- Omfattende revision
- Indsend igen
- Afvis

I publikationsprofilerne kan der være angivet yderligere anbefalinger.

---

# Redaktionelle beslutninger

Redaktionelle beslutninger er separate semantiske objekter.

Eksempler:

- Afvisning ved skrivebordet
- Send til gennemgang
- Revision påkrævet
- Accepter
- Afvis
- Udgiv

Hver afgørelse kan henvise til en eller flere gennemgange.

---

# Forfatteres svar

Forfattere kan svare direkte på kommentarerne fra bedømmerne.

```
Reviewer Comment

↓

Author Response

↓

Editorial Decision
```

Hele diskussionen forbliver sammenkædet via permanente identifikatorer.

---

# Synlighed

Gennemgangsobjekter understøtter forskellige synlighedsniveauer.

Eksempler:

- Privat
- Kun for anmeldere
- Kun for redaktører
- Forfattere
- Offentligt

Synligheden kan ændre sig i løbet af manuskriptets livscyklus.

---

# Versionsstyring

Anmeldelser tager højde for versioner.

Systemet bevarer:

- oprindelig anmeldelse
- revideret anmeldelse
- forfatteres svar
- redaktionelle beslutninger

Intet overskrives.

---

# Tidsplan for gennemgangen

Hvert gennemgangsarrangement optages.

Eksempel:

```
Submission

↓

Editorial Screening

↓

Reviewer Invitation

↓

Peer Review

↓

Revision

↓

Acceptance

↓

Publication
```

Tidslinjen bliver en del af manuskriptets historie.

---

# AI-støttet gennemgang

Kunstig intelligens kan være til hjælp for korrekturlæserne.

Eksempler herpå er:

- sproganalyse
- validering af metadata
- verifikation af kildehenvisninger
- kontrol af konsistens
- tilgængelighedsvurdering
- indikatorer på plagiering

AI-forslag er tydeligt markeret og erstatter aldrig menneskelig vurdering.

---

# Interoperabilitet

Fremtidige kortlægninger omfatter:

- OJS Gennemgang af arbejdsgangen
- JATS Fagfællebedømmelse
- DocMaps
- COAR-besked
- Webkommentar
- Hypothes.is

---

# Plugin-udvidelser

Plugins kan medføre:

- fagspecifikke evalueringsmodeller
- skabeloner til anmeldelser
- pointsystemer
- redaktionelle arbejdsgange
- publikationsretningslinjer

uden at ændre OMI Core.

---

# Fremtidige opgaver

Fremtidige specifikationer vil fastlægge:

- Model for redaktionelt arbejdsforløb
- Beslutningsmodel
- AI-anmeldelse API
- Analyse af anmeldelser
- Anmelderens omdømme

---

# Ændringshistorik

- **0.1.0** — Flyttet fra den midlertidige adresse `OMI-SPEC-006` til den officielle adresse `OMI-SPEC-200`.

---

# Resumé

Modellen »OMI« betragter fagfællebedømmelse som en førsteklasses semantisk komponent i videnskabelig kommunikation.

Ved at adskille bedømmelsesoplysningerne fra manuskriptets indhold og samtidig forbinde de to via permanente ankre muliggør »OMI« gennemsigtige, overførbare og platformuafhængige arbejdsgange i forbindelse med videnskabelig bedømmelse.
