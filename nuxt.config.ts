/* eslint-disable no-undef */
import eslintPlugin from 'vite-plugin-eslint';

export default defineNuxtConfig({
	buildModules: ['./modules/auto-import-eslint'],
	vite: {
		plugins: [eslintPlugin()],
		css: {
			preprocessorOptions: {
				scss: {
					additionalData:
						'@import "@/assets/sass/mixins.scss"; @import "@/assets/sass/app.scss";',
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
