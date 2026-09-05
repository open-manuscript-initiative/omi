---
id: implementation-status-matrix
title: OMI Statusoversigt over implementeringen
sidebar_label: Statusoversigt over implementeringen
description: Den videnskabeligt underbyggede status for »OMI« – specifikationer, skemaer, eksempler, støtte til referenceimplementering, validering og overensstemmelsestest.
keywords:
  - Open Manuscript Initiative
  - OMI
  - implementation status
  - conformance
  - Open Manuscript Studio
  - roadmap
---

# Open Manuscript Initiative Statusoversigt over implementering

## Dokumentmetadata

| Felt | Værdi |
|---|---|
| Dokumenttype | Statusrapport om ledelse |
| Status | Udkast |
| Version | 0.3.0 |
| Normativt sprog | Engelsk |
| Senest opdateret | 05.09.2026 |
| Dækning | Alle identifikatorer i registret over specifikationer for »OMI« |
| Bevisgrundlag | Fuldstændig gennemgang af `main`-branch fra 06.08.2026, suppleret med OMI-SPEC-320-specifikation, skema, testopstilling, valideringsværktøj samt aktuel Studio-eksport `.omi.json`, der blev gennemgået den 05.09.2026 |
| Gyldighed | Informativt; Specifikationsregistret og de enkelte specifikationer er fortsat gældende |

## 1. Formål

Dette dokument beskriver den aktuelle status for implementering og verifikation af hver enkelt specifikationsidentifikator, der er tildelt af Open Manuscript Initiative.

Den skelner mellem fem spørgsmål, som ikke må forveksles:

1. Findes der et kanonisk specifikationsdokument?
2. Er det pågældende dokument blevet overført til den nuværende skabelon til »OMI«-specifikationen?
3. Er der offentliggjort maskinlæsbare artefakter og overensstemmelsesprøveopstillinger?
4. Implementerer Open Manuscript Studio identificerbare dele af specifikationen?
5. Er adfærden blevet valideret, testet for overensstemmelse eller påvist uafhængigt?

Formålet med matrixen er at:

- afdække uoverensstemmelser mellem prozesspecifikationer og kørbare beviser;
- forhindre, at eksperimentel implementeringskode forveksles med normativ overensstemmelse;
- danne et udgangspunkt for planlægning og evaluering;
- fastlægge, hvilke yderligere beviser der kræves for hver specifikation;
- understøtte fremtidige beslutninger om, hvornår en udgave er klar til udgivelse.

## 2. Kompetence og fortolkning

[OMI Specification Registry](./specification-registry.md)en er den gældende kilde for:

- permanente specifikationsidentifikatorer;
- officielle titler;
- tildelingsstatus;
- livscyklustilstande;
- nøjagtige versioner;
- kanoniske stier.

De enkelte specifikationsdokumenter er gældende for de krav, der er fastsat deri.

Denne matrix er en informativ rapport baseret på dokumentation. Den:

- ændre en specifikations livscyklusstatus;
- tildele en implementering status som værende i overensstemmelse med specifikationen;
- gøre et ikke-offentliggjort skema til det gældende;
- erstatte en specifikation, en valideringsværktøj, en testsuite eller en implementeringsrapport;
- sikre, at alle eksperimentelle funktioner er i overensstemmelse med den seneste specifikationstekst.

En specifikation kan være et færdigudviklet dokument uden en implementering. En implementering kan indeholde væsentlig funktionalitet, selvom den tilhørende specifikation stadig er på udkaststadiet. Dette er to uafhængige aspekter.

## 3. Statusordforråd

### 3.1 Specifikationer og artefakters tilstande

| Tilstand | Betydning |
|---|---|
| **Aktivt udkast** | Der findes et kanonisk specifikationsdokument, som er registreret med status »Udkast«. |
| **Reserveret** | Identifikatoren og emnet er tildelt, men der findes ingen godkendt udkastspecifikation. |
| **Nuværende skabelon** | Den aktive specifikation er oprettet eller blevet gennemgribende omskrevet ved hjælp af den nuværende specifikationsskabelon. |
| **Migrering påkrævet** | Det aktive dokument er fra før den kanoniske specifikationsskabelon, eller det indeholder endnu ikke alle de krævede afsnit om metadata, overensstemmelse, kompatibilitet, dokumentation og ændringshistorik. |
| **Udkast til artefakt offentliggjort** | Der findes en versioneret, maskinlæsbar artefakt på en autoritativ placering, men den kan stadig blive ændret på en måde, der er uforenelig med den endelige version, inden den bliver stabil. |
| **De første testtilfælde er offentliggjort** | Der findes versionerede positive og negative eksempler, men de udgør endnu ikke en komplet formel overensstemmelsessuite. |
| **Ikke offentliggjort** | Det relevante kanoniske skema, fixturesættet, rapportformatet eller andre maskinlæsbare artefakter findes ikke på en autoritativ opbevaringsplacering. |
| **Ikke påbegyndt** | Der blev ikke fundet dokumentation i arkivet for, at der er udført væsentligt arbejde inden for den angivne dimension. |
| **Ikke relevant** | Det angivne mål er ikke påkrævet for specifikationen i dens nuværende sammenhæng. |

