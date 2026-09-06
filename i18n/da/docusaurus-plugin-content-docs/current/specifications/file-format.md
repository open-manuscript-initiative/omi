---
id: file-format
title: OMI-SPEC-320 — Filformat
sidebar_label: Filformat
description: Normative logiske regler for repræsentation, syntaksanalyse, serialisering, validering, udvidelse, udveksling af historik og migrering af »JSON«-manuskripter, der er udarbejdet i henhold til standarden »OMI«.
keywords:
  - Open Manuscript Initiative
  - OMI
  - manuscript file format
  - JSON Schema
  - interoperability
  - preservation
---

# OMI-SPEC-320 — Filformat

## Dokumentmetadata

| Felt | Værdi |
|---|---|
| Identifikator | `OMI-SPEC-320` |
| Titel | Filformat |
| Version | `0.2.0` |
| Status | Udkast |
| Dokumenttype | Normativ |
| Normativt sprog | Engelsk |
| Redaktører | OMI-vedligeholdere |
| Senest opdateret | 05.09.2026 |
| Ældre identifikator | `OMI-SPEC-011` |
| Erstatning | `OMI-SPEC-320@0.1.0` |
| Erstattet af | Ingen |
| Afhænger af | `OMI-SPEC-100`, `OMI-SPEC-120`, `OMI-SPEC-140`, `OMI-SPEC-160`, `OMI-SPEC-180` |
| Anvendes af | `OMI-SPEC-230`, `OMI-SPEC-330`, `OMI-SPEC-340`, `OMI-SPEC-350` |
| Skema | [`omi-manuscript-0.2.schema.json`](/schemas/omi-manuscript-0.2.schema.json) |
| Medietype | `application/vnd.openmanuscript+json` (foreløbig) |
| Filtypenavn | `.omi.json` |
| Profiler | Core Snapshot; History Exchange; Lossless Round Trip |
| Status for gennemførelse | [OMI Implementation Status Matrix](../governance/implementation-status-matrix.md) |
| Problemsporingssystem | Problemer i Open Manuscript Initiative-repositoriet |

## 1. Resumé

Denne specifikation definerer den portabel logiske repræsentation af et manuskript fra Open Manuscript Initiative. Den specificerer et UTF-8-JSON-dokument, en versionsstyret identifikationskonvolut, obligatoriske felter i manuskriptet, ordnede semantiske samlinger, referencer, udvidelsesdata, valgfri udveksling af historik, adfærd ved parsning og serialisering, lagdelt validering, diagnostik, bevarelse af ukendte felter samt migrationsposter.

Formatet repræsenterer en akademisk tilstand snarere end et sidelayout eller en redaktørs kørselstilstand. En implementering kan gemme det samme manuskript i en database, en hændelseslog, flere filer eller en anden intern form, men et eksporteret OMI-manuskript, der overholder denne specifikation, har den samme observerbare JSON-semantik.

Denne specifikation definerer bevidst ikke det fysiske arkiv »`.omi`«, ZIP-filens opbygning, kontrolsummer, komprimering eller regler for pakkestier. Disse emner hører hjemme i [OMI-SPEC-330 — Container Architecture](./container-architecture.md). En container kan indeholde et dokument, der overholder denne specifikation, som en del af sin indhold.

## 2. Status for dette dokument

Dette dokument er et **udkast** til en specifikation af standarden »Open Manuscript Initiative«.

Version `0.2.0` er det første udkast til et filformat, der er fuldt ud udformet som skabelon, og som indeholder et offentliggjort »JSON«-skema, overensstemmelsestests, eksplicitte behandlingsregler og stabile kravidentifikatorer. Det erstatter det ufuldstændige udkast `0.1.0`, som kombinerede aspekter vedrørende det logiske format og den fysiske beholder uden at definere interoperabel parsning eller valideringsadfærd.

Egenskabsnavne, profiler, skema-begrænsninger og migrationsregler kan stadig ændres på en måde, der medfører inkompatibilitet, inden version 1.0. En overensstemmelseserklæring SKAL angive netop denne specifikationsversion eller en uforanderlig revision af repositoriet.

Det offentliggjorte skema er normativt for strukturelle begrænsninger. Kravene i tekstdelen regulerer semantiske forhold, databehandling, sikkerhed, bevaring og round-trip-adfærd, som et JSON-skema ikke kan udtrykke. Når der er uoverensstemmelse mellem skemaet og dette dokument, udgør uoverensstemmelsen en fejl i specifikationen, og implementeringer BØR rapportere den; indtil fejlen er rettet, gælder det krav i tekstdelen, der har den mest specifikke kravidentifikator.

## 3. Overensstemmelse

### 3.1 Normative udtryk

Nøgleordene **SKAL**, **MÅ IKKE**, **KRÆVES**, **BØR**, **BØR IKKE**, **KAN** og **VALGFRIT** skal fortolkes som beskrevet i BCP 14, når – og kun når – de er skrevet med store bogstaver.

Hvert normativt krav i dette dokument har en fast identifikator i form af `REQ-FMT-NNN`. En testrapport, en problemstilling, en undtagelse eller en implementeringserklæring BØR angive de relevante identifikatorer.

### 3.2 Overensstemmelsesklasser

Denne specifikation definerer fem implementeringsklasser:

- **Godkendt producent:** opretter eller eksporterer et manuskriptdokument i formatet »OMI«.
- **Kompatibel forbruger:** analyserer, importerer, præsenterer, indekserer eller omdanner et manuskriptdokument fra OMI.
- **Valideringsværktøj:** vurderer et dokument og returnerer strukturerede fejlmeldinger.
- **Konverteringsværktøj:** konverterer et dokument fra én angivet formatversion til en anden.
- **Kompatibel tabsløs processor:** læser og skriver et dokument, samtidig med at den bevarer alle understøttede og ikke-understøttede dataelementer, som den ikke bevidst ændrer.

En implementering KAN hævde at omfatte mere end én klasse. En overensstemmende implementering SKAL opfylde alle krav, der gælder for de klasser og profiler, den hævder at omfatte.

### 3.3 Overensstemmelsesprofiler

En overensstemmelseserklæring SKAL angive mindst én af følgende profiler.

#### Oversigt over kernen

Core Snapshot-profilen udveksler én aktuel tilstand af et manuskript. Den kræver rodidentifikationskonvolutten, manuskriptets identitet, sprog, titel, afsnitthierarki og tidsstempler. Den indebærer ikke, at der findes en revisionshistorik.

#### Historieudveksling

History Exchange-profilen udveksler den aktuelle tilstand sammen med en overførbar revisionshistorik, der er reguleret af `OMI-SPEC-160`. Den kræver en eksplicit erklæring om historikkens fuldstændighed, en hovedrevision samt internt konsistente revisionslinks.

#### Tabsfri tur-retur

Profilen »Lossless Round Trip« gælder for processorer, der muligvis ikke understøtter alle udvidelser eller fremtidige felter. Sådanne processorer bevarer ukendte data uændret og rapporterer enhver anmodet operation, der ville fjerne eller omfortolke disse data.

### 3.4 Overensstemmelseserklæring

En overensstemmelseserklæring BØR indeholde følgende:

- implementeringsnavn og -version;
- `OMI-SPEC-320` version;
- implementeringsklasse eller -klasser;
- den eller de angivne profiler;
- understøttet format- og versionsområde;
- understøttede navneområder for udvidelser;
- den maksimalt tilladte indtastningsstørrelse, indlejringsdybde og samlingsstørrelser;
- validerings- og migreringsfunktioner;
- den anvendte testsuite eller testversion;
- kendte situationer, hvor der kan opstå datatab.

