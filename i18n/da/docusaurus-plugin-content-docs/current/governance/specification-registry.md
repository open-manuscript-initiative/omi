---
title: OMI Specifikationsregister
sidebar_label: Specifikationsregister
sidebar_position: 60
description: Officielt register over identifikatorer, titler, kanoniske placeringer, livscyklusstatus og ældre aliaser for Open Manuscript Initiative-specifikationen.
---

# Open Manuscript Initiative Specifikationsregister

## Dokumentmetadata

| Felt | Værdi |
|---|---|
| Dokumenttype | Reguleringsregister |
| Status | Udkast |
| Version | 0.3.1 |
| Normativt sprog | Engelsk |
| Registreringsnavneområde | `OMI-SPEC` |
| Gælder for | Normative OMI-specifikationer og reserverede specifikationsidentifikatorer |
| Senest opdateret | 5. september 2026 |

## 1. Formål

Dette dokument er den officielle fortegnelse over identifikatorer for specifikationer fra Open Manuscript Initiative.

Her defineres:

- den permanente identifikator, der tildeles hver enkelt OMI-specifikation;
- den officielle betegnelse for specifikationen;
- den kanoniske kildevej;
- livscyklusstatus og den aktuelle version;
- arkitekturkategorien;
- normative afhængigheder;
- ældre og midlertidige identifikatorer, der skal overføres;
- reglerne for tildeling, reservering, udfasning, erstatning og bevarelse af identifikatorer.

Registret findes, fordi tidligere dokumenter fra OMI blev oprettet efter flere midlertidige nummereringsordninger. Nogle identifikatorer blev tildelt til mere end ét dokument. Et stabilt sæt standarder kan ikke indeholde tvetydige identifikatorer.

Når en identifikator er registreret i henhold til dette dokument, MÅ den IKKE tildeles en anden specifikation.

## 2. Myndighed

De identifikatorer, der er anført i afsnittet **Canonical-specifikationsregister**, er de officielle identifikatorer i specifikationen fra OMI.

Når et andet dokument på OMI er i konflikt med dette register med hensyn til en identifikator, en titel, en kanonisk sti eller en livscyklusstatus, er det dette register, der er gældende, indtil det konfliktende dokument er blevet rettet gennem den normale gennemgangsproces.

Dette register betyder ikke, at alle de anførte specifikationer er stabile. Det tildeler identitet uafhængigt af modenhedsstatus. En specifikation kan have status som »Reserveret«, »Undersøgende«, »Udkast«, »Kandidat til gennemgang«, »Kandidat til implementering«, »Stabil«, »Udgået« eller »Erstattet«.

## 3. Syntaks for identifikatorer

En registreret OMI-specifikationsidentifikator har følgende form:

```text
OMI-SPEC-NNN
```

hvor `NNN` er et trecifret decimaltal.

Eksempler:

```text
OMI-SPEC-000
OMI-SPEC-120
OMI-SPEC-221
OMI-SPEC-350
```

Den numeriske del er en identifikator, ikke et versionsnummer og ikke en prioriteringsrang.

En specifikationsversion angives separat:

```text
OMI-SPEC-210, version 0.2.0
```

## 4. Nummereringsstruktur

OMI anvender kategoribaserede nummerintervaller.

| Sortiment | Kategori |
|---|---|
| `000–099` | Grundlæggende principper og forfatningsmæssige specifikationer på tværs af pakker |
| `100–199` | Centrale modeller for semantik, identitet, dokumenter, annotering, validering og samarbejde |
| `200–299` | Modeller for videnskabelige arbejdsgange, bibliografier, kildehenvisninger, peer review, formatering og udgivelse |
| `300–399` | Platform, udvidelsesmuligheder, API, pakning, udveksling, import/eksport og overensstemmelsesspecifikationer |
| `400–899` | Reserveret til fremtidige OMI-specifikationsfamilier |
| `900–999` | Afsat til fremtidig eksperimentel tildelingspolitik; må ikke anvendes ensidigt |

