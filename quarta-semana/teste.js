const sales = {
  client: "Gabriel",
  products: [
    {
      name: "Nuclear Throne",
      price: 24.89,
    },
    {
      name: "Hades",
      price: 74.99,
    },
    {
      name: "Spelunky",
      price: 28.99,
    },
  ],
};

let finalPrice = 0;

for (let i in sales["products"]) {
  console.log(sales["products"][i]["price"]);
  finalPrice += sales["products"][i]["price"];
}
