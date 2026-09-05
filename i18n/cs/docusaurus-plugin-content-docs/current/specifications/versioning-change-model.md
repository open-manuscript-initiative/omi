---
id: versioning-change-model
title: OMI-SPEC-160 — Model verzí a změn
sidebar_label: Verzování a model změn
description: Normativní model pro neměnné revize, sady změn, události změn, větve, sloučení, konflikty, vrácení změn, původ a výměnu vědeckých objektů se zachováním historie.
keywords:
  - Open Manuscript Initiative
  - OMI
  - versioning
  - revision history
  - change events
  - provenance
  - branching
  - merging
---

# OMI-SPEC-160 — Model verzí a změn

## Metadata dokumentu

| Pole | Hodnota |
|---|---|
| Identifikátor | `OMI-SPEC-160` |
| Název | Model verzí a změn |
| Verze | `0.1.0` |
| Stav | Návrh |
| Typ dokumentu | Normativní |
| Normativní jazyk | Angličtina |
| Redaktoři | Správci OMI |
| Poslední aktualizace | 6. 8. 2026 |
| Nahrazuje | Žádné |
| Nahrazeno | Žádné |
| Závisí na | `OMI-SPEC-100`, `OMI-SPEC-120`, `OMI-SPEC-140`, `OMI-SPEC-150` |
| Používá | `OMI-SPEC-170`, `OMI-SPEC-190`, `OMI-SPEC-200`, `OMI-SPEC-230`, `OMI-SPEC-310`, `OMI-SPEC-320`, `OMI-SPEC-340` |
| Schémata | Žádná zveřejněna |
| Profily | Historie revizí jádra; Vytváření větví a slučování; Výměna snímků |
| Stav implementace | [OMI Implementation Status Matrix](../governance/implementation-status-matrix.md) |
| Systém sledování chyb | Problémy v repozitáři Open Manuscript Initiative |

## 1. Abstrakt

Tato specifikace definuje, jak protokol pro správu verzí (Open Manuscript Initiative) reprezentuje historii vědeckých objektů. Poskytuje společný model pro neměnné revize, atomické sady změn, sémantické události změn, nadřazené vztahy, snímky, větve, sloučení, konflikty, vrácení změn, kontrolní body, označení verzí, autorství, provenienci, důkazy o integritě a výměnu s ohledem na historii.

Tento model rozlišuje mezi proměnlivým pracovním stavem a neměnnou revizí, mezi revizí vědeckého objektu a verzí softwaru či schématu a mezi vrácením zpět a destruktivním přepisováním historie. Umožňuje implementacím využívat event sourcing, ukládání snímků, databázové transakce, úložiště adresované obsahem, operační transformaci, bezkonfliktní replikované datové typy nebo jiné interní techniky, za předpokladu, že exportovaná historie OMI zachovává sémantiku požadovanou touto specifikací.

Specifikace podporuje lineární i rozvětvené historie, práci v režimu offline, více přispěvatelů, částečnou výměnu historie, označení smazaných položek, redigování dat s omezeným přístupem a deterministickou identifikaci výsledků sloučení. Nepředepisuje však algoritmus pro spolupráci v reálném čase, databázový engine, návrh uživatelského rozhraní, model oprávnění ani univerzální formát textových rozdílů.

## 2. Status tohoto dokumentu

Tento dokument je **návrhem** specifikace protokolu pro přenos dat v reálném čase (Open Manuscript Initiative).

Datový model, názvy vlastností, profily shody, slovník operací a požadavky na zpracování se mohou před verzí 1.0 změnit tak, že již nebudou kompatibilní. Implementace, které prohlašují podporu, MUSÍ uvést přesnou verzi specifikace nebo nezměnitelný commit, který byl použit.

Tento návrh aktivuje identifikátor vyhrazený pro model verzí a změn v registru specifikací OMI. Diskuse a návrhy na změny jsou sledovány v repozitáři Open Manuscript Initiative.

## 3. Shoda

### 3.1 Třídy shody

Tato specifikace definuje pět implementačních tříd:

- **Producent historie shody:** vytváří nebo exportuje revize, sady změn, události změn, snímky, větve nebo záznamy o sloučení.
- **Kompatibilní spotřebitel historie:** načítá, ukládá, zobrazuje, transformuje nebo uchovává data o verzích.
- **Editor zachovávající historii:** upravuje entity typu OMI a zároveň zaznamenává příslušnou revizi a sémantiku změn.
- **Sloučení v souladu s historií:** spojuje odlišné revizní linie a zaznamenává základny sloučení, konflikty, jejich řešení a výsledné revize.
- **Validátor shody s historií:** porovnává údaje o verzích se strukturálními a sémantickými požadavky této specifikace.

Jedna implementace MŮŽE patřit do více než jedné třídy.

### 3.2 Profily shody

Prohlášení o shodě MUSÍ uvádět alespoň jeden profil.

#### Profil historie revizí jádra

Podporuje neměnnou identifikaci revize, vztahy k nadřazeným položkám, sady změn, události změn, přiřazení aktérů, časová razítka a výběr hlavy pro lineární historii.

#### Profil větvení a slučování

Podporuje více hlav, pojmenované i nepojmenované větve, výběr společného předka, záznamy o sloučení, znázornění konfliktů, záznamy o vyřešení konfliktů a revize výsledků s více rodiči.

#### Profil služby Snapshot Exchange

Podporuje výměnu aktuálního stavu vědeckého objektu bez úplné historie událostí, přičemž výslovně uvádí rozsah vynechané historie a revizi, kterou daný snímek představuje.

Implementace Snapshot Exchange NESMÍ naznačovat, že balíček obsahující pouze snímek obsahuje úplnou historii původu.

### 3.3 Obecná shoda

Implementace, která splňuje specifikaci, MUSÍ splňovat všechny příslušné požadavky typu **MUSÍ** a **NESMÍ** pro svou deklarovanou třídu a profil.

Volitelná funkce MŮŽE být vynechána. Je-li implementována, MUSÍ splňovat všechny požadavky stanovené pro tuto funkci.

Prohlášení o shodě BY MĚLO obsahovat následující údaje:

- název a verze implementace;
- `OMI-SPEC-160` verze;
- deklarovaná implementační třída nebo třídy;
- uvedený profil nebo profily;
- podporované typy operací změn;
- podporované režimy ukládání historie;
- funkce zajištění integrity a redigování;
- známá omezení;
- verze pro testování shody, bude-li k dispozici.

### 3.4 Základní požadavky

**REQ-VCH-001:** Revize MUSÍ mít globálně jedinečný identifikátor nebo identifikátor odolný proti kolizím v daném kontextu a MUSÍ identifikovat verzi entity, ke které patří.

**REQ-VCH-002:** Potvrzená revize MUSÍ být neměnná. Oprava potvrzené historie MUSÍ být vyjádřena pozdější revizí, záznamem o nahrazení, záznamem o úpravě nebo jinou explicitní událostí; NESMÍ potichu nahradit potvrzenou revizi.

**REQ-VCH-003:** Každá revize, která není kořenová, MUSÍ identifikovat alespoň jednu nadřazenou revizi. Výsledek sloučení MUSÍ identifikovat každou přímou nadřazenou revizi, která byla do výsledku začleněna.

**REQ-VCH-004:** Sada změn MUSÍ identifikovat cílovou entitu, základní revizi nebo revize, aktéra nebo odpovědnou osobu (jsou-li známy), čas vytvoření a obsažené události změn.

**REQ-VCH-005:** Událost změny MUSÍ identifikovat operaci a cíl. Cíl MUSÍ být dostatečně stabilní, aby bylo možné rozlišit dotčený vědecký objekt nebo vlastnost, aniž by se spoléhalo výhradně na vykreslenou polohu.

**REQ-VCH-006:** Tvůrce MUSÍ rozlišovat revize vědeckého objektu od verzí specifikací, verzí schémat, verzí aplikací, vydání publikací a pro člověka čitelných označení verzí.

**REQ-VCH-007:** Zrušení MUSÍ vytvořit novou revizi, která zaznamená revizi nebo sadu změn, proti nimž je zrušení namířeno. NESMÍ vymazat zrušenou revizi z historie.

**REQ-VCH-008:** Při odstranění adresovatelného vědeckého objektu MUSÍ být zachován záznam o odstranění (tombstone) nebo ekvivalentní záznam o provenienci, pokud profil historie vyžaduje sledovatelnost odstranění.

