const prompt = require("prompt-sync")();
let array =[];
const menu = `
1 : l'addition
2 :  soustraction 
3 :  multiplication 
4 :  division 
5 :  puissance 
6 : racine carrée 
7 : factorielle 
8 : lhistorique`

function addition() {
  let a = Number(prompt("entrer un nombre "));

  let b = Number(prompt("entrer un nombre "));
  c = a + b;
  console.log(c);
  array.push (a + "+" + b +"="+ c)
  menup();
}
function soustraction (){
    let a = Number(prompt("entrer un nombre"));
    let b = Number(prompt("entrer un nombre"));
    c = a - b;
    console.log (c);
      array.push (`${a}-${b}=${c}`)

    menup();
}
function multiplication (){
let a = Number(prompt("entrer un nombre"));
let b = Number(prompt("entrer un nombre"));
let c = a * b ;
console.log (c);
  array.push (`${a}*${b}=${c}`)

menup ();

}
function  division (){ 
    let a = Number(prompt("entrer un nombre"));
    let b= Number(prompt("entrer un nombre"));
    let c = a / b;
    console.log (c);
      array.push (`${a}/${b}=${c}`)

    menup();

}
function  puissance (){
let a = Number(prompt("entrer un nombre"));
let b = Number(prompt("entrer un nombre"));
let c = a**b
console.log (c)
  array.push (`${a}**${b}=${c}`)

menup ();
}

function  racinecarrée (){
let a = Number(prompt("entrer un nombre"))
let c = Math.sqrt (a);
console.log (c)
  array.push (`racinecarrée ${a}=${c}`)

menup();




}
function factorielle (){
let a = Number(prompt("entrer un nombre"));
let c = 1;

  for (let i = 1; i <= a; i++) {
    c *= i;
  }
  
console.log(c);
  array.push (` factorielle${a}=${c}`)

menup();

}
function lhistorique(){
  console.table(array);
  
}

function menup() {
  console.log(menu);
  let choix = prompt("choisier un choix ");
  switch (choix) {
    case "1":
      addition();
      break;
    case "2":
    soustraction();
    break;
    case "3":
     multiplication();
     break;
       
    case "4":
    division();
    break;  
    case "5":
    puissance();
    break;
    case "6":
     racinecarrée(); 
     break;
    case "7":
    factorielle ();
    break;
    case "8":
      lhistorique ();
    break;
  }
}
menup();
