'use strict';

//vendor
import _ from 'lodash';

window._ = _; /*jslint browser: true*/

import angular from 'angular';
import uiRouter from 'ui-router';
import modal from 'angular-ui-bootstrap/src/modal';
import datePicker from 'angular-ui-bootstrap/src/datepicker';
// import parse from 'parse';

// configs
import runConfig from './config/runConfig.js';
import routeConfig from './config/routeConfig.js';

//modules
import common from './common';
import application from './modules/application';
import auth from './modules/auth';
import dashboard from './modules/dashboard';
import accounts from './modules/accounts';
import settings from './modules/settings';

angular.module('app', [
	'ui.router',
	'app.common',
  modal,
  datePicker,
	application.name,
  auth.name,
	dashboard.name,
  accounts.name,
  settings.name,
])
.config(routeConfig)
.run(runConfig);
