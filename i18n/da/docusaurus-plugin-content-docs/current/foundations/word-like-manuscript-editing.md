---
id: word-like-manuscript-editing
title: Redigering af manuskripter i stil med Word
sidebar_label: Redigering af manuskripter i stil med Word
sidebar_position: 5
description: Redigering af afsnit på tværs af hele manuskriptet, markering, håndtering af indtastning fra mobilen og strukturelle invariabler i »Open Manuscript Studio«.
keywords:
  - Open Manuscript Studio
  - manuscript editing
  - paragraph merge
  - paragraph split
  - selection
  - Ctrl+A
  - mobile editing
  - OMI structure
---

# Redigering af manuskripter i stil med Word

Open Manuscript Studio bevæger sig i retning af den interaktionsmodel, man forventer af et traditionelt tekstbehandlingsprogram, samtidig med at den underliggende, eksplicitte OMI dokumentstruktur bevares. Den centrale regel er enkel: **brugeren redigerer ét sammenhængende manuskript; OMI afsnit- og blokgrænser må ikke udgøre kunstige redigeringsbarrierer**.

Dette betyder ikke, at manuskriptet omdannes til ustruktureret rich text. Redigeringshandlinger oversættes til eksplicitte strukturelle ændringer i OMI, så semantiske afsnit, blokke, noter, citater, krydshenvisninger, versionshistorik og faste identiteter forbliver tilgængelige efter en handling.

## Redigeringsrækkefølge for hele manuskriptet

Studio opretholder nu én standardredigerings- og læserækkefølge på tværs af manuskriptblokke på øverste niveau. Afsnitsgrænserne udgør fortsat en meningsfuld dokumentstruktur, men almindelig redigering af afsnit kan krydse disse grænser.

Det fælles redigeringsrækkefølgelag anvendes af strukturelle kommandoer i stedet for at basere sig på DOM eller på en lokal Tiptap-editorinstans som den kanoniske manuskriptmodel. Tomme afsnit skaber derfor ikke kunstige afbrydelser, mens semantiske objekter såsom figurer, tabeller, overskrifter og andre blokke, der ikke er afsnit, forbliver eksplicitte afgrænsninger.

## Opdeling og sammenlægning af afsnit

For afsnit er de traditionelle redigeringsknapper tilknyttet følgende strukturelle handlinger i »OMI«:

- **Enter** opdeler det aktuelle afsnit i to OMI afsnit ved markøren;
- Hvis man trykker på **Backspace** i starten af et afsnit, slås det sammen med det umiddelbart forudgående afsnit, når det er strukturelt muligt;
- **Slet** i slutningen af et afsnit fletter det efterfølgende afsnit sammen med det aktuelle, hvis det er strukturelt korrekt;
- Sammenlægning af afsnit kan krydse OMI afsnitgrænser uden at slette selve afsnitobjektet;
- `Shift+Enter` er stadig et indbygget linjeskift og ikke en strukturel opdeling.

Rich Tiptap-indhold bevares under operationen. Noter, henvisninger, henvisningsgrupper, kilder til krydshenvisninger og forankrede objekter overføres efter behov til den bevarede eller nyoprettede blok. Strukturelle redigeringer registreres ligeledes via det eksisterende versions-/kontrolpunktsystem.

## Fysiske tastaturer og IME’er til mobiltelefoner

Tastaturer til stationære computere og virtuelle tastaturer på mobile enheder genererer ikke altid de samme browserhændelser. Indtastningsmetoder på Android og iOS angiver ofte handlinger ved afsnitgrænser via »`beforeinput`« i stedet for pålidelige »`keydown`«-hændelser.

Studio dirigerer derfor begge interaktionsveje gennem de samme redigeringsfunktioner for grænserne OMI. Mobilvejen genkender handlinger som `deleteContentBackward`, `deleteContentForward` og `insertParagraph`, mens desktopvejen håndterer Backspace, Delete og Enter. Dette sikrer, at dokumentmodellen forbliver identisk på tværs af web-, desktop-, Android- og iOS/iPadOS-klienter.

## Markering på tværs af hele manuskriptet

Valg behandles ikke længere udelukkende som en lokal egenskab for en enkelt Tiptap-blok. Studio har en rækkeviddemodel på manuskriptniveau, hvor endepunkterne angives som en »OMI«-blokidentifikator plus en tekstforskydning.

Dette gør det muligt for applikationen at kortlægge native mus-/berøringsmarkeringer tilbage til manuskriptrækkefølgen, når de strækker sig over flere blokke eller flere afsnit. Den samme model er kompatibel med det eksisterende manuskript-udklipsholderlag, som allerede understøtter fragmenter på tværs af blokke og afsnit.

### Ctrl+A / Cmd+A

**Ctrl+A** på Windows/Linux og **Cmd+A** på macOS markerer hele tekstområdet fra den første tekstblok OMI til den sidste, i stedet for kun at markere den redigeringsinstans, der aktuelt er i fokus.

Store manuskripter kan benytte »lazy«- eller »offscreen«-indlæsning af redigeringsområdet uden at forkorte det semantiske udvalg. DOM’en kan nøjes med at vise den del, der aktuelt vises, mens det OMI udvalgsområde stadig omfatter hele manuskriptet.

## Handlinger i forbindelse med valg af mobil

På berøringsfølsomme enheder undertrykker Studio den indbyggede WebView-handlingsmenu for markering, når en tekstmarkering i Studio er aktiv, så brugerne ser Studio-markeringsværktøjslinjen i stedet for to konkurrerende handlingsmenuer. Funktionerne »Kopier« og »Klip« skriver stadig til operativsystemets udklipsholder, hvilket gør det muligt at indsætte indholdet i andre programmer.

## Konstruktionssikkerhed

I en Word-lignende interaktion må semantiske objekter ikke forsvinde uden varsel. En Backspace- eller Delete-handling kan sammenlægge kompatible afsnit, men må ikke springe over eller implicit slette en figur, en tabel, en overskrift, et citat eller et andet meningsfuldt OMI-objekt. Handlinger, der ændrer den semantiske bloktype, kræver en eksplicit strukturel transformation.

Denne adskillelse er vigtig for videnskabelige arbejdsgange: redigeringsprocessen forbliver velkendt, mens det kanoniske dokument fortsat er egnet til validering, udveksling med publikationssystemer, bevaring og deterministisk eksport.

## Relaterede længere tekster

Den samme udviklingslinje omfatter håndtering af large-DOCX, semantiske indekser, genererede indholdsfortegnelser, skalerbar redigering af noter samt en stadig mere strukturel import af PDF. Rekonstruktionen af PDF anvender nu visuel bbox-geometri i stedet for udelukkende at stole på Popplers logiske linjegruppering ved detektering af komplicerede fodnoteopstillinger. Import af native Android-PDFer dirigeres til Studio-APIen i stedet for den medfølgende WebView-kilde.

Se også:

- [Long-form Authoring](./studio-long-form-authoring.md)
- [Cross-platform Studio](./cross-platform-studio.md)
- [OMI Cloud and Federated Infrastructure](./omi-cloud-federated-infrastructure.md)

## Status

Redigeringsrækkefølgen på tværs af hele manuskriptet, afsnitadfærd på tværs af sektioner, håndtering af indtastning af mobilgrænser, markering på tværs af hele manuskriptet samt funktionen Ctrl+A/Cmd+A for hele dokumentet er implementeret i den aktuelle Studio-udviklingsgren pr. september 2026. Som med andre betafunktioner fortsætter regressionstest på tværs af browsere, desktop, Android og iOS/iPadOS.