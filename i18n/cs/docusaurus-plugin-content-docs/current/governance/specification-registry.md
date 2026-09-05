---
title: OMI Registr specifikací
sidebar_label: Registr specifikací
sidebar_position: 60
description: Oficiální registr identifikátorů specifikací, názvů, kanonických umístění, stavů životního cyklu a starších aliasů na adrese Open Manuscript Initiative.
---

# Open Manuscript Initiative Registr specifikací

## Metadata dokumentu

| Pole | Hodnota |
|---|---|
| Typ dokumentu | Registr správy a řízení |
| Stav | Návrh |
| Verze | 0.3.1 |
| Normativní jazyk | Angličtina |
| Prostor jmen registru | `OMI-SPEC` |
| Platí pro | Normativní specifikace OMI a vyhrazené identifikátory specifikací |
| Poslední aktualizace | 5. září 2026 |

## 1. Účel

Tento dokument představuje autoritativní seznam identifikátorů specifikací na adrese Open Manuscript Initiative.

Definuje:

- trvalý identifikátor přiřazený každé specifikaci OMI;
- oficiální název specifikace;
- kanonická cesta ke zdroji;
- stav životního cyklu a aktuální verze;
- kategorie architektury;
- normativní závislosti;
- staré a dočasné identifikátory, které je třeba převést;
- pravidla pro přidělování, rezervování, vyřazování z používání, nahrazování a uchovávání identifikátorů.

Registr existuje proto, že dřívější dokumenty na adrese OMI byly vytvářeny podle několika prozatímních číslovacích schémat. Některé identifikátory byly přiřazeny více než jednomu dokumentu. Stabilní sada standardů nemůže obsahovat nejednoznačné identifikátory.

Jakmile je identifikátor v tomto dokumentu zaregistrován, NESMÍ být přiřazen jiné specifikaci.

## 2. Pravomoc

Identifikátory uvedené v části ****„Registr specifikací Canonical“** jsou oficiální identifikátory specifikací OMI.

Pokud dojde ke konfliktu mezi tímto registrem a jiným dokumentem na adrese OMI ohledně identifikátoru, názvu, kanonické cesty nebo stavu životního cyklu, platí tento registr, dokud nebude konfliktní dokument opraven v rámci běžného revizního procesu.

Tento registr nezaručuje, že všechny uvedené specifikace jsou stabilní. Identitu přiřazuje nezávisle na stupni zralosti. Specifikace může mít status „rezervovaná“, „průzkumná“, „návrh“, „kandidát k přezkoumání“, „kandidát k implementaci“, „stabilní“, „zastaralá“ nebo „nahrazená“.

## 3. Syntaxe identifikátorů

Identifikátor specifikace v rámci registru OMI má následující tvar:

```text
OMI-SPEC-NNN
```

kde `NNN` je tříciferné desetinné číslo.

Příklady:

```text
OMI-SPEC-000
OMI-SPEC-120
OMI-SPEC-221
OMI-SPEC-350
```

Číselná část představuje identifikátor, nikoli číslo verze ani pořadí podle priority.

Verze specifikace se deklaruje samostatně:

```text
OMI-SPEC-210, version 0.2.0
```

## 4. Architektura číslování

OMI využívá číselné rozsahy založené na kategoriích.

| Rozsah | Kategorie |
|---|---|
| `000–099` | Základní principy a systémově přesahující ústavní specifikace |
| `100–199` | Základní sémantické modely, modely identity, dokumentů, anotací, validace a spolupráce |
| `200–299` | Modely vědeckého pracovního postupu, bibliografie, citací, recenzí, zpracování a publikování |
| `300–399` | Platforma, rozšiřitelnost, API, balíčky, výměna, import/export a specifikace shody |
| `400–899` | Vyhrazeno pro budoucí rodiny specifikací OMI |
| `900–999` | Vyhrazeno pro budoucí experimentální alokační politiku; není k dispozici pro jednostranné použití |

Čísla nemusí být záměrně po sobě jdoucí. V souvisejících specifikacích lze použít sousední čísla nebo lokální podřadu.

