---
title: Specifikationens livscyklus
sidebar_position: 4
---

# Open Manuscript Initiative Specifikationens livscyklus

**Status:** Udkast  
**Version:** 0.1  
**Dokumenttype:** Styringspolitik  
**Normativt sprog:** engelsk

## 1. Formål

Denne politik fastlægger, hvordan specifikationer på Open Manuscript Initiative foreslås, udarbejdes, gennemgås, implementeres, stabiliseres, udfases og erstattes.

Livscyklussen har til formål at forhindre, at ustabilt designarbejde forveksles med en fast standard, samtidig med at tidlige idéer kan drøftes og afprøves åbent.

Hvert dokument, der er registreret som en »OMI«-specifikation, SKAL angive én livscyklusstatus. Statusændringer SKAL registreres i versionsstyringen og BØR ledsages af en offentlig begrundelse.

## 2. Oversigt over livscyklusen

```text
Exploratory
    ↓
Draft
    ↓
Review Candidate
    ↓
Implementation Candidate
    ↓
Stable
    ↓
Deprecated
    ↓
Superseded
```

En specifikation behøver ikke at gennemgå alle faser, hvis den trækkes tilbage inden offentliggørelsen. Et dokument KAN vende tilbage til en tidligere fase, hvis der opdages væsentlige uafklarede spørgsmål.

## 3. Normativ terminologi

Nøgleordene **SKAL**, **MÅ IKKE**, **KRÆVES**, **SKAL**, **MÅ IKKE**, **BØR**, **BØR IKKE**, **ANBEFALES**, **KAN** og **VALGFRIT** angiver kravniveauer, når de er skrevet med store bogstaver.

Normative krav BØR kunne testes, hvor det er praktisk muligt.

## 4. Nødvendige metadata for dokumenter

Hver registreret specifikation SKAL indeholde følgende oplysninger:

- permanent specifikationsidentifikator;
- titel;
- version;
- status i livscyklussen;
- normativ eller informativ klassificering;
- redaktører eller ansvarlige vedligeholdere;
- omfang;
- afhængigheder;
- tilhørende specifikationer;
- status for implementeringen;
- ændringshistorik eller udgivelseshenvisning;
- sidste væsentlige opdatering.

Specifikationer, der definerer serialiserbare data, BØR også angive relevante skemaer, eksempler og overensstemmelsestests.

## 5. Undersøgende

### 5.1 Formål

Den udforskende fase anvendes til tidlige koncepter, problemformuleringer, konkurrerende design og forskningsspørgsmål.

Et udforskende dokument er ikke en »OMI«-specifikation og MÅ IKKE fremstilles som et implementeringskrav.

### 5.2 Adgangskriterier

Et dokument kan gå ind i denne tilstand, når det:

- peger på et problem, der er relevant for OMI;
- forklarer, hvorfor de nuværende specifikationer er utilstrækkelige;
- foreslår mindst én mulig retning;
- peger på vigtige uafklarede spørgsmål.

### 5.3 Forventninger

Et foreløbigt dokument KAN:

- indeholder ufuldstændig terminologi;
- præsentere alternative modeller;
- udelad skemaer eller implementeringsdetaljer;
- ændring uden garantier for kompatibilitet.

Den BØR klart skelne mellem fastlagte krav og uafklarede spørgsmål.

### 5.4 Afslutningskriterier

For at blive forfremmet til »Draft« kræves følgende:

- et afgrænset anvendelsesområde;
- en foretrukken arkitektonisk retning;
- indledende terminologi;
- identificerede afhængigheder;
- bevis for, at forslaget hører hjemme i »OMI«-specifikationssættet.

Et foreløbigt forslag KAN i stedet afsluttes som afvist, udsat eller uden for rammerne.

## 6. Udkast

### 6.1 Formål

Et udkast er den vigtigste fase i udarbejdelsen af en specifikation. Et udkast beskriver den tilsigtede model tilstrækkeligt detaljeret til at muliggøre teknisk gennemgang og eksperimentel implementering.

Udkast til indhold er ustabilt og KAN ændres på en måde, der medfører inkompatibilitet.

### 6.2 Adgangskriterier

Et udkast SKAL indeholde:

- en permanent eller midlertidigt reserveret OMI-SPEC-identifikator;
- formål og anvendelsesområde;
- vigtigste begreber og datastrukturer;
- sammenhæng med andre specifikationer i OMI;
- konkrete uafklarede spørgsmål;
- en indledende overensstemmelsesmodel.

### 6.3 Forventninger

Et udkast BØR indeholde:

