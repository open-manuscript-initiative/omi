# Režimy nasazení studia

Open Manuscript Studio využívá jednu kódovou základnu a jednu řadu webových, desktopových a mobilních klientů. Profil nasazení na straně serveru určuje, kdo spravuje přihlašovací údaje pro externí služby a zda jsou povoleny rozhraní pro správu instituce.

## Osobní režim

```dotenv
DEPLOYMENT_MODE=personal
```

Osobní režim je určen pro nezávislé autory a jednotlivé uživatele. Studio nikdy nepožaduje heslo pro službu ORCID. Ověřování prostřednictvím služby ORCID probíhá na vlastní autorizační stránce služby ORCID prostřednictvím OAuth/OpenID Connect.

Režim „Personal“ využívá jmenný prostor pro přihlašovací údaje spravovaný službou „Personal/OMI“:

```dotenv
ORCID_CLIENT_ID=APP-...
ORCID_CLIENT_SECRET=...
ORCID_REDIRECT_URI=https://studio.example.org/api/auth/orcid/callback
```

Cílovou architekturou zůstává OMI, která zprostředkovává tok ORCID, takže jednotliví autoři nemusí sami získávat ani spravovat ORCID  přihlašovací údaje.API

## Institucionální režim

```dotenv
DEPLOYMENT_MODE=institutional
```

Institucionální režim je určen pro vydavatele, časopisy, univerzity, repozitáře, výzkumné infrastruktury a spravované instalace OJS/OMP. Instituce používá samostatný jmenný prostor pro přihlašovací údaje, který je ve vlastnictví organizace:

```dotenv
INSTITUTIONAL_ORCID_CLIENT_ID=APP-...
INSTITUTIONAL_ORCID_CLIENT_SECRET=...
INSTITUTIONAL_ORCID_REDIRECT_URI=https://publisher.example.org/api/auth/orcid/callback
INSTITUTIONAL_ORCID_API_TYPE=public
```

`INSTITUTIONAL_ORCID_API_TYPE` přijímá adresy `public` nebo `member`. Integrační klíče zůstávají na straně serveru a nesmí být nikdy odhaleny prostřednictvím úložiště prohlížeče, proměnných sestavení frontendu ani konfigurace na straně klienta.

Při nasazení v institucionálním prostředí lze rovněž definovat organizační strukturu a počáteční nastavení správce:

```dotenv
INSTITUTIONAL_NAME=
INSTITUTIONAL_ROR_ID=
INSTITUTIONAL_ADMIN_EMAILS=
```

Nastavená e-mailová adresa správce sama o sobě nezakládá vlastnictví instituce. Příslušný účet ve Studiu musí mít již propojenou identitu OIDC nebo SAML, aby mohlo dojít k automatickému počátečnímu přidělení účtu `OWNER`.

## Zahájení práce a přihlášení správce instituce

Přihlašovací rozhraní pro správce instituce je k dispozici pouze v případě, že server běží v institucionálním režimu. Minimální konfigurace pro spuštění je následující:

```dotenv
DEPLOYMENT_MODE=institutional
INSTITUTIONAL_NAME="Example University Press"
INSTITUTIONAL_ADMIN_EMAILS="admin@example.org"
```

Pokud má instituce identifikátor typu „ROR“, je třeba jej také nakonfigurovat:

```dotenv
INSTITUTIONAL_ROR_ID="https://ror.org/012345678"
```

Lze zadat více adres správců bootstrapu ve formě seznamu povolených adres oddělených čárkami:

```dotenv
INSTITUTIONAL_ADMIN_EMAILS="admin@example.org,second.admin@example.org"
```

Proces bootstrapu záměrně vyžaduje splnění dvou nezávislých podmínek:

1. e-mailová adresa účtu Studio se musí shodovat s adresou uvedenou na stránce `INSTITUTIONAL_ADMIN_EMAILS`; a
2. K tomuto účtu Studio musí být již propojena identita typu „`OIDC`“ nebo „`SAML`“.

Místní účet s e-mailovou adresou a heslem sám o sobě nestačí k automatickému přidělení účtu v systému `OWNER`. Tím se zabrání tomu, aby se znalost místně nastaveného hesla považovala za důkaz kontroly ze strany instituce.

Jakmile se oprávněný správce přihlásí, Studio provede na straně serveru následující postup:

