---
title: Grant Readiness Pack
sidebar_label: Grant Readiness Pack
description: Reusable project, impact, consortium and work-package material for funding proposals involving the Open Manuscript Initiative.
---

# OMI Grant Readiness Pack

This document provides reusable material for preparing research, innovation and infrastructure proposals involving the Open Manuscript Initiative (OMI). It is a starting point for consortium discussions and proposal drafting; programme-specific eligibility, terminology, TRL requirements, budgets and legal commitments must always be validated against the relevant call.

## 1. Project summary

**Open Manuscript Initiative (OMI)** is an open-source initiative for interoperable scholarly authoring, review, editing and publishing. Its central objective is to separate the scholarly manuscript from proprietary application and production formats so that structured scholarly content can move across authoring tools, peer-review systems, publishing platforms and preservation workflows without repeated manual reconstruction.

The initiative combines open specifications with an implementation environment, **Open Manuscript Studio**, designed for browser, desktop and mobile use. The Studio is being developed as a practical demonstrator of the OMI document model and interoperability approach, including structured manuscripts, metadata, annotations, references, publication styles, publisher profiles, peer review, multilingual workflows and publishing-platform integrations.

**Short proposal description:**

> OMI develops open, interoperable infrastructure for scholarly manuscripts across the full authoring-to-publication lifecycle. It combines an application-independent scholarly document model with an open-source cross-platform Studio and integration interfaces for journal, monograph, identity, metadata and research-information systems.

## 2. Problem statement

Scholarly manuscripts frequently move through disconnected systems and proprietary formats. Authors write in one environment, submit to another, reviewers annotate another representation, editors reconstruct structure and metadata, and publishers transform the same intellectual object again for production and dissemination.

This fragmentation creates avoidable costs and risks:

- repeated conversion and manual restructuring;
- loss or degradation of semantic information during format transitions;
- vendor and application lock-in;
- duplicated metadata entry;
- weak interoperability between authoring, peer review and publishing systems;
- barriers to multilingual and accessible scholarly communication;
- difficulties preserving annotations, references and structured relationships;
- high integration costs for journals, publishers and research institutions.

OMI addresses this at the manuscript layer: **structure once, reuse throughout the scholarly workflow**.

## 3. Proposed solution

OMI combines four complementary layers:

1. **Open scholarly models and specifications** for documents, anchors, annotations, metadata and related scholarly objects.
2. **Open Manuscript Studio**, a reference implementation for authoring, editing, reviewing and publishing structured manuscripts.
3. **Interoperability profiles and connectors** for publishing and research infrastructure, including OJS/OMP-oriented workflows and persistent-identity integrations.
4. **Reusable publication and institutional workflows**, including publication styles, publisher profiles, export, administration and cross-platform deployment.

The project is deliberately not limited to replacing a word processor. Its research-infrastructure value lies in preserving a portable scholarly object across organizational and technical boundaries.

## 4. Current maturity and evidence

OMI already has working software and public technical documentation. Current implementation work includes:

- browser-based Studio;
- desktop packaging;
- Android application workflow;
- validated native iOS/iPadOS target and Files integration work;
- structured manuscript editing;
- multi-document editing and document outline;
- optimized import of large DOCX manuscripts;
- generated document lists and indexes;
- reusable publication styles and publisher profiles;
- Adobe InDesign IDML style-set import;
- style-driven PDF, HTML and CSS export;
- local and cloud-oriented storage workflows;
- account, password-recovery and federated-sign-in infrastructure;
- double-blind peer-review workflows;
- OJS/OMP integration work;
- ORCID-oriented identity/signature workflows;
- spelling, grammar, translation and agent integration work;
- institutional profiles and administration components;
- multilingual user-interface infrastructure.

### Maturity statement

OMI should currently be presented as a **working open-source alpha / beta-readiness demonstrator**, not as a fully mature production research infrastructure. A formal Technology Readiness Level should only be assigned in the context of a funding programme whose TRL definitions and evidence requirements have been reviewed.

This distinction is useful in proposals: OMI is sufficiently implemented for pilots, integration experiments and validation, while substantial research, hardening, standardisation and institutional deployment work remains suitable for funded development.

## 5. Research and innovation dimensions

Potential research and innovation questions include:

- How can a scholarly manuscript remain semantically stable while moving across heterogeneous authoring and publishing environments?
- Which minimum interoperable model can represent scholarly structure without imposing publisher-specific production semantics on authors?
- How can annotations, review comments and provenance survive round trips between independent systems?
- How can persistent identifiers and research metadata become native components of authoring rather than post-publication enrichment?
- How can multilingual scholarly workflows share structure while retaining language-specific metadata and presentation?
- How can publication styling be separated from manuscript semantics while still supporting professional production output?
- How can open scholarly infrastructure reduce vendor lock-in without increasing complexity for researchers?

