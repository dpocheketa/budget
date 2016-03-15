'use strict';

import BasicClass from '../../lib/basicClass.js';

export default class DashboardController extends BasicClass{
	constructor(moneyService, modalService, cashFlow, balance, user){
    super(arguments);
	}

  addIncome(){
    this.modalService.openAddIncomeModal();
  }

  addSpending(){
    this.modalService.openAddSpendingModal();
  }
}
