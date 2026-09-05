---
title: OMI Arkitekturrevision
description: Gennemgang af det nuværende sæt af specifikationer og dokumentationsarkitekturen for Open Manuscript Initiative.
sidebar_position: 3
---

# Open Manuscript Initiative Arkitekturrevision

## Dokumentstatus

| Felt | Værdi |
| --- | --- |
| Dokumenttype | Revision af styring og arkitektur |
| Status | Udkast |
| Version | 0.1 |
| Anvendelsesområde | Engelsk normativ og teknisk dokumentation |
| Målgruppe | Redaktører, implementører, korrekturlæsere og bidragydere til specifikationer |

## Resumé

Repositoriet »Open Manuscript Initiative« indeholder allerede grundlaget for en omfattende standard for videnskabelige dokumenter. Repositoriet omfatter begrebsmæssige grundlag, semantiske modeller, arbejdsgangsmodeller, udvekslingsspecifikationer, publikationskoncepter samt implementeringsorienteret materiale.

Den største svaghed er ikke længere mangel på ideer. Det er den arkitektoniske fragmentering.

Dokumentationen er vokset gradvist, og en række problemer begrænser nu dens anvendelse som et sammenhængende sæt af specifikationer:

- kun en lille del af de eksisterende dokumenter vises i hjemmesidens navigationsmenu;
- specifikationsidentifikatorer, versioner og livscyklusstatus er inkonsekvente;
- Forholdet mellem normative specifikationer og vejledende retningslinjer er ikke altid klart;
- nogle dokumenter overlapper hinanden eller er dubletter af hinanden;
- afhængigheder mellem modeller angives sjældent;
- flere af de nødvendige modeller forbliver implicitte i stedet for at være formelt specificerede;
- Forholdet mellem standarden »OMI« og »Open Manuscript Studio« er ikke systematisk dokumenteret;
- Der findes endnu ikke noget kanonisk skema eller overensstemmelsesramme, der knytter tekstspecifikationerne til maskinverificerbar adfærd.

Den anbefalede næste fase er et kontrolleret program til omstrukturering af specifikationerne. Eksisterende materiale bør bevares, hvor det er relevant, men omorganiseres i et stabilt hierarki med permanente identifikatorer, fælles metadata, eksplicitte afhængigheder, implementeringsstatus og normative skemaer.

## Revisionsmål

Denne revision har fem mål:

1. gøre status over den foreliggende dokumentation;
2. at skelne mellem eksisterende, ufuldstændigt, dubleret, forældet og manglende materiale;
3. fastlægge en målspecifikationsarkitektur;
4. identificere de opgaver, der hindrer udviklingen af OMI 1.0;
5. at fastlægge en sikker migrationssekvens, der sikrer, at offentliggjorte links og det igangværende implementeringsarbejde ikke forstyrres.

## Revisionsprincipper

Revisionen bygger på følgende principper.

### Bevar nyttigt arbejde

Eksisterende dokumenter bør ikke kasseres blot fordi deres struktur er inkonsekvent. Gyldige begreber bør samles i standardiserede specifikationer.

### Adskil semantik fra implementering

OMI-specifikationen definerer interoperable videnskabelige objekter og adfærdsmønstre. Open Manuscript Studio viser en implementering, men må ikke betragtes som den normative definition af standarden.

### Foretræk stabile identifikatorer frem for filstier

En specifikationsidentifikator skal forblive uændret, selvom et filnavn, en titel eller en navigationskategori ændres.

### Gør overensstemmelse testbar

Normativ prosa bør i sidste ende kunne henføres til skemaer, valideringsregler, eksempler og overensstemmelsestests.

### Omstrukturér koden, før du oversætter

Den engelske specifikationspakke bør være færdigudviklet, inden de fuldstændige ungarske og tyske oversættelser udarbejdes.

## Aktuel oversigt over dokumenter

Det nuværende arkiv indeholder materiale inden for flere funktionelle grupper.

### Grundlag

