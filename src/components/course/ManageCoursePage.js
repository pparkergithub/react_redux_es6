import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as CourseActions from '../../actions/CourseActions';
import CourseForm from './CourseForm';
import { Redirect } from 'react-router-dom';
import Toastr from 'toastr';
import {authorsFormattedForDropdown} from '../../selectors/selectors';

export class ManageCoursePage extends React.Component { //can export unconnected component this way, but the connected one is still defaulted at the bottom
	constructor(props, context) {
		super(props, context);

		this.state = {
			course: Object.assign({}, this.props.course),
			//authors: Object.assign({}, this.props.authors),
			errors: {},
			saving: false,
			redirect: false
		};

		this.updateCourseState = this.updateCourseState.bind(this);
		this.saveCourse = this.saveCourse.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.course.id != nextProps.course.id) {
			this.setState({course: Object.assign({}, nextProps.course)});
		}
	}

	updateCourseState(event) {
		const field = event.target.name;
		let course = Object.assign({}, this.state.course);
		course[field] = event.target.value;
		return this.setState({course: course});
	}

	saveCourse(event) {
		event.preventDefault();
		if (this.courseFormIsValid()) {
			this.setState({saving: true});
			this.props.actions.SaveCourse(this.state.course)
				.then(() => this.redirect())
				.catch(error => {
					Toastr.error(error);
				});
		}
		this.setState({saving: false});
	}

	redirect() {
		this.setState({redirect: true});
		Toastr.success('Course saved');
	}

	courseFormIsValid() {
		let formIsValid = true;
		let errors = {};

		if(this.state.course.title.length < 5) {
			errors.title = 'Title must be at least 5 characters';
			formIsValid = false;
		}

		this.setState({errors: errors});
		return formIsValid;
	}

	render() {
		if (this.state.redirect) {
			return <Redirect to="/courses"/>;
		} else {
			return (
				<div>
					<CourseForm course={this.state.course}
											allAuthors={this.props.authors}
											errors={this.state.errors}
											onChange={this.updateCourseState}
											onSave={this.saveCourse}
											saving={this.state.saving}
					/>
				</div>
			);
		}
	}
}

ManageCoursePage.propTypes = {
	course: PropTypes.object.isRequired,
	authors: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
};

function GetCourseById(courses, id) {
	const course = courses.filter(course => course.id == id);
	if (course.length) {
		return course[0]; //filter returns array, so return the first found element
	} else {
		return null;
	}
}

function mapStateToProps(state, ownProps) {
	const courseId = ownProps.match.params.id; //from the path '/course/:id'

	let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};
	if (courseId && state.courses.length > 0) { //prevents loading null error since courses aren't set on initial load
		course = GetCourseById(state.courses, courseId);
	}

	return {
		course: course,
		authors: authorsFormattedForDropdown(state.authors)
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(CourseActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
