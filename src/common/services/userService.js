'use strict';

import Parse from 'parse';
import BasicClass from '../../lib/basicClass.js';

export default class UserService extends BasicClass{
  constructor(){
    super(arguments);
  }

  signUp(user){
    return Parse.User.signUp(user.username, user.password);
  }

  signIn(user){
    return Parse.User.logIn(user.username, user.password);
  }

  getCurrentUser(){
    return Parse.User.current() && Parse.User.current().getUsername();
  }
}
