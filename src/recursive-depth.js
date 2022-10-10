const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

 class DepthCalculator {
  calculateDepth(arr, maxDepth = 1, iteration = 1) {
    throw new NotImplementedError('Not implemented');

    // isArr(arr);

    console.log('------');
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
      if (Array.isArray(arr[i])) {
        console.log('iteration: ' + iteration);
        iteration++;
        // if (maxDepth < iteration) {
        //   maxDepth = iteration;
        // }
        let currentDepth = this.calculateDepth(arr[i], maxDepth = maxDepth, iteration = iteration);
        if (maxDepth < currentDepth) maxDepth = currentDepth;
      }

      if (i == arr.length - 1) {
        iteration = 1;
      }
    }
    console.log('------');

    return maxDepth;
  }
}

module.exports = {
  DepthCalculator
};
