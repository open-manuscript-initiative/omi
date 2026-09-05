---
id: architecture-map
title: OMI Mapa architektury
sidebar_position: 2
description: Obecný architektonický přehled systému pro správu dokumentů a publikací (Open Manuscript Initiative) a vztahů mezi jeho klíčovými specifikacemi, pracovními postupy, komponenty platformy a výstupy publikací.
keywords:
  - Open Manuscript Initiative
  - OMI architecture
  - scholarly publishing
  - manuscript model
  - annotation model
  - peer review
  - open standards
---

# OMI Mapa architektury

**Stav:** Návrh

**Verze:** 0.2

**Poslední aktualizace:** 5. září 2026
**Stabilita:** Experimentální  

---

## Abstrakt

Open Manuscript Initiative poskytuje otevřenou sémantickou architekturu pro celý životní cyklus vědeckých rukopisů.

OMI odděluje vědecký obsah od softwaru, prezentace, pracovních postupů a institucionální infrastruktury. Jeho specifikace definují interoperabilní modely pro rukopisy, vědecké objekty, odkazy, anotace, metadata, recenzní řízení, publikování a strojově podporovanou vědeckou práci.

Tento dokument představuje obecnou architekturu systému OMI a popisuje, jak spolu souvisejí jeho hlavní specifikace a implementační vrstvy.

---

## 1. Architektonický přehled

Architektura systému „OMI“ je rozdělena do pěti hlavních vrstev:

```text
┌─────────────────────────────────────────────────────────┐
│                 Application Layer                       │
│                                                         │
│       OMI Studio · Publisher Systems · OJS · Tools       │
├─────────────────────────────────────────────────────────┤
│                  Workflow Layer                         │
│                                                         │
│   Review · Collaboration · Versioning · Publishing      │
├─────────────────────────────────────────────────────────┤
│              Semantic Relationship Layer                │
│                                                         │
│       Anchors · Annotations · Citations · Provenance     │
├─────────────────────────────────────────────────────────┤
│                Scholarly Object Layer                   │
│                                                         │
│  Manuscript · Section · Paragraph · Figure · Table      │
│  Equation · Reference · Dataset · Supplementary Object  │
├─────────────────────────────────────────────────────────┤
│                  Foundation Layer                       │
│                                                         │
│        Core Principles · Identity · Portability         │
│        Extensibility · Preservation · Interoperability  │
└─────────────────────────────────────────────────────────┘
```

Každá vrstva závisí na vrstvách pod ní.

Konkrétní implementace aplikací se mohou lišit, ale sémantické modely zůstávají neměnné.

---

## 2. Základní architektonický princip

OMI považuje rukopis nejen za formátovaný dokument, ale za strukturovaný graf vědeckých objektů a sémantických vztahů.

```text
Scholarly Object
      │
      ├── has identity
      ├── has type
      ├── may contain other objects
      ├── may be targeted by anchors
      └── may participate in semantic relationships
```

Rukopis je tedy znázorněn takto:

```text
Objects + Relationships + Metadata + Provenance
```

Prezentace se generuje z této kanonické reprezentace.

---

## 3. Kanonický rukopis

Kanonický rukopis obsahuje autoritativní odborný obsah a strukturu.

```text
Canonical Manuscript
│
├── Metadata
├── Contributors
├── Sections
│   ├── Headings
│   ├── Paragraphs
│   ├── Figures
│   ├── Tables
│   ├── Equations
│   └── Other scholarly objects
├── References
├── Notes
├── Annotations
├── Provenance
└── Workflow references
```

Kanonický rukopis je nezávislý na:

- velikost stránky;
- typografie;
- šablony vydavatelů;
- textový editor;
- výstupní formát;
- renderovací engine;
- redakční platforma.

PDF, HTML, DOCX, EPUB, JATS, XML a další formáty publikací jsou odvozenými reprezentacemi.

---