1. ověřuje účet ve Studiu;
2. zkontroluje nakonfigurovanou institucionální zásadu bootstrapu;
3. vytvoří záznam o instituci, pokud ještě neexistuje;
4. vytvoří nebo aktualizuje členství příslušné instituce na úroveň „`OWNER`“;
5. spojuje členství s propojenou federovanou identitou; a
6. přijme relaci správce instituce teprve po ověření platného členství na stránkách `ADMIN` nebo `OWNER`.

Správce pak může na přihlašovací stránce Studia použít režim přihlášení **Správce instituce**. K zahájení tohoto procesu přihlášení lze použít ověření pomocí e-mailu a hesla, lze také využít nakonfigurované poskytovatele OIDC, avšak backend vždy provede kontrolu role v rámci instituce, než udělí správcovský kontext.

Oprávnění správce nelze získat samostatnou registrací prostřednictvím veřejného registračního formuláře. Další správci by měli být jmenováni v rámci administrativního postupu dané instituce, nikoli prostřednictvím neomezeného rozšiřování seznamu povolených uživatelů.

Po změně proměnných prostředí týkajících se nasazení nebo poskytovatele identit restartujte službu „API“ v aplikaci Studio, aby se načítala nová konfigurace serveru. Před pokusem o přihlášení pomocí bootstrapu ověřte aktivní profil nasazení v zápatí aplikace Studio nebo prostřednictvím koncového bodu pro stav poskytovatele ověřování bez tajných údajů.

## Izolace přihlašovacích údajů

Směrování pověření je deterministické a řídí se zásadami služby `DEPLOYMENT_MODE`:

- `personal` používá pouze stránky `ORCID_CLIENT_ID`, `ORCID_CLIENT_SECRET` a `ORCID_REDIRECT_URI`.
- `institutional` používá výhradně sadu přihlašovacích údajů „`INSTITUTIONAL_ORCID_*`“.
- Režim „Institutional“ se nikdy automaticky nepřepne na přihlašovací údaje v režimu „Personal“ nebo „OMI“.
- Pokud chybí aktivní sada přihlašovacích údajů, je služba „ORCID“ označena jako nenakonfigurovaná.
- Částečně aktivní dvojice přihlašovacích údajů způsobí selhání ověření konfigurace serveru.
- Studio nikdy nezveřejňuje žádné z tajných klíčů klienta prostřednictvím svého stavu běhu API.

Síť „ORCID“ je vybírána nezávisle:

```dotenv
ORCID_ENVIRONMENT=sandbox
```

nebo:

```dotenv
ORCID_ENVIRONMENT=production
```

To umožňuje bezpečné institucionální testování v prostředí sandboxu ORCID před spuštěním do produkčního provozu.

## Přihlášení pomocí federovaného účtu

Studio může navíc poskytovat nastavené poskytovatele služeb Google, Microsoft a obecné či institucionální poskytovatele OpenID Connect. Tito poskytovatelé využívají postup autorizačního kódu s podporou PKCE a ověřování stavového kódu, jednorázového kódu, vydavatele, příjemce a podpisových klíčů na straně serveru.

Dosud neznámá externí identita si může vytvořit účet ve Studiu, pokud poskytovatel předloží požadované ověřené identifikační údaje. Stávající účet ve Studiu **se** automaticky nepropojí pouze na základě toho, že poskytovatel nahlásí stejnou e-mailovou adresu; propojení vyžaduje výslovnou akci ze strany přihlášeného uživatele.

Při přihlášení správce instituce lze využít nakonfigurované poskytovatele OIDC, ale server před přijetím správcovského kontextu stále ověřuje, zda má účet aktivní členství v instituci `ADMIN` nebo `OWNER`.

## ORCID bezpečnostní model

Profil nasazení nemění pravidlo ověřování: Studio nikdy neshromažďuje, nepřenáší ani neukládá heslo uživatele ORCID. Uživatel se ověřuje přímo na adrese ORCID, a to včetně dvoufaktorového ověřování, je-li povolené, a Studio přijímá pouze výsledek z OAuth/OpenID Connect.

Režimy „osobní“ a „instituční“ se liší ve vlastnictví a správě přihlašovacích údajů, nikoli však v zacházení s uživatelskými jmény a hesly.

ORCID se záměrně nepoužívá jako přihlašovací údaj pro správce instituce. Zůstává osobním akademickým identifikátorem a může být součástí procesů ověřování identity autora a kryptografického podepisování.

## Profily a role institucí

Současný model „Studio Identity“ odděluje trvalá data osobního účtu od členství vázaných na konkrétní organizaci.

