const prompt = require("prompt-sync")();

function validUserName() {
  let name = prompt("type your name: ");
  name = name.toLocaleLowerCase();

  const noInsertAdmin = "admin";

  const beginning = "user@";

  while (true) {
    if (
      name.length >= 12 &&
      name.indexOf(noInsertAdmin) === -1 &&
      name.indexOf("@") !== -1 &&
      name.slice(0, 5) === beginning
    ) {
      console.log(`"User name valid!, your user is ${name}"`);
      break;
    } else if (name.length < 12) {
      console.log("your user name must include at least 12 characters");
      name = prompt("type your name: ");
      name = name.toLocaleLowerCase();
    } else if (name.indexOf(noInsertAdmin) !== -1) {
      console.log("your user name can't include the word 'admin'");
      name = prompt("type your name: ");
      name = name.toLocaleLowerCase();
    } else if (name.indexOf("@") === -1) {
      console.log("your user name must include a '@'");
      name = prompt("type your name: ");
      name = name.toLocaleLowerCase();
    } else {
      console.log("your user name must begin with 'user@'");
      name = prompt("type your name: ");
      name = name.toLocaleLowerCase();
    }
  }

  return name;
}

let retu = validUserName();

console.log(retu);
