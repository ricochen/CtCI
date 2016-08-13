// 1.8 Assume you have a method isSubstring which checks if one word is a substring
// of another. Given two strings, string1 and string2, write code to check if string2 is a rotation of string1
// using only one call to isSubstring (e.g., "waterbottLe" is a rotation of "erbottLewat").

function isSubstring(string1, string2) {
  if (string1.indexOf(string2) === -1) {
    return false;
  }
  return true;
}

function stringRotation(string1, string2) {
  if (string1.length !== string2.length || !string1 || !string2) {
    return false;
  }
  return isSubstring(string1 + string1, string2);
}

console.log(stringRotation('erbottlewat', 'waterbottle')); // true
console.log(stringRotation('monel', 'lemon')); // false