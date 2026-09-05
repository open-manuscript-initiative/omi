---
id: studio-implementation-status
title: Open Manuscript Studio — Nuværende status for implementeringen
sidebar_label: Status for implementering af studiet
description: Aktuelt øjebliksbillede af implementeringen af referenceimplementeringen af »Open Manuscript Studio«.
keywords:
  - Open Manuscript Studio
  - implementation status
  - beta
  - Android
  - iOS
  - iPadOS
  - peer review
  - OJS
  - OMP
  - DOCX
  - indexes
  - desktop
  - multilingual
  - export
  - institutional administration
  - OIDC
  - storage
---

# Open Manuscript Studio — Nuværende status for implementeringen

## Øjebliksbillede

| Felt | Værdi |
|---|---|
| Status | **Beta** |
| Dato for øjebliksbillede | **5. september 2026** |
| Aktuel udgivelsesserie | `0.1.0-beta.3` |
| Referenceimplementering | Open Manuscript Studio |
| Kildekoderepositorium | `open-manuscript-initiative/open-manuscript-studio` |
| Webmål | Moderne browsere |
| Desktop-målplatforme | Windows x64, Linux x64, macOS Intel, macOS Apple Silicon |
| Mobilmål | Offentlig universel APK til Android; valideret native simulator-mål til iOS/iPadOS, hvor distribution via TestFlight/App Store afventer signering fra Apple Developer |
| Webimplementering | `studio.openmanuscript.org` |

Den aktuelle Studio-betaversion er **`0.1.0-beta.3`**. »Beta« betyder, at de primære arbejdsgange inden for redigering, import/eksport, autentificering, native-client samt OJS/OMP er implementeret, og at projektet er gået fra at opbygge grundstrukturen for funktionerne til nu at fokusere på interoperabilitet, regressionsafprøvning, gendannelse og forberedelse til udgivelse. Det betyder **ikke**, at alle valgfri integrations- eller distributionskanaler er klar til produktion.

Denne side beskriver **implementerede produktfunktioner**, ikke overensstemmelse med en specifikOMI. Den formelle modenhed af specifikationerne og dokumentation for overensstemmelse registreres separat i [OMI Implementation Status Matrix](./implementation-status-matrix.md).

## Statusordforråd

- **Operationel** — implementeret i den aktuelle Studio-udviklingsgren og tilgængelig, når de normale forudsætninger for kørsel er opfyldt.
- **Konfigurationsafhængigt** — implementeret, men kræver installationsspecifikke serveradgangskoder, registrering via OAuth/OIDC, e-mail-levering, en ekstern tjeneste, databasemigrering eller en forbindelse til et publiceringssystem.
- **Valideret native mål** — implementering og validering af CI/native-build findes, men offentlig distribution afhænger stadig af platformssignering/provisionering.
- **Grundlag** — der findes støtte til arkitektur, register, brugergrænseflade eller konfiguration, men den komplette tjeneste for slutbrugerne er endnu ikke erklæret driftsklar.

## Nuværende kapaciteter

