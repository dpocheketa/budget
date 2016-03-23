'use strict';

import settingsAccountsTemplate from './settings-accounts.tpl.html';
import settingsAccountsController from './settingsAccountsController.js';

export default angular.module('app.settings.accounts', [])
  .config(($stateProvider, $urlRouterProvider) => {

  $stateProvider
  .state('app.settings.accounts', {
    url: '/accounts',
    views: {
      'content': {
        template: settingsAccountsTemplate,
        controller: settingsAccountsController,
        controllerAs: 'ctrl'
      }
    }
  });

});