## 4. Mapa závislostí specifikací

Hlavní specifikace souboru OMI tvoří následující strukturu závislostí:

```text
OMI-SPEC-000
Core Principles
      │
      ▼
OMI-SPEC-120
Scholarly Object Model
      │
      ├──────────────────────────────┐
      ▼                              ▼
OMI-SPEC-100                   OMI-SPEC-140
Document Model                 Metadata Model
      │
      ▼
OMI-SPEC-110
Anchor Model
      │
      ▼
OMI-SPEC-130
Annotation Model
      │
      ├───────────────┬────────────────┬────────────────┐
      ▼               ▼                ▼                ▼
Review Model     Citation Model   AI Assistance    Publishing Model
```

Základní principy definují architektonická omezení.

Model vědeckých objektů definuje, co vše může existovat v ekosystému OMI.

Dokumentový model seskupuje vědecké objekty do rukopisů.

Model Anchor identifikuje stabilní cíle.

Model anotací definuje sémantické vztahy přiřazené k těmto cílům.

Specifikace pracovních postupů a interoperability vycházejí z těchto základů.

---

# 5. Podkladová vrstva

## 5.1 Základní zásady

**OMI-SPEC-000 — Základní principy** definuje architektonickou strukturu OMI.

Mezi jeho hlavní pravidla patří:

- obsah je kanonický;
- sémantika má přednost před formátováním;
- vědecké objekty mají stabilní identitu;
- vztahy jsou data prvního řádu;
- zobrazení závisí na rendereru;
- identita a obsah jsou dvě odlišné věci;
- implementace zůstávají nezávislé na dodavateli;
- Zachování je hlavním cílem návrhu.

Každá specifikace OMI by MĚLA být v souladu s těmito zásadami.

---

## 5.2 Vědecký objektový model

**OMI-SPEC-120 — Scholarly Object Model** definuje společnou abstrakci, kterou sdílejí všechny významné entity.

Mezi příklady patří:

- rukopisy;
- sekce;
- odstavce;
- nadpisy;
- čísla;
- tabulky;
- rovnice;
- odkazy;
- bibliografické záznamy;
- poznámky;
- recenze;
- datové sady;
- doplňkové materiály;
- autoři a spolupracovníci.

Vědecký objekt musí obsahovat alespoň:

```json
{
  "id": "object-123",
  "type": "paragraph"
}
```

Další vlastnosti závisí na typu objektu.

---

# 6. Vrstva základního modelu

## 6.1 Model dokumentu

**OMI-SPEC-100 — Model dokumentu** definuje strukturální uspořádání rukopisu.

Popisuje:

- vlastnosti na úrovni rukopisu;
- sekce a hierarchická struktura;
- bloky obsahu;
- obsah v textu;
- odkazy na externí vědecké zdroje;
- vztahy mezi jednotlivými částmi dokumentu.

Model dokumentu nedefinuje vizuální vzhled.

---

## 6.2 Model kotvy

**OMI-SPEC-110 — Anchor Model** definuje stabilní odkazy na vědecké objekty nebo na vybrané části v nich.

Kotva může odkazovat na:

- celý rukopis;
- oddíl;
- odstavec;
- oblast textu v textu;
- číslo;
- oblast obrázku;
- tabulka;
- buňka tabulky;
- rovnice;
- odkaz;
- bibliografický záznam;
- metadata;
- externí zdroj.

```text
Anchor
  │
  ▼
Stable target within a scholarly object
```

Kotvy zajišťují, že poznámky a vztahy zůstanou zachovány i po úpravách, restrukturalizaci a novém vykreslení.

---

## 6.3 Model anotací

**OMI-SPEC-130 — Annotation Model** definuje anotace jako plnohodnotné vědecké objekty.

```text
Annotation
    │
    ├── type
    ├── body
    ├── creator or actor reference
    ├── visibility
    ├── provenance
    └── target
            │
            ▼
          Anchor
```

