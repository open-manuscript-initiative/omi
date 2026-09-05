---
id: file-format
title: OMI-SPEC-320 — Formát souboru
sidebar_label: Formát souboru
description: Pravidla pro normativní logickou reprezentaci JSON, analýzu, serializaci, ověřování, rozšiřování, výměnu historie a migraci přenositelných rukopisů OMI.
keywords:
  - Open Manuscript Initiative
  - OMI
  - manuscript file format
  - JSON Schema
  - interoperability
  - preservation
---

# OMI-SPEC-320 — Formát souboru

## Metadata dokumentu

| Pole | Hodnota |
|---|---|
| Identifikátor | `OMI-SPEC-320` |
| Název | Formát souboru |
| Verze | `0.2.0` |
| Stav | Návrh |
| Typ dokumentu | Normativní |
| Normativní jazyk | Angličtina |
| Redaktoři | Správci OMI |
| Poslední aktualizace | 5. září 2026 |
| Starší identifikátor | `OMI-SPEC-011` |
| Nahrazuje | `OMI-SPEC-320@0.1.0` |
| Nahrazeno | Žádné |
| Závisí na | `OMI-SPEC-100`, `OMI-SPEC-120`, `OMI-SPEC-140`, `OMI-SPEC-160`, `OMI-SPEC-180` |
| Používá | `OMI-SPEC-230`, `OMI-SPEC-330`, `OMI-SPEC-340`, `OMI-SPEC-350` |
| Schéma | [XQZTOKEN0END](/schemas/omi-manuscript-0.2.schema.json) |
| Typ média | `application/vnd.openmanuscript+json` (prozatímní) |
| Přípona souboru | `.omi.json` |
| Profily | Snímek jádra; Výměna historie; Bezztrátový okruh |
| Stav implementace | [OMI Implementation Status Matrix](../governance/implementation-status-matrix.md) |
| Systém sledování problémů | Problémy v repozitáři Open Manuscript Initiative |

## 1. Abstrakt

Tato specifikace definuje přenositelnou logickou reprezentaci rukopisu v rámci služby „Open Manuscript Initiative“. Specifikuje dokument ve formátu UTF-8 JSON, identifikační obálku s verzí, povinná pole rukopisu, uspořádané sémantické sbírky, odkazy, rozšiřující data, volitelnou výměnu historie, chování při parsování a serializaci, vrstvenou validaci, diagnostiku, zachování neznámých polí a migrační záznamy.

Tento formát představuje stav dokumentu z hlediska vědecké obsahu, nikoli rozvržení stránky nebo stav v době zpracování editorem. Konkrétní implementace může stejný rukopis ukládat do databáze, protokolu událostí, více souborů nebo v jiné interní formě, avšak exportovaný rukopis ve formátu OMI, který odpovídá této specifikaci, má stejnou pozorovatelnou sémantiku JSON.

Tato specifikace záměrně nedefinuje fyzický archiv typu „`.omi`“, strukturu položek v archivu ZIP, kontrolní součty, kompresi ani pravidla pro cesty k balíčkům. Tyto otázky spadají do specifikace „[OMI-SPEC-330 — Container Architecture](./container-architecture.md)“. Kontejner může obsahovat dokument vyhovující této specifikaci jako jednu ze svých částí.

## 2. Status tohoto dokumentu

Tento dokument je **návrhem** specifikace standardu „Open Manuscript Initiative“.

Verze `0.2.0` je prvním kompletním návrhem formátu souboru, který obsahuje zveřejněné schéma JSON, testovací sady pro ověření shody, explicitní pravidla zpracování a stabilní identifikátory požadavků. Nahrazuje neúplný návrh `0.1.0`, který kombinoval aspekty logického formátu a fyzického kontejneru, aniž by definoval interoperabilní chování při parsování nebo validaci.

Názvy vlastností, profily, omezení schématu a pravidla migrace se mohou před vydáním verze 1.0 ještě změnit tak, že budou nekompatibilní. Prohlášení o shodě MUSÍ uvádět přesně tuto verzi specifikace nebo neměnnou revizi repozitáře.

Zveřejněné schéma je normativní z hlediska strukturálních omezení. Požadavky formulované v textu upravují sémantiku, zpracování, bezpečnost, uchovávání a chování při obousměrném přenosu, což schéma JSON vyjádřit nedokáže. V případě rozporu mezi schématem a tímto dokumentem se jedná o vadu specifikace a implementace by ji MĚLY nahlásit; dokud nebude opraven, platí požadavek formulovaný v textu s konkrétnějším identifikátorem požadavku.

## 3. Shoda

### 3.1 Normativní pojmy

Klíčová slova **MUSÍ**, **NESMÍ**, **POVINNÉ**, **MĚLO BY**, **NEMĚLO BY**, **MŮŽE** a **VOLITELNÉ** se mají vykládat tak, jak je popsáno v BCP 14, a to pouze v případě, že jsou uvedena velkými písmeny.

Každý normativní požadavek v tomto dokumentu má stabilní identifikátor ve tvaru `REQ-FMT-NNN`. Zpráva o testování, problém, výjimka nebo prohlášení o implementaci BY MĚLY uvádět příslušné identifikátory.

### 3.2 Třídy shody

Tato specifikace definuje pět implementačních tříd:

- **Producent, který splňuje požadavky:** vytváří nebo exportuje dokument rukopisu ve formátu OMI.
- **Kompatibilní aplikace pro spotřebitele:** analyzuje, importuje, zobrazuje, indexuje nebo transformuje dokument ve formátu „OMI“.
- **Validátor shody:** provádí vyhodnocení dokumentu a vrací strukturovanou diagnostiku.
- **Konverzní nástroj:** převádí dokument z jedné deklarované verze formátu do jiné.
- **Procesor podporující bezztrátový formát:** čte a zapisuje dokument tak, že zachovává všechny podporované i nepodporované datové položky, které záměrně nemění.

Implementace MŮŽE deklarovat více než jednu třídu. Implementace splňující požadavky MUSÍ splňovat všechny požadavky platné pro třídy a profily, které deklaruje.

### 3.3 Profily shody

Prohlášení o shodě MUSÍ uvádět alespoň jeden z následujících profilů.

#### Snímek jádra

Profil Core Snapshot zachycuje jeden aktuální stav rukopisu. Vyžaduje kořenovou identifikační obálku, identifikaci rukopisu, jazyk, název, hierarchii sekcí a časová razítka. Neznamená to, že jsou k dispozici údaje o historii revizí.

#### Výměna historických informací

Profil „History Exchange“ vyměňuje aktuální stav spolu s přenositelnou historií revizí, která se řídí specifikací `OMI-SPEC-160`. Vyžaduje výslovné prohlášení o úplnosti historie, hlavní revizi a vnitřně konzistentní odkazy na revize.

#### Bezztrátová cesta tam a zpět

Profil „Lossless Round Trip“ se vztahuje na procesory, které nemusí rozpoznávat všechna rozšíření nebo budoucí pole. Tyto procesory zachovávají neznámá data v nezměněné podobě a nahlásí jakoukoli požadovanou operaci, která by je vyřadila nebo přeinterpretovala.

### 3.4 Prohlášení o shodě

Prohlášení o shodě BY MĚLO obsahovat následující údaje:

- název a verze implementace;
- `OMI-SPEC-320` verze;
- implementační třída nebo třídy;
- uvedený profil nebo profily;
- podporovaný rozsah verzí formátu;
- podporované jmenné prostory rozšíření;
- maximální povolená velikost vstupu, hloubka vnoření a velikost kolekcí;
- možnost ověřování a migrace;
- použitá sada testovacích případů nebo revize testů;
- známé situace vedoucí ke ztrátě dat.

