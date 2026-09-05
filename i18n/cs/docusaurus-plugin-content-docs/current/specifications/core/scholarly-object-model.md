---
id: scholarly-object-model
title: OMI-SPEC-120 — Model vědeckých objektů
sidebar_label: Model vědeckého objektu
sidebar_position: 1
description: Definuje společný objektový model pro všechny sémanticky významné entity v rámci sady nástrojů pro správu dat (Open Manuscript Initiative).
keywords:
  - Open Manuscript Initiative
  - OMI
  - scholarly object
  - semantic publishing
  - manuscript model
  - structured documents
  - scholarly communication
---

# OMI-SPEC-120 — Model vědeckých objektů

**Stav:** Návrh  
**Verze:** 0.1.0  
**Stabilita:** Experimentální  
**Kategorie:** Základní specifikace  

**Závisí na:**

- OMI-SPEC-000 — Základní zásady

**Používá:**

- OMI-SPEC-100 — Model dokumentu
- OMI-SPEC-110 — Model kotvy
- OMI-SPEC-130 — Model anotací
- OMI-SPEC-140 — Model metadat
- OMI-SPEC-200 — Testovací model
- OMI-SPEC-230 — Model publikování

---

## Abstrakt

Model vědeckých objektů (Scholarly Object Model) definuje společný sémantický základ pro všechny významové entity zastoupené v rámci sítě pro sledování vědecké produkce (Open Manuscript Initiative).

Vědecký rukopis není považován pouze za posloupnost formátovaných znaků. Je znázorněn jako strukturovaný graf identifikovatelných vědeckých objektů a explicitních sémantických vztahů.

Mezi příklady vědeckých objektů patří rukopisy, oddíly, odstavce, obrázky, tabulky, rovnice, citace, bibliografické záznamy, poznámky, recenze, datové soubory, přispěvatelé a doplňkové materiály.

Tato specifikace definuje:

- co představuje předmět vědeckého bádání;
- společné vlastnosti vědeckých objektů;
- identita objektů a typizace;
- vztahy a vzájemné vztahy mezi objekty;
- požadavky na životní cyklus a původ;
- mechanismy prodloužení;
- očekávání ohledně shody.

Model Scholarly Object Model nestanovuje způsob vizuálního zobrazení, technologii ukládání, strukturu databáze ani chování uživatelského rozhraní.

---

# 1. Rozsah působnosti

Tato specifikace definuje abstraktní objektový model používaný v celém ekosystému služby „OMI“.

Vztahuje se na:

- obsah kanonického rukopisu;
- metadata rukopisu;
- strukturální součásti dokumentu;
- sémantické vztahy;
- poznámky;
- prohlédnout objekty;
- materiály k publikaci;
- vědecké entity související s pracovními postupy;
- vědecké zdroje citované externě.

Tato specifikace nedefinuje:

- rozložení dokumentu;
- typografie;
- geometrie stránky;
- komponenty uživatelského rozhraní;
- schémata databází;
- síťové protokoly;
- styly specifické pro danou publikaci;
- kompletní formát serializace.

Konkrétní pravidla serializace mohou být definována v samostatných specifikacích formátuOMI.

---

# 2. Normativní jazyk

Klíčová slova **MUSÍ**, **NESMÍ**, **POŽADOVÁNO**, **MUSÍ**, **NESMÍ**, **MĚL BY**, **MĚL BY NE**, **DOPORUČENO**, **MŮŽE** a **VOLITELNÉ** v tomto dokumentu je třeba vykládat jako normativní požadavky.

---

# 3. Základní pojetí

Vědecký objekt je identifikovatelná sémantická entita, která se podílí na vědecké komunikaci.

Vědecký objekt může představovat:

- intelektuální obsah;
- strukturální organizace;
- popisná metadata;
- sémantický vztah;
- redakční článek nebo recenze;
- publikace;
- externí odborný zdroj;
- stav nebo rozhodnutí související s pracovním postupem.

