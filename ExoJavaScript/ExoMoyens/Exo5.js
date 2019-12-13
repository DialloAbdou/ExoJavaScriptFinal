
Ecole= {
        eleve1:{
            Nom:"Marc",
            Age:21,
            Notes :[12,15,13,10,7]
        },
        eleve2:{
            Nom:"Eric",
            Age:18,
            Notes :[5,15,3,9,7]
        },
     eleve3:{
            Nom:"Marie",
            Age:22,
            Notes :[10,10,11,12,11]
        },
    
    afficherEleve: function(eleve) {
            let text=" "
            text+="Nom: " +eleve.Nom+"\n"
            text+="Age : " +eleve.Age+"\n"
            text+="Notes : "+"\n"
            for (let index = 0; index < eleve.Notes.length; index++) {
                    text+= "Num " +index+'-'+eleve.Notes[index]+"\n"
                
            }
          console.log(text);
    },
    CalculerMoyenneEleve: function(eleve) {
        let total =0;
        let nbre = 0
        for(let index=0; index<eleve.Notes.length;index++)
        {
            total+=eleve.Notes[index];
            nbre+=1
        }
        return total/nbre;
    },
    afficherclasse: function (myclasse) {
     myclasse.afficherEleve(myclasse.eleve1)
      //console.log("\n"); 
    myclasse.afficherEleve(myclasse.eleve2)
      //console.log("\n");
     myclasse.afficherEleve(myclasse.eleve3)
    },
    calculMoyenneClasse: function(myclasse) {
       let totalfinal =0
       totalfinal+= myclasse.CalculerMoyenneEleve(Ecole.eleve1)   
       totalfinal+= myclasse.CalculerMoyenneEleve(Ecole.eleve2)   
       totalfinal+= myclasse.CalculerMoyenneEleve(Ecole.eleve3);
       return totalfinal/3
    }

}

Ecole.afficherclasse(Ecole)

let moyenne1= Ecole.CalculerMoyenneEleve(Ecole.eleve1)
console.log("la moyenne est de l'eleve : %s ",Ecole.eleve1.Nom+" "+moyenne1);

let moyennefinal = 0; 
moyennefinal = Ecole.calculMoyenneClasse(Ecole);
console.log("la moyenne est de la Classe est : "+moyennefinal);
