import React, {useState} from "react";
import styled from "styled-components";
import {Switch, Route} from "react-router-dom";
import Home from "./home/Home";
import Contact from "./contact/Contact";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import {Location} from "history";

type Props = {
	location: Location<unknown>;
};

const Routes: React.FC<Props> = ({location}) => {
	const [isLoading, setIsLoading] = useState(false);

	return (
		<Switch location={location}>
			<Route
				path="/home"
				render={() => <Home isLoading={isLoading} setIsLoading={setIsLoading} />}
			/>
			<Route
				path="/projects"
				render={() => <Projects isLoading={isLoading} setIsLoading={setIsLoading} />}
			/>
			<Route
				path="/skills"
				render={() => <Skills isLoading={isLoading} setIsLoading={setIsLoading} />}
			/>
			<Route
				path="/contact"
				render={() => <Contact isLoading={isLoading} setIsLoading={setIsLoading} />}
			/>
			<Route
				path="/"
				render={() => <Home isLoading={isLoading} setIsLoading={setIsLoading} />}
			/>
		</Switch>
	);
};

const Wrapper = styled.div``;

export default Routes;
