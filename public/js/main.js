// // creation d'un tableau de 50 entier grace a Math Random
// let i;
// let array = [];
// for (let i = 0; i < 50; i++) {
//   array.push(Math.floor(Math.random() * 100));
// }
// console.log(array);

// // 1. Trier le par ordre croissant. Utilisez n'importe quel algorithme de tri que vous voulez (par exemple, le tri à bulles ou le tri par insertion).

// array.sort((a, b) => a - b);
// console.log(array);

// // 2. Trier le par ordre decroissant. Utilisez n'importe quel algorithme de tri que vous voulez (par exemple, le tri à bulles ou le tri par insertion).

// array.sort((a, b) => b - a);
// console.log(array);

// // 3. Creer un tableau de chaine de caractere de l'alphabet trier au Hasard et puis trier le dans l'ordre croissant et decroissant.

// const alphabet = [
//   "c",
//   "d",
//   "e",
//   "f",
//   "g",
//   "h",
//   "i",
//   "j",
//   "k",
//   "a",
//   "b",
//   "l",
//   "m",
//   "n",
//   "o",
//   "p",
//   "q",
//   "r",
//   "s",
//   "t",
//   "u",
//   "v",
//   "w",
//   "x",
//   "y",
//   "z",
// ];
// alphabet.sort(() => Math.random() - 0.5);
// console.log(alphabet);

// alphabet.sort((a, b) => a.localeCompare(b));

// console.log(alphabet);

// alphabet.sort((b, a) => a.localeCompare(b));
// console.log(alphabet);

// // /tableau 2D

// let notesEtudiants = [
//   ["Étudiant 1", "Mathématiques", 80, "Histoire", 90],
//   ["Étudiant 2", "Mathématiques", 70, "Histoire", 95],
//   ["Étudiant 3", "Mathématiques", 60, "Histoire", 85],
// ];

// console.log(notesEtudiants);

// // Ecrivez un programme qui calcule la moyenne des notes d'un étudiant.

// function calculerMoyenneEtudiant(notesEtudiant) {
//   let sommeNotes = 0;
//   let nombreNotes = 0;

//   for (let i = 1; i < notesEtudiant.length; i += 2) {
//     sommeNotes += notesEtudiant[i + 1];

//     nombreNotes++;
//   }
//   let moyenne = sommeNotes / nombreNotes;
//   return moyenne;
// }

// for (let i = 0; i < notesEtudiants.length; i++) {
//   let moyenneEtudiant = calculerMoyenneEtudiant(notesEtudiants[i]);
//   console.log(
//     `La moyenne de l'étudiant ${notesEtudiants[i][0]} est de ${moyenneEtudiant}`
//   );
// }
// // Ecrivez un programme qui renvoie la moyenne des eleves dans un tableau 1D ex: [["Étudiant 1", 80, 90], ["Étudiant 2", 70, 95]] -> ce qui en ressort [85, 82.5].

// function calculerMoyenne(tableauEtudiants) {
//   let moyennes = [];
//   for (let i = 0; i < tableauEtudiants.length; i++) {
//     let etudiant = tableauEtudiants[i];
//     let nom = etudiant[0];
//     let note1 = etudiant[1];
//     let note2 = etudiant[2];
//     let moyenne = (note1 + note2) / 2;
//     moyennes.push(moyenne);
//   }
//   return moyennes;
// }
// let resultat = calculerMoyenne([
//   ["Étudiant 1", 80, 90],
//   ["Étudiant 2", 70, 95],
// ]);
// console.log(resultat);

// // ecrivez un programme qui transpose les lignes et colonnes du tableau d'un tableau en 2D. ex : [[1, 2, 3], [4, 5, 6], [7, 8, 9]] -> [[1, 4, 7], [2, 5, 8], [3, 6, 9]].

// function transposerTableau(tableau) {
//   let transposition = [];
//   for (let i = 0; i < tableau[0].length; i++) {
//     let ligneTransposee = [];
//     for (let j = 0; j < tableau.length; j++) {
//       ligneTransposee.push(tableau[j][i]);
//     }
//     transposition.push(ligneTransposee);
//   }
//   return transposition;
// }
// let resultat = transposerTableau([
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ]);
// console.log(resultat);

