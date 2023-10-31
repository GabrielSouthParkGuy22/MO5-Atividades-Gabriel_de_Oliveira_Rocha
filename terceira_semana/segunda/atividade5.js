const myFun = function (x, y) {
  if (y >= x) {
    while (y >= x) {
      console.log(y);
      y--;
    }
  } else {
    while (x >= y) {
      console.log(y);
      y++;
    }
  }
};

let retu = myFun(0, 20);
