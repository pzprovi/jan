// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Jan Documentation',
  tagline: 'Self-hosted AI inference platform',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.jan.ai',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'janhq', // Usually your GitHub org/user name.
  projectName: 'jan', // Usually your repo name.

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Plugins we added
  // Only for react live
  themes: ['@docusaurus/theme-live-codeblock'],

  // The classic preset will relay each option entry to the respective sub plugin/theme.
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // Will be passed to @docusaurus/plugin-content-docs (false to disable)
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/janhq/jan/tree/main/docs',
          sidebarCollapsed: false,
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        // Will be passed to @docusaurus/plugin-content-sitemap (false to disable)
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
        // Will be passed to @docusaurus/plugin-content-blog (false to disable)
        blog: false,
        // Will be passed to @docusaurus/theme-classic.
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        // Will be passed to @docusaurus/plugin-content-pages (false to disable)
        // pages: {},
      }),
    ],
    // Redoc preset
    [
      'redocusaurus',
      {
        specs: [
          {
            spec: 'openapi/OpenAPISpec.json', // can be local file, url, or parsed json object
            route: '/reference/',
          },
        ],
        theme: {
          primaryColor: '#1a73e8',
          primaryColorDark: '#1a73e8',
          // redocOptions: { hideDownloadButton: false },
        },
      }
    ]
  ],

  // Docs: https://docusaurus.io/docs/api/themes/configuration
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/jan-social-card.png',
      // Only for react live
      liveCodeBlock: {
        playgroundPosition: 'bottom',
      },
      navbar: {
        title: 'Jan Docs',
        logo: {
          alt: 'Jan Logo',
          src: 'img/logo.svg',
        },
        items: [
          // Navbar left
          {
            type: 'docSidebar',
            sidebarId: 'quickstartSidebar',
            position: 'left',
            label: 'Getting Started',
          },
          {
            type: 'docSidebar',
            sidebarId: 'guidesSidebar',
            position: 'left',
            label: 'Guides',
          },
          {
            type: 'docSidebar',
            sidebarId: 'hardwareSidebar',
            position: 'left',
            label: 'Hardware',
          },
          {
            type: 'docSidebar',
            sidebarId: 'integrationsSidebar',
            position: 'left',
            label: 'Integrations',
          },
          {
            position: 'left',
            label: 'Reference',
            to: '/reference',
          },
          // Navbar right
          {
            type: 'docSidebar',
            sidebarId: 'aboutSidebar',
            position: 'right',
            label: 'About',
          },
          {
            href: 'https://github.com/janhq/jan',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Getting Started',
                to: '/',
              },
              {
                label: 'Guides',
                to: '/guides',
              },
              {
                label: 'Developer',
                to: '/developer',
              },
              {
                label: 'Reference',
                to: '/reference',
              },
              {
                label: 'Changelog',
                to: '/changelog',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/FTk2MvZwJH',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/+cSSlxwEM-0piMDQ1',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/askjanai',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'About',
                to: '/about',
              },
              {
                label: 'Blog',
                href: 'https://blog.jan.ai',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/janhq/jan',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Jan AI Pte Ltd.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['python'],
      },
    }),
};

module.exports = config;