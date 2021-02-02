import React from "react";
import {useLocation} from "react-router";
import {animated, useTransition, config} from "react-spring";
import Glass from "./Glass";
import Routes from "./Routes";

export const Main = () => {
	const location = useLocation();

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
	});

	const styles = {
		borderRadius: "var(--border-radius)",
		overflow: "hidden",
		height: "calc(var(--app-height) + -15%)",
	};

	return (
		<>
			{transitionToLeft.map(({item, key, props: transitionProps}) => (
				<animated.div key={key} style={{...transitionProps, ...styles}}>
					<Glass>
						<Routes location={item} />
					</Glass>
				</animated.div>
			))}
		</>
	);
};

export default Main;
