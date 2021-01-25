import React, {useState} from "react";
import {useLocation} from "react-router";
import {animated, useTransition, config} from "react-spring";
import styled from "styled-components";
import {IconsList} from "../content/Icons";
import Glass from "./Glass";
import Routes from "./Routes";

export const Main = () => {
	const location = useLocation();

	const currentPathIndex: number = (IconsList[
		location.pathname.slice(1) as any
	] as unknown) as number;

	const [prevLocationIndex, setPrevLocationIndex] = useState(currentPathIndex);

	const transitionToRight = useTransition(location, location => location.pathname, {
		config: config.gentle,
		from: {
			opacity: 0,
			transform: "translateX(-100vw)",
			position: "absolute",
			backdropFilter: "blur(0.5em)",
		},
		enter: {opacity: 1, transform: "translateX(0vw)"},
		leave: {opacity: 0, transform: "translateX(110vw)"},
		//@ts-ignore
		onRest: () => {
			setPrevLocationIndex(currentPathIndex);
		},
	});

	const transitionToLeft = useTransition(location, location => location.pathname, {
		config: config.gentle,
		from: {
			opacity: 0,
			transform: "translateX(100vw)",
			position: "absolute",
			backdropFilter: "blur(0.5em)",
		},
		enter: {opacity: 1, transform: "translateX(0vw)"},
		leave: {opacity: 0, transform: "translateX(-110vw)"},
		//@ts-ignore
		onRest: () => {
			setPrevLocationIndex(currentPathIndex);
		},
	});

	return (
		<>
			{currentPathIndex >= prevLocationIndex
				? transitionToLeft.map(({item, key, props: transitionProps}) => (
						<animated.div key={key} style={transitionProps}>
							<Glass>
								<Routes location={item} />
							</Glass>
						</animated.div>
				  ))
				: transitionToRight.map(({item, key, props: transitionProps}) => (
						<animated.div key={key} style={transitionProps}>
							<Glass>
								<Routes location={item} />
							</Glass>
						</animated.div>
				  ))}
		</>
	);
};

const Wrapper = styled.div``;

export default Main;
