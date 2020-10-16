const CustomError = require("../extensions/custom-error");

const chainMaker = {

  result: [],

  getLength() {
    return this.result.length;
  },
  addLink(value = '') {
    this.result.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof (position) === 'number' && Number.isInteger(position) && position <= this.result.length) {
      this.result.splice(position - 1, 1);
      return this;
    } else {
      this.result = [];
      throw new Error('Error');
    }
  },
  reverseChain() {
    this.result.reverse();
    return this;
  },
  finishChain() {
    let res = this.result.join('~~');
    this.result = [];
    return res;
  }
};

module.exports = chainMaker;
