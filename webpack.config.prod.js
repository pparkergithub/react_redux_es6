import Webpack from 'webpack';
import Path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const GLOBALS = {
	'process.env.NODE_ENV': JSON.stringify('production')
};

export default {
	//debug: true,
	devtool: 'source-map',
	//noInfo: false,
	entry: [
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
		new Webpack.optimize.OccurrenceOrderPlugin(),
		new Webpack.DefinePlugin(GLOBALS),
		new ExtractTextPlugin('styles.css'),
		new Webpack.optimize.UglifyJsPlugin(),
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
				use: ExtractTextPlugin.extract({
					use: 'css-loader',
					fallback: 'style-loader'
				})
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