| Område | Status | Nuværende implementering |
|---|---|---|
| Struktureret redigering af manuskripter | **Operationelt** | Semantiske afsnit, rich text, overskrifter, formatering i teksten, lister, noter, referencer, tabeller og håndtering af struktureret indhold. |
| Arbejdsområde til flere dokumenter på skrivebordet | **I drift** | Dokumentfaner i browser-stil gør det muligt at have flere manuskripter åbne på skrivebordet. Studio/Account-grænseflader i fuldskærm og en dokumentoversigt i Word-lignende stil, der kan slås til og fra, understøtter navigation i længere tekster, mens mobilversionen bevarer sin kompakte arbejdsstruktur. |
| Gendannelse af session/arbejdsområde | **I drift** | Både det indbyggede og web-baserede arbejdsområde kan gendanne den tidligere arbejdskontekst, herunder status for åbne dokumenter, mens eksplicitte funktioner til lukning af dokumenter giver brugeren mulighed for at forlade et manuskript uden at miste den omgivende applikationssession. |
| Kontrolelementer til rich-text-formatering | **I brug** | Kompakt inline-formatering er fortsat tilgængelig ved siden af det markerede område; den udvidede desktop-menu er fastgjort og tilpasset visningsområdet, mens inline-sproget vælges blandt de konfigurerede manuskriptsprog i stedet for fritekst. Automatisk flydende formatering kan deaktiveres i redigeringsindstillingerne. Kontrolelementer til markering på mobilen undgår konflikt med den indbyggede brugergrænseflade til tekstmarkering. |
| Struktureret søgning og udskiftning | **I drift** | Overlay til søgning/udskiftning, søgeområder og navigering i resultater med responsiv adgang, der deles mellem desktop- og mobilopstillinger. |
| Flersproget brugergrænseflade | **I drift** | 24 understøttede europæiske sprog til brugergrænsefladen med fælles sprogvalg. Sprogindstillingerne for brugergrænsefladen, manuskripter og metadata administreres i ét kompakt og responsivt indstillingsvindue. |
| Indstillinger for tidszoner | **I drift** | Standard IANA-tidszonevalg med aktuelle UTC-forskydninger og automatisk valg af systemtidszone som standard. |
| Flersproget hjælp | **I drift** | Integreret, lokaliseret hjælp, der dækker alle understøttede sprogversioner af Studio-brugergrænsefladen; Hjælpesiderne viser den aktuelle build-version. |
| Konti og autentificering | **I drift** | Serverbaseret registrering/login, logout og adgang via autentificeret API fungerer i web- og native-klienter. Den samme centrale konto kan bruges på tværs af Windows, Android, iOS/iPadOS og browserklienter. Native-klienter anvender bearer-session-transport, der er kompatibel med Tauri-applikationskilder. |
| Gendannelse af adgangskode | **Konfigurationsafhængigt** | Processen ved glemt adgangskode/nulstilling anvender engangs-nulstillingstokener med udløbsdato, der kun gemmes som hashkoder, generiske svar om kontoens eksistens samt tilbagekaldelse af alle sessioner efter en vellykket ændring af adgangskoden. Kræver, at serverens e-mail-levering fungerer. |
| Samlet login | **Afhænger af konfigurationen** | Google, Microsoft og konfigurerbare generiske/institutionelle OIDC-udbydere anvender autorisationskode + PKCE, validering af status/nonce, discovery/JWKS-validering og eksplicit kontobinding. Eksisterende konti bliver aldrig automatisk knyttet alene på baggrund af e-mailadressen. |
| Tilknyttede login-identiteter | **Driftsmæssige / konfigurationsafhængige udbydere** | Kontoindstillingerne viser adgangskode og tilknyttede ORCID/OIDC-identiteter, giver mulighed for at tilknytte eller fjerne tilknytningen til konfigurerede udbydere og forhindrer, at den sidste brugbare login-metode fjernes. |
| Konto-/profilgrænseflade | **I drift** | Redigering af personlige profiler, der er understøttet af en fælles server, er tilgængelig på både desktop- og mobilversioner, hvor kontoidentiteten er adskilt fra metadata om manuskriptbidragere og organisationsspecifikt medlemskab. |
| Institutionsprofiler | **Operationelt** | En Studio-konto kan indeholde flere institutionsmedlemskaber med én standardtilknytning. Fælles oplysninger om institutionsnavn ogROR adskilles fra medlemskabsspecifikke oplysninger om afdeling, stilling, institutionens e-mailadresse, tilknyttet identitet og rolle. |
| Institutionsadministratorroller | **Konfigurationsafhængigt** | Rollerne `MEMBER`, `ADMIN` og `OWNER` er serverautoritative. I institutionsinstallationer er der adgang via dedikeret administratorlogin samt rollebeskyttet medlemsadministration med beskyttelse af den sidste ejer. |
| Central administration af »OMI« | **Konfigurationsafhængigt** | Et separat centralt privilegieniveau for »`ADMIN`« / »`OWNER`« kan administrere institutioner, institutionsadministratorer, institutionsAPI-adgangskoder og administrationsrevisionshændelser uden at få adgang til manuskripter eller redaktionelt indhold. |
| Institutionsadministrator API | **Konfigurationsafhængigt** | Institutionsbundne maskinadgangskoder anvender visning af engangstokener i råform, hash-lagring, udløb/tilbagekaldelse og eksplicitte anvendelsesområder (`institution:read`, `members:read`, `members:write`, reserverede integrationsområder). Maskinadgangskoder kan ikke ændre ejerroller. |
| Identitetsmodel for bidragydere | **Operationel** | Bidragydere, roller, tilknytninger, identitetsbekræftelser og arbejdsgange for forfatterprofiler fremstilles adskilt fra kontoidentiteten. |
| ORCID-godkendelse | **Konfigurationsafhængig** | ORCID OAuth/OIDC-login- og sammenkædningsinfrastrukturen er implementeret. Adgangskodesæt til personlig og institutionel brug er adskilt, og det aktive Sandbox-/Produktionsmiljø vises i Studio-brugergrænsefladen. |
| Bærbare ORCID-bundne forfatterunderskrifter | **Konfigurationsafhængigt** | Der er implementeret serverfastlagte, uforanderlige revisionsøjebliksbilleder, ORCID forfatterbinding, WebAuthn signering, krypterede udsteder-nøgler til installation samt bærbare offline-verifikationsbeviser. |
| Dobbeltblind fagfællebedømmelse | **I drift** | Anonymisering af bedømmere, tildeling af bedømmelsesopgaver, bedømmeres arbejdsområde, kommentarer og opbevaring af bedømmelser. Adgangsrettighederne til bedømmelsessystemet er rollebaserede for at sikre princippet om mindst mulig adgang. |
| Dashboard til redaktionel gennemgang | **Operationelt** | Oversigts- og rollebaseret gennemgangsportal for redaktører til tildelte peer-review-opgaver. |
| Tovejs »OJS«-gennemgangs-writeback | **Konfigurationsafhængig / valideret** | Signeret gennemgangs-writeback returnerer indsendte gennemgangsdata til OJS. Gennemgangspersoners adgangsomfang er baseret på princippet om mindst mulig adgang, og den to-trins »OJS«-gennemgangsprotokol er dokumenteret og afprøvet i forbindelse med integrationslinjen OJS 3.5. |
| Native OJS-gennemgangsformularer | **Konfigurationsafhængig / valideret** | OJS-gennemgangsformulardefinitioner kan importeres til korrekturlæserens arbejdsområde, vises som Studio-kontrolelementer, lokaliseres sikkert og skrives tilbage til OJS sammen med den indsendte gennemgang. Serverhåndteringen holder udbyderens markering uigennemsigtig, og klientvisningen udtrækker teksten sikkert. |
| Eksterne/OJS-anmeldelsesopgaver | **Konfigurationsafhængigt** | OJS-tilsluttede arbejdsgange for forfattere, redaktører og anmeldere samt konteksten for eksterne opgaver implementeres, når integrationen med OJS er konfigureret. |
| OJS manuskriptåbning/import | **Afhænger af konfigurationen** | Signerede åbningsbekræftelser, hentning af manuskripter/filer og struktureret import af metadata og manuskriptindhold fra OJS. |
| OJS 3.5-interoperabilitet | **Valideret integrationslinje** | Kompatibiliteten mellem PKP/OJS3.5 er dokumenteret og afprøvet i native ende-til-ende-arbejdsgange for forfattere, redaktører og dobbeltanonyme korrekturlæsere, herunder tildelte filer, korrekturformularer, rettelser, adskilt feedback og underskrevet tilbageskrivning. Regressionstest på tværs af versioner er fortsat en løbende del af udviklingsarbejdet. |
| Lancering og gennemgang af manuskripter/undersøgelser på OMP | **Konfigurationsafhængig / valideret** | Underskrevne lanceringserklæringer knytter monografier og publikationer til Studio, mens bedømmernes adgang er begrænset til den tildelte undersøgelse. Arbejdsgange for forfattere, redaktører og dobbeltanonyme bedømmere omfatter tildelte filer, bedømmelsesskemaer, rettelser, adskilt feedback og underskrevet tilbagemelding. |
| OMP 3.5-interoperabilitet | **Valideret integrationslinje** | Det implementerbare OMP-plugin og Studio-integrationen testes fra start til slut i forhold til OMP 3.5. Omfattende regressionstest på tværs af versioner og produktionsforberedelse er fortsat en del af det løbende udgivelsesarbejde. |
| DOCX strukturel import | **Operationelt** | Overskrifter, indbygget semantik, arvelighed i lister, fodnoter/slutnoter, referencer, strukturerede tabeller og semantiske indeksfelter understøttes. Ved store importer anvendes udskudt redigeringsmontering, og importerede DOCX-filer åbnes direkte som OMI-manuskripter. |
| Dynamiske indekser og lister | **Operationelt** | Importerede Word-indeksfelter gengives semantisk i stedet for som forældet sidetalstekst. Indeksforekomster fører til bestemte steder i dokumentet; uafklarede forekomstkontroller undertrykkes. Import af navneindeks normaliserer grænserne mellem bogstaver og tal og filtrerer støj fra sidetal i arabiske tal, samtidig med at navnerelevante romertal bevares. |
| Lokal stavning | **I brug** | Den gemte lokale stavekontrol følger manuskriptets sprog gennem platformens/browserens stavekontrol. |
| Korrekturlæsning af grammatik og stil | **Konfigurationsafhængig** | Den avancerede kontrol, som brugeren kan vælge at aktivere, kan anvende LanguageTool-kompatible og konfigurerede AI-sprogtjenester. Fejl vises i manuskriptet, og forslagene skal udtrykkeligt anvendes af brugeren. |
| Oversættelsesudførelse | **Konfigurationsafhængig** | Struktureret DeepL-oversættelse fungerer på niveauet markering/blok/afsnit/manuskript, idet den bevarer den indbyggede semantik og udelukker citater, kode, ligninger og bibliografiske poster fra usikker udfladning. Sprogvarianter kan gemmes separat. |
| AI-integrationsagenter | **Konfigurationsafhængig** | Udbyderneutrale agenter til sprogredigering, metadataassistance, sammenfatning og kontrol af kildehenvisninger leverer forslag via afgrænset udførelse på serversiden. Ekstern overførsel af indhold, der er fortroligt i forbindelse med gennemgangen, kræver udtrykkelig tilladelse. |
| Integrationsrevision og udvidelsesregister | **Operationelt grundlag / konfigurationsafhængig udførelse** | Integrationsudførelsen registrerer driftsmetadata og -sammendrag uden at gemme den egentlige tekst eller fortrolige oplysninger. Udvidelsesmanifester understøtter versionskompatibilitet, tilladelser, funktioner og eksterne slutpunkter, der udelukkende bruger HTTPS. |
| Bærbar OMI-eksport | **I drift** | Bærbar `.omi.zip` og OMI JSON-uddata er tilgængelige som førsteklasses udvekslingsformater. |
| Eksport til videnskabelige formål/udgivelse | **Operationelt** | JATS XML, Semantic Offline HTML-pakke, DOCX, EPUB, PDF, IDML, XPress Tags, FrameMaker MIF, Scribus SLA og LaTeX er repræsenteret i det aktuelle eksportlag. Semantiske indeksfelter kan eksporteres tilbage til DOCX. |
| Eksport til flere platforme | **I drift** | Hosted Studio bruger browser-downloads; installerede Tauri-klienter bruger platformspecifikke dialogbokse til gemning og dokumenthåndtering samt binær skrivning til understøttede eksportmål. Mobilklienter tilbyder en platformstilpasset delmængde i stedet for udgivelsesmuligheder, der kun findes på desktop. |
| Forlagsprofiler | **Operationelt** | Håndteringen af forlagsprofiler, eksport- og udskriftsformater er adskilt fra manuskriptets semantik. |
| Enhedsbaseret lagringstilstand | **Fungerer på installerede klienter** | Studio gemmer en tillidsindstilling for »egen enhed« pr. bruger og pr. enhed. Egne enheder kan beholde deres normale, indbyggede arbejdsstier; nye eller delte enheder indstilles som standard til en begrænset tilstand, hvor lokale arbejdsstier ikke bevares. |
| Profilbaserede cloud-forbindelser | **Driftsmæssigt / udbyderafhængigt** | Direkte WebDAV/Nextcloud-loginoplysninger krypteres på serversiden og er begrænset til den bruger, der er logget ind, så profilbaserede cloud-forbindelser kan følge kontoen på tværs af enheder. Fremtidige cloud-forbindelser via OAuth anvender den samme profilbaserede model. |
| Bærbar lagring på delte enheder | **Fungerer på installerede klienter** | I tilstanden for delte enheder er det stadig muligt eksplicit at åbne eller gemme filer én gang på flytbare eller bærbare lagringssteder uden at gemme den valgte sti som den aktuelle arbejdsfil. |
| Lokalt synkroniserede mapper | **Fungerer på skrivebordet** | OneDrive, SharePoint, Google Drive, Dropbox, Nextcloud, iCloud Drive og andre mapper, der synkroniseres på skrivebordet, behandles som forbindelsesmetoder fra deres respektive udbyder. Studio gemmer bærbare OMI-filer lokalt, mens udbyderens klient står for godkendelse og synkronisering. |
| Android-integreret dokumentarbejdsgang | **Operationel betaversion** | Android bruger systemets »Documents / Storage Access Framework«-vælger til at åbne, gemme, gemme som, bærbar `.omi.zip` sikkerhedskopiering og understøttede eksportdestinationer i stedet for generelle tilladelser til delt lagerplads. Dokumentets livscyklus og adfærd ved lukning/genåbning er fortsat en del af den målrettede betaregressionstest. |
| Indbygget »Files«-arbejdsgang i iOS/iPadOS | **Valideret indbygget mål** | iPhone/iPad bruger Apple Files-/UIDocumentPicker-arbejdsgangen med sikkerhedsbegrænset adgang til dokumenter til åbning/gemning af OMI-filer og eksportdestinationer, der er relevante for mobilenheder. Offentlig distribution kræver stadig Apple-signering/provisionering og enhedsvalidering. |
| WebDAV / Nextcloud-direkte lagring | **Afhænger af konfigurationen** | Direkte WebDAV-/Nextcloud-forbindelser understøtter krypterede adgangskoder på serversiden, forbindelsestest samt upload, gendannelse og sletning af bærbare sikkerhedskopier. |
| Integrationskatalog | **I drift** | Udbyderregister, katalog-brugergrænseflade, statusklient, angivne godkendelsesmetoder og udførelsesflader er til stede. |
| Windows-skrivebordsprogram | **Funktionsdygtig betaversion** | Tauri 2-Windows-programmet, EXE/MSI-pakker, indbygget godkendelse, adgang til lokale filer og indbyggede gemmefunktioner er implementeret. |
| Pakning til Linux og macOS | **Operationelle build-mål** | Automatiseringen af udgivelser definerer målene Linux AppImage/DEB og macOS Intel/Apple Silicon DMG. Signering/notarisering af platformen er fortsat et separat arbejde i forbindelse med sikring af udgivelsen. |
| Android-app | **Funktionsdygtig betaversion** | En universel Android-APK genereres via den fælles Tauri 2-udgivelsesproces. Serverbaseret autentificering, håndtering af native OIDC/ORCID-returværdier, responsiv navigation, native håndtering af Documents/SAF-filer, eksportfunktion og branding med OMI er en del af den fælles klientløsning. |
| iOS-/iPadOS-applikation | **Valideret native mål** | Generering af Tauri iOS-projekt og opbygning af Apple Silicon iPhone/iPad-simulatoren lykkes i CI, herunder native integration med Files og fælles kode til mobilautentificering og -eksport. Offentlig distribution via TestFlight/App Store kræver stadig Apple Developer-signering, provisionering, tilknytning af Universal Links og validering på en fysisk enhed. |
| Opdateringsforløb for desktop | **I drift** | Forløbet for opdateringsmeddelelser og installationsprogrammet er implementeret i desktop-applikationen, og opdateringsfilerne genereres via udgivelseskonfigurationen. |
| Automatisering af udgivelser på tværs af platforme | **Operationelt** | GitHub Actions genererer artefakter til Windows, Linux, macOS og Android ud fra det delte kildetræ og kører en »smoke build« på en iOS/iPadOS-simulator. Der forberedes en manuel, signeret Apple-udgivelsesworkflow til App Store Connect, så snart Apple-adgangsoplysningerne er konfigureret. |
| Reproducerbarhed af afhængigheder i udgivelser | **I drift** | Afhængighedsdiagrammerne for JavaScript og Rust styres via en lockfile; CI anvender reproducerbare installationsstier, herunder `npm ci` til serveren. |
| App-branding | **Operationelt** | Branding fra OMI Studio og de genererede native ikonfiler anvendes i hele app-skallen og i udgivelsespakken, herunder Android og den genererede iOS/iPadOS-målplatform. |
| Sikkerhedsforstærkning | **Operationel baseline** | Server-side hastighedsbegrænsning, SSRF-begrænsninger, OIDC-validering af tilstand/nonce/PKCE og udsteder, begrænset opbevaring af hemmelige data, hashede reset-/Admin-API-tokens, integrations-/administrationsrevision, sikrere import/eksport-escaping samt automatiseret sikkerhedsscanning er integreret i den nuværende udviklingsgren. OJS Gengivelse af anmeldelsesformularer har yderligere sikkerhedsforstærkning i form af markup- og tekstisolering. |
| Windows-kodesignering | **Ansøgning indsendt / under behandling** | De offentlige retningslinjer for kodesignering og beskyttelse af personoplysninger er offentliggjort, og open source-applikationen SignPath Foundation er udarbejdet og indsendt. Windows-installationsprogrammer forbliver usignerede, indtil de er godkendt, og integrationen af produktionssignering er på plads. |

