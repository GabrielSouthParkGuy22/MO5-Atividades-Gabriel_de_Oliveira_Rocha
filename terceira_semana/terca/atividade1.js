const prompt = require("prompt-sync")();

function sumNums(N1, N2) {
  let sum = 0;

  for (let i = 0; i < N2; i++) {
    console.log(sum);
    sum += N1;
  }

  return sum;
}

let num1 = parseInt(prompt("Type a number: "));
let num2 = parseInt(prompt("Type a second number: "));

let retu = sumNums(num1, num2);

console.log(retu);
