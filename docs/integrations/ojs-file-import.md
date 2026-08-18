---
title: OJS manuscript file import
description: Article Text selection, DOCX size limits, embedded images, and the OJS-to-Studio handoff.
---

# OJS manuscript file import

This page documents how Open Manuscript Studio selects and imports the primary manuscript file from an Open Journal Systems (OJS) submission.

## Manuscript selection

An OJS submission may contain the article manuscript, figures, images, supplementary files, datasets, and other attachments. Studio MUST NOT select the most recently uploaded file from the complete submission file list.

For the current OJS integration, Studio selects the manuscript in this order:

```text
OJS submission
    ↓
Submission file stage
    ↓
Article Text component
    ↓
Supported DOCX file
    ↓
Latest eligible revision
    ↓
Open Manuscript Studio import
```

The OJS **Article Text** component identifies the primary manuscript. Images and other files uploaded as separate OJS components are not treated as the manuscript, even when they were uploaded after the Article Text file.

The connector should expose the stable OJS/PKP genre metadata used to identify Article Text. Studio should not depend on a localized component label when a stable component key is available.

## Supported source format

The current automatic OJS manuscript importer accepts DOCX as the Article Text source format.

The source file is retrieved through the authorized OJS integration endpoint. Studio does not access the OJS private files directory directly.

## File size limit

The current maximum size of an Article Text DOCX imported from OJS is **25 MB**.

The limit applies to the complete DOCX package. This includes:

- manuscript text and formatting;
- footnotes and endnotes;
- tables and other document structures;
- charts stored in the DOCX package;
- images embedded in the DOCX file;
- other data contained in the DOCX package.

Consequently, a manuscript containing many high-resolution embedded images can reach the limit even when its textual content is relatively small.

Separate images, figures, supplementary files, or other attachments uploaded to OJS outside the Article Text component do **not** count toward this 25 MB Article Text DOCX limit. They are separate OJS submission files and are not selected as the manuscript source.

Studio checks the source size before and after downloading the DOCX. A source exceeding the limit is rejected rather than partially imported.

## Embedded images

Images embedded inside an eligible Article Text DOCX are part of the manuscript import. Studio extracts supported embedded images together with the document structure so that they can appear in the imported manuscript.

This is different from image files uploaded separately to the OJS submission. Separate image files are not automatically substituted for the Article Text manuscript.

## OJS-to-Studio handoff

Large structured manuscripts, especially DOCX files containing embedded images, can produce an import payload substantially larger than the compressed DOCX itself.

Studio therefore does not rely on browser `sessionStorage` to carry the complete manuscript payload during the OJS-to-Studio launch. The server keeps the prepared launch data temporarily and gives the browser a short, single-use handoff token. Studio consumes that token to retrieve the prepared launch data.

This avoids browser Web Storage quota limits and allows image-rich manuscripts to be handed to Studio without serializing the complete manuscript into `sessionStorage`.

The handoff token is temporary and single-use. It is not a permanent manuscript URL or an authorization mechanism for arbitrary OJS files.

## Operational summary

| Property | Current behavior |
| --- | --- |
| OJS manuscript component | Article Text |
| Automatic source format | DOCX |
| Maximum Article Text DOCX size | 25 MB |
| Embedded DOCX images | Imported |
| Separately uploaded OJS images | Not selected as manuscript |
| Source revision | Latest eligible Article Text revision |
| Browser handoff | Temporary single-use server token |
| `sessionStorage` payload limit | Not used for the full manuscript payload |

## Future configuration

The 25 MB limit is currently an implementation limit. A future Studio release may make the maximum OJS source-file size deployment-configurable. Deployments should not assume a higher limit until such configuration is explicitly supported and documented.
