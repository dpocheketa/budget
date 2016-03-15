'use strict';

import signInTemplate from './sign-in.tpl.html';
import signInController from './signInController.js';

export default angular.module('app.auth.signin', [])
	.config(($stateProvider, $urlRouterProvider) => {

	$stateProvider
	.state('auth.signin', {
		url: '/signin',
		views: {
			'': {
				template: signInTemplate,
				controller: signInController,
				controllerAs: 'ctrl'
			}
		}
	});

});
