---
id: scholarly-object-model
title: OMI-SPEC-120 — Videnskabelig objektmodel
sidebar_label: Videnskabelig objektmodel
sidebar_position: 1
description: Definerer den fælles objektmodel for alle semantisk betydningsfulde enheder i »Open Manuscript Initiative«.
keywords:
  - Open Manuscript Initiative
  - OMI
  - scholarly object
  - semantic publishing
  - manuscript model
  - structured documents
  - scholarly communication
---

# OMI-SPEC-120 — Videnskabelig objektmodel

**Status:** Udkast  
**Version:** 0.1.0  
**Stabilitet:** Eksperimentel  
**Kategori:** Kerne-specifikation  

**Afhænger af:**

- OMI-SPEC-000 — Grundlæggende principper

**Anvendes af:**

- OMI-SPEC-100 — Dokumentmodel
- OMI-SPEC-110 — Anker-modellen
- OMI-SPEC-130 — Annotationsmodel
- OMI-SPEC-140 — Metadatamodel
- OMI-SPEC-200 — Testmodel
- OMI-SPEC-230 — Udgivelsesmodel

---

## Resumé

Scholarly Object Model definerer det fælles semantiske grundlag for alle meningsfulde enheder, der er repræsenteret i Open Manuscript Initiative.

Et videnskabeligt manuskript betragtes ikke blot som en række formaterede tegn. Det fremstilles som en struktureret graf bestående af identificerbare videnskabelige objekter og eksplicitte semantiske relationer.

Eksempler på videnskabelige objekter omfatter manuskripter, afsnit, paragraffer, figurer, tabeller, ligninger, kildehenvisninger, bibliografiske poster, kommentarer, anmeldelser, datasæt, bidragydere og supplerende materiale.

Denne specifikation definerer:

- hvad der udgør et forskningsobjekt;
- de fælles egenskaber, som videnskabelige objekter har til fælles;
- objektidentitet og typebestemmelse;
- objekters indlejring og relationer;
- krav til livscyklus og herkomst;
- udvidelsesmekanismer;
- forventninger til overensstemmelse.

Scholarly Object Model fastlægger ikke den visuelle præsentation, lagringsteknologien, databasestrukturen eller brugergrænsefladens funktionalitet.

---

# 1. Anvendelsesområde

Denne specifikation definerer den abstrakte objektmodel, der anvendes i hele økosystemet omkring »OMI«.

Det gælder for:

- det kanoniske manuskripts indhold;
- metadata for manuskripter;
- strukturelle dokumentkomponenter;
- semantiske relationer;
- kommentarer;
- gennemgå objekter;
- publikationsressourcer;
- arbejdsgangsrelaterede videnskabelige enheder;
- videnskabelige kilder med eksterne henvisninger.

Denne specifikation definerer ikke:

- dokumentlayout;
- typografi;
- sidens geometri;
- brugergrænsefladekomponenter;
- databaseskemaer;
- netværksprotokoller;
- publikationsspecifik formatering;
- et komplet serialiseringsformat.

Konkrete serialiseringsregler kan fastlægges i separate specifikationer for »OMI«.

---

# 2. Normativt sprog

Nøgleordene **SKAL**, **MÅ IKKE**, **KRÆVES**, **SKAL**, **MÅ IKKE**, **BØR**, **BØR IKKE**, **ANBEFALES**, **KAN** og **VALGFRIT** i dette dokument skal fortolkes som normative krav.

---

# 3. Grundlæggende begreb

Et videnskabeligt objekt er en identificerbar semantisk enhed, der indgår i videnskabelig kommunikation.

Et videnskabeligt objekt kan repræsentere:

- intellektuelt indhold;
- strukturel organisering;
- beskrivende metadata;
- et semantisk forhold;
- et redaktionelt indlæg eller en anmeldelse;
- et publikationsmateriale;
- en ekstern videnskabelig kilde;
- en tilstand eller beslutning, der er relevant for arbejdsgangen.

Ethvert videnskabeligt objekt eksisterer uafhængigt af sin visuelle fremstilling.

```text
Scholarly Object
│
├── Identity
├── Type
├── Semantic content
├── Metadata
├── Relationships
├── Provenance
└── Lifecycle state
```

Et videnskabeligt objekt defineres ikke ud fra, hvordan det fremstår på en side.

---

# 4. Arkitektonisk rolle

Scholarly Object Model er den fælles abstraktionsmodel, der ligger til grund for OMI-specifikationsfamilien.

```text
OMI-SPEC-000
Core Principles
      │
      ▼
OMI-SPEC-120
Scholarly Object Model
      │
      ├── Document Model
      ├── Anchor Model
      ├── Annotation Model
      ├── Metadata Model
      ├── Review Model
      ├── Citation Model
      └── Publishing Model
```

