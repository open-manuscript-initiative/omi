---
title: Retningslinjer for versionsstyring
sidebar_position: 5
---

# Open Manuscript Initiative Politik for versionsstyring

## Dokumentstatus

- **Dokumenttype:** Styringspolitik
- **Status:** Udkast
- **Version:** 0.1.0
- **Normativt sprog:** engelsk
- **Gælder for:** OMI specifikationer, skemaer, filformater, API'er, eksempler, implementeringer, oversættelser og offentliggjort dokumentation

## 1. Formål

Denne politik fastlægger, hvordan Open Manuscript Initiative (OMI) tildeler, fortolker, offentliggør og trækker versioner tilbage.

Versionsidentifikatorer angiver forventninger til kompatibilitet. De er ikke blot betegnelser for udgivelser. En OMI-version skal gøre det muligt for forfattere, implementører, valideringsansvarlige, udgivere, arkiver og bevaringssystemer at fastslå:

- hvilke specifikationsregler der gælder;
- om to dokumenter eller implementeringer forventes at kunne fungere sammen;
- om en opgradering er bagudkompatibel;
- om der er behov for migration;
- hvilket skema der validerer et dokument;
- hvilke rettelser eller udvidelser der er medtaget;
- om en version fortsat understøttes.

Denne politik supplerer »[Specification Lifecycle](./specification-lifecycle.md)«. Livscyklusstatus beskriver modenhed; versionsnumre beskriver ændringer og kompatibilitet. En specifikation kan forblive i status »Udkast«, mens den gennemgår flere versioner før 1.0.

## 2. Anvendelsesområde

Denne politik regulerer versionsstyringen af:

1. OMI-specifikationspakken;
2. enkeltstående »OMI«-SPEC-dokumenter;
3. den kanoniske datamodel OMI og skemaet JSON;
4. OMI manuskript- og containerformater;
5. OMI APIs og protokolkontrakter;
6. normative ordlister og registre;
7. overensstemmelsesprofiler;
8. referenceeksempler og testopstillinger;
9. referenceimplementeringer, herunder Open Manuscript Studio;
10. officielle oversættelser;
11. OMI-webstedet og dokumentationsserien.

Det er ikke et krav, at tredjepartsimplementeringer skal anvende de samme produktversionsnumre som »OMI«-specifikationen. Tredjepartssoftware skal dog angive, hvilke »OMI«-versioner og -profiler den understøtter.

## 3. Normative udtryk

Nøgleordene **SKAL**, **MÅ IKKE**, **KRÆVES**, **SKAL**, **MÅ IKKE**, **BØR**, **BØR IKKE**, **ANBEFALES**, **KAN** og **VALGFRIT** skal fortolkes som normative kravniveauer.

## 4. Versionens dimensioner

OMI skelner mellem flere beslægtede, men uafhængige versionsdimensioner.

### 4.1 Version af specifikationspakken

Suite-versionen angiver en samordnet udgivelse af standarden »OMI«, for eksempel:

```text
OMI 0.2
OMI 1.0
OMI 1.1
OMI 2.0
```

En suite-udgivelse definerer en testet kombination af specifikationsversioner, skemaer, ordlister, profiler og eksempler.

### 4.2 Version af den individuelle specifikation

Hver permanent specifikationsidentifikator har sin egen version:

```text
OMI-SPEC-005 Citation Model, version 0.3.0
```

En enkelt specifikation kan revideres uden, at det umiddelbart medfører udgivelse af en ny suite-version. I et register over suite-udgivelser registreres den nøjagtige version af hver enkelt medtaget specifikation.

### 4.3 Skemaversion

Et maskinlæsbart skema har en eksplicit version, der er uafhængig af filnavnet, commit i repositoriet og offentliggørelsesdatoen.

Eksempel:

```json
{
  "$id": "https://openmanuscript.org/schemas/omi-manuscript-1.0.schema.json",
  "title": "Open Manuscript Manuscript Schema",
  "version": "1.0.0"
}
```

### 4.4 Formatversion

Hvert manuskript eller hver pakke, der er serialiseret som en OMI, SKAL angive den formatversion, der er nødvendig for at fortolke den.

Eksempel:

```json
{
  "omi": {
    "format": "manuscript",
    "version": "1.0.0"
  }
}
```

Den nøjagtige feltstruktur vil blive defineret i specifikationen for filformatet. Deklarationen SKAL forblive maskinlæsbar og MÅ IKKE udelukkende afhænge af en filtypenavn.

### 4.5 Implementeringsversion

Softwareprodukter bruger deres egne produktversioner, for eksempel:

```text
Open Manuscript Studio 0.4.0
```

En implementeringsversion MÅ IKKE fortolkes som en overensstemmelsesversion i henhold til OMI. Implementeringer SKAL separat angive, hvilke versioner af OMI der understøttes.

