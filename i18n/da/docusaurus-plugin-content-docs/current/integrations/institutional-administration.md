---
id: institutional-administration
title: Institutionel og central administration
sidebar_label: Institutionel administration
keywords:
  - institutional administration
  - central administration
  - institution admin API
  - OIDC
  - SAML
  - roles
  - API credentials
  - audit log
---

# Institutionel og central administration

Open Manuscript Studio adskiller nu den personlige akademiske identitet, tilhørsforholdet til en institution, institutionens administration og OMI den centrale administration i forskellige godkendelsesniveauer.

Denne adskillelse er bevidst: **administrative beføjelser indebærer ikke adgang til manuskripter, bedømmelser, redaktionelle beslutninger eller andet videnskabeligt indhold**. Adgangen til indhold reguleres fortsat af tilladelsesmodellerne for manuskripter/arbejdsområder og udgivelsesprocessen.

## Godkendelsesplaner

### Personlig Studio-konto

En Studio-konto er den permanente identitet, der bruges på tværs af browsere, desktop- og mobilklienter. Den kan omfatte adgangskode og fødererede log-in-metoder, personlige profiloplysninger samt et eller flere institutionelle medlemskaber.

### Institutionsmedlemskab

Hvert medlemskab knytter én Studio-konto til én institution og indebærer én af tre roller:

- `MEMBER` — almindelig tilknytning til en institution;
- `ADMIN` — institutionsadministrator;
- `OWNER` — institutionsansvarlig med beføjelse til at foretage ændringer i roller på ejerniveau.

Institutionsdata såsom organisationens navn og identifikatoren fra ROR deles. Afdeling, stilling, institutionens e-mailadresse, tilknyttet institutionsidentitet og standardtilknytningsstatus hører under medlemskabet og ikke under den permanente personlige konto.

En bruger kan tilhøre flere institutioner, men ét medlemskab kan vælges som standardtilknytning.

### OMI centralforvaltning

Den centrale administration opbevares adskilt fra medlemskabet af institutionen. En central administrator har enten:

- `ADMIN` — tværinstitutionel driftsadministration;
- `OWNER` — styring af centrale administratorer ud over den normale centrale administration.

En institution `OWNER` er **ikke** automatisk en central administrator, og en central administrator er ikke automatisk medlem af eller ejer af nogen institution.

## Login for institutionsadministratorer

Ved installationer i institutioner kan der vises en særskilt login-tilstand for institutionsadministratorer, selvom man bruger den samme Studio-konto.

Adgang for administratorer med adgangskode accepteres kun, hvis den godkendte konto har et aktivt medlemskab på `ADMIN` eller `OWNER`.

Ved fødereret administratorlogin kan der anvendes konfigurerede OpenID Connect-udbydere fra Google, Microsoft eller institutionen. Når det eksterne login er afsluttet, verificerer Studio den institutionelle administratorkontekst på serveren, inden den administrative session godkendes.

ORCID er bevidst ikke en legitimationsoplysning for en institutionsadministrator. ORCID er fortsat en personlig akademisk identifikator og et middel til at fastslå forfatterens identitet.

## Bootstrap til institutionsadministrator

Ved administrerede institutionelle installationer kan der oprettes en indledende tilladelsesliste for institutioner og administratorer:

```dotenv
INSTITUTIONAL_NAME=
INSTITUTIONAL_ROR_ID=
INSTITUTIONAL_ADMIN_EMAILS=
```

Selve tilladelseslisten for e-mail giver ikke i sig selv ejerskab. Automatisk oprettelse af en »`OWNER`«-konto kræver, at den tilhørende Studio-konto har en tilknyttet OIDC- eller SAML-identitet. Konti, der kun er beskyttet med adgangskode, opgraderes aldrig automatisk.

## Opstart af centraladministrator

Den første centrale administrator kan startes op med:

```dotenv
CENTRAL_ADMIN_EMAILS=
INSTITUTION_API_TOKEN_TTL_DAYS=365
```

Ligesom ved institutions-bootstrap skal den konto, der er opført på tilladelseslisten, allerede have en tilknyttet OIDC- eller SAML-identitet, før den kan fungere som den første centrale `OWNER`.

Dette forhindrer, at en konto, der kun er beskyttet med en adgangskode, eller en e-mail-adresse, der matcher en eksisterende, i al hemmelighed opnår administrativ adgang på tværs af institutioner.

