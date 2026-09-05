---
title: OMP Integrationsprofil v1
description: OMI IntegrationsAPI-profil v1 til Open Monograph Press, herunder arbejdsgange for monografier, antologier, kapitler, korrekturlæsning, revisioner, produktion og katalogisering.
---

# OMP Integrationsprofil v1

**Status:** Udkast  
**Grundlæggende protokol:** `omi-integration/1`  
**Profil-id:** `omi-integration/1/omp`

## 1. Anvendelsesområde

Integrationsprofilen »OMP« definerer, hvordan en Open Monograph Press-installation (OMP) tilpasser arbejdsgange inden for udgivelse af videnskabelige bøger til den platformsuafhængige »OMI Integration« API v1.

Profilen understøtter monografier, antologier, kapitler og andre sammensatte videnskabelige værker uden at reducere dem til tidsskriftsartiklernes semantiske rammer.

OMP og tjenesten OMI forbliver separate applikationer med separate lagringslag. Integrationspluginet OMP fungerer som en adapter. Open Manuscript Studio MÅ IKKE få direkte adgang til databasen OMP eller mappen med private filer.

## 2. Arkitektonisk afgrænsning

```text
OMP
Own application and database
        |
        | OMP OMI Integration Plugin
        | supported PKP/OMP services / repositories / hooks
        |
        | HTTPS + OMI Integration API v1
        v
Open Manuscript Studio
Own application and PostgreSQL database
```

Adapteren MÅ IKKE kræve ændringer til OMP-kernefilerne. Den BØR adskille OMP-versionsspecifikke implementeringsdetaljer fra OMI-protokolaget.

## 3. Autoritetsmodel

OMP er den gældende kilde for:

- tryk på »Identitet og konfiguration«;
- indsendelsens status og fase i arbejdsgangen;
- redaktionelle opgaver;
- invitationer til anmeldere og opgaver;
- gennemgangsrunder og frister;
- redaktionelle beslutninger;
- status for indsendelse og produktionsfilens arbejdsgang;
- udgivelsesstatus;
- en organisation med fokus på serier og kataloger;
- udgivelsesformater og offentlig formidling.

OMI / Studio er den ansvarlige instans for:

- det strukturerede videnskabelige objekt OMI;
- stabile forankringer;
- manuskripthierarkiet, som det fremgår af OMI;
- Annotationer, der er integreret i programmet;
- fælles redigering;
- OMI oversigt over strukturelle ændringer;
- strukturerede anmærkninger til gennemgangen, der er oprettet i Studio;
- anmærkningssvar og status for løsning;
- Generering af bærbareOMI-pakker.

## 4. Nødvendig profilkortlægning

| OMI Integration API resource | OMP concept |
| --- | --- |
| `installation` | installation af OMP |
| `context` | presse |
| `submission` | OMP indsendelse / monografi-arbejdsgangobjekt |
| `component` | kapitel, forord, efterord, bilag eller andre dele af en publikation |
| `contributor` | forfatter, redaktør, oversætter, kapittelforfatter eller anden bidragyder |
| `file` | indsendelses- eller produktionsfil |
| `reviewAssignment` | Opgave om anmeldelse af »OMP« |
| `reviewRound` | OMP anmeldelsesrunde |
| `revision` | sporbar status for manuskript/indsendelse |
| `publication` | udgivelse af monografier og status i forhold til kataloget |

OMP Numeriske identifikatorer SKAL serialiseres som strenge ved protokolgrænsen.

## 5. Installationsidentitet

Hver tilsluttet OMP-installation SKAL have en stabil `installationId`.

Eksempel:

```json
{
  "installationId": "omp-example-university",
  "platform": "omp",
  "profile": "omi-integration/1/omp",
  "baseUrl": "https://books.example.edu/"
}
```

Installationsidentifikatoren SKAL forblive uændret, når navne på trykte medier, stier eller offentlige URL’er ændres.

## 6. Mediekontekst

Et OMP press-element svarer til et OMI `context`-element.

```json
{
  "externalId": "3",
  "type": "press",
  "path": "example-press",
  "name": {
    "en": "Example University Press"
  },
  "url": "https://books.example.edu/index.php/example-press"
}
```

OMP-press-ID’et er den stabile eksterne kontekstidentifikator. Den offentlige sti er navigationsmetadata og MÅ IKKE udgøre den eneste vedvarende identitet.

## 7. Kortlægning af indsendelser

