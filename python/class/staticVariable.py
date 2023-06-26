class Counter:
    # 1. Declaring static variable directly within the class
    count = 0
    def __init__(self):
        # 2. Declaring static variable inside __init__ method using class name
        Counter.count += 1
    def increment(self):
        # 3. Declaring static variable inside an instance method using class name
        Counter.count += 1
    @classmethod
    def increment_count(cls):
        # 4. Declaring static variable inside a class method using cls variable or class name
        cls.count += 1
    @staticmethod
    def print_count():
        # 5. Declaring static variable inside a static method using class name
        Counter.count += 1
        print("Count:", Counter.count)
# Accessing static variable from outside the class using class name
print("Initial Count:", Counter.count)
# Creating objects of Counter class
c1 = Counter()
c2 = Counter()
# Accessing static variable through objects
print("Count after object creation:", c1.count)
# Calling instance method that modifies the static variable
c1.increment()
print("Count after incrementing using instance method:", c2.count)
# Calling class method that modifies the static variable
Counter.increment_count()
print("Count after incrementing using class method:", c1.count)
# Calling static method that modifies the static variable and prints it
Counter.print_count()
