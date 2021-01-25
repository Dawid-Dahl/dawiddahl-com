import React from "react";
import styled from "styled-components";

const Glass: React.FC = ({children}) => {
	return (
		<>
			<Wrapper>{children}</Wrapper>
		</>
	);
};

const Wrapper = styled.div`
	width: 75vw;
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
		width: 90vw;
		height: 85.5vh;
	}
`;

export default Glass;
