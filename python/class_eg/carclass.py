class Car:
    def __init__(self, brand, model, color):
        self.brand = brand
        self.model = model
        self.color = color

    def start_engine(self):
        print("The " + self.brand + " " + self.model + " is starting the engine.")

    def drive(self):
        print("The " + self.brand + " " + self.model + " is now being driven.")

# Create instances of the Car class
car1 = Car("Toyota", "Camry", "Red")
car2 = Car("Honda", "Civic", "Blue")

# Accessing object attributes
print(car1.brand)  # Output: Toyota
print(car2.model)  # Output: Civic

# Calling object methods
car1.start_engine()  # Output: The Toyota Camry is starting the engine.
car2.drive()  # Output: The Honda Civic is now being driven.
