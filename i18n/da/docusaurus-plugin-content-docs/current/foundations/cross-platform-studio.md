---
title: Platformsuafhængig Studio-arkitektur
sidebar_label: Platformuafhængigt studie
---

# Platformsuafhængig Studio-arkitektur

Open Manuscript Studio er udviklet som et samlet akademisk forfattermiljø, der fungerer på tværs af web-, desktop- og mobilplatforme uden at opdele manuskriptmodellen eller implementeringen af arbejdsgangen.

Projektet vedligeholder ikke separate applikationer til hvert operativsystem. Studio benytter én fælles applikationskerne (React/TypeScript) og én fælles manuskriptmodel (OMI), mens tynde platformspecifikke lag sørger for native funktioner, hvor det er nødvendigt.

## Platformstatus

| Platform | Nuværende status | Leveringsretning |
|---|---|---|
| Web | **Driftsklar** | Hostet studie |
| Windows | **I drift** | Tauri 2 EXE/MSI |
| macOS | **Automatiseret build-mål** | DMG til Intel og Apple Silicon; sikkerhedsforanstaltningerne vedrørende signering/notarisering forbliver uændrede |
| Linux | **Automatiseret build-mål** | AppImage og DEB |
| Android | **Offentlig alfa-version i drift** | Universel APK fra den fælles udgivelsesproces; pakning til app-butikkerne følger senere |
| iOS / iPadOS | **Valideret native build-mål** | Kompilering til iPhone/iPad-simulatoren lykkes; distribution via TestFlight/App Store kræver signering via Apple Developer og endelig tilknytning til Universal Link |

Android er ikke længere blot et arkitektonisk eller udviklingsmæssigt mål. Der genereres en offentlig, universel APK ud fra den fælles Tauri 2-kodelinje, og den anvender samme logik for konti, dokumenter, gennemgang, integration og eksport som de øvrige klienter, med en mobiloptimeret, responsiv præsentation og Android-indbygget filhåndtering via Documents/Storage Access Framework.

iOS/iPadOS er også gået videre end ren arkitekturplanlægning. CI genererer nu Tauri/Xcode-projektet, kompilerer Apple Silicon-simulatorapplikationen til iPhone/iPad og uploader den resulterende simulatorfil. Den eneste tilbageværende Apple-specifikke begrænsning er distribution til fysiske enheder og offentligheden: ægte Apple Developer-signering, provisionering, tilknytning af Universal Links samt validering via TestFlight og App Store er stadig påkrævet, før en offentlig iOS-udgivelse kan frigives.

## En Studio-kerne

```text
                         OMI Studio Core
                                │
               ┌────────────────┼────────────────┐
               │                │                │
             Web UI         Desktop UI       Mobile UI
               │                │                │
            Browser           Tauri 2          Tauri 2
                                │                │
                      ┌─────────┼─────────┐   ┌──┴────┐
                    Windows    macOS    Linux Android iOS/iPadOS
```

Den fælles kerne omfatter, hvor det er teknisk muligt:

- modellen for det videnskabelige manuskript »OMI«;
- struktureret redigering og Tiptap-baseret dokumentadfærd;
- metadata, bidragyder, kildehenvisning, annotering og versionsstyring;
- flersproget brugergrænseflade og redigeringsfunktioner;
- godkendelse, gendannelse af adgangskode og arbejdsgange vedrørende sammenkoblede identiteter;
- adfærd i forbindelse med dobbeltblind fagfællebedømmelse;
- OJS og integrationsarbejdsgange for OMP;
- kunder inden for institutionsmedlemskab og administration;
- logik vedrørende import, eksport og publikationsprofiler;
- regler for validering, integration og lagring.

En funktion, der er implementeret i den fælles kerne, bør derfor være tilgængelig på alle understøttede platforme, medmindre operativsystemet eller formfaktoren kræver en anden præsentation eller en indbygget implementering.

## Platformadapterlag

Indbyggede operativsystemtjenester er isoleret bag platformadaptere i stedet for at være integreret i selve redigeringsprogrammet eller den videnskabelige model. Aktuelle eksempler omfatter indbygget valg af mapper/filer, indbyggede gem-dialogbokse, adgang til Android Documents/SAF, adgang til Apple Files/UIDocumentPicker, skrivning til filsystemet, vedvarende eller sikkerhedsbegrænset filsystemadgang tildelt af brugeren, opførsel ved opdatering af skrivebordet samt overdragelse til indbygget ekstern autentificering.

Indbygget autentificering anvender den transportform, der passer til applikationernes oprindelse. Tauri-klienter kan benytte »bearer-session«-transport og dele engangs-overførselsforløb for ekstern autentificering til ORCID og konfigurerede OIDC-udbydere i stedet for udelukkende at basere sig på browser-cookies.

