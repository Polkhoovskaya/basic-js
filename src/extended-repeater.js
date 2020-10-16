const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  if (str === undefined) {
    return new Error('Error')
  };

  let { repeatTimes, separator, addition, additionRepeatTimes, additionSeparator } = { ...options };
  let result = '';

  repeatTimes = repeatTimes ? repeatTimes : 1;
  additionRepeatTimes = additionRepeatTimes ? additionRepeatTimes : 1;
  separator = separator ? separator : '+';
  additionSeparator = additionSeparator ? additionSeparator : '|';

  let optionsStr = '';

  if (addition !== undefined) {
    for (let i = 1; i <= additionRepeatTimes; i++) {
      if (i === additionRepeatTimes) {
        optionsStr = optionsStr + addition;
      } else {
        optionsStr = optionsStr + addition + additionSeparator;
      }
    }
  }

  for (let j = 1; j <= repeatTimes; j++) {
    if (j === repeatTimes) {
      result = result + str + optionsStr;
    } else {
      result = result + str + optionsStr + separator;
    }
  }

  return result;
};
