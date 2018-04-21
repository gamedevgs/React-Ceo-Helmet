const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StatsPlugin = require('stats-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const distDir = path.join(__dirname, 'dist');
const srcDir = path.join(__dirname);

module.exports = [
	{
		name: 'client',
		target: 'web',
		entry: `${srcDir}/client.jsx`,
		output: {
			path: distDir,
			filename: 'client.js',
			publicPath: distDir,
		},
		resolve: {
			extensions: ['.js', '.jsx']
		},
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /(node_modules\/)/,
					use: [
						{
							loader: 'babel-loader',
						}
					]
				},
				{
					test: /\.scss$/,
					use: [
						{
							loader: 'style-loader',
						},
						{
							loader: 'css-loader',
							options: {
								modules: true,
								importLoaders: 1,
								localIdentName: '[hash:base64:10]',
								sourceMap: true,
							}
						},
						{
							loader: 'sass-loader'
						}
					]
				}     
			],
		},
		plugins: [
			new webpack.DefinePlugin({
				'process.env': {
					NODE_ENV: '"production"'
				}
			}),
            new CleanWebpackPlugin(distDir),
			new webpack.optimize.UglifyJsPlugin({
				compress: {
					warnings: false,
					screw_ie8: true,
					drop_console: true,
					drop_debugger: true
				}
			}),
			new webpack.optimize.OccurrenceOrderPlugin(),
		]
	},
	{
		name: 'server',
		target: 'node',
		entry: `${srcDir}/server.jsx`,
		output: {
			path: distDir,
			filename: 'server.js',
			libraryTarget: 'commonjs2',
			publicPath: distDir,
		},
		resolve: {
			extensions: ['.js', '.jsx']
		},
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /(node_modules\/)/,
					use: [
						{
							loader: 'babel-loader',
						}
					]
				},
				{
					test: /\.scss$/,
					use: ExtractTextPlugin.extract({
						fallback: "isomorphic-style-loader",
						use: [
							{
								loader: 'css-loader',
								options: {
									modules: true,
									importLoaders: 1,
									localIdentName: '[hash:base64:10]',
									sourceMap: true
								}
							},
							{
								loader: 'sass-loader'
							}
						]
					})
				}
			],
		},
		plugins: [
			new ExtractTextPlugin({
				filename: 'styles.css',
				allChunks: true
			}),
			new OptimizeCssAssetsPlugin({
				cssProcessorOptions: { discardComments: { removeAll: true } }
			}),
			new StatsPlugin('stats.json', {
				chunkModules: true,
				modules: true,
				chunks: true,
				exclude: [/node_modules[\\\/]react/],
			}),
		]
	}
];