Eksempel:

```text
Product version: 0.4.0
Supported OMI suite: 0.2
Supported manuscript format: 0.2.0–0.2.x
```

### 4.6 Oversættelsesversion

En officiel oversættelse SKAL indeholde følgende oplysninger:

- det normative engelske dokument;
- den nøjagtige kildeversion;
- revisionen af oversættelsen;
- synkroniseringsstatus.

Eksempel:

```text
Source: OMI-SPEC-005 version 1.1.0
Translation revision: hu-1
Status: synchronized
```

## 5. Format for versionsnummer

OMI bruger semantiske versionsnumre i følgende form:

```text
MAJOR.MINOR.PATCH
```

Eksempler:

```text
0.3.0
1.0.0
1.2.4
2.0.0
```

For navne på pakker, der er rettet mod offentligheden, kan patch-komponenten udelades, når den er nul:

```text
OMI 1.0
```

Den kanoniske, maskinlæsbare værdi er fortsat `1.0.0`.

## 6. Betydningen af versionskomponenterne

### 6.1 HOVEDFAG

MAJOR-nummeret ændres, når en udgivelse indeholder uforenelige normative ændringer.

En væsentlig ændring omfatter blandt andet følgende:

- fjernelse af en påkrævet eller tidligere understøttet datastruktur;
- at ændre betydningen af et eksisterende felt eller objekt;
- at gøre valgfrie data obligatoriske uden en passende standardindstilling;
- ændring af identifikatorers semantik;
- at ændre behandlingsreglerne på en sådan måde, at en ældre implementering, der opfylder kravene, ville give væsentligt anderledes resultater;
- at erstatte en serialiseringsmodel på en måde, der ikke kan læses sikkert af ældre implementeringer;
- indførelse af inkompatibel adfærd i `API`;
- at gøre tidligere gyldige, standardoverensstemmende dokumenter ugyldige uden en fastlagt kompatibilitetsmekanisme.

En STOR udgivelse SKAL indeholde vejledning i migrering.

### 6.2 MINDREÅRIG

MINOR-nummeret ændres, når der tilføjes kompatibel funktionalitet.

En mindre ændring kan f.eks. omfatte:

- tilføjelse af valgfrie felter;
- tilføjelse af nye objekttyper via et defineret udvidelsespunkt;
- tilføjelse af nye valgfri overensstemmelsesprofiler;
- at tilføje nye opregningsværdier, hvor brugerne allerede er nødt til at acceptere ukendte værdier;
- tilføjelse af kompatible API-endpunkter;
- udvidelse af valideringen med advarsler, der ikke gør tidligere gyldigt indhold ugyldigt;
- tilføjelse af tilknytninger til eksterne standarder;
- at tilføje informative retningslinjer eller eksempler, der tydeliggør den adfærd, der opfordres til.

En MINDRE opdatering SKAL sikre, at ældre klienter, der overholder standarden, fortsat kan behandle de tidligere understøttede kerneoplysninger, selvom de ser bort fra de nyindførte valgfri oplysninger.

### 6.3 PATCH

PATCH-nummeret ændres i forbindelse med kompatible rettelser og præciseringer.

En patch-ændring kan omfatte:

- rettelse af redaktionelle fejl;
- at rette defekte links;
- at præcisere tvetydig tekst uden at ændre den tilsigtede funktionalitet;
- at tilpasse eksemplerne, så de stemmer overens med de gældende normative regler;
- at rette en alt for bred eller alt for snæver skemabegrænsning, hvor den tilsigtede regel allerede var utvetydig;
- offentliggørelse af rettelser;
- rettelse af oversættelser;
- fastlæggelse af ikke-normativt værktøj eller dokumentation.

En patch-udgivelse MÅ IKKE indføre en ny obligatorisk funktion eller bevidst forårsage, at kompatible implementeringer ikke længere fungerer korrekt.

## 7. Versioner før 1.0

Versioner under `1.0.0` angiver, at den pågældende specifikation, det pågældende skema eller det pågældende format endnu ikke har nået sin første stabile kompatibilitetsforpligtelse.

Eksempler:

```text
0.1.0
0.2.0
0.2.3
```

I løbet af »`0.x`«-fasen:

- Der KAN forekomme uforenelige ændringer i en MINDRE udgave;
- PATCH-udgivelser BØR forblive bagudkompatible inden for den samme MINOR-serie;
- hver eneste ændring, der medfører inkompatibilitet, SKAL dokumenteres;
- Migreringer BØR angives, når det er praktisk muligt;
- Implementeringer MÅ IKKE hævde langsigtet kompatibilitet udelukkende på grundlag af en version fra før 1.0;
- Offentliggjorte dokumenter BØR bevare deres oprindelige versionsangivelse, selv efter at der findes et nyere skema.

