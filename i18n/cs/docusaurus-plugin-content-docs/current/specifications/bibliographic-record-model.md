---
id: bibliographic-record-model
title: OMI-SPEC-220 — Model bibliografického záznamu
sidebar_label: Model bibliografického záznamu
sidebar_position: 13
---

# OMI-SPEC-220 — Model bibliografického záznamu

## Stav

**Návrh**

Verze: 0.1.0

**Starší identifikátor:** `OMI-SPEC-006`

---

## Účel

Model bibliografického záznamu definuje, jak knihovna „OMI“ zachycuje citované dílo nezávisle na konkrétním výskytu citace či rukopisu.

Bibliografický záznam je standardizovaný popis vědeckého nebo kulturního objektu, jako je například článek, kniha, kapitola, soubor dat, archivní pramen, softwarový balík, obrázek, mapa, právní dokument nebo webový zdroj.

Tento model umožňuje citovat jedno dílo vícekrát, aniž by se opakovala jeho metadata.

---

## Umístění v architektuře „OMI“

```text
External bibliographic sources
            ↓
Bibliographic Record
            ↓
Manuscript Reference Library
            ↓
Citation Occurrences
```

Model bibliografického záznamu popisuje druhou vrstvu. Model citací ([Citation Model](./citation-model.md)) popisuje jednotlivé výskyty citací. Model správy bibliografických záznamů ([Reference Library and Registry Architecture](./reference-library-registry.md)) popisuje, jak jsou záznamy vyhledávány, identifikovány, ukládány, znovu využívány, synchronizovány a exportovány.

---

## Základní princip

Citované dílo a výskyt citace jsou různé objekty.

- **Bibliografický záznam** popisuje dané dílo.
- **Výskyt citace** zaznamenává, kde a jak je dané dílo citováno.
- **Zobrazený citát** je prezentace vytvořená na základě obou zdrojů.

```text
Bibliographic Record
  title: Example Article
  DOI: 10.1234/example

Citation Occurrence A
  locator: p. 12

Citation Occurrence B
  locator: pp. 45–47
```

---

## Záznam identity

Každý bibliografický záznam má lokální identifikátor OMI.

```json
{
  "id": "bib_01JXYZ...",
  "type": "journal-article"
}
```

Místní identifikátor zůstává neměnný i v případě, že dojde k aktualizaci externích metadat nebo k objevu dalších identifikátorů.

Záznam může obsahovat více externích identifikátorů:

- DOI
- ISBN
- ISSN
- PMID
- PMCID
- identifikátor arXiv
- Rukojeť
- ARK
- URN
- URL
- identifikátor úložiště
- identifikátor katalogu
- archivní referenční kód

Externí identifikátory slouží jako důkaz identity, nikoli jako náhrada za lokální identifikátor OMI.

---

## Práce, vyjádření a projev

Model v případě potřeby rozlišuje mezi jednotlivými úrovněmi:

- **Práce**: abstraktní intelektuální či tvůrčí činnost.
- **Výraz**: jazyk, verze, revize, překlad nebo vydání.
- **Projev**: konkrétní zveřejněná nebo distribuovaná podoba.
- **Položka**: konkrétní fyzický nebo digitální exemplář, pokud je vyžadován popis na úrovni položky.

Jednoduché záznamy mohou obsahovat pouze jednu úroveň. Složité záznamy mohou vyjadřovat vztahy mezi jednotlivými úrovněmi.

Příklady:

- původní článek a jeho překlad;
- předběžná verze a konečná verze;
- několik vydání jedné knihy;
- rukopis a jeho digitalizovaná kopie;
- datový soubor a konkrétní verze.

---

## Podporované typy zdrojů

Mezi základní slovní zásobu patří:

- článek v odborném časopise
- kniha
- kapitola knihy
- konferenční příspěvek
- diplomová práce
- disertační práce
- zpráva
- předběžný výtisk
- datový soubor
- software
- standardní
- soudní případ
- právní předpisy
- smlouva
- archivní zdroj
- rukopis
- charta
- mapa
- obrázek
- audio
- video
- webová stránka
- záznam v repozitáři
- katalogový záznam

Profily a pluginy mohou zavádět typy specifické pro danou doménu, aniž by docházelo ke změnám v základním modelu.

---

## Základní metadata

Bibliografický záznam může obsahovat:

- název
- podtitul
- přeložený název
- zkrácený název
- typ zdroje
- tvůrci a přispěvatelé
- název kontejneru
- vydání
- objem
- problém
- série
- vydavatel
- místo vydání
- datum vydání
- datum přístupu
- stránkování nebo rozsah
- jazyk
- abstrakt
- klíčová slova
- identifikátory
- URL adresy
- informace o právech
- informace o verzi
- původ
- metadata specifická pro zdroj

Pole mohou být strukturovaná, vícejazyčná a v případě potřeby opakovatelná.

---

## Autoři

Přispěvatelé jsou znázorněni jako strukturovaní agenti, nikoli jako řetězce pro zobrazení.

```json
{
  "role": "author",
  "agent": {
    "type": "person",
    "familyName": "Example",
    "givenName": "Ada",
    "orcid": "0000-0000-0000-0000"
  }
}
```

Mezi podporované typy agentů patří:

- osoba
- organizace
- projekt
- konsorcium
- neznámý nebo historický činitel

Mezi podporované role patří:

- autor
- redaktor
- překladatel
- kompilátor
- ilustrátor
- fotograf
- ředitel
- přispěvatel
- vydávající orgán

Slovní zásoba rolí je rozšiřitelná.

---

## Vícejazyčná metadata

