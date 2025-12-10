const prompt = require("prompt-sync")();

let n = parseInt(prompt("Entrer n : "));

function estPremier(x) {
    if (x < 2) return false;
    for (let i = 2; i <= Math.sqrt(x); i++) {
        if (x % i === 0) return false;
    }
    return true;
}

for (let i = 2; i <= n; i++) {
    if (estPremier(i)) console.log(i);
}