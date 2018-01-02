import React from 'react';
import PropTypes from 'prop-types';
import CourseList from './CourseList';
import * as CourseActions from "../../actions/CourseActions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import { Redirect } from 'react-router-dom';

class CoursesPage extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = { redirect: false };

		this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
	}

	redirectToAddCoursePage() {
		this.setState({redirect: true});
	}

	render() {
		const {courses} = this.props;

		if (this.state.redirect) {
			return <Redirect to="/course"/>;
		} else {
			return (
				<div>
					<h1>Courses</h1>
					<input type="submit" className="btn btn-primary" onClick={this.redirectToAddCoursePage} value="Add Course"/>
					<CourseList courses={courses}/>
				</div>
			);
		}
	}
}

CoursesPage.propTypes = {
	courses: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
	return {
		courses: state.courses
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(CourseActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
