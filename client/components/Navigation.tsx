import React, {useState} from "react";
import styled from "styled-components";

type Props = {};

const Navigation: React.FC<Props> = () => {
	const [isNavToggled, setIsNavToggled] = useState(false);

	const handleClick = () => setIsNavToggled(!isNavToggled);

	return (
		<Wrapper>
			<Shell>
				<NavButton
					onClick={handleClick}
					isNavToggled={isNavToggled}
					imageLink="//s.svgbox.net/hero-outline.svg?fill=fff#menu-alt-1"
				/>
				<Bar isNavToggled={isNavToggled}>
					<List>
						<Icon
							imageLink="https://s2.svgbox.net/hero-outline.svg?color=7a69ff&ic=identification"
							isNavToggled={isNavToggled}
						/>
						<Icon
							imageLink="https://s2.svgbox.net/hero-outline.svg?color=7a69ff&ic=archive"
							isNavToggled={isNavToggled}
						/>
						<Icon
							imageLink="https://s2.svgbox.net/hero-outline.svg?color=7a69ff&ic=badge-check"
							isNavToggled={isNavToggled}
						/>
						<Icon
							imageLink="https://s2.svgbox.net/hero-outline.svg?color=7a69ff&ic=share"
							isNavToggled={isNavToggled}
						/>
					</List>
				</Bar>
			</Shell>
		</Wrapper>
	);
};

type StyledNavButtonProps = {
	isNavToggled: boolean;
	imageLink: string;
};

const NavButton = styled.div<StyledNavButtonProps>`
	position: absolute;
	height: 100%;
	width: 3.5em;
	border-radius: ${props => (props.isNavToggled ? "0 0" : "50%")};
	background-color: ${props => (props.isNavToggled ? "var(--main-color)" : "rgb(176 167 255)")};
	z-index: 2;
	background-image: ${props =>
		props.isNavToggled
			? "url(https://s2.svgbox.net/hero-outline.svg?color=white&ic=x)"
			: `url(${props.imageLink})`};
	background-size: 50%;
	background-repeat: no-repeat;
	background-position: center;
	transition: all 0.2s;
	cursor: pointer;

	@media only screen and (max-width: 474px) {
	}
`;

type StyledBarProps = {
	isNavToggled: boolean;
};

const Bar = styled.div<StyledBarProps>`
	position: absolute;
	height: 100%;
	width: ${props => (props.isNavToggled ? "100%" : "0%")};
	transition: all 0.3s ease-in-out 0.1s;
	clip-path: ${props =>
		props.isNavToggled ? "ellipse(20em 3em at 50% 50%)" : "ellipse(2.25em 2.25em at 0% 50%)"};
	background: linear-gradient(
		to right bottom,
		rgba(255, 255, 255, 0.7),
		rgba(255, 255, 255, 0.3)
	);
	z-index: 1;
	border-radius: 2em;
	left: 5px;

	@media only screen and (max-width: 474px) {
		width: ${props => (props.isNavToggled ? "100%" : "0%")};
	}
`;

const Shell = styled.div`
	position: relative;
	height: 3.5em;
	width: 20em;
	margin: 0 1em;
	border-radius: 2em;
	overflow: hidden;

	@media only screen and (max-width: 474px) {
		width: 18em;
	}
`;

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	height: 13%;
	width: 100%;
	z-index: 1;
	bottom: 0;

	@media only screen and (max-width: 474px) {
	}
`;

const List = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;
	list-style-type: none;
	height: 100%;
	margin: 0;
`;

type StyledIconProps = {
	imageLink: string;
	isNavToggled: boolean;
};

const Icon = styled.li<StyledIconProps>`
	height: 100%;
	width: 3.5em;
	background-image: ${props => `url(${props.imageLink})`};
	background-size: 50%;
	background-repeat: no-repeat;
	background-position: center;
	z-index: 2;
	cursor: pointer;
	opacity: ${props => (props.isNavToggled ? "100%" : "0%")};
	transition: all 0.2s;

	&:hover {
		background-color: rgba(255, 255, 255, 0.2);
		border-radius: 50%;
	}

	@media only screen and (max-width: 474px) {
		background-size: 40%;
	}
`;

export default Navigation;
