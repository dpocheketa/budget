'use strict';

import BasicClass from '../../lib/basicClass.js';
import incomeCategories from '../../mocks/incomeCategories.js';

export default class CategoriesService extends BasicClass {
  constructor($timeout){
    super(arguments);
  }

  getIncomeCategories(){
    return this.$timeout(()=>{
      return incomeCategories;
    });
  }
}
