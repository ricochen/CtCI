"""
Write a function for doing an in-place ↴ shuffle of a list.

The shuffle must be "uniform," meaning each item in the original list must have the same probability of ending up in each spot in the final list.

Assume that you have a function get_random(floor, ceiling) for getting a random integer that is >= floor and <= ceiling.
"""

import random


def in_place_shuffle(num_list):
    length_num_list = len(num_list)
    floor = 0
    ceiling = length_num_list - 1
    random_indexes = []

    while len(random_indexes) < length_num_list:
        index = random.randint(floor, ceiling)
        if index not in random_indexes:
            random_indexes.append(index)

    for i, v in enumerate(num_list):
        index = random_indexes.pop()
        num_list[i], num_list[index] = num_list[index], num_list[i]

    return num_list


print(in_place_shuffle([1, 2, 3, 4, 5]))