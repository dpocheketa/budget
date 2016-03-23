'use strict';

import dashboardTemplate from './dashboard.tpl.html';
import dashboardController from './dashboardController.js';

export default angular.module('app.dashboard', [])
	.config(($stateProvider, $urlRouterProvider) => {

	$stateProvider
	.state('app.dashboard', {
		url: '/dashboard',
		views: {
			'main': {
				template: dashboardTemplate,
				controller: dashboardController,
				controllerAs: 'ctrl'
			}
		},
    resolve: {
      cashFlow: (moneyService) => {
        return moneyService.getCashFlow();
      },
      balance: (moneyService) => {
        return moneyService.getCurrentBallance();
      },
      categories: (categoriesService) => {
        return categoriesService.getAllCategories();
      }
    }
	});

});