Každý předmět vědeckého bádání existuje nezávisle na svém vizuálním ztvárnění.

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

Vědecký objekt není definován tím, jak se jeví na stránce.

---

# 4. Úloha v architektuře

Model vědeckých objektů (Scholarly Object Model) je společná abstrakční vrstva, na níž je založena skupina specifikací pro správu vědeckých objektů (OMI).

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

Další specifikace definují specializované typy vědeckých objektů a vztahy mezi nimi.

---

# 5. Model objektového grafu

Rukopis typu „OMI“ je koncepčně znázorněn jako graf.

```text
Scholarly objects
        +
Explicit relationships
        =
Scholarly object graph
```

Graf obsahuje uzly a hrany.

- **Uzel** je vědecký objekt.
- **Vazba** je sémantický vztah mezi vědeckými objekty.

Příklad:

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

Vztahy MUSÍ být jasně odlišitelné od vizuálního formátování.

---

# 6. Minimální vědecký objekt

Každý vědecký příspěvek MUSÍ obsahovat:

- stabilní identifikátor;
- typ objektu.

Minimální příklad:

```json
{
  "id": "obj-01J9A6K8P3",
  "type": "paragraph"
}
```

`id` identifikuje daný objekt.

`type` definuje svou sémantickou kategorii.

---

# 7. Obecná struktura objektu

Vědecký objekt MŮŽE obsahovat následující běžné vlastnosti:

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

Obecný zápis typu „TypeScript“ lze vyjádřit takto:

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

Konkrétní typy objektů MOHOU tyto vlastnosti omezovat, vyžadovat nebo rozšiřovat.

---

# 8. Identita objektu

## 8.1 Stabilní identifikátory

Každý vědecký objekt MUSÍ mít identifikátor, který je jedinečný v rámci balíčku OMI nebo kontextu repozitáře, v němž je obsažen.

Identifikátor by měl zůstat neměnný během běžných úprav.

Mezi příklady běžných úprav patří:

- oprava pravopisu;
- změna formulace;
- přesunutí odstavce v rámci stejného rukopisu;
- změna pořadí oddílů;
- změna výstupního formátu;
- použití profilu vydavatele;
- převod mezi podporovanými formáty serializace.

Objekt NESMÍ získat novou identitu pouze z toho důvodu, že se změní jeho vizuální podoba.

---

## 8.2 Neprůhlednost identifikátorů

Identifikátory objektů BY SE MĚLY považovat za nečitelné hodnoty.

Implementace NESMÍ odvozovat sémantický význam z vnitřní struktury identifikátoru, pokud schéma identifikátorů takový význam výslovně nedefinuje.

Doporučujeme:

```json
{
  "id": "obj-01J9A6K8P3D7M5Q2R"
}
```

Zklamaný:

```json
{
  "id": "chapter-2-paragraph-4"
}
```

Druhý formát je nestabilní, protože v důsledku strukturální reorganizace může dojít ke ztrátě platnosti identifikátoru.

---

## 8.3 Rozsah platnosti identifikátoru

Identifikátor MUSÍ být v rámci svého deklarovaného rozsahu jedinečný.

Mezi možné oblasti použití patří:

- rukopis;
- OMI balíček;
- repozitář;
- institucionální platforma;
- globálně rozlišitelný jmenný prostor.

Globální schémata identifikátorů MOHOU být definována v samostatné specifikaci.

---

## 8.4 Uchovávání identity

Je-li objekt upraven, aniž by došlo ke změně jeho sémantické kontinuity, MĚL BY identifikátor zůstat beze změny.

Je-li objekt nahrazen sémanticky odlišným objektem, MĚL BY mu být přiřazen nový identifikátor.

Například:

```text
Typographical correction
→ same object identity

Paragraph moved to another section
→ same object identity

Paragraph divided into two independent arguments
→ original object may be superseded by two new objects
```

Takové změny BY MĚLY být zaznamenány v historii původu nebo verzí.

---

