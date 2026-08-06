// @ts-check

/**
 * The primary documentation sidebar follows the conceptual architecture
 * defined in docs/governance/documentation-architecture.md.
 *
 * Documents are registered explicitly so that legacy migration pages and
 * future reserved specifications do not appear as active documentation.
 *
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      collapsible: true,
      collapsed: false,
      link: {
        type: 'generated-index',
        title: 'Introduction',
        description:
          'The purpose, vision, and high-level architecture of the Open Manuscript Initiative.',
        slug: '/introduction',
      },
      items: [
        {
          type: 'doc',
          id: 'vision',
          label: 'Vision',
        },
        {
          type: 'doc',
          id: 'foundations/architecture-map',
          label: 'Architecture Overview',
        },
      ],
    },
    {
      type: 'category',
      label: 'Foundations',
      collapsible: true,
      collapsed: false,
      link: {
        type: 'generated-index',
        title: 'Foundations',
        description:
          'The principles, common object model, and controlled terminology shared by the OMI specification suite.',
        slug: '/foundations',
      },
      items: [
        {
          type: 'doc',
          id: 'foundations/core-principles',
          label: 'OMI-SPEC-000 — Core Principles',
        },
        {
          type: 'doc',
          id: 'specifications/core/scholarly-object-model',
          label: 'OMI-SPEC-120 — Scholarly Object Model',
        },
        {
          type: 'doc',
          id: 'governance/terminology',
          label: 'Terminology and Definitions',
        },
      ],
    },
    {
      type: 'category',
      label: 'Core Semantic Specifications',
      collapsible: true,
      collapsed: false,
      link: {
        type: 'generated-index',
        title: 'Core Semantic Specifications',
        description:
          'Normative models for manuscript structure, stable anchoring, annotations, and scholarly metadata.',
        slug: '/core-semantic-specifications',
      },
      items: [
        {
          type: 'doc',
          id: 'specifications/document-model',
          label: 'OMI-SPEC-100 — Document Model',
        },
        {
          type: 'doc',
          id: 'specifications/anchor-model',
          label: 'OMI-SPEC-110 — Anchor Model',
        },
        {
          type: 'doc',
          id: 'specifications/annotation-model',
          label: 'OMI-SPEC-130 — Annotation Model',
        },
        {
          type: 'doc',
          id: 'specifications/metadata-model',
          label: 'OMI-SPEC-140 — Metadata Model',
        },
      ],
    },
    {
      type: 'category',
      label: 'Scholarly Workflow and Publishing',
      collapsible: true,
      collapsed: false,
      link: {
        type: 'generated-index',
        title: 'Scholarly Workflow and Publishing',
        description:
          'Specifications for review, citations, bibliographic records, reference libraries, and publication workflows.',
        slug: '/scholarly-workflow-publishing',
      },
      items: [
        {
          type: 'doc',
          id: 'specifications/review-model',
          label: 'OMI-SPEC-200 — Review Model',
        },
        {
          type: 'doc',
          id: 'specifications/citation-model',
          label: 'OMI-SPEC-210 — Citation Model',
        },
        {
          type: 'doc',
          id: 'specifications/bibliographic-record-model',
          label: 'OMI-SPEC-220 — Bibliographic Record Model',
        },
        {
          type: 'doc',
          id: 'specifications/reference-library-registry',
          label: 'OMI-SPEC-221 — Reference Library and Registry Architecture',
        },
        {
          type: 'doc',
          id: 'specifications/publishing-model',
          label: 'OMI-SPEC-230 — Publishing Model',
        },
      ],
    },
    {
      type: 'category',
      label: 'Platform and Exchange',
      collapsible: true,
      collapsed: false,
      link: {
        type: 'generated-index',
        title: 'Platform and Exchange',
        description:
          'Specifications for extensibility, APIs, file interchange, packaging, validation, and preservation.',
        slug: '/platform-exchange',
      },
      items: [
        {
          type: 'doc',
          id: 'specifications/plugin-architecture',
          label: 'OMI-SPEC-300 — Plugin Architecture',
        },
        {
          type: 'doc',
          id: 'specifications/platform-api',
          label: 'OMI-SPEC-310 — Platform API',
        },
        {
          type: 'doc',
          id: 'specifications/file-format',
          label: 'OMI-SPEC-320 — File Format',
        },
        {
          type: 'doc',
          id: 'specifications/container-architecture',
          label: 'OMI-SPEC-330 — Container Architecture',
        },
      ],
    },
    {
      type: 'category',
      label: 'Governance',
      collapsible: true,
      collapsed: false,
      link: {
        type: 'generated-index',
        title: 'Governance',
        description:
          'Policies governing the authority, roadmap, maturity, versioning, authorship, identity, and maintenance of OMI specifications.',
        slug: '/governance',
      },
      items: [
        {
          type: 'doc',
          id: 'governance/charter',
          label: 'Charter',
        },
        {
          type: 'doc',
          id: 'governance/roadmap-to-omi-1.0',
          label: 'Roadmap to OMI 1.0',
        },
        {
          type: 'doc',
          id: 'governance/architecture-audit',
          label: 'Architecture Audit',
        },
        {
          type: 'doc',
          id: 'governance/documentation-architecture',
          label: 'Documentation Architecture',
        },
        {
          type: 'doc',
          id: 'governance/specification-lifecycle',
          label: 'Specification Lifecycle',
        },
        {
          type: 'doc',
          id: 'governance/versioning-policy',
          label: 'Versioning Policy',
        },
        {
          type: 'doc',
          id: 'governance/style-guide',
          label: 'Specification Style Guide',
        },
        {
          type: 'doc',
          id: 'governance/specification-registry',
          label: 'Specification Registry',
        },
      ],
    },
  ],
};

export default sidebars;
