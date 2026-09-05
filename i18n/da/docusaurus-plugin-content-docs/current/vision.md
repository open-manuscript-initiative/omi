---
id: vision
title: Vision
sidebar_position: 1
description: Visionen og filosofien bag »Open Manuscript Initiative«.
---

# Vision

## Et nyt syn på videnskabelig skrivning

I årtier er videnskabelige manuskripter blevet udarbejdet ved hjælp af tekstbehandlingsprogrammer, der oprindeligt var udviklet til kontordokumenter.

Disse programmer kræver, at forfatterne træffer typografiske beslutninger frem for videnskabelige. Spørgsmål som skriftstørrelse, afstand, indrykning eller manuelt layout har kun lidt at gøre med videnskabelig kommunikation, men alligevel tvinger udgivelsesprocesserne gang på gang forfattere og redaktører til at rekonstruere strukturen ud fra den visuelle formatering.

Resultatet er velkendt:

- inkonsekvent formatering;
- skjulte dokumentartefakter;
- inkompatible skabeloner;
- gentagen konvertering og oprydning;
- dobbelt indtastning af metadata;
- og tab af information mellem redigerings-, korrekturlæsnings- og publikationssystemer.

OMI tager udgangspunkt i en anden antagelse: det videnskabelige manuskript bør forblive et struktureret, transportabelt objekt gennem hele sin levetid.

## Indholdet går forud for udseendet

Forfattere bør beskrive, **hvad** et stykke indhold er, og ikke blot **hvordan** det skal se ud.

Et manuskript er ikke blot en samling af skrifttyper og formatering. Det er en struktureret samling af videnskabelige begreber, såsom:

- titel, forfattere og tilhørsforhold;
- resumé og nøgleord;
- afsnit og overskrifter;
- citater, figurer og tabeller;
- noter, henvisninger og kilder;
- tak, oplysninger om finansiering og erklæringer om datatilgængelighed;
- kommentarer, rettelser og gennemgangsmateriale.

Disse elementer definerer den videnskabelige betydning. De kan derefter genereres til brug i et tidsskrift, et arkiv, en bogproduktionsproces, en webpublikation, et trykt udgave eller en arkivpakke uden at manuskriptmodellen skal omskrives.

## Definer strukturen én gang

OMI anvender en semantisk manuskriptmodel. I stedet for gentagne gange at genopbygge strukturen under konverteringen bevares strukturen som data af højeste kvalitet.

Dette gør det muligt for et manuskript at gennemgå de forskellige faser – fra udarbejdelse, fagfællebedømmelse, redaktionel behandling til udgivelse – uden at miste sin faste videnskabelige identitet, metadata og sammenhænge.

Det samme princip gælder for bidrag, henvisninger, kommentarer og versionshistorik: De bør bevare deres betydning som meningsfulde objekter, når de flyttes mellem forskellige arbejdsgange, i stedet for at blive reduceret til ren typografi, hver gang en fil skifter hænder.

## Udgiv overalt

Den nuværende referenceimplementering fra Open Manuscript Studio viser allerede retningen for denne model. Et struktureret manuskript kan leveres som bærbare OMI-data og omdannes til udgivelsesorienterede output, herunder:

- JATS XML;
- semantisk HTML;
- DOCX;
- EPUB;
- PDF;
- IDML;
- XPress-tags;
- FrameMaker MIF;
- Scribus SLA;
- og LaTeX.

Fremtidige adaptere kan tilføje yderligere mål for udgivere, arkiver, bevaring og indlevering af metadata uden at ændre den videnskabelige kildemodel.

Præsentationen bliver et resultat. Betydningen forbliver kilden.

## Åben ved sin konstruktion

Open Manuscript Initiativeen er et projekt baseret på åbne standarder. Dens specifikationer, skemaer, dokumentation og referenceimplementeringer skal forblive offentligt tilgængelige under åbne licenser.

Alle bør kunne:

- gennemføre specifikationerne;
- udvikle kompatibel software til redigering eller udgivelse;
- oprette konvertere og valideringsværktøjer;
- udvikle plugins og integrationer;
- at forbinde »OMI«-arbejdsgange med udgivelses- eller arkivinfrastruktur;
- og bevare OMI-manuskripter uafhængigt af en bestemt leverandør eller en bestemt hostet tjeneste.

Ingen proprietær applikation bør få enekontrol over det videnskabelige objekt.

## Lokalt først og kompatibelt