Příklad:

- `OMI-SPEC-220` definuje bibliografické záznamy;
- `OMI-SPEC-221` definuje referenční knihovny rukopisů a interakci s registrem.

## 5. Stavy registru

Položka registru má jeden z následujících stavů alokace.

### Vyhrazeno

Identifikátor a název byly přiděleny, avšak kanonický specifikační dokument dosud nebyl vytvořen ani přijat jako návrh.

Vyhrazený identifikátor NESMÍ být přiřazen jinému subjektu.

### Aktivní

Existuje dokument s kanonickou specifikací, který je součástí životního cyklu OMI.

Stav životního cyklu se zaznamenává samostatně.

### Zastaralé

Tato specifikace zůstává v platnosti pro stávající implementace, pro nové projekty se však nedoporučuje.

### Nahrazeno

Specifikaci formálně nahrazuje jmenovaný nástupce.

### Staženo

Vývoj byl ukončen ještě předtím, než se specifikace stala stabilní. Identifikátor zůstává trvale nedostupný pro opětovné použití.

## 6. Registr kanonických specifikací

### 6.1 Základy a základní sémantické modely

| Identifikátor | Oficiální název | Přiřazení | Životní cyklus | Verze | Kanonická cesta |
|---|---|---|---|---|---|
| `OMI-SPEC-000` | Základní zásady | Aktivní | Návrh | 0.1.0 | `docs/foundations/core-principles.md` |
| `OMI-SPEC-100` | Model dokumentu | Aktivní | Návrh | 0.1.0 | `docs/specifications/document-model.md` |
| `OMI-SPEC-110` | Model Anchor | Aktivní | Verze | 0.1.0 | `docs/specifications/anchor-model.md` |
| `OMI-SPEC-120` | Scholarly Object Model | Aktivní | Návrh | 0.1.0 | `docs/specifications/core/scholarly-object-model.md` |
| `OMI-SPEC-130` | Model anotací | Aktivní | Návrh | 0.2.0 | `docs/specifications/annotation-model.md` |
| `OMI-SPEC-140` | Model metadat | Aktivní | Návrh | 0.1.0 | `docs/specifications/metadata-model.md` |
| `OMI-SPEC-150` | Identita a model přispěvatelů | Aktivní | Návrh | 0.1.0 | `docs/specifications/identity-contributor-model.md` |
| `OMI-SPEC-160` | Model verzí a změn | Aktivní | Návrh | 0.1.0 | `docs/specifications/versioning-change-model.md` |
| `OMI-SPEC-170` | Překladový model | Vyhrazeno | — | — | `docs/specifications/translation-model.md` |
| `OMI-SPEC-180` | Validační model | Vyhrazeno | — | — | `docs/specifications/validation-model.md` |
| `OMI-SPEC-190` | Model spolupráce a oprávnění | Vyhrazeno | — | — | `docs/specifications/collaboration-permission-model.md` |

### 6.2 Vědecký pracovní postup, citace a publikování

| Identifikátor | Oficiální název | Přiřazení | Životní cyklus | Verze | Kanonická cesta |
|---|---|---|---|---|---|
| `OMI-SPEC-200` | Model pro přezkoumání | Aktivní | Návrh | 0.1.0 | `docs/specifications/review-model.md` |
| `OMI-SPEC-210` | Citovací model | Aktivní | Návrh | 0.2.0 | `docs/specifications/citation-model.md` |
| `OMI-SPEC-220` | Model bibliografického záznamu | Aktivní | Návrh | 0.1.0 | `docs/specifications/bibliographic-record-model.md` |
| `OMI-SPEC-221` | Architektura referenční knihovny a registru | Aktivní | Návrh | 0.1.0 | `docs/specifications/reference-library-registry.md` |
| `OMI-SPEC-230` | Model publikování | Aktivní | Návrh | 0.1.0 | `docs/specifications/publishing-model.md` |
| `OMI-SPEC-240` | Model profilu vykreslování a publikace | Vyhrazeno | — | — | `docs/specifications/rendering-publication-profile-model.md` |

