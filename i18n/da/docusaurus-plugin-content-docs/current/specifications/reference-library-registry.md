---
id: reference-library-registry
title: OMI-SPEC-221 — Arkitektur for referencebibliotek og register
sidebar_label: Referencebibliotek og register
sidebar_position: 15
---

# OMI-SPEC-221 — Arkitektur for referencebibliotek og register

## Status

**Udkast**

Version: 0.1.0

**Gammel identifikator:** `OMI-SPEC-007`

---

## Formål

Denne specifikation beskriver, hvordan applikationer fra OMI finder, identificerer, indsamler, genbruger, synkroniserer og eksporterer bibliografiske poster for et manuskript.

Arkitekturen er udformet med udgangspunkt i en enkel arbejdsgang for forfattere:

1. tilføj et citeret værk én gang;
2. genbruge det i hele manuskriptet;
3. angiv det med præcise henvisninger;
4. opdatere sine metadata uden at skulle omskrive hver eneste henvisning;
5. eksportere manuskriptet og litteraturlisten til flere udgivelsessystemer.

---

## Arkitektoniske lag

```text
External bibliographic services and catalogues
                    ↓
          Resolution and reconciliation
                    ↓
       Manuscript Reference Library
                    ↓
           Citation Occurrences
                    ↓
       Rendering and publication exports
```

Lagene er bevidst adskilt.

- Eksterne tjenester hjælper med at finde og uddybe oplysningerne i optegnelserne.
- Referencebiblioteket indeholder de udvalgte poster fra manuskriptet.
- Henvisninger peger på biblioteksposter.
- Renderingsprogrammer genererer fodnoter, forfatter-dato-henvisninger, litteraturlister, links og strukturerede eksportfiler.

---

## Referencelibrary for manuskripter

Hvert manuskript kan indeholde eller henvise til et særskilt bibliotek med værker, der anvendes i det pågældende manuskript.

Biblioteket er ikke blot en formateret litteraturliste. Det er en samling af struktureret [Bibliographic Records](./bibliographic-record-model.md).

```json
{
  "referenceLibrary": {
    "records": [
      "bib_01JXYZ",
      "bib_01JXYA"
    ]
  }
}
```

En post kan allerede findes i biblioteket, før den citeres. Dette understøtter udarbejdelse af foreløbige læselister, indsamling af kilder, redaktionel verifikation og senere indsættelse.

---

## Tilføj én gang, brug det mange gange

Når en forfatter tilføjer et værk, opretter eller genbruger OMI en bibliografisk post.

Hver forekomst af en henvisning peger på den pågældende post:

```text
Reference Library
└── bib_01: Example Book
    ├── Citation 1: p. 12
    ├── Citation 2: pp. 55–57
    └── Citation 3: chapter 4
```

Dette undgår gentagen indtastning af metadata og sikrer en ensartet gengivelse.

---

## Søgning og import

Applikationer kan understøtte flere indtastningsmetoder:

- DOI opslag;
- ISBN-opslag;
- Import af URL'er;
- søgning efter titel eller bidragyder;
- opslag af identifikator for arkiv;
- søgning i bibliotekskataloget;
- indsæt formateret henvisning;
- import CSL JSON, BibTeX, BibLaTeX, RIS, EndNote XML eller andre understøttede formater;
- manuel indtastning;
- udvalg fra et andet manuskript eller en anden brugerbibliotek på OMI.

Importerede data skal normaliseres i henhold til den bibliografiske postmodel, samtidig med at oplysningerne om datakilden bevares.

---

## Eksterne kilder

En implementering af OMI kan sende forespørgsler til offentlige eller autoriserede tjenester, såsom:

- Crossref
- DataCite
- OpenAlex
- PubMed
- Europe PMC
- ORCID
- ROR
- bibliotekskataloger
- institutionelle arkiver
- faglige arkiver
- nationale bibliografier
- arkivkataloger

Arkitekturen kræver ikke én central udbyder.

OMI definerer grænseflader og datakrav, så implementeringer kan kombinere flere udbydere og fortsat fungere, selvom en udbyder er utilgængelig.

---

## Intet centralt bibliografisk monopol

OMI bør ikke oprette en obligatorisk central database, som hvert manuskript skal henvende sig til.

Et gyldigt manuskript fra OMI skal fortsat kunne anvendes, når:

- den oprindelige opslagstjeneste er offline;
- forfatteren skifter til en anden implementering af OMI;
- et forlag behandler manuskriptet i et isoleret miljø;
- en ekstern post ændres eller forsvinder.

Derfor skal manuskriptet eller dets filpakke indeholde de bibliografiske oplysninger, der er nødvendige for at fortolke og gengive dets henvisninger.

Eksterne tjenester er kilder til informationssøgning og -berigelse, ikke eneste autoritative kilder eller tilgængelighedspunkter.

