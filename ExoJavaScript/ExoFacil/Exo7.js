/*
    ====  Fonction Modulo=====
*/
var read = require("readline-sync")
function vrifierChiffre(chiffre)
{
    const nbre = 3
    let resultat = 0;
    if(chiffre%3 === 0)
    {
         resultat = chiffre/3;
         console.log("le resultat de "+chiffre+ "/"+nbre+" ="+resultat)
    }else
    {
         console.log("le chiffre "+chiffre + " n'est pas divisible par 3")
    }
}


var c1 = parseInt(read.question("saisir un nombre chiffre ?"))
vrifierChiffre(c1)