"""
You are a renowned thief who has recently switched from stealing precious metals to stealing cakes because of the insane
profit margins. You end up hitting the jackpot, breaking into the world's largest privately owned stock of cakes—the
vault of the Queen of England.

While Queen Elizabeth has a limited number of types of cake, she has an unlimited supply of each type.

Each type of cake has a weight and a value, stored in a tuple with two indices:

An integer representing the weight of the cake in kilograms
An integer representing the monetary value of the cake in British shillings
For example:

  # Weighs 7 kilograms and has a value of 160 shillings
(7, 160)

# Weighs 3 kilograms and has a value of 90 shillings
(3, 90)

You brought a duffel bag that can hold limited weight, and you want to make off with the most valuable haul possible.

Write a function max_duffel_bag_value() that takes a list of cake type tuples and a weight capacity, and returns the
maximum monetary value the duffel bag can hold.

For example:

  cake_tuples = [(7, 160), (3, 90), (2, 15)]
capacity    = 20

# Returns 555 (6 of the middle type of cake and 1 of the last type of cake)
max_duffel_bag_value(cake_tuples, capacity)

Weights and values may be any non-negative integer. Yes, it's weird to think about cakes that weigh nothing or duffel
bags that can't hold anything. But we're not just super mastermind criminals—we're also meticulous about keeping our
algorithms flexible and comprehensive.
"""


def max_duffel_bag_value(list_of_cake_tuples, weight_capacity):
    ratios = []
    remaining_weight = weight_capacity
    total_money = 0

    for cake_tuple in list_of_cake_tuples:
        weight, money = cake_tuple
        if weight == 0:
            if money != 0:
                return float('inf')
            ratios.append(0)
            continue
        ratio = money / weight
        ratios.append(ratio)

    while remaining_weight != 0:
        current_largest_ratio = 0
        current_weight = 0
        current_money = 0
        for i, cake_tuple in enumerate(list_of_cake_tuples):
            weight, money = cake_tuple
            if remaining_weight - weight > 0 and ratios[i] > current_largest_ratio:
                current_largest_ratio = ratios[i]
                current_weight = weight
                current_money = money
            elif remaining_weight - weight == 0:
                current_weight = weight
                current_money = money
                break

        remaining_weight -= current_weight
        total_money += current_money

    return total_money

# Returns 555 (6 of the middle type of cake and 1 of the last type of cake)
print(max_duffel_bag_value([(7, 160), (3, 90), (2, 15), (0, 0)], 20))