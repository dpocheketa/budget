'use strict';

import BasicClass from '../../../lib/basicClass.js';

export default class AddIncomeModalController extends BasicClass {
  constructor(incomeCategories, $uibModalInstance, moneyService){
    super(arguments);

    this.income = {
      isIncome: true,
      date: new Date()
    };
  }

  save(){
    this.moneyService.addIncome(this.income).then(()=>{
      this.$uibModalInstance.close(true);
    });
  }

  close(){
    this.$uibModalInstance.dismiss('cancel');
  }
}
