import React from 'react';
import 'babel-polyfill';
import App from './components/App';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './styles/styles.css'; //webpack can import css files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render ((
		<BrowserRouter>
			<App />
		</BrowserRouter>
	),
	document.getElementById('app')
);
