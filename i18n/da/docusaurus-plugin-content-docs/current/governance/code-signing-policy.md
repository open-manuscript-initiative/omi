---
title: Politik for kodesignering
sidebar_label: Politik for kodesignering
---

# Politik for kodesignering

## Anvendelsesområde

Denne politik gælder for officielle binære udgivelser af **Open Manuscript Studio**, den open source-referenceimplementering af Open Manuscript Initiative (OMI).

Open Manuscript Studio Kildekoden udvikles åbent i `open-manuscript-initiative/open-manuscript-studio` GitHub-repositoriet og distribueres under MIT-licensen.

## Formål

Kodesignering sikrer verificerbar herkomst og integritet for officielle desktop-udgivelser. Det giver brugere og operativsystemer mulighed for at kontrollere, at et distribueret installationsprogram er fremstillet gennem projektets godkendte udgivelsesproces og ikke er blevet ændret efter signeringen.

Den indledende signeringsomfang omfatter den officielle Windows-desktopdistribution, herunder NSIS-installationsprogrammet `.exe` og WiX-pakken `.msi`, som er fremstillet via Tauri-udgivelsesworkflowet.

## SignPath-fonden

Open Manuscript Initiativeen har til hensigt at anvende SignPath Foundations open source-tjeneste til kodesignering til godkendte officielle udgivelser.

**Gratis kodesignering leveret af SignPath.io, certifikat udstedt af SignPath Foundation.**

Kodesignering er ikke aktiv, før projektet er blevet godkendt af SignPath Foundation, og signeringskonfigurationen er blevet integreret i den officielle udgivelsesproces. Indtil da kan Windows-pakker være usignerede, og Windows kan vise en advarsel om ukendt udgiver eller om anseelse.

## Pålidelig sporbarhed af udviklings- og udgivelsesprocessen

Officielt signerede binærfiler skal kunne spores tilbage til offentlig kildekode og en godkendt udgivelsesproces.

For udgivelser, der er signeret med SignPath:

1. kildekoden skal stamme fra det officielle Open Manuscript Studio GitHub-repository;
2. Release-artefakter skal kompileres via projektets godkendte »GitHub Actions«-workflow ved hjælp af løbere, der hostes af GitHub, hvor dette kræves af signeringstjenesten;
3. signeringen skal foretages på artefakter, der er produceret af den pågældende betroede build, og ikke på lokalt leverede erstatningsbinærfiler;
4. den signerede artefakt skal svare til den kilderevision og den udgivelse, der er angivet i den offentlige GitHub-udgivelse;
5. Underskriftsoplysninger, projektidentifikatorer og tjenestehemmeligheder må ikke lagres i repositoriet;
6. Officielt underskrevne udgivelsesfiler må ikke ændres efter underskrivningen.

## Projektroller og medlemmer

De nuværende fastlagte roller i forbindelse med underskrivningen er:

- **Forfattere / bidragydere:** Open Manuscript Initiative-vedligeholdere med skriveadgang til de officielle repositorier. Nuværende udpeget vedligeholder: [XQZTOKEN0END](XQZTOKEN1END).
- **Gennemgangspersoner:** Vedligeholdere af Open Manuscript Initiative, der gennemgår pull-anmodninger og ændringer, der har indflydelse på udgivelsesgenerering, pakning, sikkerhedsfølsom konfiguration og arbejdsgange for kodesignering. Nuværende udpeget gennemgangsperson: [XQZTOKEN0END](XQZTOKEN1END).
- **Godkendere:** vedligeholdere, der har fået tillid til at godkende anmodninger om signering til produktion og officielle signerede udgivelser. Nuværende udpeget signeringsgodkender: [XQZTOKEN0END](XQZTOKEN1END).

I et lille open source-projekt kan en person varetage mere end én rolle, hvis det er nødvendigt. Underskrivning af produktionsversionen er dog stadig en eksplicit frigivelseshandling og er ikke en implicit følge af vilkårlige ændringer i kildekoden.