**REQ-FMT-001:** En producent SKAL udstede et »JSON«-objekt på øverste niveau, der overholder kravene til identifikation, datamodel og serialisering i denne specifikation.

**REQ-FMT-002:** En bruger SKAL fastslå det angivne format og den angivne version af »OMI«, før vedkommende fortolker felterne i manuskriptet.

**REQ-FMT-003:** En valideringsinstans SKAL vurdere syntaksen i *JSON*, det versionsspecifikke skema, de gældende semantiske begrænsninger samt alle deklarerede profiler.

**REQ-FMT-004:** Et migreringsværktøj SKAL bevare den oprindelige indtastning og generere en eksplicit migreringspost, før det konverterede dokument præsenteres som værende ækvivalent med den oprindelige indtastning.

**REQ-FMT-005:** En tabsfri processor SKAL bevare ukendte udvidelseselementer og ukendte uændrede elementer, eller den SKAL stoppe og angive præcis, hvilke data der ville gå tabt.

## 4. Anvendelsesområde

Denne specifikation definerer:

- en »single-file«-JSON-repræsentation af manuskriptets logiske tilstand;
- identifikation af format og forhandling af version;
- almindelige regler for JSONer, strenge, tal, tidsstempler, sprogkoder, URI’er og identifikatorer;
- de grundlæggende felter i manuskripter og konventioner for transportable samlinger;
- en velordnet afsnit- og blokstruktur;
- henvisninger mellem adresserbare videnskabelige objekter;
- logiske metadata og referencer vedrørende aktiver;
- valgfri udveksling af historik i realtid;
- producent, forbruger, validator, migrator og adfærd ved tabsløs behandling;
- strukturelle, referentielle, semantiske, profil- og politikvalideringslag;
- maskinlæsbare diagnoseregistreringer;
- udvidelsesnavneområder og håndtering af ukendte felter;
- deterministisk serialisering og valgfri kanonisering;
- rapportering om kompatibilitet og migrering;
- krav til sikkerhed, privatlivsbeskyttelse, bevaring, tilgængelighed og internationalisering.

### 4.1 Uden for anvendelsesområdet

Denne specifikation definerer ikke:

- den fysiske »`.omi`«-container eller ZIP-struktur;
- pakkestier, komprimering, kontrolsummer, signaturer eller kryptering;
- et databaseskema eller en implementering af en begivenhedsdatabase;
- redigeringskomponentens tilstand, markeringstilstand, fortrydelsesstakke, cacher eller sessionsdata;
- sidens geometri, paginering, linjeskift eller publikationens formatering;
- den fulde semantik for afsnit, blokke, aktører, henvisninger, kommentarer eller revisioner;
- en protokol til samarbejde i realtid;
- adgangskontrolpolitik;
- politik for fjernhentning af aktiver;
- et universelt format til redigering af rich text i træstruktur;
- PDF, HTML, EPUB, DOCX, JATS, XML, Crossref XML eller DataCite XML.

Disse krav er defineret i de relevante specifikationer fra OMI vedrørende semantik, arbejdsgange, publikation, API eller containere.

## 5. Terminologi

Dokumentet »[OMI Terminology and Definitions](../governance/terminology.md)« finder anvendelse.

### 5.1 Dokumentet »OMI«

Et UTF-8-JSON-dokument, hvis værdi på øverste niveau er et objekt, hvis værdi for »`omi.format`« er »`manuscript`«, og hvis deklarerede formatversion er reguleret af denne specifikation.

### 5.2 Formatversion

Den semantiske version i `omi.version`, der angiver reglerne for filformatet og skemaet. Det er ikke manuskriptets revisionsnummer, applikationsversionen, OMI-pakkens version, containerens version eller publikationens udgave.

### 5.3 Kernemedlem

Et »JSON«-objektelement, der er defineret i denne specifikation eller i en »OMI«-specifikation, der er nævnt i `omi.specifications`.

### 5.4 Forlængelsesstykke

Et medlem i objektet »`extensions`«, hvis navn er en absolut navneplads-URI eller -URN, og hvis værdi styres af ejeren af den pågældende navneplads.

### 5.5 Ukendt medlem

Et medlem, som en bestemt processor ikke forstår. Et medlem kan være kendt i formatet, men ukendt for en ældre implementering.

### 5.6 Adresserbart objekt

Et manuskriptobjekt med en `id`, der kan henvises til uafhængigt, herunder et afsnit, en blok, en kommentar, en henvisning, en bibliografisk post, et aktiv, en aktør, et bidrag, en »tombstone« eller en revision.

### 5.7 Øjebliksbillede

En repræsenteret manuskriptversion. Et øjebliksbillede kan angive, hvilken revision det repræsenterer, men angiver ikke i sig selv den fulde revisionshistorie.

### 5.8 Oprindelige indtastninger

Den nøjagtige byte-sekvens, som en forbruger eller migrator accepterer inden parsning, reparation, normalisering eller konvertering.

### 5.9 Karantæne

En sikker tilstand, hvor en implementering opbevarer et dokument, men ikke behandler det som et vellykket importeret, redigerbart eller eksekverbart manuskript.

## 6. Designprincipper

Filformatet følger disse principper:

1. **Semantisk kilde:** Manuskriptet er en kilde til publikationer, ikke en gengivelse af et bestemt sidelayout.
2. **Eksplicit identitet:** Identiteterne for format, skema, manuskript og adresserbart objekt udledes aldrig alene ud fra et filnavn.
3. **Kontrollerbar repræsentation:** Kerne-dokumentet er almindelig UTF-8-JSON.
4. **Uafhængighed af implementeringen:** Den overførbare tilstand udelukker redigeringsprogramspecifikke kørselstilstande og kontotilstande.
5. **Validering i flere lag:** syntaks, struktur, referencer, semantik, profiler og lokale retningslinjer kan skelnes fra hinanden.
6. **Fremadkompatibel bevaring:** ukendte data isoleres, bevares og omfortolkes aldrig uden varsel.
7. **Migrering med dokumentation:** konverteringen er eksplicit, reproducerbar og tager højde for eventuelle tab.
8. **Containeropdeling:** Den logiske JSON-semantik afhænger ikke af arkivets struktur.
9. **Stabil objektidentitet:** Referencer bruger identifikatorer i stedet for den viste position eller et array-indeks.
10. **Sikker som standard:** Parsningen udfører ikke indholdet og henter ikke eksterne ressourcer uden at give besked.

## 7. Oversigt over modellen

Et manuskriptdokument i OMI-format består af fem logiske områder:

| Område | Repræsentative medlemmer | Formål |
|---|---|---|
| Identifikation | `schema`, `omi` | Vælger dette format, denne version, disse profiler og de tilhørende specifikationer |
| Manuskriptets status | `id`, `locale`, `title`, `sections` | Giver et billede af den aktuelle videnskabelige situation |
| Relaterede objekter | `agents`, `contributions`, `annotations`, `citations`, `assets` | Indeholder adresserbare underordnede objekter og relationer |
| Historie | `versioningModelVersion`, `headRevisionId`, `revisionHistory` | Udveksler eventuelt revisionsoplysninger |
| Udvidelser | `extensions` | Indeholder data uden for kernefunktionen med navneområde |

Rodobjektet udgør ét logisk dokument. En beholder må kun udskille udvalgte samlinger i separate dele, hvis `OMI-SPEC-330` definerer, hvordan disse dele samles igen til den samme logiske model. Samlingen må IKKE ændre dokumentets betydning.

## 8. Almindelige regler for repræsentation

### 8.1 JSON og tegnkodning