Anotace mohou představovat:

- poznámky;
- komentáře;
- připomínky z recenzního řízení;
- redakční pokyny;
- citace;
- Návrhy umělé inteligence;
- pokyny pro publikování;
- sémantické klasifikace.

Anotace je uložena odděleně od textu, ke kterému se vztahuje.

---

## 6.4 Model metadat

**OMI-SPEC-140 — Model metadat** definuje popisná, administrativní, technická a konzervační metadata.

Metadata mohou popisovat:

- název;
- jazyk;
- autorství;
- členství;
- identifikátory;
- předměty;
- klíčová slova;
- financování;
- práva;
- stav publikace;
- původ;
- informace týkající se konkrétních oborů.

Model metadat je navržen tak, aby byl kompatibilní se zavedenými standardy a systémy identifikátorů.

---

# 7. Úroveň pracovního postupu

## 7.1 Model přezkumu

**OMI-SPEC-200 — Review Model** definuje strukturované pracovní postupy vzájemného hodnocení.

Vychází z modelu anotací.

```text
Review Annotation
      │
      ├── reviewer pseudonym
      ├── review round
      ├── recommendation
      ├── visibility policy
      ├── confidential or author-facing body
      └── target anchor
```

Model přezkumu podporuje:

- otevřít recenzi;
- jedno anonymní hodnocení;
- dvojitě anonymní recenze;
- trojnásobně anonymní recenze;
- důvěrné poznámky redaktora;
- komentáře určené autorům;
- několik kol posuzování;
- strukturovaná doporučení;
- zkontrolovat auditní stopy.

Identita recenzenta je oddělena od obsahu recenze, který lze přenášet.

---

## 7.2 Model spolupráce

**OMI-SPEC-210 — Collaboration Model** definuje interakci více uživatelů s rukopisem.

Může podporovat:

- autoři;
- spoluautoři;
- redaktoři;
- překladatelé;
- recenzenti;
- korektori;
- korektorky a korektoři;
- technici;
- AI asistenti.

Oprávnění ke spolupráci jsou založena na rolích a zohledňují konkrétní objekty.

---

## 7.3 Model verzí

**OMI-SPEC-220 — Model verzí** popisuje vývoj rukopisu.

```text
Version 1
    │
    ▼
Change Set
    │
    ▼
Version 2
```

Model by měl podporovat:

- neměnné identifikátory verzí;
- změny na úrovni objektů;
- historie revizí;
- větvení;
- sloučení;
- původ;
- porovnání verzí;
- snímky z kola hodnocení.

---

## 7.4 Model publikování

**OMI-SPEC-230 — Vydavatelský model** popisuje přeměnu kanonického rukopisu na publikované výstupy.

```text
Canonical OMI Manuscript
          │
          ▼
 Publisher Profile
          │
          ▼
 Rendering Pipeline
          │
          ├── HTML
          ├── PDF
          ├── DOCX
          ├── EPUB
          ├── JATS XML
          ├── LaTeX
          └── Future formats
```

Profily vydavatelů mohou definovat:

- typografie;
- styl citace;
- umístění not;
- hierarchie nadpisů;
- geometrie stránky;
- zpracování obrázků;
- požadavky na metadata;
- transformace specifické pro výstup.

Kanonický rukopis zůstává beze změn.

---

# 8. Vrstva interoperability

## 8.1 Architektura pluginů

**OMI-SPEC-300 — Architektura pluginů** definuje mechanismy rozšiřitelnosti.

Pluginy mohou poskytovat:

- nové typy vědeckých objektů;
- metadata specifická pro jednotlivé obory;
- renderery;
- vývozci a dovozci;
- validátoři;
- redakční pracovní postupy;
- integrace úložišť;
- Služby v oblasti umělé inteligence.

Pluginy NESMÍ ohrozit přenositelnost kanonického rukopisu.

---

