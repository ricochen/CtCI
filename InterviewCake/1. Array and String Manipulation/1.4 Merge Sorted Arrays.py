"""
In order to win the prize for most cookies sold, my friend Alice and I are going to merge our Girl Scout Cookies orders and enter as one unit.

Each order is represented by an "order id" (an integer).

We have our lists of orders sorted numerically already, in lists. Write a function to merge our lists of orders into one sorted list.

For example:

  my_list     = [3, 4, 6, 10, 11, 15]
alices_list = [1, 5, 8, 12, 14, 19]

# Prints [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]
print(merge_lists(my_list, alices_list))
"""

def f(input1, input2):
    idx1 = 0
    idx2 = 0
    output = []
    length1 = len(input1)
    length2 = len(input2)

    while len(output) < (length1 + length2):
        input1done = idx1 >= length1
        input2done = idx2 >= length2

        if not input1done and (input2done or input1[idx1] < input2[idx2]):
            smaller = input1[idx1]
            idx1 += 1
        else:
            smaller = input2[idx2]
            idx2 += 1

        output.append(smaller)

    return output

print(f([3, 4, 6, 10, 11, 15], [1, 5, 8, 12, 14, 19]))