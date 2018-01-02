import * as Types from './ActionTypes';
import CourseAPI from '../api/mockCourseApi';
import {BeginAjaxCall, AjaxCallError} from "./AjaxStatusActions";

export function CreateCourseSuccess(course) {
	return {type: Types.CREATE_COURSE_SUCCESS, course}; //same as course: course, but since they share name can leave like this
}

export function LoadCoursesSuccess(courses) {
	return {type: Types.LOAD_COURSES_SUCCESS, courses};
}

export function UpdateCourseSuccess(course) {
	return {type: Types.UPDATE_COURSE_SUCCESS, course};
}

export function LoadCourses() {
	return function(dispatch) {
		dispatch(BeginAjaxCall());
		return CourseAPI.getAllCourses().then(courses => {
			dispatch(LoadCoursesSuccess(courses));
		}).catch(error => {
			dispatch(AjaxCallError());
			throw(error);
		});
	};
}

export function SaveCourse(course) {
	return function (dispatch, getState) { //getState is optional parameter that can access state values without having to pass those values in
		dispatch(BeginAjaxCall());
		return CourseAPI.saveCourse(course).then(savedCourse => {
			course.id ? dispatch(UpdateCourseSuccess(savedCourse)) :
				dispatch(CreateCourseSuccess(savedCourse));
		}).catch(error => {
			dispatch(AjaxCallError());
			throw(error);
		});
	};
}