### 3.2 Tilstande for implementeringsbevis

| Tilstand | Betydning |
|---|---|
| **Undersøgende** | Der findes relaterede typer, felter, brugergrænsefladekoncepter eller arbejdsgange, men de er ufuldstændige, implementeringsspecifikke eller ikke påviseligt i overensstemmelse med den kanoniske specifikation. |
| **Delvis** | En identificerbar delmængde af specifikationsdomænet er repræsenteret eller kan anvendes, men væsentlige krav, validering, interoperabilitet eller adfærd i livscyklussen mangler. |
| **Implementeret** | Den gældende normative adfærd er implementeret og tilknyttet en angivet specifikationsversion, men den formelle overensstemmelsestest er ikke afsluttet. |
| **Testet** | Implementeringen omfatter automatiserede beviser for, at de gældende normative krav for en angivet version er opfyldt. |
| **Overensstemmende** | Implementeringen opfylder en offentliggjort overensstemmelsesklasse ved hjælp af den godkendte overensstemmelsestestpakke og angiver eventuelle tilladte begrænsninger. |
| **Ikke verificeret** | Der kan forekomme dokumentation uden for de gennemgåede arkiver, men den er ikke blevet verificeret i forbindelse med denne baseline. |

Udtrykkene **implementeret**, **testet** og **overensstemmende** er bevidst valgt i en streng betydning. De må ikke udledes af, at der findes klasser, grænseflader, sider eller eksempler med lignende navne.

## 4. Udgangspunkt for evidensen

I den indledende gennemgang blev der anvendt det offentlige OMI-specifikationsarkiv og det aktuelle Open Manuscript Studio-arkiv.

Bevismaterialet fra Verified Studio omfatter:

- alpha-omfanget, der er defineret i `README.md`;
- grænsefladerne »manuskript«, »kommentar«, »henvisning«, »blok«, »afsnit«, »agent« og »bidrag« på `src/types/omi.ts` og `src/model/identity.ts`;
- redigering af manuskripter og bidragyderhandlinger i `src/app/useStudioStore.ts`;
- Overførsel af forfattere fra ældre systemer i `src/document/migrateIdentityModel.ts`;
- adskillelse mellem konto og agent i `src/model/user.ts`;
- roller i arbejdsområdet, tilladelser, invitationer samt roller som korrekturlæser og oversætter i `src/model/workspace.ts`;
- den nuværende implementering af arbejdsområdet for lokal lagring i `src/store/workspaceStore.ts`;
- identitets- og bidragsenhedstests i `tests/identity-model.test.ts`;
- modellerne »`OMI-SPEC-160@0.1.0`«, »revision«, »change-set«, »change-event«, »snapshot«, »history-completeness«, »commit«, »validation« og »revert« i `src/model/versioning.ts`;
- Overførsel af revisionshistorik, der kun indeholder tidsstempler, i `src/document/migrateVersioningModel.ts`;
- den flersprogede grænseflade til revisionshistorikken på `src/components/HistoryPanel.tsx`;
- Versionsstyring af enhedstests i `tests/versioning-model.test.ts`, der omfatter uforanderlige rødder, bevarelse af overordnede elementer, lineær historik, atomare ændringssæt, tilbageførsler, overfladisk migrering, validering og eksport.

Den nuværende implementering af versionsstyring blev flettet ind i Open Manuscript Studio i PR nr. 2 med fletningscommit `65f3a2f4fa9eaf6adf370f4bae5eec1e98521db2`.

I den fuldstændige gennemgang fra 6. august 2026 blev der ikke fundet gyldige artefakter fra OMI-arkivet for:

- et maskinlæsbart format til valideringsrapporter;
- en formel testsuite til overensstemmelseskontrol;
- uafhængigt verificerede implementeringer.

Opdateringen af OMI-SPEC-320 fra 5. september 2026 tilføjer det første kanoniske, versionerede manuskript til »JSON«-skemaet, et indledende sæt bestående af otte dokumenter med positive og negative testtilfælde samt en referencetestvaliderer. Disse artefakter dækker strukturel validering og udvalgte semantiske kontroller; de udgør ikke et komplet »OMI«-skema-sæt eller en formel overensstemmelsessuite.