## 8.2 Platforma API

**OMI-SPEC-310 — Platform API** definuje programovou interakci s rukopisy a vědeckými objekty na adrese OMI.

API může poskytovat následující informace:

- vyhledávání rukopisů;
- vytváření a úpravy objektů;
- operace s anotacemi;
- rozlišení kotvy;
- ověření;
- renderování;
- integrace pracovních postupů;
- import a export;
- rozhraní pluginů.

---

## 8.3 Formát souboru

**[OMI-SPEC-320 — File Format](../specifications/file-format.md)** definuje přenositelnou logickou reprezentaci JSON rukopisu ve formátu OMI.

Stejný logický dokument může být přenášen jako samostatný soubor typu „`.omi.json`“ nebo jako část rukopisu rekonstruovaná z kontejneru typu „OMI“. Formát souboru definuje identifikaci, vyjednávání verze, analýzu, serializaci, ověřování, odkazy, rozšíření, volitelnou výměnu historie a migraci, aniž by předepisoval archivační cesty nebo kompresi.

Formát by měl upřednostňovat:

- transparentnost;
- ověření;
- obnovitelnost;
- dlouhodobé uchování;
- nezávislost na implementaci.

---

## 8.4 Architektura kontejnerů

**[OMI-SPEC-330 — Container Architecture](../specifications/container-architecture.md)** popisuje, jak se související soubory spojují do jednoho balíčku `.omi`, který lze zkontrolovat.

Kontejner může obsahovat:

```text
manuscript.omi
│
├── META-INF/
├── manuscript/
├── media/
├── profiles/
├── plugins/
└── publication/
```

Tento kontejner definuje vyhledávání částí, bezpečnost cest, zacházení s médii, integritu, podpisy a balení pro uchování, přičemž sémantiku rukopisu ponechává na specifikaci OMI-SPEC-320 a základních modelech.

---

# 9. Vrstva umělé inteligence

## 9.1 Asistence pomocí umělé inteligence

**OMI-SPEC-400 — AI Assistance** popisuje, jak návrhy generované strojem interagují s vědeckými rukopisy.

Výstup umělé inteligence je prezentován jako obsah obsahující anotace nebo informace o původu.

```text
AI Service
    │
    ▼
AI Annotation
    │
    ├── model or service identifier
    ├── creation time
    ├── operation type
    ├── confidence or rationale
    ├── target anchor
    └── human review status
```

Návrhy generované umělou inteligencí automaticky nenahrazují kanonický obsah.

---

## 9.2 Hodnocení umělé inteligence

**OMI– SPEC-410 — AI Review** definuje strojově podporované hodnocení kvality.

Mezi možné operace patří:

- strukturální validace;
- kontrola citací;
- jednotnost terminologie;
- jazyková analýza;
- kontrola přístupnosti;
- ověření metadat;
- statistická upozornění;
- soulad s publikačním profilem.

Hodnocení pomocí umělé inteligence se stále liší od hodnocení prováděného lidskými recenzenty.

---

## 9.3 Původ

**OMI-SPEC-420 — Provenience** zachycuje, jak byly vědecké objekty vytvořeny nebo změněny.

Původ může uvádět:

- lidští přispěvatelé;
- softwarové nástroje;
- importní operace;
- Systémy umělé inteligence;
- transformační procesy;
- publikační systémy;
- ověřovací služby.

Provenience podporuje transparentnost, aniž by vyžadovala veřejné zveřejnění všech identifikačních údajů.

---

# 10. Aplikační vrstva

## 10.1 OMI Studio

OMI Studio je referenční prostředí pro tvorbu obsahu založené na specifikacích „OMI“.

```text
OMI Studio
│
├── Manuscript editor
├── Scholarly object inspector
├── Annotation panel
├── Notes editor
├── Review interface
├── Metadata editor
├── Publisher preview
├── Validation
├── Import
└── Export
```

