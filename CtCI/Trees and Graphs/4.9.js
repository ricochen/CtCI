// 4.9 You are given a binary tree in which each node contains a value. Design an algorithm
// to print all paths which sum to a given value. The path does not need to start
// or end at the root or a leaf.

function sumBinaryTree(tree, sum) {
  if (tree.value === null) {
    return null
  }
  if (tree.value === sum) {
    return tree;
  }
  const result = [];
  function recurse(path, node, num) {
    num += node.value;
    path.push(node.value);
    if (num === sum) {
      result.push(path);
      return;
    }
    if (node.left) {
      recurse(path.slice(), node.left, num);
    }
    if (node.right) {
      recurse(path.slice(), node.right, num);
    }
  }
  recurse([], tree, 0);
  return result;
}

const binaryTree = {
  value: 4,
  left: {
    value: 2,
    left: { value: 1, left: null, right: null },
    right: { value: 3, left: null, right: null }
  },
  right: {
    value: 3,
    left: { value: 2, left: null, right: null },
    right: { value: 3, left: null, right: null }
  }
};
console.log(sumBinaryTree(binaryTree, 9)); // [[4,2,3],[4,3,2]]