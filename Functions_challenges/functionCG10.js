const prompt = require("prompt-sync")();

function fusionner(tab1, tab2) {
  return tab1.concat(tab2);
}

let tableau = [4, 5, 6]; 
let tableau2 = [1, 2, 3];

console.log("Fusion :", fusionner(tableau, tableau2));
