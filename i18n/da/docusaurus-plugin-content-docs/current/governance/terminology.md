---
title: OMI Terminologi og definitioner
sidebar_label: Terminologi og definitioner
sidebar_position: 50
---

# Open Manuscript Initiative Terminologi og definitioner

## Dokumentmetadata

| Felt | Værdi |
|---|---|
| Dokumenttype | Retningslinjer for terminologi inden for forvaltning og central ordliste |
| Status | Udkast |
| Version | 0.1.0 |
| Normativt sprog | Engelsk |
| Gælder for | OMI specifikationer, skemaer, profiler, registre, eksempler, implementeringer og officielle oversættelser |

## 1. Formål

Dette dokument fastlægger den fælles terminologi for »Open Manuscript Initiative« (OMI).

Formålet er at sikre, at det samme udtryk har samme betydning i hele OMI-specifikationssættet. Det skelner desuden mellem begreber, der ofte behandles som synonymer i tekstbehandlingsprogrammer, publikationssystemer, arkiver, citathåndteringsprogrammer og redaktionsplatforme.

Definitionerne i dette dokument har til formål at:

- at tilvejebringe et fælles begrebsapparat;
- at undgå modstridende definitioner i specifikationerne;
- understøtter præcise skemaer og API;
- forbedre interoperabiliteten mellem uafhængige implementeringer;
- sikre ensartede oversættelser til ungarsk, tysk og fremtidige sprog;
- gøre overensstemmelseskravene lettere at fortolke og teste;
- at skelne mellem semantiske objekter og deres visuelle eller serielle repræsentationer.

## 2. Myndighed og anvendelse

Begreber, der har en tværgående betydning, SKAL anvende definitionerne i dette dokument.

En »OMI«-specifikation KAN definere en snævrere, specialiseret betydning for sit eget anvendelsesområde, men den SKAL:

- identificere det centrale begreb, der specificeres;
- angiv den snævrere betydning udtrykkeligt;
- undgå at modsige den centrale definition;
- Undgå at genbruge udtrykket uden at gøre opmærksom på det til et andet begreb.

Når et begreb ikke er defineret her, gælder den relevante specifikation fra OMI. Når hverken dette dokument eller en specifikation fra OMI definerer et begreb, gælder dets almindelige tekniske betydning.

De engelske termer i dette dokument er de autoritative for den normative engelske specifikationsserie. Officielle oversættelser SKAL bevare de begrebsmæssige skel, selv i de tilfælde, hvor der på et andet sprog almindeligvis anvendes ét ord for flere engelske termer.

## 3. Normativt sprog

Nøgleordene **SKAL**, **MÅ IKKE**, **BØR**, **BØR IKKE** og **KAN** udtrykker normative kravniveauer, når de skrives med store bogstaver.

Brug af ord som »must«, »should« eller »may« med små bogstaver er almindelig prosatekst og udgør ikke selvstændige overensstemmelseskrav.

## 4. Principper for terminologi

### 4.1 Konceptet før mærkningen

Et begreb betegner et koncept. Konceptet forbliver uændret, selv når:

- en brugergrænseflade anvender en oversat eller forkortet betegnelse;
- et filnavn ændres;
- I en visuel fremstilling anvendes en anden formulering;
- en ekstern standard anvender et andet udtryk;
- I en disciplin anvendes et lokalt synonym.

### 4.2 Semantisk identitet før præsentation

OMI skelner mellem et objekt og dets visuelle fremstilling.

Eksempler:

- en henvisning er ikke den formaterede henvisningstekst;
- et overskriftsobjekt er ikke en bestemt skriftstørrelse;
- en kommentar er ikke en farvet markering;
- en bibliografisk post er ikke en streng med en bibliografisk post;
- Et manuskript er ikke en fil i formatet DOCX eller PDF.

### 4.3 Lokal identitet og ekstern identitet

Et »OMI«-objekt kan have en stabil lokal identifikator og en eller flere eksterne identifikatorer.

En lokal identifikator fastlægger identiteten inden for en OMI dokument-, pakke- eller systemkontekst. En ekstern identifikator knytter objektet til et identifikationssystem uden for denne kontekst.

Ingen af de to typer erstatter automatisk den anden.

### 4.4 Roller og personer er adskilte

En person eller organisation er en aktør. Forfatter, redaktør, anmelder, oversætter, forlægger og finansieringsgiver er roller, som en aktør kan varetage i en bestemt sammenhæng.

En rolle MÅ IKKE betragtes som en fast egenskab ved agenten.

### 4.5 Indhold og arbejdsgang er adskilte

Et videnskabeligt objekt kan indgå i arbejdsgange vedrørende redigering, peer review, oversættelse, udgivelse eller bevaring. Arbejdsgangens status ændrer normalt ikke objektets semantiske type.

### 4.6 Normative og informative betydninger

En ordbogsdefinition kan beskrive et begreb uden at definere alle de maskinlæsbare egenskaber, der er nødvendige for at serialisere det. Den relevante specifikation »OMI« definerer dens fuldstændige normative datamodel og behandlingsregler.

## 5. Centrale begrebsmæssige sammenhænge

De vigtigste begreber i »OMI« hænger sammen på følgende måde:

```text
Scholarly work
    ↓ represented during its lifecycle as
Manuscript
    ↓ expressed through one or more
Document instances or versions
    ↓ composed of identifiable
Scholarly objects
    ↓ serialized into
OMI documents and packages
    ↓ processed by
Implementations
    ↓ rendered or exported as
Publications and exchange formats
```

De vigtigste referencebegreber hænger sammen på følgende måde:

```text
Citable resource
    ↓ described by
Bibliographic record
    ↓ selected into
Manuscript reference library
    ↓ referenced by
Citation occurrence
    ↓ formatted through
Citation style and publication profile
    ↓ displayed as
Rendered citation or bibliography entry
```

De vigtigste begreber inden for annotering hænger sammen på følgende måde:

```text
Scholarly object or content range
    ↓ addressed by
Anchor
    ↓ used as target by
Annotation
    ↓ may participate in
Review, editorial, translation, or discussion workflow
```

## 6. Manuskript, dokument, fil og publikation

Disse udtryk MÅ IKKE anvendes som indbyrdes udskiftelige synonymer i normative tekster på OMI.

### 6.1 Videnskabelige arbejder

En intellektuel eller kreativ videnskabelig enhed, der betragtes uafhængigt af en bestemt fil, udgave, sprogversion eller udgivelsesform.

Et videnskabeligt værk kan foreligge i flere manuskripter, versioner, oversættelser, udgaver eller publikationer.

### 6.2 Manuskript

Et videnskabeligt værk, der fremstilles som et redigerbart, struktureret intellektuelt objekt gennem hele dets livscyklus.

Et manuskript kan indeholde:

- struktureret indhold;
- metadata;
- bidragydere;
- henvisninger og bibliografiske poster;
- anmærkninger og gennemgangsobjekter;
- forholdet mellem sprog og oversættelse;
- oplysninger om version og herkomst;
- publikations- og valideringsprofiler;
- tilknyttede ressourcer.

Et manuskript er ikke afgrænset af en bestemt serialisering eller et bestemt softwareprodukt.

### 6.3 Dokument

En konkret, struktureret fremstilling af manuskriptets indhold og tilhørende data i en defineret behandlingssammenhæng.

Et manuskript kan indeholde flere dokumentinstanser, f.eks.:

- et aktuelt dokument, der kan redigeres;
- et indsendt dokument;
- en revideret udgave;
- et godkendt dokument;
- et offentliggjort øjebliksbillede;
- et oversat dokument.

I egenskabsnavne og specifikationstitler i *OMI* henviser *dokument* normalt til strukturerede data og ikke blot til en visuel rækkefølge af sider.

### 6.4 Dokumentinstans

En identificerbar instans af et dokument i en bestemt version, tilstand eller behandlingsgrænse.

En dokumentinstans kan være ændringsbar eller uændringsbar afhængigt af dens livscyklusstatus.

### 6.5 Kildedokument

Det dokument, der er valgt som det gældende grundlag for en bestemt handling, såsom oversættelse, gengivelse, validering, sammenligning eller eksport.

Et kildedokument er kontekstuelt. Udtrykket betyder ikke nødvendigvis den tidligste historiske version.

### 6.6 Kanonisk dokument

Den dokumentinstans, der er udpeget som den autoritative til et bestemt formål.

Eksempler herpå er:

- det kanoniske redigerbare manuskript;
- den kanoniske, anerkendte version;
- den autoritative kilde til gengivelse af publikationer.

En kanonisk status SKAL angive sit anvendelsesområde og sin gyldighed. OMI går ikke ud fra, at ét dokument er kanonisk til alle formål.

### 6.7 Fil

En række gemte eller overførte bytes, der identificeres som ét filsystem- eller transportobjekt.

En fil kan indeholde:

