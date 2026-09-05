---
id: identity-contributor-model
title: OMI-SPEC-150 — Identitets- og bidragydermodel
sidebar_label: Identitet og bidragydermodel
description: Normativ model for aktører, navne, eksterne identitetsangivelser, tilhørsforhold, bidrag, tilskrivning samt adskillelsen af den akademiske identitet fra brugerkonti.
keywords:
  - Open Manuscript Initiative
  - OMI
  - identity
  - contributors
  - attribution
  - ORCID
  - affiliations
---

# OMI-SPEC-150 — Identitets- og bidragydermodel

## Dokumentmetadata

| Felt | Værdi |
|---|---|
| Identifikator | `OMI-SPEC-150` |
| Titel | Identitets- og bidragydermodel |
| Version | `0.1.0` |
| Status | Udkast |
| Dokumenttype | Normativ |
| Normativt sprog | Engelsk |
| Redaktører | OMI-vedligeholdere |
| Senest opdateret | 06.08.2026 |
| Erstatning | Ingen |
| Erstattet af | Ingen |
| Afhænger af | `OMI-SPEC-120`, `OMI-SPEC-140` |
| Anvendes af | `OMI-SPEC-160`, `OMI-SPEC-170`, `OMI-SPEC-190`, `OMI-SPEC-200`, `OMI-SPEC-220`, `OMI-SPEC-310` |
| Skemaer | Ingen offentliggjort |
| Profiler | Ingen offentliggjorte |
| Status for implementering | [OMI Implementation Status Matrix](../governance/implementation-status-matrix.md) |
| Issue tracker | Problemer i Open Manuscript Initiative-repositoriet |

## 1. Resumé

Denne specifikation definerer, hvordan »Open Manuscript Initiative« beskriver aktører og deres kontekstuelle deltagelse i videnskabelige objekter og arbejdsgange. Den tilvejebringer en fælles model for personer, organisationer, konsortier, projekter, tjenester, uidentificerede aktører, navne, eksterne identifikatorer, tilknytninger, bidragsroller, rækkefølgen af bidragydere, status som korresponderende bidragyder samt kreditering.

Modellen skelner mellem en agent og en applikationskonto, mellem en bidragyder og den agent, der udfører bidraget, samt mellem en rolle og en fast egenskab ved den pågældende agent. Den skelner desuden mellem en lokal OMI-identitet og påstande fremsat af eksterne identitetssystemer såsom ORCID eller ROR.

Specifikationen understøtter flersprogede og historiske navne, tidsbegrænsede tilknytninger, pseudonyme og begrænsede identiteter, identitetsangivelser med herkomstoplysninger samt eksplicitte bidragsforhold til manuskripter eller andre videnskabelige objekter. Den definerer ikke autentificeringsprotokoller, adgangsrettigheder til arbejdsområder, politik for offentliggørelse af peer-review eller den fuldstændige revisionshistorik for identitetsoptegnelser.

## 2. Status for dette dokument

Dette dokument er et **udkast** til en specifikation fra Open Manuscript Initiative.

Modellen, egenskabsnavnene, overensstemmelsesklasserne og behandlingskravene kan ændres på en måde, der medfører inkompatibilitet, inden version 1.0. Implementeringer, der hævder at understøtte specifikationen, SKAL angive den nøjagtige specifikationsversion eller det uforanderlige commit, der er anvendt.

Dette udkast aktiverer den identifikator, der er reserveret til identitets- og bidragydermodellen i registret for specifikationer for »OMI«. Diskussioner og ændringsforslag følges i repositoriet Open Manuscript Initiative.

## 3. Overensstemmelse

### 3.1 Overensstemmelsesklasser

Denne specifikation definerer fire overensstemmelsesklasser:

- **Identitetsudbyder, der overholder kravene:** opretter eller eksporterer data om agenter, identiteter, tilknytninger eller bidrag.
- **Identitetsforbruger, der overholder kravene:** importerer, lagrer, viser, behandler eller opbevarer sådanne data.
- **Valideringsværktøj til overensstemmelse:** vurderer data i forhold til de strukturelle og semantiske krav i denne specifikation.
- **Identitetsafstemmer:** sammenligner, afstemmer eller udvider agentidentiteter eller påstande om eksterne identifikatorer.

En implementering KAN omfatte mere end én klasse.

### 3.2 Generel overensstemmelse

En overensstemmende implementering SKAL opfylde alle gældende **SKAL**- og **MÅ IKKE**-krav for den deklarerede klasse.

En valgfri funktion KAN udelades. Når funktionen implementeres, SKAL den opfylde alle krav, der er defineret for den pågældende funktion.

En overensstemmelseserklæring BØR angive:

- implementeringsnavn og -version;
- `OMI-SPEC-150` version;
- angivet overensstemmelsesklasse;
- understøttede agenttyper og identifikationsordninger;
- indstillinger for beskyttelse af privatliv og synlighed;
- kendte begrænsninger;
- overensstemmelsestestversion, når den er tilgængelig.

### 3.3 Grundlæggende krav

**REQ-IDN-001:** En agent SKAL være repræsenteret uafhængigt af alle de brugerkonti, der er knyttet til den.

**REQ-IDN-002:** Et bidrag SKAL henvise til en agent og en enhed, der er bidraget til (OMI); det MÅ IKKE indeholde en fuldstændig gentagelse af agenten som en indlejret bidragyderpost.

**REQ-IDN-003:** En bidragsrolle SKAL være knyttet til et bestemt bidrag og MÅ IKKE fortolkes som et fast kendetegn ved aktøren.

**REQ-IDN-004:** En ekstern identifikator SKAL angives som en påstand med et identifikationsskema, en værdi, et emne, en herkomst og en verifikationsstatus.

**REQ-IDN-005:** En bruger MÅ IKKE sammenlægge to agenter alene på grundlag af, at deres navne, e-mailadresser, tilhørsforhold eller ikke-verificerede eksterne identifikatorer er ens.

**REQ-IDN-006:** En producent SKAL fastholde sondringen mellem ukendte, tilbageholdte, pseudonyme og udtrykkeligt anonyme identiteter.

**REQ-IDN-007:** Fortrolige identitets- og kontaktoplysninger MÅ IKKE offentliggøres via en offentlig serialisering eller visning, medmindre en gældende adgangspolitik tillader offentliggørelse.

**REQ-IDN-008:** Bidragsyderens rækkefølge SKAL angives uafhængigt af rolle, identitet og bidragets omfang.

## 4. Anvendelsesområde

Denne specifikation definerer:

- agentidentitet og understøttede agentkategorier;
- lokale og eksterne identifikatorer for agenter;
- flersprogede, strukturerede, ustrukturerede, historiske og pseudonyme navne;
- identitetspåstande samt deres herkomst og verifikationsstatus;
- kontekstuelle tilknytninger;
- bidrag til manuskripter og andre videnskabelige værker;
- bidragsroller og valgfri tilknytninger til kontrollerede ordlister;
- rækkefølgen af bidragydere og angivelse af, hvilke bidragydere der svarer til hinanden;
- kontekstuelle attributnavne;
- begrænsede identitets- og kontaktoplysninger;
- krav til identitetssammenligning, afstemning, sammenlægning og opdeling;
- validering og bevaringsadfærd.