**REQ-FMT-006:** Et manuskriptdokument i formatet »OMI« SKAL være et gyldigt »JSON«-dokument, der er kodet i UTF-8. Producenter MÅ IKKE indsætte en byte-order-mark. Modtagere KAN acceptere en byte-order-mark med henblik på gendannelse, men SKAL udsende en advarsel.

**REQ-FMT-007:** Navnene på medlemmerne i et JSON-objekt SKAL være unikke inden for hvert objekt. En bruger SKAL opdage dublerede navne før eller under parsningen og MÅ IKKE uden videre anvende en »først-til-mølle«- eller »sidst-til-mølle«-regel.

**REQ-FMT-008:** Værdien på øverste niveau JSON SKAL være et objekt. JSON `null`, arrays, strings, tal og booleske værdier er ugyldige som værdi på øverste niveau.

**REQ-FMT-009:** Strenge SKAL indeholde velformede Unicode-skalarværdier. Producenter MÅ IKKE udsende uparrede UTF-16-surrogatkodepunkter.

Rækkefølgen af objektmedlemmer har ingen semantisk betydning. Rækkefølgen i en array har semantisk betydning, medmindre den definerende OMI-specifikation udtrykkeligt angiver, at arrayet er uordnet.

### 8.2 Tal

**REQ-FMT-010:** En producent MÅ IKKE udsende værdierne `NaN`, positiv eller negativ uendelighed eller et andet numerisk token, der ikke er et tal i formatetJSON.

**REQ-FMT-011:** Et heltal, der er repræsenteret som et tal i formatet »JSON«, SKAL ligge inden for det interoperable interval fra `-(2^53)+1` til `(2^53)-1`. En værdi, der kræver større præcision, SKAL repræsenteres som en streng, hvis semantik er defineret af det relevante felt.

Præcise identifikatorer, kontrolsummer, decimaltal, sidehenvisninger og eksterne numeriske koder BØR være strenge, medmindre den gældende specifikation udtrykkeligt kræver, at dJSON-tal.

### 8.3 Tilstedeværelse, null-værdier og tomme værdier

**REQ-FMT-012:** Fravær betyder, at en værdi ikke er angivet eller ikke er relevant. `null` MÅ KUN anvendes, hvor det relevante skema udtrykkeligt tillader det. En tom streng MÅ IKKE anvendes som erstatning for en manglende obligatorisk værdi.

En tom matrix betyder en kendt tom samling. En producent BØR generere en tom matrix for en obligatorisk samling uden elementer og BØR udelade en valgfri samling, hvis tilstand er ukendt eller ikke repræsenteret.

### 8.4 Tidsstempler

**REQ-FMT-013:** Et tidsstemplingsfelt, der er omfattet af denne specifikation, SKAL være en dato-tid i henhold til RFC 3339 med en eksplicit UTC-betegnelse eller en numerisk tidsforskel. En dato uden tidszone MÅ IKKE anvendes til at angive et bestemt tidspunkt.

Producenter BØR angive UTC-tidsstempler med store bogstaver: `T` og `Z`. Forbrugere SKAL sammenligne de parsede tidsangivelser i stedet for de rå tidsstempelstrenge.

### 8.5 Sprogtags

**REQ-FMT-014:** Et sprogfelt SKAL indeholde et velformuleret BCP 47-sprogkode. Der skelnes ikke mellem store og små bogstaver i koderne; udbydere BØR anvende den anbefalede skrivemåde uden at ændre kodens betydning.

### 8.6 URI’er

**REQ-FMT-015:** Et felt, der er defineret som en URI, SKAL indeholde en absolut URI, medmindre det pågældende felt udtrykkeligt tillader en relativ henvisning. En bruger SKAL kun opslå relative henvisninger i forhold til en udtrykkeligt angivet basis-URI.

### 8.7 Identifikatorer

**REQ-FMT-016:** Hvert adresserbart objekt SKAL have en ikke-tom streng `id`. Identifikatoren SKAL være entydig inden for manuskriptets identitetsområde og SKAL forblive uændret, så længe det videnskabelige objekt bevarer sin identitet.

**REQ-FMT-017:** En implementering MÅ IKKE genbruge identifikatoren for et slettet objekt til et andet objekt. Hvor sporbarhed ved sletning er angivet, SKAL identifikatoren fortsat være repræsenteret ved en »tombstone« eller tilsvarende historisk dokumentation.

Identifikatorer er uigennemsigtige. En bruger MÅ IKKE udlede objekttype, ejerskab, placering, revisionsrækkefølge eller adgangsrettigheder ud fra identifikatorens skrivemåde.

## 9. Rodobjekt for manuskriptet

### 9.1 Påkrævede medlemmer

Core Snapshot-profilen kræver følgende rodmedlemmer:

| Medlem | Type | Kardinalitet | Betydning |
|---|---|---:|---|
| `schema` | streng-URI | 1 | Uforanderlig skemaidentifikator for denne formatversion |
| `omi` | objekt | 1 | Format og afhængighedskonvolut |
| `id` | streng | 1 | Manuskript-id |
| `locale` | streng | 1 | Primært BCP 47-sprogmærke |
| `title` | streng | 1 | Manuskriptets titel (må ikke være tom) |
| `sections` | array | 1 | Ordnede afsnit på øverste niveau |
| `createdAt` | streng | 1 | Oprettelsestidspunkt |
| `updatedAt` | streng | 1 | Tidspunktet, hvor den angivne tilstand sidst blev opdateret |

**REQ-FMT-018:** En Core Snapshot-producent SKAL generere alle påkrævede rodmedlemmer og SKAL overholde det offentliggjorte versionsspecifikke skema.

**REQ-FMT-019:** `updatedAt` SKAL angive et tidspunkt, der er lig med eller senere end `createdAt`. En valideringsenhed SKAL rapportere en semantisk fejl, hvis dette ikke er tilfældet.

### 9.2 Anbefalede og valgfrie medlemmer

Følgende rodmedlemmer er defineret med henblik på interoperabel udveksling. Deres detaljerede objektsemantik fremgår af de gældende specifikationer for »OMI«.

| Medlem | Type | Rækkefølge | Bemærkninger |
|---|---|---|---|
| `subtitle` | streng | ikke relevant | Valgfri undertekst |
| `abstract` | streng eller bærbart indholdsobjekt | ikke relevant | Resumé uden publikationslayout |
| `keywords` | strengarray | væsentligt | Forfatterens rækkefølge, når angivet |
| `agents` | en række objekter | uden autoritet | Identitetsobjekter fra `OMI-SPEC-150` |
| `contributions` | objektarray | er relevant, når rollernes rækkefølge er angivet | relationer mellem agenter og objekter |
| `tombstones` | objektarray | ikke kronologisk, medmindre andet er angivet | Bevis for sletning |
| `annotations` | objektarray | er relevant, når præsentationsrækkefølgen er angivet | Annotationsobjekter fra `OMI-SPEC-130` |
| `bibliographicRecords` | objektarray | ikke i citatorden | Oplysninger fra `OMI-SPEC-220` |
| `citations` | objektarray | af betydning, når rækkefølgen for henvisninger er angivet | Fundet på `OMI-SPEC-210` |
| `citationClusters` | objektarray | væsentlig | Ordnede citatgrupper |
| `crossReferences` | objektarray | af betydning, når præsentationsrækkefølgen er angivet | Semantiske interne referencer |
| `assets` | objektarray | ikke-visningsrækkefølge | Logiske aktivmetadata |
| `extensions` | objekt | ikke relevant | Værdier for udvidelser med navnerum |

