var  read = require("readline-sync")
var nbre =0;
var  isVerif = true;
nbre =  parseInt(read.question("Saisir le chiffre 3 "))
while(nbre!==3)
{
    console.log("Vous n'avez pas saisi le bon chiffre")
    nbre =  parseInt(read.question("Saisir le chiffre 3 "))
}
console.log("Bravo ! vous avez saisi le bon chiffre 3");