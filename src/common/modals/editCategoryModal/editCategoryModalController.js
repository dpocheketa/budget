'use strict';

import BasicClass from 'lib/basicClass.js';

export default class EditCategoryModalController extends BasicClass {
  constructor($uibModalInstance, categoriesService, existingCategory){
    super(arguments);
    this.category = {
      name: existingCategory.get('name'),
      incomeCategory: existingCategory.get('incomeCategory'),
      spendingCategory: existingCategory.get('spendingCategory')
    };
  }

  save(){
    this.existingCategory.set('name', this.category.name);
    this.existingCategory.set('incomeCategory', this.category.incomeCategory);
    this.existingCategory.set('spendingCategory', this.category.spendingCategory);

    this.categoriesService.updateCategory(this.existingCategory).then((response)=>{
      this.$uibModalInstance.close(true);
    });
  }

  close(){
    this.$uibModalInstance.dismiss('cancel');
  }
}
