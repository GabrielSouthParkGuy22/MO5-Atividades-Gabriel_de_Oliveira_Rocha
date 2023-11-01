const prompt = require("prompt-sync")();

function emailCheck(email) {
  const validEmail = "@gmail.com";

  let checkForEmail = email.indexOf(validEmail);

  if (checkForEmail === -1) {
    const indexDomain = email.indexOf("@");
    console.log("It doesn't contain a '@gmail.com'.");
    console.log(`"It contains " ${email.slice(indexDomain)} `);
  } else {
    console.log("It contains a '@gmail.com'.");
    console.log(`"User name: " ${email.slice(0, -10)} `);
  }
}

let email = prompt("Type your email: ");

let retu = emailCheck(email);
