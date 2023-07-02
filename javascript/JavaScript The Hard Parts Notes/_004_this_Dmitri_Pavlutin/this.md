- In Java, PHP or other standard language, `this` is the instance of the current object in the class method. `this` cannot be used outside the method and such a simple approach does not create confusion.

```java
public class Person {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name; // using 'this' to refer to the current instance variable
        this.age = age;
    }

    public void displayInfo() {
        System.out.println("Name: " + this.name); // accessing instance variable using 'this'
        System.out.println("Age: " + this.age);
    }

    public void updateName(String newName) {
        this.name = newName; // updating instance variable using 'this'
    }
}

```

# OTHER

## difference between expression and statement in javascript

- In JavaScript, an expression is a piece of code that produces a value.
- It can be as simple as a single value or can involve complex combinations of operators, variables, and function calls.
- Expressions can be used as part of larger expressions, assigned to variables, passed as arguments to functions, or used in various other contexts where a value is expected.

- A statement is a complete unit of code that performs an action or controls the flow of execution.
- It does not produce a value.
- Statements typically include keywords like `if`, `for`, `while`, `switch`, and others, and they can contain expressions. Statements are executed sequentially unless control flow statements alter their execution order.
- Statements are typically used to control the program's behavior, define functions, declare variables, handle exceptions, and perform various other tasks that involve actions rather than producing a value.

- In summary, expressions produce values, while statements perform actions or control the flow of the program.

## To see all properties of an Object in javascript

- console.dir(ObjectName); // be it an function,object,array
- In browser the global is called as `window` and in nodejs it is called as `global`.
- When you directly access the `global` object in Node.js, you will only see a limited number of properties that are considered the "global" properties by default. These properties are exposed by Node.js to provide essential functionality and access to commonly used modules.
- However, the `global` object in Node.js is not intended to be an exhaustive list of all available properties or modules. It is designed to provide a subset of commonly used global properties and functions.
- In Node.js, the majority of the built-in modules and functionality are not attached directly to the `global` object. Instead, they are accessed through other means, such as using the `require()` function to import specific modules or accessing built-in objects like `process` or `console` directly.
- To see all properties and methods available in Node.js, you can make use of the `util.inspect()` function from the built-in `util` module. This function returns a string representation of an object, including all its properties and methods.
- Here's an example of how you can use util.inspect() to view all properties of an object in Node.js:

```js
const util = require("util");

//gives list of all keys/properties in global object
console.log(Object.getOwnPropertyNames(global));

//consoles the whole global object
console.log(util.inspect(global, { showHidden: true, depth: null }));

//gives list of all keys/properties in Object
console.log(Object.getOwnPropertyNames(Object));

//consoles the whole Object
console.log(util.inspect(Object, { showHidden: true, depth: null }));
```

## Print function definitions for all keys found & for specific keys (passed as arguments)

```js
const util = require("util");

const properties = Object.getOwnPropertyNames(global);

// Print function definitions for all keys found
properties.forEach((key) => {
  const value = global[key];
  if (typeof value === "function") {
    console.log(`${key}: ${value.toString()}`);
  } else {
    console.log(`${key} is not a function.`);
  }
});

// Print function definitions for specific keys (passed as arguments)
function printFunctionDefinitions(...keys) {
  keys.forEach((key) => {
    const value = global[key];
    if (typeof value === "function") {
      console.log(`${key}: ${value.toString()}`);
    } else {
      console.log(`${key} is not a function.`);
    }
  });
}

// Example usage
printFunctionDefinitions("setTimeout", "console.log", "nonExistentKey");
```
