# Object-Oriented Programming (OOP) Concepts

## 1. Basic Class and Object
### Problem: Create a `Car` class with attributes like brand and model. Then create an instance of this class.
```python
class Car:
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model

my_car = Car("Lamborghini", "LM4")
print(my_car)
```

---

## 2. Class Method and Self
### Problem: Add a method to the `Car` class that displays the full name of the car (brand and model).
```python
class Car:
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model

    def name(self):
        print(self.brand, self.model)

my_car = Car("Lamborghini", "LM4")
my_car.name()
```

---

## 3. Inheritance
### Problem: Create an `ElectricCar` class that inherits from the `Car` class and has an additional attribute.
```python
class Car:
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model

    def name(self):
        print(self.brand, self.model)

class ElectricCar(Car):
    def __init__(self, brand, model, battery_size):
        super().__init__(brand, model)
        self.battery_size = battery_size

my_car = ElectricCar("Tesla", "S", "XS")
print(my_car.name())
```

---

## 4. Encapsulation
### Problem: Modify the `Car` class to encapsulate the brand attribute, making it private, and provide a getter.
```python
class Car:
    def __init__(self, brand, model):
        self.__brand = brand
        self.model = model

    def get_brand(self):
        return self.__brand + "!"

    def name(self):
        print(self.__brand, self.model)

my_car = Car("Lamborghini", "LM4")
print(my_car.get_brand())
```

---

## 5. Polymorphism
### Problem: Demonstrate polymorphism by defining a method `fuel_type` in both `Car` and `ElectricCar` classes, but with different behaviors.
```python
class Car:
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model

    def name(self):
        print(self.brand, self.model)

    def fuel_type(self):
        return "Petrol or Diesel"

class ElectricCar(Car):
    def __init__(self, brand, model, battery_size):
        super().__init__(brand, model)
        self.battery_size = battery_size

    def fuel_type(self):
        return "Electric Charge"

c1 = Car("Toyota", "MS")
e1 = ElectricCar("Tesla", "SX", "Large")
print(c1.fuel_type())
print(e1.fuel_type())
```

---

## 6. Class Variables
### Problem: Add a class variable to `Car` that keeps track of the number of cars created.
```python
class Car:
    total_car = 0

    def __init__(self, brand, model):
        self.brand = brand
        self.model = model
        Car.total_car += 1

    def fuel_type(self):
        return "Petrol or Diesel"

c1 = Car("Toyota", "MS")
c2 = Car("Toyota", "MS")
print(Car.total_car)
```

---

## 7. Static Method
### Problem: Add a static method to the `Car` class that returns a general description of a car.
```python
class Car:
    total_car = 0

    def __init__(self, brand, model):
        self.brand = brand
        self.model = model
        Car.total_car += 1

    def fuel_type(self):
        return "Petrol or Diesel"

    @staticmethod
    def gen_des():
        return "By means of transport"

c1 = Car("Toyota", "MS")
print(Car.gen_des())
```

---

## 8. Property Decorators
### Problem: Use a property decorator in the `Car` class to make the model attribute read-only.
```python
class Car:
    def __init__(self, brand, model):
        self.brand = brand
        self.__model = model

    @property
    def model(self):
        return self.__model

c1 = Car("Toyota", "MS")
print(c1.model)
```

---

## 9. Class Inheritance and `isinstance()` Function
### Problem: Demonstrate the use of `isinstance()` to check if objects belong to specific classes.
```python
class Car:
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model

class ElectricCar(Car):
    def __init__(self, brand, model, battery_size):
        super().__init__(brand, model)
        self.battery_size = battery_size

c1 = Car("Toyota", "MS")
e1 = ElectricCar("Tesla", "SX", "Large")

print(isinstance(c1, ElectricCar))  # False
print(isinstance(c1, Car))          # True
print(isinstance(e1, Car))          # True
print(isinstance(e1, ElectricCar))  # True
```

---

## 10. Multiple Inheritance
### Problem: Create two classes `Battery` and `Engine`, and let the `ElectricCar` class inherit from both, demonstrating multiple inheritance.
```python
class Battery:
    def batInfo(self):
        return "This is a battery"

class Engine:
    def engInfo(self):
        return "This is an engine"

class ElectricCar(Battery, Engine, Car):
    pass

my_car = ElectricCar("Tesla", "Model S")
print(my_car.batInfo())
print(my_car.engInfo())