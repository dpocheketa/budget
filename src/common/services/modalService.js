'use strict';

import addSpendingModalTemplate from 'common/modals/addSpendingModal/add-spending-modal.tpl.html';
import addSpendingModalController from 'common/modals/addSpendingModal/addSpendingModalController.js';
import addIncomeModalTemplate from 'common/modals/addIncomeModal/add-income-modal.tpl.html';
import addIncomeModalController from 'common/modals/addIncomeModal/addIncomeModalController.js';
import addCategoryModalTemplate from 'common/modals/addCategoryModal/add-category-modal.tpl.html';
import addCategoryModalController from 'common/modals/addCategoryModal/addCategoryModalController.js';
import welcomModalTemplate from 'common/modals/welcomeModal/welcome-modal.tpl.html';
import welcomeModalController from 'common/modals/welcomeModal/welcomeModalController.js';

export default class ModalService{
  constructor($uibModal){
    this.modal = $uibModal;
  }

  openAddSpendingModal(){
    return this.modal.open({
      template: addSpendingModalTemplate,
      controller: addSpendingModalController,
      controllerAs: 'ctrl',
      resolve: {
        spendingCategories: (categoriesService)=>{
          return categoriesService.getSpendingCategories();
        }
      }
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

  openAddCategoryModal(categoryType){
    return this.modal.open({
      template: addCategoryModalTemplate,
      controller: addCategoryModalController,
      controllerAs: 'ctrl',
      resolve: {
        type: () => {
          return categoryType;
        }
      }
    }).result;
  }

  openWelcomeModal(){
    return this.modal.open({
      template: welcomModalTemplate,
      controller: welcomeModalController,
      controllerAs: 'ctrl'
    }).result;
  }

}
