// 3.6 Write a program to sort a stack in ascending order (with biggest items on top).
// You may use at most one additional stack to hold items, but you may not copy the
// elements into any other data structure (such as an array). The stack supports the
// following operations: push, pop, peek, and isEmpty.

function sortAscending(stack1) {
  const stack2 = [];
  while (stack1.length) {
    const temp = stack1.pop();
    while (stack2[stack2.length - 1] > temp) {
      stack1.push(stack2.pop());
    }
    stack2.push(temp);
  }
  return stack2;
}

const Stack = [4,3,1,2,9];
console.log(sortAscending(Stack)); // sorts the Stack [1,2,3,4,9]