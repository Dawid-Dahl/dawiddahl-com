import React from "react";
import styled from "styled-components";
import Skill from "./Skill";

const Skills: React.FC = () => {
	return (
		<Wrapper>
			<Header>Skills</Header>
			<SkillsWrapper>
				<Skill />
				<Skill />
				<Skill />
				<Skill />
				<Skill />
				<Skill />
				<Skill />
				<Skill />
				<Skill />
				<InvisibleBox />
			</SkillsWrapper>
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
	display: block;

	@media only screen and (max-width: 474px) {
	}
`;

const SkillsWrapper = styled.div`
	width: 90%;
	height: fit-content;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	grid-gap: 1em;
	margin: 0 auto;

	@media only screen and (max-width: 900px) {
		grid-gap: 0;
	} ;
`;

const Header = styled.h1`
	color: var(--white-transparent);
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 1em;
`;

const InvisibleBox = styled.div`
	min-height: 10%;
	width: 100%;
	background-color: transparent;
	color: transparent;
`;

export default Skills;
