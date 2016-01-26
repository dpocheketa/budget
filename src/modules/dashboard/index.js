'use strict';

import dashboardTemplate from './dashboard.tpl.html';
import dashboardController from './dashboardController.js';

export default angular.module('app.dashboard', [])
	.config(($stateProvider, $urlRouterProvider) => {

	$stateProvider
	.state('app.dashboard', {
		url: '/dashboard',
		views: {
			'': {
				template: dashboardTemplate,
				controller: dashboardController,
				controllerAs: 'ctrl'

			}
		}
	});

});