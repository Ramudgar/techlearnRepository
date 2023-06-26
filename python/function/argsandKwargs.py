
"""
*agrs -> [postitional argument]tuple of arguments passed to the function  (variable length of arguments),
**kwargs -> [keyword argument]dictionary of arguments passed to the function (variable length of keyword arguments)
"""
#  Create a function with variable length of arguments
# def func(*args):
#     for i in args:
#         print(i)

# func(1,2,3,4,5,6,7,8,9,10)
# func("a","b","c","d","e","f","g","h","i","j")
# func("a")


# Create a function with variable length of keyword arguments
# def func(**kwargs):
#     for i in kwargs:
#         print(i,kwargs[i])

# func(a=1,b=2,c=3,d=4,e=5,f=6,g=7,h=8,i=9,j=10)

# # Create a function with variable length of arguments and keyword arguments
# def func(*args,**kwargs):
#     for i in args:
#         print(i)
#     for i in kwargs:
#         print(i,kwargs[i])

# func(1,2,3,4,5,6,7,8,9,10,a=1,b=2,c=3,d=4,e=5,f=6,g=7,h=8,i=9,j=10)
# func("a","b","c","d","e","f","g","h","i","j",a=1,b=2,c=3,d=4,e=5,f=6,g=7,h=8,i=9,j=10)



# Short answer:
# *args allows you to pass a variable number of unnamed values to a function
# **kwargs allows you to pass a variable number of named values to a function

# Example usage for args:
def using_args(*args):
    print(args)
    print(args[1])# can subscript args to access subset
    print(type(args))


# Passing 3 arguments:
# using_args("a", "b", "c")
# --> ('a', 'b', 'c')
# 	b

# Passing 1 argument (here we get an error because of the subscripting):
using_args("a")
# --> ('a',)
# 	IndexError: tuple index out of range

# Example usage for kwargs:
def using_kwargs(**kwargs):
    print(kwargs)
    print(kwargs["b"]) # can subscript kwargs to access subset

# Passing 3 named arguments:
# using_kwargs(a=1, b=2, c=3)
# --> {'a': 1, 'b': 2, 'c': 3}
# 	1
    
# Passing 1 named argument (here we get an error because we try to use a key
#	that doesn't exist in the dictionary):
using_kwargs(a=1)
#  {'a': 1}
# 	KeyError: 'b'

# Note, *args gets read in as a tuple, **kwargs gets read in as a dict
# Note, you don't have to use *args and **kwargs, you could use e.g. *your_name
# Note, arguments should be passed in this order:
#	Formal arguments, *args, Keyword arguments, **kwargs
#	For example:
#	def printOrder(coffee, *args, coffee_order="Espresso", **kwargs):