import fetch from 'node-fetch';

// async function getList() {
//   return new Promise((resolve, reject) => {
//     let data;
//     fetch(api).then(response => data = response);
//     console.log(data);
//   })
// }


let api = 'https://jsonplaceholder.typicode.com/todos/';
async function getList() {
  return new Promise((resolve, reject) => {
    fetch(api)
      .then(response => {
        // Perform some processing on the response object
        console.log("First .then", response);
        // Modify the response data or perform additional operations
        // return response;
        return response.json();
      })
      .then(response => {
        console.log("Second .then:", response); //will print undefine it nothing is returned or resolved from the callaback passed in the previous then()
        resolve(response);
      })
      .catch(error => {
        console.error("Error:", error);
        reject(error);
      });
  });
}

const toDoUI = [];

const toDoList = getList();
console.log("toDoList => ", toDoList);

toDoList.then(data => {
  console.log("toDoList.then => ", data);
  data.forEach(item => {
    toDoUI.push(`${item.title}`);
  })
  console.log("funal toDoUI ", toDoUI);
})

console.log("END ", toDoUI);