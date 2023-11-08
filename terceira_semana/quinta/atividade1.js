let myArray = [
  "Estudar JavaScript",
  "Fazer exercícios de arrays",
  "Preparar apresentação",
  "Enviar relatório",
  "Terminar modulo 4 - Feito",
  "Aprender html e css - Feito",
];

for (let i = 0; i <= myArray.length - 1; i++) {
  console.log(`${i + 1} - ${myArray[i]}`);
}

let result = myArray.filter(NotDone);

function NotDone(task) {
  return task.includes("Feito") == false;
}

console.log("\n", result);

let order = result.sort();
console.log("\n", order);

let initialTasks = order.slice(0, 2);
console.log("\n", initialTasks);

let removeLastTask = order.pop();
console.log("\n", order);

let addNewTask = order.push("Ler livro novo");
console.log("\n", order);
