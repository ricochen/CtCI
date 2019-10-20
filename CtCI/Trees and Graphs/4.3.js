// 4.3 Given a sorted (increasing order) array with unique integer elements, write an algorithm
// to create a binary search tree with minimal height.

function minBinarySearchTree(array, start = 0, end = array.length - 1) {
  if (start > end) {
    return null;
  }
  const mid = Math.round((start + end) / 2);
  const node = {value: array[mid]};
  node.left = minBinarySearchTree(array, start, mid - 1);
  node.right = minBinarySearchTree(array, mid + 1, end);
  return node;
}

console.log(minBinarySearchTree([1,2,3,4,5,6,7]));
/*{
  value: 4,
  left: {
    value: 2,
    left: { value: 1, left: null, right: null },
    right: { value: 3, left: null, right: null }
  },
  right: {
    value: 6,
    left: { value: 5, left: null, right: null },
    right: { value: 7, left: null, right: null }
  }
}*/