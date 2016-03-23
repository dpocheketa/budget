'use strict';

import BasicClass from 'lib/basicClass.js';

export default class SpendingCategoriesController extends BasicClass{
  constructor(modalService, spendingCategories, categoriesService, $scope){
    super(arguments);
  }

  addCategory() {
     return this.modalService.openAddCategoryModal('spending').then((result)=>{
      if (result) {
        this.categoriesService.getSpendingCategories().then((response)=>{
          this.spendingCategories = response;
          this.$scope.$apply();
        });
      }
    });
  }
}
