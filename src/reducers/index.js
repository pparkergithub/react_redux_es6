import {combineReducers} from 'redux';
import courses from './CourseReducer';

const RootReducer = combineReducers({
	courses
});

export default RootReducer;