**REQ-FMT-001:** Producent MUSÍ generovat objekt nejvyšší úrovně typu „JSON“, který splňuje požadavky této specifikace na identifikaci, datový model a serializaci.

**REQ-FMT-002:** Spotřebitel MUSÍ před interpretací polí rukopisu zjistit deklarovaný formát a verzi souboru „OMI“.

**REQ-FMT-003:** Validátor MUSÍ vyhodnotit syntaxi souboru „JSON“, schéma odpovídající dané verzi, příslušná sémantická omezení a každý deklarovaný profil.

**REQ-FMT-004:** Migrační nástroj MUSÍ zachovat původní vstupní data a vytvořit explicitní záznam o migraci, než zveřejní převedený dokument jako ekvivalentní tomuto vstupu.

**REQ-FMT-005:** Bezztrátový procesor MUSÍ zachovat neznámé prvky s příponou a neznámé nezměněné prvky, nebo se zastavit a nahlásit přesné údaje, které by byly ztraceny.

## 4. Rozsah působnosti

Tato specifikace definuje:

- zobrazení logického stavu rukopisu v jednosloupcovém formátu JSON;
- identifikace formátu a sjednání verze;
- běžná pravidla pro JSONy, řetězce, čísla, časová razítka, jazykové značky, URI a identifikátory;
- základní pole rukopisů a konvence pro přenositelné sbírky;
- uspořádaná struktura oddílů a bloků;
- odkazy mezi adresovatelnými vědeckými objekty;
- metadata a odkazy týkající se logických aktiv;
- volitelná výměna historie přímo v kódu;
- chování producentů, spotřebitelů, validátorů, migračních nástrojů a bezztrátového zpracování;
- strukturní, referenční, sémantická, profilová a validační vrstva pro zásady;
- diagnostické záznamy ve strojově čitelné podobě;
- prostory jmen rozšíření a zpracování neznámých polí;
- deterministická serializace a volitelná kanonizace;
- zprávy o kompatibilitě a migraci;
- požadavky na bezpečnost, ochranu soukromí, uchovávání, přístupnost a internacionalizaci.

### 4.1 Mimo rozsah

Tato specifikace nedefinuje:

- fyzický kontejner typu „`.omi`“ nebo ZIP rozložení;
- cesty k balíčkům, komprese, kontrolní součty, podpisy nebo šifrování;
- schéma databáze nebo implementace úložiště událostí;
- stav komponenty editoru, stav výběru, zásobníky zpětných kroků, mezipaměti nebo data relace;
- geometrie stránky, stránkování, zalomení řádků nebo styl publikace;
- úplná sémantika sekcí, bloků, agentů, citací, anotací nebo revizí;
- protokol pro spolupráci v reálném čase;
- zásady řízení přístupu;
- zásady pro vzdálené získávání aktiv;
- univerzální formát stromu pro editaci formátovaného textu;
- PDF, HTML, EPUB, DOCX, JATS XML, Crossref XML nebo serializace DataCite XML.

Tyto požadavky jsou definovány příslušnými specifikacemi v rámci iniciativy „OMI“ – ať už se jedná o specifikace týkající se sémantiky, pracovních postupů, publikování, API nebo kontejnerů.

## 5. Terminologie

Platí dokument „[OMI Terminology and Definitions](../governance/terminology.md)“.

### 5.1 Dokument rukopisu „OMI“

Dokument ve formátu UTF-8 JSON, jehož hodnota nejvyšší úrovně je objekt, jehož hodnota „`omi.format`“ je „`manuscript`“ a jehož deklarovaná verze formátu se řídí touto specifikací.

### 5.2 Verze formátu

Sémantická verze uvedená na stránce `omi.version`, která určuje pravidla a schéma formátu souboru. Nejedná se o revizi rukopisu, verzi aplikace, verzi sady OMI, verzi kontejneru ani vydání publikace.

### 5.3 Kmenový člen

Člen objektu typu „JSON“, který je definován touto specifikací nebo specifikací „OMI“ uvedenou na adrese `omi.specifications`.

### 5.4 Prodlužovací prvek

Člen uvnitř objektu „`extensions`“, jehož název je absolutní URI nebo URN jmenného prostoru a jehož hodnota je řízena vlastníkem daného jmenného prostoru.

### 5.5 Neznámý člen

Člen, kterému konkrétní procesor nerozumí. Člen může být znám formátu, ale neznámý starší implementaci.

### 5.6 Adresovatelný objekt

Rukopisný objekt s identifikátorem (`id`), na který lze odkazovat samostatně, včetně sekce, bloku, poznámky, citace, bibliografického záznamu, zdroje, agenta, příspěvku, tombstone nebo revize.

### 5.7 Snímek

Jeden zastoupený stav rukopisu. Snímek může identifikovat revizi, kterou představuje, ale sám o sobě neznamená úplnou historii revizí.

### 5.8 Původní vstupní údaje

Přesná sekvence bajtů, kterou spotřebitel nebo migrační nástroj přijímá před analýzou, opravou, normalizací nebo konverzí.

### 5.9 Karanténa

Bezpečný stav, ve kterém implementace uchovává dokument, ale nezachází s ním jako s úspěšně importovaným, upravitelným nebo spustitelným rukopisem.

## 6. Principy návrhu

Formát souboru se řídí následujícími zásadami:

1. **Sémantický zdroj:** rukopis je zdrojem pro publikační výstupy, nikoli záznamem konkrétního provedení stránky.
2. **Explicitní identifikátor:** identifikátory formátu, schématu, rukopisu a adresovatelného objektu se nikdy neodvozují pouze z názvu souboru.
3. **Zkontrolovatelná reprezentace:** základní dokument je běžný UTF-8 JSON.
4. **Nezávislost na implementaci:** přenositelný stav nezahrnuje stav běhu a stav účtu specifické pro daný editor.
5. **Vrstvená validace:** lze rozlišit syntaxi, strukturu, odkazy, sémantiku, profily a lokální zásady.
6. **Zachování kompatibility s budoucími verzemi:** neznámá data jsou izolována, zachována a nikdy nejsou bez upozornění přeinterpretována.
7. **Migrace s dokumentací:** konverze je explicitní, reprodukovatelná a zohledňuje případné ztráty.
8. **Oddělení kontejnerů:** sémantika logického JSON nezávisí na struktuře archivu.
9. **Stabilní identita objektu:** odkazy používají identifikátory namísto vykreslené polohy nebo indexu v poli.
10. **Ve výchozím nastavení bezpečné:** při analýze se obsah nespouští a externí zdroje se nestahují bez upozornění.

## 7. Přehled modelu

Dokument ve formátu rukopisu „OMI“ se skládá z pěti logických částí:

| Oblast | Významní členové | Účel |
|---|---|---|
| Identifikace | `schema`, `omi` | Vybere tento formát, verzi, profily a související specifikace |
| Stav rukopisu | `id`, `locale`, `title`, `sections` | Odráží aktuální stav bádání |
| Související objekty | `agents`, `contributions`, `annotations`, `citations`, `assets` | Obsahuje adresovatelné podpůrné objekty a vztahy |
| Historie | `versioningModelVersion`, `headRevisionId`, `revisionHistory` | Volitelně vyměňuje údaje o revizích |
| Rozšíření | `extensions` | Obsahuje data mimo jádro s jmenným prostorem |

Kořenový objekt představuje jeden logický dokument. Kontejner smí vyčlenit vybrané sbírky do samostatných částí pouze tehdy, pokud je v dokumentu „`OMI-SPEC-330`“ definováno, jakým způsobem se tyto části znovu sestaví do stejného logického modelu. Při opětovném sestavení NESMÍ dojít ke změně významu dokumentu.

