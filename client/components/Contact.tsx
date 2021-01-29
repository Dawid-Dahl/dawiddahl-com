import React from "react";
import ContactCard from "./ContactCard";
import styled from "styled-components";

const Contact: React.FC = () => {
	return (
		<Wrapper>
			<Header>Contact</Header>
			<ContactCard />
			<ContactCard />
		</Wrapper>
	);
};

const Wrapper = styled.div`
	height: 100%;
	min-width: 80%;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	margin-top: 4em;
`;

const Header = styled.h1`
	color: var(--white-transparent);
`;

export default Contact;
