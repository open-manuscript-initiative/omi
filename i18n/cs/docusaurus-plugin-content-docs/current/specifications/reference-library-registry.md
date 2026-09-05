---
id: reference-library-registry
title: OMI-SPEC-221 — Architektura referenční knihovny a registru
sidebar_label: Referenční knihovna a registr
sidebar_position: 15
---

# OMI-SPEC-221 — Architektura referenční knihovny a registru

## Stav

**Návrh**

Verze: 0.1.0

**Starší identifikátor:** `OMI-SPEC-007`

---

## Účel

Tato specifikace definuje, jak aplikace typu „OMI“ vyhledávají, identifikují, shromažďují, znovu využívají, synchronizují a exportují bibliografické záznamy k rukopisu.

Architektura je navržena tak, aby umožňovala jednoduchý pracovní postup autora:

1. citované dílo uveďte jednou;
2. používat jej v celém rukopisu;
3. uveďte odkaz s přesnými odkazy;
4. aktualizovat metadata, aniž by bylo nutné přepisovat každou citaci;
5. exportovat rukopis a bibliografii do různých publikačních systémů.

---

## Architektonické vrstvy

```text
External bibliographic services and catalogues
                    ↓
          Resolution and reconciliation
                    ↓
       Manuscript Reference Library
                    ↓
           Citation Occurrences
                    ↓
       Rendering and publication exports
```

Vrstvy jsou záměrně odděleny.

- Externí služby pomáhají vyhledávat a obohacovat záznamy.
- V referenční knihovně jsou uloženy vybrané záznamy z rukopisu.
- Výskyt citací odkazuje na záznamy v knihovně.
- Renderery generují poznámky pod čarou, citace ve formátu „autor-datum“, bibliografie, odkazy a strukturované výstupy.

---

## Referenční knihovna rukopisů

Každý rukopis může obsahovat nebo odkazovat na speciální knihovnu děl, z nichž tento rukopis čerpá.

Knihovna není pouhým seznamem literatury v určitém formátu. Jedná se o sbírku strukturovaných [Bibliographic Records](./bibliographic-record-model.md).

```json
{
  "referenceLibrary": {
    "records": [
      "bib_01JXYZ",
      "bib_01JXYA"
    ]
  }
}
```

Záznam může v knihovně existovat již předtím, než je citován. To usnadňuje sestavování předběžných seznamů literatury, shromažďování zdrojů, redakční ověřování a následné zařazování.

---

## Přidejte jednou, citujte mnohokrát

Když autor přidá dílo, služba OMI vytvoří jeden bibliografický záznam nebo použije již existující.

Každý výskyt citace odkazuje na tento záznam:

```text
Reference Library
└── bib_01: Example Book
    ├── Citation 1: p. 12
    ├── Citation 2: pp. 55–57
    └── Citation 3: chapter 4
```

Tím se zabrání opakovanému zadávání metadat a zajistí se jednotné zobrazení.

---

## Vyhledávání a import

Aplikace mohou podporovat několik způsobů zadávání:

- DOI vyhledání;
- Vyhledávání podle ISBN;
- Import URL;
- vyhledávání podle názvu nebo autora;
- vyhledání identifikátoru repozitáře;
- vyhledávání v katalogu knihovny;
- vložit formátovaný odkaz;
- importovat soubory ve formátech CSL JSON, BibTeX, BibLaTeX, RIS, EndNote XML nebo v jiných podporovaných formátech;
- ruční zadání;
- výběr z jiného rukopisu OMI nebo z uživatelské knihovny.

Importovaná data musí být normalizována do modelu bibliografického záznamu při zachování původního zdroje.

---

## Externí zdroje

Implementace rozhraní OMI může odesílat dotazy na veřejné nebo autorizované služby, jako jsou:

- Crossref
- DataCite
- OpenAlex
- PubMed
- Europe PMC
- ORCID
- ROR
- knihovní katalogy
- institucionální repozitáře
- oborové repozitáře
- národní bibliografie
- archivní katalogy

Tato architektura nevyžaduje jednoho centrálního poskytovatele.

OMI definuje rozhraní a požadavky na data tak, aby implementace mohly kombinovat několik poskytovatelů a zůstaly funkční i v případě, že jeden z poskytovatelů není k dispozici.

---

## Žádný centrální bibliografický monopol

OMI neměla by být zřízena povinná centrální databáze, na kterou by se musel obrátit každý rukopis.

Platný rukopis v formátu „OMI“ musí zůstat použitelný, pokud:

- původní vyhledávací služba je mimo provoz;
- autor přechází na jinou implementaci OMI;
- vydavatel zpracovává rukopis v offline prostředí;
- dojde ke změně nebo zmizí externí záznam.

Rukopis nebo jeho balíček proto musí obsahovat bibliografické údaje nezbytné k interpretaci a zobrazení citací v něm obsažených.

