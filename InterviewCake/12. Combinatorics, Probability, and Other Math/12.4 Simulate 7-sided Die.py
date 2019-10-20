"""
You have a function rand5() that generates a random integer from 1 to 5. Use it to write a function rand7() that generates a random integer from 1 to 7.

rand5() returns each integer with equal probability. rand7() must also return each integer with equal probability.
"""

import random


def rand5():
    return random.randint(1, 6)


def rand7():
    while True:
        roll1 = rand5()
        roll2 = rand5()
        outcome_number = (roll1 - 1) * 5 + (roll2 - 1) + 1

        if outcome_number > 21:
            continue

        return outcome_number % 7 + 1
