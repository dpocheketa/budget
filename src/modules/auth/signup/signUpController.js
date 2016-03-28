'use strict';

import BasicClass from 'lib/basicClass.js';

export default class SignUpController extends BasicClass{
	constructor(userService, $state, $scope){
    super(arguments);
	}

  signUp(){
    if (this.signUpForm.$valid && _.isEqual(this.user.password, this.user.repeatPassword)) {
      this.proceedSignUp();
    } else {
      this.error = true;
      this.errorMessage = 'Your passwords do not match';
    }
  }

  proceedSignUp(){
    this.userService.signUp({
      username: this.user.username,
      password: this.user.password
    }).then((response)=>{
      this.$state.go('app.dashboard');
    }).catch((error)=>{
      this.errorMessage = error.message;
      this.error = true;
      this.$scope.$apply();
    });
  }
}
