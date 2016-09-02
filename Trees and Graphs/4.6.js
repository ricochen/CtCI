// 4.6 Write an algorithm to find the 'next' node (i.e., in-order successor) of a given node in
// a binary search tree. You may assume that each node has a link to its parent.

function nextNodeBST(node) {
  if (node.value === null) {
    return null;
  }
  if (node.right) {
    return leftMostChild(node.right);
  } else {
    let temp = node;
    let parent = temp.parent;
    while (parent && parent.left !== temp) {
      temp = parent;
      parent = parent.parent;
    }
    return parent;
  }
}

function leftMostChild(node) {
  if (node.value === null) {
    return null;
  }
  while (node.left) {
    node = node.left;
  }
  return node;
}

console.log(nextNodeBST(node));