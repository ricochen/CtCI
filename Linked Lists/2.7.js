// 2.7 Implement a function to check if a linked list is a palindrome.

function palindromeLinkedList(list) {
  const stack = [];
  let current = list.head;
  while (current) {
    stack.push(current.value);
    current = current.next;
  }
  const middle = Math.floor(stack.length / 2);
  current = list.head;
  while (current) {
    const reverse = stack.pop();
    if (current.value !== reverse) {
      return false;
    } else if (stack.length === middle) {
      return true;
    }
    current = current.next;
  }
}

console.log(palindromeLinkedList(LinkedList)); // returns true if the LinkedList is a palindrome, otherwise returns false