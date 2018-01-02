import * as Types from '../actions/ActionTypes';
import InitialState from './InitialState';

function ActionTypeEndsInSuccess(type) {
	return type.substring(type.length - 8) == '_SUCCESS';
}

export default function AjaxStatusReducer(state = InitialState.ajaxCallsInProgress, action) {
	if (action.type == Types.BEGIN_AJAX_CALL) {
		return state + 1;
	} else if (action.type == Types.AJAX_CALL_ERROR || ActionTypeEndsInSuccess(action.type)) {
		return state - 1;
	}

	return state;
}
