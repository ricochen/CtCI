// 2.5 You have two numbers represented by a linked list, where each node contains a
// single digit. The digits are stored in reverse order, such that the 1 's digit is at the head
// of the list. Write a function that adds the two numbers and returns the sum as a
// linked list.

function sumLinkedList(list1, list2) {
  if (!list1 || !list2) {
    return null;
  }
  let sum1 = 0;
  let sum2 = 0;
  let temp1 = list1;
  let temp2 = list2;
  let index = 0;
  while (list1 && list2) {
    if (list1) {
      sum1 += temp1.value * Math.pow(10, index);
      temp1 = temp1.next;
    }
    if (list2) {
      sum1 += temp2.value * Math.pow(10, index);
      temp2 = temp2.next;
    }
    index++;
  }
  const LinkedList = {};
  const size = String(sum1 + sum2);
  LinkedList.head = {value: Number(size[0]), next: null};
  LinkedList.tail = {value: Number(size[size.length - 1]), next: null};
  let current = LinkedList.head;
  for (let i = 1; i < size.length; i++) {
    let node = {value: size[i], next: null};
    current.next = node;
    current = node;
  }
  return LinkedList;
}

console.log(sumLinkedList(LinkedList1, LinkedList2)); // returns a LinkedList with four nodes: 1, 0, 9, 0