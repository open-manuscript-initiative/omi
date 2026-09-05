---
title: Open Manuscript Studio på iOS og iPadOS
sidebar_label: iOS og iPadOS Studio
description: Arkitektur, filhåndtering, godkendelse, validering af build og distributionsstatus for Open Manuscript Studio på iPhone og iPad.
keywords:
  - Open Manuscript Studio
  - iOS
  - iPadOS
  - iPhone
  - iPad
  - Tauri
  - Files
  - UIDocumentPicker
  - Universal Links
  - TestFlight
  - App Store
---

# Open Manuscript Studio på iOS og iPadOS

Open Manuscript Studio bruger den samme applikationskerne fra React/TypeScript, manuskriptmodellen fra OMI og den indbyggede Tauri 2-shell-arkitektur på iPhone og iPad som på de øvrige understøttede platforme. iOS/iPadOS-versionen er derfor ikke en separat produktgren og indfører ikke et Apple-specifikt manuskriptformat.

## Nuværende status

iOS/iPadOS-målet er gået fra at være en ren arkitekturplan til at være et **valideret native build-mål**.

Nuværende udviklingsstatus:

- Genereringen af Tauri-iOS-projektet lykkes i CI;
- Applikationen kompileres uden problemer til Apple Silicon-simulatoren til iPhone/iPad;
- En simulatorapplikationsartefakt genereres af handlinger i GitHub;
- iPhone- og iPad-retninger samt metadata for multitasking på iPad er konfigureret;
- Åbning og gemning af native filer/dokumentvælger er implementeret;
- Overførslen af mobil-native autentificering deles med Android;
- Offentlig distribution via TestFlight/App Store er **endnu ikke aktiveret**, da Apple Developer-signeringsoplysningerne og den endelige tilknytning af Universal Link stadig skal konfigureres.

Den nuværende offentlige Studio-udgivelsesserie er fortsat `0.1.0-alpha.4`. Metadataene for iOS App Store-pakken anvender et Apple-kompatibelt par bestående af kort version og build, samtidig med at Studio-udgivelsesidentiteten bevares i applikationens brugergrænseflade og projektdokumentationen.

## Applikationsidentitet

| Felt | Aktuel værdi |
|---|---|
| Bundle-identifikator | `org.openmanuscript.studio` |
| Minimumskrav til platform | iOS/iPadOS 14.0 |
| Kort version i App Store | `0.1.0` |
| App Store-buildnummer | `4` |
| Studio-udviklingsserie | `0.1.0-alpha.4` |

Apples korte version/build-nummerering er metadata om pakken. Det ændrer ikke versionen af skemaet »OMI« og opretter heller ikke en separat linje for iOS-dokumentkompatibilitet.

## Brugergrænseflade til iPhone og iPad

Den fælles, responsive Studio-brugergrænseflade anvendes på begge enheder, hvor der foretages tilpasninger til platformen og formfaktoren i stedet for at implementere en separat editor.

iOS/iPadOS-målplatformen understøtter:

- brug i stående og liggende format på iPhone;
- den fulde understøttede orientering, der er indstillet på iPad;
- Metadata for layout, der understøtter multitasking på iPad;
- indirekte indtastning, f.eks. brug af eksternt tastatur og trackpad/pegeenhed, hvor dette understøttes af iPadOS;
- den samme kompakte mobilnavigationsmodel, som den delte Studio-klient bruger;
- gradvis udnyttelse af større plads på tabletten uden at ændre manuskriptets betydning.

Det langsigtede mål er, at iPad skal kunne udnytte flere af de arbejdsgange med flere paneler, som man kender fra en stationær computer, når skærmstørrelsen tillader det, samtidig med at man bevarer de betjeningsmuligheder, der er tilpasset touch-skærmen.

## Integration af filer og dokumentudbydere

Studio bruger Apples **Files / UIDocumentPicker**-model i stedet for at anmode om bred adgang til filsystemet.

Afhængigt af enhedens konfiguration kan systemvælgeren vise destinationer som f.eks.:

- På min iPhone / På min iPad;
- iCloud Drive;
- tilsluttet ekstern lagerenhed, der understøttes af iOS/iPadOS;
- Tredjepartsfiludbydere, der er installeret af brugeren, f.eks. understøttede cloud-lagringsapplikationer.

Den nuværende implementering åbner brugervalgte dokumenter med adgang inden for sikkerhedsområdet og læser/skriver den valgte dokument-URL `file://` via Tauri-filsystemlaget. Operativsystemet har fortsat ansvaret for at vise tilgængelige dokumentudbydere og håndhæve deres adgangsbegrænsninger.

Studio behandler ikke udbyderinterne dokument-URL’er som almindelige filsystemstier i brugergrænsefladen.

### Tilstand med egen enhed

Når brugeren markerer den installerede klient som sin egen enhed, kan den valgte lokale dokumentplacering fungere som det aktuelle arbejdsdokument for sessionen/arbejdsgangen.

### Tilstand for delt eller ekstern enhed

Den samme politik for enhedstillid, der anvendes andre steder i Studio, gælder her: Delte/eksterne enheder bør foretrække cloud-lagring på profilniveau til normalt, vedvarende arbejde. Det er stadig muligt at åbne og gemme dokumenter én gang uden at gemme den valgte sti som den normale arbejdsplacering.

## Mobil eksportflade

iOS/iPadOS-klienten bruger den samme mobilorienterede eksportgrænseflade som Android. De formater, der i øjeblikket er beregnet til visning på mobilen, er:

- bærbar OMI-pakke (`.omi.zip`);
- OMI JSON (`.omi.json`);
- JATS XML (`.xml`);
- pakken »semanticHTML« (`.html.zip`);
- DOCX (`.docx`);
- LaTeX (`.tex`);
- EPUB (`.epub`).