- ét dokument med serienummeret OMI;
- en OMI-pakke eller -container;
- en publikationsproduktion;
- et importeret eksternt dokument;
- en tilknyttet ressource.

En fil er en lagrings- eller transportenhed, ikke nødvendigvis en semantisk enhed.

### 6.8 Filformat

En fastlagt syntaks og et sæt kodningsregler til gengivelse af data i en fil eller en bytstrøm.

Et filformat definerer ikke i sig selv al semantisk betydning. OMI Prospecifikationer definerer semantik; skemaer og formatspecifikationer definerer maskinlæsbar struktur og kodning.

### 6.9 Serialisering

Processen med at kode en datamodel ind i en fil, en byte-strøm eller en meddelelsesrepræsentation.

Deserialisering er den omvendte proces: rekonstruktion af dataobjekter ud fra en serialiseret repræsentation.

### 6.10 Pakke

En overførbar enhed, der indeholder et »OMI«-dokument samt nul eller flere tilknyttede ressourcer, manifester, skemaer, mediefiler, herkomstoplysninger eller signaturer.

Et pakke kan bestå af én containerdatei eller af en mappestruktur.

### 6.11 Beholder

Den tekniske struktur, der anvendes til at gruppere og henvise til flere filer eller ressourcer som én enhed, der kan overføres eller bevares.

En container er ikke identisk med den semantiske pakke, den indeholder. Den samme pakkemodel kan implementeres ved hjælp af forskellige containerteknologier.

### 6.12 Offentliggørelse

En offentliggjort videnskabelig publikation, der er beregnet til formidling, citering, adgang eller bevaring.

En publikation kan udgives som »HTML«, »PDF«, »EPUB«, »JATS«, »XML«, trykt udgave, strukturerede metadata eller et andet format.

En publikation er normalt baseret på en bestemt manuskript- eller dokumentversion, men erstatter ikke den semantiske kilde.

### 6.13 Den gældende version

Den udgave, der af det ansvarlige forlag eller den ansvarlige udgivelsesmyndighed formelt er udpeget som den endelige udgivne udgave.

En »version of record« er et begreb, der vedrører publikationsstatus. Det betyder ikke, at tidligere eller senere manuskriptversioner ophører med at eksistere.

### 6.14 Publikationsproduktion

En genereret fremstilling, der er beregnet til en bestemt publikationsmålgruppe.

Eksempler herpå er:

- HTML;
- PDF, der er klar til udskrivning;
- EPUB;
- JATS XML;
- Metadata for Crossref-deponering;
- DataCite-metadata;
- arkivpakker.

Et publikationsresultat kan gengives ud fra et kildedokument og en publikationsprofil.

## 7. Objekter og dokumentstruktur

### 7.1 Formål

En identificerbar enhed, der er repræsenteret i en OMI-datamodel.

Et objekt kan have:

- en type;
- en stabil identifikator;
- egenskaber;
- relationer;
- oplysninger om livscyklus;
- herkomst;
- udvidelser.

Ordet *objekt* uden yderligere præcisering BØR undgås, når der findes et mere specifikt udtryk.

### 7.2 Det videnskabelige objekt

En identificerbar semantisk enhed inden for eller knyttet til et manuskript.

Et videnskabeligt objekt defineres ud fra sin videnskabelige betydning og sine sammenhænge snarere end ud fra sit udseende.

Eksempler herpå er:

- manuskript;
- afsnit;
- afsnit;
- overskrift;
- citat;
- figur;
- tabel;
- ligning;
- Bemærk;
- forekomst af citat;
- bibliografisk post;
- kommentar;
- beslutning om fornyet behandling;
- bidragers påstand.

### 7.3 Strukturobjekt

Et videnskabeligt objekt, hvis hovedformål er at strukturere dokumentindhold.

Eksempler herpå er dokument-, afsnit-, liste-, tabel-, figurgruppe- og litteraturliste-containere.

### 7.4 Indholdsobjekt

Et videnskabeligt værk, hvis hovedformål er at formidle intellektuelt indhold.

Eksempler herpå er afsnit, citat, kodeblok, formel, figur, tabel, note og litteraturhenvisning.

Den samme objekttype kan have både strukturelle og indholdsmæssige funktioner.

### 7.5 Blokobjekt

Et indholds- eller strukturobjekt, der indtager en position på blokniveau i dokumenthierarkiet.

Typiske blokobjekter omfatter:

- afsnit;
- overskrift;
- liste;
- citatblok;
- figur;
- tabel;
- ligningsblok;
- kodeblok;
- noteblok.

Blokstatus vedrører dokumentets struktur, ikke det visuelle layout i CSS.

### 7.6 Inline-objekt

Et objekt, der er indlejret i indholdsforløbet i et blokobjekt.

Eksempler herpå er:

- forekomst af citat;
- krydshenvisning;
- markør for indsat note;
- formel i teksten;
- semantisk fremhævelse;
- navngiven enhed;
- knyttet identifikator.

### 7.7 Afsnit

Et hierarkisk strukturobjekt, der grupperer relateret indhold ud fra et semantisk eller redaktionelt formål.

Et afsnit kan bestå af en overskrift, en type, en identifikator, underafsnit og blokindhold.

Visuel nummerering er et valg i forbindelse med gengivelsen, medmindre en profil tillægger nummereringen semantisk betydning.

### 7.8 Overskrift

En betegnelse, der er knyttet til et afsnit eller en anden defineret strukturel underinddeling.

Et overskriftsniveau udtrykker en hierarki. Det MÅ IKKE udelukkende udledes ud fra skriftstørrelse eller visuel formatering.

### 7.9 Afsnit

En enhed på blokniveau bestående af prosa eller tilsvarende tekstindhold.

Et afsnit kan indeholde indlejrede objekter og tekstområder.

### 7.10 Bemærkning

Et supplerende videnskabeligt emne, der er relateret til indholdet, men som ikke nødvendigvis indgår i den primære læseforløb.

Eksempler herpå er fodnoter, slutnoter, forfatternoter, redaktionelle noter og oversætternoter.

En note er ikke det samme som en annotation. En note er en del af manuskriptets indhold, mens en annotation er et objekt, der henviser til indholdet eller et andet objekt.

### 7.11 Ressource

En digital eller fysisk enhed, der er knyttet til et manuskript, en bibliografisk post, en pakke eller en publikation.

Eksempler herpå er billeder, datasæt, lyd, video, supplerende filer, skemaer og eksterne webressourcer.

Udtrykket SKAL angive, om ressourcen er indlejret, pakket, refereret til eller eksternt opslået, når denne sondring har betydning for behandlingen.

## 8. Identitet og identifikatorer

### 8.1 Identitet

Egenskaben ved at kunne identificeres som den samme enhed på tværs af henvisninger, versioner, operationer eller systemer.

Identitet er begrebsmæssigt adskilt fra visningsetiketter og ændringsbare metadata.

### 8.2 Identifikator

En værdi, der bruges til at skelne mellem eller henvise til en enhed inden for et defineret identifikationssystem eller et defineret anvendelsesområde.

En specifikation, der anvender en identifikator, SKAL definere eller henvise til:

- dets anvendelsesområde;
- dens syntaks;
- dets forventninger til det unikke;
- dets sammenligningsregler;
- dets forventninger til holdbarheden;
- dens eventuelle opløsningsadfærd.

### 8.3 Lokal identifikator

En identifikator, hvis entydighed kun er garanteret inden for et bestemt dokument, en pakke, et arbejdsområde, etOMI, et repository eller et implementeringsområde.

En lokal identifikator kan forblive uændret under eksport og import, men dens gyldighed afhænger af den sammenhæng, den indgår i.

### 8.4 Global identifikator

En identifikator, der er beregnet til at være entydig på tværs af uafhængige systemer eller administrative domæner.

At en værdi er unik på globalt plan betyder ikke nødvendigvis, at den er vedvarende eller kan løses.

### 8.5 Permanent identifikator

En identifikator, der er udformet med det formål at forblive stabil over tid, selvom placeringer eller metadata ændrer sig.

Eksempler herpå kan være DOI, Handle, ARK, ORCID, ROR, URN og andre administrerede ordninger.

En vedvarende identifikator MÅ IKKE betegnes som permanent opløselig, medmindre det pågældende identifikatorsystem giver denne garanti.

### 8.6 Ekstern identifikator

En identifikator, der er tildelt af et system, et register, en myndighed, et arkiv, en udgiver eller et katalog uden for det nuværende identitetsområde for OMI.

Eksempler herpå er:

- DOI til en publikation;
- ORCID for en person;
- ROR identifikator for en organisation;
- ISBN for en udgave af en publikation;
- arkivets registreringsnummer;
- arkivreferencenummer.

### 8.7 Kanonisk identifikator

Den identifikator, der er angivet som den foretrukne identifikator for en bestemt operation eller sammenhæng.