---

## Arbejdsgang for løsning af problemer

En typisk rækkefølge af trin er:

```text
User input
   ↓
Identifier normalization
   ↓
Provider lookup
   ↓
Candidate records
   ↓
Reconciliation and deduplication
   ↓
User or automated selection
   ↓
Local bibliographic record
```

En resolver bør returnere:

- kandidatoplysninger;
- matchende identifikatorer;
- kilde og hentningstid;
- selvtillid;
- konflikter;
- adgangssteder;
- advarsler om tilbagekaldelser, rettelser eller usikker identitet, hvor sådanne foreligger.

---

## Forsoning

Forskellige udbydere kan levere forskellige metadata for det samme værk.

Ved afstemningen skal der tages højde for:

- permanente identifikatorer;
- normaliseret titel;
- bidragydernes navne og identifikatorer;
- udgivelsesår;
- containertitel;
- bind, nummer og sider;
- udgave og version;
- sprog;
- kildehenvisning og aktualitet.

Systemet bør ikke uden videre vælge en værdi, der er i konflikt med en anden, når denne konflikt kan påvirke den videnskabelige betydning.

Mulige resultater omfatter:

- præcis match;
- sandsynlig overensstemmelse;
- separat version;
- forholdet mellem oversættelse og udgave;
- uløst konflikt;
- separat post.

---

## Lokale og delte biblioteker

Implementeringer kan understøtte flere anvendelsesområder:

- manuskriptbibliotek;
- arbejdsområde eller projektbibliotek;
- privat bogsamling;
- institutionsbibliotek;
- offentlig delt samling.

Et manuskript skal angive, hvilke poster der indgår i dets autoritative sæt, selv når disse poster stammer fra et fælles bibliotek.

Ændringer af en delt post bør ikke automatisk medføre ændringer i et indsendt eller offentliggjort manuskript, medmindre der udtrykkeligt træffes en beslutning om versionering.

---

## Indsættelse af kildehenvisning

Redigeringsprogrammet bør give forfatterne mulighed for at søge i manuskriptbiblioteket og indsætte en henvisning uden at skulle indtaste bibliografiske metadata på ny.

Ved indsættelse af kildehenvisninger kan følgende oplysninger indsamles:

- lokatorens type og værdi;
- præfiks;
- endelse;
- citeringsform;
- udeladelse af forfatter eller dato, hvor det er relevant;
- henvisningens formål eller sammenhæng;
- note eller kommentar.

Det indsatte objekt følger »[Citation Model](./citation-model.md)«.

---

## Onlineadgang og forhåndsvisning

Når en bibliografisk post indeholder en onlineplacering, kan et program tilbyde:

- åbn landingssiden;
- Åbn fuldtekst;
- Vis resumé eller forhåndsvisning af metadata;
- vise lagerets tilgængelighed;
- vis licens- og adgangsvilkår;
- Indsæt indhold, når det er teknisk og juridisk tilladt.

OMI man skal skelne mellem:

- tilgængelighed af metadata;
- offentlig adgang til ressourcen;
- tilladelse til at indlejre;
- tilladelse til videreformidling.

En URL i sig selv indebærer ikke rettigheder til videreformidling.

---

## Referencelister og læselister

En biblioteksregistrering kan have en manuskriptspecifik status:

- citeret;
- uden kildeangivelse;
- yderligere læsning;
- udeladt fra den endelige litteraturliste;
- redaktionelt verificeret;
- skal bekræftes.

Publikationsprofilerne bestemmer, hvilke stater der vises i den genererede litteraturliste.

Dette er en hjælp inden for fagområder, hvor kildelister, arkivfortegnelser, lister over primærkilder eller afsnit med yderligere læsestof adskiller sig fra de traditionelle referencer.

---

## Forebyggelse af dubletter

Inden der tilføjes en ny post, bør implementeringen kontrollere manuskriptbiblioteket og de relevante delte biblioteker.

Et formodet duplikat bør vise den eksisterende post og forklare, på hvilket grundlag der er tale om et match.

Brugeren kan:

- genbruge den eksisterende post;
- sammenlæg poster;
- opbevar separate versioner;
- afvise det foreslåede match.

Ved sammenlægning skal identifikatorer, herkomstoplysninger, lokale rettelser og tidligere citatlinks bevares.

---

## Offline-drift

De centrale referencestyringsfunktioner skal fungere uden konstant netværksadgang.

Implementeringer, der understøtter offline-drift, bør muliggøre:

- manuel oprettelse af poster;
- indsættelse af henvisninger fra cachelagrede poster;
- visning af litteraturliste;
- behandling og validering i kø;
- efterfølgende synkronisering med eksterne kilder.

Netværksafhængige forbedringer må ikke gøre manuskriptet ulæseligt eller umuligt at citere.

---

