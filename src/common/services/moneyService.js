'use strict';

import BasicClass from 'lib/basicClass.js';

export default class MoneyService extends BasicClass{
  constructor(dataService){
    super(arguments);
  }

  getCashFlow(limit) {
    return this.dataService.getCashFlow(limit);
  }

  getCurrentBalance() {
    return this.dataService.getCurrentBalance();
  }

  updateBalance(newTransaction, oldTransaction){
    return this.dataService.updateBalance(newTransaction, oldTransaction);
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

  updateTransaction(transaction){
    return this.dataService.updateTransaction(transaction);
  }

  removeTransaction(transaction){
    let newTransactionObject = {
      isIncome: transaction.get('isIncome'),
      amount: 0
    };
    let oldTransactionObject = {
      isIncome: transaction.get('isIncome'),
      amount: transaction.get('amount')
    };
    return this.dataService.removeTransaction(transaction).then(()=>{
      return this.updateBalance(newTransactionObject, oldTransactionObject);
    });
  }
}
