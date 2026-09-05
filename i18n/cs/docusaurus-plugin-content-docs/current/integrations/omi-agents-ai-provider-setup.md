---
title: OMI Nastavení poskytovatele AI pro agenty
sidebar_label: OMI Nastavení poskytovatele AI pro agenty
---

# OMI Nastavení poskytovatele AI pro agenty

OMI Agenti mohou využívat externího poskytovatele umělé inteligence pro jazykovou korekturu, pomoc s metadaty, vytváření shrnutí a kontrolu citací. Studio ukládá tajné klíče poskytovatele API v zašifrované podobě na serveru Studio API a po jejich uložení je klientovi nevrací.

Současné uživatelské rozhraní programu Studio nabízí předvolby pro:

- OpenAI
- Mistral AI
- Groq
- OpenRouter
- vlastní koncové body HTTPS kompatibilní s OpenAI

OpenAI používá svůj nativní formát **Responses API**. Ostatní vestavění poskytovatelé a vlastní poskytovatelé kompatibilní s OpenAI používají formát **Chat Completions** API.

## Nastavení OpenAI

### 1. Vytvořte klíč OpenAI typu „API“

Otevřete nastavení klíče na platformě OpenAI (API) a vytvořte speciální tajný klíč projektu pro agenty OMI. Doporučujeme použít výstižný název, například „`OMI-Agent`“.

Předplatné služby ChatGPT a fakturace služby OpenAI „API“ jsou oddělené. Samotné předplatné služby ChatGPT Plus neposkytuje kredit nAPI, proto je nutné fakturaci služby „API“ nastavit samostatně pro účet nebo projekt OpenAI Platform, který je vlastníkem klíče.

Pro klíč určený pro službu OMI použijte oprávnění **Omezená** namísto udělení přístupu ke všem funkcím služby API.

### 2. Omezte klíč na složku „Responses“ API

Pro aktuální integraci OpenAI je minimální požadovaná kapacita modelu následující:

- **Odpovědi (`/v1/responses`) → Žádost**

Následující oprávnění nejsou pro agenty služby „OMI“ vyžadována, pokud je vybrána služba OpenAI, a mohou zůstat nastavená na **Žádná**:

- Doplňování textu v chatu
- Převod textu na řeč
- V reálném čase
- Vložení
- Obrázky
- Moderování
- Asistenti
- Vlákna
- Hodnocení
- Dolaďování
- Soubory
- Videa
- Obchody Vector
- Podněty
- Dávka
- Tunely
- Datové soubory

`List models` je rovněž volitelný, protože Studio odesílá přímo nakonfigurovaný název modelu, místo aby dotazovalo katalog modelů.

Po změně oprávnění omezeného klíče může OpenAI potřebovat několik minut, než se nový rozsah oprávnění projeví. Během této doby může Studio dočasně vracet odpověď HTTP 401 obsahující:

```text
Missing scopes: api.responses.write
```

Pokud byl klíč nastaven správně, počkejte několik minut a před výměnou klíče znovu proveďte test připojení.

### 3. Nakonfigurujte poskytovatele ve studiu

V aplikaci Studio otevřete:

**Nabídka Manuscript → Integrace → Agenti služby „OMI“ → Poskytovatel AI**

Potom:

1. Jako poskytovatele vyberte **OpenAI**.
2. Studio automaticky nastaví cílovou adresu na `https://api.openai.com/v1/responses`.
3. Zadejte název modelu, který se má použít pro agenty služby „OMI“.
4. Vložte klíč OpenAI „API“ do pole **„API“**.
5. Vyberte možnost **Uložit a otestovat poskytovatele AI**.

Tajný klíč se odešle do studia API a uloží se v zašifrované podobě. Po uložení uživatelské rozhraní pouze informuje o existenci tajného klíče; uložený klíč však nevyvolává ani nezobrazuje. Nový klíč je třeba zadat pouze v případě, že se nahrazuje stávající tajný klíč.

### 4. Zkontrolujte připojení

Úspěšný test v produkčním prostředí změní stav poskytovatele AI na **Ready**. OMI Agenti poté automaticky znovu zkontrolují svůj vlastní stav.

Pokud je poskytovatel nakonfigurován, ale není připraven, Studio zobrazí bezpečnou chybovou zprávu vrácenou poskytovatelem. Mezi typické příklady patří nedostatečná oprávnění pro klíč „API“, nedostupný model, omezení týkající se fakturace nebo kvót či neplatná konfigurace poskytovatele.

Jakmile bude stav poskytovatele připraven, uložte a otestujte samotnou konfiguraci agentů služby „OMI“. Stav agentů služby „OMI“ by se poté měl změnit na **Ready**.

## Další předvolby poskytovatelů

U služeb Mistral AI, Groq a OpenRouter Studio automaticky vyplní vestavěný koncový bod „Chat Completions“ daného poskytovatele. Uživatel obvykle potřebuje zadat pouze název modelu a klíč „API“.

Vlastní poskytovatelé lze použít, pokud poskytují koncový bod HTTPS bez přihlašovacích údajů, který je kompatibilní se strukturou požadavků a odpovědí služby OpenAI Chat Completions. Studio nepovoluje adresy URL poskytovatelů obsahující vložené přihlašovací údaje ani cíle v lokální nebo soukromé síti pro spuštění agenta.

## Bezpečnostní model

OMI Agenti jsou navrženi na základě principu minimálních oprávnění a návrhů, které lze přezkoumat:

- tajemství poskytovatele API jsou v klidu šifrována na serveru Studio API;
- tajemství se po uložení nevracejí zpět do prohlížeče ani do nativního klienta;
- externí poskytovatelé obdrží pouze obsah a rozsah nezbytný pro požadovanou operaci;
- obsah důvěrného přezkumu vyžaduje výslovné povolení, než může být odeslán do externí služby;
- přímý zápis do rukopisu nebo metadat vyžaduje oprávnění s vyšší úrovní a výslovné potvrzení uživatele;
- Výchozí pracovní postup vygeneruje návrh, který podléhá kontrole ze strany uživatele.

V produkčním prostředí nebo při nasazení v institucích používejte pro službu OMI samostatné klíče poskytovatele, místo abyste znovu používali univerzální administrativní klíče API. Omezte každý klíč na nejmenší sadu funkcí poskytovatele, které vybraná integrace vyžaduje.

## Řešení problémů

### `Missing scopes: api.responses.write`

Klíč OpenAI zatím nemá oprávnění k volání služby Responses API, případně se změna oprávnění ještě neprojevila. Nastavte **Responses (`/v1/responses`) → Request**, uložte oprávnění klíče OpenAI, počkejte několik minut a zkuste to znovu.

### HTTP 401

Zkontrolujte klíč „API“, členství v projektu, roli v organizaci/projektu a rozsahy omezeného klíče. Studio zahrnuje do výsledku testu bezpečnou chybovou zprávu poskytovatele, aby bylo možné diagnostikovat problémy s oprávněními.

### HTTP 400

Poskytovatel přijal ověřený požadavek, ale odmítl jeho obsah. Zkontrolujte výběr modelu a konfiguraci poskytovatele. V případě OpenAI použijte přednastavení OpenAI, aby Studio využívalo koncový bod „Responses“ (API) namísto koncového bodu „Chat Completions“.

### Nakonfigurováno, ale není připraveno

To znamená, že nastavení agentů služby „OMI“ existuje, ale příslušný poskytovatel umělé inteligence neprošel testem živého připojení. Nejprve vyřešte chybu poskytovatele a poté znovu otestujte agenty služby „OMI“.