## Platformuafhængig arkitektur

Studio er baseret på en konkret arkitektur med fælles klienter i stedet for separate produktlinjer for web og native applikationer. React/TypeScript: Manuskriptmodellen i OMI, redigeringsfunktioner, godkendelsesprocesser, peer review, integrationer samt import-/eksportlogik er fælles. Tauri 2 leverer native pakke- og platformfunktioner til desktop- og mobilklienter.

Den responsive brugergrænseflade varierer bevidst alt efter enhedstype: På desktop-enheder kan der vises faner til flere dokumenter, en fast dokumentoversigt og redigering i flere paneler, mens mobilversionen anvender kompakt navigation, udtrækbare menuer, berøringsbaserede betjeningselementer og platformspecifikke filvælgere. Der er tale om en forskel i præsentationen, ikke om en separat manuskriptmodel.

iOS/iPadOS-målplatformen bruger den samme fælles mobilklient. Det Apple-specifikke arbejde begrænser sig til native pakning, dokumentadgang via Files/UIDocumentPicker, applikationsmetadata, signering/provisionering og tilknytning til Universal Links.

## Arkitektoniske afgrænsninger

### Ejerret til manuskripter med lokal prioritet

Den native applikation kan gemme manuskripter på et lager, som forfatteren selv vælger. Et manuskript behøver ikke at blive en del af serverens interne system blot fordi serverbaserede identitetsfunktioner, samarbejdsfunktioner eller integrationer er aktiveret.