### 6.3 Platforma, výměna a shoda

| Identifikátor | Oficiální název | Přiřazení | Životní cyklus | Verze | Kanonická cesta |
|---|---|---|---|---|---|
| `OMI-SPEC-300` | Architektura pluginů | Aktivní | Návrh | 0.1.0 | `docs/specifications/plugin-architecture.md` |
| `OMI-SPEC-310` | Platforma API | Aktivní | Návrh | 0.1.0 | `docs/specifications/api.md` |
| `OMI-SPEC-320` | Formát souboru | Aktivní | Návrh | 0.2.0 | `docs/specifications/file-format.md` |
| `OMI-SPEC-330` | Architektura kontejnerů | Aktivní | Návrh | 0.1.0 | `docs/specifications/container-architecture.md` |
| `OMI-SPEC-340` | Model importu a exportu | Vyhrazeno | — | — | `docs/specifications/import-export-model.md` |
| `OMI-SPEC-350` | Model schopností a shody | Vyhrazeno | — | — | `docs/specifications/capability-conformance-model.md` |

## 7. Registr závislostí

Seznam závislostí zaznamenává přímé normativní závislosti, které se očekávají v rámci architektury kanonické specifikace. V návrhu (Draft) mohou být tyto závislosti upřesněny ještě předtím, než dokument dosáhne stadia kandidáta na přezkoumání (Review Candidate).

| Identifikátor | Přímé závislosti |
|---|---|
| `OMI-SPEC-000` | Žádné |
| `OMI-SPEC-100` | `OMI-SPEC-000`, `OMI-SPEC-120` |
| `OMI-SPEC-110` | `OMI-SPEC-000`, `OMI-SPEC-100`, `OMI-SPEC-120` |
| `OMI-SPEC-120` | `OMI-SPEC-000` |
| `OMI-SPEC-130` | `OMI-SPEC-100`, `OMI-SPEC-110`, `OMI-SPEC-120` |
| `OMI-SPEC-140` | `OMI-SPEC-000`, `OMI-SPEC-120` |
| `OMI-SPEC-150` | `OMI-SPEC-120`, `OMI-SPEC-140` |
| `OMI-SPEC-160` | `OMI-SPEC-100`, `OMI-SPEC-120`, `OMI-SPEC-140`, `OMI-SPEC-150` |
| `OMI-SPEC-170` | `OMI-SPEC-100`, `OMI-SPEC-110`, `OMI-SPEC-120`, `OMI-SPEC-140`, `OMI-SPEC-150`, `OMI-SPEC-160` |
| `OMI-SPEC-180` | `OMI-SPEC-000`, `OMI-SPEC-100`, `OMI-SPEC-110`, `OMI-SPEC-120`, `OMI-SPEC-130`, `OMI-SPEC-140` |
| `OMI-SPEC-190` | `OMI-SPEC-100`, `OMI-SPEC-120`, `OMI-SPEC-150`, `OMI-SPEC-160` |
| `OMI-SPEC-200` | `OMI-SPEC-110`, `OMI-SPEC-130`, `OMI-SPEC-150`, `OMI-SPEC-160`, `OMI-SPEC-190` |
| `OMI-SPEC-210` | `OMI-SPEC-110`, `OMI-SPEC-120`, `OMI-SPEC-220`, `OMI-SPEC-221` |
| `OMI-SPEC-220` | `OMI-SPEC-120`, `OMI-SPEC-140`, `OMI-SPEC-150` |
| `OMI-SPEC-221` | `OMI-SPEC-140`, `OMI-SPEC-210`, `OMI-SPEC-220` |
| `OMI-SPEC-230` | `OMI-SPEC-100`, `OMI-SPEC-140`, `OMI-SPEC-180`, `OMI-SPEC-210`, `OMI-SPEC-240`, `OMI-SPEC-320` |
| `OMI-SPEC-240` | `OMI-SPEC-100`, `OMI-SPEC-140`, `OMI-SPEC-210` |
| `OMI-SPEC-300` | `OMI-SPEC-000`, `OMI-SPEC-350` |
| `OMI-SPEC-310` | `OMI-SPEC-100`, `OMI-SPEC-150`, `OMI-SPEC-190`, `OMI-SPEC-350` |
| `OMI-SPEC-320` | `OMI-SPEC-100`, `OMI-SPEC-120`, `OMI-SPEC-140`, `OMI-SPEC-160`, `OMI-SPEC-180` |
| `OMI-SPEC-330` | `OMI-SPEC-320` |
| `OMI-SPEC-340` | `OMI-SPEC-100`, `OMI-SPEC-140`, `OMI-SPEC-180`, `OMI-SPEC-220`, `OMI-SPEC-320` |
| `OMI-SPEC-350` | `OMI-SPEC-000`, `OMI-SPEC-300`, `OMI-SPEC-310`, `OMI-SPEC-320`, `OMI-SPEC-340` |

