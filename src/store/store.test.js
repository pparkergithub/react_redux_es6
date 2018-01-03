import expect from 'expect';
import {createStore} from 'redux';
import RootReducer from '../reducers';
import InitialState from '../reducers/InitialState';
import * as CourseActions from '../actions/CourseActions';

describe('Store tests', () => {
	describe('Course actions in store', () => {
		it('Should handle creating courses', () => {
			//arrange
			const store = createStore(
				RootReducer,
				InitialState
			);
			const course = {
				title: 'Clean Code'
			};

			//act
			const action = CourseActions.CreateCourseSuccess(course);
			store.dispatch(action);

			//assert
			const actual = store.getState().courses[0];
			expect(actual).toEqual(course);
		});
	});
});
