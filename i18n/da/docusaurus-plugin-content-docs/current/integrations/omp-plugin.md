---
title: OMP Integrationsplugin
sidebar_label: OMP Plugin
slug: /integrations/omp-plugin
---

# OMI OMP Integrationsplugin

**OMIOMP-integrationspluginet** forbinder Open Monograph Press (OMP) 3.5.x med Open Manuscript Studio via OMI-integrationen API. OMP er fortsat den autoritative kilde til forlagets arbejdsgang, indsendelse af monografier, bedømmelsesrunder, tildeling af bedømmere og privat filopbevaring; Studio kommunikerer udelukkende via signerede integrationsendepunkter på applikationsniveau.

## Aktuel udgave

**Stabil udgave:** `v1.2.6`  
**Målplatform:** OMP 3.5.x  
**Licens:** GNU GPL v3.0

### Download

- **[Download OMP plugin v1.2.6 — ZIP](XQZTOKEN0END)**
- **[Download OMP plugin v1.2.6 — TAR.GZ](XQZTOKEN0END)**
- [SHA-256 checksums](XQZTOKEN0END)
- [Latest GitHub release](XQZTOKEN0END)

Udgivelsesarkivet bruger `studioIntegration/` som pakkeroot til PKP-kompatibel installation.

## Vigtigste funktioner

OMP-konnektoren understøtter monografier og bevarer den arbejdsgangssemantik, der er specifik for OMP, i stedet for at behandle OMP som OJS med andre betegnelser. De nuværende integrationsområder omfatter:

- underskrevet lancering på Open Manuscript Studio;
- eksplicitte redigerings-, forfatter- og korrekturlæser-tilstande;
- rollemæssige anvendelsesområder baseret på princippet om mindst mulig adgang;
- kortlægning af identitet i presse og monografier;
- indbygget OMP 3.5 metadata baseret på et repository og bidragsydernes læsninger;
- beskyttet visning af indsendte filer og overførsel af binære filer;
- komponentbaseret arkitektur til kapitler og andre dele af bogen;
- adgang til bedømmerfiler, der er knyttet til den konkrete PKP-bedømmelsesopgave;
- indfødte PKP-deltageres evne til at gennemlæse evalueringsskemaer og deres vedholdenhed i at svare;
- upload af vedhæftede filer fra korrekturlæsere inden for en opgave;
- gennemgang af forfatterrevision med rund-scoped-omfang;
- revisionsfaserne »intern revision« og »ekstern revision«;
- identifikation af indbyggede funktioner til »OMP«-specifik gennemgangsadfærd;
- underskrevet kommentar til gennemgang/tilbagemelding via formular;
- anmelderens prognose er begrænset til den enkelte tildelte undersøgelse, idet data vedrørende forældres monografi, søskendeundersøgelser og bidragydernes identitet er udelukket;
- Indbygget OMP 3.5 – end-to-end-verifikation af lancering, filer, gennemgangsformularer, rettelser, adskilt feedback og underskrevet tilbagemelding.

OMP I version 3.5 angives det, at anbefalinger til korrekturlæsere, der kan tilpasses, ikke understøttes af værtsapplikationen. Connectoren genererer derfor ikke anbefalingsidentifikatorer i stil med OJSog indkoder ikke syntetiske anbefalingsværdier i kommentarer.

## Installation

Installer arkivet via plugin-administrationsgrænsefladen på OMP, hvor dette understøttes, eller pak det ud på følgende måde:

```text
plugins/generic/studioIntegration/
```

Når du har aktiveret plugin'et, skal du konfigurere følgende:

- **Studiets URL** — basis-URL’en Open Manuscript Studio;
- **Installations-ID** — en fast identifikator for installationen af OMP;
- **Fælles nøgle** — den nøgle til integration på serversiden, der deles med Studio;
- **Tokenets levetid** — en kort levetid for lanceringsbekræftelsen.

I produktionsmiljøer bør der anvendes HTTPS. Studio må ikke modtage direkte databaseadgangskoder eller have adgang til det private filsystem OMP.

