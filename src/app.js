'use strict';

//vendor
import _ from 'lodash';

window._ = _; /*jslint browser: true*/

import angular from 'angular';
import uiRouter from 'ui-router';
import modal from 'angular-ui-bootstrap/src/modal';
// import parse from 'parse';

// configs
import runConfig from './config/runConfig.js';
import routeConfig from './config/routeConfig.js';

//modules
import common from './common';
import application from './modules/application';
import auth from './modules/auth';
import dashboard from './modules/dashboard';

angular.module('app', [
	'ui.router',
	'app.common',
  modal,
	application.name,
  auth.name,
	dashboard.name
])
.config(routeConfig)
.run(runConfig);
