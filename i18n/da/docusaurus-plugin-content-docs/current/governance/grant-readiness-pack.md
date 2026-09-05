---
title: Pakke til forberedelse af tilskudsansøgning
sidebar_label: Pakke til forberedelse af tilskudsansøgning
description: Genanvendeligt materiale vedrørende projekt, virkning, konsortium og arbejdspakker til finansieringsansøgninger, der omfatter programmet »Open Manuscript Initiative«.
---

# OMI Pakke til forberedelse af tilskudsansøgninger

Dette dokument indeholder materiale, der kan genbruges ved udarbejdelsen af forslag inden for forskning, innovation og infrastruktur i forbindelse med programmet »Open Manuscript Initiative« (OMI). Det udgør et udgangspunkt for drøftelser i konsortiet og udarbejdelsen af forslag; programspecifikke kriterier for støtteberettigelse, terminologi, TRL-krav, budgetter og juridiske forpligtelser skal altid kontrolleres i forhold til den relevante indkaldelse.

## 1. Projektoversigt

**Open Manuscript Initiative (OMI)** er et open source-initiativ til interoperabel videnskabelig forfattelse, bedømmelse, redigering og udgivelse. Dets centrale mål er at adskille det videnskabelige manuskript fra proprietære applikations- og produktionsformater, så struktureret videnskabeligt indhold kan overføres mellem forfatterværktøjer, peer-review-systemer, udgivelsesplatforme og bevaringsarbejdsgange uden gentagen manuel rekonstruktion.

Initiativet kombinerer åbne specifikationer med et implementeringsmiljø, **Open Manuscript Studio**, der er udviklet til brug i browsere, på computere og på mobile enheder. Studioet udvikles som en praktisk demonstration af dokumentmodellen og interoperabilitetsmodellen i »OMI«, herunder strukturerede manuskripter, metadata, annoteringer, referencer, publikationsformater, forlagsprofiler, peer review, flersprogede arbejdsgange og integration med udgivelsesplatforme.

**Kort beskrivelse af forslaget:**

> OMI udvikler en åben, interoperabel infrastruktur til videnskabelige manuskripter gennem hele livscyklussen fra udarbejdelse til udgivelse. Den kombinerer en applikationsuafhængig model for videnskabelige dokumenter med et open source-baseret, platformsuafhængigt Studio samt integrationsgrænseflader til tidsskrifter, monografier, identitets-, metadata- og forskningsinformationssystemer.

## 2. Problemformulering

Videnskabelige manuskripter bevæger sig ofte gennem uforbundne systemer og proprietære formater. Forfattere skriver i ét miljø, indsender til et andet, bedømmere kommenterer en anden version, redaktører rekonstruerer struktur og metadata, og forlag omdanner det samme intellektuelle objekt endnu en gang med henblik på produktion og formidling.

Denne fragmentering medfører omkostninger og risici, der kunne undgås:

- gentagne konverteringer og manuel omstrukturering;
- tab eller forringelse af semantisk information ved formatændringer;
- leverandør- og applikationsafhængighed;
- dobbelt indtastning af metadata;
- mangelfuld interoperabilitet mellem systemer til udarbejdelse, fagfællebedømmelse og udgivelse;
- hindringer for flersproget og tilgængelig videnskabelig kommunikation;
- problemer med at bevare kommentarer, henvisninger og strukturerede sammenhænge;
- høje integrationsomkostninger for tidsskrifter, forlag og forskningsinstitutioner.

OMI tager fat på dette på manuskriptniveau: **strukturér én gang, genbrug i hele den videnskabelige arbejdsgang**.

## 3. Forslag til løsning

OMI består af fire indbyrdes supplerende lag:

1. **Åbne videnskabelige modeller og specifikationer** for dokumenter, ankerpunkter, annoteringer, metadata og relaterede videnskabelige objekter.
2. **Open Manuscript Studio**, en referenceimplementering til udarbejdelse, redigering, gennemgang og udgivelse af strukturerede manuskripter.
3. **Interoperabilitetsprofiler og konnektorer** til publikations- og forskningsinfrastruktur, herunder arbejdsgange med fokus på OJS/OMPsamt integrationer med vedvarende identitet.
4. **Genanvendelige arbejdsgange for publikationer og institutioner**, herunder publikationsformater, forlagsprofiler, eksport, administration og implementering på tværs af platforme.

Projektet er bevidst ikke begrænset til blot at erstatte et tekstbehandlingsprogram. Dets værdi som forskningsinfrastruktur ligger i at bevare et overførbart videnskabeligt objekt på tværs af organisatoriske og tekniske grænser.