Open Manuscript Studio henviser i øjeblikket til URI’en `https://openmanuscript.org/schemas/omi-manuscript-0.1.json` i sin manuskripttype TypeScript. At denne URI findes i kildekoden, er ikke et bevis på, at der er offentliggjort et kanonisk skema, eller at implementeringen valideres i forhold til det.

## 5. Samlet øjebliksbillede

| Mål | Nuværende udgangspunkt |
|---|---:|
| Registrerede specifikationsidentifikatorer | 23 |
| Aktuelle udkast til specifikationer | 17 |
| Forbeholdte specifikationer | 6 |
| Aktive specifikationer, der bruger den nuværende skabelon | 3 |
| Aktive specifikationer, der kræver migrering af skabeloner | 14 |
| Offentliggørelse af kanoniske, maskinlæsbare specifikationssæt | 1 udkastssæt verificeret |
| Offentliggjorte overensstemmelsesfixtursæt | 1 indledende sæt verificeret |
| Implementeringer af validatorer | 1 referencefixture-validator verificeret |
| Formelle overensstemmelsestestsæt | 0 verificerede |
| Uafhængige implementeringer | 0 verificerede |
| Studiestatus: Delvis | 8 specifikationer |
| Projektstatus: Undersøgelsesfase | 6 specifikationer |
| Projektstatus: Ikke påbegyndt | 8 specifikationer |
| Studiestatus: Ikke relevant | 1 specifikation |

Disse tællinger beskriver de beviskategorier, der anvendes i dette dokument. De angiver ikke, hvor stor en procentdel der er færdiggjort, eller kvaliteten af specifikationerne.

## 6. Matrix over specifikationernes parathed

### 6.1 Grundlag og centrale semantiske modeller

| Identifikator | Specifikation | Registreringsstatus | Version | Skabelon | Maskinlæsbare artefakter | Overensstemmelsesfixturer |
|---|---|---|---|---|---|---|
| `OMI-SPEC-000` | [Core Principles](../foundations/core-principles.md) | Aktivt udkast | 0.1.0 | Overgang påkrævet | Ikke relevant | Ikke offentliggjort |
| `OMI-SPEC-100` | [Document Model](../specifications/document-model.md) | Aktivt udkast | 0.1.0 | Kræver migrering | Ikke offentliggjort | Ikke offentliggjort |
| `OMI-SPEC-110` | [Anchor Model](../specifications/anchor-model.md) | Aktivt udkast | 0.1.0 | Kræver migrering | Ikke offentliggjort | Ikke offentliggjort |
| `OMI-SPEC-120` | [Scholarly Object Model](../specifications/core/scholarly-object-model.md) | Aktivt udkast | 0.1.0 | Overførsel påkrævet | Ikke offentliggjort | Ikke offentliggjort |
| `OMI-SPEC-130` | [Annotation Model](../specifications/annotation-model.md) | Aktivt udkast | 0.2.0 | Kræver migrering | Ikke offentliggjort | Ikke offentliggjort |
| `OMI-SPEC-140` | [Metadata Model](../specifications/metadata-model.md) | Aktivt udkast | 0.1.0 | Kræver migrering | Ikke offentliggjort | Ikke offentliggjort |
| `OMI-SPEC-150` | [Identity and Contributor Model](../specifications/identity-contributor-model.md) | Aktivt udkast | 0.1.0 | Nuværende skabelon | Ikke offentliggjort | Ikke offentliggjort |
| `OMI-SPEC-160` | [Versioning and Change Model](../specifications/versioning-change-model.md) | Aktivt udkast | 0.1.0 | Nuværende skabelon | Ikke offentliggjort | Ikke offentliggjort |
| `OMI-SPEC-170` | Oversættelsesmodel | Reserveret | — | Ikke relevant | Ikke påbegyndt | Ikke påbegyndt |
| `OMI-SPEC-180` | Valideringsmodel | Reserveret | — | Ikke relevant | Ikke påbegyndt | Ikke påbegyndt |
| `OMI-SPEC-190` | Samarbejds- og tilladelsesmodel | Reserveret | — | Ikke relevant | Ikke påbegyndt | Ikke påbegyndt |

### 6.2 Videnskabelig arbejdsgang, litteraturhenvisninger og publikationer

