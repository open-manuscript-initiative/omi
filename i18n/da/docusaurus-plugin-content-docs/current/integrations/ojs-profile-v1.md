---
title: OJS Integrationsprofil v1
description: OMI IntegrationsAPI-profil v1 til Open Journal Systems, herunder arbejdsgange for indsendelser, filer, bedømmelse, revisioner og publikation.
---

# OJS Integrationsprofil v1

**Status:** Udkast  
**Grundlæggende protokol:** `omi-integration/1`  
**Profil-id:** `omi-integration/1/ojs`

## 1. Anvendelsesområde

OJS-integrationsprofilen definerer, hvordan en Open Journal Systems-installation (OJS) tilpasser sin arbejdsgang for tidsskriftudgivelse til den platformsuafhængige OMI-integrationsAPI, version 1.

Profilen er beregnet til en arkitektur, hvor OJS og tjenesten OMI forbliver separate applikationer med separate persistenslag. Integrationspluginet OJS fungerer som en »thin adapter«. Open Manuscript Studio MÅ IKKE få direkte adgang til databasen OJS eller mappen med private filer.

OJS er fortsat den førende kilde til tidsskrifters arbejdsgange. OMI er fortsat den førende kilde til det bærbare, strukturerede manuskript og videnskabelige interaktioner, der er integreret i Studio.

## 2. Arkitektonisk afgrænsning

```text
OJS
Own application and database
        |
        | OJS OMI Integration Plugin
        | supported OJS services / repositories / hooks
        |
        | HTTPS + OMI Integration API v1
        v
Open Manuscript Studio
Own application and PostgreSQL database
```

Adapteren MÅ IKKE kræve ændringer af kernefilerne i OJS. Den BØR anvende de understøttede udvidelsesmekanismer i PKP/OJS samt API'er på applikationsniveau.

## 3. Autoritetsmodel

OJS er den gældende kilde for:

- tidsskriftets identitet og tidsskriftets konfiguration;
- indsendelsens status og fase i arbejdsgangen;
- redaktionelle opgaver;
- invitation til anmelder og tildeling af anmeldelsesopgave;
- gennemgangsrunder og frister;
- anbefalede værdier fra bedømmere, som er godkendt af OJS;
- redaktionelle beslutninger;
- status for arbejdsgangen for indsendelsesfilen;
- udgivelsesstatus;
- udstede en opgave;
- offentliggørelse af artikler.

OMI / Studio er den ansvarlige instans for:

- dokumentstrukturen i »OMI«;
- stabile forankringer;
- Annotationer, der er integreret i programmet;
- fælles redigering af manuskripter;
- manuskriptets strukturelle historie på OMI;
- strukturerede anmærkninger til gennemgangen, der er oprettet i Studio;
- status for Studio-anmærkninger;
- OMI generering af pakker.

Synkroniserede metadata SKAL registrere herkomst og MÅ IKKE uden varsel oprette konkurrerende autoriteter.

## 4. Nødvendig profilkortlægning

| OMI Integration API ressource | OJS koncept |
| --- | --- |
| `installation` | OJS installation |
| `context` | tidsskrift |
| `submission` | indsendelse via OJS |
| `component` | valgfri artikel-/indsendelseskomponent |
| `contributor` | forfatter/bidragyder til den aktuelle publikation |
| `file` | OJS indsendelsesfil |
| `reviewAssignment` | Opgave om anmeldelse af »OJS« |
| `reviewRound` | Anmeldelsesrunde på OJS |
| `revision` | sporbar status for manuskript/indsendelse og revision |
| `publication` | OJS publikationshistorik og status i forhold til offentliggørelse |

OJS Numeriske identifikatorer SKAL serialiseres som strenge ved protokolgrænsen.

## 5. Installationsidentitet

Hver OJS-installation, der er forbundet til en OMI-tjeneste, SKAL have en stabil `installationId` konfigureret til integrationen.

Identifikatoren MÅ IKKE ændres, når et tidsskrift omdøbes, eller når dets offentlige URL ændres.

Eksempel:

