export type SkillData = {
	image: {
		alt: string;
		asset: {
			_id: string;
			url: string;
		};
	};
	name: string;
	description: string;
};

export const skillDataDefault: SkillData[] = [
	{
		image: {
			alt: "",
			asset: {
				_id: "",
				url: "",
			},
		},
		name: "",
		description: "",
	},
];
