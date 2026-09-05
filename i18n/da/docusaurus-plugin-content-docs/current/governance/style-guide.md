---
title: OMI Vejledning i udformning af specifikationer
sidebar_label: Vejledning i udformning af specifikationer
sidebar_position: 40
---

# Open Manuscript Initiative Vejledning i udformning af specifikationer

## Dokumentmetadata

| Felt | Værdi |
|---|---|
| Dokumenttype | Styringspolitik |
| Status | Udkast |
| Version | 0.1.0 |
| Normativt sprog | Engelsk |
| Gælder for | OMI specifikationer, profiler, registre, skemaer, eksempler og tilhørende teknisk dokumentation |

## 1. Formål

Denne vejledning beskriver de redaktionelle, strukturelle, terminologiske og tekniske retningslinjer, der anvendes af »Open Manuscript Initiative« (OMI).

Formålet er at sikre, at dokumenterne på OMI:

- præcis;
- internt konsistent;
- implementeringsuafhængig;
- tilgængelig for læsere fra forskellige fagområder;
- egnet til normativ teknisk anvendelse;
- stabil i forbindelse med versionsstyring og oversættelse;
- nem at gennemgå, teste, henvise til og vedligeholde.

Forfattere og redaktører af tekniske dokumenter på OMI SKAL følge denne vejledning, medmindre der i et dokument udtrykkeligt angives og begrundes en undtagelse.

## 2. Anvendelsesområde

Denne vejledning gælder for:

- dokumenter, der er angivet som »`OMI-SPEC-*`«;
- retningslinjer for ledelse;
- implementeringsprofiler;
- registre og kontrollerede ordlister;
- JSON Skemaer og skemadokumentation;
- overensstemmelseskrav;
- eksempeldokumenter og testudstyr;
- kortlægning af interoperabilitet;
- vejledninger om migration;
- officielle oversættelser.

Uformelle projektmeddelelser, vejledninger, blogindlæg og diskussioner i fællesskabet BØR følge terminologireglerne i denne vejledning, men det er ikke et krav, at man bruger den fulde specifikationsskabelon.

## 3. Normativt sprog

Nøgleordene **SKAL**, **MÅ IKKE**, **KRÆVES**, **SKAL**, **MÅ IKKE**, **BØR**, **BØR IKKE**, **ANBEFALES**, **ANBEFALES IKKE**, **KAN** og **VALGFRIT** skal fortolkes som normative krav, når – og kun når – de er skrevet med store bogstaver.

OMI Dokumenter BØR foretrække følgende delmængde:

- **SKAL** og **MÅ IKKE** i forbindelse med krav til fuldstændig interoperabilitet eller overensstemmelse;
- **BØR** og **BØR IKKE** for stærke anbefalinger med berettigede undtagelser;
- **MAY** for tilladt valgfri adfærd;
- **ANBEFALET**, når prosateksten lyder mere naturligt end **BØR**;
- **VALGFRIT**, når der er tale om en valgfri komponent eller et valgfrit felt og ikke om implementeringsadfærd.

### 3.1 Kravstyrke

Et **ABSOLUT** krav:

- er nødvendigt for overensstemmelse, interoperabilitet, integritet eller sikkerhed;
- kan testes eller vurderes objektivt;
- udtrykker ikke blot en redaktionel præference.

Et **BØR**-krav:

- definerer den forventede adfærd;
- tillader kun undtagelser, når man er klar over konsekvenserne;
- DET BØR beskrives, hvor det er praktisk muligt.

En **MAY**-erklæring:

- giver tilladelse;
- betyder ikke, at der gives en anbefaling;
- Må IKKE bruges til at beskrive usikker adfærd.

### 3.2 Undgå tvetydige ord i kravformuleringer

I normative dokumenter BØR man undgå at anvende følgende ord uden yderligere præcisering:

- normalt;
- generelt;
- som regel;
- hensigtsmæssigt;
- rimelig;
- tilstrækkelig;
- enkelt;
- indlysende;
- brugervenlig;
- effektiv;
- sikker;
- standard.

Når sådanne udtryk er nødvendige, BØR dokumentet definere målbare kriterier eller redegøre for beslutningskonteksten.

Dårligt:

> Implementeringer bør gemme identifikatorer på en passende måde.

Bedre:

> Implementeringer SKAL bevare identifikatorværdierne uden at ændre store og små bogstaver, tegnsætning eller procentkodning, medmindre identifikatorspecifikationen udtrykkeligt definerer en kanonisk transformation.

### 3.3 Ét krav pr. sætning

Normative sætninger BØR udtrykke ét krav, der kan efterprøves uafhængigt.

Dårligt:

> En implementering SKAL validere posten, vise fejl og bevare ukendte egenskaber.

Bedre:

> En implementering SKAL validere posten i forhold til det deklarerede skema.
>
> En implementering SKAL rapportere valideringsfejl.
>
> En implementering SKAL bevare ukendte udvidelsesegenskaber under en tabsløs rundtur.

### 3.4 Kravidentifikatorer

Specifikationer med status **Kandidat til gennemgang** eller højere BØR tildele stabile identifikatorer til normative krav.

Det anbefalede format er:

```text
REQ-<SPEC>-<NNN>
```

Eksempel:

```text
REQ-DOC-001
REQ-CIT-014
REQ-VAL-023
```

Kravidentifikatorer SKAL forblive uændrede inden for en hovedversion af specifikationen. Hvis et krav fjernes, MÅ dets identifikator IKKE tildeles et andet krav.

