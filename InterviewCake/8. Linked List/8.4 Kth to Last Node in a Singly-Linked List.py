"""
You have a linked list ↴ and want to find the kkth to last node.

Write a function kth_to_last_node() that takes an integer kk and the head_node of a singly-linked list, and returns the kkth to last node in the list.

For example:

  class LinkedListNode:

    def __init__(self, value):
        self.value = value
        self.next  = None


a = LinkedListNode("Angel Food")
b = LinkedListNode("Bundt")
c = LinkedListNode("Cheese")
d = LinkedListNode("Devil's Food")
e = LinkedListNode("Eccles")

a.next = b
b.next = c
c.next = d
d.next = e

# Returns the node with value "Devil's Food" (the 2nd to last node)
kth_to_last_node(2, a)
"""


def kth_to_last_node(k, head):
    slow = head
    fast = head

    for _ in range(k):
        if not fast.next:
            raise ValueError('k is larger than the length of the linked list: %s' % k)
        fast = fast.next

    while fast:
        slow = slow.next
        fast = fast.next

    return slow
