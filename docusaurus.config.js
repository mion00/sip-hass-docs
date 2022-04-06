// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SIP-HASS',
  tagline: 'SIP for Home Assistant',
  url: 'https://sip-hass-docs.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'TECH7Fox',
  projectName: 'SIP-HASS',

  plugins: [
    [require.resolve("@easyops-cn/docusaurus-search-local"),
      {hashed: true}
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/TECH7Fox/sip-hass-docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/TECH7Fox/sip-hass-docs/edit/main/',
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
      announcementBar: {
        id: 'support_us',
        content: 'If you like SIP-HASS, please give it a ⭐️ on <a target="_blank" rel="noopener noreferrer" href="https://github.com/TECH7Fox/sip-hass-card">GitHub</a> and consider <a target="_blank" rel="noopener noreferrer" href="https://github.com/sponsors/TECH7Fox">sponsoring</a>.',
        backgroundColor: 'dodgerblue',
        textColor: 'white',
        isCloseable: true,
      },
      navbar: {
        title: 'SIP-HASS',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'tutorial/introduction',
            position: 'left',
            label: 'Tutorial',
          },
          {
            type: 'doc',
            docId: 'add-on/introduction',
            position: 'left',
            label: 'Add-on',
          },
          {
            type: 'doc',
            docId: 'card/introduction',
            position: 'left',
            label: 'Card',
          },
          {
            type: 'doc',
            docId: 'integration/introduction',
            position: 'left',
            label: 'Integration',
          },
          {
            type: 'doc',
            docId: 'developers/introduction',
            position: 'left',
            label: 'Developers',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/TECH7Fox/sip-hass-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/tutorial',
              },
            ],
          },
          {
            title: 'Issues',
            items: [
              {
                label: 'Add-on',
                href: 'https://github.com/TECH7Fox/asterisk-hass-addons/issues',
              },
              {
                label: 'Card',
                href: 'https://github.com/TECH7Fox/sip-hass-card/issues',
              },
              {
                label: 'Integration',
                href: 'https://github.com/TECH7Fox/asterisk-hass-integration/issues',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Home Asssitant forum',
                href: 'https://community.home-assistant.io/',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/qxnDtHbwuD',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/TECH7Fox/sip-hass-docs',
              },
              {
                label: 'Become a sponsor',
                href: 'https://github.com/sponsors/TECH7Fox',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Jordy Kuhne`,
      },
      prism: {
        additionalLanguages: ['editorconfig'],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
