        
# Write a function that finds the maximum of given numbers.
def func(*args):
    return max(args)
print(func(1,2,3,4,20,6,7,8,9,10))


# Write a function that finds the maximum of three  numbers.
def func(a,b,c):
    return max(a,b,c)
print(func(1,2,3))

# Write a function that finds the maximum of three numbers without using max attribute.
def func(a,b,c):
    if a>b and a>c:
        return a
    elif b>a and b>c:
        return b
    else:
        return c
print(func(1,2,3))

# Write a function that sums all the numbers provided in through the argument.
def sum_allnumber(*args):
    sum=0
    for i in args:
        sum+=i
    return sum
print(sum_allnumber(1,2,3,4,5,6,7,8,9,10))

# Write a function that sums all the numbers in a list.
def sum_allnumber(list):
    sum=0
    for i in list:
        sum+=i
    return sum
print(sum_allnumber([1,2,3,4,5,6,7,8,9,10]))

# write a function that multiply all the numbers in a list
def mul_allnumber(list):
    mul=1
    for i in list:
        mul=mul*i

    return mul
print(mul_allnumber([1,2,3]))

# Write a function that calculates the sum of all digits in a number.
def sum_allnumber(number):
    sum=0
    for i in str(number):
        sumint=int(i)
        sum=i+sumint
    return sum
print(sum_allnumber(123456789))

# Write a function that calculates the sum of all digits in a number without using str attribute.

def sum_of_digits(number):
    "first method"
    digit_sum = 0
    while number > 0:
        digit = number % 10
        digit_sum += digit
        number //= 10
    return digit_sum

result = sum_of_digits(12345)
print(result)  # Output: 15


def sum_allnumber(n):
    "second method"
    sum=0
    while n>0:
        sum+=n%10
        n=n//10
    return sum
print(sum_allnumber(123456789))



# description of the above code
# Initial state:
# number = 12345
# digit_sum = 0

# Iteration 1:
# number = 1234
# digit = 5
# digit_sum = 5

# Iteration 2:
# number = 123
# digit = 4
# digit_sum = 9

# Iteration 3:
# number = 12
# digit = 3
# digit_sum = 12

# Iteration 4:
# number = 1
# digit = 2
# digit_sum = 14

# Iteration 5:
# number = 0
# digit=1
# digit_sum = 15
# Exit the loop

# Final state:
# digit_sum = 15

# Printed output:
# 15


# Write a function that calculates the product of all digits in a number.
def mul_allnumber(number):
    mul=1
    for i in str(number):
        mul*=int(i)
    return mul
print(mul_allnumber(123456789))

# write a function that multiply all the numbers in a list
# def mul_allnumber(*args):
#     mul=1
#     for i in args:
#         mul=mul*i

#     return mul
# print(mul_allnumber([1,2,3],[4,5,6]))

# Write a function that reverses a string.
def reverse_string(string):
    return string[::-1]
print(reverse_string("hello world!"))

# Write a function that reverses a list.
def reverse_list(list):
    return list[::-1]
print(reverse_list([1,2,3,4,5,6,7,8,9,10]))

#describe palindrome 
# Write a function that checks whether a string is a palindrome or not.

 
 


