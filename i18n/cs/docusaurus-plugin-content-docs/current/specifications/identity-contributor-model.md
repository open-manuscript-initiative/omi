---
id: identity-contributor-model
title: OMI-SPEC-150 — Identita a model přispěvatelů
sidebar_label: Identita a model přispěvatelů
description: Normativní model pro agenty, jména, tvrzení o vnější identitě, příslušnost, příspěvky, přiřazování autorství a oddělení akademické identity od účtů v aplikacích.
keywords:
  - Open Manuscript Initiative
  - OMI
  - identity
  - contributors
  - attribution
  - ORCID
  - affiliations
---

# OMI-SPEC-150 — Identita a model přispěvatelů

## Metadata dokumentu

| Pole | Hodnota |
|---|---|
| Identifikátor | `OMI-SPEC-150` |
| Název | Model identity a přispěvatelů |
| Verze | `0.1.0` |
| Stav | Návrh |
| Typ dokumentu | Normativní |
| Normativní jazyk | Angličtina |
| Redaktoři | SprávciOMIu |
| Poslední aktualizace | 6. srpna 2026 |
| Nahrazuje | Žádné |
| Nahrazeno | Žádné |
| Záleží na | `OMI-SPEC-120`, `OMI-SPEC-140` |
| Používají | `OMI-SPEC-160`, `OMI-SPEC-170`, `OMI-SPEC-190`, `OMI-SPEC-200`, `OMI-SPEC-220`, `OMI-SPEC-310` |
| Schémata | Žádná nezveřejněná |
| Profily | Žádné nezveřejněné |
| Stav implementace | [OMI Implementation Status Matrix](../governance/implementation-status-matrix.md) |
| Systém pro sledování chyb | Problémy v repozitáři Open Manuscript Initiative |

## 1. Abstrakt

Tato specifikace definuje, jak systém „Open Manuscript Initiative“ reprezentuje aktéry a jejich kontextovou účast na vědeckých objektech a pracovních postupech. Poskytuje společný model pro osoby, organizace, konsorcia, projekty, služby, neidentifikované aktéry, jména, externí identifikátory, afilace, role přispěvatelů, pořadí přispěvatelů, status korespondenčního přispěvatele a uvádění autorů.

Tento model rozlišuje mezi agentem a účtem aplikace, mezi přispěvatelem a agentem, který příspěvek realizuje, a mezi rolí a trvalou vlastností daného agenta. Rovněž rozlišuje mezi lokální identitou OMI a tvrzeními externích identifikačních systémů, jako jsou ORCID nebo ROR.

Tato specifikace podporuje vícejazyčné a historické názvy, časově ohraničené příslušnosti, pseudonymní a omezené identity, tvrzení o identitě s uvedením původu a explicitní vztahy přispění k rukopisům či jiným vědeckým objektům. Nedefinuje však autentizační protokoly, oprávnění k přístupu do pracovního prostoru, zásady zveřejňování v rámci recenzního řízení ani úplnou historii revizí záznamů o identitě.

## 2. Status tohoto dokumentu

Tento dokument je **návrhem** specifikace standardu „Open Manuscript Initiative“.

Model, názvy vlastností, třídy shody a požadavky na zpracování se mohou před verzí 1.0 změnit tak, že již nebudou kompatibilní. Implementace, které prohlašují, že danou specifikaci podporují, MUSÍ uvést přesnou verzi specifikace nebo nezměnitelný commit, který byl použit.

Tento návrh aktivuje identifikátor vyhrazený pro model identit a přispěvatelů (Identity and Contributor Model) v registru specifikací OMI. Diskuse a návrhy změn jsou sledovány v repozitáři Open Manuscript Initiative.

## 3. Shoda

### 3.1 Třídy shody

Tato specifikace definuje čtyři třídy shody:

- **Producent identit v souladu s předpisy:** vytváří nebo exportuje údaje o zástupcích, identitách, příslušnosti nebo příspěvcích.
- **Subjekt zpracovávající údaje v souladu s předpisy:** dováží, ukládá, zobrazuje, zpracovává nebo uchovává tyto údaje.
- **Validátor shody:** porovnává data se strukturálními a sémantickými požadavky této specifikace.
- **Nástroj pro ověřování shody identit:** porovnává, slaďuje nebo obohacuje identity agentů či tvrzení o externích identifikátorech.

Jedna implementace MŮŽE odpovídat více než jedné třídě.

### 3.2 Obecná shoda

Implementace, která je v souladu s normou, MUSÍ splňovat všechny příslušné požadavky typu **MUSÍ** a **NESMÍ** pro svou deklarovanou třídu.

Volitelná funkce MŮŽE být vynechána. Je-li tato funkce implementována, MUSÍ splňovat všechny požadavky, které jsou pro ni definovány.

Prohlášení o shodě BY MĚLO obsahovat:

- název a verze implementace;
- `OMI-SPEC-150` verze;
- deklarovaná třída shody;
- podporované typy agentů a schémata identifikátorů;
- podporované nástroje pro správu ochrany soukromí a viditelnosti;
- známá omezení;
- verze pro testování shody, bude-li k dispozici.

### 3.3 Základní požadavky

**REQ-IDN-001:** Agent MUSÍ být reprezentován nezávisle na každém aplikačním účtu, který je s ním spojen.

**REQ-IDN-002:** Příspěvek MUSÍ odkazovat na agenta a na entitu „OMI“, ke které je příspěvek určen; NESMÍ obsahovat kompletní záznam o agentovi jako vložený záznam o přispěvateli.

**REQ-IDN-003:** Role přispěvatele MUSÍ souviset s jedním konkrétním příspěvkem a NESMÍ být vykládána jako trvalá vlastnost aktéra.

**REQ-IDN-004:** Externí identifikátor MUSÍ být vyjádřen jako tvrzení obsahující schéma identifikátoru, hodnotu, subjekt, původ a stav ověření.

**REQ-IDN-005:** Uživatel NESMÍ sloučit dva agenty pouze na základě toho, že se shodují jejich jména, e-mailové adresy, příslušnost k organizaci nebo neověřené externí identifikátory.

**REQ-IDN-006:** Producent MUSÍ zachovat rozlišení mezi neznámými, utajenými, pseudonymními a výslovně anonymními identitami.

**REQ-IDN-007:** Omezené identifikační a kontaktní údaje NESMÍ být zveřejněny prostřednictvím veřejné serializace nebo zobrazení, ledaže by příslušná politika přístupu jejich zveřejnění povolila.

**REQ-IDN-008:** Pořadí přispěvatelů MUSÍ být vyjádřeno nezávisle na roli, identitě a velikosti příspěvku.

## 4. Rozsah působnosti

Tato specifikace definuje:

- identita agenta a podporované kategorie agentů;
- lokální a externí identifikátory agentů;
- vícejazyčné, strukturované, nestrukturované, historické a pseudonymní názvy;
- tvrzení o identitě, jejich původ a stav ověření;
- kontextové vazby;
- příspěvky k rukopisům a dalším vědeckým materiálům;
- role příspěvků a volitelná přiřazení k řízenému slovníku;
- pořadí přispěvatelů a označení příslušných přispěvatelů;
- názvy kontextových přiřazení;
- identifikační a kontaktní údaje s omezeným přístupem;
- požadavky na porovnání identit, sesouhlasení, sloučení a rozdělení;
- chování při ověřování a uchovávání.

