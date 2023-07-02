const url = "http://worldtimeapi.org/api/timezone/America/New_York";

async function getData() {
  const response = await fetch(url);
  console.log("response ", response, response.body);
  const data = await response.json(); //json() is an asnyc function
  console.log("Data ", data);
}

getData();