Externí služby představují zdroje pro vyhledávání a obohacování dat, nikoli jediné autoritativní zdroje ani zdroje dostupnosti.

---

## Pracovní postup při řešení problémů

Typický postup řešení je následující:

```text
User input
   ↓
Identifier normalization
   ↓
Provider lookup
   ↓
Candidate records
   ↓
Reconciliation and deduplication
   ↓
User or automated selection
   ↓
Local bibliographic record
```

Resolver by měl vrátit:

- záznamy o uchazečích;
- odpovídající identifikátory;
- doba získání a vyhledání;
- sebevědomí;
- konflikty;
- místa přístupu;
- upozornění na stažení, opravy nebo nejistou identitu, jsou-li k dispozici.

---

## Smíření

Různí poskytovatelé mohou pro stejné dílo vracet odlišná metadata.

Při odsouhlasení je třeba zohlednit:

- trvalé identifikátory;
- normalizovaný název;
- jména a identifikátory přispěvatelů;
- rok vydání;
- název kontejneru;
- svazek, číslo a stránky;
- vydání a verze;
- jazyk;
- zdroj a aktuálnost.

Systém by neměl bez upozornění zvolit hodnotu, která je v rozporu s jinou, pokud by tento rozpor mohl ovlivnit vědecký význam.

Mezi možné výsledky patří:

- přesná shoda;
- pravděpodobná shoda;
- samostatná verze;
- vztah mezi překladem a vydáním;
- nevyřešený konflikt;
- samostatný záznam.

---

## Místní a sdílené knihovny

Implementace mohou podporovat několik oblastí platnosti:

- knihovna rukopisů;
- pracovní prostor nebo knihovna projektů;
- osobní knihovna;
- instituční knihovna;
- veřejná sdílená kolekce.

Rukopis musí uvádět, které záznamy jsou součástí jeho autoritativního balíčku, a to i v případě, že tyto záznamy pocházejí ze sdílené knihovny.

Aktualizace sdíleného záznamu by neměly automaticky měnit odeslaný nebo publikovaný rukopis, pokud nebylo výslovně rozhodnuto o změně verze.

---

## Vložení citace

Editor by měl autorům umožňovat prohledávat knihovnu rukopisů a vkládat citace, aniž by museli znovu zadávat bibliografická metadata.

Při vkládání citací se mohou shromažďovat:

- typ a hodnota lokátoru;
- předpona;
- přípona;
- režim citace;
- vynechání jména autora nebo data, je-li to možné;
- záměr citace nebo vztah;
- poznámka nebo komentář.

Vložený objekt se řídí zásadami „[Citation Model](./citation-model.md)“.

---

## Online přístup a náhled

Pokud bibliografický záznam obsahuje odkaz na online zdroj, aplikace může nabídnout:

- otevřít úvodní stránku;
- otevřít celý text;
- zobrazit abstrakt nebo náhled metadat;
- zobrazit dostupnost repozitáře;
- zobrazit licenci a podmínky přístupu;
- vkládat obsah, pokud to technické a právní podmínky umožňují.

OMI je třeba rozlišovat mezi:

- dostupnost metadat;
- veřejný přístup k tomuto zdroji;
- povolení k vložení;
- povolení k dalšímu šíření.

Samotná URL adresa nezakládá práva k dalšímu šíření.

---

## Seznamy zdrojů a doporučená literatura

Záznam v knihovně může mít stav specifický pro daný rukopis:

- citováno;
- bez uvedení zdroje;
- doporučená literatura;
- vyřazeno z konečného seznamu literatury;
- redakčně ověřeno;
- vyžaduje ověření.

Profily publikací určují, které státy se zobrazí ve vygenerovaném seznamu literatury.

To je užitečné pro obory, v nichž se seznamy zdrojů, archivní soupisy, seznamy primárních zdrojů nebo sekce s doporučenou literaturou liší od běžných referenčních údajů.

---

## Prevence duplicit

Před přidáním nového záznamu by implementace měla zkontrolovat knihovnu rukopisů a příslušné sdílené knihovny.

U pravděpodobného duplikátu by měl být uveden stávající záznam a vysvětleno, na základě čeho se shodují.

Uživatel může:

- použít stávající záznam;
- sloučit záznamy;
- uchovávejte různé verze;
- odmítnout navrhované spojení.

Při sloučení je třeba zachovat identifikátory, původ, místní opravy a předchozí odkazy na citace.

---

## Provoz v režimu offline

Základní správa odkazů musí fungovat i bez trvalého připojení k síti.

Implementace podporující práci v režimu offline by měly umožňovat:

- ruční vytváření záznamů;
- vložení citace z uložených záznamů;
- zobrazení bibliografie;
- vyřízení a ověření v pořadí;
- následná synchronizace s externími zdroji.

