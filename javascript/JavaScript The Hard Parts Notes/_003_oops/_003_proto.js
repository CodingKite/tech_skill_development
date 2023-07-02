function createUser(name, score) {
  const newUser = Object.create(userFunctions);
  newUser.name = name;
  newUser.score = score;
  return newUser;
};


const userFunctions = {
  increment: function () { this.score++ },
  login: function () { console.log("Logged Inn") }
};

const user1 = createUser('will', 7);
const user2 = createUser('timm', 11);

user1.increment();

