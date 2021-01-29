import React from "react";
import styled from "styled-components";

type Props = {};

const ContactCard: React.FC<Props> = () => {
	return (
		<Wrapper>
			<ContactType>Email</ContactType>
			<Information>dawiddahl@gmail.com</Information>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	height: auto;
	min-width: 85%;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0.5em 0;
	border-radius: var(--border-radius-card);
	background-color: var(--white-transparent-card);
	box-shadow: var(--box-shadow-light);
`;

const ContactType = styled.p`
	color: var(--main-color);
	font-size: 1em;
	font-weight: bold;
	font-weight: normal;
	margin-right: 1em;
	padding-right: 1em;
	border-right: 1px solid var(--main-color-light);
`;
const Information = styled.p`
	color: var(--main-color);
	font-weight: lighter;
`;

export default ContactCard;