Den kanoniske status gør ikke aliaser eller andre identifikatorer ugyldige. Valgreglen SKAL dokumenteres.

### 8.8 Alias

En alternativ identifikator, et navn, en betegnelse eller en rute, der henviser til den samme enhed i en bestemt sammenhæng.

Aliaser MÅ IKKE behandles som separate enheder alene på grund af forskelle i deres strengtekster.

### 8.9 Resolver

En processor eller tjeneste, der modtager en identifikator eller en forespørgsel og forsøger at lokalisere, hente eller sammenstille den tilhørende enhed eller metadata.

Hvis opløsningen mislykkes, betyder det ikke nødvendigvis, at identifikatoren er ugyldig.

## 9. Aktører, identitet og bidrag

### 9.1 Agent

En enhed, der kan varetage en rolle, fremsætte en påstand, udføre en handling eller modtage en tilskrivning.

De vigtigste agenttyper omfatter:

- person;
- organisation;
- konsortium;
- projekt;
- tjeneste;
- ukendt eller historisk aktør.

### 9.2 Person

En menneskelig agent.

Et personobjekt kan indeholde navne, identifikatorer, tilhørsforhold, kontaktoplysninger og herkomst. Det MÅ IKKE antages, at én uforanderlig navnestreng fuldt ud repræsenterer personen.

### 9.3 Organisation

En kollektiv eller institutionel aktør, hvis identitet er uafhængig af de enkelte medlemmer.

Eksempler herpå er universiteter, forlag, laboratorier, arkiver, biblioteker, foreninger og finansieringsorganer.

### 9.4 Bidragyder

En aktør, der er knyttet til et videnskabeligt objekt, et manuskript, en publikation, en begivenhed i arbejdsgangen eller en anden enhed i »OMI« gennem en eller flere bidragsroller.

»Contributor« er et kontekstuelt forhold, ikke en særskilt agenttype.

### 9.5 Forfatter

En bidragyder, hvis rolle omfatter det intellektuelle forfatterskab til det videnskabelige værk eller en afgrænset del heraf.

OMI afgør ikke, om et bidrag opfylder et tidsskrifts, et fagområdes, juridiske eller etiske retningslinjer for forfatterskab. Profiler og redaktionelle retningslinjer kan indeholde yderligere kriterier.

### 9.6 Editor

En person, der varetager en redaktionel rolle i forbindelse med et manuskript, en publikation, et bibliografisk værk eller et arbejdsforløb.

Rollen SKAL præciseres, hvis der er risiko for tvetydighed, for eksempel:

- manuskriptredaktør;
- tidsskriftredaktør;
- volumenredaktør;
- korrekturlæser;
- teknisk redaktør;
- specifikationseditor.

### 9.7 Anmelder

En person, der har til opgave at vurdere et manuskript, et objekt, en påstand, en metode, en oversættelse eller et publikationsresultat som led i en bedømmelsesproces.

Anmelderens identitet kan være offentlig, begrænset, pseudonym eller skjult, afhængigt af den gældende arbejdsgang og adgangspolitik.

### 9.8 Oversætter

En bidragyder, der har ansvaret for at udarbejde eller gennemgå en oversættelse af videnskabeligt indhold eller metadata.

Oversætter er en rolle. Et oversat dokument BØR bevare forbindelsen til det relevante kildedokument og den relevante kildeversion.

### 9.9 Forlag

En person, der har til opgave at udgive eller officielt formidle en publikation.

Udgiverrollen adskiller sig fra software, der varetager visning eller hosting.

### 9.10 Bidragsrolle

En kontrolleret eller udvidelig værdi, der beskriver, hvordan en aktør har bidraget i en bestemt sammenhæng.

Eksempler herpå er forfatter, redaktør, oversætter, korrekturlæser, datakurator, softwarebidragyder og illustrator.

En bidragsrolle BØR være uafhængig af rækkefølgen af bidragydere og uafhængig af agentens identitet.

### 9.11 Tilknytning

En kontekstuel relation mellem en aktør – normalt en person – og en organisation, et projekt eller en institutionel enhed.

En tilknytning kan omfatte:

- en rolle eller stilling;
- en start- og slutdato;
- en kilde;
- en påstand, der vedrører et bestemt manuskript;
- en ekstern organisationsidentifikator.

Man må IKKE antage, at en tilknytning er evig.

### 9.12 Rækkefølgen af bidragydere

Den eksplicitte udpegning af bidragydere til en bestemt rolle eller et bestemt resultat.

Rækkefølgen af bidragydere svarer ikke altid til bidragets omfang, alfabetisk rækkefølge eller visningsrækkefølge. Den gældende specifikation eller profil SKAL angive den relevante fortolkning.

### 9.13 Medforfatter

En bidragyder, der er udpeget som kontaktperson vedrørende kommunikation for et bestemt manuskript, en indsendelse, en publikation eller et arbejdsforløb.

Den pågældende status er ikke en rangordning af forfattere og KAN gælde for mere end én bidragyder.

## 10. Metadata og herkomst

### 10.1 Metadata

Struktureret information, der beskriver, identificerer, administrerer, sætter i sammenhæng, knytter sammen eller understøtter behandlingen af en enhed.

Metadata kan være:

- beskrivende;
- administrativ;
- teknisk;
- strukturel;
- rettighedsrelateret;
- herkomstrelateret;
- relateret til bevarelse.

Metadata er ikke nødvendigvis mindre vigtige eller mindre troværdige end selve indholdet.

### 10.2 Metadataværdi

En struktureret påstand knyttet til en metadataprop.

En metadataværdi kan ud over sin primære værdi indeholde oplysninger om sprog, herkomst, sikkerhedsniveau, gyldighedsperiode eller kilde.

### 10.3 Herkomst

Oplysninger, der beskriver en enheds eller en værdis oprindelse, opbevaring, forfatterskab, afledning, transformation eller historik vedrørende påstande.

Oprindelsen kan angive:

- ansvarlig repræsentant;
- kildesystem;
- kildeidentifikator;
- tidspunktet for oprettelse eller hentning;
- transformationsoperation;
- software og version;
- tillidstilstand eller verifikationstilstand;
- forholdet til tidligere versioner.

### 10.4 Påstand

En udsagn, der er repræsenteret i dataene i »OMI«, og som angiver en værdi, en relation, en status eller en kendsgerning om en entitet.

En påstand kan have sin egen herkomst og pålidelighed. OMI En sådan angivelse garanterer ikke i sig selv, at den fremsatte påstand er sand.

### 10.5 Autoritativ værdi

En værdi, der er valgt som gældende for et bestemt formål i henhold til en eksplicit autoritetsregel.

Autoriteten kan stamme fra en forfatter, et forlag, et register, en redaktionel beslutning, en verificeret identifikationskilde eller en anden dokumenteret politik.

Man må IKKE udlede autoritativ status udelukkende på baggrund af, hvor nylig informationen er.

### 10.6 Kilde

Den enhed, det system, det dokument, den aktør eller den proces, hvorfra data eller indhold er hentet.

Udtrykket BØR præciseres, hvis der er risiko for tvetydighed, f.eks. metadatakilde, oversættelseskilde, kilde til henvisning eller importkilde.

### 10.7 Tillid

En dokumenteret vurdering af sikkerheden i forbindelse med et match, en påstand, en udtrækning, en afstemning eller en udledt sammenhæng.

Sikkerhed er ikke det samme som herkomst og MÅ IKKE fremstilles som en objektiv sandsynlighed, medmindre metoden definerer den som sådan.

## 11. Ankre og henvisninger i dokumenter

### 11.1 Anker

En stabil eller identificerbar henvisning til en placering, et område, et objekt eller en tilstand inden for videnskabeligt indhold.

Et anker kan angive:

- et objekt;
- et indsætningspunkt;
- et tekstområde;
- en række genstande;
- en tabelcelle;
- et figurområde;
- en dokumentversion eller -tilstand.

Et anker er en adresseringsmekanisme. Det er ikke den pågældende kommentar eller henvisning, der anvender det.

### 11.2 Anker-mål

Det objekt, det indholdsområde, den placering eller den tilstand, der identificeres af et anker.

### 11.3 Ankeropløsning

Processen med at bestemme det aktuelle mål, som repræsenteres af et anker.

En opløsning kan resultere i:

- ét mål;
- flere mål;
- et forringet, omtrentligt mål;
- et uafklaret resultat;
- et ugyldigt resultat.

### 11.4 Stabil forankring

Et anker, der er udformet til fortsat at henvise til det tilsigtede semantiske mål på tværs af tilladte redigeringer eller transformationer.

Stabil betyder ikke uforanderlig. Anker-modellen definerer, hvilke ændringer et anker forventes at kunne modstå.

### 11.5 Stilling

En placering mellem eller inden for indholdsenheder i en defineret dokumenttilstand.

