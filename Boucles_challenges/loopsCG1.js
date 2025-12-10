//const n = 1
// for(let i = 1 ; i <= 20 ; i++){console.log(n * i);}
//for(let i = 1 ;i <=10;i++){
   // console.log (n*i);

const prompt = require("prompt-sync")();

let n = parseInt(prompt("Entrer un nombre : "));

for (let i = 1; i <= 10; i++) {
    console.log(n + " x " + i + " = " + (n * i));
}