```json
{
  "installationId": "ojs-example-university",
  "platform": "ojs",
  "profile": "omi-integration/1/ojs",
  "baseUrl": "https://journals.example.edu/"
}
```

OMI-tjenesten BØR gemme installationsidentiteten uafhængigt af den aktuelle basis-URL.

## 6. Tidsskriftets kontekst

Et tidsskrift på OJS svarer til et tidsskrift på OMI `context`.

Eksempel:

```json
{
  "externalId": "1",
  "type": "journal",
  "path": "example-journal",
  "name": {
    "en": "Example Journal"
  },
  "url": "https://journals.example.edu/index.php/example-journal"
}
```

Tidsskrift-ID’et er den stabile eksterne identifikator. Tidsskriftets sti BØR også angives med henblik på navigation, men MÅ IKKE betragtes som den eneste permanente identitet.

## 7. Kortlægning af indsendelser

En indsendelse på OJS svarer til en ressource på OMI `submission`.

En konnektor BØR som minimum indeholde:

- indsendelses-ID;
- nuværende fase i arbejdsgangen;
- aktuelle publikationsmetadata;
- primær lokalitet;
- lokaliseret titel;
- lokaliseret resumé, hvor det foreligger;
- lokaliserede søgeord, hvor det er muligt;
- datoer, der kræves til synkronisering;
- permanente identifikatorer, der allerede er tildelt indsendelsen/publikationen, hvor dette er tilladt.

Eksempel:

```json
{
  "externalId": "1542",
  "type": "article",
  "status": "review",
  "title": {
    "en": "Example manuscript"
  },
  "abstract": {
    "en": "Example abstract"
  },
  "keywords": {
    "en": ["history", "publishing"]
  },
  "primaryLocale": "en",
  "updatedAt": "2026-08-07T17:30:00Z"
}
```

Koblingen BØR skelne mellem en arbejdsgangstilstand på OJS og en manuskriptstatus på OMI. At en indsendelse befinder sig i en bedømmelsesfase på OJS betyder ikke, at dokumentet på OMI er uforanderligt.

## 8. Metadata om publikationen

OJS kan indeholde metadata rettet mod publikationen, adskilt fra indsendelsesdata på workflow-niveau. Connectoren BØR læse bibliografiske metadata rettet mod forfatteren fra den publikationsrepræsentation, der passer til den pågældende version af OJS, i stedet for at rekonstruere dem ud fra databasetabeller.

En »OMI«-synkronisering MÅ IKKE antage, at en indsendelse kun har én historisk publikationsstatus.

Koblingen BØR bevare identifikatorerne for indsendelsen på OJS og den relevante publikationspost, når disse foreligger.

## 9. Medvirkende

OJS Forfattere/bidragydere henvises til ressourcerne for bidragydere på OMI.

Stikket BØR bevare:

- identifikator for ekstern bidragyder;
- for- og efternavne;
- det foretrukne offentlige navn, hvor det foreligger;
- Send kun e-mail, når det aktuelle integrationsomfang og arbejdsgangen tillader videregivelse;
- tilhørsforhold;
- land, hvor det er tilgængeligt og tilladt;
- ORCID og andre identifikatorer;
- bidragsyderrækkefølge;
- bidragyderrolle, hvor OJS viser den;
- angivelse af korrespondance, hvor det er relevant.

Bidragyderens identitet SKAL filtreres, når det kræves i henhold til retningslinjerne for anonym bedømmelse.

Koblingen MÅ IKKE afsløre forfatterens identitet over for en bedømmer, når arbejdsgangen »OJS« kræver, at forfatteren forbliver anonym.

## 10. Komponenter

De fleste tidsskriftsartikler kan fremstilles som en enkelt indsendelse uden underkomponenter. Profilen »OJS« kræver derfor ikke understøttelse af komponenter.

En connector KAN eksponere værtsdefinerede komponenter, når det er hensigtsmæssigt, f.eks. supplerende materialeklasser eller strukturerede artikelkomponenter. Sådanne udvidelser MÅ IKKE ændre semantikken i kerneindsendelsesressourcen.

## 11. Indsendte filer