OMI Studio jedná se o implementaci specifikací, nikoli o samotnou specifikaci.

Jiné aplikace mohou funkci „OMI“ implementovat odlišným způsobem.

---

## 10.2 Systémy vydavatelů

Vydavatelé a platformy pro správu časopisů mohou využívat službu „OMI“ k následujícím účelům:

- příjem podání;
- technická validace;
- recenze;
- korektura;
- výroba;
- publikace;
- uložení do úschovny;
- dlouhodobé uchování.

Vydavatel může službu OMI implementovat přímo nebo ji integrovat prostřednictvím služby API či pluginu.

---

## 10.3 Externí systémy

OMI je navržen tak, aby spolupracoval s externí vědeckou infrastrukturou.

Mezi příklady patří:

```text
OMI
 │
 ├── OJS and journal management platforms
 ├── Institutional repositories
 ├── DOI registration services
 ├── ORCID
 ├── ROR
 ├── Crossref
 ├── DataCite
 ├── CSL
 ├── JATS
 ├── IIIF
 ├── Preservation systems
 └── Research data repositories
```

OMI nesnaží se tyto infrastruktury nahradit.

Poskytuje mezi nimi přenositelnou sémantickou vrstvu rukopisu.

---

# 11. Architektura identity a ochrany soukromí

Identita se zpracovává odděleně od kanonického odborného obsahu.

```text
Portable OMI Content
│
├── actor role
├── pseudonym
├── contribution type
└── public provenance
        │
        │ protected mapping
        ▼
Institutional Identity System
├── account
├── verified identity
├── permissions
└── confidential audit data
```

Toto oddělení umožňuje:

- anonymní recenze;
- spolupráce s ochranou soukromí;
- řízené zveřejnění identity;
- institucionální odpovědnost;
- přenosné záznamy o kontrolách.

Soubory s vazbami na soukromé identity by neměly být zahrnuty do přenositelných balíčků pro anonymní recenze.

---

# 12. Architektura vykreslování

Renderování převádí sémantický obsah do podoby zobrazení.

```text
Canonical Manuscript
        │
        ▼
Semantic Validation
        │
        ▼
Target Profile
        │
        ▼
Renderer
        │
        ├── HTML
        ├── PDF
        ├── DOCX
        ├── EPUB
        ├── JATS XML
        ├── LaTeX
        └── Accessible formats
```

Renderer určuje:

- typografie;
- stránkování;
- umístění not;
- formátování citací;
- rozložení obrázků;
- zobrazení tabulky;
- vzhled nadpisu;
- zastupování v oblasti přístupnosti.

Překlad NESMÍ měnit sémantický význam rukopisu.

---

# 13. Příklad: životní cyklus anotace v rámci vzájemného hodnocení

Následující příklad ukazuje, jak spolu spolupracují jednotlivé vrstvy systému „OMI“.

```text
1. A paragraph exists as a scholarly object.
                    │
                    ▼
2. An anchor identifies a sentence in the paragraph.
                    │
                    ▼
3. A reviewer creates a review annotation.
                    │
                    ▼
4. The Review Model applies anonymity and visibility rules.
                    │
                    ▼
5. The author receives an anonymized review projection.
                    │
                    ▼
6. The author revises the canonical manuscript.
                    │
                    ▼
7. The Versioning Model records the change.
                    │
                    ▼
8. The annotation is resolved or retained as provenance.
```

Komentář k revizi není trvale vložen do odstavce.

Zůstává nezávislým, dohledatelným vědeckým objektem.

---

# 14. Příklad: životní cyklus publikace

```text
Authoring
    │
    ▼
Canonical OMI Manuscript
    │
    ▼
Validation
    │
    ▼
Peer Review
    │
    ▼
Revision and Versioning
    │
    ▼
Editorial Acceptance
    │
    ▼
Publisher Profile
    │
    ▼
Rendering
    │
    ├── Journal HTML
    ├── Archival PDF
    ├── JATS XML
    ├── EPUB
    └── Repository package
```