## Funktioner til central administration

APIen til den centrale personaleadministration er tilgængelig på `/api/central-admin` og understøtter:

- konteksten som central administrator;
- liste over institutioner, oprettelse, opdateringer, aktivering og deaktivering;
- administration af centraladministratorer (kun `OWNER`);
- udnævnelse og afskedigelse af institutionsadministratorer;
- oprettelse og tilbagekaldelse af adgangsoplysninger for institutionens administratorAPI;
- Hentning af administrationslogfiler.

Applikationen viser disse indstillinger under »Kontoindstillinger« kun for brugere, der har en central administrationsrettighed.

Implementeringen beskytter den sidste central`OWNER` og den sidste institution`OWNER` mod utilsigtet sletning eller nedgradering.

## Institutionsadministration API

Institutioner kan også modtage maskinadgangskoder til automatisering. Disse adgangskoder er knyttet til nøjagtig én institution og anvender eksplicitte anvendelsesområder.

Raw-tokens har følgende form:

```text
omi_ia_...
```

Det komplette token returneres kun én gang, nemlig når det oprettes. Studio gemmer kun en hash for »SHA-256« sammen med et ikke-hemmeligt præfiks til identifikation, status for udløb/tilbagekaldelse samt metadata om brugen.

De indledende anvendelsesområder er:

```text
institution:read
members:read
members:write
integrations:read
integrations:write
```

De første v1-maskinendepunkter er:

```text
GET   /api/institution-admin/v1/context
GET   /api/institution-admin/v1/members
PATCH /api/institution-admin/v1/members/:membershipId/role
```

Maskinadgangskoder kan ikke tildele, fjerne, forfremme eller nedgradere roller i »`OWNER`«. Ændringer af ejerskabet kræver, at en menneskelig institutionsejer eller central administrator foretager ændringen.

Omfangene »`integrations:read`« og »`integrations:write`« fastlægger autorisationsgrænsen for administrationsopgaver vedrørende integration på institutionsniveau. Enkelte integrationsendepunkter kan tilføjes uden at udvide en adgangsoplysning ud over den pågældende institution.

## Revisionsmodel

Administrative handlinger registreres i revisionshændelser, der kun kan tilføjes til. Afhængigt af handlingen kan en revisionspost indeholde:

- en menneskelig administrator eller institution API-adgangskode;
- institution;
- handlingsnavn;
- måltype og målidentifikator;
- metadata om ikke-hemmelige handlinger;
- klientens IP-adresse, når den er tilgængelig;
- oprettelsestidspunkt.

Adgangskoder, rå API-tokens, OAuth-hemmeligheder, manuskripttekst og udbyderhemmeligheder må ikke skrives til administrationsrevisionsloggen.

## Sikkerhedsgrænser

Administrationsarkitekturen følger disse regler:

1. Institutionsroller og centrale roller gemmes hver for sig.
2. Ingen administratorrolle giver i sig selv adgang til manuskripter eller redaktionelt indhold.
3. Fødererede identiteter identificeres ved hjælp af udsteder og subjekt i stedet for variable visningsnavne.
4. Den indledende privilegerede bootstrap kræver en tilknyttet OIDC/SAML-identitet ud over en tilladelsesliste med e-mail-adresser.
5. API-tokens fra institutioner er institutionsbundne, anvendelsesområdebegrænsede, tidsbegrænsede/tilbagekaldelige og gemmes udelukkende som hashkoder.
6. APIen kan ikke ændre ejerroller.
7. Beskyttelsesmekanismerne »Central« og »institutionens sidste ejer« forhindrer utilsigtet administrativ spærring.
8. Administrative handlinger kan kontrolleres uden, at der gemmes fortrolige oplysninger eller videnskabeligt indhold.

## Forholdet til driftsformer

Den samme Studio-klientkode kan anvendes i både personlige og institutionelle installationer. Installationsmodusen vælger de serveradministrerede legitimationsoplysninger til eksterne tjenester samt den institutionelle administrationsgrænseflade; den ændrer ikke manuskriptmodellen »OMI« eller dokumenternes overførbarhed.

Se [Studio deployment modes](./studio-deployment-modes.md) for information om routing af legitimationsoplysninger og konfiguration på implementeringsniveau, og [Studio implementation status](../governance/studio-implementation-status.md) for det aktuelle øjebliksbillede af modenheden i referenceimplementeringen.