Arbejdsgange til udgivelse og eksport, der er beregnet til desktop-computere, er skjult på iPhone og iPad i stedet for at blive vist som valgmuligheder, der ikke kan benyttes:

- IDML;
- XPress Tags (XTG);
- FrameMaker MIF;
- Scribus SLA;
- Arbejdsgang med udskrivning fra browseren/PDF.

Eksportørimplementeringerne er fortsat fælles; det er kun den indbyggede præsentationsflade og det platformstilpassede sæt af synlige formater, der adskiller sig.

## Autentificering og indbygget håndtering af returneringer

iOS/iPadOS-appen bruger den samme serverbaserede Studio-konto som browser-, desktop- og Android-klienterne.

Den understøttede arkitektur for fælles godkendelse omfatter:

- login med e-mail og adgangskode;
- Gendannelse af adgangskode via Studio-API;
- ORCID login og sammenkædning;
- Log ind med Google;
- Microsoft-login;
- konfigurerbare institutionelle OpenID Connect-udbydere.

Ekstern godkendelse på mobilen bruger den indbyggede proces til engangs-handoff. Den foretrukne returadresse for applikationen er:

```text
https://app.openmanuscript.org/auth/orcid/
```

med fallback-løsningen »custom-scheme«:

```text
openmanuscript://auth/
```

Overførslen indeholder en engangsautentifikationskode i stedet for en adgangskode til en konto eller et udbydertoken, der kan genbruges.

## Universal Links og samarbejdet med Apple

Aktivering af Universal Link i Production kræver en Apple App Site Association-fil, som findes på:

```text
https://app.openmanuscript.org/.well-known/apple-app-site-association
```

Forbindelsen skal indeholde det **rigtige Apple Development Team ID** sammen med bundtidentifikatoren `org.openmanuscript.studio` og den tilladte godkendelsessti.

Projektet undlader bevidst at gætte på eller angive et midlertidigt produktions-team-ID. Den endelige AASA-fil bør først offentliggøres, når den egentlige Apple Developer-identitet foreligger.

Dette er en grænse mellem distribution og konfiguration, ikke en ændring af Studio-godkendelsessemantikken.

## Validering af build

Repositoriet indeholder en »smoke«-workflow til iOS-simulatoren, der kører på macOS. Formålet er at kontrollere, at iOS-understøttelse fortsat er et reelt kompilerbart mål og ikke blot en påstand om en ikke-testet konfiguration.

Røgsekvensen udfører følgende rækkefølge:

1. installerer de låste frontend-afhængigheder;
2. installerer/konfigurerer Rust iOS-simulatormålet;
3. sikrer, at den nødvendige Apple/CocoaPods-værktøjskæde er tilgængelig;
4. genererer Tauri-projektet til iOS/Xcode samt native ikoner;
5. kompilerer Apple Silicon-simulatorprogrammet;
6. overfører den genererede simulatorapplikation som en CI-artefakt.

Den første »smoke build« af iPhone/iPad-simulatoren blev gennemført med succes som led i arbejdet med implementeringen af iOS.

## Versioner til enheder og App Store

En simulatorversion kræver ikke adgangsoplysninger til distribution via App Store. En version til en rigtig enhed, TestFlight eller App Store kræver det derimod.

Udgivelsesworkflowet er indstillet til at anvende disse hemmeligheder fra GitHub:

```text
APPLE_DEVELOPMENT_TEAM
IOS_CERTIFICATE
IOS_CERTIFICATE_PASSWORD
IOS_MOBILE_PROVISION
```

Der må ikke lagres nogen signeringscertifikater, certifikatadgangskoder eller provisioning-profiler i repositoryet.

Når konfigurationen af Apple Developer er afsluttet, er den planlagte udgivelsesrækkefølge følgende:

1. konfigurere det faktiske Team-ID samt data om applikationsfunktioner og tilknytninger;
2. installere distributionscertifikatet og provisioning-profilen på en sikker måde i CI;
3. kompilere/arkivere den signerede iOS-applikation på macOS;
4. eksportere en IPA-fil, der er egnet til App Store Connect;
5. Upload først til TestFlight med henblik på regressionstest af enheder og arbejdsgange;
6. Udgiv først via App Store, når kriterierne for beta- eller udgivelsesversionen er opfyldt.

## Hvad der mangler, før iOS kan udgives offentligt

Kerneapplikationens mål er nu valideret, men offentlig distribution via Apple kræver stadig:

- gyldige loginoplysninger til Apple Developer Program;
- endelig team-ID og konfiguration af ressourcer;
- produktions`apple-app-site-association` publikation for `app.openmanuscript.org`;
- test af build på fysiske enheder på repræsentativ iPhone- og iPad-hardware;
- Regressionstest i TestFlight af login, retur via Universal Link, adgang til filer, gemme/genåbne, eksport og adfærd ved brug af eksterne udbydere;
- Metadata til App Store, privatlivserklæringer og forberedelse til udgivelsesgennemgang.

Disse krav bør ikke betegnes som manglende Studio-arkitektur. De udgør det resterende Apple-tillids-/distributionslag omkring en allerede kompilerbar delt klient.

## Forholdet til modellen »OMI«

Understøttelsen af iOS/iPadOS ændrer ikke dokumentkontrakten »OMI«. Et manuskript, der oprettes på en iPhone eller iPad, skal fortsat kunne overføres til web-, Windows-, Linux-, macOS- og Android-klienter ved hjælp af den samme »OMI«-model og de understøttede udvekslingsformater.

For en mere detaljeret beskrivelse af arkitekturen, se [Cross-platform Studio Architecture](./cross-platform-studio.md). For det aktuelle produktoversigt, se [Studio Implementation Status](../governance/studio-implementation-status.md).
