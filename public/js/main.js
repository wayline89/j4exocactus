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

// exo yt

// for (let i = 0; i <= 5; i++) {
//   if (i % 2 !== 0) console.log(i);
// }

// for (let i = 5; i >= 1; i--) {
//     if (i % 2 !== 0) console.log(i);
//   }

// let i=0
// while (i<=10) {
//   console.log('bonjour', i);
//   i= i + 1
// }

// const notes = [44,55,77,66,33,22]
//   for (let i = 0; i < notes.length; i++) {
//     console.log(i);
//   }

//   for (let i in notes) {
//     console.log(notes[i]);
//   }

//  const bjrr = ";kqdshgmqsdghsmdg"
//  for (let letter in bjrr) {
//   console.log(letter);
// }

// let chiffre = prompt("entrez un chiffre");
// // if (chiffre > 100 || chiffre < 0) {
// //   console.log("le nombre pas entre 0 et 10");
// // }

// if (chiffre > 100 || chiffre < 0) {
//   console.log("le nombre pas entre 0 et 100");
// } else {
// for (let i = chiffre; i > 0; i--) {
//     console.log(i);
// }
//   }

// if (chiffre > 100 || chiffre < 0) {
//   console.log("le nombre pas entre 0 et 100");
// } else {
// for (let i = chiffre; i <= 100; i++) {
//     console.log(i);
// }
//   }

// let guess = 8
// let chiffre
// while (chiffre !== guess) {
//   chiffre = prompt("votre chiffre") * 1
//   if (chiffre < guess) {
//     console.log("plus")
//   } else if (chiffre > guess) {
//     console.log("moins")
//   }
// }
// console.log("termine")

// // 01/2023

// // Créer une fonction qui prend deux paramètres, et les additionne, et fait un console.log du résultat.(Additionner)

// function add(x, y) {
//   console.log(x + y);
// }
// add(2, 3);

// // // EXO2
// // // Créez une fonction qui prend deux paramètres, et soustrait le deuxième au premier, et faites un console.log du résultat.(Soustraction)

// function Soustraction(x, y) {
//   console.log(x - y);
// }
// Soustraction(5, 3);

// // // EXO3
// // // Créez une fonction qui prend deux paramètres, et les multiplie, et faites un console.log du résultat.(Multiplication)

// function Multiplication(x, y) {
//   console.log(x * y);
// }
// Multiplication(5, 3);

// // // EXO4
// // // Créez une fonction qui prend deux paramètres, et divise le premier par le deuxième, et faites un console.log du résultat.(Division)

// function Division(x, y) {
//   console.log(x / y);
// }
// Division(50, 2);

// // // EXO5
// // // Créez une fonction qui prend deux paramètres, et retourne le reste de la division du premier par le deuxième, et faites un console.log du résultat.(Modulo)

// function Modulo(x, y) {
//   console.log(x % y);
// }
// Modulo(10, 3);

// // // EXO6
// // // Créez une fonction qui prend un paramètre, et retourne le carré de ce nombre, et faites un console.log du résultat.(Racine carrée)

// function square(x) {
//   return x * x;
// }
// console.log(square(4));

// // // EXO7
// // // Créez une fonction qui prend deux paramètres, et retourne le premier nombre à l'exposant du deuxième, et faites un console.log du résultat.(Exposant)

// function exponent(base, exp) {
//   return Math.pow(base, exp);
// }

// console.log(exponent(2, 3));

// // // EXO8
// // // Créer une function [capitalize] qui transforme n'importe quelle chaine de caractères avec la première lettre en majuscule et le reste en minuscule;

// function capitalize(str) {
//   return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
// }
// console.log(capitalize("test"));

// // // EXO9
// // // Créer une function [calcul] ayant 3 paramètres
// // // nbr1 , operator , nbr2
// // // Je dois pouvoir mettre un nombre choisir entre + - * ou / et un second nombre et obtenir une réponse (Utilisez un switch)

// function calcule(nbr1, operator, nbr2) {
//   switch (operator) {
//     case "+":
//       return nbr1 + nbr2;
//       break;
//     case "-":
//       return nbr1 - nbr2;
//       break;
//     case "*":
//       return nbr1 * nbr2;
//       break;
//     case "/":
//       return nbr1 / nbr2;
//       break;
//     default:
//       return "Operateur non valide";
//   }
// }

// console.log(calcule(1, "+", 2));
// console.log(calcule(4, "-", 2));
// console.log(calcule(3, "*", 4));
// console.log(calcule(8, "/", 2));
// console.log(calcule(1, "$", 2));

// // EXO1
// // Créer une function [reverseNumber] qui retourne une série de nombre à l'envers (exemple si j'entre 851 elle me retourne 158)