**REQ-FMT-020:** Eksporterede filer til bærbare enheder MÅ IKKE indeholde adgangskoder, adgangstokener, opdateringstokener, sessionsidentifikatorer, private nøgler, ikke-offentliggjorte stier til det lokale filsystem eller andre legitimationsoplysninger.

**REQ-FMT-021:** Bærbare eksportfiler MÅ IKKE betragte redigeringsmarkeringer, markører, visningsvinduets tilstand, fortrydelsesstakke, cacher, midlertidige valideringsmeddelelser eller kontospecifikke brugergrænsefladeindstillinger som den kanoniske tilstand for manuskriptet.

### 9.3 Eksempel på en konvolut

```json
{
  "schema": "https://openmanuscript.org/schemas/omi-manuscript-0.2.schema.json",
  "omi": {
    "format": "manuscript",
    "version": "0.2.0",
    "profiles": ["core-snapshot"],
    "specifications": {
      "OMI-SPEC-100": "0.1.0",
      "OMI-SPEC-120": "0.1.0",
      "OMI-SPEC-140": "0.1.0"
    }
  },
  "id": "urn:uuid:d3c23cd5-ffb8-4f16-8db5-68e32fa78d82",
  "locale": "en",
  "title": "A portable manuscript",
  "sections": [],
  "createdAt": "2026-09-05T08:00:00Z",
  "updatedAt": "2026-09-05T08:00:00Z"
}
```

## 10. Identifikation af format og aftale om version

### 10.1 Skemaidentifikator

I denne version SKAL `schema` have nøjagtig denne værdi:

```text
https://openmanuscript.org/schemas/omi-manuscript-0.2.schema.json
```

**REQ-FMT-022:** En producent SKAL angive den uforanderlige kanoniske skema-URI for den nøjagtige formatversion. Den MÅ IKKE angive en URI med dynamisk `latest` som den autoritative skemaidentifikator.

En bruger KAN anvende en pålidelig lokal kopi af skemaet og MÅ IKKE kræve netværksadgang alene af den grund, at dokumentet indeholder en HTTPS-skema-URI.

### 10.2 »OMI«-konvolut

`omi`-objektet har følgende medlemmer:

| Medlem | Type | Kardinalitet | Regel |
|---|---|---:|---|
| `format` | streng | 1 | Præcis værdi `manuscript` |
| `version` | semantic-version (streng) | 1 | Den nøjagtige version af filformatet, som producenten har angivet |
| `profiles` | strengarray | 1 | En eller flere deklarerede overensstemmelsesprofiler |
| `specifications` | objekt | 1 | OMI kortlægning mellem specifikationsidentifikator og præcis version |
| `generator` | objekt | 0..1 | Ikke-autoritativ producentidentifikation |

De registrerede profiltokens i version `0.2.0` er:

| Token | Profil |
|---|---|
| `core-snapshot` | Core Snapshot |
| `history-exchange` | History Exchange |
| `lossless-round-trip` | Tabsfri rundtur |

**REQ-FMT-023:** `omi.format` SKAL svare til `manuscript`, og `omi.version` SKAL svare nøjagtigt til de regler, der anvendes til serialisering af dokumentet.

**REQ-FMT-024:** `omi.profiles` SKAL indeholde `core-snapshot`, MÅ IKKE indeholde gentagne tokens og SKAL angive alle yderligere profiler, hvis påkrævede data producenten hævder at levere.

**REQ-FMT-025:** `omi.specifications` SKAL knytte hver eneste gældende OMI-specifikation, der anvendes i dokumentet, til en præcis semantisk version. Der MÅ IKKE anvendes et interval, et grennavn, et flytningsmærke eller en identifikator uden versionsangivelse.

Det valgfrie »`generator`«-objekt KAN indeholde »`name`«, »`version`« og »`uri`«. En bruger MÅ IKKE ændre valideringen eller tilliden alene på grund af, at en bestemt generator er angivet.

### 10.3 Håndtering af versioner

**REQ-FMT-026:** En klient, der understøtter den angivne formatversion, SKAL anvende skemaet og reglerne for den pågældende version og ikke den nyeste version, som klienten kender til.

**REQ-FMT-027:** En klient, der ikke understøtter den angivne hovedversion, SKAL gemme eller sætte den oprindelige indtastning i karantæne og MÅ IKKE vise dokumentet som et vellykket importeret, redigerbart manuskript.

**REQ-FMT-028:** En forbruger, der støder på en nyere mindre version eller patch-version, KAN kun fortsætte, hvis den angivne kompatibilitetspolitik tillader det. Den SKAL bevare ukendte data og vise en fejlmelding, der angiver den ikke-verificerede version.

## 11. Manuskriptets opbygning

### 11.1 Afsnit

`sections` er den rækkefølge, som manuskriptets afsnit på øverste niveau skal følge. Hvert afsnit skal indeholde:

- `id`: stabil objektidentifikator;
- `title`: afsnitstitel, som KUN må være tom, hvis dokumentmodellen tillader et afsnit uden titel;
- `blocks`: ordnet array af indholdsblokke.

Et afsnit KAN indeholde `role`, `language`, `children`, `extensions` samt felter, der er defineret af den angivne dokumentmodelversion.

**REQ-FMT-029:** En producent SKAL bevare rækkefølgen af afsnit og blokke. En bruger MÅ IKKE fastlægge den autoritative rækkefølge ved at sortere identifikatorer eller titler.

### 11.2 Blokke

Hver blok skal indeholde en `id` og en `type`. En blok KAN indeholde bærbare `content`, strukturerede `data`, underblokke, sprog, adresserbare ankre, henvisninger til ressourcer og udvidelser med navnerum.

Dette filformat gør ikke et redigeringsprogramspecifikt rich-text-træ overførbart blot fordi det er indlejret som en »JSON«-streng. En deklareret dokumentmodelspecifikation eller et udvidelsesnavneområde skal definere betydningen af »`content`« og »`data`«.

**REQ-FMT-030:** En producent, der overholder standarden, SKAL serialisere videnskabeligt indhold ved hjælp af den bærbare repræsentation, der er valgt af `omi.specifications`, eller en deklareret udvidelse. Producenten MÅ IKKE kræve, at en bruger kører eller instansierer producentens redigeringsramme for at gendanne den videnskabelige tekst og struktur.

**REQ-FMT-031:** Når en processor ikke forstår en blok`type`, SKAL den bevare blokidentiteten, rækkefølgen, den rå, portable værdi, underelementerne og udvidelserne i henhold til profilen »Lossless Round Trip«. Den MÅ IKKE uden varsel konvertere blokken til et tomt afsnit.

### 11.3 Samlinger og referencer

Objekter i rodkollektioner kan adresseres via `id`. Relationer anvender identifikatorfelter, der er defineret i den gældende semantiske specifikation, såsom `targetBlockId`, `sourceBlockId`, `targetId`, `citationIds`, `creatorAgentId` eller identifikatorer for revisionsforældre.

**REQ-FMT-032:** En reference, der skal løses inden for det samme dokument, SKAL henvise til et eksisterende objekt af en tilladt type. En valideringsfunktion SKAL rapportere en uløst eller typemæssigt uforenelig reference.

**REQ-FMT-033:** En reference MÅ IKKE anvende et array-indeks, et gengivet sidetal, en pixelposition eller en midlertidig redigeringsforskydning som sit eneste permanente mål.

En ekstern reference KAN forblive uopløst lokalt, når det felt, der regulerer den, tillader en absolut ekstern URI, og dokumentet angiver, at ekstern opløsning er tilladt. Valideringen MÅ IKKE som standard hente denne URI.

### 11.4 Aktiver

