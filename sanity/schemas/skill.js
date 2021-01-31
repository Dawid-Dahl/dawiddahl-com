export default {
	name: "skill",
	title: "Skill",
	type: "document",
	fields: [
		{
			name: "image",
			title: "Image",
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
			name: "description",
			title: "Description",
			type: "text",
		},
	],
};
