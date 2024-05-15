import { defineConfig, type DefaultTheme } from 'vitepress'
import markdownItFootnote from 'markdown-it-footnote'

const nav = (): DefaultTheme.NavItem[] => [
	{
		text: "Writings",
		link: "/writings/",
		activeMatch: "/writings/"
	},
	{
		text: "About Me",
		link: "/about",
	},
	{
		text: "Jackal",
		link: "/jackal/",
		activeMatch: "/jackal/"
	},
]

const sidebarJackal = (): DefaultTheme.SidebarItem[] => [
	{
		text: "Jackal",
		collapsed: false,
		items: [
			{ text: "Premise", link: "premise" },
		]
	}
];

const sidebarWriting = (): DefaultTheme.SidebarItem[] => [
	{
		text: "Writings",
		collapsed: false,
		items: [
			{ text: "75 Things", link: "75-things" },
			{ text: "Absent", link: "absent" },
			{ text: "Bodyweight", link: "bodyweight" },
			{ text: "Bycatch", link: "bycatch" },
			{ text: "Chords", link: "chords" },
			{ text: "Day off", link: "day-off" },
			{ text: "Doubling", link: "doubling" },
			{ text: "Execution", link: "execution" },
			{ text: "Flaneur", link: "flaneur" },
			{ text: "Frenchmen", link: "frenchmen" },
			{ text: "I'm trying I'm trying", link: "im-trying-im-trying" },
			{ text: "Meddling", link: "meddling" },
			{ text: "Morning on St Nicholas", link: "morning-on-St-Nicholas" },
			{ text: "My Father's Belt", link: "my-fathers-belt" },
			{ text: "Nola Stairs", link: "nola-stairs" },
			{ text: "Fall", link: "fall" },
			{ text: "Frenchmen", link: "frenchmen" },
			{ text: "Pandemonium", link: "pandemonium" },
			{ text: "Plucked", link: "plucked" },
			{ text: "Personal Best", link: "personal-best" },
			{ text: "Quiet", link: "quiet" },
			{ text: "Reconstitute", link: "reconstitute" },
			{ text: "Reluctant", link: "reluctant" },
			{ text: "Seams", link: "seams" },
			{ text: "Silent Film", link: "silent-film" },
			{ text: "Stinky Fish", link: "stinky-fish" },
			{ text: "Stir", link: "stir" },
			{ text: "Sweet Sour", link: "sweet-sour" },
			{ text: "TV", link: "tv" },
			{ text: "Untitled [after Bolaño]", link: "after-bolaño" },
			{ text: "Vee", link: "vee" },
			{ text: "Visiting Home", link: "visiting-home" },
			{ text: "Whiteout", link: "whiteout" },
			{ text: "Wide Arms", link: "wide-arms" },
		]
	}
];

export default defineConfig({
	title: "howebenhowe",
	description: "Ben Howe's personal site",
	cleanUrls: true,
	head: [
		["link", { rel: "icon", href: "/favicon.ico" }],
	],
	markdown: {
		container: {
			tipLabel: 'peter',
			warningLabel: 'ben'
		},
		config: (md) => {
			md.use(markdownItFootnote)
		}
	},
	themeConfig: {
		sidebarMenuLabel: "Writings",
		outline: 2,
		search: { provider: "local" },
		nav: nav(),
		sidebar: {
			"/jackal/": { base: "/jackal/", items: sidebarJackal() },
			"/writings/": { base: "/writings/", items: sidebarWriting() },
		}
	},
	srcExclude: [
		'**/wip/**',
		'**/sources/**',
		'**/unpublished/**',
	]
});