`assets` indeholder logiske metadata for binære eller eksterne ressourcer. Et aktiv bør, hvor det er relevant, angive:

- `id`;
- mediatype;
- rolle;
- en menneskeligt læsbar etiket eller et filnavn;
- størrelse;
- kontrolsumalgoritme og -værdi;
- metadata om tilgængelighed, såsom alternativ tekst eller henvisninger til transskriptioner;
- en placering i forhold til containeren eller en absolut placering, som er tilladt i henhold til den gældende profil.

**REQ-FMT-034:** Bytes fra binære aktiver MÅ IKKE indlejres som ubegrænset base64-data i selve manuskriptdokumentet. En producent SKAL eksternalisere bytes via `OMI-SPEC-330` eller anvende en eksplicit angivet udvidelse eller profil med størrelsesbegrænsninger.

**REQ-FMT-035:** En aktivhenvisning SKAL henvise til deklarerede aktivmetadata eller til en eksplicit tilladt ekstern URI. Brugere MÅ IKKE automatisk hente et eksternt aktiv under parsning eller validering.

## 12. Udveksling af historiske oplysninger

### 12.1 Historikfelter

Et dokument, der erklærer »`history-exchange`«, skal indeholde følgende:

- `versioningModelVersion` – angivelse af den nøjagtige version af `OMI-SPEC-160`;
- `headRevisionId` – angiver den revision, som rod-snapshot’et repræsenterer;
- `revisionHistory`, der indeholder det bærbare historikobjekt.

Objektet »`revisionHistory`« kræver:

| Medlem | Betydning |
|---|---|
| `completeness` | `complete`, `partial` eller `shallow` |
| `rootRevisionId` | Den tidligste dokumenterede revision eller den egentlige rod |
| `headRevisionId` | Revision repræsenteret af root-snapshot |
| `revisions` | Revisionsoptegnelser reguleret af `OMI-SPEC-160` |

Det KAN omfatte »`omissionNotice`«, forgreninger, ændringssæt, øjebliksbilleder, integritetsbeviser, redigeringsmeddelelser og udvidelser med navneområder.

**REQ-FMT-036:** *`headRevisionId`*, *`revisionHistory.headRevisionId`* og den angivne snapshot-revision SKAL stemme overens.

**REQ-FMT-037:** Hver angivet revisionsidentifikator SKAL være entydig. Hver overordnet identifikator SKAL kunne løses inden for `revisionHistory.revisions`, medmindre `completeness` er `partial` eller `shallow`, og den manglende grænse er udtrykkeligt angivet.

**REQ-FMT-038:** Et dokument, der ikke indeholder en revisionshistorik, MÅ IKKE angive profilen »`history-exchange`« og MÅ IKKE antyde, at snapshotet indeholder fuldstændig proveniens.

### 12.2 Eksternalisering af historikken i en container

`OMI-SPEC-330` kan gemme historikken i en separat del af containeren. I så fald SKAL det rekonstruerede logiske dokument opfylde kravene i dette afsnit, før det præsenteres som et History Exchange-dokument. Det er containermanifestet – og ikke en ad hoc-rodstisling – der afgør, om delene kan findes, og om de er intakte.

## 13. Parsningsmodel

En forbruger, der overholder reglerne, følger disse trin i rækkefølge:

1. beholde det oprindelige indhold i overensstemmelse med de lokale bevaringsretningslinjer;
2. anvende de konfigurerede begrænsninger for bytestørrelse og ressourcer;
3. afkode UTF-8 og frasortere fejlformaterede byte-sekvenser;
4. tokenisere JSON og samtidig opdage dublerede navne på objektmedlemmer;
5. kræver et objekt på øverste niveau;
6. Se kun `schema` og `omi` for valg af format;
7. forhandle om den angivne version og profilerne;
8. Vælg et pålideligt, versionsspecifikt skema;
9. gennemføre strukturel validering;
10. at løse identiteter og henvisninger i selve dokumentet;
11. udføre semantisk validering og profilvalidering;
12. at identificere understøttede og ikke-understøttede udvidelser;
13. at afsløre, sætte i karantæne, afvise eller flytte dokumentet i overensstemmelse med en eksplicit politik.

**REQ-FMT-039:** Parsningen SKAL foregå uden udførelse af indhold. JSON-medlemsnavne, strengværdier, URI’er, markup-fragmenter, udvidelsesværdier og indlejrede udtryk SKAL behandles som data, medmindre et senere, udtrykkeligt godkendt behandlingstrin fastlægger andet.

**REQ-FMT-040:** En parser SKAL anvende implementeringsdefinerede grænser for indgangsbytes, indlejringsdybde, objektmedlemmer, array-længde, strenglængde og aggregeringsdiagnostik. Overskridelse af en grænse SKAL udløse en fejlmeddelelse og MÅ IKKE resultere i et tilsyneladende komplet manuskript.

**REQ-FMT-041:** Ved valg af skema SKAL der anvendes en pålidelig kortlægning fra understøttede `omi.version`-værdier til skemaer. En parser MÅ IKKE downloade, udføre eller stole på et vilkårligt skema alene på grund af, at inddataet nævner det ved navn.

## 14. Serialiseringmodel

### 14.1 Forventet adfærd

**REQ-FMT-042:** En producent SKAL udgive UTF-8-JSON, hvis `schema`, `omi.version`, profiler og tilhørende specifikationsversioner nøjagtigt beskriver den serialiserede repræsentation.

**REQ-FMT-043:** Serialiseringen SKAL bevare den semantisk betydningsfulde rækkefølge i arrayet, stabile identifikatorer, referencemål samt sondringen mellem fraværende, tomme og eksplicit null-tilladte værdier.

**REQ-FMT-044:** En producent SKAL udelade de implementeringsspecifikke og hemmelige tilstande, der er beskrevet på `REQ-FMT-020` og `REQ-FMT-021`.

Eksportfiler, der er læsbare for mennesker, BØR anvende indrykning med to mellemrum, LF-linjeslutninger og en afsluttende LF. Modtagere MÅ IKKE betragte mellemrum, indrykning, linjeslutninger eller rækkefølgen af objektmedlemmer som semantiske elementer.

### 14.2 Determinisme og kanonisering

To serialiseringer kan være semantisk ækvivalente, selvom de består af forskellige bytes. En producent, der hævder at anvende deterministisk serialisering, SKAL dokumentere, hvordan den rækkefølger objektets medlemmer og repræsenterer ækvivalente værdier.

**REQ-FMT-045:** Et digest eller en signatur baseret på JSON SKAL angive sin kanoniseringsalgoritme, algoritmeversion, tegnkodning og det omfattede anvendelsesområde. Implementeringer MÅ IKKE betragte digests, der er oprettet efter forskellige eller udeklarerede kanoniseringsregler, som ækvivalente.

JSON Canonicalization Scheme (JCS) KAN anvendes, når betingelserne for inddata er opfyldt. Almindelig udveksling af »OMI« kræver ikke JCS, og forfattertekster MÅ IKKE normaliseres udelukkende med det formål at opnå identiske bytes.

### 14.3 Bevarelse af Unicode

**REQ-FMT-046:** En round-trip-processor SKAL bevare den skalære Unicode-sekvens i uændret videnskabelig tekst. Den MÅ IKKE uden varsel anvende Unicode-normalisering, translitteration, omdannelse af store og små bogstaver, udskiftning af smarte anførselstegn, sammenlægning af mellemrum eller konvertering af linjeslutninger inden for indholdsværdierne.

En producent KAN normalisere nygenererede identifikatorer eller maskinstyrede tokens, når den gældende specifikation for disse foreskriver en sådan normalisering.