Při implementaci konkrétní vydané verze NESMÍ být závislosti odvozeny výhradně z této tabulky. O shodě s vydanou verzí rozhoduje přesná specifikace s uvedením verze a manifest sady testů.

## 8. Migrace starších identifikátorů

### 8.1 Důvod migrace

Před zavedením tohoto registru se v dokumentaci k OMI používaly dva neslučitelné způsoby číslování:

1. krátká po sobě jdoucí série, jako například `OMI-SPEC-001` až `OMI-SPEC-012`;
2. série založené na kategoriích, jako jsou `OMI-SPEC-100`, `OMI-SPEC-110` a `OMI-SPEC-120`.

Tato krátká sekvence obsahuje srážky:

- `OMI-SPEC-003` byl používán jak v modelu Anchor, tak v modelu Annotation;
- `OMI-SPEC-006` byl používán jak v modelu recenze, tak v modelu bibliografického záznamu;
- `OMI-SPEC-007` byl využíván jak v modelu publikování, tak v architektuře referenční knihovny a registru.

Kolidující identifikátor nemůže být trvalý, protože neidentifikuje jednu jednoznačnou specifikaci.

Série založená na kategoriích je proto přijata jako kanonický systém registrace. Objevuje se již v mapě architektury „OMI“ a v kanonickém základním modelu vědeckých objektů (Scholarly Object Model).

### 8.2 Tabulka starších aliasů

Následující identifikátory jsou historické nebo prozatímní aliasy. Nesmí se používat pro nové normativní odkazy.

| Starý nebo prozatímní identifikátor | Historické použití | Kanonický identifikátor | Migrační akce |
|---|---|---|---|
| `OMI-SPEC-001` | Model dokumentu | `OMI-SPEC-100` | Nahraďte identifikátor; pokud je to možné, zachovejte původní URL |
| `OMI-SPEC-002` | Neformálně označováno jako „Anchor Model“ | `OMI-SPEC-110` | Nahrazení odkazů na závislosti |
| `OMI-SPEC-003` | Model kotvy | `OMI-SPEC-110` | Nahradit identifikátor |
| `OMI-SPEC-003` | Model anotací | `OMI-SPEC-130` | Nahradit identifikátor |
| `OMI-SPEC-004` | Model metadat | `OMI-SPEC-140` | Nahradit identifikátor |
| `OMI-SPEC-005` | Model citací | `OMI-SPEC-210` | Nahradit identifikátor |
| `OMI-SPEC-006` | Model k přezkoumání | `OMI-SPEC-200` | Nahradit identifikátor |
| `OMI-SPEC-006` | Model bibliografického záznamu | `OMI-SPEC-220` | Nahradit identifikátor |
| `OMI-SPEC-007` | Model publikování | `OMI-SPEC-230` | Nahradit identifikátor |
| `OMI-SPEC-007` | Architektura referenční knihovny a registru | `OMI-SPEC-221` | Nahradit identifikátor |
| `OMI-SPEC-008` | Architektura pluginů | `OMI-SPEC-300` | Nahradit identifikátor |
| `OMI-SPEC-009` | Starší vědecký objektový model | `OMI-SPEC-120` | Sloučení obsahu do kanonického dokumentu |
| `OMI-SPEC-010` | Platforma API | `OMI-SPEC-310` | Nahradit identifikátor |
| `OMI-SPEC-011` | Formát souboru | `OMI-SPEC-320` | Identifikátor nahrazení |
| `OMI-SPEC-012` | Architektura kontejnerů | `OMI-SPEC-330` | Nahradit identifikátor |