## 4. Nuværende forfald og dokumentation

OMI har allerede fungerende software og offentlig teknisk dokumentation. Det igangværende implementeringsarbejde omfatter:

- browserbaseret Studio;
- pakning til skrivebordet;
- Arbejdsgang for Android-applikationer;
- valideret, at målet for native iOS/iPadOS og integrationen med Files fungerer;
- struktureret redigering af manuskripter;
- redigering af flere dokumenter samt dokumentoversigt;
- optimeret import af store »DOCX«-manuskripter;
- genererede dokumentlister og indekser;
- genanvendelige publikationsformater og udgiverprofiler;
- Import af stil-sæt fra Adobe InDesign-IDML;
- stilbaseret eksport fra PDF, HTML og CSS;
- lokale og cloudbaserede lagringsarbejdsgange;
- infrastruktur til kontooprettelse, gendannelse af adgangskode og fødereret login;
- arbejdsgange for dobbeltblind fagfællebedømmelse;
- OJS/ Arbejdet med integrationen afOMP;
- ORCID-orienterede identitets-/signatur-arbejdsgange;
- arbejde med stavning, grammatik, oversættelse og integration af agenter;
- institutionelle profiler og administrative komponenter;
- infrastruktur til flersproget brugergrænseflade.

### Erklæring om modenhed

OMI bør i øjeblikket præsenteres som en **fungerende open source-demonstrator i alfa-/betafasen** og ikke som en fuldt udbygget forskningsinfrastruktur til produktionsbrug. Et formelt teknologimodningsniveau (TRL) bør kun tildeles i forbindelse med et finansieringsprogram, hvor TRL-definitionerne og kravene til dokumentation er blevet gennemgået.

Denne skelnen er nyttig i forbindelse med projektforslag: »OMI« er tilstrækkeligt implementeret til pilotprojekter, integrationsforsøg og validering, mens omfattende forskning, robustgørelse, standardisering og institutionel implementering fortsat er velegnet til finansieret udvikling.

## 5. Forskning og innovation

Mulige forsknings- og innovationsspørgsmål omfatter:

- Hvordan kan et videnskabeligt manuskript forblive semantisk stabilt, når det bevæger sig gennem forskellige forfatter- og udgivelsesmiljøer?
- Hvilken minimumsmodel for interoperabilitet kan afspejle den videnskabelige struktur uden at påtvinge forfatterne forlagsspecifikke produktionssemantikker?
- Hvordan kan annoteringer, gennemgangskommentarer og herkomstoplysninger bevares ved udveksling mellem uafhængige systemer?
- Hvordan kan permanente identifikatorer og forskningsmetadata blive en integreret del af selve forfattelsesprocessen i stedet for blot at være et supplement efter udgivelsen?
- Hvordan kan flersprogede videnskabelige arbejdsgange have en fælles struktur og samtidig bevare sprogspecifikke metadata og præsentationsform?
- Hvordan kan man adskille publikationens formgivning fra manuskriptets indhold, uden at det går ud over kvaliteten af det færdige produkt?
- Hvordan kan en åben videnskabelig infrastruktur mindske afhængigheden af bestemte leverandører uden at gøre det mere kompliceret for forskerne?

## 6. Forventede virkninger

### Forskere og forfattere

- mindre gentagen indtastning af metadata og rekonstruktion af formater;
- bærbare manuskripter på tværs af værktøjer og udgivere;
- bedre sammenhæng mellem skrivning, korrekturlæsning og udgivelse;
- bedre støtte til flersproget og struktureret videnskabelig kommunikation.

### Tidsskrifter, forlag og videnskabelige selskaber

- reducerede omkostninger til konvertering og produktion;
- genanvendelige publikationsformater og -profiler;
- integration med eksisterende udgivelsesplatforme i stedet for obligatorisk udskiftning;
- mere strukturerede input til efterfølgende offentliggørelse og bevaring.

### Universiteter, biblioteker og forskningsinfrastrukturer

- større institutionel kontrol over det videnskabelige indhold;
- mindre afhængighed af proprietære redigeringsmiljøer;
- genanvendelig open source-infrastruktur;
- bedre muligheder for integration af arkiver, metadata, identifikatorer og bevaring.

### Økosystemet for åben videnskab

