let weather; //value of which is returned by getWeather()

function getWeather() {
  /*
  return new Promise((resolve, reject) => {
    resolve(weatherReport);
    reject('Error');
  })
  */

  return new Promise(function (resolve, reject) {
    resolve(weatherReport); //Promise fulfilled
    reject('Error'); // Promise rejected
  })
}

//WAY 1
const promise = getWeather();
promise.then(function (data) {
  console.log(`Data : ${data}`);
}, function (error) {
  console.log(`Error : ${error}`);
})

//WAY 2
getWeather().then(function (data) {
  console.log(`Data : ${data}`)
}, function (error) {
  console.log(`Error : ${error}`);
})

//WAY 3
function onSuccess(data) {
  console.log(`Data : ${data}`);
}

function onError(error) {
  console.log(`Error : ${error}`);
}

getWeather().then(onSuccess(data), onError(error));
getWeather().then(onSuccess, onError); //beauty of then function...the data/error goes in the function automatically. So when resolve() is executed 'onSuccess() is executed with data parameter' and when reject() is executed `onError is executed with error`.


/*
States of an Promise
  - Pending : when we create an new promise,by default it is Pending state meaning we are waiting.
  - Fullfileed : when we call resolve(promise is fullfiled and data is returned)
  - Rejected : when we reject(promis is rejected and )
  - Inside then(), the first paramter is the callback function to execute when resolve() is called and the second parameter is the callback function to execute when reject() is called.
  - So in then(), when the promise is fullfilled first parameter(callback function) is called and when the promise is rejected the second parameter(callback function) is called.

*/


getWeather()
  .then(getWeatherIcon) // what ever got resolved in getWeather() is passed into getWeatherIcon
  .then(onSuccess, onError); // in the function onSuccess, the data returned from getWeatherIcon is passed into onSuccess ... if nothing is returned from callback function of previous then(getWeatherIcon), in that case the consecutive then does not get the values passed on..


  getWeather()
  .then(onSuccessOne(data), onErrorOne(error))
  .then(onSuccessTwo(data), onErrorTwo(error))
  .catch(err){
    console.log(err)
  }

/*EXAMPLE

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
        console.log("Second .then:", response); //will print undefine it nothing is returned from the callabak passed in the previous then()
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
    toDoUI.push(`${ item.title } `);
  })
  console.log("funal toDoUI ", toDoUI);
})

console.log("END ", toDoUI);

*/