Installerede Studio-klienter skelner mellem en betroet personlig enhed og en delt/fremmed enhed. På en egen enhed kan de normale arbejdsstier til lokal/systemlager bevares. På en delt enhed foretrækker Studio cloud-forbindelser, der er begrænset til profilen, og bevarer ikke den valgte lokale sti; engangsbrug af bærbart/aftageligt lager forbliver dog tilgængeligt.

### Serverbaseret identitet og tjenester

Konti, gendannelse af adgangskoder, tilknyttede identiteter, federeret login, samarbejde, peer review, direkte cloud-forbindelser, institutionsadministration og integrationer med publikationssystemer benytter Studio-APIen samt tjenester baseret på PostgreSQL. Autentificeringsidentiteten holdes adskilt fra den videnskabelige bidragyders identitet og fra medlemskabet af institutionen. Disse funktioner forudsætter, at implementeringen er korrekt konfigureret og migreret.

### Institutionens administrative afgrænsning

Institutionsmedlemskab (`MEMBER` / `ADMIN` / `OWNER`) og centraladministrationen under OMI (`ADMIN` / `OWNER`) udgør separate autorisationsniveauer. Ingen af delene giver i sig selv adgang til manuskripter, anmeldelser eller redaktionelt indhold. Adgangsoplysningerne til institutionens machine-API er knyttet til én bestemt institution og eksplicitte anvendelsesområder og kan ikke ændre ejerroller.

