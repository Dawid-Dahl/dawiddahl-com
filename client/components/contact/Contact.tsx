import React, {useEffect, useState} from "react";
import ContactCard from "./ContactCard";
import styled from "styled-components";
import sanityClient from "../../sanityClient";
import {ContactData, contactDataDefault} from "../../types/contactDataType";

type Props = {
	isLoading: boolean;
	setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const Contact: React.FC<Props> = ({isLoading, setIsLoading}) => {
	const [contactData, setContactData] = useState<ContactData[]>(contactDataDefault);

	useEffect(() => {
		setIsLoading(true);

		sanityClient
			.fetch(
				`*[_type == "contact"]{
			contactType,
			information,
		}`
			)
			.then(data => {
				setIsLoading(false);
				data && setContactData(data);
			})
			.catch(console.error);
	}, []);

	return (
		<Wrapper>
			<Header>Contact</Header>
			{contactData &&
				contactData.map((contactData, i) => (
					<ContactCard key={i} contactData={contactData} isLoading={isLoading} />
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
	text-align: center;
`;

const Header = styled.h1`
	color: var(--white-transparent);
`;

export default Contact;
