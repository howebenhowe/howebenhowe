import { defineConfig } from 'vitepress'

export default defineConfig({
	title: "howebenhowe",
	description: "Ben Howe's personal site",
	cleanUrls: true,
	head: [
		['link', { rel: 'icon', href: '/public/favicon.ico' }],
	],
	themeConfig: {
		nav: [
		],
		outline: 2,
	}
})