## 8. Obecná pravidla pro zápis

### 8.1 JSON a kódování znaků

**REQ-FMT-006:** Dokument ve formátu „OMI“ MUSÍ být platný JSON a kódován v UTF-8. Vytvářející strany NESMÍ generovat značku pořadí bajtů. Příjemci MOHOU značku pořadí bajtů akceptovat za účelem obnovy, ale MUSÍ vydat varování.

**REQ-FMT-007:** Názvy členů objektu JSON MUSÍ být v rámci každého objektu jedinečné. Spotřebitel MUSÍ odhalit duplicitní názvy před nebo během analýzy a NESMÍ bez upozornění použít pravidlo „první vyhrává“ nebo „poslední vyhrává“.

**REQ-FMT-008:** Hodnota nejvyšší úrovně typu „JSON“ MUSÍ být objektem. JSON `null`, pole, řetězce, čísla a logické hodnoty nejsou jako hodnota nejvyšší úrovně platné.

**REQ-FMT-009:** Řetězce MUSÍ obsahovat správně formátované skalární hodnoty Unicode. Producenti NESMÍ generovat nepárové náhradní kódové body UTF-16.

Pořadí objektů a členů nemá žádný sémantický význam. Pořadí prvků v poli má sémantický význam, pokud specifikace definující OMI výslovně neurčuje, že pole je neuspořádané.

### 8.2 Čísla

**REQ-FMT-010:** Producent NESMÍ vysílat hodnotu „`NaN`“, kladnou nebo zápornou nekonečnost ani žádný jiný číselný token, který není v formátu „JSON“.

**REQ-FMT-011:** Celé číslo vyjádřené jako číslo typu „JSON“ MUSÍ spadat do interoperabilního rozsahu od `-(2^53)+1` do `(2^53)-1`. Hodnota vyžadující vyšší přesnost MUSÍ být vyjádřena jako řetězec, jehož sémantika je definována příslušným polem.

Přesné identifikátory, kontrolní součty, desetinné veličiny, lokátory stránek a externí číselné kódy BY MĚLY být řetězce, pokud příslušná specifikace výslovně nevyžaduje číslJSON.

### 8.3 Hodnoty „present“, „null“ a prázdné hodnoty

**REQ-FMT-012:** Chybějící hodnota znamená, že hodnota nebyla zadána nebo se na daný případ nevztahuje. `null` MUSÍ být použito pouze v případech, kdy to příslušné schéma výslovně povoluje. Prázdný řetězec NESMÍ být použit jako náhrada za chybějící povinnou hodnotu.

Prázdné pole znamená známou prázdnou kolekci. Producent BY MĚL vydat prázdné pole pro povinnou kolekci bez prvků a BY MĚL vynechat volitelnou kolekci, jejíž stav je neznámý nebo není reprezentován.

### 8.4 Časová razítka

**REQ-FMT-013:** Pole časového razítka, na které se vztahuje tato specifikace, MUSÍ být datem a časem ve formátu RFC 3339 s explicitním označením časového pásma UTC nebo číselným posunem. Pro udání konkrétního okamžiku NESMÍ být použito datum bez časového pásma.

Producenti BY MĚLI vysílat časová razítka v formátu UTC s velkými písmeny „`T`“ a „`Z`“. Spotřebitelé MUSÍ porovnávat analyzované časové okamžiky, nikoli nezpracované řetězce časových razítek.

### 8.5 Jazykové značky

**REQ-FMT-014:** Pole „jazyk“ MUSÍ obsahovat správně zformátovaný jazykový tag podle normy BCP 47. U tagů se nerozlišuje velká a malá písmena; autoři by MĚLI používat doporučené psaní velkých a malých písmen, aniž by tím změnili význam tagu.

### 8.6 URI

**REQ-FMT-015:** Pole definované jako URI MUSÍ obsahovat absolutní URI, pokud příslušné pole výslovně nepovoluje relativní odkaz. Spotřebitel MUSÍ relativní odkazy vyhodnocovat pouze vzhledem k výslovně deklarovanému základnímu URI.

### 8.7 Identifikátory

**REQ-FMT-016:** Každý adresovatelný objekt MUSÍ mít neprázdný řetězec `id`. Identifikátor MUSÍ být jedinečný v rámci rozsahu identit rukopisu a MUSÍ zůstat neměnný po celou dobu, po kterou si vědecký objekt zachovává svou identitu.

**REQ-FMT-017:** Implementace NESMÍ znovu použít identifikátor smazaného objektu pro jiný objekt. Je-li deklarována sledovatelnost smazání, MUSÍ být identifikátor nadále reprezentován „tombstonem“ nebo ekvivalentním důkazem o historii.

Identifikátory jsou neprůhledné. Uživatel NESMÍ z tvaru identifikátoru odvozovat typ objektu, vlastnictví, umístění, pořadí revizí ani přístupová práva.

## 9. Kořenový objekt rukopisu

### 9.1 Povinné členy

Profil Core Snapshot vyžaduje následující kořenové členy:

| Člen | Typ | Kardinalita | Význam |
|---|---|---:|---|
| `schema` | řetězec URI | 1 | Neměnný identifikátor schématu pro tuto verzi formátu |
| `omi` | objekt | 1 | Formát a obálka závislostí |
| `id` | řetězec | 1 | Identifikátor rukopisu |
| `locale` | řetězec | 1 | Primární jazykový kód BCP 47 |
| `title` | řetězec | 1 | Neprázdný název rukopisu |
| `sections` | pole | 1 | Seřazené sekce nejvyšší úrovně |
| `createdAt` | řetězec | 1 | Okamžik vytvoření |
| `updatedAt` | řetězec | 1 | Čas, kdy byl naposledy aktualizován aktuální stav |

**REQ-FMT-018:** Producent snímku jádra MUSÍ generovat všechny požadované kořenové prvky a MUSÍ splňovat zveřejněné schéma specifické pro danou verzi.

**REQ-FMT-019:** Časový údaj „`updatedAt`“ MUSÍ představovat okamžik, který je stejný nebo pozdější než „`createdAt`“. Validátor MUSÍ nahlásit sémantickou chybu, pokud tomu tak není.

### 9.2 Doporučené a volitelné prvky

Pro interoperabilní výměnu jsou definovány následující kořenové prvky. Jejich podrobná sémantika objektů je popsána v příslušných specifikacích OMI.

| Člen | Typ | Řád | Poznámky |
|---|---|---|---|
| `subtitle` | řetězec | n/a | Volitelné titulky |
| `abstract` | řetězec nebo přenositelný obsahový objekt | n/a | Abstrakt bez formátování publikace |
| `keywords` | pole řetězců | význam | pořadí podle autora, pokud je uvedeno |
| `agents` | pole objektů | bez oprávnění | Identitní objekty z `OMI-SPEC-150` |
| `contributions` | pole objektů | má význam, je-li deklarováno pořadí rolí | Vztahy mezi agenty a objekty |
| `tombstones` | pole objektů | není seřazeno chronologicky, pokud není výslovně uvedeno | Důkaz o smazání |
| `annotations` | pole objektů | významné, pokud je deklarováno pořadí zobrazení | Anotační objekty z `OMI-SPEC-130` |
| `bibliographicRecords` | pole objektů | není v pořadí podle citací | Záznamy z `OMI-SPEC-220` |
| `citations` | pole objektů | má význam tam, kde je deklarováno pořadí citací | Výskyt na `OMI-SPEC-210` |
| `citationClusters` | pole objektů | významné | Uspořádané skupiny citací |
| `crossReferences` | pole objektů | důležité v případech, kdy je deklarováno pořadí zobrazení | Sémantické interní odkazy |
| `assets` | pole objektů | pořadí nezáleží | logická metadata aktiv |
| `extensions` | objekt | n/a | Hodnoty rozšíření v jmenném prostoru |

