import React from "react";
import styled from "styled-components";

type Props = {
	color: string;
};

const SVGBackground: React.FC<Props> = ({color}) => {
	return (
		<Wrapper>
			<svg
				width="965"
				height="269"
				viewBox="0 0 965 269"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				style={{position: "absolute", zIndex: 0}}
			>
				<path d="M0.5 268L964.5 1V268H0.5Z" fill={`${color}`} stroke="none" />
			</svg>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	position: absolute;
	height: 100vh;
	width: 100%;
	display: flex;
	align-items: flex-end;
	justify-content: flex-end;
	z-index: 0;
`;

export default SVGBackground;
