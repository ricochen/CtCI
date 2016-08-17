// 2.4 Write code to partition a linked list around a value x, such that all nodes less than x
// come before all nodes greater than or equal to x.

function partitionLinkedList(x, node) {
  if (!node || !node.next) {
    return false;
  }
  let current = node.head;
  const map = {};
  while (current) {
    if (current.value < x) {
      map[current] = true;
    } else if (current.value >= x) {
      if (!map.tail || current.value > map.tail.value) {
        map.tail = current;
      }
    }
    current = current.next;
  }
  for (let nodeKey in map) {
    if (nodeKey !== 'tail') {
      nodeKey.next = nodeKey.head;
      node.head = nodeKey;
    } else if (nodeKey === 'tail') {
      node.tail = map.tail;
      node.tail.next = null;
    }
  }
}

console.log(partitionLinkedList(2, LinkedList)); // partitions the LinkedList so that all nodes < 2 come before all nodes >= 2