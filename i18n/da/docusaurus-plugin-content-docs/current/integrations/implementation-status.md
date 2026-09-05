---
title: Status for implementering af integrationen
sidebar_label: Integrationsstatus
description: Aktuel status for implementeringen af »Open Manuscript Studio«-integrationer og eksterne videnskabelige tjenester.
---

# Status for implementering af integrationen

**Statusdato:** 5. september 2026  
**Omfang:** Referenceimplementering af »Open Manuscript Studio«  
**Gyldighed:** Informativ implementeringsrapport; integrationsspecifikationerne er fortsat bindende, hvor det er relevant.

Denne side skelner mellem **implementeret produktadfærd** og **protokoludformning** samt **planlagte konnektorer**. En dokumenteret integrationsprofil betyder ikke i sig selv, at den tilhørende produktionskonnektor er færdigudviklet.

## Statusordforråd

| Status | Betydning |
|---|---|
| **Operationelt** | Implementeret og afprøvet i det nuværende Studio-arbejdsforløb. Der kan stadig være behov for implementeringsspecifik konfiguration. |
| **Konfigurationsafhængigt** | Implementeret i Studio, men kræver administratorrettigheder, slutpunkter, registrering via OAuth/OIDC, e-mail-levering, databasemigrering eller en ekstern tjeneste. |
| **Grundlag** | Der findes en datamodel, brugergrænseflade, udbyderregister samt rammeværk for klienter eller konfiguration, men den samlede produktionsintegration er endnu ikke færdig. |
| **Kun specifikation** | Protokollen/profilen er dokumenteret, men referenceimplementeringen indeholder endnu ikke den komplette connector. |
| **Planlagt** | Tilsigtet integrationsområde uden en færdig implementeringsplan. |

## Aktuel integrationsmatrix

