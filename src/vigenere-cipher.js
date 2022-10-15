const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

class VigenereCipheringMachine {
  reverse = false;
  initCode = 'A'.charCodeAt(0);

  constructor(isReverse) {
    if (isReverse === false) {
      this.reverse = true;
    }
  }

  encrypt(str, key) {
    this.checkArguments(str, key)

    key = key.toUpperCase();
    str = str.toUpperCase();
  
    let resStr = '';
    
    let j = 0;
    for (let i = 0; i < str.length; i++, j++) {
  
      if (this.isCharNotLetter(str[i])) {
        j--;
        resStr += str[i];
        continue;
      }
  
      if (j == key.length) j = 0;
  
      const keyCode = key[j].charCodeAt(0);
      const strCode = str[i].charCodeAt(0);
    
      let resCharCode = (keyCode + strCode)%26 + this.initCode;
    
      const resChar = String.fromCharCode(resCharCode);
      resStr += resChar;
    }
  
    return this.proceedReverse(resStr);
  }

  decrypt(secretString, key) {

    this.checkArguments(secretString, key)
  
    key = key.toUpperCase();
    secretString = secretString.toUpperCase();
  
    let resStr = '';
    
    let j = 0;
    for (let i = 0; i < secretString.length; i++, j++) {
  
      if (this.isCharNotLetter(secretString[i])) {
        j--;
        resStr += secretString[i];
        continue;
      }
  
      if (j == key.length) j = 0;
  
      const keyCode = key[j].charCodeAt(0);
      const secretStrCode = secretString[i].charCodeAt(0);
      
      let resCharCode;
      if (keyCode <= secretStrCode) {
        resCharCode = Math.abs((keyCode - secretStrCode)%26) + this.initCode;
      } else {
        resCharCode = 90 - (keyCode - secretStrCode - 1);
      }
    
      const resChar = String.fromCharCode(resCharCode);
      resStr += resChar;
    }
  
    return this.proceedReverse(resStr);
  }

  checkArguments(str, key) {
    if (!str || !key) throw new Error('Incorrect arguments!')
  }

  proceedReverse(resStr) {
    return this.reverse ? resStr.split('').reverse().join('') : resStr;
  }

  isCharNotLetter(str) {
    return str.charCodeAt(0) < 65 || str.charCodeAt(0) > 90;
  }
}

module.exports = {
  VigenereCipheringMachine
};
