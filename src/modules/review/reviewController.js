'use strict';

import BasicClass from 'lib/basicClass.js';

export default class ReviewController extends BasicClass{
	constructor(moneyService, modalService, cashFlow, balance, user, $scope, categories, userService){
    super(arguments);
    this.initWelcomeModal();
	}

  initWelcomeModal(){
    if (!this.userService.isReadWelcomeMessage()) {
      this.modalService.openWelcomeModal().then((done)=>{
        if (done) {
          this.userService.welcomeMessageIsRead();
        }
      });
    }
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
}