Et videnskabeligt værk på OMP svarer til et OMI `submission`.

En konnektor BØR stille følgende til rådighed:

- indsendelses-ID;
- nuværende fase i arbejdsgangen;
- aktuelle publikationsmetadata;
- primær lokalitet;
- lokaliseret titel og undertekst, hvor disse foreligger;
- lokaliseret beskrivelse eller resumé;
- nøgleord eller emner, hvor disse foreligger;
- forholdet til bidragydere;
- publikationstype, hvor denne er angivet;
- datoer, der er nødvendige for synkroniseringen;
- permanente identifikatorer, hvor det er tilladt.

Eksempel:

```json
{
  "externalId": "431",
  "type": "edited-volume",
  "status": "review",
  "title": {
    "en": "Studies in Scholarly Communication"
  },
  "primaryLocale": "en",
  "updatedAt": "2026-08-07T18:30:00Z"
}
```

Connectoren MÅ IKKE antage, at alle indsendelser til OMP er monografier med én forfatter.

## 8. Sammensatte videnskabelige værker

OMP-profilen betragter sammensatte strukturer som et centralt integrationsanliggende.

En »OMI«-angivelse KAN indeholde:

```text
Book
├── Front matter
│   ├── Title page
│   ├── Preface
│   └── Introduction
├── Chapter 1
├── Chapter 2
├── Chapter 3
├── Appendix
├── Bibliography
└── Back matter
```

Den nøjagtige struktur bestemmes af det videnskabelige arbejde og dokumentmodellen på OMI, ikke af en fast bogskabelon.

## 9. Komponenter

OMP Publikationskomponenterne knyttes til ressourcerne »OMI« (`component`), når denne skelnen har betydning for synkronisering, forfatterskab, korrekturlæsning, produktion eller udgivelse.

Eksempel:

```json
{
  "externalId": "chapter-7",
  "type": "chapter",
  "title": {
    "en": "The Evolution of Scholarly Editing"
  },
  "sequence": 7,
  "parentExternalId": null
}
```

En komponent BØR bevare:

- stabil ekstern identifikator;
- type;
- lokaliseret titel, hvor det er relevant;
- rækkefølge/følge;
- forældreforhold, hvor det er relevant;
- bidragyderes anvendelsesområde;
- forhold mellem filer og revisioner, hvor disse er tilgængelige.

Komponenter KAN indlejres.

## 10. Antologier

En antologi må IKKE sammenfattes til en enkelt forfatterliste.

Stikket BØR bevare forskellen mellem:

- bindredaktører;
- forfattere på bogniveau;
- kapitelforfattere;
- oversættere;
- forfattere til indledningen;
- kommentatorer;
- andre roller som videnskabelige bidragydere.

En bidragyders rolle og ansvarsområde BØR fremgå tydeligt.

## 11. Omfanget af bidragydere

Eksempel på en redaktør på bogniveau:

```json
{
  "externalId": "contributor-18",
  "name": {
    "given": "Anna",
    "family": "Editor"
  },
  "roles": ["editor"],
  "scope": {
    "type": "submission",
    "externalId": "431"
  }
}
```

Eksempel på forfatter til et kapitel:

```json
{
  "externalId": "contributor-29",
  "name": {
    "given": "Bela",
    "family": "Author"
  },
  "roles": ["author"],
  "scope": {
    "type": "component",
    "externalId": "chapter-7"
  }
}
```

Koblingen MÅ IKKE udvide forfatterskabet, der er begrænset til en bestemt komponent, til at omfatte hele publikationen, medmindre OMP udtrykkeligt angiver dette forhold.

## 12. Identifikatorer for bidragydere

Hvor det er muligt og tilladt, BØR bidragydernes angivelser bevare ORCID og andre akademiske identifikatorer.

E-mail-adresser og andre personlige identitetsoplysninger MÅ kun videregives, når det er nødvendigt for driften, og når det er tilladt i henhold til den gældende politik for arbejdsgange.

## 13. Indsendelse og produktionsfiler

OMP Filerne henviser til ressourcerne OMI og `file`.

Koblingen BØR skelne mellem formålet med arbejdsgangen, hvor OMP angiver dette, for eksempel:

- indsendelse af manuskript;
- kapitelmanuskript;
- gennemgå fil;
- revideret manuskript;
- redigeret fil;
- produktionsfil;
- kilde til publikationsformat;
- supplerende aktiv.

