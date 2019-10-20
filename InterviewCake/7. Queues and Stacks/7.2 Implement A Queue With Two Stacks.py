"""
Implement a queue ↴ with 2 stacks. ↴ Your queue should have an enqueue and a dequeue method and it should be "first in first out" (FIFO).

Optimize for the time cost of mm calls on your queue. These can be any mix of enqueue and dequeue calls.

Assume you already have a stack implementation and it gives O(1)O(1) time push and pop.
"""


class Queue:

    def __init__(self):
        self.in_stack = []
        self.out_stack = []

    def enqueue(self, item):
        self.in_stack.append(item)

    def dequeue(self):
        if len(self.out_stack) == 0:

            if len(self.in_stack) == 0:
                raise IndexError("Can't dequeue from empty queue!")

            while self.in_stack:
                last_item = self.in_stack.pop()
                self.out_stack.append(last_item)

        return self.out_stack.pop()
