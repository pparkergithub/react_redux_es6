import expect from 'expect';
import * as CourseActions from './CourseActions';
import * as Types from './ActionTypes';
import Thunk from 'redux-thunk';
import Nock from 'nock';
import ConfigureMockStore from 'redux-mock-store';

const middleware = [Thunk];
const MockStore = ConfigureMockStore(middleware);

describe('Course Actions Sync actions test', () => {
	describe('CreateCourseSuccess test', ()=> {
		it('should create a CREATE_COURSE_SUCCESS action', ()=> {
			//arrange
			const course = {id: 'clean-code', title: 'Clean Code'};
			const expectedAction = {
				type: Types.CREATE_COURSE_SUCCESS,
				course: course
			};

			//act
			const action = CourseActions.CreateCourseSuccess(course);

			//assert
			expect(action).toEqual(expectedAction);
		});
	});
});

describe('Course Actions Async actions test', () => {
	afterEach(() => {
		Nock.cleanAll();
	});

	it('should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses', (done)=> {
		//   Nock Example
		//Nock('http://example.com')
		//	.get('/courses')
		//	.reply(200, {body: {course: [{id: 1, firstName: 'Cory', lastName: 'House'}]}});

		const expectedActions = [
			{type: Types.BEGIN_AJAX_CALL},
			{type: Types.LOAD_COURSES_SUCCESS, body: {courses: [{id: 'clean-code', title: 'Clean Code'}]}}
		];

		const store = MockStore({courses: []}, expectedActions);
		store.dispatch(CourseActions.LoadCourses()).then(() => {
			const actions = store.getActions();
			expect(actions[0].type).toEqual(Types.BEGIN_AJAX_CALL);
			expect(actions[1].type).toEqual(Types.LOAD_COURSES_SUCCESS);
			done();
		});
	});
});
