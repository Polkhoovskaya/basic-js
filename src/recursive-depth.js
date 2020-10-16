const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

  calculateDepth(array, result = 1) {

    let copy = [...array];
    let deletedEl = 0;

    for (let i = 0; i < array.length; i++) {
      if (!Array.isArray(array[i])) {
        copy.splice(i - deletedEl, 1);
        deletedEl++;
      }
    }

    if (copy.length !== 0) {
      copy = [].concat(...copy);
      result += 1;

      return this.calculateDepth(copy, result);
    };

    if (copy.length === 0) { return result; }
  }
};