## 6. Expected impact

### Researchers and authors

- less repetitive metadata entry and format reconstruction;
- portable manuscripts across tools and publishers;
- improved continuity between writing, review and publication;
- better support for multilingual and structured scholarly communication.

### Journals, publishers and scholarly societies

- reduced conversion and production overhead;
- reusable publication styles and profiles;
- integration with existing publishing platforms rather than mandatory replacement;
- more structured inputs for downstream publication and preservation.

### Universities, libraries and research infrastructures

- greater institutional control over scholarly content;
- reduced dependence on proprietary authoring ecosystems;
- reusable open-source infrastructure;
- improved opportunities for repository, metadata, identifier and preservation integration.

### Open science ecosystem

- machine-actionable scholarly objects earlier in the research lifecycle;
- stronger interoperability between otherwise isolated services;
- reusable specifications and reference implementations;
- a practical environment for testing new scholarly-communication workflows.

## 7. Partner profiles sought

A balanced consortium could include several of the following partner types:

| Partner type | Potential contribution |
| --- | --- |
| University / research institution | researcher requirements, pilots, evaluation, research coordination |
| University or national library | metadata, preservation, repository interoperability, open-science expertise |
| Scholarly publisher / journal | production workflows, editorial validation, real publishing pilots |
| Scholarly society | disciplinary use cases, community engagement, dissemination |
| Research infrastructure / EOSC-related service | federation, interoperability, service integration |
| Software / RSE group | engineering, security, scalability, deployment |
| Accessibility / UX research partner | inclusive design and evaluation |
| NLP / multilingual research group | language technologies, terminology, translation workflows |
| PID / metadata infrastructure partner | ORCID/ROR/DOI and metadata interoperability |
| Open-source sustainability organization | governance, community and long-term sustainability |

A proposal does not require all of these roles. The composition should follow the call objectives.

## 8. Reusable work-package model

### WP1 — Coordination, governance and requirements

**Objectives:** project management, governance, requirements, ethics/legal coordination and stakeholder alignment.

**Indicative outputs:** governance framework; requirements baseline; risk register; data/IP/open-source policies.

### WP2 — Scholarly object model and interoperability

**Objectives:** refine OMI specifications; define exchange contracts; validate round-trip semantics and provenance.

**Indicative outputs:** versioned specifications; interoperability profiles; conformance examples; validation suite.

### WP3 — Open Manuscript Studio and reference implementation

**Objectives:** harden the cross-platform Studio; improve authoring, review, metadata and accessibility workflows.

**Indicative outputs:** production-oriented releases; accessibility improvements; test infrastructure; technical documentation.

### WP4 — Publishing and research-infrastructure integration

**Objectives:** connect OMI workflows to publishing, identity, metadata and repository infrastructure.

**Indicative outputs:** OJS/OMP integrations; PID/metadata connectors; APIs; integration documentation.

### WP5 — Institutional pilots and evaluation

**Objectives:** deploy representative pilots with journals, publishers, libraries or universities; measure usability and interoperability.

**Indicative outputs:** pilot deployments; evaluation datasets/reports; workflow benchmarks; recommendations.

### WP6 — Sustainability, exploitation and community

**Objectives:** establish a sustainable open-source model, contributor pathways, adoption strategy and post-project maintenance plan.

**Indicative outputs:** sustainability plan; exploitation/adoption roadmap; training material; community programme; dissemination outputs.

## 9. Example task decomposition

A medium-sized consortium can further divide work into tasks such as:

- T2.1 manuscript and annotation model refinement;
- T2.2 metadata and persistent-identifier profiles;
- T2.3 interoperability/conformance test suite;
- T3.1 cross-platform Studio hardening;
- T3.2 accessibility and multilingual UX;
- T3.3 structured import/export and publication styles;
- T4.1 OJS/OMP integration;
- T4.2 repository and research-information integration;
- T4.3 identity/PID services;
- T5.1 journal publishing pilot;
- T5.2 institutional authoring pilot;
- T5.3 usability and impact evaluation;
- T6.1 open-source governance;
- T6.2 adoption and training;
- T6.3 sustainability and exploitation.

## 10. Budget model

No programme-independent budget should be treated as authoritative. For early consortium planning, OMI-related costs can be structured into the following categories:

- personnel / person-months for research software engineering;
- interoperability and specification work;
- project and technical coordination;
- UX, accessibility and multilingual evaluation;
- infrastructure, hosting, CI/CD and testing;
- code signing and platform distribution;
- pilot deployment and support;
- travel and consortium meetings where eligible;
- dissemination, training and community activity;
- external audits, security assessment or specialist services where justified.

