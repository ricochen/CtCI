// 1.1 Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures?

function uniqueCharacters(string) {
  if (string.length > 256) {
    return false;
  }
  const map = {};
  for (let i = 0; i < string.length; i++) {
    if (map[string[i]]) {
      return false;
    }
    map[string[i]] = true;
  }
  return true;
}

function uniqueCharacters2(string) {
  if (string.length > 256) {
    return false;
  }
  for (let i = 0; i < string.length; i++) {
    if (string.indexOf(string[i]) !== string.lastIndexOf(string[i])) {
      return false;
    }
  }
  return true;
}

console.log(uniqueCharacters('asdf')); // true
console.log(uniqueCharacters('asdff')); // false

console.log(uniqueCharacters2('asdf')); // true
console.log(uniqueCharacters2('asdff')); // false