### 4.1 Uden for anvendelsesområdet

Denne specifikation definerer ikke:

- adgangskoder, passkey, OAuth, OpenID Connect, sessionsstyring eller andre godkendelsesmekanismer;
- Anvendelseskontens livscyklus og kontogendannelse;
- beregning af medlemskab, autorisation eller tilladelser i arbejdsområdet;
- politik for anonymitet eller offentliggørelse i forbindelse med fagfællebedømmelse;
- verifikation af juridisk identitet;
- institutionel ansættelsesbekræftelse;
- etik vedrørende forfatterskab eller kriterier for berettigelse;
- et universelt ordforråd for bidragsroller;
- versionsdiagrammer, ændringssæt eller fuldstændig semantik for revisionshændelser;
- Design af offentlige profilsider.

Autentificering hører under platformsikkerhed. Tilladelser til arbejdsområder hører under `OMI-SPEC-190`. Gennemgang af identitetsafsløring hører under `OMI-SPEC-200`. Revisions- og ændringssemantik hører under `OMI-SPEC-160`.

## 5. Terminologi

Dokumentet »[OMI Terminology and Definitions](../governance/terminology.md)« finder anvendelse.

### 5.1 Agentens identitet

Objektet »OMI«, der repræsenterer en agent som en identificerbar enhed inden for et defineret identitetsområde.

En aktøridentitet kan henvise til en person, en organisation, et konsortium, et projekt, en tjeneste eller en uidentificeret aktør. Den udgør ikke en autentificeringsoplysning og indebærer ikke juridisk verifikation.

### 5.2 Konto

En post, der administreres af implementeringen, og som bruges til at autentificere, godkende eller tilpasse adgangen til software.

En konto KAN være knyttet til en agentidentitet, men den indgår ikke i den videnskabelige attributionsmodel og MÅ IKKE betragtes som selve agenten.

### 5.3 Identitetsbekræftelse

En herkomstangivelse, der angiver, at en navngivet identifikator, et navn, en tilknytning, et kontaktpunkt eller en anden identitetsegenskab gælder for en aktør.

### 5.4 Bekræftelse af ekstern identifikator

En identitetsbekræftelse, der knytter en aktør til en identifikator, der er tildelt af et eksternt system eller en ekstern myndighed.

### 5.5 Navneform

En gengivelse af et agents navn for et bestemt sprog, skriftsystem, tidsperiode, formål eller kilde.

### 5.6 Bidrag

En kontekstuel relation, der angiver, at en aktør har bidraget i en eller flere roller til en defineret enhed i OMI.

### 5.7 Kildeangivelse

Fremstilling af et bidrag med henblik på anerkendelse, ansvar, kildeangivelse, visning eller herkomst.

### 5.8 Bidragsrolle

En værdi, der beskriver den funktion, som en aktør udfører i en bestemt bidragssammenhæng.

### 5.9 Erklæring om tilhørsforhold

En tidsbegrænset erklæring med angivelse af herkomst, der knytter en aktør til en organisation, en organisatorisk enhed, et projekt eller en tilsvarende institutionel sammenhæng.

### 5.10 Identitetsopløsning

Processen med at fastslå, om identitetsoplysninger eller identitetsangivelser henviser til den samme aktør, forskellige aktører eller et uafklaret forhold.

### 5.11 Hemmeligholdt identitet

En identitet, der er kendt i en godkendt sammenhæng, men som bevidst holdes skjult for den aktuelle forbruger eller målgruppe.

### 5.12 Uidentificeret stof

En agent, hvis identitet ikke er kendt, ikke er registreret eller ikke kan fastslås.

En uidentificeret agent er ikke det samme som en hemmeligholdt identitet.

## 6. Designprincipper

Dette afsnit har informativt karakter.

- **Kontekst før generelle antagelser:** roller, tilhørsforhold, rækkefølge og den tilhørende status afhænger af konteksten.
- **Identitet før visning:** En agent defineres ikke ud fra en enkelt streng med et visningsnavn.
- **Påstande med herkomstangivelse:** importerede eller eksternt leverede identitetsdata kan fortsat henføres til deres kilde.
- **Ingen usikker automatisk sammenfletning:** Tvetydigheden bevares, indtil der foreligger tilstrækkelige beviser til at understøtte afstemningen.
- **Privacy by design:** Offentlig kreditering og begrænsede driftsdata holdes adskilt.
- **Flersproget gengivelse:** Navne og betegnelser tager højde for sprog, skriftsystem, rækkefølge og historiske variationer.
- **Kontouafhængighed:** akademiske optegnelser kan overføres mellem installationer og applikationer.
- **Tabsbevidst interoperabilitet:** Ved import og eksport afsløres udeladte, ændrede eller ikke-verificerbare identitetsoplysninger.

## 7. Modeloversigt

```text
Application account
    └── may be privately associated with ── Agent identity
                                               ├── Name forms
                                               ├── External identifier assertions
                                               ├── Affiliation assertions
                                               ├── Contact points
                                               └── Contributions
                                                        ├── Target scholarly object
                                                        ├── Contribution roles
                                                        ├── Contributor order
                                                        ├── Corresponding status
                                                        └── Contextual attribution name
```

Kontokoblingen er implementeringsspecifik, medmindre en eksplicit beskyttet udvekslingsprofil angiver andet.

En aktøridentitet kan indgå i flere bidrag. Et bidrag kan omfatte flere roller, men har én primær aktør og én enhed, som bidraget er rettet mod. I gruppebidrag anvendes en organisation, et konsortium, et projekt eller en eksplicit modelleret kollektiv aktør i stedet for en række personer, der fremstår som én person.

## 8. Datamodel

### 8.1 Agentens identitet

**Formål:** At repræsentere en agent uafhængigt af konti, roller og ændringsbare visningsbetegnelser.  
**Identifikator:** En stabil lokal identifikator inden for identitetsområdet for den overordnede OMI.  
**Livscyklus:** Vedvarende; korrektion, sammenlægning, opdeling, udfasning og udskiftning kræver eksplicit herkomstoplysninger.