Det er bevidst ikke et krav, at numrene skal være fortløbende. I tilknyttede specifikationer kan der anvendes på hinanden følgende numre eller en lokal underserie.

Eksempel:

- `OMI-SPEC-220` definerer bibliografiske poster;
- `OMI-SPEC-221` definerer interaktionen mellem manuskriptreferencelibraryer og registret.

## 5. Registreringsstater

En registerpost har en af følgende allokeringsstatus.

### Reserveret

Identifikatoren og titlen er tildelt, men det kanoniske specifikationsdokument er endnu ikke blevet udarbejdet eller godkendt som udkast.

En reserveret identifikator MÅ IKKE tildeles et andet subjekt.

### Aktiv

Der findes et kanonisk specifikationsdokument, som indgår i livscyklussen for »OMI«.

Livscyklusstatus registreres separat.

### Udgået

Specifikationen gælder fortsat for eksisterende implementeringer, men anbefales ikke til nye projekter.

### Er erstattet af

En navngiven efterfølger erstatter formelt specifikationen.

### Tilbagetrukket

Udviklingen blev afsluttet, før specifikationen blev »Stable«. Identifikatoren forbliver permanent utilgængelig til genbrug.

## 6. Register over kanoniske specifikationer

### 6.1 Grundlag og centrale semantiske modeller

| Identifikator | Officiel titel | Tildeling | Livscyklus | Version | Kanonisk sti |
|---|---|---|---|---|---|
| `OMI-SPEC-000` | Grundlæggende principper | Aktiv | Udkast | 0.1.0 | `docs/foundations/core-principles.md` |
| `OMI-SPEC-100` | Dokumentmodel | Aktiv | Udkast | 0.1.0 | `docs/specifications/document-model.md` |
| `OMI-SPEC-110` | Anchor-model | Aktiv | Udkast | 0.1.0 | `docs/specifications/anchor-model.md` |
| `OMI-SPEC-120` | Scholarly Object Model | Aktiv | Udkast | 0.1.0 | `docs/specifications/core/scholarly-object-model.md` |
| `OMI-SPEC-130` | Annotationsmodel | Aktiv | Udkast | 0.2.0 | `docs/specifications/annotation-model.md` |
| `OMI-SPEC-140` | Metadatamodel | Aktiv | Udkast | 0.1.0 | `docs/specifications/metadata-model.md` |
| `OMI-SPEC-150` | Identitets- og bidragsmodellen | Aktiv | Udkast | 0.1.0 | `docs/specifications/identity-contributor-model.md` |
| `OMI-SPEC-160` | Versionsstyring og ændringsmodel | Aktiv | Udkast | 0.1.0 | `docs/specifications/versioning-change-model.md` |
| `OMI-SPEC-170` | Oversættelsesmodel | Reserveret | — | — | `docs/specifications/translation-model.md` |
| `OMI-SPEC-180` | Valideringsmodel | Reserveret | — | — | `docs/specifications/validation-model.md` |
| `OMI-SPEC-190` | Samarbejds- og tilladelsesmodel | Reserveret | — | — | `docs/specifications/collaboration-permission-model.md` |

### 6.2 Videnskabelig arbejdsgang, litteraturhenvisninger og publikationer

| Identifikator | Officiel titel | Tildeling | Livscyklus | Version | Kanonisk sti |
|---|---|---|---|---|---|
| `OMI-SPEC-200` | Testversion | Aktiv | Udkast | 0.1.0 | `docs/specifications/review-model.md` |
| `OMI-SPEC-210` | Citation Model | Aktiv | Udkast | 0.2.0 | `docs/specifications/citation-model.md` |
| `OMI-SPEC-220` | Model for bibliografiske poster | Aktiv | Udkast | 0.1.0 | `docs/specifications/bibliographic-record-model.md` |
| `OMI-SPEC-221` | Arkitektur for referencebibliotek og register | Aktiv | Udkast | 0.1.0 | `docs/specifications/reference-library-registry.md` |
| `OMI-SPEC-230` | Udgivelsesmodel | Aktiv | Udkast | 0.1.0 | `docs/specifications/publishing-model.md` |
| `OMI-SPEC-240` | Model for gengivelse og publikationsprofil | Reserveret | — | — | `docs/specifications/rendering-publication-profile-model.md` |