- maskinlæsbare videnskabelige objekter tidligere i forskningsforløbet;
- større interoperabilitet mellem ellers isolerede tjenester;
- genanvendelige specifikationer og referenceimplementeringer;
- et praktisk miljø til afprøvning af nye arbejdsgange inden for videnskabelig kommunikation.

## 7. Søgte partnerprofiler

Et velafbalanceret konsortium kan omfatte flere af følgende partnertyper:

| Partnertype | Potentielt bidrag |
| --- | --- |
| Universitet / forskningsinstitution | krav til forskere, pilotprojekter, evaluering, forskningskoordinering |
| Universitets- eller nationalbibliotek | metadata, bevaring, interoperabilitet mellem arkiver, ekspertise inden for åben videnskab |
| Videnskabeligt forlag / tidsskrift | produktionsworkflows, redaktionel validering, pilotprojekter inden for egentlig udgivelse |
| Videnskabeligt selskab | faglige anvendelsestilfælde, samfundsengagement, formidling |
| Forskningsinfrastruktur / EOSC-relaterede tjenester | sammenslutning, interoperabilitet, tjenesteintegration |
| Software / RSE-gruppen | udvikling, sikkerhed, skalerbarhed, implementering |
| Partner inden for tilgængelighed og UX-forskning | inkluderende design og evaluering |
| NLP / flersproget forskningsgruppe | sprogteknologier, terminologi, oversættelsesprocesser |
| Partner inden for PID- og metadatainfrastruktur | ORCID/ROR/DOI og interoperabilitet mellem metadata |
| Open source-organisation med fokus på bæredygtighed | ledelse, fællesskab og langsigtet bæredygtighed |

Et forslag behøver ikke at omfatte alle disse roller. Sammensætningen bør være i overensstemmelse med udbuddets mål.

## 8. Modellen med genanvendelige arbejdspakker

### WP1 — Koordinering, styring og krav

**Mål:** projektledelse, styring, krav, etisk og juridisk koordinering samt afstemning med interessenterne.

**Forventede resultater:** styringsramme; kravspecifikation; risikoregister; politikker vedrørende data, intellektuel ejendomsret og open source.

### WP2 — Videnskabelig objektmodel og interoperabilitet

**Mål:** at finpudse specifikationerne for »OMI«; at definere udvekslingskontrakter; at validere round-trip-semantik og herkomst.

**Vejledende resultater:** versionerede specifikationer; interoperabilitetsprofiler; eksempler på overensstemmelse; valideringssæt.

### WP3 — »Open Manuscript Studio« og referenceimplementering

**Mål:** at gøre Studio mere robust på tværs af platforme; at forbedre arbejdsgangene inden for redigering, gennemgang, metadata og tilgængelighed.

**Forventede resultater:** produktionsorienterede udgivelser; forbedringer af tilgængeligheden; testinfrastruktur; teknisk dokumentation.

### WP4 — Integration af udgivelser og forskningsinfrastruktur

**Mål:** at integrere arbejdsgange i OMI med infrastrukturen inden for publikation, identitet, metadata og arkiver.

**Eksempler på resultater:** integrationer med OJSogOMP; PID-/metadata-konnektorer; API'er; integrationsdokumentation.

### WP5 — Institutionelle pilotprojekter og evaluering

**Mål:** gennemføre repræsentative pilotprojekter i samarbejde med tidsskrifter, forlag, biblioteker eller universiteter; måle brugervenlighed og interoperabilitet.

**Forventede resultater:** pilotprojekter; evalueringsdatasæt/rapporter; benchmark-analyser af arbejdsgange; anbefalinger.

### WP6 — Bæredygtighed, udnyttelse og lokalsamfundet

**Mål:** at etablere en bæredygtig open source-model, retningslinjer for bidragydere, en implementeringsstrategi og en vedligeholdelsesplan for tiden efter projektets afslutning.

**Forventede resultater:** bæredygtighedsplan; køreplan for udnyttelse/implementering; undervisningsmateriale; lokalsamfundsprogram; formidlingsresultater.

## 9. Eksempel på opgaveopdeling

Et mellemstort konsortium kan yderligere opdele arbejdet i opgaver som f.eks.:

- T2.1 forbedring af manuskript- og annoteringsmodellen;
- T2.2-metadata og profiler for permanente identifikatorer;
- T2.3-testsuite til interoperabilitet/overensstemmelse;
- T3.1 Sikkerhedsforbedring af Studio på tværs af platforme;
- T3.2 tilgængelighed og flersproget brugeroplevelse;
- T3.3 strukturerede import-/eksport- og publikationsformater;
- T4.1 Integration af OJSogOMP;
- T4.2 Integration af arkiver og forskningsinformation;
- T4.3 identitets-/PID-tjenester;
- T5.1-pilotprojekt vedrørende tidsskriftudgivelse;
- T5.2 – pilotprojekt vedrørende institutionel indholdsudvikling;
- T5.3 evaluering af brugervenlighed og virkning;
- T6.1 styring af open source;
- T6.2 implementering og uddannelse;
- T6.3 Bæredygtighed og udnyttelse.

## 10. Budgetmodel

Intet programuafhængigt budget bør betragtes som bindende. I forbindelse med den indledende planlægning i konsortiet kan omkostninger i forbindelse med OMIinddeles i følgende kategorier:

- personale / mandemåneder til udvikling af forskningssoftware;
- arbejde med interoperabilitet og specifikationer;
- projekt- og teknisk koordinering;
- UX, tilgængelighed og flersproget evaluering;
- infrastruktur, hosting, CI/CD og test;
- kodesignering og distribution på forskellige platforme;
- pilotimplementering og support;
- rejser og konsortiemøder, hvor dette er relevant;
- formidling, uddannelse og aktiviteter i lokalsamfundet;
- eksterne revisioner, sikkerhedsvurderinger eller specialtjenester, hvor det er berettiget.

### Vejledende fordeling af indsatsen

I forbindelse med et teknisk arbejdsforløb med fokus på »OMI« kan en indledende planlægningsfordeling se nogenlunde således ud:

- **35–45 %** implementering og teknisk udvikling;
- **15–20 %** arbejde med interoperabilitet og specifikationer;
- **15–20 %** pilotprojekter, validering og evaluering;
- **10–15 %** koordinering, ledelse og kvalitetssikring;
- **10–15 %** bæredygtighed, formidling, uddannelse og opbygning af fællesskab.

Disse procenttal er udelukkende vejledende og skal tilpasses finansieringsreglerne og konsortiets sammensætning.

## 11. Beskrivelse af bæredygtighed og udnyttelse

OMIs udnyttelsesmodel bør ikke være afhængig af en eksklusiv kontrol med manuskriptformatet. I stedet kan bæredygtighed opnås ved at kombinere:

- open source-kernesoftware og åbne specifikationer;
- institutionel implementering og fælles udvikling;
- finansierede forsknings- og innovationsprojekter;
- sponsorater og støtte fra lokalsamfundet;
- implementering, integration, hosting eller supporttjenester leveret af aktører i økosystemet;
- genanvendelige ressourcer til uddannelse og implementering;
- et voksende netværk af kompatible udgivelses- og forskningstjenester.

Det vigtigste anvendelige resultat er derfor et **åbent interoperabilitetslag og en referenceimplementering**, der reducerer integrations- og migrationsomkostningerne på tværs af det videnskabelige forlagsøkosystem.

## 12. Stillingsopslag vedrørende åben videnskab, immaterielle rettigheder og datahåndtering

Et forslag bør fastlægge disse punkter kontraktmæssigt, men OMIs foretrukne udgangspunkt er:

- open source-licenser til genanvendelig kernesoftware;
- åbent tilgængelige specifikationer for interoperabilitet;
- gennemsigtige regler for bidrag og ledelse;
- en klar adskillelse mellem åbne specifikationer og institutionsspecifik konfiguration;
- der er ikke noget krav om at offentliggøre fortrolige manuskripter eller data fra fagfællebedømmelsen;
- dataminimering og passende adgangskontrol i forbindelse med manuskript- og korrekturlæsningstjenester;
- muligheden for at eksportere og overføre videnskabeligt indhold;
- bevarelse af herkomstoplysninger, hvor arbejdsgangene kræver det.

For hvert finansieret projekt skal der angives præcise licenser, IP i baggrunden og forgrunden, roller som dataansvarlig samt konsortiets rettigheder.

## 13. Vejledende nøgletal

Afhængigt af opkaldet kan målbare indikatorer omfatte:

- antal institutionelle pilotprojekter;
- antal validerede arbejdsgange for tidsskrifter/forlag;
- antal understøttede udvekslings-/integrationsprofiler;
- troværdighed i begge retninger i forhold til definerede overensstemmelsestilfælde;
- reduktion af manuel genindtastning af metadata eller produktionstrin;
- forbedringer af overholdelsen af tilgængelighedskrav;
- antal understøttede grænsefladesprog;
- aktive eksterne bidragydere;
- integrationer eller implementeringer i senere faser;
- uddannelsesdeltagere og anvendelse af dokumentation;
- softwareudgivelser og åbne tekniske resultater;
- institutionelle forpligtelser efter projektets afslutning.

