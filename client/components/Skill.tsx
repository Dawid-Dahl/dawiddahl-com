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
	transition: transform 0.3s;

	:hover {
		transform: scale(1.01) rotate(0.5deg);
	}
`;

const ImageWrapper = styled.div`
	display: flex;
	margin: 1em;

	@media only screen and (max-width: 474px) {
		margin: 0.5em;
	}
`;

const Image = styled.a`
	border-radius: 30%;
	width: 5em;
	height: 5em;
	box-shadow: var(--box-shadow);

	> img {
		width: 5em;
		height: 5em;
		border-radius: 30%;
		object-fit: cover;
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