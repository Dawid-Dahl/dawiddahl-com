import React from "react";
import styled from "styled-components";
import Project from "./Project";

const Projects: React.FC = () => {
	return (
		<Wrapper>
			<Header>Projects</Header>
			<ProjectsWrapper>
				<Project />
				<Project />
				<Project />
				<InvisibleBox />
			</ProjectsWrapper>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	height: 100%;
	width: 100%;
	overflow: scroll;
	overflow-x: hidden;

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
	margin-top: 4em;
`;

const InvisibleBox = styled.div`
	min-height: 10%;
	width: 100%;
	background-color: transparent;
	color: transparent;
`;

export default Projects;