Andre specifikationer definerer specifikke typer af videnskabelige objekter og relationer mellem disse.

---

# 5. Objektgrafmodel

Et »OMI«-manuskript repræsenteres konceptuelt som en graf.

```text
Scholarly objects
        +
Explicit relationships
        =
Scholarly object graph
```

Grafen består af knudepunkter og kanter.

- En **node** er et videnskabeligt objekt.
- En **forbindelse** er et semantisk forhold mellem videnskabelige objekter.

Eksempel:

```text
Manuscript
    │ contains
    ▼
Section
    │ contains
    ▼
Paragraph
    │ cited-by
    ▼
Citation
    │ refers-to
    ▼
Bibliographic Record
```

Relationer SKAL kunne skelnes fra visuel formatering.

---

# 6. Et minimalt videnskabeligt objekt

Hvert videnskabeligt arbejde SKAL indeholde:

- en stabil identifikator;
- en objekttype.

Et minimalt eksempel:

```json
{
  "id": "obj-01J9A6K8P3",
  "type": "paragraph"
}
```

`id`en angiver, hvad objektet er.

`type`en definerer sin semantiske kategori.

---

# 7. Fælles objektstruktur

Et videnskabeligt objekt KAN indeholde følgende almindelige egenskaber:

```json
{
  "id": "obj-01J9A6K8P3",
  "type": "paragraph",
  "schemaVersion": "0.1",
  "content": {},
  "metadata": {},
  "relationships": [],
  "provenance": {},
  "status": "active",
  "extensions": {}
}
```

En generisk TypeScript-repræsentation kan udtrykkes som:

```ts
export interface ScholarlyObject<TContent = unknown> {
  id: string;
  type: string;
  schemaVersion?: string;
  content?: TContent;
  metadata?: Record<string, unknown>;
  relationships?: ScholarlyRelationship[];
  provenance?: ProvenanceRecord;
  status?: ScholarlyObjectStatus;
  extensions?: Record<string, unknown>;
}
```

Konkrete objekttyper KAN indskrænke, kræve eller udvide disse egenskaber.

---

# 8. Objektidentitet

## 8.1 Stabile identifikatorer

Hvert videnskabeligt objekt SKAL have en identifikator, der er unik inden for den overordnede OMI-pakke eller -repositoriumskontekst.

En identifikator BØR forblive uændret under almindelige redigeringshandlinger.

Eksempler på almindelig redigering omfatter:

- rettelse af stavefejl;
- ændring af ordlyden;
- at flytte et afsnit inden for det samme manuskript;
- omarrangering af afsnit;
- ændring af outputformat;
- anvendelse af en udgiverprofil;
- konvertering mellem understøttede serialiseringsformater.

Et objekt MÅ IKKE tildeles en ny identitet alene på grund af ændringer i dets visuelle fremstilling.

---

## 8.2 Identifikatorers uigennemsigtighed

Objektidentifikatorer BØR behandles som uigennemsigtige værdier.

Implementeringer MÅ IKKE udlede semantisk betydning ud fra en identifikators interne struktur, medmindre identifikatorsystemet udtrykkeligt definerer en sådan betydning.

Anbefalet:

```json
{
  "id": "obj-01J9A6K8P3D7M5Q2R"
}
```

Modløs:

```json
{
  "id": "chapter-2-paragraph-4"
}
```

Den anden form er ustabil, da en strukturel omorganisering kan gøre identifikatoren ugyldig.

---

## 8.3 Identifikatorens gyldighedsområde

En identifikator SKAL være entydig inden for det angivne anvendelsesområde.

Mulige anvendelsesområder omfatter:

- manuskript;
- OMI pakke;
- arkiv;
- institutionel platform;
- et navneområde, der kan opløses globalt.

En separat specifikation KAN definere globale identifikationsordninger.

---

## 8.4 Bevarelse af identitet

Når et objekt ændres uden at dets semantiske kontinuitet ændres, BØR identifikatoren forblive uændret.

Når et objekt erstattes af et semantisk forskelligt objekt, BØR der tildeles en ny identifikator.

For eksempel:

```text
Typographical correction
→ same object identity

Paragraph moved to another section
→ same object identity

Paragraph divided into two independent arguments
→ original object may be superseded by two new objects
```

Sådanne ændringer BØR registreres i herkomstoplysningerne eller versionshistorikken.

---

# 9. Objekttyper

## 9.1 Typeegenskab

Egenskaben »`type`« angiver et objekts semantiske klasse.

Eksempler:

```json
{
  "type": "manuscript"
}
```

```json
{
  "type": "figure"
}
```

```json
{
  "type": "review-annotation"
}
```

