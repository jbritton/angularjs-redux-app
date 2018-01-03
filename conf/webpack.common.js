const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractCss = new ExtractTextPlugin({
	filename: '[name].[contenthash].css'
});

module.exports = {

	context: path.join(process.cwd(), 'src'), //the home directory for webpack

	devtool: 'source-map', // enhance debugging by adding meta info for the browser devtools

	entry: {
		app: './index.js'
	},

	output: {
		path: path.join(process.cwd(), 'dist'),
		filename: '[name].[hash].js',
		publicPath: '/',
		sourceMapFilename: '[name].map'
	},

	resolve: {
		extensions: ['.js'],  // extensions that are used
		modules: [path.join(process.cwd(), 'src'), 'node_modules'] // directories where to look for modules
	},

	module: {
		rules: [
			{
				enforce: 'pre', //to check source files, not modified by other loaders (like babel-loader)
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'eslint-loader'
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env']
					}
				}
			},
			{
				test: /\.css/,
				use: extractCss.extract({
					use: [
						{
							loader: 'css-loader'
						}
					],
					// use style-loader in development
					fallback: 'style-loader'
				})
			},
			{
				test: /\.scss$/,
				use: extractCss.extract({
					use: [
						{
							loader: 'css-loader'
						},
						{
							loader: 'sass-loader'
						}
					],
					// use style-loader in development
					fallback: 'style-loader'
				})
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8192
						}
					}
				]
			},

			{
				test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					'file-loader'
				]
			},
			{
				test: /\.(woff|woff2)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 5000,
							prefix: 'font'
						}
					}
				]
			},
			{
				test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 10000,
							mimetype: 'application/octet-stream'
						}
					}
				]
			},
			{
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 10000,
							mimetype: 'image/svg+xml'
						}
					}
				]
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(['dist'], {root: process.cwd()}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor'
		}),
		new HtmlWebpackPlugin({
			template: 'index.html'
		}),
		extractCss
	]
};