Rå tegnforskydninger er positioner, men udgør ikke nødvendigvis stabile forankringer.

### 11.6 Rækkevidde

Et ordnet interval mellem en startgrænse og en slutgrænse i et defineret indholdsrum.

Et interval KAN være tomt, hvis den relevante specifikation tillader indsættelsespunktssemantik.

### 11.7 Henvisning

Et manuskriptelement, der henviser fra et sted eller et objekt til et andet internt eller eksternt identificeret objekt med henblik på navigation eller videnskabelig reference.

En krydshenvisning adskiller sig fra en bibliografisk henvisning, selvom begge kan anvende ankre og identifikatorer.

### 11.8 Uafklaret henvisning

En reference, hvis mål ikke kan identificeres eller tilgås i den aktuelle behandlingskontekst.

En uafklaret henvisning kan muligvis genoprettes og MÅ IKKE automatisk betragtes som en ukendt henvisning eller en fejlformateret identifikator.

## 12. Annotation og gennemgang

### 12.1 Annotation

Et videnskabeligt objekt, der knytter en samling af kommentarer eller strukturerede oplysninger til et eller flere mål.

En kommentar indeholder normalt:

- en identifikator;
- et eller flere mål;
- en tekstdel;
- motivation eller type;
- ophavsmand eller ansvarlig repræsentant;
- tidsstempler og herkomst;
- oplysninger om synlighed eller adgang;
- status i livscyklussen.

### 12.2 Mål for annotering

Den enhed, som en annotation henviser til.

Et mål kan repræsenteres ved hjælp af et anker, en ekstern identifikator, en objektidentifikator eller en anden målmekanisme, der er defineret i annoteringsmodellen.

### 12.3 Annotationens hoveddel

Det indhold eller den strukturerede påstand, som annotationen knytter til sit mål.

Teksten kan indeholde tekst, ændringsforslag, klassificeringer, links, afgørelser eller fagspecifikke strukturerede data.

### 12.4 Begrundelse for annotering

En værdi, der angiver formålet med en annotation.

Eksempler kan være at kommentere, gennemgå, rette, stille spørgsmål, oversætte, klassificere, oprette links eller fremhæve.

Motivation er ikke i sig selv afgørende for arbejdsgangens kompetencefordeling.

### 12.5 Kommentar

En kommentar, hvis hoveddel består af en diskursiv kommentar.

Ikke alle annoteringer er kommentarer; annoteringer kan også indeholde strukturerede beslutninger, klassificeringer eller maskingenererede resultater.

### 12.6 Gennemgang

En struktureret evalueringsproces eller et evalueringsobjekt vedrørende et manuskript, et videnskabeligt værk, en publikation eller en specifikation.

Udtrykket SKAL præciseres, når det henviser til selve processen og ikke til det endelige objekt, der er genstand for gennemgangen.

### 12.7 Gennemgangsobjekt

Et videnskabeligt dokument, der indeholder eller gengiver anmeldelser, resultater, anbefalinger, spørgsmål, afgørelser eller tilhørende kommentarer.

### 12.8 Gennemgangsrunde

En afgrænset fase i en korrekturproces, hvor et fastlagt sæt korrekturaktiviteter gælder for en bestemt manuskriptversion eller indsendelsesstatus.

### 12.9 Redaktionel beslutning

En struktureret beslutning truffet som led i en redaktionel arbejdsgang, f.eks. anmodning om revision, godkendelse, afvisning eller returnering med henblik på tekniske rettelser.

En redaktionel beslutning er noget andet end en anmelders anbefaling.

### 12.10 Forslag til ændring

Et struktureret forslag til at indsætte, slette, erstatte, flytte eller på anden måde ændre indhold eller metadata.

Et ændringsforslag ændrer ikke det gyldige dokument, før det er godkendt via en autoriseret workflow-handling.

## 13. Terminologi vedrørende bibliografier og kildehenvisninger

### 13.1 Kilde, der kan citeres

En enhed, der kan fungere som genstand for en videnskabelig henvisning.

Eksempler herpå er publikationer, datasæt, software, arkivmateriale, juridiske dokumenter, billeder, audiovisuelle værker, standarder, webressourcer og upublicerede manuskripter.

### 13.2 Bibliografisk post

En struktureret beskrivelse af en citeret eller citerbar kilde, uafhængigt af en bestemt forekomst af citatet eller dets placering i manuskriptet.

En bibliografisk post kan indeholde:

- lokale og eksterne identifikatorer;
- titler;
- bidragydere;
- ressourcetype;
- oplysninger om udgivelse eller fremstilling;
- forhold mellem containere;
- sprog;
- adgangssteder;
- herkomst;
- versioner og statusforhold.

### 13.3 Bibliografisk identitet

Angivelse af, hvilket værk, hvilken udtryksform, hvilken manifestation, hvilken udgave eller hvilket eksemplar en bibliografisk post beskriver.

Bibliografisk identitet MÅ IKKE udledes udelukkende på baggrund af henvisninger med samme formatering.

### 13.4 Referencelitteratur til manuskripter

En samling af bibliografiske poster på manuskriptniveau, der er udvalgt med henblik på mulig eller faktisk citering, verifikation, læselister eller publikationsproduktion.

En post kan forekomme, uden at der i øjeblikket henvises til den.

### 13.5 Optegnelse i referencebiblioteket

Den manuskript-specifikke medtagelse eller gengivelse af en bibliografisk post i et manuskript-referencelibrary.

Posten kan indeholde oplysninger om manuskriptets status, f.eks. »citeret«, »ikke citeret«, »verificeret«, »udeladt fra litteraturlisten« eller »skal gennemgås«.

### 13.6 Kildehenvisning

En generel akademisk handling eller sammenhæng, hvor en del af et manuskript henviser til en kilde, der kan citeres.

I beskrivelser af normative modeller BØR det mere præcise udtryk *citatforekomst* anvendes om manuskriptet som objekt, og *gengivet citat* om dets fremstilling.

### 13.7 Forekomst af henvisninger

En henvisning fra et bestemt sted i et manuskript eller et bestemt objekt til en post i et referencebibliotek eller en bibliografisk post.

En forekomst af en henvisning kan omfatte:

- anker;
- lokalisator;
- præfiks;
- endelse;
- citeringsform;
- formålet med henvisningen;
- gruppemedlemskab;
- begivenhedsspecifikke noter.

Flere forekomster af en henvisning kan henvise til den samme bibliografiske post.

### 13.8 Mål for antallet af henvisninger

Den bibliografiske post, biblioteksoplysningen eller anden kilde, der kan citeres, og som identificeres ved en henvisning.

### 13.9 Lokalisator

Struktureret information, der identificerer en bestemt del eller position inden for en citeret kilde.

Eksempler herpå er side, sideinterval, kapitel, afsnit, afsnit, figur, tabel, linje, folio, tidsstempel, vers, artikel, klausul, arkivenhed eller softwareversion.

En lokator indgår ikke i den generelle bibliografiske beskrivelse, medmindre den beskriver ressourcen som helhed.

### 13.10 Citeringsgruppe

En systematisk samling af forekomster af henvisninger, der præsenteres eller behandles samlet på ét sted i et manuskript.

Hvert medlem beholder sit eget mål og sin egen lokalisator.

### 13.11 Citationsform

En værdi, der beskriver, hvordan en henvisning indgår i en diskussion eller en præsentation.

Eksempler kan være parenteshenvisninger, fortællende henvisninger, henvisninger i fodnoter, rene litteraturhenvisninger eller kildehenvisninger.

Citeringsmetoden adskiller sig fra citeringsstilen.

### 13.12 Formålet med henvisningen

En struktureret angivelse af den videnskabelige sammenhæng eller begrundelsen for at citere en kilde.

Eksempler kan omfatte argumenter, modargumenter, uddybninger, diskussioner, sammenligninger, gengivelser, data eller beskrivelser af metoder.

Det er valgfrit at angive kildehenvisning, medmindre det kræves i en profil.

### 13.13 Citationsform

Et sæt regler for formatering af kildehenvisninger og litteraturlister.

Eksempler herpå er APA, Chicago, MLA, Vancouver, OSCOLA samt tidsskriftsspecifikke formater.

En referencestil definerer ikke den citerede kildes identitet eller semantiske struktur.

### 13.14 Gengivet henvisning

Præsentationstekst eller markering genereret ud fra en forekomst af en henvisning, den tilhørende bibliografiske post, en henvisningsstil, sprogindstillinger og en publikationsprofil.

Der vises en gengivet henvisning, ikke det egentlige henvisningsobjekt.

### 13.15 Litteraturliste

Et afsnit i en publikation eller et manuskript, der præsenterer udvalgte bibliografiske poster i henhold til fastlagte regler for medtagelse og gengivelse.

En bibliografi er ikke det samme som manuskriptets referenceliste. Listen kan indeholde poster, der ikke er citeret eller ikke vises.

