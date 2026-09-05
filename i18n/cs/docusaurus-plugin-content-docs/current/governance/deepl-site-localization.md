---
title: Postup lokalizace webových stránek DeepL
sidebar_label: Lokalizace webových stránek DeepL
---

# Postup lokalizace webových stránek DeepL

Webová stránka OMI může využívat službu DeepL API k doplnění chybějících překladů rozhraní Docusaurus a přeložené dokumentace, přičemž anglický zdroj zůstává rozhodující.

## Bezpečnost

Klíč `API` se nikdy neuloží. Nastavte jej pouze v aktuálním shellu:

```powershell
$env:DEEPL_API_KEY = "YOUR_KEY"
```

nebo v systému Linux/macOS:

```bash
export DEEPL_API_KEY="YOUR_KEY"
```

Na základě klíče se rozpoznají koncové body DeepL Free a Pro. V případě potřeby lze koncový bod přepsat pomocí souboru `DEEPL_API_URL`.

## Audit bez využití kvóty „API“

```bash
npm run i18n:deepl:site:check
```

Tento nástroj informuje o tom, jaké konfigurované jazykové prostředí existují, kolik dokumentačních souborů je přeloženo a které zdrojové dokumenty stále chybí. Nevyužívá službu DeepL a neprovádí žádné úpravy souborů.

## Přeložit chybějící jazykové balíčky a dokumenty

```bash
npm run i18n:deepl:site
```

V případě, že lokalizace ještě neexistuje, skript nejprve spustí příkaz Docusaurus `write-translations`, poté přeloží vygenerované zdroje z adresáře JSON a vytvoří přeložené kopie anglické dokumentace ve standardní složce pro internacionalizaci Docusaurus.

Stávající dokumentační soubory zůstávají zachovány. Maďarština a němčina jsou považovány za ručně udržované jazykové varianty a nikdy se znovu negenerují pomocí příkazu ``--force``; z anglického zdroje lze přidávat pouze chybějící dokumentační soubory.

## Vybrané jazykové mutace

```bash
npm run i18n:deepl:site -- --locales=fr,es,it
```

## Úmyslně obnovit strojově přeložené jazykové verze

```bash
npm run i18n:deepl:site -- --locales=fr --force
```

Tuto akci proveďte až po kontrole, protože dojde k nahrazení stávajícího strojově přeloženého obsahu na stránce JSON a dokumentace pro vybrané jazykové prostředí. Ručně spravovaný maďarský a německý obsah zůstane chráněn.

## Chráněný obsah

Překladač zachovává ohraničené bloky kódu a nepřekládá příkazy import/export ani strukturální řádky typu MDX. Inline kód, URL adresy, cíle odkazů, zástupné symboly šablon a projektová terminologie, jako například OMI, OJS, OMP, ORCID, ROR, DOI, DOCX, IDML, JATS, CSL, CSS, HTML, PDF, WebAuthn a LaTeX, jsou před strojovým překladem chráněny.

## Kontrola a ověření

Strojový překlad představuje pouze první verzi, nikoli redakční schválení. Po vygenerování:

1. projít si terminologii a jazyk používaný v odborných publikacích;
2. zkontrolujte zobrazení stránek Markdown/MDX a vnitřní odkazy;
3. spusťte příkaz „`npm run build`“;
4. v každé nově vygenerované jazykové verzi zkontrolovat alespoň úvodní stránku, stránku „Studio“ a několik stránek s dokumentací;
5. Přeložené soubory s nastavením jazyka zařazujte do repozitáře až po jejich kontrole.

Anglická dokumentace zůstává zdrojem pro budoucí generování chybějících souborů. Stávající přeložené soubory nejsou při běžném spuštění programu bez upozornění přepsány.