Názvy, podtituly, abstrakty, poznámky a jména vybraných přispěvatelů mohou být v různých jazycích.

```json
{
  "title": {
    "und": "Original title",
    "en": "English title",
    "hu": "Magyar cím"
  }
}
```

Záznam by měl zachovat metadata v původním jazyce a odlišit je od přeložených nebo normalizovaných hodnot.

---

## Kontejnery a hierarchie

Bibliografické zdroje mohou být součástí kontejnerů.

Příklady:

- článek → číslo časopisu → časopis
- kapitola → sborník → edice
- archivní položka → spis → fond → archiv
- zveřejnění datového souboru → datový soubor → výzkumný projekt

Vztahy mezi kontejnery jsou modelovány explicitně, nikoli zploštěny do jediného formátovaného řetězce.

---

## Původ

Každá importovaná nebo deklarovaná hodnota metadat může obsahovat informace o původu.

```json
{
  "value": "Example title",
  "source": "crossref",
  "retrievedAt": "2026-08-06T12:00:00Z",
  "confidence": "authoritative"
}
```

Mezi zdroje původu mohou patřit:

- zdrojový systém
- identifikátor zdrojového záznamu
- datum získání
- import uživatele nebo služby
- metoda ověření
- úroveň spolehlivosti
- historie změn

OMI nesmí bez upozornění přepsat metadata opravená uživatelem daty z externích zdrojů nižší kvality.

---

## Stav záznamu

Záznam může mít jeden z následujících stavů:

- nevyřešené
- prozatímní
- vyřešeno
- ověřeno
- rozpolcený
- zastaralé

Prozatímní záznam lze vytvořit na základě neúplných údajů zadaných uživatelem a později jej doplnit.

---

## Deduplikace a ekvivalence

Dva záznamy mohou představovat stejné dílo, i když se jejich metadata liší.

Při deduplikaci lze použít:

- přesné trvalé identifikátory;
- normalizované přiřazování názvů a autorů;
- porovnání kontejneru, data, objemu, čísla a stránky;
- identifikátory repozitářů nebo katalogů;
- potvrzení uživatelem.

Systém musí rozlišovat mezi:

- přesná ekvivalence;
- pravděpodobná ekvivalence;
- vztah mezi verzemi;
- překladový vztah;
- vztah mezi stažením a opravou;
- nesouvisející záznamy s podobnými metadaty.

Při slučování záznamů je třeba zachovat původ a auditní stopu.

---

## Dostupnost a přístup

Záznam může popisovat jedno nebo více míst přístupu:

```json
{
  "access": [
    {
      "url": "https://example.org/article",
      "format": "html",
      "accessType": "open"
    },
    {
      "url": "https://example.org/article.pdf",
      "format": "pdf",
      "accessType": "open"
    }
  ]
}
```

Metadata přístupu mohou identifikovat:

- vstupní stránka
- celý text
- stránka s abstraktem
- kopie v úložišti
- vydavatelská kopie
- digitalizovaná náhrada
- strojově čitelná podoba

OMI uvádí dostupnost záznamů, ale nevychází z toho, že odkaz uděluje povolení k dalšímu šíření či vložení daného zdroje.

---

## Opravy, stažení a verze

Bibliografické záznamy mohou vyjadřovat vztahy, jako například:

- isVersionOf
- hasVersion
- isTranslationOf
- hasTranslation
- opravuje
- isCorrectedBy
- stahuje
- isRetractedBy
- doplňky stravy
- isSupplementedBy

Díky těmto vztahům může rukopis odkazovat na konkrétní vědecký objekt, nikoli na nejednoznačný textový řetězec.

---

## Sériová výroba a interoperabilita

Model by měl mapovat na nebo z:

- CSL JSON
- BibTeX a BibLaTeX
- RIS
- Metadata Crossref
- Metadata DataCite
- JATS XML
- MODS
- Dublin Core
- schema.org
- Překladatelé Zotero
- formáty knihovních katalogů

Mapování může být se ztrátou. OMI musí v rámci možností zachovat nemapovaná zdrojová data.

---

## Ověření

Ověření může zkontrolovat:

- povinná pole podle typu zdroje;
- syntaxe identifikátorů a kontrolní součty;
- konzistence dat;
- struktura přispěvatelů;
- vztahy mezi kontejnery;
- duplicitní identifikátory;
- nemožné kombinace stránek, svazků nebo čísel;
- nevyřešené konflikty;
- nefunkční nebo přesměrované URL adresy.

Úroveň závažnosti validace může být informační, varovná nebo chybová.

---

## Minimální příklad

```json
{
  "id": "bib_01JXYZ",
  "type": "journal-article",
  "title": {
    "en": "A Structured Scholarly Article"
  },
  "contributors": [
    {
      "role": "author",
      "agent": {
        "type": "person",
        "familyName": "Example",
        "givenName": "Ada"
      }
    }
  ],
  "container": {
    "title": "Journal of Open Manuscripts"
  },
  "issued": "2026",
  "identifiers": [
    {
      "scheme": "doi",
      "value": "10.1234/example"
    }
  ],
  "status": "resolved"
}
```

---

## Historie změn

- **0.1.0** — Přesunuto z dočasné adresy `OMI-SPEC-006` na definitivní adresu `OMI-SPEC-220`.

---

## Shrnutí

Model bibliografického záznamu poskytuje službě OMI stabilní, normalizovanou a na původ odkazujících prací založenou reprezentaci citovaných děl.

Zabraňuje duplicitě metadat, podporuje vícejazyčné a oborově specifické popisy, zachovává odkazy na externí autoritativní zdroje a poskytuje společný cíl, který využívají referenční knihovny rukopisů i citace.
