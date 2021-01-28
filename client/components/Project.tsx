import React from "react";
import styled from "styled-components";

type Props = {};

const Project: React.FC<Props> = () => {
	return (
		<Wrapper>
			<p>lol</p>
			<p>lol</p>
			<p>lol</p>
			<p>lol</p>
			<p>lol</p>
		</Wrapper>
	);
};

type StyledWrappedProps = Props;

const Wrapper = styled.div<StyledWrappedProps>`
	height: auto;
	width: 80%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	border-radius: var(--border-radius-card);
	background-color: red;
	margin: 0.5em 0em;

	@media only screen and (max-width: 474px) {
	}
`;

export default Project;
