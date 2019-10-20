// 3.2 How would you design a stack which, in addition to push and pop, also has a
// function min which returns the minimum element? Push, pop and min should all
// operate in 0(1) time.

function minStack(value) {
  const minArray = [];
  if (value < minArray[minArray.length - 1] && Stack.push) {
    minArray.push(value);
  } else if (minArray[minArray.length - 1] === value && Stack.pop) {
    minArray.pop();
  }
  return minArray[minArray.length - 1];
}

// minStack is called whenever the Stack is pushed or popped, in which it will update the minimum value in the stack

Stack.push(1); // min value in stack is 1
Stack.push(2); // min value in stack is 1
Stack.push(0); // min value in stack is 0
Stack.pop(); // min value in stack is 1