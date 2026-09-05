---
title: Open Manuscript Initiative Vedtægter
sidebar_position: 1
---

# Open Manuscript Initiative Vedtægter

## Etablering af en åben standard for videnskabelig kommunikation

| Felt | Værdi |
| --- | --- |
| Status | Udkast |
| Version | 0.1 |
| Dokumenttype | Styring |
| Normativt sprog | Engelsk |

## Præambel

Videnskabelig kommunikation er blevet stadig mere afhængig af proprietær software, forlagspecifikke arbejdsgange og inkompatible dokumentformater. Forfattere, redaktører, bedømmere, forlag, biblioteker og arkiver er ofte nødt til at genskabe, omformatere eller omstrukturere det samme videnskabelige værk for at opfylde de tekniske krav i forskellige systemer.

Organisationen »Open Manuscript Initiative« (OMI) har til formål at ændre dette paradigme.

OMI har ikke til formål at foreskrive én bestemt redaktør, én bestemt udgivelsesplatform, ét bestemt arkiv eller én bestemt produktionsproces. Det definerer et åbent, leverandørneutralt, semantisk grundlag for videnskabelige manuskripter, så uafhængigt udviklede værktøjer og tjenester kan udveksle, behandle, udgive og bevare videnskabeligt indhold uden at miste dets struktur eller betydning.

Dette charter fastlægger missionen, værdierne, anvendelsesområdet, ledelsesprincipperne og de langsigtede mål for Det Nationale Center for Uddannelse i Læring og Udvikling (Open Manuscript Initiative).

## Mission

OMIs formål er at udvikle, vedligeholde og fremme åbne specifikationer for videnskabelige manuskripter, som:

- at bevare den semantiske betydning uafhængigt af fremstillingsformen;
- muliggøre en pålidelig udveksling mellem systemer til indholdsudvikling, redigering, udgivelse, arkivering og bevaring;
- støtte forskellige videnskabelige discipliner og publikationspraksis;
- forblive uafhængige af enkelte udgivere, leverandører, softwareprodukter og hostingudbydere;
- at fremme langsigtet tilgængelighed, validering, genbrug og bevaring af videnskabelig viden;
- muliggøre flere uafhængige og indbyrdes kompatible implementeringer.

## Vision

OMI forestiller sig et økosystem for videnskabelig kommunikation, hvor:

- Forskere kan skrive naturligt, samtidig med at de udarbejder strukturerede videnskabelige tekster;
- manuskripter forbliver flytbare gennem hele processen fra udarbejdelse, samarbejde, gennemgang, offentliggørelse, formidling og bevaring;
- software konkurrerer på brugervenlighed og funktionalitet snarere end på at binde brugerne til et bestemt format;
- tidsskrifter, forlag, arkiver og institutioner kan indføre fælles åbne grænseflader og datamodeller;
- videnskabeligt indhold kan omdannes til flere forskellige publikationsformater ud fra én autoritativ kilde;
- betydningen, oprindelsen, sammenhængene og versionshistorikken for det videnskabelige indhold forbliver maskinlæsbart.

## Kerneværdier

### Åbenhed

OMI Specifikationer, skemaer, eksempler og styringsdokumenter udarbejdes offentligt. Alle kan læse, diskutere, implementere, teste og foreslå forbedringer heraf i overensstemmelse med projektets procedurer for bidrag og styring.

### Leverandørneutralitet

Specifikationen kontrolleres ikke af noget forlag, nogen softwareudbyder, institution, kommerciel enhed eller implementering. OMI er beregnet til at tjene det videnskabelige kommunikationsøkosystem som helhed.

### Interoperabilitet

Designvalg bør forbedre uafhængige systemers evne til at udveksle og behandle videnskabeligt indhold. Kompatibilitet og eksplicitte tilknytninger foretrækkes frem for isolerede eller proprietære konventioner.

### Semantik først

Indholdets videnskabelige betydning og sammenhænge har forrang frem for den visuelle formatering. Præsentationen betragtes som et separat, udskifteligt lag.

### Bærbarhed

Et standardiseret manuskript må ikke være afhængigt af en bestemt applikation, database, platform, udgiver eller hostingudbyder for at kunne fortolkes.

### Udvidelsesmuligheder

OMI bør understøtte en struktureret udvidelse uden at kræve, at hver enkelt implementering skal forstå alle domænespecifikke funktioner. Udvidelsesmekanismerne skal bevare en identificerbar kernesemantik og undgå skjulte uoverensstemmelser.

### Gennemsigtighed

Tekniske beslutninger og beslutninger vedrørende styring bør dokumenteres offentligt, underkastes versionsstyring og kunne tilskrives en bestemt kilde. Normativ adfærd skal defineres ved hjælp af offentliggjorte specifikationer snarere end skjulte implementeringsdetaljer.

