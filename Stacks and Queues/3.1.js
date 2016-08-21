// 3.1 Describe how you could use a single array to implement three stacks.

function threeStackArray() {
  const array = [];
  const stackSize = 100;
  const stackPointer = {1: -1, 2: -1, 3: -1};

  return {
    push,
    pop,
    size
  };

  function push(stackNum, value) {
    if (stackPointer[stackNum] + 1 >= stackSize) {
      return 'Out of space';
    }
    stackPointer[stackNum]++;
    array[absTopOfStack(stackNum)] = value;
  }

  function pop(stackNum) {
    if (stackPointer[stackNum] === -1) {
      return 'Trying to pop an empty stack';
    }
    const value = array[absTopOfStack(stackNum)];
    array[absTopOfStack(stackNum)] = 0;
    stackPointer[stackNum]--;
    return value;
 }

  function size() {
    return array.length;
  }

  function absTopOfStack(stackNum) {
    return stackNum * stackSize + stackPointer[stackNum];
  }
}

console.log(threeStackArray().push(1, 1)); // adds 1 into the first stack
console.log(threeStackArray().size()); // returns the length of the array
console.log(threeStackArray().pop()); // returns the last value added into the array