| Egenskab | Type | Påkrævet | Kardinalitet | Beskrivelse |
|---|---|---:|---:|---|
| `id` | streng | Ja | `1` | Stabil lokal identifikator. |
| `type` | streng | Ja | `1` | Agentkategori. |
| `names` | `NameForm[]` | Ja | `1..*` | Kendte navneformater. |
| `identifiers` | `ExternalIdentifierAssertion[]` | Nej | `0..*` | Påstande om eksterne identifikatorer. |
| `affiliations` | `AffiliationAssertion[]` | Nej | `0..*` | Kontekstuelle tilknytninger. |
| `contacts` | `ContactPoint[]` | Nej | `0..*` | Kontaktoplysninger med synlighedsregler. |
| `status` | streng | Nej | `0..1` | Aktiv, historisk, sammenlagt, forældet, uidentificeret eller implementeringsdefineret udvidelse. |
| `replacedBy` | streng | Nej | `0..1` | Agentidentitet, der erstatter en sammenlagt eller udfaset post. |
| `provenance` | `ProvenanceAssertion[]` | Nej | `0..*` | Oplysninger om oprindelse og opbevaring. |
| `extensions` | objekt | Nej | `0..1` | Indhold af udvidelser med navnerum. |

Kerneværdierne i »`type`« er:

- `person`;
- `organization`;
- `consortium`;
- `project`;
- `service`;
- `unidentified`.

En profil KAN definere mere specifikke agenttyper.

**REQ-IDN-010:** Hver agentidentitet SKAL have mindst én navneform, bortset fra en »`unidentified`«-agent, som KAN anvende en kontrolleret pladsholderbetegnelse.

**REQ-IDN-011:** Identifikatoren »`id`« SKAL forblive uændret, når et foretrukket navn, en tilknytning, et kontaktpunkt eller en ekstern identifikator ændres.

**REQ-IDN-012:** En sammenlagt eller udfaset identitet SKAL beholde sin tidligere identifikator og BØR angive sin erstatning via `replacedBy`.

**REQ-IDN-013:** En persons identitet MÅ IKKE kræve et juridisk navn, en binær kønsmarkør, en titel, en e-mail-adresse, et ORCID eller en tilknytning.

### 8.2 Navneform

| Egenskab | Type | Påkrævet | Kardinalitet | Beskrivelse |
|---|---|---:|---:|---|
| `id` | streng | Ja | `1` | Stabil identifikator for denne navneangivelse. |
| `display` | streng | Ja | `1` | Udfyld formularen. |
| `given` | streng | Nej | `0..1` | Førstenavnsdel, hvor det er relevant. |
| `family` | streng | Nej | `0..1` | Efternavnsdel, hvis relevant. |
| `prefix` | streng | Nej | `0..1` | Præfiks, når det semantisk set er en del af navnet. |
| `suffix` | streng | Nej | `0..1` | Endelse, når den semantisk set er en del af navnet. |
| `literal` | streng | Nej | `0..1` | Uparset eller et bogstaveligt navn i organisationsformat. |
| `language` | BCP 47-tag | Nej | `0..1` | Sproget i navneformen. |
| `script` | ISO 15924-kode | Nej | `0..1` | Skriftsprog, når det ikke kan udtrykkes tilstrækkeligt ved hjælp af sprogkoden. |
| `usage` | streng | Nej | `0..1` | Foretrukket, offentliggjort, juridisk, tidligere, pseudonym, translitteration, oversættelse eller filtypenavn. |
| `preferred` | boolean | Nej | `0..1` | Foretrækkes inden for den angivne sammenhæng. |
| `validFrom` | dato eller dato og klokkeslæt | Nej | `0..1` | Start på den kendte gyldighedsperiode. |
| `validUntil` | dato eller dato og klokkeslæt | Nej | `0..1` | Slutningen af den kendte gyldighedsperiode. |
| `source` | `ProvenanceAssertion` | Nej | `0..1` | Kilde til navneformen. |

**REQ-IDN-020:** En navneform SKAL indeholde `display` og MÅ IKKE kræve, at den kan opdeles i fornavn og efternavn uden tab af information.

**REQ-IDN-021:** En klient SKAL bevare navneformater, der anvender skriftsystemer, navngivningskonventioner eller komponenter, som ikke understøttes af dens grænseflade.

**REQ-IDN-022:** Der må højst angives én navneform som foretrukket for den samme agent, det samme sprog, det samme skriftsystem, den samme anvendelse og den samme behandlingskontekst.

**REQ-IDN-023:** Et translittereret eller oversat navn MÅ IKKE uden varsel erstatte navnet i kildeskriften.

### 8.3 Bekræftelse af ekstern identifikator

| Egenskab | Type | Påkrævet | Kardinalitet | Beskrivelse |
|---|---|---:|---:|---|
| `id` | streng | Ja | `1` | Lokal påstandsidentifikator. |
| `scheme` | streng eller URI | Ja | `1` | Identifikationsskema, f.eks. ORCID eller ROR. |
| `value` | streng | Ja | `1` | Skema-specifik identifikatorværdi. |
| `uri` | URI | Nej | `0..1` | Kanonisk eller opløselig URI, hvis den er kendt. |
| `subject` | streng | Ja | `1` | Identitet på den agent, der henvises til. |
| `verification` | streng | Ja | `1` | Ikke verificeret, selvangivet, kildeverificeret, registerverificeret, afvist eller udvidelse. |
| `verifiedAt` | dato-tid | Nej | `0..1` | Verifikationstidspunkt. |
| `verifiedBy` | agent- eller servicereference | Nej | `0..1` | Bekræftelse af agent eller behandler. |
| `source` | `ProvenanceAssertion` | Ja | `1` | Kilden til påstanden. |
| `visibility` | streng | Nej | `0..1` | Offentlig, begrænset, privat eller arvet. |

**REQ-IDN-030:** Sammenligning af identifikatorer SKAL følge det angivne skemaets normaliserings- og sammenligningsregler.

**REQ-IDN-031:** En producent MÅ IKKE mærke en ekstern identifikator som »registreringsverificeret«, medmindre en registreret verifikationshandling understøtter denne status.

**REQ-IDN-032:** En fejl i opløsningen MÅ IKKE i sig selv gøre en syntaktisk gyldig permanent identifikator ugyldig.

**REQ-IDN-033:** Modstridende eksterne identifikatorer SKAL bevares som separate påstande, indtil de udtrykkeligt er afklaret, afvist eller erstattet.

**REQ-IDN-034:** En »ORCID«-angivelse SKAL identificere en person som agent; en »ROR«-angivelse SKAL identificere en organisation som agent.

### 8.4 Erklæring om tilknytning

| Egenskab | Type | Påkrævet | Kardinalitet | Beskrivelse |
|---|---|---:|---:|---|
| `id` | streng | Ja | `1` | Stabil identifikator for en påstand. |
| `agent` | mægleroplysninger | Ja | `1` | Tilknyttet mægler. |
| `organization` | agentreference | Ja | `1` | Organisation eller tilsvarende institutionel aktør. |
| `unit` | streng eller agenthenvisning | Nej | `0..1` | Afdeling, fakultet, laboratorium eller enhed. |
| `position` | flersproget streng | Nej | `0..1` | Position eller kontekstuel titel. |
| `role` | periode | nr. | `0..1` | Tilknytningens art. |
| `validFrom` | dato eller dato-tid | Nej | `0..1` | Start på den kendte gyldighedsperiode. |
| `validUntil` | dato eller dato og klokkeslæt | Nej | `0..1` | Slutningen af den kendte gyldighedsperiode. |
| `source` | `ProvenanceAssertion` | Ja | `1` | Ansvar for kilder og påstande. |
| `verification` | streng | Nej | `0..1` | Verifikationsstatus. |

