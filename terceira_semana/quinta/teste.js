let myArray = [
  "Gabriel de Oliveira",
  "Gabriel Santos",
  "Gabriel Rocha",
  "Ruan da Silva",
  "Ruan Oliveira",
  "Ruan Roberto",
];

function teste() {
  let desiredValues = [];

  for (let j = 0; j <= myArray.length - 1; j++) {
    console.log(myArray[j].includes("Gabriel"));
    if (myArray[j].includes("Gabriel")) {
      desiredValues.push(myArray[j]);
    }
  }

  return desiredValues;
}

let retu = teste();

console.log(retu);

let mySecondArray = [
  {
    name: "Nuclear Throne",
    released_date: 2015,
    available: "Steam",
    price: 24.89 + "R$",
  },
  {
    name: "Pizza Tower",
    released_date: 2023,
    available: "Steam",
    price: 36.99 + "R$",
  },
  {
    name: "Hades",
    released_date: 2020,
    available: "Steam",
    price: 74.99 + "R$",
  },
  {
    name: "Severed Steel",
    released_date: 2021,
    available: "Steam",
    price: 47.49 + "R$",
  },
  {
    name: "Alan Wake",
    released_date: 2023,
    available: "Epic Games",
    price: 225.0 + "R$",
  },
  {
    name: "Darkest Dungeon 2",
    released_date: 2023,
    available: "Epic Games",
    price: 121.99 + "R$",
  },
];

let myGame = mySecondArray.filter(findGame);

function findGame(game) {
  return game["available"] == "Steam";
}

console.log("\n", myGame);
