const prompt= require("prompt-sync")()


let numbers = [];

for (let i = 0; i < 8; i++) {
    let num = parseInt(prompt("Entrer un entier numéro " + (i + 1) + " :"));
    numbers.push(num);
}
     
let searchNumber = parseInt(prompt("Entrer le nombre à rechercher :"));

let position = numbers.indexOf(searchNumber);

  
if (position !== -1) {
    console.log("Le nombre est présent à la position : " + (position + 1));
} else {
    console.log("Le nombre n'est pas présent dans la liste.");
}