**REQ-FMT-020:** Exportované soubory MUSÍ BÝT bez hesel, přístupových tokenů, tokenů pro obnovení, identifikátorů relace, soukromých klíčů, nezveřejněných cest v lokálním souborovém systému nebo jiných přihlašovacích údajů.

**REQ-FMT-021:** Přenositelné výstupy NESMÍ považovat výběry v editoru, polohu kurzoru, stav zobrazení, zásobníky zpětných kroků, mezipaměti, dočasné validační zprávy ani uživatelská nastavení rozhraní specifická pro daný účet za kanonický stav rukopisu.

### 9.3 Příklad obálky

```json
{
  "schema": "https://openmanuscript.org/schemas/omi-manuscript-0.2.schema.json",
  "omi": {
    "format": "manuscript",
    "version": "0.2.0",
    "profiles": ["core-snapshot"],
    "specifications": {
      "OMI-SPEC-100": "0.1.0",
      "OMI-SPEC-120": "0.1.0",
      "OMI-SPEC-140": "0.1.0"
    }
  },
  "id": "urn:uuid:d3c23cd5-ffb8-4f16-8db5-68e32fa78d82",
  "locale": "en",
  "title": "A portable manuscript",
  "sections": [],
  "createdAt": "2026-09-05T08:00:00Z",
  "updatedAt": "2026-09-05T08:00:00Z"
}
```

## 10. Identifikace formátu a sjednání verze

### 10.1 Identifikátor schématu

V této verzi MUSÍ mít proměnná `schema` přesně tuto hodnotu:

```text
https://openmanuscript.org/schemas/omi-manuscript-0.2.schema.json
```

**REQ-FMT-022:** Producent MUSÍ poskytnout neměnnou URI kanonického schématu pro konkrétní verzi formátu. NESMÍ poskytnout dynamickou URI typu `latest` jako autoritativní identifikátor schématu.

Uživatel MŮŽE použít důvěryhodnou lokální kopii schématu a NESMÍ vyžadovat přístup k síti pouze z toho důvodu, že dokument obsahuje URI schématu v protokolu HTTPS.

### 10.2 Obálka typu „OMI“

Objekt typu ``omi`` obsahuje následující členy:

| Člen | Typ | Kardinalita | Pravidlo |
|---|---|---:|---|
| `format` | řetězec | 1 | Přesná hodnota `manuscript` |
| `version` | řetězec sémantické verze | 1 | Přesná verze formátu souboru, kterou vydal producent |
| `profiles` | pole řetězců | 1 | Jeden nebo více deklarovaných profilů shody |
| `specifications` | objekt | 1 | OMI přiřazení identifikátoru specifikace k přesné verzi |
| `generator` | objekt | 0..1 | Neautoritativní identifikace producenta |

Zaznamenané tokeny profilů ve verzi `0.2.0` jsou:

| Token | Profil |
|---|---|
| `core-snapshot` | Snímek jádra |
| `history-exchange` | History Exchange |
| `lossless-round-trip` | Bezztrátový okružní přenos |

**REQ-FMT-023:** Hodnota ``omi.format`` MUSÍ být shodná s hodnotou ``manuscript`` a hodnota ``omi.version`` MUSÍ být shodná s přesnými pravidly použitými při serializaci dokumentu.

**REQ-FMT-024:** Soubor „`omi.profiles`“ MUSÍ obsahovat soubory „`core-snapshot`“, NESMÍ obsahovat duplicitní tokeny a MUSÍ deklarovat každý další profil, jehož požadovaná data poskytovatel prohlašuje, že poskytuje.

**REQ-FMT-025:** Dokument „`omi.specifications`“ MUSÍ přiřadit každou platnou specifikaci OMI, kterou dokument používá, k přesné sémantické verzi. NESMÍ se používat rozsah, název větve, pohyblivý tag ani identifikátor bez verze.

Volitelný objekt „`generator`“ MŮŽE obsahovat položky „`name`“, „`version`“ a „`uri`“. Spotřebitel NESMÍ měnit ověřování ani úroveň důvěry pouze na základě toho, že je uveden konkrétní generátor.

### 10.3 Správa verzí

**REQ-FMT-026:** Spotřebitel, který podporuje deklarovanou verzi formátu, MUSÍ používat schéma a pravidla pro tuto verzi, nikoli nejnovější verzi, kterou zná.

**REQ-FMT-027:** Aplikace, která nepodporuje deklarovanou hlavní verzi, MUSÍ původní vstup uchovat nebo izolovat a NESMÍ dokument prezentovat jako úspěšně importovaný upravitelný rukopis.

**REQ-FMT-028:** Spotřebitel, který narazí na novější vedlejší verzi nebo opravu, MŮŽE pokračovat pouze v případě, že to povolují deklarovaná pravidla kompatibility. MUSÍ zachovat neznámá data a vydat diagnostickou zprávu identifikující neověřenou verzi.

## 11. Struktura rukopisu

### 11.1 Oddíl

`sections` jedná se o uspořádaný seznam hlavních částí rukopisu. Každá část musí obsahovat:

- `id`: identifikátor stabilního objektu;
- `title`: název oddílu, který MŮŽE být prázdný pouze v případě, že model příslušného dokumentu povoluje oddíl bez názvu;
- `blocks`: uspořádané pole bloků obsahu.

Sekce MŮŽE obsahovat prvky typu „`role`“, „`language`“, „`children`“, „`extensions`“ a pole definovaná deklarovanou verzí modelu dokumentu.

**REQ-FMT-029:** Vytvářitel MUSÍ zachovat pořadí sekcí a bloků. Příjemce NESMÍ odvodit autoritativní pořadí tříděním identifikátorů nebo názvů.

### 11.2 Bloky

Každý blok vyžaduje `id` a `type`. Blok MŮŽE obsahovat přenositelné `content`, strukturované `data`, podřízené bloky, jazyk, adresovatelné kotvy, odkazy na zdroje a rozšíření s jmenným prostorem.

Tento formát souboru nezajišťuje přenositelnost stromu formátovaného textu specifického pro daný editor pouze tím, že je vložen jako řetězec typu „JSON“. Deklarovaná specifikace modelu dokumentu nebo jmenný prostor rozšíření musí definovat význam výrazů „`content`“ a „`data`“.

**REQ-FMT-030:** Producent, který se řídí těmito požadavky, MUSÍ serializovat vědecký obsah pomocí přenositelného formátu vybraného na adrese `omi.specifications` nebo pomocí deklarovaného rozšíření. NESMÍ vyžadovat, aby uživatel spouštěl nebo instancoval editační prostředí producenta za účelem obnovení vědeckého textu a jeho struktury.

**REQ-FMT-031:** Pokud procesor nerozpozná blokovou identitu (`type`), MUSÍ zachovat blokovou identitu, pořadí, nezpracovanou přenositelnou hodnotu, podřízené prvky a rozšíření v souladu s profilem „Lossless Round Trip“. NESMÍ blok bez upozornění převést na prázdný odstavec.

### 11.3 Sbírky a odkazy

Objekty v kořenových sbírkách lze adresovat pomocí `id`. Vztahy využívají identifikační pole definovaná příslušnou sémantickou specifikací, jako jsou například `targetBlockId`, `sourceBlockId`, `targetId`, `citationIds`, `creatorAgentId` nebo identifikátory revizních rodičů.

