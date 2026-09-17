---
title: Azure Translator site localization workflow
sidebar_label: Azure Translator localization
---

# Azure Translator site localization workflow

The OMI website can use Azure Translator as an incremental machine-translation backend for Docusaurus interface strings and documentation while keeping the English source authoritative.

The Azure workflow deliberately reuses the existing SHA-256 translation state in `.deepl/i18n-state.json`. The file name is retained for backward compatibility with the earlier DeepL workflow; the state contains source hashes and translations, not API credentials. Reusing it prevents unchanged content from being translated again when the backend is switched to Azure.

## Azure resource

Create an Azure Translator resource and obtain its key from **Keys and Endpoint** in the Azure portal.

The standard endpoint is:

```text
https://api.cognitive.microsofttranslator.com
```

A Translator resource may also require its Azure region. The region header is optional for a global resource but must be supplied when the resource configuration requires it.

## GitHub configuration

Configure the following repository settings:

- **Secret** `AZURE_TRANSLATOR_KEY` — required; the Translator subscription key.
- **Variable** `AZURE_TRANSLATOR_REGION` — optional unless the Azure resource requires a region header.
- **Variable** `AZURE_TRANSLATOR_ENDPOINT` — optional; omit it to use the standard global endpoint.

The API key is read only from the GitHub Actions secret and is never written to the repository, translation state or generated locale files.

## Audit without API usage

```bash
npm run i18n:azure:site:check
```

This uses the existing incremental engine in dry-run mode. It reports configured target locales and translated documentation coverage without calling Azure Translator or modifying files.

## Translate incrementally

```bash
npm run i18n:azure:site
```

For local execution set the key first.

PowerShell:

```powershell
$env:AZURE_TRANSLATOR_KEY = "YOUR_KEY"
$env:AZURE_TRANSLATOR_REGION = "YOUR_REGION" # only when required
npm run i18n:azure:site
```

Linux/macOS:

```bash
export AZURE_TRANSLATOR_KEY="YOUR_KEY"
export AZURE_TRANSLATOR_REGION="YOUR_REGION" # only when required
npm run i18n:azure:site
```

Only source strings whose SHA-256 source hash is new or changed are submitted for translation. Existing state is reused. Hungarian and German remain hand-maintained locales: existing content is preserved, and only missing documentation may be generated from the English source.

## Selected locales

```bash
npm run i18n:azure:site -- --locales=fr,es,it
```

## Repair a faulty machine translation

Run **Actions → Azure Translator Docusaurus translations → Run workflow**, enter the affected locale codes, and enable **Repair faulty machine translations**.

The equivalent local command is:

```bash
npm run i18n:azure:site -- --locales=fr --force
```

Repair mode deliberately regenerates selected machine-translated locales. Hand-maintained Hungarian and German content remains protected.

## Markdown and terminology protection

The established OMI translation engine continues to protect fenced code blocks, imports/exports, structural MDX lines, inline code, URLs, link targets, placeholders and protected project terminology.

The Azure adapter converts protected segments to HTML `notranslate` spans and calls Translator with `textType=html`. Azure Translator documents `class="notranslate"` and `translate="no"` as supported mechanisms for excluding HTML content from translation.

## GitHub Actions behavior

The workflow uses the persistent branch `i18n/azure-progress` so partial progress can survive quota or rate-limit interruptions. When translation completes, it runs the full Docusaurus build. A pull request is created or updated only when the build succeeds.

The workflow distinguishes:

- successful completion;
- quota/rate-limit interruption;
- authentication or authorization failure;
- other translation failures;
- Docusaurus build failure after translation.

## Validation

Before merging a generated translation pull request:

1. review terminology and scholarly-publishing language;
2. inspect Markdown/MDX rendering and internal links;
3. confirm that the GitHub Actions build passed;
4. inspect representative pages in each changed locale;
5. keep the English documentation as the authoritative source for future synchronization.

Machine translation is a first pass and does not replace editorial or native-speaker review.
