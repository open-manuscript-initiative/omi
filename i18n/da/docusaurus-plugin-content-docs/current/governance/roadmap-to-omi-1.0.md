---
title: Køreplan for »OMI« 1.0
sidebar_position: 2
description: Aktuelt program, færdiggjorte grundlag, fremskridt med referenceimplementeringen, aktuelle prioriteter og udgivelseskriterier for Open Manuscript Initiative 1.0.
---

# Køreplan for »OMI« 1.0

## Udvikling af en åben standard for videnskabelig publicering

## Dokumentmetadata

| Felt | Værdi |
|---|---|
| Dokumenttype | Styring og planlægning |
| Status | Udkast |
| Version | 0.4.0 |
| Normativt sprog | Engelsk |
| Senest opdateret | 5. september 2026 |
| Planlægningshorisont | OMI 1.0 |
| Kilde til autoritative identifikatorer | [OMI Specification Registry](./specification-registry.md) |
| Grundlag for produktimplementering | [Studio Implementation Status](./studio-implementation-status.md) |
| Retningslinjer for implementering af integration | [Integration Implementation Status](../integrations/implementation-status.md) |

## 1. Formål

Denne køreplan beskriver det arbejde, der er nødvendigt for at omdanne »Open Manuscript Initiative« fra en projektarkitektur under udvikling til en sammenhængende, implementerbar, testbar og styrbar åben standard for videnskabelige manuskripter.

Den registrerer både fremskridt i specifikationsudviklingen og dokumentation for referenceimplementeringen. Disse to aspekter holdes bevidst adskilt: En Studio-funktion kan være operationel, før den tilsvarende OMI-specifikation er i overensstemmelse med standarden, og en specifikation kan være færdigudviklet, før alle referencefunktioner er implementeret.

»[OMI Specification Registry](./specification-registry.md)« er den gældende standard for specifikationsidentifikatorer, titler, kanoniske stier, tildelingsstatus, livscyklusstatus og versioner.

## 2. Strategisk retning

OMI er ikke tænkt som endnu et redigeringsværktøj til manuskripter, en tidsskriftplatform eller en udgivelsesproces. Formålet er en implementeringsuafhængig semantisk standard, der kan anvendes af forfattere, tidsskrifter, forlag, arkiver, biblioteker, redaktionssystemer, konverteringstjenester og uafhængigt udviklet videnskabelig software.

Open Manuscript Studio er den primære referenceimplementering. Den tester specifikationerne i reelle arbejdsgange for forfattere, korrekturlæsere, redaktører og udgivere, men den fastlægger ikke den normative betydning.

## 3. Oversigt over fremskridt

Programmet er kommet langt videre end den indledende fase med dokumentationsgennemgang. Styring, identifikatorer, dokumentationsarkitektur og de første specifikationsgrupper er nu fastlagt, og Studioet dækker nu en væsentligt større del af den tilsigtede livscyklus end den baseline, der blev registreret den 6. august.

