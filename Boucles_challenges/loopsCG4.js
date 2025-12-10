const prompt = require("prompt-sync")();

let n = prompt("Entrer un nombre : ");
let inverse = "";

for (let i = n.length - 1; i >= 0; i--) {
    inverse += n[i];
}

console.log("Inversé =", inverse);