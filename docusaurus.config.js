// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Deutsch.vn',
  tagline: 'Cộng đồng học tiếng Đức dành cho bạn!',
  favicon: 'img/avt.png',

  // URL và baseURL cho trang web
  url: 'https://deutsch.vn',
  baseUrl: '/',

  organizationName: 'Khoavo', // GitHub tổ chức hoặc tên tài khoản
  projectName: 'Deutsch.vn',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'vi',
    locales: ['vi', 'de'],
    localeConfigs: {
      vi: { label: 'Tiếng Việt', direction: 'ltr' },
      de: { label: 'Deutsch', direction: 'ltr' },
    },
  },

  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

  plugins: [require.resolve('docusaurus-lunr-search')],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */ ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig: /** @type {import('@docusaurus/preset-classic').ThemeConfig} */ ({
    navbar: {
      title: 'Deutsch.vn',
      logo: {
        alt: 'Deutsch.vn Logo',
        src: 'img/avt.png',
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "a1niveau",
          to: '/docs/a1niveau',
          label: 'A1 Niveau',
          position: 'left',
        },        
        {
          type: "docSidebar",
          sidebarId: "a2niveau",
          to: '/docs/a2niveau',
          label: 'A2 Niveau',
          position: 'left',
        },
        {
          type: "docSidebar",
          sidebarId: "b1niveau",
          to: '/docs/b1niveau',
          label: 'B1 Niveau',
          position: 'left',
        },
        {
          type: "docSidebar",
          sidebarId: "b2niveau",
          to: '/docs/b2niveau',
          label: 'B2 Niveau',
          position: 'left',
        },
        // {
        //   to: '/blog',
        //   label: 'Blog',
        //   position: 'left',
        // },
        {
          label: 'Bài Tập',
          position: 'left',
          items: [
            { to: '/irregularverb/batch1', label: 'Bảng 1' },
            { to: '/irregularverb/batch2', label: 'Bảng 2' },
            { to: '/irregularverb/batch3', label: 'Bảng 3' },
            { to: '/irregularverb/batch4', label: 'Bảng 4' },
            { to: '/irregularverb/batch5', label: 'Bảng 5' },
            { to: '/irregularverb/batch6', label: 'Bảng 6' },
            { to: '/irregularverb/batch7', label: 'Bảng 7' },
            { to: '/irregularverb/batch8', label: 'Bảng 8' },
            { to: '/irregularverb/batch9', label: 'Bảng 9' },
            { to: '/irregularverb/batch10', label: 'Bảng 10' },
            { to: '/ubungA1/grammatikA1/bai1', label: 'Bai 1' },
            { to: '/ubungA1/grammatikA1/bai2', label: 'Bai 2' },
            { to: '/ubungA1/grammatikA1/bai3', label: 'Bai 3' },
            { to: '/ubungA1/grammatikA1/bai4', label: 'Bai 4' },
            { to: '/ubungA1/grammatikA1/bai5', label: 'Bai 5' },
            { to: '/ubungA1/grammatikA1/bai6', label: 'Bai 6' },
            { to: '/ubungA1/grammatikA1/bai7', label: 'Bai 7' },
            { to: '/ubungA1/grammatikA1/bai8', label: 'Bai 8' },
            { to: '/ubungA1/grammatikA1/bai9', label: 'Bai 9' },
          ],
        },
        // {
        //   href: 'https://www.facebook.com/learn.anything.az/',
        //   position: 'right',
        //   className: 'navbar-icon fab fa-facebook',
        //   'aria-label': 'Facebook',
        // },
        // {
        //   href: 'https://m.me/mr.thinh.ueh',
        //   position: 'right',
        //   className: 'navbar-icon fab fa-facebook-messenger',
        //   'aria-label': 'Messenger',
        // },
        // {
        //   href: 'https://t.me/mr_thinh',
        //   position: 'right',
        //   className: 'navbar-icon fab fa-telegram-plane',
        //   'aria-label': 'Telegram',
        // },
        // {
        //   href: 'https://www.youtube.com/@learn_anything_az?sub_confirmation=1',
        //   position: 'right',
        //   className: 'navbar-icon fab fa-youtube',
        //   'aria-label': 'YouTube',
        // },
        // {
        //   href: 'https://github.com/learn-anything-az/awesome_docusaurus',
        //   position: 'right',
        //   className: 'navbar-icon fab fa-github',
        //   'aria-label': 'GitHub',
        // },
  
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'Tutorial', to: '/docs/intro' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'Stack Overflow', href: 'https://stackoverflow.com/questions/tagged/docusaurus' },
            { label: 'Discord', href: 'https://discordapp.com/invite/docusaurus' },
            { label: 'X', href: 'https://x.com/docusaurus' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'Blog', to: '/blog' },
            { label: 'GitHub', href: 'https://github.com/facebook/docusaurus' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Awesome Docusaurus, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  }),
};

export default config;