Blandt de kendte grundlæggende dokumenter kan nævnes:

- Vision
- Grundlæggende principper
- Arkitekturkort
- Videnskabelig objektmodel

Disse dokumenter fastlægger formålet med og den overordnede struktur for OMI. De er af afgørende betydning, men deres normative status og indbyrdes forhold kræver en afklaring.

### Væsentlige semantiske specifikationer

Det nuværende kernemateriale omfatter:

- Dokumentmodel
- Metadatamodel
- Anker-modellen
- Annotationsmodel
- Citeringsmodel
- Model for bibliografiske poster
- Referencelibrary og registerarkitektur

Tilsammen udgør disse en væsentlig del af den semantiske manuskriptmodel.

### Specifikationer for arbejdsgange og videnskabelige processer

Eksisterende eller delvist udarbejdet materiale omfatter:

- Gennemgangsmodel
- Udgivelsesmodel
- samarbejdskoncepter, der kommer til udtryk i Open Manuscript Studio
- oversættelseskoncepter, der er integreret i den flersprogede arkitektur

Gennemgangsmodellen findes i form af et dokument, mens samarbejde og oversættelse kræver formelle, selvstændige specifikationer.

### Specifikationer for ombytning og emballering

De eksisterende dokumenter omfatter:

- Filformat
- Containerarkitektur
- API

Disse udgør et første grundlag for udveksling og integration, men kræver tilpasning til den kanoniske objektmodel og det fremtidige »JSON«-skema.

### Specifikationer for udvidelsesmuligheder

De eksisterende dokumenter omfatter:

- Plugin-arkitektur

Der er stadig behov for en funktionsmodel til at definere, hvordan implementeringer angiver, hvilke funktioner der er valgfri, og hvilke der er obligatoriske.

### Materiale om ledelse

Arbejdet med god ledelse omfatter nu eller forventes at omfatte:

- OMI Vedtægter
- Køreplan for »OMI« 1.0
- denne arkitekturrevision
- Specifikationens livscyklus
- Politik for versionsstyring
- Vejledning i udformning af specifikationer
- Terminologi og ordliste

## Resultater

## 1. Navigationsfunktionen viser kun en brøkdel af specifikationssættet

Sidepanelet på hjemmesiden viser i øjeblikket kun en lille del af de dokumenter, der er gemt i arkivet. Flere af de eksisterende specifikationer kan ikke tilgås via den normale navigering i dokumentationen.

Dette medfører tre risici:

- bidragydere kan antage, at skjulte dokumenter er forældede;
- læserne kan få et ufuldstændigt billede af arkitekturen;
- Der kan opstå dobbeltarbejde, fordi det er svært at finde eksisterende materiale.

### Nødvendig handling

Efter gennemgangen af indholdet bør sidepanelet omstruktureres efter faste arkitektoniske kategorier i stedet for en simpel liste over filer.

## 2. Den videnskabelige objektmodel er duplikeret

Repositoriet indeholder to stier i Scholarly Object Model:

- `docs/specifications/scholarly-object-model.md`
- `docs/specifications/core/scholarly-object-model.md`

At der findes to tilsyneladende autoritative dokumenter, skaber uklarhed om, hvilken model der er gældende for implementeringerne.

### Nødvendig handling

De to dokumenter skal sammenlignes afsnit for afsnit. Det gyldige indhold bør samles i ét kanonisk dokument på `OMI-SPEC-001`. Den udgåede sti bør enten omdirigere til den kanoniske side eller indeholde en eksplicit meddelelse om, at den er erstattet, indtil omdirigeringerne er sikkert på plads.

## 3. Specifikationsidentifikatorerne er ufuldstændige og potentielt ustabile

Nogle dokumenter bruger allerede identifikatorer som f.eks. `OMI-SPEC-005`, mens andre ikke gør det. Uden et register er det muligt, at identifikatorer genbruges eller ved et uheld får tildelt nye numre.

### Nødvendig handling

