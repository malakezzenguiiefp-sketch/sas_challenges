// const prompt = require ("prompt-sync");

// function tableMultiplication(n) {
//   let tab = [];
//   for (let i = 1; i <= 10; i++) {
//     tab.push(n * i);
//   }
//   return tab;
// }

const prompt = require("prompt-sync")();

function tableMultiplication(n) {
  let tab = [];
  for (let i = 1; i <= 10; i++) {
    tab.push(n * i);
  }
  return tab;
}

let nombre = Number(prompt("Entrez un nombre : "));
console.log("Table de multiplication :", tableMultiplication(nombre));