# 9. Typy objektů

## 9.1 Vlastnost typu

Vlastnost „`type`“ určuje sémantickou třídu objektu.

Příklady:

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

Názvy typů objektů BY MĚLY být psány malými písmeny a měly by být strojově čitelné.

U složených typů se DOPORUČUJE používat jména s pomlčkou.

---

## 9.2 Hlavní kategorie objektů

OMI rozlišuje několik širokých kategorií vědeckých objektů.

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

Tyto kategorie jsou koncepční a při implementaci v kódu nemusí nutně vyžadovat dědičnost.

---

# 10. Obsahové objekty

Obsahové objekty obsahují duševní nebo důkazní materiál.

Mezi příklady patří:

- odstavec;
- nadpis;
- citát;
- seznam;
- položka seznamu;
- blok kódu;
- rovnice;
- věta;
- definice;
- příklad;
- přepis;
- položka v bibliografii;
- heslo ve slovníčku.

Příklad:

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

Objekty obsahu BY MĚLY zachovávat sémantické rozdíly, které mohou být důležité pro interpretaci nebo zobrazení.

---

# 11. Strukturální objekty

Strukturální objekty slouží k uspořádání odborného obsahu.

Mezi příklady patří:

- rukopis;
- část;
- kapitola;
- sekce;
- pododdíl;
- příloha;
- úvodní část;
- koncová část;
- seznam literatury;
- skupina soch;
- skupina tabulek.

Příklad:

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

Zahrnutí MUSÍ být explicitně vyjádřeno.

Vizuální blízkost sama o sobě NESMÍ být rozhodujícím kritériem pro zařazení do struktury.

---

# 12. Objekty aktiv

Objekty „Asset“ představují soubory nebo mediální soubory spojené s vědeckým obsahem.

Mezi příklady patří:

- obrázek;
- audio;
- video;
- datový soubor;
- zdrojový archiv;
- doplňkový soubor;
- spustitelný notebook;
- trojrozměrný model.

Příklad:

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

Objekt aktiva BY MĚL obsahovat:

- typ média;
- umístění zdroje;
- údaje o integritě, jsou-li k dispozici;
- metadata o přístupnosti, pokud jsou k dispozici.

---

# 13. Objekty vztahů

Objekty vztahů vyjadřují sémantické vazby mezi vědeckými objekty.

Mezi příklady patří:

- odkaz;
- poznámka;
- odkaz;
- odvození;
- překlad;
- oprava;
- recenze;
- závislost;
- odkaz na původ;
- vztah mezi částí a celkem.

Objekt vztahu BY MĚL identifikovat:

- typ vztahu;
- jeden nebo více zdrojových objektů;
- jeden nebo více cílových objektů;
- volitelná metadata o vztazích;
- volitelný údaj o původu.

Příklad:

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

Vztahy by neměly být vyjadřovány výhradně pomocí vizuálních značek, jako jsou horní indexy, barvy nebo odsazení.

---

# 14. Objekty agentů

Objekty typu „agent“ představují účastníky vědecké komunikace.

Mezi příklady patří:

- osoba;
- organizace;
- redakční tým;
- softwarový agent;
- Systém umělé inteligence;
- institucionální repozitář;
- publikační platforma.

Příklad:

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

Údaje citlivé z hlediska ochrany identity MOHOU být uloženy odděleně od obsahu přenosných zařízení.

Anonymní pracovní postupy BY MĚLY používat odkazy na agenty specifické pro danou roli nebo pseudonymní odkazy na agenty namísto záznamů o veřejné identitě.

---

# 15. Objekty pracovního postupu

Objekty pracovního postupu představují strukturované vědecké procesy nebo rozhodnutí.

Mezi příklady patří:

- předložení;
- úkol k opakování;
- zpráva o přezkoumání;
- redakční rozhodnutí;
- žádost o revizi;
- přijetí;
- oprava;
- odvolání;
- stav publikace.

Příklad:

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

