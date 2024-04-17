import { defineConfig, type DefaultTheme } from 'vitepress'

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
			{ text: "75 Things", link: "75_things" },
			{ text: "Absent", link: "absent" },
			{ text: "Bodyweight", link: "bodyweight" },
			{ text: "Bycatch", link: "bycatch" },
			{ text: "Chords", link: "chords" },
			{ text: "Day off", link: "day_off" },
			{ text: "Doubling", link: "doubling" },
			{ text: "Execution", link: "execution" },
			{ text: "Flaneur", link: "flaneur" },
			{ text: "Frenchmen", link: "frenchmen" },
			{ text: "I'm trying I'm trying", link: "im_trying_im_trying" },
			{ text: "Meddling", link: "meddling" },
			{ text: "Morning on St Nicholas", link: "morning_on_St_Nicholas" },
			{ text: "My Father's Belt", link: "my_fathers_belt" },
			{ text: "Nola Stairs", link: "nola_stairs" },
			{ text: "Frenchmen", link: "frenchmen" },
			{ text: "Plucked", link: "plucked" },
			{ text: "Quiet", link: "quiet" },
			{ text: "Reconstitute", link: "reconstitute" },
			{ text: "Reluctant", link: "reluctant" },
			{ text: "Seams", link: "seams" },
			{ text: "Silent Film", link: "silent_film" },
			{ text: "Stinky Fish", link: "stinky_fish" },
			{ text: "Stir", link: "stir" },
			{ text: "Sweet Sour", link: "sweet_sour" },
			{ text: "TV", link: "tv" },
			{ text: "Untitled [after Bolaño]", link: "after_bolaño" },
			{ text: "Vee", link: "vee" },
			{ text: "Visiting Home", link: "visiting_home" },
			{ text: "Whiteout", link: "whiteout" },
			{ text: "Wide Arms", link: "wide_arms" },
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
	rewrites: {
		"writings/:class/:filename": "writings/:filename"
	},
	themeConfig: {
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
