// 4.4 Given a binary tree, design an algorithm which creates a linked list of all the nodes at
// each depth (e.g., if you have a tree with depth D, you'll have D linked lists).

function linkedListBST(tree) {
  if (tree.value === null) {
    return null;
  }
  const queue = [];
  queue.push({value: tree.value, next: null});
  function recurse(node, depth) {
    if (node.left) {
      const temp = {};
      temp[depth] = node.left;
      queue.push(temp);
      recurse(node.left, depth + 1);
    }
    if (node.right) {
      const temp = {};
      temp[depth] = node.right;
      queue.push(temp);
      recurse(node.right, depth + 1);
    }
  }
  recurse(tree, 1);
  const result = [];
  result.push(queue.shift());
  const len = queue.length;
  function recurse2(depth) {
    if (result.length === len) {
      return;
    }
    let temp = [];
    let previous;
    for (let i = 0; i < queue.length; i++) {
      if (queue[i]) {
        if (queue[i][depth]) {
          const node = {value: queue[i][depth].value, next: null};
          if (previous) {
            previous.next = node;
          }
          temp.push(node);
          previous = temp[i];
          queue.splice(i, 1);
          }
      }
    }
    result.push(temp);
    recurse2(depth + 1);
  }
  recurse2(1);
  return result;
}

const binaryTree = {
  value: 1,
  left: {
    value: 2,
    left: {value: 4, left: null, right: null},
    right: {value: 5, left: null, right: null}
  },
  right: {
    value: 3,
    left: {value: 6, left: null, right: null},
    right: {value: 7, left: null, right: null}
  }
};
console.log(linkedListBST(binaryTree));