Starší čísla nikdy nebyla chráněna žádným schváleným registrem. Nejedná se tedy o registrované trvalé identifikátory a NESMÍ být v rámci dané krátké sekvence přidělena jinému subjektu.

### 8.3 Požadavky na migraci

Fáze refaktoringu dokumentace MUSÍ:

- aktualizovat identifikátor „visible“ ve všech aktivních specifikacích;
- aktualizovat deklarace závislostí a křížové odkazy;
- sloučit duplicitní dokumenty týkající se modelu Scholarly Object Model na adrese `OMI-SPEC-120`;
- pokud je to možné, zachovat přesměrování nebo upozornění na migraci u nahrazených veřejných cest;
- vyhněte se uvádění starého identifikátoru jako alternativního trvalého identifikátoru;
- zaznamenat migraci do historie změn každého dotčeného dokumentu;
- aktualizovat schémata, příklady, manifesty a prohlášení o shodě, jakmile začnou používat registrované identifikátory.

## 9. Kanonický model vědeckých objektů

`OMI-SPEC-120` je přiřazeno k modelu vědeckých objektů na adrese:

```text
docs/specifications/core/scholarly-object-model.md
```

Samostatný dokument na adrese:

```text
docs/specifications/scholarly-object-model.md
```

jedná se o duplicitní záznam ze staršího systému spojený s prozatímním identifikátorem `OMI-SPEC-009`.

Jeho užitečný obsah je třeba zkontrolovat a začlenit do kanonického dokumentu `OMI-SPEC-120`. Po sloučení by se stará adresa měla stát přesměrováním nebo výslovným oznámením o přesunu či nahrazení, nikoli druhou normativní specifikací.

## 10. Pravidla pro kanonické cesty

Kanonická cesta identifikuje spravovaný zdrojový dokument v úložišti.

Změna kanonické cesty nemění registrovaný identifikátor. Změna cesty MUSÍ zahrnovat, je-li to technicky proveditelné:

- HTTP přesměrování z dříve zveřejněné trasy;
- oznámení o migraci úložiště;
- aktualizovány interní odkazy;
- aktualizovaná metadata registru;
- uchování historie verzí.

Cesta k souboru NESMÍ být považována za trvalý identifikátor specifikace.

## 11. Pravidla pro názvy

Registrovaný název je oficiální, pro člověka srozumitelný název specifikace.

Ke změně názvu redakčního titulu, která je v souladu s pravidly, MŮŽE dojít bez změny identifikátoru, pokud zůstane zachován rozsah a normativní předmět.

Návrh, který mění předmět tak podstatně, že by stávající odkazy mohly být zavádějící, vyžaduje nový identifikátor.

Historické názvy BY MĚLY být zaznamenány jako alternativní názvy, pokud se objevily ve veřejně dostupných publikacích nebo v externích citacích.

## 12. Pole týkající se verze a životního cyklu

Každá specifikace typu „Active“ MUSÍ deklarovat obojí:

- sémantická verze;
- stav životního cyklu.

Příklady:

```text
OMI-SPEC-210
Version: 0.2.0
Status: Draft
```

Verze a stav životního cyklu jsou nezávislé. Registr NESMÍ odvozovat jedno z druhého.

Hodnoty stavů se řídí dokumentem „Životní cyklus specifikace“. Zvyšování verzí se řídí zásadami pro číslování verzí.

## 13. Vyhrazené specifikace

Záznam typu „Reserved“ vyjadřuje architektonický záměr, nestanoví však normativní požadavky.

