import Webpack from 'webpack';
import Path from 'path';

export default {
	//debug: true,
	devtool: 'inline-source-map',
	//noInfo: false,
	entry: [
		'eventsource-polyfill', // necessary for hot reloading with IE
		//'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
		Path.resolve(__dirname, 'src/index.js')
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
		new Webpack.HotModuleReplacementPlugin(),
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
					'css-loader'
				]
			},
			{
				test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
				use: 'file-loader'
			},
			{
				test: /\.(woff|woff2)$/,
				use: 'url-loader?prefix=font/&limit=5000'
			},
			{
				test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
				use: 'url-loader?limit=10000&mimetype=application/octet-stream'
			},
			{
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
				use: 'url-loader?limit=10000&mimetype=image/svg+xml'
			}
		]
	}
};
