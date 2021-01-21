import React from "react";
import styled from "styled-components";

type Props = {};

const Navigation: React.FC<Props> = () => (
	<Wrapper>
		<Shell></Shell>
	</Wrapper>
);

const Shell = styled.div`
	height: 4.5em;
	width: 20em;
	background-color: red;
	z-index: 1;

	@media only screen and (max-width: 474px) {
		width: 18em;
	}
`;

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	height: 13%;
	width: 100%;
	z-index: 1;
	bottom: 0;

	@media only screen and (max-width: 474px) {
	}
`;

export default Navigation;