**REQ-VCH-009:** Změny pořadí přispěvatelů, přesuny objektů a změna pořadí sbírek MUSÍ být znázorněny jako sémantika řazení nebo přesunu, nikoli jako nesouvisející odstranění a opětovné vytvoření, pokud je zachována identita objektu.

**REQ-VCH-010:** Záznam o sloučení MUSÍ identifikovat zdrojovou linii, cílovou linii, základ nebo základy sloučení, revizi výsledku a každý nevyřešený či vyřešený konflikt, o kterém má osoba provádějící sloučení informace.

**REQ-VCH-011:** Spotřebitel NESMÍ bez upozornění přijmout revizi, jejíž deklarované nadřazené revize chybí, pokud není historie výslovně označena jako částečná nebo mělká.

**REQ-VCH-012:** Export částečné historie MUSÍ uvádět své ohraničení, vynechané předky a hlavní revizi, kterou reprezentuje.

**REQ-VCH-013:** Obsah změn s omezeným přístupem NESMÍ být zveřejněn prostřednictvím serializace veřejné historie, pokud příslušná politika přístupu nezakládá oprávnění k jeho zveřejnění.

**REQ-VCH-014:** Editor zachovávající historii MUSÍ každou potvrzenou sadu změn přiřadit k identitě agenta, identitě služby nebo explicitnímu označení neznámého agenta v souladu s dokumentem `OMI-SPEC-150`.

**REQ-VCH-015:** Implementace MUSÍ zachovat události rozšíření a data neznámých operací v souladu s příslušnými pravidly pro rozšíření a kompatibilitu definovanými v dokumentu „OMI“, nebo výslovně nahlásit jejich ztrátu.

**REQ-VCH-016:** Časová razítka revizí MUSÍ být vyjádřena jako strojově čitelné časové okamžiky s explicitním časovým posunem nebo označením UTC. Implementace NESMÍ používat časová razítka sama o sobě jako identifikátory revizí ani jako důkaz kauzálního pořadí.

**REQ-VCH-017:** Státní hash, je-li poskytnut, MUSÍ uvádět hashovací algoritmus a rozsah kanonizace. Uživatelé NESMÍ považovat hodnoty hashů vygenerované podle různých, nedeklarovaných pravidel kanonizace za ekvivalentní.

**REQ-VCH-018:** Sada změn deklarovaná jako atomická MUSÍ být buď provedena v plném rozsahu, nebo selhat, aniž by došlo k odhalení částečně potvrzeného výsledku.

## 4. Rozsah

Tato specifikace definuje:

- identita a neměnnost revizí;
- vztahy mezi rodiči a dětmi a revizní grafy;
- proměnlivé pracovní stavy a potvrzené stavy;
- sady atomových změn;
- události sémantických změn a kategorie operací;
- identifikace cílových objektů a vlastností, u nichž došlo ke změnám;
- určení autora a původ změn;
- větve, hlavice, rozvětvení a kontrolní body;
- sloučení, základny sloučení, konflikty a jejich řešení;
- změny, restaurování, náhrobky a nahrazení;
- snímky a vztahy mezi snímky a historií;
- částečná a povrchní výměna historických informací;
- státní souhrny a důkazy o neporušenosti;
- redigování s ohledem na ochranu soukromí a omezená historie;
- chování při ověřování a uchovávání.

### 4.1 Mimo rozsah

Tato specifikace nedefinuje:

- zásady sémantického verzování pro specifikace OMI;
- verze aplikace Open Manuscript Studio nebo jiná implementace;
- požadovanou databázi, transakční protokol nebo úložný modul;
- požadovaný systém správy verzí;
- univerzální syntaxe pro porovnávání textu založená na řádcích;
- protokoly pro kurzor v reálném čase, přítomnost nebo vnímání;
- konkrétní algoritmus operační transformace nebo CRDT;
- oprávnění k přístupu k pracovnímu prostoru nebo rozhodnutí o udělení oprávnění;
- přechody stavů v rámci vzájemného hodnocení;
- pravidla překladové ekvivalence nebo synchronizace;
- právně platné elektronické podpisy;
- doby uchovávání archivních dokumentů;
- Zásady vydávání publikací.

Verzování specifikací se řídí zásadami verzování na stránce OMI. Oprávnění spadají pod `OMI-SPEC-190`. Historie revizí spadá pod `OMI-SPEC-200`. Vztahy mezi překlady spadají pod `OMI-SPEC-170`. Vydání a výstupy publikací spadají pod `OMI-SPEC-230` a `OMI-SPEC-240`.

## 5. Terminologie

Platí dokument „[OMI Terminology and Definitions](../governance/terminology.md)“.

### 5.1 Entita s verzí

Entita typu „OMI“, jejíž po sobě jdoucí potvrzené stavy jsou reprezentovány revizemi.

Entitou s verzí může být rukopis, část, blok, anotace, bibliografický záznam, příspěvek, záznam metadat, úloha publikace nebo jiný identifikovatelný vědecký objekt.

### 5.2 Provozní stav

Změnitelný stav implementace, který dosud nebyl uložen jako revize.

Pracovní stav MŮŽE obsahovat nepotvrzené lokální operace, dočasné chyby při ověřování, stav kurzoru nebo informace specifické pro dané rozhraní. Není automaticky součástí přenositelné historie OMI.

### 5.3 Revize

Neměnný záznam identifikující jeden potvrzený stav v historii entity s verzemi.

Revize odkazuje na nulový nebo libovolný počet nadřazených revizí a může odkazovat na sady změn, snímek, souhrn stavu, štítky kontrolních bodů a původ.

### 5.4 Revize kořenového adresáře

Revize, která v zobrazené historii nemá žádnou nadřazenou revizi.

Revize kořenového záznamu může představovat skutečné vytvoření nebo nejstarší zahrnutou revizi v krátké historii. Toto rozlišení MUSÍ být uvedeno.

### 5.5 Revize hlavy

Revize, která je aktuálně vybrána jako nejnovější stav větve, linie nebo exportovaného zobrazení historie.

Revizní graf může mít více než jednu hlavu.

### 5.6 Sada změn

Soubor jedné nebo více událostí změn, které byly potvrzeny jako jedna logická a případně atomická jednotka.

Sada změn může odpovídat uživatelské akci, hromadné úpravě, operaci importu, automatické transformaci, řešení sloučení nebo události související s údržbou systému.

### 5.7 Událost změny

Prohlášení s uvedením původu, že definovaná operace měla vliv na definovaný cíl v rámci entity s verzí.

Událost změny zaznamenává sémantický záměr. Nemusí zaznamenávat každý stisk klávesy ani každou změnu uvnitř implementace.

### 5.8 Provoz

Akce reprezentovaná událostí změny, jako je vytvoření, aktualizace, nahrazení, smazání, obnovení, přesun, změna pořadí, připojení, odpojení nebo označení.

### 5.9 Snímek

Sériové znázornění stavu entity s verzí, který je přiřazen ke konkrétní revizi.

Snímek může urychlit načítání nebo umožnit výměnu pouze na základě snímků. Nenahrazuje vztahy mezi revizemi ani nemění původ změn, pokud je vyžadována úplná historie.

### 5.10 Graf revizí

Směrovaný acyklický graf tvořený revizemi a vztahovými vazbami.

Graf revizí, který splňuje požadavky, NESMÍ obsahovat revizi, která je jeho vlastním předkem.

### 5.11 Odbočka

Pojmenovaný nebo nepojmenovaný pohyblivý odkaz na revizi „head“, která představuje jednu vývojovou větev.

Identifikátor větve je operační metadata a NESMÍ být zaměňován s identifikátorem revize.

### 5.12 Vidlice

Stav, kdy dvě nebo více revizí pocházejí ze stejné dřívější revize, aniž by jedna z nich byla předchůdkyní druhé.

### 5.13 Sloučení

Postup a zaznamenaný výsledek sloučení dvou či více odlišných revizních linií.

### 5.14 Sloučení základny

Společný předek, který slouží k porovnání a propojení odlišných dějin.

### 5.15 Konflikt

Stav, ve kterém nelze změny automaticky kombinovat bez výběru, transformace nebo výslovného potvrzení.

### 5.16 Řešení konfliktů

