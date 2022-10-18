/* eslint-disable no-undef */
import eslintPlugin from 'vite-plugin-eslint';

export default defineNuxtConfig({
	vite: {
		plugins: [eslintPlugin()],
	},
	modules: [
		[
			'@pinia/nuxt',
			{
				autoImports: ['defineStore', 'acceptHMRUpdate'],
			},
		],
	],
	imports: {
		dirs: ['stores'],
	},
});
