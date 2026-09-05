---
id: annotation-model
title: OMI-SPEC-130 — Model anotací
sidebar_position: 3
description: Architektura sémantické anotace pro přenositelné vědecké rukopisy.
---

# OMI-SPEC-130 — Model anotací

**Stav:** Návrh  
**Verze:** 0.2.0  
**Starší identifikátor:** `OMI-SPEC-003`  
**Závisí na:** OMI-SPEC-100 (model dokumentu), OMI-SPEC-110 (model odkazu), OMI-SPEC-120 (model vědeckého objektu)

---

## Abstrakt

Model anotací definuje, jakým způsobem se sémantické informace přiřazují k vědeckým objektům v rámci dokumentu formátu „Open Manuscript Initiative“ (OMI).

Na rozdíl od tradičních textových editorů jsou anotace **samostatnými vědeckými objekty**. Jsou propojeny se stabilními kotvami, nikoli s pozicemi na stránce, což umožňuje, aby rukopisy zůstaly po celou dobu svého životního cyklu přenositelné, strojově čitelné a nezávislé na konkrétním vydání.

Tento model slouží jako základ pro poznámky, komentáře, vzájemné recenze, návrhy umělé inteligence, redakční pokyny, sémantické citace a budoucí typy anotací.

---

# 1. Motivace

Tradiční editory dokumentů považují poznámky za formátovací prvky vázané na vizuální rozvržení.

Tento přístup má značná omezení:

- při úpravách dochází k přerušení not
- Komentáře se liší podle konkrétní aplikace
- Údaje z revizí nelze snadno sdílet
- Anotace vytvořené umělou inteligencí nelze zachovat
- formáty publikací vyžadují spíše konverzi než transformaci

OMI nahrazuje tento model sémantickou architekturou.

Anotace jsou přiřazeny k vědeckým objektům – nikoli ke stránkám.

---

# 2. Principy návrhu

Anotace MUSÍ:

- existují nezávisle na rozvržení dokumentu
- referenční stabilní kotvy
- přežít strukturální úpravy
- podpora více vrstev anotací
- zůstat strojově čitelné
- zůstat editovatelné ručně
- být přenositelný napříč publikačními formáty

Anotace NIKDY nepatří k vykreslené stránce.

Patří mezi sémantické objekty.

---

# 3. Architektura

```
Manuscript

├── Metadata
├── Sections
├── Blocks
├── Figures
├── Tables
├── Equations
├── References
├── Notes
└── Annotations
```

Anotace tvoří samostatnou sbírku.

Objekty dokumentu nikdy neobsahují vložená data anotací.

---

# 4. Cílový model

Každá poznámka odkazuje na jeden nebo více kotevních bodů.

```
Annotation
      │
      ▼
Anchor
      │
      ▼
Scholarly Object
```

Kotvy jsou definovány v modelu kotev a poskytují stabilní reference i po úpravách.

---

# 5. Podporované cíle

Anotace MOHOU být zaměřeny na:

- rukopis
- sekce
- pododdíl
- odstavec
- rozsah textu v řádku
- obrázek
- oblast obrázku
- tabulka
- buňka tabulky
- rovnice
- položka v bibliografii
- odkaz
- heslo ve slovníčku
- pole metadat
- autor
- komentář k recenzi
- externí zdroj

Tento seznam MOHOU v budoucnu doplnit další typy objektů.

---

# 6. Typy anotací

OMI definuje anotace spíše podle sémantické role než podle způsobu zobrazení.

## Poznámky

- poznámka pod čarou
- poznámka na konci textu
- poznámka autora
- poznámka redakce
- poznámka překladatele

---

## Komentáře

- komentář
- odpověď
- diskusní vlákno
- vyřešený komentář

---

## Recenze

- zásadní revize
- drobná úprava
- otázka
- doporučení
- schválení
- zamítnutí

---

## Citace

- podporuje tvrzení
- je v rozporu s
- souvislosti
- primární zdroj
- sekundární zdroj

---

## AI

- návrh na přepracování
- gramatický návrh
- překlad
- návrh terminologie
- ověření faktů
- varování ohledně konzistence