Rozhodnutí nebo transformace s uvedením původu, které vyřeší konflikt v rámci výsledku sloučení.

### 5.17 Vrátit zpět

Nová změna, která ruší dřívější revizi nebo sadu změn zcela nebo částečně, přičemž zachovává původní historii.

### 5.18 Náhrobek

Trvalý minimální záznam o tom, že adresovatelný objekt existoval a byl smazán, oddělen nebo stažen.

### 5.19 Kontrolní bod

Stabilní odkaz nebo označení přiřazené k revizi za účelem posouzení, předložení, schválení, zveřejnění, uchování nebo jiného milníku v pracovním postupu.

### 5.20 Štítek s datem vydání

Člověkem čitelný popisek, například `submission-2` nebo `accepted-manuscript`, přiřazený k revizi.

Štítek vydání není identifikátorem revize a neznamená sémantické verzování.

### 5.21 Částečná anamnéza

Zobrazení historie, ve kterém chybí jeden nebo více předků, událostí, momentálních snímků, větví nebo omezených záznamů.

### 5.22 Přehled států

Kryptografický nebo nekryptografický souhrn vypočítaný na základě deklarovaného kanonického znázornění stavu revize.

## 6. Principy návrhu

Tato část má informativní charakter.

- **Neměnná historie potvrzených událostí:** potvrzené události jsou opravovány pozdějšími událostmi, nikoli tichým přepisováním.
- **Stabilní identita objektu:** úpravy mění stav, aniž by zbytečně měnily identitu vědeckého objektu.
- **Sémantické události v záznamech stisků kláves:** přenositelná historie zaznamenává spíše vědecké operace než šum způsobený implementací.
- **Explicitní kauzalita:** nadřazené vztahy a základny sloučení mají kauzální význam; časová razítka je nenahrazují.
- **Přiřazení nezávislé na účtu:** odkazy na autorství se vztahují k přenositelným agentům, nikoli k autentizačním klíčům.
- **Výměna s ohledem na ztráty:** jsou deklarovány vynechané záznamy a nepodporované operace.
- **Neutralita algoritmu:** interní techniky typu Git, založené na událostech, databázové, OT nebo CRDT se mohou lišit, přičemž však vytvářejí interoperabilní důkazy typu „OMI“.
- **Ochrana soukromí již od návrhu:** veřejná historie a omezená provozní auditní data lze oddělit.
- **Reprodukovatelné stavy:** snímky, události a souhrny by měly umožňovat ekvivalentní rekonstrukci, pokud to zvolený profil vyžaduje.
- **Zachování nejednoznačnosti:** nevyřešené rozpory a neznámý rodokmen jsou zde zachyceny, místo aby se o nich činily domněnky.

## 7. Přehled modelu

```text
Versioned entity
    ├── Working state (mutable, implementation-local)
    └── Revision graph
          ├── Revision
          │     ├── parentRevisionIds[]
          │     ├── changeSetIds[]
          │     ├── snapshotRef?
          │     ├── stateDigest?
          │     └── provenance
          ├── Change set
          │     ├── baseRevisionIds[]
          │     ├── events[]
          │     ├── actorId
          │     └── atomicity
          ├── Branch
          │     └── headRevisionId
          └── Merge record
                ├── sourceRevisionIds[]
                ├── baseRevisionIds[]
                ├── conflicts[]
                ├── resolutions[]
                └── resultRevisionId
```

Model nevyžaduje, aby každá revize obsahovala kompletní snímek. Historie může využívat:

- úložiště určené výhradně pro události;
- úložiště pouze pro snímky s deklarovanými limity historie;
- pravidelné snímky a mezitímní události;
- externě odkazované snímky nebo toky událostí;
- konzervační balíček obsahující obojí.

Zvolené znázornění MUSÍ splňovat deklarovaný profil shody.

## 8. Různé pojetí verzí

Správná implementace MUSÍ tyto pojmy jasně odlišovat.

| Koncept | Příklad | Účel |
|---|---|---|
| Verze specifikace OMI | `OMI-SPEC-160@0.1.0` | Určuje verzi normativního modelu |
| Verze schématu nebo formátu | `omi-manuscript-0.2` | Určuje pravidla serializace |
| Verze aplikace | `Open Manuscript Studio 0.1.0-alpha.2` | Údaj o verzi softwaru |
| Identifikátor revize vědeckého objektu | `urn:uuid:...` | Identifikuje jeden neměnný potvrzený stav |
| Název pobočky | `main`, `translation-hu` | Určuje obor činnosti |
| Kontrolní bod nebo štítek k uvolnění | `submitted-2026-08-06` | Čitelný značka pracovního postupu |
| Vydání nebo verze publikace | `Version of Record` | Označení oblasti publikace |

Implementace NESMÍ odvodit jednu z těchto hodnot z jiné, pokud příslušná specifikace tento odvození výslovně nedefinuje.

## 9. Základní datový model

### 9.1 Kontejner s historií verzí

Kontejner historie verzí přiřazuje entitu s verzemi k revizím, které tato entita představuje, a k metadatům o její historii.

Doporučená pole:

| Pole | Kardinalita | Význam |
|---|---:|---|
| `modelVersion` | 1 | Přesná verze `OMI-SPEC-160` |
| `entityId` | 1 | Identifikátor entity s verzí |
| `historyId` | 1 | Identifikátor tohoto zobrazení historie |
| `headRevisionIds` | 1..n | Aktuální počet zobrazených hlav |
| `revisions` | 1..n | Zahrnuté záznamy o revizích |
| `changeSets` | 0..n | Zahrnuté záznamy o změnách |
| `branches` | 0..n | Odkazy na větve |
| `merges` | 0..n | Sloučit důkazy |
| `historyScope` | 1 | `complete`, `partial`, `shallow` nebo `snapshot-only` |
| `boundaryRevisionIds` | 0..n | Nejstarší zahrnuté revize v případě, že není uveden původ |
| `omissionNotice` | 0..1 | Vysvětlení vynechané historie v podobě srozumitelné pro člověka i stroj |

Producent kompletní genealogie MUSÍ nastavit parametr „`historyScope`“ na hodnotu „`complete`“ pouze v případě, že jsou zahrnuti všichni známí předci požadovaní deklarovaným profilem nebo je možné je dohledat.

### 9.2 Revize

Záznam o revizi BY MĚL obsahovat:

| Pole | Kardinalita | Význam |
|---|---:|---|
| `id` | 1 | Neměnný identifikátor revize |
| `entityId` | 1 | Identifikátor entity s verzí |
| `parentRevisionIds` | 0..n | Přímí rodiče |
| `changeSetIds` | 0..n | Změny, které vedly k této revizi |
| `createdAt` | 1 | Čas zaúčtování |
| `createdBy` | 1 | Agent nebo explicitní značka neznámého agenta |
| `committedBy` | 0..1 | Služba nebo agent, který revizi provedl |
| `message` | 0..1 | Srozumitelné shrnutí |
| `snapshotRef` | 0..1 | Snímek spojený s revizí |
| `stateDigest` | 0..1 | Metadata souhrnu a kanonizace |
| `checkpointLabels` | 0..n | Štítky pracovního postupu nebo vydání |
| `supersedesRevisionIds` | 0..n | Vztahy explicitní korekce nebo nahrazení |
| `extensions` | 0..n | Údaje o rozšířeních v jmenných prostorech |

Revize kořenového záznamu BY MĚLA uvádět, zda se jedná o skutečné vytvoření entity, nebo pouze o hranici mělké historie.

### 9.3 Identifikátor revize

Identifikátor revize MUSÍ zůstat neměnný po celou dobu existence záznamu v historii.

Výrobce MŮŽE použít:

- UUID nebo URN založený na UUID;
- identifikátor s adresováním podle obsahu;
- další URI odolný proti kolizím;
- identifikátor vázaný na konkrétní implementaci v rámci balíčku, jehož rozsah platnosti je jednoznačný.

Časové razítko, pořadové číslo, index pole, název větve nebo popisný název NESMÍ být jediným identifikátorem revize.

### 9.4 Vztahy s rodiči

Vztahy mezi rodiči určují kauzalitu revize.

- revize objektu má obvykle nulový počet rodičů;
- běžná lineární revize má obvykle jednoho nadřazeného prvku;
- revíze sloučení má dva nebo více rodičů;
- Importovaná mělká hranice může mít nulový počet zahrnutých rodičů a zároveň deklarovat vynechané předky.