## OMP-specifik arbejdsgangmodel

Stikket bevarer begreberne fra »OMP«, herunder:

- presser;
- monografier og antologier;
- kapitler og publikationskomponenter;
- bidragydere på bog- og komponentniveau;
- forfatter, redaktør, oversætter og kapittelforfatter;
- interne og eksterne gennemgangsfaser;
- konkrete evalueringsrunder og evalueringsopgaver;
- sporbare forfatterrevisioner og vedhæftede filer fra korrekturlæsere.

Anmelderens færdiggørelse er fortsat afgørende i den oprindelige »OMP«-arbejdsgang, da færdiggørelsen udløser yderligere PKP-handlinger, såsom notifikationer, logning og afslutning af invitationsstatus.

## Arkitektur og API

Stikket anvender integrationsprofilen »OMI«:

```text
omi-integration/1/omp
```

Relateret dokumentation:

- [Integration Architecture](./architecture.md)
- [OMI Integration API v1](./integration-api-v1.md)
- [OMP Integration Profile v1](./omp-profile-v1.md)
- [Integration Implementation Status](./implementation-status.md)
- [Studio Deployment Modes](./studio-deployment-modes.md)

## Sikkerhedsmodel

Implementeringen følger PKP-repositoriets og arbejdsgangens grænser i stedet for at omgå de interne funktioner i OMP. Vigtige kontrolmekanismer omfatter:

- kortvarige HMAC-SHA256-launch-assertioner;
- indbinding og trykbinding;
- rettigheder, der er begrænset til en rolle;
- validering af tildeling af korrekturlæsere;
- validering i den aktuelle gennemgangsfase og gennemgangsrunde for uploadede revisioner;
- PKP `ReviewFilesDAO`-godkendelse for kildefiler, der er synlige for korrekturlæsere;
- indbyggede lagrings- og valideringsregler for `Repo::submissionFile()`;
- validering af filtyper i forhold til den aktuelle udgave;
- afsluttede revisionsopgaver behandles som skrivebeskyttede;
- ingen direkte adgang på tværs af databaser.

## Dokumentation vedrørende PKP-kompatibilitet og overholdelse af krav

Plugin-arkivet beskriver oprindelsen af »API« og den tilbageværende grænse mellem teknisk kompatibilitet og officiel godkendelse fra PKP:

- [PKP compatibility notes](XQZTOKEN0END)
- [Security policy](XQZTOKEN0END)
- [Installation guide](XQZTOKEN0END)

For at blive optaget i det officielle plugin-galleri kræves der stadig en gennemgang af en PKP-vedligeholder samt test på installationsniveau på en understøttet, uændret udgave af OMP.

## Oplysning om AI-støttet udvikling

Udviklingen af pluginet har modtaget betydelig hjælp fra generativ AI inden for arkitektur, implementering, PKP-API-analyse, sikkerhedsvurdering, CI/CD, test og dokumentation. Menneskelige vedligeholdere bærer fortsat ansvaret for kode, der indsendes eller frigives til brugerne, og PKP-afhængig adfærd kontrolleres i forhold til den faktiske OMP/PKP-kildekode og testresultater.

- [AI contribution declaration](XQZTOKEN0END)

## Kilde- og projektdokumentation

- [Source repository](XQZTOKEN0END)
- [README](XQZTOKEN0END)
- [Installation guide](XQZTOKEN0END)
- [PKP compatibility](XQZTOKEN0END)
- [Security](XQZTOKEN0END)
- [Changelog](XQZTOKEN0END)
- [License](XQZTOKEN0END)
- [All releases](XQZTOKEN0END)

## PKP-status

Pluginet er udviklet i overensstemmelse med de aktuelle retningslinjer for arbejdsprocesser og arkiver fra OMP/PKP 3.5 API, men det faktum, at det er tilgængeligt på denne hjemmeside, udgør i sig selv **ikke** en officiel godkendelse fra PKP Plugin Gallery. Projektet skelner udtrykkeligt mellem implementeringskompatibilitet, testet interoperabilitet og formel godkendelse fra PKP.
