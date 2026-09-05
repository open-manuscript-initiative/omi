---
id: citation-model
title: OMI-SPEC-210 — Model citace
sidebar_label: Šablona citace
sidebar_position: 14
---

# OMI-SPEC-210 — Model citace

## Stav

**Návrh**

Verze: 0.2.0

**Starší identifikátor:** `OMI-SPEC-005`

---

## Účel

Model citací definuje, jakým způsobem rukopis v systému OMI zaznamenává jednotlivý akt citace vědeckého či kulturního objektu.

Citace není uložena jako formátovaný text. Jedná se o sémantický objekt, který propojuje konkrétní místo v rukopisu se strukturovaným bibliografickým záznamem.

Toto oddělení umožňuje konzistentní zobrazení, přesné lokátory, strojové zpracování, ověřování, správu verzí a interoperabilitu.

---

## Místo v referenční architektuře

```text
External bibliographic sources
            ↓
Bibliographic Record
            ↓
Manuscript Reference Library
            ↓
Citation Occurrence
            ↓
Rendered citation and bibliography
```

Dokument „[Bibliographic Record Model](./bibliographic-record-model.md)“ popisuje citovanou práci. Dokument „[Reference Library and Registry Architecture](./reference-library-registry.md)“ popisuje vyhledávání, porovnávání, ukládání, opětovné použití a export. Tato specifikace popisuje jednotlivé výskyty citací v rámci rukopisu.

---

## Zásadní rozdíl

Bibliografický záznam a výskyt citace jsou různé objekty.

```text
Bibliographic Record
  Example Book

Citation A
  page 12

Citation B
  pages 45–47
```

Dílo je popsáno jednou. Každý výskyt doplňuje kontext specifický pro daný rukopis, jako jsou lokátor, předpona, přípona, záměr a kotva.

---

## Zásady návrhu

Vzor pro citaci je:

- nejprve sémantika;
- nezávislé na zobrazení;
- vázané na konkrétní místo v rukopise;
- opětovně použitelné;
- strojově čitelné;
- nezávislý styl;
- s možností verzování;
- rozšiřitelné.

---

## Objekt citace

Jedna citace může obsahovat:

- lokální identifikátor;
- identifikátor bibliografického cíle;
- odkaz na rukopis;
- lokátor nebo rozsah lokátoru;
- předpona;
- přípona;
- režim citace;
- záměr citace nebo vztah;
- poznámka;
- metadata verze.

Příklad:

```json
{
  "id": "cit_01JXYZ",
  "target": "bib_01JABC",
  "anchor": "anchor_01JDEF",
  "locator": {
    "type": "page-range",
    "value": "45–47"
  },
  "prefix": "see also",
  "suffix": null
}
```

---

## Kotvení

Každý výskyt citace by měl být spojen s odkazem typu „OMI“.

Kotva může označovat:

- místo vložení;
- rozsah textu;
- blok;
- poznámka;
- buňka tabulky;
- popisek k obrázku;
- další identifikovatelný vědecký objekt.

Díky ukotvení vydrží citace úpravy, revize, srovnání a transformace spolehlivěji než pouhé posuny znaků.

---

## Bibliografický cíl

Cílem je obvykle záznam v referenční knihovně rukopisu.

Citace nesmí obsahovat úplná bibliografická metadata, pokud to není nezbytné pro výměnu nebo uchovávání. Autoritativní vztah je vyjádřen identifikátorem záznamu.

Cíl může představovat:

- článek v odborném časopise;
- kniha;
- kapitola;
- konferenční příspěvek;
- bakalářská nebo diplomová práce;
- datový soubor;
- software;
- předtisk;
- standard;
- webový zdroj;
- archivní zdroj;
- rukopis;
- charta;
- obrázek;
- mapa;
- audio nebo video;
- právní předpisy nebo judikatura;
- další typ rozšiřitelného zdroje.

---

## Lokátory

Lokátor identifikuje citovanou část cíle.

Mezi podporované typy lokátorů mohou patřit:

- stránka;
- rozsah stránek;
- kapitola;
- oddíl;
- odstavec;
- obrázek;
- tabulka;
- příloha;
- řádek;
- folio;
- časové razítko;
- verš;
- článek nebo ustanovení;
- archivní jednotka.

Lokátory by měly být uloženy ve strukturované podobě, nikoli jako kompletní naformátovaná fráze.

```json
{
  "type": "folio",
  "from": "12r",
  "to": "13v"
}
```

Profil publikace určuje, zda se jedná o `fols. 12r–13v`, jinou lokalizovanou verzi, nebo o strukturovanou verzi XML.

---

## Způsoby citování

Výskyt citace může vyjadřovat určitý způsob, například:

- v závorce;
- vyprávění;
- poznámka k citaci;
- pouze bibliografie;
- poznámka ke zdroji;
- odkaz;
- skrytý strojově čitelný odkaz.

Podporované režimy závisí na oboru a profilu publikace.

---

## Předpony a přípony

Předpony a přípony obsahují text specifický pro daný citát, který není součástí bibliografického záznamu.

Příklady:

- `see`;
- `compare`;
- `quoted in`;
- `emphasis added`;
- `translation by the author`.

Aplikace by měly tyto hodnoty oddělit od lokátoru a zobrazeného citátu.

---

