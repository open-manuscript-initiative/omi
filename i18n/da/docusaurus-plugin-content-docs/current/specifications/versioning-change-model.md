---
id: versioning-change-model
title: OMI-SPEC-160 — Versionsstyring og ændringsmodel
sidebar_label: Versionsstyring og ændringsmodel
description: Normativ model for uforanderlige revisioner, ændringssæt, ændringshændelser, forgreninger, sammenfletninger, konflikter, tilbageførsler, herkomst og udveksling af videnskabelige objekter med bevarelse af historikken.
keywords:
  - Open Manuscript Initiative
  - OMI
  - versioning
  - revision history
  - change events
  - provenance
  - branching
  - merging
---

# OMI-SPEC-160 — Versionsstyring og ændringsmodel

## Dokumentmetadata

| Felt | Værdi |
|---|---|
| Identifikator | `OMI-SPEC-160` |
| Titel | Versionsstyring og ændringsmodel |
| Version | `0.1.0` |
| Status | Udkast |
| Dokumenttype | Normativ |
| Normativt sprog | Engelsk |
| Redaktører | OMI-vedligeholdere |
| Senest opdateret | 06.08.2026 |
| Erstatning | Ingen |
| Erstattet af | Ingen |
| Afhænger af | `OMI-SPEC-100`, `OMI-SPEC-120`, `OMI-SPEC-140`, `OMI-SPEC-150` |
| Anvendes af | `OMI-SPEC-170`, `OMI-SPEC-190`, `OMI-SPEC-200`, `OMI-SPEC-230`, `OMI-SPEC-310`, `OMI-SPEC-320`, `OMI-SPEC-340` |
| Skemaer | Ingen offentliggjort |
| Profiler | Historik over kerneændringer; Forgrening og sammenfletning; Udveksling af øjebliksbilleder |
| Status for implementering | [OMI Implementation Status Matrix](../governance/implementation-status-matrix.md) |
| Problemsporingssystem | Problemer i Open Manuscript Initiative-repositoriet |

## 1. Resumé

Denne specifikation beskriver, hvordan »Open Manuscript Initiative« gengiver historikken for videnskabelige objekter. Den tilvejebringer en fælles model for uforanderlige revisioner, atomare ændringssæt, semantiske ændringshændelser, overordnede relationer, øjebliksbilleder, forgreninger, sammenfletninger, konflikter, tilbageførsler, kontrolpunkter, udgivelsesmærker, forfatterskab, herkomst, integritetsbevis og historikbaseret udveksling.

Modellen skelner mellem en foranderlig arbejdstilstand og en uforanderlig revision, mellem en revision af et videnskabeligt objekt og en software- eller skemaversion samt mellem en tilbageførsel og en destruktiv omskrivning af historikken. Den tillader, at implementeringer anvender event sourcing, snapshot-lagring, databasetransaktioner, indholdsadresseret lagring, operationel transformation, konfliktfri replikerede datatyper eller andre interne teknikker, forudsat at den eksporterede historik for OMI bevarer den semantik, som kræves i denne specifikation.

Specifikationen understøtter lineære og forgrenede historikker, offline-arbejde, flere bidragydere, delvis udveksling af historik, sletningsmarkører, redigering af data med adgangsbegrænsninger samt deterministisk identifikation af sammenfletningsresultater. Den foreskriver ikke en algoritme til samarbejde i realtid, en databasemotor, et design af brugergrænsefladen, en tilladelsesmodel eller et universelt tekstbaseret diff-format.

## 2. Dette dokuments status

Dette dokument er et **udkast** til en specifikation af »Open Manuscript Initiative«.

Datamodellen, egenskabsnavne, overensstemmelsesprofiler, operationsordforråd og behandlingskrav kan ændres på en måde, der medfører inkompatibilitet, inden version 1.0. Implementeringer, der hævder at understøtte standarden, SKAL angive den nøjagtige specifikationsversion eller det uforanderlige commit, der er anvendt.

Dette udkast aktiverer den identifikator, der er reserveret til versions- og ændringsmodellen i registret for »OMI«-specifikationer. Diskussioner og ændringsforslag følges i repositoriet Open Manuscript Initiative.

## 3. Overensstemmelse

### 3.1 Overensstemmelsesklasser

Denne specifikation definerer fem implementeringsklasser:

- **Producent af overensstemmelseshistorik:** opretter eller eksporterer revisioner, ændringssæt, ændringshændelser, øjebliksbilleder, forgreninger eller sammenfletningsposter.
- **Conforming History-forbruger:** importerer, lagrer, viser, omdanner eller bevarer versionsdata.
- **Kompatibel redigeringsfunktion, der bevarer historikken:** ændrer OMI-enheder, samtidig med at den relevante revisions- og ændringssemantik registreres.
- **Sammenlægning af historik i overensstemmelse:** samler divergerende revisionslinjer og registrerer sammenlægningsgrundlag, konflikter, løsninger og de resulterende revisioner.
- **Valideringsværktøj til overensstemmelse med historikken:** vurderer versionsdata i forhold til de strukturelle og semantiske krav i denne specifikation.

En implementering KAN omfatte mere end én klasse.

### 3.2 Overensstemmelsesprofiler

En overensstemmelseserklæring SKAL angive mindst én profil.

#### Profil for ændringshistorik for Core

Understøtter uforanderlige revisions-id’er, overordnede relationer, ændringssæt, ændringshændelser, tilskrivning til aktører, tidsstempler og valg af hoved for en lineær historik.

#### Forgrenings- og sammenfletningsprofil

Understøtter flere forgreninger, navngivne eller unavngivne forgreninger, valg af fælles forfader, sammenfletningsoptegnelser, visning af konflikter, løsningsoptegnelser og revisionsresultater med flere forfædre.

#### Snapshot Exchange-profil

Understøtter udveksling af den aktuelle tilstand for et videnskabeligt objekt uden den fulde begivenhedshistorik, samtidig med at omfanget af den udeladte historik og den revision, som øjebliksbilledet repræsenterer, udtrykkeligt angives.

En Snapshot Exchange-implementering MÅ IKKE antyde, at en pakke, der udelukkende består af snapshots, indeholder fuldstændig herkomstinformation.

### 3.3 Generel overensstemmelse

En konform implementering SKAL opfylde alle gældende **SKAL**- og **MÅ IKKE**-krav for den deklarerede klasse og profil.

En valgfri funktion KAN udelades. Når den implementeres, SKAL den opfylde alle krav, der er defineret for den pågældende funktion.

En overensstemmelseserklæring BØR indeholde følgende oplysninger:

- implementeringsnavn og -version;
- `OMI-SPEC-160` version;
- angivet implementeringsklasse eller -klasser;
- den eller de angivne profiler;
- understøttede typer af ændringsoperationer;
- understøttede lagringsmetoder for historik;
- integritet og redigeringsfunktioner;
- kendte begrænsninger;
- overensstemmelsestestversion, når den foreligger.

### 3.4 Grundlæggende krav

**REQ-VCH-001:** En revision SKAL have en globalt entydig eller kontekstmæssigt kollisionssikker identifikator og SKAL identificere den versionerede enhed, som den tilhører.

**REQ-VCH-002:** En bekræftet revision SKAL være uforanderlig. En rettelse af den bekræftede historik SKAL være repræsenteret ved en senere revision, en erstatningspost, en redigeringspost eller en anden eksplicit hændelse; den MÅ IKKE uden varsel erstatte den bekræftede revision.

**REQ-VCH-003:** Hver revision, der ikke er en rodrevision, SKAL angive mindst én overordnet revision. Et sammenlægningsresultat SKAL angive alle direkte overordnede revisioner, der er indarbejdet i resultatet.

**REQ-VCH-004:** Et ændringssæt SKAL angive sin målenhed, basisrevision eller -revisioner, aktør eller ansvarlig person, hvis denne er kendt, oprettelsestidspunkt samt de ændringshændelser, det indeholder.

**REQ-VCH-005:** En ændringshændelse SKAL identificere en operation og et mål. Målet SKAL være stabilt nok til, at det berørte videnskabelige objekt eller den berørte egenskab kan skelnes, uden at man udelukkende baserer sig på den gengivne position.

**REQ-VCH-006:** En producent SKAL skelne mellem revisioner af videnskabelige objekter og specifikationsversioner, skemaversioner, applikationsversioner, publikationsudgaver samt menneskeligt læsbare udgivelsesbetegnelser.

**REQ-VCH-007:** En tilbageførsel SKAL oprette en ny revision, der registrerer den revision eller det ændringssæt, der modvirkes. Den MÅ IKKE slette den tilbageførte revision fra historikken.

