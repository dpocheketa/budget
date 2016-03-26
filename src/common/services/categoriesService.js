'use strict';

import BasicClass from 'lib/basicClass.js';
import incomeCategories from 'mocks/incomeCategories.js';

export default class CategoriesService extends BasicClass {
  constructor($timeout, dataService){
    super(arguments);
  }

  getIncomeCategories(){
    return this.dataService.getCategories('incomeCategory');
  }

  getSpendingCategories(){
    return this.dataService.getCategories('spendingCategory');
  }

  getAllCategories(){
    return this.dataService.getCategories();
  }

  addCategory(category){
    return this.dataService.addCategory(category);
  }

  removeCategory(category){
    return this.dataService.removeCategory(category);
  }
}