Objekty pracovního toku MOHOU být přenositelné, s omezeným přístupem nebo vázané na konkrétní instituci v závislosti na požadavcích na ochranu osobních údajů a bezpečnost.

---

# 16. Objekty externích zdrojů

Objekty externích zdrojů představují vědecké entity, které nejsou uloženy přímo v balíčku „OMI“.

Mezi příklady patří:

- článek v odborném časopise;
- kniha;
- archivní záznam;
- datový soubor;
- ORCID záznam;
- ROR organizace;
- DOI zdroj;
- webový zdroj;
- termín z kontrolovaného slovníku.

Příklad:

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

Odkazy na externí zdroje BY MĚLY používat trvalé identifikátory, jsou-li k dispozici.

---

# 17. Složené a atomové objekty

Vědecký objekt může být složený nebo atomární.

## 17.1 Složený objekt

Složený objekt obsahuje jiné objekty nebo na ně odkazuje.

Mezi příklady patří:

- rukopis;
- sekce;
- obrázek s popiskem a multimediálním obsahem;
- tabulka s řádky a buňkami;
- seznam literatury;
- zpráva o přezkumu.

## 17.2 Atomový objekt

Atomový objekt je v rámci konkrétní modelové vrstvy považován za nedělitelný.

Mezi příklady mohou patřit:

- textový uzel;
- matematický symbol;
- hodnota buňky tabulky;
- řízená hodnota metadat.

Atomicita závisí na modelu.

Objekt, který je v jedné specifikaci považován za atomický, MŮŽE být v jiné specializované specifikaci rozložen na jednotlivé části.

---

# 18. Omezení šíření

Omezení představuje strukturální začlenění.

Příklad:

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

Vztahy ohraničení BY MĚLY splňovat následující požadavky:

1. Podřízený objekt BY MĚL mít v rámci kanonické hierarchie dokumentů určitelný nadřazený objekt.
2. Nesmí dojít k kruhovému uzavření.
3. Příkaz ohraničení MUSÍ být explicitní, pokud je příkaz sémanticky významný.
4. Odstranění objektu z jednoho nadřazeného objektu NESMÍ automaticky vést ke zničení jeho identity.
5. Při přesunu objektu mezi nadřazenými prvky BY MĚLA být zachována jeho identita.

---

# 19. Objednávání

Některé kolekce objektů jsou seřazeny.

Mezi příklady patří:

- části rukopisu;
- odstavce v jedné části;
- položky seznamu;
- řádky tabulky;
- autoři v pořadí, v jakém jsou uvedeni v příspěvku.

Pořadí MUSÍ být výslovně uvedeno, pokud má vliv na význam nebo prezentaci.

Implementace MOHOU vyjadřovat pořadí pomocí:

- seřazená pole;
- vlastnosti posloupnosti;
- explicitní vztahy mezi předchůdci a nástupci.

Pořadí by se NEMĚLO odvozovat z umístění v úložišti ani z názvu souboru.

---

# 20. Vztahy

Obecný vědecký vztah lze znázornit takto:

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

Příklad:

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

Vztah MŮŽE spojovat:

- jeden objekt k jednomu objektu;
- z jednoho objektu na více objektů;
- více objektů do jednoho objektu;
- z více objektů do více objektů.

---

# 21. Odkaz podle identity

Objekty BY MĚLY odkazovat na jiné objekty pomocí identifikátoru.

Doporučujeme:

```json
{
  "target": "paragraph-01"
}
```

Zklamaný:

```json
{
  "target": {
    "sectionNumber": 2,
    "paragraphNumber": 4
  }
}
```

Strukturální pozice MOHOU být použity jako záložní selektory, ale NEMĚLY BY nahrazovat stabilní identitu objektu.

Model Anchor definuje přesnější mechanismy výběru cílů.

---

# 22. Metadata

Každý vědecký objekt MŮŽE obsahovat metadata.

Metadata mohou být:

