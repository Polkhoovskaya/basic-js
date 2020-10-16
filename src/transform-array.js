const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  if (!Array(arr)) { throw new Error('Error'); };

  let oldArr = [...arr];
  let newArr = [];

  for (let i = 0; i < oldArr.length; i++) {

    switch (oldArr[i]) {

      case '--discard-prev':
        newArr.pop();
        break;

      case '--double-prev':
        if (i > 0) { newArr.push(oldArr[i - 1]); };
        break;

      case '--discard-next':
        i += 1;
        if (oldArr[i + 1] === '--double-prev' || oldArr[i + 1] === '--discard-prev') {
          i += 1;
        }
        break;

      case '--double-next':
        if ((i + 1) < oldArr.length) {
          newArr.push(oldArr[i + 1]);
        }
        break;

      default:
        newArr.push(oldArr[i]);
    }
  }

  return newArr;
};