**REQ-IDN-040:** En tilknytning SKAL angives som en relation og ikke som en uforanderlig tekstegenskab for en person.

**REQ-IDN-041:** En tilknytning, der anvendes i forbindelse med et bidrag, BØR angive, om den afspejler tidspunktet for bidragets udarbejdelse, indsendelse, offentliggørelse eller en anden angivet sammenhæng.

**REQ-IDN-042:** Manglende start- eller slutdatoer SKAL betyde, at datoerne er ukendte eller åbne, i henhold til den omgivende profil; det MÅ IKKE automatisk betyde, at datoerne er aktuelle.

### 8.5 Kontaktpunkt

| Egenskab | Type | Påkrævet | Kardinalitet | Beskrivelse |
|---|---|---:|---:|---|
| `id` | streng | Ja | `1` | Identifikator for lokal kontaktangivelse. |
| `type` | streng | Ja | `1` | E-mail, telefonnummer, postadresse, URI, beskedtjeneste eller lokalnummer. |
| `value` | streng | Ja | `1` | Kontaktværdi. |
| `purpose` | streng | Nej | `0..1` | Korrespondance, redaktionelle, administrative, offentlige eller formidlingsmæssige formål. |
| `visibility` | streng | Ja | `1` | Offentlig, begrænset, privat eller arvet. |
| `validFrom` | dato eller dato og klokkeslæt | Nej | `0..1` | Gyldighedsstart. |
| `validUntil` | dato eller dato og klokkeslæt | Nej | `0..1` | Gyldighedsperiode udløber. |
| `source` | `ProvenanceAssertion` | Ja | `1` | Oplysninger om kilde og opbevaring. |

**REQ-IDN-050:** Kontaktoplysninger SKAL være valgfri i overførbare videnskabelige data.

**REQ-IDN-051:** Et privat eller begrænset kontaktpunkt SKAL udelades, krypteres, underkastes adgangskontrol eller erstattes af en ikke-følsom videresendelsesmekanisme i uddata, der ikke er godkendt til at modtage det.

**REQ-IDN-052:** E-mail-overensstemmelse MÅ IKKE betragtes som afgørende bevis for, at to identitetsposter repræsenterer den samme agent.

### 8.6 Bidrag

| Egenskab | Type | Påkrævet | Kardinalitet | Beskrivelse |
|---|---|---:|---:|---|
| `id` | streng | Ja | `1` | Stabil identifikator for bidrag. |
| `agent` | agentreference | Ja | `1` | Medvirkende agent. |
| `target` | OMI objektreference | Ja | `1` | Manuskript, dokument, afsnit, ressource, begivenhed, publikation eller anden enhed, som der er bidraget til. |
| `roles` | `ContributionRole[]` | Ja | `1..*` | Kontekstuelle bidragsroller. |
| `order` | heltal eller streng | Nej | `0..1` | Eksplicit rækkefølge i en defineret liste over bidragydere. |
| `orderContext` | streng | Nej | `0..1` | Forfatterliste, redaktørliste, visningsliste eller profildefinert kontekst. |
| `corresponding` | boolean | Nej | `0..1` | Betegnelse for den tilhørende bidragyder. |
| `attributionName` | streng | Nej | `0..1` | Kontekstspecifikt gengivet navn på kildeangivelse. |
| `affiliations` | henvisninger til tilknytning | Nej | `0..*` | Tilknytninger, der gælder for dette bidrag. |
| `statement` | flersproget streng | Nej | `0..1` | En forståelig beskrivelse af bidraget. |
| `validFrom` | dato eller dato-tid | Nej | `0..1` | Start på kontekstvaliditet. |
| `validUntil` | dato eller dato og klokkeslæt | Nej | `0..1` | Slut på kontekstvaliditet. |
| `visibility` | streng | Nej | `0..1` | Offentlig, begrænset, privat eller arvet. |
| `provenance` | `ProvenanceAssertion[]` | Nej | `0..*` | Oplysninger om påstandens oprindelse og ændringshistorik. |

**REQ-IDN-060:** Et bidrag SKAL henvise til nøjagtigt én agent og nøjagtigt ét mål.

**REQ-IDN-061:** Et bidrag SKAL indeholde mindst én rolle.

**REQ-IDN-062:** Flere roller, der udøves af den samme aktør i forhold til det samme mål, KAN fremgå af ét bidrag, når deres rækkefølge, synlighed, tilhørsforhold og gyldighedskontekst er den samme; ellers SKAL de være separate bidrag.

**REQ-IDN-063:** `order` SKAL udelukkende fortolkes inden for rammerne af `orderContext` og den relevante målgruppe eller profil.

**REQ-IDN-064:** Status som korrespondenceforfatter MÅ IKKE indebære, at vedkommende er førsteforfatter, har højere rang, ejer rettighederne eller er den eneste kontaktperson.

**REQ-IDN-065:** `attributionName` må eventuelt tilsidesætte visningen for bidragskonteksten, men må IKKE overskrive agentens navneformer.

**REQ-IDN-066:** Et bidrag, der kun vedrører en del af et manuskript, BØR være rettet mod det relevante afsnit, objekt eller den relevante ressource i stedet for hele manuskriptet.

### 8.7 Bidragsrolle

| Egenskab | Type | Påkrævet | Kardinalitet | Beskrivelse |
|---|---|---:|---:|---|
| `id` | streng | Ja | `1` | Identifikator for stabil rollebekræftelse. |
| `term` | streng eller URI | Ja | `1` | Rolleværdi. |
| `scheme` | streng eller URI | Nej | `0..1` | Ordbog eller register, der definerer udtrykket. |
| `label` | flersproget streng | Nej | `0..1` | Menneskeligt læsbar betegnelse. |
| `detail` | flersproget streng | Nej | `0..1` | Kontekstspecifik forklaring. |

De vigtigste rollebegreber omfatter:

- `author`;
- `editor`;
- `translator`;
- `reviewer`;
- `publisher`;
- `data-curator`;
- `software-contributor`;
- `illustrator`;
- `project-administrator`;
- `funding-acquisition`;
- `other`.

Profilerne KAN anvende CRediT eller et andet standardiseret terminologi.

**REQ-IDN-070:** Et rollebegreb, der importeres fra et kontrolleret ordforråd, SKAL bevare sin ordforrådsidentifikator eller URI, når denne foreligger.

**REQ-IDN-071:** En lokal rolleudvidelse MÅ IKKE fejlagtigt betegnes som et begreb fra et kontrolleret ordforråd.

**REQ-IDN-072:** En rollebetegnelse har informativ karakter og MÅ IKKE erstatte det maskinlæsbare rolleudtryk.

### 8.8 Angivelse af herkomst

