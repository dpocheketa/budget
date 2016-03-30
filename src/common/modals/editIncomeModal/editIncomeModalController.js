'use strict';

import BasicClass from 'lib/basicClass.js';

export default class EditIncomeModalController extends BasicClass {
  constructor(incomeCategories, $uibModalInstance, moneyService, existingIncome){
    super(arguments);

    this.income = {
      isIncome: true,
      date: existingIncome.get('date'),
      amount: existingIncome.get('amount'),
      title: existingIncome.get('title'),
      description: existingIncome.get('description'),
      note: existingIncome.get('note'),
      category: existingIncome.get('category'),
    };

    this.popup = {
      opened: false
    };

  }

  save(){
    let oldTransaction = {
      amount: this.existingIncome.get('amount'),
      isIncome: this.existingIncome.get('isIncome')
    };

    this.existingIncome.set('date', this.income.date);
    this.existingIncome.set('amount', this.income.amount);
    this.existingIncome.set('title', this.income.title);
    this.existingIncome.set('description', this.income.description);
    this.existingIncome.set('note', this.income.note);
    this.existingIncome.set('category', this.income.category);

    this.moneyService.updateTransaction(this.existingIncome).then(()=>{
      this.moneyService.updateBalance(this.income, oldTransaction).then((args)=>{
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