| Identifikator | Specifikation | Registreringsstatus | Version | Skabelon | Maskinlæsbare artefakter | Overensstemmelsesfixturer |
|---|---|---|---|---|---|---|
| `OMI-SPEC-200` | [Review Model](../specifications/review-model.md) | Aktivt udkast | 0.1.0 | Kræver migration | Ikke offentliggjort | Ikke offentliggjort |
| `OMI-SPEC-210` | [Citation Model](../specifications/citation-model.md) | Aktivt udkast | 0.2.0 | Kræver migrering | Ikke offentliggjort | Ikke offentliggjort |
| `OMI-SPEC-220` | [Bibliographic Record Model](../specifications/bibliographic-record-model.md) | Aktivt udkast | 0.1.0 | Overførsel påkrævet | Ikke offentliggjort | Ikke offentliggjort |
| `OMI-SPEC-221` | [Reference Library and Registry Architecture](../specifications/reference-library-registry.md) | Aktivt udkast | 0.1.0 | Kræver migrering | Ikke offentliggjort | Ikke offentliggjort |
| `OMI-SPEC-230` | [Publishing Model](../specifications/publishing-model.md) | Aktivt udkast | 0.1.0 | Kræver migrering | Ikke offentliggjort | Ikke offentliggjort |
| `OMI-SPEC-240` | Model for gengivelse og offentliggørelse | Reserveret | — | Ikke relevant | Ikke påbegyndt | Ikke påbegyndt |

### 6.3 Platform, udveksling og overensstemmelse

| Identifikator | Specifikation | Registreringsstatus | Version | Skabelon | Maskinlæsbare artefakter | Overensstemmelsesfixturer |
|---|---|---|---|---|---|---|
| `OMI-SPEC-300` | [Plugin Architecture](../specifications/plugin-architecture.md) | Aktivt udkast | 0.1.0 | Kræver overførsel | Ikke offentliggjort | Ikke offentliggjort |
| `OMI-SPEC-310` | [Platform API](../specifications/api.md) | Aktivt udkast | 0.1.0 | Kræver overførsel | Ikke offentliggjort | Ikke offentliggjort |
| `OMI-SPEC-320` | [File Format](../specifications/file-format.md) | Aktivt udkast | 0.2.0 | Nuværende skabelon | [Draft schema](/schemas/omi-manuscript-0.2.schema.json) | [Initial fixtures](/examples/omi-spec-320/0.2.0/manifest.json) |
| `OMI-SPEC-330` | [Container Architecture](../specifications/container-architecture.md) | Aktivt udkast | 0.1.0 | Kræver migrering | Ikke offentliggjort | Ikke offentliggjort |
| `OMI-SPEC-340` | Import- og eksportmodel | Reserveret | — | Ikke relevant | Ikke påbegyndt | Ikke påbegyndt |
| `OMI-SPEC-350` | Funktions- og overensstemmelsesmodel | Reserveret | — | Ikke relevant | Ikke påbegyndt | Ikke påbegyndt |

## 7. Bevis for implementering afOpen Manuscript Studio

Ingen række i dette afsnit opfylder i øjeblikket kriterierne for **Implementeret**, **Testet** eller **Overensstemmende** i henhold til de ovenstående strenge definitioner.

Repositoriet OMI indeholder nu en valideringsfunktion til referencefixturer for `OMI-SPEC-320@0.2.0`. Ingen Studio-implementeringer anvender endnu denne valideringsfunktion, og der er ikke verificeret nogen formelle overensstemmelsestests eller uafhængige beviser for implementering for nogen specifikation. Disse oplysninger er derfor sammenfattet for den samlede baseline i stedet for at blive gentaget i hver enkelt række.

### 7.1 Grundlag og centrale semantiske modeller

