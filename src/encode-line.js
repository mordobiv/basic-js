const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  let resStr = ''
  for (let i = 0; i < str.length; i++) {
    let charsAmount = 1;
    
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] == str[j]) {
        charsAmount++;
        i = j;
      }
      else break;
    }

    if (charsAmount > 1) {
      resStr += charsAmount;
    }

    resStr += str[i];
  }

  return resStr;
}

module.exports = {
  encodeLine
};
