import React, {useState, useEffect} from "react";
import styled from "styled-components";
import Project from "./Project";
import sanityClient from "../../sanityClient";
import {ProjectData, projectDataDefault} from "../../types/projectDataType";

type Props = {
	isLoading: boolean;
	setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const Projects: React.FC<Props> = ({isLoading, setIsLoading}) => {
	const [projectData, setProjectData] = useState<ProjectData[]>(projectDataDefault);

	useEffect(() => {
		setIsLoading(true);

		sanityClient
			.fetch(
				`*[_type == "project"]{
			image{
				asset->{
					_id,
					url
				},
				alt
			},
			name,
			description,
			link,
		}`
			)
			.then(data => {
				setIsLoading(false);
				data && setProjectData(data);
			})
			.catch(console.error);
	}, []);

	return (
		<Wrapper>
			<Header>Projects</Header>
			{projectData &&
				projectData.map((project, i) => (
					<ProjectsWrapper key={i}>
						<Project project={project} isLoading={isLoading} />
					</ProjectsWrapper>
				))}
			<InvisibleBox />
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	height: fit-content;
	width: 100%;

	@media only screen and (max-width: 474px) {
	}
`;

const ProjectsWrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
`;

const Header = styled.h1`
	height: auto;
	color: var(--white-transparent);
	margin-top: 1em;
	text-align: center;
`;

const InvisibleBox = styled.div`
	min-height: 1em;
	width: 100%;
	background-color: transparent;
	color: transparent;
`;

export default Projects;