| Identifikator | Studiestatus | Bekræftet dokumentation | Vigtigste mangler før en højere status |
|---|---|---|---|
| `OMI-SPEC-000` | Ikke relevant | Principperne fungerer som retningslinjer for arkitekturen snarere end at definere en direkte udførbar komponent. | Omdan principper, der gælder på tværs af suiter, til sporbare krav og evalueringskriterier. |
| `OMI-SPEC-100` | Delvis | `OmiManuscript` indeholder sektioner og blokke; Studio-butikken vælger sektioner, redigerer blokke og tilføjer sektioner. | Kanonisk skema, invarianter, bloksemantik, udvidelsesregler, validering og kortlægning af krav. |
| `OMI-SPEC-110` | Undersøgende | Annotationer kan henvise til `targetBlockId` og eventuelt `targetText`. | Stabil ankeridentitet, selektorer, opløsning, mutationsadfærd, håndtering af tvetydigheder og tests. |
| `OMI-SPEC-120` | Delvis | Et samlet maskinskrevet manuskript indeholder agenter, bidrag, afsnit, blokke, kommentarer, henvisninger, identifikatorer, tidsstempler og revisionshistorik. | Tilpas objektgrænser og livscykler til specifikationen; offentliggør skema og valideringsdokumentation. |
| `OMI-SPEC-130` | Delvis | `OmiAnnotation` definerer en identifikator, type, målblok, valgfri måltekst, brødtekst og gengivelseshint; annoteringer vises i manuskriptstadiet. | Kanoniske mål, begrundelser, forfatterskab, livscyklus, trådning, tilladelser, validering og udveksling. |
| `OMI-SPEC-140` | Delvis | Manuskriptstatus omfatter lokalitet, titel, undertitel, resumé, nøgleord, identifikatorer, aktører, bidrag og tidsstempler. | Metadatas herkomst, kontrollerede termer, kardinaliteter, profiler, validering og eksterne tilknytninger. |
| `OMI-SPEC-150` | Delvis | The Studio definerer »`OMI-SPEC-150@0.1.0`«, adskiller konti fra agenter, repræsenterer navneformer, identifikator- og tilhørsforholdsangivelser, kontekstuelle bidrag, roller, rækkefølge og tilhørende status, migrerer eksisterende forfattere, stiller en flersproget redigeringsfunktion til bidragsydere til rådighed og indeholder målrettede enhedstests. | Kanonisk skema, fuldstændig synlighed og herkomstbehandling, yderligere agenttyper, afstemning, lagring i backend, kortlægning af krav samt overensstemmelsesfixturer. |
| `OMI-SPEC-160` | Delvis | The Studio definerer `OMI-SPEC-160@0.1.0`; opretter uforanderlige rod- og underrevisioner med lineær afstamning fra én forælder; registrerer semantiske ændringssæt og hændelser for ændringer i manuskripter og bidragydere; gemmer komplette eller overfladiske øjebliksbilleder; udfører ikke-destruktive tilbageførsler som nye revisioner; fastlægger aktørtilskrivning på en konservativ måde; stiller en flersproget historik-brugergrænseflade til rådighed; eksporterer revisionshistorik; og inkluderer målrettede enhedstests. | Batchbehandling i arbejdstilstand og checkpoint-commits, tombstones, integritets-/tilstandsdigests, eksplicit kortlægning af `REQ-VCH-*`, kanoniske skemaer og fixtures, understøttelse af forgrening og sammenfletning, styrkelse af persistens samt formelle overensstemmelsestests. |
| `OMI-SPEC-170` | Udforskende | Manuskripter har en lokalitet; bruger- og arbejdsrumsmodeller omfatter arbejdssprog og en oversætterrolle. | Oversættelsesobjekter, kilde-mål-relationer, ækvivalens, afvigelser, synkronisering og herkomst. |
| `OMI-SPEC-180` | Ikke påbegyndt | Der er ikke verificeret nogen kanonisk validator eller valideringsrapportmodel. | Udarbejd valideringsmodellen og offentliggør maskinlæsbar rapportsemantik samt testopsætninger. |
| `OMI-SPEC-190` | Undersøgende | Workspace-koden definerer roller, tilladelser, medlemmer, invitationer samt roller som korrekturlæser og oversætter med lokal lagring. | Udarbejd specifikationen; tilføj serverbaseret autorisation, tilladelser på manuskriptniveau, sporbarhed og overensstemmelsestests. |

### 7.2 Videnskabelig arbejdsgang, litteraturhenvisninger og publikationer

| Identifikator | Studiestatus | Bekræftet dokumentation | Vigtigste mangler før en højere status |
|---|---|---|---|
| `OMI-SPEC-200` | Undersøgende | Roller i arbejdsområdet omfatter korrekturlæser, og medlemmer kan få tilladelse til at oprette kommentarer. | Gennemgå objekter, tildelinger, runder, status, beslutninger, fortrolighed, identitetsafsløring og hændelseshistorik. |
| `OMI-SPEC-210` | Delvis | `OmiCitation` og citatmatrisen i manuskriptet repræsenterer citatnøgler, etiketter, kildetyper og datoer. | Adskil citatforekomster fra bibliografiske poster; fastlæg forekomster og definer gengivelsesuafhængig semantik. |
| `OMI-SPEC-220` | Undersøgende | Den nuværende citattype indeholder et lille sæt felter, der ligner dem i en bibliografisk post. | Dedikeret bibliografisk postidentitet, bidragydere, titler, beholdere, identifikatorer, herkomst, sammenlægning og validering. |
| `OMI-SPEC-221` | Ikke påbegyndt | Der blev ikke verificeret nogen integration med et referencelibrary på manuskriptniveau eller et eksternt register. | Adfærd vedrørende biblioteksmedlemskab, genbrug af poster, opslag, afstemning, caching, herkomst og deduplikering. |
| `OMI-SPEC-230` | Ikke påbegyndt | Alfa-editoren kan bearbejde og eksportere manuskriptdata, men der er ikke verificeret nogen publikationspipeline, der er tilpasset specifikationerne. | Publikationsopgaver, profiler, transformationer, sporbarhed af output, håndtering af fejl og bevarelse af den semantiske kilde. |
| `OMI-SPEC-240` | Ikke påbegyndt | Der er ikke verificeret nogen deklaration af rendering eller publikationsprofil. | Udarbejd specifikationen og definer profilens identitet, krav, arv, outputbegrænsninger og validering. |

