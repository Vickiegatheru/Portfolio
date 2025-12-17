// svelte.config.js
import adapter from '@sveltejs/adapter-netlify'; // Changed from adapter-auto
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only works on some platforms; 
		// explicitly using adapter-netlify fixes the detection issue.
		adapter: adapter()
	}
};

export default config;