| Integration | Nuværende status | Implementerede løsninger / nuværende omfang | Resterende arbejde |
|---|---|---|---|
| **OJS** | **Drifts- og konfigurationsafhængigt; indbygget E2E-verificeret** | Signeret forfatter-/redaktør-/bedømmer-lancering; udveksling af metadata og filer inden for opgavens rammer; import fra DOCX; dobbeltanonym bedømmerprojektion; obligatoriske indbyggede bedømmelsesformularer; rettelser af manuskriptet; feedback synlig for forfatteren og kun for redaktøren; HMAC-signeret tilbageskrivning af anmeldelser. Verificeret mod et engangs-OJS-3.5-miljø. | Fortsæt med at styrke publikationsreturneringen, kompatibilitetstest på tværs af understøttede OJS-versioner og operatørdokumentation. |
| **OMP** | **Afhænger af drift og konfiguration; verificeret i det oprindelige E2E-system** | Underskrevet lancering af forfatter/redaktør/korrekturlæser; kortlægning af monografier og undersøgelser; korrekturlæserens visning begrænset til den tildelte undersøgelse; filer inden for opgavens omfang; obligatoriske oprindelige korrekturformularer; rettelser; adskilt feedback; HMAC-underskrevet tilbageskrivning. Verificeret i forhold til et engangs-miljø med den native version 3.5 af OMP. | Fortsæt bredere test af kompatibilitet med OMP-versioner, vejledning i produktionsimplementering og sikring af publikationsretur. |
| **ORCID OAuth/OIDC** | **Konfigurationsafhængig** | Der er implementeret kontoautentificering/sammenkædning, videresendelse af personlige/institutionelle legitimationsoplysninger, valg mellem Sandbox og Produktion, overgang mellem indbygget browser og App-Link samt direkte verifikation af ORCID fra forfatter-signatur-forløbet. | Registrering af produktionslegitimationsoplysninger, konfiguration af callback, driftsovervågning og bredere platformsovergribende regressionstest. |
| **Google / Microsoft / institutionel OIDC** | **Konfigurationsafhængig** | Autorisationskode + PKCE, validering af tilstand og nonce, discovery/JWKS-verifikation, kontrol af udsteder og målgruppe, eksplicit kontobinding og delt native handoff er implementeret. | Registrering af produktionsudbydere, udbyder-/tenant-specifik implementeringstest og driftsovervågning. |
| **Forbundet identitetsstyring** | **Driftsmæssig / udbyderafhængig** | Kontoindstillingerne viser adgangskode, ORCID og OIDC-identiteter, viser metadata om forbindelse/sidste brug, understøtter eksplicit sammenkædning/afkædning og forhindrer sletning af den sidste brugbare log-in-metode. | Bredere brugeroplevelse hos udbyderen og fremtidig SAML-styringsflade. |
| **Institutionsadministration** | **Konfigurationsafhængigt** | Medlemskab af institutioner, roller som »`MEMBER`« / »`ADMIN`« / »`OWNER`«, dedikeret administratorlogin, rollehåndhævelse på serversiden, central OMI-administration og beskyttelse af den sidste ejer er implementeret. | Vejledning i migrering til produktionsmiljøet og konfiguration, dækning af autorisationsregressionstest samt udvidelse af integrationsstyringen for institutioner. |
| **Institutionsadministrator API** | **Konfigurationsafhængig** | Institutionsbundne maskinlegitimationsoplysninger anvender visning af engangstokener, hash-lagring af SHA-256, udløb/tilbagekaldelse, eksplicitte anvendelsesområder og administrationsrevisionshændelser, der kun kan tilføjes. v1-endepunkter for medlemmer/kontekster er implementeret. | Tilføj integrationsstyrings-endepunkter med institutionsomfang bag de reserverede omfang `integrations:read` / `integrations:write` og udvid dokumentationen om automatisering. |
| **Enhedsbevidst indbygget lagerplads** | **Fungerer på installerede klienter** | Installerede klienter skelner mellem egne enheder og delte/fremmede enheder. Egne enheder kan bevare de oprindelige arbejdsstier; delte enheder bevarer ikke lokale stier og foretrækker cloud-forbindelser inden for profilens rækkevidde. Engangsbærbare/aftagelige lagringsenheder er fortsat tilgængelige. | Fortsæt test af gendannelse og validering af platformspecifikke grænsetilfælde. |
| **Android-dokumenter / SAF-lagring** | **Offentlig betaversion i drift** | Android bruger systemets »Documents / Storage Access Framework«-vælger til at åbne, gemme, gemme som, bærbar OMI-sikkerhedskopiering og understøttede eksportfunktioner i stedet for generelle tilladelser til delt lagring. | Regressionstest af enheder/leverandører og styrkelse af sikkerheden ved distribution via app-butikker. |
| **Lokalt synkroniseret lagring** | **Fungerer på desktop** | OneDrive, SharePoint, Google Drive, Dropbox, Nextcloud og iCloud Drive er repræsenteret som udbyderspecifikke metoder til lokalt synkroniserede mapper. Studio skriver bærbare OMI-filer lokalt, mens udbyderens klient står for godkendelse og synkronisering. Stierne forbliver lokale på enheden. | Fortsæt test af gendannelse ved afbrudt lokal/udbydersynkronisering og udvid valideringen af den oprindelige platform. |
| **WebDAV / Nextcloud med profilbegrænsning** | **Konfigurationsafhængigt** | Direkte forbindelser understøtter krypterede server-side legitimationsoplysninger, forbindelsestest, upload af bærbar sikkerhedskopi, integritetskontrol, gendannelse og sletning. Forbindelserne er begrænset til den godkendte Studio-profil og kan følge brugeren på tværs af enheder. | Udbyderspecifik finpudsning af brugeroplevelsen, driftsovervågning og bredere test af interoperabilitet. |
| **Katalog over cloududbydere** | **Driftsgrundlag** | Valg af udbyder → kontotype (privat/erhverv) → forbindelsesmetode er implementeret for Nextcloud, WebDAV, OneDrive, SharePoint, Google Drive, Dropbox og iCloud Drive. Lokalt synkroniserede mapper er metoder fra den egentlige udbyder og ikke fra en pseudo-udbyder. | Tilføj gradvist direkte OAuth 2.0-forbindelser, hvor indbygget/lokal synkronisering ikke er den ønskede tilstand. |
| **DeepL-struktureret oversættelse** | **Konfigurationsafhængig** | DeepL-udførelse på serversiden er implementeret for omfangene »udvalg«, »blok«, »afsnit« og »hele manuskriptet«. Struktureret segmentering bevarer indbyggede markeringer og udelukker citater, krydshenvisninger, kode, ligninger og bibliografiske poster; større oversættelser kan gemmes som separate sprogvarianter. | Overvågning af produktionsadgangskoder/kvoter, brugeroplevelse ved udbyderfejl og bredere test af sprogpar. |
| **Grammatik- og stiltjenester** | **Konfigurationsafhængig** | Valgfri LanguageTool-kompatibel kontrol og udførelse af konfigureret AI-sprogredigering, der returnerer strukturerede fejl vedrørende stavning, grammatik, tegnsætning og stil uden direkte ændringer af manuskriptet på serversiden. | Tilpasning af produktionsudbyder, håndtering af ventetid og fejl samt bredere sprogdækning. |
| **OMI-AI-agenter** | **Konfigurationsafhængig** | En udbyderneutral sprogeditor, metadata-assistent, sammenfatningsværktøj og citatkontrol udføres via et konfigurerbart HTTPS-endpoint til chat-autofyldning. Forslag kræver eksplicit brugerindgriben. Indhold, der er fortroligt i forbindelse med gennemgang, blokeres, medmindre det udtrykkeligt er tilladt. | Test af udbyderinteroperabilitet, evalueringsfixturer, håndtering af kvoter og latenstid samt yderligere agentspecifikke sikkerhedsbegrænsninger. |
| **Integrationslog** | **Operationel** | Ekstern logføring registrerer metadata om operationer, udbydere og omfang samt digests fra SHA-256 i stedet for manuskripttekst, prompter, output eller fortrolige oplysninger. | Kontrolmekanismer for rapportering og opbevaring samt operationelle dashboards. |
| **Integrationsudvidelse API v1** | **Operationelt grundlag** | Der er implementeret et register over udvidelsesmanifester, kompatibilitets- og versionskontrol, områdebegrænsede tilladelser, funktioner, HTTPS-eksklusive slutpunkter samt SDK-dokumentation. | Eksempler på tredjepartsudvidelser, signerings- og tillidspolitik samt overensstemmelsestests. |
| **Katalog over integrationsudbydere** | **I drift** | Studio indeholder et integrationsområde, et register over udbydere, metadata om godkendelsesmetoder, konfigurationsstatus, lagerkonfiguration, oversættelses- og agentværktøjer, revisionsoplysninger samt udvidelsesgrænseflader. | Tilføj produktionskonnektorer gradvist uden at knytte manuskriptmodellen fra OMI til bestemte leverandører. |
| **Strukturerede bibliografiske tjenester** | **Operationelt grundlag** | Strukturerede opslag fra Crossref, DataCite, OpenAlex og MTMT kortlægges ind i en fælles bibliografisk model med normalisering og deduplikering via DOI. Identitetsopslag fra ROR og ORCID er ligeledes integreret. | Caching, politik for afstemning/herkomst, flere identifikatorregistre og udbyderspecifik håndtering af pålidelighed. |
| **Bibliografiske webudbydere, der kræver login** | **Driftsmæssigt grundlag / afhængigt af udbyder** | Forudindstillede og konfigurerbare HTTPS-webudbydere på Academia.edu, der kræver login, kan åbnes uden at Studio indsamler adgangskoder. Tauri bevarer udbyderens WebView-sessioner og understøtter eksplicit rydning ved lokal udlogning. | Udbyderspecifik kompatibilitetstest og en mere overskuelig brugeroplevelse vedrørende tillid og sessioner. |
| **Arkiv / bevaringsdepot** | **Planlagt** | Arkitekturen understøtter eksterne adaptere til deponering og bevaring. | Definer konkrete forbindelsesprofiler og implementer referenceadaptere. |

