// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Awesome Docusaurus',
  tagline: 'Dinosaurs thật tuyệt vời!',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  plugins: [require.resolve('docusaurus-lunr-search')],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
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

      // announcementBar: {
      //   id: 'announcementBar-v3.2', // Increment on change
      //   content: `🎉️ <b>Khai giảng khoá học Python chứng khoán K9 từ 8/12/2024 <a target="_blank" href="https://vnstocks.com/lp-khoa-hoc-python-chung-khoan/"></a></b>. Đăng ký ngay! 🥳️`,
      // },

      announcementBar: {
        id: 'image_banner', // Any value that will identify this message.
        content:
          '<a href="https://vnstocks.com/lp-khoa-hoc-python-chung-khoan"><img src="https://vnstocks.com/img/python_chung_khoan_banner.png" alt="Banner" class="announcement-bar-image" /></a>',
        backgroundColor: '#fafbfc', // Defaults to `#fff`.
        textColor: '#091E42', // Defaults to `#000`.
        isCloseable: true, // Defaults to `true`.
      },

      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Awesome Docusaurus',
        logo: {
          alt: 'Awesome Docusaurus Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/docs/intro',
            position: 'left',
            label: 'Hướng dẫn',
            activeBaseRegex: `/docs/intro`,
          },
          {to: '/blog', 
            label: 'Blog', 
            position: 'left',
            activeBaseRegex: `/blog`,
          },
          {
            label: 'Thư viện mẫu',
            position: 'left',
            activeBaseRegex: `/thu-vien-mau`,
            items: [
              {
                to: '/demo/cards', 
                label: 'Demo - Tất cả', 
              },
              {
                to: '/demo/about', 
                label: 'Demo - Về chúng tôi', 
              },
              {
                to: '/demo/featured-products', 
                label: 'Demo - Sản phẩm nổi bật + CTA', 
              },
              {
                to: '/demo/faq', 
                label: 'Demo - CTA & FAQ', 
              },
              {
                to: '/markdown/page-with-subscribe-box', 
                label: 'Demo - Đăng ký bản tin', 
              },
              {
                to: '/markdown/image-popup', 
                label: 'Demo - Popup ảnh', 
              },
              {
                to: '/markdown/media-embeded', 
                label: 'Demo - Nhúng Video, PDF, Notebook', 
              },
              {
                to: '/demo/slider', 
                label: 'Demo - Slider trình chiếu', 
              },
              {
                to: '/demo/image-gallery', 
                label: 'Demo - Thư viện ảnh', 
              },
              {
              to: '/demo/testimonial', 
              label: 'Demo - Testimonial - Chứng thực', 
              },
              {
                to: '/markdown/page-with-subscribe-box', 
                label: 'Trang Markdown & Subscribe', 
              },
              {
                to: '/markdown/page-with-faq', 
                label: 'Trang Markdown & FAQ', 
              },
              {
                to: '/demo/text-reveal', 
                label: 'Demo - Cuộn chữ', 
              },
              {
                to: '/docs/demo/', 
                label: 'Nguồn cảm hứng', 
              },
            ],
          },
          {
            href: 'https://www.facebook.com/learn.anything.az/',
            position: 'right',
            className: 'navbar-icon fab fa-facebook',
            'aria-label': 'Facebook',
          },
          {
            href: 'https://m.me/mr.thinh.ueh',
            position: 'right',
            className: 'navbar-icon fab fa-facebook-messenger',
            'aria-label': 'Messenger',
          },
          {
            href: 'https://t.me/mr_thinh',
            position: 'right',
            className: 'navbar-icon fab fa-telegram-plane',
            'aria-label': 'Telegram',
          },
          {
            href: 'https://www.youtube.com/@learn_anything_az?sub_confirmation=1',
            position: 'right',
            className: 'navbar-icon fab fa-youtube',
            'aria-label': 'YouTube',
          },
          {
            href: 'https://github.com/learn-anything-az/awesome_docusaurus',
            position: 'right',
            className: 'navbar-icon fab fa-github',
            'aria-label': 'GitHub',
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
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'X',
                href: 'https://x.com/docusaurus',
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
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        // copyright: `Copyright © ${new Date().getFullYear()} Awesome Docusaurus, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