OJS Indsendelsesfilerne henviser til ressourcerne på OMI og `file`.

Svarene på fillisten BØR indeholde:

- stabil identifikator for en ekstern fil;
- visning/filnavn;
- mediatype, hvis denne er kendt;
- størrelse, når den er tilgængelig;
- arbejdsgangstrin eller genre, hvor det er relevant;
- oplysninger om revision, hvor sådanne foreligger;
- kontrolsum, når det er praktisk muligt;
- Oprettelse/opdatering af metadata, der er nødvendigt for synkroniseringen.

Eksempel:

```json
{
  "externalId": "889",
  "name": "manuscript.docx",
  "mediaType": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "stage": "submission",
  "revision": 2
}
```

Studio SKAL hente binært indhold via et autoriseret integrationsendepunkt på OJS. Kendskab til et OJS-fil-ID alene MÅ IKKE give tilladelse til download.

Pluginet MÅ IKKE afsløre stier til filsystemet på OJS-serveren.

## 12. Import af filer til Studio

Når en indsendelse fra OJS åbnes for første gang i Studio, BØR brugeren kunne vælge en gyldig manuskriptfil eller benytte en automatisk valgt primær manuskriptfil i overensstemmelse med connector-politikken.

Importfunktionen KAN konvertere DOCX, JATS, HTML eller en anden understøttet repræsentation til dokumentmodellen OMI.

Den oprindelige filhenvisning og checksum fra OJS BØR bevares som herkomstoplysninger.

Importen MÅ IKKE ændre kildefilen OJS.

## 13. Indsendelse af en revideret udgave til OJS

En returnering af et manuskript fra Studio tilOJS SKAL resultere i oprettelsen af en sporbar ny fil eller revision i OJSi henhold til arbejdsgangsprincipperne på OJS.

Koblingen MÅ IKKE uden varsel overskrive en tidligere kildefil.

En anmodning om revision BØR indeholde:

```json
{
  "baseExternalRevision": "3",
  "source": "omi",
  "omiRevision": "01J...",
  "message": "Author revision from Open Manuscript Studio"
}
```

OJS-konnektoren BØR afvise handlingen på grund af en synkroniseringskonflikt, hvis den forventede basistilstand har ændret sig, og automatisk afstemning ville medføre risiko for datatab.

## 14. Signeret lanceringsforløb

Pluginet »OJS« BØR kun give adgang til handlingen **Åbn i Studio** til brugere, der har tilladelse til den pågældende indsendelse og handling.

Lanceringserklæringen BØR angive:

- `installationId`;
- journalens kontekst-ID;
- indsendelses-ID;
- OJS bruger-ID;
- anmodede anvendelsesområder;
- udstedelsestidspunkt;
- udløbstidspunkt;
- nonce.

Eksempel på anvendelsesområde for en forfatter, der redigerer en revision:

```json
[
  "metadata.read",
  "contributors.read",
  "files.read",
  "manuscript.read",
  "manuscript.write",
  "revision.write"
]
```

En bedømmer SKAL få tildelt et mere afgrænset, bedømmelsesspecifikt omfang.

## 15. Brugeridentitet og sammenkædning af konti

En brugeridentifikator fra OJS er en ekstern identitetsbekræftelse og MÅ IKKE automatisk blive en Studio-kontoidentifikator.

Studio MAY kan knytte en godkendt Studio-konto til en eller flere identiteter fra eksterne OJS efter en vellykket opstart med digital signatur og lokal godkendelse.

En anbefalet nøgle er:

```text
installationId + externalUserId
```

E-mail-adressen MÅ IKKE bruges som den eneste uforanderlige identitetsnøgle på tværs af systemer.

## 16. Kompetence inden for fagfællebedømmelse

OJS er fortsat den førende kilde til:

- om der foreligger en revisionsopgave;
- hvilken anmelder der ejer den;
- den aktuelle bedømmelsesrunde;
- forfaldsdatoer;
- gennemgang af metode/politik;
- om forfatterens identitet må afsløres;
- om anmelderens identitet må afsløres;
- tilladte anbefalede værdier;
- færdiggørelsesstatus;
- redaktionel beslutning efter gennemgang.

