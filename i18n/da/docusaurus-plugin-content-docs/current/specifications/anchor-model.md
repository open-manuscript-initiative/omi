---
id: anchor-model
title: OMI-SPEC-110 — Anker-modellen
sidebar_label: Anker-modellen
sidebar_position: 12
---

# OMI-SPEC-110 — Anker-modellen

## Status

**Udkast**

Version: 0.1.0

**Gammel identifikator:** `OMI-SPEC-003`

---

# Formål

Anker-modellen definerer, hvordan semantiske objekter knyttes til videnskabeligt indhold.

I modsætning til traditionelle dokumentmodeller, der henviser til sidetal eller tegnpositioner, introducerer »OMI« permanente semantiske forankringer.

Ankre fungerer som stabile referencepunkter, der bevares ved redigering, udgivelse og formatkonvertering.

De udgør bindelaget i Open Manuscript Initiative.

---

# Designprincipper

Anker-modellen bygger på følgende principper:

- Semantisk persistens
- Layoutuafhængighed
- Stabil identitet
- Understøttelse af flere mål
- Versionsbevidsthed
- Maskinlæsbarhed
- Langtidsopbevaring

---

# Hvad er et anker?

Et anker er en vedvarende semantisk henvisning, der identificerer et eller flere målsteder i et manuskript.

Et anker indeholder ikke selv noget indhold.

I stedet knytter det semantiske objekter til meningsfulde dele af et manuskript.

---

# Hvorfor ankre?

Traditionel udgivelse bygger på sidetal og tegnpositioner.

Disse henvisninger bliver ugyldige, hver gang teksten ændres.

OMI Ankre er knyttet til det semantiske indhold snarere end til dets visuelle placering.

Dette muliggør et pålideligt samarbejde gennem hele manuskriptets livscyklus.

---

# Ankerpunkter

Ordet »Anchor« kan henvise til:

- et tegninterval
- et ord
- flere ord
- en sætning
- et afsnit
- flere afsnit
- et afsnit
- et tal
- en tabel
- en formel
- en henvisning
- en bibliografisk post
- metadata
- hele manuskriptet

---

# Flere mål

Et anker kan henvise til flere steder.

Eksempel:

```text
Anchor A

├── Paragraph 2
├── Figure 4
└── Table 1
```

Dette gør det muligt for et enkelt semantisk objekt at beskrive relationer, der strækker sig over forskellige dele af manuskriptet.

---

# Semantiske relationer

Ankre forbinder videnskabelige objekter.

Eksempler herpå er:

Kommentar
↓

Anker

↓

Tekstområde

eller

Kildehenvisning

↓

Anker

↓

Bibliografisk post

eller

Oversættelse

↓

Anker

↓

Oprindeligt afsnit

---

# Objekter, der bruger ankre

Næsten alle semantiske objekter på OMI kan henvise til et eller flere ankre.

Eksempler herpå er:

- kommentarer
- henvisninger
- tal
- tabeller
- ordlisteindgange
- oversættelser
- anmelderkommentarer
- redaktionelle bemærkninger
- AI-forslag
- opgaver
- krydshenvisninger
- hyperlinks

---

# Anker-metadata

Hvert anker indeholder:

- Identifikator
- Type
- Mål
- Skaber
- Oprettelsestidspunkt
- Ændringshistorik
- Status

---

# Stabile identifikatorer

Hvert anker tildeles en globalt unik identifikator.

Eksempel:

```text
anchor:3d91f88f-5d61-4d7e-a857-bf5b44d9f8a1
```

Permanente identifikatorer sikrer pålidelige henvisninger på tværs af versioner.

---

# Redigeringsadfærd

Ankre bør kunne modstå almindelige redigeringshandlinger.

Eksempler herpå er:

- indsættelse af tekst
- sletning af tekst
- flytning af afsnit
- opdeling af afsnit
- sammenlægning af afsnit

Systemet sikrer løbende Anchor-integriteten.

---

# Ankeropløsning

Hvis det oprindelige mål ændrer sig væsentligt, forsøger systemet at foretage en semantisk genkobling.

Mulige strategier omfatter:

- nøjagtigt match
- strukturel overensstemmelse
- kontekstuel matchning
- semantisk lighed

Implementeringer kan kombinere flere strategier.

---

# Synlighed

Selve ankerne er usynlige.

Brugerne interagerer med de semantiske objekter, der er knyttet til dem.

For eksempel:

Fodnote

↓

Anker

↓

Udvalgt tekst

---

# Rendering

Forskellige publikationsformater gengiver Anchor-baserede objekter forskelligt.

Eksempel:

PDF

↓

Fodnote

HTML

↓

Værktøjstip

EPUB

↓

Slutnote

JATS XML

↓

Semantisk element

Selve ankeret vises aldrig.

Kun det vedhæftede semantiske objekt vises.

---

# Versionsstyring

Ankre indgår i versionsstyringen af dokumenter.

Den samme Anchor-identifikator bør så vidt muligt forblive gyldig på tværs af manuskriptrevisioner.

Dette muliggør en pålidelig sammenligning mellem de forskellige versioner.

---

# Interoperabilitet

Fremtidige kortlægninger kan omfatte:

- Datamodel for webannotationer
- W3C-selektorer
- JATS XML
- HTML Fragmentidentifikatorer
- DOCX Kommentarer
- PDF Annotationer

---

# Plugin-udvidelser

Plugins kan definere yderligere anker-typer.

Eksempler:

Historisk profil

- Arkivdokument
- Uddrag fra chartret

Matematikprofil

- Bevisstrin
- Ligningskomponent

Biologi-profil

- Gensekvens
- Taksonomisk knudepunkt

---

# Fremtidige opgaver

Fremtidige specifikationer vil fastlægge:

- Algoritmer til forankringsbestemmelse
- Ankre på tværs af dokumenter
- Vedvarende globale forankringer
- Integration af Linked Data
- Konfliktløsning gennem samarbejde

---

# Ændringshistorik

- **0.1.0** — Flyttet fra den midlertidige adresse `OMI-SPEC-003` til den officielle adresse `OMI-SPEC-110`.

---

# Resumé

Anker-modellen udgør det semantiske grundlag for OMI.

I stedet for at basere sig på sidetal eller visuelle placeringer knytter ankre videnskabelige objekter direkte til deres betydning.

Dette sikrer, at kommentarer, henvisninger, fagfællebedømmelse, AI-støtte, oversættelser og fremtidige videnskabelige tjenester forbliver stabile gennem hele processen med redigering, udgivelse og bevaring.

Ankre forvandler et manuskript fra et formateret dokument til et sammenhængende videnobjekt.
