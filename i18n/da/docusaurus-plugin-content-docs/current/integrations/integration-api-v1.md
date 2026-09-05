---
title: IntegrationsAPI, version 1
description: En platformuafhængig protokol til at forbinde »OMI«-implementeringer med systemer til publikation, peer review, arkivering og videnskabelige arbejdsgange.
---

# OMI IntegrationsAPI, version 1

**Status:** Udkast  
**Protokolidentifikator:** `omi-integration/1`

## 1. Formål

OMI-integrationen API definerer en platformsuafhængig aftale mellem en Open Manuscript Initiative-implementering, såsom Open Manuscript Studio, og et eksternt videnskabeligt system.

Protokollen er bevidst uafhængig af tidsskrifts-, presse-, arkiv- eller leverandørspecifikke databasemodeller. OJS, OMP, andre udgivelsesplatforme, arkiver og fremtidige forbindelsesmoduler tilpasser deres egne begreber til de fælles integrationsressourcer, der er defineret her.

APIen gør ikke Studio til ejer af et eksternt redaktionelt arbejdsforløb. Den udgør en kontrolleret grænse, gennem hvilken bærbare videnskabelige objekter og arbejdsforløbskontekst kan udveksles.

## 2. Overensstemmelsessprog

Nøgleordene **SKAL**, **MÅ IKKE**, **KRÆVES**, **BØR**, **BØR IKKE** og **KAN** skal fortolkes som normative krav.

En implementering, der hævder at være i overensstemmelse med »`omi-integration/1`«, SKAL implementere funktionsregistrering og SKAL identificere alle understøttede valgfri funktioner.

## 3. Arkitektoniske roller

Protokollen skelner mellem fire logiske roller.

### 3.1 Tjenesten »OMI«

En »OMI«-tjeneste hoster eller behandler bærbare videnskabelige objekter. Open Manuscript Studio er et eksempel på en sådan »OMI«-tjeneste.

### 3.2 Ekstern platform

En ekstern platform administrerer en videnskabelig arbejdsgang eller en tilknyttet tjeneste. Eksempler herpå er tidsskriftssystemer, forlag for monografier, arkiver, preprint-platforme, CRIS-systemer og bevaringstjenester.

### 3.3 Stik

En connector afbilder den eksterne platforms oprindelige data, tilladelser og livscyklus til OMI Integration API. En connector KAN implementeres som et plugin, et modul, en tjeneste eller en gateway.

### 3.4 Brugeragent

En browser eller en anden klient KAN deltage i en signeret opstartssekvens, men må IKKE betragtes som pålidelig med hensyn til at håndhæve reglerne for autorisation eller anonymitet.

## 4. Ordforråd vedrørende fælles ressourcer

I »API« anvendes der bevidst generiske navne på ressourcerne.

### 4.1 Installation

En »`installation`« angiver én implementering på en ekstern platform.

Eksempler:

- én installation af OJS;
- én installation af OMP;
- ét institutionelt arkiv;
- én lejer af en hostet udgivelsestjeneste.

### 4.2 Kontekst

En »`context`« er det organisatoriske eller udgivelsesmæssige omfang inden for en installation.

Eksempler:

- et tidsskrift fra OJS;
- en OMP press;
- en samling af arkiver;
- en konference;
- en institutionel enhed.

Forbindelseselementer må IKKE antage, at `context` betyder `journal`.

### 4.3 Indsendelse

En »`submission`« er et eksternt administreret videnskabeligt værk eller et workflow-objekt, der er knyttet til et manuskript på OMI.

Det KAN dreje sig om en artikelindsendelse til et tidsskrift, en monografiindsendelse, en redigeret antologi, et bidrag til en konferenceberetning, en preprint-deponering eller et andet videnskabeligt værk.

### 4.4 Komponent

En »`component`« er en afgrænset del af et indsendt bidrag eller en publikation.

Eksempler herpå er et kapitel, et bilag, indledende afsnit, afsluttende afsnit, et sæt figurer, et supplerende datasæt eller en anden komponent, der er defineret af værten.

