const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

// let options = { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' };
// let str = 'STRING'

function repeater(str, options) {
  let resStr = '';

  let separator = options.separator || '+';
  let additionSeparator = options.additionSeparator || '|';
  let repeatTimes = options.repeatTimes || 1;
  let additionRepeatTimes = options.additionRepeatTimes || 1;

  let addition = options.addition;
  if (options.addition === null) {
    addition = 'null';
  }

  for (let mainRepeat = 0; mainRepeat < repeatTimes; mainRepeat++) {
    resStr += str;

    if (addition || typeof options.addition == 'boolean') {
      resStr += addition;

      for (let additionRepeat = 0; additionRepeat < additionRepeatTimes - 1; additionRepeat++) {
        if (additionRepeat != additionRepeatTimes - 1) {
          resStr += additionSeparator;
        }
        resStr += addition;
      }

    }

    if (mainRepeat != repeatTimes - 1) {
      resStr += separator;
    }
  }

  return resStr;
}

module.exports = {
  repeater
};