## OJS implementeringsvejledning

OJS er i øjeblikket den mest gennemarbejdede integration med en ekstern publikationsplatform i referenceimplementeringen. Produktionsarkitekturen opretholder OJS og Studio som separate applikationer med hver deres lagringslag. OJS er fortsat den autoritative kilde for indsendelsesworkflow, tildeling af korrekturlæsere, korrekturrunder og redaktionelle beslutninger; Studio udgør det strukturerede arbejdsområde for manuskripter og korrekturlæsning.

Den verificerede proces er nu kommet længere end den indledende konceptfase. Studio kan modtage signeret OJS-kontekst, hente manuskriptfiler via integrationsendepunkter, rekonstruere manuskriptstrukturen ud fra DOCX-materiale, bevare understøttet inline-semantik og noter samt eksponere rollebaserede arbejdsgange for forfattere, redaktører og korrekturlæsere. Eksternt tildelte peer reviews kan accepteres og håndteres i Studio, mens grænserne for dobbeltblind identitet forbliver en del af review-projektionen.

Server-side anmodninger, der stammer fra en »OJS«-startkontekst, er begrænset til den installationskilde, som administratoren har registreret, og er sikret mod usikre omdirigeringer, private/reserverede mål, sti-traversering og anmodningsstyrede ændringer af beføjelser. Dette er en del af den nuværende sikkerhedsstandard for integration og ikke en ændring af selve »OJS«-protokollen.

Integrationen benytter bevidst grænserne i »application/API« i stedet for direkte adgang til databasen »OJS«. Dette bevarer uafhængigheden i forhold til implementeringen og gør det muligt at teste protokollens adfærd.

Dette betyder **ikke**, at alle operationer, der er beskrevet i den fuldstændige »OJS«-integrationsprofil v1, har nået den endelige status med hensyn til interoperabilitet eller overensstemmelse. Synkronisering frem og tilbage, publikations-returveje og bredere versionskompatibilitet er fortsat områder, hvor der arbejdes aktivt på at styrke sikkerheden.

## OMP implementeringsvejledning

