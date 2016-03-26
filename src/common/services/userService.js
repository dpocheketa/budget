'use strict';

import Parse from 'parse';
import BasicClass from 'lib/basicClass.js';

export default class UserService extends BasicClass{
  constructor($window){
    super(arguments);
  }

  signUp(user){
    let attrs = {
      balance: {
        value: 0
      }
    };
    return Parse.User.signUp(user.username, user.password, attrs);
  }

  signIn(user){
    return Parse.User.logIn(user.username, user.password);
  }

  getCurrentUser(){
    return Parse.User.current() && Parse.User.current().getUsername();
  }

  isReadWelcomeMessage(){
    return Parse.User.current().attributes.isReadWelcomeMessage;
  }

  welcomeMessageIsRead(){
    return Parse.User.current().set('isReadWelcomeMessage', true).save();
  }

  signOut(){
    Parse.User.logOut();
    this.$window.location.reload();
  }
}
