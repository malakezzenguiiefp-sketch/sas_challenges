const prompt = require ("prompt-sync")();
let tab = [];

for(i = 0 ; i < 10 ; i++) {
  let n = Number(prompt('Entrer un nombre : '));
  tab.push(n);
}
function moyenne(tab) {
  let somme = 0;
  for (let i = 0; i < tab.length; i++) {
    somme += tab[i];
  }
  return somme / tab.length;
}
console.log("Moyenne :", moyenne(tab));