### 4.1 Mimo rozsah

Tato specifikace nedefinuje:

- hesla, passkeys, OAuth, OpenID Connect, správa relací nebo jiné mechanismy ověřování;
- životní cyklus aplikačního účtu a obnovení účtu;
- členství v pracovním prostoru, autorizace nebo výpočet oprávnění;
- zásady týkající se anonymity nebo zveřejňování informací v rámci recenzního řízení;
- ověření právní totožnosti;
- institucionální ověření zaměstnání;
- etika autorství nebo kritéria způsobilosti;
- univerzální slovník rolí a příspěvků;
- grafy verzí, sady změn nebo kompletní sémantika auditních událostí;
- Návrh stránky veřejného profilu.

Ověřování spadá do oblasti zabezpečení platformy. Oprávnění k pracovním prostorům spadají do oblasti `OMI-SPEC-190`. Kontrola zveřejňování identit spadá do oblasti `OMI-SPEC-200`. Sémantika revizí a změn spadá do oblasti `OMI-SPEC-160`.

## 5. Terminologie

Platí dokument „[OMI Terminology and Definitions](../governance/terminology.md)“.

### 5.1 Identita zástupce

Objekt typu „OMI“, který představuje jednoho agenta jako identifikovatelnou entitu v rámci definovaného rozsahu identity.

Identita subjektu může popisovat osobu, organizaci, konsorcium, projekt, službu nebo neidentifikovaný subjekt. Nejedná se o autentizační údaje a neimplikuje to právní ověření.

### 5.2 Účet

Záznam spravovaný implementací, který se používá k ověření, autorizaci nebo přizpůsobení přístupu k softwaru.

Účet MŮŽE být přiřazen k identitě subjektu, není však součástí modelu vědeckého přiřazování autorství a NESMÍ být považován za samotný subjekt.

### 5.3 Prokázání totožnosti

Prohlášení s uvedením původu, že se na daného aktéra vztahuje jmenovaný identifikátor, jméno, příslušnost, kontaktní údaje nebo jiná identifikační vlastnost.

### 5.4 Prohlášení o externím identifikátoru

Prohlášení o identitě, které spojuje agenta s identifikátorem přiděleným v rámci externího systému nebo externí autoritou.

### 5.5 Tvar jména

Jedna z forem zápisu jména aktéra pro daný jazyk, písmo, období, účel nebo zdroj.

### 5.6 Příspěvek

Kontextový vztah, který vyjadřuje, že agent se v jedné nebo více rolích podílel na definované entitě typu „OMI“.

### 5.7 Uvedení zdroje

Zobrazení příspěvku za účelem uznání, uvedení odpovědnosti, citace, prezentace nebo označení původu.

### 5.8 Úloha příspěvku

Hodnota popisující funkci, kterou agent plní v rámci jednoho kontextu příspěvku.

### 5.9 Prohlášení o příslušnosti

Časově ohraničené prohlášení s uvedením původu, které spojuje subjekt s organizací, organizační jednotkou, projektem nebo srovnatelným institucionálním kontextem.

### 5.10 Rozpoznávání identit

Proces určování, zda se záznamy o identitě nebo tvrzení o identitě vztahují ke stejnému subjektu, k různým subjektům nebo k nevyřešenému vztahu.

### 5.11 Nezveřejněná totožnost

Identita, která je v autorizovaném kontextu známa, ale pro aktuálního spotřebitele či publikum je záměrně nedostupná.

### 5.12 Neidentifikovaná látka

Agent, jehož identita není známa, není zaznamenána nebo ji nelze zjistit.

Neidentifikovaný agent není totéž jako utajená totožnost.

## 6. Návrhové zásady

Tato část má informativní charakter.

- **Kontext před globálními předpoklady:** role, příslušnost, pořadí a odpovídající status jsou závislé na kontextu.
- **Identita před zobrazením:** agent není definován jedním řetězcem zobrazovaného jména.
- **Prohlášení s uvedením původu:** importované nebo externě dodané identifikační údaje zůstávají přiřaditelné ke svému zdroji.
- **Žádné nebezpečné automatické slučování:** nejednoznačnost zůstává zachována, dokud její vyřešení nepodpoří dostatečné důkazy.
- **Ochrana soukromí již od návrhu:** veřejně dostupné údaje o autorství a provozní údaje s omezeným přístupem jsou odděleny.
- **Vícejazyčné znázornění:** názvy a popisky zohledňují jazyk, písmo, pořadí a historické varianty.
- **Nezávislost účtu:** akademické záznamy lze přenášet mezi jednotlivými instalacemi a aplikacemi.
- **Interoperabilita zohledňující ztráty:** při importu a exportu se odhalí vynechané, transformované nebo neověřitelné identifikační údaje.

## 7. Přehled modelu

```text
Application account
    └── may be privately associated with ── Agent identity
                                               ├── Name forms
                                               ├── External identifier assertions
                                               ├── Affiliation assertions
                                               ├── Contact points
                                               └── Contributions
                                                        ├── Target scholarly object
                                                        ├── Contribution roles
                                                        ├── Contributor order
                                                        ├── Corresponding status
                                                        └── Contextual attribution name
```

Přiřazení účtu je specifické pro danou implementaci, pokud výslovně stanovený chráněný profil výměny neurčuje jinak.

Identita agenta se může podílet na více příspěvcích. Příspěvek může obsahovat více rolí, má však jednoho primárního agenta a jednu entitu, k níž je příspěvek určen. Skupinové příspěvky využívají organizaci, konsorcium, projekt nebo explicitně modelovaného kolektivního agenta namísto pole maskovaného jako jedna osoba.

## 8. Datový model

### 8.1 Totožnost zástupce

**Účel:** Zobrazit agenta nezávisle na účtech, rolích a proměnných popisných štítcích.  
**Identifikátor:** Stabilní lokální identifikátor v rámci identitního rozsahu, v němž se nachází OMI.  
**Životní cyklus:** Trvalý; opravy, sloučení, rozdělení, vyřazení z používání a nahrazení vyžadují výslovné uvedení původu.

| Vlastnost | Typ | Povinná | Kardinalita | Popis |
|---|---|---:|---:|---|
| `id` | řetězec | Ano | `1` | Stabilní lokální identifikátor. |
| `type` | řetězec | Ano | `1` | Kategorie agenta. |
| `names` | `NameForm[]` | Ano | `1..*` | Známé způsoby zápisu jmen. |
| `identifiers` | `ExternalIdentifierAssertion[]` | Ne | `0..*` | Tvrzení o externích identifikátorech. |
| `affiliations` | `AffiliationAssertion[]` | Ne | `0..*` | Kontextové příslušnosti. |
| `contacts` | `ContactPoint[]` | Ne | `0..*` | Kontaktní údaje s pravidly viditelnosti. |
| `status` | řetězec | Ne | `0..1` | Aktivní, historické, sloučené, zastaralé, neidentifikované nebo implementací definované rozšíření. |
| `replacedBy` | řetězec | Ne | `0..1` | Identifikátor agenta, který nahrazuje sloučený nebo zastaralý záznam. |
| `provenance` | `ProvenanceAssertion[]` | Ne | `0..*` | Informace o původu a držení. |
| `extensions` | objekt | Ne | `0..1` | Obsah rozšíření v jmenném prostoru. |