**REQ-VCH-008:** Ved sletning af et adresserbart videnskabeligt objekt SKAL der bevares en »tombstone« eller en tilsvarende herkomstoptegnelse, når historikprofilen angiver, at sletningen kan spores.

**REQ-VCH-009:** Ændringer i bidragernes rækkefølge, flytning af objekter og omarrangering af samlinger SKAL fremstilles som rækkefølge- eller flytningssemantik snarere end som uafhængige sletninger og genoprettelser, når objektets identitet bevares.

**REQ-VCH-010:** En sammenlægningspost SKAL angive kildeslægten, målslægten, den eller de sammenlægningsbaser, revisionsnummeret for resultatet samt alle uafklarede eller afklarede konflikter, som sammenlægningsansvarlige har kendskab til.

**REQ-VCH-011:** En bruger må IKKE uden videre acceptere en revision, hvis de angivne forældre mangler, medmindre historikken udtrykkeligt er markeret som delvis eller overfladisk.

**REQ-VCH-012:** En eksport af en del af historikken SKAL angive dens afgrænsning, udeladte forfædre og den repræsenterede hovedrevision.

**REQ-VCH-013:** Indhold, der er underlagt ændringsbegrænsninger, MÅ IKKE offentliggøres via en offentlig historikserialisering, medmindre en gældende adgangspolitik tillader offentliggørelsen.

**REQ-VCH-014:** Et redigeringsprogram, der bevarer historikken, SKAL knytte hvert commit-sæt til en agentidentitet, en serviceidentitet eller en eksplicit markør for en ukendt agent i overensstemmelse med `OMI-SPEC-150`.

**REQ-VCH-015:** Implementeringer SKAL bevare udvidelsesbegivenheder og data vedrørende ukendte operationer i overensstemmelse med de gældende regler for udvidelser og kompatibilitet i »OMI«, eller eksplicit rapportere, hvis disse går tabt.

**REQ-VCH-016:** Revisionstidsstempler SKAL angives som maskinlæsbare tidspunkter med en eksplicit tidszoneforskel eller en UTC-betegnelse. Implementeringer MÅ IKKE anvende tidsstempler alene som revisionsidentifikatorer eller som bevis for kausal rækkefølge.

**REQ-VCH-017:** Et state-digest SKAL, når det leveres, angive digest-algoritmen og kanoniseringsomfanget. Brugere MÅ IKKE betragte digest-værdier, der er genereret efter forskellige, ikke-angivne kanoniseringsregler, som ækvivalente.

**REQ-VCH-018:** Et ændringssæt, der er erklæret atomisk, SKAL enten gennemføres fuldstændigt eller mislykkes uden at afsløre et delvist bekræftet resultat.

## 4. Anvendelsesområde

Denne specifikation definerer:

- revisioners identitet og uforanderlighed;
- forholdet mellem forældre og børn og revisionsdiagrammer;
- foranderlige arbejdstilstande og faste tilstande;
- atomære ændringssæt;
- semantiske ændringshændelser og handlingskategorier;
- identifikation af mål for ændrede videnskabelige objekter og egenskaber;
- tilskrivning af aktører og sporbarhed af ændringer;
- grene, forgreninger, forgreninger og kontrolpunkter;
- sammenføjninger, sammenføjningsgrundlag, konflikter og løsninger;
- tilbageførsler, restaureringer, gravsten og afløsning;
- øjebliksbilleder og sammenhængen mellem øjebliksbilleder og historikken;
- delvis og overfladisk udveksling af historiske oplysninger;
- statlige oversigter og beviser for integritet;
- fortrolighedsbevidst redigering og begrænset historik;
- validering og bevaringsadfærd.

### 4.1 Uden for anvendelsesområdet

Denne specifikation definerer ikke:

- retningslinjerne for semantisk versionering af OMI-specifikationerne;
- programversionen af Open Manuscript Studio eller en anden implementering;
- en påkrævet database, transaktionslog eller lagringsmotor;
- et obligatorisk versionsstyringssystem;
- en universel, linjeorienteret syntaks til tekstsammenligning;
- protokoller for realtidsmarkører, tilstedeværelse eller bevidsthed;
- en bestemt operationel transformations- eller CRDT-algoritme;
- tilladelser til arbejdsområder eller beslutninger om godkendelse;
- tilstandsovergange ved peer-review;
- regler for oversættelsesækvivalens eller synkronisering;
- lovgyldige elektroniske underskrifter;
- opbevaringsfrister for arkivalier;
- politik for udgivelse og udgave.

Versionsstyring af specifikationer er reguleret af politikken for versionsstyring af specifikationer (OMI Versioning Policy). Tilladelser hører under `OMI-SPEC-190`. Revisionshistorik hører under `OMI-SPEC-200`. Oversættelsesrelationer hører under `OMI-SPEC-170`. Publikationsudgaver og -resultater hører under `OMI-SPEC-230` og `OMI-SPEC-240`.

## 5. Terminologi

Dokumentet »[OMI Terminology and Definitions](../governance/terminology.md)« finder anvendelse.

### 5.1 Entitet med versionsnummer

En »OMI«-enhed, hvis på hinanden følgende, bekræftede tilstande repræsenteres af revisioner.

En versioneret enhed kan være et manuskript, et afsnit, en blok, en kommentar, en bibliografisk post, et bidrag, en metadatapost, en publikationsopgave eller et andet identificerbart videnskabeligt objekt.

### 5.2 Driftstilstand

En ændringsbar implementeringstilstand, der endnu ikke er blevet gemt som en revision.

En arbejdstilstand KAN indeholde ikke-bekræftede lokale operationer, midlertidige valideringsfejl, markørstatus eller grænsefladespecifikke oplysninger. Den indgår ikke automatisk i den overførbare OMI-historik.

### 5.3 Revision

En uforanderlig post, der identificerer en bestemt tilstand i historikken for en versioneret enhed.

En revision er knyttet til nul eller flere overordnede revisioner og kan henvise til ændringssæt, et øjebliksbillede, et tilstandsoversigt, checkpoint-mærker og herkomst.

### 5.4 Grundlæggende revision

En revision uden nogen overordnet revision i den viste historik.

En rodrevision kan enten være den faktiske oprettelse eller den tidligste revision, der indgår i en kort historik. Denne skelnen SKAL angives.

### 5.5 Revision af hovedet

Den revision, der i øjeblikket er valgt som den seneste tilstand for en gren, en linje eller en eksporteret historikvisning.

En revisionsgraf kan have mere end ét hoved.

### 5.6 Ændringssæt

En samling af en eller flere ændringshændelser, der er bekræftet som én logisk og eventuelt atomar enhed.

Et ændringssæt kan svare til en brugerhandling, en samlet redigeringssession, en import, en automatiseret transformation, en sammenfletningsløsning eller en systemvedligeholdelseshændelse.

### 5.7 Ændringshændelse

En angivelse med herkomstoplysninger om, at en defineret handling har påvirket et defineret mål inden for en versioneret enhed.

En ændringshændelse registrerer den semantiske hensigt. Den behøver ikke at registrere hvert eneste tastetryk eller hver eneste ændring internt i implementeringen.

### 5.8 Drift

Den handling, der repræsenteres af en ændringshændelse, såsom oprettelse, opdatering, udskiftning, sletning, gendannelse, flytning, omarrangering, tilknytning, fjernelse eller annotering.

### 5.9 Øjebliksbillede

En serialisering af en versioneret entitetsstatus, der er knyttet til en bestemt revision.

Et øjebliksbillede kan fremskynde indlæsningen eller muliggøre udveksling udelukkende via øjebliksbilleder. Det erstatter ikke revisionsforhold eller ændrer herkomst, når der kræves fuld historik.

### 5.10 Revisionsdiagram

Den rettede acykliske graf, der dannes af revisioner og overordnede relationer.

En konform revisionsgraf MÅ IKKE indeholde en revision som sin egen forfader.

### 5.11 Afdeling

En navngivet eller unavngivet flytbar henvisning til en hovedrevision, der repræsenterer en udviklingslinje.

En grenidentitet er operationelle metadata og MÅ IKKE forveksles med en revisionsidentitet.

### 5.12 Gaffel

En tilstand, hvor to eller flere revisioner stammer fra den samme tidligere revision, uden at den ene er en forløber for den anden.

### 5.13 Sammenlægning

Processen og det dokumenterede resultat af sammenlægningen af to eller flere forskellige revisionslinjer.

### 5.14 Sammenfletning af basis

En fælles forfader, der bruges til at sammenligne og sammenfatte forskellige historier.

