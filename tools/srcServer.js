import Express from 'express';
import Webpack from 'webpack';
import Path from 'path';
import Config from '../webpack.config.dev';
import Open from 'open';

/* eslint-disable no-console */

const port = 3000;
const app = Express(); //setup express
const compiler = Webpack(Config); //use webpack configuration

app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	publicPath: Config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) { //wildcard means serve up index.html for all requests
	res.sendFile(Path.join( __dirname, '../src/index.html'));
});

app.listen(port, function(err) {
	if (err) {
		console.log(err);
	} else {
		Open(`http://localhost:${port}`);
	}
});
