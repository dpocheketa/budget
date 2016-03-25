'use strict';

import BasicClass from 'lib/basicClass.js';

export default class SignInController extends BasicClass{
	constructor(userService, $state, $scope){
    super(arguments);
	}

  signIn(){
    this.userService.signIn(this.user).then((user)=>{
      this.$state.go('app.dashboard');
    }).catch(()=>{
      this.error = true;
      this.$scope.$apply();
    });
  }

}
