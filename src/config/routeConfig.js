'use strict';

export default ($stateProvider, $urlRouterProvider) => {
	$stateProvider
		.state('other', {
			url: '/other',
			template: '<p>lol</p>'
		});

	$urlRouterProvider.otherwise('/dashboard');
};