Základní hodnoty společnosti „`type`“ jsou:

- `person`;
- `organization`;
- `consortium`;
- `project`;
- `service`;
- `unidentified`.

Profil MŮŽE definovat užší typy agentů.

**REQ-IDN-010:** Každá identita agenta MUSÍ mít alespoň jednu formu jména, s výjimkou agenta typu „`unidentified`“, který MŮŽE používat řízený zástupný štítek.

**REQ-IDN-011:** Identifikátor domény s pevným názvem (`id`) MUSÍ zůstat neměnný, i když dojde ke změně preferovaného názvu, přidružení, kontaktního bodu nebo externího identifikátoru.

**REQ-IDN-012:** Sloučená nebo zastaralá identita MUSÍ zachovat svůj původní identifikátor a MĚLA BY označit svou náhradu pomocí `replacedBy`.

**REQ-IDN-013:** Identita osoby NESMÍ vyžadovat zákonné jméno, binární označení pohlaví, oslovení, e-mailovou adresu, ORCID ani příslušnost k nějaké organizaci.

### 8.2 Tvar jména

| Vlastnost | Typ | Povinná | Kardinalita | Popis |
|---|---|---:|---:|---|
| `id` | řetězec | Ano | `1` | Stabilní identifikátor pro toto tvrzení o názvu. |
| `display` | řetězec | Ano | `1` | Vyplňte formulář. |
| `given` | řetězec | Ne | `0..1` | Část jména, pokud existuje. |
| `family` | řetězec | Ne | `0..1` | Část příjmení, je-li relevantní. |
| `prefix` | řetězec | Ne | `0..1` | Předpona, pokud je sémanticky součástí názvu. |
| `suffix` | řetězec | Ne | `0..1` | Přípona, pokud je sémanticky součástí názvu. |
| `literal` | řetězec | Ne | `0..1` | Nezpracovaný název nebo doslovný název ve stylu organizace. |
| `language` | Značka BCP 47 | Ne | `0..1` | Jazyk, v němž je název uveden. |
| `script` | Kód podle normy ISO 15924 | Ne | `0..1` | Skript, pokud jej jazyková značka dostatečně nevystihuje. |
| `usage` | řetězec | Ne | `0..1` | Preferovaný, zveřejněný, oficiální, dřívější, pseudonym, přepis, překlad nebo příponu. |
| `preferred` | boolean | Ne | `0..1` | Upřednostňuje se v deklarovaném kontextu. |
| `validFrom` | datum nebo datum a čas | Ne | `0..1` | Počátek známé platnosti. |
| `validUntil` | datum nebo datum a čas | Ne | `0..1` | Konec známé platnosti. |
| `source` | `ProvenanceAssertion` | Ne | `0..1` | Zdroj tvaru názvu. |

**REQ-IDN-020:** Forma jména MUSÍ obsahovat prvek „`display`“ a NESMÍ vyžadovat, aby ji bylo možné bezeztrátově rozložit na složky „given“ a „family“.

**REQ-IDN-021:** Spotřebitel MUSÍ zachovat tvary jmen, které používají písma, konvence řazení nebo prvky, které jeho rozhraní nepodporuje.

**REQ-IDN-022:** Pro stejného agenta, jazyk, písmo, způsob použití a kontext zpracování MŮŽE být jako preferovaná označena nanejvýš jedna forma jména.

**REQ-IDN-023:** Transliterované nebo přeložené jméno NESMÍ bez upozornění nahradit jméno v původním písmu.

### 8.3 Prohlášení o externím identifikátoru

| Vlastnost | Typ | Povinná | Kardinalita | Popis |
|---|---|---:|---:|---|
| `id` | řetězec | Ano | `1` | Identifikátor lokální asserce. |
| `scheme` | řetězec nebo URI | Ano | `1` | Schéma identifikátorů, například ORCID nebo ROR. |
| `value` | řetězec | Ano | `1` | Hodnota identifikátoru specifická pro Scheme. |
| `uri` | URI | Ne | `0..1` | Kanonické nebo vyhodnotitelné URI, je-li známo. |
| `subject` | řetězec | Ano | `1` | Identita agenta, na kterého se odkazuje. |
| `verification` | řetězec | Ano | `1` | Neověřeno, vlastní tvrzení, ověřeno podle zdroje, ověřeno v registru, zamítnuto nebo rozšíření. |
| `verifiedAt` | datum-čas | Ne | `0..1` | Čas ověření. |
| `verifiedBy` | odkaz na agenta nebo službu | Ne | `0..1` | Ověřování agenta nebo zpracovatele. |
| `source` | `ProvenanceAssertion` | Ano | `1` | Zdroj tvrzení. |
| `visibility` | řetězec | Ne | `0..1` | Veřejný, omezený, soukromý nebo zděděný. |

**REQ-IDN-030:** Porovnání identifikátorů MUSÍ probíhat v souladu s pravidly normalizace a porovnávání deklarovaného schématu.

**REQ-IDN-031:** Vytvořitel NESMÍ označit externí identifikátor jako „ověřený registrem“, pokud tento stav není podložen zaznamenanou ověřovací operací.

**REQ-IDN-032:** Selhání při vyhodnocení NESMÍ samo o sobě způsobit neplatnost syntakticky platného trvalého identifikátoru.

**REQ-IDN-033:** Rozporuplné externí identifikátory MUSÍ být zachovány jako samostatná tvrzení, dokud nebudou výslovně vyřešeny, zamítnuty nebo nahrazeny.

**REQ-IDN-034:** Tvrzení typu „ORCID“ MUSÍ identifikovat fyzickou osobu; tvrzení typu „ROR“ MUSÍ identifikovat organizaci.

### 8.4 Prohlášení o příslušnosti

| Vlastnost | Typ | Povinná | Kardinalita | Popis |
|---|---|---:|---:|---|
| `id` | řetězec | Ano | `1` | Identifikátor stabilního tvrzení. |
| `agent` | reference agenta | Ano | `1` | Přidružený agent. |
| `organization` | údaje o zprostředkovateli | Ano | `1` | Organizace nebo obdobný institucionální zprostředkovatel. |
| `unit` | řetězec nebo odkaz na agenta | Ne | `0..1` | Katedra, fakulta, laboratoř nebo pracoviště. |
| `position` | vícejazyčný řetězec | Ne | `0..1` | Pozice nebo kontextový název. |
| `role` | term | No | `0..1` | Charakter vztahu. |
| `validFrom` | datum nebo datum a čas | Ne | `0..1` | Počátek známé platnosti. |
| `validUntil` | datum nebo datum a čas | Ne | `0..1` | Konec známé platnosti. |
| `source` | `ProvenanceAssertion` | Ano | `1` | Odpovědnost za zdroj a tvrzení. |
| `verification` | řetězec | Ne | `0..1` | Stav ověření. |

