// @ts-check

/**
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      collapsed: false,
      items: [
        'vision',
      ],
    },
    {
      type: 'category',
      label: 'Foundations',
      collapsed: false,
      items: [
        'foundations/core-principles',
        'foundations/architecture-map',
        'specifications/core/scholarly-object-model',
      ],
    },
    {
      type: 'category',
      label: 'Specifications',
      collapsed: false,
      items: [
        'specifications/document-model',
        'specifications/anchor-model',
        'specifications/annotation-model',
        'specifications/metadata-model',
        'specifications/bibliographic-record-model',
        'specifications/citation-model',
        'specifications/reference-library-registry',
      ],
    },
  ],
};

export default sidebars;
