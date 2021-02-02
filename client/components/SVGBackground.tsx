import React from "react";
import styled from "styled-components";

type Props = {
	color: string;
};

const SVGBackground: React.FC<Props> = ({color}) => {
	return (
		<Wrapper>
			{/* <svg
				width="965"
				height="269"
				viewBox="0 0 965 269"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				style={{position: "absolute", zIndex: 0}}
			>
				<path d="M0.5 268L964.5 1V268H0.5Z" fill={`${color}`} stroke="none" />
			</svg> */}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				style={{position: "absolute", zIndex: 0}}
				viewBox="0 0 1440 320"
			>
				<path
					fill={`${color}`}
					fillOpacity="1"
					d="M0,288L40,261.3C80,235,160,181,240,149.3C320,117,400,107,480,133.3C560,160,640,224,720,256C800,288,880,288,960,277.3C1040,267,1120,245,1200,197.3C1280,149,1360,75,1400,37.3L1440,0L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
				></path>
			</svg>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	position: absolute;
	height: var(--app-height);
	width: 100%;
	display: flex;
	align-items: flex-end;
	justify-content: flex-end;
	z-index: 0;
`;

export default SVGBackground;
