---
id: publication-styles-and-publisher-profiles
title: Publikationsformater og forlagsprofiler
sidebar_label: Publikationsformater og forlagsprofiler
description: Hvordan Open Manuscript Studio adskiller manuskriptets semantik, forlagets identitet og genanvendelige publikationsformater til eksport til PDF, HTML og CSS, herunder import af stil-sæt fra InDesign IDML.
keywords:
  - Open Manuscript Studio
  - publication style
  - publisher profile
  - Adobe InDesign
  - IDML
  - CSS export
  - PDF export
  - HTML export
  - journal typography
  - publishing workflow
---

# Publikationsformater og forlagsprofiler

Open Manuscript Studio adskiller nu tre aspekter, der ofte blandes sammen i traditionelle redigeringssystemer:

1. **manuskriptets semantik** — det videnskabelige indhold og dets struktur;
2. **forlagets identitet** — tidsskriftets eller forlagets branding, identifikatorer og juridiske metadata;
3. **udgivelsesstil** — sideopbygning, typografi og præsentation af det færdige produkt.

Denne opdeling gør det muligt at tilpasse det samme OMI-manuskript til forskellige tidsskrifter, forlag og udgivelseskanaler uden at skulle omskrive selve manuskriptet.

## Aktuel status for implementeringen

De funktioner, der beskrives på denne side, er implementeret i den aktuelle Studio-udviklingsgren og indgår i projektets forberedelse til beta-udgivelse. Den offentlige binære udgivelse er fortsat `0.1.0-alpha.4`; de nyere funktioner, der beskrives her, vil muligvis først blive tilgængelige i udviklingsgrenen inden den næste pakkede udgivelse.

### Genanvendelige publikationsformater med navn

En forlags- eller tidsskriftprofil kan indeholde flere navngivne publikationsformater. Brugere kan:

- Opret en ny stil;
- dupliker en eksisterende stil;
- omdøb en stil;
- Vælg den aktive stil;
- slet stilarter, men bevar mindst én gyldig stil;
- rediger stilværdier med live-forhåndsvisning;
- gem den aktive stil lokalt;
- eksporter stildefinitionen;
- hente den genererede fil »CSS« ud fra den aktuelle redigeringsstatus;
- Importer et Adobe InDesign-stilsæt fra en »IDML«-pakke.

Den aktuelt valgte stil er den aktive stil, der anvendes af eksportstierne PDF og HTML.

### Redigeringsværktøj til publikationsformater

Den grafiske editor fokuserer på redigeringsfunktioner med henblik på udgivelse frem for manuskriptets semantik. De områder, der i øjeblikket kan redigeres, omfatter:

- sidens bredde og højde;
- spejlede indre og ydre margener;
- skrifttype, størrelse og linjeafstand;
- indrykning og justering af afsnit;
- titel og overskriftsgeometri;
- billedtekster;
- formatering af litteraturlisten;
- typografi i fodnoter og skillelinjer;
- adfærd vedrørende løbende overskrift;
- udskrivningsorienteret sidegeometri.

Live-forhåndsvisningen tager højde for manuskriptet: titel, undertitel, forfattere, tilhørsforhold, overskrifter, brødtekst og fodnoter hentes fra det aktuelt åbne manuskript, hvor disse oplysninger er tilgængelige. Manglende metadata fra manuskriptet erstattes ikke med eksempelpublikationsdata.

## Import af stil-sæt fra Adobe InDesign-IDML

Studio kan importere genanvendelige publikationsformater fra en **Adobe InDesign-IDML**-pakke. Formålet er at sikre kompatibilitet mellem formater, ikke en fuldstændig konvertering af InDesign-dokumenter: native `.indd`-filer og import af komplette IDML-dokumenter falder uden for denne importfunktionens anvendelsesområde.

Importøren læser de relevante »XML«-ressourcer fra ZIP-pakken »IDML« og kan overføre genkendelige oplysninger i publikationsformat, såsom:

- sidens bredde og højde;
- øverste, nederste, indre og ydre margener;
- afsnitets skrifttype og skriftstørrelse;
- førende;
- afsnitstilpasning;
- indrykning i første linje;
- mellemrum før og efter;
- oplysninger om kursiv og almindelig fed/halvfed skrift;
- `BasedOn` arv af afsnitstil.

Almindelige engelske, ungarske og tyske InDesign-stilnavne tilknyttes automatisk til publikationsroller i »OMI«, herunder brødtekst, artikeloverskrift og underoverskrift, overskrifter på første og andet niveau, fodnoter, billed- og tabeltekst samt bibliografiske poster. Stilarter, der ikke kan identificeres automatisk, angives fortsat som ikke-tilknyttede i stedet for at blive tvunget ind i manuskriptmodellen.

En vellykket import fra IDML opretter en **ny, genanvendelig publikationsstil fra OMI**, vælger den som den aktive stil og opdaterer den grafiske redigeringsfunktion for publikationsstile. Den omskriver **ikke** overskrifter, afsnit eller andre semantiske elementer i manuskriptet. Dermed bevares den arkitektoniske grænse mellem den videnskabelige struktur og præsentationen.

Dette gør det muligt for et tidsskrift eller et forlag at overføre et eksisterende InDesign-typografisystem til Studio og genbruge det til OMI-manuskripter uden at indlejre InDesign-specifik semantik i selve dokumentet.

## Forlagsprofil

