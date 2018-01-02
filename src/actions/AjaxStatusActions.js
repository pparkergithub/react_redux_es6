import * as Types from './ActionTypes';

export function BeginAjaxCall() {
	return {type: Types.BEGIN_AJAX_CALL};
}

export function AjaxCallError() {
	return {type: Types.AJAX_CALL_ERROR};
}
