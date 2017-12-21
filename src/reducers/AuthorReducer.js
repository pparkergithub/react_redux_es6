import * as Types from '../actions/ActionTypes';
import InitialState from './InitialState';

export default function AuthorReducer(state = InitialState.authors, action) {
	switch (action.type) {
		case Types.LOAD_AUTHORS_SUCCESS:
			return action.authors;
		default:
			return state;
	}
}
