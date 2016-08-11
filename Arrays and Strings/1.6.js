// 1.6 Given an image represented by an NxN matrix, where each pixel in the image is 4
// bytes, write a method to rotate the image by 90 degrees.

// input
// 1  2  3  4
// 5  6  7  8
// 9  10 11 12
// 13 14 15 16

// output
// 13 9  5  1
// 14 10 6  2
// 15 11 7  3
// 16 12 8  4

function rotateMatrix(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = array.length - 1; j >= 0; j--) {
      if (!result[i]) {
        result[i] = [];
      }
      result[i].push(array[j][i]);
    }
  }
  return result;
}

console.log(rotateMatrix([ [1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16] ]));
// [ [13, 9, 5, 1], [14, 10, 6, 2], [15, 11, 7, 3], [16, 12, 8, 4] ]