import { defineConfig, type DefaultTheme } from 'vitepress'

const nav = (): DefaultTheme.NavItem[] => [
	{
		text: 'Writings',
		link: '/writings/',
		activeMatch: '/writings/'
	},
	{
		text: 'About Me',
		link: '/about',
	},
	{
		text: 'Jackal',
		link: '/jackal/',
		activeMatch: '/jackal/'
	},
]

const sidebarJackal = (): DefaultTheme.SidebarItem[] => [
	{
		text: 'Jackal',
		collapsed: false,
		items: [
			{ text: 'Premise', link: 'premise' },
		]
	}
];

const sidebarWriting = (): DefaultTheme.SidebarItem[] => [
	{
		text: 'Writings',
		collapsed: false,
		items: [
			{ text: 'Doubling', link: 'doubling' },
		]
	}
];

export default defineConfig({
	title: "howebenhowe",
	description: "Ben Howe's personal site",
	cleanUrls: true,
	head: [
		['link', { rel: 'icon', href: '/favicon.ico' }],
	],
	rewrites: {
		'writings/:class/:filename': 'writings/:filename'
	},
	themeConfig: {
		outline: 2,
		search: { provider: 'local' },
		nav: nav(),
		sidebar: {
			'/jackal/': { base: '/jackal/', items: sidebarJackal() },
			'/writing/': { base: '/writing/', items: sidebarWriting() },
		}
	}
});