Komponenter KAN indlejres, når den eksterne platform understøtter hierarki.

### 4.5 Bidragyder

En »`contributor`« er en person eller organisation, der er knyttet til en indsendelse eller en komponent. Rolle og omfang SKAL bevares, når disse oplysninger foreligger.

### 4.6 Fil

En »`file`« er en beskyttet eller offentlig binær ressource, der administreres af et af de tilsluttede systemer.

### 4.7 Opgave til gennemgang

En »`reviewAssignment`« angiver den officielle eksterne tildeling af et bedømmelsesopgave til en bedømmer eller en bedømmeridentitet.

### 4.8 Gennemgangsrunde

Et identifikationsnummer for en indsendelse (`reviewRound`) angiver en specifik gennemgangscyklus for en indsendelse eller en komponent.

### 4.9 Revision

En »`revision`« angiver en sporbar tilstand af et manuskript. En revision MÅ IKKE uden varsel overskrive en uforanderlig historisk tilstand.

### 4.10 Offentliggørelse

En »`publication`« repræsenterer den tilgængelige tilstand eller metadata, der administreres af den eksterne udgivelsesplatform.

## 5. Ressourceidentifikatorer

Hver eneste eksternt hentet ressource SKAL indeholde en identifikator, der er stabil inden for den pågældende installation.

En implementering af `OMI` BØR gemme følgende tuple:

```text
installationId + resourceType + externalId
```

som den kanoniske eksterne reference.

En connector BØR desuden angive en uigennemsigtig, globalt entydig `uri`, når værtsplatformen kan generere en sådan.

Eksterne identifikatorer SKAL behandles som uigennemsigtige strenge, selvom en bestemt platform i øjeblikket anvender heltal.

Eksempel:

```json
{
  "installationId": "pkp-example",
  "resourceType": "submission",
  "externalId": "1542",
  "uri": "urn:example:ojs:submission:1542"
}
```

## 6.API-basestien

HTTP-implementeringer BØR stille følgende version 1-ressourcer til rådighed:

```text
/api/integrations/v1/
```

En implementering KAN montere API under en anden applikationssti, men ressourcens semantik SKAL forblive uændret.

Alle produktionsendepunkter SKAL bruge HTTPS.

## 7. Identificering af kapaciteter

### 7.1 Endepunkt

```http
GET /api/integrations/v1/capabilities
```

Der SKAL foretages en kapacitetsundersøgelse, inden der forsøges udført valgfri handlinger.

Eksempel på svar:

```json
{
  "protocol": "omi-integration/1",
  "implementation": {
    "name": "Open Manuscript Studio",
    "version": "0.1.0"
  },
  "capabilities": [
    "launch",
    "metadata.read",
    "files.read",
    "manuscript.read",
    "manuscript.write",
    "review.read",
    "review.write",
    "revision.write",
    "publication.export"
  ]
}
```

Kunder må IKKE antage, at der er understøttelse af en funktion, der ikke er angivet.

## 8. Register over indledende kapaciteter

Version 1 definerer følgende funktionsnavne:

| Egenskab | Betydning |
| --- | --- |
| `launch` | Log ind som bruger i et arbejdsområde på OMI |
| `metadata.read` | Læs metadata fra eksterne indsendelser |
| `metadata.write` | Skriv de tilladte metadata til det eksterne system |
| `contributors.read` | Se bidragydere og roller med afgrænset adgang |
| `contributors.write` | Skrivning af bidragsydernes ændringer tilladt |
| `files.read` | Opregne og hente godkendte filer |
| `files.write` | Upload filer til den eksterne arbejdsgang |
| `manuscript.read` | Hent en manuskriptrepræsentation fra OMI |
| `manuscript.write` | Indsend en manuskriptpræsentation til OMI |
| `review.read` | Hent godkendt gennemgangskontekst |
| `review.write` | Vis strukturerede søgeresultater |
| `revision.read` | Hent revisionshistorik eller revisionsmetadata |
| `revision.write` | Opret en ny ekstern revision |
| `publication.read` | Læs metadata/status vedrørende publikationen |
| `publication.export` | Eksport af publikationsderivater |

