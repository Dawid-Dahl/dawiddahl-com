export type ProjectData = {
	image: {
		alt: string;
		asset: {
			_id: string;
			url: string;
		};
	};
	name: string;
	description: object[];
	link: string;
};

export const projectDataDefault: ProjectData[] = [
	{
		image: {
			alt: "",
			asset: {
				_id: "",
				url: "",
			},
		},
		name: "",
		description: [{}],
		link: "",
	},
];
