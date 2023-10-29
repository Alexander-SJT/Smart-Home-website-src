const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
	entry: './src/js/main.js',
	output: {
		path: path.resolve(__dirname, 'build/js'),
		filename: '[name].min.js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	optimization: {
		minimizer: [
			new TerserPlugin({
				parallel: true, 			// parallel minify (for optimization)
				extractComments: false, 	// disable comment
				terserOptions: {
					mangle: true, 			// minify var names
					compress: {
						drop_console: true, // delete console.log
					},
					format: {
						comments: false, 	// disable comment
					},
				},
			}),
		],
		splitChunks: {
			cacheGroups: {
				vendor: {
					chunks: 'all',
					test: /node_modules/,
					name: 'vendor',
					enforce: true,
				},
			},
		},
	},
	devtool: process.env.NODE_ENV === 'production' ? false : 'source-map',
	mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
};