---

## Vydavatelství

- korektura
- korektura
- výrobní pokyny
- pokyny pro sazbu
- poznámka vydavatele

---

# 7. Datový model

Příklad:

```json
{
  "id": "annotation-001",

  "type": "footnote",

  "target": {
    "anchor": "anchor-15"
  },

  "body": {
    "content": "The original manuscript contains a different reading."
  },

  "creator": "orcid:0000-0002-1234-5678",

  "created": "2026-07-21T12:00:00Z",

  "modified": "2026-07-21T12:10:00Z"
}
```

---

# 8. Více cílů

Jedna anotace MŮŽE odkazovat na více vědeckých objektů.

Příklad:

```
Paragraph 2

+

Figure 5

+

Table 3
```

Díky tomu může jedno vědecké vysvětlení popsat několik souvisejících objektů najednou.

---

# 9. Rozsáhlá těla poznámek

Těla anotací jsou sama o sobě dokumenty typu „OMI“.

Anotace proto MOHOU obsahovat:

- formátovaný text
- odkazy
- matematické výrazy
- čísla
- tabulky
- sémantické odkazy
- vnořené anotace

Anotace se neomezují pouze na prostý text.

---

# 10. Stabilní ukotvení

Anotace NESMÍ záviset na:

- čísla stránek
- vypočítané souřadnice
- vizuální uspořádání

Místo toho odkazují na stabilní kotvy definované v dokumentu OMI-SPEC-110.

---

# 11. Vykreslování

Zobrazení závisí na rendereru.

Stejná anotace se může zobrazit jako:

| Výstup | Zobrazení |
|---------|-----------|
| HTML | Vyskakovací okno |
| PDF | Poznámka pod čarou |
| EPUB | Poznámka na konci textu |
| DOCX | Původní poznámka pod čarou |
| JATS XML | `<fn>` |
| Recenze webu | Komentář v postranním panelu |

Samotný rukopis se nikdy nemění.

Mění se pouze zobrazení.

---

# 12. Spolupráce

Anotace podporují spolupráci.

Každá anotace uchovává vlastní:

- tvůrce
- časová razítka
- historie revizí
- stav
- oprávnění

To umožňuje:

- společné psaní
- recenze odborníků
- redakční procesy
- Úpravy s podporou umělé inteligence

---

# 13. Rozšiřitelnost

Vydavatelé a tvůrci softwaru MOHOU zavést další typy anotací.

Příklady:

- právní upozornění
- taxonomické anotace
- lingvistická analýza
- poznámka k historickému zdroji
- chemické varování
- klinické pozorování

Vlastní typy anotací BY MĚLY deklarovat svou sémantickou roli, aby byla zachována interoperabilita.

---

# 14. Vztah k ostatním specifikacím

Tato specifikace závisí na:

- OMI-SPEC-100 — Model dokumentu
- OMI-SPEC-110 — Model kotvy
- OMI-SPEC-120 — Vědecký objektový model

a tvoří základ pro:

- OMI-SPEC-200 — Testovací model
- OMI-SPEC-190 — Model spolupráce a oprávnění
- OMI-SPEC-210 — Model citace
- OMI-SPEC-230 — Model publikování

---

# 15. Historie změn

- **0.2.0** — Přeneseno z dočasné adresy `OMI-SPEC-003` na definitivní adresu `OMI-SPEC-130` a opraveny závislosti.

---

# 16. Filozofie

V systému „OMI“ jsou anotace plnohodnotnými vědeckými objekty.

Poznámka pod čarou, připomínka z recenze, pokyn redakce, návrh generovaný umělou inteligencí či sémantická citace – to vše jsou příklady téhož pojmu:

> **Sémantický vztah opírající se o pevný vědecký základ.**

Díky oddělení obsahu, vztahů a prezentace umožňuje systém „OMI“ vytvářet skutečně přenositelné vědecké rukopisy, které se mohou vyvíjet v průběhu psaní, recenzování, publikování, uchovávání a opětovného použití, aniž by došlo ke ztrátě sémantického významu.
