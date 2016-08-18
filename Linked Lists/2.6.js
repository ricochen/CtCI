// 2.6 Given a circular linked list, implement an algorithm which returns the node at the
// beginning of the loop.

function circularLinkedList(list) {
  let slow = linkedList;
  let fast = linkedList;
  while (fast && fast.next) {
   slow = slow.next;
   fast = fast.next.next;
   if (slow === fast) {
     break;
   }
  }
  if (fast === null || fast.next === null) {
    return null;
  }
  slow = linkedList;
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }
  return fast;
}

console.log(circularLinkedList(LinkedList)); // returns the node at the beginning of the loop in the circular LinkedList