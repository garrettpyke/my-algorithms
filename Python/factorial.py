number = 998

def factorial(number):
    """Recursive factorial function, a calculation commonly used in statistics.
    
    :param number: int - the input number. note, max recursion error possible depending on size of param.

    :return: int - mathematical result of number!
    """
    
    if number == 0:
        return 1
    return number * factorial(number - 1) 

print(f"{number}! = {factorial(number)}")