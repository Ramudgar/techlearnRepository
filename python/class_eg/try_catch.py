try:
    x = int(input("Enter a number: "))
    result = 10 / x
    print("Result:", result)
except ValueError:
    print("Invalid input. Please enter a valid number.")
except ZeroDivisionError:
    print("Error: Cannot divide by zero.")
except Exception as e:
    print("An error occurred:", e)
else:
    print("No exceptions occurred.")
finally:
    print("Finally block executed.")

print("Program continues...")