Opret et specifikationsregister, der tildeler identifikatorer permanent. Identifikatorer må aldrig genbruges uden varsel, selv ikke når en specifikation trækkes tilbage.

En foreløbig serie er:

| Identifikator | Specifikation | Nuværende status |
| --- | --- | --- |
| OMI-SPEC-001 | Videnskabelig objektmodel | Findes allerede, er en dublet; skal konsolideres |
| OMI-SPEC-002 | Dokumentmodel | Findes allerede; skal gennemgås |
| OMI-SPEC-003 | Metadatamodel | Findes allerede; kræver gennemgang |
| OMI-SPEC-004 | Anker-model | Findes allerede; kræver gennemgang |
| OMI-SPEC-005 | Citation-model | Findes allerede; revision er i gang |
| OMI-SPEC-006 | Model for bibliografiske poster | Udkast udarbejdet |
| OMI-SPEC-007 | Arkitektur for referencebibliotek og register | Udkast udarbejdet |
| OMI-SPEC-008 | Valideringsmodel | Mangler |
| OMI-SPEC-009 | Versionsstyring og ændringsmodel | Mangler |
| OMI-SPEC-010 | Identitets- og bidragydermodel | Mangler |
| OMI-SPEC-011 | Samarbejds- og tilladelsesmodel | Mangler |
| OMI-SPEC-012 | Oversættelsesmodel | Mangler |
| OMI-SPEC-013 | Profilmodel for gengivelse og offentliggørelse | Mangler |
| OMI-SPEC-014 | Import- og eksportmodel | Mangler |
| OMI-SPEC-015 | Funktions- og overensstemmelsesmodel | Mangler |

Denne nummerering er foreløbig, indtil registret formelt vedtages.

## 4. Livscyklustilstande er ikke reguleret

I dokumenterne anvendes betegnelser som »`Draft`«, men betydningen af disse betegnelser er ikke defineret. Det er derfor uklart, om et udkast er en foreløbig tekst, et forslag, der kan implementeres, eller et dokument, der afventer redaktionel gennemgang.

### Nødvendig handling

Indfør en fælles livscyklus:

1. Undersøgende
2. Udkast
3. Kandidat til evaluering
4. Kandidat til implementering
5. Stald
6. Udgået
7. Er erstattet af

Hver delstat skal have kriterier for optagelse og udtræden.

## 5. Der er en blanding af normativt og informativt indhold

Flere dokumenter indeholder en blanding af arkitektoniske krav, eksempler, fremtidsvisioner, forklarende tekst og forslag til implementering, uden at det fremgår, hvilken autoritet de har.

### Nødvendig handling

Hver specifikation skal tydeligt skelne mellem:

- normative krav;
- en informativ forklaring;
- ikke-bindende eksempler;
- udskudt fremtidigt arbejde;
- implementeringsvejledning.

Normative krav bør anvende ensartede udtryk såsom SKAL, MÅ IKKE, BØR, BØR IKKE og KAN, hvor betydningen er defineret i specifikationens stilvejledning.

## 6. Afhængigheder er implicitte

Modelsuiten udgør et afhængighedsdiagram, men disse afhængigheder registreres ikke systematisk.

For eksempel:

- Citationsmodellen afhænger af modellen for videnskabelige objekter, anker-modellen og modellen for bibliografiske poster;
- Annotationsmodellen afhænger af anker-modellen;
- Gennemgangsmodellen afhænger af annotationsmodellen, identitets- og bidragydermodellen samt samarbejds- og tilladelsesmodellen;
- Udgivelsesmodellen afhænger af dokumentmodellen, metadatamodellen, citatmodellen, gengivelsesprofilerne og valideringsmodellen.

### Nødvendig handling

Hver specifikation skal indeholde følgende oplysninger:

- Det afhænger af
- Anvendes af
- Relaterede specifikationer
- Erstattes af
- Er erstattet af

Et maskinlæsbart specifikationsregister kan senere generere disse sammenhænge automatisk.

## 7. Der henvises til validering, men denne er ikke centralt defineret

