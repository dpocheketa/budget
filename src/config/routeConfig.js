'use strict';

export default ($stateProvider, $urlRouterProvider, $locationProvider) => {
	$stateProvider
		.state('other', {
			url: '/other',
			template: '<p>lol</p>'
		});

	$urlRouterProvider.otherwise('/dashboard');

  // $locationProvider.html5Mode(true);
};