## Synkronisering og ændringsstyring

Eksterne metadata kan ændre sig efter importen. Implementeringer af »OMI« kan tilbyde opdateringsfunktioner, men opdateringerne skal kunne gennemgås.

En sammenligning af opdateringer bør skelne mellem:

- nyligt tilgængelige felter;
- forskelle, der udelukkende vedrører formatering;
- korrigerede metadata;
- modstridende metadata;
- ændringer i version eller status;
- fjernede eller omdirigerede adgangssteder.

Godkendte opdateringer opretter en ny revision af posten. Offentliggjorte manuskriptversioner bevarer den bibliografiske status, der blev anvendt til den pågældende publikation.

---

## Validering

Validering af referencebiblioteket kan vise følgende:

- uafklarede poster;
- dobbeltregistreringer;
- manglende obligatoriske metadata;
- fejlformede identifikatorer;
- defekte eller omdirigerede links;
- citerede værker, der ikke findes i biblioteket;
- ubrugte poster;
- tilbagetrukne eller korrigerede mål;
- inkonsekvente datoer, bind, udgaver eller paginering;
- ressourcetyper, der ikke understøttes;
- metadatakonflikter mellem kilder.

Valideringsreglerne kan konfigureres efter publikations- og fagområdeprofiler.

---

## Import og eksport

Biblioteket bør understøtte interoperabel udveksling via formater som f.eks.:

- CSL JSON
- BibTeX
- Bib-LaTeX
- RIS
- JATS XML
- Crossref XML
- DataCite XML eller JSON
- MODS
- Dublin Core
- Zotero-kompatible formater

Eksporten bør bevare stabile OMI-identifikatorer, når målformatet tillader udvidelser.

Den komplette »OMI«-pakke bør indeholde tilstrækkelige bibliografiske metadata til at kunne gengive og validere henvisninger uden at skulle forespørge eksterne tjenester.

---

## API Ansvarsområder

En referencetjeneste API kan stille følgende funktioner til rådighed:

```text
search(query, providers)
resolve(identifier)
import(record, source)
reconcile(candidates)
addToLibrary(recordId, manuscriptId)
mergeRecords(sourceIds, targetId)
refresh(recordId)
validateLibrary(manuscriptId)
exportLibrary(manuscriptId, format)
```

Specifikationen definerer adfærds- og datakontrakter, ikke en bestemt påkrævet netværksprotokol eller et bestemt implementeringssprog.

---

## Privatliv og sikkerhed

Ved implementeringen skal man tage højde for, at referencesamlinger kan afsløre forskningsinteresser, endnu ikke offentliggjorte projekter, samarbejdspartnere og følsomme kilder.

Kravene omfatter:

- eksplicit kontrol over deling;
- adgang til arbejdsområdets biblioteker med mindst mulig rettighed;
- ingen pligt til offentliggørelse af dokumenter, der ikke er henvist til;
- tydelige oplysninger om udbydere og privatlivspolitikker;
- beskyttelse mod ondsindede importerede metadata;
- sikker håndtering af eksterne URL’er og indlejrede forhåndsvisninger.

---

## Eksempel på arbejdsgang

1. Forfatteren deltager i en »DOI«.
2. Resolveren forespørger de konfigurerede udbydere.
3. Kandidatmetadataene er afstemt.
4. Det valgte værk gemmes som »`bib_01JXYZ`« i manuskriptbiblioteket.
5. Forfatteren indsætter henvisninger til side 12 og side 45–47.
6. Redaktøren kontrollerer oplysningerne.
7. En publikationsprofil indeholder fodnoter og en litteraturliste.
8. Det godkendte manuskript eksporterer strukturerede referencer til JATS, XML og Crossref-metadata.

---

## Fremtidige opgaver

Fremtidige specifikationer kan omfatte:

- fødererede offentlige bibliografiske registre;
- underskrevne eller verificerbare metadata-påstande;
- udveksling af citatdiagrammer;
- ordforråd til angivelse af henvisningsformål;
- tjenester inden for autoritetskontrol;
- fælles kuratering af arkiver;
- herkomstvurdering;
- sammenhæng mellem de citerede påstande og de nøjagtige passager i kilden.

---

## Ændringshistorik

- **0.1.0** — Flyttet fra den midlertidige adresse `OMI-SPEC-007` til den officielle adresse `OMI-SPEC-221`.

---

## Resumé

Referencelibrary- og registerarkitekturen giver forfattere mulighed for at tilføje et værk én gang og derefter henvise til det på ensartet vis i hele manuskriptet.

Det kombinerer ekstern søgning med et bærbart bibliotek på manuskriptniveau, undgår afhængighed af en enkelt udbyder, understøtter arbejdsgange både online og offline, bevarer herkomstoplysninger og muliggør pålidelig eksport til videnskabelige publikationssystemer.
