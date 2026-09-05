---
id: institutional-administration
title: Instituční a ústřední správa
sidebar_label: Správa institucí
keywords:
  - institutional administration
  - central administration
  - institution admin API
  - OIDC
  - SAML
  - roles
  - API credentials
  - audit log
---

# Instituční a ústřední správa

Open Manuscript Studio nyní rozlišuje mezi osobní akademickou identitou, členstvím v instituci, správou instituce a ústřední správou OMI jako samostatné úrovně oprávnění.

Toto oddělení je záměrné: **správní pravomoc neznamená přístup k rukopisům, recenzím, redakčním rozhodnutím ani k jinému vědeckému obsahu**. Přístup k obsahu se i nadále řídí modely oprávnění pro rukopisy/pracovní prostory a publikační workflow.

## Autorizační letadla

### Osobní účet ve Studiu

Účet Studio představuje trvalou identitu, která se používá napříč prohlížeči, stolními počítači i mobilními zařízeními. Může zahrnovat heslo a metody federovaného přihlášení, informace z osobního profilu a jedno či více institucionálních členství.

### Členství v instituci

Každé členství propojuje jeden účet Studio s jednou institucí a zahrnuje jednu ze tří rolí:

- `MEMBER` — běžná institucionální příslušnost;
- `ADMIN` — správce instituce;
- `OWNER` — vlastník instituce s oprávněním ke změnám rolí na úrovni vlastníka.

Sdílejí se údaje o instituci, jako je název organizace a identifikátor ROR. Údaje o oddělení, pozici, institucionální e-mailové adrese, propojené institucionální identitě a výchozím stavu přidružení patří k členství, nikoli k trvalému osobnímu účtu.

Uživatel může patřit k více institucím, přičemž jedno členství lze vybrat jako výchozí příslušnost.

### OMI ústřední správa

Údaje o centrální správě jsou uloženy odděleně od údajů o členství v instituci. Centrální správce má k dispozici buď:

- `ADMIN` — meziorganizační provozní správa;
- `OWNER` — správa centrálního administrátora nad rámec běžné centrální správy.

Instituce `OWNER` **není** automaticky ústředním správcem a ústřední správce není automaticky členem ani vlastníkem žádné instituce.

## Přihlášení správce instituce

V rámci institucionálních nasazení lze při používání stejného účtu ve Studio aktivovat režim přihlášení určený pro správce dané instituce.

Přihlášení správce hesel je povoleno pouze v případě, že ověřený účet má aktivní členství na `ADMIN` nebo `OWNER`.

Při federovaném přihlášení správce lze využít nakonfigurované poskytovatele služeb Google, Microsoft nebo institucionální poskytovatele OpenID Connect. Po dokončení externího přihlášení Studio nejprve ověří kontext institucionálního správce na serveru, než přijme správcovskou relaci.

ORCID nejedná se záměrně o identifikační údaj pro správce instituce. Identifikátor „ORCID“ zůstává osobním akademickým identifikátorem a mechanismem pro ověření identity autora.

## Zahájení práce správce instituce

V rámci spravovaných institucionálních nasazení lze definovat počáteční seznam povolených institucí a správců:

```dotenv
INSTITUTIONAL_NAME=
INSTITUTIONAL_ROR_ID=
INSTITUTIONAL_ADMIN_EMAILS=
```

Samotný zápis na seznam povolených e-mailových adres nezakládá vlastnické právo. Automatické počáteční nastavení účtu typu „`OWNER`“ vyžaduje, aby měl odpovídající účet ve Studiu propojenou identitu OIDC nebo SAML. Účty založené pouze na hesle nejsou nikdy automaticky povýšeny.

## Zahájení centrálního správce

Prvního centrálního správce lze spustit pomocí:

```dotenv
CENTRAL_ADMIN_EMAILS=
INSTITUTION_API_TOKEN_TTL_DAYS=365
```

Stejně jako v případě bootstrapu instituce musí mít účet na seznamu povolených účtů již propojenou identitu OIDC nebo SAML, než se může stát počátečním centrálním `OWNER`.

Tím se zabrání tomu, aby účet chráněný pouze heslem nebo shoda e-mailové adresy vedly k nepozorovanému získání správcovských oprávnění napříč institucemi.

## Funkce centrální správy

API pro správu lidských zdrojů je dostupný na adrese `/api/central-admin` a podporuje:

- kontext centrálního správce;
- seznam institucí, jejich vytváření, aktualizace, aktivace a deaktivace;
- správa prostřednictvím centrálního administrátora (pouze `OWNER`);
- jmenování a odvolání správce instituce;
- vytváření a rušení přístupových údajů pro instituci Admin API;
- vyhledávání záznamů o auditu v systému správy.

Aplikace tyto ovládací prvky v nastaveních účtu zpřístupňuje pouze uživatelům s oprávněním pro centrální správu.

Tato implementace chrání poslední centrální `OWNER` a poslední instituci `OWNER` před náhodným odstraněním nebo snížením priority.

## Správce instituce API

Instituce mohou také obdržet přístupové údaje pro stroje za účelem automatizace. Tyto přístupové údaje jsou vázány přesně na jednu instituci a používají explicitní rozsahy.

Tokeny typu „Raw“ mají následující podobu:

```text
omi_ia_...
```

Kompletní token se vrátí pouze jednou, a to při jeho vytvoření. Studio ukládá pouze hash typu „SHA-256“ spolu s veřejným prefixem pro identifikaci, stavem platnosti/zrušení a metadaty o použití.

Počáteční rozsahy jsou:

```text
institution:read
members:read
members:write
integrations:read
integrations:write
```

První koncové body strojů verze v1 jsou:

```text
GET   /api/institution-admin/v1/context
GET   /api/institution-admin/v1/members
PATCH /api/institution-admin/v1/members/:membershipId/role
```

Přístupová oprávnění stroje neumožňují přiřazovat, odebírat, povyšovat ani snižovat role v rámci služby „`OWNER`“. Ke změnám vlastnictví je zapotřebí lidský vlastník instituce nebo centrální správce.

Rozsahy „`integrations:read`“ a „`integrations:write`“ vymezují hranice oprávnění pro správu integrace v rámci dané instituce. Jednotlivé integrační koncové body lze přidávat, aniž by došlo k rozšíření přihlašovacích údajů mimo danou instituci.

## Model auditu

Správní akce se zaznamenávají do auditových událostí, do kterých lze zapisovat pouze přírůstkově. V závislosti na dané akci může auditový záznam obsahovat:

- přihlašovací údaje lidského správce nebo instituce API;
- instituce;
- název akce;
- typ cíle a identifikátor cíle;
- metadata akce, která nejsou tajná;
- IP adresa klienta, je-li k dispozici;
- čas vytvoření.

Hesla, nezpracované tokeny služby API, tajné údaje služby OAuth, text rukopisu a tajné údaje poskytovatele se nesmí zapisovat do administrativního auditního protokolu.

## Bezpečnostní hranice

Architektura správy se řídí následujícími pravidly:

1. Role institucí a centrální role jsou uloženy odděleně.
2. Žádná role správce sama o sobě neuděluje přístup k rukopisům ani redakčnímu obsahu.
3. Federované identity jsou identifikovány podle vydavatele a subjektu, nikoli podle proměnlivých zobrazovaných jmen.
4. Pro počáteční privilegované spuštění je kromě seznamu povolených e-mailových adres zapotřebí také propojená identita OIDC/SAML.
5. Tokeny typu „API“ jsou vázány na instituci, mají omezený rozsah platnosti, jsou časově omezené a odvolatelné a ukládají se pouze jako hashové hodnoty.
6. Stroj API nemůže měnit role vlastníků.
7. Ochrany na úrovni centrální a na úrovni instituce (posledního vlastníka) zabraňují náhodnému administrativnímu zablokování.
8. Správní úkony lze podrobit auditu, aniž by docházelo k ukládání důvěrných informací či vědeckého obsahu.

## Vztah k režimům nasazení

Stejný klientský kód Studio lze používat jak v osobních, tak v institucionálních nasazeních. Režim nasazení určuje přihlašovací údaje pro externí služby spravované serverem a institucionální administrační rozhraní; nemění však model rukopisu „OMI“ ani přenositelnost dokumentů.

Informace o směrování přihlašovacích údajů a konfiguraci na úrovni nasazení najdete na adrese [Studio deployment modes](./studio-deployment-modes.md) a aktuální přehled o stavu zralosti referenční implementace na adrese [Studio implementation status](../governance/studio-implementation-status.md).
