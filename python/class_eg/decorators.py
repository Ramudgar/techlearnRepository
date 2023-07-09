# write a decorators function

# def my_decorator(func):
#     def wrapper():
#         print("Something is happening before the function is called.")
#         func()
#         print("Something is happening after the function is called.")
#     return wrapper
# @my_decorator
# def say_whee():
#     print("Whee!")
# say_whee()
#
# write a decorators function with arguments
def my_decorator(func):
    def wrapper(*args, **kwargs):
        print("Something is happening before the function is called.",func.__name__)
        func(*args, **kwargs)
        print("Something is happening after the function is called.")
    return wrapper
@my_decorator
def say_whee(name):
    print("Whee! {}".format(name))
say_whee("sai")


# # write a decorators function with arguments and keyword arguments like applicable example
# def my_decorator(func):
#     def wrapper(*args, **kwargs):
#         print("Something is happening before the function is called.")
#         func(*args, **kwargs)
#         print("Something is happening after the function is called.")
#     return wrapper
# @my_decorator
# def say_whee(name,age):
#     print("Whee! {} {}".format(name,age))
# say_whee("sai",25)
