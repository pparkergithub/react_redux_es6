import * as Types from '../actions/ActionTypes';
import InitialState from './InitialState';

export default function CourseReducer(state = InitialState.courses, action) {
	switch (action.type) {
		case Types.CREATE_COURSE_SUCCESS:
			return [...state,
				Object.assign({}, action.course)
			];

		case Types.UPDATE_COURSE_SUCCESS:
			return [
				...state.filter(course => course.id !== action.course.id),
				Object.assign({}, action.course)
			];

		case Types.LOAD_COURSES_SUCCESS:
			return action.courses;

		default:
			return state;
	}
}
