const prompt = require("prompt-sync")();

let somme = 0;

for (let i = 0; i < 10; i++) {
    let nb = parseFloat(prompt("Entrer un nombre : "));
    if (nb >= 0) {
        somme += nb;
    }
}

console.log("Somme :", somme);
