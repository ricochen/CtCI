"""
Write an efficient function that checks whether any permutation ↴ of an input string is a palindrome. ↴

You can assume the input string only contains lowercase letters.

Examples:

"civic" should return True
"ivicc" should return True
"civil" should return False
"livci" should return False
"But 'ivicc' isn't a palindrome!"

If you had this thought, read the question again carefully. We're asking if any permutation of the string is a palindrome.
Spend some extra time ensuring you fully understand the question before starting.
Jumping in with a flawed understanding of the problem doesn't look good in an interview.
"""


def f(input):
    uniques = set()

    for i in input:
        if i in uniques:
            uniques.discard(i)
        else:
            uniques.add(i)

    return len(uniques) <= 1


print(f("civic"))
print(f("ivicc"))
print(f("civil"))
print(f("livci"))
