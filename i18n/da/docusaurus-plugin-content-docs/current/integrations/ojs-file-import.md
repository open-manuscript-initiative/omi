---
title: OJS import af manuskriptfiler
description: Valg af artikeltekst, begrænsninger for størrelsen på DOCX, indlejrede billeder og overførslen fra OJStil Studio.
---

# OJS import af manuskriptfiler

Denne side beskriver, hvordan Open Manuscript Studio udvælger og importerer den primære manuskriptfil fra en indsendelse via Open Journal Systems (OJS).

## Udvælgelse af manuskripter

En indsendelse via OJS kan indeholde artikelmanuskriptet, figurer, billeder, supplerende filer, datasæt og andre vedhæftede filer. Studio MÅ IKKE vælge den senest uploadede fil fra den komplette liste over indsendte filer.

I forbindelse med den nuværende integration af »OJS« vælger Studio manuskriptet i følgende rækkefølge:

```text
OJS submission
    ↓
Submission file stage
    ↓
Article Text component
    ↓
Supported DOCX file
    ↓
Latest eligible revision
    ↓
Open Manuscript Studio import
```

Komponenten »OJS« **Artikeltekst** angiver det primære manuskript. Billeder og andre filer, der er uploadet som separate »OJS«-komponenter, betragtes ikke som manuskriptet, selvom de er uploadet efter filen »Artikeltekst«.

Koblingen skal eksponere den stabile OJS/PKP-genre-metadata, der bruges til at identificere artikelteksten. Studio bør ikke basere sig på en lokaliseret komponentbetegnelse, når der findes en stabil komponentnøgle.

## Understøttede kildeformater

Den nuværende automatiske manuskriptimportfunktion på OJS accepterer DOCX som kildeformat for artikelteksten.

Kildefilen hentes via det autoriserede integrationsendepunkt OJS. Studio har ikke direkte adgang til det private filmappe OJS.

## Begrænsning på filstørrelse

Den nuværende maksimale størrelse for en artikeltekst DOCX, der importeres fra OJS, er **25 MB**.

Begrænsningen gælder for hele »DOCX«-pakken. Dette omfatter:

- manuskriptets tekst og formatering;
- fodnoter og slutnoter;
- tabeller og andre dokumentstrukturer;
- diagrammer, der er gemt i pakken »DOCX«;
- billeder, der er indlejret i filen »DOCX«;
- andre data, der indgår i pakken »DOCX«.

Derfor kan et manuskript, der indeholder mange indlejrede billeder i høj opløsning, nå grænsen, selvom dets tekstmængde er relativt lille.

Separate billeder, figurer, supplerende filer eller andre vedhæftede filer, der uploades til OJS uden for komponenten »Artikeltekst«, tæller **ikke** med i denne grænse på 25 MB for artikelteksten DOCX. De udgør separate OJS indsendelsesfiler og vælges ikke som kilde til manuskriptet.

Studio kontrollerer kildens størrelse før og efter download af DOCX. En kilde, der overskrider grænsen, afvises i stedet for at blive importeret delvist.

## Indlejrede billeder

Billeder, der er indlejret i en artikeltekst, der opfylder betingelserne (DOCX), indgår i importen af manuskriptet. Studio udtrækker de understøttede indlejrede billeder sammen med dokumentstrukturen, så de kan vises i det importerede manuskript.

Dette adskiller sig fra billedfiler, der uploades separat i forbindelse med indsendelsen til OJS. Separate billedfiler indsættes ikke automatisk i artikelmanuskriptet.

## OJS-overdragelse til studiet

Store strukturerede manuskripter, især filer i formatet »DOCX« (XML), der indeholder indlejrede billeder, kan resultere i en importdatamængde, der er væsentligt større end selve den komprimerede »DOCX«-fil.

Studio er derfor ikke afhængig af browser`sessionStorage`en til at overføre hele manuskriptet under overgangen fra OJStil Studio. Serveren gemmer de forberedte startdata midlertidigt og giver browseren et kortvarigt overdragelsestoken, der kun kan bruges én gang. Studio bruger dette token til at hente de forberedte startdata.

Dette omgår begrænsningerne på browserens Web Storage-kvote og gør det muligt at overføre manuskripter med mange billeder til Studio uden at skulle serialisere hele manuskriptet til `sessionStorage`.

Handoff-tokenet er midlertidigt og kan kun bruges én gang. Det er hverken en permanent URL til et manuskript eller en godkendelsesmekanisme til vilkårlige filer på OJS.

## Driftsoversigt

| Egenskab | Nuværende adfærd |
| --- | --- |
| OJS manuskriptdel | Artikelttekst |
| Automatisk kildeformat | DOCX |
| Maksimal størrelse på artikeltekstDOCX | 25 MB |
| Indlejrede DOCX-billeder | Importeret |
| Billeder fra OJS, der er uploadet separat | Ikke udvalgt som manuskript |
| Kilderevision | Seneste godkendte revision af artikelteksten |
| Overførsel mellem browsere | Midlertidigt servertoken til engangsbrug |
| Begrænsning for indholdsmængden i »`sessionStorage`« | Anvendes ikke til den fulde manuskriptmængde |

## Fremtidig konfiguration

Grænsen på 25 MB er i øjeblikket en implementeringsbegrænsning. I en fremtidig udgave af Studio vil den maksimale størrelse på kildefilerne i »OJS« muligvis kunne konfigureres ved installation. Man bør ikke regne med en højere grænse, før en sådan konfiguration udtrykkeligt understøttes og er dokumenteret.
