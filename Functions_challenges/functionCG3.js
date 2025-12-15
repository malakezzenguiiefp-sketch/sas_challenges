const prompt = require("prompt-sync")();

function maxTableau(tab) {
  let max = tab[0];

  for (let i = 1; i < tab.length; i++) {
    if (tab[i] > max) {
      max = tab[i];
    }
  }

  return max;
}

console.log("Max :", maxTableau(tableau));