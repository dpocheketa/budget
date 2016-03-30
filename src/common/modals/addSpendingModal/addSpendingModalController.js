'use strict';

import BasicClass from 'lib/basicClass.js';

export default class AddSpendingModalController extends BasicClass{
  constructor(moneyService, $uibModalInstance, spendingCategories){
    super(arguments);

    this.spending = {
      isIncome: false,
      date: new Date()
    };

    this.popup = {};
  }

  save(){
    this.moneyService.addSpending(this.spending).then(()=>{
      this.moneyService.updateCurrentBalance(this.spending).then((args)=>{
        this.$uibModalInstance.close(true);
      });
    });
  }

  close(){
    this.$uibModalInstance.dismiss('cancel');
  }

  openDatePicker(){
    this.popup.opened = true;
  }
}
