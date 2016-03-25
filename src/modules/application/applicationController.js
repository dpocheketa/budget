'use strict';

import BasicClass from 'lib/basicClass.js';
import headerTpl from './content/header.tpl.html';
import footerTpl from './content/footer.tpl.html';

export default class applicationController extends BasicClass{
	constructor(userService){
    super(arguments);
    this.user = this.userService.getCurrentUser();
	}

  logout() {
    this.userService.signOut();
  }
}