### 5.15 Konflikt

En tilstand, hvor ændringer ikke kan kombineres automatisk uden et valg, en omdannelse eller en udtrykkelig bekræftelse.

### 5.16 Konfliktløsning

En beslutning eller transformation med herkomstangivelse, der løser en konflikt i forbindelse med et sammenføjningsresultat.

### 5.17 Tilbagefør

En ny ændring, der modvirker en tidligere revision eller et ændringssæt helt eller delvist, samtidig med at den oprindelige historik bevares.

### 5.18 Gravsten

En varig, minimal registrering af, at et adresserbart objekt eksisterede og blev slettet, fjernet eller tilbagekaldt.

### 5.19 Kontrolsted

En fast reference eller et mærke, der er knyttet til en revision med henblik på gennemgang, indsendelse, godkendelse, offentliggørelse, bevaring eller en anden milepæl i arbejdsgangen.

### 5.20 Frigivelsesmærkat

En menneskeligt læsbar betegnelse, f.eks. `submission-2` eller `accepted-manuscript`, der er knyttet til en revision.

En udgivelsesetiket er ikke en revisionsidentifikator og indebærer ikke semantisk versionering.

### 5.21 Delvis historik

En historisk fremstilling, hvor en eller flere forfædre, begivenheder, øjebliksbilleder, grene eller begrænsede poster er udeladt.

### 5.22 Oversigt over delstaterne

Et kryptografisk eller ikke-kryptografisk digest, der er beregnet ud fra en deklareret kanonisk repræsentation af en revisionsstatus.

## 6. Designprincipper

Dette afsnit har informativt formål.

- **Uforanderlig historik over bekræftede hændelser:** Bekræftede hændelser korrigeres af senere hændelser, ikke ved en usynlig omskrivning.
- **Stabil objektidentitet:** redigeringer ændrer tilstanden uden unødigt at ændre det videnskabelige objekts identitet.
- **Semantiske hændelser i tastetryk-logfiler:** Portable History registrerer videnskabelige handlinger frem for støj fra implementeringen.
- **Eksplicit kausalitet:** overordnede relationer og sammenfletningsbaser har kausal betydning; tidsstempler kan ikke erstatte dem.
- **Kontoafhængig tilskrivning:** Forandring af forfatterskabshenvisninger vedrører flytbare agenter, ikke autentificeringsnøgler.
- **Tabsbevidst udveksling:** Udeladte historiske data og operationer, der ikke understøttes, angives.
- **Algoritmeneutralitet:** Interne Git-lignende, begivenhedsbaserede, databasebaserede, OT- eller CRDT-teknikker kan variere, selvom de alle frembringer interoperabelt OMI bevis.
- **Privacy by design:** Offentlige historiske data og fortrolige driftsrevisionsdata kan adskilles.
- **Reproducerbare tilstande:** øjebliksbilleder, hændelser og sammenfatninger bør muliggøre en tilsvarende rekonstruktion, når den valgte profil kræver det.
- **Bevarelse af tvetydighed:** Uafklarede konflikter og ukendt herkomst fremstilles, i stedet for at man forsøger at gætte sig frem til en løsning.

## 7. Modeloversigt

```text
Versioned entity
    ├── Working state (mutable, implementation-local)
    └── Revision graph
          ├── Revision
          │     ├── parentRevisionIds[]
          │     ├── changeSetIds[]
          │     ├── snapshotRef?
          │     ├── stateDigest?
          │     └── provenance
          ├── Change set
          │     ├── baseRevisionIds[]
          │     ├── events[]
          │     ├── actorId
          │     └── atomicity
          ├── Branch
          │     └── headRevisionId
          └── Merge record
                ├── sourceRevisionIds[]
                ├── baseRevisionIds[]
                ├── conflicts[]
                ├── resolutions[]
                └── resultRevisionId
```

Modellen kræver ikke, at hver revision indeholder et komplet øjebliksbillede. En historik kan bestå af:

- lagring udelukkende til begivenheder;
- lagring udelukkende til øjebliksbilleder med fastlagte begrænsninger for historikken;
- regelmæssige øjebliksbilleder samt begivenheder i mellemtiden;
- eksternt refererede øjebliksbilleder eller begivenhedsstrømme;
- en konserveringspakke, der indeholder begge dele.

Den valgte repræsentation SKAL opfylde den angivne overensstemmelsesprofil.

## 8. Forskellige versionsbegreber

En kompatibel implementering SKAL holde følgende begreber adskilt.

| Begreb | Eksempel | Formål |
|---|---|---|
| OMI specifikationsversion | `OMI-SPEC-160@0.1.0` | Angiver den normative modelversion |
| Skema- eller formatversion | `omi-manuscript-0.2` | Angiver serialiseringsregler |
| Programversion | `Open Manuscript Studio 0.1.0-alpha.2` | Angiver softwareudgave |
| Revisions-ID for videnskabeligt objekt | `urn:uuid:...` | Identificerer én uforanderlig, bekræftet tilstand |
| Filialnavn | `main`, `translation-hu` | Angiver en flytbar forretningsgren |
| Kontrolpunkt eller frigivelsesmærke | `submitted-2026-08-06` | Menneskeligt læsbar arbejdsgangsmærke |
| Publikationens udgave eller version | `Version of Record` | Betegnelse for udgivelsesdomænet |

En implementering MÅ IKKE udlede en af disse værdier ud fra en anden, medmindre en gældende specifikation udtrykkeligt definerer denne udledning.

## 9. Kerne datamodel

### 9.1 Beholder til versionshistorik

En versionshistorikbeholder knytter en versioneret enhed til de revisioner, den repræsenterer, samt metadata om historikken.

Anbefalede felter:

| Felt | Kardinalitet | Betydning |
|---|---:|---|
| `modelVersion` | 1 | Den nøjagtige version af »`OMI-SPEC-160`« |
| `entityId` | 1 | Identifikator for den versionerede enhed |
| `historyId` | 1 | Identifikator for denne historiske fremstilling |
| `headRevisionIds` | 1..n | Antal repræsenterede hoveder |
| `revisions` | 1..n | Medfølgende revisionsoptegnelser |
| `changeSets` | 0..n | Medtagne ændringssæt-poster |
| `branches` | 0..n | Henvisninger til forgreninger |
| `merges` | 0..n | Sammenlægning af beviser |
| `historyScope` | 1 | `complete`, `partial`, `shallow` eller `snapshot-only` |
| `boundaryRevisionIds` | 0..n | De tidligste medtagne revisioner, når slægtslinjen udelades |
| `omissionNotice` | 0..1 | En forklaring på den udeladte historik, der kan læses af både mennesker og maskiner |

En producent af en komplet slægtshistorie SKAL kun indstille »`historyScope`« til »`complete`«, når alle kendte forfædre, der kræves i henhold til den angivne profil, er medtaget eller kan fastslås.

### 9.2 Revision

En revisionsprotokol BØR indeholde:

| Felt | Kardinalitet | Betydning |
|---|---:|---|
| `id` | 1 | Uforanderlig revisionsidentifikator |
| `entityId` | 1 | Identifikator for en enhed med versionsnummer |
| `parentRevisionIds` | 0..n | Direkte forældre |
| `changeSetIds` | 0..n | Ændringer, der har ført til denne revision |
| `createdAt` | 1 | Tidspunkt for commit |
| `createdBy` | 1 | Agent eller markør for eksplicit ukendt agent |
| `committedBy` | 0..1 | Tjeneste eller agent, der har foretaget ændringen |
| `message` | 0..1 | Letforståeligt resumé |
| `snapshotRef` | 0..1 | Øjebliksbillede knyttet til revisionen |
| `stateDigest` | 0..1 | Metadata om digest og kanonisering |
| `checkpointLabels` | 0..n | Workflow- eller udgivelsesmærker |
| `supersedesRevisionIds` | 0..n | Eksplicitte korrektioner eller erstatningsforhold |
| `extensions` | 0..n | Data om udvidelser med navnerum |

En rodrevision BØR angive, om den repræsenterer en faktisk oprettelse af en entitet eller blot en grænse i den overfladiske historik.

### 9.3 Revisionskode

En revisionsidentifikator SKAL forblive uændret i hele historikpostens levetid.

En producent MÅ anvende:

- en UUID eller en UUID-baseret URN;
- en indholdsbaseret identifikator;
- endnu en kollisionssikker URI;
- en implementeringslokal identifikator inden for en pakke, hvis gyldighedsområde er entydigt.

Et tidsstempel, et sekvensnummer, et array-indeks, et forgreningsnavn eller en visningsbetegnelse MÅ IKKE være den eneste revisionsidentifikator.

