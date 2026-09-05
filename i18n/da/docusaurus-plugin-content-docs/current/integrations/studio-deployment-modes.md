# Driftsformer for studier

Open Manuscript Studio bruger én kodebase og én familie af web-, desktop- og mobilklienter. En implementeringsprofil på serversiden fastlægger, hvem der administrerer adgangsoplysninger til eksterne tjenester, og om administrationsgrænsefladerne for institutionen er aktiveret.

## Personlig tilstand

```dotenv
DEPLOYMENT_MODE=personal
```

Den personlige tilstand er beregnet til uafhængige forfattere og enkeltbrugere. Studio beder aldrig om en ORCID-adgangskode. ORCID-godkendelsen foregår på ORCID’s egen godkendelsesside via OAuth/OpenID Connect.

I personlig tilstand anvendes det navnerum for legitimationsoplysninger, der administreres af Personal/OMI:

```dotenv
ORCID_CLIENT_ID=APP-...
ORCID_CLIENT_SECRET=...
ORCID_REDIRECT_URI=https://studio.example.org/api/auth/orcid/callback
```

Målarkitekturen er fortsat OMI, hvor identitetsformidling styrer ORCID-strømmen, så de enkelte forfattere ikke selv behøver at anskaffe eller vedligeholde ORCID API-adgangsoplysninger.

## Institutionel tilstand

```dotenv
DEPLOYMENT_MODE=institutional
```

Institutionsfunktionen er beregnet til forlag, tidsskrifter, universiteter, arkiver, forskningsinfrastrukturer og administrerede installationer af OJS/OMP. Institutionen anvender et separat navneområde for legitimationsoplysninger, der ejes af organisationen:

```dotenv
INSTITUTIONAL_ORCID_CLIENT_ID=APP-...
INSTITUTIONAL_ORCID_CLIENT_SECRET=...
INSTITUTIONAL_ORCID_REDIRECT_URI=https://publisher.example.org/api/auth/orcid/callback
INSTITUTIONAL_ORCID_API_TYPE=public
```

`INSTITUTIONAL_ORCID_API_TYPE` Accepterer `public` eller `member`. Integrationsnøgler forbliver på serversiden og må aldrig videregives via browserens lager, frontend-kompileringsvariabler eller konfiguration på klientsiden.

Ved institutionelle installationer kan man også definere organisationen og den indledende administratoropsætning:

```dotenv
INSTITUTIONAL_NAME=
INSTITUTIONAL_ROR_ID=
INSTITUTIONAL_ADMIN_EMAILS=
```

En konfigureret administrator-e-mail giver ikke i sig selv ret til ejerskab af institutionen. Den tilhørende Studio-konto skal allerede have en tilknyttet OIDC- eller SAML-identitet, før den automatiske oprettelse af »`OWNER`« kan finde sted.

## Opsætning og login for institutionsadministratorer

Login-skærmbilledet for institutionsadministratorer er kun aktiveret, når serveren kører i institutionstilstand. En minimal startkonfiguration er:

```dotenv
DEPLOYMENT_MODE=institutional
INSTITUTIONAL_NAME="Example University Press"
INSTITUTIONAL_ADMIN_EMAILS="admin@example.org"
```

Hvis institutionen har en ROR-identifikator, skal denne også konfigureres:

```dotenv
INSTITUTIONAL_ROR_ID="https://ror.org/012345678"
```

Der kan angives flere bootstrap-administratoradresser som en tilladelsesliste adskilt med kommaer:

```dotenv
INSTITUTIONAL_ADMIN_EMAILS="admin@example.org,second.admin@example.org"
```

Bootstrap-processen kræver bevidst, at to uafhængige betingelser er opfyldt:

1. e-mailadressen til Studio-kontoen skal stemme overens med en adresse på `INSTITUTIONAL_ADMIN_EMAILS`; og
2. Den samme Studio-konto skal allerede have en tilknyttet `OIDC`- eller `SAML`-identitet.

En lokal e-mail- og adgangskodekonto er ikke i sig selv tilstrækkelig til automatisk tildeling af `OWNER`-adgang. Dette forhindrer, at besiddelse af en lokalt konfigureret adgangskode betragtes som bevis på institutionel kontrol.

Når den autoriserede administrator logger ind, udfører Studio følgende sekvens på serversiden:

1. godkender Studio-kontoen;
2. kontrollerer den konfigurerede institutionelle bootstrap-politik;
3. opretter institutionsposten, hvis den endnu ikke findes;
4. opretter eller opgraderer det pågældende institutions medlemskab til »`OWNER`«;
5. knytter medlemskabet til den tilknyttede fødererede identitet; og
6. godkender kun sessionen som institutionsadministrator, efter at der er bekræftet et aktivt medlemskab af `ADMIN` eller `OWNER`.

Administratoren kan derefter benytte log-in-tilstanden **Institutionsadministrator** på Studio-login-siden. E-mail/adgangskode-godkendelse kan bruges til at starte denne log-in-proces, og konfigurerede OIDC-udbydere kan også benyttes, men backend-systemet foretager altid en kontrol af institutionsrollen, før den administrative kontekst tildeles.

Administratorrettigheder kan ikke tildeles ved selvregistrering via den offentlige registreringsformular. Yderligere administratorer bør udpeges via institutionens administrative arbejdsgang i stedet for ved at udvide den indledende tilladelsesliste på ubestemt tid.

Når du har ændret miljøvariablerne for implementering eller identitetsudbyder, skal du genstarte Studio-tjenesten »API«, så den nye serverkonfiguration indlæses. Kontroller den aktive implementeringsprofil via Studio-fodnoten eller status-endpointet for den ikke-hemmelige godkendelsesudbyder, inden du forsøger at logge ind via bootstrap.

## Isolering af legitimationsoplysninger

Videresendelse af legitimationsoplysninger foregår deterministisk og styres af `DEPLOYMENT_MODE`:

- `personal` bruger udelukkende `ORCID_CLIENT_ID`, `ORCID_CLIENT_SECRET` og `ORCID_REDIRECT_URI`.
- `institutional` bruger udelukkende legitimationsoplysningerne fra `INSTITUTIONAL_ORCID_*`.
- Institutionstilstanden skifter aldrig automatisk til brugeroplysninger, der tilhører »Personal« eller »OMI«.
- Hvis det aktive sæt af legitimationsoplysninger mangler, angives »ORCID« som ikke-konfigureret.
- Et delvist aktivt legitimationspar medfører, at valideringen af serverkonfigurationen mislykkes.
- Studio afslører aldrig nogen af klienthemmelighederne via sin statusAPI under kørsel.

ORCID-netværket vælges uafhængigt:

```dotenv
ORCID_ENVIRONMENT=sandbox
```

eller:

```dotenv
ORCID_ENVIRONMENT=production
```

Dette muliggør sikker institutionel testning i ORCID Sandbox, inden systemet tages i brug.

## Login via samlet konto

Studiet kan desuden understøtte konfigurerede OpenID Connect-udbydere fra Google, Microsoft samt generiske og institutionelle udbydere. Disse anvender autorisationskode-flowet med PKCE og serversidevalidering af tilstand, nonce, udsteder, målgruppe og signeringsnøgler.

En hidtil ukendt ekstern identitet kan oprette en Studio-konto, når udbyderen leverer de nødvendige verificerede identitetsoplysninger. En eksisterende Studio-konto bliver **ikke** automatisk knyttet blot fordi udbyderen angiver den samme e-mailadresse; sammenkædningen kræver en eksplicit handling fra en bruger, der er logget ind.

Ved institutionel administratorlogon kan der anvendes konfigurerede OIDC-udbydere, men serveren kontrollerer stadig, at kontoen har et aktivt medlemskab hos `ADMIN` eller `OWNER`, før en administrativ kontekst accepteres.

## ORCID sikkerhedsmodel

Implementeringsprofilen ændrer ikke godkendelsesreglen: Studio indsamler, overfører eller gemmer aldrig brugerens ORCID-adgangskode. Brugeren godkender sig direkte via ORCID, herunder tofaktorgodkendelse, når denne er aktiveret, og Studio modtager kun resultatet fra OAuth/OpenID Connect.

Den personlige og den institutionelle tilstand adskiller sig med hensyn til ejerskab og administration af adgangsoplysninger, men ikke med hensyn til håndtering af brugernavne og adgangskoder.

ORCID bruges bevidst ikke som legitimationsoplysninger for en institutionsadministrator. Det forbliver en personlig akademisk identifikator og kan indgå i arbejdsgange til verifikation af forfatteridentitet og kryptografisk signering.

## Institutionelle profiler og roller

Den nuværende Studio Identity-model adskiller permanente personlige kontodata fra organisationsspecifikke medlemskaber.

