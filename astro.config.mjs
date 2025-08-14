// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://diogoos.github.io',
	base: "/analyticalbyte",
	integrations: [mdx(), sitemap()],
	markdown: {
		shikiConfig: {
			theme: "tokyo-night",
			wrap: true
		}
	}
});
