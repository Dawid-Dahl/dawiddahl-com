export default {
	name: "home",
	title: "Home",
	type: "document",
	fields: [
		{
			name: "profilePicture",
			title: "Profile Picture",
			type: "image",
			fields: [
				{
					title: "Alt (For Accessability)",
					name: "alt",
					type: "string",
				},
			],
		},
		{
			name: "name",
			title: "Name",
			type: "string",
		},
		{
			name: "role",
			title: "Role",
			type: "string",
		},
		{
			name: "location",
			title: "Location",
			type: "string",
		},
		{
			name: "introMessage",
			title: "Intro Message",
			type: "array",
			of: [{type: "block"}],
		},
	],
};