I fremtidige specifikationer KAN der registreres yderligere navne på funktioner. Ukendte navne på funktioner SKAL ignoreres på en sikker måde.

## 9. Underskrevet lancering

En launch-operation giver en autoriseret bruger på en ekstern platform mulighed for at få adgang til det tilsvarende arbejdsområde på OMI uden at udsætte den eksterne platforms database eller private session for risiko.

En startnyttelast BØR indeholde:

```json
{
  "protocol": "omi-integration/1",
  "installationId": "pkp-example",
  "context": {
    "externalId": "1",
    "type": "journal"
  },
  "submission": {
    "externalId": "1542"
  },
  "actor": {
    "externalId": "27"
  },
  "scope": ["manuscript.read", "manuscript.write"],
  "issuedAt": "2026-08-07T18:00:00Z",
  "expiresAt": "2026-08-07T18:05:00Z",
  "nonce": "b4b65f2b-0c63-4c21-8b82-876728f0bd31"
}
```

Nyttelasten SKAL autentificeres. Implementeringer KAN anvende HMAC i tilfælde af gensidigt konfigurerede installationer og BØR understøtte asymmetriske signaturer ved integrationer på tværs af uafhængige tillidsdomæner.

Den modtagende tjeneste SKAL validere signaturen, udløbsdatoen, installationsidentiteten, nonce-værdien eller tilsvarende beskyttelse mod gentagelse samt det anmodede omfang, inden der oprettes en integrationssession.

## 10. Kontekstrepræsentation

Eksempel på tidsskriftskontekst:

```json
{
  "externalId": "1",
  "type": "journal",
  "name": {"en": "Example Journal"},
  "url": "https://journal.example.org/"
}
```

Eksempel på pressekontekst:

```json
{
  "externalId": "3",
  "type": "press",
  "name": {"en": "Example University Press"},
  "url": "https://press.example.org/"
}
```

Feltet »`type`« er beskrivende og udvideligt. Klienter MÅ IKKE afvise en ellers gyldig kontekst alene på grund af, at dens type er ukendt.

## 11. Metadata for indsendelser

En normaliseret repræsentation af en indsendelse BØR understøtte lokaliserede værdier.

```json
{
  "externalId": "1542",
  "type": "article",
  "status": "review",
  "title": {
    "en": "Example manuscript",
    "hu": "Példa kézirat"
  },
  "abstract": {
    "en": "Example abstract"
  },
  "keywords": {
    "en": ["history", "publishing"]
  },
  "primaryLocale": "en",
  "identifiers": [],
  "updatedAt": "2026-08-07T17:30:00Z"
}
```

Der KAN angives værtsspecifikke statusværdier, men en connector BØR også, når det er muligt, knytte dem til en dokumenteret, normaliseret workflow-tilstand.

## 12. Bidragydere

Bidragsydernes repræsentationer BØR bevare identitet, rolle, rækkefølge, omfang og identifikatorer.

```json
{
  "externalId": "author-12",
  "name": {
    "given": "Ada",
    "family": "Example"
  },
  "roles": ["author"],
  "scope": {
    "type": "submission",
    "externalId": "1542"
  },
  "identifiers": [
    {"scheme": "orcid", "value": "0000-0000-0000-0000"}
  ]
}
```

I forbindelse med antologier kan en bidragyder være afgrænset til en eller flere dele i stedet for det samlede bidrag.

## 13. Komponenter

Komponenterne muliggør integration af monografier, antologier og andre sammensatte værker.

```json
{
  "externalId": "chapter-7",
  "type": "chapter",
  "parentExternalId": null,
  "title": {"en": "Chapter Seven"},
  "sequence": 7
}
```

En artikelkobling af typen »OJS« KAN vælge ikke at vise nogen komponenter. En kobling af typen »OMP« KAN vise kapitler, forord, efterord, bilag eller andre publikationskomponenter.

## 14. Filudveksling

Filopregning BØR returnere metadata uden at kræve øjeblikkelig binæroverførsel.