### 9.4 Forældreforhold

Forhold mellem forældre bestemmer årsagssammenhængen i revisionen.

- En revisionsversion har normalt ingen forældre;
- En normal lineær revision har som regel én overordnet;
- en sammenføjningsrevision har to eller flere forældre;
- En importeret overfladisk grænse kan have nul medfølgende forældre, samtidig med at den angiver udeladte forfædre.

En validator SKAL afvise en repræsenteret overordnet cyklus.

### 9.5 Ændringssæt

Et ændringssæt BØR indeholde:

| Felt | Kardinalitet | Betydning |
|---|---:|---|
| `id` | 1 | Identifikator for ændringssæt |
| `entityId` | 1 | Målentitet med versionsstyring |
| `baseRevisionIds` | 1..n | Den eller de stater, som ændringerne vedrører |
| `events` | 1..n | Ordnede semantiske forandringshændelser |
| `actorId` | 1 | Ansvarlig agent eller ukendt markør |
| `performedBy` | 0..1 | Service eller softwareagent |
| `createdAt` | 1 | Oprettelsestidspunkt |
| `committedAt` | 0..1 | Commit-tidspunkt |
| `intent` | 0..1 | Formål defineret af mennesker eller ordforråd |
| `message` | 0..1 | Letforståeligt resumé |
| `atomic` | 1 | Om sætningen skal gælde atomisk |
| `correlationId` | 0..1 | Samler ændringer på tværs af enheder eller tjenester |
| `causedBy` | 0..n | Tidligere begivenheder, opgaver, import eller anmodninger |
| `visibility` | 0..1 | Klassificering af adgang (offentlig eller begrænset) |

Rækkefølgen af begivenhederne i et ændringssæt SKAL bevares, når rækkefølgen har indflydelse på resultatet.

### 9.6 Ændringshændelse

En ændringshændelse BØR indeholde:

| Felt | Kardinalitet | Betydning |
|---|---:|---|
| `id` | 1 | Begivenhedskode |
| `operation` | 1 | Operationstype |
| `target` | 1 | Stabil målbeskrivelse |
| `before` | 0..1 | Tidligere værdi eller digest, hvis den bevares |
| `after` | 0..1 | Ny værdi eller digest, når den bevares |
| `payload` | 0..1 | Operationsspecifikke data |
| `sequence` | 0..1 | Rækkefølge i ændringssættet |
| `actorId` | 0..1 | Begivenhedsspecifik overskrivning af aktør |
| `occurredAt` | 0..1 | Begivenhedstidspunkt, når det adskiller sig fra ændringssættets tidspunkt |
| `reason` | 0..1 | Begrundelse defineret af et menneske eller et ordforråd |
| `visibility` | 0..1 | Oplysningskategori |
| `extensions` | 0..n | Data om udvidelser med navnerum |

En producent KAN udelade værdierne »`before`« eller »`after`« af hensyn til privatlivets fred, lagerplads eller algoritmiske årsager, men skal bevare tilstrækkelige oplysninger til at opfylde den angivne profil og SKAL angive irreversible udeladelser, hvor dette påvirker rekonstruktionen.

### 9.7 Målbeskrivelse

En måldeskriptor SKAL identificere det berørte objekt eller den berørte egenskab ved hjælp af en eller flere stabile komponenter:

- målenhedens ID;
- mål-ID for videnskabeligt objekt;
- egenskabs- eller feltsti;
- samlingsidentifikator;
- et anker eller en selektor, der overholder `OMI-SPEC-110`;
- udvidelsesnavneområde og egenskabsnavn.

Renderede koordinater, skærmpositioner, linjenumre eller midlertidige editorindekser KAN medtages som vejledning, men MÅ IKKE være det eneste mål for portabilitet.

### 9.8 Driftsordforråd

De centrale begreber inden for driften er:

| Operation | Betydning |
|---|---|
| `create` | Opret et nyt identificerbart objekt |
| `update` | Rediger en eller flere egenskaber uden at ændre objektets identitet |
| `replace` | Erstatning af en værdi eller en objektrepræsentation ved deklarering af identitetsbehandling |
| `delete` | Fjern et objekt eller en egenskab, og opret den nødvendige tombstone-dokumentation |
| `restore` | Gendannelse af et tidligere slettet eller frakoblet objekt |
| `move` | Flyt et eksisterende objekt mellem containere eller placeringer |
| `reorder` | Ændring af rækkefølgen i en sorteret samling |
| `attach` | Tilføj en eksisterende objektrelation eller et medlemskab |
| `detach` | Fjern en relation eller et medlemskab uden at slette objektet |
| `annotate` | Tilføj en forklaring på ændringen, en redaktionel bemærkning eller en maskinlæsbar begrundelse |
| `transform` | Anvend en deklareret automatisk eller manuel transformation |
| `redact` | Begræns eller fjern følsomt indhold, samtidig med at beviserne for redigeringen bevares |
| `resolve-conflict` | Registrer en løsning på en sammenfletningskonflikt |
| `revert` | Tilbagestille en tidligere revision, ændringssæt eller hændelse |

Udvidelser KAN definere yderligere operationer ved hjælp af identifikatorer med navneområder.

En ukendt operation SKAL bevares af tabsløse forbrugere. En forbruger, der ikke er i stand til at anvende den, SKAL rapportere den ikke-understøttede operation og MÅ IKKE i al stilhed hævde, at der er en tilsvarende rekonstrueret tilstand.

## 10. Behandling af ændringsregistrering og -bekræftelse

### 10.1 Redigeringer i arbejdstilstand

En implementering KAN samle detaljerede grænsefladeoperationer i en ændringsbar arbejdstilstand.

Inden forpligtelsen indgås, KAN det:

- samler gentagne tastetryk til én semantisk tekstudskiftning;
- samle redigeringer af felter, der hører til samme gruppe, i ét sammenhængende ændringssæt;
- fjern midlertidige ændringer, der ikke har nogen effekt;
- omdanne implementeringsspecifikke operationer til portable operationer;
- bekræfte målidentiteter og basisrevisioner.

Den autoriserede gengivelse SKAL bevare den deraf følgende videnskabelige betydning og den angivne herkomst.

### 10.2 Procedure for commit

Et redigeringsprogram, der bevarer historikken, BØR udføre følgende trin:

1. identificere den versionsstyrede enhed og den aktuelle basisrevision;
2. indsamle eller udlede begivenheder vedrørende semantiske ændringer;
3. validering af hændelsesmål og driftsdata;
4. knytte ændringssættet til en agent eller en eksplicit ukendt markør;
5. anvende reglerne om atomicitet;
6. oprette den nye enhedstilstand;
7. tildele en uforanderlig revisionsidentifikator;
8. registrere forældreforhold;
9. beregne et statusoversigt, når dette understøttes;
10. opdater spidsen af den valgte gren;
11. Gem revisionen, ændringssættet og de nødvendige snapshot- eller hændelsesdata som én transaktion, der kan gendannes.

En mislykket atomær commit MÅ IKKE resultere i en ny hovedrevision.

### 10.3 Ændringer uden virkning

En producent BØR undgå at gennemføre en revision, der ikke har nogen semantisk betydning, medmindre revisionen dokumenterer et meningsfuldt kontrolpunkt i arbejdsgangen, et valideringsresultat, en ekstern synkronisering, en signatur eller en bevaringshændelse.

En no-op-revision SKAL angive sit formål.

### 10.4 Ændringer, der vedrører flere enheder

En brugerhandling kan påvirke flere versionerede enheder.

Implementeringer KAN:

- Brug separate ændringssæt, der er knyttet sammen via et fælles korrelations-ID;
- bruge en transaktionspost, der dækker flere enheders historik;
- modeller det samlede manuskript som en enhed med versionsstyring.

Den valgte fremgangsmåde SKAL tydeliggøre grænserne for delvis svigt og atomicitet.

## 11. Øjebliksbilleder og rekonstruktion

### 11.1 Tilknytning af øjebliksbilleder

Et øjebliksbillede SKAL angive, hvilken revision det repræsenterer.

Et øjebliksbillede BØR indeholde eller henvise til:

- enheds-ID;
- revisions-ID;
- skema- eller formatversion;
- medietype for serialisering;
- oplysninger om sammenfatning og kanonisering, når disse foreligger;
- oprettelsestidspunkt;
- udvikler eller genereringstjeneste;
- Erklæring om historiens fuldstændighed.

### 11.2 Genopbygning

