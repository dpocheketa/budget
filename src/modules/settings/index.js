'use strict';

import settingsTemplate from './settings.tpl.html';
import settingsController from './settingsController.js';

import settingsAccounts from './accounts';
import settingsIncomeCategories from './incomeCategories';
import settingsSpendingCategories from './spendingCategories';

export default angular.module('app.settings', [
  settingsAccounts.name,
  settingsIncomeCategories.name,
  settingsSpendingCategories.name
]).config(($stateProvider, $urlRouterProvider) => {

	$stateProvider
	.state('app.settings', {
		url: '/settings',
    abstract: true,
		views: {
      'main': {
        template: settingsTemplate,
        controller: settingsController,
        controllerAs: 'ctrl'
      }
    }
	});

});
