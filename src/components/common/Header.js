import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<nav className="navbar navbar-default">
			<div className="container-fluid">
				<ul className="nav navbar-nav">
					<li><NavLink to={"/"} activeClassName="active">Home</NavLink></li>
					<li><NavLink to={"/courses"} activeClassName="active">Courses</NavLink></li>
					<li><NavLink to={"/about"} activeClassName="active">About</NavLink></li>
				</ul>
			</div>
		</nav>
	);
};

export default Header;
