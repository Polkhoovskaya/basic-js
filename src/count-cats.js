const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let count = 0;

  for (let key in backyard) {
    for (let key2 in backyard[key]) {
      if(backyard[key][key2] === '^^') {
        count++;
      }
    }
  }
  return count;
};
