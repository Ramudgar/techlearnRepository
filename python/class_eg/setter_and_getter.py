class MyClass:
    def __init__(self):
        self._private_data = None  # Protected data with a single underscore

    # Getter method
    def get_data(self):
        return self._private_data

    # Setter method
    def set_data(self, new_data):
        self._private_data = new_data


class AnotherClass:
    def __init__(self):
        self._obj = MyClass()

    def set_data_from_another_class(self, new_data):
        self._obj.set_data(new_data)

    def get_data_from_another_class(self):
        return self._obj.get_data()


# Usage
another_obj = AnotherClass()
another_obj.set_data_from_another_class(42)
data = another_obj.get_data_from_another_class()
print(data)  # Output: 42
