"""
A building has 100 floors. One of the floors is the highest floor an egg can be dropped from without breaking.

If an egg is dropped from above that floor, it will break. If it is dropped from that floor or below, it will be completely undamaged and you can drop the egg again.

Given two eggs, find the highest floor an egg can be dropped from without breaking, with as few drops as possible.
"""


def eggs(egg1, egg2):
    drops = 0
    floors = [0 for _ in range(K + 1)]

    while floors[K] < N:

        for eggs in range(K, 0, -1):
            floors[eggs] += 1 + floors[eggs - 1]
        drops += 1

    return drops