Der bør først fastsættes referenceværdier og målværdier for KPI’erne, når konsortiets pilotprojekter er afsluttet, og de forventede resultater af udbuddet er kendt.

## 14. Vejledning til oprettelse af et risikoregister

| Risiko | Retning for risikoreduktion |
| --- | --- |
| Anvendelsesområdet bliver for bredt | Definer en minimumsramme for interoperabilitet og gennemfør pilotprojekter med fokus på specifikke opkald |
| Forlagets arbejdsgange varierer betydeligt | Brug profiler/adaptere i stedet for at hardkode en enkelt arbejdsgang |
| Ældre formater mister deres semantiske betydning | Overensstemmelsestests, eksplicit fallback-adfærd og herkomst |
| Den institutionelle implementering går langsomt | Samarbejde om udformning med pilotpartnere og integration af eksisterende platforme |
| Vedligeholdelse af open source efter finansiering | Styring, diversificeret finansiering og institutionel fælles vedligeholdelse |
| Sikkerheds- og privatlivsproblemer i forbindelse med manuskripter | Trusselsmodellering, adgangskontrol, dataminimering og revisioner |
| Platformsspecifikke udgivelsesproblemer | Automatiseret CI/CD og arbejde med eksplicit signering og distribution |

## 15. En kort præsentation af konsortiet på ét afsnit

> Open Manuscript Initiativeen tilbyder et fungerende open source-grundlag, der gør det muligt at overføre videnskabelige manuskripter mellem forskellige systemer til udarbejdelse, peer review og udgivelse. I stedet for at udvikle endnu et isoleret redigerings- eller udgivelsesprogram fokuserer OMI på det interoperable videnskabelige objekt, der forbinder disse systemer. Et konsortium kan anvende de eksisterende specifikationer Open Manuscript Studio og OMI som demonstrationsmodel, udvide dem gennem forsknings- og integrationsarbejde og validere resultaterne i samarbejde med universiteter, biblioteker, tidsskrifter, forlag og forskningsinfrastrukturer. De deraf følgende åbne komponenter kan reducere formatkonvertering, duplikering af metadata og leverandørafhængighed, samtidig med at de styrker flersproget, tilgængelig og maskinlæselig videnskabelig kommunikation.

## 16. To-sætningsversion til kontakt med partnere

> Open Manuscript Initiative søger forsknings- og institutionspartnere til projekter vedrørende en interoperabel infrastruktur til videnskabelig forfattelse og udgivelse. OMI tilbyder allerede et open source-demonstrationsværktøj, der fungerer på tværs af platforme, samt arbejde med integration i udgivelsesprocesser, som kan danne det tekniske grundlag for pilotprojekter inden for åben videnskab, videnskabelig kommunikation, metadata, fagfællebedømmelse, flersproget udgivelse og bæredygtighed inden for forskningssoftware.

## 17. Oplysninger, der skal indhentes, inden et forslag indsendes

Inden et forslag tager denne pakke i brug, skal du kontrollere følgende:

1. det nøjagtige program, udbuddet og emnet;
2. ansøgerens og konsortiets berettigelse;
3. forventede resultater, omfang og obligatoriske aktiviteter;
4. TRL-krav eller modenhedskrav, hvis sådanne findes;
5. finansieringssats og model for støtteberettigede omkostninger;
6. krav til konsortiets sammensætning;
7. forpligtelser vedrørende åben videnskab og datahåndtering;
8. sikkerhed, etik og konsekvenser for personoplysninger;
9. Forpligtelser vedrørende immaterielle rettigheder og licenser;
10. indsendelsesfrist og bedømmelseskriterier;
11. OMI juridisk/økonomisk deltagerstruktur;
12. realistiske mandemåneder, forpligtelser i forbindelse med pilotprojekter og målbare mål.

## 18. Offentlige midler

- [Open Manuscript Initiative website](/)
- [Open Manuscript Studio](/studio)
- [Funding & Partnerships](/docs/governance/funding-and-partnerships)
- [Support OMI](/support/)
- [Implementation status](/docs/governance/studio-implementation-status)

---

**Dokumentstatus:** genanvendelig udgangspunktsmodel til udarbejdelse af ansøgninger om tilskud. Opdater denne pakke, efterhOMIen har nået nye milepæle inden for udgivelse, styring, implementering og institutionel anvendelse.