### 6.3 Platform, udveksling og overensstemmelse

| Identifikator | Officiel titel | Tildeling | Livscyklus | Version | Kanonisk sti |
|---|---|---|---|---|---|
| `OMI-SPEC-300` | Plugin-arkitektur | Aktiv | Udkast | 0.1.0 | `docs/specifications/plugin-architecture.md` |
| `OMI-SPEC-310` | Platform API | Aktiv | Udkast | 0.1.0 | `docs/specifications/api.md` |
| `OMI-SPEC-320` | Filformat | Aktiv | Udkast | 0.2.0 | `docs/specifications/file-format.md` |
| `OMI-SPEC-330` | Containerarkitektur | Aktiv | Udkast | 0.1.0 | `docs/specifications/container-architecture.md` |
| `OMI-SPEC-340` | Import- og eksportmodel | Reserveret | — | — | `docs/specifications/import-export-model.md` |
| `OMI-SPEC-350` | Funktions- og overensstemmelsesmodel | Reserveret | — | — | `docs/specifications/capability-conformance-model.md` |

## 7. Afhængighedsregister

Afhængighedslisten indeholder de direkte normative afhængigheder, der forventes i den kanoniske specifikationsarkitektur. Et udkast kan præcisere disse afhængigheder, inden det når stadiet som »Review Candidate«.

| Identifikator | Direkte afhængigheder |
|---|---|
| `OMI-SPEC-000` | Ingen |
| `OMI-SPEC-100` | `OMI-SPEC-000`, `OMI-SPEC-120` |
| `OMI-SPEC-110` | `OMI-SPEC-000`, `OMI-SPEC-100`, `OMI-SPEC-120` |
| `OMI-SPEC-120` | `OMI-SPEC-000` |
| `OMI-SPEC-130` | `OMI-SPEC-100`, `OMI-SPEC-110`, `OMI-SPEC-120` |
| `OMI-SPEC-140` | `OMI-SPEC-000`, `OMI-SPEC-120` |
| `OMI-SPEC-150` | `OMI-SPEC-120`, `OMI-SPEC-140` |
| `OMI-SPEC-160` | `OMI-SPEC-100`, `OMI-SPEC-120`, `OMI-SPEC-140`, `OMI-SPEC-150` |
| `OMI-SPEC-170` | `OMI-SPEC-100`, `OMI-SPEC-110`, `OMI-SPEC-120`, `OMI-SPEC-140`, `OMI-SPEC-150`, `OMI-SPEC-160` |
| `OMI-SPEC-180` | `OMI-SPEC-000`, `OMI-SPEC-100`, `OMI-SPEC-110`, `OMI-SPEC-120`, `OMI-SPEC-130`, `OMI-SPEC-140` |
| `OMI-SPEC-190` | `OMI-SPEC-100`, `OMI-SPEC-120`, `OMI-SPEC-150`, `OMI-SPEC-160` |
| `OMI-SPEC-200` | `OMI-SPEC-110`, `OMI-SPEC-130`, `OMI-SPEC-150`, `OMI-SPEC-160`, `OMI-SPEC-190` |
| `OMI-SPEC-210` | `OMI-SPEC-110`, `OMI-SPEC-120`, `OMI-SPEC-220`, `OMI-SPEC-221` |
| `OMI-SPEC-220` | `OMI-SPEC-120`, `OMI-SPEC-140`, `OMI-SPEC-150` |
| `OMI-SPEC-221` | `OMI-SPEC-140`, `OMI-SPEC-210`, `OMI-SPEC-220` |
| `OMI-SPEC-230` | `OMI-SPEC-100`, `OMI-SPEC-140`, `OMI-SPEC-180`, `OMI-SPEC-210`, `OMI-SPEC-240`, `OMI-SPEC-320` |
| `OMI-SPEC-240` | `OMI-SPEC-100`, `OMI-SPEC-140`, `OMI-SPEC-210` |
| `OMI-SPEC-300` | `OMI-SPEC-000`, `OMI-SPEC-350` |
| `OMI-SPEC-310` | `OMI-SPEC-100`, `OMI-SPEC-150`, `OMI-SPEC-190`, `OMI-SPEC-350` |
| `OMI-SPEC-320` | `OMI-SPEC-100`, `OMI-SPEC-120`, `OMI-SPEC-140`, `OMI-SPEC-160`, `OMI-SPEC-180` |
| `OMI-SPEC-330` | `OMI-SPEC-320` |
| `OMI-SPEC-340` | `OMI-SPEC-100`, `OMI-SPEC-140`, `OMI-SPEC-180`, `OMI-SPEC-220`, `OMI-SPEC-320` |
| `OMI-SPEC-350` | `OMI-SPEC-000`, `OMI-SPEC-300`, `OMI-SPEC-310`, `OMI-SPEC-320`, `OMI-SPEC-340` |

