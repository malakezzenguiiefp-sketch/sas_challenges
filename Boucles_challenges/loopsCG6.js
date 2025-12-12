const prompt = require("prompt-sync")();

// let base = parseInt(prompt("Base (>0) : "));
// let expo = parseInt(prompt("Exposant (>=0) : "));

// let resultat = 1;
// let i = 0;

// while (i < expo) {
//   resultat *= base; // resulat *= base ; --> result = result * base ;
//   i++;
// }

// console.log(base + "^" + expo + " = " + resultat);

let base = Number(prompt("enter a number : "));
let expo = Number(prompt("enter a number  : "));

// console.log(Math.pow(base, 4));

let result = 1;
for (let index = 0; index < expo; index++) {
  result *= base;
}

console.log(result);
