'use strict';

export default class BasicClass {
  constructor (args) {
    for (let i = 0; i <= this.constructor.$inject.length; i++) {
        this[this.constructor.$inject[i]] = args[i];
    }
  }
}