- popisný;
- administrativní;
- technické;
- konstrukční;
- týkající se ochrany;
- specifické pro daný obor;
- závislé na konkrétním pracovním postupu.

Příklad:

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

Metadata, která se vyskytují u mnoha typů objektů, BY MĚLA být v souladu s normou OMI-SPEC-140.

---

# 23. Původ

Provenience zaznamenává, jak byl objekt vytvořen, upraven, importován, vygenerován nebo transformován.

Záznam o původu MŮŽE obsahovat:

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

Příklad:

```json
{
  "provenance": {
    "createdAt": "2026-07-21T18:30:00Z",
    "createdBy": "agent-author-01",
    "activity": "authoring"
  }
}
```

Významné automatizované transformace BY MĚLY být zaznamenány.

Objekty vytvořené nebo upravené pomocí umělé inteligence MUSÍ být odlišitelné od objektů vytvořených výhradně lidmi, pokud je takový původ k dispozici.

---

# 24. Životní cyklus objektu

Vědecký objekt MŮŽE mít stav životního cyklu.

Doporučené základní statistiky:

```ts
export type ScholarlyObjectStatus =
  | 'draft'
  | 'active'
  | 'superseded'
  | 'deprecated'
  | 'withdrawn'
  | 'deleted';
```

## 24.1 Návrh

Objekt je neúplný nebo dosud nebyl zařazen do kanonického rukopisu.

## 24.2 Aktivní

Tento objekt je v současné době součástí standardizovaného vědeckého záznamu.

## 24.3 Zrušeno

Objekt byl nahrazen jiným objektem, ale zůstává k dispozici pro účely sledování původu nebo historie verzí.

## 24.4 Zastaralé

Objekt zůstává interpretovatelný, ale NEMĚL BY se používat pro nový obsah.

## 24.5 Staženo

Objekt byl záměrně vyřazen z aktivního vědeckého využití, přičemž byl zachován záznam o kontrole.

## 24.6 Vyřazeno

Objekt je označen k odstranění.

Implementace BY MĚLY rozlišovat mezi logickým smazáním a nevratným fyzickým odstraněním.

---

# 25. Neměnnost a revize

OMI nevyžaduje, aby každý objekt byl technicky neměnný.

Implementace by však MĚLY zachovávat historii revizí u změn, které mají vliv na vědecký význam.

Lze použít dva přístupy:

```text
Mutable object
+
Version history
```

nebo:

```text
Immutable object versions
+
Stable conceptual identity
```

Specifikace verzí může definovat podrobnou sémantiku revizí.

---

# 26. Nahrazení a odvození objektů

Je-li jeden objekt odvozen od jiného, MĚL BY být tento vztah výslovně uveden.

Příklad:

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

Mezi možné odvozené činnosti patří:

- revize;
- překlad;
- normalizace;
- import;
- převod;
- extrakce;
- Přepis s podporou umělé inteligence;
- redakční oprava.

---

# 27. Jazyk

Vědecký objekt MŮŽE deklarovat svůj jazyk nezávisle na jazyku na úrovni rukopisu.

Příklad:

```json
{
  "id": "quotation-01",
  "type": "quotation",
  "metadata": {
    "language": "la"
  }
}
```

Hodnoty jazyků BY MĚLY používat uznávané identifikátory jazyků, jako jsou například jazykové kódy ISO 639, tak jak jsou definovány v modelu metadat.

---

# 28. Objekty specifické pro jednotlivé obory

Různé vědecké obory vyžadují specifické typy objektů.

Mezi příklady patří:

## Humanitní vědy

- archivní zdroj;
- položka kritického aparátu;
- ručně psaný doklad;
- segment přepisu;
- redakční úprava.

## Matematika

- věta;
- lemma;
- důkaz;
- důsledek;
- matematická definice.

## Chemie

- chemická struktura;
- sloučenina;
- reakce;
- spektrální data.

## Fyzika

- fyzikální veličina;
- experimentální uspořádání;
- měření;
- prohlášení o nejistotě.

