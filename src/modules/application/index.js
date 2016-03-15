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
			controllerAs: 'ctrl',
      resolve: {
        user: (userService, $q, $state) => {
          let dfd = $q.defer();
          let currentUser = userService.getCurrentUser();

          if (currentUser) {
            dfd.resolve(currentUser);
          } else {

            dfd.reject(null);
            $state.go('auth.signin');
          }

          return dfd.promise;
        }
      }
		});

});
