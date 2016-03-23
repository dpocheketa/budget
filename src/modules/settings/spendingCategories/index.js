'use strict';

import spendingCategoriesTemplate from './spending-categories.tpl.html';
import spendingCategoriesController from './spendingCategoriesController.js';

export default angular.module('app.settings.spendingCategories', [])
  .config(($stateProvider, $urlRouterProvider) => {

  $stateProvider
  .state('app.settings.spendingCategories', {
    url: '/spending-categories',
    views: {
      'content': {
        template: spendingCategoriesTemplate,
        controller: spendingCategoriesController,
        controllerAs: 'ctrl'
      }
    },
    resolve: {
      spendingCategories: (categoriesService)=>{
        return categoriesService.getSpendingCategories();
      }
    }
  });

});
