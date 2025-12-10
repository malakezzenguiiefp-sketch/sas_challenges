const prompt = require("prompt-sync")();

let base = parseInt(prompt("Base (>0) : "));
let expo = parseInt(prompt("Exposant (>=0) : "));

let resultat = 1;
let i = 0;

while (i < expo) {
    resultat *= base;
    i++;
}

console.log(base + "^" + expo + " = " + resultat);
