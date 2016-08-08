// 1.3 Given two strings, write a method to decide if one is a permutation of the other.

function stringPermutation(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }
  const str1Sorted = string1.split('').sort();
  const str2Sorted = string2.split('').sort();
  return str1Sorted.join('') === str2Sorted.join('');
}

console.log(stringPermutation('cat', 'tac')); // true
console.log(stringPermutation('bob', 'bobby')); // false