Afhængigheder MÅ IKKE udledes udelukkende på baggrund af denne tabel ved implementering af en bestemt udgivet version. Den nøjagtige versionsspecifikation og suite-manifestet er afgørende for overensstemmelse med den udgivne version.

## 8. Overførsel af ældre identifikatorer

### 8.1 Årsag til migrationen

Inden dette register blev oprettet, anvendte dokumentationen på OMI to uforenelige nummereringsmetoder:

1. en kort række af artikler, f.eks. fra `OMI-SPEC-001` til `OMI-SPEC-012`;
2. en kategoriopdelt serie som f.eks. `OMI-SPEC-100`, `OMI-SPEC-110` og `OMI-SPEC-120`.

Den korte sekvens indeholder kollisioner:

- `OMI-SPEC-003` blev anvendt af både anker-modellen og annoteringsmodellen;
- `OMI-SPEC-006` blev anvendt af både gennemgangsmodellen og den bibliografiske postmodel;
- `OMI-SPEC-007` blev anvendt af både udgivelsesmodellen og referencelibrary- og registerarkitekturen.

En kolliderende identifikator kan ikke være permanent, da den ikke identificerer én entydig specifikation.

Den kategoribaserede serie er derfor blevet valgt som det kanoniske registreringssystem. Den indgår allerede i »OMI Architecture Map« og i den kanoniske kerneversion af »Scholarly Object Model«.

### 8.2 Den gamle alias-tabel

Følgende identifikatorer er historiske eller foreløbige aliaser. De MÅ IKKE anvendes til nye normative henvisninger.

| Gammel eller midlertidig identifikator | Historisk anvendelse | Kanonisk identifikator | Migreringsforanstaltning |
|---|---|---|---|
| `OMI-SPEC-001` | Dokumentmodel | `OMI-SPEC-100` | Erstat identifikatoren; bevar den gamle URL, hvor det er muligt |
| `OMI-SPEC-002` | Uformelt benævnt »Anchor Model« | `OMI-SPEC-110` | Erstat henvisninger til afhængigheder |
| `OMI-SPEC-003` | Anchor-model | `OMI-SPEC-110` | Erstat identifikator |
| `OMI-SPEC-003` | Annotationsmodel | `OMI-SPEC-130` | Erstat identifikator |
| `OMI-SPEC-004` | Metadatamodel | `OMI-SPEC-140` | Erstat identifikator |
| `OMI-SPEC-005` | Citeringsmodel | `OMI-SPEC-210` | Udskift identifikator |
| `OMI-SPEC-006` | Anmeldelsesmodel | `OMI-SPEC-200` | Erstat identifikator |
| `OMI-SPEC-006` | Bibliografisk postmodel | `OMI-SPEC-220` | Erstat identifikator |
| `OMI-SPEC-007` | Udgivelsesmodel | `OMI-SPEC-230` | Erstat identifikator |
| `OMI-SPEC-007` | Referencelibrary og registerarkitektur | `OMI-SPEC-221` | Udskift identifikator |
| `OMI-SPEC-008` | Plugin-arkitektur | `OMI-SPEC-300` | Erstat identifikator |
| `OMI-SPEC-009` | Tidligere videnskabelig objektmodel | `OMI-SPEC-120` | Samle indholdet i et kanonisk dokument |
| `OMI-SPEC-010` | Platform API | `OMI-SPEC-310` | Erstat identifikator |
| `OMI-SPEC-011` | Filformat | `OMI-SPEC-320` | Erstat identifikator |
| `OMI-SPEC-012` | Containerarkitektur | `OMI-SPEC-330` | Udskift identifikator |

