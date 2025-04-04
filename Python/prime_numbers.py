""" - Iteration 1 -
def prime(number)
    if number is 1
        return '{number} is prime'
    for divisor in range(2, number)
        if number % divisor == 0
            number is not prime, move to next lowest
            return prime(number - 1)
        continue in the range up to number - 1
    all divisors have been checked, print '{number} is prime'
    move to next lowest, return prime(number - 1)    
"""
"""  - Iteration 2 - (in progress)
def prime(number)
    if number is 1
        return '{number} is prime'
    for divisor in range(2, number)
        if number % divisor == 0
            number is not prime, move to next lowest
            #todo: number-- & ?
        continue in the range up to number - 1
    all divisors have been checked, print '{number} is prime'
    move to next lowest, return prime(number - 1)    
"""

def prime_numbers(num):
    """
    Recursive prime numbers finder. In this iteration it's not very elegant or 
    condensed, so consider how it can be refactored to fewer lines, starting with
    the return statements.
    
    Args:
        num (int): The input number. Note: Max recursion error
        possible, depending on Arg, hardware and Python version.

    Returns:
        str | str[]: One short string for each prime number in the range (num, 1).
    """
    if num == 1:
        return f"{num} is prime."
    for divisor in range(2, num):
        # print(f"Iteration: {num} % {divisor} = {num % divisor}")
        if num % divisor == 0:
            return prime_numbers(num - 1)
        continue
    print(f"{num} is prime.")
    return prime_numbers(num - 1)
        
print(prime_numbers(502))    