// 9.3 A magic index in an array A[l.. .n-l] is defined to be an index such that A[i] =
// i. Given a sorted array of distinct integers, write a method to find a magic index, if
// one exists, in array A.

function magicIndex(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === i) {
      return i;
    }
  }
  return -1;
}

console.log(magicIndex([9,4,3,6,8,5])); // 5