## Biologie

- vzorek;
- taxonomický název;
- posloupnost;
- protokol.

## Společenské vědy

- dotazník;
- proměnná;
- ukázka;
- část pořadu věnovaná rozhovoru.

Objekty specifické pro jednotlivé obory MOHOU rozšiřovat společný model vědeckých objektů (Scholarly Object Model).

Musí zachovat požadované vlastnosti `id` a `type`.

---

# 29. Model rozšíření

Implementace MŮŽE zavést rozšířené vlastnosti nebo vlastní typy objektů.

Rozšíření BY MĚLA používat identifikátor s jmenným prostorem.

Příklad:

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

Rozšíření s jmennými prostory omezují kolize mezi nezávislými implementacemi.

---

## 29.1 Požadavky na rozšíření

Rozšíření:

1. NESMÍ se předefinovat význam základní vlastnosti OMI.
2. Je NUTNÉ zachovat stabilní identitu objektu.
3. MĚLO by zůstat ignorovatelné pro implementace, které mu nerozumí.
4. MĚLI by poskytovat veřejnou dokumentaci.
5. MĚLO BY se definovat ověřovací pravidla.
6. Nesmí dojít k tomu, že by základní objekt byl neinterpretovatelný v případě, že rozšíření chybí.

---

# 30. Plynulý přechod k omezenému fungování

Implementace, která narazí na neznámý typ objektu, BY MĚLA tento typ zachovat, kdykoli je to možné.

MŮŽE:

- zobrazit obecné znázornění;
- odhalit původní sémantický obsah;
- upozornit uživatele;
- předat objekt beze změn;
- požádat o doplňkový plugin.

Nesmí neznámé objekty potichu vyřadit.

Příklad:

```text
Known object type
→ native editing and rendering

Unknown object type
→ preserve, identify, and render generically
```

Tento princip je zásadní pro dlouhodobou rozšiřitelnost.

---

# 31. Ověření

Vědecký objekt je platný, pokud:

- obsahuje platný identifikátor;
- obsahuje platný typ;
- jsou přítomny požadované vlastnosti specifické pro daný typ;
- jeho odkazy jsou vyřešeny v rámci deklarovaného rozsahu nebo se jedná o platné externí odkazy;
- jeho ohraničení nevytváří cykly;
- jeho rozšíření nepřepisuje základní sémantiku.

Ověření MŮŽE probíhat na několika úrovních:

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

I objekt, který je z hlediska struktury správný, může vyvolat sémantická varování.

---

# 32. Nezávislost na serializaci

Model vědeckého objektu je nezávislý na formátu serializace.

Lze to znázornit pomocí:

- JSON;
- JSON-LD;
- XML;
- CBOR;
- záznamy v databázi;
- grafové struktury;
- budoucí interoperabilní formáty.

Sériové zobrazení MUSÍ zachovat:

- identita objektu;
- typ objektu;
- sémantický obsah;
- explicitní vztahy;
- požadovaná metadata;
- původ, je-li uveden.

Specifikace týkající se serializace MOHOU ukládat další omezení.

---

# 33. Zajištění nezávislosti

Vědecký objekt NESMÍ být závislý na jediném vizuálním znázornění.

Například objekt „note“ může být zobrazen takto:

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

Cíl zůstává stejný.

Mění se pouze renderer.

---

# 34. Příklad grafu v rukopisu

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

Stejný graf lze převést do několika publikačních formátů, aniž by došlo ke změně jeho základní sémantiky.

---

# 35. Příklad sbírky objektů

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

Toto znázornění má pouze ilustrativní charakter a nejedná se o úplné serializační schéma.

---

# 36. Příklad sémantického vztahu

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

Model anotací umožňuje přesnější zacílení pomocí kotev.

---

# 37. Vlastnictví objektů

OMI nestanoví právní vlastnictví vědeckých objektů.

Metadata objektu MOHOU vyjadřovat:

