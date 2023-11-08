let numbers = [1, 2, 7, 14, 5, 0, 10, 23, 13, 17, 8, 19];
let num = 7;

let primeNumbers = numbers.filter(primeNum);

function primeNum(num) {
  let i = 2;

  while (i < num) {
    if (num % i === 0) {
      return;
    }
    i++;
  }

  return num;
}

console.log(primeNumbers);

let squareNumber = primeNumbers.map(squareNum);

function squareNum(squaNum) {
  return squaNum * squaNum;
}

console.log(squareNumber);