## 4. Sprog og stemme

### 4.1 Normativt sprog

Det officielle sprog på OMI er engelsk.

Engelske specifikationer BØR være skrevet i et teknisk sprog, der kan forstås internationalt. Forfattere BØR undgå idiomer, humor, kulturspecifikke metaforer og unødvendige retoriske udtryk.

### 4.2 Stemme

Specifikationer BØR formuleres som direkte, deklarative sætninger.

Foretrukket:

> En forekomst af en henvisning henviser til én biblioteksoptegnelse.

Undgå:

> Det skal bemærkes, at en forekomst af en henvisning generelt forventes at henvise til én biblioteksoptegnelse.

Den aktive form foretrækkes, når den tydeliggør, hvem der bærer ansvaret:

> Valideringsværktøjet rapporterer om den ejendom, der ikke understøttes.

Passiv kan ANVENDES, når handlingspersonen er irrelevant:

> Egenskaben udelades i den kanoniske udskrift.

### 4.3 Tempus

Normativ adfærd BØR formuleres i nutid.

Foretrukket:

> Parseren afviser en ugyldig identifikator.

Undgå:

> Parseren afviser en ugyldig identifikator.

### 4.4 Person

I specifikationer BØR man undgå at henvende sig til læseren med »du«. Brug i stedet den relevante rolle eller komponent:

- forfatter;
- redaktør;
- gennemførelse;
- processor;
- validator;
- renderer;
- klient;
- server;
- arkiv.

### 4.5 Inkluderende og neutralt sprog

OMI Dokumenterne SKAL indeholde et respektfuldt, inkluderende og rollebaseret sprog. Kønsbestemte pronomen BØR undgås, når personens køn er irrelevant.

Eksempler og identitetsmodeller MÅ IKKE bygge på stereotyper eller antyde, at et bestemt sprog, en bestemt region, en bestemt fagretning, en bestemt institutionstype eller en bestemt udgivelsesmodel er standarden inden for videnskaben.

## 5. Dokumentkategorier

Hvert teknisk dokument på OMI SKAL angive sin kategori.

### 5.1 Specifikation

En specifikation definerer normative strukturer, adfærdsmønstre, begrænsninger eller krav til interoperabilitet.

Identifikatorform:

```text
OMI-SPEC-NNN
```

### 5.2 Profil

En profil udvælger, afgrænser eller udvider en eller flere specifikationer for et bestemt fællesskab, fagområde, arbejdsforløb eller publikationssammenhæng.

Identifikatorform:

```text
OMI-PROFILE-NNN
```

En profil MÅ IKKE i det skjulte være i strid med den specifikation, den beskriver. Enhver bevidst uoverensstemmelse kræver en separat specifikationsversion eller en udtrykkeligt ikke-overensstemmende udvidelse.

### 5.3 Registret

Et register definerer kontrollerede identifikatorer, værdier, medietyper, roller, funktioner eller udvidelsespunkter.

Identifikatorform:

```text
OMI-REG-NNN
```

Registreringspostene SKAL have stabile identifikatorer og dokumenterede livscyklustilstande.

### 5.4 Skema

Et skema er en maskinlæsbar formalisering af en del af datamodellen »OMI«.

Identifikatorform:

```text
OMI-SCHEMA-NNN
```

Et skema-dokument SKAL angive, hvilken version af prosaspecifikationen det implementerer.

### 5.5 Eksempel

Et officielt eksempel illustrerer indhold, der overholder standarden, eller indhold, der bevidst ikke overholder standarden.

Identifikatorform:

```text
OMI-EXAMPLE-NNN
```

Eksemplerne SKAL angive, om de er:

- normativ;
- informativ;
- gyldig;
- ugyldig;
- minimal;
- omfattende;
- profilsspecifik.

### 5.6 Dokument om ledelsesforhold

Et styringsdokument fastlægger projektprocessen, beføjelser, livscyklus, versionsstyring, redaktionelle retningslinjer eller regler for bidrag.

Styringsdokumenter tildeles ikke identifikatorer fra »`OMI-SPEC`«, medmindre de direkte fastlægger, hvordan implementeringen skal overholde standarden.

## 6. Regler for filnavne og identifikatorer

### 6.1 Filnavne

Markdown Filnavne SKAL skrives med små bogstaver og kebab-stil.

Korrekt:

```text
bibliographic-record-model.md
reference-library-architecture.md
specification-lifecycle.md
```

Forkert:

```text
BibliographicRecordModel.md
reference_library.md
Reference Library.md
```

### 6.2 Permanente identifikatorer

En permanent dokumentidentifikator MÅ IKKE ændres, når:

- titlen ændres;
- filen flyttes;
- Ændringer i kategorierne i sidepanelet;
- dokumentet er oversat;
- der udgives en ny underversion eller patch-version.

### 6.3 Overskrifter og ankerpunkter

Overskriftsteksten BØR forblive uændret efter offentliggørelsen, da de genererede ankertekster muligvis anvendes eksternt.

Når en overskrift skal ændres, BØR webstedet bevare en omdirigering eller et eksplicit gammelt anker, hvor dette understøttes.

### 6.4 Navne på ejendomme

Maskinlæsbare egenskabsnavne SKAL skrives med »lower camel case«, medmindre en anden kortlægningsstandard kræver en anden konvention.

Eksempler:

