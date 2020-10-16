const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const LN2 = 0.693;

module.exports = function dateSample(activity) {

  if (!activity || typeof (activity) !== 'string' || +activity <= 0 || isNaN(activity) || +activity > MODERN_ACTIVITY) { return false; };

  return Math.ceil((Math.log(MODERN_ACTIVITY / +activity) * HALF_LIFE_PERIOD / LN2));
};