De gamle numre har aldrig været beskyttet af et godkendt register. De er derfor ikke registrerede permanente identifikatorer og MÅ IKKE tildeles på ny inden for den korte sekvens.

### 8.3 Krav til migration

I dokumentations-refaktoringsfasen SKAL:

- opdater den synlige identifikator i alle aktive specifikationer;
- opdatere afhængighedsangivelser og krydshenvisninger;
- samle de overlappende dokumenter om Scholarly Object Model under `OMI-SPEC-120`;
- beholde omdirigeringer eller meddelelser om flytning for udskiftede offentlige stier, hvor det er muligt;
- undgå at angive en forældet identifikator som en alternativ permanent identifikator;
- registrere flytningen i ændringshistorikken for hvert berørt dokument;
- opdatere skemaer, eksempler, manifester og overensstemmelseserklæringer, når de begynder at anvende registrerede identifikatorer.

## 9. Den kanoniske model for videnskabelige objekter

`OMI-SPEC-120` er tilknyttet Scholarly Object Model på:

```text
docs/specifications/core/scholarly-object-model.md
```

Det separate dokument, der findes på:

```text
docs/specifications/scholarly-object-model.md
```

er en ældre dublet, der er knyttet til den foreløbige identifikator `OMI-SPEC-009`.

Det relevante indhold skal gennemgås og sammenføres med det kanoniske dokument `OMI-SPEC-120`. Efter sammenlægningen bør den gamle sti omdirigeres eller erstattes af en eksplicit meddelelse om flytning/erstatning i stedet for at fungere som en anden normativ specifikation.

## 10. Regler for kanoniske stier

En kanonisk sti angiver det vedligeholdte kildedokument i arkivet.

En ændring af en kanonisk sti ændrer ikke den registrerede identifikator. En ændring af stien SKAL, hvor det er teknisk muligt, omfatte:

- en HTTP-omdirigering fra den tidligere offentliggjorte rute;
- en meddelelse om flytning af et arkiv;
- opdaterede interne links;
- opdaterede metadata i registreringsdatabasen;
- bevaring af versionshistorikken.

En filsti MÅ IKKE betragtes som specifikationens faste identitet.

## 11. Regler for titler

En registreret titel er den officielle, letlæselige betegnelse for specifikationen.

Der KAN forekomme en ændring af en redaktionel titel, uden at identifikatoren ændres, når anvendelsesområdet og det normative emne forbliver det samme.

Et forslag, der ændrer emnet i en sådan grad, at eksisterende henvisninger vil blive vildledende, kræver en ny identifikator.

Historiske titler BØR registreres som aliaser, når de har været nævnt i offentlige udgivelser eller eksterne henvisninger.

## 12. Felter vedrørende version og livscyklus

Hver Active-specifikation SKAL indeholde følgende to elementer:

- en semantisk version;
- en livscyklusstatus.

Eksempler:

```text
OMI-SPEC-210
Version: 0.2.0
Status: Draft
```

Version og livscyklusstatus er uafhængige af hinanden. Registret MÅ IKKE udlede den ene ud fra den anden.

Statusværdierne er fastlagt i dokumentet »Specification Lifecycle«. Versionsopgraderinger er fastlagt i »Versioning Policy«.

## 13. Forbeholdte specifikationer

En »Reserved«-angivelse giver udtryk for den arkitektoniske hensigt, men fastsætter ikke normative krav.

En reserveret specifikation bliver først aktiv, når:

