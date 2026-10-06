---
title: Research Modules in Open Manuscript Studio
sidebar_label: Research Modules
description: Current scope, workflows, and limitations of Open Manuscript Studio's discipline-specific research modules.
slug: /studio/research-modules
---

# Research modules in Open Manuscript Studio

Studio's optional research modules provide focused workspaces for tasks that benefit from tools beyond manuscript editing. Open **Research → Modules** to see the modules enabled for the installation, then activate the ones needed in the current workspace. An installation administrator controls the available-module allow-list.

## Available modules

| Module | Current capabilities |
| --- | --- |
| **History and Archives** | Search Europeana's cultural-heritage catalogue and the U.S. National Archives Catalog; open eLevéltár for Hungarian archival descriptions. |
| **Religious Texts** | Search Sefaria's Jewish text and commentary library and view short cited excerpts. Other Bible, Qur'an, and Buddhist text portals are external links. |
| **Critical Text Edition** | Record manuscript witnesses, transcriptions, and passage-level variants; compare readings; build a critical apparatus; export JSON or TEI XML. |
| **Corpus Linguistics** | Import DOCX, TXT, and Markdown text; search concordances with context; annotate linguistic features; align parallel texts; export JSON or CSV. |
| **Musicology** | Import uncompressed MusicXML; catalog musical events and connect them with recording references and time positions. It does not render notation. |
| **Cultural Heritage** | Describe objects and sites, record provenance and rights, link source images, and annotate image regions with normalized coordinates. |
| **Social Research Methods** | Record study design and ethics notes, maintain a codebook, and code selected transcript passages. Anonymize sensitive data before storing it. |
| **Legal Sources** | Keep citations, jurisdictions, dates, source links, and saved text versions; compare two saved versions. Search EUR-Lex directly and open targeted searches for InfoCuria, the UN Treaty Collection, Roman law, and Vatican canon-law sources. |
| **Research Reproducibility** | Link publications to versioned research outputs, repositories, identifiers, licenses, and notes; calculate a file's SHA-256 checksum without storing the file contents. |

## Storage and source limits

Most module workspaces save their records in the current browser and provide JSON export; the corpus concordance also exports CSV. Browser-local records do not automatically synchronize across devices or become shared workspace data. Module activation preferences are stored separately by user and workspace.

Some modules search external providers. Europeana, the U.S. National Archives, and Sefaria have live search connections. The Legal Sources module uses EUR-Lex's public search URL; its other legal entries open domain-restricted web searches and provider portals in new tabs. Those results are not imported into Studio. Always verify citations, legal status, and text versions against the primary source.

The modules are research aids. They do not certify source authenticity, legal validity, research ethics approval, or scholarly conclusions.