I mange dokumenter nævnes validering, men der findes ingen fælles valideringsmodel, der definerer fejlklasser, valideringsfaser, rapporter, profiler eller overensstemmelsesniveauer.

### Nødvendig handling

Opret en »`OMI-SPEC-008: Validation Model`«, der omfatter:

- validering af skema;
- strukturel validering;
- validering af metadata;
- validering af identifikatorer;
- bibliografisk validering;
- integritet på tværs af objekter;
- validering af publikationsprofil;
- fejl, advarsler og informationsmeddelelser;
- maskinlæsbare valideringsrapporter;
- udvidelige identifikatorer for valideringsregler.

## 8. Der mangler versionsstyring og ændringssemantik

Både arkivet og Studio omfatter versionerede videnskabelige objekter, men der findes ingen normativ model, der definerer revisioner, forgreninger, godkendte ændringer, offentliggjorte tilstande eller herkomst på objektniveau.

### Nødvendig handling

Opret en »`OMI-SPEC-009: Versioning and Change Model`«, der omfatter:

- manuskriptudgaver;
- ændringer af objekter;
- ændringsoperationer;
- forfatterskab og tidsstempler;
- sammenligninger og forskelle;
- godkendte og afviste ændringer;
- uforanderlige, offentliggjorte øjebliksbilleder;
- overgang mellem skemaversioner.

## 9. Semantikken vedrørende identitet og bidragydere er ufuldstændig

Metadata kan angive bidragydere, men der kræves en genanvendelig identitetsmodel for personer, organisationer, identifikatorer, tilhørsforhold, roller og historiske navneformer.

### Nødvendig handling

Opret en »`OMI-SPEC-010: Identity and Contributor Model`«, der omfatter:

- personer og organisationer;
- ORCID og ROR;
- lokale identiteter;
- navne og navnevarianter;
- tilknytninger med gyldighedsperioder;
- rækkefølge af bidragydere;
- CRediT og udvidelige roller;
- status som korresponderende forfatter;
- redaktionelle bidrag og oversættelser.

## 10. Samarbejdskoncepter findes i koden, men ikke i standarden

Open Manuscript Studio indeholder allerede arbejdsområderoller og invitationer, men disse begreber er endnu ikke formaliseret som implementeringsuafhængig OMI-semantik.

### Nødvendig handling

Opret en »`OMI-SPEC-011: Collaboration and Permission Model`«, der omfatter:

- arbejdsområder;
- medlemskab;
- roller som ejer, redaktør, medforfatter, korrekturlæser, oversætter og læser;
- invitationer;
- tilladelsesomfang;
- adgang på objekt- og sektionsniveau;
- revisionshændelser;
- adskillelse af autentificering fra manuskriptets overførbarhed.

## 11. Flersprogede manuskripter kræver en oversættelsesmodel

Hjemmesiden og Studio understøtter flere sprog, men sammenhængen mellem en originaltekst og oversatte videnskabelige objekter er endnu ikke beskrevet i en standard.

### Nødvendig handling

Opret en »`OMI-SPEC-012: Translation Model`«, der omfatter:

- kilde- og målsprog;
- justerede objekter og ankerpunkter;
- oversættelsesstatus;
- detektering af forældede oversættelser;
- oversætterens bemærkninger;
- flere målsprog;
- delvise oversættelser;
- udgivelse af parallelle og uafhængige sprogversioner.

## 12. Profilerne for gengivelse og offentliggørelse er ikke tilstrækkeligt adskilt

Arkitekturen behandler semantik og præsentation korrekt som separate lag, men der er behov for en formel profilmodel for at specificere, hvordan tidsskrifter og forlag knytter det semantiske indhold til de endelige udgivelser.

### Nødvendig handling

Opret en »`OMI-SPEC-013: Rendering and Publication Profile Model`«, der omfatter:

- publikationsprofiler;
- mål for produktionen;
- gengivelse af henvisninger og noter;
- regler for typografi og layout;
- obligatoriske og valgfri afsnit;
- udvidelser til tidsskrifter og forlag;
- tilgængelig HTML, PDF, EPUB og XML-uddata;
- deterministiske rendering-inddata.

## 13. Import- og eksportadfærd er ikke tilstrækkeligt specificeret

Filformatet og udgivelsesmodellen er ikke i sig selv afgørende for transformationskvaliteten, indhold, der ikke understøttes, flere gennemløb eller konverteringsrapporter.

### Nødvendig handling

Opret en »`OMI-SPEC-014: Import and Export Model`«, der omfatter:

- DOCX, Markdown, JATS, HTML, CSL, JSON, BibTeX og RIS-tilknytninger;
- tabsfri og tabsgivende transformationer;
- advarsler om konvertering;
- elementer, der ikke understøttes;
- kildens oprindelse;
- forventninger til tur-retur-rejsen;
- bevarelse af udvidelser;
- eksportprofiler.

## 14. Der mangler oplysninger om overensstemmelsesniveauer og angivne funktioner

Ikke alle implementeringer vil understøtte alle valgfri modeller eller outputtyper. Der er behov for en fælles mekanisme til at angive understøttelse uden at opdele standarden.

### Nødvendig handling

Opret en »`OMI-SPEC-015: Capability and Conformance Model`«, der omfatter:

- overensstemmelse med kernekravene;
- valgfrie funktioner;
- overensstemmelse med profilen;
- deklarationer af udvidelser;
- skemaversioner;
- import- og eksportfunktioner;
- valideringsfunktioner;
- maskinlæsbare implementeringsmanifester.

## 15. Prosa-specifikationerne er endnu ikke bundet til et kanonisk skema

OMI kan ikke opnå pålidelig interoperabilitet, så længe datastrukturen kun findes i tekstform og i eksempler.

### Nødvendig handling

Udvikle en versioneret serie af kanoniske skemaer, der tager udgangspunkt i skemaet »JSON«. Arbejdet med skemaerne skal omfatte:

- faste skemaidentifikatorer;
- genanvendelige definitioner;
- strenge valideringstilstande og valideringstilstande, der tager højde for udvidelser;
- enkle eksempler;
- fuldstændige eksempler;
- ugyldige kampe;
- migrationsarmaturer;
- automatiserede overensstemmelsestests.

## 16. Status for implementeringen er ikke synlig

Læsere kan ikke umiddelbart afgøre, om en model er konceptuel, delvist implementeret eller anvendes i produktionskode.

### Nødvendig handling

Opret en side om implementeringsstatus med evidensbaserede betegnelser:

- Ikke påbegyndt
- Undersøgende
- Delvis
- Gennemført eksperimentelt
- Implementeret i referencesoftware
- Overensstemmelse testet

Matricen må ikke angive overensstemmelse, hvis der kun findes en funktion med et lignende navn.

## 17. Terminologi kræver central styring

Begreber som manuskript, dokument, videnskabeligt objekt, reference, kildehenvisning, bibliografisk post, kommentar, revision og publikation kan fortolkes forskelligt på tværs af fagområder og softwaresystemer.

### Nødvendig handling

Udarbejd et dokument med normativ terminologi og en ordliste. Specifikationerne bør henvise til fælles definitioner i stedet for at omdefinere centrale begreber på en inkonsekvent måde.

## Mål for dokumentationsarkitekturen

Den anbefalede dokumentationsstruktur er:

```text
Introduction
├── Vision
├── Core Principles
└── Architecture Map

Foundations
├── Terminology and Glossary
├── Scholarly Object Model
├── Document Model
├── Metadata Model
└── Identity and Contributor Model

Editing and Collaboration
├── Anchor Model
├── Annotation Model
├── Review Model
├── Collaboration and Permission Model
├── Versioning and Change Model
└── Translation Model

Bibliography and Citations
├── Bibliographic Record Model
├── Citation Model
├── Reference Library and Registry Architecture
└── Citation Graph (future)

Publishing and Validation
├── Validation Model
├── Rendering and Publication Profile Model
└── Publishing Model

Exchange and Packaging
├── File Format
├── Container Architecture
├── Import and Export Model
└── API

Extensibility and Conformance
├── Plugin Architecture
├── Capability and Conformance Model
└── Implementation Status

Governance
├── OMI Charter
├── Roadmap to OMI 1.0
├── Architecture Audit
├── Specification Registry
├── Specification Lifecycle
├── Versioning Policy
├── Specification Style Guide
└── Translation Policy
```

## Metadata for standardspecifikationer

Hver normativ specifikation bør indeholde en fælles metadatablok.

Obligatoriske felter:

```text
Identifier
Title
Version
Status
Document type
Editors
Last updated
Normative language
Depends on
Used by
Related specifications
Implementation status
Schema reference
Supersedes
Superseded by
```

Docusaurus Indledningen bør understøtte navigation og præsentation, men metadataene fra den stabile specifikation bør også fremgå tydeligt i dokumentet.

## Strategi for omstrukturering af arkivet

En flytning af store filer bør ikke gennemføres, før indholdsrevisionen og identifikatorregistret er godkendt. En for tidlig flytning vil medføre ødelagte links og sammenfletningskonflikter, uden at den begrebsmæssige uklarhed bliver løst.

Den anbefalede rækkefølge er:

### Fase 1 — Grundlaget for styringen

- sammenlægge chartret;
- flet Roadmap sammen med OMI 1.0;
- vedtage denne arkitekturrevision;
- udarbejde dokumenterne om specifikationens livscyklus, versionspolitik, stilguide og terminologi.

### Fase 2 — Kanonisk oversigt

- tildele permanente identifikatorer;
- at identificere kanoniske og forældede dokumenter;
- konsolidere den duplikerede Scholarly Object Model;
- Dokumentomdirigeringer og bevarede aliaser.

### Fase 3 — Omstrukturering af navigationssystemet

- omorganisere sidepanelet;
- gennemgå de eksisterende specifikationer;
- tilføj statusmærker, hvor det er relevant;
- beholde stabile offentlige URL’er, hvor det er muligt.

### Fase 4 — Manglende kernemodeller

- Valideringsmodel;
- Versionsstyring og ændringsmodel;
- Identitets- og bidragydermodel;
- Samarbejds- og tilladelsesmodel;
- Oversættelsesmodel.

### Fase 5 — Offentliggørelse og afslutning af udvekslingen

- Model for gengivelses- og publikationsprofil;
- Import- og eksportmodel;
- Funktions- og overensstemmelsesmodel;
- gennemgå og tilpasse filformat, containerarkitektur, API, udgivelsesmodel og plugin-arkitektur.

### Fase 6 — Skema og overensstemmelse

- kanonisk JSON-skema;
- eksempelkorpus;
- ugyldige kampe;
- automatiseret validering;
- evnen til implementering kommer til udtryk;
- testsuite til overensstemmelseskontrol.

### Fase 7 — Internationalisering

- fastlægge en engelsk release candidate;
- oprette oversættelseskataloger og kopier af dokumenter;
- oversætte til ungarsk og tysk;
- offentliggøre oversættelsesstatus og advarsler om afvigelser;
- indføre en procedure til synkronisering af senere ændringer.

## Prioriteringsklassificering

### Vigtigt før OMI 1.0

- den kanoniske model for videnskabelige objekter;
- specifikationsregister og livscyklus;
- Modellerne for dokumenter, metadata, anker, annotationer, henvisninger og bibliografiske oplysninger er harmoniseret;
- Valideringsmodel;
- Versionsstyring og ændringsmodel;
- Identitets- og bidragydermodel;
- kanonisk JSON-skema;
- definitioner af overensstemmelse;
- fuldstændige normative eksempler.

### Høj prioritet