Denne specifikation anvender følgende minimumsstruktur for herkomst, indtil `OMI-SPEC-160` definerer den fuldstændige model for ændringer og herkomst.

| Egenskab | Type | Påkrævet | Kardinalitet | Beskrivelse |
|---|---|---:|---:|---|
| `sourceType` | streng | Ja | `1` | Bruger, register, importeret post, institution, tjeneste, migrering eller udvidelse. |
| `source` | agent, system eller URI-henvisning | Nej | `0..1` | Kildeidentitet. |
| `assertedBy` | agent- eller kontonummer | Nej | `0..1` | Ansvarlig part, der fremsætter påstanden. |
| `assertedAt` | dato-tid | Nej | `0..1` | Tidspunkt for påstand. |
| `evidence` | URI eller objektreference | Nej | `0..*` | Understøttende dokumentation. |
| `confidence` | streng eller tal | Nej | `0..1` | Kildespecifik konfidens. |

**REQ-IDN-080:** Proveniens SKAL skelne mellem kilden til en påstand og den aktør, der beskrives i påstanden.

**REQ-IDN-081:** En konfidensværdi SKAL angive sin skala eller sit ordforråd.

### 8.9 Kontotilknytning

En implementering KAN opretholde en beskyttet sammenkobling mellem en kontoidentifikator og en agentidentitet.

| Egenskab | Type | Påkrævet | Kardinalitet | Beskrivelse |
|---|---|---:|---:|---|
| `account` | uigennemsigtig kontoreference | Ja | `1` | Konto, der administreres af implementeringen. |
| `agent` | agentreference | Ja | `1` | Tilknyttet agentidentitet. |
| `status` | streng | Ja | `1` | Afventende, bekræftet, tilbagekaldt eller forlænget. |
| `verifiedAt` | dato-tid | Nej | `0..1` | Verifikationstidspunkt. |
| `source` | `ProvenanceAssertion` | Ja | `1` | Foreningens oprindelse. |

**REQ-IDN-090:** Kontotilknytninger MÅ IKKE indeholde autentificeringsnøgler, tokens, adgangskodehashværdier eller gendannelsesoplysninger.

**REQ-IDN-091:** Kontotilknytninger MÅ IKKE som standard indgå i en eksport af offentlige manuskripter.

**REQ-IDN-092:** Sletning eller deaktivering af en konto MÅ IKKE automatisk medføre sletning af historiske videnskabelige henvisninger.

### 8.10 Ukendte, anonyme, pseudonyme og hemmeligholdte agenter

En producent SKAL anvende eksplicit semantik:

| Tilstand | Betydning |
|---|---|
| `unidentified` | Agenten er ukendt eller kan ikke genfindes. |
| `anonymous` | Bidraget tilskrives bevidst ingen identificeret offentlig aktør. |
| `pseudonymous` | Et stabilt pseudonym er den identitet, der tilskrives i den pågældende sammenhæng. |
| `withheld` | Der findes en mere specifik identitet, men adgangen hertil er begrænset. |

**REQ-IDN-100:** En skjult identitet SKAL have en stabil, beskyttet reference, så autoriserede systemer kan opretholde kontinuiteten uden at afsløre identiteten.

**REQ-IDN-101:** En forbruger, der ikke har adgang til en skjult identitet, SKAL bevare den skjulte status og MÅ IKKE ændre den til »uidentificeret«.

**REQ-IDN-102:** En pseudonym agent BØR repræsenteres som en agentidentitet med sin egen stabile identifikator og sin egen pseudonyme navneform.

## 9. Behandlingsmodel

### 9.1 Oprettelse af en agentidentitet

En producent, der opfylder kravene, SKAL:

1. tildele en stabil lokal agentidentifikator;
2. Vælg den mest specifikke agenttype, der understøttes;
3. registrere mindst én brugbar navneform eller en eksplicit uidentificeret tilstand;
4. bevare kilden til importerede påstande;
5. tilføje eksterne identifikatorer som påstande i stedet for at erstatte den lokale identitet;
6. Anvend synlighedsreglerne inden eksport.

### 9.2 Oprettelse af et indlæg

En producent, der opfylder kravene, SKAL:

1. identificere eller oprette den bidragende aktør;
2. fastlægge det nøjagtige bidragsmål;
3. tildele en eller flere kontekstuelle roller;
4. registrer kun en ordre, når der foreligger en ordrekontest;
5. at knytte bidragsspecifikke tilknytninger i stedet for at basere sig på en aktuel profiltilknytning;
6. klassificere synlige og begrænsede data;
7. bevare herkomsten, når bidraget importeres eller angives af en anden part.

### 9.3 Identitetssammenligning

En resolver BØR sammenligne beviserne i følgende rækkefølge:

1. verificerede ordningsidentifikatorer;
2. forhold mellem autoritative kilder;
3. eksplicitte påstande om tidligere sammenlægning eller påstande om samme agent;
4. overensstemmende navne, tilhørsforhold, datoer og kontekstuelle beviser;
5. implementeringsspecifikke lighedssignaler.

Lighedssignaler alene MÅ IKKE føre til en irreversibel automatisk sammenfletning.

### 9.4 Sammenlægning

En sammenfletningsoperation SKAL:

1. vælg eller opret en identitet for en efterlevende befuldmægtiget;
2. beholde alle tidligere lokale identifikatorer som et alias eller en erstatningshenvisning;
3. beholde ikke-duplikerede påstande og deres herkomst;
4. beholde modstridende påstande;
5. omdirigere henvisninger til bidrag uden at ændre bidragets betydning;
6. registrere sammenfletningshændelsen med henblik på fremtidig kompatibilitet med `OMI-SPEC-160`;
7. forbliver reversible, indtil den gældende bevaringspolitik tillader, at de gøres endelige.

### 9,5 Split

En split-operation SKAL:

1. oprette unikke agentidentiteter;
2. omvurdere påstande og bidrag på baggrund af konkrete beviser;
3. bevare den oprindelige optegnelse som historisk, tvetydig eller forældet;
4. registrer uafklarede opgaver i stedet for at gætte;
5. bevare herkomstoplysninger og tidligere henvisninger.

### 9.6 Angivelse af kildehenvisning

En renderer BØR vælge et navn i følgende rækkefølge:

1. bidragsspecifik `attributionName`;
2. foretrukket navn, der passer til målsproget og skriftsystemet;
3. foretrukket navn på et andet understøttet sprog eller med et andet skriftsystem;
4. et gyldigt, offentliggjort eller pseudonymt navn;
5. et andet gemt visningsnavn;
6. en godkendt, skjult eller anonym mærkning.

En renderer MÅ IKKE afsløre et navn eller en identifikator, der er underlagt begrænsninger, blot fordi det forekommer i kildedataene.

## 10. Validering og fejlhåndtering

### 10.1 Valideringsniveauer

Valideringen omfatter:

- syntaksvalidering;
- strukturel validering;
- semantisk validering;
- validering af referenceintegriteten;
- validering af identifikationsskema;
- validering af privatliv og synlighed;
- profilvalidering.

