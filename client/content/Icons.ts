type Icon = {name: string; imageLink: string};

export const icons: Icon[] = [
	{
		name: "home",
		imageLink: "https://s2.svgbox.net/hero-outline.svg?color=7a69ff&ic=identification",
	},
	{name: "projects", imageLink: "https://s2.svgbox.net/hero-outline.svg?color=7a69ff&ic=archive"},
	{
		name: "skills",
		imageLink: "https://s2.svgbox.net/hero-outline.svg?color=7a69ff&ic=badge-check",
	},
	{name: "contact", imageLink: "https://s2.svgbox.net/hero-outline.svg?color=7a69ff&ic=share"},
];

export enum IconsList {
	home,
	projects,
	skills,
	contact,
}