Rezervovaná specifikace se stane aktivní teprve poté, co:

1. je vytvořen kanonický dokument;
2. jeho rozsah odpovídá zapsanému názvu nebo schválená změna v rejstříku tento název mění;
3. jsou k dispozici požadovaná metadata;
4. dokument dosáhne alespoň statusu „Návrh“;
5. položka v registru se aktualizuje na základě kontroly.

Implementace NESMÍ prohlašovat shodu s vyhrazenou specifikací.

## 14. Postup přidělování

Návrh nového identifikátoru MUSÍ obsahovat:

- navrhovaný název;
- formulace problému a rozsah;
- navrhovaný číselný rozsah a identifikátor;
- vztah ke stávajícím specifikacím;
- očekávané normativní závislosti;
- důvod, proč dané téma vyžaduje samostatnou specifikaci;
- navrhovaný redaktor nebo správce;
- počáteční stav životního cyklu;
- očekávané schéma, profil, registr nebo testovací artefakty.

K alokaci by MĚLO dojít pouze tehdy, je-li rozsah dostatečně odlišný, aby zůstal stabilní.

Identifikátor MŮŽE být rezervován ještě předtím, než bude k dispozici úplná verze návrhu, pokud včasné přidělení zabrání kolizím nebo usnadní koordinaci souběžné práce.

## 15. Zákaz jednostranného přidělování

Autoři NESMÍ vytvářet nový normativní identifikátor `OMI-SPEC-NNN` pouhým jeho přidáním do názvu dokumentu nebo názvu souboru.

Nový identifikátor se stává oficiálním teprve tehdy, když je zapsán do tohoto registru na základě schváleného postupu pro předložení a posouzení.

Neregistrovaná čísla, která se objevují v oddílech, vydáních, příkladech nebo experimentálních dokumentech, nemají trvalý status.

## 16. Trvalost identifikátoru

Po registraci MUSÍ identifikátor zůstat přiřazen ke stejné linii koncepčních specifikací.

Identifikátor se NESMÍ změnit z následujících důvodů:

- oprava názvu;
- přesun souboru;
- změna uspořádání postranního panelu;
- překlad;
- vedlejší verze nebo oprava;
- nový editor;
- zastaralost;
- nahrazení;
- výběr.

Stažený nebo nahrazený identifikátor zůstává trvale vyhrazen.

## 17. Rozdělení a sloučení specifikací

### 17.1 Rozdělení

Pokud je jedna specifikace rozdělena na specifikace s nezávislým řízením verzí:

- původní identifikátor zůstává u hlavního pokračujícího rodokmenu nebo je nahrazen;
- každá nově samostatná specifikace dostane nový identifikátor;
- v registru je tento vztah zaznamenán;
- V pokynech k migraci je uvedeno, které požadavky byly přesunuty.

### 17.2 Sloučení

Při sloučení několika specifikací:

- jeden identifikátor MŮŽE pokračovat, pokud jeho koncepční linie jasně převládá;
- ostatní identifikátory se stávají neplatnými;
- Měl by být přidělen nový identifikátor, pokud žádný stávající identifikátor přesně nevyjadřuje sloučený rozsah;
- Nahradené identifikátory SE NESMÍ znovu použít.

## 18. Záznamy o zastaralých a nahrazených funkcích

Zastaralý nebo nahrazený záznam v registru MUSÍ obsahovat následující informaci:

- dotčené verze;
- datum účinnosti nebo vydání;
- identifikátor nástupce, pokud existuje;
- pokyny k migraci;
- podpora a stav archivace.

Kanonická stránka MUSÍ zůstat přístupná nebo musí odkazovat na archivní úvodní stránku.

## 19. Vztahy mezi schématy, profily a registry

Identifikátor specifikace typu „OMI“ označuje specifikaci v prozaickém textu. Neoznačuje automaticky:

- schéma „JSON“;
- profil publikací;
- registr řízeného slovníku;
- ukázkový korpus;
- sada testů shody;
- softwarová implementace.

