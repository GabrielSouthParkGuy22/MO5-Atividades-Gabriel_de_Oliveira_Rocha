const prompt = require("prompt-sync")();

const gamesLibrary = [];

function Games(name, released, price, genre) {
  this.name = name;
  this.released = released;
  this.price = price;
  this.genre = genre;
  this.discount = function (dis) {
    return (dis * this.price) / 100;
  };
}

function addGames() {
  let registerNum = prompt("type how many games will be add: ");

  for (let i = 0; i < registerNum; i++) {
    let gameName = prompt("type the game's name: ");
    let gameRelease = parseInt(prompt("type when the game was released: "));
    let gamePrice = parseFloat(prompt("type the game's price: "));
    let gameGenre = prompt("type the game's genre: ");

    const game = new Games(gameName, gameRelease, gamePrice, gameGenre);

    gamesLibrary.push(game);
  }
}

addGames();

console.log(gamesLibrary);

for (let i in gamesLibrary[0]) {
  if (i !== "discount") {
    console.log(`${i}: ${gamesLibrary[0][i]}`);
  } else {
    let applyDis = gamesLibrary[0].discount(50);
    console.log(`${i}: ${applyDis.toFixed(2)}`);
  }
}
