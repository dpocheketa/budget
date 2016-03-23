'use strict';

import BasicClass from 'lib/basicClass.js';

export default class MoneyService extends BasicClass{
  constructor(dataService){
    super(arguments);
  }

  getCashFlow(limit) {
    return this.dataService.getCashFlow(limit);
  }

  getCurrentBallance() {
    return this.dataService.getCurrentBalance();
  }

  updateCurrentBalance(latestTransaction) {
    return this.dataService.saveCurrentBalance(latestTransaction);
  }

  addIncome(income) {
    return this.dataService.saveTransaction(income);
  }

  addSpending(spending) {
    return this.dataService.saveTransaction(spending);
  }

}