```json
{
  "documentLanguage": "en",
  "bibliographicTargetId": "ref-001",
  "createdAt": "2026-08-06T16:00:00Z"
}
```

Booleske egenskaber BØR have bekræftende navne, der beskriver tilstanden »`true`«.

Foretrukket:

```text
isArchived
preserveUnknownProperties
requiresReview
```

Undgå:

```text
notArchived
noPreservation
skipNoReview
```

### 6.5 Opregningsværdier

Opregningsværdier BØR skrives med små bogstaver i »kebab-case«:

```text
journal-article
co-author
review-candidate
```

Når en opregningsværdi først er offentliggjort i en stabil specifikation, MÅ den IKKE omdøbes inden for samme hovedversion.

## 7. Nødvendige metadata for dokumenter

Hver specifikation SKAL indledes med menneskeligt læsbare metadata, der som minimum indeholder:

| Felt | Krav |
|---|---|
| Identifikator | Permanent OMI-identifikator |
| Titel | Officiel titel |
| Version | Dokumentversion |
| Status | Livscyklusfase |
| Dokumenttype | Normativ, informativ eller blandet |
| Redaktører | Ansvarlige redaktører eller redaktionsgruppe |
| Senest opdateret | Dato ifølge ISO 8601 |
| Erstatter | Tidligere dokument, hvor det er relevant |
| Erstattet af | Efterfølger, hvis relevant |
| Afhænger af | Normative afhængigheder |
| Anvendes af | Kendte afhængige specifikationer |
| Status for implementering | Oversigt eller link til implementeringsoversigt |

Docusaurus-forordet BØR udelukkende indeholde de publikationsmetadata, som webstedet har brug for, såsom titel, sidebjælke-etiket og rækkefølge. Normative metadata SKAL forblive synlige i den viste dokumenttekst.

## 8. Standardstruktur for specifikationer

En normativ OMI-specifikation BØR have følgende struktur. Afsnit KAN udelades, hvis de ikke er relevante.

### 8.1 Resumé

En kortfattet beskrivelse af, hvad specifikationen omfatter, og hvorfor den findes.

Resuméet BØR IKKE indeholde normative krav.

### 8.2 Dette dokuments status

I dette afsnit står der:

- status i livscyklussen;
- forventninger til stabilitet;
- om påstande om gennemførelse er relevante;
- om der fortsat er mulighed for uforenelige ændringer;
- hvor man drøfter problemer og ændringer.

### 8.3 Overensstemmelse

I dette afsnit defineres:

- klasser af overensstemmende implementeringer;
- obligatoriske funktioner;
- valgfrie funktioner;
- profilforhold;
- hvordan overensstemmelse testes eller erklæres.

### 8.4 Anvendelsesområde

Afsnittet »Omfang« beskriver, hvad dokumentet omhandler.

Den BØR også indeholde et udtrykkeligt underafsnit med titlen **Uden for anvendelsesområdet**, hvor der er risiko for uklarhed om afgrænsningen.

### 8.5 Terminologi

Dokumentet SKAL indeholde definitioner af fagudtryk, der ikke allerede er defineret i det centrale terminologidokument fra OMI.

Definitioner BØR være kortfattede og ikke-cirkulære.

### 8.6 Designprincipper

Dette informative afsnit beskriver de arkitektoniske principper, der ligger til grund for specifikationen.

Designprincipper må IKKE erstatte testbare normative krav.

### 8.7 Datamodel eller behandlingsmodel

Hovedafsnittet om modellen beskriver enheder, egenskaber, relationer, tilstande og behandlingsadfærd.

Prosaspecifikationen forbliver gældende, medmindre det i dokumentet udtrykkeligt angives, at et maskinlæsbart artefakt er gældende for en defineret delmængde.

### 8.8 Validering og fejlhåndtering

Dokumentet BØR indeholde følgende definitioner:

- ugyldig indtastning;
- ikke-understøttet indtastning;
- advarsler;
- fejl, der kan afhjælpes, og fejl, der ikke kan afhjælpes;
- krav til fejlrapportering;
- bevaringsadfærd.

### 8.9 Udvidelsesmuligheder

Specifikationen BØR angive udvidelsespunkter og definere, hvordan ukendte udvidelser håndteres.

Udvidelser MÅ IKKE omdefinere betydningen af kerneegenskaber.

### 8.10 Samvirkeevne

Dette afsnit beskriver tilknytninger til eksterne standarder og skelner mellem:

- tabsfrie afbildninger;
- betinget tabsfrie afbildninger;
- tabsholdige afbildninger;
- konstruktioner, der ikke understøttes.

### 8.11 Overvejelser vedrørende sikkerhed, privatliv og integritet

Hver normativ specifikation SKAL tage højde for, om den medfører risici i forbindelse med:

- aktivt indhold;
- hentning af eksterne ressourcer;
- forfalskning af identifikatorer;
- metadata, der ikke kan betragtes som pålidelige;
- personoplysninger;
- skjulte kommentarer;
- adgangskontrol;
- integriteten af signaturen eller herkomsten;
- tjenesteforstyrrelse;
- usikker gengivelse.

En erklæring om, at der ikke er kendt nogen specifikke hensyn, kan kun accepteres efter en udtrykkelig gennemgang.

### 8.12 Overvejelser vedrørende tilgængelighed

Specifikationer, der har indflydelse på den præsentation eller interaktion, som brugeren oplever, BØR angive tilgængelighedskrav eller forventede tilknytninger.

### 8.13 Overvejelser vedrørende internationalisering