```json
{
  "externalId": "file-889",
  "name": "manuscript.docx",
  "mediaType": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "size": 482931,
  "stage": "submission",
  "checksum": {
    "algorithm": "sha256",
    "value": "..."
  }
}
```

Download af binære filer SKAL kræve godkendelse, uafhængigt af kendskab til filidentifikatoren. Private filsystemstier MÅ IKKE afsløres.

Uploaded filer BØR oprette en ny sporbare fil eller revision i overensstemmelse med værtsplatformens regler.

## 15. Udveksling af manuskripter

Når `manuscript.read` eller `manuscript.write` understøttes, er det foretrukne kanoniske udvekslingsobjekt en OMI-pakke, der overholder de gældende specifikationer for OMI-filformat og -containerarkitektur.

Konnektorer KAN desuden angive afledte formater såsom JATS, HTML eller DOCX.

Et afledt objekt MÅ IKKE uden varsel erstatte det kanoniske OMI videnskabelige objekt, medmindre den modtagende implementering udtrykkeligt definerer denne adfærd.

## 16. Revisionsmodel

Ved revisionshandlinger SKAL herkomstoplysningerne bevares.

En revisionsjournal BØR indeholde:

```json
{
  "externalId": "revision-4",
  "sequence": 4,
  "createdAt": "2026-08-07T18:20:00Z",
  "createdBy": {"externalId": "27"},
  "source": "omi",
  "parentExternalId": "revision-3"
}
```

Hvis den eksterne platform ikke har en førsteklasses revisionsressource, SKAL konnektoren dokumentere, hvordan revisioner fra OMI afspejles i dens fil- eller arbejdsgangsmodel.

## 17. Fagfællebedømmelse

### 17.1 Kompetence

Det eksterne workflow-system er fortsat det afgørende for tildeling af korrekturlæsere, deadline, status for gennemgangsrunde, anbefalingsterminologi og redaktionelle beslutninger, medmindre andet udtrykkeligt er angivet i en profil.

### 17.2 Gennemgang af opgavens fremstilling

```json
{
  "externalId": "review-991",
  "roundExternalId": "round-2",
  "target": {
    "type": "submission",
    "externalId": "1542"
  },
  "reviewMode": "double-anonymous",
  "dueAt": "2026-09-01T23:59:59Z",
  "permissions": ["manuscript.read", "review.write"]
}
```

Målet KAN i stedet henvise til en komponent, hvilket muliggør gennemgang på kapitelniveau i monografiarbejdsgange.

### 17.3 Anonymitet

Identitetsfiltrering SKAL finde sted på serveren, inden en gennemgangsdatapakke returneres. Man MÅ IKKE stole på, at en brugergrænseflade på klientsiden skjuler identiteter, der allerede er blevet overført.

### 17.4 Resultat af den strukturerede gennemgang

```json
{
  "assignmentExternalId": "review-991",
  "recommendation": "revisions-required",
  "summary": "The argument is promising but requires clarification.",
  "annotations": [
    {
      "anchor": "omi:anchor:01J...",
      "visibility": "author-and-editor",
      "body": "Please provide a source for this statement.",
      "status": "open"
    }
  ]
}
```

Det præcise anbefalingsordforråd KAN defineres af værten. Konnektorer BØR offentliggøre de tilladte værdier som en del af gennemgangskonteksten.

## 18. Udveksling af publikationer

Publikationsressourcer KAN indeholde metadata og krav til afledte værker, der vedrører publikationen. Profilerne i »OJS« kan knytte publikationens status til artikler og numre; profilerne i »OMP« kan knytte den til monografier, serier, kapitler, publikationsformater og katalogposter.

OMI Man må IKKE gå ud fra, at offentliggørelse betyder, at opgaven er tildelt.

## 19. Kortlægning afOJS-profiler

En »OJS«-konnektor BØR kortlægge:

