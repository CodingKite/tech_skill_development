//try 1
/*
let api = 'https://jsonplaceholder.typicode.com/todos/';

async function start(){
  const original_data = await fetch(api);
  console.log('original_data data ',original_data);
  const final_data = await original_data.json();
  console.log('final_data data ',final_data);
}

start(); // Promise Pending
*/


//try 2
/*
let api = 'https://jsonplaceholder.typicode.com/todos/';

function start2(){
  return fetch(api);
}

let promise = start2();
promise
  .then((data)=> data.json())
  .then(result => console.log("result => ", result));
*/


//try 3
/*
let api = 'https://jsonplaceholder.typicode.com/todos/';

function start2() {
  fetch(api)
    .then((data) => data.json())
    .then(result => console.log("result => ", result));
}

start2();
*/

const me = {
  async sayHello(){
    const result = await fetch('https://jsonplaceholder.typicode.com/todos/');
    return 'Hello World'
  },
  sayHii(){
    return 'Heyy'
  }
}

me.sayHello(); // Promise