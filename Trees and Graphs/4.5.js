// 4.5 Impement a function to check if a binary tree is a binary search tree.

function checkBST(tree) {
  if (tree.value === null) {
    return null;
  }
  const treeArr = [];
  let result = true;
  function recurse(node, index) {
    treeArr.push(node.value);
    if (treeArr[index - 1] > treeArr[index]) {
      result = false;
      return;
    }
    if (node.left) {
      recurse(node.left, index + 1);
    }
    if (node.right) {
      recurse(node.right, index + 1);
    }
  }
  recurse(tree, 0);
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
    value: 6,
    left: { value: 5, left: null, right: null },
    right: { value: 7, left: null, right: null }
  }
};
console.log(checkBST(binaryTree)); // false