| Programområde | Status | Aktuel oversigt |
|---|---|---|
| Dokumentationsgennemgang | **Afsluttet** | Den originale engelske dokumentation blev registreret, klassificeret og omstruktureret. |
| Grundlag for styring | **Stort set færdiggjort** | Vedtægter, livscyklus, versionsstyring, stil, terminologi, register, dokumentationsarkitektur, specifikationsskabelon og politik for kodesignering er offentliggjort. |
| Synkronisering af websted og produkt | **Aktiv og vedligeholdt** | Den offentlige Studio-side og den daterede Studio-statusrapport viser nu de implementerede produktfunktioner separat fra den normative overensstemmelse. |
| Migrering af identifikatorer | **Afsluttet for aktive specifikationer** | Aktive specifikationer anvender den kanoniske tildelingsarkitektur `OMI-SPEC-*`. |
| Centrale semantiske modeller | **Under udarbejdelse** | Der foreligger omfattende dokumentation for referenceimplementeringer af modellerne for identitet/bidragydere og versionering/ændringer; validering, oversættelse og samarbejde er endnu ikke fuldt udarbejdet på specifikationsniveau. |
| Referenceimplementering | **Offentlig betaversion (`0.1.0-beta.3`)** | Struktureret redigering, flersproget brugergrænseflade og hjælp, serverbaserede konti, peer review, indbygget integration med OJS/OMP, import/eksport, udgiverprofiler, søgning, versioner til desktop og mobil samt opdateringsproces er til stede. |
| Peer review | **Operationel implementering** | Grundlaget for dobbeltblind bedømmelse, bedømmeres arbejdsmiljøer, redaktørens bedømmelsesoversigt og håndtering af eksternt tildelte bedømmelser er implementeret. Overholdelse af den formelle specifikation er stadig et fremtidigt arbejde. |
| OJS-integration | **Drifts- og konfigurationsafhængig** | Plugin-versionen v1.2.1 og Studio-arbejdsgangen muliggør signeret opstart for forfatter/redaktør/korrekturlæser, filoverførsel inden for afgrænsede rammer, indbyggede korrekturformularer, rettelser, adskilt feedback og signeret tilbageskrivning; den indbyggede E2E-verifikation i henhold til »OJS« 3.5 viser grønt. Den fulde profildækning og overensstemmelse er stadig ufuldstændig. |
| Integration med OMP | **Driftsmæssigt / konfigurationsafhængigt** | Plugin v1.2.6 og Studio-arbejdsgangen muliggør signeret opstart for forfatter/redaktør/korrekturlæser, tilknytning af monografier/publikationer/undersøgelser, adgang til korrekturlæsning udelukkende for tildelte undersøgelser, indbyggede formularer, rettelser, adskilt feedback og signeret tilbagemelding; indbygget OMP 3.5 E2E-verifikation er grøn. |
| Identitetsintegrationer | **Konfigurationsafhængige** | ORCID OAuth der findes infrastruktur til implementering samt ROR/bibliografiske identitetsgrundlag. Produktionskonfigurationen er implementeringsspecifik. |
| Integrationsplatform | **Grundlaget er implementeret** | Integrationskatalog, udbyderregister, autentificeringsmetoder for udbydere og rammeværk til DeepL-konfiguration er på plads. Selve udførelsen af DeepL-oversættelser er endnu ikke færdig. |
| Flersproget produktsupport | **Operativ implementering** | Studio tilbyder 24 understøttede grænsefladesprog med lokaliseret hjælp og gennemgåede oversættelsesoverlejringer. De normative specifikationer forbliver på engelsk. |
| Import/eksport | **Væsentlig implementering** | Der er implementeret import og omfattende publikations-/eksportmuligheder for DOCX, herunder JATS, HTML, EPUB, PDF, IDML, XPress Tags, FrameMaker MIF, Scribus SLA og LaTeX-orienterede outputformater. |
| Desktop-distribution | **Operationel betaversion** | Pakker til Windows, Linux og macOS genereres automatisk; funktionaliteten til opdateringsmeddelelser og installationsforløbet på desktop er implementeret. Arbejdet med kodesignering er stadig i gang. |
| Kanoniske skemaer og overensstemmelse | **Ikke færdiggjort** | Versionerede normative skemaer, godkendte testdatasæt, validatorens adfærd og formelle overensstemmelsestestsæt er fortsat vigtige leverancer inden version 1.0. |
| Uafhængige implementeringer | **Endnu ikke verificeret** | Der kræves fortsat dokumentation for interoperabilitet ud over den primære referenceimplementering for at skabe tillid til »OMI« 1.0. |

## 4. Afsluttet fundamentarbejde

De offentliggjorte grundlæggende principper for styring og arkitektur omfatter:

