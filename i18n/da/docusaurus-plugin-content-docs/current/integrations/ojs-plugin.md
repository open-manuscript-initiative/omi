---
title: OJS Integrationsplugin
sidebar_label: OJS Plugin
slug: /integrations/ojs-plugin
---

# OMI OJS Integrationsplugin

**OMIOJS-integrationspluginet** forbinder Open Journal Systems (OJS) 3.5.x med Open Manuscript Studio via OMI-integrationen API. OJS er fortsat den primære kilde til tidsskriftets arbejdsgang, indsendelsesidentitet, tildeling af bedømmere og beskyttede filer; Studio læser ikke direkte fra OJS-databasen eller det private fillager.

## Aktuel udgave

**Stabil udgave:** `v1.2.1`  
**Målplatform:** OJS 3.5.x  
**Licens:** GNU GPL v3.0

### Download

- **[Download OJS plugin v1.2.1 — ZIP](XQZTOKEN0END)**
- **[Download OJS plugin v1.2.1 — TAR.GZ](XQZTOKEN0END)**
- [SHA-256 checksums](XQZTOKEN0END)
- [Latest GitHub release](XQZTOKEN0END)

Udgivelsesarkivet indeholder plugin’et i mappen »`studioIntegration/`«, som er den rodmappe, der forventes i PKP-plugin-installationsprocesserne.

## Vigtigste funktioner

Den nuværende connector muliggør rollebaseret opstart af Studio samt adgang til signeret integration i arbejdsgangene for forfattere, redaktører og korrekturlæsere i OJS. De implementerede integrationsområder omfatter:

- underskrevne, kortvarige lanceringspåstande;
- eksplicitte tilstande for forfatter, redaktør og korrekturlæser;
- rollemæssige anvendelsesområder baseret på princippet om mindst mulig adgang;
- OJS metadata for indsendelser og overførsel af bidrag;
- udvælgelse af anmeldere til redaktørerne;
- beskyttet visning af indsendte filer og overførsel af binære filer;
- godkendelse af anmelderfilen, der er knyttet til den konkrete anmeldelsesopgave på OJS;
- nativeOJS-formularlæsning og tilbageskrivning af svar;
- kommentarer fra forfatteren og fra redaktøren alene;
- grænser for dobbeltblind bedømmeradgang;
- server-til-server HMAC-signeret writeback;
- pålidelige metadata om filgenrer til udvælgelse af kildefiler;
- indbygget OJS 3.5 – fuldstændig verifikation af anonyme korrekturlæseres adgang, obligatoriske korrekturlæsningsskemaer, rettelser af manuskripter, adskilt feedback og underskrevet tilbagemelding fra korrekturlæseren.

Påstande, der oprettes af korrekturlæsere, tildeles bevidst ikke adgang på bidragyder- eller korrekturlæser-niveau. Korrekturlæserfiler er underlagt begrænsninger i henhold til PKP-korrekturopgaven og ikke en bred filadgang på indsendelsesniveau.

## Installation

Installer arkivet via upload-grænsefladen i OJS-pluginet, hvor dette understøttes, eller pak det ud på følgende måde:

```text
plugins/generic/studioIntegration/
```

Når du har aktiveret pluginet, skal du konfigurere Studio-URL’en, installations-id’et, den delte integrationsnøgle og gyldighedsperioden for launch-tokenet. Produktionsinstallationer bør bruge HTTPS.

Databaserne i »OJS« og »Studio« forbliver adskilte. Giv ikke Studio direkte adgang til »OJS«-databasen eller adgang til private filsystemer.

## Arkitektur og API

Stikket anvender integrationsprofilen »OMI«:

```text
omi-integration/1/ojs
```

Den mere omfattende dokumentation om »API« og »Profile« kan findes her:

- [Integration Architecture](./architecture.md)
- [OMI Integration API v1](./integration-api-v1.md)
- [OJS Integration Profile v1](./ojs-profile-v1.md)
- [OJS Manuscript File Import](./ojs-file-import.md)
- [Integration Implementation Status](./implementation-status.md)

## Sikkerhedsmodel

Sikkerhedskritiske operationer udføres via OJS/PKP-applikationsniveau-APIer og repository-tjenester. Connectoren anvender kortvarige, signerede påstande til interaktive startforløb og HMAC-SHA256-signerede tjenesteanmodninger til beskyttet tilbageskrivning.

Designet følger disse rammer:

- OJS er fortsat den gældende retningslinje for arbejdsgange og bedømmelsesopgaver;
- Studio modtager kun data, der udtrykkeligt er afgrænset;
- Anmelderadgangen er knyttet til den enkelte opgave;
- Private filer overføres først efter godkendelse frOJS;
- hemmelighederne forbliver på serversiden;
- Tilbageskrivningen af anmeldelsen valideres i forhold til den aktive »OJS«-tildeling og formdefinitionen.

## Oplysning om AI-støttet udvikling

Udviklingen af pluginet har modtaget betydelig hjælp fra generativ AI inden for arkitektur, implementering, PKP-API-analyse, sikkerhedsvurdering, CI/CD, test og dokumentation. Projektet fastholder et eksplicit menneskeligt ansvar for den indsendte kode og verificerer PKP-afhængig adfærd i forhold til den faktiske PKP/OJS-kilde og testresultaterne.

Repositoriet indeholder en eksplicit angivelse af AI-bidrag til PKP-relateret peer review:

- [AI contribution declaration](XQZTOKEN0END)

## Kilde- og projektdokumentation

- [Source repository](XQZTOKEN0END)
- [README](XQZTOKEN0END)
- [Changelog](XQZTOKEN0END)
- [License](XQZTOKEN0END)
- [All releases](XQZTOKEN0END)

## PKP-status

Pluginet er udviklet i overensstemmelse med PKP/OJSon 3.5 APIog er under forberedelse til gennemgang af PKP. Offentliggørelsen på webstedet OMI og tilgængeligheden som en version, der kan installeres, betyder **ikke**, at pluginet allerede er blevet godkendt til optagelse i det officielle PKP Plugin Gallery. Optagelse i det officielle galleri forudsætter fortsat en gennemgang af PKP-vedligeholdere samt validering af kompatibiliteten.
