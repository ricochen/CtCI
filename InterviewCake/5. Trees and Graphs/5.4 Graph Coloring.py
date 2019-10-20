"""
Given an undirected graph ↴ with maximum degree ↴ DD, find a graph coloring ↴ using at most D+1D+1 colors.

class GraphNode:

def __init__(self, label):
    self.label = label
    self.neighbors = set()
    self.color = None


a = GraphNode('a')
b = GraphNode('b')
c = GraphNode('c')

a.neighbors.add(b)
b.neighbors.add(a)
b.neighbors.add(c)
c.neighbors.add(b)

graph = [a, b, c]
"""


def color_graph(graph, colors):
    for node in graph:
        if node in node.neighbors:
            raise Exception('Legal coloring impossible for node with loop: %s' %
                            node.label)

        illegal_colors = set([
            neighbor.color
            for neighbor in node.neighbors
            if neighbor.color
        ])

        for color in colors:
            if color not in illegal_colors:
                node.color = color
                break


print(color_graph(['a', 'b', 'c'], ['red', 'green', 'blue', 'yellow']))
