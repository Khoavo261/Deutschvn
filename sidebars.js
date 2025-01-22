/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  a1niveau: [{type: 'autogenerated', dirName: 'a1niveau'}],
  a2niveau: [{type: 'autogenerated', dirName: 'a2niveau'}],
  b1niveau: [{type: 'autogenerated', dirName: 'b1niveau'}],
  b2niveau: [{type: 'autogenerated', dirName: 'b2niveau'}],

    // Thêm sidebar cho "baiTap"
    baitap: [{type: 'autogenerated', dirName: 'baitap'}],


  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};

module.exports = sidebars;