const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let nStr = n.toString();
  let nArr = [...nStr];
  let max = 0;
  for (let i = 0; i < nArr.length; i++) {
    let resStr = '';
    for (let j = 0; j < nArr.length; j++) {
        if (j != i) {
            resStr += nArr[j];
        }
    }
    if (max < +resStr) max = +resStr;
  }
  return max;
}

module.exports = {
  deleteDigit
};
