//import readlinesync from 'readline-sync';
var read = require("readline-sync")
var puissance = read.question("puissance voulue")
console.log( puissance)
let resultat = Math.pow(2,puissance)
console.log("2 à la puissance 5 = %d",resultat)