### 13.16 Bibliografisk oplysning

En gengivet eller serialiseret fremstilling af en bibliografisk post i en bibliografi.

### 13.17 Henvisning

Et bredt anvendt begreb, der KAN betyde et link, en henvisning, en bibliografisk post, en henvisning eller en kilde.

I normative dokumenter (OMI) BØR man undgå at bruge det ubestemte udtryk *reference*, når der menes et af følgende:

- forekomst af citat;
- bibliografisk post;
- opslag i referencebiblioteket;
- krydshenvisning;
- identifikatorhenvisning;
- ekstern normativ reference.

### 13.18 Arbejde

I bibliografisk modellering: et abstrakt intellektuelt eller kreativt værk, der er uafhængigt af et bestemt sprog, en bestemt udgave eller en bestemt udgivelsesform.

### 13.19 Udtryk

En konkret intellektuel eller sproglig udformning af et værk, f.eks. en oversættelse eller en revideret tekst.

### 13.20 Manifestation

En udgivelses- eller distributionsform af et værk, f.eks. en bestemt udgave, et bestemt format eller en bestemt udgivelse fra et forlag.

### 13.21 Punkt

Et enkelt fysisk eller digitalt eksemplar af en udgave, når identiteten på kopiniveau er afgørende.

OMI Profilerne KAN anvende en forenklet bibliografisk model, når disse skelnen ikke er nødvendige.

### 13.22 Afstemning

Processen, hvor man sammenligner potentielle bibliografiske poster eller metadataangivelser for at fastslå, om de beskriver den samme enhed, relaterede versioner eller forskellige enheder.

### 13.23 Deduplikering

Processen med at identificere og håndtere dubletter af den samme enhed.

Deduplikering kan medføre sammenlægning, sammenkædning, bevarelse af separate versioner eller anmodning om manuel bekræftelse.

### 13.24 Tilbagetrækning

En formel status, der angiver, at en publikation eller et videnskabeligt objekt er blevet fjernet fra den pålidelige videnskabelige litteraturliste af en autoriseret kilde.

Et tilbagetrukket objekt slettes ikke fra den bibliografiske historik. Dets status og relationer BØR fortsat kunne vises.

### 13.25 Rettelse

En offentliggjort eller registreret ændring, der har til formål at rette en fejl i et tidligere videnskabeligt værk eller en tidligere videnskabelig publikation.

Korrektionsrelationer SKAL skelne mellem det korrigerende objekt og det korrigerede objekt.

## 14. Sprog og oversættelse

### 14.1 Sprog

Det naturlige eller formelle sprog, der er knyttet til indholdet eller metadataene.

Ved maskinlæsbar sprogidentifikation BØR der, hvor det er relevant, anvendes BCP 47-sprogkoder.

### 14.2 Dokumentets sprog

Det primære sprog, der er angivet for en dokumentinstans.

Et flersproget dokument kan indeholde mere end ét relevant sprog. Et dokuments hovedsprog har ikke forrang for sprogmærker på enkelte objekter eller tekststykker.

### 14.3 Originalsprog

Det sprog, som et bestemt videnskabeligt objekt, værk eller dokument oprindeligt blev udfærdiget på med henblik på det forhold, der beskrives.

Status for originalsproget afhænger af sammenhængen og BØR angive det relevante kildeobjekt eller den relevante kildeversion.

### 14.4 Oversættelse

Et videnskabeligt objekt eller dokument, der gengiver indhold fra et kildesprog på et målsprog, samtidig med at der bevares en eksplicit forbindelse til kilden.

Oversættelse er ikke det samme som lokalisering.

### 14.5 Kildesprog

Det sprog, som kildeindholdet, der anvendes til en oversættelse, er skrevet på.

### 14.6 Målsprog

Det sprog, som indholdet oversættes til.

### 14.7 Oversættelsesenhed

Et identificerbart kildeobjekt, målobjekt eller en sammenhængende gruppe af objekter, der anvendes som en enhed for oversættelse og synkronisering.

En oversættelsesenhed kan være et afsnit, en overskrift, en note, en tabelcelle, en metadataværdi eller et andet videnskabeligt objekt.

### 14.8 Justering af oversættelser

Et struktureret forhold mellem et eller flere kildeobjekter og et eller flere målsprogsobjekter.

Tilknytningen kan være én-til-én, én-til-mange, mange-til-én eller uafklaret.

### 14.9 Oversættelsesstatus

En arbejdsgang eller synkroniseringsstatus, der er knyttet til oversat indhold.

Eksempler herpå kan være uoversatte, udkast, gennemgåede, godkendte, forældede og erstattede.

### 14.10 Forældet oversættelse

En oversættelse, hvor kildeteksten er blevet ændret efter, at oversættelsen blev udarbejdet eller godkendt, hvilket betyder, at der er behov for en synkroniseringsgennemgang.

Forældet betyder ikke nødvendigvis forkert.

### 14.11 Lokalisering

Tilpasning af brugergrænseflade, visning, formatering eller lokalitetsafhængig adfærd til et bestemt sprog eller en bestemt region.

Lokalisering kan omfatte oversættelse, men skaber normalt ikke et videnskabeligt oversættelsesforhold mellem de enkelte manuskripter.

### 14.12 Transliteration

Gengivelse af tekst fra et skriftsystem i et andet efter en fastlagt metode.

Translitteration er ikke det samme som oversættelse.

## 15. Versioner, ændringer og tilstande

### Version 15.1

En entitetens identificerbare tilstand, der adskiller sig fra tidligere eller senere tilstande i henhold til en versionsmodel.

En version kan gælde for et manuskript, et dokument, et objekt, en specifikation, et skema, en pakke, en profil, en oversættelse eller en implementering.

### 15.2 Revision

En version, der er oprettet ved hjælp af en eller flere ændringer af en eksisterende enhed.

I visse specifikationer skelnes der muligvis mellem mindre ændringer og officielt udgivne versioner.

### 15.3 Ændring

En registreret handling eller ændring, der ændrer indhold, metadata, struktur, relationer, tilladelser eller status.

### 15.4 Ændringssæt

En samlet række ændringer, der behandles som én enhed, der kan gennemgås, tilskrives eller betragtes som en transaktion.

### 15.5 Øjebliksbillede

En uforanderlig eller bevidst fastlagt fremstilling af en enhed på et bestemt tidspunkt i dens livscyklus.

Et øjebliksbillede kan anvendes til indsendelse, gennemgang, offentliggørelse, revision, citering eller bevaring.

### 15.6 Frigivelse

En version, der er officielt udgivet eller distribueret med angivne metadata vedrørende identitet, status og udgivelse.

En commit i et repository er ikke automatisk en udgivelse.

### 15.7 Udkast

En livscyklusstatus, der angiver, at indholdet eller en specifikation fortsat kan blive genstand for væsentlige ændringer.

Hvad angår specifikationens modenhed, er det den formelle definition i politikken om specifikationens livscyklus, der er gældende.

### 15.8 Indsendt version

Et dokumentøjebliksbillede, der formelt leveres til en redaktion, en bedømmelsesproces, et arkiv eller en publikationsproces.

### 15.9 Godkendt version

En manuskriptversion, der er godkendt til udgivelse, eller et andet defineret resultat, normalt før eller uafhængigt af den endelige udgivelsesformatering.

### 15.10 Offentliggjort udgave

En version af et dokument eller en publikation, der er frigivet med henblik på udbredelse.

Udtrykket SKAL præciseres, når der findes flere offentliggjorte versioner.

### 15.11 Uforanderlig

Må ikke ændres, så den samme identitet og versionsbetegnelse bevares.

En uforanderlig enhed kan blive afløst af en ny version.

### 15.12 Foranderlig

Må ændres, samtidig med at den nuværende driftsidentitet bevares i overensstemmelse med de gældende regler for livscyklus og revision.

### 15.13 Afdeling

En udviklingsgren, der afviger fra en anden versionshistorik og senere kan sammenføjes, sammenlignes eller vedligeholdes uafhængigt.

### 15.14 Sammenlægning

En handling, der kombinerer ændringer eller historikker fra flere grene eller versioner.

En sammenfletning SKAL indeholde en beskrivelse af, hvordan konflikter håndteres, samt oplysninger om herkomst, hvor den semantiske integritet kan blive påvirket.

## 16. Samarbejde og adgang

### 16.1 Arbejdsområde

Et samarbejdsmiljø, der er knyttet til et eller flere manuskripter, dokumenter, ressourcer, medlemmer og arbejdsgangindstillinger.

Et arbejdsområde er et implementeringsuafhængigt samarbejdsbegreb. Det kræver ikke en bestemt lagrings- eller hostingmodel.

### 16.2 Medlem af arbejdsgruppen

En bruger, der har fået tildelt en rolle eller rettigheder i et arbejdsområde.