En producent af en »Core Revision History«, der hævder, at historikken kan rekonstrueres, SKAL levere tilstrækkelige øjebliksbilleder og begivenheder til, at hver enkelt påstået rekonstruerbar revisionsstatus kan udledes.

En forbruger BØR kontrollere, at:

- hændelsesbaserne stemmer overens med den forventede overordnede tilstand;
- der findes operationsmål, eller der er angivet oprettelsessemantik for dem;
- atomære ændringssæt gælder fuldt ud;
- De resulterende digests stemmer overens med de deklarerede tilstandsdigests, når dette understøttes.

### 11.3 Udveksling af udelukkende øjebliksbilleder

En Snapshot Exchange-pakke KAN udelade den fulde historik.

Det SKAL indeholde:

- ID for den repræsenterede enhed;
- det angivne revisions-ID;
- skema- eller formatversion;
- `historyScope: snapshot-only`;
- en meddelelse om manglende indberetning;
- kendte referencer til overordnede eller kildeversioner, når disse foreligger.

En forbruger, der udelukkende benytter øjebliksbilleder, må IKKE opfinde manglende revisioner eller antyde, at der foreligger en fuldstændig ophavshistorik.

### 11.4 Komprimering

En implementering KAN komprimere den interne historik af hensyn til lagerplads eller ydeevne.

Komprimering MÅ IKKE uden varsel ændre en angivelse om fuldstændig historik til en angivelse om ufuldstændig historik.

Når begivenheder eller øjebliksbilleder kasseres, SKAL den deraf følgende repræsentation:

- fastlægge den nye historiske grænse;
- bevare den oprindelige revisionsidentitet;
- bevare de nødvendige henvisninger til sammenføjninger og kontrolpunkter;
- opbevare beviser for redigering eller komprimering;
- rapportere, hvilke rekonstruktionsfunktioner der gik tabt.

## 12. Grene og toppe

### 12.1 Filialoplysninger

En filialoptegnelse BØR indeholde:

| Felt | Kardinalitet | Betydning |
|---|---:|---|
| `id` | 1 | Identifikator for stabil gren |
| `name` | 0..1 | Navn, der kan læses af mennesker |
| `entityId` | 1 | Versioneret enhed |
| `headRevisionId` | 1 | Aktuel grenhoved |
| `baseRevisionId` | 0..1 | Den revision, hvorfra grenen blev oprettet |
| `createdAt` | 1 | Oprettelsestidspunkt |
| `createdBy` | 1 | Agent eller tjeneste |
| `status` | 1 | `active`, `merged`, `archived` eller `deleted` |
| `purpose` | 0..1 | Oversættelse, gennemlæsning, eksperiment, rettelse eller andet formål |

En ændring af en grenhoved må IKKE ændre identiteten eller indholdet af den refererede revision.

### 12.2 Løse hoveder

En historik KAN angive en hovedrevision uden en gren.

Et fristående hoved SKAL forblive en revisionsreference og MÅ IKKE serialiseres som en opfundet gren.

### 12.3 Sletning af en gren

Når en gren slettes eller arkiveres, MÅ det IKKE medføre, at revisioner slettes, som fortsat er tilgængelige via bevaret historik eller i henhold til bevaringskrav.

## 13. Sammenlægning af modeller

### 13.1 Sammenlægning af poster

En sammenlægningspost BØR indeholde:

| Felt | Kardinalitet | Betydning |
|---|---:|---|
| `id` | 1 | Identifikator for sammenlagt post |
| `entityId` | 1 | Versioneret enhed |
| `sourceRevisionIds` | 2..n | Sammenfletning af divergerende hoveder |
| `baseRevisionIds` | 1..n | Udvalgt fælles forfader eller fælles forfædre |
| `resultRevisionId` | 1 | Sammenføjningsresultat |
| `performedBy` | 1 | Agent eller tjeneste |
| `performedAt` | 1 | Sammenføjningsdato |
| `strategy` | 0..1 | Angivet sammenføjningsmetode |
| `conflicts` | 0..n | Registrerede konflikter |
| `resolutions` | 0..n | Anvendte opløsninger |
| `message` | 0..1 | Letforståeligt resumé |

I revisionsoversigten SKAL de sammenflettede kilderevisioner angives som direkte forældre, medmindre den angivne strategi og profil udtrykkeligt definerer en anden tilsvarende fremstilling.

### 13.2 Valg af fusionsgrundlag

Ved en fusion SKAL den eller de fusionsgrundlag, der faktisk er anvendt, angives.

Når der findes flere gyldige fælles forfædre, KAN sammenlægningen anvende en eller flere af disse i henhold til sin algoritme, men den MÅ IKKE angive en anden base efter sammenlægningen uden en korrigerende post.

### 13.3 Automatisk sammenfletning

En automatisk sammenfletning KAN kombinere ændringer, når deres mål og betydning ikke er i konflikt med hinanden.

Eksempler herpå er:

- redigeringer af objekter, der ikke har noget med sagen at gøre;
- uafhængige metadatafelter;
- ordnede indsættelser med deterministiske placeringsregler;
- identiske ændringer;
- ændringer, for hvilke der findes en registreret domænespecifik sammenlægningsregel.

Ved automatisk sammenlægning SKAL aktørtilskrivningen bevares, og ændringshistorikken fra hver enkelt inddraget linje skal bevares.

### 13.4 Konfliktkategorier

De centrale konfliktkategorier er:

- `concurrent-update`;
- `update-delete`;
- `delete-restore`;
- `move-move`;
- `reorder-reorder`;
- `identity-collision`;
- `schema-incompatibility`;
- `extension-unknown`;
- `permission-or-policy`;
- `integrity-failure`;
- `other`.

En konfliktoversigt BØR indeholde:

- konflikt-ID;
- kategori;
- berørte mål;
- kildeversions-ID’er;
- basisværdi eller sammendrag, hvis dette foreligger;
- modstridende værdier eller handlinger;
- status for beslutningen;
- hændelses-ID for løsningen, når problemet er løst;
- forklarende besked.

### 13.5 Konfliktløsning

En konfliktløsning SKAL registreres som data med herkomstoplysninger.

En beslutning KAN:

- vælg én kandidat;
- sammenlægge kandidater;
- Opret en ny værdi;
- gemme begge værdier i en domænespecifik struktur;
- udsætte vedtagelsen af beslutningen;
- Afvis sammenlægningen.

En uafklaret konflikt MÅ IKKE i al stilhed fremstilles som et fuldt ud afklaret sammenføjningsresultat.

## 14. Tilbageførsel, genoprettelse og korrektion

### 14.1 Semantik ved tilbageførsel

En tilbageførsel skaber en ny historik.

En tilbageførselshændelse BØR angive:

- den revision, det ændringssæt eller den hændelse, der modvirkes;
- om tilbageførslen er fuldstændig eller delvis;
- de genererede inverse eller erstatningsoperationer;
- handleren og fornuften;
- eventuelle konflikter, der opstod, fordi de samme mål senere blev ændret i historien.

### 14.2 Restaurering

Ved gendannelse af et slettet objekt BØR den oprindelige objektidentifikator bevares, når det samme begrebsmæssige objekt gendannes.

Når en gendannelse i stedet skaber et nyt konceptuelt objekt, SKAL der tildeles en ny identifikator, og forholdet til det slettede objekt BØR registreres.

### 14.3 Rettelse af fejlagtige herkomstoplysninger

En fejlagtig angivelse af en aktør, et tidsstempel, en meddelelse eller en identifikator i den bekræftede historik SKAL rettes ved hjælp af en eksplicit rettelses- eller erstatningspost.

Implementeringer KAN begrænse visningen af den fejlagtige værdi af hensyn til privatlivets fred eller af juridiske årsager, men SKAL bevare godkendt revisionsdokumentation for rettelsen, medmindre opbevaringspolitikken kræver verificeret destruktion.

## 15. Sletning og tombstones

En gravsten BØR indeholde:

- slettet objekt-ID;
- objekttype;
- sletning af revisions-ID;
- sletning af ændrings-ID;
- aktør eller tjeneste;
- sletningstidspunkt;
- årsag, hvis den foreligger;
- tidligere overordnet eller underordnet forhold, når det er nødvendigt for fortolkningen;
- klassificering af synlighed og fastholdelse;
- forholdet mellem genoprettelse og afløsning, hvor det er relevant.

En offentlig gravsten KAN udelade tidligere indhold, der er underlagt begrænsninger.

En forbruger SKAL skelne mellem:

- sletning af objekt;
- følelsesmæssig afstand i et forhold;
- sletning af gren;
- redigering af historien;
- tilbagetrækning af et objekt fra offentliggørelse;
- Fysisk sletning af lagringsmediet.

