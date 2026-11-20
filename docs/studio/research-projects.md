---
title: "Family trees, networks and portable research projects"
sidebar_label: "Family trees, networks and portable research projects"
description: "Family trees, networks and portable research projects — 2026-11-20"
---

# Family trees, networks and portable research projects

Enable **Family tree** and/or **Relationship networks** in the research modules settings. They share the same selected project: people, institutions, places, events, relationships, source references and notes. Edit records and relationships, inspect generation/network diagrams, drag nodes, pan/zoom and export SVG or relationship CSV.

## Import and retain sources

GEDCOM 5.5, 5.5.1 and 7 core records are supported, with an import preview and separate add/replace choices. Historical date wording, adoption/foster relationships and challenged assertions stay distinct. Unsupported media/custom structures remain in the retained original source; GEDCOM export is not provided. Unicode export from the source program is recommended.

Network import also supports GEXF 1.2/1.3 and GraphML. Review the import preview and unsupported-field diagnostics rather than assuming all features of another network application are retained.

## Portable projects and synchronization

Save/open the portable research-project file to move the editable dataset between devices. It uses the experimental **OMI-SPEC-360 Draft 0.1.0** envelope. Project identity and project-owned local caches remain separate from the manuscript. Legacy graph JSON can be imported with an explicit preview.

**Project cloud file** links one project file in a synchronized folder or OS file provider. Open the same file on each device. While the module is open, edits are written after a short delay and the file is polled for remote changes. Provider propagation may be delayed. If both sides change, automatic writes pause for a choice of which copy to keep. Avoid simultaneous editing: the file adapter has no atomic provider revision check. This is separate from OAuth manuscript cloud backups and a shared server database.

**Insert diagram into manuscript** previews the exact SVG and an editable source suggestion. Confirm the source or explicitly declare own research data before insertion. The manuscript receives an image snapshot and the reviewed source/provenance; its `.omi` file does not contain the complete editable graph or raw private research notes. Updating the research graph does not silently replace an inserted image.

See [research modules](/docs/studio/research-modules), the [source guide](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/main/docs/genealogy-networks.md) and [research-project model](/docs/specifications/research-project-model).
