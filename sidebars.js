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
  // Cursor AI for BIM Development Documentation
  tutorialSidebar: [
    'intro',
    
    {
      type: 'category',
      label: '🎯 Cursor AI Fundamentals',
      items: [
        'fundamentals/market-overview',
        'fundamentals/most-powerful-llms',
        'fundamentals/introduction-to-cursor',
        'fundamentals/setting-up-cursor',
        'fundamentals/project-setup',
      ],
    },
    
    {
      type: 'category',
      label: '🚀 Core Cursor Features',
      items: [
        'features/configuring-rules-docs',
        'features/tab-autocomplete',
        'features/inline-editing',
        {
          type: 'category',
          label: 'Agent Chat Mode',
          items: [
            'features/chat-mode',
            'features/chat-mode/prompt-engineering',
          ],
        },
      ],
    },
    
    {
      type: 'category',
      label: '🛠️ Hands-On Examples',
      items: [
        'hands-on/pyrevit-mvvm-showcase',
        'hands-on/agent-coding-demo',
      ],
    },
    
    {
      type: 'category',
      label: '📝 Final Review',
      items: [
        'review/summary-qa-bim-tools',
      ],
    },
    
    {
      type: 'category',
      label: '📚 Resources & Community',
      items: [
        'contributing',
        'changelog',
      ],
    },
  ],
};

module.exports = sidebars;