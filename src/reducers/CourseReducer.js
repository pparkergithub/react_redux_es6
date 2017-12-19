import * as Types from '../actions/ActionTypes';

export default function CourseReducer(state = [], action) {
	switch (action.type) {
		case Types.CREATE_COURSE:
			return [...state,
				Object.assign({}, action.course)
			];
		default:
			return state;
	}
}
