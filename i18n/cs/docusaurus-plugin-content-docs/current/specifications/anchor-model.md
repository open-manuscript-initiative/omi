---
id: anchor-model
title: OMI-SPEC-110 — Model kotvy
sidebar_label: Model kotvy
sidebar_position: 12
---

# OMI-SPEC-110 — Model kotvy

## Stav

**Návrh**

Verze: 0.1.0

**Starší identifikátor:** `OMI-SPEC-003`

---

# Účel

Model Anchor definuje, jakým způsobem jsou sémantické objekty přiřazovány k vědeckému obsahu.

Na rozdíl od tradičních modelů dokumentů, které odkazují na čísla stránek nebo pozice znaků, zavádí dokument „OMI“ trvalé sémantické kotvy.

Kotvy představují stabilní odkazy, které zůstávají zachovány i po úpravách, publikování a konverzi formátu.

Tvoří spojovací vrstvuOpen Manuscript Initiativeu.

---

# Zásady návrhu

Model „Anchor“ vychází z následujících principů:

- Sémantická perzistence
- Nezávislost na rozložení
- Stabilní identita
- Podpora více cílů
- Rozpoznávání verzí
- Strojová čitelnost
- Dlouhodobé uchování

---

# Co je to kotva?

Kotva je trvalý sémantický odkaz, který identifikuje jeden nebo více cílů v rámci rukopisu.

Anchor sám o sobě neobsahuje žádný obsah.

Místo toho propojuje sémantické objekty s významovými částmi rukopisu.

---

# Proč právě kotvy?

Tradiční vydavatelství se opírá o čísla stránek a pozice znaků.

Tyto odkazy přestanou fungovat, jakmile se text změní.

OMI Kotvy zůstávají vázány spíše na sémantický obsah než na jeho vizuální umístění.

To umožňuje spolehlivou spolupráci v průběhu celého životního cyklu rukopisu.

---

# Cílové kotvy

Termín „kotva“ může znamenat:

- rozsah znaků
- slovo
- několik slov
- věta
- odstavec
- několik odstavců
- oddíl
- číslo
- tabulka
- vzorec
- odkaz
- bibliografický záznam
- metadata
- celý rukopis

---

# Více cílů

Jeden kotevní bod může odkazovat na více míst.

Příklad:

```text
Anchor A

├── Paragraph 2
├── Figure 4
└── Table 1
```

To umožňuje, aby jediný sémantický objekt popisoval vztahy mezi různými částmi rukopisu.

---

# Sémantické vztahy

Kotvy propojují vědecké objekty.

Mezi příklady patří:

Anotace
↓

Kotva

↓

Rozsah textu

nebo

Citace

↓

Kotva

↓

Záznam v bibliografii

nebo

Překlad

↓

Kotva

↓

Původní odstavec

---

# Objekty využívající kotvy

Téměř každý sémantický objekt v rámci OMI může odkazovat na jeden nebo více kotevních bodů.

Mezi příklady patří:

- poznámky
- odkazy
- čísla
- tabulky
- hesla ve slovníčku
- překlady
- připomínky recenzentů
- poznámky redakce
- Návrhy umělé inteligence
- úkoly
- odkazy
- hypertextové odkazy

---

# Metadata kotvy

Každá kotva obsahuje:

- Identifikátor
- Typ
- Cíl
- Tvůrce
- Časové razítko vytvoření
- Historie změn
- Stav

---

# Stabilní identifikátory

Každý Anchor dostane celosvětově jedinečný identifikátor.

Příklad:

```text
anchor:3d91f88f-5d61-4d7e-a857-bf5b44d9f8a1
```

Trvalé identifikátory zajišťují spolehlivé odkazy napříč jednotlivými verzemi.

---

# Chování při úpravách

Kotvy by měly odolat běžným úpravám.

Mezi příklady patří:

- vkládání textu
- vymazání textu
- posouvání odstavců
- rozdělení úseků
- sloučení oddílů

Systém průběžně zajišťuje integritu kotev.

---

# Rozlišení kotvy

Pokud se původní cíl podstatně změní, systém se pokusí o sémantické přeřazení.

Mezi možné strategie patří:

- přesná shoda
- strukturální shoda
- kontextová shoda
- sémantická podobnost

Konkrétní realizace mohou kombinovat více strategií.

---

# Viditelnost

Samotné kotvy nejsou vidět.

Uživatelé komunikují se sémantickými objekty, které jsou k nim přiřazeny.

Například:

Poznámka pod čarou

↓

Kotva

↓

Vybraný text

---

# Renderování

Různé formáty publikace zobrazují objekty založené na kotvách odlišně.

Příklad:

PDF

↓

Poznámka pod čarou

HTML

↓

Popisek

EPUB

↓

Závěrečná poznámka

JATS XML

↓

Sémantický prvek

Samotný kotva se nikdy nezobrazí.

Zobrazí se pouze přiložený sémantický objekt.

---

# Verzování

Kotvy se podílejí na správě verzí dokumentů.

Identifikátor Anchor by měl pokud možno zůstat platný i při všech revizích rukopisu.

To umožňuje spolehlivé srovnání jednotlivých verzí.

---

# Interoperabilita

Budoucí mapování může zahrnovat:

- Datový model webových anotací
- Selektory W3C
- JATS XML
- HTML Identifikátory fragmentů
- DOCX Komentáře
- PDF Anotace

---

# Rozšíření pluginů

Pluginy mohou definovat další typy kotev.

Příklady:

Profil historie

- Archivní dokument
- Úryvek z charty

Profil matematiky

- Krok ověření
- Složka rovnice

Profil biologie

- Sekvence genu
- Taxonomický uzel

---

# Budoucí práce

Budoucí specifikace budou definovat:

- Algoritmy pro určování polohy kotvy
- Odkazy mezi dokumenty
- Trvalé globální kotvy
- Integrace propojených dat
- Společné řešení konfliktů

---

# Historie změn

- **0.1.0** — Přesunuto z dočasné adresy `OMI-SPEC-003` na oficiální adresu `OMI-SPEC-110`.

---

# Shrnutí

Model Anchor představuje sémantický základ systému OMI.

Ankory nespočívají v číslech stránek ani ve vizuální poloze, ale propojují vědecké objekty přímo s významem.

Díky tomu zůstávají poznámky, citace, recenze, podpora umělé inteligence, překlady a budoucí akademické služby stabilní v průběhu úprav, publikování i uchovávání.

Anchory proměňují rukopis z formátovaného dokumentu v propojený znalostní objekt.
