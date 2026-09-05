---
id: review-model
title: OMI-SPEC-200 — Testovací model
sidebar_label: Model pro přezkoumání
sidebar_position: 15
---

# OMI-SPEC-200 — Testovací model

## Stav

**Návrh**

Verze: 0.1.0

**Starší identifikátor:** `OMI-SPEC-006`

---

# Účel

Model recenzního řízení definuje, jak jsou procesy vědeckého recenzního řízení znázorněny v rámci iniciativy „Open Manuscript Initiative“ (OMI).

OMI nepovažuje recenzní řízení za externí pracovní postup, ale modeluje recenze jako sémantické objekty přímo propojené s rukopisem.

Tento přístup umožňuje společnou úpravu, přehlednou historii revizí a interoperabilitu mezi různými publikačními platformami.

---

# Zásady návrhu

Model přezkumu se řídí těmito zásadami:

- Nejprve sémantika
- Nezávislé na pracovním postupu
- Nezávislý recenzent
- Nezávislé na platformě
- Průhledný
- Rozšiřitelné
- Trvalý
- Strojově čitelné

---

# Recenze jako sémantická vrstva

Recenze není součástí obsahu rukopisu.

Recenze naopak tvoří samostatnou sémantickou vrstvu, která je propojena prostřednictvím kotev.

```
Document
    │
    ├── Content Layer
    ├── Annotation Layer
    └── Review Layer
```

Rukopis zůstává beze změn, zatímco informace o recenzním řízení se vyvíjejí samostatně.

---

# Objekty k revizi

Recenze se skládá ze sémantických objektů.

Mezi příklady patří:

- Recenze
- Recenzent
- Doporučení
- Komentář k recenzi
- Redakční rozhodnutí
- Odpověď autora
- Žádost o revizi

Každý objekt má svůj vlastní identifikátor a metadata.

---

# Přehled rolí

OMI rozlišuje různé role účastníků.

Příklady:

- Autor
- Recenzent
- Redaktor
- Hostující redaktor
- Šéfredaktor
- Vydavatel
- AI asistent

Prostřednictvím pluginů lze zavést další role.

---

# Přehled modelů

OMI podporuje různé pracovní postupy při revizi.

Mezi příklady patří:

- Jednostranně zaslepená studie
- Dvojitě zaslepená studie
- Trojitě zaslepená studie
- Otevřít recenzi
- Objektivní recenze
- Společné hodnocení
- Recenze po vydání

Průběh zpracování je dán spíše profilem publikace než samotným rukopisem.

---

# Komentáře k recenzi

Komentáře k recenzím jsou sémantické anotace připojené prostřednictvím kotev.

Komentář může znamenat:

- slovo
- věta
- odstavec
- číslo
- tabulka
- vzorec
- metadata
- celý rukopis

Komentáře zůstávají platné i v případě, že dojde ke změně formátování rukopisu.

---

# Metadata recenze

Každá recenze obsahuje:

- Identifikátor
- Recenzent
- Typ recenze
- Doporučení
- Časové razítko
- Verze
- Viditelnost
- Stav

---

# Doporučení k recenzím

Mezi typická doporučení patří:

- Přijmout
- Drobná úprava
- Zásadní revize
- Odeslat znovu
- Odmítnout

Profil publikace může obsahovat další doporučení.

---

# Redakční rozhodnutí

Redakční rozhodnutí jsou samostatné sémantické objekty.

Příklady:

- Odmítnutí na stole
- Odeslat ke kontrole
- Je třeba provést revizi
- Přijmout
- Odmítnout
- Zveřejnit

Každé rozhodnutí může odkazovat na jedno nebo více posouzení.

---

# Odpovědi autorů

Autoři mohou přímo reagovat na připomínky recenzentů.

```
Reviewer Comment

↓

Author Response

↓

Editorial Decision
```

Celá diskuze zůstává propojena prostřednictvím trvalých identifikátorů.

---

# Viditelnost

Objekty revize podporují různé úrovně viditelnosti.

Příklady:

- Soukromé
- Pouze pro recenzenty
- Pouze pro redaktory
- Autoři
- Veřejné

Viditelnost se může v průběhu životního cyklu rukopisu měnit.

---

# Verzování

Recenze zohledňují konkrétní verzi.

Systém uchovává:

- původní recenze
- aktualizovaná recenze
- odpovědi autora
- redakční rozhodnutí

Nic se nepřepíše.

---

# Časová osa přezkumu

Každá revizní akce se zaznamenává.

Příklad:

```
Submission

↓

Editorial Screening

↓

Reviewer Invitation

↓

Peer Review

↓

Revision

↓

Acceptance

↓

Publication
```

Časová osa se stává součástí historie rukopisu.

---

# Recenze s využitím umělé inteligence

Umělá inteligence může být recenzentům nápomocná.

Mezi příklady patří:

- jazyková analýza
- ověření metadat
- ověření citace
- kontrola konzistence
- posouzení přístupnosti
- ukazatele plagiátorství

Návrhy generované umělou inteligencí jsou jasně označeny a nikdy nenahrazují lidský úsudek.

---

# Interoperabilita

Mezi budoucí mapování patří:

- OJS Průběh revize
- JATS Recenze kolegy
- DocMaps
- COAR Notify
- Webová anotace
- Hypothes.is

---

# Rozšíření pluginů

Pluginy mohou způsobit:

- modely hodnocení specifické pro jednotlivé obory
- šablony recenzí
- bodovací systémy
- redakční postupy
- zásady publikování

aniž by došlo ke změnám v jádru OMI.

---

# Budoucí práce

Budoucí specifikace budou definovat:

- Model redakčního pracovního postupu
- Rozhodovací model
- Recenze AIAPI
- Analýza recenzí
- Reputace recenzenta

---

# Historie změn

- **0.1.0** — Přesunuto z dočasné adresy `OMI-SPEC-006` na oficiální adresu `OMI-SPEC-200`.

---

# Shrnutí

Model „OMI“ (Recenze jako první třída) považuje vzájemné recenzování za prvotřídní sémantickou složku vědecké komunikace.

Díky oddělení informací o recenzním řízení od obsahu rukopisu a jejich propojení prostřednictvím trvalých odkazů (Anchors) umožňuje služba OMI transparentní, přenositelné a na platformě nezávislé pracovní postupy při recenzním řízení vědeckých prací.
