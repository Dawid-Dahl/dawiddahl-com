import React from "react";
import ReactDOM from "react-dom";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import App from "./App";

ReactDOM.render(
	<Router>
		<Switch>
			<Route path="/" component={App} />
		</Switch>
	</Router>,
	document.getElementById("root")
);
