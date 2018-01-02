// This component handles the App template used on every page.
import React from 'react';
//import PropTypes from 'prop-types';
import Routes from '../routes';
import Header from './common/Header';

class App extends React.Component {
	render() {
		return (
			<div>
				<div className="container-fluid">
					<Header />
					<Routes />
				</div>
			</div>
		);
	}
}

export default App;
