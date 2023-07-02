class CreateUser {

  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  increment() {
    this.score++;
  }

  login() {
    console.log("login");
  }

}

const user1 = new CreateUser('willl', 9);
const user2 = new CreateUser('tim', 11);
