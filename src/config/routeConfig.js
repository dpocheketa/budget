'use strict';

import dashboardTemplate from '../modules/dashboard/dashboard.tpl.html';
import dashboardController from '../modules/dashboard/dashboardController';

export default ($stateProvider, $urlRouterProvider) => {
	$stateProvider
		.state('dashboard', {
			url: '/dashboard',
	  		template: dashboardTemplate,
	  		controller: dashboardController,
	  		controllerAs: 'ctrl'
		})
		.state('other', {
			url: '/other',
			template: '<p>lol</p>'
		});

	$urlRouterProvider.otherwise('/dashboard');
};