## Účel citací a akademické vztahy

Citace může případně uvádět důvod, proč je daný zdroj citován.

Mezi příklady patří:

- podpory;
- vyvrací;
- rozšiřuje;
- se zabývá;
- porovnává;
- reprodukuje;
- překládá;
- kritiky;
- poskytuje údaje;
- poskytuje metodu;
- recenze;
- opravuje.

Slovníky záměrů musí zůstat rozšiřitelné a neměly by být povinné, pokud je autor nebo daný obor nepoužívá.

---

## Seskupené citace

Jednu skupinu citací může tvořit několik výskytů citace.

```text
(Smith 2022; Jones 2024, 18–20; Example 2026)
```

Skupina řídí pořadí, oddělovače a sdílené afixy, přičemž každý člen si zachovává svůj vlastní cíl a lokátor.

---

## Opakované citace

Opakované odkazy musí směřovat na stejný bibliografický záznam, nikoli jej duplikovat.

Profil publikací může zobrazovat opakované citace pomocí:

- úplný odkaz;
- zkrácený název;
- formát „autor-datum“;
- `ibid.` nebo obdobné konvence;
- číselný odkaz;
- hypertextový odkaz.

Jedná se o rozhodnutí týkající se zobrazení, nikoli o změny v citovaném objektu.

---

## Styly citací

Styly citací jsou profily formátování.

Mezi příklady patří:

- APA;
- Chicago;
- MLA;
- Harvard;
- IEEE;
- Vancouver;
- OSCOLA;
- Turabian;
- styly specifické pro daný časopis.

Změna stylu nesmí mít vliv na základní bibliografický záznam ani na výskyt citace.

---

## Profily oborů

Profily mohou zavádět specializované lokátory, typy zdrojů a pravidla vykreslování.

Součástí historických dokumentů mohou být archivní signatury, folia, listiny a rejstříky.

Právo může zahrnovat soudní případy, zákony, smlouvy, články, oddíly a ustanovení.

V oblasti medicíny mohou patřit registrace klinických studií, klinické pokyny a verze datových sad.

Informatika může zahrnovat repozitáře, verze softwaru, balíčky, revize a dokumentaci typu „API“.

---

## Renderování

Jeden výskyt citace může být v závislosti na výstupním formátu zobrazen odlišně.

```text
OMI citation object
├── HTML inline citation
├── PDF footnote
├── EPUB hyperlink
├── JATS <xref> and <ref>
├── CSL processor input
└── Crossref or DataCite metadata
```

Zobrazení závisí na profilu publikace, jazyku, stylu citací a výstupním formátu.

---

## Ověření

Ověření může zkontrolovat:

- cílový záznam existuje;
- kotva existuje;
- typ lokátoru je pro cíl nebo profil platný;
- rozsah lokátoru je správně zadaný;
- jsou vyplněna povinná pole pro citaci;
- pořadí skupin v citacích je správné;
- opakující se výskyty jsou záměrné;
- cílový záznam není vyřešen, je v konfliktu, byl opraven nebo stažen;
- Styl citace dokáže zobrazit dostupná metadata.

Úroveň závažnosti validace může být informační, varovná nebo chybová.

---

## Interoperabilita

Výskyt citací a jejich cíle by měly být přiřazeny k následujícím položkám:

- CSL JSON;
- BibTeX a BibLaTeX;
- RIS;
- JATS XML;
- Metadata Crossref;
- Metadata DataCite;
- Formáty kompatibilní se Zotero;
- Formáty EndNote;
- formáty pro sdílení dat z repozitářů a knihoven.

OMI by měly zachovat informace specifické pro citace, které nelze v cílovém formátu vyjádřit.

---

## Verzování

Výskyt citací se podílí na správě verzí rukopisu.

Mezi sledované změny mohou patřit:

- vložená nebo odstraněná citace;
- změna cíle;
- změněný lokátor;
- změněná předpona nebo přípona;
- změna záměru;
- změněna kotva;
- změny ve složení skupiny citací.

Změny v bibliografických záznamech se sledují odděleně od změn v výskytu citací.

---

## Rozšíření pluginů

Pluginy a profily mohou způsobit:

- způsoby citování;
- typy lokátorů;
- slovní zásoba týkající se záměrů;
- validační pravidla;
- pravidla vykreslování;
- vztahy specifické pro danou doménu.

Rozšíření nesmí vyžadovat úpravy jádra systému OMI.

---

## Budoucí práce

Budoucí specifikace mohou definovat:

- výměna grafů citací;
- propojené otevřené slovníky citací;
- přesné souvislosti mezi tvrzeními a zdrojovými pasážemi;
- analýza kontextu citací;
- ověřitelný původ citace;
- společné ověřování citací.

---

## Historie změn

- **0.2.0** — Přesunuto z dočasné adresy `OMI-SPEC-005` na definitivní adresu `OMI-SPEC-210`.

---

## Shrnutí

Model citací představuje každý citát jako strukturovaný, ukotvený objekt nezávislý na způsobu zobrazení.

Díky oddělení výskytů citací od bibliografických záznamů a jejich zpracování umožňuje služba OMI autorům přidat dílo pouze jednou, citovat jej mnohokrát s přesnými odkazy a publikovat stejný rukopis v různých vědeckých stylech a formátech.