**REQ-FMT-032:** Odkaz, který je nutné vyřešit v rámci téhož dokumentu, MUSÍ identifikovat existující objekt povoleného typu. Validátor MUSÍ nahlásit nevyřešený odkaz nebo odkaz s nekompatibilním typem.

**REQ-FMT-033:** Odkaz NESMÍ jako svůj jediný trvalý cíl používat index pole, číslo vykreslené stránky, pozici v pixelech ani dočasný offset editoru.

Externí odkaz MŮŽE zůstat lokálně nevyřešený, pokud jeho řídící pole povoluje absolutní externí URI a dokument uvádí, že je povoleno externí vyřešení. Validace NESMÍ tento URI ve výchozím nastavení načíst.

### 11.4 Majetek

`assets` obsahuje logická metadata pro binární nebo externí zdroje. Každý prvek by měl podle potřeby deklarovat:

- `id`;
- typ média;
- role;
- čitelné označení nebo název souboru;
- velikost;
- algoritmus a hodnota kontrolního součtu;
- metadata týkající se přístupnosti, jako jsou alternativní texty nebo odkazy na přepisy;
- umístění relativní vůči kontejneru nebo absolutní, které povoluje příslušný profil.

**REQ-FMT-034:** Bajtové údaje o binárních aktivech NESMÍ být vloženy jako neomezená data ve formátu Base64 do hlavního dokumentu rukopisu. Autor MUSÍ tyto bajty umístit mimo dokument pomocí `OMI-SPEC-330` nebo použít výslovně deklarované rozšíření či profil s omezením velikosti.

**REQ-FMT-035:** Odkaz na soubor MUSÍ směřovat na deklarovaná metadata souboru nebo na výslovně povolený externí URI. Uživatelé NESMÍ automaticky načítat externí soubor během analýzy nebo ověřování.

## 12. Výměna historických informací

### 12.1 Pole s historií

Dokument, v němž se uvádí, že se jedná o „`history-exchange`“, musí obsahovat následující údaje:

- `versioningModelVersion` – určení přesné verze `OMI-SPEC-160`;
- `headRevisionId` – identifikátor revize, kterou představuje daný kořenový snímek;
- `revisionHistory` obsahující přenosný objekt historie.

Objekt „`revisionHistory`“ vyžaduje:

| Člen | Význam |
|---|---|
| `completeness` | `complete`, `partial` nebo `shallow` |
| `rootRevisionId` | Nejstarší zachovaná revize nebo skutečný kořen |
| `headRevisionId` | Revize reprezentovaná snímkem kořenového adresáře |
| `revisions` | Záznamy o revizích se řídí dokumentem `OMI-SPEC-160` |

MŮŽE zahrnovat soubory typu „`omissionNotice`“, větve, sady změn, snímky, důkazy o integritě, oznámení o redigování a rozšíření s jmennými prostory.

**REQ-FMT-036:** Hodnoty ``headRevisionId``, ``revisionHistory.headRevisionId`` a revize zastoupeného snímku se MUSÍ shodovat.

**REQ-FMT-037:** Každý identifikátor revize MUSÍ být jedinečný. Každý nadřazený identifikátor MUSÍ být vyřešen v rámci `revisionHistory.revisions`, pokud `completeness` není `partial` nebo `shallow` a chybějící hranice není výslovně deklarována.

**REQ-FMT-038:** Dokument, v němž chybí historie revizí, NESMÍ uvádět profil „`history-exchange`“ a NESMÍ naznačovat, že daný snímek obsahuje úplnou genealogii.

### 12.2 Externí historie v kontejneru

`OMI-SPEC-330` může ukládat historii do samostatné části kontejneru. V takovém případě MUSÍ rekonstruovaný logický dokument splňovat požadavky této části, než bude předložen jako dokument typu „History Exchange“. Objevitelnost a integritu částí určuje manifest kontejneru, nikoli ad hoc řetězec kořenové cesty.

## 13. Model analýzy

Spotřebitel, který se řídí těmito zásadami, postupuje v následujících krocích v uvedeném pořadí:

1. uchovat původní vstup v souladu s místními zásadami uchovávání;
2. uplatnit nastavené limity velikosti v bajtech a limity zdrojů;
3. dekódovat UTF-8 a odmítnout nesprávně formátované sekvence bajtů;
4. provést tokenizaci JSON a zároveň odhalit duplicitní názvy členů objektů;
5. vyžadují objekt nejvyšší úrovně;
6. Pro výběr formátu si přečtěte pouze dokumenty `schema` a `omi`;
7. vyjednat deklarovanou verzi a profily;
8. vyberte důvěryhodné schéma specifické pro danou verzi;
9. provést strukturální validaci;
10. vyřešit identity a odkazy v dokumentu;
11. provést sémantickou validaci a validaci profilu;
12. určit podporované a nepodporované rozšíření;
13. dokument zveřejnit, umístit do karantény, zamítnout nebo přesunout v souladu s výslovnými zásadami.

**REQ-FMT-039:** Analýza MUSÍ být bez provádění obsahu. JSON Názvy členů, řetězcové hodnoty, URI, fragmenty značek, hodnoty rozšíření a vložené výrazy MUSÍ být považovány za data, pokud pozdější, výslovně povolený krok zpracování nestanoví jinak.

**REQ-FMT-040:** Parser MUSÍ uplatňovat limity definované implementací pro počet bajtů vstupu, hloubku vnoření, členy objektů, délku pole, délku řetězce a diagnostiku agregátů. Překročení limitu MUSÍ vyvolat diagnostickou zprávu a NESMÍ vést k vytvoření zdánlivě kompletního rukopisu.

**REQ-FMT-041:** Při výběru schématu MUSÍ být použito důvěryhodné mapování podporovaných hodnot „`omi.version`“ na schémata. Parser NESMÍ stahovat a spouštět ani důvěřovat libovolnému schématu pouze na základě toho, že je uvedeno ve vstupu.

## 14. Model serializace

### 14.1 Požadované chování

**REQ-FMT-042:** Producent MUSÍ generovat UTF-8 JSON, jehož `schema`, `omi.version`, profily a verze závislých specifikací přesně popisují serializované znázornění.

**REQ-FMT-043:** Serializace MUSÍ zachovat sémanticky významné pořadí prvků v poli, stabilní identifikátory, cíle odkazů a rozlišení mezi chybějícími, prázdnými a explicitně nulovatelnými hodnotami.

**REQ-FMT-044:** Výrobce MUSÍ vynechat stavy určené pouze pro implementaci a tajné stavy popsané na adresách `REQ-FMT-020` a `REQ-FMT-021`.

Výstupy určené pro lidské čtení BY MĚLY používat odsazení o dvě mezery, konce řádků ve formě LF a jeden závěrečný znak LF. Příjemci nesmí považovat mezery, odsazení, konce řádků ani pořadí členů objektu za sémantické.

### 14.2 Determinismus a kanonizace

Dvě serializace mohou být sémanticky ekvivalentní, i když se liší v bajtech. Producent, který prohlašuje, že používá deterministickou serializaci, MUSÍ zdokumentovat, jak řadí členy objektu a jak reprezentuje ekvivalentní hodnoty.

**REQ-FMT-045:** Hash nebo podpis nad datovým souborem typu „JSON“ MUSÍ deklarovat algoritmus kanonizace, verzi algoritmu, kódování znaků a rozsah, na který se vztahuje. Implementace NESMÍ považovat hashe vytvořené podle odlišných nebo nedeklarovaných pravidel kanonizace za ekvivalentní.

JSON Schéma kanonizace (JCS) MŮŽE být použito, jsou-li splněna jeho vstupní omezení. Běžná výměna dat typu „OMI“ nevyžaduje použití JCS a NESMÍ normalizovat autorské řetězce pouze za účelem získání identických bajtů.

