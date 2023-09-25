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
			{ text: 'Vee', link: 'vee' },
			{ text: 'Visiting Home', link: 'visiting_home' },
			{ text: 'Day off', link: 'day_off' },
			{ text: 'Leak line', link: 'leak_line' },
			{ text: 'Sweet Sour', link: 'sweet_sour' },
			{ text: 'Reconstitute', link: 'reconstitute' },
			{ text: 'Execution', link: 'execution' },
			{ text: 'TV', link: 'tv' },
			{ text: 'Reluctant', link: 'reluctant' },
			{ text: 'Absent', link: 'absent' },
			{ text: 'Nola Stairs', link: 'nola_stairs' },
			{ text: 'Sam Hug', link: 'sam_hug' },
			{ text: '75 Things', link: '75_things' },
			{ text: 'Morning on St Nicholas', link: 'morning_on_St_Nicholas' },
			{ text: 'Meddling', link: 'meddling' },
			{ text: 'Geo Texts', link: 'geo_texts' },
			{ text: 'Untitled [after Bolaño]', link: 'untitled_(bolano)' },
			{ text: "My Father's Belt", link: 'my_fathers_belt' },
			{ text: 'Whiteout', link: 'whiteout' },
			{ text: 'Stinky Fish', link: 'stinky_fish' },
			{ text: 'Bodyweight', link: 'bodyweight' },
			{ text: 'Amazon Review to Murder Date', link: 'amazon_review_to_murder_to_date' },
			{ text: 'Coffee Tasting Notes', link: 'coffee_tasting_notes' },
			{ text: 'Chords', link: 'chords' },
			{ text: 'Literary Stalking', link: 'literary_stalking' },
			{ text: 'Silent Film', link: 'silent_film' },
			{ text: 'Flaneur', link: 'flaneur' },
			{ text: "I'm trying I'm trying", link: 'im_trying_im_trying' },
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
			'/writings/': { base: '/writings/', items: sidebarWriting() },
		}
	}
});
