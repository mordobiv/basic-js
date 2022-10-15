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
  
  calculateDepth(arr) {
    let depth = 0;
    for (let el of arr) {
      let currentDepth = 0;
      if (Array.isArray(el)) currentDepth = this.calculateDepth(el)

      depth = depth > currentDepth ? depth : currentDepth;
    }
    return ++depth;
  }
}

module.exports = {
  DepthCalculator
};


