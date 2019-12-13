var read = require("readline-sync")
var mot =  read.question("Saisir un phrase ?")

function verifMot(mot)
{
  return mot.length;
}

let  nbreCar = verifMot(mot)
if( nbreCar<=8)
{
    console.log("le mot contient %d",nbreCar," caracteres")
} else
{
    console.log("le mot fait plus de 8 caractères !")
}