**REQ-IDN-040:** Příslušnost MUSÍ být vyjádřena jako vztah, nikoli jako neměnná textová vlastnost osoby.

**REQ-IDN-041:** Afiliace použitá u příspěvku BY MĚLA uvádět, zda se vztahuje k době vzniku příspěvku, době jeho odeslání, době zveřejnění nebo k jinému deklarovanému kontextu.

**REQ-IDN-042:** Chybějící datum začátku nebo konce MUSÍ znamenat, že tyto údaje nejsou známy nebo že se jedná o dobu neurčitou, a to v závislosti na kontextu profilu; NESMÍ to automaticky znamenat, že se jedná o aktuální období.

### 8.5 Kontaktní místo

| Vlastnost | Typ | Povinná | Kardinalita | Popis |
|---|---|---:|---:|---|
| `id` | řetězec | Ano | `1` | Identifikátor místní kontaktní osoby. |
| `type` | řetězec | Ano | `1` | E-mail, telefon, poštovní adresa, URI, služba pro zasílání zpráv nebo interní číslo. |
| `value` | řetězec | Ano | `1` | Hodnota kontaktu. |
| `purpose` | řetězec | Ne | `0..1` | Korespondence, redakční záležitosti, administrativa, veřejné záležitosti nebo osvětová činnost. |
| `visibility` | řetězec | Ano | `1` | Veřejný, omezený, soukromý nebo zděděný. |
| `validFrom` | datum nebo datum a čas | Ne | `0..1` | Počátek platnosti. |
| `validUntil` | datum nebo datum a čas | Ne | `0..1` | Konec platnosti |
| `source` | `ProvenanceAssertion` | Ano | `1` | Informace o zdroji a správě. |

**REQ-IDN-050:** Kontaktní údaje MUSÍ být v přenositelných vědeckých datech volitelné.

**REQ-IDN-051:** Soukromé nebo omezené kontaktní údaje MUSÍ být ve výstupech, které nejsou oprávněny je přijímat, vynechány, zašifrovány, podléhat kontrole přístupu nebo nahrazeny mechanismem předávání, který nezahrnuje citlivé údaje.

**REQ-IDN-052:** Shoda e-mailových adres NESMÍ být považována za nezvratný důkaz toho, že dva záznamy o identitě představují stejného účastníka.

### 8.6 Příspěvek

| Vlastnost | Typ | Povinná | Kardinalita | Popis |
|---|---|---:|---:|---|
| `id` | řetězec | Ano | `1` | Identifikátor stabilního příspěvku. |
| `agent` | odkaz na agenta | Ano | `1` | Spolupracující agent. |
| `target` | Odkaz na objekt vOMI | Ano | `1` | Rukopis, dokument, část, zdroj, událost, publikace nebo jiná entita, k níž byl příspěvek poskytnut. |
| `roles` | `ContributionRole[]` | Ano | `1..*` | Kontextové role přispěvatelů. |
| `order` | celé číslo nebo řetězec | Ne | `0..1` | Výslovné pořadí v definovaném seznamu přispěvatelů. |
| `orderContext` | řetězec | Ne | `0..1` | Seznam autorů, seznam editorů, seznam zobrazení nebo kontext definovaný v profilu. |
| `corresponding` | boolean | Ne | `0..1` | Označení odpovídajícího přispěvatele. |
| `attributionName` | řetězec | Ne | `0..1` | Název zdroje zobrazený v závislosti na kontextu. |
| `affiliations` | odkazy na afiliace | Ne | `0..*` | Afiliace související s tímto příspěvkem. |
| `statement` | vícejazyčný řetězec | Ne | `0..1` | Pro člověka srozumitelné prohlášení o příspěvku. |
| `validFrom` | datum nebo datum a čas | Ne | `0..1` | Začátek platnosti kontextu. |
| `validUntil` | datum nebo datum a čas | Ne | `0..1` | Konec platnosti kontextu. |
| `visibility` | řetězec | Ne | `0..1` | Veřejný, omezený, soukromý nebo zděděný. |
| `provenance` | `ProvenanceAssertion[]` | Ne | `0..*` | Původ tvrzení a historie změn. |

**REQ-IDN-060:** Příspěvek MUSÍ odkazovat přesně na jednoho agenta a přesně na jeden cíl.

**REQ-IDN-061:** Příspěvek MUSÍ obsahovat alespoň jednu roli.

**REQ-IDN-062:** Více rolí, které vykonává stejný aktér vůči stejnému cíli, MOHOU být zachyceny v jednom záznamu, pokud je jejich pořadí, viditelnost, příslušnost a kontext platnosti stejný; v opačném případě MUSÍ být zachyceny v samostatných záznamech.

**REQ-IDN-063:** `order` MUSÍ být vykládáno výhradně v rámci `orderContext` a příslušného cíle či profilu.

**REQ-IDN-064:** Odpovídající status NESMÍ znamenat, že daná osoba je prvním autorem, má vyšší postavení, je vlastníkem nebo je jediným kontaktem pro komunikaci.

**REQ-IDN-065:** `attributionName` MŮŽE přepsat zobrazení v kontextu příspěvku, ale NESMÍ přepsat formy jména agenta.

**REQ-IDN-066:** Příspěvek týkající se pouze části rukopisu BY MĚL být zaměřen na příslušnou část, objekt nebo zdroj, nikoli na celý rukopis.

### 8.7 Úloha příspěvku

| Vlastnost | Typ | Povinná | Kardinalita | Popis |
|---|---|---:|---:|---|
| `id` | řetězec | Ano | `1` | Identifikátor stabilního tvrzení o roli. |
| `term` | řetězec nebo URI | Ano | `1` | Hodnota role. |
| `scheme` | řetězec nebo URI | Ne | `0..1` | Slovník nebo registr definující daný termín. |
| `label` | vícejazyčný řetězec | Ne | `0..1` | Člověkem čitelný popisek. |
| `detail` | vícejazyčný řetězec | Ne | `0..1` | Vysvětlení v kontextu. |

Mezi hlavní pojmy týkající se rolí patří:

- `author`;
- `editor`;
- `translator`;
- `reviewer`;
- `publisher`;
- `data-curator`;
- `software-contributor`;
- `illustrator`;
- `project-administrator`;
- `funding-acquisition`;
- `other`.

Profily MOHOU využívat CRediT nebo jinou standardizovanou terminologii.

**REQ-IDN-070:** Termín role importovaný z řízeného slovníku MUSÍ zachovat svůj identifikátor ve slovníku nebo URI, je-li k dispozici.

**REQ-IDN-071:** Místní rozšíření role NESMÍ být nesprávně označeno jako termín z řízeného slovníku.

**REQ-IDN-072:** Popisek role má pouze informativní charakter a NESMÍ nahrazovat strojově srovnatelný termín role.

