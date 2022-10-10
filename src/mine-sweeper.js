const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper(matrix) {
  let resMatrix = [];
  
  for (let i = 0; i < matrix.length; i++) {
    resMatrix[i] = [];
    for (let j = 0; j < matrix[i].length; j++) {
      resMatrix[i][j] = 0;
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j]) {
        for (let ik = i - 1; ik <= i + 1; ik++) {
          for (let jk = j - 1; jk <= j + 1; jk++) {
            if (ik < 0 || jk < 0) continue;
            if (ik == i && jk == j) continue;
            resMatrix[ik][jk]++;
          }
        }
      }
    }
  }
  return resMatrix;
}

module.exports = {
  minesweeper
};
