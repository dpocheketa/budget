'use strict';

import signin from './signin';
import signup from './signup';
import authTemplate from './auth.tpl.html';

export default angular.module('app.auth', [
  signin.name,
  signup.name,
]).config(($stateProvider, $urlRouterProvider) => {

	$stateProvider
	.state('auth', {
		abstract: true,
    template: authTemplate
	});

});
