// 4.1 Implement a function to check if a binary tree is balanced. For the purposes of this
// question, a balanced tree is defined to be a tree such that the heights of the two
// subtrees of any node never differ by more than one.

function getHeight(root) {
  if (root == null) {
    return 0;
  }
  return Math.max(getHeight(root.left), getHeight(root.right)) + 1;
}

function isBalanced(root) {
  if (root == null) {
    return true;
  }
  const heightDiff = getHeight(root.left) - getHeight(root.right);
  if (Math.abs(heightDiff) > 1) {
    return false;
  }
  return isBalanced(root.left) && isBalanced(root.right);
}

const binaryTree = {
  left: {left: {left: {}}},
  right: {}
};
console.log(isBalanced(binaryTree)); // false