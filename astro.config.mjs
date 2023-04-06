import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

import tailwind from '@astrojs/tailwind';
import solid from '@astrojs/solid-js';
import prefetch from '@astrojs/prefetch';
import sitemap from '@astrojs/sitemap';

const { PUBLIC_BASE_URL } = loadEnv(import.meta.env.MODE, process.cwd(), '');

export default defineConfig({
    site: PUBLIC_BASE_URL,
    integrations: [
        tailwind(),
        solid(),
        prefetch({
            throttle: 2,
        }),
        sitemap(),
    ],
});