Se [Institutional and Central Administration](../integrations/institutional-administration.md).

### Eksterne integrationer

OMI adskiller manuskriptets semantik fra udbyderspecifik autentificering og transport. OJS, OMP, cloud-lagring, ORCID, OIDC-identitetsudbydere, oversættelsestjenester og AI-agenter forbinder sig derfor via integrationslag i stedet for at blive en del af den centrale dokumentmodel.

### Myndighed for udgivelsessystemer

For sammenkoblede arbejdsgange i OJS og OMP er det fortsat udgivelsessystemet, der er den afgørende kilde til oplysninger om status for indsendelsesprocessen, tildelinger, gennemgangsrunder og redaktionelle beslutninger. Studio fungerer som det strukturerede arbejdsområde til redigering og gennemgang og udveksler oplysninger via definerede applikationsendepunkter i stedet for direkte databasekobling.

De nuværende integrationer med OJS og OMP fungerer i begge retninger i forbindelse med korrekturarbejdet: Studio kan hente rollebaseret lanceringskontekst, tildelte filer og indbyggede definitioner af korrekturformularer, og kan via integrationsendepunktet returnere underskrevne korrekturindsendelser, rettelser og adskilt feedback fra forfatter og redaktør. OMP bevarer desuden tilknytningen mellem monografier, publikationer og undersøgelser og begrænser korrekturlæserne til den undersøgelse, de er tildelt. Dette overfører ikke arbejdsgangskompetencer fra OJS eller OMP til Studio.

