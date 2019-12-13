var  read =  require("readline-sync")
var nbre=0;
do {
     nbre =parseInt(read.question("Quel est le nombre voulez-vous saisir ?"))
} while (isNaN(nbre));

console.log("chiffre saisie est : %d ",nbre)