- [OMI Charter](./charter.md);
- [Architecture Audit](./architecture-audit.md);
- [Specification Lifecycle](./specification-lifecycle.md);
- [Versioning Policy](./versioning-policy.md);
- [Specification Style Guide](./style-guide.md);
- [Terminology and Definitions](./terminology.md);
- [OMI Specification Registry](./specification-registry.md);
- [Documentation Architecture](./documentation-architecture.md);
- [OMI Specification Template](./specification-template.md);
- [OMI Implementation Status Matrix](./implementation-status-matrix.md);
- [Studio Implementation Status](./studio-implementation-status.md);
- [Code Signing Policy](./code-signing-policy.md);
- [Integration Implementation Status](../integrations/implementation-status.md).

Dokumentationssiden indeholder desuden en standardiseret sidebjælkeopbygning, stabile dokumentationsstier, navigation på engelsk, ungarsk og tysk samt en tydelig adskillelse mellem den normative specifikationsstatus og produktets implementeringsstatus.

## 5. Den nuværende specifikationsarkitektur

Familien af kanoniske specifikationer er inddelt efter rækkevidden af de permanente identifikatorer.

### 5.1 Grundlag og centrale semantiske modeller

| Identifikator | Specifikation | Tildeling | Nuværende status |
|---|---|---|---|
| `OMI-SPEC-000` | Grundlæggende principper | Aktiv | Udkast |
| `OMI-SPEC-100` | Dokumentmodel | Aktiv | Udkast |
| `OMI-SPEC-110` | Anker-model | Aktiv | Udkast |
| `OMI-SPEC-120` | Videnskabelig objektmodel | Aktiv | Udkast |
| `OMI-SPEC-130` | Annotationsmodel | Aktiv | Udkast |
| `OMI-SPEC-140` | Metadatamodel | Aktiv | Udkast |
| `OMI-SPEC-150` | Identitets- og bidragydermodel | Aktiv | Udkast |
| `OMI-SPEC-160` | Versionsstyring og ændringsmodel | Aktiv | Udkast |
| `OMI-SPEC-170` | Oversættelsesmodel | Reserveret | Planlagt |
| `OMI-SPEC-180` | Valideringsmodel | Reserveret | Planlagt |
| `OMI-SPEC-190` | Samarbejds- og tilladelsesmodel | Reserveret | Planlagt |

### 5.2 Videnskabelig arbejdsgang, referencer og publikationer

| Identifikator | Specifikation | Tildeling | Nuværende status |
|---|---|---|---|
| `OMI-SPEC-200` | Anmeldelsesmodel | Aktiv | Udkast |
| `OMI-SPEC-210` | Citeringsmodel | Aktiv | Udkast |
| `OMI-SPEC-220` | Bibliografisk postmodel | Aktiv | Udkast |
| `OMI-SPEC-221` | Referencelibrary og registerarkitektur | Aktiv | Udkast |
| `OMI-SPEC-230` | Udgivelsesmodel | Aktiv | Udkast |
| `OMI-SPEC-240` | Model for gengivelse og offentliggørelse | Reserveret | Planlagt |

### 5.3 Platform, udveksling og overensstemmelse

| Identifikator | Specifikation | Tildeling | Nuværende status |
|---|---|---|---|
| `OMI-SPEC-300` | Plugin-arkitektur | Aktiv | Udkast |
| `OMI-SPEC-310` | Platform API | Aktiv | Udkast |
| `OMI-SPEC-320` | Filformat | Aktiv | Udkast |
| `OMI-SPEC-330` | Containerarkitektur | Aktiv | Udkast |
| `OMI-SPEC-340` | Import- og eksportmodel | Reserveret | Planlagt |
| `OMI-SPEC-350` | Funktions- og overensstemmelsesmodel | Reserveret | Planlagt |

Registret er fortsat den gældende kilde, selvom der er uoverensstemmelser mellem dette resumé og registret.

## 6. Referencemodel for implementering

Open Manuscript Studio leverer nu dokumentation for en langt større del af den videnskabelige arbejdsgang end den oprindelige alfa-version af redigeringsprogrammet.

### 6.1 Udarbejdelse og dokumenthåndtering

