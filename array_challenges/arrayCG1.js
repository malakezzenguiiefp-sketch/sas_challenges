const prompt = require('prompt-sync')();
let array = [] ;


for (let i = 0 ; i < 5 ; i++) {
    let n = Number(prompt('Entrer u nnombre : '));
    array.push(n);

}

    console.log(array);
    let inv = [...array].reverse();
    console.log(inv);