## Udgivelse og distribution

`0.1.0-beta.3` er den aktuelle serie af Studio-betaversioner. GitHub Actions genererer udgivelsesfiler fra det delte kildetræ til Windows, Linux, macOS og Android. Den offentlige Studio-downloadside giver adgang via browseren og viser de tilgængelige native pakker, herunder den universelle APK til Android.

iOS/iPadOS har i øjeblikket en vellykket CI-simulatorversion i stedet for en offentlig IPA-fil. Apples distributionsvej er klar, men er bevidst adskilt fra simulatorvalideringen: Offentlige versioner og enhedsversioner kræver det rigtige Apple Development Team ID, distributionscertifikat, provisioning-profil og den endelige konfiguration af »`apple-app-site-association`«, før der kan ansøges om offentliggørelse via TestFlight/App Store.

Se [Open Manuscript Studio on iOS and iPadOS](../foundations/ios-ipados-studio.md).

## Fokus på betavalidering

Beta-fasen flytter fokus fra spørgsmålet »Er den primære arbejdsgang implementeret?« til »Fungerer den fortsat pålideligt på tværs af realistiske dokumenter, platforme, roller og fejlscenarier?«. De nuværende prioriteter for validering er:

1. oprettelse, åbning, redigering, gemning, eksplicit lukning, gendannelse af sessioner og genåbning af manuskripter uden tab af data;
2. DOCX-importfiler af stor størrelse og med kompleks struktur, herunder noter, tabeller, lister, felter og dynamiske indekser;
3. typiske strukturerede eksportveje på web- og native-klienter;
4. OJS og OMP – arbejdsgange for manuskripters hele forløb samt rollebaserede arbejdsgange for forfattere, redaktører og korrekturlæsere, herunder afgrænsning af tildelte filer, flertrins-korrekturlæsning, indbyggede korrekturformularer og underskrevne tilbagemeldinger;
5. dobbeltblind fagfællebedømmelse uden afsløring af identitet og med integrationsomfang baseret på princippet om mindst mulig adgang;
6. Android-dokumenter/SAF-livscyklusadfærd og responsiv mobilnavigation;
7. iOS/iPadOS Files/UIDocumentPicker-funktionalitet, når test på signerede fysiske enheder bliver tilgængelig;
8. institution/central administration uden, at fortrolige oplysninger slipper ud i manuskriptets indhold;
9. En brugervenlig genoprettelsesfunktion til fejl i forbindelse med netværk, autentificering, migrering, import/eksport og integration.

