const prompt = require("prompt-sync")();


function sommeTableau(tab) {
  let somme = 0;

  for (let i = 0; i < tab.length; i++) {
    somme += tab[i];
  }

  return somme;
}

let tableau = remplirTableau();
console.log("Somme :", sommeTableau(tableau));
