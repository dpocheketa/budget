'use strict';

import addSpendingModalTemplate from '../modals/addSpendingModal/add-spending-modal.tpl.html';
import addSpendingModalController from '../modals/addSpendingModal/addSpendingModalController.js';
import addIncomeModalTemplate from '../modals/addIncomeModal/add-income-modal.tpl.html';
import addIncomeModalController from '../modals/addIncomeModal/addIncomeModalController.js';

export default class ModalService{
  constructor($uibModal){
    this.modal = $uibModal;
  }

  openAddSpendingModal(){
    return this.modal.open({
      template: addSpendingModalTemplate,
      controller: addSpendingModalController,
      controllerAs: 'ctrl',
    }).result;
  }

  openAddIncomeModal(){
    return this.modal.open({
      template: addIncomeModalTemplate,
      controller: addIncomeModalController,
      controllerAs: 'ctrl',
      resolve: {
        incomeCategories: (categoriesService)=>{
          return categoriesService.getIncomeCategories();
        }
      }
    }).result;
  }
}
