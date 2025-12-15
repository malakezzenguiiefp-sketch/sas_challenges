// function supprimerDoublons(tab) {
//   let unique = [];
//   for (let i = 0; i < tab.length; i++) {
//     if (!unique.includes(tab[i])) {
//       unique.push(tab[i]);
//     }
//   }
//   return unique;
// }
const prompt =require ("prompt-sync")();

function supprimerDoublons(tab) {
  let unique = [];

  for (let i = 0; i < tab.length; i++) {
    if (!unique.includes(tab[i])) {
      unique.push(tab[i]);
    }
  }

  return unique;
}

let tableau = [1, 2, 2, 3, 4, 4, 5];

console.log("Sans doublons :", supprimerDoublons(tableau))