De nuværende implementeringsfunktioner omfatter struktureret redigering af rich text, semantiske afsnit og blokke i manuskriptet, stabile identifikatorer, revisionshistorik, noter/henvisninger, dokumentnavigation, struktureret søgning/erstatning, import fra DOCX samt bærbar/lokal desktop-lagring.

### 6.2 Identitet og konti

Der findes en serverbaseret konto- og profilinfrastruktur sideløbende med en opdeling mellem agenter og bidragydere i »OMI«. ORCID, OAuth – der er understøttelse af implementering, og ROR– der findes grundlæggende elementer vedrørende tilknytning og identitet, afhængigt af implementeringskonfigurationen.

### 6.3 Flersproget betjening

Studio understøtter 24 grænsefladesprog, lokaliseret hjælp og flersprogede manuskript-arbejdsgange. Dette er et eksempel på produktimplementering; det betyder ikke, at hele den normative OMI-specifikationsserie har officielle oversættelser.

### 6.4 Gennemgang og redaktionelt arbejdsforløb

Grundlaget for dobbeltblind peer review er implementeret med godkendte reviewAPIer, anonymitetsprojiceringer, arbejdsområder for anmeldere, review-dashboards rettet mod redaktører samt understøttelse af eksternt tildelte review-kontekster. Disse funktioner udvider referenceimplementeringen væsentligt i forhold til den tidligere, eksplorative review-basislinje.

### 6.5 Integration med udgivelsesplatforme

OJS og OMP er eksterne workflow-integrationer, der er i drift. Begge tilbyder signeret, rollebaseret opstart, afgrænset filadgang, indbyggede bedømmelsesformularer, rettelser, adskilt feedback fra forfatter og redaktør samt signeret tilbagemelding af bedømmelse, med indbygget end-to-end-verifikation i henhold til PKP 3.5. OJS er fortsat den autoritative kilde for tidsskriftets arbejdsgang, og OMP for monografiens arbejdsgang, mens Studio fortsat er den autoritative kilde for manuskript- og bedømmelsesstatus i Studio. OMP bevarer desuden sammenkoblingen mellem monografier, publikationer og undersøgelser og begrænser anmelderne til den tildelte undersøgelse.

### 6.6 Offentliggørelse af resultater

Programmet understøtter en række publikationsorienterede outputformater og profiler, herunder JATSXML, HTML5, DOCX, EPUB, PDF samt flere DTP-orienterede formater. Denne implementering skal stadig tilpasses de formelle krav til import/eksport og overensstemmelse i henhold til OMI 1.0.

### 6.7 Distribution til stationære computere

Tauri-desktop-builds udgives til Windows, Linux og macOS. Opdateringsprocessen til desktop-versionerne er implementeret. Forberedelserne til kodesignering på Windows er i gang; usignerede builds eller builds, der endnu ikke har opbygget en troværdighed, kan stadig udløse platformadvarsler.

## 7.  Målene for »OMI« 1.0

Programmet »OMI« 1.0 skal:

1. opretholde et stabilt og overskueligt specifikationshierarki;
2. opbevare ét kanonisk dokument og én rute for hvert normativt begreb;
3. Brug faste identifikatorer konsekvent i tekster, skemaer, eksempler og test;
4. fuldstændigt manglende modeller for oversættelse, validering, samarbejde og gengivelse;
5. at overføre aktive udkast til specifikationer til den kanoniske specifikationsstruktur;
6. offentliggøre kanoniske, maskinlæsbare skemaer og kontrollerede ordlister;
7. give eksempler, der er gyldige, ugyldige, korte, omfattende, flersprogede og fagligt relevante;
8. definere eksplicitte overensstemmelsesklasser og testbare krav;
9. dokumentkompatibilitet, migrering, fejlhåndtering og adfærd i forbindelse med tab af oplysninger;
10. at afstemme Studio-systemets faktiske adfærd med specifikationskravene uden at betragte implementeringen som normativt bindende;
11. at validere specifikationer gennem referenceimplementeringer og uafhængige implementeringer;
12. etablere en styringsstruktur, der kan sikre, at standarden opretholdes efter version 1.0.

