'use strict';

var webpack = require('webpack');
var	path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');

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
  			},
        {
          test: /\.css$/,
          loader: "style-loader!css-loader"
        }
  		]
    },
    resolve: {
      modulesDirectories: ['node_modules', 'src']
    },
    output: {
        path: APP + '/public',
        filename: 'bundle.js'
    },
    externals: {
      _: 'lodash'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CopyWebpackPlugin([
          { from: 'src/assets', to: 'assets' },
          { from: 'views'}
        ])
  	]
};
