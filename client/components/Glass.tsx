import React, {useEffect, useState} from "react";
import styled from "styled-components";
import sanityClient from "../sanityClient";

const Glass: React.FC = () => {
	const [welcomeData, setWelcomeData] = useState<Array<{message: string}>>([{message: ""}]);

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "welcome"] {
			message
		}`
			)
			.then(data => setWelcomeData(data))
			.catch(console.error);
	}, []);

	return (
		<Wrapper>
			<Header>{welcomeData && welcomeData[0].message}</Header>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: 100%;
	height: 75vh;
	display: flex;
	align-items: center;
	justify-content: center;
	backdrop-filter: blur(0.5em);
	background: linear-gradient(
		to right bottom,
		rgba(255, 255, 255, 0.7),
		rgba(255, 255, 255, 0.3)
	);
	border-radius: 2rem;
	z-index: 1;

	@media only screen and (max-width: 474px) {
		font-size: 1.5em;
		height: 85.5vh;
	}
`;

const Header = styled.h1`
	padding: 2em;
	max-width: 70%;
	text-align: center;
	color: white;
	@media only screen and (max-width: 474px) {
		font-size: 1.5em;
	}
`;

export default Glass;
