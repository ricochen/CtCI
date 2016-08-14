// 2.2 Implement an algorithm to find the kth to last element of a singly linked list.

function kthLastElement(k, node) {
  if (k <= 1) {
    return node.tail;
  }
  let count = 0;
  let slow = node.head;
  let fast = node.head;
  while (fast) {
    if (count >= k) {
      slow = slow.next;
    }
    fast = fast.next;
    count++;
  }
  return count >= k ? slow : null;
}

console.log(kthLastElement(1, LinkedList)); // returns last element in LinkedList
console.log(kthLastElement(2, LinkedList)); // returns 2nd to last element in LinkedList