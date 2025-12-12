const prompt= require("prompt-sync")()

let strings = [];

for (let i = 0; i < 3; i++) {
    let text = prompt("Entrer la chaîne numéro " + (i + 1) + " :");
    strings.push(text);
}


let searchText = prompt("Entrez la chaîne à rechercher :");


let position = strings.indexOf(searchText);


if (position !== -1) {
    console.log('La chaîne "' + searchText + '" a été trouvée à la position ' + (position + 1) + ".");
} else {
    console.log('La chaîne "' + searchText + '" n\'a pas été trouvée.');
}