Specifikationer, der vedrører tekst, navne, datoer, sortering, identifikatorer eller gengivelse, SKAL tage højde for:

- Unicode;
- sprogmærker;
- tekst i begge retninger;
- lokaliserede navne;
- skriptvariant;
- translitteration;
- lokale-neutrale maskinværdier;
- tidszoner og kalendervisning.

### 8.14 Eksempler

Eksempler BØR placeres tæt på den regel, de illustrerer. Store, komplette eksempler BØR opbevares som separate, validerede filer og linkes til fra specifikationen.

### 8.15 Litteraturliste

Referencerne SKAL opdeles i:

- **Normative henvisninger**: nødvendige for at gennemføre eller fortolke specifikationen;
- **Informative referencer**: baggrundsmateriale eller relateret materiale.

### 8.16 Ændringshistorik

En versionshistorik BØR give et overblik over væsentlige ændringer. Git-historikken alene er ikke en tilstrækkelig erstatning for en offentliggjort ændringshistorik.

## 9. Regler for terminologi

### 9.1 Centrale definitioner

Begreber med tværspecifikationsbetydning SKAL defineres i det centrale terminologidokument »OMI«.

En specifikation KAN indsnævre et begreb til sit eget anvendelsesområde, men MÅ IKKE uden videre tildele det en modstridende betydning.

### 9.2 Foretrukne nøglebegreber

Følgende skelnen SKAL bevares.

#### Manuskript

Et videnskabeligt værk, der fremstilles som et redigerbart, struktureret intellektuelt objekt gennem hele dets livscyklus.

#### Dokument

En konkret struktureret fremstilling eller en samling af indhold. Et manuskript kan bestå af flere dokumentfremstillinger eller versioner.

#### Videnskabeligt objekt

En identificerbar semantisk enhed inden for eller knyttet til et manuskript.

#### Bibliografisk post

En struktureret beskrivelse af en citeret eller citerbar kilde, uafhængigt af en bestemt forekomst af citatet.

#### Referencebibliotek

En samling af bibliografiske poster på manuskriptniveau, der er udvalgt med henblik på mulig eller faktisk citering.

#### Forekomst af citater

En henvisning fra et bestemt sted i et manuskript til en post i et referencebibliotek, eventuelt med angivelse af lokalisatorer, præfikser, suffikser og formålet med henvisningen.

#### Gengivet kildehenvisning

Præsentationstekst genereret ud fra en forekomst i en henvisning, en bibliografisk post og en gengivelsesprofil.

#### Anker

En stabil eller identificerbar henvisning til en placering, et område, et objekt eller en tilstand inden for videnskabeligt indhold.

#### Kommentar

Et videnskabeligt objekt, der knytter en samling af kommentarer eller strukturerede oplysninger til et eller flere mål.

#### Profil

Et defineret sæt af begrænsninger, standardindstillinger eller udvidelser, der anvendes på en eller flere specifikationer fra OMI til et bestemt formål.

### 9.3 Store bogstaver

Generiske begreber skrives med små bogstaver:

> et manuskript, en forekomst af en henvisning, en profil

Officielle dokument- og komponentnavne skrives med store bogstaver i begyndelsen af hvert ord:

> Citationsmodel, Open Manuscript Studio, OMI Specifikationsregister

Egenskabsnavne og bogstavelige værdier SKAL formateres som kode:

> Egenskaben »`documentLanguage`« indeholder et BCP 47-sprogmærke.

### 9.4 Forkortelser

En forkortelse SKAL uddybes ved den første egentlige anvendelse, medmindre den er alment kendt blandt den tiltænkte faglige målgruppe.

Foretrukket:

> Citation Style Language (CSL)

I efterfølgende anvendelser KAN der anvendes `CSL`.

Forkortelser BØR IKKE sættes i flertal ved hjælp af en apostrof.

Korrekt:

> DOIs, APIs, URL'er

## 10. Præsentation af datamodellen

### 10.1 Beskrivelser af enheder

Hver enhed BØR definere:

- formål;
- identifikator;
- livscyklus;
- nødvendige egenskaber;
- valgfrie egenskaber;
- relationer;
- invariabler;
- udvidelsespunkter.

### 10.2 Egenskabstabeller

Egenskabstabeller BØR følge denne rækkefølge:

| Egenskab | Type | Påkrævet | Kardinalitet | Beskrivelse |
|---|---|---:|---:|---|

Yderligere kolonner KAN omfatte:

- standard;
- begrænsninger;
- kilde;
- fortrolighedsklassificering;
- versionen blev introduceret.

### 10.3 Kardinalitet

Kardinalitet BØR angives konsekvent:

- `0..1` — valgfri enkeltværdi;
- `1` — præcis én værdi;
- `0..*` — nul eller flere værdier;
- `1..*` — en eller flere værdier.

### 10.4 Null-værdier, manglende værdier og tomme værdier

En specifikation SKAL, hvor det er relevant, skelne mellem:

- en manglende egenskab;
- en egenskab med `null`;
- en tom streng;
- en tom matrix;
- en ukendt værdi;
- en værdi, der bevidst er udeladt;
- en værdi, der ikke er relevant.

Disse tilstande MÅ IKKE betragtes som ækvivalente, medmindre det udtrykkeligt fremgår af specifikationen.

### 10.5 Datoer og tidspunkter

Maskinlæsbare datoer og klokkeslæt SKAL angives i en form, der er kompatibel med ISO 8601, som defineret i det relevante skema.