### 14.3 Zachování znaků Unicode

**REQ-FMT-046:** Procesor pro obousměrnou konverzi MUSÍ zachovat skalární sekvenci Unicode neupraveného odborného textu. NESMÍ bez upozornění provádět normalizaci Unicode, transliteraci, převod velkých a malých písmen, nahrazování uvozovek, slučování mezer ani konverzi konců řádků uvnitř hodnot obsahu.

Producent MŮŽE normalizovat nově vygenerované identifikátory nebo strojově řízené tokeny, pokud příslušná specifikace takovou normalizaci definuje.

## 15. Ověřování a zpracování chyb

### 15.1 Validační vrstvy

Validace je uspořádána do vrstev, aby bylo možné selhání vysvětlit:

| Vrstva | Příklady | Požadovaný výsledek |
|---|---|---|
| Syntaxe | UTF-8, gramatika „JSON“, duplicitní názvy | Chyba při selhání |
| Obálka | Formát, verze, URI schématu, profily | Chyba v důsledku nepodporované nebo nekonzistentní deklarace |
| Strukturální | Typy, povinná pole, vzory | Diagnostika schématuJSON |
| Referenční | Duplicitní identifikátory, chybějící cíle, nesprávné typy cílů | Sémantická diagnostika |
| Sémantika | Pořadí časových značek, konzistence historie, invarianty modelu | Sémantická diagnostika |
| Profil | Chybějící pole pro výměnu historických údajů | Diagnostika profilu |
| Rozšíření/zásada | Neznámý jmenný prostor, místní velikost nebo pravidlo ochrany soukromí | Varování nebo chyba podle deklarované zásady |

**REQ-FMT-047:** Validátor NESMÍ označit dokument za vyhovující, pokud má některá z příslušných vrstev diagnostickou chybu.

**REQ-FMT-048:** Ověření MUSÍ být deterministické pro stejný vstup, podporovanou sadu schémat, možnosti rozšíření, deklarovaný profil a konfiguraci zásad.

Zveřejněné schéma „JSON“ záměrně připouští některé neznámé prvky, aby byla zajištěna kompatibilita s budoucími verzemi. Samotné splnění schématu proto nepředstavuje úplný výsledek posouzení shody.

### 15.2 Diagnostický objekt

Strojově čitelná diagnostika BY MĚLA obsahovat:

| Člen | Typ | Význam |
|---|---|---|
| `code` | řetězec | Stabilní implementace nebo diagnostický kód OMI |
| `severity` | řetězec | `error`, `warning` nebo `info` |
| `instancePath` | řetězec | JSON Ukazatel na nejbližší reprezentovanou hodnotu |
| `requirement` | řetězec | Platný identifikátor `REQ-FMT-NNN` |
| `message` | řetězec | Vysvětlení srozumitelné pro člověka |
| `relatedIds` | pole | Identifikátory příslušných rukopisů |
| `details` | objekt | Volitelný strukturovaný, neveřejný důkaz |

Příklad:

```json
{
  "code": "FMT-UNRESOLVED-REFERENCE",
  "severity": "error",
  "instancePath": "/annotations/0/targetBlockId",
  "requirement": "REQ-FMT-032",
  "message": "Annotation ann-1 targets missing block block-404.",
  "relatedIds": ["ann-1", "block-404"]
}
```

**REQ-FMT-049:** Validátor MUSÍ u každé chyby určit nejbližší relevantní místo v instanci a příslušný požadavek. V diagnostických zprávách NESMÍ uvádět přihlašovací údaje ani obsah rukopisu s omezeným přístupem, pokud k tomu není výslovně oprávněn.

### 15.3 Obnova a opravy

Spotřebitel MŮŽE nabídnout opravu jako samostatnou službu. Oprava není ověřením.

**REQ-FMT-050:** Opravný zásah MUSÍ zachovat původní vstupní data, uvést všechny provedené změny, identifikovat použitý nástroj a jeho verzi a ověřit výsledek opravy. Opravený dokument NESMÍ být prezentován jako bajtově identický nebo ekvivalentní z hlediska původu se svým zdrojem.

## 16. Rozšíření a neznámá data

### 16.1 Objekt rozšíření

Jakýkoli objekt MŮŽE obsahovat člen typu „`extensions`“, pokud to umožňuje jeho řídící schéma. Objekt typu „`extensions`“ je objektem typu „JSON“. Každý název člena MUSÍ být absolutní adresou HTTPS URI nebo URN spravovanou autorem rozšíření.

Příklad:

```json
{
  "extensions": {
    "https://example.org/omi/extensions/lab-notebook/1": {
      "experimentId": "EXP-42",
      "replicate": 3
    }
  }
}
```

**REQ-FMT-051:** Nepodstatná přenositelná data vytvořená producentem MUSÍ být umístěna pod `extensions` a označena absolutním URI nebo URN jmenného prostoru. Producent NESMÍ vytvořit kořenovou vlastnost bez jmenného prostoru, která by mohla kolidovat s budoucí součástí jádra.

**REQ-FMT-052:** Uživatel NESMÍ neznámému rozšíření přiřadit základní sémantiku OMI. MŮŽE toto rozšíření při zobrazení nebo zpracování ignorovat, přičemž jej však musí zachovat.

**REQ-FMT-053:** Validátor BY MĚL upozornit na neznámé členy bez jmenného prostoru. V rámci validace je NESMÍ odstranit.

### 16.2 Zpracování bez ztráty dat

**REQ-FMT-054:** V rámci profilu „Lossless Round Trip“ MUSÍ procesor zachovat hodnotu „JSON“, která obsahuje objekt, název člena a pozici v poli každého nezměněného neznámého člena a rozšíření.

**REQ-FMT-055:** Pokud úprava znemožňuje zachování dat, MUSÍ zpracovatel proces zastavit před přepsáním nebo po předložení strojově čitelné zprávy o ztrátě dat vyžádat výslovné povolení.

Zachování mezer a pořadí členů objektů bajt po bajtu není vyžadováno, pokud procesor výslovně neprohlašuje, že zachovává pořadí bajtů. Je vyžadováno sémantické zachování neznámé hodnoty `JSON`.

## 17. Správa verzí a migrace

### 17.1 Rozdíly mezi verzemi

Implementace MUSÍ rozlišovat:

- Verze formátu souboru: `omi.version`;
- URI schématu: `schema`;
- závislé verze modelu: `omi.specifications`;
- oprava rukopisu nebo snímku: `headRevisionId` nebo pole pro opravu definované modelem;
- verze kontejneru: manifest „`OMI-SPEC-330`“;
- verze aplikace: `omi.generator.version`, je-li k dispozici;
- vydání publikace nebo označení vydání: pole definované modelem publikace.

**REQ-FMT-056:** Producent NESMÍ použít jedno pole verze jako náhradu za jinou kategorii z výše uvedeného seznamu.

### 17.2 Záznam o migraci

Záznam o migraci musí obsahovat:

| Člen | Význam |
|---|---|
| `sourceFormatVersion` | Přesný vstup `omi.version` |
| `targetFormatVersion` | Přesný výstup `omi.version` |
| `tool` | Název a verze nástroje Migrator |
| `migratedAt` | RFC 3339 instant |
| `sourceDigest` | Volitelný digest s deklarovaným algoritmem a rozsahem kanonizace |
| `steps` | Seřazené identifikátory použitých transformací |
| `warnings` | Nejistoty nesouvisející s úmrtím |
| `losses` | Údaje vynechány, odhadnuty nebo přeinterpretovány |
| `extensionsPreserved` | Zachování jmenných prostorů rozšíření |
| `validation` | Souhrny ověření zdrojového a cílového textu |

