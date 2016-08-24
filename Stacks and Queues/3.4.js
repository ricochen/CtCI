// 3.4 In the classic problem of the Towers of Hanoi, you have 3 towers and N disks of
// different sizes which can slide onto any tower. The puzzle starts with disks sorted
// in ascending order of size from top to bottom (i.e., each disk sits on top of an even
// larger one). You have the following constraints:
// (T) Only one disk can be moved at a time.
// (2) A disk is slid off the top of one tower onto the next rod.
// (3) A disk can only be placed on top of a larger disk.
// Write a program to move the disks from the first tower to the last using Stacks.

function TowersofHanoi(tower1) {
  const n = tower1.length;
  if (n === 0) {
    return;
  }
  const tower2 = [];
  const tower3 = [];
  for (let i = 0; i < n; i++) {
    tower2.push(tower1.pop());
  }
  for (let i = 0; i < n; i++) {
    tower3.push(tower2.pop());
  }
  return tower3;
}

const tower1 = [1,2,3,4,5];
console.log(TowersofHanoi(tower1)); // tower3 is now [1,2,3,4,5]
console.log(tower1); // [] tower1 is empty