Udgiverens identitet holdes adskilt fra publikationens typografi. En udgiverprofil kan indeholde oplysninger såsom:

- tidsskriftets eller forlagets navn;
- kort titel;
- post- og kontaktoplysninger;
- hjemmeside;
- ISSN og eISSN;
- logokilde, alternativ tekst og synlighed af det endelige resultat;
- angivelse af bind, nummer og år;
- DOI visningsindstillinger;
- ophavsretsindehaver og ophavsretsskabelon;
- licensmærke, URL og ikon;
- Indstillinger for branding og juridisk synlighed på forsiden og HTML.

Det betyder, at en ændring af et tidsskrifts logo, ISSN-nummer eller licens ikke kræver ændringer i typografien, og at ændringer i typografien ikke ændrer forlagets identitet.

## PDF og eksport af HTML

Studio anvender den aktive publikationsstil til både udskrifter via PDF/print og HTML, men behandler de to medier bevidst forskelligt.

### PDF / udskriv

Stien »PDF« anvender udskriftsspecifikke regler, såsom:

- brugerdefinerede sidedimensioner;
- spejlede margener;
- sidesortering;
- løbende overskrifter;
- fremstilling af fodnoter;
- formatering af titler, overskrifter, billedtekster og litteraturliste;
- udgiveroplysninger og juridiske metadata, hvor disse er konfigureret.

Dialogboksen »Platform print/PDF« bruges til at oprette den endelige »PDF«.

### HTML

Pakken »HTML« bevarer dokumentets semantiske struktur og den valgte typografi, men fjerner bevidst de funktioner, der kun gælder for udskrift:

- ingen fast sidestørrelse;
- ingen sidetal;
- ingen løbende overskrifter;
- Ingen tvungne sideskift.

Resultatet er stadig en bærbar semantisk »HTML«-pakke snarere end et simuleret papirlayout i browseren.

## CSS eksport

Redigeringsværktøjet »Publication Style« kan generere og downloade et »CSS« direkte ud fra den aktuelt valgte redigeringstilstand, herunder ugemte ændringer. Det genererede stylesheet omfatter den aktive stils typografi og, hvor det er relevant, reglerne for udskriftssider.

Dette udgør en bærbar bro mellem Studios grafiske stilredigeringsværktøj og eksterne publiceringssystemer eller web-pipelines, der anvender CSS.

## Referenceudgave: Egyháztörténeti Szemle

Den første komplette referenceprofil blev rekonstrueret ud fra et trykt nummer af *Egyháztörténeti Szemle*. Den viser, hvordan et tidsskriftsspecifikt visuelt udtryk kan gengives uden at indarbejde tidsskriftsspecifikke præsentationsregler i manuskriptmodellen *OMI*.

De medfølgende værdier for numerisk typografi og geometri er redigerbare startværdier. Kommercielle skrifttyper er ikke inkluderet, og officielle udgiverressourcer medfølger kun, hvis de udtrykkeligt er angivet.

## Omfattende dokumentlister og indekser

Den samme udviklingsgren med fokus på beta-klarhed forbedrer også navigationen i de genererede dokumenter samt listerne:

- Importerede indholdsfortegnelser fra Word genkendes som semantisk genererede strukturer i stedet for at bevare forældede sidetal;
- Indholdslisteposterne fører til den tilsvarende struktur i manuskriptet;
- figur-/billedlister kan hente poster fra strukturerede importerede billeder, herunder billedtekster, alternativ tekst og filnavne som reserve;
- Der kan anvendes brugerdefinerede indekser til navne, steder og andre dokumentspecifikke indekstyper;
- indeksoplysningerne fører til de konkrete forekomster i manuskriptet;
- Objektorienteret søgning kan vise en liste over billeder, figurer, tabeller, diagrammer og ligninger uden, at der kræves en tekstforespørgsel.

Disse strukturer er fortsat knyttet til manuskriptets semantik og ankerpunkter snarere end til en fast paginering.

## Sikkerhedsgrænse

Eksport af publikationer og import af stilarter behandler manuskript-, profil- og importeret IDML-tekst som data og ikke som kørbar markup. Eksportimplementeringen undgår at fortolke dynamisk DOM-tekst på ny via usikre `document.write()`-stier og anvender i stedet struktureret DOM/tekst-tildeling eller indlæsning af isolerede, genererede dokumenter.

Importmodulet »IDML« anvender en separat tillidsgrænse inden parsningen af »XML«: Ikke-understøttede »`DOCTYPE`«, entitetsdeklarationer og behandlingsinstruktioner i stilark afvises. Fejlmeddelelser fra parseren eller pakken, der stammer fra en ikke-tillidsvækkende »IDML«-fil, vises ikke i Studio-grænsefladen; brugerne modtager i stedet en fast, lokaliseret meddelelse om, at importen er mislykket. Automatisk CodeQL-scanning anvendes til at spore disse dataflows fra kildekode til DOM under sikkerhedshærdning.

## Arkitektonisk princip

Det tilsigtede forhold er:

**OMI manuskript → forlagsprofil + valgt publikationsformat → output-renderer → PDF / HTML / CSS**

En yderligere vej til interoperabilitet er:

**InDesign-IDML-stilsæt → OMI-publikationsstil → samme output-renderer**

Manuskriptet forbliver bærbart og semantisk stabilt, mens præsentationen bliver genanvendelig, udskiftelig, importabel og udgiver-specifik.
