const prompt= require("prompt-sync")()
let tab = [];

for(i = 0 ; i < 10 ; i++){
  let n = Number(prompt('Entrer un nombre : '));
  tab.push(n);
}

function produitTableau() {
let produit = 1;
  for (let j = 0; j < tab.length; j++) {
    produit *= tab[j];
  }
  return produit;
  
}
console.log(produitTableau());