## Grænseflader til stationære computere og mobilenheder

At være platformsuafhængig betyder ikke, at man skal påtvinge alle enheder det samme skærmlayout.

Desktop Studio understøtter nu faneblade til flere dokumenter i browser-stil, Studio-/Konto-grænseflader i fuld skærm samt en dokumentoversigt i stil med Word, der kan slås til og fra ved siden af redigeringsværktøjet. Mobile Studio anvender den samme logik for manuskripter og redigering, men præsenterer den via berøringsbaseret navigation, kompakte kontrolelementer, udtrækkelige paneler og responsive paneler. Tabletter kan gradvist genindføre redigering med flere paneler, hvor skærmstørrelsen tillader det.

Det nuværende mobilarbejde omfatter responsiv navigation, visning af dokumenter og detaljer, adgang til konto/profil, indtastningsfelter, søgning, skift af sprog, logout, håndtering af returnering fra app-browseren ved brug af ORCID/OIDC, åbning og gemning via den indbyggede filhåndtering, eksport via den indbyggede eksportfunktion samt ensartet branding på OMI Studio. Android bruger Documents/SAF; iPhone/iPad bruger Files/UIDocumentPicker. Dette er præsentations- og platformspecifikke forhold; de kræver ikke separate Android- eller Apple-manuskriptmodeller.

## Overførbarhed med fokus på det lokale og tillid til enheder

Den platformsuafhængige model understreger et af de centrale principper i »OMI«: Manuskriptet bør ikke være afhængigt af en bestemt programinstallation, en bestemt cloududbyder eller et bestemt operativsystem.

Et dokument, der er oprettet i Windows, bør kunne bruges på Linux, macOS, Android, iOS/iPadOS eller i browseren uden at skulle konverteres til en platformspecifik dokumentmodel. De bærbare `.omi.zip` og OMI JSON-formularer angiver eksplicitte udvekslingsmål, mens servertjenester kun anvendes, hvor identitet, samarbejde, publiceringsarbejdsgange eller direkte integrationer kræver det.

Installerede klienter indfører nu en sondring mellem lokal tillid og enhedsspecifik tillid.

### Egen enhed

Når den loggede bruger markerer en installeret enhed som sin egen, kan Studio bevare de normale, indbyggede placeringer for arbejdsfiler. Desktop-mål kan bruge lokale mapper, monteret/netværkslager og mapper, der synkroniseres af udbyderens desktop-klienter. Android kan bruge systemvalgte Documents/SAF-destinationer, mens iPhone/iPad kan bruge systemvalgte Files/UIDocumentPicker-placeringer, herunder iCloud Drive og tilgængelige tredjepartsdokumentudbydere.

### Delt eller ekstern enhed

Nyligt fundne enheder indstilles som standard til tilstanden »delt/fremmed enhed«. I denne tilstand gemmer Studio ikke den valgte lokale sti til arbejdsfilen. Den normale, permanente arbejdsgang foretrækker cloud-forbindelser, der hører til den profil, man er logget ind med.

Brugeren kan stadig eksplicit åbne eller gemme en fil på et flytbart/bærbart lagringsmedie eller et andet dokumentlager, som systemet stiller til rådighed, men placeringen behandles som en engangsdestination og gemmes ikke som den aktuelle arbejdsfil.

Dette undgår, at man giver indtryk af, at genkendelsen af bærbare, udskiftelige drev er identisk på tværs af alle operativsystemer, samtidig med at den vigtige sikkerhedsegenskab bevares: Lokale stier til delte enheder gemmes ikke.

## Udbyderspecifikke synkroniserede mapper

Desktop Studio betragter en lokalt synkroniseret mappe som en forbindelsesmetode for den egentlige udbyder og ikke som en generisk pseudo-udbyder.

For OneDrive, SharePoint, Google Drive, Dropbox, Nextcloud, iCloud Drive og lignende udbydere af synkroniseringstjenester til skrivebordet:

- udbyderens egen klient står for autentificering og synkronisering;
- Studio modtager aldrig udbyderens adgangskode eller »OAuth«-token i denne tilstand;
- brugeren vælger en udbydersynkroniseret mappe via den indbyggede dialogboks;
- stien forbliver enhedsspecifik og er isoleret efter den loggede bruger, udbyder eller kontotype;
- et af brugeren tildelt filsystemomfang kan forblive på den egne enhed;
- Studio gemmer filer i formatet »OMI«, mens udbyderens klient står for netværkssynkroniseringen.