Medlemskab er kontekstuelt og kan omfatte status, gyldighedsperiode, invitationens oprindelse og adgangsomfang.

### 16.3 Rolle

En nærmere angivet række ansvarsområder eller forventede aktiviteter, som en aktør varetager i en bestemt sammenhæng.

En rolle er ikke automatisk et tilladelsessæt, selvom en politik kan knytte roller til tilladelser.

### 16.4 Tilladelse

En tilladelse til at udføre en bestemt handling på en bestemt ressource eller inden for et bestemt anvendelsesområde.

Eksempler herpå er visning, kommentering, redigering, oversættelse, gennemgang, medlemsadministration, offentliggørelse og eksport.

### 16.5 Adgangskontrol

De retningslinjer og mekanismer, der afgør, om en aktør eller en implementering må udføre en handling på en ressource.

### 16.6 Ejer

En rolle i arbejdsområdet, der har det primære ansvar for eller den primære beføjelse over arbejdsområdet i henhold til den gældende politik for samarbejde.

Ejerskab må IKKE fortolkes som ejerskab af intellektuel ejendomsret, medmindre dette forhold fremgår af en særskilt juridisk politik.

### 16.7 Medforfatter

En forfatter, der deltager i et fælles manuskript eller arbejdsområde sammen med andre forfattere.

Medforfatter er en samarbejdsrolle; den fastlægger ikke i sig selv rækkefølgen af bidragydere eller retningslinjerne for forfatterskab.

### 16.8 Visningsprogram

En rolle, der har adgang til bestemt indhold uden at kunne ændre det.

### 16.9 Invitation

En struktureret anmodning, der tilbyder en agent medlemskab eller en rolle i et arbejdsområde eller en arbejdsgang.

### 16.10 Revisionsbegivenhed

En registreret hændelse, der har betydning for sporbarhed, herkomst, sikkerhed eller historikken i arbejdsgangen.

En revisionshændelse kan indeholde oplysninger om aktør, handling, mål, tidsstempel, kontekst og resultat.

## 17. Specifikationer, profiler og overensstemmelse

### 17.1 Specifikation for »OMI«

Et registreret teknisk dokument, der definerer normative strukturer, adfærdsmønstre, begrænsninger, terminologi eller krav til interoperabilitet under en permanent identifikator fra `OMI-SPEC-NNN`.

### 17.2 Specifikationspakke

Et samordnet sæt OMI-specifikationer, skemaer, registre, profiler, eksempler og ressourcer vedrørende overensstemmelse, der er offentliggjort som én OMI-udgivelse.

### 17.3 Dokument om ledelse

Et dokument, der beskriver projektprocessen, ansvarsfordelingen, livscyklussen, versionsstyring, redaktionelle retningslinjer, terminologi eller regler for bidrag.

Et styringsdokument er ikke nødvendigvis en implementeringsspecifikation.

### 17.4 Normativ

Nødvendigt for overensstemmelse med, fortolkning af eller implementering af den gældende specifikation.

Normativt indhold fastlægger forpligtelser eller bindende definitioner.

### 17,5 Informativ

Gives med henblik på forklaring, kontekst, vejledning, begrundelse eller illustration uden i sig selv at udgøre overensstemmelseskrav.

### 17.6 Krav

En normativ forpligtelse eller tilladelse, der kan afprøves, og som kommer til udtryk gennem en specifikation.

### 17.7 Overensstemmelse

Overholdelse af de gældende normative krav for en angivet specifikationsversion, overensstemmelsesklasse og profil.

Overensstemmelse er altid afgrænset. En ubetinget påstand som f.eks. »OMI-kompatibel« er ikke tilstrækkelig til formel brug.

### 17.8 Overensstemmelsesklasse

En navngivet kategori af implementeringsroller med et fastlagt sæt gældende krav.

Eksempler herpå er blandt andet producent, forbruger, validator, renderer, redaktør, importør, eksportør og bevaringsbehandler.

### 17.9 Erklæring om overensstemmelse

En erklæring om, at en specificeret implementering og version opfylder en defineret specifikation, version, klasse og profil, med forbehold for dokumenterede begrænsninger.

### 17.10 Profil

Et defineret sæt af begrænsninger, standardindstillinger, valg eller udvidelser, der anvendes på en eller flere »OMI«-specifikationer med henblik på et bestemt formål, et bestemt fællesskab, en bestemt faggren, en bestemt arbejdsgang eller et bestemt publikationsmål.

En profil MÅ IKKE i det skjulte være i modstrid med den kernespecifikation, den profilerer.

### 17.11 Publikationsprofil

En profil, der definerer krav og gengivelsesadfærd for et eller flere publikationsmål.

Det kan definere:

- nødvendige metadata;
- tilladte bygninger;
- rækkefølgen af afsnit;
- citeringsform;
- bemærkning om gengivelse;
- uddataformater;
- tilgængelighedskrav;
- valideringsregler.

### 17.12 Valideringsprofil

En profil, der fastlægger, hvilke valideringsregler, alvorlighedsniveauer, ordlister og begrænsninger der gælder i en bestemt sammenhæng.

### 17.13 Udvidelse

En erklæret tilføjelse til kernemodellen eller -adfærden i »OMI« via en godkendt udvidelsesmekanisme.

En udvidelse MÅ IKKE uden varsel omdefinere kernesemantikken.

### 17.14 Udvidelsespunkt

Et sted eller en mekanisme, der udtrykkeligt er udformet med henblik på at muliggøre kompatibel udvidelse.

### 17.15 Udvidelsesnavneområde

Et stabilt identifikatorområde, der bruges til at skelne mellem navne, egenskaber, typer eller værdier, der er defineret i udvidelsen, og navne i »OMI«-kernen samt andre udvidelser.

### 17.16 Registret

En vedligeholdt samling af stabile identifikatorer og tilhørende metadata for kontrollerede værdier, dokumentidentifikatorer, profiler, funktioner, medietyper, roller eller udvidelser.

### 17.17 Registreringsdatabasepost

En identificeret enhed i et register, med oplysninger om status, betydning, herkomst og livscyklus.

### 17.18 Kapacitet

En deklareret funktion, egenskab, format, profil eller behandlingsadfærd, der understøttes af en implementering.

Funktion er ikke det samme som tilladelse. Funktion beskriver, hvad et system kan gøre; tilladelse beskriver, hvad en aktør har ret til at gøre.

### 17.19 Kerne

Den mindste fælles normative model eller det mindste sæt af kapaciteter, der kræves i henhold til den gældende definition af overensstemmelse i OMI.

Ordet *core* SKAL angive den pågældende version eller specifikationskontekst, hvis der er risiko for tvetydighed.

## 18. Skemaer, validering og behandling

### 18.1 Skema

En maskinlæsbar formalisering af strukturelle begrænsninger for en del af en datamodel fra OMI.

Et skema kan validere typer, obligatoriske egenskaber, kardinalitet, syntaks og udvalgte relationer. Det definerer ikke automatisk al semantik eller behandlingsadfærd.

### 18.2 Skemaet for »JSON«

Det skema-sprog, der anvendes til at formulere maskinverificerbare begrænsninger for repræsentationer af »JSON«, blev indført i en specifikation fra OMI.

### 18.3 Validering

Processen med at vurdere data, indhold, struktur, sammenhænge eller adfærd i forhold til fastlagte regler.

Valideringen kan omfatte:

- syntaksvalidering;
- validering af skema;
- strukturel validering;
- semantisk validering;
- validering af referentiel integritet;
- profilvalidering;
- validering af, om publikationen er klar til udgivelse.

### 18.4 Validator

En implementering eller komponent, der foretager validering og rapporterer resultaterne.

### 18.5 Valideringsregel

En identificeret regel, der blev vurderet under valideringen.

En valideringsregel BØR definere anvendelsesområde, betingelse, alvorlighed, meddelelse samt den gældende specifikation eller profil.

### 18.6 Valideringsresultat

Et rapporteret resultat af en evaluering af en valideringsregel i forhold til et mål.

### 18.7 Valideringsrapport

En struktureret samling af valideringsresultater sammen med kontekstuelle oplysninger såsom valideringsprogrammets version, specifikationsversionen, profilen, tidspunktet og målidentiteten.

### 18.8 Gyldig

Overholdelse af de gældende valideringsregler for et angivet skema, en angiven specifikation og en angiven profil.

»Valid« MÅ IKKE anvendes uden at angive det relevante regelsæt, når der er flere mulige.

### 18.9 Ugyldig

Overtrædelse af en eller flere gældende normative valideringsregler.

### 18.10 Fejl

En tilstand, der strider mod et normativt krav eller forhindrer en operation i at blive gennemført korrekt.

### 18.11 Advarsel

En tilladt eller afhjælpelig tilstand, der kan medføre tab af oplysninger, nedsat interoperabilitet, tvetydighed eller uventede resultater.