Objekttyper BØR have navne med små bogstaver, der kan læses af computeren.

Navne med bindestreg ANBEFALES til sammensatte typer.

---

## 9.2 Vigtigste objektkategorier

OMI skelner mellem flere overordnede kategorier af videnskabelige objekter.

```text
Scholarly Object
│
├── Content Object
├── Structural Object
├── Relationship Object
├── Agent Object
├── Asset Object
├── Workflow Object
└── External Resource Object
```

Disse kategorier er af teoretisk art og kræver ikke nødvendigvis arv i implementeringskoden.

---

# 10. Indholdsobjekter

Indholdsobjekter indeholder intellektuelt materiale eller bevismateriale.

Eksempler herpå er:

- afsnit;
- overskrift;
- citat;
- liste;
- listepunkt;
- kodeblok;
- ligning;
- sætning;
- definition;
- eksempel;
- transskription;
- bibliografisk post;
- ordlisteoplysning.

Eksempel:

```json
{
  "id": "paragraph-01",
  "type": "paragraph",
  "content": {
    "children": [
      {
        "type": "text",
        "value": "Scholarly content remains independent of presentation."
      }
    ]
  }
}
```

Indholdsobjekter BØR bevare semantiske forskelle, der kan være relevante for fortolkningen eller gengivelsen.

---

# 11. Strukturelle objekter

Strukturelle objekter organiserer videnskabeligt indhold.

Eksempler herpå er:

- manuskript;
- del;
- kapitel;
- afsnit;
- underafsnit;
- bilag;
- forord;
- efterord;
- litteraturliste;
- figurgruppe;
- bordgruppe.

Eksempel:

```json
{
  "id": "section-methods",
  "type": "section",
  "content": {
    "title": "Methods",
    "children": [
      "paragraph-01",
      "paragraph-02",
      "table-01"
    ]
  }
}
```

Indeslutning SKAL angives eksplicit.

Visuel nærhed alene må IKKE være afgørende for, om man hører til en struktur.

---

# 12. Aktivobjekter

Asset-objekter repræsenterer filer eller medier, der er knyttet til videnskabeligt indhold.

Eksempler herpå er:

- billede;
- lyd;
- video;
- datasæt;
- kildearkiv;
- supplerende fil;
- kørbar notesbog;
- tredimensionel model.

Eksempel:

```json
{
  "id": "asset-figure-01",
  "type": "image",
  "content": {
    "href": "assets/figure-01.png",
    "mediaType": "image/png"
  },
  "metadata": {
    "altText": "Diagram of the OMI semantic layers."
  }
}
```

Et aktivobjekt BØR indeholde:

- mediatype;
- ressourcens placering;
- oplysninger om integritet, hvor sådanne foreligger;
- metadata om tilgængelighed, hvor det er relevant.

---

# 13. Relationsobjekter

Relationsobjekter udtrykker semantiske forbindelser mellem videnskabelige objekter.

Eksempler herpå er:

- henvisning;
- kommentar;
- krydshenvisning;
- afledning;
- oversættelse;
- rettelse;
- anmeldelse;
- afhængighed;
- link til herkomst;
- forholdet mellem del og helhed.

Et relationsobjekt BØR angive:

- forholdstypen;
- et eller flere kildeobjekter;
- et eller flere målobjekter;
- valgfri metadata om relationer;
- valgfri herkomst.

Eksempel:

```json
{
  "id": "rel-citation-01",
  "type": "citation",
  "source": [
    "paragraph-01"
  ],
  "target": [
    "reference-17"
  ]
}
```

Forhold BØR IKKE udelukkende angives ved hjælp af visuelle markører såsom tal i superscript, farver eller indrykning.

---

# 14. Agentobjekter

Agentobjekter repræsenterer aktører inden for videnskabelig kommunikation.

Eksempler herpå er:

- person;
- organisation;
- redaktionsgruppen;
- softwareagent;
- AI-system;
- institutionelt arkiv;
- udgivelsesplatform.

Eksempel:

```json
{
  "id": "agent-author-01",
  "type": "person",
  "metadata": {
    "name": "Example Author",
    "roles": [
      "author"
    ]
  }
}
```

Identitetsfølsomme oplysninger KAN lagres adskilt fra det bærbare indhold.

Anonyme arbejdsgange BØR anvende rolle-specifikke eller pseudonyme agenthenvisninger i stedet for offentlige identitetsoplysninger.

---

# 15. Workflow-objekter

Workflow-objekter repræsenterer strukturerede videnskabelige processer eller beslutninger.

Eksempler herpå er:

- indsendelse;
- gennemgangsopgave;
- evalueringsrapport;
- redaktionel beslutning;
- anmodning om revision;
- godkendelse;
- rettelse;
- tilbagetrækning;
- udgivelsesstatus.

