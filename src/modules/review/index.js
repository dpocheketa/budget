'use strict';

import reviewTemplate from './review.tpl.html';
import reviewController from './reviewController.js';

export default angular.module('app.review', [])
	.config(($stateProvider, $urlRouterProvider) => {

	$stateProvider
	.state('app.review', {
		url: '/review',
		views: {
			'main': {
				template: reviewTemplate,
				controller: reviewController,
				controllerAs: 'ctrl'
			}
		},
    resolve: {
      cashFlow: (moneyService) => {
        return moneyService.getCashFlow();
      },
      balance: (moneyService) => {
        return moneyService.getCurrentBalance();
      },
      categories: (categoriesService) => {
        return categoriesService.getAllCategories();
      }
    }
	});

});