## 8. Programfaser

### Fase 1 — Gennemgang af dokumentationen

**Status:** Afsluttet

Den oprindelige dokumentation blev registreret, klassificeret og omstruktureret. Der blev identificeret og dokumenteret konflikter mellem identifikatorer, dubletter og manglende områder.

### Fase 2 — Grundlaget for styringen

**Status:** Stort set afsluttet

De centrale retningslinjer for styring, livscyklus, versionsstyring, terminologi, register, stil og dokumentationsarkitektur er offentliggjort.

Blandt de resterende prioriteter er en mere eksplicit proces for bidrag og beslutningstagning, en politik for implementering og overholdelse samt formelle godkendelsesregler for senere overgange i livscyklussen.

### Fase 3 — Strukturel refaktorering og statushygiejne

**Status:** Stort set færdiggjort; kræver løbende vedligeholdelse

Der er fastlagt standardruter, specifikationsidentifikatorer og dokumentationskategorier. Status for produktimplementering, integrationsstatus og status for normative specifikationer dokumenteres nu hver for sig.

Det resterende arbejde omfatter automatiske kontroller af forældede statusdatoer, ødelagte links, dublerede identifikatorer og afvigelser i registreringsdatabasen og stierne.

### Fase 4 — Færdiggørelse af kernemodellen

**Status:** I gang

Der foreligger omfattende dokumentation for identitet/bidragyder samt versionsstyring og implementering af ændringer. Det kommende specifikationsarbejde bør samle kravene til batchbehandling i arbejdstilstand, checkpoint-semantik, tombstones, tilstandsdigests, stabil forankring, validering og eksplicit kravkortlægning.

Afslutningskriterium: Et minimalt semantisk manuskript, dets objekter, bidragydere, identifikatorer, versioner og ændringer kan repræsenteres og valideres uden at være afhængig af udokumenteret implementeringsadfærd.

### Fase 5 — Arbejdsgange, tilladelser og flersproget semantik

**Status:** Implementeringen er på flere områder længere fremme end specifikationen

Fagfællevurdering, roller og flersproget produktadfærd findes nu i Studio, mens specifikationerne for oversættelse og samarbejde/tilladelser stadig er ufuldstændige eller reserverede.

Prioritet: Anvend dokumentation fra implementeringen til at udarbejde præcise, implementeringsuafhængige krav til anonymitet ved gennemgang, rolleafgrænsninger, oversættelsesforhold, afvigelse/synkronisering og sporbarhed.

Afslutningskriterium: Samarbejde, gennemgang, annotering, tilladelse og flersprogede relationer kan repræsenteres som strukturerede, versionsbevidste videnskabelige objekter.

### Fase 6 — Færdiggørelse af litteraturliste og kildehenvisninger

**Status:** Delvist afsluttet

Der findes forskellige modeller for kildehenvisninger og bibliografiske oplysninger, og Studio indeholder grundlæggende funktioner til opslag af kildehenvisninger og bibliografiske oplysninger.

Prioritet: adskillelse af citater fra bibliografiske poster, fastlæggelse af kildens oprindelse, afstemning af identifikatorer, fjernelse af dubletter, caching og genbrug af referencebiblioteker.

Afslutningskriterium: Et værk kan tilføjes én gang til et bibliotek på manuskriptniveau og citeres gentagne gange uden at den bibliografiske post duplikeres.

### Fase 7 — Validerings-, gengivelses- og offentliggørelsesprofiler

**Status:** Produktimplementeringen ligger delvist foran specifikationerne

Der findes udgivelsesprofiler og generelle eksportindstillinger i Studio, mens de formelle specifikationer for validering og rendering-/udgivelsesprofiler stadig er ufuldstændige.

Prioritet: at definere maskinlæsbare valideringsrapporter, profilidentitet/arv, bevarelse af semantisk kilde, fejl/advarsler og krav til deterministisk output.

