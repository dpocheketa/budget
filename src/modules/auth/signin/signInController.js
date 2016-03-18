'use strict';

import BasicClass from 'lib/basicClass.js';

export default class SignInController extends BasicClass{
	constructor(userService, $state){
    super(arguments);
	}

  signIn(){
    console.log('signIn: ', this.user);

    this.userService.signIn(this.user).then((user)=>{
      console.log('user: ', user);
      this.$state.go('app.dashboard');
    });
  }

}
