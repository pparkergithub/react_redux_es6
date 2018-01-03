import {createStore, applyMiddleware} from 'redux';
import RootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import Thunk from "redux-thunk";
//import {routerReducer, routerMiddleware, push} from 'react-router-redux';

//Reducers
//import courses from '../reducers/CourseReducer';

export default function ConfigureStore(initialState) {
	//const routerMiddlewareHistory = routerMiddleware(history);

	return createStore(
		RootReducer,
		initialState,
		applyMiddleware(Thunk, reduxImmutableStateInvariant())
	);
}