Studiet må IKKE på egen hånd udpege en anmelder til OJS eller foregribe en redaktionel beslutning på OJS.

## 17. Lancering af anmeldelsen

En lancering af en anmeldelse SKAL angive en specifik godkendt anmeldelsesopgave, ikke blot en indsendelse og en bruger.

Eksempel:

```json
{
  "installationId": "ojs-example-university",
  "context": {"externalId": "1", "type": "journal"},
  "submission": {"externalId": "1542"},
  "reviewAssignment": {"externalId": "991"},
  "reviewRound": {"externalId": "2"},
  "actor": {"externalId": "77"},
  "scope": ["manuscript.read", "review.read", "review.write"]
}
```

Pluginet »OJS« SKAL kontrollere, at den aktuelle bruger på OJS har ret til at udføre den pågældende opgave, før det udsteder startbekræftelsen.

## 18. Gennemgang af anonymitet

OJS-konnektoren SKAL fastlægge den gældende politik for anonymitet ved gennemgang ud fra den autoritative OJS-arbejdsgangskonfiguration og tildelingskonteksten.

Inden der sendes en nyttelast, der er synlig for korrekturlæseren, SKAL konnektoren fjerne de data, som korrekturlæseren ikke har adgang til at se.

Filtreringen KAN omfatte:

- bidragydernes navne;
- bidragyderes e-mail-adresser;
- tilknytninger;
- ORCID identifikatorer;
- tak;
- identificering af filmetadata;
- opladerens identitet;
- andre metadata, der ville omgå den konfigurerede gennemgangspolitik.

Studio SKAL også håndhæve den modtagne politik på serversiden. Det er ikke i overensstemmelse med kravene, hvis en identitet kun skjules i koden på React/UI.

## 19. Struktureret gennemgang i Studio

Studio MAY kan præsentere en »OJS«-gennemgang som en struktureret gennemgang af typen »OMI«, der indeholder:

- generel gennemgangstekst;
- kommentarer, der kun kan ses af redaktører;
- kommentarer, der er synlige for forfatteren;
- anbefaling;
- forankrede kommentarer;
- henvisninger til vedhæftede filer;
- færdiggørelsesstatus;
- svar og status for løsning af annoteringer.

En forankret annotation BØR, når det er muligt, henvise til et stabilt OMI-anker i stedet for en gengivet PDF-sidekoordinat.

## 20. Afsendelse af en anmeldelse

En genbehandlingsoperation SKAL angive den pågældende opgave (OJS) og genbehandlingsrunde.

Eksempel:

