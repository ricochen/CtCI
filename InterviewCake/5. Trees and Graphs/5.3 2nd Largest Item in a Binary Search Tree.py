"""
Write a function to find the 2nd largest element in a binary search tree. ↴

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


def find_largest(root):
    current = root

    while current:
        if current.right:
            current = current.right

    return current.value


def find_second_largest(root):
    if root is None or (root.left is None and root.right is None):
        raise ValueError('Tree must have at least 2 nodes')

    current = root

    while current:
        if current.left and not current.right:
            return find_largest(current.left)

        if current.right and not current.right.left and not current.right.right:
            return current.value

        current = current.right
