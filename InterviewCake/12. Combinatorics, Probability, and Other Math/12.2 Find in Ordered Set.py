"""
Suppose we had a list ↴ of n integers sorted in ascending order. How quickly could we check if a given integer is in the list?
"""


def f(nums, target):
    floor = 0
    ceiling = len(nums) - 1

    while floor <= ceiling:
        mid = floor + (ceiling - floor) // 2

        if target == nums[mid]:
            return mid
        elif target < nums[mid]:
            ceiling = mid - 1
        else:
            floor = mid + 1

    return floor