## Autentificering og adgangskontrol

Administratorer med adgang til administrationsfunktionerne for udgivelser på GitHub eller SignPath-underskriftsfunktionerne skal anvende multifaktor-autentificering (MFA). Adgangen skal begrænses til de minimumsrettigheder, der er nødvendige for den tildelte rolle, og skal fjernes, når den ikke længere er påkrævet.

Legitimationsoplysninger og tokens til signeringstjenester skal opbevares ved hjælp af funktionerne til hemmelighedsstyring i det pålidelige CI/CD-miljø. De må aldrig indlejres i applikationens kildekode, workflow-logfiler, udgivelsesressourcer eller dokumentation.

## Godkendelse af underskrift

Hver anmodning om underskrivelse af en produktionsudgivelse kræver manuel godkendelse i overensstemmelse med de krav fra SignPath Foundation, der gælder for projektet. Godkendelsen af underskrivelsen skal være knyttet til en identificerbar udgivelsesartefakt og en kildekoderevision.

En udgivelse må ikke fremstilles som om den er underskrevet af projektet, medmindre underskriften kan valideres korrekt i forhold til den forventede certifikatkæde.

## Verifikation

Brugere og distributører opfordres til at kontrollere, at Windows-pakker er signeret, inden de installeres. En gyldig, signeret pakke skal:

- indeholde en gyldig Authenticode-signatur;
- at signaturen er intakt efter download;
- identificere den certifikatindehaver, der anvendes af den godkendte SignPath Foundation-signaturkonfiguration; og
- svarer til en officiel pressemeddelelse fra Open Manuscript Studio, der er udgivet af Open Manuscript Initiative.

Kryptografisk signering fastslår herkomst og integritet. Den erstatter ikke gennemgang af kildekoden, håndtering af sårbarheder, scanning for skadelig software, gennemgang af afhængigheder eller andre sikkerhedskontrolforanstaltninger for software.

## Privatlivspolitik

Open Manuscript Studios privatlivspolitik er offentliggjort på [Privacy Policy](./privacy-policy.md).

Underskriftsarbejdsgangen behandler udgivelsesartefakter og de tekniske metadata, der er nødvendige for at fastslå build-herkomsten og godkende underskrivningen. OMI må ikke bevidst medtage brugerindhold, brugeroplysninger, indhold fra produktionsdatabasen eller andre private applikationsdata i underskriftsanmodninger.

Applikationen kommunikerer kun via netværket, når en bruger bevidst benytter en netværksbaseret funktion, eller når en installation er konfigureret til at levere en sådan tjeneste. Tilsluttede identitets-, udgivelses-, lagrings- eller integrationsudbydere kan have deres egne privatlivspolitikker og vilkår.

Projektets brug af SignPath er ligeledes underlagt de vilkår for privatlivsbeskyttelse og tjenesteydelser, der er offentliggjort af SignPath og SignPath Foundation.

## Database- og serversidetjenester

OMI Studio-serverens PostgreSQL-integration er adskilt fra kodesignering til desktop. Databasedata og produktionsdata ligger uden for grænsen for kodesigneringsartefakter og må aldrig medtages i desktop-udgivelsesartefakter eller signeringsanmodninger.

## Sikkerhedsrapporter

Sikkerhedsproblemer, der vedrører Open Manuscript Studio, dets kompileringsproces eller udgivelsens herkomst, bør indberettes privat til vedligeholderne af Open Manuscript Initiative i stedet for først at blive offentliggjort i en offentlig issue, da udnyttelse heraf kan udsætte brugerne for risiko.

## Politiske ændringer

Væsentlige ændringer vedrørende signeringsudbyderen, certifikatets ejerskab, det betroede build-system, signeringspolitikken for produktionsmiljøet, roletildelinger eller godkendelsesmodellen skal dokumenteres her, inden den ændrede proces præsenteres som den officielle signeringsproces for udgivelser på OMI.