Záznam může být uložen vedle výstupu, v autorizovaném rozšíření o informace o původu nebo v části kontejneru OMI věnované původu.

**REQ-FMT-057:** Migrační nástroj MUSÍ být jednoznačný a reprodukovatelný: stejný zdroj, cílová verze, verze migračního nástroje, volby a možnosti rozšíření BY MĚLY vést k sémanticky ekvivalentnímu výstupu a ke stejnému pořadí migračních kroků.

**REQ-FMT-058:** Migrační nástroj NESMÍ uvádět, že se jedná o bezeztrátový převod, pokud pole ``losses`` není prázdné nebo pokud byla vyřazena neznámá zdrojová data.

### 17.3 Přechod z `0.1.0`

Návrh „`0.1.0`“ nezveřejnil kanonické schéma a byl implementován pouze experimentálně. Migrace v rámci „`0.1.0`“ proto začíná detekcí profilu implementace, nikoli slepým přejmenováváním.

Migrátor pro reprezentaci prekurzorů typu „Open Manuscript Studio“ by měl:

1. zachovat původních `.omi.json` bajtů;
2. rozpoznat URI starého schématu `https://openmanuscript.org/schemas/omi-manuscript-0.1.json`;
3. přidejte obálku `omi` a přesné verze závislostí;
4. nahraďte URI schématu neměnným URI `0.2`;
5. odstranit zastaralé duplicitní záznamy o autorech až poté, co je přiřadíme k agentům a příspěvkům nebo zaznamenáme jejich ztrátu;
6. rozlišovat pole revizí rukopisu od verze formátu;
7. ověřit odkazy na oddíly, bloky, poznámky, citace a historii;
8. přesunout data implementace, která nejsou klíčová, do rozšíření s vlastním jmenným prostorem;
9. ověřit výstup podle schématu a sémantických pravidel `0.2`;
10. vytvořit záznam o migraci.

**REQ-FMT-059:** Pouhá změna adresy `schema` nebo `omi.version` nepředstavuje migraci a NESMÍ být prezentována jako úspěšná konverze.

## 18. Integrace kontejnerů

Samostatná prezentace `.omi.json` a kontejner `.omi` mají odlišné typy médií a funkce:

| Zastoupení | Řídící specifikace | Prozatímní typ média | Typická přípona |
|---|---|---|---|
| Logical manuscript JSON | `OMI-SPEC-320` | `application/vnd.openmanuscript+json` | `.omi.json` |
| Fyzický kontejner OMI | `OMI-SPEC-330` | `application/vnd.openmanuscript.omi+zip` | `.omi` |

**REQ-FMT-060:** Kontejner MUSÍ uvádět přesnou verzi formátu „`OMI-SPEC-320`“, která se vztahuje na jeho logickou část rukopisu. Uživatel formátu souboru NESMÍ odvozovat cesty k balíčkům ani pravidla komprese bez zpracování podle „`OMI-SPEC-330`“.

**REQ-FMT-061:** Při exportu dat do kontejnerových částí MUSÍ být zachovány stejné logické identity, pořadí, odkazy, úplnost historie a hodnoty rozšíření, jaké byly získány ze samostatného znázornění.

## 19. Interoperabilita

### 19.1 Import

Import z webů DOCX, JATS, XML, TEI XML, HTML, Markdown nebo z jiného zdroje představuje převod do sémantiky OMI a není důkazem toho, že každý prvek zdroje má ekvivalent v OMI.

**REQ-FMT-062:** Importér MUSÍ nahlásit vynechané, přibližné nebo implementačně specifické vlastnosti zdroje a MĚL BY zachovat původ zdrojového formátu. NESMÍ bez upozornění převádět nerozpoznaný odborný obsah na prostý text, pokud by tím došlo ke změně významu.

### 19.2 Export

PDF, HTML, EPUB, DOCX, JATS XML, Crossref XML a DataCite XML jsou odvozené výstupy. Při jejich generování mohou být použity publikační profily, avšak odvozené rozvržení NESMÍ být považováno za autoritativní sémantiku rukopisu pouze proto, že se objevuje ve výstupu.

**REQ-FMT-063:** Exportér MUSÍ při generování ztrátového publikačního formátu zachovat zdrojový rukopis ve formátu OMI nebo neměnný odkaz na něj a MĚL BY nahlásit nepodporované funkce cílového formátu.

### 19.3 Přeprava v rámci služby „API“

APIMŮŽE přenášet logický rukopis JSON přímo. Vyjednávání obsahu HTTP, částečné aktualizace, ověřování a souběžnost spadají pod `OMI-SPEC-310`. Částečná reprezentace API NESMÍ být uváděna jako úplný dokument `.omi.json`, pokud neobsahuje všechna povinná pole a nedeklaruje příslušný profil.

## 20. Bezpečnost, ochrana soukromí a integrita

### 20.1 Nedůvěryhodné vstupní údaje

Žádný vstup není důvěryhodný. Mezi rizika patří vyčerpání zdrojů, hluboké vnoření, nadměrně dlouhé řetězce, záměna duplicitních názvů, škodlivé URI, aktivní značky, vkládání vzorců, odhalení cesty, únik přihlašovacích údajů, zfalšování přípon a rizika spojená s dekompresí na úrovni kontejneru.

**REQ-FMT-064:** Spotřebitelé MUSÍ při analýze považovat značky, URL adresy, vzorce, šablony a obsah příloh za neaktivní data. Zobrazení nebo aktivace vyžaduje samostatný krok sanitizace a autorizace odpovídající danému kontextu.

**REQ-FMT-065:** Spotřebitelé NESMÍ během ověřování rozbalovat síťové URI, pokud provozovatel výslovně nepovolí jejich načítání v rámci omezeného seznamu povolených adres, časového limitu, omezení velikosti, zásad přesměrování a zásad ochrany soukromí.

### 20.2 Citlivé údaje

Rukopisy a historické materiály mohou obsahovat nezveřejněné výzkumné výsledky, osobní údaje, důvěrné recenze, redigovaný text, údaje o poloze nebo materiály s omezeným přístupem.

**REQ-FMT-066:** Producent MUSÍ před exportem použít zamýšlený profil zveřejnění a NESMÍ zahrnout obsah s omezeným přístupem pouze proto, že se nachází v úložišti autorizačních dat nebo v historii revizí.

**REQ-FMT-067:** Protokoly o ověření a migraci MUSÍ omezit na minimum obsah rukopisu uvedený v uvozovkách a MUSÍ dodržovat zásady přístupu ke vstupním datům.

### 20.3 Integrita

Samotný soubor „JSON“ neprokazuje autorství, pravost ani aktuálnost. Důkaz integrity vyžaduje deklarovaný digest a rozsah kanonizace; ověřené podpisy a kontrolní součty kontejnerů se řídí příslušnými specifikacemi.

**REQ-FMT-068:** Spotřebitel NESMÍ jako důkaz důvěryhodného autorství předkládat platnost schématu, kontrolní součet ani vlastní deklarovaný generátor.

## 21. Přístupnost

Formát souboru zachovává sémantické informace a informace o přístupnosti, které potřebují renderery; nestanovuje však konkrétní podobu uživatelského rozhraní.

**REQ-FMT-069:** Producent MUSÍ zachovat jazyková metadata, strukturu nadpisů, pořadí čtení, alternativní text, titulky, strukturu tabulek, zdroj rovnic, přepisy a další údaje relevantní pro přístupnost, které podporuje příslušný sémantický model.