En tidsangivelse BØR indeholde en UTC-forskydning. UTC-værdier BØR angives som `Z`.

Eksempel:

```text
2026-08-06T16:10:15Z
```

En dato uden klokkeslæt MÅ IKKE uden videre fortolkes som et bestemt tidspunkt.

### 10.6 Sprogkoder

Ved maskinlæsbar sprogidentifikation SKAL der anvendes BCP 47-sprogkoder, medmindre en kortlægningsstandard foreskriver en anden repræsentation.

Eksempler:

```text
en
hu
de
zh-Hant
sr-Latn
```

## 11. Eksempler og kodeblokke

### 11.1 Gyldighed

Kodeeksempler, der angiver overensstemmelse, SKAL være syntaktisk korrekte og BØR valideres automatisk.

Forkortede eksempler SKAL indeholde en synlig angivelse, f.eks. en kommentar eller tre prikker, og MÅ IKKE fremstilles som fuldstændige, gyldige dokumenter.

### 11.2 JSON

JSON Eksempler SKAL:

- Brug dobbelte anførselstegn;
- Brug indrykning med to mellemrum;
- Undgå kommentarer i blokke med betegnelsen »`json`«;
- Brug faste eksempelidentifikatorer;
- undgå at angive reelle personoplysninger;
- Brug gyldig Unicode.

Eksempel:

```json
{
  "id": "citation-001",
  "targetId": "reference-001",
  "locator": {
    "type": "page",
    "value": "24–31"
  }
}
```

### 11.3 XML

XML Eksempler SKAL angive navnerum, når navnerumssemantikken er af betydning. Præfikser, der anvendes i eksemplerne, BØR være ensartede i hele specifikationssættet.

### 11.4 URL'er og identifikatorer

I eksemplerne BØR der så vidt muligt anvendes reserverede eller tydeligt fiktive værdier.

Brug ikke identifikatorer, der kan forveksles med ægte tildelte akademiske identifikatorer, medmindre eksemplet udtrykkeligt henviser til et konkret værk, og henvisningen er korrekt.

### 11.5 Positive og negative eksempler

Specifikationerne BØR omfatte:

- mindst ét gyldigt minimalt eksempel;
- mindst ét repræsentativt gyldigt eksempel;
- ugyldige eksempler på vigtige valideringsregler;
- Eksempler på migrering ved ændring af eksisterende adfærd.

I tilfælde af ugyldige eksempler SKAL det fremgå, hvorfor de er ugyldige.

### 11.6 Eksempler på etiketter

Eksempler BØR mærkes og henvises til på en ensartet måde:

```text
Example 1 — Minimal citation occurrence
Example 2 — Citation with a page locator
Example 3 — Invalid unresolved target
```

## 12. Figurer og diagrammer

### 12.1 Formål

Et diagram BØR tydeliggøre sammenhænge, tilstandsovergange, arkitektur eller databehandling, som ville være vanskelige at forstå ud fra selve teksten alene.

Et diagram MÅ IKKE være den eneste normative fremstilling af et krav.

### 12.2 Tilgængelighed

Ethvert meningsfuldt tal SKAL indeholde:

- alternativ tekst;
- en billedtekst;
- en tilsvarende forklaring i prosa.

Oplysningerne MÅ IKKE udelukkende baseres på farve.

### 12.3 Kilde til diagrammet

Redigerbare kildekoder til vigtige diagrammer BØR gemmes i arkivet sammen med de eksporterede filer.

### 12.4 Notation

En specifikation SKAL forklare notation, der ikke er indlysende. UML-lignende diagrammer MÅ IKKE antyde formel UML-semantik, medmindre dokumentet udtrykkeligt anvender denne.

## 13. Tabeller og lister

Tabeller BØR bruges til strukturerede sammenligninger og ikke som erstatning for lange prosatekster.

En tabel SKAL have tydelige kolonneoverskrifter. Cellerne BØR indeholde kortfattede værdier.

Punktlister er velegnede til uordnede sæt. Nummererede lister BØR kun bruges, når rækkefølgen eller trinforløbet er af betydning.

Indlejrede lister BØR begrænses for at bevare læsbarheden og oversættelseskvaliteten.

## 14. Henvisninger

### 14.1 Interne henvisninger

Normative henvisninger til et andet dokument fra OMI SKAL angive dets permanente identifikator og BØR indeholde dets titel.

Foretrukket:

> Se OMI-SPEC-006, *Model for bibliografiske poster*.

Et relativt Markdown-link KAN ledsage identifikatoren i kilden.

### 14.2 Henvisninger til afsnit

I henvisninger BØR man angive afsnitstitlen i stedet for udelukkende at henvise til et afsnitnummer, da numrene kan ændre sig under udarbejdelsen.

Foretrukket:

> Se afsnittet »Identifikatornormalisering« i OMI-SPEC-006.

### 14.3 Eksterne henvisninger

Eksterne normative henvisninger BØR pege på stabile, autoritative kilder. En specifikation BØR angive den version eller udgave, der henvises til, når fortolkningen kan variere fra version til version.

### 14.4 Forbindelsens holdbarhed

I dokumenter BØR man foretrække permanente identifikatorer og kanoniske dokumentations-URL’er frem for midlertidige projektsider.

## 15. Sammenholdelse af skema og prosa

### 15.1 Kompetence

Hver skema-baseret specifikation SKAL angive autoritetsforholdet mellem tekst og skema.

