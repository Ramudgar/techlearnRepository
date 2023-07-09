# class methods are used to access class variables
class Math_Utils:
    pi=3.14

    @classmethod
    def add(cls,b):
        return cls.pi+b

# result=Math_Utils.add(5)
utils=Math_Utils()
result=utils.add(5)

print(result)
    

#normal methods are used to access instance variables
class Math_Utils:
    def __init__(self,pi):
        self.pi=pi

    def add(self,b):
        return self.pi+b
    
utils=Math_Utils(3.14)
result=utils.add(5)
print(result)

#static methods are used to access static variables

class Math_Utils:
    def __init__(self,pi,b):
        self.pi=pi
        self.b=b

    def add(self):
        return self.pi+self.b
    
utils=Math_Utils(3.14,5)
result=utils.add()
print(result)


    