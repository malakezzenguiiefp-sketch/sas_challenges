const prompt = require("prompt-sync")();

function estPremier(x) {
    if (x < 2) return false;
    for (let i = 2; i <= Math.sqrt(x); i++) {
        if (x % i === 0) return false;
    }
    return true;
}

let lignes = parseInt(prompt("Nombre de lignes : "));
let premier = 2;

for (let i = 0; i < lignes; i++) {
    while (!estPremier(premier)) {
        premier++;
    }

    console.log("*".repeat(premier));

    premier++;
}