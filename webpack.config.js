'use strict';
var webpack = require('webpack'),
	path = require('path');

var APP = __dirname + '/';

module.exports = {
    context: APP,
    entry: {
   		app: ['webpack/hot/dev-server', './src/app.js']
    },
    module: {
		loaders: [
			{
			    test: /\.html$/,
			    // loader: "raw",
			    loader: "angular-templatecache-loader",
			    exclude: /node_modules|bower_components/
			},
			{
				test: /\.js$/,
			    loader: 'ng-annotate!babel?cacheDirectory!jshint',
			    // loader: 'babel!jshint',
			    query: "",
			    exclude: /node_modules|bower_components/
			}
		]
    },
    output: {
        path: APP,
        filename: 'public/bundle.js'
    },
	plugins: [
	    new webpack.HotModuleReplacementPlugin()
	]
};