- držitel práv;
- licence;
- prohlášení o autorských právech;
- institucionální péče;
- omezení přístupu.

Vlastnictví, autorství, správa a technická kontrola jsou odlišné pojmy a NESMÍ se zaměňovat.

---

# 38. Ochrana osobních údajů

Vědecký objekt MŮŽE obsahovat veřejně přístupné, omezeně přístupné, důvěrné nebo soukromé údaje.

Klasifikace z hlediska ochrany osobních údajů BY MĚLA být v příslušných případech výslovně uvedena.

Příklad:

```json
{
  "id": "review-01",
  "type": "review",
  "metadata": {
    "access": "confidential"
  }
}
```

Přenosné objekty anonymních recenzí NESMÍ obsahovat přiřazení chráněných identit.

Zásady ochrany osobních údajů jsou dále vymezeny specifikacemi pracovních postupů.

---

# 39. Bezpečnostní aspekty

Implementace MUSÍ při importu z externích systémů zacházet s vědeckými objekty jako s nedůvěryhodným vstupem.

Měly by chránit před:

- spustitelný obsah vložený do datových souborů;
- nebezpečné značky;
- procházení cesty;
- škodlivé externí odkazy;
- zneužití schématu;
- příliš rozsáhlé objektové grafy;
- cyklické vztahy;
- kolize identifikátorů;
- konflikty jmenných prostorů rozšíření.

Sémantická přenositelnost NESMÍ vyžadovat spuštění vloženého kódu.

---

# 40. Aspekty související s ochranou

Pro dlouhodobé uchování:

1. Identifikátory objektů by MĚLY zůstat neměnné.
2. Základní sémantické vlastnosti BY MĚLY být samopopisné.
3. Neznámá přípon by MĚLA být zachována.
4. Vnější závislosti BY MĚLY být výslovně uvedeny.
5. Odkazovaná aktiva BY MĚLA, pokud je to možné, obsahovat informace o integritě.
6. Prohlášení, která se vztahují výhradně na vlastní produkty, by se MĚLA vyhýbat.
7. Transformace by MĚLY zachovat původ.

Zachovaný balíček ve formátu „OMI“ by měl zůstat čitelný i bez původní aplikace, ve které byl vytvořen.

---

# 41. Aspekty přístupnosti

Vědecké objekty BY MĚLY obsahovat sémantické a popisné informace nezbytné pro jejich přístupné zobrazení.

Mezi příklady patří:

- alternativní text k obrázkům;
- vztahy v záhlaví tabulky;
- popisy rovnic;
- metadata jazyka;
- úrovně strukturálních nadpisů;
- odkazy na přepisy zvukových nebo obrazových záznamů;
- sémantické pořadí čtení.

Přístupnost je součástí objektového modelu a metadat, nikoli pouze konečného vizuálního rozhraní.

---

# 42. Shoda

Implementace je v souladu s touto specifikací, pokud:

1. považuje vědecké objekty za samostatně identifikovatelné sémantické entity;
2. zachovává požadované identifikátory a typy objektů;
3. explicitně vyjadřuje sémantické vztahy;
4. nepovažuje prezentaci za kanonický obsah;
5. zachovává neznámé objekty a přípony, kdykoli je to možné;
6. zajišťuje referenční integritu;
7. umožňuje ověření struktury objektu;
8. nezahodí bez upozornění sémanticky významné objekty.

---

## 42.1 Implementace tvorby obsahu

Implementace pro tvorbu obsahu, která splňuje požadavky, BY MĚLA:

- vytvořit stabilní identifikátory objektů;
- zachovat identifikátory při běžné úpravě;
- zveřejnit smysluplné typy objektů;
- zajistit bezpečnost a pořádek;
- zaznamenat příslušnou provenienci.

---

## 42.2 Realizace zpracování

Implementace zpracování, která je v souladu s touto specifikací, BY MĚLA:

- zachovat identitu objektu;
- zachovat neznámé vlastnosti a rozšíření;
- vyhýbejte se transformacím se ztrátou;
- nahlásit nepodporované typy objektů;
- ověřit odkazy a vztahy.

