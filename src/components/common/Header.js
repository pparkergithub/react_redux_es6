import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import LoadingDots from './LoadingDots';
import {connect} from 'react-redux';

class Header extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<ul className="nav navbar-nav">
						<li><NavLink to={"/"} activeClassName="active">Home</NavLink></li>
						<li><NavLink to={"/courses"} activeClassName="active">Courses</NavLink></li>
						<li><NavLink to={"/about"} activeClassName="active">About</NavLink></li>
						{this.props.loading && <li><NavLink to="#"><LoadingDots interval={100} dots={20}/></NavLink></li>}
					</ul>
				</div>
			</nav>
		);
	}
}

Header.propTypes = {
	loading: PropTypes.bool
};

function mapStateToProps(state, ownProps) {
	return {
		loading: state.ajaxCallsInProgress > 0
	};
}

export default connect(mapStateToProps)(Header);
