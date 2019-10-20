"""
Write a function that takes a list of characters and reverses the letters in place. ↴
"""

def f(input):
    length = len(input)

    for i in range(length//2):
        input[i], input[length - i - 1] = input[length - i - 1], input[i]

    return input

print(f(["h","e","l","l","o"]))
print(f(["H","a","n","n","a","h"]))