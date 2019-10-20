// 3.5 Implement a MyQueue class which implements a queue using two stacks.

class MyQueue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(value) {
    this.stack1.push(value);
  }

  dequeue() {
    if (this.stack1.length === 0) {
      return null;
    }
    const n = this.stack1.length;
    for (let i = 0; i < n; i++) {
      this.stack2.push(this.stack1.pop());
    }
    const result = this.stack2.pop();
    for (let i = 0; i < n - 1; i++) {
      this.stack1.push(this.stack2.pop());
    }
    return result;
  }

  size() {
    return this.stack1.length;
  }
}

const queue = new MyQueue();
queue.enqueue(1);
queue.enqueue(2);
queue.dequeue(); // 1
queue.enqueue(3);
console.log(queue); // [2, 3]