Disse handlinger kan ikke bruges i flæng.

## 16. Rækkefølge og bevægelse

Strukturerede videnskabelige samlinger omfatter forfatterlister, afsnit, blokke, referencer, figurer, tabeller og anmeldelser.

En genbestillingshændelse BØR angive:

- samlings-ID;
- flyttet objekt-ID;
- tidligere nabo eller stillingshenvisning, hvis denne er kendt;
- ny nabo eller positionshenvisning;
- bestillingsordning;
- revision af basen.

Ved bærbar ordning BØR man foretrække stabil nabo- eller rangsemantik frem for midlertidige, nulbaserede array-indekser.

En flytning mellem containere SKAL bevare objektets identitet, medmindre den gældende model udtrykkeligt behandler flytningen som en »kopier-og-slet«-handling.

## 17. Forfatterskab og herkomst

### 17.1 Angivelse af repræsentant

En ændring af forfatterskabet SKAL henvise til en agent, der er defineret i henhold til `OMI-SPEC-150`, eller til en eksplicit angivelse af »ukendt«, »uidentificeret«, »tilbageholdt« eller »serviceagent«.

En applikationskontoidentifikator KAN opbevares i begrænsede driftsrevisionsdata, men MÅ IKKE erstatte den overførbare agenttilskrivning i den videnskabelige historik.

### 17.2 Ansvar for personale og software

En ændring KAN skelne mellem:

- `actorId` (ansvarlig for den videnskabelige beslutning): den person eller organisation, der er ansvarlig for den videnskabelige beslutning;
- `performedBy`: den softwareagent eller -tjeneste, der udfører handlingen;
- `committedBy`: den aktør eller tjeneste, der godkender eller lagrer revisionen;
- `onBehalfOf`: et erklæret delegeringsforhold.

En transformation, der udføres automatisk, BØR identificere både softwareagenten og den person eller proces, der har udløst den, når dette er kendt.

### 17.3 Importeret historik

I importerede historier SKAL kilden og importbegivenheden angives.

En importør MÅ IKKE ommærke importerede versioner som værende udarbejdet lokalt, blot fordi der er oprettet lokale lagringsregistreringer.

Når kildeidentiteter ikke kan fastslås, BØR importøren bevare kildemærker og herkomst som uafklarede påstande.

## 18. Tid og kausal rækkefølge

En gennemgang af forældreforhold og hændelsesforløb leverer årsagsmæssige beviser.

Tidsstempler leverer tidsmæssige beviser, men kan blive påvirket af urforskydning, redigering uden for nettet, import eller databehandling af hensyn til privatlivets fred.

En bruger må IKKE konkludere, at revision A er en forgænger til revision B, alene fordi A har et tidligere tidsstempel.

Når der anvendes lokale sekvensnumre, SKAL deres gyldighedsområde angives.

## 19. Bevis for integritet

### 19.1 Oversigt over delstaterne

En State Digest-post BØR indeholde:

- algoritmens URI eller registrerede navn;
- fordøjelsesværdi;
- kanoniseringsmetode eller -profil;
- omfanget af inkluderede og ekskluderede data;
- mediatype eller skemaversion;
- oprettelsestidspunkt;
- genereringstjeneste.

### 19.2 Begivenheders og grafers integritet

Implementeringer KAN indeholde:

- oversigter pr. begivenhed;
- sammendrag af ændringssæt;
- oversigter over revisioner;
- sammenkædede sammendrag;
- Merkle-strukturer;
- digitale signaturer;
- pålidelige beviser i form af tidsstempler.

Anvendelsen af disse teknikker er i sig selv ikke et bevis på forfatterskab, juridisk gyldighed eller semantisk korrekthed.

### 19.3 Integritetsfejl

En forbruger, der opdager en uoverensstemmelse i et digest, en manglende påkrævet forælder, en ugyldig signatur eller en grafcyklus, SKAL rapportere en integritetsfejl og MÅ IKKE i al stilhed markere den berørte historik som verificeret.

## 20. Privatliv, fortrolighed og redigering

Versionshistorikken kan afsløre slettet tekst, personoplysninger, korrekturlæsernes identitet, ikke-offentliggjorte resultater, adgangstokener, fortrolig korrespondance eller data, der er underlagt lovmæssige begrænsninger.

En overensstemmende implementering SKAL understøtte adskillelse af:

- offentlig videnskabelig historie;
- redigeringshistorik, der er synlig i arbejdsområdet;
- begrænsede administrative revisionsdata;
- hemmelige godkendelsesoplysninger eller infrastrukturdata.

Autentificeringsoplysninger, adgangskode-hashværdier, sessionstokener, private nøgler og opdateringstokener MÅ IKKE forekomme i en videnskabelig artikel på OMI.

### 20.1 Redigeringslog

En redigering BØR bevare:

- berørt revision, hændelse, felt eller payload-henvisning;
- kategori for begrundelse for redigering;
- den ansvarlige myndighed eller repræsentant, når videregivelse er tilladt;
- redigeringstid;
- om indholdet var skjult, krypteret, adgangsbegrænset eller ødelagt;
- indvirkning på rekonstruktion og integritetskontrol.

Ved en offentlig serialisering KAN begrænsede nyttedata erstattes med redigeringsmarkører, samtidig med at sikre strukturelle beviser bevares.

### 20.2 Forpligtelser vedrørende lovmæssig sletning og opbevaring

Implementeringer, der anvender sletnings- eller opbevaringsforpligtelser, SKAL dokumentere de deraf følgende begrænsninger i historikken.

Denne specifikation fastlægger ikke, hvilke juridiske eller etiske regler der gælder for en bestemt optegnelse.

## 21. Serialisering

### 21.1 Eksempel på historik

Følgende eksempel er blot til orientering og definerer ikke det kanoniske skema.

```json
{
  "modelVersion": "OMI-SPEC-160@0.1.0",
  "historyId": "urn:uuid:1798d883-e226-4a39-a601-cadef82aa223",
  "entityId": "urn:uuid:manuscript-001",
  "historyScope": "complete",
  "headRevisionIds": [
    "urn:uuid:revision-002"
  ],
  "revisions": [
    {
      "id": "urn:uuid:revision-001",
      "entityId": "urn:uuid:manuscript-001",
      "parentRevisionIds": [],
      "changeSetIds": ["urn:uuid:changeset-001"],
      "createdAt": "2026-08-06T19:00:00Z",
      "createdBy": "urn:uuid:agent-001",
      "message": "Create manuscript"
    },
    {
      "id": "urn:uuid:revision-002",
      "entityId": "urn:uuid:manuscript-001",
      "parentRevisionIds": ["urn:uuid:revision-001"],
      "changeSetIds": ["urn:uuid:changeset-002"],
      "createdAt": "2026-08-06T19:15:00Z",
      "createdBy": "urn:uuid:agent-001",
      "message": "Revise title"
    }
  ],
  "changeSets": [
    {
      "id": "urn:uuid:changeset-002",
      "entityId": "urn:uuid:manuscript-001",
      "baseRevisionIds": ["urn:uuid:revision-001"],
      "actorId": "urn:uuid:agent-001",
      "createdAt": "2026-08-06T19:14:58Z",
      "atomic": true,
      "events": [
        {
          "id": "urn:uuid:event-002",
          "operation": "update",
          "target": {
            "entityId": "urn:uuid:manuscript-001",
            "property": "title"
          },
          "before": "Untitled manuscript",
          "after": "Version-aware scholarly editing",
          "sequence": 1
        }
      ]
    }
  ]
}
```

### 21.2 Eksempel på en sammenlægningspost

```json
{
  "id": "urn:uuid:merge-001",
  "entityId": "urn:uuid:manuscript-001",
  "sourceRevisionIds": [
    "urn:uuid:revision-author",
    "urn:uuid:revision-editor"
  ],
  "baseRevisionIds": ["urn:uuid:revision-common"],
  "resultRevisionId": "urn:uuid:revision-merged",
  "performedBy": "urn:uuid:agent-editor",
  "performedAt": "2026-08-06T20:00:00Z",
  "strategy": "three-way-semantic",
  "conflicts": [
    {
      "id": "urn:uuid:conflict-001",
      "category": "concurrent-update",
      "targets": [
        {
          "entityId": "urn:uuid:manuscript-001",
          "property": "title"
        }
      ],
      "status": "resolved",
      "resolutionEventId": "urn:uuid:event-resolution-001"
    }
  ]
}
```

## 22. Valideringsregler

En validator SKAL rapportere en fejl, når:

- et revisions-ID forekommer to gange inden for det samme historikområde;
- En revision, der ikke er en rodrevision, har ingen overordnet revision, medmindre der er angivet en »shallow-boundary«-deklaration;
- en overordnet revision tilhører en anden enhed uden en eksplicit relation på tværs af enheder;
- revisionsgrafen indeholder en cyklus;
- der mangler en angivet hovedrevision;
- et ændringssæt har ingen basisrevision;
- en begivenhed har ingen handling eller mål;
- et atomært ændringssæt vises som delvist anvendt;
- i et sammenlægningsresultat udelades de påkrævede direkte overordnede elementer;
- en løst konflikt mangler bevis for løsningen;
- En tilbageførsel sletter eller erstatter den refererede, bekræftede revision;
- en offentlig serialisering afslører data, der er markeret som »begrænset« eller »hemmeligt«;
- I en sammenfatningspost udelades algoritmen;
- En »`complete`«-historik indeholder uafklarede henvisninger til manglende forældre.

En validator BØR udstede en advarsel, når:

- en revision har ingen besked eller sammenfatning af formålet;
- en skuespiller er ukendt, hvis der ikke er angivet en forklarende markør;
- et tidsstempel mangler tilstrækkelig præcision;
- en operation anvender kun et midlertidigt positionsmål;
- et øjebliksbillede mangler et resumé;
- en ufuldstændig historik mangler en meddelelse om udeladelsen, der er forståelig for mennesker;
- en importeret revision mangler oplysninger om oprindelsen;
- et grennavn bruges som revisionsidentifikator;
- En omfattende opdatering overskygger semantiske ændringer, der i sig selv har betydning.

## 23. Behandling af ukendte data og udvidelsesdata

En tabsløs afspiller SKAL bevare:

- ukendte operationstyper med navnerum;
- udvidelsesfelter i revisioner, hændelser, ændringssæt, grene og sammenfletningsposter;
- ukendte synlighedsklassifikationer;
- uopløselige eksterne henvisninger.

En forbruger, der ikke kan opretholde eller anvende en forlængelse, SKAL:

1. anmeld den udvidelse, der ikke understøttes;
2. angiv, om den aktuelle tilstand fortsat kan rekonstrueres;
3. undgå at hævde, at der er understøttelse af tabsløs rundtur;
4. Bevar uigennemsigtige nyttelaster, hvor det er sikkert og teknisk muligt.

## 24. Kompatibilitet og migrering

### 24.1 Overførsel fra manuskripter, der udelukkende indeholder tidsstempler

Et manuskript, der udelukkende indeholder værdierne `version`, `createdAt` og `updatedAt`, indeholder ikke en overensstemmende revisionshistorik for OMI.

En migrering KAN oprette en syntetisk rodrevision, der repræsenterer den importerede aktuelle tilstand.

Den syntetiske revision SKAL:

- identificere migrations- eller importbegivenheden;
- fastslå, at de tidligere oplysninger ikke er tilgængelige;
- Brug `historyScope: snapshot-only` eller `shallow`;
- undgå at opfinde forfattere, begivenheder eller årsagssammenhænge;
- beholde de oprindelige tidsstempler som kildeangivelser i stedet for den verificerede commit-historik, når deres betydning er usikker.

### 24.2 Overførsel fra indbyggede revisionslogfiler

En importør BØR kun knytte kilderevisionsposter til ændringshændelser, når operation, mål, aktør og tidsmæssig semantik kan bevares.

Kildeoplysninger, der ikke kan kortlægges, BØR opbevares som uidentificerbare bilag med herkomstoplysninger eller angives som udeladte.

### 24.3 Kompatibel udvikling

En fremtidig revision af denne specifikation, der er kompatibel med den nuværende, kan:

- tilføj valgfri begivenhedsegenskaber;
- tilføj operationstyper med navnerum;
- tilføj eventuelt bevis for integritet;
- forbedre advarsler;
- tilføj overensstemmelsesprofiler, der bevarer den grundlæggende semantik.

En uforenelig ændring omfatter:

- at gøre faste ændringer ændrbare;
- ændring af forældresemantik;
- genbrug af revisionsidentifikatorer;
- at behandle grennavne som uforanderlige revisionsidentiteter;
- ophævelse af kravet om at oplyse om delvis sygehistorie;
- at omdefinere »revert« som en destruktiv sletning.

## 25. Overvejelser vedrørende interoperabilitet

### 25.1 Git og distribueret versionsstyring

Git-commits, -træer, -grene og -sammenfletninger kan udgøre en implementeringsinfrastruktur, men Git-linjedifferencer og repository-identiteter repræsenterer ikke automatisk semantiske begivenheder eller agentidentiteter OMI.

En Git-baseret implementering BØR kortlægge:

- commit-identitet til revisionsidentitet;
- forælder-commits til forælder-revisioner;
- træstruktur til øjebliksbilleder;
- felterne »author« og »committer« til agentpåstande i »OMI« med passende anvendelsesområde;
- sammenføj commits til sammenføjede poster;
- tags til kontrolpunkter eller frigivelsesmærker.

### 25.2 »JSON«-patch og lignende driftsformater

JSON Patch eller tilsvarende formater KAN indeholde kodning af lavniveaukoperationer. En producent SKAL supplere disse, når det er nødvendigt, for at bevare stabil objektmålretning, semantisk hensigt, aktørherkomst, flytningssemantik og adfærd ved udvidelse af OMI.

### 25.3 Begivenhedsbaserede systemer

Et begivenhedsbaseret system KAN kortlægge native begivenheder direkte, når deres semantik opfylder denne specifikation. Interne begivenheder, der afslører fortrolige oplysninger, lagringsdetaljer eller ustabile implementeringsveje, BØR omdannes til portable OMI-begivenheder.

### 25.4 CRDT og systemer med operationelle transformationer

En CRDT- eller OT-implementering KAN internt bevare de oprindelige operationer. Ved udveksling af »OMI« SKAL den levere den semantik vedrørende revision, aktør, mål, sammenfletning og historisk fuldstændighed, som kræves af den deklarerede profil.

Automatisk konvergens fjerner ikke behovet for at registrere faglige uoverensstemmelser, politiske uoverensstemmelser eller herkomstoplysninger.

### 25.5 W3C PROV og provenienssystemer

Implementeringer KAN kortlægge agenter, aktiviteter, enheder, afledninger og genereringshændelser til W3C PROV eller en anden proveniensmodel. Sådanne kortlægninger BØR bevare skellet mellem det videnskabelige objekt, dets revision, ændringsaktiviteten, den ansvarlige agent og den udførende softwaretjeneste.

## 26. Sikkerhedsmæssige overvejelser

Indlæsning og rekonstruktion af historiske data kan udsætte implementeringer for:

- ondskabsfuldt dybe eller cykliske grafer;
- overdimensionerede nyttelaster til arrangementer;
- gennemgang af stier i snapshot-referencer;
- tilbageførsel af uautoriserede ændringer;
- forfalskede påstande fra skuespillere;
- forstå forvirringen;
- algoritme-nedgradering;
- angreb med udvidet nyttelast;
- tjenesteforstyrrelse via konflikteksplosion;
- indsprøjtning via meddelelser, der kan læses af mennesker.

Implementeringer BØR:

- begrænse grafdybden og datamængden i henhold til de fastlagte retningslinjer;
- validerer identifikatorer og referencer;
- afvisningscyklusser;
- sandkasse-transformationsoperationer;
- behandle beskeder og etiketter som upålidelig tekst;
- at adskille autentificering af operationelle anmodninger fra den videnskabelige herkomst;
- kontrollere digest-algoritmer og kanoniseringsprofiler;
- undgå at udføre udvidelsernes payloads som kode;
- opbevare dokumentation for afviste eller sat i karantæne importerede varer.

## 27. Overvejelser vedrørende tilgængelighed

Grænseflader til versionshistorik BØR:

- fremhæve ændringer i maskinlæsbare og tekstbaserede alternativer, ikke kun ved hjælp af farver;
- sikre, at man kan navigere i revisionerne ved hjælp af tastaturet;
- meddele konflikt- og valideringstilstand til hjælpemidler;
- angive aktør, tidspunkt, mål, handling og resultat i et letforståeligt sprog;
- muliggør sammenligning uden behov for præcis interaktion med markøren;
- undgå udelukkende at stole på visuelle sammenligningsoversigter, hvor ændringer vises side om side;
- levere oversigter over store ændringssæt;
- Bevar den logiske læserækkefølge i sammenflettede eller tilbageførte indholdsvisninger.