»`0.x`«-fasen er ikke en tilladelse til ukontrollerede ændringer. Hver udgivelse er fortsat underlagt krav om gennemgang, ændringslog og arkivering.

## 8. Stabilitetsforpligtelse på 1,0

Version `1.0.0` fastlægger den første stabile kompatibilitetsstandard for OMI.

Inden en komponent når frem til »`1.0.0`«, SKAL den opfylde de gældende krav i politikken om specifikationers livscyklus, herunder:

- et klart afgrænset anvendelsesområde;
- fastlagt terminologi;
- opfylde alle lovmæssige krav;
- faste identifikatorer;
- maskinlæsbare skemaer, hvor det er relevant;
- overensstemmelseskriterier;
- dokumentation for gennemførelsen;
- test af interoperabilitet;
- hensyn til sikkerhed og bevarelse;
- migrationsregler fra den seneste udgave før version 1.0;
- offentlig høring.

Efter »`1.0.0`« kræver ændringer, der ikke er bagudkompatible, en ny MAJOR-version, medmindre der allerede indgik en eksplicit kompatibilitetsmekanisme i den stabile specifikation.

## 9. Definitioner af kompatibilitet

### 9.1 Bagudkompatibilitet

En nyere implementering er bagudkompatibel, når den kan behandle indhold, der er gyldigt i henhold til den understøttede ældre version, uden at der kræves ændringer, medmindre det ældre indhold er afhængigt af en udfaset, usikker funktion, der er dokumenteret i retningslinjerne.

### 9.2 Fremadrettet kompatibilitet

En ældre implementering er fremadkompatibel, når den sikkert kan behandle nyere indhold, normalt ved at ignorere valgfri, ukendte udvidelser, samtidig med at den bevarer dem, hvor det er nødvendigt.

OMI tilstræber afgrænset fremadrettet kompatibilitet. Implementeringer er ikke forpligtet til at forstå ukendt semantik, men de SKAL fejle på en sikker måde og MÅ IKKE i al stilhed fortolke ukendte data på ny.

### 9.3 Kompatibilitet i begge retninger

Kompatibilitet i begge retninger betyder, at indhold kan indlæses og gemmes uden tab af oplysninger, som implementeringen er forpligtet til at bevare.

En klient, der ikke forstår en udvidelse, KAN stadig overholde standarden, hvis den bevarer udvidelsen uændret i overensstemmelse med reglerne for udvidelser.

### 9.4 Adfærdsmæssig kompatibilitet

Adfærdsmæssig kompatibilitet vedrører behandlingsresultater, ikke blot skemavaliditet. To versioner er adfærdsmæssigt kompatible, når forpligtelserne vedrørende normativ fortolkning, validering, forankring, citatopløsning og gengivelse forbliver ens for eksisterende indhold.

## 10. Kompatibilitetsregler for datamodeller

### 10.1 Valgfrie tilføjelser

Nye valgfrie egenskaber betragtes normalt som MINDRE ændringer, når:

- deres fravær har en bestemt betydning;
- Ældre forbrugere har lov til at ignorere eller beholde dem;
- De ændrer ikke fortolkningen af eksisterende felter.

### 10.2 Nødvendige tilføjelser

At tilføje en obligatorisk egenskab er normalt en VÆSENTLIG ændring, medmindre:

- der defineres en deterministisk standardværdi;
- eksisterende gyldige dokumenter forbliver gyldige eller kan opgraderes uden tab af indhold;
- Kompatibilitetsmekanismen var allerede normativ.

### 10.3 Fjernelse af ejendele

At fjerne en egenskab er en VÆSENTLIG ændring. Før den fjernes, BØR den markeres som forældet.

### 10.4 Omdøbning

At omdøbe en ejendom er en VÆSENTLIG ændring, medmindre det gamle navn fortsat accepteres via et dokumenteret alias eller en overgangsperiode.

### 10.5 Ændringer af typen

At ændre en egenskabs type eller kardinalitet er normalt en VÆSENTLIG ændring.

### 10.6 Opregninger

Tilføjelse af opregningsværdier betragtes kun som en MINDRE ændring, hvis brugerne skal kunne håndtere ukendte værdier. I alle andre tilfælde betragtes det som en STOR ændring.

Fjernelse eller omdefinering af en opregningsværdi er en VÆSENTLIG ændring.

### 10.7 Standardindstillinger

Ændring af en standardindstilling, der påvirker fortolkningen eller outputet, betragtes som en STOR ændring. Korrektion af en dokumenteret standardindstilling, så den stemmer overens med allerede normativ adfærd, kan betragtes som en PATCH-ændring, forudsat at dokumentation for interoperabilitet bekræfter den tilsigtede adfærd.