### 8.8 Prohlášení o původu

Tato specifikace používá následující minimální strukturu provenience, dokud stránka `OMI-SPEC-160` nedefinuje kompletní model změn a provenience.

| Vlastnost | Typ | Povinná | Kardinalita | Popis |
|---|---|---:|---:|---|
| `sourceType` | řetězec | Ano | `1` | Uživatel, registr, importovaný záznam, instituce, služba, migrace nebo rozšíření. |
| `source` | odkaz na agenta, systém nebo URI | Ne | `0..1` | Identita zdroje. |
| `assertedBy` | číslo agenta nebo číslo účtu | Ne | `0..1` | Strana odpovědná za potvrzení. |
| `assertedAt` | datum a čas | Č. | `0..1` | Čas ověření. |
| `evidence` | URI nebo odkaz na objekt | Ne | `0..*` | Podpůrné důkazy. |
| `confidence` | řetězec nebo číslo | Ne | `0..1` | Míra spolehlivosti specifická pro zdroj. |

**REQ-IDN-080:** Provedence MUSÍ rozlišovat mezi zdrojem tvrzení a subjektem, který je tímto tvrzením popsán.

**REQ-IDN-081:** Hodnota spolehlivosti MUSÍ uvádět svou stupnici nebo slovník.

### 8.9 Propojení účtů

Implementace MŮŽE udržovat chráněnou vazbu mezi identifikátorem účtu a identitou agenta.

| Vlastnost | Typ | Povinná | Kardinalita | Popis |
|---|---|---:|---:|---|
| `account` | odkaz na neprůhledný účet | Ano | `1` | Účet spravovaný implementací. |
| `agent` | reference agenta | Ano | `1` | Identifikátor přidruženého agenta. |
| `status` | řetězec | Ano | `1` | Čeká na vyřízení, ověřeno, zrušeno nebo prodlouženo. |
| `verifiedAt` | datum-čas | Ne | `0..1` | Čas ověření. |
| `source` | `ProvenanceAssertion` | Ano | `1` | Původ asociace. |

**REQ-IDN-090:** Přiřazení účtů NESMÍ obsahovat autentizační tajné klíče, tokeny, hashové hodnoty hesel ani přihlašovací údaje pro obnovení.

**REQ-IDN-091:** Propojení účtů NESMÍ být ve výchozím nastavení zahrnuta do exportu veřejného rukopisu.

**REQ-IDN-092:** Smazání nebo deaktivace účtu NESMÍ automaticky vést ke smazání historických údajů o autorství vědeckých prací.

### 8.10 Neznámí, anonymní, pseudonymní a utajení zástupci

Producent MUSÍ používat explicitní sémantiku:

| Stát | Význam |
|---|---|
| `unidentified` | Agent není známý nebo jej nelze obnovit. |
| `anonymous` | Autorství tohoto příspěvku není záměrně přiřazeno žádnému konkrétnímu veřejnému subjektu. |
| `pseudonymous` | Stabilní pseudonym je identita, která se v daném kontextu přiřazuje danému subjektu. |
| `withheld` | Je známa konkrétnější identita, ale přístup k ní je omezen. |

**REQ-IDN-100:** Skrytá identita MUSÍ mít stabilní chráněný odkaz, aby oprávněné systémy mohly zachovat kontinuitu, aniž by došlo k odhalení identity.

**REQ-IDN-101:** Spotřebitel, který nemá přístup k utajené identitě, MUSÍ zachovat stav „utajeno“ a NESMÍ jej změnit na „neidentifikováno“.

**REQ-IDN-102:** Pseudonymní agent BY MĚL být reprezentován jako identita agenta s vlastním stabilním identifikátorem a pseudonymním názvem.

## 9. Model zpracování

### 9.1 Vytvoření identity agenta

Producent, který splňuje požadavky, MUSÍ:

1. přiřadit stabilní identifikátor lokálního agenta;
2. vyberte nejkonkrétnější podporovaný typ agenta;
3. zaznamenat alespoň jednu použitelnou formu jména nebo explicitní neidentifikovaný stav;
4. zachovat zdroj importovaných tvrzení;
5. přiřazovat externí identifikátory jako tvrzení, nikoli nahrazovat lokální identitu;
6. před exportem použít pravidla viditelnosti.

### 9.2 Vytvoření příspěvku

Producent, který splňuje požadavky, MUSÍ:

1. určit nebo vytvořit činitel, který k tomu přispěl;
2. určit přesný cíl příspěvku;
3. přiřadit jednu nebo více kontextových rolí;
4. zaznamenat objednávku pouze v případě, že existuje kontext objednávky;
5. vázat příslušnost ke konkrétnímu příspěvku, místo aby se spoléhalo na aktuální příslušnost uvedenou v profilu;
6. klasifikovat veřejně přístupné a omezeně přístupné údaje;
7. zachovat původ v případě, že je příspěvek importován nebo deklarován jinou stranou.

### 9.3 Porovnání identit

Rozhodčí BY MĚL porovnávat důkazy v tomto pořadí:

1. ověřené identifikátory schémat;
2. vztahy mezi autoritativními zdroji;
3. výslovné předchozí sloučení nebo tvrzení týkající se stejného agenta;
4. shodné jména, afiliace, data a kontextové důkazy;
5. signály podobnosti specifické pro danou implementaci.

Samotné signály podobnosti NESMÍ vést k nevratnému automatickému sloučení.

### 9.4 Sloučení

Operace sloučení MUSÍ:

1. vyberte nebo vytvořte identitu nástupnického zástupce;
2. zachovat každý dřívější lokální identifikátor jako alias nebo náhradní odkaz;
3. uchovávat jedinečná tvrzení a informace o jejich původu;
4. zachovat protichůdná tvrzení;
5. přesměrovat odkazy na příspěvky, aniž by se změnil význam příspěvku;
6. zaznamenat událost sloučení z důvodu budoucí kompatibility s `OMI-SPEC-160`;
7. zůstávají reverzibilní, dokud příslušná politika uchovávání nedovolí jejich finalizaci.

### 9.5 Rozdělení

Operace rozdělení MUSÍ:

1. vytvořit jedinečné identifikátory agentů;
2. přehodnotit tvrzení a příspěvky na základě jasných důkazů;
3. zachovat původní záznam jako historický, nejednoznačný nebo nahrazený;
4. zaznamenávejte nevyřešené přiřazení, místo abyste hádali;
5. zachovat původ a dřívější odkazy.

### 9.6 Uvedení zdroje

Renderer by měl vybírat název v tomto pořadí:

1. `attributionName` zaměřené na konkrétní příspěvky;
2. preferovaný název odpovídající cílovému jazyku a písmu;
3. preferovaný název v jiném podporovaném jazyce nebo písmu;
4. příslušné zveřejněné jméno nebo pseudonym;
5. další zachovaný zobrazovací název;
6. autorizovaný, skrytý nebo anonymní štítek.

Renderer NESMÍ odhalit omezený název nebo identifikátor pouze proto, že se vyskytuje ve zdrojových datech.

