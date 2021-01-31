import React, {useEffect, useState} from "react";
import ContactCard from "./ContactCard";
import styled from "styled-components";
import sanityClient from "../sanityClient";
import {ContactData, contactDataDefault} from "../types/contactDataType";

const Contact: React.FC = () => {
	const [contactData, setContactData] = useState<ContactData[]>(contactDataDefault);

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "contact"]{
			contactType,
			information,
		}`
			)
			.then(data => data && setContactData(data))
			.catch(console.error);
	}, []);

	return (
		<Wrapper>
			<Header>Contact</Header>
			{contactData &&
				contactData.map(({contactType, information}, i) => (
					<ContactCard key={i} contactType={contactType} information={information} />
				))}
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
