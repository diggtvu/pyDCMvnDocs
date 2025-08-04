// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Cursor AI for BIM Development',
  tagline: 'Complete Guide to AI-Powered Building Information Modeling with Cursor',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://diggtvu.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/pyDCMvnDocs/',

  // GitHub pages deployment config.
  // Using gh-pages-deploy branch for deployment
  organizationName: 'diggtvu', // GitHub org/user name
  projectName: 'pyDCMvnDocs', // Repository name
  deploymentBranch: 'gh-pages-deploy', // Custom deployment branch
  trailingSlash: false, // GitHub Pages compatibility

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/diggtvu/pyDCMvnDocs/tree/main/',
        },

        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/dcmvn-social-card.jpg',
      navbar: {
        title: 'Cursor AI for BIM',
        logo: {
          alt: 'DCMvn Logo',
          src: 'https://dcmvn.com/wp-content/uploads/2023/08/DCMvn-logo-type-color-3-1.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://dcmvn.com',
            label: 'DCMvn Website',
            position: 'right',
          },
          {
            href: 'https://github.com/diggtvu/pyDCMvnDocs',
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
                to: '/docs/getting-started/installation',
              },
              {
                label: 'Cursor Features',
                to: '/docs/features/tab-autocomplete',
              },
              {
                label: 'BIM Examples',
                to: '/docs/hands-on/case-study-room-mapper',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Contributing',
                to: '/docs/contributing',
              },
              {
                label: 'GitHub Discussions',
                href: 'https://github.com/diggtvu/pyDCMvnDocs/discussions',
              },
            ],
          },
          {
            title: 'DCMvn',
            items: [
              {
                label: 'Company Website',
                href: 'https://dcmvn.com',
              },
              {
                label: 'Projects',
                href: 'https://dcmvn.com/projects',
              },
              {
                label: 'Contact',
                href: 'https://dcmvn.com/contact',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Cursor AI for BIM Development. Documentation powered by <a href="https://dcmvn.com" target="_blank">DCMvn</a>.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['csharp', 'python', 'json'],
      },
    }),
};

module.exports = config;