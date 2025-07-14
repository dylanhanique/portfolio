// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			title: 'Dylan Hanique',
			htmlAttrs: {
				lang: 'en',
			},
			link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
		},
	},
	image: {
		dir: 'assets/images',
	},
	compatibilityDate: '2025-05-15',
	devtools: { enabled: true },
	modules: [
		'@nuxt/eslint',
		'@nuxt/icon',
		'@nuxt/ui',
		'@nuxt/fonts',
		'@nuxt/image',
	],
	css: ['@/assets/css/main.css'],
});
