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
  
  
  constructor() {
    this.currentDepth = 1;
    this.maxDepth = 0;
  }

  calculateDepth(arr) {
    throw new NotImplementedError('Not implemented');
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        this.currentDepth++;

        this.calculateDepth(arr[i]);
        this.currentDepth = 1;
      }
      if (this.currentDepth > this.maxDepth) this.maxDepth = this.currentDepth;
    }

    let maxArrayDepth = this.maxDepth;
    this.maxDepth = 0;
    this.currentDepth = 1;
    return maxArrayDepth;
  }
}

module.exports = {
  DepthCalculator
};
