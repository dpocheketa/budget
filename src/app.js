'use strict';

//vendor
import angular from 'angular';
import uiRouter from 'ui-router';

// configs
import runConfig from './config/runConfig.js';
import routeConfig from './config/routeConfig.js';

//modules
import core from './core';
import dashboard from './modules/dashboard';
import application from './modules/application';

angular.module('app', [
	'ui.router',
	'app.core',
	application.name,
	dashboard.name
])
.config(routeConfig)
.run(runConfig);