1. der oprettes et kanonisk dokument;
2. dets anvendelsesområde stemmer overens med den registrerede betegnelse, eller en godkendt ændring i registret ændrer betegnelsen;
3. de nødvendige metadata er til stede;
4. dokumentet har mindst status som udkast;
5. Registreringsdatabaseindgangen opdateres efter gennemgang.

Implementeringer MÅ IKKE hævde at være i overensstemmelse med en reserveret specifikation.

## 14. Tildelingsprocedure

Et forslag til en ny identifikator SKAL indeholde:

- foreslået titel;
- problemformulering og omfang;
- foreslået nummerinterval og identifikator;
- forholdet til eksisterende specifikationer;
- forventede normative afhængigheder;
- grunden til, at emnet kræver en særskilt specifikation;
- foreslået redaktør eller vedligeholder;
- indledende status i livscyklussen;
- forventede skemaer, profiler, registre eller testartefakter.

Tildelingen BØR kun finde sted, når anvendelsesområdet er tilstrækkeligt afgrænset til at forblive stabilt.

En identifikator KAN reserveres, før det fulde udkast foreligger, hvis en tidlig tildeling forhindrer kollisioner eller koordinerer parallelt arbejde.

## 15. Forbud mod ensidig tildeling

Forfattere må IKKE oprette en ny normativ `OMI-SPEC-NNN`-identifikator blot ved at tilføje den til en dokumenttitel eller et filnavn.

En ny identifikator bliver først officiel, når den er blevet optaget i dette register gennem den godkendte indsendelses- og gennemgangsproces.

Uregistrerede numre, der forekommer i afsnit, udgaver, eksempler eller eksperimentelle dokumenter, har ingen permanent status.

## 16. Identifikatorers varighed

Efter registreringen SKAL en identifikator fortsat være knyttet til den samme konceptuelle specifikationslinje.

Identifikatoren MÅ IKKE ændres på grund af:

- en rettelse af titlen;
- en filflytning;
- en omstrukturering af sidepanelet;
- oversættelse;
- en underversion eller en patch-version;
- en ny redaktør;
- udfasning;
- erstatning;
- tilbagetrækning.

En tilbagetrukket eller erstattet identifikator forbliver reserveret permanent.

## 17. Opdeling og sammenlægning af specifikationer

### 17.1 Opdeling

Når en specifikation opdeles i specifikationer, der versioneres uafhængigt af hinanden:

- den oprindelige identifikator forbliver hos den primære, fortsættende slægtelinje eller erstattes;
- hver ny uafhængig specifikation tildeles en ny identifikator;
- registret registrerer forholdet;
- I migrationsvejledningen fremgår det, hvilke krav der er flyttet.

### 17.2 Sammenlægning

Når flere specifikationer sammenlægges:

- en identifikator KAN fortsætte, hvis dens begrebsmæssige afstamning klart dominerer;
- andre identifikatorer erstattes;
- der BØR tildeles en ny identifikator, når ingen eksisterende identifikator præcist afspejler det sammenlagte anvendelsesområde;
- Forældede identifikatorer MÅ IKKE genbruges.

## 18. Optegnelser om udfasning og erstatning

En forældet eller erstattet registreringsdatabaseindtastning SKAL indeholde følgende:

- berørte versioner;
- ikrafttrædelsesdato eller udgivelse;
- efterfølgeridentifikator, hvis en sådan findes;
- vejledning om migration;
- støtte og arkiveringsstatus.

Den kanoniske side SKAL forblive tilgængelig eller omdirigere til en arkivside.

## 19. Forhold mellem skemaer, profiler og registre

En »OMI«-specifikationsidentifikator angiver en prosaspecifikation. Den angiver ikke automatisk:

- et »JSON«-skema;
- en publikationsprofil;
- et register over kontrollerede ordlister;
- et eksempelkorpus;
- en testsuite til overensstemmelseskontrol;
- en softwareimplementering.

Disse artefakter skal have egne identifikatorer eller versionerede navne i henhold til de gældende styringsregler for »OMI«.

En registerpost BØR indeholde et link til sådanne artefakter, når disse findes.

