// 4.2 Given a directed graph, design an algorithm to find out whether there is a route
// between two nodes.

function twoNodesRoute(graph, node1, node2) {
  if (graph[node1].indexOf(node2) !== -1 && graph[node2].indexOf(node1) !== -1) {
    return true;
  }
  return false;
}

const graph = {
  1: [2, 3],
  2: [1],
  3: [1]
};
console.log(twoNodesRoute(graph, 1, 2)); // true
console.log(twoNodesRoute(graph, 2, 3)); // false