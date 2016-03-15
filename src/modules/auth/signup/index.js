'use strict';

import signUpTemplate from './sign-up.tpl.html';
import signUpController from './signUpController.js';

export default angular.module('app.auth.signup', [])
	.config(($stateProvider, $urlRouterProvider) => {

	$stateProvider
	.state('auth.signup', {
		url: '/signup',
		views: {
			'': {
				template: signUpTemplate,
				controller: signUpController,
				controllerAs: 'ctrl'
			}
		}
	});

});