## 15. Validering og fejlhåndtering

### 15.1 Valideringslag

Valideringen er opbygget i lag, så fejl stadig kan forklares:

| Lag | Eksempler | Det ønskede resultat |
|---|---|---|
| Syntaks | UTF-8, »JSON«-grammatik, dobbelte navne | Fejl ved fejl |
| Konvolut | Format, version, skema-URI, profiler | Fejl ved ikke-understøttet eller inkonsekvent deklaration |
| Strukturelle | Typer, obligatoriske felter, mønstre | JSON Skema-diagnostik |
| Referentiel | Dobbelt-ID’er, manglende mål, forkerte måltyper | Semantisk diagnostik |
| Semantik | Tidsstempelrækkefølge, historisk konsistens, modelinvariabler | Semantisk diagnostik |
| Profil | Manglende felter i History Exchange | Profildiagnostik |
| Udvidelse/politik | Ukendt navneområde, lokal størrelse eller privatlivsregel | Advarsel eller fejl i henhold til den angivne politik |

**REQ-FMT-047:** En valideringsenhed MÅ IKKE angive, at et dokument er i overensstemmelse, hvis der forekommer en fejlmeddelelse i et hvilket som helst relevant lag.

**REQ-FMT-048:** Valideringen SKAL være deterministisk for den samme indtastning, det understøttede skema, udvidelsesfunktionerne, den angivne profil og politikkonfigurationen.

Det offentliggjorte »JSON«-skema tillader bevidst visse ukendte medlemmer for at sikre fremadkompatibel bevarelse. At skemaet er opfyldt, er derfor ikke i sig selv et fuldstændigt resultat af overensstemmelseskontrollen.

### 15.2 Diagnostisk objekt

En maskinlæsbar diagnose BØR indeholde:

| Medlem | Type | Betydning |
|---|---|---|
| `code` | streng | Stabil implementering eller OMI-diagnosekode |
| `severity` | streng | `error`, `warning` eller `info` |
| `instancePath` | streng | JSON Henvisning til den nærmeste repræsenterede værdi |
| `requirement` | streng | Gælder `REQ-FMT-NNN`-identifikator |
| `message` | streng | Letforståelig forklaring |
| `relatedIds` | array | Identifikatorer for relevante manuskripter |
| `details` | objekt | Valgfrit struktureret, ikke-fortroligt bevismateriale |

Eksempel:

```json
{
  "code": "FMT-UNRESOLVED-REFERENCE",
  "severity": "error",
  "instancePath": "/annotations/0/targetBlockId",
  "requirement": "REQ-FMT-032",
  "message": "Annotation ann-1 targets missing block block-404.",
  "relatedIds": ["ann-1", "block-404"]
}
```

**REQ-FMT-049:** En validator SKAL for hver fejl angive den nærmeste relevante forekomst og det gældende krav. Den MÅ IKKE medtage legitimationsoplysninger eller fortroligt manuskriptindhold i fejlmeddelelserne, medmindre dette udtrykkeligt er godkendt.

### 15.3 Genopretning og reparation

En forbruger KAN tilbyde reparation som en separat ydelse. Reparation er ikke det samme som godkendelse.

**REQ-FMT-050:** En reparationsproces SKAL bevare den oprindelige indtastning, angive alle foretagne ændringer, identificere det anvendte værktøj og dets version samt validere det reparerede resultat. Et repareret dokument MÅ IKKE præsenteres som byte-identisk eller herkomstmæssigt ækvivalent med kildedokumentet.

## 16. Udvidelser og ukendte data

### 16.1 Udvidelsesobjekt

Ethvert objekt KAN indeholde et »`extensions`«-medlem, når det skema, der gælder for objektet, tillader det. »`extensions`« er et »JSON«-objekt. Hvert medlemsnavn SKAL være en absolut HTTPS-URI eller URN, der kontrolleres af udvidelsens forfatter.

Eksempel:

```json
{
  "extensions": {
    "https://example.org/omi/extensions/lab-notebook/1": {
      "experimentId": "EXP-42",
      "replicate": 3
    }
  }
}
```

**REQ-FMT-051:** Bærbare data, der ikke hører til kerneområdet, og som er oprettet af en producent, SKAL placeres under `extensions` og identificeres ved hjælp af en absolut navnerums-URI eller -URN. En producent MÅ IKKE oprette en rodegenskab uden navnerum, der kan komme i konflikt med et fremtidigt kerneelement.

**REQ-FMT-052:** En bruger MÅ IKKE tildele en ukendt udvidelse den grundlæggende semantik fra OMI. Brugeren KAN ignorere udvidelsen i forbindelse med visning eller behandling, samtidig med at den bevares.

**REQ-FMT-053:** En valideringsfunktion BØR advare om ukendte medlemmer uden navnerum. Den MÅ IKKE fjerne dem som led i valideringen.

### 16.2 Håndtering uden tab

**REQ-FMT-054:** I profilen »Lossless Round Trip« SKAL en processor bevare værdien »JSON«, der indeholder objekt, medlemsnavn og array-position for hvert uændret ukendt medlem og hver ukendt udvidelse.

**REQ-FMT-055:** Hvis en redigering gør det umuligt at bevare dataene, SKAL behandleren stoppe, før dataene overskrives, eller anmode om udtrykkelig godkendelse efter at have fremlagt en maskinlæsbar rapport om datatab.

Det er ikke et krav, at mellemrum og rækkefølgen af objektmedlemmer bevares byte for byte, medmindre processoren specifikt angiver, at den bevarer byte-rækkefølgen. Det er et krav, at den semantiske betydning af den ukendte værdi »JSON« bevares.

## 17. Versionsstyring og migrering

### 17.1 Forskelle mellem versioner

Implementeringer SKAL skelne mellem:

- Filformatversion: `omi.version`;
- skema-URI: `schema`;
- afhængige modelversioner: `omi.specifications`;
- revision af manuskript eller øjebliksbillede: `headRevisionId` eller et modeldefineret revisionsfelt;
- container-version: manifestet »`OMI-SPEC-330`«;
- programversion: `omi.generator.version`, hvis angivet;
- publikationsudgave eller udgivelsesmærke: et felt, der er defineret af publikationsmodellen.

**REQ-FMT-056:** En producent MÅ IKKE anvende et versionsfelt som erstatning for en anden kategori i den foregående liste.

### 17.2 Migrationsoversigt

En migrationsoptegnelse skal indeholde følgende:

| Medlem | Betydning |
|---|---|
| `sourceFormatVersion` | Præcis indtastning `omi.version` |
| `targetFormatVersion` | Præcis udskrift `omi.version` |
| `tool` | Navn og version på Migrator |
| `migratedAt` | RFC 3339 instant |
| `sourceDigest` | Valgfri hash med angivet algoritme og kanoniseringsomfang |
| `steps` | Ordnede identifikatorer for de anvendte transformationer |
| `warnings` | Usikkerheder, der ikke er livstruende |
| `losses` | Data udeladt, anslået eller fortolket på ny |
| `extensionsPreserved` | Navneområder for udvidelser bevares |
| `validation` | Oversigter over validering af kilde- og måltekster |

Optegnelsen kan gemmes ved siden af output, i en godkendt proveniensudvidelse eller i en proveniensdel af en »OMI«-container.

**REQ-FMT-057:** En migrator SKAL være entydig og reproducerbar: Den samme kilde, målversion, migratorversion, indstillinger og udvidelsesfunktioner BØR resultere i semantisk ækvivalent output og de samme rækkefølge af migrationstrin.

