- [Angus Croll Blogs](https://javascriptweblog.wordpress.com/)

```notes
In JavaScript, the `resolve()` function is not used directly to trigger the functions passed in the `then` method. Instead, it is used to create and resolve promises. Promises represent the eventual completion (either success or failure) of an asynchronous operation.

If you want to manually trigger the functions passed in the `then` method without relying on the resolved value of a promise, you can create and resolve a custom promise using `resolve()`. Here's an example:
```

```js
function display(data) {
  console.log("display func => ", data);
  data.hello = "World";
  return data; // to chain them together, return the data
}

function second_display(data) {
  console.log("second_display 222 func => ", data);
}

function third_display(data) {
  console.log("third_display 222 func => ", data);
}

function error(err) {
  console.log("error func => ", err);
}

const customPromise = new Promise((resolve) => {
  resolve({ check: "yes" });
});

customPromise
  .then(display)
  .then(second_display)
  .then(third_display)
  .catch(error);
```

- A custom promise customPromise is created using the Promise constructor.
- Inside the promise executor function, resolve is called with the desired value ({ "check": "yes" }) to fulfill the promise
- The then method is chained to the customPromise to handle the resolved value asynchronously.
- The subsequent then callbacks (display, second_display, third_display) are chained together to be executed in sequence with the resolved value passed from one callback to another.
- If any error occurs during the promise chain, the catch callback (error) will be invoked.
- Now, when `customPromise` is resolved, the `display` function will be called with the resolved data, followed by `second_display`, and then `third_display`. If an error occurs at any point in the chain, the `error` function will be invoked.

- To set up different error handlers for each then method instead of using a single catch method at the end, you can attach individual error handlers to each then method. Here's an example:

```js
function display(data) {
  console.log("display func => ", data);
  data.hello = "World";
  return data; // to chain them together, return the data
}

function second_display(data) {
  console.log("second_display 222 func => ", data);
}

function third_display(data) {
  console.log("third_display 222 func => ", data);
}

function errorDisplay(err) {
  console.log("error in display func => ", err);
}

function errorSecond(err) {
  console.log("error in second_display func => ", err);
}

function errorThird(err) {
  console.log("error in third_display func => ", err);
}

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(display, errorDisplay)
  .then(second_display, errorSecond)
  .then(third_display, errorThird);
```

- In this code:
- Each then method is followed by its corresponding error handler as a separate argument. For example, then(display, errorDisplay) attaches display as the success handler and errorDisplay as the error handler for that particular step in the promise chain.
- If an error occurs in any of the then callbacks, the respective error handler will be triggered, providing a separate error handling mechanism for each step.
- Note that if you omit the error handler for a particular then method, the error will propagate to the next catch method or any subsequent error handlers defined after that point.

- microtask >> task/callback queue (only when all the function in microstask queue are executed the function in the callback queue is executed)
- each promised deffered functionalty  goes into microtask queue
- each non-promised deffered functionalty  goes into callback queue
