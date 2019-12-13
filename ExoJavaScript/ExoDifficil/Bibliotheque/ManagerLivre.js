var read = require("readline-sync");
let livres= require("./Json/Livre.json");
let fs = require("fs")
let typelivres= require("./Json/TypeLivre.json");
let managerlivre={
    afficherLivres:function() {
        //console.log("afficher une liste de livre !");
        for(let livre in livres)
        {
            let idliv =livre.substr(-1,1);
            console.log(idliv+"/"+this.afficheLivre(livres[livre]));
        }
    },
    afficheLivre: function(livre) {
        return("titre :"+livre.titre+"\n"+" annee : "+livre.annee+"\n"+ " type :"+ typelivres[livre.typeLivre])
    },
    ajouterLivre: function() {
        let unlivre={};
        unlivre.titre = read.question("saisir un titre !");
        unlivre.anne= read.questionInt("saisir une annee !");
        unlivre.resume = read.question("saisir un resume !");
        this.afficheType();
        unlivre.type = read.question("le type de film !");
         livres.i++;
         livres["livre"+livres.i]= unlivre;
         fs.writeFileSync("./Json/Livre.json",JSON.stringify(livres)) // voir les parametres sur Json.stringify
    },
    afficheType : function () {
        for(let type in typelivres)
        {
            let idType = type.substr(0,1);
            //console.log(idType)
            console.log(idType+"/"+typelivres[type])
        }
    },
    supprimerLivre: function() {
        let  numLivre = read.question("quel est le numero du livre à supprimer ?")
        delete livres["livre"+numLivre]
        fs.writeFileSync("./Json/Livre.json",JSON.stringify(livres)) // voir les parametres sur Json.stringify
    },
    modifierLivre:function() {
        let numLivre = read.question("quel est le numero du livre à modifier ?");
        
        
    },
    convertirJson: function() {

      let myPersonne= {
          nom:"diallo",
          prenom:"abdou",
          age:35,
          ville:"Valence",
          adresse:"2 allée réaumure 26000 Valence"
      }

       let myNewJson = JSON.stringify(myPersonne,"null",'\t')
      console.log(myNewJson);
   
    }

}

module.exports = managerlivre;