| OMI-ressource | OJS-koncept |
| --- | --- |
| installation | installation af OJS |
| kontekst | tidsskrift |
| indsendelse | indsendelse/artikel-workflow-objekt |
| komponent | valgfri artikelkomponent |
| bidragyder | forfatter/bidragyder |
| fil | indsendelsesfil |
| gennemgangsopgave | gennemgangsopgave |
| gennemgangsrunde | gennemgangsrunde |
| revision | sporbar status for indsendelse/revision |
| publikation | OJS publikation/artikel publikationsstatus |

OJS-konnektoren SKAL anvende understøttede OJS-applikationstjenester, -repositorier og -hooks i stedet for direkte adgang på tværs af databaser fra Studio.

## 20.  OMP-profilkortlægning

En »OMP«-konnektor BØR kortlægge:

| OMI ressource | OMP koncept |
| --- | --- |
| installation | installation af OMP |
| kontekst | presse |
| indsendelse | monografi/indsendelsesworkflow-objekt |
| del | kapitel, forord, efterord, bilag eller anden del |
| bidragyder | forfatter, redaktør, oversætter, kapittelforfatter eller anden bidragyder |
| fil | indsendelses-/produktionsfil |
| gennemgangsopgave | gennemgangsopgave |
| gennemgangsrunde | gennemgangsrunde |
| revision | sporbart manuskript/revisionsstatus |
| publikation | monografi/katalog |

OMP-konnektoren SKAL bevare bidragydernes omfang, hvor dette er muligt, og MÅ IKKE sammenlægge forfatterskabet på kapitelniveau til forfatterskab for hele bogen.

## 21. Godkendelsesomfang

Anvendelsesområder BØR fastlægges snævert. Version 1 forbeholder sig anvendelsesområder, der er tilpasset funktionerne, herunder:

```text
metadata.read
metadata.write
contributors.read
contributors.write
files.read
files.write
manuscript.read
manuscript.write
review.read
review.write
revision.read
revision.write
publication.read
publication.export
```

Besiddelse af et gyldigt integrationsbevis må IKKE omfatte alle anvendelsesområder.

## 22. HTTP-semantik

JSON Endpunkter SKAL anvende UTF-8 JSON og BØR anvende medietypen:

```text
application/json
```

Fremtidige medietyper, der er specifikke for »OMI«, KAN registreres for kanoniske pakker eller strukturerede ressourcer.

Implementeringer BØR anvende konventionel HTTP-statussemantik:

- `200` vellykket læsning eller opdatering;
- `201` der er oprettet en ny ressource;
- `204` vellykket operation uden respons fra kroppen;
- `400` fejlformateret anmodning;
- `401` manglende eller ugyldig godkendelse;
- `403` godkendt, men ikke autoriseret;
- `404` ressourcen blev ikke fundet eller er bevidst holdt skjult;
- `409` synkroniserings- eller revisionskonflikt;
- `410` ekstern kilde er bevidst fjernet;
- `422` semantisk ugyldig nyttelast;
- `429` Ratebegrænsningen er overskredet.

## 23. Fejlfremstilling

Fejl BØR angives ved hjælp af en stabil, maskinlæsbar kode.

```json
{
  "error": {
    "code": "revision_conflict",
    "message": "The external manuscript has changed since the requested base revision.",
    "details": {
      "expectedRevision": "revision-3",
      "currentRevision": "revision-4"
    }
  }
}
```

Kunder må IKKE basere deres programlogik på fejltekster, der kan læses af mennesker.

## 24. Parallellitet og synkronisering

Skriveoperationer BØR anvende revisionsidentifikatorer, entitetskoder, tidsstempler eller en anden eksplicit mekanisme til forebyggelse af tabte opdateringer uden fejlmeddelelse.

Når begge systemer har ændret det samme autoritative felt eller den samme manuskripttilstand, BØR forbindelsesmodulet returnere en konflikt i stedet for i al stilhed at udvælge en vinder.

## 25. Idempotens

Oprettelsesoperationer, der kan gentages, BØR understøtte en idempotensnøgle. En gentagen anmodning med samme nøgle og tilsvarende indhold BØR IKKE skabe dublerede revisioner, filer, gennemgange eller indsendelser.

## 26. Sikkerhedskrav

Produktionsintegrationer SKAL bruge HTTPS.

