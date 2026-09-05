---
id: core-principles
title: OMI-SPEC-000 — Základní zásady
sidebar_position: 1
description: Základní principy organizace „Open Manuscript Initiative“.
---

# OMI-SPEC-000 — Základní zásady

**Stav:** Návrh  
**Verze:** 0.1

---

# Abstrakt

Projekt „Open Manuscript Initiative“ (OMI) vychází z přesvědčení, že vědecké poznatky by měly existovat nezávisle na jakémkoli konkrétním softwaru, vydavateli, formátu souboru či technologii zobrazení.

Tento dokument definuje architektonické zásady, jimiž se řídí každá specifikace a implementace protokolu OMI.

Tyto zásady mají normativní charakter. Všechny budoucí specifikace OMI by s nimi MĚLY být v souladu.

---

# 1. Vize

Vědecké poznatky by měly být:

- přenosný
- kompatibilní
- strojově čitelný
- čitelné pro člověka
- nezávislý na vydavateli
- nezávislý na softwaru
- zachovatelný pro budoucí generace

OMI bylo zřízeno za účelem dosažení těchto cílů.

---

# 2. Oddělení zájmů

OMI odděluje pojmy, které tradiční editory dokumentů spojují dohromady.

Následující vrstvy jsou nezávislé:

```
Knowledge

↓

Semantics

↓

Structure

↓

Relationships

↓

Presentation
```

Na formátu publikace závisí pouze prezentační vrstva.

Všechno ostatní zůstává beze změny.

---

# 3. Obsah je kanonický

Vědecký obsah představuje kanonické znění.

Všechny vykreslené formuláře z něj vycházejí.

Mezi příklady patří:

- PDF
- HTML
- DOCX
- EPUB
- JATS XML
- LaTeX
- budoucí formáty

Žádný z těchto formátů nedefinuje rukopis.

Oni to pouze ztvárňují.

---

# 4. Sémantika před formátováním

Formátování je způsob prezentace.

Sémantika je znalost.

OMI ukládá spíše sémantický význam než vizuální podobu.

Příklady:

Místo:

> Tučné písmo

OMI obchody:

> Nadpis

Místo:

> Kurzíva

OMI obchody:

> Vědecký název

Místo:

> Formátování poznámek pod čarou

OMI obchody:

> Vědecký komentář

---

# 5. Vše je předmětem vědeckého bádání

Každý významný prvek je reprezentován jako samostatný vědecký objekt.

Mezi příklady patří:

- rukopis
- sekce
- odstavec
- nadpis
- obrázek
- tabulka
- rovnice
- odkaz
- položka v bibliografii
- poznámka
- recenze
- datový soubor
- doplňkový materiál

Objekty mají stabilní identitu nezávislou na způsobu zobrazení.

---

# 6. Vztahy jsou prvotřídními občany

Vztahy nejsou skryty ve formátování.

Jsou to explicitní sémantické objekty.

Mezi příklady patří:

- odkaz
- poznámka
- recenze
- odkaz
- závislost
- původ

Vztahy zůstávají přenositelné.

---

# 7. Stabilní identita

Každý vědecký objekt by měl mít stabilní identifikátor.

Identifikátory zůstávají platné i po úpravách.

Stabilní identita umožňuje:

- poznámky
- odkazy
- spolupráce
- vzájemné hodnocení
- správa verzí

---

# 8. Zobrazení závisí na rendereru

Způsob prezentace závisí zcela na cílovém formátu publikace.

Z téhož rukopisu může vzniknout:

- PDF
- HTML
- EPUB
- DOCX
- JATS XML
- Braillovo písmo
- syntéza řeči
- budoucí média

aniž by došlo ke změně původního rukopisu.

---

# 9. Identita a obsah jsou nezávislé

Osobní identita není nedílnou součástí vědeckého obsahu.

Autoři, recenzenti, redaktoři, překladatelé a asistenti umělé inteligence pracují s rukopisy na základě přesně definovaných sémantických rolí.

Ochrana soukromí a anonymita jsou aspekty implementace, které jsou podporovány datovým modelem, nikoli zakomponovány do obsahu dokumentu.

---

# 10. Otevřenost jako součást designu

Všechny specifikace v rámci programu „OMI“ MUSÍ být:

- otevřeně zdokumentováno
- s otevřeným číslováním verzí
- otevřeně realizovatelné
- nezávislý na dodavateli
- rozšiřitelný

Žádná implementace se nestane povinnou.

---

# 11. Zachování na prvním místě

Vědecké rukopisy musí zůstat srozumitelné i po desítkách let.

Proto projekt „OMI“ nevyužívá závislosti na:

- proprietární software
- proprietární formáty souborů
- vlastní cloudové služby
- vlastní renderovací enginy

Sémantický rukopis zůstává archivní záznamem.

---

# 12. Interoperabilita

OMI je navržen tak, aby spolupracoval se stávající vědeckou infrastrukturou.

Mezi příklady patří:

- JATS
- Crossref
- DataCite
- ORCID
- DOI
- ROR
- CSL
- Dublin Core
- Schema.org
- IIIF

OMI doplňuje stávající normy, místo aby je nahrazoval.

---

# 13. Umělá inteligence

Umělá inteligence je považována za vědeckého účastníka.

Návrhy vygenerované umělou inteligencí:

- jsou poznámky
- nadále lze přičíst
- lze přezkoumat
- jsou reverzibilní
- nikdy automaticky nenahrazujte kanonický rukopis

Lidští autoři si zachovávají redakční pravomoc.

---

# 14. Rozšiřitelnost

OMI je záměrně rozšiřitelný.

Lze zavádět nové typy vědeckých objektů, typy anotací, formáty publikací a pracovní postupy, aniž by došlo k narušení stávajících rukopisů.

Zpětná kompatibilita by měla být zachována, kdykoli je to možné.

---

# 15. Správa komunity

OMI je specifikace vytvořená komunitou.

Jeho vývoj by se měl řídit následujícími zásadami:

- transparentnost
- veřejná diskuse
- vědecký konsenzus
- technická dokonalost
- dlouhodobá udržitelnost

Žádná jednotlivá instituce ani dodavatel není vlastníkem tohoto standardu.

---

# 16. Filozofie

Formát „Open Manuscript Initiative“ není pouhým formátem dokumentu.

Jedná se o otevřenou sémantickou architekturu pro vědeckou komunikaci.

OMI odděluje znalosti od způsobu prezentace, význam od formátování a odborný obsah od softwaru.

Tím umožňuje, aby se rukopisy volně pohybovaly napříč obory, nakladatelstvími, technologiemi a generacemi, přičemž zůstává zachována jejich intelektuální integrita.

> **Pište přirozeně. Vytvořte strukturu jednou. Publikujte kdekoli.**