Eksempel:

```json
{
  "externalId": "file-221",
  "name": "chapter-07.docx",
  "mediaType": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "stage": "submission",
  "componentExternalId": "chapter-7",
  "revision": 2
}
```

Studio SKAL hente binært indhold via et autoriseret integrationsendepunkt. Connectoren MÅ IKKE afsløre private filsystemstier.

## 14. Importer til Studio

Studio MAY kan importere en komplet monografi, udvalgte filer eller et manuskript, der er afgrænset til bestemte komponenter, afhængigt af strukturen i »OMP« og brugerens tilladelser.

En import BØR bevare:

- OMP installationsidentitet;
- presse-id;
- indsendelsesidentitet;
- komponentidentitet;
- kildefilens identitet;
- kontrolsum, hvor det er praktisk muligt;
- kildeversion;
- synkroniseringstid.

Importen MÅ IKKE ændre kildeOMP-filerne.

## 15. Strategier for arbejdsmiljøet iOMI

En implementering KAN anvende enten en strategi med ét arbejdsområde eller en strategi med koordinerede arbejdsområder.

### 15.1 Strategi med ét arbejdsområde

Hele bogen er repræsenteret af ét »OMI«-arbejdsområde, der indeholder det fulde, strukturerede videnskabelige objekt.

Denne strategi er velegnet, når bidragydere samarbejder på tværs af arbejdet, og den overordnede struktur spiller en afgørende rolle.

### 15.2 Strategi for koordinerede arbejdsområder

Et overordnet arbejde koordinerer separate, godkendte komponentarbejdsområder, f.eks. redigering på kapitelniveau i en antologi.

```text
Edited volume workspace
├── Chapter 1 workspace
├── Chapter 2 workspace
├── Chapter 3 workspace
└── Shared book metadata / structure
```

Implementeringen SKAL bevare stabile relationer mellem overordnede objekter og komponentojekter. Eksporten SKAL gøre det muligt at rekonstruere det tilsigtede sammensatte værk.

## 16. Adgangskontrol for antologier

En kapitelforfatter BØR kunne få adgang til sit eget kapitel uden automatisk at få skriveadgang til andre kapitler.

En redaktør KAN få bredere adgang til hele bindet.

Autorisation SKAL håndhæves på serversiden og BØR baseres på både OMP-arbejdsgangstilladelser og Studio-arbejdsområde-tilladelser.

## 17. Afsendelse af reviderede udkast til OMP

En returnering fra Studio tilOMP SKAL oprette en sporbar ny fil eller revision i overensstemmelse med OMP-arbejdsgangens semantik.

Anmodningen BØR angive, om ændringen gælder for:

- den fuldstændige indsendelse;
- en bestemt komponent;
- flere komponenter;
- produktionsmængden.

Eksempel:

```json
{
  "target": {
    "type": "component",
    "externalId": "chapter-7"
  },
  "baseExternalRevision": "2",
  "source": "omi",
  "omiRevision": "01J...",
  "message": "Revised chapter from Open Manuscript Studio"
}
```

Historiske filer MÅ IKKE overskrives uden advarsel.

## 18. Signeret lanceringsforløb

Pluginet »OMP« BØR indeholde en handling kaldet **Åbn i Studio** for godkendte deltagere i arbejdsgangen.

En lanceringsangivelse BØR angive:

- installation;
- pressesammenhæng;
- indsendelse;
- valgfri komponentmål;
- ekstern aktør;
- anmodede anvendelsesområder;
- udstedelsestidspunkt;
- udløb;
- nonce.

En opstart på kapitelniveau KAN angive komponenten eksplicit.

## 19. Brugeridentitet og sammenkædning

Et bruger-ID fra OMP er en ekstern identitetsbekræftelse. Studio KAN knytte det til en lokal konto efter en vellykket opstart med login og godkendelse.

Den anbefalede eksterne identitetsnøgle er:

```text
installationId + externalUserId
```

E-mail må IKKE være den eneste uforanderlige identitetsnøgle på tværs af systemer.

## 20. Kompetence til fagfællebedømmelse

OMP er fortsat den gældende kilde med hensyn til tildeling af anmeldelser, anmeldelsesrunde, deadline, effektiv anmeldelsesmetode, tilladte anbefalingsværdier, færdiggørelsesstatus og redaktionelle beslutninger.

Studio MAY tilbyder et struktureret miljø til videnskabelig gennemgang.