// function reverseNumber(number) {
//   return number.toString().split("").reverse().join("");
// }
// console.log(reverseNumber(12345)); // affiche 54321

// // EXO2
// // Créer une function [divPar2] contenant un switch qui vérifie si un nombre est divisible par 2
// // Qui répond "Le num x est divisible par 2 x:2 = z"
// // Dans le cas ou ce n'est pas divisible il répond : "Ce nombre n'est pas divisible par 2"

// function divPar2(x) {
//   switch (x % 2) {
//     case 0:
//       return `Le num ${x} est divisible par 2 ${x}:2 = ${x / 2}`;
//       break;
//     default:
//       return "Ce nombre n'est pas divisible par 2";
//   }
// }

// console.log(divPar2(4));
// console.log(divPar2(3));
// console.log(divPar2(0));

// // EXO3
// // Créer une fonction [logIn] qui va demander à l'utilisateur un mot de passe et vérifier s'il a bien entré "mdp" si oui, faites une alert "Vous êtes connecté", si non, redemander le mot de passe jusqu'à ce que l'utilisateur rentre "mdp"

// // function logIn() {
// //   let password = prompt("mot de passe=mdp");
// //   while (password !== "mdp") {
// //     password = prompt(" incorrect");
// //   }
// //   alert("OK");
// // }
// // logIn();

// // Écrivez une fonction qui prend un nombre en entrée et qui renvoie la somme des n premiers nombres naturels.
// // Par exemple, si on appelle la fonction avec 5 en entrée, elle devra renvoyer 15 (1 + 2 + 3 + 4 + 5).

// function sumFirstNNaturalNumbers(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }
// console.log(sumFirstNNaturalNumbers(9));

// // Écrivez une fonction qui prend un nombre en entrée et qui renvoie vrai si ce nombre est un nombre premier, et faux sinon.
// // Un nombre premier est un nombre qui n'est divisible que par 1 et par lui-même.
// // Par exemple, 2 est un nombre premier, alors que 4 ne l'est pas (il est divisible par 2).

// function isPrime(n) {
//   if (n < 2) {
//     return false;
//   }
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isPrime(3)); // affiche true
// console.log(isPrime(4)); // affiche false

// // Écrivez une fonction qui prend un tableau de chaînes de caractères en entrée et qui renvoie une nouvelle liste contenant les chaînes de caractères triées par ordre alphabétique.
// // Par exemple, si on appelle la fonction avec ["girafe", "chien", "chat", "oiseau"] en entrée, elle devra renvoyer ["chat", "chien", "girafe", "oiseau"].

// function sortWords(words) {
//   return words.sort();
// }
// console.log(sortWords(["chat", "chien", "girafe", "oiseau"]));

// // Écrivez une fonction qui prend un nombre en entrée et qui renvoie la somme des chiffres de ce nombre.
// // Par exemple, si on appelle la fonction avec 123 en entrée, elle devra renvoyer 6 (1 + 2 + 3).

// function sumDigits(n) {
//   let sum = 0;
//   while (n > 0) {
//     sum += n % 10;
//     n = Math.floor(n / 10);
//   }
//   return sum;
// }

// console.log(sumDigits(123));

// // Écrivez une fonction qui prend un tableau de nombres en entrée et qui renvoie vrai si le tableau est un palindrome (c'est-à-dire si le tableau est le même lorsqu'on le lit de droite à gauche ou de gauche à droite), et faux sinon.
// // Par exemple, si on appelle la fonction avec [1, 2, 3, 2, 1] en entrée, elle devra renvoyer vrai. Si on l'appelle avec [1, 2, 3, 4, 5] en entrée, elle devra renvoyer faux.

// function isPalindrome(array) {
//   const reversedArray = array.slice().reverse();

//   return array.every((value, index) => value === reversedArray[index]);
// }
// console.log(isPalindrome([1, 2, 3, 2, 1]));

// console.log(isPalindrome([1, 2, 3, 4, 5]));







// // 1. Exo 1 
// //   - Créez un objet avec vos valeurs
// //   - 'Nom', 'prenom', 'age', 'taille'
// //   - Affichez votre age via un console.log()

// let moi = {
//   nom : 'dug',
//   prenom : 'laurent',
//   age : 33,
//   permis: true,
//   poche: ['cle', 'portefeuille'],
//   sePresenter(){
//   console.log(`Bonjour je suis ${moi.prenom}, j'ai ${moi.age} ans`);
// }
// }

// moi.sePresenter()

// console.log(moi.age + ' ans');

// // 2. Exo 2 
// //   - Créez un second et un 3eme personnage (le 3eme personnage doit rester vide)


// let autre = {
//   nom : 'aaa',
//   prenom : 'bbb',
//   age : 66,
//   permis: true,
//   poche: ['pomme', 'banane'],
//   sePresenter(){
//   console.log(`Bonjour je suis ${autre.prenom}, j'ai ${autre.age} ans`);
// }
// }


