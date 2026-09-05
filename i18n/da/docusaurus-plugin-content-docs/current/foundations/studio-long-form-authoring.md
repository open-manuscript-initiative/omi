---
id: studio-long-form-authoring
title: Udarbejdelse af længere tekster i »Open Manuscript Studio«
sidebar_label: Udarbejdelse af længere tekster
sidebar_position: 4
description: Import af store filer fra »DOCX«, navigation i dokumentstrukturen, skalerbare noter, semantiske navneindekser og genererede indholdsfortegnelser i »Open Manuscript Studio«.
keywords:
  - Open Manuscript Studio
  - DOCX import
  - monograph
  - long-form authoring
  - notes
  - footnotes
  - name index
  - Word XE
  - table of contents
  - Word TOC
---

# Udarbejdelse af længere tekster i »Open Manuscript Studio«

Open Manuscript Studio udvikles med henblik på at understøtte ikke blot korte artikler, men også videnskabelige manuskripter på boglængde. I forbindelse med udarbejdelsen af længere tekster er Word-kompatibilitet, semantisk struktur, »local-first«-behandling og responsiv redigering de primære krav.

Denne side beskriver den implementeringsversion, der blev udviklet og testet i august 2026. Funktioner, der stadig er under gennemgang, er markeret som sådanne og præsenteres ikke som garanterede funktioner i den endelige version.

## Import af store DOCXer og monografier

Studio anvender en særlig importstrategi til store og strukturelt komplekse Word-dokumenter. Små filer importeres fortsat via den fulde strukturelle importfunktion, mens pakker på manuskriptlængde kan benytte en monografiprosess, der kræver mindre hukommelse og undgår opbygningen af et meget stort DOM i browseren til `word/document.xml`.

Funktionen til store dokumenter er udviklet til manuskripter, der indeholder tusindvis af afsnit, fodnoter/slutnoter, Word-felter, hyperlinks, billeder, overskrifter og andre akademiske strukturer. Den overlader jævnligt styringen til browseren, så brugergrænsefladen forbliver responsiv under importen.

En rigtig fagbog på ca. 200 sider blev brugt til en regressions- og ydeevnetest. Dokumentet blev importeret uden problemer på både Android-enheder og desktop-lignende enheder, den testede formatering blev bevaret, og konverteringen blev afsluttet på ca. seks sekunder på den testede mobilenhed. Dette er et testresultat fra projektet og ikke en formel ydeevnegaranti; den faktiske varighed afhænger af dokumentets kompleksitet og hardwaren.

Sikkerhedsgrænsen på pakkeniveau er adskilt fra grænserne for visuelle filer, så en gyldig stor DOCX ikke afvises blot fordi ZIP-filen er større end den historiske tærskelværdi for billedfiler.

## Navigation i dokumentstrukturen

Importerede overskrifter bliver en del af hierarkiet i afsnittet »Studio« i stedet for blot at forblive afsnit med en bestemt visuel formatering. Visningen af dokumentstrukturen kan derfor fungere som en navigationsoversigt for lange manuskripter.

På computeren fører markering af en oversigtspost til, at der rulles til det tilsvarende afsnit i redigeringsvinduet. På mobilen skifter markering af en overskrift tilbage til redigeringsvisningen, hvor der ventes på, at redigeringsområdet vises, hvorefter der rulles til det ønskede afsnit, og fokus flyttes til overskriftsområdet. Dette bevarer den kompakte arbejdsgang på mobilen, samtidig med at der tilbydes den samme semantiske navigationsmodel som på computeren.

## Skalerbare noter og fodnoter

Et manuskript på boglængde kan indeholde hundredvis eller tusindvis af noter. Det er unødvendigt ressourcekrævende at gengive hver enkelt note med det samme i en fuldgyldig rich-text-editor, så Studio adskiller nu den letvægtsnoteliste fra redigeringen af noterne.

Panelet »Noter« viser alle notatoversigter som lette poster. En fuldstændig »`NoteBodyEditor`« åbnes kun for det notat, som brugeren åbner. På den måde er den komplette notatliste altid tilgængelig, uden at der oprettes hundredvis af samtidige redigeringsinstanser.

Optimeringen bevarer muligheden for at redigere, slette og navigere i noter, samtidig med at den væsentligt reducerer den tid, det tager at åbne panelet »Noter« i manuskripter med mange noter.

## Semantiske navneindekser

Studio behandler et videnskabeligt navneindeks som strukturerede manuskriptdata og ikke blot som genereret slutmateriale.

### Word-felterne »`XE`« og »`INDEX`«

DOCX Importfunktionen genkender Word-indeksfelter (`XE`) og genererede `INDEX`-felter, herunder feltinstruktioner, der er fordelt på flere `w:instrText`-kørsler. Hierarkiske indekstermer bevares i stedet for at blive omdannet til almindelig tekst.

