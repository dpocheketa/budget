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
				test: /\.js$/,
			    // loader: 'ng-annotate!babel!jshint',
			    loader: 'babel!jshint',
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