Konfigurationsafhængige integrationer behøver ikke at være tilgængelige for alle i betaversionen, forudsat at deres modenhed er tydeligt angivet, og at de ikke udgør en risiko for de stabile kernearbejdsgange.

## Resterende arbejde med at stabilisere betaversionen

- gennemføre grundige regressionstest af Windows og Android, især hvad angår den indbyggede funktionalitet vedrørende åbning, lukning, gemning og gendannelse af dokumenter;
- fortsætte med at gennemføre stresstest af store og strukturelt usædvanlige DOCX-manuskripter og forbedre den smidige gendannelse af ikke-understøttede Word-konstruktioner;
- gennemføre nulstilling af adgangskode, tilknytning/afknytning af OIDC samt adfærd ved sessioner på tværs af enheder i forhold til en produktionslignende e-mail-/udbyderkonfiguration;
- udføre migrations- og autorisationsregressionstests for institutionsmedlemskab, central administration og institutionsadministratorAPI-adgangskoder;
- fortsæt OJS 3.5: test med flere runder frem og tilbage, gennemgang af flere runder samt test af kompatibilitet på tværs af versioner;
- fortsæt OMP 3.5 kompatibilitet på tværs af versioner, implementering og styrkelse af genopretningsprocessen;
- styrke genopretningsprocedurerne i tilfælde af afbrydelser i netværks-, cloud- og synkroniseringsdriften;
- erstatte de resterende tekniske/rå fejlmeddelelser med konkrete brugerrettede meddelelser;
- at integrere Windows-produktionskodesignering, hvis/når SignPath Foundation-applikationen godkendes;
- fortsætte arbejdet med signering og notariseringsprocesser i macOS;
- konfigurere Apple Developer-signering/provisionering, tilknytning af Universal Links i produktionsmiljøet samt TestFlight/enhedsvalidering, inden der ansøges om offentlig distribution til iOS/iPadOS;
- fortsætte arbejdet med butiksorienterede Android-distributioner;
- udvikle overensstemmelsestestsæt, der direkte knytter implementeringsadfærd til de normative krav i »OMI«;
- fastlægge garantier for kompatibilitet på udgivelsesniveau for understøttede import-/eksportmål.

At en funktion er inkluderet i dette implementeringssnapshot, må ikke fortolkes som formel overensstemmelse med en OMI-specifikation, medmindre en tilsvarende overensstemmelsesklasse og dokumentation herfor offentliggøres separat.
