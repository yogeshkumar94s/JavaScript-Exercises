//Polymorphism is a concept in object-oriented programming that allows objects of different types to be treated as objects of a common base type. This enables flexibility and reusability in code by allowing the same interface (method or property) to be used with different types of objects. There are two main types of polymorphism: compile-time (or static) polymorphism and runtime (or dynamic) polymorphism.

//1. Compile-Time Polymorphism (Method Overloading):

//Compile-time polymorphism occurs when multiple methods in the same class have the same name but differ in the number or types of their parameters. The appropriate method is determined at compile time based on the method signature.

// Example of method overloading in JavaScript (simulated)
class Calculator {
  add(x, y) {
    return x + y;
  }

  // Method overloading for three parameters
  add(x, y, z) {
    return x + y + z;
  }
}

let calc = new Calculator();
console.log(calc.add(2, 3)); // Output: 5
console.log(calc.add(2, 3, 4)); // Output: 9

//Note: While JavaScript doesn't directly support method overloading as shown in some other languages, you can achieve similar behavior by checking the number or types of arguments within a single method.

//2. Runtime Polymorphism (Method Overriding):

//Runtime polymorphism occurs when a subclass provides a specific implementation for a method that is already defined in its superclass. The method in the subclass overrides the method in the superclass.

//// Example of method overriding in JavaScript
class Animal {
  speak() {
    console.log("Animal speaks");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog barks");
  }
}

let myAnimal = new Dog();
myAnimal.speak(); // Output: Dog barks

//In this example, the Dog class overrides the speak method from the Animal class. When speak is called on an instance of Dog, it executes the overridden method in the Dog class.

//Benefits of Polymorphism:*-*-*-*-

//1.0 Flexibility and Extensibility:
//Polymorphism allows you to write code that can work with objects of different types, making the code more flexible and extensible.

//2.0 Code Reusability:
//With polymorphism, you can reuse code by using a common interface for different classes. This promotes the reuse of existing code.

//3.0 Simplified Code:
//Polymorphism simplifies code by allowing you to work with objects based on their common behaviors rather than their specific implementations.
