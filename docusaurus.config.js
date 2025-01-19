// @ts-check
const config = {
  title: 'Deutsch.vn',
  tagline: 'Cộng đồng học tiếng Đức dành cho bạn!',
  favicon: 'img/favicon.ico',

  url: 'https://deutsch.vn', // Thay bằng URL thực tế của bạn
  baseUrl: '/',

  organizationName: 'Khoavo', // Tên tổ chức hoặc cá nhân sở hữu trang web
  projectName: 'Deutsch.vn', // Tên repository

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'vi',
    locales: ['vi', 'de'],
    localeConfigs: {
      vi: {
        label: 'Tiếng Việt',
        direction: 'ltr',
      },
      de: {
        label: 'Deutsch',
        direction: 'ltr',
      },
    },
  },

  themes: ['@docusaurus/theme-mermaid'],

  plugins: [
    require.resolve('docusaurus-lunr-search'),
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/Khoavo/Deutsch.vn/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/Khoavo/Deutsch.vn/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Deutsch.vn',
      logo: {
        alt: 'Deutsch.vn Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "a1niveau",
          position: "left",
          label: "A1 Niveau",
        },
        {
          type: "docSidebar",
          sidebarId: "a2niveau",
          position: "left",
          label: "A2 Niveau",
        },        
        {
          type: "docSidebar",
          sidebarId: "b1niveau",
          position: "left",
          label: "B1 Niveau",
        },
        {
          type: "docSidebar",
          sidebarId: "b2niveau",
          position: "left",
          label: "B2 Niveau",
        },
        {
          href: 'https://github.com/Khoavo/Deutsch.vn',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            { label: 'GitHub', href: 'https://github.com/Khoavo/Deutsch.vn' },
          ],
        },
        {
          title: 'More',
          items: [{ label: 'Blog', to: '/blog' }],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Deutsch.vn.`,
    },
  },
};

module.exports = config;