Validátor MUSÍ zamítnout reprezentovaný nadřazený cyklus.

### 9.5 Sada změn

Sada změn BY MĚLA obsahovat:

| Pole | Kardinalita | Význam |
|---|---:|---|
| `id` | 1 | Identifikátor sady změn |
| `entityId` | 1 | Cílová entita s verzí |
| `baseRevisionIds` | 1..n | Stát nebo státy, pro které byly změny vytvořeny |
| `events` | 1..n | Seřazené události sémantických změn |
| `actorId` | 1 | Odpovědný činitel nebo neznámý ukazatel |
| `performedBy` | 0..1 | Služba nebo softwarový agent |
| `createdAt` | 1 | Čas vytvoření |
| `committedAt` | 0..1 | Čas potvrzení |
| `intent` | 0..1 | Účel definovaný člověkem nebo slovníkem |
| `message` | 0..1 | Srozumitelné shrnutí |
| `atomic` | 1 | Zda musí být sada aplikována atomicky |
| `correlationId` | 0..1 | Seskupuje související změny napříč entitami nebo službami |
| `causedBy` | 0..n | Předchozí události, úlohy, importy nebo požadavky |
| `visibility` | 0..1 | Klasifikace zpřístupnění: veřejná nebo omezená |

Pořadí událostí v rámci sady změn MUSÍ být zachováno, pokud toto pořadí ovlivňuje výsledek.

### 9.6 Událost změny

Událost změny BY MĚLA obsahovat:

| Pole | Kardinalita | Význam |
|---|---:|---|
| `id` | 1 | Identifikátor události |
| `operation` | 1 | Typ operace |
| `target` | 1 | Deskriptor stabilního cíle |
| `before` | 0..1 | Předchozí hodnota nebo hash v případě zachování |
| `after` | 0..1 | Nová hodnota nebo hash při zachování |
| `payload` | 0..1 | Údaje specifické pro operaci |
| `sequence` | 0..1 | Pořadí v rámci sady změn |
| `actorId` | 0..1 | Přepsání aktéra pro konkrétní událost |
| `occurredAt` | 0..1 | Čas události, pokud se liší od času sady změn |
| `reason` | 0..1 | Důvod definovaný člověkem nebo slovníkem |
| `visibility` | 0..1 | Klasifikace zveřejnění |
| `extensions` | 0..n | Údaje o rozšířeních v jmenných prostorech |

Producent MŮŽE z důvodů ochrany soukromí, úspory místa nebo z algoritmických důvodů vynechat hodnoty „`before`“ nebo „`after`“, MUSÍ však zachovat dostatek informací k tomu, aby splnil svůj deklarovaný profil, a MUSÍ deklarovat nevratné vynechání v případech, kdy je tím ovlivněna rekonstrukce.

### 9.7 Deskriptor cíle

Popisovač cíle MUSÍ identifikovat dotčený objekt nebo vlastnost pomocí jedné nebo více stabilních složek:

- ID cílové entity;
- cílové ID vědeckého objektu;
- cesta k vlastnosti nebo poli;
- identifikátor kolekce;
- kotva nebo selektor v souladu s `OMI-SPEC-110`;
- prostor jmen rozšíření a název vlastnosti.

Renderované souřadnice, pozice na obrazovce, čísla řádků nebo dočasné indexy editoru MOHOU být zahrnuty jako vodítka, ale NESMÍ být jediným přenositelným cílem.

### 9.8 Slovní zásoba týkající se provozu

Základní operační terminologie je následující:

| Operace | Význam |
|---|---|
| `create` | Vytvoření nového identifikovatelného objektu |
| `update` | Úprava jedné nebo více vlastností bez změny identifikátoru objektu |
| `replace` | Nahrazení hodnoty nebo reprezentace objektu při deklaraci zachování identity |
| `delete` | Odstranění objektu nebo vlastnosti a vytvoření požadovaných důkazů o odstranění |
| `restore` | Obnovení dříve smazaného nebo odpojeného objektu |
| `move` | Přesunutí existujícího objektu mezi kontejnery nebo umístěními |
| `reorder` | Změna pořadí v seřazené kolekci |
| `attach` | Přidat existující vztah mezi objekty nebo členství |
| `detach` | Odstranění vztahu nebo členství bez smazání objektu |
| `annotate` | Přidat vysvětlení změny, redakční poznámku nebo strojově čitelné odůvodnění |
| `transform` | Použít deklarovanou automatickou nebo ruční transformaci |
| `redact` | Omezení nebo odstranění citlivého obsahu při zachování důkazů o redigování |
| `resolve-conflict` | Zaznamenání řešení konfliktu při sloučení |
| `revert` | Zrušení předchozí revize, sady změn nebo události |

Rozšíření MOHOU definovat další operace pomocí identifikátorů s jmenným prostorem.

Bezztrátoví spotřebitelé MUSÍ zachovat neznámou operaci. Spotřebitel, který není schopen ji provést, MUSÍ nahlásit nepodporovanou operaci a NESMÍ bez upozornění tvrdit, že dosáhl ekvivalentního rekonstruovaného stavu.

## 10. Zpracování zachycení změn a potvrzení

### 10.1 Úpravy v provozním stavu

Implementace MŮŽE shromažďovat podrobné operace rozhraní v proměnlivém pracovním stavu.

Před závazkem MŮŽE:

- sloučit opakovaná stisknutí kláves do jedné sémantické textové náhrady;
- seskupit úpravy souvisejících polí do jednoho atomického souboru změn;
- odstranit dočasné změny bez účinku;
- převést operace specifické pro danou implementaci na přenositelné operace;
- ověřit identity cílů a revize základu.

Závazné ztvárnění MUSÍ zachovat výsledný vědecký význam a deklarovaný původ.

### 10.2 Postup potvrzení

Editor zachovávající historii BY MĚL provést následující kroky:

1. určit entitu s verzí a aktuální základní revizi;
2. shromažďovat nebo odvozovat události sémantických změn;
3. ověřit cíle událostí a provozní data;
4. přiřadit sadu změn k agentovi nebo k explicitnímu neznámému označení;
5. uplatňovat pravidla atomity;
6. vytvořit nový stav entity;
7. přiřadit neměnný identifikátor revize;
8. zaznamenávat vztahy k rodičům;
9. vypočítat souhrn stavu, je-li tato funkce podporována;
10. aktualizovat konec vybrané větve;
11. uložit revizi, sadu změn a požadovaná data snímku nebo události jako jednu transakci, kterou lze obnovit.

Neúspěšný atomický commit NESMÍ vytvořit novou revizi.

### 10.3 Změny v příkazech No-op

Producent BY SE MĚL vyvarovat zařazení revize, která nemá žádný sémantický význam, ledaže by tato revize zaznamenávala významný kontrolní bod pracovního postupu, výsledek ověření, externí synchronizaci, podpis nebo událost související s uchováním.

Revize typu „no-op“ MUSÍ uvádět svůj účel.

### 10.4 Změny týkající se více subjektů

Jedna akce uživatele může mít dopad na několik entit s verzemi.

Implementace MOHOU:

- používat samostatné sady změn propojené společným korelačním ID;
- použít záznam transakce, který zahrnuje historii několika entit;
- modelovat souhrnný rukopis jako entitu s verzemi.

Zvolený přístup MUSÍ jasně vymezit hranice částečného selhání a atomickosti.

## 11. Snímky a rekonstrukce

### 11.1 Přiřazení snímku

Snímek MUSÍ uvádět číslo revize, kterou představuje.

Snímek by MĚL obsahovat nebo odkazovat na:

- ID entity;
- ID revize;
- verze schématu nebo formátu;
- typ média serializace;
- informace o shrnutí a kanonizaci, jsou-li k dispozici;
- čas vytvoření;
- tvůrce nebo služba pro generování;
- prohlášení o úplnosti historických údajů.

### 11.2 Rekonstrukce

Producent historie revizí jádra, který tvrdí, že historii lze rekonstruovat, MUSÍ poskytnout dostatečný počet snímků stavu a událostí, aby bylo možné odvodit každý z tvrzených rekonstruovatelných stavů revize.

Spotřebitel BY MĚL ověřit, zda:

- základy událostí odpovídají očekávanému stavu nadřazeného prvku;
- operační cíle existují nebo mají deklarovanou sémantiku vytvoření;
- sady atomických změn se uplatňují v plném rozsahu;
- výsledné souhrny se shodují s deklarovanými souhrny stavu, je-li tato funkce podporována.

### 11.3 Výměna pouze na základě snímku

Balíček služby Snapshot Exchange MŮŽE neobsahovat kompletní historii.

MUSÍ obsahovat:

- ID zastupovaného subjektu;
- zadané ID revize;
- verze schématu nebo formátu;
- `historyScope: snapshot-only`;
- oznámení o opomenutí;
- odkazy na známé nadřazené revize nebo zdrojové revize, jsou-li k dispozici.

Spotřebitel, který využívá pouze momentální snímky, NESMÍ vymýšlet chybějící revize ani naznačovat úplný původ autorství.

### 11.4 Zhutnění

Implementace MŮŽE zkomprimovat interní historii z důvodu úspory místa nebo zvýšení výkonu.

Zhuštění NESMÍ bez upozornění změnit tvrzení o úplné historii na tvrzení o neúplné historii.

Při odstranění událostí nebo snímků MUSÍ výsledná reprezentace:

- vyhlásit novou hranici historického území;
- zachovat identitu revize;
- zachovat požadované odkazy na sloučení a kontrolní body;
- uchovávat důkazy o redigování nebo zkrácení;
- uveďte, které možnosti rekonstrukce byly ztraceny.

## 12. Pobočky a vedoucí

### 12.1 Záznam o pobočce

Záznam o pobočce BY MĚL obsahovat:

| Pole | Kardinalita | Význam |
|---|---:|---|
| `id` | 1 | Identifikátor stabilní větve |
| `name` | 0..1 | Člověkem čitelný název |
| `entityId` | 1 | Entita s verzemi |
| `headRevisionId` | 1 | Aktuální hlava větve |
| `baseRevisionId` | 0..1 | Revize, ze které byla větev vytvořena |
| `createdAt` | 1 | Čas vytvoření |
| `createdBy` | 1 | Agent nebo služba |
| `status` | 1 | `active`, `merged`, `archived` nebo `deleted` |
| `purpose` | 0..1 | Překlad, recenze, experiment, oprava nebo jiný záměr |

Změna vedoucího větve NESMÍ změnit identitu ani obsah revize, na kterou se odkazuje.

### 12.2 Oddělené hlavy

Historie MŮŽE identifikovat revizi hlavního větve bez odbočky.

Samostatná hlavička MUSÍ zůstat referencí pro revizi a NESMÍ být zařazena do řady jako vymyšlená větev.

### 12.3 Odstranění větve

Při smazání nebo archivaci větve NESMÍ dojít ke smazání revizí, které zůstávají dostupné prostřednictvím zachované historie nebo v souladu s požadavky na uchovávání.

## 13. Sloučení modelu

### 13.1 Sloučení záznamu

Záznam o sloučení by měl obsahovat:

| Pole | Kardinalita | Význam |
|---|---:|---|
| `id` | 1 | Identifikátor sloučeného záznamu |
| `entityId` | 1 | Entita s verzemi |
| `sourceRevisionIds` | 2..n | Kombinace divergentních hlav |
| `baseRevisionIds` | 1..n | Vybraný společný předek nebo předci |
| `resultRevisionId` | 1 | Výsledek sloučení |
| `performedBy` | 1 | Agent nebo služba |
| `performedAt` | 1 | Čas sloučení |
| `strategy` | 0..1 | Deklarovaná metoda sloučení |
| `conflicts` | 0..n | Zjištěné konflikty |
| `resolutions` | 0..n | Použitá rozlišení |
| `message` | 0..1 | Srozumitelné shrnutí |

Revize výsledku MUSÍ uvádět sloučené revize zdrojového kódu jako přímé předchůdce, pokud deklarovaná strategie a profil výslovně nedefinují jiné rovnocenné znázornění.

### 13.2 Výběr základu pro sloučení

Při sloučení MUSÍ být zaznamenán základ nebo základy sloučení, které byly skutečně použity.

Pokud existuje několik platných společných předků, sloučení MŮŽE podle svého algoritmu použít jednoho nebo více z nich, ale po sloučení NESMÍ bez opravného záznamu uvádět jinou základnu.

### 13.3 Automatické sloučení

Automatické sloučení MŮŽE sloučit změny, pokud se jejich cíle a sémantika navzájem neprotiřečí.

Mezi příklady patří:

- úpravy nesouvisejících objektů;
- nezávislá pole metadat;
- uspořádaná vkládání s deterministickými pravidly pro umístění;
- stejné změny;
- změny, pro které existuje registrované pravidlo sloučení specifické pro danou doménu.

Při automatickém slučování MUSÍ být zachováno přiřazení aktérů a původ změn ze všech začleněných linií.

### 13.4 Kategorie konfliktů

Mezi hlavní kategorie konfliktů patří:

- `concurrent-update`;
- `update-delete`;
- `delete-restore`;
- `move-move`;
- `reorder-reorder`;
- `identity-collision`;
- `schema-incompatibility`;
- `extension-unknown`;
- `permission-or-policy`;
- `integrity-failure`;
- `other`.

Záznam o konfliktu BY MĚL obsahovat:

- ID konfliktu;
- kategorie;
- dotčené cíle;
- identifikátory revizí zdrojového kódu;
- základní hodnota nebo hash, je-li k dispozici;
- konkurenční hodnoty nebo operace;
- stav vyřešení;
- ID události po vyřešení;
- vysvětlující zpráva.

### 13.5 Řešení sporů

Řešení sporu MUSÍ být zaznamenáno jako údaj o původu.

Usnesení MŮŽE:

- vyberte jednoho kandidáta;
- sloučit kandidáty;
- vytvořit novou hodnotu;
- uložit obě hodnoty do struktury specifické pro danou doménu;
- odložit přijetí usnesení;
- zamítnout sloučení.

Nevyřešený konflikt NESMÍ být tiše zobrazen jako zcela vyřešený výsledek sloučení.

## 14. Vrácení, obnovení a oprava

### 14.1 Sémantika vrácení změn

Vrácení změny vytvoří novou historii.

Událost vrácení by MĚLA identifikovat:

- revize, sada změn nebo událost, proti které se přijímají protiopatření;
- zda se jedná o úplné nebo částečné vrácení;
- vygenerované inverzní nebo náhradní operace;
- herec a rozum;
- případné konflikty, ke kterým by mohlo dojít, protože pozdější dějiny změnily tytéž cíle.

### 14.2 Obnova

Při obnovení smazaného objektu BY se měl zachovat původní identifikátor objektu, pokud se obnovuje stejný koncepční objekt.

Pokud obnovení místo toho vytvoří nový koncepční objekt, MUSÍ mu být přiřazen nový identifikátor a MĚL BY být zaznamenán vztah k odstraněnému objektu.

### 14.3 Oprava nesprávného původu

Chybné tvrzení týkající se aktéra, časového razítka, zprávy nebo identifikátoru v potvrzené historii MUSÍ být opraveno prostřednictvím explicitního záznamu o opravě nebo nahrazení.

Implementace MOHOU z důvodů ochrany osobních údajů nebo z právních důvodů omezit zobrazení chybné hodnoty, MUSÍ však zachovat autorizované auditní důkazy o opravě, pokud zásady uchovávání dat nevyžadují ověřené zničení.

## 15. Odstranění a „tombstones“

Náhrobek BY MĚL obsahovat:

- ID smazaného objektu;
- typ objektu;
- ID revize odstranění;
- odstranění ID události změny;
- herec nebo služba;
- čas smazání;
- důvod, je-li k dispozici;
- původní vztah rodič–potomek nebo kontejner–objekt, je-li to nezbytné pro interpretaci;
- klasifikace viditelnosti a retence;
- vztah obnovy nebo nahrazení, je-li to relevantní.

Veřejný náhrobní nápis MŮŽE vynechat dříve omezený obsah.

Spotřebitel MUSÍ rozlišovat:

- odstranění objektu;
- odtažitost ve vztahu;
- odstranění větve;
- redakce historických záznamů;
- stažení objektu z publikace;
- fyzické vymazání dat z úložiště.

Tyto akce nejsou zaměnitelné.

## 16. Řazení a pohyb