### 7.3 Platform, udveksling og overensstemmelse

| Identifikator | Studiestatus | Bekræftet dokumentation | Vigtigste mangler før en højere status |
|---|---|---|---|
| `OMI-SPEC-300` | Ikke påbegyndt | Der er ikke verificeret noget plugin-manifest, nogen udvidelsesAPI, nogen funktionsgrænser eller nogen isoleringsmekanisme. | Definer og implementer pluginets identitet, livscyklus, tilladelser, udvidelsespunkter, kompatibilitet og begrænsning af fejl. |
| `OMI-SPEC-310` | Ikke påbegyndt | Den nuværende alfa-version er primært klientbaseret; der er ikke verificeret nogen implementering, der hævder at understøtte den registrerede platform API. | Versionsstyret API-kontrakt, autentificering, autorisation, ressourcer, begivenheder, fejl, paginering og tests. |
| `OMI-SPEC-320` | Delvis | The Studio eksporterer `.omi.json` som `application/vnd.openmanuscript+json`, medtager forløberen `0.1` som skema-URI, udelader det forældede indlejrede `authors`-felt fra kanoniske eksporter og inkluderer en overførbar revisionshistorik. | Anvend `0.2.0`-konvolutten og -skemaet; implementer versionsforhandling, detektion af dublerede medlemmer, lagdelt validering, bevarelse af ukendte felter, migrering og rapportering af tab; tilpas adfærd til `REQ-FMT-*`. |
| `OMI-SPEC-330` | Ikke påbegyndt | Der er ikke blevet verificeret nogen »OMI«-containerpakke, manifest, ressourcegraf, integritetsoptegnelse eller pakningsworkflow. | Implementer pakkelayout, manifest, mediehåndtering, kontrolsummer, signaturer, sikker udpakning og bevaringsregler. |
| `OMI-SPEC-340` | Undersøgende | Der findes eksport af en manuskriptJSON-repræsentation samt migrationsveje for identitet og versionshistorik; der er ikke verificeret nogen generel import-brugergrænseflade eller dokumentation for round-trip. | Udarbejd specifikationen; tilføj import, eksport, kortlægning, tabsrapporter, håndtering af ikke-understøttet indhold og round-trip-testscenarier. |
| `OMI-SPEC-350` | Ikke påbegyndt | Der er ikke verificeret nogen kapacitetserklæring, format for implementeringspåstande eller overensstemmelsesværktøj. | Definer overensstemmelsesklasser, kapacitetserklæringer, testmanifester, resultatrapporter og regler for verifikation af påstande. |

## 8. Tværgående resultater og kendte afvigelser

### 8.1 Overførsel af specifikationsskabeloner

`OMI-SPEC-150` og `OMI-SPEC-160` blev oprettet direkte ud fra den kanoniske specifikationsskabelon. `OMI-SPEC-320` blev grundigt omskrevet i henhold til denne i version `0.2.0`. De øvrige 14 aktive specifikationer kræver en kontrolleret migrering, der bevarer permanente identifikatorer, kanoniske ruter og ændringshistorikker, samtidig med at de nødvendige afsnit om metadata og dokumentation tilføjes.

### 8.2 Udkast til skema og henvisning til pladsholdere fra det gamle system

Det autoritative udkast til skemaet for `OMI-SPEC-320@0.2.0` er offentliggjort på `https://openmanuscript.org/schemas/omi-manuscript-0.2.schema.json`. Manuskripttypen »Studio« henviser stadig til den tidligere URI `https://openmanuscript.org/schemas/omi-manuscript-0.1.json`. Der er ikke offentliggjort noget autoritativt skema for `0.1`, hvorfor den tidligere URI fortsat fungerer som en pladsholder i implementeringen og ikke udgør grundlag for overensstemmelse med `0.2.0`.

