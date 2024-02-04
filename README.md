# Understanding Object-Oriented Programming (OOP) in JavaScript

JavaScript is a versatile language that supports Object-Oriented Programming (OOP), providing developers with a powerful way to structure and organize their code.

## Key Concepts in JavaScript OOP

### 1. Objects

In JavaScript, everything is an object. Objects are collections of key-value pairs, representing entities with properties and methods.

### 2. Classes

ES6 introduced class syntax, allowing developers to create blueprints for objects. Classes serve as templates for creating instances, defining properties and methods.

### 3. Encapsulation

Encapsulation in JavaScript involves bundling data (properties) and methods that operate on the data within a class. This helps in organizing code and reducing global scope pollution.

### 4. Inheritance

JavaScript supports prototypal inheritance, where objects can inherit properties and methods from other objects. This promotes code reuse and a hierarchical structure.

### 5. Polymorphism

Polymorphism in JavaScript allows objects to take on multiple forms. This is achieved through method overloading or interfaces, enabling flexibility in code design.

## OOP in JavaScript Example

Consider a simple example of a "Person" class:

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

// Creating an instance of the Person class
const john = new Person("John Doe", 30);

// Using methods of the Person class
john.greet();
