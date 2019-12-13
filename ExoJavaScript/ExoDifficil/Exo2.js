var read = require("readline-sync")

var managerArme = require("./ManagerArme")
let monchoix =-1;
while(monchoix)
{
    Menu();
    monchoix =  read.questionInt("quelle est votre choix ?")
   switch (monchoix) {
       case 1:
          // console.log("afficher une arme!")
         managerArme.afficherArmes()
           break;
       case 2:
        managerArme.ajouterArme()
       break;
       case 3:
            managerArme.supprimerArme();
           break;
       case 0:
           console.log("Quitter une arme ")
         break;
   
       default:
               console.log("erreur de Choix ")
   
        break;
   }
   
}

//=========== Developpement d'application==========
function Menu() {
    console.log("====Gestion D'armes====");
    let text=""
    text+=" 1/ Afficher les armes \n"
    text+=" 2/ Ajouter une arme \n" 
    text+=" 3/ Supprimer une armes \n"
    text+=" 0/ Quitter";
    console.log(text);
}