Direkte WebDAV/Nextcloud-forbindelser fungerer fortsat som en separat serverintegration, der er begrænset til den enkelte profil, med krypterede adgangsoplysninger.

## Android-integreret filhåndtering

Android benytter systemets »Documents / Storage Access Framework«-grænseflade i stedet for generelle tilladelser til delt lagerplads.

Den nuværende Android-arbejdsgang understøtter:

- åbning af et eksisterende dokument fra OMI via systemvælgeren;
- Gem i det aktuelt valgte dokument;
- Gem på en anden placering;
- bærbar `.omi.zip` backup;
- Android-relevante eksportformater, herunder OMI JSON/package, JATS XML, HTML package, DOCX, LaTeX og EPUB.

Rå »`content://`«-identifikatorer er implementeringsdetaljer og vises ikke for brugeren som almindelige filsystemstier.

## Indbygget filhåndtering i iOS/iPadOS

iPhone og iPad bruger Apple Files / UIDocumentPicker-grænsefladen i stedet for bred adgang til filsystemet. Åbningshandlinger anmoder om dokumentadgang inden for sikkerhedsområdet, og Tauri-filsystemlaget læser/skriver den URL, som brugeren har valgt (`file://`).

Afhængigt af de installerede udbydere og enhedens konfiguration kan vælgeren vise:

- På min iPhone / På min iPad;
- iCloud Drive;
- tilsluttet ekstern lagerenhed, der understøttes af iOS/iPadOS;
- filer fra tredjepartsudbydere, der stilles til rådighed af installerede cloud-lagringsapplikationer.

iOS/iPadOS-klienten bruger det samme sæt eksportfunktioner til mobilenheder som Android: OMIpackage/JSON, JATSXML, HTMLpackage, DOCX, LaTeX og EPUB. De desktop-orienterede valgmuligheder IDML, XTG, MIF, SLA samt browserudskrivning/PDF er skjult i stedet for at blive vist som ikke-fungerende mobilhandlinger.

For oplysninger om Apple-specifikke build-, signerings- og Universal Link-funktioner henvises til [Open Manuscript Studio on iOS and iPadOS](./ios-ipados-studio.md).

## Platformsuafhængig kontoidentitet

Den samme Studio-konto er udviklet til at fungere på tværs af browsere, desktop- og mobilklienter. De nuværende funktioner til delt identitet omfatter:

- adgangskode til registrering/login/logout;
- engangs-procedure til nulstilling af adgangskode med udløbsdato;
- ORCID login/tilknytning;
- Google, Microsoft og konfigurerbar institutionel OpenID Connect;
- styring af tilknyttede log-in-metoder med beskyttelse mod spærring;
- personlige profiloplysninger adskilt fra institutionsspecifikke medlemskaber;
- Adgangsrettigheder til institutionen og den centrale administration holdes adskilt fra adgangsrettigheder til manuskripter.

Eksterne udbyderidentiteter knyttes sammen på baggrund af en stabil udsteder-/subjektidentitet frem for et visningsnavn, og eksisterende konti sammenlægges ikke automatisk alene på grundlag af en e-mail-match.

Mobilklienter anvender en engangs-autentificering via den indbyggede funktion. Den foretrukne HTTPS-applikationsside er hostet på `app.openmanuscript.org`, mens det brugerdefinerede skema `openmanuscript://` bevares som reserve. På iOS/iPadOS kræver den produktionsbaserede HTTPS-side desuden, at der er oprettet en Apple Universal Link-tilknytning til det rigtige Apple Development Team ID.

## Levering af eksportfiler på tværs af platforme

Eksportlaget adskiller **formatgenerering** fra **fillevering**.

Hosted Studio benytter almindelige browser-downloads. Installerede desktop-klienter bruger platformens egne gemme-dialogbokse og skriver direkte til filsystemet. Android bruger destinationer i mappen »Documents/SAF«, mens iOS/iPadOS bruger destinationer i mappen »Files/UIDocumentPicker«. Begge mobile platforme begrænser bevidst den synlige eksportliste til formater, der er relevante på den pågældende platform.

Dette sikrer, at der kun er én eksportimplementering til de videnskabelige formater, samtidig med at hver platform kan anvende en passende mekanisme til filoverførsel.

## Tjenester til delte konti og arbejdsgange

Web- og native-klienter anvender den samme Studio-tjenestegrænse til kontoidentitet, institutionsmedlemskab, fagfællebedømmelse og eksterne integrationer. Arkitekturen adskiller fire områder:

