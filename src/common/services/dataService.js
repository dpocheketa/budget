'use strict';

import Parse from 'parse';
import BasicClass from 'lib/basicClass.js';

let privateAcl = ()=>{
  let privateAcl = new Parse.ACL();

  privateAcl.setWriteAccess(Parse.User.current(), true);
  privateAcl.setReadAccess(Parse.User.current(), true);
  return privateAcl;
};

export default class DataService extends BasicClass{
  constructor(){
    super(arguments);
  }

  getCurrentBalance() {
    let user = Parse.User.current();
    return user.get('balance');
  }

  getCashFlow(limit) {
    let incomeList = new Parse.Query('transaction');
    limit = limit || 10;
    return incomeList.descending("date").limit(limit).find();
  }

  saveCurrentBalance(transaction){
    let user = Parse.User.current();
    let balance = user.get('balance');

    if (transaction.isIncome) {
      balance.value += transaction.amount;
    } else {
      balance.value -= transaction.amount;
    }

    return user.set('balance', balance).save();
  }

  saveTransaction(transaction){
    let transactionObject = new Parse.Object('transaction');
    let acl = privateAcl();

    transactionObject.setACL(acl);
    return transactionObject.save(transaction);
  }

  addCategory(category){
    let categoryObject = new Parse.Object('category');
    let acl = privateAcl();

    categoryObject.setACL(acl);
    return categoryObject.save(category);
  }

  getCategories(type){
    let categoryList = new Parse.Query('category');

    if (type){
      return categoryList.equalTo(type, true).find();
    }

    return categoryList.find();
  }
}
