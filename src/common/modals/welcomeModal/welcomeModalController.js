'use strict';

import BasicClass from 'lib/basicClass.js';

export default class WelcomeModalController extends BasicClass {
  constructor($uibModalInstance, $state){
    super(arguments);

  }

  ok(){
    this.$uibModalInstance.close(true);
  }

  goToIncomeCategories(){
    this.$uibModalInstance.close(true);
    this.$state.go('app.settings.incomeCategories');
  }

  goToSpendingCategories(){
    this.$uibModalInstance.close(true);
    this.$state.go('app.settings.spendingCategories');
  }

  close(){
    this.$uibModalInstance.dismiss('cancel');
  }
}