## 10. Ověřování a zpracování chyb

### 10.1 Úrovně validace

Ověření zahrnuje:

- ověření syntaxe;
- strukturální validace;
- sémantická validace;
- ověření integrity odkazů;
- ověření schématu identifikátorů;
- ověření soukromí a viditelnosti;
- ověření profilu.

### 10.2 Chybové stavy

| Stav | Klasifikace | Požadované chování |
|---|---|---|
| Chybějící agent `id` | Chyba | Odmítnout nebo umístit identitu agenta do karantény. |
| Nepodporovaný typ agenta | Nepodporovaná funkce | Zachovat jako rozšíření nebo nahlásit nemožnost zpracování. |
| Příspěvek bez agenta nebo cíle | Chyba | Příspěvek zamítnout. |
| Příspěvek bez role | Chyba | Příspěvek zamítnout nebo umístit do karantény. |
| Chybný odkaz na agenta, cíl, příslušnost nebo náhradu | Chyba | Nahlásit a pokud možno zachovat nevyřešená data. |
| Neplatná syntaxe schématu | Chyba | Nahlásit; neoznačovat jako ověřené. |
| Resolver není k dispozici | Varování | Zachovejte tvrzení a nahlaste stav „nevyřešeno“. |
| Rozporuplné ověřené identifikátory | Chyba | Zachovat rozpor; zakázat automatické sloučení. |
| Více preferovaných názvů ve stejném kontextu | Chyba | Nahlásit a vyžadovat deterministické řešení konfliktů. |
| Omezený přístup k veřejným výstupům | Chyba zabezpečení | Před výstupem zablokujte, začerněte nebo nahraďte. |
| Přiřazení k intervalu dat, který není možný | Chyba | Zobrazit hlášení; data se nesmějí tiše přeskupit. |
| Neznámá vlastnost rozšíření | Varování nebo podporované rozšíření | Zachovat v souladu se zásadami pro rozšíření. |

### 10.3 Chybějící, nulové a prázdné hodnoty

- Chybějící vlastnost znamená, že není uvedeno žádné tvrzení.
- `null` NESMÍ se používat jako náhrada za „zadrženo“, „neznámé“ nebo „neplatí“, pokud takové přiřazení není definováno v profilu serializace.
- Prázdný řetězec nelze použít jako platný název, hodnotu identifikátoru, hodnotu kontaktu ani roli.
- Prázdné pole znamená, že producent prohlašuje, že v daném poli pro serializovaný kontext nejsou žádné hodnoty.
- „Neznámé“, „nezveřejněné“, „anonymní“ a „neplatí“ MUSÍ používat explicitní sémantiku tam, kde je toto rozlišení důležité.

### 10.4 Zachování dat v případě selhání

**REQ-IDN-110:** Spotřebitel, který není schopen interpretovat tvrzení, BY MĚL toto tvrzení, jeho identifikátor, viditelnost a původ uchovat pro účely exportu v rámci celého cyklu.

**REQ-IDN-111:** Validátor MUSÍ nahlásit umístění a klasifikaci každé chyby v identitním modelu, aniž by v protokolech určených pro širší publikum odhalil hodnoty s omezeným přístupem.

## 11. Rozšiřitelnost

### 11.1 Rozšiřovací body

Rozšíření mohou definovat:

- další typy agentů;
- použití názvů;
- systémy identifikátorů;
- ověřovací stavy;
- funkce v rámci organizace;
- typy kontaktů;
- role přispěvatelů;
- stavy viditelnosti;
- důkazy o původu;
- omezení specifická pro daný profil.

### 11.2 Neznámé přípony

Kompatibilní klient BY MĚL zachovat obsah s neznámou příponou, pokud je to bezpečné. MŮŽE ignorovat sémantiku přípon, kterou neimplementuje, ale NESMÍ tuto příponu vykládat jako základní vlastnost.

Rozšíření NESMÍ:

- oslabit pravidla na ochranu soukromí;
- předefinovat základní typ agenta;
- převést účet na agenta;
- považovat roli za trvalou vlastnost agenta;
- přeskočit stav ověření identifikátoru;
- odstranit původ z externího tvrzení.

### 11.3 Pravidla pro jmenné prostory

Termíny rozšíření BY MĚLY používat URI, registrovanou předponu nebo jmenný prostor odolný proti kolizím. Nekvalifikované lokální řetězce LZE používat pouze v rámci profilu nebo systému, který definuje jejich rozsah platnosti.

## 12. Verze a kompatibilita

Tato specifikace se řídí zásadami verzování na adrese OMI.

### 12.1 Rozměry pro zajištění kompatibility

Platné rozměry jsou:

- kompatibilita s čtečkami;
- kompatibilita s psaním;
- kompatibilita v obou směrech;
- kompatibilita schémat;
- kompatibilita identity a odkazu;
- soulad se zásadami ochrany osobních údajů;
- kompatibilita profilů.

### 12.2 Kompatibilní změny

Drobná aktualizace nebo opravná verze může:

- přidat volitelnou vlastnost;
- přidat termín agenta nebo role, který není v konfliktu;
- objasnit chování při porovnávání nebo při zobrazení;
- přidat mapování identifikátorů;
- přidat příklad nebo varování ohledně platnosti;
- upřesnit pokyny týkající se původu, aniž by došlo ke změně stávajícího významu.

### 12.3 Změny s dopadem na kompatibilitu

Mezi změny s dopadem na kompatibilitu patří:

- změna sémantiky rovnosti identit;
- změna požadované trvalosti identifikátoru;
- zavedení povinnosti zveřejnit totožnost, která byla dosud dobrovolná;
- změna významu pojmů „neznámý“, „nezveřejněný“, „anonymní“ nebo „pseudonymní“;
- nahrazení odkazů na příspěvky vloženými kopiemi agentů;
- změna výkladu pořadí;
- odstranění požadovaného původu nebo stavu ověření;
- změna výchozích nastavení viditelnosti způsobem, který by mohl vést k odhalení údajů.

### 12.4 Migrace

Při migraci MUSÍ být zachováno:

- identifikátory agentů nebo explicitní náhradní aliasy;
- všechny odkazy na příspěvky;
- formy jmen a písma;
- tvrzení o externích identifikátorech a stavy ověření;
- kontext příslušnosti;
- omezení viditelnosti;
- původ;
- nevyřešené konflikty.

Oddělení pro migraci MUSÍ nahlásit jakoukoli ztrátu dat.

### 12.5 Zastaralost

Zastaralá vlastnost nebo termín MUSÍ určovat:

- náhrada;
- dotčené verze;
- chování z hlediska kompatibility;
- nejstarší verze s odstraněnými prvky;
- požadavky na migraci.

## 13. Interoperabilita

### 13.1 Externí normy a systémy