Overførbarhed betyder også, at forfattere ikke bør være nødt til at afstå ejendomsretten til et manuskript til en bestemt cloud-platform blot for at kunne benytte moderne videnskabelige værktøjer.

OMI støtter derfor en »local-first«-arkitektur, hvor manuskripter kan forblive på forfatterens computer, lagres i bærbare »OMI«-pakker eller placeres i mapper, der synkroniseres af den lagringsudbyder, forfatteren har valgt. Servertjenester anvendes, hvor de tilfører reel fælles værdi — konti, samarbejde, fagfællebedømmelse, integration med udgivelsessystemer eller direkte fjernbetjeningstjenester — snarere end som en forudsætning for at eje manuskriptet.

Eksterne platforme såsom OJS og OMP er fortsat de autoritative kilder, hvad angår deres egne arbejdsgangstilstande. OMI integreres via eksplicitte API'er og profiler i stedet for at knytte manuskriptmodellen direkte til en anden applikations database.

## Anmeldelsen er en del af det videnskabelige værk

Peer review bør ikke betragtes som overflødig tekst, der omgiver et dokument. »OMI« modellerer review-opgaver, anmærkninger, kommentarer og identitetsgrænser som strukturerede data fra den videnskabelige arbejdsgang.

Referenceimplementeringen understøtter allerede dobbeltblind bedømmelse samt rollebaserede arbejdsgange for forfattere, redaktører og bedømmere. Det langsigtede mål er at gøre bedømmelsesstatus overførbar og kompatibel, samtidig med at de fortrolighedsregler, der kræves i forbindelse med udgivelsesprocessen, overholdes.

## Identitet uden binding

Identiteten som autentificeret bruger og identiteten som videnskabelig bidragyder hænger sammen, men de er ikke det samme.

En konto angiver, hvem der har adgang til en tjeneste. En bidragyderpost angiver forfatterskab, tilknytning, ORCID og akademisk rolle. OMI holder disse begreber adskilt, så eksterne identitetsudbydere kan tilknyttes uden at omdefinere forfatterskabet eller indarbejde en bestemt godkendelsesudbyder i manuskriptformatet.

## Bæredygtighed gennem tjenester

Åbne standarder kræver stadig bæredygtig vedligeholdelse. OMI kan understøtte valgfri hostede eller professionelle tjenester såsom:

- infrastruktur til administreret samarbejde og arbejdsgange;
- validerings- og interoperabilitetstjenester;
- integration af udgivelsessystemer;
- arkiv- og bevaringsadaptere;
- støtte til implementering i institutioner;
- oversættelse eller AI-støttede tjenester;
- og administreret hosting.

Disse tjenester kan udvide økosystemet, men de må aldrig begrænse adgangen til standarden, manuskriptmodellen eller den åbne referenceimplementering.

## Mere end blot et filformat

OMI er ikke blot endnu et dokumentformat. Det er et økosystem af komponenter, der kan fungere sammen:

- semantiske specifikationer;
- en videnskabelig objektmodel;
- bærbare beholdere til manuskripter;
- valideringsregler og overensstemmelsesklasser;
- referenceimplementeringer;
- APIs og integrationsprofiler;
- udgivelses- og konverteringsværktøjer;
- gennemgå arbejdsgange;
- og arkitektur til langtidsbevaring.

Open Manuscript Studio er den nuværende referenceimplementering, der anvendes til at afprøve disse idéer i et reelt miljø for redigering, korrekturlæsning og udgivelse på tværs af web-, desktop- og mobilklienter.

## Fællesskabet først

Videnskabelig kommunikation er en del af det videnskabelige samfund. Tidsskriftet »Open Manuscript Initiative« modtager gerne bidrag fra forskere, forlag, softwareudviklere, bibliotekarer, universiteter, tidsskrifter og forskningsinstitutioner.

Åbent samarbejde gør det muligt for specifikationen at udvikle sig i takt med de akademiske behov i stedet for at være begrænset af en proprietær editor eller udgivelsesplatform.

## Vores mål

Vi forestiller os en arbejdsgang, hvor forskere kan fokusere på deres videnskabelige arbejde, mens softwaren bevarer struktur, identitet og sammenhænge gennem hele publikationens livscyklus.

Manuskriptet er stadig forståeligt for både maskiner og mennesker.

Publiceringssystemer varetager ansvaret for præsentationen.

Gennemgangen er fortsat velstruktureret og gennemsigtig.

Viden er stadig overførbar.

Forlagsbranchen bliver interoperabel.

> **Skriv naturligt.**  
> Definer strukturen én gang.  
> Udgiv overalt.**
