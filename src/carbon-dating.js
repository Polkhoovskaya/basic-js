const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(activity) {

  let time = Number.parseInt(0.693 / (Math.log(MODERN_ACTIVITY / +activity) * HALF_LIFE_PERIOD));

  return typeof (time) === 'number' ? time : false;

  // throw new CustomError('Not implemented');
  // // remove line with error and write your code here
};
