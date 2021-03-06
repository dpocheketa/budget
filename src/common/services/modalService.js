'use strict';

import addSpendingModalTemplate from 'common/modals/addSpendingModal/add-spending-modal.tpl.html';
import addSpendingModalController from 'common/modals/addSpendingModal/addSpendingModalController.js';

import editSpendingModalTemplate from 'common/modals/editSpendingModal/edit-spending-modal.tpl.html';
import editSpendingModalController from 'common/modals/editSpendingModal/editSpendingModalController.js';

import addIncomeModalTemplate from 'common/modals/addIncomeModal/add-income-modal.tpl.html';
import addIncomeModalController from 'common/modals/addIncomeModal/addIncomeModalController.js';

import editIncomeModalTemplate from 'common/modals/editIncomeModal/edit-income-modal.tpl.html';
import editIncomeModalController from 'common/modals/editIncomeModal/editIncomeModalController.js';

import addCategoryModalTemplate from 'common/modals/addCategoryModal/add-category-modal.tpl.html';
import addCategoryModalController from 'common/modals/addCategoryModal/addCategoryModalController.js';

import editCategoryModalTemplate from 'common/modals/editCategoryModal/edit-category-modal.tpl.html';
import editCategoryModalController from 'common/modals/editCategoryModal/editCategoryModalController.js';

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

  openEditIncomeModal(income){
    return this.modal.open({
      template: editIncomeModalTemplate,
      controller: editIncomeModalController,
      controllerAs: 'ctrl',
      resolve: {
        incomeCategories: (categoriesService)=>{
          return categoriesService.getIncomeCategories();
        },
        existingIncome: ()=>{
          return income;
        }
      }
    }).result;
  }

  openEditSpendingModal(spending){
    return this.modal.open({
      template: editSpendingModalTemplate,
      controller: editSpendingModalController,
      controllerAs: 'ctrl',
      resolve: {
        spendingCategories: (categoriesService)=>{
          return categoriesService.getSpendingCategories();
        },
        existingSpending: ()=>{
          return spending;
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

  openEditCategoryModal(category){
    return this.modal.open({
      template: editCategoryModalTemplate,
      controller: editCategoryModalController,
      controllerAs: 'ctrl',
      resolve: {
        existingCategory: () => {
          return category;
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