### 10.2 Fejltilstande

| Tilstand | Klassificering | Påkrævet adfærd |
|---|---|---|
| Manglende agent `id` | Fejl | Afvis eller sæt agentidentiteten i karantæne. |
| Agenttype, der ikke understøttes | Funktion, der ikke understøttes | Bevar som en udvidelse, eller rapporter, at det ikke er muligt at behandle. |
| Indlæg uden agent eller mål | Fejl | Afvis indlægget. |
| Bidrag uden rolle | Fejl | Afvis eller sæt bidraget i karantæne. |
| Ugyldig henvisning til agent, mål, tilhørsforhold eller erstatning | Fejl | Rapporter og bevar uafklarede data, hvor det er muligt. |
| Ugyldig skema-syntaks | Fejl | Rapporter; markér ikke som verificeret. |
| Resolver ikke tilgængelig | Advarsel | Bevar påstanden og rapporter status som uafklaret. |
| Modstridende verificerede identifikatorer | Fejl | Bevar konflikten; forhindr automatisk sammenfletning. |
| Flere foretrukne navne i samme sammenhæng | Fejl | Rapporter og kræv deterministisk håndtering af konflikter. |
| Begrænset offentliggørelse | Sikkerhedsfejl | Blokér, rediger eller erstat inden offentliggørelse. |
| Tilknytning til et umuligt datointerval | Fejl | Rapportér; datoerne må ikke omarrangeres uden at give besked. |
| Ukendt udvidelsesegenskab | Advarsel eller understøttet udvidelse | Bevar i henhold til udvidelsespolitikken. |

### 10.3 Manglende, null- og tomme værdier

- En manglende egenskab betyder, at der ikke angives nogen påstand.
- `null` Må IKKE anvendes som erstatning for »tilbageholdt«, »ukendt« eller »ikke relevant«, medmindre en serialiseringsprofil definerer denne tilknytning.
- En tom streng er ikke et gyldigt navn, en gyldig identifikatorværdi, en gyldig kontaktværdi eller en gyldig rolle.
- En tom matrix betyder, at producenten fastslår, at der ikke findes nogen værdier i den pågældende matrix for den serialiserede kontekst.
- »Ukendt«, »ikke oplyst«, »anonym« og »ikke relevant« SKAL anvende eksplicit semantik, når denne skelnen er af betydning.

### 10.4 Bevarelse af fejl

**REQ-IDN-110:** En forbruger, der ikke er i stand til at fortolke en påstand, BØR gemme påstanden, dens identifikator, synlighed og herkomst med henblik på eksport i begge retninger.

**REQ-IDN-111:** En validator SKAL angive placeringen og klassificeringen af hver enkelt fejl i identitetsmodellen uden at afsløre fortrolige værdier i logfiler, der er beregnet til et bredere publikum.

## 11. Udvidelsesmuligheder

### 11.1 Udvidelsespunkter

Udvidelser kan definere:

- yderligere agenttyper;
- navneanvendelser;
- identifikationssystemer;
- verifikationsstatus;
- tilknytningsroller;
- kontakttyper;
- bidragsroller;
- synlighedstilstande;
- bevis for herkomst;
- profilspecifikke begrænsninger.

### 11.2 Ukendte filtyper

En kompatibel klient BØR bevare indholdet af ukendte udvidelser, når det er sikkert. Den KAN se bort fra udvidelsers semantik, som den ikke implementerer, men MÅ IKKE fortolke udvidelsen som en kerneegenskab.

Udvidelser MÅ IKKE:

- svække reglerne om privatlivsbeskyttelse;
- omdefinere en kerneagenttype;
- omdanne en konto til en agent;
- at betragte en rolle som en permanent egenskab ved en agent;
- omgå status for identifikationskontrol;
- Fjern herkomstoplysningerne fra en ekstern påstand.

### 11.3 Regler for navneområder

Udvidelsesudtryk BØR anvende en URI, et registreret præfiks eller et kollisionssikkert navnerum. Ukvalificerede lokale strenge MÅ kun anvendes inden for en profil eller et system, der definerer deres anvendelsesområde.

## 12. Versionsstyring og kompatibilitet

Denne specifikation følger »OMI«-versionspolitikken.

### 12.1 Kompatibilitetsmål

De gældende dimensioner er:

- læsekompatibilitet;
- skrivekompatibilitet;
- kompatibilitet i begge retninger;
- skemakompatibilitet;
- kompatibilitet mellem identiteter og referencer;
- overensstemmelse med privatlivspolitikken;
- profilkompatibilitet.

### 12.2 Kompatible ændringer

En mindre opdatering eller en patch kan:

- tilføj en valgfri egenskab;
- tilføj et agent- eller rollebegreb, der ikke er i konflikt;
- præcisere sammenlignings- eller visningsadfærd;
- tilføj en identifikatortilknytning;
- tilføj et eksempel eller en valideringsadvarsel;
- præcisere retningslinjerne for herkomst uden at ændre den nuværende betydning.

### 12.3 Ændringer, der medfører inkompatibilitet

En ændring, der medfører inkompatibilitet, omfatter:

- ændring af identitets- og lighedssemantik;
- ændring af den krævede identitetspersistens;
- at gøre en frivillig identitetsoplysning obligatorisk;
- at ændre betydningen af »ukendt«, »fortroligt«, »anonym« eller »pseudonym«;
- erstatning af bidraghenvisninger med indlejrede agentkopier;
- ændring af fortolkningen af ordren;
- fjernelse af påkrævet herkomstangivelse eller verifikationsstatus;
- at ændre standardindstillingerne for synlighed på en måde, der kan medføre, at data bliver afsløret.

### 12.4 Migration

En migrering SKAL bevare:

- agentidentifikatorer eller eksplicitte erstatningsaliaser;
- alle henvisninger til bidrag;
- navneformer og skrifter;
- påstande om eksterne identifikatorer og verifikationsstatus;
- tilhørsforholdssammenhæng;
- synlighedsbegrænsninger;
- herkomst;
- uløste konflikter.

Migrationsafdelingen SKAL indberette ethvert tab af oplysninger.

### 12.5 Udfasning

En forældet egenskab eller et forældet udtryk SKAL angive:

- udskiftning;
- berørte versioner;
- kompatibilitetsadfærd;
- den tidligste version af fjernelsen;
- krav til migration.

## 13. Interoperabilitet

### 13.1 Eksterne standarder og systemer