// let troisieme = {

// }

// // 3. Exo 3
// //   - Remplir les propriétées du 3eme personnage

// troisieme.prenom = 'personnage1'
// troisieme.nom = 'nomccc'
// troisieme.age = '55'
// troisieme.permis = true

// console.log(troisieme.age + ' ans');
// console.log(troisieme.nom );
// console.log(troisieme.prenom);

// //   - Son nom doit valoir le nom du personnage1

// //   - Son age doit valoir celui du personnage2
// console.log(troisieme.age + ' ans');


// // exo 3 


// moi.sePresenter()


// // 4. Exo 4
//   // - Créer un objet avec un nom et une méthode
//   // - La méthode de votre objet lance un prompt permetant de changer son age
//   // - Une alert renvoi "[nom de l'objet] a [age de l'objet] ans"

// let aaa = {
//   nom: "aaaa",
//   age: 0,
//   changeAge: function() {
//     aaa.age = prompt("Entrez l'âge de aaaa:");
//   },
//   lagedef: function() {
//     alert(`${aaa.nom} a ${aaa.age} ans.`);
//   }
// }

// aaa.changeAge();
// aaa.lagedef();




// // ## Exo 1

// // ### Créer deux personnages du nom de François et Sergio
// // ### Donnez leur à chacun une propriété panier (tableau) contenant tous deux des ingrédients différents du super marché, par exemple huile,tomate,pain etc..
// // ### Rajouter à François la méthode derober, qui prend 2 aliments du panier de Sergio et les met dans son panier.


// let François = {

//   Panier: ['eau', 'fromage','biscuits','viande'],
//   derober: function(Sergio) {
//     this.Panier.push(Sergio.Panier.shift());
//     this.Panier.push(Sergio.Panier.shift());
//   }
// }

// let Sergio = {

//   Panier: ['pain','pomme','tarte','banane'],

// }

// console.log(François.Panier);
// François.derober(Sergio)
// console.log(François.Panier);


// // ## Exo 

// // ### Créer un objet "vieille_dame" avec une propriété "âge" assez élevée une propriété "nom" contenant un "prenom" et un "nom de famille" (/!\ Objet dans objet), une propriété "moral" avec comme valeur "mal" et une propriété "objet" par exemple une canne 

// // ### une méthode "parler" qui selon son moral fait une alert différente, si son moral = "mal" alors elle dira "Vous me dérangez et le frappe avec son objet", si son moral = "bien" alors elle dira "bonjour" + le nom du vieil_homme.

// // ### Créer ensuite l'objet vieil_homme avec une propriété "nom" et une méthode "adoucir" qui change le moral de la "vieille_dame" en "bien".

// // ### Faites parler la vieille dame, puis lancer la méthode adoucir du vieil homme et relancer la méthode parler de la vieille dame.


// let vieilleDame = {
//   age: 85,
//   nom: {
//     prenom: "Dame",
//     nomDeFamille: "Vieille",
//   },
//   moral: "mal",
//   objet: "cane",
//   parler: function(vieilHomme) {
//     if (this.moral === "mal") {
//       alert(`Vous me dérangez et le frappe avec sa ${this.objet}`);
//     } else if (this.moral === "bien") {
//       alert("Bonjour " + vieilHomme.nom.prenom + " " + vieilHomme.nom.nomDeFamille);
//     }
//   }
// }
// let vieilHomme = {
//   nom: {
//     prenom: "boubou",
//     nomDeFamille: "nomnoom"
//   },
//   adoucir: function(vieilleDame) {
//     vieilleDame.moral = "bien";
//   }
// }
// vieilHomme.adoucir(vieilleDame);
// console.log(vieilleDame.moral); 

// vieilleDame.parler(vieilHomme);
// console.log(vieilleDame.moral); 





// // ## EXO1
// // ### Créer une class Personnage avec comme propriétés : 
// // ### age , nom , ville
// // ### Faire 2 instances de cette class.

// // ## EXO2
// // ### Rajouter la methode 'sePresenter' à la class Personnage qui dira "Bonjour, je m'appelle [nom-de-la-personne] !" via un console.log
// // ### Lancer cette méthode sur les deux instances de l'exo1



// class Personnage {
//   constructor(age, nom, ville) {
//     this.age = age;
//     this.nom = nom;
//     this.ville = ville;
//   }

//     presentation = function () {
//     console.log( `Bonjour, je m'appelle ${this.nom} !.`);
//   }
// }

// homme = new Personnage(25, "Bob", "Paris")
// femme = new Personnage(30, "Alice", "Lyon")

// homme.presentation()
// femme.presentation()



