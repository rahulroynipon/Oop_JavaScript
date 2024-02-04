# Understanding Object-Oriented Programming (OOP)

Object-Oriented Programming (OOP) is a programming paradigm that revolves around the concept of "objects." These objects encapsulate data and behavior, providing a structured way to design and organize code.

## Key Principles of OOP

### 1. Encapsulation

Encapsulation involves bundling data and the methods that operate on the data within a single unit, known as a class. This helps in hiding the internal details of an object and exposing only what is necessary.

### 2. Inheritance

Inheritance allows a new class (subclass/derived class) to inherit properties and methods from an existing class (superclass/base class). This promotes code reuse and establishes a hierarchy among classes.

### 3. Polymorphism

Polymorphism enables objects of different classes to be treated as objects of a common base class. This allows for more flexibility and extensibility in the code, as objects can take multiple forms.

## OOP in Practice

Consider a simple example of a "Car" class:

```python
class Car:
    def __init__(self, make, model):
        self.make = make
        self.model = model

    def start_engine(self):
        print(f"The {self.make} {self.model}'s engine is now running.")

# Creating an instance of the Car class
my_car = Car("Toyota", "Camry")

# Using methods of the Car class
my_car.start_engine()
