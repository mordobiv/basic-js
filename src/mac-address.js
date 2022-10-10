const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
 function isMAC48Address(n) {
  let nArr = n.split('-');
  if (nArr.length != 6) return false;

  let isAddressValid = true;
  for (let i of nArr) {
    if(!isPartMacAddress(i[0]) || !isPartMacAddress(i[1])) {
      isAddressValid = false;
      break
    }
  }

  function isPartMacAddress(s) {
    if (s.charCodeAt(0) >= 48 && s.charCodeAt(0) <= 57 || s.charCodeAt(0) >= 65 && s.charCodeAt(0) <= 70) return true;
    return false;
  }

  return isAddressValid;
}
module.exports = {
  isMAC48Address
};