Afslutningskriterium: Implementeringer skal kunne afgøre, om et manuskript opfylder en angivet profil, og generere resultater uden at ændre den semantiske kilde uden at give besked herom.

### Fase 8 — Kanoniske skemaer og eksempler

**Status:** Planlagt / kritisk arbejde forud for version 1.0

Leverancerne omfatter versionerede kanoniske JSON-skemaer, stabile skemaidentifikatorer, autoritetsregler, gyldige/ugyldige testdata, flersprogede eksempler, eksempler med omfattende referencer samt eksempler på versionshistorik.

Afslutningskriterium: Uafhængige implementeringer validerer de samme testopsætninger og opnår ækvivalente strukturelle resultater.

### Fase 9 — Import-, eksport- og interoperabilitetskortlægninger

**Status:** Referenceimplementering aktiv; normativ model ufuldstændig

Studiet benytter allerede import fra DOCX og eksport til flere udgivelsesformater. `OMI-SPEC-340` skal omdanne denne praktiske erfaring til konkrete transformationsregler, fejlrapportering, forventninger til round-trip og mappingsskabeloner.

Prioriterede tilknytninger omfatter JATS, XML, HTML, DOCX, EPUB, CSL, JSON/BibTeX/RIS, hvor det er relevant, Crossref/DataCite-metadata samt udvekslings- og bevaringspakker fra OJS.

Afvisningskriterium: Konstrukter, der ikke understøttes, udeladte historiske oplysninger og tab af information er eksplicitte og kan testes, i stedet for at være skjulte.

### Fase 10 — Integrationsprofiler og interoperabilitet

**Status:** OJS og OMP er i drift; de øvrige profiler er ufuldstændige

Den platformsuafhængige integrationsarkitektur og profilerne OJS/OMP er underbygget af omfattende implementeringsdokumentation, herunder native PKP 3.5-end-to-end-tests. Arbejdet med kompatibilitet på tværs af versioner, sikkerhedsforstærkning af implementeringer og formel overensstemmelse fortsætter.

Prioriteter:

- harden OJS og OMP (frem og tilbage), gennemgå integration og kompatibilitet på tværs af versioner;
- dokumentering af implementering, gendannelse og operatørdiagnostik for begge PKP-konnektorer;
- definer kapacitetsopdagelse/versionsforhandling;
- formalisere autentificeringsmetoderne for udbydere;
- veludviklede adaptere til cloud, identitet, oversættelse og datalager;
- sikre, at der ikke opstår koblinger på tværs af databaser.

Afslutningskriterium: Mindst to uafhængigt meningsfulde eksterne workflow-integrationer skal demonstrere de samme platformneutrale principper for »OMI«.

### Fase 11 — Test af funktionalitet og overensstemmelse

**Status:** Påbegyndt på evidensrapportniveau; den formelle pakke er endnu ikke tilgængelig

Implementeringsstatusmatricen og Studio-statusrapporterne giver et grundlag for sammenligning, men målrettede enhedstests udgør ikke en overensstemmelsestest i henhold til »OMI«.

Leverancerne omfatter »`OMI-SPEC-350`«, navngivne overensstemmelsesklasser, en referenceimplementering af validatoren, en formel testsuite, resultater, der er knyttet til kravene, samt dokumenterede afvigelser.

Afslutningskriterium: OMI 1.0-adfærd demonstreres gennem kørbart, versionsstyret bevismateriale frem for blot tekst.

### Fase 12 — Selvstændig gennemførelse og offentlig høring

**Status:** Planlagt

Projektet bør søge eksterne implementeringspartnere, PKP/fællesskabsgennemgang og prototyper til interoperabilitet, inden »OMI« 1.0 erklæres for stabil.

Leverancerne omfatter udkast til kandidatdokumenter, offentlig normativ gennemgang, afklarede indholdsmæssige bemærkninger, vejledning i overførsel samt implementeringsrapporter.

### Fase 13 — Udgivelse af version 1.0 af »OMI«