### Langtidsbevaring

Videnskabeligt indhold bør forblive forståeligt og kunne behandles, selv efter at den software, der oprindeligt blev brugt til at skabe det, er blevet udskiftet eller er forsvundet.

### Mangfoldighed i implementeringen

Standarden skal forblive uafhængig af enhver referenceimplementering. Konkurrerende og supplerende implementeringer opfordres til.

## Anvendelsesområde

OMI kan angive:

- videnskabelige objekt- og dokumentmodeller;
- manuskriptets opbygning og semantiske indholdstyper;
- metadata, identiteter, tilhørsforhold og bidragyderroller;
- pålidelige kilder, kommentarer, anmeldelsesobjekter og redaktionelle beslutninger;
- flersproget indhold og oversættelsesrelationer;
- bibliografiske poster, referencebiblioteker og forekomster af henvisninger;
- valideringsregler og maskinlæsbare valideringsrapporter;
- versionsstyring, herkomst og gengivelse af ændringer;
- filformater, containere, udvekslingskortlægninger og API;
- publikations-, gengivelses- og bevaringsprofiler;
- udvidelses- og kapacitetsmekanismer;
- overensstemmelseskrav til implementeringer.

OMI foreskriver ikke:

- redaktionel politik eller de indsendte bidragets videnskabelige kvalitet;
- politik for fagfællebedømmelse, anonymitetsmodel eller godkendelseskriterier;
- forlagets branding eller visuelle identitet;
- kommercielle modeller, abonnementsmodeller eller finansieringsmodeller;
- indholdslicenser, som forfattere eller forlag har valgt;
- styring af arkiver eller institutionelle retningslinjer;
- en obligatorisk brugergrænseflade, et obligatorisk programmeringssprog, en obligatorisk database eller en obligatorisk implementeringsmodel.

## Forholdet mellem standarden og implementeringerne

OMI-specifikationerne fastlægger standarden.

Open Manuscript Studio er en referenceimplementering, der anvendes til at teste, demonstrere og finpudse specifikationerne. Dens nuværende adfærd bliver ikke automatisk normativ. Når der er afvigelser mellem en implementering og en offentliggjort normativ specifikation, er det specifikationen, der er afgørende for overensstemmelse, medmindre selve specifikationen formelt revideres.

Alternative implementeringer opfordres udtrykkeligt til, herunder redigeringsprogrammer, valideringsværktøjer, konverteringsværktøjer, integrationer med arkiver, publiceringstjenester, kommandolinjeværktøjer og serverplatforme.

## Principper for god ledelse

OMI følger en åben og dokumenteret styringsmodel.

Vigtige arkitektoniske og normative beslutninger bør være:

- offentligt fremsat og drøftet;
- underbygget af en dokumenteret teknisk begrundelse;
- vurderet med hensyn til interoperabilitet, kompatibilitet og konsekvenser for bevaring;
- testet ved hjælp af eksempler eller implementeringer, hvor det er praktisk muligt;
- registreret i versionsstyringen;
- integreret gennem en eksplicit specificeret livscyklus.

Der foretrækkes konsensus. Hvis der ikke kan opnås konsensus, skal projektet dokumentere beslutningen, de overvejede alternativer og de kendte indvendinger.

Styringsbeføjelser må ikke udelukkende være baseret på økonomisk bidrag, institutionel status eller kontrol med en bestemt gennemførelse.

## Specifikationens livscyklus

OMI Specifikationerne gennemgår de angivne livscyklusfaser:

1. **Undersøgende** — et problemområde eller et arkitektonisk forslag, der er under udredning.
2. **Udkast** — et struktureret forslag, der stadig kan ændres væsentligt.
3. **Kandidat til gennemgang** — et dokument, der anses for at være tilstrækkeligt færdigudarbejdet til en bred teknisk gennemgang.
4. **Implementeringskandidat** — en specifikation, der er beregnet til implementeringstest og arbejde med interoperabilitet.
5. **Stabil** — en specifikation med fastlagte krav til overensstemmelse og kontrollerede kompatibilitetsregler.
6. **Udgået** — en specifikation, der opretholdes af hensyn til kompatibilitet, men som ikke længere anbefales til nye implementeringer.
7. **Er erstattet** — en specifikation, der er blevet erstattet af en identificeret efterfølger.

Hver offentliggjort specifikation skal angive sin identifikator, version, status, anvendelsesområde, afhængigheder og implementeringsmodenhed.

## Versionsstyring og kompatibilitet

OMI anvender eksplicitte versionsidentifikatorer og kompatibilitetsregler.

- Større versioner kan medføre ændringer, der er uforenelige med tidligere versioner, og kræve vejledning i forbindelse med overgangen.
- Mindre versioner kan indeholde kompatible funktioner eller udvidelser.
- Patch-versioner kan præcisere teksten, rette fejl eller forbedre ikke-normative eksempler uden at ændre den krævede adfærd.