## 21. Gennemgang af mål

I modsætning til en almindelig artikelbehandlingsproces kan en »OMP«-gennemgang omfatte:

- den fuldstændige monografi;
- en antologi;
- et kapitel;
- en række kapitler;
- en anden stabil komponent.

Eksempel på en opgave om gennemgang af et kapitel:

```json
{
  "externalId": "review-612",
  "roundExternalId": "round-1",
  "target": {
    "type": "component",
    "externalId": "chapter-7"
  },
  "reviewMode": "double-anonymous",
  "permissions": ["manuscript.read", "review.write"]
}
```

Formålet SKAL fremgå tydeligt, når gennemgangen ikke vedrører det samlede indsendte materiale.

## 22. Gennemgang af anonymitet

OMP-konnektoren SKAL sikre, at den gældende gennemgangspolitik overholdes, inden data overføres.

Ved gennemgang af komponenter SKAL identitetsfiltrering tage højde for bidragydere på både bog- og komponentniveau. Det kan være utilstrækkeligt kun at fjerne kapitelforfatterens navn, hvis redaktør, tilhørsforhold, taksigelser, filmetadata eller andre oplysninger afslører en identitet, der strider mod retningslinjerne.

Studio SKAL håndhæve den gældende fortrolighedspolitik på serversiden.

## 23. Struktureret gennemgang

Studio MAY-support:

- samlede monografirapporter;
- rapporter på kapitelniveau;
- faste, forankrede annoteringer;
- kommentarer, der kun kan ses af redaktører;
- kommentarer, der er synlige for forfatteren;
- anbefaling;
- vedhæftede filer fra anmelderen;
- svar fra forfattere/redaktører;
- sporing af annoteringers opfyldelse;
- flere runder.

Annotationer BØR så vidt muligt henvise til stabile OMI videnskabelige objekter frem for koordinater på den viste side.

## 24. Tværgående gennemgang

En anmeldelse af en samlet antologi kan indeholde kommentarer, der vedrører flere forskellige dele.

Eksempel:

```json
{
  "assignmentExternalId": "review-700",
  "target": {
    "type": "submission",
    "externalId": "431"
  },
  "annotations": [
    {
      "anchor": "omi:anchor:chapter-2:01J...",
      "body": "This chapter should define the term earlier."
    },
    {
      "anchor": "omi:anchor:chapter-8:01J...",
      "body": "This section conflicts with the terminology used in Chapter 2."
    }
  ]
}
```

OMI-ankermodellen BØR sikre, at sådanne kommentarer forbliver uændrede på tværs af ændringer i layout og paginering.

## 25. Forfatterens svar og revision

I de tilfælde, hvor »OMP« tillader revision, kan Studio eventuelt videregive godkendte revisionskommentarer til bogredaktører, forfattere eller forfattere af enkeltdele, alt efter omfanget.

En komponentforfatter MÅ kun reagere på og revidere de komponenter, som vedkommende har tilladelse til at ændre.

En forfatters beslutning må IKKE fortolkes som en godkendelse fra en bedømmer eller redaktør.

## 26. Flere gennemgangsrunder

Gennemgangsrunder SKAL forblive historisk adskilte. Tidligere rapporter og kommentarer BØR bevare deres oprindelse fra den pågældende runde.

En ny runde KAN henvise til uafklarede anmærkninger fra tidligere runder uden at ændre den historiske gennemgangsjournal.

## 27. Redaktionsarbejdsområde

En autoriseret presseredaktør KAN få et bredere overblik fra studiet over det komplette videnskabelige objekt, herunder komponentstatus, bedømmelsesrapporter, revisioner og afklaring af anmærkninger.

Redaktionelle beslutninger er fortsat gældende i »OMP«.

## 28. Produktionsintegration

Efter godkendelsen udarbejder Studio MAY strukturerede resultater til produktionen af »OMP«.

Eksempler på afledte produkter omfatter:

- den standardpakke fra OMI;
- struktureret XML;
- JATS-kompatibel med XML, hvor det er relevant;
- HTML;
- EPUB-orienteret indhold;
- DOCX-afledte produktionsfiler;
- tal og tilknyttede aktiver;
- andre formater, der understøttes af konverteren.

Genererede afledte data BØR indeholde oplysningen om, hvilken revision af OMI de er fremstillet ud fra.

## 29. Integration af publikationer og kataloger

