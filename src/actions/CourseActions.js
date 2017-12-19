import * as Types from './ActionTypes';

export function CreateCourse(course) {
	return {type: Types.CREATE_COURSE, course}; //same as course: course, but since they share name can leave like this
}
