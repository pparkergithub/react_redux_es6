/*eslint-disable import/default */
import React from 'react';
import 'babel-polyfill';
import App from './components/App';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './styles/styles.css'; //webpack can import css files too!
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import ConfigureStore from './store/ConfigureStore.dev';
import {Provider} from 'react-redux';
import { LoadCourses } from "./actions/CourseActions";
import {LoadAuthors} from "./actions/AuthorActions";
import '../node_modules/toastr/build/toastr.min.css';
//import {} from 'react-router-redux';

const store = ConfigureStore();
store.dispatch(LoadCourses());
store.dispatch(LoadAuthors());

render ((
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	),
	document.getElementById('app')
);
