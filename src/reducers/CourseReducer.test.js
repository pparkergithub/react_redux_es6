import expect from 'expect';
import CourseReducer from './CourseReducer';
import * as Actions from '../actions/CourseActions';

describe('Course Reducer test', () => {
	it('should add course when passed CREATE_COURSE_SUCCESS', () => {
		//arrange
		const initialState = [
			{title: 'A'},
			{title: 'B'}
		];

		const newCourse = {title: 'C'};

		const action = Actions.CreateCourseSuccess(newCourse);

		//act
		const newState = CourseReducer(initialState, action);

		//assert
		expect(newState.length).toEqual(3);
		expect(newState[0].title).toEqual('A');
		expect(newState[1].title).toEqual('B');
		expect(newState[2].title).toEqual('C');
	});

	it('should update course when passed UPDATE_COURSE_SUCCESS', () => {
		//arrange
		const initialState = [
			{id: 'A', title: 'A'},
			{id: 'B', title: 'B'},
			{id: 'C', title: 'C'}
		];

		const courseToUpdate = {id: 'B', title: 'new title'};

		const action = Actions.UpdateCourseSuccess(courseToUpdate);

		//act
		const newState = CourseReducer(initialState, action);

		//assert
		expect(newState.length).toEqual(3);
		expect(newState.find(a => a.id == 'A').title).toEqual('A');
		expect(newState.find(a => a.id == courseToUpdate.id).title).toEqual(courseToUpdate.title);
		expect(newState.find(a => a.id == 'C').title).toEqual('C');
	});
});
