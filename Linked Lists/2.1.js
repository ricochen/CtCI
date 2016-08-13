// 2.1 Write code to remove duplicates from an unsorted linked list.
// How would you solve this problem if a temporary buffer is not allowed?

function removeDuplicates(node) {
  if (!node.head || !node.head.next) {
    return;
  }
  const map = {};
  let previous = node.head;
  let current = node.head.next;
  map[previous.value] = true;
  while (current) {
    if (map[current.value]) {
      previous.next = current.next;
      node.size--;
    } else {
      map[current.value] = true;
      previous = current;
    }
    current = current.next;
  }
}

function removeDuplicates2(node) {
  if (!node.head || !node.head.next) {
    return;
  }
  let slow = node.head;
  while (current) {
    let runner = current;
    while (runner) {
      if (runner.next.value === current.value) {
        runner.next = runner.next.next;
      } else {
        runner = runner.next;
      }
    }
    current = current.next;
  }
}

console.log(removeDuplicates(LinkedList)); // removes duplicates from the LinkedList
console.log(removeDuplicates2(LinkedList)); // removes duplicates from the LinkedList