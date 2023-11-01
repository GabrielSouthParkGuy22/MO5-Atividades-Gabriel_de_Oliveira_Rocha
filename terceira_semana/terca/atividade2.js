const prompt = require("prompt-sync")();

function calMed() {
  let num = parseInt(prompt("Type a number: "));
  let sum = 0;
  let count = 0;

  while (num !== 0) {
    sum += num;
    count++;
    num = parseInt(prompt("Type a number: "));
  }

  return sum / count;
}

let retu = calMed();

console.log(retu);