Eksempel:

```json
{
  "id": "decision-01",
  "type": "editorial-decision",
  "content": {
    "decision": "major-revision"
  },
  "status": "completed"
}
```

Workflow-objekter KAN være overførbare, begrænsede eller institutionsspecifikke, afhængigt af deres krav til privatlivsbeskyttelse og sikkerhed.

---

# 16. Eksterne ressourceobjekter

Eksterne ressourceobjekter repræsenterer videnskabelige enheder, der ikke er gemt direkte i pakken »OMI«.

Eksempler herpå er:

- tidsskriftartikel;
- bog;
- arkivoptegnelse;
- datasæt;
- ORCID post;
- ROR organisation;
- DOI ressource;
- webressource;
- begreb fra et kontrolleret ordforråd.

Eksempel:

```json
{
  "id": "external-resource-01",
  "type": "external-resource",
  "metadata": {
    "identifier": {
      "scheme": "doi",
      "value": "10.0000/example"
    }
  }
}
```

Henvisninger til eksterne ressourcer BØR anvende permanente identifikatorer, når sådanne er tilgængelige.

---

# 17. Sammensatte og atomare objekter

Et videnskabeligt objekt kan være sammensat eller enkeltstående.

## 17.1 Sammensat objekt

Et sammensat objekt indeholder eller henviser til andre objekter.

Eksempler herpå er:

- manuskript;
- afsnit;
- figur med billedtekst og medier;
- tabel med rækker og celler;
- litteraturliste;
- evalueringsrapport.

## 17.2 Atomobjekt

Et atomobjekt betragtes som udeleligt inden for et bestemt modellag.

Eksempler kan blandt andet være:

- tekstnode;
- matematisk symbol;
- værdien i en tabelcelle;
- kontrolleret metadataværdi.

Atomicitet afhænger af modellen.

Et objekt, der i én specifikation betragtes som atomært, KAN opdeles i en anden, specialiseret specifikation.

---

# 18. Inddæmning

Inddæmning er ensbetydende med strukturel inklusion.

Eksempel:

```json
{
  "id": "section-01",
  "type": "section",
  "content": {
    "children": [
      "paragraph-01",
      "figure-01"
    ]
  }
}
```

Indkapslingsforhold BØR opfylde følgende krav:

1. Et underobjekt BØR have en forælder, der kan identificeres, inden for et kanonisk dokumenthierarki.
2. Der må IKKE forekomme cirkulær indeslutning.
3. Indkapslingsordren SKAL være eksplicit, når ordren er semantisk betydningsfuld.
4. Når et objekt fjernes fra en overordnet enhed, må dets identitet IKKE automatisk slettes.
5. Når et objekt flyttes mellem overordnede objekter, BØR dets identitet bevares.

---

# 19. Bestilling

Nogle objektsamlinger er sorteret.

Eksempler herpå er:

- afsnit i et manuskript;
- afsnit i et kapitel;
- listepunkter;
- tabelrækker;
- forfattere i den angivne rækkefølge.

Rækkefølgen SKAL angives eksplicit, når den har betydning for betydningen eller fremstillingen.

Implementeringer KAN angive rækkefølge ved hjælp af:

- ordnede tabeller;
- sekvensegenskaber;
- eksplicitte forgænger-efterfølger-relationer.

Rækkefølgen BØR IKKE udledes ud fra lagringsplaceringen eller filnavnet.

---

# 20. Relationer

Et generisk akademisk forhold kan fremstilles som følger:

```ts
export interface ScholarlyRelationship {
  id?: string;
  type: string;
  source: string[];
  target: string[];
  metadata?: Record<string, unknown>;
  provenance?: ProvenanceRecord;
}
```

Eksempel:

```json
{
  "id": "relationship-01",
  "type": "supports",
  "source": [
    "dataset-01"
  ],
  "target": [
    "claim-01"
  ]
}
```

Et forhold KAN forbinde:

- ét objekt til ét objekt;
- fra ét objekt til flere objekter;
- flere objekter til ét objekt;
- fra flere objekter til flere objekter.

---

# 21. Henvisning ved identitet

Objekter BØR henvise til andre objekter ved hjælp af en identifikator.

Anbefalet:

```json
{
  "target": "paragraph-01"
}
```

Modløs:

```json
{
  "target": {
    "sectionNumber": 2,
    "paragraphNumber": 4
  }
}
```

Strukturelle positioner KAN anvendes som alternativer, men BØR IKKE erstatte en stabil objektidentitet.

Anker-modellen definerer mere præcise mekanismer til måludvælgelse.

---

# 22. Metadata

Hvert videnskabeligt objekt KAN indeholde metadata.

Metadata kan være:

