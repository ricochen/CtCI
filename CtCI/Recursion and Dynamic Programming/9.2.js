// 9.2 Imagine a robot sitting on the upper left corner of an X by Y grid. The robot can only
// move in two directions: right and down. How many possible paths are there for the
// robot to go from (0, 0) to (X, Y)?

function countPaths(x, y) {
  let result = 0;
  function recurse(x2, y2) {
    if (x2 === x && y2 === y) {
      result++;
      return;
    } else if (x2 > x || y2 > y) {
      return;
    }
    recurse(x2 + 1, y2);
    recurse(x2, y2 + 1);
  }
  recurse(0, 0);
  return result;
}

console.log(countPaths(2, 1)); // 3
console.log(countPaths(2, 4)); // 15