const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(str, key) {

    if (str === undefined || key === undefined) {
      throw new Error('Error');
    }

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    str = str.toUpperCase();
    key = key.toUpperCase();
    let result = '';
    let keyInd = 0;

    for (let j = 0; j < str.length; j++) {
      if (alphabet.indexOf(str[j]) >= 0) {
        let index = ((alphabet.indexOf(str[j]) + alphabet.indexOf(key[keyInd])) % alphabet.length);
        result = result + alphabet[index];

        if (keyInd === (key.length - 1)) {
          keyInd = 0;
        } else {
          keyInd++;
        }
      } else {
        result = result + str[j];
      }
    }

    return this.direct ? result : result.split('').reverse().join('');
  }
  decrypt(str, key) {

    if (str === undefined || key === undefined) {
      throw new Error('Error');
    }

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    str = str.toUpperCase();
    key = key.toUpperCase();
    let result = '';

    let keyInd = 0;

    for (let j = 0; j < str.length; j++) {
      if (alphabet.indexOf(str[j]) >= 0) {
        let index = ((alphabet.indexOf(str[j]) - alphabet.indexOf(key[keyInd]) + alphabet.length) % alphabet.length);
        result = result + alphabet[index];

        if (keyInd === (key.length - 1)) {
          keyInd = 0;
        } else {
          keyInd++;
        }
      } else {
        result = result + str[j];
      }
    }

    return this.direct ? result : result.split('').reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
