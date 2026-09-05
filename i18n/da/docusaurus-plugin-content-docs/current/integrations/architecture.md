---
title: Integrationsarkitektur
description: Arkitektoniske principper, nuværende implementeringsbegrænsninger og integrationsmønstre for sammenkobling af Open Manuscript Studio med publikations- og videnskabelige systemer.
---

# Integrationsarkitektur

Open Manuscript Initiative (OMI) er udviklet med henblik på at forblive uafhængig af enhver enkelt publiceringsplatform eller -tjeneste. Open Manuscript Studio kører derfor som et selvstændigt program med sin egen datalagring og opretter forbindelse til publicerings-, identitets-, lagrings-, oversættelses- og videnskabelige tjenester via eksplicitte adaptere.

> Manuskriptet er et bærbart videnskabeligt objekt, ikke en intern optegnelse fra et bestemt udgivelsessystem.

For den aktuelle status på produktniveau for de enkelte stik henvises til [Integration Implementation Status](./implementation-status.md).

## Aktuelt øjebliksbillede af implementeringen

Pr. 5. september 2026:

- **OJS** fungerer i den nuværende Studio-arbejdsgang, afhængigt af implementeringskonfigurationen, og hele forløbet for en anonym gennemgang er verificeret i et indbygget OJS 3.5-miljø;
- **OMP** fungerer afhængigt af implementeringskonfigurationen, med isolering af tildelte undersøgelser og fuldstændig anonym verifikation af gennemgangen i et indbygget »OMP« 3.5-miljø;
- **ORCID OAuth** og tilknyttet lagerplads er konfigurationsafhængige integrationer;
- **integrationsudbyderkataloget** og modellen for udbyderens godkendelsesmetode udgør de grundlæggende elementer;
- **DeepL** har i øjeblikket et grundlæggende rammeværk for udbydere og konfiguration, men ikke en komplet oversættelsesproces til produktionsbrug;
- Indlevering til arkiver og yderligere forbindelser til videnskabelig infrastruktur er stadig opgaver, der skal løses i fremtiden.

Dette er implementeringserklæringer, ikke erklæringer om overensstemmelse med OMI.

## Anbefalet arkitektur

```text
External scholarly / publishing system
Own application, identity and persistence
        |
        | Integration adapter / plugin / provider client
        | HTTPS + versioned API + explicit authentication
        v
Open Manuscript Studio
OMI manuscript services + Studio persistence
```

Integrationslaget SKAL anvende applikationstjenester og APIi stedet for direkte adgang på tværs af databaser. Studio MÅ IKKE læse eller skrive til en udgivelsesplatforms interne databasetabeller, og en ekstern platform MÅ IKKE være afhængig af Studios interne lagringsskema.

Denne adskillelse muliggør uafhængige opgraderinger, isolerer sikkerhedsgrænser og fejl og giver den videnskabelige objektmodel »OMI« mulighed for at udvikle sig uafhængigt.

## Grænser for registreringssystemet

Hvert tilsluttet system er fortsat den autoritative kilde til de data, det ejer.

| Ansvar | Typisk autoritativt system |
|---|---|
| Indsendelse og redaktionelt forløb | Udgivelsesplatform |
| Redaktionel proces og beslutninger | Udgivelsesplatform |
| Invitation til bedømmere og tildeling af opgaver | Publikationsplatform |
| Gennemgangsfrister og ekstern arbejdsgangstatus | Publikationsplatform |
| Publikations-/udgivelses-/katalogstyring | Udgivelsesplatform |
| Manuskriptets semantiske struktur | OMI / Studio |
| Stabile manuskriptankre | OMI / Studio |
| Studio-indbyggede anmærkninger | OMI / Studio |
| Redigering af manuskripter i samarbejde | OMI / Studio |
| Oversigt over ændringer i manuskriptet | OMI / Studio |
| Identitetsbekræftelse | Identitetsudbyder / tilknyttet register, hvor herkomstoplysningerne opbevares af Studio |
| Adgang til eksterne filer | Udbyder af tilkoblet lagring |

Systemoverskridende identifikatorer forbinder disse poster uden at sammenlægge deres lagringsmodeller.

## Niveauer for integrationskapacitet

OMI betragter integrationen med udgivelsessystemet som en gradvis udvidelse af funktionaliteten snarere end en funktion, der enten er til stede eller ikke.

### Niveau 1 — Integration ved lancering

Den eksterne platform indeholder en handling kaldet **Åbn i Studio**. En kortvarig, godkendt påstand identificerer installationen, konteksten, objektet, aktøren og de tilladte anvendelsesområder.

Den nuværende implementering af `OJS` anvender dette mønster med en signeret startkontekst.

### Niveau 2 — Integration af metadata

Adapteren stiller tilladte metadata for indsendelser/manuskripter til rådighed, såsom lokaliserede titler, resuméer, nøgleord, bidragydere og identifikatorer. Synkroniseringen SKAL definere feltets autoritet og herkomst.

### Niveau 3 — Filintegration

Studio henter godkendte manuskriptfiler via godkendte applikationsendepunkter. Det MÅ IKKE få direkte adgang til private filstier på serveren.

