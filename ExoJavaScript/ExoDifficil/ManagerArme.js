var  read = require("readline-sync")
var armes = require("./jsons/arme.json");
var types = require("./jsons/type.json");
var fs = require("fs");
let managerArme={
    afficherArmes : function(){
        for(var arme in armes){
            if(arme.substr(0,4) === "arme"){
                var idArme = arme.substr(-1,1);
                console.log(idArme + " : " +this.afficherArme(armes[arme]));
            }
        }
    },
    afficherArme : function(arme){
        return ("Nom : " + arme.nom + " - Type : " + types[arme.type]);
    },
    ajouterArme: function() {
        // =====Ajout Armes======
        let nouveauArmes={}
        nouveauArmes.nom = read.question("donner le nom de l'arme"); // nom du nouvelle arme
        this.afficherType();
        nouveauArmes.type = read.questionInt("donner le type ");
        armes.increment++;
        armes["arme"+armes.increment] = nouveauArmes;
        fs.writeFileSync("./jsons/arme.json",JSON.stringify(armes,undefined,4))
       // console.log("ajouter une arme")
    },
    supprimerArme:function() {
        let supArme=parseInt(read.question("numero dArme à supprimer "));
        delete armes["arme"+supArme];
        fs.writeFileSync("./jsons/arme.json",JSON.stringify(armes));
    },
    afficherType: function () {
        for(let type in types){
            let idType = type.substr(-1,1);
            console.log("numero :"+idType+" "+types[type]);
        }
    }, 

}

module.exports = managerArme;