## 11. Håndtering af ukendte data og filtyper

For at fremme en kompatibel udvikling:

- Specifikationerne BØR definere eksplicitte udvidelsespunkter;
- Implementeringer SKAL skelne mellem ukendte data og ugyldige data;
- ukendte udvidelser MÅ IKKE fortolkes som kendt kernesemantik;
- Processorer BØR bevare data med ukendt filtypenavn under rundrejser, når formatet kræver, at disse bevares;
- Valideringsinstanser BØR angive det navneområde eller den profil, der er ansvarlig for en udvidelse;
- En udvidelse MÅ IKKE tilsidesætte kernesemantikken uden en ny kompatibel profil eller en ændring af hovedversionen.

## 12. Versionsstyring af skemaer

### 12.1 Uforanderlige offentliggjorte skemaer

Et offentliggjort skema, der identificeres ved en versioneret kanonisk URL, SKAL være uforanderligt.

For eksempel det indhold, der vises på:

```text
https://openmanuscript.org/schemas/omi-manuscript-1.0.schema.json
```

Må IKKE i al stilhed erstattes med regler, der medfører en anden adfærd.

Rettelser kræver enten:

- en ny skema-URL på patch-niveau; eller
- en mekanisme til rettelser med eksplicit versionsangivelse, der bevarer det oprindelige artefakt.

### 12.2 Kanoniske og praktiske URL’er

OMI KAN offentliggøre en URL uden versionsnummer, f.eks.:

```text
https://openmanuscript.org/schemas/omi-manuscript.schema.json
```

Denne URL kan henvise til det seneste anbefalede stabile skema og MÅ IKKE anvendes som den eneste identifikator i arkivdokumenter.

Normative og arkiverede dokumenter BØR henvise til et uforanderligt, versioneret skema.

### 12.3 Skemaidentifikatorer

Hvert skema SKAL indeholde:

- en kanonisk `$id`;
- en eksplicit version;
- de relevante henvisninger til OMI-SPEC og testsuiter;
- publikationsstatus;
- bemærkninger om kompatibilitet, hvor det er relevant.

### 12.4 Skema-dialekt

Ændring af skema-dialekten i JSON er en beslutning, der har betydning for kompatibiliteten. En ændring af dialekten KAN være MINDRE, hvis den accepterede instansmængde og valideringssemantikken forbliver ens. I modsat fald er den STOR.

## 13. Versionsstyring af filformater

### 13.1 Selvidentifikation

Hver OMI-fil eller -container SKAL internt angive sit format og sin version.

Filtypenavne og MIME-typer er nyttige metadata til routing, men er ikke tilstrækkelige som eneste indikator for versionen.

### 13.2 Læsernes adfærd

En læser SKAL:

- acceptere de versioner, den udtrykkeligt understøtter;
- sikkert at afvise eller sætte ikke-understøttede hovedversioner i karantæne;
- angiv tydeligt, hvilken version der ikke understøttes;
- undgå destruktiv konvertering uden brugerens samtykke eller godkendelse i henhold til politikken;
- bevare den oprindelige artefakt, når der forsøges en migrering.

En læser KAN acceptere en senere MINDRE version, når kompatibilitetsreglerne tillader ukendte valgfrie felter og udvidelser.

### 13.3 Forfatterens adfærd

En forfatter SKAL angive den nøjagtige version, den udgiver.

En forfatter BØR angive den ældste kompatible version, der trofast gengiver indholdet, når der kræves interoperabilitet med ældre systemer.

En forfatter MÅ IKKE mærke indholdet med en ældre version, hvis det indeholder funktioner, der ikke er gyldige i den pågældende version.

### 13.4 Migration

Overgangen mellem formatversioner SKAL være eksplicit og reproducerbar.

Et migreringsværktøj BØR generere:

- kildeversion;
- målversion;
- migreringsværktøj og version;
- tidsstempel;
- advarsler;
- fejl eller tilnærmelser;
- uafklarede udvidelser;
- valideringsresultat;
- herkomstlink til det oprindelige artefakt.

## 14. Versionsstyring iAPI

OMI APIs MUST-versionerne skal udgives uafhængigt af udgivelserne af serverprodukterne.

### 14.1 Ændringer i Breaking-API

De væsentligste ændringer omfatter:

- fjernelse af endepunkter;
- ændring af obligatoriske felter i anmodningen;
- ændring af responsens betydning;
- ændring af autentificeringssemantik;
- ændring af kontrakter vedrørende statuskoder;
- at ændre paginering, rækkefølge eller adfærd ved samtidige adgang på en måde, der ikke er kompatibel.

Ændringer, der medfører inkompatibilitet, kræver en ny MAJOR-version af API.