Hemmeligheder MÅ IKKE placeres i URL’er, der er synlige i browseren, når der findes en mere sikker udvekslingsmetode. Delte hemmeligheder SKAL kunne udskiftes. Ved sammenligning af signaturer SKAL der, hvor det er relevant, anvendes tidssikre operationer.

Implementeringer BØR registrere sikkerhedsrelevante integrationshændelser uden unødigt at registrere legitimationsoplysninger, ubehandlede fortrolige oplysninger, privat gennemgangsindhold eller indholdet af manuskripter ud over det, der er nødvendigt af driftsmæssige årsager.

## 27. Privatliv og fortrolighed i forbindelse med sagsgennemgang

Tilslutningsenheder SKAL anvende dataminimering. Der BØR kun overføres de data, der er nødvendige for den anmodede handling og det godkendte anvendelsesområde.

Ved dobbeltanonym og andre fortrolige gennemgangsmetoder SKAL identiteter, filmetadata, dokumentmetadata og andre identificerende oplysninger filtreres ved servergrænsen, hvor dette kræves i henhold til politikken.

## 28. Herkomst

Importerede data BØR indeholde oplysninger om herkomst, der angiver den eksterne installation, ressourceidentifikatoren, synkroniseringstidspunktet og kilderevisionen, når disse oplysninger foreligger.

Genererede afledte dokumenter BØR angive den revision af kildedokumentet »OMI«, som de er udledt fra.

## 29. En smidig afbrydelse

Et manuskript fra OMI SKAL fortsat kunne fortolkes og eksporteres, selvom en ekstern integration ikke er tilgængelig eller er blevet fjernet.

Eksterne workflow-links SKAL derfor angives som eksplicitte henvisninger og herkomstoplysninger, ikke som udokumenterede afhængigheder af eksterne databasetabeller eller proprietær kørselstilstand.

Fjernelse af en integration MÅ IKKE gøre det kanoniske dokument OMI ugyldigt.

## 30. Udvidelsesmuligheder

Platformspecifikke udvidelser KAN indgå som udvidelsesobjekter med navnerum. Kernklienter SKAL kunne ignorere ukendte udvidelser på en sikker måde.

Eksempel:

```json
{
  "extensions": {
    "org.pkp.ojs": {
      "stageId": 3
    }
  }
}
```

En udvidelse MÅ IKKE omdefinere semantikken for et kernefelt.

## 31. Forhandling om version

Protokolidentifikatoren for denne specifikation er:

```text
omi-integration/1
```

Ændringer, der ikke er bagudkompatible, kræver en ny hovedprotokolidentifikator. Yderligere funktioner og valgfri felter KAN indføres uden at ændre hovedidentifikatoren, når eksisterende klienter sikkert kan ignorere dem.

Konnektorer BØR afvise en hovedversion af en protokol, som de ikke forstår, i stedet for at forsøge en usikker delvis fortolkning.

## 32. Overensstemmelsesprofiler

Et fremtidigt »OMI«-register KAN offentliggøre navngivne profiler, såsom:

```text
omi-integration/1/core
omi-integration/1/ojs
omi-integration/1/omp
omi-integration/1/repository
omi-integration/1/review
```

En profil definerer de nødvendige funktioner og tilknytninger for en klasse af eksterne systemer, samtidig med at den fælles ressourceterminologi i denne specifikation bevares.

## 33. Designinvariant

IntegrationsAPIen SKAL bevare den arkitektoniske adskillelse mellem det videnskabelige objekt og arbejdsgangsplatformen.

Det eksterne system kan koordinere indsendelse, bedømmelse, produktion, offentliggørelse, arkivering eller bevaring. OMI kan tilbyde redigering, struktureret bedømmelse, annotering, transformation og bærbare videnskabelige objekter. Ingen af parterne er forpligtet til at anvende den andens interne lagringsmodel.

Den resulterende integration bør fortsat kunne udskiftes, kontrolleres og gøres om.

> Workflow-systemer styrer processerne omkring manuskriptet. Selve manuskriptet forbliver flytbart.