### 8.3 Implementeringsspecifikke modeller

Studio-typerne er nyttige designreferencer, men udgør ikke automatisk den normative datamodel for OMI. Forskelle skal dokumenteres og løses gennem specifikationsændringer eller ændringer i implementeringen.

### 8.4 Vedvarende lokalt samarbejde

Den nuværende Workspace Store benytter sig udtrykkeligt af lokal browserlagring og angiver, at flerbrugerfunktionalitet i produktionsmiljøet kræver godkendte backend-APIer. Den demonstrerer derfor udforskning af domænet og ikke serverhåndhævet overholdelse af samarbejdsstandarder.

### 8.5 Adskillelse af henvisninger og poster

Den nuværende fremstilling af kildehenvisninger i Studio indeholder både forekomstbaserede og postbaserede oplysninger. Kildehenvisningsmodellen og den bibliografiske postmodel kræver en klarere adskillelse, før nogen af implementeringerne kan betragtes som færdig.

### 8.6 Versionsstyring og ændringshistorik

`OMI-SPEC-160` har nu fået sin første portable referenceimplementering i Studio. Den sammenlagte implementering tilbyder uforanderlige lineære revisioner, slægtslinjer med én forælder, semantiske ændringssæt og begivenheder, komplette eller overfladiske øjebliksbilleder, konservativ aktortilskrivning, ikke-destruktive tilbageførsler, en flersproget historikvisning, portabel eksport af historik samt målrettede enhedstests.

Implementeringen er fortsat **delvis**. De eksisterende redigeringskontroller foretager commit med den nuværende opdateringsgranularitet, hvilket betyder, at redigering af rich text og tekstfelter kan medføre for finmaskede revisioner. Batching af arbejdstilstande og eksplicitte checkpoint-commits er derfor det næste trin i implementeringen, inden man forsøger sig med forgrening og sammenfletning. Tombstones, tilstandsoversigter, stærkere persistens, eksplicit kortlægning af `REQ-VCH-*`, kanoniske fixtures, forgrening, sammenfletningsbaser, konflikter og formelle beviser for overensstemmelse mangler stadig.

De målrettede enhedstests er ikke i sig selv tilstrækkelige til at klassificere implementeringen som **Testet** i henhold til denne matrix, da der endnu ikke findes et godkendt sæt af overensstemmelsesfixturer (OMI) eller et overensstemmelsesværktøj (conformance runner), der er tilpasset kravene.

### 8.7 Validering og overensstemmelse

OMI-SPEC-320-skemaet, de indledende testdata og referencevalidatoren udgør den første basis for eksekverbare beviser. De dækker endnu ikke alle krav i »`REQ-FMT-*`«, analyse af bytes med duplikerede navne, ressourcebegrænsninger, migrering eller rundrejser på tværs af implementeringer og kvalificerer derfor ingen implementering som **Tested** eller **Conformant**.

For hver specifikation kræves der stadig, hvor det er relevant:

- præcise normative krav;
- deklarerede overensstemmelsesklasser;
- kanoniske skemaer og testdata, hvor det er relevant;
- en validator eller et overensstemmelsestestprogram;
- maskinlæsbare testresultater, der er knyttet til de nøjagtige specifikationsversioner.

## 9. Nødvendige beviser for statusoprykning

### 9.1 Fra eksplorativ til delvis

En funktion kan skifte fra **Udforskende** til **Delvis**, når:

- der findes en særskilt implementeringskomponent;
- dets forhold til en registreret specifikation er dokumenteret;
- den implementerede delmængde og de kendte udeladelser er tydeligt angivet;
- Denne adfærd kan anvendes ud over pladsholderdata eller navnelighed.

### 9.2 Delvist gennemført

En funktion kan først flyttes til **Implementeret**, hvis:

- den pågældende specifikation er et aktivt dokument;
- I implementeringen angives den nøjagtige specifikationsversion;
- de gældende normative krav er knyttet til koden eller den dokumenterede adfærd;
- de nødvendige fejlhåndterings- og persistensmekanismer er til stede;
- kendte afvigelser registreres;
- der anvendes relevante maskinlæsbare artefakter.

### 9.3 Fra implementeret til testet

En funktion kan først flyttes til **Testet**, hvis:

- de automatiserede test dækker de relevante normative krav;
- gyldige og ugyldige kampe er versionerede;
- testresultaterne er reproducerbare;
- Testsuiten angiver de nøjagtige versioner af specifikationerne og artefakterne.

### 9.4 Testet i henhold til standarden

En funktion kan kun flyttes til **Conformant**, hvis:

