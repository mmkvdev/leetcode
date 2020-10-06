import math
def palindrome(x):
    if x < 0:
        return False
    n, reversed = x, 0	
        
    while x > 0:
        digit = x % 10
        reversed = (reversed * 10) + digit
        x = math.floor(x / 10)
        
    return n == reversed

print(palindrome(int(input('Enter a number to check whether it is a palindrome or not'))))