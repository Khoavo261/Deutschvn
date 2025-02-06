// @ts-check

const config = {
  title: "Deutsch.vn",
  tagline: "Cộng đồng học tiếng Đức dành cho bạn!",
  favicon: "/img/avt.png",
  url: "https://deutsch.vn", // Thay bằng URL thực tế của bạn
  baseUrl: "/",
  organizationName: "Khoavo", // Tên tổ chức hoặc cá nhân sở hữu trang web
  projectName: "Deutsch.vn", // Tên repository
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "vi",
    locales: ["vi", "de"],
    localeConfigs: {
      vi: { label: "Tiếng Việt", direction: "ltr" },
      de: { label: "Deutsch", direction: "ltr" },
    },
  },

  themes: ["@docusaurus/theme-mermaid"],
  plugins: [require.resolve("docusaurus-lunr-search")],

  presets: [
    [
      "classic",
      {
        docs: { sidebarPath: require.resolve("./sidebars.js") },
        blog: { showReadingTime: true },
        theme: { customCss: require.resolve("./src/css/custom.css") },
      },
    ],
  ],

  themeConfig: {
    image: "img/avt.jpeg",
    navbar: {
      title: "Deutsch.vn",
      logo: { alt: "Deutsch.vn", src: "img/avt.jpeg" },
      items: [
        { type: "docSidebar", sidebarId: "a1niveau", position: "left", label: "A1 Niveau", link: { type: "doc", id: "intro" } },
        { type: "docSidebar", sidebarId: "a2niveau", position: "left", label: "A2 Niveau" },
        { type: "docSidebar", sidebarId: "b1niveau", position: "left", label: "B1 Niveau" },
        { type: "docSidebar", sidebarId: "b2niveau", position: "left", label: "B2 Niveau" },
        // {
        //   label: "Bài Tập",
        //   position: "left",
        //   activeBaseRegex: `/baitap`,
        //   items: [
        //     {
        //       label: "Động từ bất quy tắc",
        //       items: Array.from({ length: 10 }, (_, i) => ({
        //         to: `/demo/irregularverb/batch${i + 1}`,
        //         label: `Động từ bất quy tắc ${i + 1}`,
        //       })),
        //     },
        //     {
        //       label: "Ngữ pháp A1",
        //       items: Array.from({ length: 9 }, (_, i) => ({
        //         to: `/demo/ubungA1/grammatik/bai${i + 1}`,
        //         label: `Bài tập Ngữ pháp A1 - Bài ${i + 1}`,
        //       })),
        //     },
        //   ],
        // },
      ],
    },

    footer: {
      style: "dark",
      links: [
        { title: "Community", items: [{ label: "GitHub", href: "https://github.com/Khoavo/Deutsch.vn" }] },
        { title: "More", items: [{ label: "Blog", to: "/blog" }] },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Deutsch.vn.`,
    },
  },
};

module.exports = config;