OMP er fortsat den gældende kilde til oplysninger om publikationens status i kataloget, medmindre denne rolle udtrykkeligt er overdraget til en anden.

Koblingen KAN indeholde publikationsmetadata såsom:

- titel og undertitel;
- bidragydere;
- serie;
- identifikatorer;
- udgivelsesdato;
- udgivelsesformater;
- katalogbeskrivelse;
- omslags- og udgivelsesmateriale;
- offentlig URL.

OMI Man må IKKE antage, at en monografi følger den samme udgivelsescyklus som et tidsskrift eller en artikel.

## 30. Serie

Serier er en del af publikations-/katalogstrukturen i »OMP« og BØR fortsat være OMP-authoritative.

Et manuskript fra OMI KAN beholde den eksterne serienummerhenvisning som integrationsmetadata, men BØR IKKE kræve, at denne serie er nødvendig for at fortolke selve det videnskabelige objekt.

## 31. Publikationsformater

OMP kan udgive en monografi i flere formater. Disse udgivelsesformater er afledte versioner eller præsentationsformer og SKAL kunne skelnes fra det kanoniske videnskabelige objekt OMI.

En udgave i formatet PDF, EPUB, HTML eller et andet publikationsformat MÅ IKKE automatisk blive betragtet som det kanoniske OMI-manuskript, blot fordi den distribueres offentligt.

## 32. Krav til kapacitet

En »OMP«-konnektor, der hævder at overholde »`omi-integration/1/omp`«-profilen, SKAL understøtte:

```text
launch
metadata.read
contributors.read
files.read
```

En forbindelse, der understøtter en sammensætning, BØR desuden eksponere de komponentfunktioner, der er defineret af implementeringen, og SKAL bevare komponentidentifikatorer i relevante ressourcer.

En »OMP«-konnektor, der angiveligt muliggør synkronisering af manuskripter, BØR desuden understøtte:

```text
manuscript.read
manuscript.write
revision.read
revision.write
```

En »OMP«-konnektor, der hævder at integrere peer review, SKAL understøtte:

```text
review.read
review.write
```

En connector, der hævder at integrere produktion og offentliggørelse, BØR understøtte:

```text
publication.read
publication.export
```

## 33. Anbefalet endepunktsflade

En implementering BØR tilbyde tilsvarende funktioner til:

```text
GET  /capabilities
POST /launch
GET  /contexts/{contextId}
GET  /contexts/{contextId}/submissions/{submissionId}
GET  /contexts/{contextId}/submissions/{submissionId}/components
GET  /contexts/{contextId}/submissions/{submissionId}/components/{componentId}
GET  /contexts/{contextId}/submissions/{submissionId}/contributors
GET  /contexts/{contextId}/submissions/{submissionId}/files
GET  /contexts/{contextId}/submissions/{submissionId}/files/{fileId}/content
GET  /contexts/{contextId}/submissions/{submissionId}/revisions
POST /contexts/{contextId}/submissions/{submissionId}/revisions
GET  /contexts/{contextId}/submissions/{submissionId}/reviews/{assignmentId}
POST /contexts/{contextId}/submissions/{submissionId}/reviews/{assignmentId}/result
GET  /contexts/{contextId}/submissions/{submissionId}/publication
```

Der KAN angives varianter med komponentomfang, hvor det er nødvendigt.

## 34. Bemyndigelse

Hver eneste handling SKAL godkendes på applikationslaget i OMP.

Tjenesteoplysningerne etablerer integrationsforbindelsen, men giver ikke ubegrænset adgang til alle artikler, indsendelser, kapitler, filer eller anmeldelser.

Kendskab til en ekstern identifikator MÅ IKKE udgøre en bemyndigelse.

## 35. Synkroniseringstilstand

Studiet BØR gemme integrationsmetadata, herunder:

```text
installationId
contextExternalId
submissionExternalId
componentExternalId(s)
externalPublicationId (when applicable)
lastExternalRevision
lastSynchronizedAt
source checksum(s)
```

Denne tilstand SKAL forblive adskilt fra det kanoniske dokument »OMI«.

## 36. Konfliktløsning

En connector BØR returnere en »`409 Conflict`«, når det eksterne arbejde er ændret i forhold til den basisrevision, som Studio bruger, og en automatisk skrivning ville medføre risiko for datatab.