De importerede indeksdata gemmes sammen med manuskriptet »OMI« og kan grupperes i en genereret visning med navneindeks / Névmutató / Personenregister. Gentagne markører grupperes, samtidig med at deres individuelle forekomster bevares.

Dette omfattende regressionsdokument indeholder tusindvis af reelle Word-`XE`-felter og anvendes som et praktisk interoperabilitetsværktøj i forbindelse med dette arbejde.

### Manuel mærkning af navneindeks

Den nuværende udviklingslinje tilføjer desuden mulighed for manuel markering via den eksisterende værktøjslinje til tekstmarkering. Den markerede tekst kan blive til en semantisk navneindekspostering, der gemmer målblokken, den markerede tekst, kildetypen og en stabil semantisk ankeridentifikator.

Grupperede indeksposter kan udvides til deres enkelte forekomster. For poster med placeringsdata vælger **Gå til forekomst** det tilsvarende afsnit, lukker menuen, ruller ned til redigeringsblokken og fremhæver/markerer den indekserede tekst.

Importerede Word-markører, der endnu ikke har præcise placeringsdata, forbliver gyldige semantiske poster; at knytte hver enkelt importeret `XE`-markør til et præcist anker i inline-editoren er en efterfølgende forbedring af interoperabiliteten.

## Semantisk indholdsfortegnelse

Et indholdsfortegnelse, der er genereret af Word, bør ikke blot blive til en statisk tekst med sidetal efter importen. Studio behandler derfor indholdsfortegnelsen som et genereret semantisk objekt, der er afledt af manuskriptets overskriftshierarki.

Den nuværende implementering, der er genstand for gennemgangen, understøtter Word-feltinstruktioner `TOC`, herunder opdelte `instrText`-fragmenter. Den bevarer vigtige Word-indstillinger såsom overskriftsintervaller (`\\o "1-3"`), generering af hyperlinks (`\\h`) og brug af oversigtsniveauer (`\\u`).

Når der findes et semantisk indholdsfortegnelse, genererer Studio det synlige indholdsfortegnelse ud fra det aktuelle afsnitthierarki. Hvis man omdøber eller omstrukturerer afsnit, opdateres den genererede liste derfor automatisk. Hver post er klikbar og fører brugeren til det pågældende afsnit.

Studio betragter bevidst ikke sidetal fra importerede Word-indholdsfortegnelser som faste redigeringsdata. Studio er ikke et redigeringsprogram til sidelayout, og paginering hører derfor til i en renderingsfase i forbindelse med publikation eller eksport. Eksport via DOCX og PDF kan generere eller opdatere sidetal senere uden at gøre layoutafhængige sidetal til en del af den kanoniske manuskriptstruktur.

## Designprincip: semantik før præsentation

Disse lange reportager følger én fælles regel:

- Overskrifter er strukturelle afsnit, ikke blot skriftformater;
- noter er semantiske anmærkninger, ikke blot tekst i eksponent;
- Navneindekser består af gemte markører og genererede visninger, ikke blot en statisk liste;
- Indholdsfortegnelser er regler for overskriftshierarkiet og ikke blot en kopi af sidetal.

Dette gør manuskriptet robust, når det flyttes mellem Studio, Word, udgivelsessystemer, HTML/JATS, EPUB eller eksportformater til tryk.

## AI og deterministiske dokumentstrukturer

Navnegenkendelsen kan drage fordel af AI-baserede forslag, men den underliggende indeksmodel forbliver deterministisk og forfatterkontrolleret. AI kan foreslå mulige personer eller normalisere forskellige navneformer, mens de eksplicitte indeksmarkører fortsat udgør de autoritative videnskabelige data.

Indholdsfortegnelser kræver ikke AI. De genereres deterministisk ud fra dokumenthierarkiet og de importerede feltindstillinger.

## Nuværende udviklingsstatus

| Funktion | Status |
|---|---|
| Stor/monografi DOCX import | Implementeret og testet med en videnskabelig bog på ca. 200 sider |
| Navigation i dokumentoversigter på mobil og desktop | Implementeret |
| Skalerbar liste over alle noder med forsinket indlæsning af nodeeditoren | Implementeret |
| Word `XE` / `INDEX` semantisk import | Implementeret |
| Manuel indeksering af navne og navigation mellem forekomster | Udviklings-PR / gennemgangslinje |
| Word-`TOC`genkendelse og semantisk indholdsfortegnelse i realtid | Udviklings-PR / gennemgangslinje |
| Præcise inline-ankre for hver forekomst i importerede Word-`XE`er | Opfølgning |
| Generering af sidetal til indholdsfortegnelse/indeks ved udskriftsorienteret eksport | Opfølgning |
| AI-baserede forslag til personnavne | Planlagt valgfrit hjælpelag |

Siden med implementeringsstatus er fortsat det officielle overblik over udgivne og konfigurationsafhængige Studio-funktioner.