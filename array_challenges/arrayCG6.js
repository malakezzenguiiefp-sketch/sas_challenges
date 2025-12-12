const prompt = require("prompt-sync")();


let n = parseInt(prompt("Combien d'entiers voulez-vous entrer ? "));


let numbers = [];


for (let i = 0; i < n; i++) {
    let num = parseInt(prompt("Entrer l'entier numéro " + (i + 1) + " : "));
    numbers.push(num);
}


console.log("Les carrés des nombres sont :");
for (let i = 0; i < n; i++) {
    console.log(numbers[i] + "² = " + (numbers[i] * numbers[i]));
}