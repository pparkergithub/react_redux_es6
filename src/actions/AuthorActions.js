import AuthorApi from '../api/mockAuthorApi';
import * as types from './ActionTypes';
import {AjaxCallError, BeginAjaxCall} from "./AjaxStatusActions";

export function LoadAuthorsSuccess(authors) {
	return {type: types.LOAD_AUTHORS_SUCCESS, authors};
}

export function LoadAuthors() {
	return dispatch => {
		dispatch(BeginAjaxCall());
		return AuthorApi.getAllAuthors().then(authors => {
			dispatch(LoadAuthorsSuccess(authors));
		}).catch(error => {
			dispatch(AjaxCallError());
			throw(error);
		});
	};
}
