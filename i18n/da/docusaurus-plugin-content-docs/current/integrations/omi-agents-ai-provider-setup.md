---
title: OMI Opsætning af AI-udbyder for agenter
sidebar_label: OMI Opsætning af AI-udbyder for agenter
---

# OMI Opsætning af AI-udbyder for agenter

OMI Agenter kan benytte en ekstern AI-udbyder til sproglige redigeringer, hjælp til metadata, sammenfatning og kontrol af kildehenvisninger. Studio gemmer udbyderAPIs-nøgler krypteret på Studio-serveren API og returnerer ikke nøglen til klienten, efter at den er blevet gemt.

Den nuværende Studio-brugergrænseflade indeholder forudindstillinger til:

- OpenAI
- Mistral AI
- Groq
- OpenRouter
- brugerdefinerede OpenAI-kompatible HTTPS-endepunkter

OpenAI bruger sin egen **Responses API**. De øvrige indbyggede udbydere og brugerdefinerede OpenAI-kompatible udbydere anvender en API i stil med **Chat Completions**.

## Opsætning af OpenAI

### 1. Opret en OpenAI-API-nøgle

Åbn indstillingerne for OpenAI Platform-nøglen (API) og opret en dedikeret hemmelig projektnøgle til OMI-agenter. Det anbefales at vælge et beskrivende navn, f.eks. `OMI-Agent`.

ChatGPT-abonnementer og fakturering via OpenAI-APIen er to separate ting. Et ChatGPT Plus-abonnement giver ikke i sig selv kredit til API, så fakturering via API skal konfigureres separat for den OpenAI-platformkonto eller det OpenAI-platformprojekt, der ejer nøglen.

Hvis du vil oprette en dedikeret OMI-nøgle, skal du bruge **Begrænsede** rettigheder i stedet for at give adgang til alle API-funktioner.

### 2. Begræns nøglen til svarene API

For den nuværende OpenAI-integration er den mindste krævede modelkapacitet:

- **Svar (`/v1/responses`) → Anmodning**

OMI-agenter kræver ikke følgende tilladelser, når OpenAI er valgt, og de kan forblive indstillet til **Ingen**:

- Automatiske forslag i chatten
- Tekst-til-tale
- Realtid
- Indlejringer
- Billeder
- Modereringer
- Assistenter
- Tråde
- Evalueringer
- Finjustering
- Filer
- Videoer
- Vector-butikker
- Spørgsmål
- Batch
- Tunneler
- Datasæt

`List models` er også valgfrit, da Studio sender det konfigurerede modelnavn direkte i stedet for at søge i modelkataloget.

Når man har ændret tilladelserne for en begrænset nøgle, kan det tage OpenAI et par minutter, før det nye anvendelsesområde træder i kraft. I denne overgangsperiode kan Studio midlertidigt returnere et HTTP 401-svar, der indeholder:

```text
Missing scopes: api.responses.write
```

Hvis nøglen er konfigureret korrekt, skal du vente et par minutter og køre forbindelsestesten igen, før du udskifter nøglen.

### 3. Konfigurer udbyderen i Studio

Åben i Studio:

**Manuskriptmenu → Integrationer → OMI-agenter → AI-udbyder**

Derefter:

1. Vælg **OpenAI** som udbyder.
2. Studio indstiller automatisk slutpunktet til `https://api.openai.com/v1/responses`.
3. Indtast det modelnavn, der skal bruges til OMI-agenter.
4. Indsæt OpenAI-nøglen »API« i feltet **»API«**.
5. Vælg **Gem og test AI-udbyder**.

Hemmeligheden sendes til Studio API og gemmes i krypteret form. Når den er gemt, viser brugergrænsefladen kun, at der findes en hemmelighed; den henter eller viser ikke den gemte nøgle. Der skal kun indtastes en ny nøgle, når den eksisterende hemmelighed skal udskiftes.

### 4. Kontroller forbindelsen

En vellykket live-test ændrer AI-udbyderens status til **Klar**. OMI Agenterne kontrollerer derefter automatisk deres egen status igen.

Hvis udbyderen er konfigureret, men ikke klar, viser Studio den sikre fejlmeddelelse, som udbyderen returnerer. Typiske eksempler er utilstrækkelige tilladelser til nøglen »API«, en utilgængelig model, fakturerings- eller kvotebegrænsninger eller en ugyldig udbyderkonfiguration.

Når udbyderstatus er »Klar«, skal du gemme og teste selve konfigurationen af »OMI-agenter«. Status for »OMI-agenter« bør derefter blive **Klar**.

## Andre forudindstillinger for udbydere

For Mistral AI, Groq og OpenRouter udfylder Studio automatisk udbyderens indbyggede »Chat Completions«-endpoint. Brugeren skal normalt kun angive et modelnavn og en »API«-nøgle.

Brugerdefinerede udbydere kan anvendes, når de stiller et HTTPS-endpoint til rådighed, der ikke kræver legitimationsoplysninger, og som er kompatibelt med anmodnings- og svarstrukturen i OpenAI Chat Completions. Studio tillader ikke udbyder-URL’er, der indeholder indlejrede legitimationsoplysninger eller mål i lokale/private netværk til agentudførelse.

## Sikkerhedsmodel

OMI Agenterne er udformet efter princippet om mindst mulig adgang og forslag, der kan gennemgås:

- udbyderens API-hemmeligheder krypteres, når de er gemt på Studio-serveren API;
- hemmelighederne returneres ikke til browseren eller den indbyggede klient efter lagring;
- eksterne leverandører modtager kun det indhold og den omfang, der er nødvendigt for den anmodede handling;
- Indhold, der er underlagt fortrolighedskontrol, kræver udtrykkelig tilladelse, før det kan sendes til en ekstern tjeneste;
- Direkte skrivning af manuskripter eller metadata kræver udvidede rettigheder og udtrykkelig bekræftelse fra brugeren;
- Standardarbejdsgangen genererer et forslag, som stadig skal godkendes af brugeren.

Ved produktions- eller institutionelle implementeringer bør man anvende separate udbydernøgler til OMI i stedet for at genbruge generelle administrative nøgler fra API. Begræns hver nøgle til det mindste sæt af udbyderfunktioner, der kræves af den valgte integration.

## Fejlfinding

### `Missing scopes: api.responses.write`

OpenAI-nøglen har endnu ikke tilladelse til at kalde Responses-API, eller ændringen af tilladelserne er endnu ikke trådt i kraft. Indstil **Responses (`/v1/responses`) → Request**, gem OpenAI-nøglens tilladelser, vent et par minutter, og prøv igen.

### HTTP 401

Kontroller nøglen »API«, projektmedlemskab, organisations-/projektrolle samt anvendelsesområderne for begrænsede nøgler. Studio inkluderer udbyderens sikre fejlmeddelelse i testresultatet, så problemer med tilladelser kan diagnosticeres.

### HTTP 400

Udbyderen accepterede den godkendte anmodning, men afviste indholdet af anmodningen. Kontroller den valgte model og udbyderkonfigurationen. For OpenAI skal du bruge OpenAI-forudindstillingen, så Studio bruger endpunktet »Responses« API i stedet for et »Chat Completions«-endpunkt.

### Konfigureret, men ikke klar

Det betyder, at indstillingerne for »OMI-agenter« findes, men at den underliggende AI-udbyder ikke har bestået sin test af live-forbindelsen. Løs først fejlen hos udbyderen, og test derefter »OMI-agenter« igen.
