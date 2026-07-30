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
        'document-model',
        'anchor-model',
        'annotation-model',
        'metadata-model',
      ],
    },
  ],
};

export default sidebars;
