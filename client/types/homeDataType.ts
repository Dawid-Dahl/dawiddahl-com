export type HomeData = {
	introMessage: object[];
	location: string;
	name: string;
	profilePicture: {
		alt: string;
		asset: {
			_id: string;
			url: string;
		};
	};
	role: string;
};

export const homeDataDefault: HomeData[] = [
	{
		introMessage: [{}],
		location: "",
		name: "",
		profilePicture: {
			alt: "",
			asset: {
				_id: "",
				url: "",
			},
		},
		role: "",
	},
];