## 28. Overvejelser vedrørende internationalisering

Revisionsmeddelelser, etiketter, begrundelser og forklaringer på konflikter, der er forståelige for mennesker, BØR understøtte sprogkoder.

Tekstændringer SKAL bevare metadataene vedrørende sprog og skrift i det berørte indhold, hvor sådanne metadata findes.

Implementeringer BØR skelne mellem:

- etiketter på grænsefladesproget;
- sproget i det ændrede videnskabelige indhold;
- sproget i ændringsmeddelelsen;
- translationslinje, der styres af `OMI-SPEC-170`.

Ved sammenligning af strenge, tokenisering, normalisering og sammenfletning af tekst BØR man IKKE gå ud fra, at der er tale om engelsk, det latinske alfabet eller ord adskilt af mellemrum.

## 29. Overvejelser vedrørende bevarelse

En bevaringspakke, der har til formål at bevare versionshistorikken, BØR indeholde:

- den versionsbestemte enhedsidentifikator;
- nøjagtige versioner af specifikationer og skemaer for OMI;
- revisionsgraf;
- henvisninger til hoved- og kontrolpunkter;
- øjebliksbilleder eller begivenheder, der kan rekonstrueres;
- metadata vedrørende sammenfatning og kanonisering;
- henvisninger til agenter og herkomst;
- meddelelser om ufuldstændig historik og redigering;
- udvidelsesnavneområder;
- software eller transformationsmetadata, der er nødvendige for fortolkningen;
- en liste, der knytter historiske poster til de samlede aktiver.

Grennavne kan ændre sig, men revisionsidentiteten og overordnede relationer SKAL forblive uændrede.

## 30. Status for gennemførelsen

Open Manuscript Studio gemmer i øjeblikket en ændringsbar manuskripttilstand med en menneskeligt læsbar streng `version` samt tidsstemplerne `createdAt` og `updatedAt`. Lagringshandlinger erstatter direkte den aktuelle tilstand og opdaterer tidsstemplet for ændringen.

Studiet tilbyder endnu ikke:

- uforanderlige revisionsoptegnelser;
- ændringssæt eller semantiske ændringshændelser;
- redigeringshistorik med angivelse af aktør;
- øjebliksbilleder knyttet til revisioner;
- validering af revisionsgraf;
- grene eller flere hoveder;
- valg af merge-base;
- optegnelser om konflikter og løsninger;
- tilbageførsler vises som ny historik;
- gravsten;
- erklæringer om delvis historik;
- statlige oversigter eller integritetskontrol.

`OMI-SPEC-160` har fortsat status som **Undersøgende**. Den første milepæl i implementeringen skal indføre en lineær revisionsjournal omkring eksisterende Zustand-ændringer, inden adfærd ved forgrening og sammenfletning tilføjes.

## 31. Anbefalet rækkefølge for implementering

1. tilføj `versioningModelVersion`, `historyId` og `headRevisionId` til manuskriptets samlede historik eller det tilknyttede arbejdsområdes historik;
2. definerer `Revision`, `ChangeSet`, `ChangeEvent` og stabile måltyper;
3. indkapsle ændringer af den aktuelle titel, det aktuelle resumé, den aktuelle blok, det aktuelle afsnit og de aktuelle bidragydere i semantiske ændringssæt;
4. registrere den godkendte brugers tilknyttede agent-ID som aktør, når dette er tilgængeligt;
5. oprette uforanderlige lineære revisioner og øjebliksbilleder;
6. tilføj »Fortryd« som en handling, der skaber en historik, der gendanner den tidligere tilstand, i stedet for at slette den aktuelle tilstand;
7. tilføje markører for slettede afsnit, blokke, agenter og bidrag;
8. implementere eksport og import af en begrænset historik eller en historik, der udelukkende består af øjebliksbilleder;
9. tilføje en brugergrænseflade til revisionshistorikken og overskuelige oversigter over ændringer;
10. tilføj grene, sammenlæg baser, konflikter og løsninger;
11. offentliggøre kanoniske skemaer samt gyldige og ugyldige testdatasæt;
12. tilpasse testene til kravene i »`REQ-VCH-*`«.

## 32. Krav til prøvning og fastgørelsesanordninger

Et fremtidigt sæt til overensstemmelsestest BØR omfatte:

- én rodrevision;
- en gyldig lineær revisionshistorik med tre revisioner;
- et atomært ændringssæt med flere hændelser;
- begivenheder som tekstopdatering, metadataopdatering, flytning, omarrangering, sletning, gendannelse og tilbageførsel;
- en overfladisk historie med bevidst udeladte forfædre;
- en udvekslingspakke, der udelukkende indeholder øjebliksbilleder;
- to grene med en problemfri sammenfletning;
- en sammenfletning med én løst konflikt;
- en uløst konflikt;
- en sletningsmarkør;
- en redigeret begivenhed med adgangsbegrænsning;
- gyldige og ugyldige statusoversigter;
- dobbeltrevisions-ID’er;
- forældre, der er forsvundet;
- en revisionscyklus;
- en udvidelsesoperation, der ikke understøttes;
- en importeret revision af den syntetiske rod.

## 33. Uafklarede spørgsmål

Udkastet efterlader følgende spørgsmål ubesvarede:

1. om det kanoniske skema skal indeholde historien direkte i manuskriptet eller kun tillade en ekstern historisk ressource via et link;
2. hvilke kanoniseringsprofiler der skal registreres for tilstandsdigests;
3. om revisionsidentifikatorer skal være URI’er i den stabile profil;
4. hvordan semantiske tekstoperationer bør henvise til områder efter samtidige redigeringer;
5. hvilke værdier i operationsordforrådet der bør gøres til kontrollerede registertermer;
6. hvordan atomare transaktioner på tværs af enheder skal repræsenteres i kerneskemaet;
7. i hvilket omfang begrænsede revisionsbeviser må opbevares i bærbare enheder;
8. om kategorier af kontrolpunkter kræver et særskilt kontrolleret ordforråd;
9. hvilke sammenlægningsstrategier der bør standardiseres ud over kravene til dokumentation;
10. hvordan bevaringspakker skal gengive den beskårne, krypterede historik.

Disse problemer udgør ikke en hindring for implementeringen af profilen »Core Revision History«.

## 34. Indeks over normative krav

| Krav | Emne |
|---|---|
| `REQ-VCH-001` | Revisionsidentitet |
| `REQ-VCH-002` | Uændrbarhed af revisioner |
| `REQ-VCH-003` | Forældreforhold |
| `REQ-VCH-004` | Herkomst for ændringssæt |
| `REQ-VCH-005` | Arrangementets afvikling og målgruppe |
| `REQ-VCH-006` | Adskillelse af versionsbegreber |
| `REQ-VCH-007` | Ikke-destruktiv tilbageførsel |
| `REQ-VCH-008` | Sporbarhed ved sletning |
| `REQ-VCH-009` | Semantik ved flytning og omarrangering |
| `REQ-VCH-010` | Sammenlæg beviser |
| `REQ-VCH-011` | Håndtering af manglende forældre |
| `REQ-VCH-012` | Delvis oplysning om historikken |
| `REQ-VCH-013` | Beskyttelse af begrænset historik |
| `REQ-VCH-014` | Angivelse af kilde |
| `REQ-VCH-015` | Bevarelse af udvidelser |
| `REQ-VCH-016` | Adskillelse af tidsstempel og kausalitet |
| `REQ-VCH-017` | Digest-algoritmen og dens anvendelsesområde |
| `REQ-VCH-018` | Atomiskhed |

## 35. Ændringshistorik

| Version | Dato | Resumé |
|---|---|---|
| 0.1.0 | 6. august 2026 | Første udkast, der definerer uforanderlige revisioner, semantiske ændringssæt og hændelser, revisionsgrafer, øjebliksbilleder, forgreninger, sammenfletninger, konflikter, tilbagestillinger, tombstones, herkomst, integritet, udveksling af delvis historik samt retningslinjer for implementering. |

## 36. Resumé

`OMI-SPEC-160` definerer en overførbar historikmodel for videnskabelige objekter.

Det sikrer, at en manuskriptrevision ikke forveksles med en skema- eller applikationsversion, at den fastlagte historik ikke omskrives uden varsel, at ændringer fortsat kan tilskrives de enkelte aktører, at sletninger og tilbageførsler fortsat kan spores, at forgreninger og sammenfletninger vises eksplicit, at delvis historik fremlægges, og at implementeringer med forskellige interne algoritmer kan udveksle versionsoplysninger uden at skulle rekonstruere betydningen ud fra tidsstempler alene.
