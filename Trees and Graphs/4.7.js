// 4.7 Design an algorithm and write code to find the first common ancestor of two nodes
// in a binary tree. Avoid storing additional nodes in a data structure. NOTE: This is not
// necessarily a binary search tree.

function firstCommonAncestor(tree, node1, node2) {
  if (tree.value === null) {
    return null;
  }
  if (tree === node1 || tree === node2) {
    return tree;
  }
  const node1Left = covers(tree.left, node1);
  const node2Left = covers(tree.left, node2);
  if (node1Left !== node2Left) {
    return tree;
  }
  const result = node1Left ? tree.left : tree.right;
  return firstCommonAncestor(result, node1, node2);
}

function covers(root, node) {
  if (root === null) {
    return false;
  }
  if (root === node) {
    return true;
  }
  return covers(root.left, node) || covers(root.right, node);
}

function firstCommonAncestorHelper(tree, node1, node2) {
  if (!covers(tree, node1) || !covers(tree, node2)) {
    return null;
  }
  return firstCommonAncestor(tree, node1, node2);
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
console.log(firstCommonAncestor(binaryTree.left.left, binaryTree.left.right));