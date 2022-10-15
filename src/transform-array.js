const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */

 function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  let resArr = [];
  let isDiscarded = false;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
      switch (arr[i]) {
        case '--discard-next':
          i++;
          isDiscarded = true;
          break;
        case '--discard-prev':
          if (!isDiscarded) {
            resArr.pop();
            isDiscarded = false;
          }
          break;
        case '--double-next':
          if (arr[i + 1]) resArr.push(arr[i + 1]);
          break;
        case '--double-prev':
          if (!isDiscarded) {
            if (i) resArr.push(resArr[resArr.length - 1]);
            isDiscarded = false;
          }
          break;
        default:
          resArr.push(arr[i]);
      }
      continue;
    }
    resArr.push(arr[i]);
  }
  return resArr;
}

module.exports = {
  transform
};