- beskrivende;
- administrativ;
- teknisk;
- strukturel;
- relateret til bevarelse;
- fagspecifik;
- arbejdsgangsspecifik.

Eksempel:

```json
{
  "id": "figure-01",
  "type": "figure",
  "metadata": {
    "label": "Figure 1",
    "language": "en",
    "rights": "CC BY 4.0"
  }
}
```

Metadata, der deles på tværs af mange objekttyper, BØR følge OMI-SPEC-140.

---

# 23. Herkomst

Proveniens beskriver, hvordan et objekt er blevet skabt, ændret, importeret, genereret eller omdannet.

En herkomstoptegnelse KAN indeholde:

```ts
export interface ProvenanceRecord {
  createdAt?: string;
  createdBy?: string;
  modifiedAt?: string;
  modifiedBy?: string;
  generatedBy?: string;
  derivedFrom?: string[];
  activity?: string;
}
```

Eksempel:

```json
{
  "provenance": {
    "createdAt": "2026-07-21T18:30:00Z",
    "createdBy": "agent-author-01",
    "activity": "authoring"
  }
}
```

Væsentlige automatiserede ændringer BØR registreres.

AI-genererede eller AI-redigerede objekter SKAL kunne skelnes fra objekter, der udelukkende er skabt af mennesker, når sådanne oplysninger om oprindelsen foreligger.

---

# 24. Objektets livscyklus

Et videnskabeligt objekt KAN have en livscyklusstatus.

Anbefalede kernestatusværdier:

```ts
export type ScholarlyObjectStatus =
  | 'draft'
  | 'active'
  | 'superseded'
  | 'deprecated'
  | 'withdrawn'
  | 'deleted';
```

## 24.1 Udkast

Objektet er ufuldstændigt eller er endnu ikke blevet optaget i den kanoniske manuskriptsamling.

## 24.2 Aktiv

Objektet indgår i øjeblikket i den kanoniske videnskabelige dokumentation.

## 24.3 Er erstattet

Objektet er blevet erstattet af et andet objekt, men er stadig tilgængeligt med henblik på herkomst eller versionshistorik.

## 24.4 Udgået

Objektet kan stadig fortolkes, men BØR IKKE bruges til nyt indhold.

## 24,5 Tilbagetrukket

Objektet er bevidst blevet fjernet fra aktiv videnskabelig brug, idet der samtidig er opbevaret en revisionsjournal.

## 24.6 Slettet

Objektet er markeret til sletning.

Implementeringer BØR skelne mellem logisk sletning og irreversibel fysisk fjernelse.

---

# 25. Uforanderlighed og revision

OMI kræver ikke, at hvert eneste objekt skal være teknisk uforanderligt.

Implementeringer BØR dog bevare revisionshistorikken for ændringer, der påvirker den videnskabelige betydning.

Der kan anvendes to fremgangsmåder:

```text
Mutable object
+
Version history
```

eller:

```text
Immutable object versions
+
Stable conceptual identity
```

En versionsspecifikation kan indeholde en detaljeret beskrivelse af revisionssemantikken.

---

# 26. Erstatning og afledning af objekter

Når et objekt er afledt af et andet, BØR denne sammenhæng være tydelig.

Eksempel:

```json
{
  "id": "paragraph-02",
  "type": "paragraph",
  "provenance": {
    "derivedFrom": [
      "paragraph-01"
    ],
    "activity": "revision"
  }
}
```

Mulige afledningsaktiviteter omfatter:

- revision;
- oversættelse;
- normalisering;
- import;
- konvertering;
- udvinding;
- AI-støttet omskrivning;
- redaktionel rettelse.

---

# 27. Sprog

Et videnskabeligt objekt KAN angive sit sprog uafhængigt af sproget på manuskriptniveau.

Eksempel:

```json
{
  "id": "quotation-01",
  "type": "quotation",
  "metadata": {
    "language": "la"
  }
}
```

Sprogværdier BØR anvende anerkendte sprogidentifikatorer, såsom ISO 639-sprogkoder, som defineret i metadatamodellen.

---

# 28. Fagspecifikke objekter

Forskellige videnskabelige discipliner kræver specifikke objekttyper.

Eksempler herpå er:

## Humaniora

- arkivkilde;
- opslag i kritisk apparat;
- manuskriptvidne;
- transskriptionssegment;
- redaktionel rettelse.

## Matematik

- sætning;
- lemma;
- bevis;
- følge;
- matematisk definition.

## Kemi

- kemisk struktur;
- forbindelse;
- reaktion;
- spektraldata.

## Fysik

- fysisk størrelse;
- forsøgsopstilling;
- måling;
- erklæring om usikkerhed.

## Biologi

