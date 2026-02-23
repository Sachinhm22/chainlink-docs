// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Chainlink Functions Docs',

      sidebar: [
        {
          label: 'Chainlink Functions',
          items: [
            { label: 'Overview', slug: 'functions' },
          ],
        },
      ],