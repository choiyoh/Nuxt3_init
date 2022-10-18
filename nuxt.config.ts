/* eslint-disable no-undef */
import eslintPlugin from 'vite-plugin-eslint';

export default defineNuxtConfig({
	buildModules: ['./modules/auto-import-eslint'],
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
