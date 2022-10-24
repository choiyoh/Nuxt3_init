/* eslint-disable no-undef */
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'url';
import eslintPlugin from 'vite-plugin-eslint';
import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite';

export default defineNuxtConfig({
	buildModules: ['./modules/auto-import-eslint'],
	vite: {
		plugins: [
			eslintPlugin(),
			VueI18nVitePlugin({
				include: [
					resolve(dirname(fileURLToPath(import.meta.url)), './locales/*.json'),
				],
			}),
		],
		css: {
			preprocessorOptions: {
				scss: {
					additionalData:
						'@import "@/assets/sass/mixins.scss"; @import "@/assets/sass/app.scss"; @import "@/assets/sass/variables.scss";',
				},
			},
		},
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
	css: ['~/assets/css/tailwind.css'],
	build: {
		postcss: {
			postcssOptions: {
				plugins: {
					tailwindcss: {},
					autoprefixer: {},
				},
			},
		},
	},
});
