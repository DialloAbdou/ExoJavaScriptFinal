
var read = require("readline-sync");
let unchoix = 0;
//== Application Principale==
  Menu(); 
  while(unchoix!=3)
  {
    unchoix = read.questionInt("Quel est votre choix");
    choix(unchoix)
  }
  
//======Developpement de l'application ===============

/***
 *  ===Le Menu d' application 
 */
function Menu()
{
    let text = " ";
    text += " Saisir l'action a realiser : \n"
    text+="1 : Addition des n premier nombres \n"
    text+="2 : multiplication des n premiers nombres \n"
    text+="3 : Quitter\n";
    console.log(text);
}

/**
 *
 * Addition  n premier nombres
 */
function Addition()
{
    let nbre = read.questionInt("Combien de nombre ?")
    let total = 0;
     for (let index = 1; index <=nbre; index++)
     {
         total+=index;
         console.log("step :"+index+" total :"+total+"\n")

     }
}

/**
 *  Multiplication n premier nombre 
 */

 function Multiplication()
 {
    let nbre = read.questionInt("Combien de nombre ?")
    let total =1
    for (let index =1; index <=nbre; index++) {
        total*=index
        console.log("step :"+index+" total :"+total+"\n")
    }
    
 }

 /**
  * Definit le choix  de l'utilisateur 
  * @param {*} key 
  */
  function choix(key)
  {
    switch (key) {
        case 1:
            Addition();
            break;
        case 2:
            Multiplication();
    
        default:
            console.log("Que voulez-vous dire")
            break;
    }
  }