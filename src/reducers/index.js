import {combineReducers} from 'redux';
import courses from './CourseReducer';
import authors from './AuthorReducer';
import ajaxCallsInProgress from './AjaxStatusReducer';

const RootReducer = combineReducers({
	courses,
	authors,
	ajaxCallsInProgress
});

export default RootReducer;
