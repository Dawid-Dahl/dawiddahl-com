import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Skill from "./Skill";
import sanityClient from "../../sanityClient";
import {SkillData, skillDataDefault} from "../../types/skillDataType";

type Props = {
	isLoading: boolean;
	setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const Skills: React.FC<Props> = ({isLoading, setIsLoading}) => {
	const [skillData, setSkillData] = useState<SkillData[]>(skillDataDefault);

	useEffect(() => {
		setIsLoading(true);

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
			.then(data => {
				setIsLoading(false);
				data && setSkillData(data);
			})
			.catch(console.error);
	}, []);
	return (
		<Wrapper>
			<Header>Skills</Header>
			<SkillsWrapper>
				{skillData &&
					skillData.map((skill, i) => (
						<Skill key={i} skill={skill} isLoading={isLoading} />
					))}
			</SkillsWrapper>
			<InvisibleBox />
		</Wrapper>
	);
};

const Wrapper = styled.div`
	height: 100%;
	width: 100%;
	overflow: scroll;
	overflow-x: hidden;
	display: block;

	@media only screen and (max-width: 474px) {
	}
`;

const SkillsWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	grid-gap: 1em;
	margin: 0em 2em;

	@media only screen and (max-width: 474px) {
		grid-template-columns: 1fr;
		margin: 0em 1em;
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
