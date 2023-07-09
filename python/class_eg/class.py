class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def __str__(self):
        return f"{self.name} ({self.age})"

p1 = Person("John", 36)
print(p1)


class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def display_info(self):
        print(f"{self.name} ({self.age})")

# Create an instance of the Person class
person = Person("John Doe", 25)

# Call the display_info method to print the object's attributes
person.display_info()

class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def display_info(self):
        print(self.name + " (" + str(self.age) + ")")

# Create an instance of the Person class
person = Person("John Doe", 25)

# Call the display_info method to print the object's attributes
person.display_info()




# Class with custom initialization
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def display(self):
        print(f"Name: {self.name}, Age: {self.age}")

# Creating objects using custom initialization
person1 = Person("Alice", 25)
person2 = Person("Bob", 30)

person1.display()  # Output: Name: Alice, Age: 25
person2.display()  # Output: Name: Bob, Age: 30

# Class with default constructor
class Car:
    def display(self):
        print("This is a car.")

# Creating objects using default constructor
car1 = Car()
car2 = Car()

car1.display()  # Output: This is a car.
car2.display()  # Output: This is a car.


