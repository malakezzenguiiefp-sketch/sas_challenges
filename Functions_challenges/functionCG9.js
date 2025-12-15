const prompt = require("prompt-sync")();

let tab = [];

for (let j = 0; j < 10 ; j++) {
let n = Number(prompt('Entrer un nombre : '));
tab.push(n);
  
}

function doubler(tab) {
  let nouveau = [];
  for (let i = 0; i < tab.length; i++) {
    nouveau.push(tab[i] * 2);
  }
  return nouveau;
}
console.log("Doubler :", doubler(tab));

