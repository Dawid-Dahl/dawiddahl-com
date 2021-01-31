import React from "react";
import styled from "styled-components";
import {SkillData} from "../types/skillDataType";

type Props = SkillData;

const Skill: React.FC<Props> = ({image, name, description = ""}) => {
	return (
		<Wrapper>
			<ImageWrapper>
				<Image>
					<img src={image.asset.url} alt={image.alt} />
				</Image>
			</ImageWrapper>
			<ContentWrapper>
				<Header>{name}</Header>
				<Description description={description}>{description}</Description>
				<Link></Link>
			</ContentWrapper>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	height: 7em;
	width: 100%;
	display: flex;
	border-radius: var(--border-radius-card);
	background-color: var(--white-transparent-card);
	box-shadow: var(--box-shadow-light);
	transition: transform 0.3s;
	overflow: scroll;
	overflow-x: hidden;

	@media only screen and (max-width: 362px) {
		height: 6em;
	}

	:hover {
		transform: scale(1.01) rotate(0.5deg);
	}
`;

const ImageWrapper = styled.div`
	flex: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 1em;

	@media only screen and (max-width: 474px) {
		margin: 0.5em;
	}
`;

const Image = styled.a`
	border-radius: 30%;
	width: 5em;
	height: 5em;
	box-shadow: var(--box-shadow-light);

	@media only screen and (max-width: 362px) {
		width: 4em;
		height: 4em;
	}

	> img {
		width: 5em;
		height: 5em;
		border-radius: 30%;
		object-fit: cover;

		@media only screen and (max-width: 362px) {
			width: 4em;
			height: 4em;
		}
	}
`;

const ContentWrapper = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	margin: 1.5em 1em 1.5em 0em;
	text-align: center;

	@media only screen and (max-width: 1000px) {
		margin: 1.5em 1em 1.5em 1em;
	}
`;

const Header = styled.h1`
	color: var(--main-color);
	font-size: 1em;
	font-weight: bold;
	//margin: 0 0 0.5em 0;
	margin: auto;
	font-weight: normal;

	@media only screen and (max-width: 474px) {
	}
`;

const Description = styled.p<Pick<SkillData, "description">>`
	display: ${props => (props.description.length > 1 ? "block" : "none")};
	margin: auto;
	font-size: 0.9em;
	color: var(--main-color);
	font-weight: lighter;
`;

const Link = styled.a``;

export default Skill;
