'use strict';

import Parse from 'parse';
import cashFlow from '../../mocks/cashFlow.js';
import BasicClass from '../../lib/basicClass.js';

export default class MoneyService extends BasicClass{
  constructor($timeout){
    super(arguments);
  }

  getCashFlow() {
    let incomeList = new Parse.Query('income');
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
    let incomeObject = new Parse.Object('income');
    let custom_acl = new Parse.ACL();
    // give write access to the current user
    custom_acl.setWriteAccess( Parse.User.current(), true);
    // disable public read access
    custom_acl.setReadAccess(Parse.User.current(), true);
    incomeObject.setACL(custom_acl);
    return incomeObject.save(income);
  }

}