Den nuværende sti OJS anvender denne arkitektur til hentning af kildemanuskripter.

### Niveau 4 — Synkronisering af manuskripter

En mere avanceret konnektor kobler manuskriptet »OMI« og dets afledte værker til en ekstern platform. Synkroniseringen BØR være revisionsbaseret og SKAL undgå, at historiske kildefiler udskiftes uden varsel.

### Niveau 5 — Integration af fagfællebedømmelse

Udgivelsesplatformen er fortsat den afgørende instans, hvad angår tildeling, runde, deadline og redaktionelle beslutninger. Studio tilbyder et struktureret arbejdsmiljø til videnskabelig peer review.

Den nuværende implementering af OJS/Studio omfatter håndtering af eksternt tildelte bedømmelser, rollebaserede visninger for bedømmere og redaktører samt grundlaget for dobbeltblind bedømmelse.

### Niveau 6 — Integration af publikationer

Efter godkendelse kan Studio MAY generere publikationsderivater eller strukturerede pakker til den efterfølgende produktion. Eksterne publikationssystemer forbliver normalt de afgørende instanser med hensyn til planlægning, tildeling af udgaver/kataloger og offentlig udgivelse.

## Autentificering og tillid

Integrationslaget forudsætter ikke en universel godkendelsesmetode. Udbydere kan kræve:

- underskrevne kortvarige lanceringspåstande;
- OAuth/OIDC-baseret godkendelse;
- API nøgler eller servicetokens;
- adgangsoplysninger til implementeringsstyrede tjenester;
- udbyderspecifikke loginoplysninger til applikationer.

Studio-udbyderregistret kan gøre disse godkendelsesmetoder tilgængelige i brugergrænsefladen uden at behandle dem som indbyrdes udskiftelige.

Produktionsintegrationer SKAL anvende HTTPS og autorisation baseret på princippet om mindst mulig adgang. Adgangsoplysninger MÅ IKKE gemmes i kildekoden, medtages i manuskriptpakker eller afsløres for browseren, når de tilhører integrations tjenester på serversiden.

Der må IKKE opfindes en e-mail/adgangskode-login-løsning til en udbyder, blot fordi denne udbyder har en login-side på sin forbrugerhjemmeside. Udbyderens dokumenterede API-autentificeringsmodel er den gældende.

## OJS integration

OJS er i øjeblikket den førende integration af udgivelsesplatforme.

```text
OJS
  |
  | OMI integration plugin
  | - signed launch
  | - metadata and contributors
  | - manuscript files
  | - review assignment context
  | - revision/review exchange paths
  v
OMI Integration API / Studio service
  |
  v
Open Manuscript Studio
```

OJS er fortsat den endegyldige kilde til arbejdsgangen ved indsendelse af artikler, tildeling af korrekturlæsere, bedømmelsesrunder, redaktionelle beslutninger, udgaver og publikationsstatus. Studio er fortsat den endegyldige kilde til manuskriptmodellen »OMI« og manuskript- og bedømmelsesstatus i Studio.

Implementeringen er nu gået videre end blot et konceptuelt bindeled: Der er nu indført underskrevet lancering, hentning/import af kildefiler, håndtering af tildeling af eksterne bedømmere, obligatoriske native bedømmelsesformularer, rettelser af manuskripter, adskilt feedback fra bedømmere samt underskrevet tilbagemelding. Indbyggede end-to-end-tests i »OJSon 3.5« verificerer anonyme bedømmerprofileringer og adgang begrænset til den enkelte opgave. Den komplette »[OJS Integration Profile v1](./ojs-profile-v1.md)« er stadig bredere end den aktuelt verificerede produktionsvej, så ikke alle profiloperationer bør beskrives som overensstemmende eller komplette.

## OMP integration

OMP er fortsat et førsteklasses valg til monografier, antologier, kapitler og arbejdsgange i forlagsbranchen.

[OMP Integration Profile v1](./omp-profile-v1.md)en definerer den arkitektoniske kortlægning, herunder forfatterskab og gennemgang på komponentniveau. Det implementerbare plugin »OMP« implementerer nu signeret, rollebaseret opstart, kortlægning af monografier og undersøgelser, filadgang inden for opgavens rammer, indbyggede gennemgangsformularer, rettelser, adskilt feedback og signeret tilbageskrivning.

Indbyggede end-to-end-tests i OMP 3.5 sikrer, at en korrekturlæser udelukkende modtager den tildelte undersøgelse, der præsenteres som en anonym artikel. Metadata fra den overordnede monografi, søsterundersøgelser, ikke-tildelte filer samt bidragydernes identitet forbliver uden for denne korrekturprojektion. Overholdelse af de formelle krav i OMI samt bredere kompatibilitet med OMP-versionen er emner, der skal behandles i et senere arbejde.

## Katalog over integrationsudbydere

Studio indeholder nu et register over integrationsudbydere og en brugergrænseflade til integrationer. Dette lag har til formål at gøre det muligt at finde og konfigurere eksterne tjenester uden at skulle indkode hver enkelt udbyder direkte i urelaterede funktioner i manuskriptet.

