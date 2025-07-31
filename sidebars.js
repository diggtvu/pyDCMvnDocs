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
  // Simplified sidebar matching available content
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/installation',
        'getting-started/setup',
        'getting-started/first-project',
      ],
    },
    {
      type: 'category',
      label: 'Cursor AI Features',
      items: [
        'cursor-features/overview',
        'cursor-features/prompt-engineering',
      ],
    },
    {
      type: 'category',
      label: 'Examples & Use Cases',
      items: [
        'examples/revit-plugins',
      ],
    },
    'contributing',
    'changelog',
  ],
};

module.exports = sidebars;