- eksempler;
- valideringsregler;
- vejledning i serialisering, hvor det er relevant;
- hensyn til sikkerhed og privatliv;
- hensyn til tilgængelighed, hvor det er relevant;
- konsekvenser for migrationen;
- kendte alternativer og forkastede tilgange.

Eksperimentelle implementeringer KAN kun angive, at de understøtter et udkast, hvis de angiver den nøjagtige specifikationsversion eller commit.

### 6.4 Afslutningskriterier

For at blive udnævnt til kandidat til forfremmelse kræves følgende:

- ingen uafklarede spørgsmål, der hindrer en sammenhængende gennemførelse;
- ensartet terminologi i dokumentet;
- gennemgået afhængigheder;
- internt sammenhængende normative krav;
- repræsentative eksempler;
- en dokumenteret liste over kendte begrænsninger;
- redaktionel gennemgang med henblik på struktur og klarhed.

## 7. Gennemgang af kandidat

### 7.1 Formål

Et udkast til gennemgang anses for at være tilstrækkeligt færdigudarbejdet til en målrettet gennemgang af offentligheden og eksperter.

Formålet med denne fase er at afdække arkitektoniske fejl, kompatibilitetsproblemer, uklare krav og manglende brugsscenarier, inden implementeringerne betragtes som tegn på stabilitet.

### 7.2 Adgangskriterier

En ansøger til en stilling SKAL:

- opfylder alle udkastskriterierne for udtræden;
- fastlægge en gennemgangsperiode eller en milepæl for gennemgangen;
- offentliggøre de spørgsmål, hvor der specifikt anmodes om feedback;
- indeholde en implementerings- og testplan;
- identificere forventede konsekvenser for bagudkompatibiliteten.

### 7.3 Krav til gennemgang

En gennemgang BØR omfatte synspunkter fra mere end én relevant gruppe, f.eks.:

- forfattere og forskere;
- redaktører og forlag;
- bibliotekarer og arkiver;
- softwareudviklere;
- tilgængelighedseksperter;
- konserveringsspecialister;
- eksperter i metadata og standarder.

Kommentarer vedrørende indholdsmæssig gennemgang SKAL enten løses, accepteres som kendte begrænsninger eller udtrykkeligt udskydes med en begrundelse.

### 7.4 Afslutningskriterier

For at blive udnævnt til implementeringskandidat kræves følgende:

- afslutning eller dokumenteret afklaring af væsentlige spørgsmål i forbindelse med gennemgangen;
- en stabil overensstemmelsesmodel;
- maskinlæsbare skemaer, hvor specifikationen kræver det;
- eksempler på overensstemmelse eller testopstillinger;
- der er ingen kendt modstrid med en anden specifikation for aktivOMI;
- godkendelse gennem projektets dokumenterede beslutningsproces.

En kandidat til gennemgang SKAL sendes tilbage til udkastfasen, hvis gennemgangen medfører væsentlige ændringer i arkitekturen.

## 8. Kandidat til implementering

### 8.1 Formål

En implementeringskandidat tester, om specifikationen kan implementeres uafhængigt og på en måde, der sikrer interoperabilitet.

Designet forventes at være stabilt, men der kan stadig forekomme ændringer, hvis der ved implementeringen konstateres fejl.

### 8.2 Adgangskriterier

En implementeringskandidat SKAL levere:

- opfylde alle lovmæssige krav;
- vejledning i implementering;
- skemaer eller formelle definitioner, hvor det er relevant;
- overensstemmelseskriterier;
- eksempler, der kan afprøves;
- version og kompatibilitetsregler;
- en offentlig høringsproces med henblik på at indhente tilbagemeldinger om gennemførelsen.

### 8.3 Dokumenterede resultater af gennemførelsen

Inden en specifikation forfremmes til »Stable«, BØR den have mindst to meningsfuldt uafhængige implementeringer af sin centrale interoperabilitetsfunktion.

Hvis to implementeringer endnu ikke er praktisk gennemførlige, KAN projektet godkende én implementering samt en uafhængig validator, konverter, testsuite eller kompatibilitetsdemonstration. Undtagelsen og begrundelsen herfor SKAL registreres.

Dokumentationen for implementeringen BØR vise:

- vellykket analyse eller behandling af delte fiksturer;
- en ensartet fortolkning af den krævede semantik;
- adfærd ved returflyvning, hvor det er påkrævet;
- fejlhåndtering og validering;
- kompatibilitet mellem uafhængigt udviklede komponenter.

Open Manuscript Studioen kan fungere som en referenceimplementering, men må ikke være den eneste kilde til normativ adfærd.