### 14.2 Valg af version af »API«

En »API«-specifikation BØR definere en klar mekanisme til versionsforhandling, f.eks.:

- en versioneret medietype;
- en versioneret sti;
- en eksplicit protokolhoved;
- en forhandlet kapacitetsprofil.

Mekanismen SKAL dokumenteres konsekvent og MÅ IKKE være afhængig af udokumenterede serverheuristikker.

### 14.3 Udfasningsperiode

API-funktioner i den stabile udgave BØR markeres som forældede, inden de fjernes. Meddelelsen om, at funktionen er forældet, BØR indeholde:

- den berørte funktion;
- udskiftningen;
- den tidligste version af fjernelsen;
- vejledning om migration;
- forventet støtteperiode.

## 15. Ordforråd og versionsstyring af registre

Kontrollerede ordlister, rollelister, objekttyper, identifikationsordninger og profilregistre kræver eksplicitte udviklingsregler.

En registerpost SKAL have en stabil identifikator. Visningsbetegnelser kan ændres, uden at identiteten ændres.

Tilføjelse af en registreringsdatabasepost betragtes normalt som en MINDRE ændring. Fjernelse eller omdefinering af en eksisterende identifikator betragtes som en STOR ændring, medmindre posten udtrykkeligt var angivet som eksperimentel eller havde lokal gyldighed.

Forældede poster BØR fortsat kunne opløses og SKAL angive deres erstatning, hvis en sådan findes.

## 16. Versionsstyring af overensstemmelsesprofiler

En overensstemmelsesprofil definerer en begrænset eller udvidet anvendelse af OMI til et arbejdsforløb, et fagområde, et forlag, et arkiv eller en udvekslingsdestination.

Hver profil SKAL indeholde følgende oplysninger:

- profilidentifikator;
- profilversion;
- krævede versioner afOMI-pakken og specifikationerne;
- yderligere begrænsninger;
- udvidede ordforråd;
- kompatibilitetspolitik;
- valideringsressourcer.

En profil MÅ IKKE angive, at den er kompatibel med en version af OMI, hvis grundlæggende krav den strider imod.

## 17. Udgivelser af specifikationspakker

Ved udgivelsen af en OMI-pakke SKAL der offentliggøres et udgivelsesmanifest.

I manifestet står der:

- suite-version;
- udgivelsesdato;
- status i livscyklussen;
- herunder OMI-SPEC-versioner;
- skemaversioner og hashværdier;
- ordforråds- og registerversioner;
- overensstemmelsesprofiler;
- eksempler og versioner af testsuiter;
- kendte begrænsninger;
- understøttede migrationsveje;
- forældede versioner af programpakken.

En suite-version må IKKE antyde, at hver enkelt specifikation har det samme versionsnummer.

## 18. Sammenligning af versioner

Komponenter KAN anvende uafhængige semantiske versioner. Det frarådes at tvinge alle OMI-komponenter til at dele ét og samme nummer, da dette slører det faktiske omfang af ændringerne.

Suite-manifestet sikrer sammenhæng.

Eksempel:

```yaml
suite: 1.1.0
specifications:
  OMI-SPEC-001: 1.0.1
  OMI-SPEC-002: 1.1.0
  OMI-SPEC-005: 1.0.0
schemas:
  manuscript: 1.1.0
  annotation: 1.0.2
```

## 19. Erklæringer om støtte til gennemførelsen

En implementering, der hævder at understøtte »OMI«, SKAL offentliggøre en maskinlæsbar eller klart struktureret støtteerklæring.

Erklæringen BØR indeholde:

- implementeringsnavn og -version;
- understøttede versioner af programpakken;
- understøttede formatversioner;
- understøttede profiler;
- læseevne;
- skrivefunktion;
- valideringsfunktion;
- bevarelse af ukendte udvidelser;
- kendte afvigelser;
- resultater fra testsuiten.

Følgende krav er adskilte:

- **læser OMI 1.0**;
- **skriver OMI 1.0**;
- **validerer OMI 1.0**;
- **overholder OMI 1.0 Core-profilen**;
- **bevarer udvidelser fra OMI 1.x, der ikke længere understøttes**.

En generel angivelse som f.eks. »OMI-kompatibel« er ikke tilstrækkelig til en formel overensstemmelseserklæring.

## 20. Versioner af referenceimplementeringen

Open Manuscript Studio og anden software, der vedligeholdes af OMI, følger deres egne semantiske versionssystemer.

En softwareudgivelse KAN understøtte flere versioner af OMI. I udgivelsesnoterne SKAL kompatibiliteten angives udtrykkeligt.

En ændring af Studios brugergrænseflade kræver ikke en ændring af specifikationsversionen i »OMI«, medmindre den medfører ændringer i de standardiserede data, dataudvekslingen eller den normative adfærd.