---

## 42.3 Implementace vykreslování

Kompatibilní vykreslovač BY MĚL:

- vykreslit podle sémantiky objektu;
- zachovat sémantické rozdíly;
- podporovat bezbariérový výstup;
- vyhněte se změnám v kanonickém objektovém grafu.

---

# 43. Návrhové invarianty

Všechny implementace BY MĚLY zachovávat následující invarianty.

## 43.1 Invariant identity

Vědecký objekt zůstává identifikovatelný bez ohledu na to, kde se nachází nebo jak je prezentován.

## 43.2 Sémantická invariance

Význam objektu není dán pouze jeho vizuálním vzhledem.

## 43.3 Invarianta vztahu

Sémantické vazby zůstávají explicitní a strojově čitelné.

## 43.4 Invarianta přenositelnosti

Objekty lze interpretovat i mimo aplikaci, ve které byly vytvořeny.

## 43.5 Invariant rozšiřitelnosti

Neznámá rozšíření nezpůsobují neplatnost základního objektu.

## 43.6 Invarianta zachování

Objekty si zachovávají dostatečný kontext pro budoucí interpretaci.

## 43.7 Invarianta soukromí

Citlivé údaje o identitě a pracovních postupech lze oddělit od přenositelného vědeckého obsahu.

---

# 44. Vztah k dokumentovému modelu

Model vědeckého objektu definuje, co je to objekt.

Model dokumentu definuje, jak jsou vědecké objekty uspořádány do rukopisu.

```text
Scholarly Object Model
→ common object semantics

Document Model
→ manuscript structure and composition
```

---

# 45. Vztah k modelu „Anchor“

Model „Anchor“ identifikuje celý vědecký objekt nebo jeho konkrétní část.

```text
Scholarly Object
        │
        ▼
Anchor
        │
        ▼
Resolvable target
```

Stabilní identifikace vědeckého objektu je proto nezbytným předpokladem pro spolehlivé ukotvení.

---

# 46. Vztah k modelu anotací

Anotace je sama o sobě vědeckým objektem.

Navíc je součástí sémantického vztahu s jedním nebo více ukotvenými cíli.

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

# 47. Vztah k modelu přezkumu

Recenzní zpráva, recenzní připomínka, doporučení i redakční rozhodnutí mohou být všechny reprezentovány jako specializované vědecké objekty.

Jejich viditelnost, anonymita, ochrana identity a pravidla pracovního postupu jsou definovány samostatně v rámci modelu kontroly.

---

# 48. Vztah k modelu vydávání

Publikovací model převádí vědecké objekty do reprezentací přizpůsobených konkrétnímu výstupu.

Objektový model zůstává kanonický.

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

# 49. Další výzkum

Budoucí verze této specifikace mohou definovat:

- kanonické registry typů základních objektů;
- globálně identifikovatelné identifikátory objektů;
- slovníky formálních vztahů;
- deklarace schopností objektů;
- validační profily;
- JSON Definice schémat;
- JSON- kontexty LD;
- oborově specifické profily objektů;
- kryptografické mechanismy integrity;
- slovníky řízení přístupu na úrovni objektů.

---

# 50. Shrnutí

Model vědeckého objektu stanoví jednoduchý, ale účinný princip:

> Každá podstatná složka vědecké komunikace představuje identifikovatelný sémantický objekt.

Rukopis ve formátu „OMI“ tedy není pouhým naformátovaným textem.

Jedná se o přenosný vědecký objektový graf, který se skládá z:

```text
Objects
+
Relationships
+
Metadata
+
Provenance
```

Tento společný model umožňuje, aby rukopisy, poznámky, recenze, citace, zdroje a budoucí vědecké entity koexistovaly v rámci ucelené a rozšiřitelné architektury.

---

> **Pište přirozeně. Vytvořte strukturu jednou. Zveřejněte kdekoli.**
