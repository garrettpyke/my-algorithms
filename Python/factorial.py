number = 998

def factorial(number):
    """
    Recursive factorial function.
    
    Args:
        number (int): The input number. Note: Max recursion error
        possible, depending on Arg, hardware and Python version.

    Returns:
        int: The result of number!
    """
    
    if number == 0:
        return 1
    return number * factorial(number - 1) 

print(f"{number}! = {factorial(number)}")