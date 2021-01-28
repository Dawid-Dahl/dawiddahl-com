import React from "react";
import styled from "styled-components";

type Props = {};

const Skill: React.FC<Props> = () => {
	return (
		<Wrapper>
			<ImageWrapper>
				<Image>
					<img
						src={
							"https://media.istockphoto.com/photos/true-love-means-never-letting-go-picture-id929598594"
						}
						alt="profile picture"
					/>
				</Image>
			</ImageWrapper>
			<ContentWrapper>
				<Header>Skill</Header>
				<Description>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Description>
				<Link></Link>
			</ContentWrapper>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	height: auto;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: var(--border-radius-card);
	background-color: var(--white-transparent-card);
	box-shadow: var(--box-shadow-light);
`;

const ImageWrapper = styled.div`
	display: flex;
	margin: 1em;

	@media only screen and (max-width: 474px) {
		margin: 0.5em;
	}
`;

const Image = styled.a`
	border-radius: 50%;
	width: 10em;
	height: 10em;
	box-shadow: var(--box-shadow);
	cursor: pointer;

	@media only screen and (max-height: 1000px) {
		width: 6em;
		height: 6em;
	}

	> img {
		width: 10em;
		height: 10em;
		border-radius: 50%;
		object-fit: cover;

		@media only screen and (max-height: 1000px) {
			width: 6em;
			height: 6em;
		}
	}
`;

const ContentWrapper = styled.div`
	margin: 1em 1em 1em 0em;

	@media only screen and (max-width: 1000px) {
		margin: 1em 1em 1em 1em;
	}
`;

const Header = styled.h1`
	color: var(--main-color);
	font-size: 1em;
	font-weight: bold;
	margin: 0 0 0.5em 0;
	font-weight: normal;

	@media only screen and (max-width: 474px) {
	}
`;

const Description = styled.p`
	margin: 0;
	font-size: 0.9em;
	color: var(--main-color);
	font-weight: lighter;
`;

const Link = styled.a``;

export default Skill;
