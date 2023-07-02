function userCreator(name, score) {
  const newUser = {};
  console.log(newUser.toLocaleString());
  newUser.name = name;
  newUser.score = score;  
  newUser.increment = function () { // this function has two Scopes (Gloabal and Closure)
    newUser.score++;
  }
  return newUser;
}

const user1 = userCreator("Will", 3);
const user2 = userCreator("Tim", 5);

user1.increment(); //accesses newUser.score from the backpack of data it got/carried with itself when returned.