### 8.4 Kriterier for afslutning

For at blive forfremmet til »Stable« kræves følgende:

- tilstrækkelige beviser for gennemførelsen;
- at bestå overensstemmelsestests, hvor sådanne findes;
- afhjælpning af fejl, der hindrer implementeringen;
- dokumenterede kompatibilitets- og migrationsregler;
- en sikkerheds- og privatlivsvurdering, der står i rimeligt forhold til specifikationens omfang;
- godkendelse gennem projektets dokumenterede beslutningsproces;
- udgivelse af en stabil version.

En større designændring kræver, at projektet vender tilbage til status som »Udkast« eller »Revisionskandidat«. Mindre ændringer KAN bevare status som »Implementeringskandidat« med en ny præ-stabil version.

## 9. Stabil

### 9.1 Betydning

»Stabil« angiver, at specifikationen er egnet til implementering i produktionen og som langsigtet ekstern reference.

Stabil betyder ikke uforanderlig. Det betyder, at der er behov for kompatibilitet, forudsigelig versionsstyring og understøttelse af migrering.

### 9.2 Krav

En stabil specifikation SKAL indeholde:

- en permanent OMI-SPEC-identifikator;
- et stabilt versionsnummer;
- den fulde lovtekst;
- overensstemmelseskrav;
- offentliggjorte skemaer og eksempler, hvor det er relevant;
- dokumenterede afhængigheder;
- dokumentation for gennemførelsen;
- en ændringshistorik;
- et fastlagt, standardiseret publikationssted.

### 9.3 Ændringsstyring

Ændringer i en stabil specifikation inddeles i følgende kategorier:

- **Redaktionel rettelse:** formuleringer, formatering, links eller eksempler, der ikke ændrer den normative adfærd.
- **Præcisering af kompatibilitet:** fjerner tvetydigheder uden at gøre overensstemmende implementeringer ugyldige.
- **Kompatibel udvidelse:** tilføjer valgfri eller bagudkompatibel funktionalitet.
- **Ændring med tilbagevirkende kraft:** ændrer den krævede semantik eller gør tidligere korrekt adfærd ugyldig.

Redaktionelle rettelser og tilhørende præciseringer KAN blive offentliggjort i patch-udgivelser.

Kompatible udvidelser kræver normalt en mindre version.

Ændringer, der medfører kompatibilitetsbrud, kræver en ny hovedversion og SKAL indeholde vejledning i migrering. Et nyt design, der medfører kompatibilitetsbrud, KAN udvikles som et separat udkast, mens den nuværende hovedversion forbliver stabil.

### 9.4 Rettelser

Bekræftede fejl i »Stable«-specifikationerne SKAL offentliggøres.

Et erratum SKAL indeholde følgende:

- berørte versioner;
- om fejlen er redaktionel eller normativ;
- forventede konsekvenser af gennemførelsen;
- korrekturstatus;
- udgave, hvor rettelsen er indarbejdet.

## 10. Udgået

### 10.1 Betydning

»Udgået« angiver, at en specifikation fortsat er tilgængelig og stadig kan implementeres, men at nye implementeringer BØR foretrække en efterfølger eller et alternativ.

At en specifikation erklæres for forældet betyder ikke, at den fjernes eller at dens historiske indhold ændres.

### 10.2 Krav vedrørende udfasning

En meddelelse om udfasning SKAL indeholde følgende oplysninger:

- årsagen til, at det ikke længere anbefales;
- den anbefalede erstatning, hvis en sådan findes;
- berørte versioner;
- vejledning om migration;
- den planlagte støtteperiode, når denne foreligger;
- uanset om der er tale om sikkerhed, interoperabilitet eller bevaringsmæssige hensyn.

Forældede skemaer, navneområder og kanoniske URL’er BØR fortsat kunne tilgås med henblik på langsigtet bevaring.

## 11. Er erstattet

### 11.1 Betydning

»Er erstattet« angiver, at en anden specifikation eller en ny hovedversion formelt erstatter dokumentet i forbindelse med nye implementeringer.

En forældet specifikation forbliver en del af det permanente arkiv.

### 11.2 Krav

Dokumentet SKAL indeholde følgende oplysninger:

- den nye specifikation og version;
- den faktiske dato for ophævelse eller frigivelse;
- vejledning om migration;
- bemærkninger om kompatibilitet;
- eventuelle anvendelsestilfælde, hvor den ældre specifikation fortsat anvendes.

Det nye dokument SKAL angive, hvilket dokument det erstatter.

