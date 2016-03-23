'use strict';

import BasicClass from 'lib/basicClass.js';

export default class AddCategoryModalController extends BasicClass {
  constructor($uibModalInstance, categoriesService, type){
    super(arguments);

    this.category = {
      incomeCategory: _.isEqual(type, 'income'),
      spendingCategory: _.isEqual(type, 'spending')
    };
  }

  save(){
    this.categoriesService.addCategory(this.category).then((response)=>{
      this.$uibModalInstance.close(true);
    });
  }

  close(){
    this.$uibModalInstance.dismiss('cancel');
  }
}