Ved sammensatte projekter BØR konfliktdetektering tage højde for de enkelte komponenter, når værtsworkflowet kan levere en tilstrækkelig detaljeret revisionsstatus.

## 37. Idempotens

Skriveoperationer, der kan gentages, BØR understøtte idempotensnøgler. Gentagelser MÅ IKKE medføre, at der oprettes dobbelte kapitelrevisioner, dobbelte gennemgangsrapporter eller dobbelte produktionsfiler.

## 38. Revision og herkomst

Relevante integrationshændelser BØR kunne spores, herunder igangsættelse, import af manuskript/komponenter, hentning af filer, returnering af revisioner, igangsættelse af gennemgang, indsendelse af gennemgang og eksport til produktion.

Revisionslogfiler SKAL undgå unødvendig lagring af manuskriptindhold, hemmeligheder og fortrolige bedømmelsestekster.

## 39. Fejlisolering

At studiet ikke er tilgængeligt, må IKKE forhindre administration af urelaterede OMP, katalogstyring eller udgivelsesopgaver.

OMP Manglende tilgængelighed MÅ IKKE gøre et allerede importeret videnskabeligt objekt fra OMI ugyldigt.

Beskyttede integrationsoperationer BØR mislykkes med lukket status.

## 40. Kompatibilitet ved opgradering

Koblingen BØR adskille den OMP-specifikke applikationstilpasning fra OMI-protokollen:

```text
OMI Integration API
        |
OMP profile mapper
        |
OMP-version adapter
        |
Supported OMP services / repositories / hooks
```

Dette gør det muligt at foretage versionsspecifikke ændringer i implementeringen af `OMP` uden at omdefinere ``omi-integration/1``.

## 41. Fælles implementering af PKP

OJS og OMP-konnektorer KAN genbruge fælles PKP-integrationsbiblioteker til:

- installationskonfiguration;
- underskrivelse og kontrol af underskrift;
- beskyttelse mod nonce/replay;
- HTTP-responsmodeller;
- kortlægning af kapaciteter;
- ekstern identitetsrepræsentation;
- filstreaming;
- serialisering af fejl;
- revisionsassistenter.

Kortlægning af arbejdsgange, der er specifikke for tidsskrifter og monografier, BØR forblive i separate adaptere.

```text
                 OMI Integration API v1
                          |
                  PKP shared library
                    /           \
          OJS profile adapter   OMP profile adapter
                 |                    |
                OJS                  OMP
```

Det fælles lag MÅ IKKE påtvinge artikelspecifik semantik på OMP eller monografispecifik semantik på OJS.

## 42. Udvidelser

OMP-specifikke data KAN leveres via et udvidelsesobjekt med navneområde:

```json
{
  "extensions": {
    "org.pkp.omp": {
      "stageId": 3
    }
  }
}
```

Kerneklienter SKAL på sikker vis ignorere ukendte udvidelser. Udvidelser MÅ IKKE omdefinere felter i kerneintegrationsAPIen.

## 43. Overensstemmelse

En implementering, der hævder at være i overensstemmelse med »`omi-integration/1/omp`«, SKAL:

1. implementerer »OMI«-integrationen API v1;
2. angive en stabil installationsidentitet for OMP;
3. knytter tryk til sammenhænge og OMP videnskabelige værker til indsendelser;
4. bevare komponenternes struktur, når de blotlægges ved integrationen;
5. bevare bidragyderens rolle og ansvarsområde, når det er muligt;
6. anvend autorisation på applikationsniveau;
7. undgå, at Studio får direkte adgang til databasetabellerne i OMP og til private filstier;
8. annoncerer understøttede funktioner;
9. bevare eksterne identifikatorer og herkomst;
10. håndhæve anonymitet ved anmeldelser på serversiden, når integrationen af anmeldelser er aktiveret;
11. opbevare en sporbar revisionshistorik for skriveoperationer;
12. kan fortsat kobles sikkert fra Studio.

## 44. Designinvariabel

OMP-konnektoren integrerer arbejdsgange for videnskabelige bøger med OMI uden at gøre manuskriptet afhængigt af OMPs interne datamodel.

OMP styrer pressens arbejdsgang, korrekturlæsning, produktion, katalogisering og udgivelse i forbindelse med det videnskabelige arbejde. Studio tilbyder struktureret redigering, samarbejde, kommentering, korrekturlæsning, revision og bearbejdning. Monografien eller den redigerede samling forbliver et overførbart videnskabeligt objekt.