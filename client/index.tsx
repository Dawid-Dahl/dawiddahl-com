import {History} from "history";
import history from "./history";
import React from "react";
import ReactDOM from "react-dom";
import {Route, Router, Switch} from "react-router";
import App from "./App";

ReactDOM.render(
	<Router history={history as History<History>}>
		<Switch>
			<Route path="/" component={App} />
		</Switch>
	</Router>,
	document.getElementById("root")
);
