const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

  if (!date) {
    return "Unable to determine the time of year!";
  }

  if (!date.getTime()) { throw new Error('date is invalid'); }

  let month = date.getMonth();
  switch (true) {
    case Number.isInteger(month) && (month >= 0 && month <= 1 || month === 11):
      return 'winter';
    case Number.isInteger(month) && (month >= 2 && month <= 4):
      return 'spring';
    case Number.isInteger(month) && (month >= 5 && month <= 7):
      return 'summer';
    case Number.isInteger(month) && (month >= 8 && month <= 10):
      return 'autumn';
    default:
      throw new Error('date is invalid');
  }
};
