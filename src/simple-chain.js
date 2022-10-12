const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

 const chainMaker = {

  chain: [],
  node: '',

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    if (value === null) value = 'null';
    if (value === undefined) this.node += `( )`;
    else this.node += `( ${value} )`;

    this.chain.push(this.node);
    this.node = '';
    return this;
  },

  removeLink(position) {
    position--;
    if (!Number.isInteger(position) || position < 0 || position > this.chain.length - 1) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    resStr = '';
    for (let i = 0; i < this.chain.length; i++) {
      resStr += this.chain[i];

      if (i != this.chain.length - 1) resStr += '~~';
    }
    this.chain = [];
    return resStr;
    
  }
};

module.exports = {
  chainMaker
};
