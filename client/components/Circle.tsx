import React from "react";
import styled from "styled-components";

type Props = {
	position: {
		top: number;
		right: number;
		bottom: number;
		left: number;
	};
};

const Circle: React.FC<Props> = (
	{position} = {position: {top: 0, right: 0, bottom: 0, left: 0}}
) => <Wrapper position={position} />;

type CircleWrapperProps = {
	position: {
		top: number;
		right: number;
		bottom: number;
		left: number;
	};
};

const Wrapper = styled.div<CircleWrapperProps>`
	position: absolute;
	top: ${({position}) => `${position.top}%`};
	right: ${({position}) => `${position.right}%`};
	bottom: ${({position}) => `${position.bottom}%`};
	left: ${({position}) => `${position.left}%`};
	background: linear-gradient(
		to right bottom,
		rgba(255, 255, 255, 0.7),
		rgba(255, 255, 255, 0.3)
	);
	height: 14em;
	width: 14em;
	z-index: 0;
	border-radius: 50%;
`;

export default Circle;
