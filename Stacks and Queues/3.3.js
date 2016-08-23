// 3.3 Imagine a (literal) stack of plates. If the stack gets too high, it might topple. Therefore,
// in real life, we would likely start a new stack when the previous stack exceeds some
// threshold. Implement a data structure SetOfStacks that mimics this. SetOf-
// Stacks should be composed of several stacks and should create a new stack once
// the previous one exceeds capacity. SetOfStacks.push() and SetOfStacks.
// pop () should behave identically to a single stack (that is, pop () should return the
// same values as it would if there were just a single stack).

class SetOfStacks {
  constructor() {
    this.storage1 = {};
    this.stackCount = 1;
    this.currentCount = 0;
    this.count = 0;
    this.max = 2;
  }

  push(value) {
    if (this.currentCount < this.max) {
      this[`storage${this.stackCount}`][this.currentCount] = value;
      this.count++;
      this.currentCount++;
    } else {
      this.currentCount = 0;
      this.stackCount++;
      this[`storage${this.stackCount}`] = {};
      this.push(value);
    }
  }

  pop() {
    if (this.count === 0) {
      return null;
    }
    this.currentCount--;
    const result = this[`storage${this.stackCount}`][this.currentCount];
    delete this[`storage${this.stackCount}`][this.currentCount];
    this.count--;
    if (this.currentCount === 0) {
      delete this[`storage${this.stackCount}`];
      this.stackCount--;
      this.currentCount = this.max;
    }
    return result;
  }

  size() {
    return this.count;
  }
}

const Stack = new SetOfStacks();
Stack.push(1);
Stack.push(2);
Stack.push(3); // creates a new stack storage because the max is 2
Stack.push(4);
Stack.pop();
Stack.pop();
Stack.pop();
console.log(Stack.size()); // 1
console.log(Stack); // works similarly to a regular stack, except there are multiple stacks in this Stack