OMP er et førsteklasses mål for operationel integration med et dedikeret plugin og fuldstændig dækning (end-to-end) i OMP 3.5. Gennemgangslanceringer er bundet til en tildelt undersøgelse; data om overordnet monografi, søsterundersøgelser og bidragyderes identitet udelukkes fra den anonyme gennemgangsprognose. OMP forbliver den autoritative kilde for trykworkflow, tildelinger, runder og færdiggørelsesadfærd, mens Studio leverer det strukturerede arbejdsområde til gennemgang.

## Model for lagringsintegration

Studio bruger nu tre eksplicitte lagringskontekster.

**Egen enhed / systemlager.** På en betroet, installeret enhed kan Studio anvende den normale, platformspecifikke lagerplads, som forfatteren har valgt. Desktop-mål kan anvende lokale mapper, monteret/netværkslager og mapper, der synkroniseres via en udbyder. Android anvender systemets »Documents« / »Storage Access Framework«-grænseflade.

**Delt eller fremmed enhed.** Nyligt registrerede enheder indstilles som standard til begrænset lokal lagring. Studio gemmer ikke stien til den lokale arbejdsfil og foretrækker cloud-forbindelser, der hører til den profil, der er logget ind med. Engangsbrug af flytbare/bærbare lagringsmedier er stadig muligt uden at gemme den valgte sti.

**Direkte profilforbindelse.** Studio opretter selv forbindelse til en lagringstjeneste. Den direkte forbindelse, der i øjeblikket er implementeret, er WebDAV/Nextcloud med krypterede adgangskoder på serversiden, der er begrænset til den godkendte bruger. Fremtidige forbindelser til udbydere af OAuth bør følge den samme model, hvor adgangen er begrænset til den enkelte profil.

Dette design bevarer princippet om, at data først og fremmest skal opbevares lokalt, uden at det forudsættes, at alle cloududbydere skal kontrolleres af Studio, eller at en delt enhed skal bevare forfatterens lokale sti.

## Grænse for integration af native-client

Web-, desktop- og Android-applikationerne deler Studio-APIen og integrationsaftalerne. Native Tauri-klienter anvender en autentificeringstransport, der er kompatibel med native applikationers oprindelse, i stedet for at antage en cookie-adfærd, der udelukkende er baseret på browseren. ORCID og OIDC kan returneres via den delte native overførselsvej.

Håndtering af native filer tilpasses den pågældende platform: Desktop-applikationer bruger native fil- og mappedialoger, mens Android bruger Documents/SAF. Hosted Studio anvender browser-downloads til eksport.

## Godkendelsesmetoder

Studio-integrationslaget skelner mellem forskellige udbyderautentificeringsmodeller i stedet for at antage, at alle tjenester kan bruge den samme type legitimationsoplysninger. Afhængigt af udbyderen kan en integration anvende OAuth/OIDC, API-nøgler eller -tokens, tjenesteadgangskoder, signerede startbekræftelser, implementeringsstyrede adgangskoder, institutionsspecifikke API-adgangskoder eller slet ingen OMI-baserede udbyderadgangskoder, når en lokal synkroniseringsklient udfører autentificering.

Brugerbaseret login med brugernavn og adgangskode er kun hensigtsmæssigt, når den eksterne udbyder udtrykkeligt understøtter en sådan proces. Adgangskoder må ikke udledes fra en udbyders login-formular på forbrugerwebstedet.

## Adskillelse af identitet og administration

Identiteten på studiekontet, identiteten som videnskabelig bidragyder, tilhørsforholdet til en institution og den centrale administration er bevidst adskilt fra hinanden.

Autentificering fastlægger, hvem der har adgang til Studio-tjenesterne. Bidragsyderoplysninger angiver videnskabeligt forfatterskab, tilknytning, ORCID samt bidragsroller. Institutionsmedlemskab angiver organisationsspecifik tilknytning samt `MEMBER`/`ADMIN`/`OWNER` autoritet. Den centrale administration udgør et særskilt privilegieniveau, der strækker sig på tværs af institutionerne.

Hverken institutionsadministrationen eller centraladministrationen giver i sig selv adgang til manuskripter, bedømmelser eller redaktionelt indhold.

Se [Institutional and Central Administration](./institutional-administration.md) for at se administrationsmodellen.

## Produktstatus kontra overensstemmelse med »OMI«

Statusangivelserne på denne side beskriver **Open Manuscript Studio-produktimplementeringen**. De tildeler ikke en connector overensstemmelse med OMI. Formel overensstemmelse kræver versionerede krav, testopsætninger og rammen for kapacitet/overensstemmelse.

For oplysninger om status på specifikationsniveau henvises til [OMI Implementation Status Matrix](../governance/implementation-status-matrix.md). For den bredere produktbaseline for Studio henvises til [Studio Implementation Status](../governance/studio-implementation-status.md).
