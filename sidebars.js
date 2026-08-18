// @ts-check

/**
 * The primary documentation sidebar follows the conceptual architecture
 * defined in docs/governance/documentation-architecture.md.
 *
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category', label: 'Introduction', collapsible: true, collapsed: false,
      link: {type: 'generated-index', title: 'Introduction', description: 'The purpose, vision, and high-level architecture of the Open Manuscript Initiative.', slug: '/category/introduction'},
      items: [
        {type: 'doc', id: 'vision', label: 'Vision'},
        {type: 'doc', id: 'foundations/architecture-map', label: 'Architecture Overview'},
      ],
    },
    {
      type: 'category', label: 'Foundations', collapsible: true, collapsed: false,
      link: {type: 'generated-index', title: 'Foundations', description: 'The principles, common object model, and controlled terminology shared by the OMI specification suite.', slug: '/foundations'},
      items: [
        {type: 'doc', id: 'foundations/core-principles', label: 'Core Principles'},
        {type: 'doc', id: 'specifications/core/scholarly-object-model', label: 'Scholarly Object Model'},
        {type: 'doc', id: 'governance/terminology', label: 'Terminology and Definitions'},
      ],
    },
    {
      type: 'category', label: 'Core Semantic Specifications', collapsible: true, collapsed: false,
      link: {type: 'generated-index', title: 'Core Semantic Specifications', description: 'Normative models for manuscript structure, stable anchoring, annotations, scholarly metadata, identity, contribution, versioning, and change.', slug: '/core-semantic-specifications'},
      items: [
        {type: 'doc', id: 'specifications/document-model', label: 'Document Model'},
        {type: 'doc', id: 'specifications/anchor-model', label: 'Anchor Model'},
        {type: 'doc', id: 'specifications/annotation-model', label: 'Annotation Model'},
        {type: 'doc', id: 'specifications/metadata-model', label: 'Metadata Model'},
        {type: 'doc', id: 'specifications/identity-contributor-model', label: 'Identity and Contributor Model'},
        {type: 'doc', id: 'specifications/versioning-change-model', label: 'Versioning and Change Model'},
      ],
    },
    {
      type: 'category', label: 'Scholarly Workflow and Publishing', collapsible: true, collapsed: false,
      link: {type: 'generated-index', title: 'Scholarly Workflow and Publishing', description: 'Specifications for review, citations, bibliographic records, reference libraries, and publication workflows.', slug: '/scholarly-workflow-publishing'},
      items: [
        {type: 'doc', id: 'specifications/review-model', label: 'Review Model'},
        {type: 'doc', id: 'specifications/citation-model', label: 'Citation Model'},
        {type: 'doc', id: 'specifications/bibliographic-record-model', label: 'Bibliographic Record Model'},
        {type: 'doc', id: 'specifications/reference-library-registry', label: 'Reference Library and Registry Architecture'},
        {type: 'doc', id: 'specifications/publishing-model', label: 'Publishing Model'},
      ],
    },
    {
      type: 'category', label: 'Platform and Exchange', collapsible: true, collapsed: false,
      link: {type: 'generated-index', title: 'Platform and Exchange', description: 'Specifications for extensibility, APIs, file interchange, packaging, validation, and preservation.', slug: '/platform-exchange'},
      items: [
        {type: 'doc', id: 'specifications/plugin-architecture', label: 'Plugin Architecture'},
        {type: 'doc', id: 'specifications/platform-api', label: 'Platform API'},
        {type: 'doc', id: 'specifications/file-format', label: 'File Format'},
        {type: 'doc', id: 'specifications/container-architecture', label: 'Container Architecture'},
      ],
    },
    {
      type: 'category', label: 'Integrations', collapsible: true, collapsed: false,
      link: {type: 'generated-index', title: 'Integrations', description: 'Platform-neutral integration architecture and profiles for connecting OMI to publishing, review, repository, and scholarly infrastructure.', slug: '/integrations'},
      items: [
        {type: 'doc', id: 'integrations/architecture', label: 'Integration Architecture'},
        {type: 'doc', id: 'integrations/integration-api-v1', label: 'Integration API v1'},
        {type: 'doc', id: 'integrations/ojs-profile-v1', label: 'OJS Integration Profile v1'},
        {type: 'doc', id: 'integrations/omp-profile-v1', label: 'OMP Integration Profile v1'},
      ],
    },
    {
      type: 'category', label: 'Governance', collapsible: true, collapsed: false,
      link: {type: 'generated-index', title: 'Governance', description: 'Policies governing the authority, roadmap, maturity, versioning, authorship, identity, maintenance, and release security of OMI specifications and reference implementations.', slug: '/category/governance'},
      items: [
        {type: 'doc', id: 'governance/charter', label: 'Charter'},
        {type: 'doc', id: 'governance/roadmap-to-omi-1.0', label: 'Roadmap to OMI 1.0'},
        {type: 'doc', id: 'governance/studio-implementation-status', label: 'Studio Implementation Status'},
        {type: 'doc', id: 'governance/implementation-status-matrix', label: 'Specification Implementation Matrix'},
        {type: 'doc', id: 'governance/architecture-audit', label: 'Architecture Audit'},
        {type: 'doc', id: 'governance/documentation-architecture', label: 'Documentation Architecture'},
        {type: 'doc', id: 'governance/specification-lifecycle', label: 'Specification Lifecycle'},
        {type: 'doc', id: 'governance/versioning-policy', label: 'Versioning Policy'},
        {type: 'doc', id: 'governance/code-signing-policy', label: 'Code Signing Policy'},
        {type: 'doc', id: 'governance/style-guide', label: 'Specification Style Guide'},
        {type: 'doc', id: 'governance/specification-template', label: 'Specification Template'},
        {type: 'doc', id: 'governance/specification-registry', label: 'Specification Registry'},
      ],
    },
  ],
};

export default sidebars;
