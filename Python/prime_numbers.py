"""
def prime(num)
    if num = 1
        return 'num is prime'
    for divisor in range(2, num)
        if num % divisor == 0
            return prime(num - 1)
        continue
    print 'num is prime'
    return prime(num - 1)    
"""

def prime_numbers(num):
    """
    Recursive prime numbers finder. In this iteration, it's not very elegant or 
    condensed.
    
    Args:
        number (int): The input number. Note: Max recursion error
        possible, depending on Arg, hardware and Python version.

    Returns:
        int: The result of number!
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
        
print(prime_numbers(30))    