import Webpack from 'webpack';
import Path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const GLOBALS = {
	'process.env.NODE_ENV': JSON.stringify('production')
};

export default {
	devtool: 'source-map',
	entry: './src/index',
	target: 'web', //could be Node if building an app to work in Node
	output: {
		path: Path.resolve(__dirname, 'dist'), // Note: Physical files are only output by the production build task `npm run build`.
		publicPath: '/',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: './dist'
	},
	plugins: [
		new Webpack.DefinePlugin(GLOBALS),
		new ExtractTextPlugin('styles.css'),
		new Webpack.optimize.UglifyJsPlugin()
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
					fallback: require.resolve('style-loader'),
					use: [
						{
							loader: require.resolve('css-loader'),
							options: {
								importLoaders: 1,
								minimize: true,
								sourceMap: true
							}
						}
					]
				})
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