- prøve;
- taksonomisk navn;
- sekvens;
- protokol.

## Samfundsvidenskab

- undersøgelsesværktøj;
- variabel;
- eksempel;
- interviewafsnit.

Fagspecifikke objekter KAN udvide den fælles Scholarly Object Model.

De SKAL bevare de påkrævede egenskaber »`id`« og »`type`«.

---

# 29. Udvidelsesmodel

En implementering KAN indføre udvidelsesegenskaber eller brugerdefinerede objekttyper.

Udvidelser BØR anvende en identifikator med navnerum.

Eksempel:

```json
{
  "id": "object-01",
  "type": "example.org:archival-witness",
  "extensions": {
    "example.org": {
      "shelfmark": "MS 42"
    }
  }
}
```

Udvidelser med navneområder mindsker risikoen for konflikter mellem uafhængige implementeringer.

---

## 29.1 Krav til udvidelse

En udvidelse:

1. Man må IKKE omdefinere betydningen af en egenskab i en kerneOMI.
2. Objektets faste identitet SKAL bevares.
3. BØR kunne ignoreres af implementeringer, der ikke forstår det.
4. BØR stille offentlig dokumentation til rådighed.
5. Der BØR defineres valideringsregler.
6. Det må IKKE medføre, at basisobjektet bliver ufortolkeligt, når udvidelsen mangler.

---

# 30. Graciøs nedgradering

En implementering, der støder på en ukendt objekttype, BØR bevare den, når det er muligt.

Det KAN:

- vise en generisk fremstilling;
- afsløre det rå semantiske indhold;
- advare brugeren;
- lad objektet passere uændret;
- anmod om et supplerende plugin.

Den BØR IKKE uden varsel fjerne ukendte objekter.

Eksempel:

```text
Known object type
→ native editing and rendering

Unknown object type
→ preserve, identify, and render generically
```

Dette princip er afgørende for udvidelsesmulighederne på lang sigt.

---

# 31. Validering

Et videnskabeligt objekt er gyldigt, når:

- den indeholder en gyldig identifikator;
- den indeholder en gyldig type;
- de nødvendige typespecifikke egenskaber er til stede;
- dets referencer findes inden for det deklarerede anvendelsesområde eller er gyldige eksterne referencer;
- Dens indeslutning skaber ikke cyklusser;
- Dens udvidelsesdata omdefinerer ikke kernesemantikken.

Validering KAN finde sted på flere niveauer:

```text
Syntax validation
        ↓
Schema validation
        ↓
Reference validation
        ↓
Semantic validation
        ↓
Workflow validation
```

Et strukturelt gyldigt objekt kan stadig udløse semantiske advarsler.

---

# 32. Uafhængighed af serialisering

Den videnskabelige objektmodel er uafhængig af serialiseringsformatet.

Det kan angives ved hjælp af:

- JSON;
- JSON-LD;
- XML;
- CBOR;
- databaseposter;
- grafstrukturer;
- fremtidige interoperable formater.

En serialisering SKAL bevare:

- objektidentitet;
- objekttype;
- semantisk indhold;
- eksplicitte relationer;
- nødvendige metadata;
- herkomst, hvor denne er angivet.

Serialiseringsspecifikke specifikationer KAN medføre yderligere begrænsninger.

---

# 33. Uafhængighed i forbindelse med rendering

Et videnskabeligt objekt MÅ IKKE være afhængigt af én visuel gengivelse.

Et note-objekt kan f.eks. gengives som følger:

```text
HTML
→ popup or side panel

PDF
→ footnote or endnote

DOCX
→ native Word footnote

JATS XML
→ <fn>

Audio
→ spoken aside
```

Formålet er stadig det samme.

Det er kun rendereren, der ændrer sig.

---

# 34. Eksempel på en graf fra et manuskript

```text
Manuscript
│
├── Metadata
│   ├── Title
│   ├── Authors
│   └── Keywords
│
├── Section
│   ├── Heading
│   ├── Paragraph
│   │   ├── Citation
│   │   └── Annotation
│   └── Figure
│       ├── Image Asset
│       └── Caption
│
├── Bibliography
│   └── Bibliographic Record
│
└── Supplementary Dataset
```

Den samme graf kan gengives i flere forskellige publikationsformater uden at ændre dens underliggende semantik.

---

# 35. Eksempel på en objektsamling

```json
{
  "objects": [
    {
      "id": "manuscript-01",
      "type": "manuscript",
      "content": {
        "children": [
          "section-01"
        ]
      }
    },
    {
      "id": "section-01",
      "type": "section",
      "content": {
        "title": "Introduction",
        "children": [
          "paragraph-01"
        ]
      }
    },
    {
      "id": "paragraph-01",
      "type": "paragraph",
      "content": {
        "children": [
          {
            "type": "text",
            "value": "A manuscript is a graph of scholarly objects."
          }
        ]
      }
    }
  ]
}
```

