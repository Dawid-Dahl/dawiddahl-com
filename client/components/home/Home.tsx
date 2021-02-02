import React, {useEffect, useState} from "react";
import styled from "styled-components";
import sanityClient from "../../sanityClient";
import {HomeData, homeDataDefault} from "../../types/homeDataType";
import BlockContent from "@sanity/block-content-to-react";
import {isObjectEmpty} from "../../utils/utils";
import {loadingSpinner} from "../../content/Icons";

type Props = {
	isLoading: boolean;
	setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const Home: React.FC<Props> = ({isLoading, setIsLoading}) => {
	const [homeData, setHomeData] = useState<HomeData[]>(homeDataDefault);

	useEffect(() => {
		setIsLoading(true);

		sanityClient
			.fetch(
				`*[_type == "home"]{
			profilePicture{
				asset->{
					_id,
					url
				},
				alt
			},
			name,
			role,
			location,
			introMessage
		}`
			)
			.then(data => {
				setIsLoading(false);
				data && setHomeData(data);
			})
			.catch(console.error);
	}, []);

	return isLoading ? (
		<LoadingSpinner>
			<img src={loadingSpinner.imageLink} alt="loading spinner" />
		</LoadingSpinner>
	) : (
		<>
			{homeData &&
				homeData.map(({introMessage, location, name, profilePicture, role}, i) => (
					<Wrapper key={i}>
						<ImageArea>
							<Image href={profilePicture.asset.url} target="_blank">
								<img src={profilePicture.asset.url} alt={profilePicture.alt} />
							</Image>
							<Header>
								<h1>{name}</h1>
								<h3>{role}</h3>
								<p>{location}</p>
							</Header>
						</ImageArea>
						<TextArea>
							<ClipPath />
							{!isObjectEmpty(introMessage[0]) && (
								<BlockContent blocks={introMessage} />
							)}
						</TextArea>
					</Wrapper>
				))}
		</>
	);
};

const Wrapper = styled.div`
	position: relative;
	height: 100%;
	width: 100%;
	border-radius: inherit;
	overflow: hidden;

	@media only screen and (max-width: 474px) {
	}
`;

const ImageArea = styled.div`
	height: 60%;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	@media only screen and (max-width: 474px) {
	}
`;

const Image = styled.a`
	border-radius: 50%;
	width: 10em;
	height: 10em;
	box-shadow: var(--box-shadow);
	cursor: pointer;

	@media only screen and (max-height: 720px) {
		width: 7em;
		height: 7em;
	}

	> img {
		width: 10em;
		height: 10em;
		border-radius: 50%;
		object-fit: cover;
		object-position: 0px -25px;

		@media only screen and (max-height: 720px) {
			width: 7em;
			height: 7em;
		}
	}
`;

const Header = styled.div`
	color: var(--white-transparent);

	h1 {
		margin: 0.3em;
		text-align: center;

		@media only screen and (max-height: 700px) {
			font-size: 1.8em;
		}

		@media only screen and (max-width: 350px) {
			margin: 0.5em;
			font-size: 1em;
		}
	}

	h3 {
		margin: 0;
		text-align: center;

		@media only screen and (max-width: 474px) {
			margin: 0 1em;
		}
	}

	p {
		margin: 0;
		text-align: center;
	}
`;

const ClipPath = styled.div`
	width: 100%;
	height: 100%;
	shape-outside: polygon(46% 0%, 0% 0%, 0% 53%, 8% 31%, 13% 20%, 20% 12%, 30% 6%);
	shape-margin: 1em;
	float: left;

	@media only screen and (max-width: 474px) {
		shape-outside: polygon(100% 0%, 0% 0%, 0% 51%, 8% 34%, 17% 24%, 36% 11%, 56% 5%);
		width: 75%;
	}
`;

const TextArea = styled.div`
	position: relative;
	height: 40%;
	background: var(--glassy);
	border-radius: 15rem 0rem 2rem 2rem;
	border-top: 10px solid var(--main-color-light);
	color: var(--main-color);
	padding: 0 2em;
	overflow: auto;

	@media only screen and (max-width: 474px) {
		padding: 0 1em;
	}

	p {
		text-align: center;
		margin-top: 15%;
		padding: 1em;
		font-weight: lighter;

		@media only screen and (min-width: 1100px) {
			font-size: 1.2em;
		}

		@media only screen and (max-width: 474px) and (max-height: 750px) {
			margin-top: 5%;
			margin-bottom: 6em;
		}

		@media only screen and (min-width: 1500px) {
			margin-top: 10%;
		}

		@media only screen and (max-height: 1100px) {
			margin-top: 5%;
		}

		@media only screen and (min-width: 1500px) and (max-height: 1100px) {
			margin-top: 7%;
		}
	}
`;

const LoadingSpinner = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export default Home;