Anbefalet regel:

- Prosa definerer semantik og behandlingsadfærd;
- Skemaet definerer strukturelle begrænsninger, der kan kontrolleres maskinelt;
- En konflikt er en fejl i specifikationen, der SKAL rettes;
- Implementeringer MÅ IKKE opfinde semantik udelukkende ud fra skemaets mekanismer.

### 15.2 Skema-beskrivelser

Beskrivelser af skemaegenskaber BØR anvende samme terminologi som den tekstbaserede specifikation og BØR, hvor værktøjerne tillader det, indeholde et link tilbage til det relevante krav eller afsnit.

### 15.3 Standardindstillinger

En skema-standardværdi MÅ IKKE betragtes som en instruks om at indsætte en værdi, medmindre det i den tekstbaserede specifikation udtrykkeligt er angivet, at behandlingen skal foregå på denne måde.

### 15.4 Yderligere egenskaber

I specifikationerne SKAL det udtrykkeligt angives, om ukendte egenskaber er:

- afvist;
- ignoreret;
- bevaret;
- udsat for udvidelser;
- er kun tilladt i deklarerede navnerum.

## 16. Skrivning af overensstemmelsesrapporter

### 16.1 Overensstemmelsesklasser

En specifikation BØR definere navngivne overensstemmelsesklasser, når ikke alle implementeringer udfylder den samme rolle.

Eksempler:

- en producent, der overholder kravene;
- en forbruger, der overholder kravene;
- valideringsværktøj til overensstemmelse;
- kompatibel renderer;
- kompatibel editor;
- en kompatibel konserveringsprocessor.

### 16.2 Observerbart adfærd

Overensstemmelseskrav SKAL baseres på observerbare indgangsdata, udgangsdata, tilstand eller dokumenterede egenskaber.

Undgå krav vedrørende den interne arkitektur, medmindre denne arkitektur er nødvendig af hensyn til interoperabilitet eller sikkerhed.

Dårligt:

> Implementeringer SKAL anvende en relationsdatabase.

Bedre:

> Implementeringer SKAL bevare stabile objektidentifikatorer ved gemme- og genindlæsningsoperationer.

### 16.3 Valgfrie funktioner

En valgfri funktion KAN udelades. Hvis den implementeres, SKAL den opfylde alle de krav, der er fastsat for den pågældende funktion.

### 16.4 Overensstemmelseserklæringer

En overensstemmelseserklæring BØR indeholde:

- implementeringsnavn og -version;
- specifikationsidentifikator og den nøjagtige version;
- understøttet overensstemmelsesklasse;
- understøttede profiler;
- kendte begrænsninger;
- test-suite-version, hvor den er tilgængelig.

## 17. Terminologi vedrørende fejl og advarsler

OMI Dokumenterne BØR anvende disse udtryk konsekvent.

### Fejl

En tilstand, der strider mod et normativt krav eller forhindrer, at den anmodede handling gennemføres korrekt.

### Advarsel

En tilstand, der er tilladt eller kan gendannes, men som kan medføre tab af oplysninger, nedsat interoperabilitet eller uventede resultater.

### Funktion, der ikke understøttes

En anerkendt funktion, som en implementering ikke understøtter.

### Ukendt funktion

En funktion eller udvidelse, som implementeringen ikke genkender.

### Ugyldig værdi

En værdi, der ikke overholder begrænsningerne vedrørende syntaks, type, værdiinterval, kardinalitet eller semantik.

### Uafklaret henvisning

En reference, hvis mål ikke kan identificeres eller tilgås i den aktuelle behandlingskontekst.

I specifikationerne BØR det angives, om hver enkelt tilstand kræver afvisning, genopretning, bevarelse eller underretning af brugeren.

## 18. Interoperabilitetskortlægninger

Et kortlægningsdokument SKAL skelne mellem:

- kildemodel;
- målmodel;
- kortlægningsretning;
- kortlægning af forudsætninger;
- bevarede oplysninger;
- bearbejdet information;
- udeladte oplysninger;
- genererede oplysninger;
- tvetydighed;
- reversibilitet.

I kortlægningstabeller BØR der anvendes eksplicitte resultater, såsom:

```text
lossless
conditionally lossless
lossy
unsupported
implementation-defined
```

Ordet »kompatibel« MÅ IKKE anvendes uden at angive kompatibilitetsdimensionen.

## 19. Tekst om udfasning og erstatning

En udfaset funktion er stadig defineret, men anbefales ikke længere til nyt indhold eller nye implementeringer.

Meddelelser om udfasning SKAL indeholde følgende:

- den udfasede funktion;
- den version, hvor den blev udfaset;
- årsagen;
- erstatningsvaren, når den er tilgængelig;
- vejledning om migration;
- den tidligste version, hvor sletningen kan finde sted.

Et erstattet dokument SKAL fortsat være tilgængeligt og SKAL angive, hvilket dokument der erstatter det.

Normativ tekst MÅ IKKE fjernes uden varsel fra offentliggjorte stabile versioner.

## 20. Klassificering af redaktionelle ændringer

Hver pull-anmodning, der vedrører en specifikation, BØR klassificere ændringerne som en eller flere af følgende:

- redaktionel præcisering;
- normativ præcisering;
- kompatibel normativ tilføjelse;
- uforenelig normativ ændring;
- eksempel på rettelse;
- korrektion af skemaet;
- sikkerhedskorrektion;
- opdatering af oversættelsen;
- udfasning;
- erstatning.

