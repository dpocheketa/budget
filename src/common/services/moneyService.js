'use strict';

import Parse from 'parse';
import cashFlow from '../../mocks/cashFlow.js';
import BasicClass from '../../lib/basicClass.js';

export default class MoneyService extends BasicClass{
  constructor($timeout){
    super(arguments);
  }

  getCashFlow() {
    let incomeList = new Parse.Query('transaction');
    return incomeList.find();
  }

  getCurrentBallance() {
    return this.$timeout(()=>{
      return {
          value: 100,
          currency: '$'
        };
    });
  }

  addIncome(income) {
    let transaction = new Parse.Object('transaction');
    let custom_acl = new Parse.ACL();

    custom_acl.setWriteAccess( Parse.User.current(), true);
    custom_acl.setReadAccess(Parse.User.current(), true);
    transaction.setACL(custom_acl);
    return transaction.save(income);
  }

}