Účet může mít více členství v institucích s jednou výchozí příslušností. Role institucí jsou:

- `MEMBER`;
- `ADMIN`;
- `OWNER`.

Název organizace a identifikátor ROR jsou sdílené údaje o instituci. K členství patří katedra, pracovní pozice, institucionální e-mailová adresa, propojená institucionální identita a stav výchozího přidružení.

Koncové body správce instituce tyto role vynucují na straně serveru. Poslední institucionální `OWNER` je chráněn před náhodným odstraněním nebo snížením oprávnění.

Úplný přehled oprávnění najdete na adrese [Institutional and Central Administration](./institutional-administration.md) a model API.

## Centrální správa systému „OMI“

Správa napříč institucemi představuje samostatnou úroveň oprávnění a nikdy se neodvozuje od členství v instituci.

Počáteční centrální správu lze spustit pomocí:

```dotenv
CENTRAL_ADMIN_EMAILS=
INSTITUTION_API_TOKEN_TTL_DAYS=365
```

Stejně jako v případě bootstrapu instituce musí mít účet propojenou identitu OIDC nebo SAML, než se může stát počátečním centrálním `OWNER`.

Centrální správci mohou spravovat instituce, správce institucí, přihlašovací údaje pro službu „API“ a záznamy o auditu správy. Tato oprávnění **ne** zahrnují přístup k rukopisům, recenzím ani redakčnímu obsahu.

## Správce instituce API

Automatizace v rámci instituce využívá speciální přihlašovací údaje stroje namísto tokenů pro uživatelské relace. Každý přihlašovací údaj patří přesně jedné instituci, má jasně definované rozsahy, může vypršet nebo být zrušen a po jednorázovém zobrazení tokenu je uložen pouze jako hash.

Mezi současné oblasti působnosti patří:

```text
institution:read
members:read
members:write
integrations:read
integrations:write
```

Přihlašovací údaje stroje nemohou měnit role v rámci služby `OWNER`.

## Viditelnost v běhu

Aktivní profil nasazení je zpřístupněn backendem aplikace Studio a zobrazuje se v zápatí aplikace jako `OMI Studio · Personal` nebo `OMI Studio · Institutional`. Pokud stránka ORCID využívá síť Sandbox, v zápatí se navíc zobrazuje `ORCID Sandbox`.

`GET /api/auth/providers` zveřejňuje také veřejně dostupná metadata o nasazení a poskytovatelích. Například:

```json
{
  "deployment": {
    "mode": "institutional",
    "label": "Institutional"
  },
  "providers": {
    "orcid": {
      "enabled": true,
      "environment": "sandbox",
      "credentialSource": "institutional",
      "apiType": "public"
    }
  }
}
```

## Konstrukční omezení

- Režim nasazení je řízen serverem, nikoli stavem prohlížeče.
- Model dokumentu a balíčky pro přenosné formáty (OMI) zůstávají v obou režimech stejné.
- Stejné binární soubory Studio lze použít jak pro osobní, tak pro institucionální nasazení.
- ORCID Studio s hesly nikdy nepracuje.
- Identity v testovacím prostředí a v produkčním prostředí ORCID zůstávají oddělené podle vydavatele.
- Oprávnění institucionálních a centrálních správců jsou oddělená od oprávnění týkajících se rukopisů a redakce.
- Role institucí a centrální role představují oddělené úrovně oprávnění.
- Pro počáteční privilegované spuštění je zapotřebí jak účet zapsaný na seznamu povolených účtů, tak propojená identita OIDC/SAML.
- Přístupové údaje pro institucionální strojové API jsou vázány na konkrétní rozsah a instituci.
- Režim „Personal“ může přesměrovat ověřování přes službu „OMI Identity“, aniž by došlo ke změně způsobu přihlášení na stránce ORCID, který vidí uživatel.

## Stav realizace

V aktuální vývojové větvi Studio jsou implementovány následující funkce: směrování přihlašovacích údajů typu „ORCID“ specifické pro dané nasazení, federované přihlášení OIDC, členství institucí, ověřování správců institucí, centrální správa, přihlašovací údaje typu „API“ pro správce institucí s omezeným rozsahem oprávnění a události auditu správy.

Provoz v produkčním prostředí stále závisí na migraci databáze identit specifické pro danou instalaci, konfiguraci serveru, registraci poskytovatelů a běžném zabezpečení a optimalizaci nasazení z hlediska bezpečnosti a stability.
