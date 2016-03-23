'use strict';

import accountsTemplate from './accounts.tpl.html';
import accountsController from './accountsController.js';

export default angular.module('app.accounts', [])
	.config(($stateProvider, $urlRouterProvider) => {

	$stateProvider
	.state('app.accounts', {
		url: '/accounts',
		views: {
			'main': {
				template: accountsTemplate,
				controller: accountsController,
				controllerAs: 'ctrl'
			}
		},
    resolve: {

    }
	});

});
