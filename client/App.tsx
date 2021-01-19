import React from "react";
import styled from "styled-components";

const App: React.FC = () => {
	return (
		<OuterWrapper>
			<Wrapper>
				<Header>Hello from dawiddahl.com!</Header>
			</Wrapper>
		</OuterWrapper>
	);
};

const OuterWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Wrapper = styled.div`
	max-width: 90%;
	margin: 0 1em;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

const Header = styled.h1`
	padding: 2em;
	text-align: center;
	@media only screen and (max-width: 474px) {
		font-size: 1.5em;
	}
`;

export default App;
