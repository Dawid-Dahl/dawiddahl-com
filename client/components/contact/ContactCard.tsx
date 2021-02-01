import React from "react";
import styled from "styled-components";
import {ContactData} from "../../types/contactDataType";
import {loadingSpinner} from "../../content/Icons";

type Props = {
	contactData: ContactData;
	isLoading: boolean;
};

const ContactCard: React.FC<Props> = ({contactData, isLoading}) => {
	const {contactType, information} = contactData;

	return isLoading ? (
		<LoadingSpinner>
			<img src={loadingSpinner.imageLink} alt="loading spinner" />
		</LoadingSpinner>
	) : (
		<Wrapper>
			<ContactType>{contactType}</ContactType>
			<Information>{information}</Information>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	height: auto;
	width: 85%;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0.5em 1em;
	border-radius: var(--border-radius-card);
	background-color: var(--white-transparent-card);
	box-shadow: var(--box-shadow-light);
	transition: transform 0.5s;

	:hover {
		transform: scale(1.01) rotate(0.5deg);
	}

	@media only screen and (max-width: 474px) {
		flex-direction: column;
		width: 90%;
	}
`;

const ContactType = styled.p`
	color: var(--main-color);
	font-size: 1em;
	font-weight: bold;
	font-weight: normal;
	margin: 1em;
	padding-right: 1em;
	border-right: 1px solid var(--main-color-light);

	@media only screen and (max-width: 474px) {
		border-right: 0;
		margin: 1em 0.5em 0em 0.5em;
	}
`;
const Information = styled.p`
	color: var(--main-color);
	font-weight: lighter;
	margin: 1em 1em 1em 0em;

	@media only screen and (max-width: 474px) {
		margin: 0.5em 0.5em 1em 0.5em;
	}
`;

const LoadingSpinner = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export default ContactCard;