Klassificeringen BØR være i overensstemmelse med »OMI«-versionspolitikken.

## 21. Retningslinjer for oversættelse

### 21.1 Normativ kilde

Medmindre andet udtrykkeligt er angivet, er den engelske specifikation normativ, mens oversættelserne er vejledende.

### 21.2 Bindning til kildeversion

Hver officiel oversættelse SKAL indeholde følgende oplysninger:

- kildedokumentets identifikator;
- den nøjagtige kildeversion;
- oversættelsesversion;
- oversættelsesstatus;
- Dato for sidste synkronisering.

### 21.3 Tokens, der ikke kan oversættes

Følgende SKAL forblive uændret, medmindre en specifikation fastlægger en lokaliseret betegnelse:

- egenskabsnavne;
- opregningsværdier;
- kravidentifikatorer;
- skemaidentifikatorer;
- mediatyper;
- navneområde-URI'er;
- kode;
- bogstavelige protokoltoken.

### 21.4 Ensartet terminologi

Officielle oversættelser SKAL anvende en godkendt sprogspecifik terminologiliste. Oversættere BØR bevare begrebsmæssige skel, selv når de i dagligsproget har tendens til at smelte sammen.

### 21.5 Normative nøgleord

Normative nøgleord med store bogstaver BØR forblive på engelsk i officielle oversættelser, ledsaget af en oversat forklaring, hvor det er relevant. Dette forhindrer tvetydigheder i juridisk eller teknisk fortolkning.

## 22. AI-støttet redigering

AI-baserede værktøjer KAN anvendes til at understøtte udarbejdelse, redigering, oversættelse, terminologikontrol, generering af eksempler eller kontrol af konsistens.

### 22.1 Menneskets ansvar

Hvert offentliggjort dokument på OMI SKAL have en redaktør eller en redaktionsgruppe, der er ansvarlig for:

- faktuel nøjagtighed;
- normativ korrekthed;
- overensstemmelse med gældende specifikationer;
- overholdelse af reglerne om intellektuel ejendomsret;
- gennemgang af sikkerhed og privatliv;
- endelig godkendelse.

AI-output må IKKE betragtes som autoritativt, blot fordi det er velskrevet eller har en teknisk stil.

### 22.2 Verifikation

AI-genereret indhold SKAL gennemgås med henblik på:

- kildespecifikationssættet;
- gyldige eksterne standarder;
- skemaer og eksempler;
- implementeringsadfærd, hvor det er relevant;
- projektterminologi.

Genererede henvisninger, identifikatorer, citater og eksterne referencer SKAL verificeres uafhængigt inden offentliggørelse.

### 22.3 Ændringer i lovgivningen

Et AI-støttet forslag, der ændrer normativ adfærd, SKAL opfylde de samme krav til livscyklus, gennemgang, test og versionsstyring som ethvert forslag, der er udarbejdet af mennesker.

Ingen normativ regel MÅ godkendes udelukkende på grundlag af en anbefalingen fra kunstig intelligens.

### 22.4 Følsomt materiale

Redaktører må IKKE indsende fortrolige manuskripter, personoplysninger, materiale, der er omfattet af en embargo, legitimationsoplysninger, private nøgler eller ikke-offentlige sikkerhedsoplysninger til en AI-tjeneste, medmindre tjenesten og behandlingssammenhængen udtrykkeligt er godkendt til disse oplysninger.

### 22.5 Herkomst

Projektet KAN indeholde oplysninger om omfattende brug af kunstig intelligens i bidragsnoter, beskrivelser af pull-requests eller redaktionelle metadata. En sådan angivelse BØR beskrive værktøjets rolle i stedet for at tilskrive det forfatterskab eller ansvar.

Eksempel:

> AI-støttet sprog- og konsistensgennemgang; alt normativt indhold er verificeret og godkendt af den angivne redaktør.

Mindre hjælp til stavning, grammatik, søgning eller formatering kræver ikke angivelse på dokumentniveau, medmindre projektpolitikken eller gældende regler kræver det.

### 22.6 Oversættelse

Maskinoversættelser SKAL betragtes som udkast, indtil de er blevet gennemgået af en kompetent menneskelig oversætter eller en faglig korrekturlæser.

En maskinoversættelse MÅ IKKE betegnes som en officiel oversættelse fra OMI uden menneskelig gennemgang og verifikation af kildeversionen.

## 23. Praksis vedrørende repositorier og pull-requests

### 23.1 Et samlet anliggende

En specifikations-pull-request BØR omhandle ét sammenhængende arkitektonisk eller redaktionelt emne. Urelateret refaktorering BØR udskilles, hvor det er praktisk muligt.

### 23.2 Beskrivelse af pull-request

En pull-anmodning BØR indeholde følgende oplysninger:

- hvad der ændrede sig;
- hvorfor det ændrede sig;
- om en adfærd er normativ;
- indvirkning på kompatibiliteten;
- de berørte specifikationer og skemaer;
- validering udført;
- uafklarede spørgsmål.

### 23.3 Diffs, der kan gennemgås

Omfattende mekaniske omformateringer BØR adskilles fra væsentlige normative ændringer, så korrekturlæsere kan identificere forskelle i adfærd.

### 23.4 Genererede filer

Genererede artefakter BØR angive deres kilde og den kommando, der har genereret dem. Genererede filer MÅ IKKE redigeres manuelt, medmindre arbejdsgangen udtrykkeligt tillader det.

