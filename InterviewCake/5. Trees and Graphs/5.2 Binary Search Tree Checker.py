"""
Write a function to check that a binary tree ↴ is a valid binary search tree. ↴

Here's a sample binary tree node class:

  class BinaryTreeNode(object):

    def __init__(self, value):
        self.value = value
        self.left  = None
        self.right = None

    def insert_left(self, value):
        self.left = BinaryTreeNode(value)
        return self.left

    def insert_right(self, value):
        self.right = BinaryTreeNode(value)
        return self.right
"""


def is_binary_search_tree(root):
    stack = [(root, -float('inf'), float('inf'))]

    while stack:
        node, lower_bound, upper_bound = stack.pop()

        if node.value >= upper_bound or node.value <= lower_bound:
            return False

        if node.left:
            stack.append((node.left, lower_bound, node.value))
        if node.right:
            stack.append((node.right, node.value, upper_bound))

    return True
