import React from 'react';
import Expect from 'expect';
import {shallow, mount, render} from 'enzyme';
import CourseForm from './CourseForm';

function setup(saving) {
	const props = {
		course: {}, saving: saving, errors: {},
		onSave: () => {},
		onChange: () => {}
	};

	return shallow(<CourseForm {...props}/>);
}

describe('CourseForm test', () => {
	it('renders form and h1', () => {
		const wrapper = setup(false);
		Expect(wrapper.find('form').length).toBe(1);
		Expect(wrapper.find('h1').text()).toEqual('Manage Course');
	});

	it('save button is "Save" when not saving', () => {
		const wrapper = setup(false);
		Expect(wrapper.find('input').props().value).toBe('Save');
	});

	it('save button is "Saving..." when saving', () => {
		const wrapper = setup(true);
		Expect(wrapper.find('input').props().value).toBe('Saving...');
	});
});
