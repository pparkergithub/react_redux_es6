// This component handles the App template used on every page.
import React from 'react';
import Routes from '../routes';
import Header from './common/Header';

class App extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<div className="container-fluid">
					<Routes />
				</div>
			</div>
		);
	}
}

export default App;