Omvendt kræver en ny version af OMI-specifikationen ikke, at alle implementeringer straks skal tage den i brug.

## 21. Versionsstyring af oversættelser

### 21.1 Normativ kilde

Medmindre andet udtrykkeligt er angivet, er engelsk det normative sprog i specifikationerne på OMI.

### 21.2 Synkroniseringsstatus

Hver officiel oversættelse SKAL angive en af følgende tilstande:

- **Synkroniseret:** afspejler den fuldstændige, identificerede kildeversion;
- **Opdatering under udarbejdelse:** kilden er ændret, og oversættelsen er ved at blive revideret;
- **Arkiveret:** oversættelsen gælder for en ældre, understøttet kildeversion;
- **Tilbagetrukket:** oversættelsen er upålidelig eller vedligeholdes ikke længere.

### 21.3 Rettelser, der udelukkende vedrører oversættelsen

En rettelse, der udelukkende ændrer oversættelsesversionen, ændrer ikke den normative specifikationsversion.

En oversættelsesrettelse MÅ IKKE i al hemmelighed ændre henvisningen til kildeversionen.

### 21.4 Konflikter

Hvis en informativ oversættelse er i strid med den normative engelske tekst, er det den engelske tekst, der er gældende. Oversættelsen BØR rettes omgående, og rettelsen skal registreres.

## 22. Versionsstyring af dokumentationssiden

Hjemmesiden kan offentliggøre aktuelle, udviklings- og arkiverede dokumentationssæt.

Stabil dokumentation SKAL være tilgængelig via varige, versionerede URL’er.

Eksempel:

```text
/docs/1.0/
/docs/1.1/
/docs/latest/
/docs/development/
```

`latest` er et praktisk alias og MÅ IKKE anvendes som den eneste arkivhenvisning.

Dokumentationen til en stabil udgivelse MÅ IKKE ændres med tilbagevirkende kraft på en måde, der ændrer den normative betydning. Rettelser udgives via errata eller en patch-udgivelse.

## 23. Eksempler og testopstillinger

Eksempler og overensstemmelsesprøveopstillinger SKAL angive den version af »OMI«, som de er rettet mod.

En testopsætning, der ændrer den forventede normative adfærd, kræver en passende ændring af specifikationen eller af versionsnummeret for testsuiten.

Eksempler MÅ IKKE betragtes som normative, når de er i modstrid med den normative tekst eller det normative skema. Sådanne modstridigheder er fejl, der skal rettes.

## 24. Release-kandidater og forhåndsudgivelser

Identifikatorer fra forududgivelsen KAN anvendes:

```text
1.0.0-alpha.1
1.0.0-beta.2
1.0.0-rc.1
```

Deres betydning er:

- **alpha:** ufuldstændig, foreløbig implementering eller integration af specifikationer;
- **beta:** en version med fuld funktionalitet, hvor der stadig er uafklarede problemer vedrørende gennemgang eller kompatibilitet;
- **rc:** release candidate, der forventes at blive den endelige version, medmindre der opdages alvorlige fejl.

Præudgivelsesversioner MÅ IKKE fremstilles som stabile udgivelser.

En forududgivelse KAN indeholde ændringer inden den endelige udgivelse. Ændringer mellem udgivelseskandidater BØR begrænses til fejlrettelser og korrektioner af kompatibilitetsproblemer, der forhindrer udgivelsen.

## 25. Opret metadata

Metadata for en build KAN identificere en bestemt implementeringsbuild uden at ændre kompatibiliteten:

```text
1.0.0+build.42
1.0.0+20260806.sha.abc1234
```

Metadata i byggeriet MÅ IKKE ændre den normative fortolkning.

## 26. Udfasning

En udfasning betyder, at en funktion eller version stadig anerkendes, men ikke bør anvendes i nye projekter.

En meddelelse om udfasning SKAL indeholde følgende oplysninger:

- det udfasede element;
- den version, hvor den blev udfaset;
- årsagen;
- den anbefalede erstatning;
- kendte overvejelser vedrørende migration;
- den tidligste version, hvor en fjernelse kan finde sted.

Det faktum, at en funktion er udfaset, betyder ikke i sig selv, at en kompatibel processor kan holde op med at læse eksisterende indhold.

## 27. Fjernelse

En stabil funktion fjernes kun i en MAJOR-version, medmindre det er nødvendigt at fjerne den med det samme for at afhjælpe en alvorlig sikkerheds-, juridisk eller integritetsrisiko.

En nødudtagning kræver:

- en offentlig meddelelse;
- en dokumenteret begrundelse;
- konsekvensanalyse;
- vejledning i bevarelse;
- et alternativ, hvor det er muligt;
- en eksplicit undtagelsespost.

