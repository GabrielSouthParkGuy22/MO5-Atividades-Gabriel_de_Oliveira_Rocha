const person = {
  name: "Gabriel",
  age: 19,
};

console.log(person);

person.age = 20;
console.log(person.age);

console.log("\n =================================================== \n");

const person2 = {
  name: "Ruan",
  age: 18,
  presentation: function () {
    return "Welcome" + " " + this.name;
  },
};

for (let i in person2) {
  console.log(person2[i]);
}
console.log(person2.presentation());

person.email = "examplenotexistingfakemail@gmail.com";
console.log("\n", person.email);
