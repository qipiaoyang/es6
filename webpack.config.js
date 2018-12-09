const path = require("path");
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	mode: "development",
	entry: "./src/main.js",
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, "dist"),
	},
	module: {
		rules: [{
				test: /\.(js|jsx)$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
						plugins: [require('@babel/plugin-proposal-class-properties')]
					}
				}
			},
		],
	},
	resolve: {
		extensions: [".js", ".json"]
	},
	// devtool: "source-map",
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		port: 3000,
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			title: 'Development'
		})
	]

}
