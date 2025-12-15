const prompt = require("prompt-sync")();

function compterOccurrences(tab) {
  let valeur = Number(prompt("Valeur à chercher : "));
  let count = 0;

  for (let i = 0; i < tab.length; i++) {
    if (tab[i] === valeur) {
      count++;
    }
  }

  return count;
}

console.log("Occurrences :", compterOccurrences(tableau));