## 20. Status for gennemførelsen

Registret registrerer specifikationens identitet og modenhed, ikke overensstemmelse med implementeringen.

Den evidensbaserede database »[OMI Implementation Status Matrix](./implementation-status-matrix.md)« registrerer oplysninger om implementering, skema, testfiler, valideringsværktøjer, testresultater og uafhængige implementeringsbeviser for hver enkelt registreret identifikator.

At der findes kode med et lignende navn på Open Manuscript Studio er ikke i sig selv tilstrækkeligt bevis for, at specifikationen er overholdt.

## 21. Officielle oversættelser

Officielle oversættelser bruger den samme registrerede identifikator som den engelske kildetekst.

Eksempel:

```text
OMI-SPEC-210 — Citation Model
English source version: 0.2.0
Hungarian translation revision: hu-1
```

En oversættelse MÅ IKKE tildeles et andet nummer i den »`OMI-SPEC`«.

Metadataene for oversættelsen skal angive den nøjagtige normative kildeversion og synkroniseringsstatus.

## 22. Henvisninger til registrerede specifikationer

En normativ henvisning BØR ved første forekomst indeholde både identifikator og titel:

```text
OMI-SPEC-210, Citation Model
```

I efterfølgende henvisninger KAN man nøjes med at bruge identifikatoren, når den er entydig.

En henvisning til et bestemt overensstemmelsesmål SKAL indeholde versionsangivelsen:

```text
OMI-SPEC-210 version 0.2.0
```

Referencer må IKKE anvende et forældet alias, efter at det pågældende dokument er blevet overført.

## 23. Maskinlæsbart register

Et fremtidigt maskinlæsbart register BØR oprettes på baggrund af eller valideres i forhold til dette dokument.

En post forventes at indeholde felter, der svarer til:

```yaml
identifier: OMI-SPEC-210
title: Citation Model
allocation: active
status: draft
version: 0.2.0
canonicalPath: docs/specifications/citation-model.md
category: scholarly-references
dependsOn:
  - OMI-SPEC-110
  - OMI-SPEC-120
  - OMI-SPEC-220
  - OMI-SPEC-221
legacyAliases:
  - OMI-SPEC-005
implementationStatus: see-implementation-matrix
```

Den maskinlæsbare udgave MÅ IKKE uden varsel afvige fra det gennemgåede register. Den automatiske validering bør til sidst kontrollere:

- identifikatorens entydighed;
- kanonisk stis entydighed;
- tilstedeværelse af afhængighed;
- fravær af afhængighedscyklusser, hvor sådanne cyklusser er forbudt;
- gyldige livscyklusværdier;
- gyldige semantiske versioner;
- konflikter mellem gamle aliaser;
- overensstemmelse med specifikationens indledende afsnit.

## 24. Styringsdokumenter uden for navneområdet OMI-SPEC

Følgende dokumenter regulerer specifikationssættet, men tildeles ikke selv identifikatorer i formatet `OMI-SPEC`:

| Dokument | Kanonisk sti |
|---|---|
| Open Manuscript Initiative Charter | `docs/governance/charter.md` |
| Køreplan for »OMI« 1.0 | `docs/governance/roadmap-to-omi-1.0.md` |
|  OMI Arkitekturundersøgelse |  `docs/governance/architecture-audit.md` |
| Specifikationens livscyklus | `docs/governance/specification-lifecycle.md` |
| Retningslinjer for versionsstyring | `docs/governance/versioning-policy.md` |
| Vejledning i specifikationsformatering | `docs/governance/style-guide.md` |
| Terminologi og definitioner | `docs/governance/terminology.md` |
| Specifikationsregister | `docs/governance/specification-registry.md` |
| Specifikationsskabelon | `docs/governance/specification-template.md` |
| Oversigt over implementeringsstatus | `docs/governance/implementation-status-matrix.md` |

Disse styringsdokumenter kan indeholde normative projektkrav, uden at de udgør datamodelspecifikationer rettet mod implementeringsansvarlige.

## 25. Indledende migrationssekvens

