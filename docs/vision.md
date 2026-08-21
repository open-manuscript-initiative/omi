---
id: vision
title: Vision
sidebar_position: 1
description: The vision and philosophy behind the Open Manuscript Initiative.
---

# Vision

## Rethinking scholarly writing

For decades, scholarly manuscripts have been created using word processors originally designed for office documents.

These applications ask authors to make typographic decisions rather than scholarly ones. Questions such as font size, spacing, indentation or manual layout have little to do with scientific communication, yet publishing workflows repeatedly force authors and editors to reconstruct structure from visual formatting.

The result is familiar:

- inconsistent formatting;
- hidden document artifacts;
- incompatible templates;
- repeated conversion and cleanup;
- duplicated metadata entry;
- and information loss between authoring, review and publication systems.

OMI starts from a different premise: the scholarly manuscript should remain a structured, portable object throughout its lifecycle.

## Meaning before appearance

Authors should describe **what** a piece of content is, not merely **how** it should look.

A manuscript is not a collection of fonts and formatting. It is a structured collection of scholarly concepts such as:

- title, authors and affiliations;
- abstract and keywords;
- sections and headings;
- quotations, figures and tables;
- notes, citations and references;
- acknowledgements, funding statements and data-availability statements;
- annotations, revisions and review material.

These elements define scholarly meaning. Their presentation can then be generated for a journal, repository, book workflow, web publication, print output or archival package without rewriting the manuscript model.

## Structure once

OMI uses a semantic manuscript model. Instead of repeatedly rebuilding structure during conversion, the structure is preserved as first-class data.

This makes it possible for one manuscript to move between authoring, peer review, editorial processing and publication while retaining stable scholarly identity, metadata and relationships.

The same principle applies to contributors, citations, annotations and version history: they should survive workflow transitions as meaningful objects rather than being flattened into typography whenever a file changes hands.

## Publish everywhere

The current Open Manuscript Studio reference implementation already demonstrates the direction of this model. A structured manuscript can be delivered as portable OMI data and transformed into publishing-oriented outputs including:

- JATS XML;
- semantic HTML;
- DOCX;
- EPUB;
- PDF;
- IDML;
- XPress Tags;
- FrameMaker MIF;
- Scribus SLA;
- and LaTeX.

Future adapters can add further publisher, repository, preservation and metadata-deposit targets without changing the scholarly source model.

Presentation becomes an output. Meaning remains the source.

## Open by design

The Open Manuscript Initiative is an open standards project. Its specifications, schemas, documentation and reference implementations are intended to remain publicly available under open licenses.

Anyone should be able to:

- implement the specifications;
- build compatible authoring or publishing software;
- create converters and validators;
- develop plugins and integrations;
- connect OMI workflows to publishing or repository infrastructure;
- and preserve OMI manuscripts independently of a particular vendor or hosted service.

No proprietary application should become the sole authority over the scholarly object.

## Local-first and interoperable

Portability also means that authors should not have to surrender manuscript ownership to a specific cloud platform simply to use modern scholarly tooling.

OMI therefore supports a local-first architecture in which manuscripts can remain on the author's computer, be stored in portable OMI packages, or be placed in folders synchronized by the author's chosen storage provider. Server services are used where they provide real shared value — accounts, collaboration, peer review, publishing-system integration or direct remote services — rather than as a prerequisite for owning the manuscript.

External platforms such as OJS and OMP remain authoritative for their own workflow state. OMI integrates through explicit APIs and profiles instead of coupling the manuscript model directly to another application's database.

## Review is part of the scholarly object

Peer review should not be treated as disposable text surrounding a document. OMI models review assignments, annotations, comments and identity boundaries as structured scholarly workflow data.

The reference implementation already supports double-blind review and role-aware author, editor and reviewer workflows. The long-term goal is to make review state portable and interoperable while preserving the confidentiality rules required by the publishing workflow.

## Identity without lock-in

Authentication identity and scholarly contributor identity are related, but they are not the same thing.

An account answers who is allowed to use a service. A contributor record expresses authorship, affiliation, ORCID and scholarly role. OMI keeps these concepts separate so that external identity providers can be linked without redefining authorship or embedding one authentication provider into the manuscript format.

## Sustainable through services

Open standards still require sustainable maintenance. OMI can support optional hosted or professional services such as:

- managed collaboration and workflow infrastructure;
- validation and interoperability services;
- publishing-system integrations;
- repository and preservation adapters;
- institutional deployment support;
- translation or AI-assisted services;
- and managed hosting.

These services may extend the ecosystem, but they should never restrict access to the standard, the manuscript model or the open reference implementation.

## Beyond a file format

OMI is not simply another document format. It is an ecosystem of interoperable components:

- semantic specifications;
- a scholarly object model;
- portable manuscript containers;
- validation rules and conformance classes;
- reference implementations;
- APIs and integration profiles;
- publishing and conversion tools;
- review workflows;
- and long-term preservation architecture.

Open Manuscript Studio is the current reference implementation used to exercise these ideas in a real authoring, review and publishing environment across web, desktop and mobile clients.

## Community first

Scientific communication belongs to the scholarly community. The Open Manuscript Initiative welcomes contributions from researchers, publishers, software developers, librarians, universities, journals and research institutions.

Open collaboration allows the specification to evolve around scholarly needs rather than the limitations of a proprietary editor or publishing platform.

## Our goal

We envision a workflow in which researchers can focus on scholarship while software preserves structure, identity and relationships throughout the publication lifecycle.

The manuscript remains understandable to machines and people.

Publishing systems take responsibility for presentation.

Review remains structured and accountable.

Knowledge remains portable.

Publishing becomes interoperable.

> **Write naturally.  
> Structure once.  
> Publish everywhere.**
