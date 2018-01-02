import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from "./components/course/ManageCoursePage";

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/" component={HomePage}/>
			<Route path="/courses" component={CoursesPage}/>
			<Route exact path="/course" component={ManageCoursePage} />
			<Route path="/course/:id" component={ManageCoursePage} />
			<Route path="/about" component={AboutPage}/>
		</Switch>
	);
};

export default Routes;
