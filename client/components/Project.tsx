import React from "react";
import styled from "styled-components";

type Props = {};

const Project: React.FC<Props> = () => {
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
				<Header>My Project</Header>
				<Description>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium rem alias
					totam minus aut dolores amet nemo assumenda, quo delectus id, ratione, impedit
					aspernatur commodi quibusdam illum temporibus repudiandae nesciunt non
					perferendis quisquam consequatur sint! Esse deserunt distinctio at vel et. Cum
					consequatur voluptates fuga dolor quibusdam recusandae. Omnis, commodi!
				</Description>
				<Link href="">Link</Link>
			</ContentWrapper>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	height: auto;
	width: 80%;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: var(--border-radius-card);
	background-color: var(--white-transparent-card);
	margin: 0.5em 0em;
	box-shadow: var(--box-shadow-light);
	transition: transform 0.3s;

	:hover {
		transform: scale(1.01) rotate(0.5deg);
	}

	@media only screen and (max-width: 1000px) {
		flex-direction: column;
	}

	@media only screen and (max-width: 474px) {
		width: 90%;
	}
`;

const ImageWrapper = styled.div`
	display: flex;
	margin: 3em;

	@media only screen and (max-height: 1000px) {
		margin: 3em 3em 0em 3em;
	}
`;

const Image = styled.a`
	border-radius: 50%;
	width: 10em;
	height: 10em;
	box-shadow: var(--box-shadow);
	cursor: pointer;

	@media only screen and (max-height: 1000px) {
		width: 7em;
		height: 7em;
	}

	> img {
		width: 10em;
		height: 10em;
		border-radius: 50%;
		object-fit: cover;

		@media only screen and (max-height: 1000px) {
			width: 7em;
			height: 7em;
		}
	}
`;

const ContentWrapper = styled.div`
	margin: 2em 2em 2em 0em;

	@media only screen and (max-width: 1000px) {
		margin: 2em 2em 2em 2em;
		text-align: center;
	}
`;

const Header = styled.h1`
	color: var(--main-color);
	margin: 0 0 0.5em 0;
	font-weight: normal;
`;

const Description = styled.p`
	margin: 0;
	font-size: 0.9em;
	color: var(--main-color);
	font-weight: lighter;
	margin: 0 0 1em 0;
`;

const Link = styled.a`
	text-decoration: none;
	cursor: pointer;
	color: var(--main-color);
`;

export default Project;
