import React from "react";
import ContactCard from "./ContactCard";
import styled from "styled-components";

const Contact: React.FC = () => {
	return (
		<Wrapper>
			<ContactCard />
			<ContactCard />
		</Wrapper>
	);
};

const Wrapper = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	margin-top: 4em;
`;

export default Contact;
