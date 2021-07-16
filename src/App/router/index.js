import React from 'react';
import { Switch, Route } from 'react-router-dom';

 import Home from '../pages/Home'
import Login from '../pages/Login'

function Routes() {
	return (
		<Switch>
			<Route exact path="/">
				<Login />
			</Route>
			<Route exact path="/home">
				<Home />
			</Route>
		</Switch>
	);
}

export default Routes;
