// 1.7 Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.

// input
// 1  2  3  0
// 5  6  7  8
// 9  0  11 12
// 13 14 15 16

// output
// 0  0  0  0
// 5  0  7  0
// 0  0  0  0
// 13 0  15 0

function matrix0(array) {
  let rows = [];
  let columns = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === 0) {
        rows[i] = true;
        columns[j] = true;
      }
    }
  }
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (rows[i] || columns[j]) {
        array[i][j] = 0;
      }
    }
  }
  return array;
}

console.log(matrix0([ [1, 2, 3, 0], [5, 6, 7, 8], [9, 0, 11, 12], [13, 14, 15, 16] ]));
// [ [0, 0, 0, 0], [5, 0, 7, 0], [0, 0, 0, 0], [13, 0, 15, 0] ]