Tyto artefakty musí mít vlastní identifikátory nebo názvy s verzí v souladu s příslušnými pravidly správy OMI.

Položka registru BY MĚLA odkazovat na tyto artefakty, pokud existují.

## 20. Stav realizace

Registr zaznamenává specifikaci, identitu a platnost, nikoli shodu s implementací.

Databáze „[OMI Implementation Status Matrix](./implementation-status-matrix.md)“, založená na důkazech, zaznamenává informace o implementaci, schématu, testovacích sadách, validátorech, testování a důkazech nezávislé implementace pro každý registrovaný identifikátor.

Existence kódu se stejným názvem v dokumentu Open Manuscript Studio není dostatečným důkazem shody se specifikací.

## 21. Úřední překlady

Oficiální překlady používají stejný registrovaný identifikátor jako anglický zdroj.

Příklad:

```text
OMI-SPEC-210 — Citation Model
English source version: 0.2.0
Hungarian translation revision: hu-1
```

Překlad NESMÍ dostat jiné číslo `OMI-SPEC`.

Metadata překladu musí uvádět přesnou normativní zdrojovou verzi a stav synchronizace.

## 22. Odkazy na registrované specifikace

Normativní odkaz BY MĚL při prvním výskytu obsahovat jak identifikátor, tak název:

```text
OMI-SPEC-210, Citation Model
```

V následujících odkazech je MOŽNÉ použít pouze identifikátor, pokud je to jednoznačné.

Odkaz na konkrétní cíl shody MUSÍ obsahovat verzi:

```text
OMI-SPEC-210 version 0.2.0
```

Odkazy NESMÍ používat starý alias poté, co byl příslušný dokument migrován.

## 23. Strojově čitelný registr

Na základě tohoto dokumentu by MĚL být vytvořen budoucí strojově čitelný registr, případně by měl být s tímto dokumentem porovnán a ověřen.

Očekává se, že záznam bude obsahovat pole odpovídající:

```yaml
identifier: OMI-SPEC-210
title: Citation Model
allocation: active
status: draft
version: 0.2.0
canonicalPath: docs/specifications/citation-model.md
category: scholarly-references
dependsOn:
  - OMI-SPEC-110
  - OMI-SPEC-120
  - OMI-SPEC-220
  - OMI-SPEC-221
legacyAliases:
  - OMI-SPEC-005
implementationStatus: see-implementation-matrix
```

Strojově čitelná podoba se NESMÍ bez upozornění lišit od zkontrolovaného registru. Automatická validace by měla nakonec zkontrolovat:

- jedinečnost identifikátoru;
- jedinečnost kanonické cesty;
- existence závislosti;
- absence cyklických závislostí tam, kde jsou cykly zakázány;
- platné hodnoty životního cyklu;
- platné sémantické verze;
- kolize starších aliasů;
- soulad s úvodními částmi specifikace.

## 24. Dokumenty týkající se správy mimo jmenný prostor OMI-SPEC

Následující dokumenty upravují sadu specifikací, ale samy o sobě nemají identifikátory typu „`OMI-SPEC`“:

| Dokument | Kanonická cesta |
|---|---|
| ChartaOpen Manuscript Initiative | `docs/governance/charter.md` |
| Plán vývoje projektu „OMI“ verze 1.0 | `docs/governance/roadmap-to-omi-1.0.md` |
| Audit architekturyOMIu | `docs/governance/architecture-audit.md` |
| Životní cyklus specifikace | `docs/governance/specification-lifecycle.md` |
| Zásady verzování | `docs/governance/versioning-policy.md` |
| Příručka pro styl specifikací | `docs/governance/style-guide.md` |
| Terminologie a definice | `docs/governance/terminology.md` |
| Registr specifikací | `docs/governance/specification-registry.md` |
| Šablona specifikace | `docs/governance/specification-template.md` |
| Matice stavu implementace | `docs/governance/implementation-status-matrix.md` |

Tyto řídicí dokumenty mohou obsahovat normativní požadavky na projekt, aniž by se staly specifikacemi datového modelu určenými pro realizátory.

