import Webpack from 'webpack';
import Path from 'path';

export default {
    //debug: true,
    devtool: 'inline-source-map',
    //noInfo: false,
    entry: [
        'eventsource-polyfill', // necessary for hot reloading with IE
        'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
        Path.resolve(__dirname, 'src/index')
    ],
    target: 'web', //could be Node if building an app to work in Node
    output: {
        path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: Path.resolve(__dirname, 'src')
    },
    plugins: [
        new Webpack.HotModuleReplacementPlugin(),
        new Webpack.NoEmitOnErrorsPlugin(),
				new Webpack.LoaderOptionsPlugin({
						debug: true,
						noInfo: false
				})
    ],
    module: {
        // loaders: [
			// 			{test: /\.js$/, include: Path.join(__dirname, 'src'), loaders: ['babel']}, //transpile js files with babel
			// 			{test: /(\.css)$/, loaders: ['style', 'css']},
			// 			{test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'}, //these are standards for eot, woff, ttf, svg
			// 			{test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
			// 			{test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
			// 			{test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
			// 	],
				rules: [
					{test: /\.js$/, include: Path.join(__dirname, 'src'), loader: "babel-loader"},
					{ test: /(\.css)$/,
						use: [
							{loader: "style-loader"},
							{loader: "css-loader", options: { modules: true }}
						]
					},
					{test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader'},
					{test: /\.(woff|woff2)$/, loader: 'url-loader?prefix=font/&limit=5000'},
					{test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream'},
					{test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml'}
				]
    }
};
