'use strict';

import incomeCategoriesTemplate from './income-categories.tpl.html';
import incomeCategoriesController from './incomeCategoriesController.js';

export default angular.module('app.settings.incomeCategories', [])
  .config(($stateProvider, $urlRouterProvider) => {

  $stateProvider
  .state('app.settings.incomeCategories', {
    url: '/income-categories',
    views: {
      'content': {
        template: incomeCategoriesTemplate,
        controller: incomeCategoriesController,
        controllerAs: 'ctrl'
      }
    },
    resolve: {
      incomeCategories: (categoriesService)=>{
        return categoriesService.getIncomeCategories();
      }
    }
  });

});
