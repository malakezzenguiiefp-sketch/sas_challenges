const prompt = require("prompt-sync")();

let chaine = prompt("Entrer une chaîne :");

let voyelles = "aeiouyAEIOUY";
let compteur = 0;

for (let i = 0; i < chaine.length; i++) {
  if (voyelles.includes(chaine[i])) {
    compteur++;
  }
}


console.log("Nombre de voyelles : " + compteur);
