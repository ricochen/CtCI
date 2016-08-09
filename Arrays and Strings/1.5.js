// 1.5 Implement a method to perform basic string compression using the counts of
// repeated characters. For example, the string aabcccccaaa would become
// a2blc5a3. If the "compressed" string would not become smaller than the original
// string, your method should return the original string.

function stringCompression(string) {
  let result = '';
  let count = 1;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i+1]) {
      count++;
    } else {
      result += string[i] + count;
      count = 1;
    }
  }
  return result.length < string.length ? result : string;
}

console.log(stringCompression('aaabbccca')); // a3b2c3a1
console.log(stringCompression('abc')); // abc