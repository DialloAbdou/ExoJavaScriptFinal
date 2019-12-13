
var read = require("readline-sync")
console.log("======Jeux Le Morpion======= ");
// ======Un tableau à deux dimension
let morpion =[
             [0,0,0],
             [0,0,0],
             [0,0,0]
           ]

afficheMorpion(morpion);// Affiche Le Morpion
let fin = false;
let tour=1;
let ligneSaisie=0;
let colonneSaisie=0;
let nbGrille= 9;
while(nbGrille >0 && !fin)
{
    while(!fin)
    {
        let positionOk = false;
        while(!positionOk)
        {
            console.log("Quelle position voulez-vous ?")
              ligneSaisie = parseInt(read.question("Choisir la ligne "));
              colonneSaisie = parseInt(read.question("choisir la colonne "));
            positionOk = isVerifPosition(ligneSaisie,colonneSaisie, morpion);
            if(!positionOk) console.log("votre position n'est pas bonne");
        }
        morpion[ligneSaisie-1][colonneSaisie-1]= tour;
        nbGrille--;
        afficheMorpion(morpion);// Affiche Le Morpion
         fin = isverifFinJeux(morpion); // veruf fin de jeud
         if(fin)
         {
             console.log("le joueur %d a pu gagné",tour)
         }
        (tour===1)?tour=2:tour=1
    
    }
}
if(nbGrille===0)
{
    console.log("Desoler personne n'a gagné !")
}

function isverifFinJeux(tab) {

    for(let i=0; i< tab.length; i++)
    {
        if(tab[i][0]===tab[i][1] && tab[i][0]===tab[i][2]&&tab[i][0]!=0) return true;
        else if(tab[0][i]===tab[1][i] && tab[0][i]===tab[2][i]&&tab[0][i]!=0)return true
    }
    if(tab[0][0] === tab[1][1] && tab[0][0] === tab[2][2] && tab[0][0]!==0) return true;
    if(tab[2][0] === tab[1][1] && tab[2][0] === tab[0][2] && tab[2][0]!==0) return true;
    
}
//======Developpement de l'application======
/**
 * verifier la position du morpions
 * @param {linge} ligne 
 * @param {colonne} colonne 
 * @param {le tableau} tab 
 */
function  isVerifPosition(ligne, colonne, tab) {
    
    if(ligne>=1&& ligne<=3&&colonne>=1&& colonne<=3 && tab[ligne-1][colonne-1]===0)
    {
        return true;
    }else
    {
        return false;
    }
}
function afficheMorpion(tab) {
    for(let i=0; i<tab.length; i++)
    {
        let texte=""
       for(let j=0; j<tab[i].length; j++)
       {
            if(morpion[i][j]===0)
            {
                texte+="| |";
            }else if(morpion[i][j]===1)
            {
                texte+="|x|";

            }else if(morpion[i][j]===2)
            {
                texte+="|o|";

            }
       }
       console.log(texte);
    }
}