import React from 'react';
import { Switch, Route } from 'react-router-dom';

 import Home from '../pages/Home'

function Routes() {
	return (
		<Switch>
			<Route exact path="/">
				<Home />
			</Route>
			<Route exact path="/home">
				<Home />
			</Route>
		</Switch>
	);
}

export default Routes;
