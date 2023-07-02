/*
function getData(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      // resolve('here is your data');
      reject('i reject u'); //UnhandledPromiseRejectionWarning
    },1);
  });
}


async function start(){
  const result = await getData();
  console.log("result ",result);
}

start();
*/

/*
function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve('here is your data');
      reject('i reject u'); 
    }, 1);
  });
}

async function start() {
  try {
    const result = await getData();
    console.log("result ", result);
  } catch (err) {
    console.log("error => ", err);
  }
}
start();
*/

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve('here is your data');
      reject('i reject u'); 
    }, 1);
  });
}

async function start() {
  const result = await getData()
    .then((result => { console.log("result", result) }))
    .catch(err => console.log("error ", err));
    // if the promise is rejected we do not want to print the below console. this does not happen in try catch block bcux they work as if else statements.
  console.log("result ", result); //undefined
}

start();