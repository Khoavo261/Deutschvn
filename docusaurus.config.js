// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Khoavo',
  tagline: 'Bọn mình xây dựng cộng đồng tiếng Đức ở đây',
  favicon: 'img/avt.jpeg',

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  organizationName: 'Khoavo', // Tên tổ chức hoặc người dùng GitHub
  projectName: 'Deutsch.vn', // Tên dự án hoặc repository trên GitHub

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'vi', // Ngôn ngữ mặc định là tiếng Việt
    locales: ['vi', 'de'], // Hỗ trợ tiếng Việt và tiếng Đức
    localeConfigs: {
      vi: { label: 'Tiếng Việt' },
      de: { label: 'Deutsch' },
    },
  },

  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'], // Hỗ trợ Mermaid cho biểu đồ

  plugins: [
    require.resolve('docusaurus-lunr-search'), // Tích hợp tìm kiếm
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/Khoavo/Deutsch.vn/edit/main/', // Liên kết chỉnh sửa tệp tài liệu
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
          },
          editUrl:
            'https://github.com/Khoavo/Deutsch.vn/edit/main/blog/', // Liên kết chỉnh sửa blog
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/avt.jpeg', // Social card
    navbar: {
      title: 'Deutsch.vn',
      logo: {
        alt: 'Deutsch.vn',
        src: 'img/avt.jpeg',
      },
      items: [
        {
          to: '/docs/a1niveau/intro',
          position: 'left',
          label: 'A1 Niveau',
          activeBaseRegex: `/docs/a1niveau/`,
        },
        {
          to: '/docs/a2niveau/intro',
          position: 'left',
          label: 'A2 Niveau',
          activeBaseRegex: `/docs/a2niveau/`,
        },
        {
          to: '/docs/b1niveau/intro',
          position: 'left',
          label: 'B1 Niveau',
          activeBaseRegex: `/docs/b1niveau/`,
        },
        {
          to: '/docs/b2niveau/intro',
          position: 'left',
          label: 'B2 Niveau',
          activeBaseRegex: `/docs/b2niveau/`,
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://www.facebook.com/deutschvie/',
          position: 'right',
          className: 'navbar-icon fab fa-facebook',
          'aria-label': 'Facebook Page',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'A1 Niveau', to: '/docs/a1niveau/intro' },
            { label: 'A2 Niveau', to: '/docs/a2niveau/intro' },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/deutschvie/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Khoavo.vn. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github, // Theme sáng
      darkTheme: prismThemes.dracula, // Theme tối
    },
  },
};

export default config;
