"""
You decide to test if your oddly-mathematical heating company is fulfilling its All-Time Max, Min, Mean and Mode Temperature Guarantee™.

Write a class TempTracker with these methods:

insert()—records a new temperature
get_max()—returns the highest temp we've seen so far
get_min()—returns the lowest temp we've seen so far
get_mean()—returns the mean ↴ of all temps we've seen so far
get_mode()—returns a mode ↴ of all temps we've seen so far
Optimize for space and time. Favor speeding up the getter methods get_max(), get_min(), get_mean(), and get_mode() over speeding up the insert() method.

get_mean() should return a float, but the rest of the getter methods can return integers. Temperatures will all be inserted as integers. We'll record our temperatures in Fahrenheit, so we can assume they'll all be in the range 0..1100..110.

If there is more than one mode, return any of the modes.
"""


class TempTracker(object):

    def __init__(self):
        self.min_temp = float('inf')
        self.max_temp = float('-inf')

        self.number_of_readings = 0
        self.total_sum = 0.0
        self.mean = None

        self.occurrences = [0] * 111
        self.mode = None

    def insert(self, temperature):
        if temperature > self.max_temp:
            self.max_temp = temperature
        if temperature < self.min_temp:
            self.min_temp = temperature

        self.number_of_readings += 1
        self.total_sum += temperature
        self.mean = self.total_sum / self.number_of_readings

        self.occurrences[temperature] += 1
        if self.occurrences[temperature] > self.occurrences[self.mode]:
            self.mode = temperature

    def get_max(self):
        return self.max_temp

    def get_min(self):
        return self.min_temp

    def get_mean(self):
        return self.mean

    def get_mode(self):
        return self.mode
