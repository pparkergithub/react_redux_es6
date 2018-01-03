import Webpack from 'webpack';
import Path from 'path';

export default {
	devtool: 'inline-source-map',
	entry: [
		'eventsource-polyfill', // necessary for hot reloading with IE
		//'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
		'./src/index'
	],
	target: 'web', //could be Node if building an app to work in Node
	output: {
		path: Path.resolve(__dirname, 'dist'), // Note: Physical files are only output by the production build task `npm run build`.
		publicPath: '/',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: Path.resolve(__dirname, 'dist'),
		stats: {
			chunks: false,
			errors: true,
			errorDetails: true,
			warnings: true
		}
	},
	plugins: [
		new Webpack.NoEmitOnErrorsPlugin(),
		new Webpack.LoaderOptionsPlugin({
			debug: true,
			noInfo: true
		})
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				include: Path.join(__dirname, 'src'),
				use: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{loader: 'css-loader', options: {sourcemap: true}}
				]
			},
			{
				test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'file-loader'
			},
			{
				test: /\.(woff|woff2)$/,
				options: {limit: 5000, prefix: 'font/'},
				loader: 'url-loader'
			},
			{
				test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
				options: {limit: 10000, mimetype: 'application/octet-stream'},
				loader: 'url-loader'
			},
			{
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
				options: {limit: 10000, mimetype: 'image/svg+xml'},
				loader: 'url-loader'
			}
		]
	}
};