**REQ-FMT-070:** V základním stavu rukopisu NESMÍ autor vyjadřovat význam pouze prostřednictvím barvy, vizuální polohy, písma nebo geometrie stránky.

Validátory BY MĚLY diagnostikovat chybějící metadata o přístupnosti, pokud typ objektu a vybraný profil tato metadata vyžadují. Diagnostika BY MĚLA vysvětlit, jak daný objekt vyhledat, aniž by došlo k zobrazení citlivého obsahu.

## 22. Internacionalizace

OMI Rukopisy mohou obsahovat libovolný systém písma Unicode, obousměrný text, kombinované znaky, historická písma a vícejazyčný obsah.

**REQ-FMT-071:** Vytvořitel MUSÍ zachovat původní text v kódování Unicode a explicitní jazykové metadata. Uživatel NESMÍ předpokládat latinské písmo, směr psaní zleva doprava, interpunkci ASCII ani jediný jazyk rukopisu.

**REQ-FMT-072:** Třídění podle národního prostředí, změna velkých a malých písmen, segmentace, zobrazení data a zobrazení čísel NESMÍ přepsat uloženou hodnotu autora, pokud to nevyžaduje autorizovaná vědecká úprava.

Metadata o směru BY MĚLA být uvedena pouze v případě, že je nelze spolehlivě odvodit z deklarovaného jazyka a obsahu. Názvy vlastností generované strojem a registrované tokeny zůstávají v kódování ASCII.

## 23. Příklady a testovací sestavy pro ověření shody

Zveřejněný rozpis zápasů pro tuto verzi je k dispozici na adrese [XQZTOKEN0END](/examples/omi-spec-320/0.2.0/manifest.json).

Seznam zařízení obsahuje následující údaje:

- přesnou specifikaci a schéma;
- očekávaná platnost;
- očekávané diagnostické kódy pro neplatné příklady;
- účel svítidla.

Základní sada obsahuje:

- minimální snímek jádra;
- reprezentativní dokument formátu History Exchange s příponou označující jmenný prostor;
- dokument, u kterého chybí verze formátu;
- dokument obsahující duplicitní adresovatelný identifikátor;
- dokument obsahující nevyřešený cíl anotace;
- dokument s obrácenými časovými značkami vytvoření a aktualizace;
- dokument s nekonzistentními záhlavími historie;
- dokument obsahující zakázané pole s přihlašovacími údaji.

Validátor odkazů na repozitáře provádí kontroly schématu a vybrané sémantické kontroly. Jedná se o důkaz implementace, nikoli o kompletní sadu formálních testů shody. Implementace MUSÍ kromě úspěšného absolvování zveřejněných testovacích případů také vyhodnotit normativní požadavky uvedené v tomto dokumentu.

## 24. Odkazy na normy

- [RFC 2119 — Key words for use in RFCs to Indicate Requirement Levels](XQZTOKEN0END)
- [RFC 8174 — Ambiguity of Uppercase vs Lowercase in RFC 2119 Key Words](XQZTOKEN0END)
- [RFC 8259 — The JavaScript Object Notation (JSON) Data Interchange Format](XQZTOKEN0END)
- [RFC 3339 — Date and Time on the Internet: Timestamps](XQZTOKEN0END)
- [RFC 5646 — Tags for Identifying Languages](XQZTOKEN0END)
- [RFC 6901 — JavaScript Object Notation (JSON) Pointer](XQZTOKEN0END)
- [RFC 7493 — The I-JSON Message Format](XQZTOKEN0END)
- [RFC 3986 — Uniform Resource Identifier (URI): Generic Syntax](XQZTOKEN0END)
- [JSON Schema Core, Draft 2020-12](XQZTOKEN0END)
- [JSON Schema Validation, Draft 2020-12](XQZTOKEN0END)
- [OMI Specification Registry](../governance/specification-registry.md)
- [OMI Versioning Policy](../governance/versioning-policy.md)
- [OMI-SPEC-160 — Versioning and Change Model](./versioning-change-model.md)
- [OMI-SPEC-180 — Validation Model (Reserved)](../governance/specification-registry.md)
- [OMI-SPEC-330 — Container Architecture](./container-architecture.md)

## 25. Informační odkazy

- [RFC 8785 — JSON Canonicalization Scheme](XQZTOKEN0END)
- [RFC 6838 — Media Type Specifications and Registration Procedures](XQZTOKEN0END)
- [RFC 6839 — Additional Media Type Structured Syntax Suffixes](XQZTOKEN0END)
- [FAIR Guiding Principles](XQZTOKEN0END)
- [OMI Architecture Map](../foundations/architecture-map.md)
- [OMI Specification Style Guide](../governance/style-guide.md)

## 26. Stav realizace

Autoritativní důkazy o implementaci jsou shromažďovány v databázi „[OMI Implementation Status Matrix](../governance/implementation-status-matrix.md)“.

V době zveřejnění tohoto návrhu:

- `0.2` JSON Schéma je zveřejněno na kanonické verzované adrese URI;
- byla zveřejněna počáteční sada termínů a referenční validátor;
- Open Manuscript Studio exportuje reprezentaci prekurzoru typu „`.omi.json`“ s využitím dosud nezveřejněného URI schématu „`0.1`“;
- Studio zatím neprohlašuje, že splňuje požadavky normy „`OMI-SPEC-320@0.2.0`“;
- Dosud nebyl ověřen žádný kompletní validátor od třetí strany ani žádná formální sada testů pro ověření shody napříč implementacemi.

Samotné splnění testů schématu „JSON“ nebo referenčních testovacích dat ještě neznamená úplnou shodu.

## 27. Nevyřešené otázky

Pro další verze zůstávají otevřené následující otázky:

1. dokončit přípravu přenositelného formátu ve formátu RTF, který byl vybrán základním modelem dokumentu;
2. sladit kompletní schémata identit, anotací, citací, datových zdrojů a historie v міře, jak se vyvíjejí příslušné řídící specifikace;
3. rozhodnout, zda by měl být prozatímní typ média dodavatele zaregistrován, nebo nahrazen;
4. definovat tabulku formální kompatibility pro všechny vedlejší verze starší než 1.0;
5. zveřejnit strojově čitelné diagnostické schéma sdílené s `OMI-SPEC-180`;
6. přidat testovací soubory „duplicate-member-name“ a „resource-limit“ typu „byte“, které nelze vyjádřit pomocí běžné serializace typu „JSON“;
7. definovat testy bezztrátového přenosu mezi implementacemi;
8. určit, které možnosti rozšíření mohou být uvedeny v obálce „`omi`“;
9. sladit rekonstrukci externě umístěných částí kontejneru s dalším návrhem na stránce `OMI-SPEC-330`;
10. definovat profily archivační stálosti a podpisů, aniž by bylo nutné používat síťové rozlišení.

## 28. Historie změn

| Verze | Datum | Změna |
|---|---|---|
| 0.2.0 | 5. září 2026 | Přepracování návrhu s využitím standardní šablony specifikace; oddělení logického formátu od architektury kontejneru; definování tříd shody a profilů, stabilních požadavků, vyjednávání verze, analýzy, serializace, validace, rozšíření, výměny historie, migrace, bezpečnosti, přístupnosti a internacionalizace; zveřejněno schéma JSON a počáteční testovací data. |
| 0.1.0 | 4. 7. 2026 | První předběžný návrh pod kanonickým identifikátorem `OMI-SPEC-320`, převzatý ze staršího `OMI-SPEC-011`. |

## 29. Poděkování

Tato specifikace zahrnuje příklady implementace z webu Open Manuscript Studio a výsledky práce komunity Open Manuscript Initiative v oblastech architektury, verzování, validace, identifikace, modelu dokumentu a kontejnerů.