Denne fremstilling er kun til illustration og udgør ikke et fuldstændigt serialiseringsskema.

---

# 36. Eksempel på et semantisk forhold

```json
{
  "id": "annotation-01",
  "type": "annotation",
  "content": {
    "body": {
      "format": "text/plain",
      "value": "This claim requires further evidence."
    }
  },
  "relationships": [
    {
      "type": "targets",
      "source": [
        "annotation-01"
      ],
      "target": [
        "paragraph-01"
      ]
    }
  ]
}
```

Annotationsmodellen muliggør en mere præcis målretning ved hjælp af ankre.

---

# 37. Ejerskab af objekter

OMI definerer ikke den juridiske ejendomsret til videnskabelige objekter.

Et objekts metadata KAN indeholde følgende oplysninger:

- rettighedshaver;
- licens;
- oplysning om ophavsret;
- institutionel forvaring;
- adgangsbegrænsninger.

Ejerskab, ophavsret, forvaring og teknisk kontrol er forskellige begreber og BØR IKKE forveksles.

---

# 38. Privatliv

Et videnskabeligt objekt KAN indeholde offentlige, begrænsede, fortrolige eller private data.

Fortrolighedsklassificeringen BØR være eksplicit, når det er relevant.

Eksempel:

```json
{
  "id": "review-01",
  "type": "review",
  "metadata": {
    "access": "confidential"
  }
}
```

Bærbare anonyme gennemgangsobjekter MÅ IKKE indeholde beskyttede identitetssammenkædninger.

Privatlivspolitikken præciseres yderligere gennem specifikationer for arbejdsgange.

---

# 39. Sikkerhedsmæssige overvejelser

Implementeringer SKAL behandle videnskabelige objekter som upålidelige input, når de importeres fra eksterne systemer.

De BØR beskytte mod:

- eksekverbart indhold, der er indlejret i ressourcer;
- usikker markering;
- gennemgang af stien;
- ondsindede eksterne henvisninger;
- misbrug af skemaet;
- grafikker med meget store objekter;
- cykliske relationer;
- identifikatorkollisioner;
- Konflikter mellem udvidelsesnavneområder.

Semantisk portabilitet MÅ IKKE kræve, at der udføres indlejret kode.

---

# 40. Overvejelser vedrørende bevaring

Til langvarig opbevaring:

1. Objektidentifikatorer BØR forblive stabile.
2. De centrale semantiske egenskaber BØR være selvbeskrivende.
3. Ukendte filtyper BØR bevares.
4. Eksterne afhængigheder BØR angives eksplicit.
5. De refererede aktiver BØR, hvor det er muligt, indeholde oplysninger om integritet.
6. Erklæringer, der udelukkende er baseret på egne oplysninger, BØR undgås.
7. Transformationer BØR bevare herkomstoplysningerne.

En gemt »OMI«-pakke bør fortsat kunne åbnes og læses, selvom det oprindelige program, der blev brugt til at oprette den, ikke længere findes.

---

# 41. Overvejelser vedrørende tilgængelighed

Videnskabelige objekter BØR indeholde de semantiske og beskrivende oplysninger, der er nødvendige for en tilgængelig gengivelse.

Eksempler herpå er:

- alternativ tekst til billeder;
- relationer mellem tabeloverskrifter;
- beskrivelser af ligninger;
- sprogmetadata;
- strukturelle overskriftsniveauer;
- henvisninger til transskriptioner af lyd- eller videooptagelser;
- semantisk læserækkefølge.

Tilgængelighed er en del af objektmodellen og metadataene, ikke kun af den endelige visuelle grænseflade.

---

# 42. Overensstemmelse

En implementering overholder denne specifikation, hvis den:

1. anerkender videnskabelige objekter som selvstændigt identificerbare semantiske enheder;
2. bevarer de nødvendige objektidentifikatorer og -typer;
3. fremstiller semantiske relationer eksplicit;
4. betragter ikke præsentationen som kanonisk indhold;
5. bevarer ukendte objekter og udvidelser, når det er praktisk muligt;
6. opretholder referenceintegriteten;
7. understøtter validering af objektstrukturen;
8. kasserer ikke semantisk betydningsfulde objekter uden varsel.

---

## 42.1 Implementering af redigeringsfunktioner

En implementering af forfatterværktøjer, der overholder standarden, BØR:

- oprette stabile objektidentifikatorer;
- beholde identifikatorer under almindelig redigering;
- fremhæve meningsfulde objekttyper;
- opretholde inddæmning og orden;
- registrere relevant herkomst.

---

