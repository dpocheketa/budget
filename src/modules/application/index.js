'use strict';

import appTemplate from './application.tpl.html';
import appController from './applicationController.js';

export default angular.module('app.application', [])
	.config(($stateProvider, $urlRouterProvider) => {

	$stateProvider
		.state('app', {
			abstract: true,
			template: appTemplate,
			controller: appController,
			controllerAs: 'ctrl'
		});

});