| Externí standard nebo systém | Směr | Kvalita mapování | Poznámky |
|---|---|---|---|
| ORCID | Obousměrný | Podmíněně bezeztrátový | Identifikátor a ověření původu vyžadují samostatné zpracování. |
| ROR | Obousměrný | Podmíněně bezztrátový | Vztahuje se na identitu a příslušnost k organizaci. |
| CRediT | Obousměrný | Podmíněně bezeztrátový | Mapuje pojmy týkající se příspěvku a role, nikoli identitu agenta. |
| JATS Metadata přispěvatelů na XML | Obousměrná | S možnou ztrátou dat | Jméno, role, příslušnost a modely anonymity se liší podle profilu. |
| Metadata přispěvatelů Crossref | Export a import | Možné ztráty dat | Údaje o pracovním postupu a soukromé identifikační údaje nejsou součástí běžných záznamů o uložení. |
| Metadata přispěvatelů DataCite | Export a import | Možné ztráty | Slovník rolí a identifikátory jmen vyžadují přiřazení. |
| CSL JSON names | Obousměrné | S potenciálními ztrátami | CSL objekty typu „name“ nepředstavují úplný identitní model OMI. |
| Agenti Schema.org | Obousměrné | S možnou ztrátou dat | Kontext a původ mohou vyžadovat rozšíření. |

### 13.2 Uchovávání informací

Mapování BY MĚLA zachovávat:

- místní stabilní identita;
- řetězce názvů zdrojů;
- název, jazyk a písmo;
- schéma identifikátoru a hodnota;
- role přispěvatele;
- pořadí přispěvatelů;
- text o příslušnosti a identifikátory;
- příslušný stav;
- anonymita nebo stav utajení;
- původ a stav ověření, pokud to cíl umožňuje.

Zpráva o mapování MUSÍ identifikovat vynechané nebo zjednodušené sémantické prvky.

### 13.3 Chování při obousměrném přenosu

Obousměrný přenos je bezeztrátový pouze tehdy, pokud cílový formát dokáže zachovat veškerou relevantní sémantiku týkající se identity, role, pořadí, příslušnosti, viditelnosti a původu. V opačném případě MUSÍ zpracovatel tento obousměrný přenos klasifikovat jako podmíněně bezeztrátový nebo ztrátový.

## 14. Aspekty bezpečnosti, ochrany osobních údajů a integrity

Identifikační údaje mohou obsahovat osobní údaje, důvěrné identifikační údaje recenzentů, kontaktní údaje, vztahy k institucím, trvalé identifikátory a historické přiřazení. Nesprávné zveřejnění nebo sloučení těchto údajů může poškodit jednotlivce a narušit vědeckou provenienci.

### 14.1 Minimalizace objemu údajů

**REQ-IDN-200:** Vytvořitel MUSÍ uvést pouze identifikační a kontaktní údaje nezbytné pro deklarovaný účel a cílovou skupinu.

### 14.2 Řízení přístupu

**REQ-IDN-201:** Omezená a soukromá tvrzení MUSÍ být chráněna prostředky řízení přístupu odpovídajícími jejich klasifikaci.

**REQ-IDN-202:** Veřejný export MUSÍ rekurzivně uplatňovat pravidla viditelnosti na názvy, identifikátory, kontakty, afilace, příspěvky a důkazy o původu.

### 14.3 Integrita identifikátorů

**REQ-IDN-203:** Spotřebitel MUSÍ zachovat stav ověření a NESMÍ zvýšit úroveň důvěry pouze na základě toho, že identifikátor je syntakticky platný.

**REQ-IDN-204:** Odpovědi resolveru MUSÍ být před použitím považovány za externí vstup a ověřeny.

### 14.4 Bezpečnost při sjíždění do pruhu

**REQ-IDN-205:** Sloučení založené na pravděpodobnostním přiřazování MUSÍ podléhat kontrole nebo reverzibilnímu pracovnímu postupu, pokud by mohlo změnit veřejné uvedení zdroje.

### 14.5 Protokolování

**REQ-IDN-206:** Protokoly a validační zprávy BY MĚLY místo soukromých kontaktních údajů a jmen s omezeným přístupem používat identifikátory záznamů nebo anonymizované hodnoty.

### 14.6 Oddělení účtů

Ověřovací klíče a tokeny poskytovatelů MUSÍ zůstat mimo vědecké dokumenty a balíčky v rámci projektu „OMI“. Importovaný rukopis NESMÍ být schopen vytvořit ověřené propojení s účtem bez výslovně povolené důvěryhodné operace.

## 15. Aspekty přístupnosti

Uživatelská rozhraní zobrazující identifikační údaje BY MĚLA:

- zobrazit úplný přístupný název nezávisle na vizuálním formátování názvu;
- nespoléhejte se při ověřování nebo posuzování viditelnosti pouze na barvu;
- uvést textové popisky pro schémata identifikátorů a stavy ověření;
- zajistit, aby informace o pořadí přispěvatelů a příslušném stavu byly dostupné pro asistenční technologie;
- zachovat přístup pomocí klávesnice k alternativním názvům, afilacím a původu;
- vyhněte se zkracování jmen tak, aby při tom docházelo k odstranění rozlišujících informací bez možnosti jejich doplnění;
- umožnit uživatelům opravit nesprávně analyzované části jména.

Základní model MUSÍ zachovat sémantické rozdíly nezbytné pro přístupné zobrazení.

## 16. Aspekty internacionalizace

### 16.1 Názvy

Implementace MUSÍ podporovat hodnoty jmen v kódování Unicode. Nesmí předpokládat:

- každý člověk má křestní jméno a příjmení;
- příjmení následuje za křestním jménem;
- všechny složky jsou odděleny mezerami;
- velká písmena lze bezpečně normalizovat;
- jeden skript je kanonický;
- transliterace je reverzibilní;
- název je jazykově neutrální.

### 16.2 Jazyk a písmo

Pro označení jazyka BY SE MĚLY používat jazykové značky podle normy BCP 47. Kódy písma podle normy ISO 15924 MOHOU v případě potřeby tyto jazykové značky doplňovat.

### 16.3 Třídění

Třídicí klíče představují metadata pro zpracování, nikoli identitu. Třídicí klíč vygenerovaný na základě místního nastavení NESMÍ přepsat původní název.

### 16.4 Data a čas

Hodnoty obsahující pouze datum NESMÍ být převáděny na datum a čas bez zachování jejich původní přesnosti. U datumu a času BY se MĚL používat formát ISO 8601 a měl by být uveden časový posun nebo deklarované časové pásmo, pokud je tento rozdíl důležitý.

### 16.5 Obousměrný text

Renderery MUSÍ zajistit bezpečné zpracování obousměrného textu a NESMÍ měnit pořadí uložených jmen pouze na základě směru okolního rozhraní.

## 17. Příklady

Tyto příklady slouží jako orientační informace do doby, než budou zveřejněna kanonická schémata a testovací datové sady.

### 17.1 Minimální počet osob a příspěvek

```json
{
  "agents": [
    {
      "id": "agent-001",
      "type": "person",
      "names": [
        {
          "id": "name-001",
          "display": "Judit Balogh",
          "given": "Judit",
          "family": "Balogh",
          "language": "hu",
          "preferred": true
        }
      ]
    }
  ],
  "contributions": [
    {
      "id": "contribution-001",
      "agent": "agent-001",
      "target": "manuscript-001",
      "roles": [
        {
          "id": "role-001",
          "term": "author"
        }
      ],
      "order": 1,
      "orderContext": "author-list"
    }
  ]
}
```

