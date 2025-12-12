const prompt = require("prompt-sync")()

let numbers = [];


for (let i = 0; i < 7; i++) {
    let num = parseInt(prompt("Entrer l'entier numéro " + (i + 1) + " :"));
    numbers.push(num);
}


let max = Math.max(...numbers);
let min = Math.min(...numbers);


console.log("Le plus grand nombre est : " + max);
console.log("Le plus petit nombre est : " + min);
