// 1.2 Implement a function which reverses a string.

function stringReverse(string) {
  const result = string.split('');
  const len = result.length - 1;
  for (let i = 0; i < len / 2; i++) {
    [result[i], result[len - i]] = [result[len - i], result[i]];
  }
  return result.join('');
}

console.log(stringReverse('hello')); // olleh
console.log(stringReverse('123456')); // 654321