### 18.12 Informativt resultat

Et validerings- eller behandlingsresultat, der giver indblik i sammenhængen uden at angive, at resultatet er ugyldigt, eller at der anbefales en rettelse.

### 18.13 Processor

En implementering eller komponent, der anvender data fra OMI og udfører en defineret handling.

Eksempler herpå er parser, validator, renderer, importer, exporter, resolver, konverter og bevaringsprocessor.

### 18.14 Parser

En processor, der læser en serialiseret repræsentation og opbygger eller identificerer dens strukturelle datamodel.

At syntaksanalysen lykkes, betyder ikke, at den er semantisk gyldig.

### 18.15 Producent

En implementering, der opretter eller genererer data, der overholder standarden »OMI«.

### 18.16 Forbruger

En implementering, der læser eller behandler data frOMI.

### 18.17 Renderer

En processor, der genererer et præsentations- eller publikationsresultat ud fra indhold fra semantisk OMI og relevante profiler.

### 18.18 Rendering

Processen med at generere en visuel, tekstuel, lydmæssig, taktil eller maskinrettet præsentation ud fra struktureret semantisk indhold.

Renderingen MÅ IKKE i al hemmelighed ændre den autoritative semantiske kilde.

## 19. Import, eksport og interoperabilitet

### 19.1 Import

Processen med at konvertere eller integrere data fra en ekstern repræsentation til en repræsentation i OMI.

### 19.2 Eksport

Processen med at konvertere data fra »OMI« til en ekstern repræsentation eller et output-pakke.

### 19.3 Omregning

En omdannelse mellem repræsentationer, formater, skemaer eller modeller.

Import og eksport er retningsbestemte former for konvertering i forhold til en OMI-behandlingskontekst.

### 19.4 Kortlægning

En dokumenteret sammenhæng mellem begreber, egenskaber, værdier, strukturer eller operationer i en kildemodel og en målmodel.

### 19.5 Tabsfri kortlægning

En afbildning, der bevarer alle de oplysninger, der kræves i henhold til det angivne afbildningsomfang, og som muliggør en ækvivalent rekonstruktion.

### 19.6 Betinget tabsløs kortlægning

En afbildning, der kun er tabsfri, når de angivne forudsætninger eller profilbegrænsninger er opfyldt.

### 19.7 Kortlægning med tab

En kortlægning, der udelader, tilnærmer, sammenlægger eller omdanner oplysninger på en måde, der forhindrer en fuldstændig ækvivalent rekonstruktion.

Tab SKAL dokumenteres og BØR indberettes af konverteringsværktøjer.

### 19,8 Tur-retur

En sekvens, hvor data konverteres fra én repræsentation til en anden og derefter tilbage til den oprindelige repræsentation eller model.

En round-trip-anmodning SKAL angive, hvilke oplysninger og hvilken semantik der skal bevares.

### 19.9 Interoperabilitet

Uafhængige systemers evne til at udveksle og behandle information med et aftalt niveau af semantisk og adfærdsmæssig konsistens.

Interoperabilitet kan være strukturel, semantisk, adfærdsmæssig, operationel eller bevaringsorienteret. Den relevante dimension BØR angives.

### 19.10 Kompatibilitet

Evnen hos versioner, implementeringer, formater eller profiler til at fungere sammen i overensstemmelse med fastlagte forventninger.

Det ubestemte udtryk *kompatibel* BØR undgås. Specifikationer BØR angive bagud-, fremad-, rundtur-, adfærds-, skema-, API- eller profilkompatibilitet.

### 19.11 Bevarelse

Den koordinerede indsats for at opretholde tilgængeligheden, integriteten, identiteten, fortolkeligheden og herkomsten af videnskabeligt indhold over tid.

### 19.12 Bevaringsprocessor

En løsning, der validerer, pakker, migrerer, verificerer eller vedligeholder indholdet på OMI med henblik på langsigtet bevaring.

## 20. Terminologi vedrørende implementering

### 20.1 Gennemførelse

Software, en tjeneste, en komponent, et bibliotek eller et system, der implementerer en eller flere specifikationer eller profiler fra OMI.

En implementering er ikke selve standarden.

### 20.2 Referenceimplementering

En implementering, der vedligeholdes af OMI, og som har til formål at demonstrere, teste og give feedback på specifikationerne.

Open Manuscript Studio er en referenceimplementering. Dens adfærd er ikke normativ, medmindre den indgår i en offentliggjort specifikation.

### 20.3 Uafhængig gennemførelse

En implementering, der er udviklet med tilstrækkelig organisatorisk eller teknisk uafhængighed til at kunne levere meningsfuld dokumentation for interoperabilitet, der rækker ud over én fælles kodebase.

### 20,4 Open Manuscript Studio

Det førende program til oprettelse af og samarbejde om referencer på OMI.

Det officielle forkortede navn er *Studio*, når sammenhængen er entydig.

### 20.5 Dokumentet »OMI«

Et serialiseret dokument, der definerer og overholder en specifikation for dokument- eller filformatet »OMI«.

Udtrykket MÅ IKKE bruges om ethvert dokument, der blot er redigeret med et program, der understøtter OMI.

### 20.6 Support

En implementerings erklærede evne til at behandle en defineret specifikation, version, profil, funktion eller et format.

Støtten SKAL være kvalificeret som relevant, f.eks. læser, skriver, validerer, gengiver, importerer, eksporterer eller bevarer.

### 20.7 Ukendt funktion

En funktion, type, egenskab, udvidelse eller værdi, som en implementering ikke genkender.

### 20.8 Funktion, der ikke understøttes

En anerkendt funktion, som en implementering ikke understøtter eller behandler.

»Ukendt« og »ikke understøttet« er to forskellige tilstande.

### 20.9 Implementeringsafhængigt

Adfærd, der bevidst overlades til en implementering inden for de grænser, der er fastlagt i en specifikation.

Implementeringsbestemt adfærd SKAL dokumenteres af implementeringen, når den påvirker interoperabiliteten eller brugerens forventninger.

### 20.10 Brugeragent

Et program, der handler på vegne af en menneskelig bruger med henblik på at oprette, vise, redigere, gennemgå, validere eller behandle indhold på OMI.

Udtrykket henviser ikke til en akademisk aktør, såsom en forfatter eller en organisation.

## 21. Skelnen, der let kan føre til fejl

### 21.1 Manuskript kontra fil

Et manuskript er et videnskabeligt intellektuelt objekt. En fil er en repræsentation til opbevaring eller overførsel.

Forkert:

> Manuskriptet er en ZIP-fil.

Foretrukket:

> Manuskriptpakken er komprimeret i en ZIP-baseret fil.

### 21.2 Dokument kontra publikation

Et dokument er en struktureret fremstilling i en behandlingssammenhæng. En publikation er et offentliggjort resultat.

### 21.3 Bibliografisk post kontra forekomst af henvisninger

En bibliografisk post beskriver den citerede kilde. En forekomst af en henvisning registrerer en enkelt henvisning og det sted, hvor den forekommer.

### 21.4 Referenceliste kontra litteraturliste

Et referencebibliotek er en struktureret samling, der står til rådighed for manuskriptet. En litteraturliste er et udvalg af denne samling.

### 21.5 Anker kontra annotation

Et anker identificerer et mål. En annotation knytter en tekst til dette mål.

### 21.6 Note kontra kommentar

En note hører til manuskriptets indhold. En kommentar vedrører indholdet eller et andet objekt og kan forblive uden for den offentliggjorte læseflow.

### 21.7 Rolle kontra tilladelse

En rolle beskriver et ansvarsområde eller en funktion. En tilladelse giver ret til at udføre en handling.

### 21.8 Specifikation kontra skema

En specifikation definerer semantik og adfærd. Et skema formaliserer strukturelle begrænsninger, der kan kontrolleres af en maskine.

### 21.9 Profil kontra udvidelse

En profil udvælger eller begrænser specifikationer for en defineret kontekst og kan definere udvidelser. En udvidelse tilføjer navne, strukturer eller adfærdsmønstre via en udvidelsesmekanisme.

### 21.10 Oversættelse kontra lokalisering

Oversættelse indebærer udarbejdelse af videnskabeligt indhold på målsproget, der vedrører kildeteksten. Lokalisering indebærer tilpasning af software eller præsentationer til et bestemt sprog- og kulturområde.

### 21.11 Version kontra revision

En version er den generelt definerede tilstand. En revision angiver normalt en version, der er opstået som følge af ændringer i forhold til en tidligere tilstand.

### 21.12 Kompetence kontra tilladelse

»Capability« vedrører teknisk support. »Permission« vedrører autorisation.

### 21.13 Gyldig kontra overensstemmende

Udtrykket »gyldig« bruges normalt om data, der er vurderet i forhold til et regelsæt. Udtrykket »overensstemmende« beskriver en implementering, et dokument eller en proces, der opfylder alle de gældende normative krav inden for et angivet anvendelsesområde.