| Ekstern standard eller system | Retning | Kortlægningens kvalitet | Bemærkninger |
|---|---|---|---|
| ORCID | Tovejs | Betinget tabsløs | Identifikations- og verifikationsherkomst kræver separat håndtering. |
| ROR | Tovejs | Betinget tabsfrit | Gælder for organisationers identiteter og tilhørsforhold. |
| CRediT | Tovejs | Betinget tabsfrit | Kortlægger bidrags- og rollebegreber, ikke agenters identitet. |
| JATS XML metadata om bidragydere | Tovejs | Kan medføre tab | Navn, rolle, tilknytning og anonymitetsmodeller varierer alt efter profil. |
| Metadata fra Crossref-bidragere | Eksport og import | Kan medføre tab | Data vedrørende arbejdsgange og personlige identitetsoplysninger indgår ikke i de almindelige indleveringsoptegnelser. |
| Metadata fra DataCite-bidragere | Eksport og import | Kan medføre tab | Rolleleksikon og navneidentifikatorer kræver tilknytning. |
| CSL JSON navne | Tovejs | Potentielt med tab | CSL navneobjekter repræsenterer ikke den fulde OMI identitetsmodel. |
| Schema.org-agenter | Tovejs | Kan medføre tab | Kontekst og herkomst kan kræve udvidelser. |

### 13.2 Opbevaring af oplysninger

Kortlægninger BØR bevare:

- en fast lokal identitet;
- kildenavnsstrenger;
- navn, sprog og skriftsystem;
- identifikationsskema og værdi;
- bidragsrolle;
- rækkefølge efter bidragyder;
- tilhørsforholdsoplysninger og identifikatorer;
- tilsvarende status;
- anonymitet eller tilbageholdt status;
- herkomst og verifikationsstatus, hvor målet tillader det.

En kortlægningsrapport SKAL påpege udeladte eller forenklede semantiske elementer.

### 13.3 Adfærd ved returflyvning

En rundtur er kun tabsfri, hvis målformatet kan bevare al relevant semantik vedrørende identitet, rolle, rækkefølge, tilhørsforhold, synlighed og herkomst. I modsat fald SKAL processoren klassificere rundturen som betinget tabsfri eller tabsgivende.

## 14. Overvejelser vedrørende sikkerhed, privatliv og integritet

Identitetsdata kan indeholde personoplysninger, fortrolige identiteter i forbindelse med peer review, kontaktoplysninger, tilknytning til institutioner, permanente identifikatorer og historisk tilskrivning. Forkert offentliggørelse eller sammenfletning kan skade enkeltpersoner og forvride den videnskabelige herkomst.

### 14.1 Begrænsning af dataindsamlingen

**REQ-IDN-200:** En producent SKAL udelukkende medtage de identitets- og kontaktoplysninger, der er nødvendige for det angivne formål og målgruppe.

### 14.2 Adgangskontrol

**REQ-IDN-201:** Begrænsede og private påstande SKAL beskyttes ved hjælp af adgangskontrol, der svarer til deres klassificering.

**REQ-IDN-202:** Offentlige eksportfiler SKAL anvende synlighedsregler rekursivt på navne, identifikatorer, kontakter, tilknytninger, bidrag og herkomstdokumentation.

### 14.3 Identifikatorers integritet

**REQ-IDN-203:** En bruger SKAL bevare verifikationsstatus og MÅ IKKE hæve tillidsniveauet alene på grund af, at en identifikator er syntaktisk gyldig.

**REQ-IDN-204:** Svar fra resolveren SKAL behandles som ekstern inddata og valideres inden brug.

### 14.4 Sikkerhed ved sammenfletning

**REQ-IDN-205:** En sammenfletning baseret på probabilistisk matchning SKAL kræve en gennemgang eller en reversibel arbejdsgang, når den kan ændre den offentlige tilskrivning.

### 14.5 Logning

**REQ-IDN-206:** Logfiler og valideringsrapporter BØR anvende postidentifikatorer eller redigerede værdier i stedet for private kontaktoplysninger og navne, der er underlagt begrænsninger.

### 14.6 Adskillelse af konti

Autentificeringsoplysninger og udbydertokens SKAL forblive uden for OMI videnskabelige dokumenter og pakker. Et importeret manuskript MÅ IKKE kunne oprette en tilknytning til en autentificeret konto uden en eksplicit betroet handling.

## 15. Overvejelser vedrørende tilgængelighed

Brugergrænseflader, der viser identitetsoplysninger, BØR:

- fremvise det fulde tilgængelige navn uafhængigt af den visuelle navneformatering;
- undgå at basere verifikation eller synlighedstilstand udelukkende på farven;
- angive tekstmærker for identifikationsordninger og verifikationsstatus;
- gøre bidragydernes rækkefølge og tilhørende status tilgængelig for hjælpemidler;
- bevare tastaturadgangen til alternative navne, tilhørsforhold og herkomst;
- undgå at afkorte navne på en måde, der fjerner karakteristiske oplysninger uden en tilgængelig udvidelse;
- Gør det muligt for brugeren at rette forkert analyserede navnekomponenter.

Den underliggende model SKAL bevare de semantiske forskelle, der er nødvendige for en tilgængelig gengivelse.

## 16. Overvejelser vedrørende internationalisering

### 16.1 Navne

Implementeringer SKAL understøtte Unicode-navneværdier. De MÅ IKKE antage:

- Hver person har et fornavn og et efternavn;
- efternavnet står efter fornavnet;
- Alle komponenter adskilles af mellemrum;
- stor- og småbogstaver kan uden problemer normaliseres;
- ét script er det kanoniske;
- translitterationen er reversibel;
- Et navn er sprogneutralt.

### 16.2 Sprog og skrift

Der BØR anvendes BCP 47-sprogkoder til angivelse af sprog. ISO 15924-skriftsystemkoder KAN supplere sprogkoderne, hvor det er nødvendigt.

### 16.3 Sortering

Sorteringsnøgler er metadata om behandlingen, ikke identitet. En lokalitetsspecifik, genereret sorteringsnøgle MÅ IKKE overskrive kildenavnet.

### 16.4 Datoer og klokkeslæt

Dato-værdier MÅ IKKE konverteres til dato-tid-værdier uden at bevare deres oprindelige præcision. Dato-tid-værdier BØR følge ISO 8601 og indeholde et tidsforskud eller en angivet tidszone, når denne skelnen er af betydning.

### 16.5 Tovejs tekst

Renderere SKAL anvende sikker håndtering af tovejs-tekst og MÅ IKKE ændre rækkefølgen af de gemte navne udelukkende på baggrund af retningen i den omgivende grænseflade.

## 17. Eksempler

Eksemplerne er informative, indtil de standardiserede skemaer og testdata bliver offentliggjort.

### 17.1 Mindste antal personer og bidrag

```json
{
  "agents": [
    {
      "id": "agent-001",
      "type": "person",
      "names": [
        {
          "id": "name-001",
          "display": "Judit Balogh",
          "given": "Judit",
          "family": "Balogh",
          "language": "hu",
          "preferred": true
        }
      ]
    }
  ],
  "contributions": [
    {
      "id": "contribution-001",
      "agent": "agent-001",
      "target": "manuscript-001",
      "roles": [
        {
          "id": "role-001",
          "term": "author"
        }
      ],
      "order": 1,
      "orderContext": "author-list"
    }
  ]
}
```

I dette eksempel adskilles agenten fra bidraget, og rækkefølgen afhænger af konteksten.

