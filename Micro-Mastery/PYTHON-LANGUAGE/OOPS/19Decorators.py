
# Higher order Function  ka functionatity hai 



#!  Problem 1: Timing Function Execution
# Problem: Write a decorator that measures the time a function takes to execute.
import time 

def timer(func):
    def wrapper(*args):
        start = time.time()
        result = func(*args)
        end = time.time()
        print(f"{func.__name__} ran in {end -start}")
        return result
    return wrapper    

@timer
def exf(n):
    time.sleep(n)

# exf(3)    


# ! Problem 2: Debugging Function Calls
# Problem: Create a decorator to print the function name and the values of its arguments every time the function
# is called.


def debug(func):
    def wrapper(*args, **kwargs):
         args_value = ', '.join(str(arg) for arg  in args)
         kwargs_value= ', '.join( f"{k}={v}"  for k,v in kwargs.items())
         print(f"{func.__name__},with args {args_value} , {kwargs_value}")
         return func(*args, **kwargs)
    return wrapper

@debug
def greet(name,greeting='hello'):
    print(f"{greeting}  {name}")

# greet("chai",greeting="nitesh")

# ! Problem 3: Cache Return Values
# Problem: Implement a decorator that caches the return values of a function, so that when it's called with the
# same arguments, the cached value is returned instead of re-executing the function.

def cache(func):
    cache_value = {}
    print(cache_value)
    def wrapper(*args):
        if args in cache_value:
            return cache_value[args]
        result =  func(*args)
        cache_value[args] = result
        return result
    return wrapper

@cache
def long_run(a,b):
    time.sleep(2)
    return a + b

print(long_run(3,4))
print(long_run(3,4))
print(long_run(3,6))