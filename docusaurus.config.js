// @ts-check
const config = {
  title: 'Deutsch.vn',
  tagline: 'Cộng đồng học tiếng Đức dành cho bạn!',
  favicon: '/img/avt.png',

  url: 'https://deutsch.vn', // URL thực tế của trang
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
        },
        blog: {
          showReadingTime: true,
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
          type: 'docSidebar',
          sidebarId: 'a1niveau',
          position: 'left',
          label: 'A1 Niveau',
        },
        {
          type: 'docSidebar',
          sidebarId: 'a2niveau',
          position: 'left',
          label: 'A2 Niveau',
        },
        {
          type: 'docSidebar',
          sidebarId: 'b1niveau',
          position: 'left',
          label: 'B1 Niveau',
        },
        {
          type: 'docSidebar',
          sidebarId: 'b2niveau',
          position: 'left',
          label: 'B2 Niveau',
        },
        {
          label: 'Bài Tập', // Sử dụng liên kết trực tiếp cho các trang động
          position: 'left',
          items: [
            {
              label: 'Động từ bất quy tắc',
              items: [
                {
                  label: 'Bảng 1',
                  to: '/demo/irregularverb/batch1', // Trang động từ src/pages
                },
                {
                  label: 'Bảng 2',
                  to: '/demo/irregularverb/batch2',
                },
                {
                  label: 'Bảng 3',
                  to: '/demo/irregularverb/batch3',
                },
                {
                  label: 'Bảng 4',
                  to: '/demo/irregularverb/batch4',
                },
                {
                  label: 'Bảng 5',
                  to: '/demo/irregularverb/batch5',
                },                
                {
                  label: 'Bảng 6',
                  to: '/demo/irregularverb/batch6',
                },
                {
                  label: 'Bảng 7',
                  to: '/demo/irregularverb/batch7',
                },
                {
                  label: 'Bảng 8',
                  to: '/demo/irregularverb/batch8',
                },
                {
                  label: 'Bảng 9',
                  to: '/demo/irregularverb/batch9',
                },
                {
                  label: 'Bảng 10',
                  to: '/demo/irregularverb/batch10',
                },
              ],
            },
            {
              label: 'Ngữ pháp A1',
              items: [
                {
                  label: 'Bài 1',
                  to: '/demo/ubungA1/grammatik/bai1', // Trang động từ src/pages
                },
                {
                  label: 'Bài 2',
                  to: '/demo/ubungA1/grammatik/bai2',
                },
                {
                  label: 'Bài 3',
                  to: '/demo/ubungA1/grammatik/bai3',
                },
                {
                  label: 'Bài 4',
                  to: '/demo/ubungA1/grammatik/bai4',
                },
                {
                  label: 'Bài 5',
                  to: '/demo/ubungA1/grammatik/bai5',
                },
                {
                  label: 'Bài 6',
                  to: '/demo/ubungA1/grammatik/bai6',
                },
                {
                  label: 'Bài 7',
                  to: '/demo/ubungA1/grammatik/bai7',
                },
                {
                  label: 'Bài 8',
                  to: '/demo/ubungA1/grammatik/bai8',
                },
                {
                  label: 'Bài 9',
                  to: '/demo/ubungA1/grammatik/bai9',
                },
              ],
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
