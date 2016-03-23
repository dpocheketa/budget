'use strict';

import BasicClass from 'lib/basicClass.js';

export default class IncomeCategoriesController extends BasicClass{
  constructor(modalService, categoriesService, incomeCategories, $scope){
    super(arguments);
  }

  addCategory() {
    this.modalService.openAddCategoryModal('income').then((result)=>{
      if (result) {
        this.categoriesService.getIncomeCategories().then((response)=>{
          this.incomeCategories = response;
          this.$scope.$apply();
        });
      }
    });
  }
}
