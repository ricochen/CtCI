"""
Given a list of integers, find the highest product you can get from three of the integers.

The input list_of_ints will always have at least three integers.
"""


def highest_product_of_3(list_of_ints):
    if len(list_of_ints) < 3:
        raise ValueError('Less than 3 items!')

    highest_product_of_2 = list_of_ints[0] * list_of_ints[1]
    lowest_product_of_2 = list_of_ints[0] * list_of_ints[1]
    highest = max(list_of_ints[0], list_of_ints[1])
    lowest = min(list_of_ints[0], list_of_ints[1])
    highest_product_of_3 = list_of_ints[0] * list_of_ints[1] * list_of_ints[2]

    for i, v in enumerate(list_of_ints[2:]):
        highest_product_of_3 = max(highest_product_of_3, highest_product_of_2 * v, lowest_product_of_2 * v)
        highest_product_of_2 = max(highest_product_of_2, highest * v, lowest * v)
        lowest_product_of_2 = min(lowest_product_of_2, highest * v, lowest * v)
        highest = max(highest, i)
        lowest = min(lowest, i)

    return highest_product_of_3


print(highest_product_of_3([1, 10, -5, 1, -100]))
