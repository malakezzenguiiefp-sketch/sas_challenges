 const prompt = require("prompt-sync")();
 
 function inverserTableau(tab) {
  let nouveau = [];

  for (let i = tab.length - 1; i >= 0; i--) {
    nouveau.push(tab[i]);
  }

  return nouveau;
}

console.log("Tableau inversé :", inverserTableau(tableau));