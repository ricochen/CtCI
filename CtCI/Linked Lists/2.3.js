// 2.3 Implement an algorithm to delete a node in the middle of a singly linked list, given only access to that node.

function deleteMiddle(node) {
  if (!node || !node.next) {
    return false;
  }
  const temp = node.next;
  node.value = temp.value;
  node.next = temp.next;
  return true;
}

console.log(deleteMiddle(middleNode)) // deletes the middle node from a LinkedList