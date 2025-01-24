// @ts-check
const config = {
  title: 'Deutsch.vn',
  tagline: 'Cộng đồng học tiếng Đức dành cho bạn!',
  favicon: '/img/avt.png',

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
    image: 'img/avt.jpeg',
    navbar: {
      title: 'Deutsch.vn',
      logo: {
        alt: 'Deutsch.vn',
        src: 'img/avt.jpeg',
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "a1niveau",
          position: "left",
          label: "A1 Niveau",
          link: {
            type: "doc",
            id: "intro" // ID của tài liệu intro
          },
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
          label: 'Bài Tập', // Thêm mục "Thư viện mẫu"
          position: 'left',
          activeBaseRegex: `/baitap`,
          items: [
            // {
            //   to: '/demo/cards',
            //   label: 'Demo - Tất cả',
            // },
            {
              to: '/demo/batch1',
              label: 'Động từ bất quy tắc 1',
            },
            {
              to: '/demo/batch2',
              label: 'Động từ bất quy tắc 2',
            },
            {
              to: '/demo/batch3',
              label: 'Động từ bất quy tắc 3',
            },
            {
              to: '/demo/batch4',
              label: 'Động từ bất quy tắc 4',
            },
            {
              to: '/demo/batch5',
              label: 'Động từ bất quy tắc 5',
            },
            {
              to: '/demo/batch6',
              label: 'Động từ bất quy tắc 6',
            },
            {
              to: '/demo/batch7',
              label: 'Động từ bất quy tắc 7',
            },
            {
              to: '/demo/batch8',
              label: 'Động từ bất quy tắc 8',
            },
            {
              to: '/demo/batch9',
              label: 'Động từ bất quy tắc 9',
            },
            {
              to: '/demo/batch10',
              label: 'Động từ bất quy tắc 10',
            },
          ],
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