- Samarbejds- og tilladelsesmodel;
- Oversættelsesmodel;
- Model for gengivelses- og publikationsprofil;
- Import- og eksportmodel;
- matrix over implementeringsstatus;
- terminologi og ordliste.

### Vigtigt, men kan følge efter en første kandidat til implementering

- Citationsgraf;
- avancerede protokoller til distribuerede registre;
- fagspecifikke profiler;
- det officielle register over forlængelser;
- yderligere officielle oversættelser ud over ungarsk og tysk.

## Risici

### Udvidelse af anvendelsesområdet

OMI dækker en bred videnskabelig livscyklus. Uden kriterier for trinvis frigivelse kunne projektet udskyde udviklingen af en stabil kerne på ubestemt tid.

**Afbødende foranstaltning:** Definer en kerne, der opfylder kravene i MinimalOMIon 1.0, og placér de valgfri funktioner i profiler.

### Afvigelser mellem dokumentation og kode

Udviklingen af studiet kan skride hurtigere frem end beskrivelserne i specifikationerne.

**Afbødende foranstaltninger:** kræv statusopdateringer om implementeringen og overensstemmelsestests ved væsentlige modelændringer.

### Ustabilitet i identifikatorer

Hvis man omdøber dokumenter, før man indfører et register, kan det medføre, at eksterne henvisninger bliver upålidelige.

**Afhjælpning:** Tildel først permanente identifikatorer, og bevar omdirigeringer eller aliaser.

### Oversættelsesafvigelse

En oversættelse af uklare specifikationer ville medføre en forøgelse af vedligeholdelsesarbejdet og føre til modstridende sprogversioner.

**Risikoreduktion:** Oversæt først, når et udkast til engelsk revision er fastlagt, og markér oversættelsesversionerne tydeligt.

### Overcentralisering af registre

En arkitektur for et referencebibliotek kunne ved en fejltagelse give indtryk af, at OMI kræver en enkelt central bibliografisk myndighed.

**Afbødende foranstaltninger:** Behold fødereret opløsning, kildeherkomst, offline-registreringer og implementeringsuafhængighed som eksplicitte arkitektoniske principper.

## Kriterier for afslutning af refaktoringsprogrammet

Refaktoriseringsfasen for arkitekturen er afsluttet, når:

- Hver aktiv specifikation har én standardplacering;
- hver normativ specifikation har en permanent identifikator;
- der indføres livscyklustilstande og versionsregler;
- sidepanelet viser den komplette, gennemgåede arkitektur;
- afhængigheder og tilhørende specifikationer angives;
- dobbeltangivne specifikationer samles;
- der udarbejdes udkast til de manglende kernemodeller;
- der findes standardskemaer og eksempler;
- gennemførelsesstatus dokumenteres uden ubegrundede påstande;
- Den engelske dokumentation sendes til en kandidat til gennemlæsning, der er egnet til oversættelse.

## Anbefalede dokumenter, der skal læses umiddelbart herefter

Efter denne revision bør de næste styringsdokumenter udarbejdes i følgende rækkefølge:

1. Specifikationens livscyklus
2. Politik for versionsstyring af specifikationer
3. Vejledning i udformning af specifikationer
4. Terminologi og ordliste
5. Specifikationsregister

Når disse er vedtaget, kan konsolideringen af de dublerede modeller og den fuldstændige omstrukturering af sidepanelet gennemføres uden problemer.

## Konklusion

»Open Manuscript Initiative« har udviklet sig til mere end blot en indledende samling af idéer. Den indeholder allerede grundlaget for en omfattende videnskabelig manuskriptarkitektur.

Den næste udfordring er en disciplineret konsolidering.

En stabil OMI 1.0 kræver et sæt regulerede specifikationer, ikke blot yderligere dokumenter. Permanente identifikatorer, eksplicitte livscyklustilstande, kanoniske modeller, maskinverificerbare skemaer, deklarerede afhængigheder og gennemsigtig implementeringsstatus er derfor de umiddelbare arkitektoniske prioriteter.

Denne revision udgør arbejdsplanen for denne overgang.
