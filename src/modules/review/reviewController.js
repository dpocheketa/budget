'use strict';

import BasicClass from 'lib/basicClass.js';

export default class ReviewController extends BasicClass{
	constructor(moneyService, modalService, cashFlow, balance, user, $scope, categories, userService){
    super(arguments);
	}

  updateCashFlow(){
    this.moneyService.getCashFlow().then((response)=>{
      this.cashFlow = response;
      this.$scope.$apply();
    });
  }

  getCategoryName(categoryId){
    let category = _.find(this.categories, {id: categoryId});

    if (category) {
      return category.attributes.name;
    }

    return '';
  }

  editTransaction(transaction){
    if (transaction.attributes.isIncome) {
      this.modalService.openEditIncomeModal(transaction).then((result)=>{
        this.updateCashFlow();
      });
    } else {
      this.modalService.openEditSpendingModal(transaction).then((result)=>{
        this.updateCashFlow();
      });
    }
  }

  removeTransaction(transaction){
    this.moneyService.removeTransaction(transaction).then((result)=>{
      this.updateCashFlow();
    });
  }
}
