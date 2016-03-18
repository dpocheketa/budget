'use strict';

import Parse from 'parse';
import cashFlow from 'mocks/cashFlow.js';
import BasicClass from 'lib/basicClass.js';

export default class MoneyService extends BasicClass{
  constructor(){
    super(arguments);
  }

  getCashFlow() {
    let incomeList = new Parse.Query('transaction');
    return incomeList.find();
  }

  getCurrentBallance() {
    let user = Parse.User.current();
    return user.get('balance');
  }

  updateCurrentBalance(latestTransaction) {
    let user = Parse.User.current();
    let balance = user.get('balance');

    if (latestTransaction.isIncome) {
      balance.value += latestTransaction.amount;
    } else {
      balance.value -= latestTransaction.amount;
    }

    return user.set('balance', balance).save();
  }

  addIncome(income) {
    let transaction = new Parse.Object('transaction');
    let custom_acl = new Parse.ACL();

    custom_acl.setWriteAccess( Parse.User.current(), true);
    custom_acl.setReadAccess(Parse.User.current(), true);
    transaction.setACL(custom_acl);
    return transaction.save(income);
  }

  addSpending(spending) {
    let transaction = new Parse.Object('transaction');
    let custom_acl = new Parse.ACL();

    custom_acl.setWriteAccess( Parse.User.current(), true);
    custom_acl.setReadAccess(Parse.User.current(), true);
    transaction.setACL(custom_acl);
    return transaction.save(spending);
  }

}