### 21.14 Vedvarende kontra uforanderlig

»Persistent« betyder, at dataene er beregnet til at forblive identificerbare over tid. »Uforanderlig« betyder, at dataene ikke må ændres under den samme versionsidentitet.

## 22. Udtryk, der skal præciseres eller undgås

Normative OMI-dokumenter BØR præcisere følgende tvetydige udtryk:

| Undgå eller præcisér | Foretræk |
|---|---|
| reference | forekomst af en henvisning, bibliografisk post, krydshenvisning eller normativ reference |
| kilde | metadatakilde, oversættelseskilde, importkilde eller citeret kilde |
| version | manuskriptversion, skema-version, implementeringsversion eller publikationsversion |
| post | bibliografisk post, valideringspost, revisionshændelse eller registerpost |
| objekt | videnskabeligt objekt, strukturelt objekt, indholdsobjekt eller aktør |
| redaktør | manuskriptredaktør, tidsskriftredaktør, årgangsredaktør, korrekturlæser eller specifikationsredaktør |
| format | filformat, publikationsformat, visningsformat eller datamodel |
| kompatibel | bagudkompatibel, fremadkompatibel, rundturkompatibel eller profilkompatibel |
| gyldig | gyldig i forhold til et navngivet skema, en specifikation eller en profil |
| link | identifikator, URL, anker, henvisning, krydshenvisning eller relation |
| bruger | forfatter, redaktør, korrekturlæser, oversætter, administrator, læser eller en klient frAPI |
| udgivet | udgivet som hvilken publikationsversion eller hvilket output |
| kanonisk | kanonisk for hvilket anvendelsesområde og hvilken autoritet |

Følgende udtryk BØR IKKE forekomme i normative krav uden en målbar definition:

- relevante metadata;
- standardformat;
- standardhenvisning;
- korrekt gengivelse;
- brugervenlig;
- høj kvalitet;
- permanent link;
- sikker opbevaring;
- fuld støtte.

## 23. Store bogstaver og formatering

Generiske begreber skrives med små bogstaver:

> et manuskript, et anker, en forekomst af en henvisning, en profil

I officielle navne anvendes store bogstaver i begyndelsen af hvert ord:

> Open Manuscript Initiative, Open Manuscript Studio, Citation Model, Specification Registry

Maskinlæsbare navne, egenskaber, literale værdier og identifikatorer formateres som følger:

> Egenskaben »`documentLanguage`« indeholder et sprogkode.

Permanente dokumentidentifikatorer i OMI bruger præfikser med store bogstaver:

```text
OMI-SPEC-005
OMI-PROFILE-001
OMI-REG-001
OMI-SCHEMA-001
OMI-EXAMPLE-001
```

## 24. Forkortelser

En forkortelse BØR udforklares ved den første konkrete anvendelse i et dokument, medmindre man med rimelighed kan forvente, at målgruppen kender betydningen.

Blandt de anbefalede formularer kan nævnes:

| Forkortelse | Betydning |
|---|---|
| OMI | Open Manuscript Initiative |
| CSL | Citation Style Language |
| DOI | Digital Object Identifier |
| ORCID | Åben forsker- og bidragyder-ID |
| ROR | Register over forskningsorganisationer |
| JATS | Tag-pakke til tidsskriftsartikler |
| API | Applikationsprogrammeringsgrænseflade |
| URI | Uniform Resource Identifier |
| URL | Uniform Resource Locator |
| UUID | Universelt unik identifikator |
| JSON | JavaScript Objektnotation |
| XML | Extensible Markup Language |
| PDF | Portable Document Format |
| EPUB | Elektronisk publikation |

I flertalsforkortelser bruges der ingen apostrof:

> APIs, DOIs, URL'er

## 25. Krav til oversættelse

Officielle oversættelser af specifikationerne i »OMI« SKAL anvende en godkendt sprogspecifik terminologiliste, der er udarbejdet på baggrund af dette dokument.

Oversættelsesprocessen SKAL bevare følgende forskelle, herunder:

- manuskript kontra dokument;
- forekomst i citatet kontra bibliografisk post;
- referencebibliotek kontra litteraturliste;
- anker kontra annotation;
- note kontra kommentar;
- rolle kontra tilladelse;
- specifikation kontra skema;
- oversættelse kontra lokalisering;
- kapacitet kontra tilladelse;
- gyldig kontra overensstemmende.

Når ét ord på målsproget kan dække over to begreber på OMI, BØR oversættelsen anvende:

- et kvalificeret sammensat udtryk;
- et fast teknisk låneord;
- en præcisering i parentes;
- en sprogspecifik ordlisteanmærkning.

Egenskabsnavne, opregningsværdier, identifikatorer, medietyper, navnerumsidentifikatorer og kravidentifikatorer MÅ IKKE oversættes.

## 26. Tilføjelse eller ændring af terminologi

Et forslag om at tilføje et centralt begreb BØR indeholde:

- foreslået betegnelse;
- kortfattet definition;
- grunden til, at begrebet er nødvendigt;
- relaterede og kontrasterende begreber;
- de berørte specifikationer og skemaer;
- kendte ækvivalenter i henhold til eksterne standarder;
- overvejelser vedrørende oversættelsen;
- eksempler på korrekt og forkert brug.

En ændring af en definition SKAL vurderes i henhold til versionspolitikken for »OMI«.

En ændring kan potentielt medføre fejl, når den ændrer:

- begrebets identitet;
- den gruppe af enheder, der er omfattet;
- normativ fortolkning;
- skema eller API betydning;
- resultater vedrørende overensstemmelse;
- fastlagte sammenhænge med eksterne standarder.

Forældede termer SKAL fortsat være dokumenteret sammen med deres erstatning og MÅ IKKE omdefineres uden varsel.

## 27. Eksterne terminologitilordninger

OMI kan tilpasse sine termer til eksterne standarder, men der MÅ IKKE antages ækvivalens alene på grund af, at betegnelserne ligner hinanden.

I en kortlægning BØR det angives, om den er:

- nøjagtig;
- snævrere;
- bredere;
- overlappende;
- afhænger af konteksten;
- ikke-ækvivalent.

Eksempler på relevante eksterne terminologikilder omfatter:

- JATS;
- Sprog i citatform;
- Crossref-metadata;
- DataCite-metadata;
- ORCID;
- ROR;
- Dublin Core;
- schema.org;
- biblioteks- og arkivmodeller;
- webannotationsmodeller;
- bevaringsstandarder.

Eksterne tilknytninger har informativ karakter, medmindre de indgår som normative krav i en »OMI«-specifikation.

## 28. Forventninger til overensstemmelse

OMI Specifikationer og officielle profiler SKAL anvende centrale termer konsekvent.

En overensstemmende implementering KAN anvende andre betegnelser i brugergrænsefladen, men de eksporterede data, API'er, dokumentationen og overensstemmelseserklæringerne SKAL bevare de definerede begrebsmæssige skelnen.

En implementering MÅ IKKE hævde, at to centrale begreber i OMI er ækvivalente, når specifikationerne skelner mellem dem.

En skemaegenskab eller et »API«-felt, der anvender et centralt begreb, BØR henvise til eller gengive den relevante definition i den genererede dokumentation.

## 29. Vedligeholdelse

Dette dokument vedligeholdes i henhold til specifikationslivscyklusen, versionspolitikken og stilvejledningen for specifikationer fra OMI.

Der BØR foretages en terminologigennemgang, når:

- der udarbejdes et udkast til en ny specifikation;
- et skema introducerer en ny kernetype eller -egenskab;
- to specifikationer bruger det samme ord på forskellig måde;
- en ekstern kortlægning afslører en begrebsmæssig uoverensstemmelse;
- en officiel oversættelse kan ikke tydeligt bevare en skelnen;
- Erfaringerne med implementeringen viser, at der er uklarheder.

Redaktionelle rettelser kan udgives som patch-versioner. Kompatible tilføjelser kan udgives som mindre versioner. Ændringer, der ændrer den fastlagte normative betydning, kræver en hovedversion eller en dokumenteret ændring med bagudkompatibilitetsbrud før version 1.0.

## 30. Resumé

OMI afhænger af forskelle, som almindelig dokumentsoftware ofte skjuler.

Et manuskript er ikke en fil. En forekomst af en henvisning er ikke en formateret henvisning. En bibliografisk post er ikke en bibliografisk optegnelse. Et anker er ikke en annotation. En rolle er ikke en tilladelse. En specifikation er ikke et skema. En referenceimplementering er ikke standarden.

Ved at opretholde disse skelnen kan uafhængige systemer udveksle videnskabeligt indhold uden gentagne gange at skulle rekonstruere dets betydning. Dette terminologidokument udgør derfor en del af det arkitektoniske grundlag for Open Manuscript Initiative.