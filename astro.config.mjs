// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Chainlink Functions Docs',

      theme: {
        default: 'light',
      },

      sidebar: [
        {
          label: 'Chainlink Functions',
          items: [
            { label: 'Overview', slug: 'functions' },
          ],
        },
      ],

      // 🚨 THIS disables auto-generation completely
      customCss: [],
    }),
  ],
});