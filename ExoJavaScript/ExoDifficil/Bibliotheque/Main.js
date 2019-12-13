//=====Import Fichier=====
var read = require("readline-sync")
var managerLivre = require("./ManagerLivre")
let monchoix =-1

console.log("===Petite Bibliothèque===")
main()
//=========Developpement de l'aplication====
function main() {
    while(monchoix!=0)
    {
       afficheMenu();
        monchoix =parseInt(read.question("quel est votre choix?"));  
        switch (monchoix) {
            case 1:
               // managerLivre.afficherLivres();
                 managerLivre.convertirJson()
                break;
            case 2:
                managerLivre.ajouterLivre();
                break;
            case 3:
                managerLivre.modifierLivre();
                break;
            case 4:
                managerLivre.supprimerLivre();
                break;
            case 0:
                console.log("A Binetôt")
                break
            default:
                console.log("Veuillez recommencer")
                break;
         }
    }
}
    function afficheMenu() {
        let texte="";
        texte+="1: Afficher les livres"+"\n";
        texte+="2: Ajouter livre"+"\n"
        texte+="3: Modifier livre"+"\n";
        texte+="4: Supprimer livre"+"\n";
        texte+="0: Quitter"+"\n";
        console.log(texte);
    }