'use strict';

import moneyService from './services/moneyService.js';
import modalService from './services/modalService.js';
import categoriesService from './services/categoriesService.js';
import userService from './services/userService.js';

export default angular.module('app.common', []);

angular.module('app.common')
  .service('moneyService', moneyService)
  .service('modalService', modalService)
  .service('categoriesService', categoriesService)
  .service('userService', userService);
