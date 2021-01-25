import React from "react";
import {useLocation} from "react-router";
import {animated, useTransition, config} from "react-spring";
import styled from "styled-components";
import Routes from "./Routes";

export const Main = () => {
	const location = useLocation();

	const transitionToRight = useTransition(location, location => location.pathname, {
		config: config.gentle,
		from: {opacity: 0, transform: "translateX(-40vw)", position: "absolute"},
		enter: {opacity: 1, transform: "translateX(0vw)"},
		leave: {opacity: 0, transform: "translateX(110vw)"},
	});

	const transitionToLeft = useTransition(location, location => location.pathname, {
		config: config.gentle,
		from: {opacity: 0, transform: "translateX(40vw)", position: "absolute"},
		enter: {opacity: 1, transform: "translateX(0vw)"},
		leave: {opacity: 0, transform: "translateX(-110vw)"},
	});

	return (
		<>
			{transitionToLeft.map(({item, key, props: transitionProps}) => (
				<animated.div key={key} style={transitionProps}>
					<Routes location={item} />
				</animated.div>
			))}
		</>
	);
};

const Wrapper = styled.div``;

export default Main;
