import React, {useEffect} from "react";
import styled from "styled-components";

const Home: React.FC = () => {
	const imageUrl = "https://bit.ly/3a41zHj";

	return (
		<Wrapper>
			<ImageArea>
				<Image href={imageUrl} target="_blank">
					<img src={imageUrl} alt="profile picture" />
				</Image>
				<Header>
					<h1>Dawid Dahl</h1>
					<h3>Full-Stack Web Developer</h3>
					<p>Stockholm</p>
				</Header>
			</ImageArea>
			<TextArea>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi in assumenda
					magnam impedit ea, ex quam veniam adipisci omnis fuga doloremque placeat aliquid
					quis mollitia eum iure amet quidem. Vitae.
				</p>
			</TextArea>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	position: relative;
	height: 100%;
	width: 100%;
	border-radius: inherit;
	overflow: hidden;

	@media only screen and (max-width: 474px) {
	}
`;

const ImageArea = styled.div`
	height: 60%;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

const Image = styled.a`
	border-radius: 50%;
	width: 10em;
	height: 10em;
	box-shadow: rgb(50, 50, 93) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
	cursor: pointer;

	> img {
		width: 10em;
		height: 10em;
		border-radius: 50%;
		object-fit: cover;
		object-position: 0px -25px;
	}
`;

const Header = styled.div`
	color: var(--white-transparent);

	h1 {
		margin-top: 1em;
	}

	h3 {
		margin: 0;
	}

	p {
		margin: 0;
	}
`;

const TextArea = styled.div`
	height: 40%;
	background: linear-gradient(
		to right bottom,
		rgba(255, 255, 255, 0.7),
		rgba(255, 255, 255, 0.3)
	);
	border-radius: 15rem 0rem 2rem 2rem;
	border-top: 10px solid var(--main-color-light);
	color: var(--main-color);
	padding: 5em 3em 0 6em;
`;

export default Home;
