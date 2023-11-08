const pet = {
  name: "Snoopy",
  specie: "Mutt",
  age: 4,
  noise: function (n) {
    return n + " " + "is barking!";
  },
  aging: function (a) {
    return a + 1;
  },
  exchangeNames: function (en) {
    return en;
  },
};

console.log(pet);
console.log(pet.noise(pet.name));

console.log(pet.aging(pet.age));

console.log(pet.exchangeNames((pet.name = "Maju")));