## 12. Yderligere slutresultater

Ikke alle forslag bliver til Stable. I styringsdokumenterne KAN arbejdet også klassificeres som:

### Afvist

Forslaget blev behandlet, men ikke vedtaget. Det BØR fremgå af beslutningsprotokollen, hvorfor det ikke blev vedtaget.

### Tilbagetrukket

Forfatteren eller redaktøren afbrød det aktive udviklingsarbejde, inden projektet blev vedtaget.

### Udsat

Arbejdet er potentielt værdifuldt, men udskydes bevidst.

### Sammenlagt

Forslagets indhold er blevet indarbejdet i en anden specifikation, og der er derfor ikke længere behov for et selvstændigt dokument.

Disse resultater er ikke modenhedsniveauer og hører ikke hjemme i den primære specifikationslivscyklus.

## 13. Statusændringer

### 13.1 Anmodning om forfremmelse

En anmodning om godkendelse af en specifikation BØR indeholde:

- nuværende og foreslået status;
- dokumentation for, at udtrædelseskriterierne er opfyldt;
- uafklarede spørgsmål;
- dokumentation for gennemførelsen, hvor det er påkrævet;
- indvirkning på kompatibiliteten;
- links til relevante vurderinger og afgørelser.

### 13.2 Beslutningsprotokol

Hver eneste opgradering til »Review Candidate«, »Implementation Candidate« eller »Stable« SKAL ledsages af en offentlig beslutningsprotokol.

Oplysningerne BØR indeholde følgende:

- beslutningsdato;
- deltagere eller den godkendende myndighed;
- gennemgåede beviser;
- indsigelser og behandlingen heraf;
- betingelser, der er knyttet til forfremmelsen.

### 13.3 Regression

En specifikation KAN vende tilbage til en tidligere status, når:

- der opdages en arkitektonisk modsætning;
- overensstemmelse kan ikke gennemføres konsekvent;
- en afhængighed ændres på en måde, der medfører inkompatibilitet;
- sikkerheds- eller privatlivsrelaterede mangler kræver en omprojektering;
- omfanget ændrer sig væsentligt.

Regression SKAL dokumenteres og MÅ IKKE ændre den tidligere udgivelseshistorik.

## 14. Versioner og status for livscyklus

Version og livscyklusstatus hænger sammen, men er to forskellige begreber.

Eksempler:

- `0.2 Draft`
- `0.8 Review Candidate`
- `0.9 Implementation Candidate`
- `1.0 Stable`
- `1.1 Stable`
- `1.0 Deprecated`

Versioner før 1.0 indebærer ikke automatisk nogen bestemt status. Hvert dokument SKAL eksplicit angive begge værdier.

## 15. Overensstemmelseserklæringer

Implementeringer, der hævder at være i overensstemmelse, SKAL angive:

- identifikatoren »OMI-SPEC«;
- den nøjagtige version;
- eventuelle implementerede valgfrie profiler;
- kendte afvigelser;
- relevante udvidelsesnavneområder eller funktioner.

Implementeringer MÅ IKKE hævde ubetinget overensstemmelse med et foreløbigt dokument.

Overensstemmelse med udkast, »Review Candidate«- eller »Implementation Candidate«-versioner SKAL betegnes som eksperimentel eller præ-stabil.

## 16. Afhængigheder

En specifikation MÅ IKKE blive »Stable«, hvis den normativt er afhængig af et uafklaret »Exploratory«-dokument.

En stabil specifikation KAN afhænge af:

- endnu en specifikation for Stable;
- en ekstern standard med en specifik versionsangivelse;
- kun en »Implementation Candidate«, når afhængigheden er af begrænset omfang, og risikoen er dokumenteret.

Når en afhængighed er udfaset eller erstattet, SKAL de berørte OMI-specifikationer gennemgås.

## 17. Oversættelsespolitik

Den normative engelske version er afgørende for livscyklusstatus.

Officielle oversættelser BØR indeholde følgende:

- status og version af den engelske kildetekst;
- datoen for revision af oversættelsen;
- om oversættelsen er færdig;
- en bemærkning om, at den engelske specifikation er gældende i tilfælde af uoverensstemmelse.

En oversættelse MÅ IKKE mærkes som »Stable«, hvis den ikke stemmer overens med den aktuelle »Stable« engelske kildetekst.

## 18. Arkiveringskrav

Udgivne versioner af typen »Review Candidate«, »Implementation Candidate«, »Stable«, »Deprecated« og »Superseded« BØR forblive permanent tilgængelige.

Projektet BØR bevare:

- uforanderlige udgivelsestags;
- øjebliksbilleder af dokumenter med versionsstyring;
- skemaer og eksempler knyttet til hver udgivelse;
- beslutningsprotokoller;
- rettelser;
- vejledninger om migration.

Canoniske URL’er BØR forblive uændrede eller omdirigere til en arkivside.

## 19. Nødkorrektioner

En alvorlig fejl vedrørende sikkerhed, privatliv, datatab eller interoperabilitet KAN kræve en hurtig afhjælpning.

Håndtering af nødsituationer SKAL stadig omfatte:

- en offentlig meddelelse eller vejledning, når det er sikkert at offentliggøre oplysningerne;
- oplysninger om den berørte version;
- korrigeret normativ tekst eller skema;
- vejledning i implementering;
- en registrering af en permanent ændring.

Sikkerhedsfølsomme oplysninger KAN midlertidigt tilbageholdes, men den endelige afgørelse BØR offentliggøres.

## 20. Ansvarsområder

### Specifikationsredigeringsprogrammer

Redaktørerne har ansvaret for:

- at sikre en sammenhængende normativ tekst;
- opfølgning på sager og beslutninger;
- udarbejdelse af dokumentation for statusændringer;
- koordinering af skemaer, eksempler og prøver;
- bevaring af ændringshistorikken.

### Implementeringsansvarlige

Implementeringsansvarlige opfordres til at:

- indberette tvetydige eller inkonsekvente krav;
- offentliggøre erfaringer med implementeringen;
- bidrage med interoperable testudstyr og test;
- Undgå at betragte adfærden i referenceimplementeringen som normgivende, når specifikationen afviger herfra.

### Projektstyring

Projektets styringsproces har ansvaret for:

- godkendelse af overgange til senere faser i livscyklussen;
- beskyttelse af permanente identifikatorer;
- at sikre mangfoldighed i bedømmelsen;
- at forhindre uforenelige ændringer, der ikke medfører en fejlmeddelelse;
- vedligeholdelse af det kanoniske register.

## 21. Minimumskrav efter status

| Krav | Undersøgelsesfase | Udkast | Kandidat til gennemgang | Kandidat til implementering | Stabil |
|---|:---:|:---:|:---:|:---:|:---:|
| Problembeskrivelse | Påkrævet | Påkrævet | Påkrævet | Påkrævet | Påkrævet |
| Afgrænset anvendelsesområde | Anbefalet | Påkrævet | Påkrævet | Påkrævet | Påkrævet |
| Permanent eller reserveret identifikator | Valgfrit | Påkrævet | Påkrævet | Påkrævet | Påkrævet |
| Normative krav | Valgfrit | Delvist | Fuldstændigt | Fuldstændigt | Fuldstændigt |
| Eksempler | Valgfrit | Anbefalet | Påkrævet | Påkrævet | Påkrævet |
| Skema/formel model, hvor det er relevant | Valgfrit | Anbefalet | Påkrævet | Påkrævet | Påkrævet |
| Offentlig gennemgang | Valgfrit | Anbefalet | Påkrævet | Påkrævet | Afsluttet |
| Dokumentation for implementering | Ikke påkrævet | Valgfrit | Planlagt | Påkrævet | Påkrævet |
| Overensstemmelsestest | Ikke påkrævet | Valgfrit | Planlagt | Påkrævet, hvor det er relevant | Vedligeholdt |
| Kompatibilitetspolitik | Ikke påkrævet | Indledende | Påkrævet | Påkrævet | Påkrævet |
| Påstand om produktionsoverensstemmelse | Forbudt | Eksperimentelt | Eksperimentelt | Præ-stabilt | Tilladt |

## 22. Adoption

Denne politik træder i kraft, når den er godkendt gennem Open Manuscript Initiative’s beslutningsproces.

Eksisterende dokumenter BØR tildeles en præcis livscyklusstatus i forbindelse med dokumentationsomstruktureringsprogrammet. Intet eksisterende dokument betragtes som »Stabilt« alene af den grund, at det er udarbejdet før denne politik trådte i kraft.

## 23. Resumé

OMI-specifikationens livscyklus omfatter følgende faser: undersøgelse, udarbejdelse af specifikationen, gennemgang, implementeringstest, fastlæggelse af en stabil standard og udfasning.

Formålet er at sikre, at hvert modenhedskrav har en konkret betydning, give implementeringsaktørerne forudsigelige forventninger og opretholde en gennemsigtig teknisk dokumentation, efterhåOMIe udvikler sig til en åben standard for videnskabelig publicering.