```json
{
  "assignmentExternalId": "991",
  "roundExternalId": "2",
  "recommendation": "revisions-required",
  "summary": "The manuscript requires clarification in several places.",
  "editorOnly": "The central argument is publishable after revision.",
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

Koblingen SKAL kontrollere, om anbefalingen overholder de tilladte værdier for gennemgangskonteksten »OJS«.

Indsendelse af en Studio-anmeldelse BØR IKKE automatisk føre til en redaktionel beslutning, medmindre OJS udtrykkeligt fastlægger og godkender en sådan fremgangsmåde.

## 21. Flere gennemgangsrunder

Studio SKAL behandle »OJS«-gennemgangsrunder som separate eksterne arbejdsgangsobjekter.

Annotationer fra en tidligere runde BØR fortsat kunne henføres historisk til den pågældende runde, selv når de overføres til opfølgning på løsninger.

En senere runde KAN henvise til tidligere kommentarer, men MÅ IKKE overskrive den historiske gennemgangsjournal.

## 22. Forfatterens revision og svar

Hvis arbejdsgangen i »OJS« tillader en forfatterrevision, KAN Studio stille et forfatterarbejdsområde til rådighed, der indeholder revisionskommentarer, som forfatteren har adgang til at se.

Forfatteren KAN:

- revidere indholdet i det forelagte manuskript;
- besvare kommentarer til anmeldelser;
- markere et svar som besvaret set fra forfatterens perspektiv;
- Opret en ny revision af OMI;
- Send en revisionspakke/fil til OJS.

En forfatters lokale beslutning MÅ IKKE betragtes som en godkendelse fra en bedømmer, medmindre bedømmeren eller redaktøren udtrykkeligt bekræfter dette.

## 23. Redaktionel brug

Redaktører kan få tildelt et bredere ansvarsområde end forfattere eller bedømmere, forudsat at det godkendes af OJS.

Et Studio-arbejdsområde, der er beregnet til redaktører, KAN vise:

- alle godkendte revisionsrapporter;
- kommentarer, der kun kan ses af redaktører;
- revisioner af manuskripter;
- status for annoteringens opløsning;
- synkroniseringsstatus.

Den endelige redaktionelle beslutning SKAL stadig registreres i OJS.

## 24. Integration af publikationer

Efter godkendelse eksporterer Studio MAY afledte publikationsfiler til produktion i henhold til »OJS«, herunder formater, der understøttes af specifikationerne på OMI og de installerede konvertere.

Mulige resultater omfatter:

- OMI pakke;
- JATS XML;
- HTML;
- DOCX-afledt produktionsvolumen;
- tilknyttede aktiver.

OJS er fortsat gældende for planlægning af udgivelser, tildeling af udgaver, DOI/arbejdsgangen for udgivelsesmetadata, status for korrektur/udgivelse samt offentliggørelse, medmindre dette udtrykkeligt delegeres via en fremtidig profiludvidelse.

## 25. Krav til kapacitet

En »OJS«-konnektor, der hævder at overholde »`omi-integration/1/ojs`«-basisprofilen, SKAL understøtte:

```text
launch
metadata.read
contributors.read
files.read
```

En konnektor, der hævder at kunne **OJS-manuskriptsynkronisering**, BØR desuden understøtte:

```text
manuscript.read
manuscript.write
revision.read
revision.write
```

En connector, der hævder at tilbyde **OJS-integration baseret på peer review**, SKAL desuden understøtte:

```text
review.read
review.write
```

En konnektor, der hævder at kunne **OJS-publikationsintegration**, BØR angive følgende:

```text
publication.read
publication.export
```

## 26. Anbefalet endepunktsflade

En implementering KAN tilpasse routing til sit værtsrammeværk, men BØR tilbyde tilsvarende funktioner til:

```text
GET  /capabilities
POST /launch
GET  /contexts/{contextId}
GET  /contexts/{contextId}/submissions/{submissionId}
GET  /contexts/{contextId}/submissions/{submissionId}/contributors
GET  /contexts/{contextId}/submissions/{submissionId}/files
GET  /contexts/{contextId}/submissions/{submissionId}/files/{fileId}/content
GET  /contexts/{contextId}/submissions/{submissionId}/revisions
POST /contexts/{contextId}/submissions/{submissionId}/revisions
GET  /contexts/{contextId}/submissions/{submissionId}/reviews/{assignmentId}
POST /contexts/{contextId}/submissions/{submissionId}/reviews/{assignmentId}/result
GET  /contexts/{contextId}/submissions/{submissionId}/publication
```

Disse stier beskriver protokolressourcer; de kræver ikke, at OJS erstatter sin oprindelige REST-API-struktur. Integrationspluginet KAN eksponere et dedikeret adapter-navneområde.

## 27. Bemyndigelse

Hver eneste handling SKAL godkendes på applikationslaget i OJS.

Konnektoren MÅ IKKE udelukkende basere sig på besiddelse af et indsendelses-ID, fil-ID, ID for tildeling af gennemgang eller en indlogget Studio-session.

Service-til-service-adgangsoplysninger identificerer forbindelsen mellem tjenesterne; bruger- og workflow-godkendelse afgør, om der kan opnås adgang til en bestemt ressource.

## 28. Synkroniseringsstatus

Studiet BØR gemme synkroniseringsmetadata, herunder:

```text
installationId
contextExternalId
submissionExternalId
externalPublicationId (when applicable)
lastExternalRevision
lastSynchronizedAt
source checksum(s)
```

Synkroniseringstilstanden udgør integrationsmetadata og SKAL kunne adskilles fra det kanoniske OMI manuskriptindhold.

## 29. Konfliktløsning

Konnektoren BØR returnere en fejlmeddelelse »`409 Conflict`«, når Studio forsøger at skrive ud fra en forældet ekstern basisrevision, eller når tilstanden »OJS« har ændret sig på en måde, der forhindrer en sikker operation.

Koblingen MÅ IKKE løse konflikter i manuskriptet ved i al stilhed at overskrive indholdet frOJS.

## 30. Idempotens

Uploads af reviderede versioner, indsendelse af gennemgang og andre skriveoperationer, der kan gentages, BØR acceptere en idempotensnøgle.

Et netværksforsøg MÅ IKKE ved en fejltagelse medføre, at der oprettes dobbelte bedømmelsesrapporter eller dobbelte manuskriptrevisioner.

## 31. Revision og herkomst

Integrationshændelser BØR kunne spores. Relevante registreringer omfatter:

- udstedelse og modtagelse af lanceringer;
- import af manuskript;
- filhentning;
- returnering efter revision;
- lancering af anmeldelse;
- indsendelse af anmeldelse;
- eksport af publikationer.

Revisionslogfiler må IKKE unødigt indeholde oplysninger om manuskriptets indhold, adgangskoder, delte hemmeligheder eller fortrolige bedømmelsestekster.

## 32. Fejlisolering

Et utilgængeligt Studio må IKKE forhindre den almindelige administration af OJS eller publikationsarbejdsgangen uden for de funktioner, der udtrykkeligt er afhængige af Studio.

En utilgængelig installation af »OJS« MÅ IKKE beskadige eller gøre et allerede importeret »OMI«-manuskript ugyldigt.

Pluginet »OJS« BØR returnere en fejlmeddelelse om, at operationen er afbrudt, ved beskyttede integrationsoperationer og BØR give autoriserede brugere brugbare fejloplysninger.

## 33. Kompatibilitet ved opgradering

Integrationspluginet BØR adskille OJS-versionsspecifik kortlægningskode fra OMI-protokolaget.

Begrebsmæssigt:

```text
OMI Integration API
        |
