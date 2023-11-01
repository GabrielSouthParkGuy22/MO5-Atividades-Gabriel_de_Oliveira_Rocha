const prompt = require("prompt-sync")();

function invertedText(TEXT) {
  let inverted = "";

  for (let i = 1; i <= TEXT.length; i++) {
    inverted += TEXT[TEXT.length - i];
  }

  return inverted;
}

let text = prompt("Type a text: ");

let retu = invertedText(text);

console.log("\n" + "inverted string:" + " " + retu);