Všechny výstupy může generovat stejný kanonický rukopis.

Žádný výstupní formát se nestává autoritativním zdrojem.

---

# 15. Architektonické invarianty

Všechny implementace rozhraní `OMI`, které splňují specifikaci, BY MĚLY zachovávat následující invarianty.

## 15.1 Invariant kanonického obsahu

Změny týkající se konkrétní prezentace NESMÍ měnit kanonický vědecký význam.

## 15.2 Invarianta stabilní identity

Vědecký objekt BY MĚL zachovat svou identitu i při běžných editačních operacích.

## 15.3 Invarianta vztahu

Sémantické vztahy BY MĚLY zůstat explicitní a strojově čitelné.

## 15.4 Invarianta přenositelnosti

Rukopis MUSÍ zůstat srozumitelný i mimo software, ve kterém byl vytvořen.

## 15.5 Invarianta soukromí

Důvěrné údaje o totožnosti MUSÍ zůstat oddělené od přenosného vědeckého obsahu.

## 15.6 Nezměnitelnost původu

Významné automatizované i ruční úpravy by MĚLY být přiřaditelné.

## 15.7 Invarianta rozšiřitelnosti

Doplňky BY MĚLY zachovat platnost a srozumitelnost původního rukopisu.

---

# 16. Architektonické hranice

OMI definuje:

- sémantické struktury rukopisů;
- identity vědeckých objektů;
- kotvy;
- poznámky;
- zobrazení pracovních postupů;
- interoperabilní metadata;
- konstrukce přenosných obalů;
- vstupy pro vykreslování;
- mechanismy prodloužení.

OMI nestanoví:

- jeden editor;
- jednotná publikační platforma;
- jedna databáze;
- jeden programovací jazyk;
- jedna metoda vzájemného hodnocení;
- jeden styl citování;
- jednotný vizuální styl;
- jediný institucionální pracovní postup.

Implementace si mohou i nadále volně vybírat své interní technologie.

---

# 17. Souhrnná mapa

```text
                         OMI-SPEC-000
                        Core Principles
                               │
                               ▼
                    Scholarly Object Model
                               │
                  ┌────────────┴────────────┐
                  ▼                         ▼
          Document Model              Metadata Model
                  │
                  ▼
             Anchor Model
                  │
                  ▼
           Annotation Model
                  │
      ┌───────────┼───────────┬───────────────┐
      ▼           ▼           ▼               ▼
 Review Model  Citation    AI Assistance   Publishing
      │           │           │               │
      └───────────┴───────────┴───────────────┘
                              │
                              ▼
                    Portable OMI Manuscript
                              │
                              ▼
                       OMI Implementations
                              │
          ┌───────────────────┼───────────────────┐
          ▼                   ▼                   ▼
       Studio          Publisher Systems     Repositories
                              │
                              ▼
                     Publication Renderers
                              │
            ┌─────────────────┼─────────────────┐
            ▼                 ▼                 ▼
           HTML              PDF              JATS
```

---

# 18. Závěr

Open Manuscript Initiativea nabízí spíše vrstvenou sémantickou architekturu než monolitický formát souboru.

Jeho ústředním abstraktním pojmem je graf vědeckých objektů:

```text
Stable scholarly objects
        +
Explicit semantic relationships
        +
Portable metadata
        +
Traceable provenance
```

Na tomto grafu jsou založeny aplikace, pracovní postupy a formáty publikací.

Díky oddělení vědeckého obsahu od jeho prezentace a infrastruktury umožňuje systém OMI, aby se rukopisy mohly přenášet mezi autory, obory, vydavateli, repozitáři a budoucími technologiemi, aniž by ztratily svou intelektuální strukturu.

> **Pište přirozeně. Vytvořte strukturu jednou. Publikujte kdekoli.**