### Indicative effort distribution

For an OMI-centred technical work stream, an initial planning ratio might allocate approximately:

- **35–45%** implementation and engineering;
- **15–20%** interoperability/specification work;
- **15–20%** pilots, validation and evaluation;
- **10–15%** coordination, governance and quality assurance;
- **10–15%** sustainability, dissemination, training and community building.

These percentages are planning heuristics only and must be adapted to the funding rules and consortium design.

## 11. Sustainability and exploitation narrative

OMI's exploitation model should not depend on proprietary control of the manuscript format. Instead, sustainability can combine:

- open-source core software and open specifications;
- institutional adoption and co-development;
- funded research and innovation projects;
- sponsorship and community support;
- implementation, integration, hosting or support services by ecosystem participants;
- reusable training and deployment resources;
- a growing network of compatible publishing and research services.

The principal exploitable result is therefore an **open interoperability layer and reference implementation** that reduces integration and migration costs across the scholarly publishing ecosystem.

## 12. Open science, IPR and data-management position

A proposal should define these points contractually, but OMI's preferred baseline is:

- open-source licensing for reusable core software;
- openly documented interoperability specifications;
- transparent contribution and governance rules;
- clear separation between open specifications and institution-specific configuration;
- no requirement to expose confidential manuscripts or peer-review data;
- data minimisation and appropriate access control for manuscript/review services;
- exportability and portability of scholarly content;
- preservation of provenance where workflows require it.

Exact licences, background/foreground IP, data-controller roles and consortium rights must be specified for each funded project.

## 13. Indicative KPIs

Depending on the call, measurable indicators could include:

- number of institutional pilots;
- number of journal/publisher workflows validated;
- number of supported interchange/integration profiles;
- round-trip fidelity against defined conformance cases;
- reduction in manual metadata re-entry or production steps;
- accessibility conformance improvements;
- number of supported interface languages;
- active external contributors;
- downstream integrations or deployments;
- training participants and documentation usage;
- software releases and open technical outputs;
- post-project institutional commitments.

KPIs should be given baselines and target values only after consortium pilots and the call's expected outcomes are known.

## 14. Risk register starter

| Risk | Mitigation direction |
| --- | --- |
| Scope becomes too broad | Define a minimum interoperable core and call-specific pilots |
| Publisher workflows differ substantially | Use profiles/adapters rather than hard-coding one workflow |
| Legacy formats lose semantics | Conformance tests, explicit fallback behaviour and provenance |
| Institutional adoption is slow | Co-design with pilot partners and integrate existing platforms |
| Open-source maintenance after funding | Governance, diversified funding and institutional co-maintenance |
| Security/privacy concerns around manuscripts | Threat modelling, access control, data minimisation and audits |
| Platform-specific release friction | Automated CI/CD and explicit signing/distribution work |

## 15. One-paragraph consortium pitch

> The Open Manuscript Initiative offers a working open-source foundation for making scholarly manuscripts portable across authoring, peer-review and publishing systems. Rather than creating another isolated editor or publishing platform, OMI focuses on the interoperable scholarly object between them. A consortium can use the existing Open Manuscript Studio and OMI specifications as a demonstrator, extend them through research and integration work, and validate the results with universities, libraries, journals, publishers and research infrastructures. The resulting open components can reduce format conversion, metadata duplication and vendor lock-in while strengthening multilingual, accessible and machine-actionable scholarly communication.

## 16. Two-sentence partner outreach version

> Open Manuscript Initiative is seeking research and institutional partners for projects on interoperable scholarly authoring and publishing infrastructure. OMI already provides an open-source cross-platform demonstrator and publishing-integration work that can serve as a technical foundation for pilots in open science, scholarly communication, metadata, peer review, multilingual publishing and research-software sustainability.

## 17. Information required before submitting a proposal

Before any proposal uses this pack, confirm:

1. exact programme, call and topic;
2. applicant and consortium eligibility;
3. expected outcomes, scope and mandatory activities;
4. TRL or maturity requirements, if any;
5. funding rate and eligible cost model;
6. consortium composition requirements;
7. open-science and data-management obligations;
8. security, ethics and personal-data implications;
9. IPR and licensing obligations;
10. submission deadline and evaluation criteria;
11. OMI legal/financial participant structure;
12. realistic person-months, pilot commitments and measurable targets.

## 18. Public resources

- [Open Manuscript Initiative website](/)
- [Open Manuscript Studio](/studio)
- [Funding & Partnerships](/docs/governance/funding-and-partnerships)
- [Support OMI](/support/)
- [Implementation status](/docs/governance/studio-implementation-status)

---

**Document status:** reusable grant-preparation baseline. Update this pack as OMI reaches new release, governance, deployment and institutional-adoption milestones.