Bagudkompatibilitet bør bevares, når det er teknisk muligt. Ændringer, der medfører brud på den hidtidige kompatibilitet, kræver en dokumenteret begrundelse, en konsekvensanalyse og vejledning i migrering.

Permanente specifikationsidentifikatorer forbliver uændrede, selv når titler, filnavne eller dokumentplaceringer ændres.

## Normativt sprog og oversættelser

Engelsk er det officielle sprog i specifikationerne fra OMI, medmindre en fremtidig ledelsesbeslutning udtrykkeligt fastlægger en anden ordning.

Der kan offentliggøres officielle oversættelser til andre sprog. Oversættelserne er af informativ karakter, medmindre de udtrykkeligt er angivet som bindende. Hvis der er uoverensstemmelser mellem en oversættelse og den bindende engelske tekst, er det den bindende tekst, der er afgørende for fortolkningen.

## Fællesskab og deltagelse

OMI byder blandt andet følgende til at deltage:

- forskere og forfattere;
- tidsskrifts- og bogredaktører;
- forlag og produktionsspecialister;
- bibliotekarer, arkivarer og arkivansvarlige;
- softwareudviklere og systemarkitekter;
- specialister inden for digitale humaniora og forskningsinfrastruktur;
- eksperter inden for metadata, identifikatorer, bevaring og standarder;
- korrekturlæsere, oversættere og tilgængelighedseksperter.

Bidrag bør vurderes ud fra deres faglige kvalitet, dokumentation, indvirkning på interoperabiliteten og overensstemmelse med chartret frem for institutionstilhørsforhold.

Projektet bør sikre, at der fortsat er tilgængelige muligheder for at bidrage for både tekniske og ikke-tekniske deltagere.

## Åbent økosystem

OMI har til formål at supplere og fungere sammen med etablerede videnskabelige standarder, identifikatorer, ordlister og infrastrukturer. Relevante systemer kan blandt andet omfatte JATS, Crossref, DataCite, DOI, ORCID, ROR, CSL, BibTeX, RIS, Dublin Core, schema.org, OpenAlex, bibliotekskataloger, arkiver og bevaringstjenester.

OMI har ikke til formål at erstatte disse systemer, hvor der allerede findes en pålidelig, åben infrastruktur. Formålet er derimod at forbinde dem gennem en sammenhængende semantisk model på manuskriptniveau.

## Sikkerhed, privatliv og forskningsintegritet

Specifikationerne skal, hvor det er relevant, tage højde for konsekvenserne for sikkerhed, privatliv, herkomst, adgangskontrol og forskningsintegritet.

OMI må ikke indebære krav om offentliggørelse af privat gennemgangsmateriale, personoplysninger, fortrolige udkast eller forskningsindhold med adgangsbegrænsning. Implementeringerne bør understøtte passende adgangskontrol og praksis for dataminimering.

Mekanismer til sporbarhed og versionsstyring bør gøre det muligt at tilskrive og kontrollere væsentlige faglige og redaktionelle ændringer, uden at der foreskrives en bestemt institutionel arbejdsgang.

## Langsigtede mål

Initiativet har til formål at etablere:

- en sammenhængende række af åbne specifikationer for videnskabelige manuskripter;
- en stabil og udvidelig videnskabelig objektmodel;
- kanoniske, maskinlæsbare skemaer og valideringsregler;
- dokumenterede import- og eksporttilknytninger;
- referenceimplementeringer og overensstemmelsestests;
- flere uafhængige, indbyrdes kompatible implementeringer;
- flersproget forklarende dokumentation;
- bæredygtig og gennemsigtig styring af lokalsamfundet;
- bred anvendelse inden for videnskabelig forfattelse, udgivelse, arkiver og bevaring.

## Ændring af dette charter

Ændringer af dette charter kræver offentlig dokumentation og udtrykkelig godkendelse gennem styringsprocessen i »OMI«. Forslag til ændringer skal indeholde en redegørelse for formålet, den forventede virkning og sammenhængen med den nuværende mission og de nuværende værdier.

Ændringer må ikke i al stilhed svække åbenheden, leverandørneutraliteten, interoperabiliteten eller standardens uafhængighed af de enkelte implementeringer.

## Engagement

Open Manuscript Initiativeen går ind for videnskabelig kommunikation, der er åben, overførbar, gennemsigtig, kompatibel og varig.

OMI er ikke blot et softwareprojekt. Det er et forsøg på at skabe et fælles sprog for videnskabelige manuskripter – et sprog, der gør det muligt at overføre viden mellem systemer, samtidig med at dens betydning, struktur, sammenhænge, herkomst og integritet bevares for kommende generationer.
