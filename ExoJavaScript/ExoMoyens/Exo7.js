let txtPseudo =document.querySelector("#pseudo");
 let txtChiffre= document.querySelector("#chiffre")
let divResultat = document.querySelector("#resultat");

let  btnAddition = document.querySelector("#addition");
let  btnFactorielle = document.querySelector("#factorielle");
let erreurChiffre ="";
let erreurCaractere ="";
//=================Evenement Dom===========================
/**
 * ===Affichage des Données===
 * @param {*} calcul 
 */
function affichageCalcul(calcul) {
   
   divResultat.innerHTML ="<h1>"+"Bonjour"+txtPseudo.value+"</h2>"
   divResultat.innerHTML=" <p>"+"Le résultat de calcul demandé est : "+calcul+"</p>"
   
}

//============Bouton addition affichage========

txtPseudo.addEventListener("blur",function() {
      let regex= /[A-za-z]/
     if(!txtPseudo.value.match(regex))
      {
          erreurCaractere+="<li>être caractères</li>"
      } 
      if(txtPseudo.value.length < 5)
      {
          erreurCaractere+="<li> est très court</li>";
      } else if(txtPseudo.value.length >10)
      {
          erreurCaractere+="<li> être très long</li>";
      }
      if(erreurCaractere!="")
      {
        divResultat.innerHTML="le Pseudo doit :"+"<ul>"+erreurCaractere+"</ul>"
      } 
});
//=============Bouton Addition =================
btnAddition.addEventListener("click",function (){
   let resultat = calculManagere.calculAddition(parseInt(txtChiffre.value))
   affichageCalcul(resultat);
});

//=================== bouton Factorielle=====

btnFactorielle.addEventListener("click",function() {
     let resultats = calculManagere.calculFactorielle(parseInt(txtChiffre.value))
      affichageCalcul(resultats);
});

