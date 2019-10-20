// 1.3 Given two strings, write a method to decide if one is a permutation of the other.

function stringPermutation(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }
  const str1Sorted = string1.split('').sort().join('');
  const str2Sorted = string2.split('').sort().join('');
  return str1Sorted === str2Sorted;
}

console.log(stringPermutation('cat', 'tac')); // true
console.log(stringPermutation('bob', 'bobby')); // false