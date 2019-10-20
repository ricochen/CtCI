"""
Find a duplicate, Space Edition™.

We have a list of integers, where:

The integers are in the range 1..n1..n
The list has a length of n+1n+1
It follows that our list has at least one integer which appears at least twice. But it may have several duplicates, and
each duplicate may appear more than twice.

Write a function which finds an integer that appears more than once in our list. (If there are multiple duplicates, you
only need to find one of them.)

We're going to run this function on our new, super-hip MacBook Pro With Retina Display™. Thing is, the damn thing came
with the RAM soldered right to the motherboard, so we can't upgrade our RAM. So we need to optimize for space!
"""


def find_duplicates(list_of_ints, n):
    list_of_ints = sorted(list_of_ints)

    for i, v in enumerate(list_of_ints):
        if v == list_of_ints[i + 1]:
            return v


print(find_duplicates([4, 2, 3, 3, 2, 1], 6))