En definition af en udbyder kan beskrive:

- udbyderens identitet og kategori;
- understøttet godkendelsestilstand;
- konfiguration/status;
- klient-/servicekapacitet;
- krav til implementering.

Dette er et grundlag for udvidelsesmuligheder, ikke et bevis på, at alle de nævnte udbydere har en fuldstændig produktionskonnektor.

## Identitetstjenester

### ORCID

ORCID OAuth Understøttelsen afhænger af konfigurationen. Studio kan stille infrastruktur til identitetssammenkædning til rådighed, men driften i produktionsmiljøet kræver en gyldig registrering af ORCID-applikationen, klientlegitimationsoplysninger og konfiguration af callback.

### ROR og metadata om videnskabelig identitet

ROR/Tilknytnings- og relaterede identifikatorgrundlag kan berige dataene om bidragydere på OMI. Eksterne identifikatorer SKAL bevare herkomstoplysningerne og MÅ IKKE erstatte modellen for bidragydere/aktører på OMI med leverandørspecifikke poster.

## Oversættelsestjenester

DeepL findes i øjeblikket på udbyder-/konfigurationsniveau. Arkitekturen understøtter en oversættelsesudbyder uden at give denne ejerskab over manuskriptstrukturen eller oversættelsens herkomst.

En oversættelseskonnektor til produktionsbrug skal desuden definere sikker autentificering, tilknytning mellem kilde- og målsprog, håndtering af kvoter og fejl, sporbarhed af resultater samt hvordan maskinoversættelse indgår i versionsbaserede arbejdsgange for oversættelse af manuskripter.

## Tilsluttet lagerplads

Studio-programmet til skrivebordet følger en »local-first«-model og kan gemme manuskripter i almindelige lokale eller synkroniserede mapper. Tilsluttet fjernlagring er et separat integrationsspørgsmål.

WebDAV/Nextcloud-baserede lagringsløsninger kan konfigureres, hvor dette understøttes. Fremtidige udbyderspecifikke forbindelser bør følge den samme regel: Fjernlagringen ejer filer/objekter i den pågældende tjeneste; manuskriptet på OMI forbliver uafhængigt overførbart og kan eksporteres.

## Integration af arkiv og bevaring

En arkivadapter kan modtage et færdigredigeret manuskript eller en bevaringspakke. Arkivet er fortsat den autoritative kilde med hensyn til indleveringens identitet, adgangsregler og bevaringstilstand.

Dette område er fortsat planlagt i referenceimplementeringen og bør anvende en dedikeret integrationsprofil frem for direkte databasekobling.

## API om versionsstyret integration

Integrationsendepunkter BØR versioneres fra starten, for eksempel:

```text
/api/integrations/v1/...
```

Ændringer, der ikke er bagudkompatible, kræver en ny protokolversion. Connectors BØR forhandle sig frem til funktioner i stedet for at antage, at enhver OMI-implementering understøtter alle operationer.

De platformsuafhængige [Integration API v1](./integration-api-v1.md)- og værtsprofiler definerer protokollens formål. Status for produktimplementeringen følges separat på siden [Integration Implementation Status](./implementation-status.md).

## Implementeringsmønstre

### Samme server, separate applikationer

```text
https://example.org/ojs/
https://example.org/omi/
```

Applikationer kan dele infrastruktur, samtidig med at de bevarer separate grænser for datalagring og tjenester.

### Separate underdomæner

```text
https://journal.example.org/
https://studio.example.org/
```

Separate virtuelle værter sikrer klare routing- og sikkerhedsgrænser og er velegnede til mange produktionsinstallationer.

### Separat infrastruktur

Udgivelsessystemet og Studio kan køre på forskellige servere eller drives af forskellige organisationer. Den samme versionsstyrede protokol gælder via HTTPS.

## Overførbarhed og smidig afbrydelse

En integration MÅ IKKE gøre manuskriptet ubrugeligt, når en ekstern udbyder ikke er tilgængelig. Status for ekstern integration BØR angives som identifikatorer, links, funktioner og herkomst i stedet for udokumenterede afhængigheder af eksterne databasestrukturer.

Dette er en central arkitektonisk egenskab ved OMI: Eksterne systemer kan koordinere arbejdsgange omkring manuskriptet, mens manuskriptet selv forbliver et overførbart videnskabeligt objekt.

## Statusdisciplin

I dokumentationen SKAL der skelnes mellem:

1. **status for normative protokoller/specifikationer**;
2. ** Status for implementeringen afOpen Manuscript Studio**;
3. **klarhed til implementering/konfiguration**;
4. **dokumentation for formel overensstemmelse**.

En udbyder, der er opført i integrationskataloget, er ikke automatisk klar til brug i produktionsmiljøet. Et udkast til en integrationsprofil implementeres ikke automatisk. Omvendt kan produktet allerede være i drift, før der foreligger et fuldstændigt overensstemmelsesrammeværk for »OMI«.

Brug [Integration Implementation Status](./implementation-status.md) for at se den aktuelle basislinje for referenceimplementeringen og [OMI Implementation Status Matrix](../governance/implementation-status-matrix.md) for dokumentation på specifikationsniveau.