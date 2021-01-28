import React from "react";
import styled from "styled-components";
import {animated} from "react-spring";

const Glass: React.FC = ({children}) => {
	return (
		<>
			<Wrapper>{children}</Wrapper>
		</>
	);
};

const Wrapper = styled(animated.div)`
	width: 75vw;
	height: 75vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background: var(--glassy);
	border-radius: var(--border-radius);
	z-index: 1;
	overflow: hidden;

	@media only screen and (max-width: 474px) {
		width: 90vw;
		height: 85.5vh;
	}
`;

export default Glass;