Strukturované vědecké sbírky obsahují seznamy přispěvatelů, oddíly, bloky, odkazy, obrázky, tabulky a recenzované příspěvky.

Událost opakované objednávky BY MĚLA identifikovat:

- ID kolekce;
- změněno ID objektu;
- údaje o předchozím sousedovi nebo o předchozím místě bydliště, jsou-li známy;
- nový soused nebo odkaz na pozici;
- schéma objednávání;
- revize základny.

Při řazení přenositelných dat by se MĚLA upřednostňovat stabilní sousední nebo pořadová sémantika před přechodnými indexy pole počínajícími od nuly.

Při přesunu mezi kontejnery MUSÍ být zachována identita objektu, pokud příslušný model tento přesun výslovně nepovažuje za kopírování a následné smazání.

## 17. Autorství a původ

### 17.1 Uvedení zprostředkovatele

Změna autorství MUSÍ odkazovat na agenta definovaného podle `OMI-SPEC-150`, případně na explicitní označení „neznámý“, „neidentifikovaný“, „nezveřejněný“ nebo „služební agent“.

Identifikátor účtu aplikace MŮŽE být uchován v omezených provozních auditních datech, NESMÍ však nahradit přiřazení přenositelného agenta v historii vědecké činnosti.

### 17.2 Odpovědnost lidí a softwaru

Změna MŮŽE spočívat v:

- `actorId` (osoba nebo organizace): osoba nebo organizace odpovědná za vědecké rozhodnutí;
- `performedBy`: softwarový agent nebo služba provádějící danou operaci;
- `committedBy`: subjekt nebo služba, která revizi schválila nebo ji trvale uložila;
- `onBehalfOf`: deklarovaný vztah delegace.

Automaticky provedená transformace BY MĚLA identifikovat jak softwarového agenta, tak osobu či proces, který transformaci spustil, jsou-li známy.

### 17.3 Importovaná historie

U importovaných historických záznamů MUSÍ být uveden jejich zdroj a událost, při které byly importovány.

Dovozce NESMÍ označit dovezené revize jako vytvořené v tuzemsku pouze proto, že vytvořil místní skladové záznamy.

Pokud nelze identifikovat zdroje, MĚL BY importér zachovat zdrojové štítky a původ jako nevyřešená tvrzení.

## 18. Čas a kauzální pořadí

Přezkoumání vztahů mezi rodiči a sledu událostí poskytuje důkazy o příčinných souvislostech.

Časová razítka poskytují časové důkazy, mohou však být ovlivněna časovým posunem, úpravami v režimu offline, importem nebo úpravami z důvodu ochrany soukromí.

Spotřebitel NESMÍ usuzovat, že revize A je předchůdcem revize B pouze proto, že revize A má dřívější časové razítko.

Při použití lokálních pořadových čísel MUSÍ být deklarován jejich rozsah.

## 19. Důkazy o integritě

### 19.1 Přehled situace ve státě

Záznam ve státním přehledu BY MĚL obsahovat:

- URI algoritmu nebo jeho registrovaný název;
- hodnota souhrnu;
- metoda nebo profil kanonizace;
- rozsah zahrnutých a nezahrnutých dat;
- typ média nebo verze schématu;
- čas vytvoření;
- služba pro generování.

### 19.2 Integrita událostí a grafů

Implementace MOHOU poskytovat:

- souhrny podle událostí;
- souhrny změn;
- souhrny revizí;
- řetězcové souhrny;
- Merkleovy struktury;
- digitální podpisy;
- důvěryhodné důkazy v podobě časových razítek.

Použití těchto technik samo o sobě neprokazuje autorství, právní platnost ani sémantickou správnost.

### 19.3 Porucha integrity

Spotřebitel, který zjistí nesoulad hashů, chybějící požadovaný rodič, neplatný podpis nebo cyklus v grafu, MUSÍ nahlásit poruchu integrity a NESMÍ tiše označit dotčenou historii jako ověřenou.

## 20. Ochrana soukromí, důvěrnost a redigování

Historie verzí může odhalit smazaný text, osobní údaje, totožnost recenzentů, nezveřejněné výsledky, přístupové tokeny, důvěrnou korespondenci nebo údaje, jejichž zveřejnění je ze zákona omezeno.

Správná implementace MUSÍ podporovat oddělení:

- veřejná historická věda;
- historie úprav viditelná v pracovním prostoru;
- údaje z administrativních auditů s omezeným přístupem;
- tajné údaje týkající se ověřování nebo infrastruktury.

Ověřovací údaje, hash hesel, relace tokeny, soukromé klíče a obnovovací tokeny SE NESMÍ objevit v historickém záznamu na webu OMI.

### 20.1 Záznam o úpravách

Při redakci by MĚLO být zachováno:

- dotčená revize, událost, pole nebo odkaz na užitečná data;
- kategorie důvodu redakční úpravy;
- příslušný orgán nebo zástupce, je-li zveřejnění povoleno;
- doba úpravy;
- zda byl obsah zakryt, zašifrován, omezen v přístupu nebo zničen;
- vliv na rekonstrukci a ověření integrity.

Při veřejné serializaci MOHOU být omezené části dat nahrazeny značkami redigování, přičemž se zachovají bezpečné strukturální údaje.

### 20.2 Povinnosti týkající se oprávněného vymazání a uchovávání údajů

Implementace, které uplatňují povinnosti týkající se vymazání nebo uchovávání údajů, MUSÍ zdokumentovat výsledná časová omezení.

Tato specifikace nestanoví, jaká právní nebo etická norma se na konkrétní záznam vztahuje.

## 21. Serializace

### 21.1 Ilustrativní historický záznam

Následující příklad má pouze informativní charakter a nedefinuje kanonické schéma.

```json
{
  "modelVersion": "OMI-SPEC-160@0.1.0",
  "historyId": "urn:uuid:1798d883-e226-4a39-a601-cadef82aa223",
  "entityId": "urn:uuid:manuscript-001",
  "historyScope": "complete",
  "headRevisionIds": [
    "urn:uuid:revision-002"
  ],
  "revisions": [
    {
      "id": "urn:uuid:revision-001",
      "entityId": "urn:uuid:manuscript-001",
      "parentRevisionIds": [],
      "changeSetIds": ["urn:uuid:changeset-001"],
      "createdAt": "2026-08-06T19:00:00Z",
      "createdBy": "urn:uuid:agent-001",
      "message": "Create manuscript"
    },
    {
      "id": "urn:uuid:revision-002",
      "entityId": "urn:uuid:manuscript-001",
      "parentRevisionIds": ["urn:uuid:revision-001"],
      "changeSetIds": ["urn:uuid:changeset-002"],
      "createdAt": "2026-08-06T19:15:00Z",
      "createdBy": "urn:uuid:agent-001",
      "message": "Revise title"
    }
  ],
  "changeSets": [
    {
      "id": "urn:uuid:changeset-002",
      "entityId": "urn:uuid:manuscript-001",
      "baseRevisionIds": ["urn:uuid:revision-001"],
      "actorId": "urn:uuid:agent-001",
      "createdAt": "2026-08-06T19:14:58Z",
      "atomic": true,
      "events": [
        {
          "id": "urn:uuid:event-002",
          "operation": "update",
          "target": {
            "entityId": "urn:uuid:manuscript-001",
            "property": "title"
          },
          "before": "Untitled manuscript",
          "after": "Version-aware scholarly editing",
          "sequence": 1
        }
      ]
    }
  ]
}
```

### 21.2 Ukázkový záznam sloučení

```json
{
  "id": "urn:uuid:merge-001",
  "entityId": "urn:uuid:manuscript-001",
  "sourceRevisionIds": [
    "urn:uuid:revision-author",
    "urn:uuid:revision-editor"
  ],
  "baseRevisionIds": ["urn:uuid:revision-common"],
  "resultRevisionId": "urn:uuid:revision-merged",
  "performedBy": "urn:uuid:agent-editor",
  "performedAt": "2026-08-06T20:00:00Z",
  "strategy": "three-way-semantic",
  "conflicts": [
    {
      "id": "urn:uuid:conflict-001",
      "category": "concurrent-update",
      "targets": [
        {
          "entityId": "urn:uuid:manuscript-001",
          "property": "title"
        }
      ],
      "status": "resolved",
      "resolutionEventId": "urn:uuid:event-resolution-001"
    }
  ]
}
```

## 22. Pravidla ověřování

