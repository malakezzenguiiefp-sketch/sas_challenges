const prompt = require("prompt-sync")();
let array = [];

for (i = 0; i < 10; i++) {
  let n = parseInt(prompt("entrer un nombre "));
  array.push(n);
}

function filtrerPairs() {
  let pairs = array.filter((array) => array % 2 === 0);
  
  console.log(pairs);
}
filtrerPairs();


