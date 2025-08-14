// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://analyticalbyte.com/',
	integrations: [mdx(), sitemap()],
	markdown: {
		shikiConfig: {
			theme: "tokyo-night",
			wrap: true
		}
	}
});
