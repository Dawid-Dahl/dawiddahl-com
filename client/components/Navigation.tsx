import React, {useState} from "react";
import styled from "styled-components";
import {animated, useSpring, config, useTrail} from "react-spring";
import {icons} from "../content/Icons";
import {NavLink} from "react-router-dom";
import {useMediaQuery} from "react-responsive";

type Props = {};

const Navigation: React.FC<Props> = () => {
	const isMobile = useMediaQuery({maxWidth: 767});

	const [isNavToggled, setIsNavToggled] = useState(false);

	const handleClick = () => setIsNavToggled(!isNavToggled);

	const navButtonAnimation = useSpring({
		borderRadius: isNavToggled ? "50% 0% 0% 50%" : "50% 50% 50% 50%",
		backgroundColor: isNavToggled ? "rgb(122, 105, 255)" : "rgb(176,167,255)",
		config: config.stiff,
	});

	const barAnimation = useSpring({
		clipPath: isNavToggled
			? "ellipse(20em 3em at 50% 50%)"
			: "ellipse(2.25em 2.25em at 0% 50%)",
		width: isNavToggled ? "100%" : "0%",
		opacity: isNavToggled ? 1 : 0,
		config: isMobile ? config.default : config.wobbly,
	});

	const iconTrail = useTrail(icons.length, {
		opacity: isNavToggled ? 1 : 0,
		transform: isNavToggled ? "scale(1) translateX(0px)" : "scale(0) translateX(-20px)",
		config: config.stiff,
	});

	return (
		<Wrapper>
			<Shell>
				<NavButton
					onClick={handleClick}
					$isNavToggled={isNavToggled}
					$imageLink="//s.svgbox.net/hero-outline.svg?fill=fff#menu-alt-1"
					style={navButtonAnimation}
				/>
				<Bar style={barAnimation}>
					<List>
						{iconTrail.map((trail, i) => (
							<NavLink key={i} to={`/${icons[i].name}`}>
								<Icon $imageLink={icons[i].imageLink} style={trail}></Icon>
							</NavLink>
						))}
					</List>
				</Bar>
			</Shell>
		</Wrapper>
	);
};

type StyledNavButtonProps = {
	$isNavToggled: boolean;
	$imageLink: string;
};

const NavButton = styled(animated.div)<StyledNavButtonProps>`
	position: absolute;
	height: 100%;
	width: 3.5em;
	z-index: 2;
	background-image: ${props =>
		props.$isNavToggled
			? "url(https://s2.svgbox.net/hero-outline.svg?color=white&ic=x)"
			: `url(${props.$imageLink})`};
	background-size: 50%;
	background-repeat: no-repeat;
	background-position: center;
	cursor: pointer;

	&:hover {
		background-color: ${props =>
			props.$isNavToggled ? "var(--main-color)" : "rgb(186,178,255)"};
	}

	@media only screen and (max-width: 474px) {
	}
`;

const Bar = styled(animated.div)`
	position: absolute;
	height: 100%;
	background: linear-gradient(
		to right bottom,
		rgba(255, 255, 255, 0.7),
		rgba(255, 255, 255, 0.3)
	);
	z-index: 1;
	border-radius: 2em;
	left: 5px;

	@media only screen and (max-width: 474px) {
	}
`;

const Shell = styled.div`
	position: relative;
	height: 3.5em;
	width: 20em;
	margin: 0 1em;
	border-radius: 2em;

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
	height: 100%;
	margin: 0;

	> a {
		display: flex;
		align-items: center;
		justify-content: center;
		list-style-type: none;
		height: 100%;
		margin: 0;
	}
`;

type StyledIconProps = {
	$imageLink: string;
};

const Icon = styled(animated.li)<StyledIconProps>`
	height: 100%;
	width: 3.5em;
	background-image: ${props => `url(${props.$imageLink})`};
	background-size: 50%;
	background-repeat: no-repeat;
	background-position: center;
	z-index: 2;
	transition: border-radius 0.2s, background-color 0.2s;
	cursor: pointer;

	&:hover {
		background-color: rgba(255, 255, 255, 0.2);
		border-radius: 50%;
	}

	@media only screen and (max-width: 474px) {
		background-size: 40%;
	}
`;

export default Navigation;
