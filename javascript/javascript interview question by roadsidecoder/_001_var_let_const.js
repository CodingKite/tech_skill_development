// Var let const
// ================================================

/*
- var existed since the begining of javascript
- let const along with block scoping was introduced in ES6 version of javascript(to overcome limitation of JS)
*/

// ================================================

// What is Scope
/*
- An region of code where an defined varaible exists and can be accessed.
- Global,Function,Block,Module Scope
- var is Global / Function scoped
- let and const are Block scoped (accessible only within the blocks where it is declared)
- let / const can NOT be redeclared in the same scope
 */

// ================================================

// What is variable shadowing.
/*
- Overriding of values of an variable is Variable Shadowing.
- Variable shadowing in JavaScript occurs when a variable with the same name is declared within a more nested scope, effectively overshadowing a variable with the same name in an outer scope. This means that the inner variable takes precedence over the outer variable within its scope.
- While shadowing an variable, it should not cross the boundry of scope.
- We can shadow "var" variable using "let", but can not shadow an "let" variable with "var". Bcux in the latter case "let" has been declared in the function block and "var" being an function scoped overrides the scope of the varaible declared with "let".
*/


// ================================================

// Scope Example
/*
function test() {
  let a = "hello"; // inside the function EC, this "a" is inside the Local Scope
  // local scope remain for the lifespan of the function, block scope keeps on creating and deleting as the code runs. Try adding multiple blocks and see it for yourself
  if (true) { // _001_.png
    let a = " hiii";
    console.log(a); // inside the function EC, this "a" is inside the Block Scope
  }
  console.log(a);
}
test();


let x = 10; // Outer variable
function shadowingExample() {
  let x = 20; // Inner variable, shadows the outer variable
  console.log(x); // Output: 20
}

shadowingExample();
console.log(x); // Output: 10 (outer variable is unaffected)


*/

// ================================================


// Illegal Shadowing example

/*

function test() {
  let a = "function scope A";
  var b = "function scope B"

  if (true) { // _001_.png
    let b = "Block Scope B";
    //Cannot redeclare block-scoped variable 'a'
    // Uncaught SyntaxError: Identifier 'a' has already been declared
    var a = "Var inside Block";
    console.log(b);
  }
  console.log(b);
}
test();


var x = 10;
function shadowingExample() {
  var x = 20; // Shadows the outer variable
  console.log(x); // Output: 20
}
shadowingExample();
console.log(x); // Output: 20 (outer variable is affected)

*/

// ================================================

/*
- We can re-declare varaible with "var"
- We can NOT re-declare varaible with "let" & "const" in the same scope.

var a = 5;
var a;

const c = 70;
const c; // give error: 'c' has already been declared

let b = 7;
let b; // give error: 'b' has already been declared

let d; // we can redeclare with let, const in different scopes
{
  let d = 5;
}

const e; // we can redeclare with let, const in different scopes
{
  const e = 5;
}

*/

// ================================================

/*
- const
  : we need to declare & initialze variable with "const" at the same time
  : we can not re-initialize
  : we can NOT re-decalre an variable with "const" in same scope
  : we can re-decalre an variable with "const" in different scope
- let
  : we can NOT re-declare an variable with "let" in same scope
  : we can re-decalre an variable with "let" in different scope
  : we can re-initialze
- 
*/

// ================================================

/*
- When we execute an JS code, an Execution context is used to run the JS code.
- There are two phases : 
  - Creation Phase
  - Execution Phase
- In the creation phase,three things happens:
  - an global/window object is created
  - setups memory heap for storing varaible and function references(stores all variable and function inside the window object)
  - all variable are initialized with "undefined"
- In the execution phase, the code is executed line by line from top to bottom and left to right. For each function we call/execued , an separate execution context is created.
- Call stack is used to track function calls, which function is being executed currently and which will be executed next.
- Function to be runned are pushed into the call stack, and function which have already executed are popped out of call stack.
- Function at the top of the call stack are the one that is being currently being executed.



let a = 10;
function multiply(x) {
  return x * 10;
}
let b = multiply(a);
console.log(b)
*/

// ================================================

// Hoisting in Javascript
/*
- Variables declared with "let" and "const" are still hoisted, but they are not initialized  like variables declared with "var". Instead, they enter a "temporal dead zone" until they are formally declared in the code. This behavior helps catch potential errors related to using variables before their declaration.

// Temporal Dead Zone
- It refers to a phase in the code execution where variables declared with "let" and "const" exist, but cannot be accessed or used before their actual declaration.
- In the temporal dead zone, attempting to access or use a variable before it is declared will result in a ReferenceError. This behavior helps catch potential errors caused by using variables before they are assigned a value.

- Variable declared with "var" are hoisted and initialized with "undefined"
- Variable declared with "let" & "const" are also hoisted(stored in the Script in dev tools) and but not initialized with "undefined"
- Since "let" and "const" enter a "temporal dead zone"  we can not access variables declared with "const" & "let" until they are in temporal dead zone or not initialized.

console.log(count); // undefined
var count = 1;

console.log(count2); // error: Cannot access 'count2' before initialization
let count2 = 1;

console.log(count3); // error: Cannot access 'count3' before initialization
let count3 = 1;

*/

// Interview Question
/*
function abc() {
  console.log(a); // undefined (a is hoisted and intialized with "undefined")
  var a = 10;
  console.log(a); // 10
}

function def() {
  console.log(a, b, c); // Error, although a,b,c all three are hoisted but b & c are hoisted in temporal dead zone, so accessing them before initializing them will result in Reference error
  var a = 10; 
  const b = 20;
  let c = 30;
  console.log(a,b,c); // 10
}

*/