import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/" component={HomePage}/>
			<Route path="/about" component={AboutPage}/>
		</Switch>
	);
};

export default Routes;