- der findes en godkendt overensstemmelsesklasse;
- den officielle eller anerkendte overensstemmelsestest bestås;
- der angives tilladte valgfri handlinger og begrænsninger;
- påstanden er offentliggjort i en verificerbar implementeringsrapport.

## 10. Vedligeholdelsesprocedure

Denne matrix bør opdateres, hver gang der indsendes en pull-anmodning:

- opretter eller reserverer en specifikation;
- ændrer en specifikations livscyklusfase eller -version;
- offentliggør eller erstatter et skema, et ordforråd, et sæt testdata, en valideringsfunktion eller en testpakke;
- tilføjer omfattende Studio-understøttelse;
- registrerer en uafhængig implementering;
- ændrer en kendt afvigelse;
- offentliggør en erklæring om overensstemmelse.

Hver opdatering, der medfører en ændring af status, bør indeholde dokumentation såsom:

- en kanonisk dokument- eller artefaktsti;
- en uforanderlig commit;
- en testkørsel eller en resultatrapport;
- et implementeringsproblem eller en pull-anmodning;
- en præcis versionsangivelse;
- en angivet overensstemmelsesklasse.

Status skal nedjusteres, når beviserne bliver forældede, uforenelige, tilbagetrukne eller ikke længere kan gentages.

Den fulde matrix bør gennemgås før hver udgivelse af »OMI« og ved hver overgang i livscyklussen til »Review Candidate«, »Implementation Candidate« eller »Stable«.

## 11. Program for øjeblikkelige beviser

Det næste arbejde med at fremskaffe bevismateriale bør foregå i følgende rækkefølge:

1. tilføje batchbehandling af arbejdstilstande og eksplicitte checkpoint-commits til Studio-implementeringen af »`OMI-SPEC-160`«, så almindelig indtastning ikke skaber alt for finmaskede, commit-ede revisioner;
2. sammenholde den implementerede delmængde af »Core Revision History« med de normative krav i »`REQ-VCH-*`« og registrere eksplicitte afvigelser;
3. tilføj tombstone og den adfærd vedrørende integritet/state-digest, der kræves af den valgte versionsprofil;
4. indføre »`OMI-SPEC-320@0.2.0`« i Studio og tilføje en parser, serializer, migration og dokumentation for round-trip, der er tilpasset kravene;
5. offentliggøre kanoniske identitets- og versionsskemaer med et minimalt antal gyldige og ugyldige testdata;
6. overføre de resterende aktive kernespecifikationer til den kanoniske specifikationsskabelon;
7. definere valideringsmodellen og formatet for valideringsrapporten;
8. indføre automatiserede kontroller af skemaer og overensstemmelse på tværs af specifikationer;
9. udkast til »`OMI-SPEC-170`« (oversættelsesmodel), der anvender revisionsjournalen som sit versionsstyrede grundlag;
10. Registrer kendte afvigelser som relaterede problemer og søg efter en uafhængigt udviklet parser, validator eller prototype til interoperabilitet.

## 12. Ændringshistorik

| Version | Dato | Resumé |
|---|---|---|
| 0.3.0 | 05.09.2026 | Registreret »template-complete«-`OMI-SPEC-320@0.2.0`en, det første kanoniske udkast til manuskriptskema, de indledende testdata og referencevalidatoren; opdateret Studio’s resterende implementeringsforskel og det samlede antal beviser. |
| 0.2.1 | 06.08.2026 | Opgraderet Studio-understøttelse af »`OMI-SPEC-160`« fra »Exploratory« til »Partial« efter sammenlægningen af det uforanderlige lineære revisionsregister; registreret dokumentation for revision, ændringssæt, snapshot, tilbageførsel, eksport af historik og fokuseret test; prioriteret de næste beviser til batchbehandling af arbejdstilstande, checkpoint-commits og kravkortlægning. |
| 0.2.0 | 06.08.2026 | Aktiveret `OMI-SPEC-160`, registreret to specifikationer for strømskabelmaler, opdateret Studio-dokumentation efter integrationen af `OMI-SPEC-150` og videreudviklet dokumentationsprogrammet til en lineær revisionsjournal. |
| 0.1.1 | 06.08.2026 | Aktiverede »`OMI-SPEC-150`« i beredskabsmatricen, registrerede det som den første specifikation ved hjælp af den nuværende skabelon og opdaterede programmet for umiddelbar dokumentation. |
| 0.1.0 | 06.08.2026 | Indledende evidensbaseret matrix, der dækker alle 23 registrerede identifikatorer, aktuelle specifikationsdokumenter, »Open Manuscript Studio«-understøttelse, validering, test, afvigelser og regler for statusopgradering. |
