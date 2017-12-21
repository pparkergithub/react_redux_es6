import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as CourseActions from '../../actions/CourseActions';
import CourseForm from './CourseForm';

class ClassName extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			course: Object.assign({}, this.props.course),
			//authors: Object.assign({}, this.props.authors),
			errors: {}
		};

		this.updateCourseState = this.updateCourseState.bind(this);
		this.saveCourse = this.saveCourse.bind(this);
	}

	updateCourseState(event) {
		const field = event.target.name;
		let course = Object.assign({}, this.state.course);
		course[field] = event.target.value;
		return this.setState({course: course});
	}

	saveCourse(event) {
		event.preventDefault();
		this.props.actions.saveCourse(this.state.course);
	}

	render() {
		return (
			<div>
				<CourseForm course={this.state.course}
										allAuthors={this.props.authors}
										errors={this.state.errors}
										onChange={this.updateCourseState}
										onSave={this.saveCourse}
										/>
			</div>
		);
	}
}

ClassName.propTypes = {
	course: PropTypes.object.isRequired,
	authors: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
	let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};

	const authorsFormattedForDropdown = state.authors.map(author => {
		return {
			value: author.id,
			text: author.firstName + ' ' + author.lastName
		};
	});

	return {
		course: course,
		authors: authorsFormattedForDropdown
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(CourseActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassName);
