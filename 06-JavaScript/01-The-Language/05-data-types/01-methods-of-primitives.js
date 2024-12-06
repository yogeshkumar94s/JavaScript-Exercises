// Methods of primitives

/*
JavaScript allows us to work with primitives (strings, numbers, etc.) as if they were objects. They also provide methods to call as such. We will study those soon, but first we’ll see how it works because, of course, primitives are not objects (and here we will make it even clearer).

Let’s look at the key distinctions between primitives and objects.

A primitive

Is a value of a primitive type.
There are 7 primitive types: string, number, bigint, boolean, symbol, null and undefined.
An object

Is capable of storing multiple values as properties.
Can be created with {}, for instance: {name: "John", age: 30}. There are other kinds of objects in JavaScript: functions, for example, are objects.
One of the best things about objects is that we can store a function as one of its properties.
*/

let john = {
  name: "John",
  sayHi: function () {
    alert("Hi buddy!");
  },
};

john.sayHi(); // Hi buddy!

/*
  So here we’ve made an object john with the method sayHi.

Many built-in objects already exist, such as those that work with dates, errors, HTML elements, etc. They have different properties and methods.

But, these features come with a cost!

Objects are “heavier” than primitives. They require additional resources to support the internal machinery.
  */

// A primitive as an object

/*
Here’s the paradox faced by the creator of JavaScript:

1. There are many things one would want to do with a primitive, like a string or a number. It would be great to access them using methods.
2. Primitives must be as fast and lightweight as possible.


The solution looks a little bit awkward, but here it is:

1. Primitives are still primitive. A single value, as desired.
2. The language allows access to methods and properties of strings, numbers, booleans and symbols.
3. In order for that to work, a special “object wrapper” that provides the extra functionality is created, and then is destroyed.


The “object wrappers” are different for each primitive type and are called: String, Number, Boolean, Symbol and BigInt. Thus, they provide different sets of methods.

For instance, there exists a string method str.toUpperCase() that returns a capitalized str.
*/

let str = "Hello";

console.log(str.toUpperCase());

// Simple, right? Here’s what actually happens in str.toUpperCase():

/*
1. The string str is a primitive. So in the moment of accessing its property, a special object is created that knows the value of the string, and has useful methods, like toUpperCase().
2. That method runs and returns a new string (shown by alert).
3. The special object is destroyed, leaving the primitive str alone.


So primitives can provide methods, but they still remain lightweight.

The JavaScript engine highly optimizes this process. It may even skip the creation of the extra object at all. But it must still adhere to the specification and behave as if it creates one.

A number has methods of its own, for instance, toFixed(n) rounds the number to the given precision:
*/

let n = 1.23456;

console.log(n.toFixed(2)); // 1.23
