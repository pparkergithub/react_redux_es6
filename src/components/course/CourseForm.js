import React from 'react';
import {connect} from 'react-redux';
import * as CourseActions from '../../actions/CourseActions';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';

class CourseForm extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			course: {title: ""}
		};

		this.onTitleChange = this.onTitleChange.bind(this);
		this.onClickSave = this.onClickSave.bind(this);
	}

	courseRow(course, index) {
		return <div key={index}>{course.title}</div>;
	}

	onTitleChange(event) {
		const course = this.state.course;
		course.title = event.target.value;
		this.setState({course: course});
	}

	onClickSave() {
		this.props.actions.CreateCourse(this.state.course);
	}
	render() {
		return (
			<div>
				<div>
					{this.props.courses.map(this.courseRow)}
				</div>
				<h2>Add Course</h2>
				<input
					type="text"
					onChange={this.onTitleChange}
					value={this.state.course.title} />

				<input
					type="submit"
					value="Save"
					onClick={this.onClickSave} />
			</div>
		);
	}
}

CourseForm.propTypes = {
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
	}	;
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseForm);
