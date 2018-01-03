import expect from 'expect';
import {authorsFormattedForDropdown} from "./selectors";

describe('Selectors test', () => {
	describe('authorsFormattedForDropdown tests', () => {
		it('should return author data formatted for use in a dropdown', () => {
			const authors = [
				{
					id: 'cory-house',
					firstName: 'Cory',
					lastName: 'House'
				},
				{
					id: 'scott-allen',
					firstName: 'Scott',
					lastName: 'Allen'
				}
			];

			const expectedData = [
				{
					value: 'cory-house',
					text: 'Cory House'
				},
				{
					value: 'scott-allen',
					text: 'Scott Allen'
				}
			];

			expect(authorsFormattedForDropdown(authors)).toEqual(expectedData);
		});
	});
});
