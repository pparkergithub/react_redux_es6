import AuthorApi from '../api/mockAuthorApi';
import * as types from './ActionTypes';

export function LoadAuthorsSuccess(authors) {
	return {type: types.LOAD_AUTHORS_SUCCESS, authors};
}

export function LoadAuthors() {
	return dispatch => {
		return AuthorApi.getAllAuthors().then(authors => {
			dispatch(LoadAuthorsSuccess(authors));
		}).catch(error => {
			throw(error);
		});
	};
}