**Status:** Planlagt

Leverancer:

- En stabil række specifikationer;
- kanoniske skemaer og eksempler;
- udgivelse af overensstemmelsestest;
- udgivelse af webstedet i forskellige versioner;
- arkiveret og reproducerbar udgivelsespakke;
- statusrapport om gennemførelsen;
- Styrings- og vedligeholdelsesplan for 1.x-serien.

Afslutningskriterium: Den ansvarlige proces godkender formelt pakken som »Stable« og udgiver en reproducerbar udgave af OMI 1.0.

### Fase 14 — Officielle oversættelser

**Status:** Produktlokalisering er langt fremme; oversættelsen af det normative dokument er udsat

Lokaliseringen af studiets brugergrænseflade og hjælpetekster samt navigationen på hjemmesiden viser, at der er mulighed for flersproget implementering. Der bør udarbejdes fuldstændige officielle oversættelser af de normative specifikationer, når den engelske 1.0-pakke er stabiliseret, for at undgå, at der opretholdes divergerende normative tekster under den hurtige udvikling af udkastene.

## 9. De umiddelbare prioriteter

De mest værdifulde næste skridt er:

1. afslutte produktionsstabiliseringen af server-side persistens og det resterende arbejde med databaseintegration;
2. sætte den operationelle peer-review-adfærd i sammenhæng med kravene i »`OMI-SPEC-200`«;
3. styrke OJS-synkroniseringen og fastlægge verificerede kompatibilitetsgrænser;
4. styrke OMP kompatibilitet på tværs af versioner, implementering og gendannelse i forhold til den offentliggjorte profil;
5. fuldføre arbejdet med oversættelse, validering og fastlæggelse af samarbejds- og tilladelsesbetingelser;
6. offentliggøre det første kanoniske, versionerede skema-/fixture-sæt;
7. formalisere import/eksport- og rendering/profil-semantikken fra den eksisterende Studio-implementering;
8. fuldstændig integration af signering af Windows-udgivelser efter godkendelse fra signeringstjenesten;
9. fortsætte arbejdet med integrationsudbydere, samtidig med at leverandørernes adgangsoplysninger og godkendelsesmodeller holdes adskilt;
10. inddrage mindst én uafhængig implementering eller interoperabilitetsprototype inden OMI 1.0.

## 10. Kriterier for frigivelse af OMI 1.0

OMI 1.0 MÅ IKKE erklæres for stabil, blot fordi Open Manuscript Studio indeholder mange funktioner.

En version 1.0 kræver som minimum:

- et fuldstændigt og veldefineret omfang af kernespecifikationen;
- faste, permanente identifikatorer og kanoniske ruter;
- kanoniske, maskinlæsbare skemaer;
- eksplicitte versionerings- og kompatibilitetsregler;
- valideringssemantik og overensstemmelsesklasser;
- normativ import-/eksportadfærd for deklarerede tilknytninger;
- udførbare overensstemmelsesprøveopsætninger og -tests;
- dokumenteret dokumentation for implementeringen fra Studio;
- meningsfuld dokumentation for uafhængig implementering eller interoperabilitet;
- offentlig høring, hvor der ikke er kendt til nogen uafklarede spørgsmål, der kan forhindre en interoperabel implementering;
- gentagelige fejl ved udgivelsen og styring efter version 1.0.

## 11. Politik for vedligeholdelse af status

Denne køreplan bør opdateres, når programmets prioriteter eller udgivelseskriterier ændres. Oplysninger om produkter, der ændrer sig hurtigt, bør primært opdateres på [Studio Implementation Status](./studio-implementation-status.md) og [Integration Implementation Status](../integrations/implementation-status.md) og derefter medtages her, når de har væsentlig indflydelse på OMI 1.0-programmet.

Denne opdeling er bevidst: Køreplanen beskriver, i hvilken retning standarden udvikler sig, mens de daterede statusrapporter beskriver, hvad den nuværende referenceimplementering rent faktisk kan.
