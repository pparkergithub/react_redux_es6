// This component handles the App template used on every page.
import React from 'react';
import Routes from '../routes';

class App extends React.Component {
	render() {
		return (
			<div>
				<div className="container-fluid">
					<p>Header here...</p>
					<Routes />
				</div>
			</div>
		);
	}
}

export default App;