Validátor MUSÍ nahlásit chybu, pokud:

- ID revize se v rámci stejného rozsahu historie vyskytuje dvakrát;
- revíze bez oprávnění root nemá žádný nadřazený prvek, pokud není deklarována s mělkými hranicemi;
- nadřazená revize patří k jiné entitě, aniž by existovala explicitní mezientitová relace;
- graf revize obsahuje cyklus;
- chybí deklarovaná revize hlavičky;
- sada změn nemá základní revizi;
- událost nemá žádnou operaci ani cíl;
- atomická sada změn je znázorněna jako částečně aplikovaná;
- výsledek sloučení vynechává požadované přímé nadřazené prvky;
- vyřešený spor postrádá důkazy o jeho vyřešení;
- vrácení smaže nebo nahradí revizi, na kterou odkazuje a která již byla potvrzena;
- veřejná serializace odhaluje data označená jako „omezená“ nebo „tajná“;
- v souhrnném záznamu není uveden jeho algoritmus;
- Historie souboru „`complete`“ obsahuje nevyřešené odkazy na chybějící rodičovské soubory.

Validátor BY MĚL vydat varování, pokud:

- revize neobsahuje žádnou zprávu ani shrnutí záměru;
- herec není známý, pokud není uveden vysvětlující údaj;
- časové razítko nemá dostatečnou přesnost;
- operace využívá pouze dočasný polohový cíl;
- snímek neobsahuje souhrn;
- v neúplném záznamu chybí pro člověka srozumitelné upozornění na vynechání;
- importovaná revize nemá uvedený zdroj;
- jako identifikátor revize se používá název větve;
- Rozsáhlá aktualizace zastírá sémantické změny, které by samy o sobě měly význam.

## 23. Zpracování neznámých údajů a údajů o rozšířeních

Bezztrátový kodek MUSÍ zachovat:

- typy operací s neznámým jmenným prostorem;
- rozšiřující pole u revizí, událostí, sad změn, větví a záznamů o sloučení;
- neznámé klasifikace viditelnosti;
- neřešitelné externí odkazy.

Spotřebitel, který nemůže zachovat nebo uplatnit prodloužení, MUSÍ:

1. nahlásit nepodporované rozšíření;
2. uveďte, zda je možné současný stav rekonstruovat;
3. neuvádět, že je podporován bezztrátový přenos tam a zpět;
4. zachovat neprůhledná data tam, kde je to bezpečné a technicky proveditelné.

## 24. Kompatibilita a migrace

### 24.1 Převod rukopisů obsahujících pouze časová razítka

Rukopis, který obsahuje pouze hodnoty typu „`version`“, „`createdAt`“ a „`updatedAt`“, neobsahuje zgodnou historii revizí typu „OMI“.

Migrace MŮŽE vytvořit syntetickou kořenovou revizi, která představuje importovaný aktuální stav.

Syntetická revize MUSÍ:

- určit událost týkající se migrace nebo dovozu;
- prohlásit, že dřívější historie není k dispozici;
- použijte `historyScope: snapshot-only` nebo `shallow`;
- vyhýbejte se vymýšlení autorů, událostí nebo příčinných souvislostí;
- zachovat původní časová razítka jako zdrojová tvrzení namísto ověřené historie revizí, pokud je jejich význam nejistý.

### 24.2 Převod z integrovaných auditních protokolů

Dovozce BY MĚL přiřazovat zdrojové auditní záznamy k událostem změn pouze tehdy, je-li možné zachovat sémantiku operace, cíle, aktéra a času.

Záznamy o zdrojích, které nelze přiřadit, BY MĚLY být uchovávány jako neprůhledné přílohy s informacemi o původu nebo označeny jako vynechané.

### 24.3 Kompatibilní vývoj

Kompatibilní budoucí revize této specifikace může:

- přidat volitelné vlastnosti události;
- přidat typy operací s jmenným prostorem;
- přidat volitelný důkaz integrity;
- upřesnit varování;
- přidat profily shody, které zachovávají základní sémantiku.

Mezi neslučitelné změny patří:

- změna vlastnosti „committed“ na „mutable“;
- změna sémantiky rodičovských prvků;
- opětovné použití identifikátorů revizí;
- považování názvů větví za neměnnou identifikaci revize;
- zrušení povinnosti zveřejňovat částečnou historii;
- předefinování příkazu „revert“ jako destruktivního vymazání.

## 25. Úvahy o interoperabilitě

### 25.1 Git a distribuovaná správa verzí

Gitové commity, stromy, větve a sloučení mohou sice poskytovat implementační infrastrukturu, avšak rozdíly v řádcích v Gitu a identity repozitářů automaticky nepředstavují sémantické události typu „OMI“ ani identity agentů.

Implementace založená na Git by MĚLA mapovat:

- zaznamenat identifikátor revize do identifikátoru revize;
- rodičovské revize se přiřazují k rodičovským revizím;
- stav stromu do snímků;
- pole „author“ a „committer“ do tvrzení agenta typu „OMI“ s odpovídajícím rozsahem;
- sloučit revize do záznamů;
- značky k kontrolním bodům nebo k vydávacím štítkům.

### 25.2 Oprava „JSON“ a podobné provozní formáty

JSON Formáty typu „Patch“ nebo jim podobné MOHOU kódovat operace na nízké úrovni. Tvůrce je MUSÍ v případě potřeby doplnit, aby zachoval stabilní přiřazení objektů, sémantický záměr, původ aktérů, sémantiku přesunů a chování rozšíření typu „OMI“.

### 25.3 Systémy založené na událostech

Systém založený na událostech MŮŽE mapovat nativní události přímo, pokud jejich sémantika splňuje požadavky této specifikace. Interní události, které odhalují důvěrné informace, podrobnosti o úložišti nebo nestabilní implementační cesty, BY MĚLY být transformovány na přenositelné události typu „OMI“.

### 25.4 CRDT a systémy operačních transformací

Implementace CRDT nebo OT MŮŽE interně zachovávat nativní operace. Pro výměnu typu „OMI“ MUSÍ poskytovat sémantiku revize, aktéra, cíle, sloučení a úplnosti historie, jak to vyžaduje její deklarovaný profil.

Automatická konvergence nevylučuje nutnost zaznamenávat akademické rozpory, rozporuplné zásady či původ.

### 25.5 W3C PROV a systémy provenience

Implementace MOHOU mapovat agenty, aktivity, entity, odvození a generovací události na model W3C PROV nebo jiný model provenience. Taková mapování BY MĚLA zachovat rozlišení mezi vědeckým objektem, jeho revizí, změnovou aktivitou, odpovědným agentem a provádějící softwarovou službou.

## 26. Bezpečnostní aspekty

Načítání a rekonstrukce historických dat může vystavit implementace následujícím rizikům:

- záměrně hluboké nebo cyklické grafy;
- nadměrně velké užitečné zatížení při akcích;
- procházení cest v odkazech na snímky;
- vrácení neoprávněných změn;
- falešná tvrzení herců;
- vyjasnit zmatek;
- snížení úrovně algoritmu;
- útoky s rozšířeným užitečným obsahem;
- odmítnutí služby způsobené explozí konfliktů;
- vstříknutí prostřednictvím zpráv srozumitelných pro člověka.

Implementace BY MĚLY:

- omezit hloubku grafu a velikost datové nálože v souladu s deklarovanými zásadami;
- ověřit identifikátory a odkazy;
- cykly zamítnutí;
- transformační operace v pískovišti;
- považovat zprávy a popisky za nedůvěryhodný text;
- oddělit ověřování provozních požadavků od vědeckého původu;
- ověřit algoritmy výpočtu kontrolních součtů a profily kanonizace;
- zabránit spuštění dat v příponách jako kódu;
- uchovávat doklady o odmítnutých nebo umístěných do karantény dovozních zásilkách.

## 27. Aspekty přístupnosti

Rozhraní pro historii verzí BY MĚLA:

- uvádět změny v strojově čitelných a textových alternativách, nikoli pouze v barvách;
- zajistit navigaci mezi revizemi pomocí klávesnice;
- oznámit stav konfliktu a ověření asistenční technologii;
- určit aktéra, čas, cíl, postup a výsledek srozumitelným jazykem;
- umožňuje srovnání bez nutnosti přesné práce s ukazateli;
- nespoléhejte se výhradně na vizuální srovnání změn v režimu „side-by-side“;
- poskytovat souhrny pro rozsáhlé sady změn;
- zachovat logické pořadí čtení ve sloučených nebo vrácených zobrazeních obsahu.

