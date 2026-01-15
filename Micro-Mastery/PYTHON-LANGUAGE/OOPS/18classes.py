

# 1. Basic Class and Object
# 2. Class Method and Self
# 3. Inheritance
# h4. Encapsulation
# 5. Polymorphism
# 6. Class Variables
# 7. Static Method
# 8. Property Decorators
# 9. Class Inheritance and isinstance0 Function
# 1O. Multiple Inheritance

#  * OOPS 
# Problem: Create a Car class with attributes like brand and model. Then create an instance of this class.
# class Car:
#     def __init__(self,brand, model):
#         self.brand = brand
#         self.model = model

# my_car = Car("lamborgini","lm4")
# print(my_car)

# Problem: Add a method to the Car class that displays the full name of the car (brand and model).

# class Car:
#     def __init__(self,brand, model):
#         self.brand = brand
#         self.model = model
#     def name(self):
#         print(self.brand,self.model)

# my_car = Car("lamborgini","lm4")
# my_car.name()

# ?  Problem: Create an ElectricCar class that inherits from the Car class and has an additional attribute                    
# class Car:
#     def __init__(self,brand, model):
#         self.brand = brand
#         self.model = model
#     def name(self):
#         print(self.brand,self.model)

# class ElectricCar(Car):
#     def __init__(self ,brand,model,battery_size):
#         super().__init__(brand,model)
#         self.battery_size = battery_size

# my_car = ElectricCar("Telsa","S","xs")
# print(my_car.name())

#? 4 Problem: Modify the Car class to encapsulate the brand attribute, making it private, and provide a getter

# class Car:
#     def __init__(self,brand, model):
#         self.__brand = brand
#         self.model = model
#     def get_brand(self):
#         return  self.__brand + "!"  
        
#     def name(self):
#         print(self.__brand,self.model)
# # ? to create private variable we use __ 
# my_car = Car("lamborgini","lm4")
# # print(my_car.__brand) # ? user yese direct acces nahi kar paye  'Car' object has no attribute '__brand'. Did you mean: 'get_brand'? , this  guess if the methos is prent then only we get 
# print(my_car.get_brand())

# Problem: Demonstrate polymorphism by defining a method fuel_type in both Car and ElectricCar classes, but
# with different behaviors.

# class Car:
#     def __init__(self,brand, model):
#         self.brand = brand
#         self.model = model
#     def name(self):
#         print(self.brand,self.model)
#     def fuel_type(self):
#         return "Petrol or Disel"

# class ElectricCar(Car):
#     def __init__(self ,brand,model,battery_size):
#         super().__init__(brand,model)
#         self.battery_size = battery_size
#     def fuel_type(self):
#         return "Electice charge "

# c1 = Car("toyota","ms")
# e1 = ElectricCar("telsa","sx","large")
# print(c1.fuel_type())
# print(e1.fuel_type())

# Problem: Add a class variable to Cqr that keeps track of the number of cars created.
# class Car:
#     total_car = 0
#     def __init__(self,brand, model):
#         self.brand = brand
#         self.model = model
#         Car.total_car+=1

#     def fuel_type(self):
#         return "Petrol or Disel"
# c1 = Car("toyota","ms")
# c2 = Car("toyota","ms")
# # print(c1.total_car) # ? this is not good way to acces the class variables 

# print(Car.total_car)
# # ! immediate garbage colllection nahi hota hai python me 

# ! DOUT
# *  Problem: Add a static method to the Car class that returns a general description of a car.
#  ? Static is the stuuf shrif class hi acces kar paye instance na kar paye 
# class Car:
#     total_car = 0
#     def __init__(self,brand, model):
#         self.brand = brand
#         self.model = model
#         Car.total_car+=1

#     def fuel_type(self):
#         return "Petrol or Disel"

#     @staticmethod   # ? decorators  
#     def gen_des():
#         return "by means of transport"    
# c1 = Car("toyota","ms")
# print(Car.gen_des())

# Problem: Use a property decorator in the Car class to make the model attribute read-only.

# class Car:
#     total_car = 0
#     def __init__(self,brand, model):
#         self.brand = brand
#         self.__model = model
#         Car.total_car+=1

#     def fuel_type(self):
#         return "Petrol or Disel"

#     @property    
#     def model(self):
#         self.__model    

# c1 = Car("toyota","ms")
# # c1.model ="ks"
# print(c1.model)
# # we can acces model fucntion without using () , and also you cannot change the model again


# Problem: Demonstrate the use of isinstance0 to check if my_tesla is an instance of Car and ElectricCar.

class Car:
    def __init__(self,brand, model):
        self.brand = brand
        self.model = model
    def name(self):
        print(self.brand,self.model)
    def fuel_type(self):
        return "Petrol or Disel"

class ElectricCar(Car):
    def __init__(self ,brand,model,battery_size):
        super().__init__(brand,model)
        self.battery_size = battery_size
    def fuel_type(self):
        return "Electice charge "

c1 = Car("toyota","ms")
e1 = ElectricCar("telsa","sx","large")
# print(isinstance(c1,ElectricCar))
# print(isinstance(c1,Car))
# print(isinstance(e1,Car))
# print(isinstance(e1,ElectricCar))


# Problem: Create two classes Battery and Engine, and let the ElectricCar class inherit from both, demonstrating
# multiple inheritance.

class Battery:
    def batInfo(self):
        return "this is battery"
    pass
class Engine:
    def eng(self):
        return "this is eng"

class Elec2(Battery,Engine,Car):
    pass    
my_new = Elec2("tadf" , "sdf")
print(my_new.batInfo())   
print(my_new.eng()) 
#  ! Multiple inheritance works   