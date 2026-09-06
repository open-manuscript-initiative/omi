---
title: DeepL site localization workflow
sidebar_label: DeepL site localization
---

# DeepL site localization workflow

The OMI website can use the DeepL API to complete missing Docusaurus interface translations and translated documentation while keeping the English source authoritative.

## Security

The API key is never committed. Set it only in the current shell:

```powershell
$env:DEEPL_API_KEY = "YOUR_KEY"
```

or on Linux/macOS:

```bash
export DEEPL_API_KEY="YOUR_KEY"
```

DeepL Free and Pro endpoints are detected from the key. `DEEPL_API_URL` can override the endpoint when required.

## Audit without using API quota

```bash
npm run i18n:deepl:site:check
```

This reports which configured locales exist, how many documentation files are translated, and which source documents are still missing. It does not call DeepL and does not modify files.

## Translate missing locales and documents

```bash
npm run i18n:deepl:site
```

For a locale that does not exist yet, the script first runs Docusaurus `write-translations`, then translates the generated JSON resources and creates translated copies of the English documentation under the standard Docusaurus i18n path.

Existing documentation files are preserved. Hungarian and German are treated as hand-maintained locales and are never regenerated with `--force`; only missing documentation files may be added from the English source.

## Selected locales

```bash
npm run i18n:deepl:site -- --locales=fr,es,it
```

## Repair a faulty machine translation

Run **Actions → DeepL Docusaurus translations → Run workflow**, enter the affected locale codes (for example `fr,es`), and enable **Repair faulty machine translations**. The repair reuses the persistent translation branch, regenerates the selected machine-translated locales, validates the Docusaurus build, and creates or updates the translation pull request only after the build passes.

The same repair can be run locally:

```bash
npm run i18n:deepl:site -- --locales=fr --force
```

Use repair mode only after review because it replaces existing machine-translated JSON and documentation for the selected locale. Hand-maintained Hungarian and German content remains protected.

## Protected content

The translator preserves fenced code blocks and avoids translating imports/exports and structural MDX lines. Inline code, URLs, link targets, template placeholders and project terminology such as OMI, OJS, OMP, ORCID, ROR, DOI, DOCX, IDML, JATS, CSL, CSS, HTML, PDF, WebAuthn and LaTeX are protected from machine translation.

## Review and validation

Machine translation is a first pass, not editorial approval. After generation:

1. review terminology and scholarly-publishing language;
2. check Markdown/MDX rendering and internal links;
3. run `npm run build`;
4. inspect at least the homepage, Studio page and several documentation pages in each newly generated locale;
5. commit translated locale files only after review.

The English documentation remains the source for future missing-file generation. Existing translated files are not silently overwritten during ordinary runs.
