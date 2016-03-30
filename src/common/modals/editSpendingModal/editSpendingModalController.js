'use strict';

import BasicClass from 'lib/basicClass.js';

export default class EditSpendingModalController extends BasicClass {
  constructor(spendingCategories, $uibModalInstance, moneyService, existingSpending){
    super(arguments);

    this.spending = {
      isIncome: false,
      date: existingSpending.get('date'),
      amount: existingSpending.get('amount'),
      title: existingSpending.get('title'),
      description: existingSpending.get('description'),
      note: existingSpending.get('note'),
      category: existingSpending.get('category'),
    };

    this.popup = {
      opened: false
    };

  }

  save(){
    let oldTransaction = {
      amount: this.existingSpending.get('amount'),
      isIncome: this.existingSpending.get('isIncome')
    };

    this.existingSpending.set('date', this.spending.date);
    this.existingSpending.set('amount', this.spending.amount);
    this.existingSpending.set('title', this.spending.title);
    this.existingSpending.set('description', this.spending.description);
    this.existingSpending.set('note', this.spending.note);
    this.existingSpending.set('category', this.spending.category);

    this.moneyService.updateTransaction(this.existingSpending).then(()=>{
      this.moneyService.updateBalance(this.spending, oldTransaction).then((args)=>{
        this.$uibModalInstance.close(true);
      });
    });
  }

  close(){
    this.$uibModalInstance.dismiss('cancel');
  }

  openDatePicker(){
    this.popup.opened = true;
  }
}
