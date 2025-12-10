// const prompt=require('prompt-sync')();
//  let number=Number(prompt("donner quelque numero "));
//  if (number<=1){
//       console.log('not premier');
//  }else{
//      let numero=true;
//      for(let i=2;i<number;i++){
//          if(number%i===0){
//              numero=false;
//            break;
//        }else{
//             numero=true;
//          }
//    }
// console.log(numero ? 'premier' :'not premier');

const prompt = require("prompt-sync")();

let number = parseInt(prompt("Entrer un nombre : "));
let isPrime = true;

if (number <= 1) {
    isPrime = false;
}

for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
        isPrime = false;
        break;
    }
}

console.log(isPrime ? "Nombre premier" : "Pas premier");