### 23.5 Validering

Inden sammenlægningen BØR de relevante kontroller omfatte:

- Markdown build;
- validering af interne links;
- JSON og validering af syntaksen i XML;
- validering af skema;
- eksempelprøver;
- terminologikontrol;
- kontrol af, om identifikatorer er dubletter;
- Kontrol af oversættelsesnøgler.

## 24. Tilgængelighed og læsbarhed

OMI Specifikationerne BØR kunne anvendes af læsere med forskellige enheder og adgangsbehov.

Forfattere SKAL:

- Brug et logisk hierarki i overskrifterne;
- angiv en beskrivende linktekst;
- angiv alternativ tekst til billeder, der har en betydning;
- undgå at formidle betydning udelukkende gennem farver;
- identificere sproget i ikke-engelske passager, hvor værktøjet understøtter dette;
- Undgå unødvendigt brede tabeller;
- forklare symboler og forkortelser;
- Sørg for, at afsnittene holder fokus.

Teknisk præcision har forrang frem for vilkårlige læsbarhedsvurderinger, men unødvendigt komplicerede sætninger BØR omskrives.

## 25. Kvalitetscheckliste

Inden et dokument går videre til status **Kandidat til gennemgang**, BØR redaktørerne kontrollere alle relevante punkter nedenfor.

### 25.1 Formål og anvendelsesområde

- [ ] Dokumentet har en stabil identifikator.
- [ ] Version og status for livscyklus er angivet.
- [ ] Afgrænsningerne for, hvad der er omfattet, og hvad der ikke er omfattet, er tydelige.
- [ ] Afhængigheder og tilhørende specifikationer er angivet.

### 25.2 Terminologi

- [ ] Udtrykkene stemmer overens med terminologien i »OMI«.
- [ ] Der defineres nye begreber.
- [ ] Lignende begreber skelnes konsekvent fra hinanden.
- [ ] Egenskabsnavne og bogstavelige værdier er formateret som kode.

### 25.3 Normativ kvalitet

- [ ] Normative nøgleord anvendes bevidst.
- [ ] Kravene kan testes uafhængigt af hinanden.
- [ ] Der tildeles kravidentifikatorer, hvor det er nødvendigt.
- [ ] Valgfri adfærd er eksplicit angivet.
- [ ] Der er defineret en fejlhåndtering.
- [ ] Der defineres overensstemmelsesklasser, hvor det er nødvendigt.

### 25.4 Modeller og eksempler

- [ ] Enheder, relationer og kardinaliteter er eksplicit angivet.
- [ ] Der skelnes mellem manglende, null, tomme og ukendte tilstande.
- [ ] Eksemplerne er syntaktisk korrekte.
- [ ] Der vises eksempler på vigtige tilfælde, hvor udtrykket er ugyldigt.
- [ ] Eksemplerne indeholder ikke personlige eller fortrolige oplysninger.

### 25.5 Interoperabilitet

- [ ] Eksterne afbildninger angiver retning og tab af information.
- [ ] Der er defineret håndtering af ukendte filtyper.
- [ ] Version og migrationsvirkninger er dokumenteret.
- [ ] Skemaet og prosateksten stemmer overens.

### 25.6 Risikovurdering

- [ ] Sikkerhedsforholdene er blevet gennemgået.
- [ ] Konsekvenserne for privatlivets fred og herkomst er blevet gennemgået.
- [ ] Der er taget højde for tilgængelighed.
- [ ] Der tages højde for internationaliseringsaspekter.

### 25.7 Offentliggørelse

- [ ] Interne links fungerer.
- [ ] Normative og informative henvisninger er adskilt.
- [ ] Ændringshistorikken er opdateret.
- [ ] Hjemmesiden er blevet oprettet uden problemer.
- [ ] I de officielle oversættelser angives den nøjagtige kildeversion.

## 26. Undtagelser

En specifikation KAN afvige fra denne vejledning, hvis emnet kræver en anden fremstilling eller notation.

En undtagelse SKAL:

- vær tydelig;
- være af begrænset omfang;
- angiv årsagen;
- sikre interoperabilitet og gennemsigtighed;
- blive godkendt gennem den normale godkendelsesproces.

Bekvemmelighed eller den hidtidige formatering er i sig selv ikke en tilstrækkelig begrundelse for en permanent undtagelse.

## 27. Vedligeholdelse af denne vejledning

Denne vejledning er underlagt »OMI«-specifikationens politik for livscyklus og versionsstyring.

Redaktionelle rettelser KAN udgives som patch-versioner. Kompatible tilføjelser KAN udgives som underversioner. Ændringer, der gør den etablerede dokumentstruktur, identifikatorer eller fortolkning ugyldige, kræver en hovedversion.

Ændringer i denne vejledning BØR vurderes ud fra deres indvirkning på:

- gældende specifikationer;
- officielle oversættelser;
- automatiseret værktøj;
- skema-dokumentation;
- eksterne henvisninger;
- arbejdsgangen for bidragydere.

## 28. Resumé

OMI Specifikationer skal være mere end blot forklarende tekst. De udgør langvarige tekniske aftaler mellem forfattere, redaktører, forlag, arkiver, softwareudviklere, bevaringssystemer og fremtidige implementører.

En ensartet struktur, præcis terminologi, testbare krav, varige identifikatorer, verificerede eksempler og en ansvarlig redaktionel gennemgang er derfor væsentlige dele af selve standarden.