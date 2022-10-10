const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(namesArr) {
  if (!Array.isArray(namesArr)) { return false; }
  console.log(namesArr);
  let rawChars = [];
  for (let name of namesArr) {
    if (typeof name === 'string') {
      rawChars.push(name.trim(' ')[0]);
    }
  }
  for (let i = 0; i < rawChars.length; i++) {
    rawChars[i] = rawChars[i].toUpperCase()
  }
  rawChars.sort();

  let resStr = '';
  for (let char of rawChars) {
    resStr += char;
  }
  return resStr.toUpperCase();
}

module.exports = {
  createDreamTeam
};
