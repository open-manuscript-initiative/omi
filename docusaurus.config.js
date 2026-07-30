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
            title: 'Open Manuscript Initiative',
            items: [
              {
                label: 'Vision',
                to: '/docs/vision',
              },
              {
                label: 'Documentation',
                to: '/docs/vision',
              },
              {
                label: 'Roadmap',
                to: '/docs/roadmap',
              },
              {
                label: 'Studio',
                href: 'https://studio.openmanuscript.org',
              },
            ],
          },

          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/open-manuscript-initiative/omi',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/share/19AmDMBVoe/',
              },
            ],
          },

          {
            title: 'Project',
            items: [
              {
                label: 'MIT License',
                href: 'https://github.com/open-manuscript-initiative/omi/blob/main/LICENSE',
              },
            ],
          },
        ],

        copyright: `
          <div class="omi-footer-message">
            <strong>Open Manuscript Initiative</strong>
            <span>Write naturally. Structure once. Publish everywhere.</span>
            <span>Open standards for scholarly publishing.</span>
            <span>
              © ${new Date().getFullYear()}
              Open Manuscript Initiative Contributors.
            </span>
            <span>Built with Docusaurus.</span>
          </div>
        `,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