### 17.2 Ekstern identifikator og tilhørsforhold

```json
{
  "id": "agent-002",
  "type": "person",
  "names": [
    {
      "id": "name-002",
      "display": "Katalin Kovács",
      "language": "hu"
    }
  ],
  "identifiers": [
    {
      "id": "identifier-001",
      "scheme": "orcid",
      "value": "0000-0002-1825-0097",
      "uri": "https://orcid.org/0000-0002-1825-0097",
      "subject": "agent-002",
      "verification": "self-asserted",
      "source": {
        "sourceType": "user",
        "assertedBy": "agent-002"
      }
    }
  ],
  "affiliations": [
    {
      "id": "affiliation-001",
      "agent": "agent-002",
      "organization": "agent-org-001",
      "unit": "Department of History",
      "validFrom": "2024-09-01",
      "source": {
        "sourceType": "user",
        "assertedBy": "agent-002"
      }
    }
  ]
}
```

### 17.3 Bidrag under pseudonym

```json
{
  "agents": [
    {
      "id": "agent-pseudonym-001",
      "type": "person",
      "names": [
        {
          "id": "name-pseudonym-001",
          "display": "Researcher North",
          "usage": "pseudonym",
          "preferred": true
        }
      ]
    }
  ],
  "contributions": [
    {
      "id": "contribution-pseudonym-001",
      "agent": "agent-pseudonym-001",
      "target": "review-001",
      "roles": [
        {
          "id": "role-reviewer-001",
          "term": "reviewer"
        }
      ],
      "visibility": "restricted"
    }
  ]
}
```

### 17.4 Ugyldig indlejret bidragyder

```json
{
  "contributions": [
    {
      "id": "contribution-invalid-001",
      "agent": {
        "fullName": "Example Author",
        "email": "author@example.org"
      },
      "target": "manuscript-001",
      "roles": []
    }
  ]
}
```

Dette er ugyldigt, fordi bidraget indeholder en personpost, der ligner en konto, i stedet for at henvise til en agent, ikke indeholder nogen bidragsrolle og offentliggør kontaktoplysninger uden en synlighedsklassificering.

### 17.5 Ugyldig automatisk sammenfletning

```json
{
  "merge": {
    "agents": ["agent-101", "agent-202"],
    "reason": "same-display-name"
  }
}
```

Dette er ugyldigt, da navnligighed i sig selv ikke er tilstrækkeligt bevis for en identitetssammenfletning.

## 18. Normative henvisninger

- Open Manuscript Initiative, *Core Principles*, `OMI-SPEC-000`, version `0.1.0`.
- Open Manuscript Initiative: *Scholarly Object Model*, `OMI-SPEC-120`, version `0.1.0`.
- Open Manuscript Initiative: *Metadata Model*, `OMI-SPEC-140`, version `0.1.0`.
- Open Manuscript Initiative: *Terminologi og definitioner*.
- Open Manuscript Initiative, *Specification Lifecycle*.
- Open Manuscript Initiative, *Versioneringspolitik*.

## 19. Informative referencer

- ORCID identifikations- og registreringssystem.
- Register over forskningsorganisationer.
- CRediT-taksonomi for bidragyderroller.
- JATS Metadata om bidragydere.
- Metadata fra Crossref-bidragere.
- Metadata fra DataCite-bidragere.
- Citeringsformat: Sprognavnsmodel.

## 20. Status for gennemførelsen

Open Manuscript Studio indeholder i øjeblikket udforskende identitetsrelaterede strukturer:

- `OmiPerson` med strukturerede navne, tilhørsforholdsangivelser og identifikatorer;
- `User` med en kontoidentifikator, e-mailadresse, profil, ORCID, eksterne login-identiteter og indstillinger;
- `WorkspaceMember` med kontekstbaserede roller i arbejdsområdet.

Disse strukturer viser relevant designarbejde, men implementerer endnu ikke denne specifikation. Især mangler den nuværende Studio-model stadig:

- eksplicit adskillelse af konto- og agentidentitet;
- bidragsobjekter, der er uafhængige af personer;
- kontekstuelle tilknytninger;
- påstande om eksterne identifikatorer med herkomstangivelse;
- flere flersprogede navneformer;
- håndtering af beskyttet synlighed;
- identitetsafstemning og reversibel sammenfletning;
- tilknytning mellem krav og kode samt overensstemmelsestests.

Den autoritative klassificering af beviser findes i »[Implementation Status Matrix](../governance/implementation-status-matrix.md)«.

## 21. Uafklarede spørgsmål

| Problem | Konsekvens | Nødvendig beslutning | Opfølgning |
|---|---|---|---|
| Canonicals ordbog over maskinlæsbare egenskaber | Offentliggørelse af skema | Fastlægge de nøjagtige navne og navneområder for serialisering. | Fremtidige skema-spørgsmål |
| Agentidentitetens gyldighedsområde på tværs af pakker og arkiver | Identifikatorers stabilitet | Definer, hvornår lokale ID’er forbliver uændrede under overførsel. | Koordinering af `OMI-SPEC-160` |
| Register over kontrollerede bidrag og roller | Interoperabilitet | Beslut, om OMI skal anvende, tilpasse eller kortlægge CRediT og lokale roller. | Fremtidigt spørgsmål vedrørende registret |
| Ordliste for verifikationsstatus | Samvirke mellem resolverne | Fastlægge mindstekrav til fælles status og dokumentation. | Fremtidigt valideringsspørgsmål |
| Anonymisering af anmelderens identitet | Privatliv og bevaring | Samordning af beskyttet identitet med anmeldelses- og containermodeller. | `OMI-SPEC-200` og `OMI-SPEC-330` |
| Udveksling af kontotilknytninger | Sikkerhed | Fastlæg, om en beskyttet profil må serialisere kontotilknytninger. | `OMI-SPEC-190` og `OMI-SPEC-310` |
| Oversigt over gruppeforfatterskab og medlemskab af konsortier | Navngivning | Definer dokumentation for medlemskab og tidsmæssig sammenhæng. | Fremtidig revisionsudkast |
| Begivenhedsmodel for sammenlægning og opdeling af identiteter | Herkomst | Knyt operationer til versions- og ændringsmodellen. | `OMI-SPEC-160` |

## 22. Ændringshistorik

| Version | Dato | Status | Ændringskategori | Resumé |
|---|---|---|---|---|
| `0.1.0` | 06.08.2026 | Udkast | Første udkast | Aktiverede `OMI-SPEC-150` og definerede agenter, navne, eksterne identitetserklæringer, tilknytninger, bidrag, kontoseparation, privatliv, validering samt krav til interoperabilitet. |

## 23. Tak

Dette udkast bygger på den eksisterende terminologi fra »OMI«, bruger- og arbejdsområdemodellerne fra »Open Manuscript Studio« samt etablerede praksis inden for akademiske identifikatorer og metadata om bidragydere. Menneskelige vedligeholdere har fortsat ansvaret for alt normativt indhold.
