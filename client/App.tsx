import React from "react";
import styled from "styled-components";
import Circle from "./components/Circle";
import Main from "./components/Main";
import Navigation from "./components/Navigation";
import SVGBackground from "./components/SVGBackground";
import GlobalStyle from "./globalStyles";

const App: React.FC = () => {
	return (
		<Root>
			<GlobalStyle />
			<SVGBackground color="rgba(255, 255, 255, 0.064)" />
			<Circle
				position={{
					top: 5,
					right: 0,
					bottom: 0,
					left: 75,
				}}
			/>
			<Circle
				position={{
					top: 50,
					right: 0,
					bottom: 0,
					left: -10,
				}}
			/>
			<OuterWrapper>
				<Wrapper>
					<Main />
				</Wrapper>
			</OuterWrapper>
			<Navigation />
		</Root>
	);
};

const Root = styled.div`
	position: relative;
	overflow: hidden;
`;

const OuterWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
	background: linear-gradient(to right top, #2700ff, #ffffff);
`;

const Wrapper = styled.div`
	height: 100vh;
	margin: 0 1em;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	@media only screen and (max-width: 474px) {
		justify-content: flex-start;
		margin-top: 2em;
	}
`;

export default App;
