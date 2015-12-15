'use strict';

//vendor
import angular from 'angular';
import uiRouter from 'ui-router';

// configs
import runConfig from './config/runConfig.js';
import routeConfig from './config/routeConfig.js';

//modules

angular.module('app', [
	'ui.router'
])
.config(routeConfig)
.run(runConfig);