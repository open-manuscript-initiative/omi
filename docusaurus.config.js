// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Open Manuscript Initiative',
  tagline: 'Write naturally. Structure once. Publish everywhere.',
  favicon: 'img/favicon.svg',
  headTags: [
    {tagName: 'link', attributes: {rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png'}},
    {tagName: 'link', attributes: {rel: 'manifest', href: '/site.webmanifest'}},
    {tagName: 'meta', attributes: {name: 'theme-color', content: '#ffffff'}},
  ],

  future: {v4: true},
  url: 'https://openmanuscript.org',
  baseUrl: '/',
  trailingSlash: true,
  organizationName: 'open-manuscript-initiative',
  projectName: 'omi',
  onBrokenLinks: 'throw',
  clientModules: [
    './src/client/localeRedirect.js',
    './src/client/socialShare.js',
  ],

  i18n: {
    defaultLocale: 'en',
    locales: [
      'bg', 'cs', 'da', 'de', 'el', 'en', 'es', 'et', 'fi', 'fr', 'ga', 'hr',
      'hu', 'it', 'lt', 'lv', 'mt', 'nl', 'pl', 'pt', 'ro', 'sk', 'sl', 'sv',
    ],
    localeConfigs: {
      bg: {label: 'Български', htmlLang: 'bg'}, cs: {label: 'Čeština', htmlLang: 'cs'},
      da: {label: 'Dansk', htmlLang: 'da'}, de: {label: 'Deutsch', htmlLang: 'de'},
      el: {label: 'Ελληνικά', htmlLang: 'el'}, en: {label: 'English', htmlLang: 'en'},
      es: {label: 'Español', htmlLang: 'es'}, et: {label: 'Eesti', htmlLang: 'et'},
      fi: {label: 'Suomi', htmlLang: 'fi'}, fr: {label: 'Français', htmlLang: 'fr'},
      ga: {label: 'Gaeilge', htmlLang: 'ga'}, hr: {label: 'Hrvatski', htmlLang: 'hr'},
      hu: {label: 'Magyar', htmlLang: 'hu'}, it: {label: 'Italiano', htmlLang: 'it'},
      lt: {label: 'Lietuvių', htmlLang: 'lt'}, lv: {label: 'Latviešu', htmlLang: 'lv'},
      mt: {label: 'Malti', htmlLang: 'mt'}, nl: {label: 'Nederlands', htmlLang: 'nl'},
      pl: {label: 'Polski', htmlLang: 'pl'}, pt: {label: 'Português', htmlLang: 'pt'},
      ro: {label: 'Română', htmlLang: 'ro'}, sk: {label: 'Slovenčina', htmlLang: 'sk'},
      sl: {label: 'Slovenščina', htmlLang: 'sl'}, sv: {label: 'Svenska', htmlLang: 'sv'},
    },
  },

  plugins: ['./plugins/documentation-menu/index.js'],

  presets: [[
    'classic',
    /** @type {import('@docusaurus/preset-classic').Options} */
    ({
      docs: {sidebarPath: './sidebars.js'},
      blog: false,
      sitemap: {filename: 'sitemap.xml', changefreq: 'weekly', priority: 0.5, lastmod: 'date'},
      theme: {customCss: './src/css/custom.css'},
    }),
  ]],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/social-card.svg',
      colorMode: {respectPrefersColorScheme: true},
      navbar: {
        title: 'Open Manuscript Initiative',
        logo: {alt: 'Open Manuscript Initiative', src: 'img/omi-navbar.svg', srcDark: 'img/omi-navbar-dark.svg'},
        items: [
          {type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: 'Project'},
          {to: '/studio', label: 'Studio', position: 'left'},
          {to: '/docs/contribute', label: 'Contribute', position: 'left'},
          {to: '/docs/governance/funding-and-partnerships', label: 'Funding & Partnerships', position: 'left'},
          {to: '/support', label: 'Support', position: 'left'},
          {href: 'https://github.com/open-manuscript-initiative/omi', label: 'GitHub', position: 'right'},
          {type: 'localeDropdown', position: 'right'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {title: 'Open Manuscript Initiative', items: [
            {label: 'Vision', to: '/docs/vision'},
            {label: 'Documentation', to: '/docs/vision'},
            {label: 'Roadmap', to: '/docs/governance/roadmap-to-omi-1.0'},
            {label: 'Studio', to: '/studio'},
          ]},
          {title: 'Community', items: [
            {label: 'Contribute', to: '/docs/contribute'},
            {label: 'Support', to: '/support'},
            {label: 'GitHub Sponsors', href: 'https://github.com/sponsors/open-manuscript-initiative'},
            {label: 'GitHub', href: 'https://github.com/open-manuscript-initiative/omi'},
            {label: 'Wiki', href: 'https://github.com/open-manuscript-initiative/open-manuscript-studio/wiki'},
            {label: 'Facebook', href: 'https://www.facebook.com/share/19AmDMBVoe/'},
          ]},
          {title: 'Project', items: [
            {label: 'Funding & Partnerships', to: '/docs/governance/funding-and-partnerships'},
            {label: 'Grant Readiness Pack', to: '/docs/governance/grant-readiness-pack'},
            {label: 'Code signing policy', to: '/docs/governance/code-signing-policy'},
            {label: 'Privacy policy', to: '/docs/governance/privacy-policy'},
            {label: 'MIT License', href: 'https://github.com/open-manuscript-initiative/omi/blob/main/LICENSE'},
          ]},
        ],
        copyright: `
          <div class="omi-footer-message">
            <span>Open Manuscript Initiative</span>
            <span>Write naturally. Structure once. Publish everywhere.</span>
            <span>Open standards for scholarly publishing.</span>
            <span>© ${new Date().getFullYear()} Open Manuscript Initiative Contributors.</span>
            <span>Built with Docusaurus.</span>
          </div>
        `,
      },
      prism: {theme: prismThemes.github, darkTheme: prismThemes.dracula},
    }),
};

export default config;
