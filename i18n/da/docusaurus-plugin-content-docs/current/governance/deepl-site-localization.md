---
title: Arbejdsgang for lokalisering af DeepL-webstedet
sidebar_label: Lokalisering af DeepL-webstedet
---

# Arbejdsgang for lokalisering af DeepL-webstedet

Webstedet OMI kan benytte DeepL-APIen til at udfylde manglende oversættelser af Docusaurus-grænsefladen og den oversatte dokumentation, samtidig med at den engelske kildetekst forbliver den gældende.

## Sikkerhed

API-nøglen gemmes aldrig. Indstil den kun i den aktuelle shell:

```powershell
$env:DEEPL_API_KEY = "YOUR_KEY"
```

eller på Linux/macOS:

```bash
export DEEPL_API_KEY="YOUR_KEY"
```

DeepL Free- og Pro-endpoints identificeres ud fra nøglen. `DEEPL_API_URL` kan ændre endpointet, hvis det er nødvendigt.

## Revision uden brug af »API«-kvoten

```bash
npm run i18n:deepl:site:check
```

Dette viser, hvilke konfigurerede sprogindstillinger der findes, hvor mange dokumentationsfiler der er oversat, og hvilke kildedokumenter der stadig mangler. Det kalder ikke DeepL og ændrer ikke filerne.

## Oversæt manglende sprogversioner og dokumenter

```bash
npm run i18n:deepl:site
```

For et sprog, der endnu ikke findes, kører scriptet først Docusaurus `write-translations`, oversætter derefter de genererede ressourcer fra JSON og opretter oversatte kopier af den engelske dokumentation under standardstien Docusaurus i18n.

Eksisterende dokumentationsfiler bevares. Ungarsk og tysk behandles som manuelt vedligeholdte sprogversioner og genoprettes aldrig med kommandoen »`--force`«; kun manglende dokumentationsfiler kan tilføjes fra den engelske kildetekst.

## Udvalgte lokaliteter

```bash
npm run i18n:deepl:site -- --locales=fr,es,it
```

## Bevidst genoprette maskinoversatte sprogversioner

```bash
npm run i18n:deepl:site -- --locales=fr --force
```

Gør dette først efter gennemgang, da det erstatter eksisterende maskinoversat JSON og dokumentation for det valgte sprog. Manuelt vedligeholdt indhold på ungarsk og tysk forbliver beskyttet.

## Beskyttet indhold

Oversætteren bevarer afgrænsede kodeblokke og undgår at oversætte import-/eksport-sætninger samt strukturelle linjer som »MDX«. Inline-kode, URL’er, linkmål, skabelonpladsholdere og projektterminologi såsom »OMI«, »OJS«, »OMP«, »ORCID«, »ROR«, »DOI«, »DOCX«, »IDML«, »JATS«, »CSL«, »CSS«, »HTML«, »PDF«, »WebAuthn« og »LaTeX« er beskyttet mod maskinoversættelse.

## Gennemgang og validering

Maskinoversættelse er et første udkast og ikke en redaktionel godkendelse. Efter generering:

1. gennemgå terminologi og det sprog, der anvendes i videnskabelige publikationer;
2. Tjek Markdown/MDX for visning og interne links;
3. kør `npm run build`;
4. gennemgå i det mindste forsiden, Studio-siden og flere dokumentationssider i hver nyoprettet sprogversion;
5. Oversatte sprogfiler må først committes efter gennemgang.

Den engelske dokumentation forbliver kilden til fremtidig generering af manglende filer. Eksisterende oversatte filer overskrives ikke automatisk under normale kørsler.