1. **videnskabelig status** — manuskript, metadata, bidragydere, kommentarer og indholdet af fagfællebedømmelsen;
2. **tjenesteidentitet/tilstand** — konti, sessioner og serverbaserede samarbejdsdata;
3. **organisationsmyndighed** — medlemskab af institutioner og central administration;
4. **platformfunktioner** — indbygget filadgang, pakning, opdateringsadfærd og integration med mobil- og desktop-shell.

Denne adskillelse er vigtig for overførbarheden: Skifter man fra en browser til Windows, Android eller iPad, ændres hverken manuskriptet eller peer-review-proceduren, og det at blive institutionsadministrator giver ikke automatisk adgang til videnskabeligt indhold.

## Flersprogede og regionale indstillinger

Den fælles klient understøtter i øjeblikket 24 europæiske sprog til brugergrænsefladen. Indstillingerne for sprog til brugergrænsefladen, manuskriptet og metadata administreres samlet i et kompakt og responsivt indstillingsvindue. Tidszoner bruger standard-IANA-identifikatorer med UTC-forskydninger og automatisk registrering af systemtidszone i stedet for fritekstværdier, så kontoindstillingerne forbliver overførbare på tværs af operativsystemer.

## Retning for mobil arbejdsgang

Mobilklienterne er beregnet til at understøtte aktivt videnskabeligt arbejde frem for passiv læsning. De fælles mål omfatter konto-login og adgang til manuskripter, struktureret redigering, navigering i dokumenter og redigering af metadata, roller som forfatter, redaktør og bedømmer, dobbeltblind peer review, adgang til arbejdsgange i udgivelsessystemet, import og eksport af dokumenter i deres oprindelige format samt sikre platformfunktioner.

Fremtidige indbyggede funktioner kan omfatte mere omfattende offline-drift, mere avancerede arbejdsgange for deling og åbning med andre programmer, biometri og push-meddelelser, uden at disse elementer indgår i dokumentmodellen »OMI«.

## Release-udvikling

Automatiseret release-proces genererer artefakter til Windows, Linux, macOS og Android fra det fælles repository. For iOS/iPadOS findes der nu en PR-udløst simulator-smoke-build, der genererer Xcode-projektet, kompilerer Apple Silicon-simulatorapplikationen og gemmer app-artefakten. Der er forberedt en separat manuel Apple-udgivelsesworkflow til signering af enheder og App Store Connect-pakker, så snart Apple Developer-adgangsoplysningerne er angivet.

Reproducerbarheden styrkes ved hjælp af en »JavaScript«, der styres af lockfiler, samt afhængighedsdiagrammer for Rust/Tauri og CI-installationsstier, der forhindrer afvigelser i lockfilerne.

Distributionsmodellen adskiller oprettelsen af artefakter fra tillidsinfrastrukturen. Kodesignering i Windows, signering/notarisering i macOS samt signering i Apple og Googles mobilbutikker er sikkerhedsforanstaltninger i forbindelse med udgivelsen, der er indbygget oven på den fælles applikationskompilering.

## Hvorfor dette er vigtigt for videnskabelig publicering

Understøttelse på tværs af platforme er ikke blot en fordel i forbindelse med implementering. Forfattere, korrekturlæsere, redaktører, forlag og institutioner bør kunne deltage i den samme videnskabelige arbejdsgang fra forskellige enheder uden at skabe inkompatible kopier af værket. Struktur, kommentarer, henvisninger, korrekturstatus, metadata og publikationssemantik bør forblive uændrede, når brugeren skifter operativsystem, lagringsudbyder eller enhedstype.

I denne arkitektur er **det videnskabelige manuskript bevidst udformet, så det er bærbart, og applikationen følger manuskriptet i stedet for at binde manuskriptet til applikationen.**

## Status for implementering

Web- og Windows-udgivelser er operationelle dele af Studio, Android er et offentligt alfa-mål, Linux/macOS er automatiserede native build-mål, og iOS/iPadOS er nu et valideret native simulator-build-mål på den samme Tauri 2-arkitektur. Den fælles klient omfatter arbejdet med flere dokumenter på skrivebordet, enhedsbevidst native lagring, håndtering af Android Documents/SAF, håndtering af Apple Files/UIDocumentPicker, kontoidentitet på tværs af enheder og fødereret autentificering ud over browser-workflowet. Offentlig distribution til iOS/iPadOS er fortsat afhængig af Apple Developer-signering, provisionering, tilknytning til Universal Links samt validering via TestFlight og App Store.

For aktuelle oplysninger om implementeringen henvises til [Studio Implementation Status](../governance/studio-implementation-status.md), [Open Manuscript Studio on iOS and iPadOS](./ios-ipados-studio.md), [Integration Implementation Status](../integrations/implementation-status.md) og [Institutional and Central Administration](../integrations/institutional-administration.md).