## 28. Aspekty internacionalizace

Zprávy o revizích, popisky, důvody a vysvětlení konfliktů, které jsou srozumitelné pro člověka, BY MĚLY podporovat jazykové značky.

Změny v textu MUSÍ zachovat metadata o jazyku a písmu dotčeného obsahu, pokud taková metadata existují.

Implementace BY MĚLY rozlišovat:

- označení v jazyce rozhraní;
- jazyk upraveného odborného obsahu;
- jazyk zprávy o změně;
- translační linie řízená genem `OMI-SPEC-170`.

Při porovnávání řetězců, tokenizaci, normalizaci a slučování textu by se NEMĚLO vycházet z předpokladu, že se jedná o angličtinu, latinku nebo slova oddělená mezerami.

## 29. Aspekty související s ochranou

Balíček pro uchovávání, který má zajistit uchování historie verzí, BY MĚL obsahovat:

- identifikátor entity s verzí;
- přesné specifikace a verze schémat OMI;
- graf revizí;
- odkazy na hlavičku a kontrolní bod;
- snímky nebo události, které lze rekonstruovat;
- metadata týkající se shrnutí a kanonizace;
- odkazy na agenty a původ;
- oznámení o neúplnosti historie a redakčních úpravách;
- prostory jmen rozšíření;
- software nebo transformační metadata potřebná k interpretaci;
- manifest, který přiřazuje historické záznamy k balíčkům aktiv.

Názvy větví se mohou měnit, ale identifikátory revizí a vztahy k nadřazeným větvím MUSÍ zůstat neměnné.

## 30. Stav realizace

Open Manuscript Studio V současné době ukládá proměnlivý stav rukopisu spolu s řetězcem „`version`“ v čitelné podobě, časovými značkami „`createdAt`“ a „`updatedAt`“. Akce ukládání přímo nahrazují aktuální stav a aktualizují časovou značku úpravy.

Studio zatím nenabízí:

- neměnné záznamy o revizích;
- sady změn nebo události sémantických změn;
- historie úprav přiřazená k herci;
- snímky spojené s revizemi;
- ověření grafu revizí;
- větve nebo více hlav;
- výběr merge-base;
- záznamy o sporech a jejich řešení;
- vrácené změny jsou zobrazeny jako nová historie;
- náhrobky;
- deklarace s částečnou historií;
- kontrolní součty nebo ověření integrity.

Jeho aktuální stav v rámci projektu „`OMI-SPEC-160`“ zůstává **průzkumný**. První milník implementace by měl zavést lineární revizní protokol týkající se stávajících změn stavu (Zustand), a to ještě předtím, než bude přidáno chování pro větvení a slučování.

## 31. Doporučený postup implementace

1. přidejte soubory `versioningModelVersion`, `historyId` a `headRevisionId` do agregátu rukopisu nebo do historie přidruženého pracovního prostoru;
2. definovat typy cílů „`Revision`“, „`ChangeSet`“, „`ChangeEvent`“ a „stable“;
3. zahrnout aktuální změny v názvech, abstraktu, blocích, sekcích a autorech do sémantických sad změn;
4. zaznamenat ID propojeného agenta ověřeného uživatele jako aktéra, je-li k dispozici;
5. vytvářet neměnné lineární revize a snímky;
6. přidat funkci „Zpět“ jako záznam v historii, který obnovuje původní stav, nikoli jako odstranění aktuálního stavu;
7. přidat záznamy o odstraněných sekcích, blocích, agentech a příspěvcích;
8. zajistit export a import povrchové historie nebo historie obsahující pouze snímky;
9. přidat uživatelské rozhraní pro historii revizí a přehledné souhrny změn;
10. přidávání větví, slučování základen, konflikty a jejich řešení;
11. zveřejňovat kanonická schémata a platné i neplatné testovací sady;
12. přiřadit testy k požadavkům normy`REQ-VCH-*`.

## 32. Požadavky na zkoušky a upínací přípravky

Sada přípravků pro ověření shody by měla obsahovat:

- jedna revize kořenového stromu;
- platná lineární historie tří revizí;
- sada změn s více událostmi na úrovni atomů;
- aktualizace textu, aktualizace metadat, přesun, změna pořadí, odstranění, obnovení a vrácení zpět;
- povrchní historie s přiznanými mezerami v rodokmenu;
- balíček pro výměnu dat určený výhradně k pořizování snímků;
- dvě větve s hladkým sloučením;
- sloučení s jedním vyřešeným konfliktem;
- nevyřešený konflikt;
- značka odstranění;
- událost s omezeným přístupem, jejíž obsah byl redigován;
- platné a neplatné souhrny stavů;
- duplicitní identifikátory revizí;
- pohřešovaní rodiče;
- revizní cyklus;
- nepodporovaná operace rozšíření;
- revidovaná verze importovaného syntetického kořene.

## 33. Nevyřešené otázky

Návrh ponechává otevřené následující otázky:

1. zda by kanonické schéma mělo obsahovat historii přímo v textu rukopisu, nebo zda by mělo umožňovat pouze odkaz na externí zdroj s historií;
2. které profily kanonizace by měly být zaregistrovány pro souhrny stavů;
3. zda by v profilu „Stable“ mělo být požadováno, aby identifikátory revizí měly formu URI;
4. jak by měly sémantické operace s textem odkazovat na rozsahy po souběžných úpravách;
5. které hodnoty operačního slovníku by se měly stát regulovanými pojmy v registru;
6. jak by měly být v základním schématu znázorněny atomické transakce zahrnující více entit;
7. v jakém rozsahu lze omezené auditní podklady uchovávat v přenosných balíčcích;
8. zda kategorie kontrolních bodů vyžadují speciální řízený slovník;
9. které strategie slučování by měly být standardizovány nad rámec požadavků na důkazy;
10. jak by balíčky pro uchovávání měly reprezentovat zredukovanou šifrovanou historii.

Tyto problémy nebrání implementaci profilu „Core Revision History“.

## 34. Index normativních požadavků

| Požadavek | Předmět |
|---|---|
| `REQ-VCH-001` | Identita revize |
| `REQ-VCH-002` | Neměnnost revizí |
| `REQ-VCH-003` | Vztahy s rodiči |
| `REQ-VCH-004` | Původ změn |
| `REQ-VCH-005` | Provoz akcí a cíle |
| `REQ-VCH-006` | Oddělení pojmů verzí |
| `REQ-VCH-007` | Neničící vrácení |
| `REQ-VCH-008` | Sledovatelnost odstranění |
| `REQ-VCH-009` | Sémantika přesunu a změny pořadí |
| `REQ-VCH-010` | Sloučit důkazy |
| `REQ-VCH-011` | Řešení případů chybějících rodičů |
| `REQ-VCH-012` | Zveřejnění částečné anamnézy |
| `REQ-VCH-013` | Ochrana historie s omezeným přístupem |
| `REQ-VCH-014` | Uvedení zdroje |
| `REQ-VCH-015` | Zachování rozšíření |
| `REQ-VCH-016` | Oddělení časových značek a kauzality |
| `REQ-VCH-017` | Algoritmus a rozsah digestu |
| `REQ-VCH-018` | Atomickost |

## 35. Historie změn

| Verze | Datum | Shrnutí |
|---|---|---|
| 0.1.0 | 6. 8. 2026 | První návrh definující neměnné revize, sémantické sady změn a události, grafy revizí, snímky, větve, sloučení, konflikty, vrácení změn, „tombstones“, původ, integritu, výměnu částečné historie a pokyny k implementaci. |

## 36. Shrnutí

`OMI-SPEC-160` definuje přenositelný model historie pro vědecké objekty.

Zajišťuje, že revize rukopisu nebude zaměňována se schématem nebo verzí aplikace, že historie potvrzených změn nebude tiše přepisována, že změny zůstanou přiřaditelné konkrétním uživatelům, že mazání a vrácení změn zůstanou auditovatelné, že větvení a slučování budou explicitně znázorněny, že bude zveřejněna částečná historie a že implementace s odlišnými interními algoritmy budou moci vyměňovat informace o verzích, aniž by musely rekonstruovat význam pouze na základě časových razítek.
