'use strict';

import BasicClass from 'lib/basicClass.js';

export default class DashboardController extends BasicClass{
	constructor(moneyService, modalService, cashFlow, balance, user, $scope){
    super(arguments);
	}

  addIncome(){
    this.modalService.openAddIncomeModal().then((result)=>{
      if (result) {
        this.updateCashFlow();
      }
    });
  }

  addSpending(){
    this.modalService.openAddSpendingModal().then((result)=>{
      if (result) {
        this.updateCashFlow();
      }
    });
  }

  updateCashFlow(){
    this.moneyService.getCashFlow().then((response)=>{
      this.cashFlow = response;
      this.$scope.$apply();
    });
  }
}
