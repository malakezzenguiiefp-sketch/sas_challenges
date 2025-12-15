const prompt = require("prompt-sync")();


function remplirTableau() {
  let tab = [];
  for (let i = 0; i < 10 ; i++) {
    let nombre = Number(prompt("Entrez un nombre :"));
    tab.push(nombre);
  }
  return tab;
}
console.log(remplirTableau());
