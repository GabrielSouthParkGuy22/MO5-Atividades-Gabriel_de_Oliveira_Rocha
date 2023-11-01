const prompt = require("prompt-sync")();

function fibonacci(NUM) {
  if (NUM <= 0) {
    console.log("no number in this sequence");
  } else if (NUM === 1) {
    console.log(0);
  } else if (NUM === 2) {
    console.log(0, 1);
  } else {
    let sequence = [0, 1];

    for (let i = 0; i < NUM; ) {
      i = sequence[sequence.length - 1] + sequence[sequence.length - 2];
      sequence.push(i);
    }

    return sequence;
  }
}

let num = parseInt(prompt("Type a number(positive): "));

let retu = fibonacci(num);

console.log(retu);
