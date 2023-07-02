function userCreator(name, score) {
  const newUser = Object.create(null);
  // console.log(newUser.toLocaleString()); __proto__ not found here hence error
  newUser.name = name;
  newUser.score = score;
  newUser.increment = function () {
    newUser.score++;
  }
  return newUser;
}

const user1 = userCreator('Will', 10);
const user2 = userCreator('Tim', 7);

user1.increment();