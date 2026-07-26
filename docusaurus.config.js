// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Open Manuscript Initiative',
  tagline: 'Write naturally. Structure once. Publish everywhere.',
  favicon: 'img/favicon.svg',

  future: {
    v4: true,
  },

  url: 'https://openmanuscript.org',
  baseUrl: '/',

  trailingSlash: true,

  organizationName: 'open-manuscript-initiative',
  projectName: 'omi',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'hu', 'de'],

    localeConfigs: {
      en: {
        label: 'English',
        htmlLang: 'en',
      },

      hu: {
        label: 'Magyar',
        htmlLang: 'hu',
      },

      de: {
        label: 'Deutsch',
        htmlLang: 'de',
      },
    },
  },

  presets: [
    [
      'classic',

      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },

        blog: false,

        sitemap: {
          filename: 'sitemap.xml',
          changefreq: 'weekly',
          priority: 0.5,
          lastmod: 'date',
        },

        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/social-card.svg',

      colorMode: {
        respectPrefersColorScheme: true,
      },

      navbar: {
        title: 'Open Manuscript Initiative',

        logo: {
          alt: 'Open Manuscript Initiative',
          src: 'img/omi-navbar.svg',
          srcDark: 'img/omi-navbar-dark.svg',
        },

        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Project',
          },

          {
            href: 'https://github.com/open-manuscript-initiative/omi',
            label: 'GitHub',
            position: 'right',
          },

          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },

      footer: {
        style: 'dark',

        links: [
          {
            title: 'Project',
            items: [
              {
                label: 'Vision',
                to: '/docs/vision',
              },
          {
            label: 'Studio',
            to: 'https://studio.openmanuscript.org',
            ],
          },

          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/open-manuscript-initiative/omi',
              },
            ],
          },
        ],

        copyright: `Copyright © ${new Date().getFullYear()} Open Manuscript Initiative Contributors. Built with Docusaurus.`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