Vylepšení závislá na síti nesmí způsobit, že by rukopis byl nečitelný nebo necitovatelný.

---

## Synchronizace a řízení změn

Externí metadata se po importu mohou změnit. Implementace standardu „OMI“ mohou nabízet operace aktualizace, avšak tyto aktualizace musí být podléhat kontrole.

Srovnání aktualizací by mělo rozlišovat:

- nově dostupná pole;
- rozdíly týkající se pouze formátování;
- opravená metadata;
- nesouhlasná metadata;
- změny verze nebo stavu;
- odstraněná nebo přesměrovaná přístupová místa.

Přijaté aktualizace vytvoří novou revizi záznamu. Zveřejněné verze rukopisu si zachovávají bibliografický stav použitý pro danou publikaci.

---

## Ověření

Při ověření referenční knihovny se může zobrazit následující hlášení:

- nevyřešené záznamy;
- duplicitní záznamy;
- chybí povinná metadata;
- nesprávně zadané identifikátory;
- nefunkční nebo přesměrované odkazy;
- citované záznamy, které v knihovně nejsou;
- nepoužité záznamy;
- stáhnuté nebo opravené cíle;
- nesoulad v datech, objemech, číslech vydání nebo stránkování;
- nepodporované typy zdrojů;
- konflikty metadat mezi zdroji.

Validační pravidla lze konfigurovat podle profilů publikací a oborů.

---

## Import a export

Knihovna by měla podporovat interoperabilní výměnu dat prostřednictvím formátů, jako jsou:

- CSL JSON
- BibTeX
- Číslo startovního listuLaTeX
- RIS
- JATS XML
- Crossref XML
- DataCite XML nebo JSON
- MODS
- Dublin Core
- Formáty kompatibilní se Zotero

Exporty by měly zachovat stabilní identifikátory OMI, pokud cílový formát umožňuje rozšíření.

Kompletní balíček „OMI“ by měl obsahovat dostatek bibliografických metadat, aby bylo možné citace zobrazit a ověřit bez nutnosti dotazování externích služeb.

---

## API Povinnosti

Referenční služba API může poskytovat následující operace:

```text
search(query, providers)
resolve(identifier)
import(record, source)
reconcile(candidates)
addToLibrary(recordId, manuscriptId)
mergeRecords(sourceIds, targetId)
refresh(recordId)
validateLibrary(manuscriptId)
exportLibrary(manuscriptId, format)
```

Specifikace definuje chování a datové smlouvy, nikoli konkrétní požadovaný síťový protokol nebo jazyk implementace.

---

## Ochrana osobních údajů a bezpečnost

Při implementaci je třeba vzít v úvahu, že referenční sbírky mohou odhalit výzkumné zájmy, nezveřejněné projekty, spolupracovníky a citlivé zdroje.

Mezi požadavky patří:

- výslovná kontrola nad sdílením;
- přístup k knihovnám pracovního prostoru na základě principu minimálních oprávnění;
- není povinné zveřejňovat záznamy, u nichž nejsou uvedeny zdroje;
- jasné požadavky poskytovatelů a informace o ochraně osobních údajů;
- ochrana před škodlivými importovanými metadaty;
- bezpečné zpracování vzdálených URL adres a vložených náhledů.

---

## Příklad pracovního postupu

1. Autor se přihlásí na stránku DOI.
2. Resolver provádí dotazy na nakonfigurované poskytovatele.
3. Metadata kandidátů jsou sjednocena.
4. Vybrané dílo je uloženo v knihovně rukopisů pod názvem „`bib_01JXYZ`“.
5. Autor uvádí odkazy na strany 12 a 45–47.
6. Redaktor záznam ověří.
7. Profil publikace obsahuje poznámky pod čarou a bibliografii.
8. Schválený rukopis exportuje strukturované odkazy do JATS, XML a metadat Crossref.

---

## Budoucí práce

Budoucí specifikace mohou definovat:

- federované veřejné bibliografické registry;
- podepsaná nebo ověřitelná tvrzení o metadatech;
- výměna grafů citací;
- slovníky citací a záměrů;
- služby kontroly autorit;
- společná správa hudebních sbírek;
- hodnocení původu;
- souvislosti mezi citovanými tvrzeními a přesnými pasážemi ze zdrojů.

---

## Historie změn

- **0.1.0** — Přesunuto z dočasné adresy `OMI-SPEC-007` na oficiální adresu `OMI-SPEC-221`.

---

## Shrnutí

Architektura referenční knihovny a registru umožňuje autorům přidat dílo pouze jednou a poté jej v celém rukopise jednotně citovat.

Spojuje vyhledávání externích zdrojů s přenosnou knihovnou na úrovni rukopisů, eliminuje závislost na jediném poskytovateli, podporuje pracovní postupy v režimu online i offline, zachovává provenienci a umožňuje spolehlivý export do systémů pro vědecké publikování.
