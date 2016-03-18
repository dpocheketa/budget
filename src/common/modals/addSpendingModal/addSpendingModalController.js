'use strict';

import BasicClass from 'lib/basicClass.js';

export default class AddSpendingModalController extends BasicClass{
  constructor(moneyService, $uibModalInstance){
    super(arguments);
    this.spending = {
      isIncome: false,
      date: new Date()
    };
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
}