## 42.2 Gennemførelse af databehandlingen

En implementering af behandlingen, der overholder kravene, BØR:

- bevare objektets identitet;
- bevare ukendte egenskaber og udvidelser;
- undgå tabsholdige transformationer;
- rapporterer ikke-understøttede objekttyper;
- at kontrollere referencer og sammenhænge.

---

## 42.3 Implementering af rendering

En kompatibel renderer BØR:

- renderes i henhold til objektets semantik;
- bevare de semantiske forskelle;
- understøtter tilgængelig udskrift;
- Undgå at ændre den kanoniske objektgraf.

---

# 43. Designinvariabler

Alle implementeringer BØR opretholde følgende invarianter.

## 43.1 Identitetsinvariant

Et videnskabeligt objekt kan stadig identificeres uafhængigt af, hvor det befinder sig, eller hvordan det præsenteres.

## 43.2 Semantisk invariant

Et objekts betydning bestemmes ikke udelukkende af dets visuelle udformning.

## 43.3 Relationsinvariant

De semantiske sammenhænge forbliver eksplicitte og maskinlæsbare.

## 43.4 Overførbarhedsinvariant

Objekterne kan stadig fortolkes uden for det program, der har oprettet dem.

## 43.5 Invariant for udvidelsesmuligheder

Ukendte udvidelser medfører ikke, at det underliggende kerneobjekt bliver ugyldigt.

## 43.6 Bevaringsinvariant

Objekterne bevarer tilstrækkelig kontekst til fremtidig fortolkning.

## 43.7 Privatlivsinvariant

Følsomme oplysninger om identitet og arbejdsgange kan fortsat adskilles fra det overførbare videnskabelige indhold.

---

# 44. Forholdet til dokumentmodellen

Den videnskabelige objektmodel definerer, hvad et objekt er.

Dokumentmodellen definerer, hvordan videnskabelige objekter er organiseret i et manuskript.

```text
Scholarly Object Model
→ common object semantics

Document Model
→ manuscript structure and composition
```

---

# 45. Forholdet til anker-modellen

Anker-modellen identificerer et helt videnskabeligt objekt eller et bestemt område inden for dette.

```text
Scholarly Object
        │
        ▼
Anchor
        │
        ▼
Resolvable target
```

En stabil identitet for det videnskabelige objekt er derfor en forudsætning for pålidelig forankring.

---

# 46. Forholdet til annotationsmodellen

En kommentar er i sig selv et videnskabeligt objekt.

Det indgår desuden i et semantisk forhold til et eller flere forankrede mål.

```text
Annotation Object
        │
        ▼
Target Relationship
        │
        ▼
Anchor
        │
        ▼
Scholarly Object
```

---

# 47. Forholdet til gennemgangsmodellen

En evalueringsrapport, en evalueringskommentar, en anbefaling og en redaktionel beslutning kan alle fremstilles som specialiserede videnskabelige objekter.

Deres synlighed, anonymitet, identitetsbeskyttelse og arbejdsgangsregler defineres separat af gennemgangsmodellen.

---

# 48. Forholdet til udgivelsesmodellen

Udgivelsesmodellen omdanner videnskabelige objekter til formålsbestemte repræsentationer.

Objektmodellen forbliver kanonisk.

```text
Scholarly Object Graph
        │
        ▼
Publisher Profile
        │
        ▼
Renderer
        │
        ├── HTML
        ├── PDF
        ├── DOCX
        ├── EPUB
        └── JATS XML
```

---

# 49. Fremtidige tiltag

Fremtidige versioner af denne specifikation kan indeholde følgende:

- kanoniske registre over kerneobjekttyper;
- objektidentifikatorer, der kan identificeres på globalt plan;
- formelle relationsordforråd;
- deklarationer af objektkapaciteter;
- valideringsprofiler;
- JSON Skema-definitioner;
- JSON-LD-sammenhænge;
- fagspecifikke objektprofiler;
- kryptografiske integritetsmekanismer;
- ordlister for adgangskontrol på objektniveau.

---

# 50. Resumé

Den videnskabelige objektmodel fastlægger et enkelt, men stærkt princip:

> Hver eneste væsentlig del af den videnskabelige kommunikation er et identificerbart semantisk objekt.

Et »OMI«-manuskript er derfor ikke blot formateret tekst.

Det er en bærbar videnskabelig objektgraf, der består af:

```text
Objects
+
Relationships
+
Metadata
+
Provenance
```

Denne fælles model gør det muligt for manuskripter, kommentarer, anmeldelser, henvisninger, ressourcer og fremtidige videnskabelige enheder at eksistere side om side inden for en sammenhængende og udvidelig arkitektur.

---

> **Skriv naturligt. Strukturér én gang. Udgiv overalt.**
