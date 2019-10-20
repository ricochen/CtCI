"""
You're working on a secret team solving coded transmissions.

Your team is scrambling to decipher a recent message, worried it's a plot to break into a major European National Cake Vault.
The message has been mostly deciphered, but all the words are backward! Your colleagues have handed off the last step to you.

Write a function reverse_words() that takes a message as a list of characters and reverses the order of the words in place. ↴

Why a list of characters instead of a string?

The goal of this question is to practice manipulating strings in place. Since we're modifying the message, we need a
mutable ↴ type like a list, instead of Python 3.6's immutable strings.

For example:

  message = [ 'c', 'a', 'k', 'e', ' ',
            'p', 'o', 'u', 'n', 'd', ' ',
            's', 't', 'e', 'a', 'l' ]

reverse_words(message)

# Prints: 'steal pound cake'
print(''.join(message))

When writing your function, assume the message contains only letters and spaces, and all words are separated by one space.
"""


def f(input):
    length = len(input)

    for i in range(length//2):
        input[i], input[length - i - 1] = input[length - i - 1], input[i]

    idx1 = 0
    for i, v in enumerate(input):
        if v == ' ' or i == length - 1:
            if i == length - 1:
                i += 1
            for j in range((i-idx1)//2):
                input[idx1 + j], input[i - j - 1] = input[i - j - 1], input[idx1 + j]

            idx1 = i + 1

    return input

print(f([ 't', 'h', 'e', ' ', 'e', 'a', 'g', 'l', 'e', ' ',
  'h', 'a', 's', ' ', 'l', 'a', 'n', 'd', 'e', 'd' ]))