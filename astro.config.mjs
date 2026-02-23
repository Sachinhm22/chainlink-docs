// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Chainlink Functions Docs',

      // ✅ Force light mode as default
      appearance: {
        default: 'light',
      },

      // ✅ Clean sidebar (no architecture page)
      sidebar: [
        {
          label: 'Chainlink Functions',
          items: [
            { label: 'Overview', slug: 'functions' },
          ],
        },
      ],

      // Optional: GitHub link (edit if needed)
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/Sachinhm22/chainlink-docs',
        },
      ],
    }),
  ],
});