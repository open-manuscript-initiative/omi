---
id: platform-api
title: OMI-SPEC-310 — PlatformaAPI
sidebar_label: PlatformaAPI
sidebar_position: 19
---

# OMI-SPEC-310 — PlatformaAPI

## Stav

**Návrh**

Verze: 0.1.0

**Starší identifikátor:** `OMI-SPEC-010`

---

# Účel

Platforma API definuje, jak externí aplikace, pluginy, automatizační nástroje a publikační platformy komunikují s platformou Open Manuscript Initiative (OMI).

API je koncipován spíše na základě sémantických vědeckých objektů než na základě souborů.

---

# Zásady návrhu

Platforma API se řídí těmito zásadami:

- API Za prvé
- Objektově orientované
- Řízené událostmi
- Nezávislé na platformě
- Verzované
- Bezpečné
- Rozšiřitelné

---

# API Vrstvy

```
Applications

↓

REST API

↓

Event API

↓

Plugin API

↓

OMI Core
```

---

# Základní zdroje

Repozitář „API“ zpřístupňuje vědecké objekty.

Příklady:

- Dokumenty
- Části
- Odstavce
- Kotvy
- Anotace
- Odkazy
- Metadata
- Recenze
- Datové soubory
- Autoři
- Členství
- Profil publikací

---

# REST API

Mezi typické koncové body patří:

```
GET    /documents

POST   /documents

GET    /documents/{id}

PATCH  /documents/{id}

DELETE /documents/{id}
```

Objekty se přenášejí jako strukturované JSON.

---

# Objekt API

Každý vědecký objekt má jednotné rozhraní.

Příklad:

```
GET /objects/{id}
```

Odpověď:

```json
{
  "id": "omi:citation:8f5a21",
  "type": "Citation",
  "version": 4,
  "metadata": {},
  "relationships": {}
}
```

---

# Akce „API“

OMI zveřejňuje události popisující změny v rukopisu.

Příklady:

- Datum vytvoření dokumentu
- Otevřený dokument
- Objekt vytvořen
- ObjectUpdated
- AnchorCreated
- Anotace přidána
- Citace ověřena
- Recenze odeslána
- Publikace zahájena
- Publikace dokončena

Pluginy se přihlašují k odběru událostí, místo aby přímo měnily jádro.

---

# Plugin API

Pluginy komunikují s OMI prostřednictvím stabilních rozhraní.

Příklady:

```
register()

activate()

deactivate()

dispose()
```

Pluginy nikdy nepřistupují k interním implementačním detailům.

---

# Vykreslování API

Renderery publikací implementují společné rozhraní.

Příklad:

```
render(document, profile)
```

Možné výstupy:

- HTML
- PDF
- EPUB
- DOCX
- JATS XML
- Markdown

---

# Ověření API

Validační služby mohou provádět kontrolu vědeckých objektů.

Příklady:

- Ověření metadat
- Ověření citací
- Ověření přístupnosti
- Validace specifická pro daný obor

Validace generuje strukturované zprávy.

---

# Ověření

Mezi možné způsoby ověření patří:

- OAuth 2.1
- OpenID Connect
- API Žetony
- Služební účty

Způsoby ověřování závisí na konkrétní implementaci.

---

# Autorizace

Oprávnění lze udělovat na různých úrovních.

Příklady:

- Přečíst dokument
- Upravit metadata
- Vytvořit poznámku
- Odeslat recenzi
- Zveřejnit
- Správa pluginů

Autorizace by měla podporovat řízení přístupu na základě rolí a na úrovni objektů.

---

# Verzování

Dokument „API“ je verzován.

Příklad:

```
/api/v1/
/api/v2/
```

Zásadní změny vyžadují novou verzi API.

---

# Webhooky

Externí systémy se mohou přihlásit k odběru událostí.

Příklady:

```
POST

DocumentPublished

↓

https://journal.example/webhook
```

Mezi podporované akce mohou patřit:

- publikace dokončena
- recenze odeslána
- rukopis přijat
- metadata byla aktualizována

---

# Dávkové operace

API by měl podporovat dávkové zpracování.

Příklady:

- ověřit všechny citace
- obnovit metadata
- exportovat všechny formáty publikací
- importovat kolekce objektů

---

# Vyhledat „API“

Vyhledávání je spíše sémantické než textové.

Příklady:

```
author = "Smith"

↓

all manuscripts
```

```
citation DOI = ...

↓

all references
```

```
object type = Figure

↓

all figures
```

---

# Interoperabilita

Mezi budoucí integrace patří:

- OJS
- OMP
- OPS
- Crossref
- DataCite
- ORCID
- Zenodo
- GitHub
- n8n
- Zotero

---

# Budoucí práce

Budoucí specifikace budou definovat:

- GrafAPI
- Dotazovací jazyk
- Objekt API
- Synchronizace API
- Rozšíření AI „API“

---

# Historie změn

- **0.1.0** — Přesunuto z dočasné adresy `OMI-SPEC-010` na oficiální adresu `OMI-SPEC-310`.

---

# Shrnutí

Platforma „OMI“ (API) poskytuje stabilní, verzované a objektově orientované rozhraní pro vědeckou komunikaci.

API nezveřejňuje soubory, ale sémantické vědecké objekty, čímž umožňuje interoperabilitu mezi vydavatelskými systémy, repozitáři, automatizačními platformami a budoucími vědeckými infrastrukturami.
