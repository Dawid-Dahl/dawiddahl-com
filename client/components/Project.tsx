import BlockContent from "@sanity/block-content-to-react";
import React from "react";
import styled from "styled-components";
import {ProjectData} from "../types/projectDataType";
import {isObjectEmpty} from "../utils/utils";
import {linkIcon} from "../content/Icons";

type Props = ProjectData;

const Project: React.FC<Props> = ({image, name, description, link}) => {
	return (
		<Wrapper>
			<ImageWrapper>
				<Image href={link} target="_blank">
					<img src={image.asset.url} alt={image.alt} />
				</Image>
			</ImageWrapper>
			<ContentWrapper>
				<Header>{name}</Header>
				<Description>
					{!isObjectEmpty(description[0]) && <BlockContent blocks={description} />}
				</Description>
				<Link href={link} target="_blank" imageLink={linkIcon.imageLink} />
			</ContentWrapper>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	height: auto;
	width: 80%;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: var(--border-radius-card);
	background-color: var(--white-transparent-card);
	margin: 0.5em 0em;
	box-shadow: var(--box-shadow-light);
	transition: transform 0.3s;

	:hover {
		transform: scale(1.01) rotate(0.4deg);
	}

	@media only screen and (max-width: 1000px) {
		flex-direction: column;
	}

	@media only screen and (max-width: 474px) {
		width: 90%;
	}
`;

const ImageWrapper = styled.div`
	display: flex;
	margin: 3em;

	@media only screen and (max-width: 1000px) {
		margin: 3em 3em 0em 3em;
	}
`;

const Image = styled.a`
	border-radius: 50%;
	width: 10em;
	height: 10em;
	box-shadow: var(--box-shadow);
	cursor: pointer;

	@media only screen and (max-height: 1000px) {
		width: 7em;
		height: 7em;
	}

	> img {
		width: 10em;
		height: 10em;
		border-radius: 50%;
		object-fit: cover;

		@media only screen and (max-height: 1000px) {
			width: 7em;
			height: 7em;
		}
	}
`;

const ContentWrapper = styled.div`
	margin: 2em 2em 2em 0em;

	@media only screen and (max-width: 1000px) {
		margin: 2em 2em 2em 2em;
		text-align: center;
	}
`;

const Header = styled.h1`
	color: var(--main-color);
	margin: 0 0 0.5em 0;
	font-weight: normal;
`;

const Description = styled.div`
	margin: 0;
	font-size: 0.9em;
	color: var(--main-color);
	font-weight: lighter;
	margin: 0 0 1em 0;
`;

type StyledLinkProps = {
	imageLink: string;
};

const Link = styled.a<StyledLinkProps>`
	height: 21.33px;
	width: 21.33px;
	margin: 1em 0 0 0;
	display: block;
	background-image: ${props => `url(${props.imageLink})`};
	text-decoration: none;
	cursor: pointer;
	color: var(--main-color);
`;

export default Project;
