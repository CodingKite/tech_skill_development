function getData() {
  console.log("outer scope before");
  return new Promise((resolve) => {
    console.log("within promise");
    setTimeout(() => {
      console.log("within settimeout");
      resolve(7);
      console.log("after resolve");
    }, 1000);
  });
  console.log("outer scope after"); // doesnt consoles at all
};

//try1
/*
const data = getData();
console.log("data ",data); // Promise { <pending> }
*/

//try2
/*
const data = await getData();
console.log("data ",data); // SyntaxError: await is only valid in async function
*/

// try2
async function start() {
  const data = await getData(); //waits for the promise to resolve or reject
  console.log("Data ", data);
}

async function start2() {
  getData()
    .then((data) => {
      console.log("Data 2 ", data);
    })
    .catch((err) => {
      console.log("Error ", err);
    })
}

start();
start2();