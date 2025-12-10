// const prompt=require("prompt-sync")();


// let somme=0;
// while(true){

//     let n =Number(prompt("entre le nomber : "))
//     if (n==0){
//         break;
//     } 
//    else if (n<100){
//     somme=n+somme
//     break;
//    }
    

// }
// console.log (somme)

const prompt = require("prompt-sync")();

let somme = 0;
let max = 0;

while (true) {
    let nb = parseFloat(prompt("Entrer un nombre (<100, 0 pour arrêter) : "));

    if (nb === 0) break;

    if (nb > 0 && nb < 100) {
        somme += nb;
        if (nb > max) max = nb;
    }
}

console.log("Somme :", somme);
console.log("Maximum :", max);
