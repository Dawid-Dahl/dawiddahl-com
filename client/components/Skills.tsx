import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Skill from "./Skill";
import sanityClient from "../sanityClient";
import {SkillData, skillDataDefault} from "../types/skillDataType";

const Skills: React.FC = () => {
	const [skillData, setSkillData] = useState<SkillData[]>(skillDataDefault);

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "skill"]{
			image{
				asset->{
					_id,
					url
				},
				alt
			},
			name,
			description,
		}`
			)
			.then(data => data && setSkillData(data))
			.catch(console.error);
	}, []);
	return (
		<Wrapper>
			<Header>Skills</Header>
			<SkillsWrapper>
				{skillData &&
					skillData.map(({image = skillDataDefault[0].image, name, description}, i) => (
						<Skill key={i} image={image} name={name} description={description} />
					))}
			</SkillsWrapper>
			<InvisibleBox />
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

	@media only screen and (max-width: 474px) {
		grid-template-columns: 1fr;
	}
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