**REQ-FMT-058:** Et migreringsværktøj MÅ IKKE angive, at konverteringen er tabsløs, når feltet »`losses`« ikke er tomt, eller når ukendte kildedata er blevet fjernet.

### 17.3 Overførsel fra `0.1.0`

`0.1.0`-udkastet indeholdt ikke et kanonisk skema og blev implementeret på forsøgsbasis. En migrering fra `0.1.0` starter derfor med at identificere implementeringsprofilen i stedet for blot at ommærke indholdet uden nærmere overvejelse.

En migrator til repræsentationen af forløberne i »Open Manuscript Studio« bør:

1. behold de oprindelige `.omi.json` bytes;
2. genkende URI’en for det gamle skema `https://openmanuscript.org/schemas/omi-manuscript-0.1.json`;
3. tilføj `omi`-konfigurationsfilen og de nøjagtige versioner af afhængighederne;
4. Erstat skema-URI’en med den uforanderlige URI `0.2`;
5. Fjern forældede indlejrede forfatterduplikater først, efter at de er blevet knyttet til agenter og bidrag, eller efter at tabet er registreret;
6. skelne mellem felter til manuskriptrevision og formatversion;
7. kontrollere henvisninger til afsnit, blokke, kommentarer, kilder og historik;
8. flytte ikke-centrale implementeringsdata til en udvidelse med navnerum;
9. validerer uddataene i forhold til skemaet og de semantiske regler i `0.2`;
10. udsende en migrationspost.

**REQ-FMT-059:** En ændring, der udelukkende vedrører `schema` eller `omi.version`, udgør ikke en migrering og MÅ IKKE fremstilles som en vellykket konvertering.

## 18. Integration af containere

Den selvstændige `.omi.json`-repræsentation og `.omi`-containeren har forskellige medietyper og funktioner:

| Repræsentation | Gældende specifikation | Foreløbig medietype | Typisk filendelse |
|---|---|---|---|
| Logical manuscript JSON | `OMI-SPEC-320` | `application/vnd.openmanuscript+json` | `.omi.json` |
| Fysisk OMI-container | `OMI-SPEC-330` | `application/vnd.openmanuscript.omi+zip` | `.omi` |

**REQ-FMT-060:** En container SKAL angive den nøjagtige version af »`OMI-SPEC-320`«, der gælder for dens logiske manuskriptdel. En bruger af filformatet MÅ IKKE udlede pakkestier eller komprimeringsregler uden at foretage en »`OMI-SPEC-330`«-behandling.

**REQ-FMT-061:** Ved eksternalisering af data til containerdele SKAL de samme logiske identiteter, rækkefølge, referencer, historikkens fuldstændighed og udvidelsesværdier, som er hentet fra den selvstændige repræsentation, bevares.

## 19. Interoperabilitet

### 19.1 Import

En import fra DOCX, JATS, XML, TEI XML, HTML, Markdown eller en anden kilde er en omdannelse til OMI-semantik og udgør ikke et bevis for, at hvert enkelt element i kilden har en tilsvarende OMI-ækvivalent.

**REQ-FMT-062:** En importør SKAL indberette udeladte, omtrentlige eller implementeringsspecifikke kildeegenskaber og BØR bevare oplysningerne om kildeformatets herkomst. Den MÅ IKKE uden varsel konvertere ukendt videnskabeligt indhold til almindelig tekst, hvis dette ændrer betydningen.

### 19.2 Eksport

PDF, HTML, EPUB, DOCX, JATS XML, Crossref XML og DataCite XML er afledte output. Deres generering kan gøre brug af publikationsprofiler, men det afledte layout MÅ IKKE blive betragtet som den autoritative manuskriptsemantik blot fordi det forekommer i et output.

**REQ-FMT-063:** En eksportør SKAL bevare kildemanuskriptet fra OMI eller en uforanderlig henvisning hertil, når der genereres et publikationsformat med datatab, og BØR rapportere om funktioner i målformatet, der ikke understøttes.

### 19.3 Transport i henhold til loven om sundhedspleje (API)

En API må gerne overføre det logiske manuskript JSON direkte. HTTP-indholdsforhandling, delvise opdateringer, autentificering og samtidighed hører under `OMI-SPEC-310`. En delvis API-repræsentation må IKKE hævde at være et komplet `.omi.json`-dokument, medmindre den indeholder alle påkrævede felter og angiver den relevante profil.

## 20. Sikkerhed, privatliv og integritet

### 20.1 Ikke-betroet indtastning

Alle indtastninger betragtes som upålidelige. Risiciene omfatter ressourceudtømning, dybe indlejringer, for lange strenge, forveksling af navne, ondsindede URI’er, aktivt markup, formelinjektion, afsløring af stier, lækage af adgangsoplysninger, forfalskning af filtyper og dekomprimeringsrisici på containerlaget.

**REQ-FMT-064:** Forbrugere SKAL behandle markup, URL'er, formler, skabeloner og udvidelsesdata som inaktive data under parsningen. Visning eller aktivering kræver et separat trin med konteksttilpasset rensning og godkendelse.

**REQ-FMT-065:** Forbrugere må IKKE udføre dereferencering af netværks-URI’er under valideringen, medmindre en operatør udtrykkeligt tillader hentning i henhold til en afgrænset tilladelsesliste, en timeout, en størrelsesbegrænsning, en omdirigeringspolitik og en privatlivspolitik.

### 20.2 Følsomme oplysninger

Manuskripter og historiske tekster kan indeholde ikke-offentliggjort forskning, personoplysninger, fortrolige bedømmelser, redigeret tekst, lokaliseringsdata eller materiale med adgangsbegrænsninger.

**REQ-FMT-066:** En producent SKAL anvende den tilsigtede offentliggørelsesprofil inden eksport og MÅ IKKE medtage indhold, der er underlagt begrænsninger, blot fordi det findes i redigeringslageret eller revisionshistorikken.

**REQ-FMT-067:** Validerings- og migrationslogfiler SKAL indeholde så lidt indhold fra det citerede manuskript som muligt og SKAL overholde adgangsreglerne for kildematerialet.

### 20.3 Integritet

JSON-filen i sig selv er ikke bevis på forfatterskab, ægthed eller aktualitet. Bevis for integritet kræver en angivet digest og et angivet kanoniseringsomfang; godkendte signaturer og containersummen reguleres af deres respektive specifikationer.

**REQ-FMT-068:** En bruger MÅ IKKE fremlægge skemavaliditet, en kontrolsum eller en selvdeklareret generator som bevis på pålideligt ophav.

## 21. Tilgængelighed

Filformatet bevarer de semantiske oplysninger og tilgængelighedsoplysninger, som gengivelsesprogrammer har brug for; det fastlægger ikke en bestemt brugergrænseflade.

**REQ-FMT-069:** En producent SKAL bevare sprogmetadata, overskriftsstruktur, læserækkefølge, alternativ tekst, billedtekster, tabelstruktur, ligningskilde, transskriptioner og andre tilgængelighedsrelevante data, der understøttes af den gældende semantiske model.

**REQ-FMT-070:** En producent MÅ IKKE udelukkende formidle betydning gennem farve, visuel placering, skrifttype eller sidegeometri i manuskriptets grundlæggende form.

Valideringsværktøjer BØR påpege manglende tilgængelighedsmetadata, når objekttypen og den valgte profil kræver disse metadata. En fejlmelding BØR forklare, hvordan man finder det berørte objekt uden at gengive følsomt indhold.

## 22. Internationalisering

OMI Manuskripter kan indeholde ethvert Unicode-skriftsystem, tovejs-tekst, kombinationstegn, historiske skriftsystemer og flersproget indhold.