## 25. Počáteční migrační sekvence

Po zavedení tohoto registru je doporučené pořadí migrace následující:

1. aktualizovat všechny názvy aktivních specifikací a metadata tak, aby obsahovaly registrované identifikátory;
2. sloučit oba dokumenty týkající se modelu vědeckých objektů (Scholarly Object Model) na stránce `OMI-SPEC-120`;
3. aktualizovat deklarace závislostí a interní odkazy;
4. přeskupit postranní panel „Docusaurus“ tak, aby odpovídal registrované architektuře;
5. vytvořte zbývající specifikace jádra typu „Reserved“ v pořadí podle závislostí;
6. zavést strojově čitelnou kontrolu platnosti zápisů v registru;
7. vést matici stavu implementace;
8. vázat schémata, příklady a testy shody na konkrétní verze specifikací.

## 26. Řízení změn

Změny v tomto registru se klasifikují následovně.

### Změna v opravě

- oprava překlepu v cestě;
- oprava nenormativních formulací;
- synchronizace již schváleného stavu nebo verze;
- oprava nefunkčního odkazu.

### Drobná změna

- rezervace nového identifikátoru;
- aktivace položky „Reserved“;
- přidání zdokumentovaného aliasu;
- přidání volitelných metadat registru;
- zaznamenání kompatibilního upřesnění názvu.

### Zásadní změna

- změna architektury přidělování;
- přeřazení registrovaného identifikátoru;
- změna pravidel týkajících se trvalosti identifikátorů;
- provedení změny, která je v rozporu se smyslem záznamů v registru.

Přidělení již zaregistrovaného identifikátoru jiné entitě je zakázáno, a to i v rámci hlavní verze registru. Koncepční nahrazení vyžaduje nový identifikátor a záznam o nahrazení.

## 27. Účinky adopce

Zavedení tohoto registru má následující bezprostřední dopady:

- třímístné identifikátory založené na kategoriích se stanou kanonickými;
- krátké sekvenční identifikátory se stanou staršími prozatímními aliasy;
- kolize identifikátorů se řeší bez opětovného použití nejednoznačných čísel;
- `docs/specifications/core/scholarly-object-model.md` se stává kanonickým zdrojem pro `OMI-SPEC-120`;
- plánované specifikace dostávají chráněné identifikátory typu „Reserved“;
- Při tvorbě budoucích specifikací je nutné tento registr zohlednit a aktualizovat.

Samotné přijetí nezmění stav životního cyklu žádné specifikace na „Stabilní“ a nepředstavuje prohlášení o shodě implementace.

## 28. Historie změn

| Verze | Datum | Shrnutí |
|---|---|---|
| 0.3.1 | 5. září 2026 | Pokročilý formát souboru „`OMI-SPEC-320`“ byl po kompletním přepracování šablony a zveřejnění prvního kanonického schématu rukopisu a testovacích dat převeden do verze 0.2.0 (návrh). |
| 0.3.0 | 6. srpna 2026 | Byly aktivovány dokumenty „`OMI-SPEC-160`“ a „Versioning and Change Model“ jako pracovní verze 0.1.0. |
| 0.2.0 | 6. 8. 2026 | Byly aktivovány modely „`OMI-SPEC-150`“, „Identity“ a „Contributor“ jako návrh verze 0.1.0; byla přidána odkaz na matici implementace a aktualizována registrace dokumentů o správě. |
| 0.1.0 | 6. srpna 2026 | Byla zavedena standardní architektura identifikátorů specifikací OMI a počáteční registr. |

## 29. Shrnutí

Registr specifikací „OMI“ představuje jednotný systém trvalé identifikace pro celou sadu standardů.

Zachovává architekturu založenou na kategoriích, kterou již využívá mapa architektury „OMI“, řeší konflikty prozatímních identifikátorů, rezervuje identifikátory pro chybějící modely, chrání identifikátory před opakovaným použitím a vytváří základ pro spolehlivé křížové odkazy, schémata, verze, překlady a prohlášení o shodě.
