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
  
  {
  
  label: 'Động từ bất quy tắc', // Label con bên trong
  
  items: [
  
  // {
  
  // to: '/demo/cards',
  
  // label: 'Demo - Tất cả',
  
  // },
  
  {
  
  to: '/demo/irregularverb/batch1',
  
  label: 'Động từ bất quy tắc 1',
  
  },
  
  {
  
  to: '/demo/irregularverb/batch2',
  
  label: 'Động từ bất quy tắc 2',
  
  },
  
  {
  
  to: '/demo/irregularverb/batch3',
  
  label: 'Động từ bất quy tắc 3',
  
  },
  
  {
  
  to: '/demo/irregularverb/batch4',
  
  label: 'Động từ bất quy tắc 4',
  
  },
  
  {
  
  to: '/demo/irregularverb/batch5',
  
  label: 'Động từ bất quy tắc 5',
  
  },
  
  {
  
  to: '/demo/irregularverb/batch6',
  
  label: 'Động từ bất quy tắc 6',
  
  },
  
  {
  
  to: '/demo/irregularverb/batch7',
  
  label: 'Động từ bất quy tắc 7',
  
  },
  
  {
  
  to: '/demo/irregularverb/batch8',
  
  label: 'Động từ bất quy tắc 8',
  
  },
  
  {
  
  to: '/demo/irregularverb/batch9',
  
  label: 'Động từ bất quy tắc 9',
  
  },
  
  {
  to: '/demo/irregularverb/batch10',
  label: 'Động từ bất quy tắc 10',
  },
  ],
  
  },
  
  {
  
  label: 'Ngữ pháp A1', // Label con khác
  
  items: [
  
  {
  
  to: '/demo/ubungA1/grammatik/bai1', // Item 1 trong "Ngữ pháp A1"
  
  label: 'Bài tập Ngữ pháp A1 - Bài 1',
  
  },
  
  {
  
  to: '/demo/ubungA1/grammatik/bai2', // Item 2 trong "Ngữ pháp A1"
  
  label: 'Bài tập Ngữ pháp A1 - Bài 2',
  
  },
  
  {
  
  to: '/demo/ubungA1/grammatik/bai3', // Item 2 trong "Ngữ pháp A1"
  
  label: 'Bài tập Ngữ pháp A1 - Bài 3',
  
  },
  
  {
  
  to: '/demo/ubungA1/grammatik/bai4', // Item 2 trong "Ngữ pháp A1"
  
  label: 'Bài tập Ngữ pháp A1 - Bài 4',
  
  },
  
  {
  
  to: '/demo/ubungA1/grammatik/bai5', // Item 2 trong "Ngữ pháp A1"
  
  label: 'Bài tập Ngữ pháp A1 - Bài 5',
  
  },
  
  {
  
  to: '/demo/ubungA1/grammatik/bai6', // Item 2 trong "Ngữ pháp A1"
  
  label: 'Bài tập Ngữ pháp A1 - Bài 6',
  
  },
  
  {
  
  to: '/demo/ubungA1/grammatik/bai7', // Item 2 trong "Ngữ pháp A1"
  
  label: 'Bài tập Ngữ pháp A1 - Bài 7',
  
  },
  
  {
  
  to: '/demo/ubungA1/grammatik/bai8', // Item 2 trong "Ngữ pháp A1"
  
  label: 'Bài tập Ngữ pháp A1 - Bài 8',
  
  },
  
  {
  
  to: '/demo/ubungA1/grammatik/bai9', // Item 2 trong "Ngữ pháp A1"
  
  label: 'Bài tập Ngữ pháp A1 - Bài 9',
  
  },
  
  ]
  
  },
  
  ]
  
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