V tomto příkladu je agent oddělen od příspěvku a pořadí je dáno kontextem.

### 17.2 Externí identifikátor a příslušnost

```json
{
  "id": "agent-002",
  "type": "person",
  "names": [
    {
      "id": "name-002",
      "display": "Katalin Kovács",
      "language": "hu"
    }
  ],
  "identifiers": [
    {
      "id": "identifier-001",
      "scheme": "orcid",
      "value": "0000-0002-1825-0097",
      "uri": "https://orcid.org/0000-0002-1825-0097",
      "subject": "agent-002",
      "verification": "self-asserted",
      "source": {
        "sourceType": "user",
        "assertedBy": "agent-002"
      }
    }
  ],
  "affiliations": [
    {
      "id": "affiliation-001",
      "agent": "agent-002",
      "organization": "agent-org-001",
      "unit": "Department of History",
      "validFrom": "2024-09-01",
      "source": {
        "sourceType": "user",
        "assertedBy": "agent-002"
      }
    }
  ]
}
```

### 17.3 Příspěvek pod pseudonymem

```json
{
  "agents": [
    {
      "id": "agent-pseudonym-001",
      "type": "person",
      "names": [
        {
          "id": "name-pseudonym-001",
          "display": "Researcher North",
          "usage": "pseudonym",
          "preferred": true
        }
      ]
    }
  ],
  "contributions": [
    {
      "id": "contribution-pseudonym-001",
      "agent": "agent-pseudonym-001",
      "target": "review-001",
      "roles": [
        {
          "id": "role-reviewer-001",
          "term": "reviewer"
        }
      ],
      "visibility": "restricted"
    }
  ]
}
```

### 17.4 Neplatný vložený přispěvatel

```json
{
  "contributions": [
    {
      "id": "contribution-invalid-001",
      "agent": {
        "fullName": "Example Author",
        "email": "author@example.org"
      },
      "target": "manuscript-001",
      "roles": []
    }
  ]
}
```

Tento příspěvek je neplatný, protože obsahuje záznam o osobě podobný účtu, místo aby odkazoval na agenta, neobsahuje žádnou roli příspěvku a zveřejňuje kontaktní údaje bez klasifikace viditelnosti.

### 17.5 Neplatné automatické sloučení

```json
{
  "merge": {
    "agents": ["agent-101", "agent-202"],
    "reason": "same-display-name"
  }
}
```

Toto je neplatné, protože pouhá shoda jmen není dostatečným důkazem pro sloučení na základě identity.

## 18. Odkazy na normy

- Open Manuscript Initiative (Základní principy), *Core Principles*, `OMI-SPEC-000`, verze `0.1.0`.
- Open Manuscript Initiative., *Scholarly Object Model*, `OMI-SPEC-120`, verze `0.1.0`.
- Open Manuscript Initiative, *Metadata Model*, `OMI-SPEC-140`, verze `0.1.0`.
- Open Manuscript Initiative: *Terminologie a definice*.
- Open Manuscript Initiative: *Životní cyklus specifikace*.
- Open Manuscript Initiative, *Zásady verzování*.

## 19. Informační zdroje

- ORCID ekosystém identifikátorů a záznamů.
- Registr výzkumných organizací.
- Taxonomie rolí přispěvatelů v systému CRediT.
- JATS metadata přispěvatele.
- Metadata přispěvatelů Crossref.
- Metadata přispěvatelů DataCite.
- Model názvu jazyka pro citace.

## 20. Stav realizace

Open Manuscript Studio v současné době obsahuje předběžné struktury související s identitou:

- `OmiPerson` se strukturovanými názvy, textem o příslušnosti a identifikátory;
- `User` včetně identifikátoru účtu, e-mailové adresy, profilu, ORCID, externích přihlašovacích údajů a nastavení;
- `WorkspaceMember` s kontextovými rolemi v pracovním prostoru.

Tyto struktury představují relevantní návrhovou práci, ale tuto specifikaci zatím neimplementují. Konkrétně současný model Studio stále postrádá:

- jasné oddělení identity účtu a agenta;
- příspěvkové objekty nezávislé na osobách;
- kontextové vazby;
- tvrzení o externích identifikátorech s uvedením původu;
- několik vícejazyčných tvarů názvu;
- zpracování chráněné viditelnosti;
- sladění identit a reverzibilní chování při slučování;
- přiřazení požadavků ke kódu a testy shody.

Klasifikace důkazů podle jejich důvěryhodnosti je vedena v databázi „[Implementation Status Matrix](../governance/implementation-status-matrix.md)“.

## 21. Nevyřešené otázky

| Problém | Dopad | Požadované rozhodnutí | Sledování |
|---|---|---|---|
| Kanonický slovník vlastností strojově čitelných dat | Zveřejnění schématu | Stanovení přesných názvů serializací a jmenných prostorů. | Budoucí vydání schématu |
| Rozsah identifikace agentů napříč balíčky a repozitáři | Trvalost identifikátorů | Definujte, kdy mají lokální identifikátory zůstat neměnné během přenosu. | Koordinace`OMI-SPEC-160` |
| Registr rolí s řízeným přispíváním | Interoperabilita | Rozhodnout, zda OMI přijme, upraví nebo namapuje CRediT a místní role. | Budoucí problém s registrem |
| Slovník stavů ověřování | Interoperabilita resolverů | Definovat minimální společné stavy a požadavky na důkazy. | Budoucí problém s validací |
| Balíček pro utajení identity recenzenta | Ochrana soukromí a uchovávání | Sladit ochranu identity s modely recenzí a kontejnerů. | `OMI-SPEC-200` a `OMI-SPEC-330` |
| Výměna přiřazení účtů | Zabezpečení | Určete, zda může některý chráněný profil serializovat přiřazení účtů. | `OMI-SPEC-190` a `OMI-SPEC-310` |
| Přehledy skupinového autorství a členství v konsorciu | Uvedení zdroje | Definice důkazů o členství a časového kontextu. | Budoucí revize návrhu |
| Model událostí sloučení a rozdělení identit | Provenience | Propojení operací s modelem verzí a změn. | `OMI-SPEC-160` |

## 22. Historie změn

| Verze | Datum | Stav | Klasifikace změn | Shrnutí |
|---|---|---|---|---|
| `0.1.0` | 6. srpna 2026 | Návrh | První návrh | Byly aktivovány `OMI-SPEC-150` a definovány požadavky na agenty, jména, externí prohlášení o identitě, příslušnost, příspěvky, oddělení účtů, ochranu soukromí, ověřování a interoperabilitu. |

## 23. Poděkování

Tento návrh vychází ze stávající terminologie projektu „OMI“, z modelů domén uživatelů a pracovních prostorů projektu „Open Manuscript Studio“ a ze zavedených postupů v oblasti vědeckých identifikátorů a metadat o přispěvatelích. Za veškerý normativní obsah nadále odpovídají lidští správci.
