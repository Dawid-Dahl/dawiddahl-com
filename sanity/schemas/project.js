export default {
	name: "project",
	title: "Project",
	type: "document",
	fields: [
		{
			name: "image",
			title: "Image",
			type: "image",
			fields: [
				{
					title: "Alt (For Accessibility)",
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
			type: "array",
			of: [{type: "block"}],
		},
		{
			name: "link",
			title: "Link",
			type: "url",
		},
	],
};