Efter implementeringen af dette register er den anbefalede rækkefølge for overførslen følgende:

1. opdatere alle aktive specifikationstitler og metadata med de registrerede identifikatorer;
2. at samle de to dokumenter om Scholarly Object Model under `OMI-SPEC-120`;
3. opdatere afhængighedsangivelser og interne henvisninger;
4. omorganisere sidepanelet »Docusaurus« i forhold til den registrerede arkitektur;
5. Opret de resterende specifikationer for de reserverede kerner i den rækkefølge, de er afhængige af hinanden;
6. indføre maskinlæsbar validering af registret;
7. vedligeholde matrisen over implementeringsstatus;
8. knytte skemaer, eksempler og overensstemmelsestests til bestemte specifikationsversioner.

## 26. Ændringsstyring

Ændringer i dette register klassificeres som følger.

### Ændring i opdateringen

- rettelse af en stavefejl i en sti;
- rettelse af ikke-normativ formulering;
- synkronisering af en allerede godkendt status eller version;
- at rette et ødelagt link.

### Mindre ændring

- reservering af en ny identifikator;
- aktivering af en reserveret post;
- tilføjelse af et dokumenteret alias;
- tilføjelse af valgfri metadata i registreringsdatabasen;
- registrering af en kompatibel titelpræcisering.

### Væsentlig ændring

- ændring af fordelingsarkitekturen;
- omfordeling af en registreret identifikator;
- ændring af reglerne for identifikatorers varighed;
- at foretage en ændring, der er uforenelig med betydningen af registeroplysningerne.

Det er forbudt at tildele en allerede registreret identifikator på ny, selv ikke i forbindelse med en større opdatering af registret. En konceptuel udskiftning kræver en ny identifikator og en erstatningspost.

## 27. Virkninger af adoption

Indførelsen af dette register har følgende umiddelbare virkninger:

- de kategoribaserede trecifrede identifikatorer bliver kanoniske;
- de korte sekventielle identifikatorer bliver foreløbige aliaser fra tidligere tid;
- konflikter mellem identifikatorer løses uden at genbruge tvetydige tal;
- `docs/specifications/core/scholarly-object-model.md` bliver den autoritative kilde til `OMI-SPEC-120`;
- planlagte specifikationer tildeles beskyttede, reserverede identifikatorer;
- Ved udarbejdelsen af fremtidige specifikationer skal der tages højde for og foretages opdateringer af dette register.

Vedtagelsen ændrer ikke i sig selv en specifikations livscyklusstatus til »Stabil« og udgør ikke en erklæring om, at en implementering overholder specifikationen.

## 28. Ændringshistorik

| Version | Dato | Resumé |
|---|---|---|
| 0.3.1 | 5. september 2026 | »`OMI-SPEC-320`« (filformat) er blevet opgraderet til udkastversion 0.2.0 efter en fuldstændig omskrivning af skabelonen samt offentliggørelsen af det første kanoniske manuskriptskema og testdata. |
| 0.3.0 | 6. august 2026 | »`OMI-SPEC-160`«, »Versioning« og »Change Model« er blevet aktiveret som udkast, version 0.1.0. |
| 0.2.0 | 06.08.2026 | Aktiveret `OMI-SPEC-150`, Identitets- og bidragydermodellen, som udkast til version 0.1.0; tilføjet link til implementeringsmatricen og opdateret registreringen af styringsdokumentet. |
| 0.1.0 | 06.08.2026 | Der er oprettet en standardarkitektur for identifikatorer i henhold til OMI-specifikationen samt et indledende register. |

## 29. Resumé

OMI-specifikationsregistret udgør ét holdbart identitetssystem for hele standardsættet.

Den bevarer den kategoribaserede arkitektur, der allerede anvendes i »OMI Architecture Map«, løser konflikter mellem foreløbige identifikatorer, reserverer identifikatorer til manglende modeller, beskytter identifikatorer mod genbrug og skaber grundlaget for pålidelige krydshenvisninger, skemaer, udgivelser, oversættelser og overensstemmelseserklæringer.
