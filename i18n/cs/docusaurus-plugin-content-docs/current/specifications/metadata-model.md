---
id: metadata-model
title: OMI-SPEC-140 — Model metadat
sidebar_label: Model metadat
sidebar_position: 13
---

# OMI-SPEC-140 — Model metadat

## Stav

**Návrh**

Verze: 0.1.0

**Starší identifikátor:** `OMI-SPEC-004`

---

# Účel

Model metadat definuje, jak jsou vědecká metadata prezentována v rámci systému pro správu vědeckých publikací (Open Manuscript Initiative, OMI).

Metadata popisují spíše vědecký objekt než jeho vizuální znázornění.

Tento model je navržen tak, aby zajistil interoperabilitu mezi nástroji pro tvorbu obsahu, publikačními platformami, repozitáři, indexovacími službami a systémy pro dlouhodobou archivaci.

---

# Zásady návrhu

Model metadat se řídí těmito zásadami:

- Nejprve sémantika
- Strojově čitelné
- Srozumitelné pro člověka
- Kompatibilní
- Rozšiřitelné
- Trvalý
- Kompatibilní s FAIR
- Nezávislé na platformě

---

# Vrstvy metadat

OMI rozlišuje několik vrstev metadat.

```
Document
│
├── Descriptive Metadata
├── Administrative Metadata
├── Technical Metadata
├── Preservation Metadata
└── Discipline-specific Metadata
```

---

# Popisná metadata

Popisuje samotnou vědeckou práci.

Příklady:

- Název
- Podtitul
- Abstrakt
- Klíčová slova
- Jazyk
- Předmět
- Disciplína
- Typ publikace

---

# Metadata autora

Každý autor je reprezentován jako sémantický objekt.

Příklady:

- Celé jméno
- Preferované jméno
- ORCID
- Přííslušnost
- ROR Identifikátor
- E-mail (nepovinné)
- Země
- Životopis (volitelné)

Autor může mít více afilací.

---

# Metadata o příslušnosti

Informace o instituci by měly zůstat nezávislé na autorech.

Příklady:

- Název instituce
- Oddělení
- Fakulta
- Země
- Město
- ROR Identifikátor
- Webové stránky

---

# Metadata identifikátoru

OMI podporuje více trvalých identifikátorů.

Příklady:

- DOI
- ARK
- Rukojeť
- ORCID
- ROR
- ISBN
- ISSN
- ISNI

Tento model umožňuje, aby stejný objekt měl více identifikátorů.

---

# Metadata publikace

Mezi příklady patří:

- Stav publikace
- Verze
- Vydavatel
- Časopis
- Objem
- Problém
- Číslo výrobku
- Stránky
- Datum vydání

---

# Metadata o právech

Informace o právech zahrnují:

- Licence
- Držitel autorských práv
- Rok vydání
- Embargo
- Přístupová práva

Příklady:

- MIT
- CC BY 4.0
- CC BY-SA
- CC BY-NC
- CC0

---

# Metadata o financování

Financování výzkumu by mělo být jasně uvedeno.

Příklady:

- Financující organizace
- Číslo grantu
- Název grantu
- Identifikátor poskytovatele financování

Budoucí verze mohou podporovat integraci s registrem poskytovatelů financování Crossref.

---

# Metadata o výsledcích výzkumu

Rukopis může odkazovat na další výsledky výzkumu.

Příklady:

- Datový soubor
- Software
- Protokol
- Kolekce obrázků
- Doplňkový materiál
- Multimédia

Každý výstup by měl mít, pokud je to možné, svůj vlastní trvalý identifikátor.

---

# Metadata týkající se uchovávání

Dlouhodobé uchovávání vyžaduje další metadata.

Příklady:

- Datum vytvoření
- Datum změny
- Historie verzí
- Kontrolní součet
- Formát souboru
- Stav ochrany

Budoucí verze se možná budou řídit standardem PREMIS.

---

# Metadata specifická pro jednotlivé obory

Profily disciplín mohou rozšiřovat model metadat.

Příklady:

Historie

- Archiv
- Kolekce
- Signatura

Medicína

- Schválení etickou komisí
- Identifikátor klinického hodnocení

Chemie

- Číslo CAS
- Molekulární vzorec

Biologie

- Taxonomický identifikátor
- Identifikátor genu

Matematika

- Klasifikace MSC

---

# Vztahy mezi metadaty

Objekty metadat jsou vzájemně propojené.

Příklad:

```
Author
    │
    ├── ORCID
    ├── Affiliation
    └── Funding

Affiliation
    │
    └── ROR
```

Vztahy jsou explicitní a strojově čitelné.

---

# Interoperabilita

Model metadat je navržen tak, aby byl kompatibilní se stávajícími standardy.

Mezi plánovaná mapování patří:

- JATS
- Crossref
- DataCite
- Dublin Core
- schema.org
- MARC21
- MODS
- BibTeX
- CSL JSON
- RIS

---

# Ověření

Metadata by měla umožňovat ověření.

Mezi příklady patří:

- povinná pole
- ověření identifikátoru
- řízené slovníky
- kódy jazyků
- formáty data

Validační pravidla se mohou lišit v závislosti na profilu publikace.

---

# Rozšiřitelnost

Model metadat lze rozšiřovat pomocí pluginů.

Pluginy mohou způsobit:

- nová pole metadat
- odborná slovní zásoba jednotlivých oborů
- pravidla ověřování
- mapování exportů

aniž by došlo ke změně základní specifikace.

---

# Budoucí práce

Budoucí specifikace budou definovat:

- Šablona citace
- Metadata recenze
- Model zachování
- Propojená otevřená data
- Integrace znalostního grafu

---

# Historie změn

- **0.1.0** — Přeneseno z dočasné adresy `OMI-SPEC-004` na oficiální adresu `OMI-SPEC-140`.

---

# Shrnutí

Model metadat „OMI“ poskytuje flexibilní, rozšiřitelný a na standardech založený rámec pro popis vědeckých objektů.

Díky oddělení metadat od vizuální prezentace a zároveň podpoře trvalých identifikátorů a mezinárodních standardů umožňuje služba OMI hladkou interoperabilitu napříč ekosystémy vědeckého publikování.
