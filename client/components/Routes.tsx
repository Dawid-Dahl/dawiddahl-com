import React from "react";
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
	return (
		<Switch location={location}>
			<Route path="/home" component={Home} />
			<Route path="/projects" component={Projects} />
			<Route path="/skills" component={Skills} />
			<Route path="/contact" component={Contact} />
			<Route path="/" component={Home} />
		</Switch>
	);
};

const Wrapper = styled.div``;

export default Routes;
