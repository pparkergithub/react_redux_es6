import React from 'react';
import expect from 'expect';
import {mount, shallow, render} from 'enzyme';
import {ManageCoursePage} from './ManageCoursePage';

function setupTestProps() {
	let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};
	let actions = { SaveCourse: () => {return Promise.resolve(); }};

	const props = {
		course: course,
		authors: [],
		actions: actions
	};

	return props;
}

describe('Manage Course Page test', () => {
	it('sets error message when trying to save empty title', () => {
		const testProps = setupTestProps();
		const wrapper = mount(<ManageCoursePage {...testProps}/>);
		const saveButton = wrapper.find('input').last();
		expect(saveButton.prop('type')).toBe('submit');
		saveButton.simulate('click');
		expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters');
	});
});
