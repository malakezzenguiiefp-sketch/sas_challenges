const prompt = require("prompt-sync")();
tab = [];
count = 0;
for (let i = 0; i < 6; i++) {
  let n = prompt(" entrez un nombre n ");
  tab.push(n);
}
console.log(tab);

function compterOccurrences() {
  let valeur = Number(prompt("Valeur à chercher : "));
  for (let i = 0; i < tab.length; i++) {
    if (valeur == tab[i]) {
      count++;
    }
  }
  console.log(count);
  
}

compterOccurrences();
