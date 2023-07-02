function createUser(name, score) {
  this.name = name;
  this.score = score;
}

createUser.prototype.increment = function(){
  this.score++;
}

createUser.prototype.login = function(){
  console.log("log in");
}

const user1 = new createUser('WIll',9);
const user2 = new createUser('timm',11);

user1.increment();