## 28. Erstatning

En forældet version forbliver en del af det historiske arkiv.

På publikationssiden SKAL følgende oplysninger fremgå:

- den nye version;
- om der er behov for migration;
- om den gamle version fortsat understøttes;
- den dato, hvor supporten ophører, hvis denne er angivet.

Artefakter med versionsnummer må IKKE slettes alene af den grund, at de er blevet erstattet.

## 29. Støttepolitik

Før version 1.0 af OMI ydes support efter bedste evne og dokumenteres for hver udgivelse.

Efter »OMI« 1.0 BØR projektet fortsat omfatte:

- den nuværende stabile MAJOR-serie;
- mindst én dokumenteret migrationsvej fra den umiddelbart forudgående stabile MAJOR-gren;
- sikkerheds- og integritetsmeddelelser for de understøttede versioner, der er væsentligt berørt;
- arkiverede skemaer og dokumentation for alle stabile udgivelser.

I en særskilt vedligeholdelsesplan KAN der fastlægges nøjagtige vedligeholdelsesperioder.

## 30. Ændringslog

Hver eneste udgivelse SKAL indeholde en changelog.

Ændringsloggen SKAL skelne mellem:

- ændringer, der medfører inkompatibilitet;
- kompatible tilføjelser;
- rettelser;
- forældede funktioner;
- flytninger;
- sikkerhedsændringer;
- krav til migration;
- ændringer i skemaet;
- ændringer, der udelukkende vedrører redaktionelle ændringer.

En optegnelse i ændringsloggen BØR henvise til den relevante sag, det relevante forslag, den relevante pull-anmodning eller den relevante beslutningsprotokol.

## 31. Indvandringsdokumentation

En udgivelse, der indeholder ændringer, der bryder med tidligere versioner, SKAL indeholde dokumentation om overgangen.

Vejledningen om migration BØR omfatte:

- påvirkede strukturer og adfærd;
- før-og-efter-eksempler;
- automatiserede transformationsregler;
- begrænsninger;
- forventet tab af oplysninger;
- valideringstrin;
- tilbageskridtsstrategi;
- håndtering af udvidelser;
- krav til herkomst.

## 32. Forhandling om version

Når systemer dynamisk udveksler »OMI«-indhold, BØR de forhandle sig frem til funktioner i stedet for at antage, at der er understøttelse ud fra produktnavne.

Forhandlingerne kan omfatte:

- understøttede versioner af programpakken;
- understøttede formatintervaller;
- profiler;
- udvidelser;
- mediatyper;
- valideringsniveauer;
- asymmetri mellem læsning og skrivning.

Et system SKAL svigte på en sikker måde, når der ikke kan opnås enighed om en kompatibel version.

## 33. Versionsintervaller

Implementeringer KAN angive versionsintervaller.

Eksempler:

```text
>=1.0.0 <2.0.0
1.1.x
1.0.0–1.2.3
```

En rækkeviddeangivelse betyder, at implementeringen er udviklet og testet for den pågældende rækkevidde. Det MÅ IKKE udledes udelukkende på baggrund af godkendelsen af skemaet.

Når det gælder arkivmetadata, foretrækkes præcise versioner frem for versionsintervaller.

## 34. Reproducerbarhed og integritet

Offentliggjorte udgivelsesartefakter BØR indeholde kryptografiske hashværdier.

En stabil udgave BØR kunne gengives ud fra kildekoden med tag og de dokumenterede kompileringsvejledninger.

Tags, der anvendes til stabile udgivelser, SKAL være uforanderlige.

Hvis en artefakt skal udskiftes på grund af en fejl i en publikation eller emballage, SKAL den nye artefakt tildeles en unik revisions- eller udgivelsesversion, og den oprindelige hændelse SKAL dokumenteres.

## 35. Git-tags og -grene

Anbefalede tags omfatter:

```text
omi-suite-v1.0.0
omi-spec-005-v1.1.0
schema-manuscript-v1.0.2
```

Udviklingsgrene og pull-anmodninger er ikke versioner.

Standardgrenen repræsenterer den igangværende udvikling og KAN afvige fra den seneste stabile udgave.

## 36. Datoer og versioner

Udgivelsesdatoer giver en historisk sammenhæng, men erstatter ikke semantiske versioner.

Dato-baserede identifikatorer KAN indgå i metadata og øjebliksbilleder, men normativ kompatibilitet SKAL angives via den semantiske version.

## 37. Beslutningsprocedure

Når det er uklart, hvor meget versionen skal hæves, skal redaktørerne vurdere:

1. Gør ændringen, at tidligere gyldigt indhold ikke længere er gyldigt?
2. Ændrer det den eksisterende normative betydning?
3. Kan ældre kompatible implementeringer behandle det nye indhold på en sikker måde?
4. Kræver det en migrering?
5. Indfører det en ny obligatorisk funktion?
6. Har det indflydelse på overensstemmelsesresultaterne?
7. Ændrer det den udadtil observerbare adfærd API?
8. Er ændringen udelukkende redaktionel eller rettende?

Hvis en rimelig, standardkonform implementering kan medføre, at indholdet ikke længere fungerer eller fortolkes forkert uden at give nogen fejlmeddelelse, betragtes ændringen som en kompatibilitetsbrud og kræver en MAJOR-inkrementering eller en MINOR-inkrementering i fasen før version 1.0, ledsaget af eksplicit dokumentation om kompatibilitetsbruddet.

## 38. Eksempler

### 38.1 Tilføjelse af et valgfrit sprogmærke for abstrakt

Ændring: Der tilføjes valgfri metadata af typen »`language`« til et abstrakt objekt.

Resultat efter 1.0: MINDRE, forudsat at ældre forbrugere kan ignorere eller bevare det.

### 38.2 Indførelse af obligatorisk »ORCID« for alle forfattere

Ændring: Det tidligere valgfrie »ORCID« bliver nu obligatorisk.

Resultat: VÆSENTLIG, da eksisterende dokumenter og arbejdsgange bliver ugyldige.

### 38.3 Rettelse af en forkert stavet egenskab i et eksempel

Ændring: I eksemplet blev der anvendt `contributer`, mens specifikationen allerede krævede `contributor`.

Resultat: PATCH.

### 38.4 Omdøbning af `references` til `bibliography`

Ændring: Den serialiserede egenskab omdøbes, og den gamle egenskab afvises.

Resultat: STOR.

Hvis begge egenskaber forbliver accepterede under en dokumenteret overgang, kan indførelsen være af MINDRE omfang, mens den endelige fjernelse fortsat er af STØRRE omfang.

### 38.5 Tilføjelse af en ny henvisningsrelation

Ændring: »`qualifies`« tilføjes til et åbent register, hvor forbrugerne skal kunne håndtere ukendte værdier.

Resultat: MINDRE.

Hvis opregningen var lukket, og ukendte værdier var ugyldige, kan ændringen kræve MAJOR.

### 38.6 Afklaring af rækkefølgen for løsning af ankerproblemer

Ændring: Teksten er præciseret, så den stemmer overens med den eneste adfærd, der er tilladt ifølge den eksisterende algoritme og de eksisterende test.

Resultat: PATCH.

Hvis der findes to rimelige, modstridende fortolkninger af en implementering, kan valget af den ene medføre funktionsfejl og kræve en MAJOR-version.

## 39. Rekord for mindste frigivelse

Hver udgivelsesrapport fra OMI SKAL indeholde:

- komponent- eller programpakkenavn;
- version;
- status i livscyklussen;
- udgivelsesdato;
- kanonisk URL;
- kildekode-tag eller commit;
- ændringslog;
- kompatibilitetserklæring;
- erklæring om migration;
- hashværdier for artefakter, hvor det er relevant;
- oplysninger om erstatning;
- kendte problemer.

## 40. Ændringer i politikken

Denne versionspolitik er selv underlagt en versionsstyring.

En ændring, der ændrer betydningen af eksisterende forpligtelser vedrørende offentlige versioner, kræver en omhyggelig gennemgang og MÅ IKKE med tilbagevirkende kraft svække de garantier, der allerede er givet for stabile udgivelser.

Præciseringer af retningslinjerne kan udgøre ændringer på patch-niveau. Nye kompatible styringsprocedurer kan udgøre mindre ændringer. Grundlæggende ændringer af kompatibilitetsforpligtelserne kræver en ny hovedversion af retningslinjerne.

## 41. Resumé

OMI anvender semantiske versioner til at angive kompatibilitet på tværs af specifikationer, skemaer, formater, API'er, implementeringer, profiler og oversættelser.

De grundlæggende principper er:

- versionerne er eksplicitte og maskinlæsbare;
- Offentliggjorte versionerede artefakter er uforanderlige;
- Væsentlige ændringer fremhæves og ledsages af vejledning til migrering;
- skemaer og dokumenter angiver de nøjagtige regler, de anvender;
- Produktversioner skal ikke forveksles med overensstemmelse med specifikationerne;
- Stabile udgivelser forbliver arkiveret og kan citeres;
- påstande om kompatibilitet skal være præcise og kunne efterprøves;
- Oversættelserne angiver den normative kildeversion;
- Suite-manifestet samordner komponenter med uafhængige versioner.

Disse regler gør det muligt for OMI at udvikle sig, samtidig med at videnskabelige dokumenter, tilliden til implementeringen og den langsigtede interoperabilitet bevares.