OJS profile mapper
        |
OJS-version adapter
        |
Supported OJS services / repositories / hooks
```

Denne adskillelse gør det muligt at videreudvikle eller udskifte en OJS 3,5-adapter uden at ændre den platformsuafhængige `omi-integration/1`-kontrakt.

## 34. Udvidelser

OJS-specifikke værdier KAN angives under et udvidelsesobjekt med navnerum:

```json
{
  "extensions": {
    "org.pkp.ojs": {
      "stageId": 3
    }
  }
}
```

Studio SKAL kunne ignorere ukendte filtyper (OJS) på en sikker måde. En filtype MÅ IKKE omdefinere et felt fra kernen (OMI) eller integrationen (API).

## 35. Overensstemmelse

En implementering, der hævder at være i overensstemmelse med »`omi-integration/1/ojs`«, SKAL:

1. implementere »OMI«-integrationen API v1;
2. angive en stabil installationsidentitet for OJS;
3. tilknytte tidsskrifter til kontekster og OJS indsendelser til indsendelser;
4. anvend autorisation på applikationsniveau;
5. undgå, at Studio får direkte adgang til databasetabellerne i »OJS« og til private filstier;
6. annoncerer understøttede funktioner;
7. bevare eksterne identifikatorer og herkomst;
8. håndhæve anonymitet ved anmeldelser på serversiden, når anmeldelsesintegrationen er aktiveret;
9. opbevare en sporbar revisionshistorik for skriveoperationer;
10. kan fortsat kobles sikkert fra Studio.

## 36. Designinvariant

OJS-konnektoren integrerer et tidsskrift-workflow med OMI; den omdanner ikke OMI til et undersystem til OJS.

OJS styrer tidsskriftsprocessen i forbindelse med det videnskabelige arbejde. Studio tilbyder et struktureret miljø til forfattelse, kommentering, bedømmelse, redigering og omarbejdning. Manuskriptet kan overføres mellem de to systemer.