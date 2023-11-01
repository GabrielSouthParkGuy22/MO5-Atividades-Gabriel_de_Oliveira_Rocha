const prompt = require("prompt-sync")();

function rectangle() {
  while (true) {
    let printRectangle = prompt("Do you wish to print a rectangle?: (s/n)");

    if (printRectangle == "s") {
      let A = parseInt(prompt("Type the height: "));
      let L = parseInt(prompt("Type the width: "));

      if (L > A && L > 0 && A > 0) {
        let conc = "";
        for (let i = 0; i < A; i++) {
          while (conc.length != L) {
            conc += "*";
          }
          console.log(conc);
        }
      } else {
        console.log("Input invalid!!");
      }
    } else {
      break;
    }
  }
}

let retu = rectangle();