**REQ-FMT-071:** En producent SKAL bevare den oprindelige Unicode-tekst og de eksplicitte sprogmetadata. En bruger MÅ IKKE antage, at der er tale om latinsk skrift, venstre-til-højre-retning, ASCII-tegnsætning eller et enkelt sprog i manuskriptet.

**REQ-FMT-072:** Lokalisationsafhængig sortering, ændring af store og små bogstaver, segmentering, datovisning og talvisning MÅ IKKE overskrive den gemte forfatterværdi, medmindre en autoriseret videnskabelig redigering kræver det.

Metadata vedrørende retning BØR kun angives, når det ikke pålideligt kan udledes af det angivne sprog og indhold. Maskinstyrede egenskabsnavne og registrerede tokens forbliver i ASCII.

## 23. Eksempler og testudstyr til overensstemmelseskontrol

De offentliggjorte kampprogrammer for denne version kan findes på [`/examples/omi-spec-320/0.2.0/`](/examples/omi-spec-320/0.2.0/manifest.json).

I kampprogrammet angives følgende:

- den nøjagtige specifikation og det nøjagtige skema;
- forventet gyldighed;
- forventede diagnosekoder for ugyldige eksempler;
- armaturens formål.

Det oprindelige sæt indeholder:

- et minimalt Core-snapshot;
- et repræsentativt History Exchange-dokument med en filtypenavn, der er underlagt et navneområde;
- et dokument, hvor formatversionen mangler;
- et dokument, der indeholder en duplikat-adresseidentifikator;
- et dokument, der indeholder et uafklaret kommentarmål;
- et dokument med omvendte tidsstempler for oprettelse og opdatering;
- et dokument med inkonsekvente historikoverskrifter;
- et dokument, der indeholder et forbudt felt til legitimationsoplysninger.

Valideringsværktøjet til repository-referencer demonstrerer skema- og udvalgte semantiske kontroller. Det er dokumentation for implementeringen, men endnu ikke en komplet formel overensstemmelsestestsuite. Implementeringer SKAL vurdere de normative krav i dette dokument ud over at bestå de offentliggjorte testcases.

## 24. Normative henvisninger

- [RFC 2119 — Key words for use in RFCs to Indicate Requirement Levels](https://www.rfc-editor.org/rfc/rfc2119)
- [RFC 8174 — Ambiguity of Uppercase vs Lowercase in RFC 2119 Key Words](https://www.rfc-editor.org/rfc/rfc8174)
- [RFC 8259 — The JavaScript Object Notation (JSON) Data Interchange Format](https://www.rfc-editor.org/rfc/rfc8259)
- [RFC 3339 — Date and Time on the Internet: Timestamps](https://www.rfc-editor.org/rfc/rfc3339)
- [RFC 5646 — Tags for Identifying Languages](https://www.rfc-editor.org/rfc/rfc5646)
- [RFC 6901 — JavaScript Object Notation (JSON) Pointer](https://www.rfc-editor.org/rfc/rfc6901)
- [RFC 7493 — The I-JSON Message Format](https://www.rfc-editor.org/rfc/rfc7493)
- [RFC 3986 — Uniform Resource Identifier (URI): Generic Syntax](https://www.rfc-editor.org/rfc/rfc3986)
- [JSON Schema Core, Draft 2020-12](https://json-schema.org/draft/2020-12/json-schema-core)
- [JSON Schema Validation, Draft 2020-12](https://json-schema.org/draft/2020-12/json-schema-validation)
- [OMI Specification Registry](../governance/specification-registry.md)
- [OMI Versioning Policy](../governance/versioning-policy.md)
- [OMI-SPEC-160 — Versioning and Change Model](./versioning-change-model.md)
- [OMI-SPEC-180 — Validation Model (Reserved)](../governance/specification-registry.md)
- [OMI-SPEC-330 — Container Architecture](./container-architecture.md)

## 25. Informative henvisninger

- [RFC 8785 — JSON Canonicalization Scheme](https://www.rfc-editor.org/rfc/rfc8785)
- [RFC 6838 — Media Type Specifications and Registration Procedures](https://www.rfc-editor.org/rfc/rfc6838)
- [RFC 6839 — Additional Media Type Structured Syntax Suffixes](https://www.rfc-editor.org/rfc/rfc6839)
- [FAIR Guiding Principles](https://www.go-fair.org/fair-principles/)
- [OMI Architecture Map](../foundations/architecture-map.md)
- [OMI Specification Style Guide](../governance/style-guide.md)

## 26. Status for gennemførelsen

De officielle implementeringsdokumenter findes i »[OMI Implementation Status Matrix](../governance/implementation-status-matrix.md)«.

På tidspunktet for offentliggørelsen af dette udkast:

- `0.2`-skemaet (JSON) er offentliggjort på den kanoniske, versionerede URI;
- et indledende sæt kampe og en referencevalidator offentliggøres;
- Open Manuscript Studio eksporterer en prækursor-`.omi.json`-repræsentation ved hjælp af den ikke-offentliggjorte skema-URI `0.1`;
- Studio hævder endnu ikke at overholde standarden »`OMI-SPEC-320@0.2.0`«;
- Der er ikke blevet verificeret nogen komplet tredjepartsvalideringsværktøj eller formel overensstemmelsestestpakke på tværs af implementeringer.

Det er ikke tilstrækkeligt blot at bestå »JSON«-skemaet eller referencefixturerne for at opfylde alle krav.

## 27. Uafklarede spørgsmål

Følgende spørgsmål er stadig uafklarede og skal behandles i senere udkast:

1. at færdiggøre den bærbare rich-text-repræsentation, der er valgt af kerne-dokumentmodellen;
2. at tilpasse de fuldstændige skemaer for identitet, annotation, henvisning, ressourcer og historik i takt med, at de tilhørende styrende specifikationer modnes;
3. beslutte, om den foreløbige leverandørmedietype skal registreres eller erstattes;
4. definer en formel kompatibilitetstabel for alle mindre versioner før 1.0;
5. offentliggøre et maskinlæsbart diagnoseskema, der deles med `OMI-SPEC-180`;
6. tilføj »duplicate-member-name«- og »resource-limit«-byte-fixtures, som ikke kan repræsenteres via almindelig JSON-serialisering;
7. definere implementeringsoverskridende tabsløse rundturstest;
8. fastlægge, hvilke udvidelsesfunktioner der kan angives i »`omi`«-konvolutten;
9. tilpasse rekonstruktionen af den eksternaliserede container-del til det næste udkast til »`OMI-SPEC-330`«;
10. definere arkivstabilitet og signaturprofiler uden at gøre netværksopløsning obligatorisk.

## 28. Ændringshistorik

| Version | Dato | Ændring |
|---|---|---|
| 0.2.0 | 05.09.2026 | Udkastet er omskrevet ved hjælp af den kanoniske specifikationsskabelon; det logiske format er adskilt fra containerarkitekturen; der er defineret overensstemmelsesklasser og -profiler, stabile krav, versionsforhandling, parsning, serialisering, validering, udvidelser, udveksling af historik, migrering, sikkerhed, tilgængelighed og internationalisering; offentliggjort et »JSON«-skema og indledende testdata. |
| 0.1.0 | 4. juli 2026 | Første foreløbige udkast under den kanoniske identifikator `OMI-SPEC-320`, overført fra den gamle `OMI-SPEC-011`. |

## 29. Tak

Denne specifikation indeholder implementeringseksempler fra Open Manuscript Studio samt arbejde vedrørende arkitektur, versionsstyring, validering, identitet, dokumentmodeller og containere fra Open Manuscript Initiative-fællesskabet.