En konto kan have flere tilknytninger til institutioner med én standardtilknytning. Institutionens roller er:

- `MEMBER`;
- `ADMIN`;
- `OWNER`.

Organisationsnavn og »ROR«-identifikator er fælles institutionsdata. Afdeling, stilling, institutions-e-mail, tilknyttet institutionsidentitet og standardtilknytningsstatus hører under medlemskabet.

Endpunkter for institutionsadministratorer håndhæver disse roller på serversiden. Den sidste institutions`OWNER` er beskyttet mod utilsigtet sletning eller nedgradering.

Se [Institutional and Central Administration](./institutional-administration.md) for den fulde oversigt over rettigheder og API for modellen.

## OMIs centraladministration

Administration på tværs af institutioner udgør et særskilt privilegieniveau og kan aldrig udledes af medlemskab af en institution.

Den indledende centrale administration kan startes op med:

```dotenv
CENTRAL_ADMIN_EMAILS=
INSTITUTION_API_TOKEN_TTL_DAYS=365
```

Ligesom ved institutions-`OWNER` skal kontoen have en tilknyttet OIDC- eller SAML-identitet, før den kan blive en indledende central .

Centrale administratorer kan administrere institutioner, institutionsadministratorer, institutionsAPI-adgangsoplysninger og revisionslogfiler for administrationen. Disse rettigheder giver **ikke** adgang til manuskripter, anmeldelser eller redaktionelt indhold.

## Institutionsadministration API

Automatisering på institutionsniveau anvender dedikerede maskinadgangskoder i stedet for bruger-sessionstokens. Hver adgangskode tilhører nøjagtigt én institution, har eksplicit definerede anvendelsesområder, kan udløbe eller tilbagekaldes og gemmes udelukkende som en hash efter visning af engangstokenen.

De nuværende anvendelsesområder omfatter:

```text
institution:read
members:read
members:write
integrations:read
integrations:write
```

Maskinadgangskoder kan ikke ændre roller i `OWNER`.

## Synlighed under kørsel

Den aktive implementeringsprofil vises af Studio-backend og vises i applikationens sidefod som `OMI Studio · Personal` eller `OMI Studio · Institutional`. Når ORCID bruger Sandbox-netværket, vises der desuden `ORCID Sandbox` i sidefoden.

`GET /api/auth/providers` afslører også ikke-fortrolige metadata om implementering og udbyder. For eksempel:

```json
{
  "deployment": {
    "mode": "institutional",
    "label": "Institutional"
  },
  "providers": {
    "orcid": {
      "enabled": true,
      "environment": "sandbox",
      "credentialSource": "institutional",
      "apiType": "public"
    }
  }
}
```

## Designbegrænsninger

- Implementeringsmodus styres af serveren, ikke af browserens tilstand.
- Dokumentmodellen og de bærbare »OMI«-pakker forbliver identiske i begge tilstande.
- De samme Studio-binærfiler kan anvendes til både personlige og institutionelle installationer.
- ORCID Studio håndterer aldrig adgangskoder.
- Identiteterne i sandkasse- og produktionsORCIDen forbliver adskilt efter udsteder.
- Institutionelle rettigheder og rettigheder for centrale administratorer er adskilt fra rettigheder vedrørende manuskripter og redaktionelle rettigheder.
- Institutionsroller og centrale roller udgør separate autorisationsniveauer.
- Den indledende privilegerede bootstrap kræver både en konto, der er opført på tilladelseslisten, og en tilknyttet OIDC/SAML-identitet.
- Institutionens maskinAPI-adgangsoplysninger er begrænset til et bestemt anvendelsesområde og til en bestemt institution.
- I personlig tilstand kan autentificeringen muligvis foregå via OMI Identity uden at ændre den brugerrettede log-in-proces på ORCID.

## Status for implementeringen

Implementering af implementeringsspecifikke ORCID-adgangsoplysninger, fødereret OIDC-login, institutionsmedlemskaber, godkendelse af institutionsadministratorer, central administration, institutionsadministratorer med begrænset adgang API samt revisionshændelser vedrørende administration er implementeret i den aktuelle Studio-udviklingslinje.

Anvendelse i produktionsmiljøet afhænger stadig af installationsspecifikke migreringer af identitetsdatabasen, serverkonfiguration, udbyderregistrering samt den sædvanlige sikkerheds- og release-hærdning af implementeringen.
