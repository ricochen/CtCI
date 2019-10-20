"""
You want to build a word cloud, an infographic where the size of a word corresponds to how often it appears in the body of text.

To do this, you'll need data. Write code that takes a long string and builds its word cloud data in a dictionary ↴ , where the keys are words and the values are the number of times the words occurred.

Think about capitalized words. For example, look at these sentences:

  'After beating the eggs, Dana read the next step:'
'Add milk and eggs, then add flour and sugar.'
What do we want to do with "After", "Dana", and "add"? In this example, your final dictionary should include one "Add" or "add" with a value of 22. Make reasonable (not necessarily perfect) decisions about cases like "After" and "Dana".

Assume the input will only contain words and standard punctuation.
"""


def f(input):
    dict = {}
    idx1 = 0
    idx2 = 0

    for i, v in enumerate(input):
        if v.isalpha():
            if idx2 == 0:
                idx1 = i
            else:
                idx2 += 1
        else:
            current_str = input[idx1: idx2]

            if current_str not in dict:
                dict[current_str] = 1
            else:
                dict[current_str] += 1

            idx1 = i

    return dict


print(f())
