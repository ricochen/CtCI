"""
You're working with an intern that keeps coming to you with JavaScript code that won't run because the braces, brackets,
and parentheses are off. To save you both some time, you decide to write a braces/brackets/parentheses validator.

Let's say:

'(', '{', '[' are called "openers."
')', '}', ']' are called "closers."
Write an efficient function that tells us whether or not an input string's openers and closers are properly nested.

Examples:

"{ [ ] ( ) }" should return True
"{ [ ( ] ) }" should return False
"{ [ }" should return False
"""


def is_valid(input_string):
    stack = []
    mapping = {
        '(': ')',
        '{': '}',
        '[': ']'
    }

    for i in input_string:
        if i in mapping:
            stack.append(mapping[i])
        elif not stack:
            return False
        elif stack and i != stack.pop():
            return False

    return len(stack) == 0


print(is_valid("}"))
